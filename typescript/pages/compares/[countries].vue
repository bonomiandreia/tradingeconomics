<template>
    <div class="px-4 sm:px-6 mt-5">
      <div class="mx-auto max-w-screen-xl">
        <h1 class="h2-title-trading-economic flex">
          Compare countries
          <div class="has-tooltip text-2xl flex">
            <span class='tooltip rounded text-sm shadow-lg p-1 bg-grey50 -mt-8'>Maximum 3 countries</span>
            <Icon class="relative bottom-1 text-sm text-center ml-2 text-grey500" name="i-garden:info-stroke-16"/>
          </div>
        </h1>
  
        <div class="text-center" v-if="error"  data-aos="fade-up">
          Ops! something went wrong. {{ error.message }}
        </div>
  
        <div class="text-center" v-if="ratingsByCountry?.length == 0"  data-aos="fade-up">
          Ops! It doesn't have data yet. Try again later
        </div>

        <div class="text-center" v-if="!pending && !hasEnoughCountries" data-aos="fade-up">
            Please add countries to the URL to compare, e.g., /compare/mexico,sweden,New Zealand,thailand
        </div>
  
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4" v-if="!pending && hasEnoughCountries">
            <CountryCard 
              v-for="item in ratingsByCountry"
              :key="item.Country"
              :country-data="item"
            />
        </div>
        <div class="mt-5">
            <h1 class="h2-title-trading-economic flex">
                Current Account Balance by country (BoP, US$)
            </h1>
        </div>
        <ChartBalance :countries="mockCountries" :symbols-query="mockQuery"></ChartBalance>
      </div>
      <Snackbar
        v-model:show="snackBar.show"
        :message="snackBar.message"
        :type="snackBar.type"
      />
    </div>
  </template>
  
  <script setup lang="ts">
    import type { CreditRating, GroupedCountryRating } from '~/types/creditRating';
    import type { WorldBankIndicator } from '~/types/wordBankBalance';
  
  definePageMeta({
    layout: "default",
  });
  const route = useRoute();
  const mockQuery = ref('MEX.BN.CAB.XOKA.CD,NZL.BN.CAB.XOKA.CD,SWE.BN.CAB.XOKA.CD,THA.BN.CAB.XOKA.CD');
  const mockCountries =  ref([ { "country": "Mexico", "symbol": "MEX.BN.CAB.XOKA.CD" }, { "country": "New Zealand", "symbol": "NZL.BN.CAB.XOKA.CD" }, { "country": "Sweden", "symbol": "SWE.BN.CAB.XOKA.CD" }, { "country": "Thailand", "symbol": "THA.BN.CAB.XOKA.CD" } ])

  const snackBar = ref({
    show: false,
    message: '',
    type: 'success' as 'success' | 'warning' | 'error',
  });

    const countriesQuery = computed(() => {
        if (route.params.countries) {
            return route.params.countries;
        }

        return ''; 
    });

    const hasEnoughCountries = computed(() => {
        const countriesParam = route.params.countries as string | undefined;
        return countriesParam ? countriesParam.split(',').length >= 2 : false;
    });


    const { data: allCountriesData, pending: listPending, error: listError } = useAsyncData<WorldBankIndicator[]>(
        'fullWordBankBalanceList',
        () => $fetch('/api/wordBankBalanceList')
    );

    const filteredCountriesData = computed(() => {

        if (!allCountriesData.value || !countriesQuery.value) {
            return [];
        }


        const countryList: string[] = Array.isArray(countriesQuery.value)
            ? countriesQuery.value
            : countriesQuery.value.split(',');

        const targetCountries = countryList.map(country => country.trim().toLowerCase());


        return allCountriesData.value.filter(item => {
            return targetCountries.includes(item.country.toLowerCase());
        });
    });

    const balanceSymbols = computed(() => {
        const symbols = filteredCountriesData.value.map(item => item.symbol);
        return symbols.join(',');
    });

    const selectedCountryDetails = computed(() => {
        return filteredCountriesData.value.map(item => ({
            country: item.country,
            symbol: item.symbol
        }));
    });
  
  const { data: ratingsByCountry, pending, error } = useFetch('/api/creditRating', {
    key: 'creditRatingsByCountry',
    query: { country: countriesQuery },
    transform: (data: GroupedCountryRating[]): GroupedCountryRating[] => {
      if (!Array.isArray(data)) {
        return []; 
      }
  
      const grouped = groupedDataByCountries(data);

      return Object.keys(grouped).map(countryName => {
        const countryCode = countryName.toLowerCase().replace(/ /g, '-');
        const iconName = `i-emojione:flag-for-${countryCode}`;
  
        return {
          Country: countryName,
          Icon: iconName,
          Ratings: grouped[countryName]
        };
      });
  
    }
  });

  const groupedDataByCountries = (data: GroupedCountryRating[]) => {
    return data.reduce((accumulator, rating) => {
        const countryName = rating.Country; 
        
        if (!accumulator[countryName]) {
          accumulator[countryName] = [];
        }
        
        accumulator[countryName]!.push(rating as unknown as CreditRating);
        
        return accumulator;
      }, {} as Record<string, CreditRating[]>);
  }
  
  onMounted(() => {
    watch(error, (newError) => {
      if (newError) {
        snackBar.value.show = true;
        snackBar.value.message = newError.message || 'An unexpected error occurred.';
        snackBar.value.type = 'error';
      }
    }, { immediate: true });
  });
  </script>
  
  
  <style scoped>
  
  </style>