<template>
  <div>
    <div v-if="pending">
      Loading data...
    </div>

    <div v-else-if="error">
      <p>Sorry, there was an error loading the data.</p>
      <pre>{{ error }}</pre>
    </div>


    <div v-else-if="historicalData">
      <pre>{{ processedData }}</pre>
    </div>


    <div v-else>
      No data available.
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { CountrySymbols, HistoricalDataItem } from '~/types/wordBankBalance';



const props = defineProps({

  countries: {
    type: Array as PropType<CountrySymbols[]>,
    required: true,
  },

  symbolsQuery: {
    type: String,
    required: true,
  },
});


const { data: historicalData, pending, error } = useFetch('/api/wordBankBalanceByCountry', {
  query: computed(() => ({
    countrySymbol: props.symbolsQuery,
  })),
  key: computed(() => `historicalData-${props.symbolsQuery}`),
});

const processedData = computed(() => {

  if (!historicalData.value || !props.countries) {
    return {};
  }


  const countrySymbolMap = new Map<string, string>();
  props.countries.forEach(country => {
    const kebabCaseName = country.country.toLowerCase().replace(/\s+/g, '-');
    countrySymbolMap.set(country.symbol.toLowerCase(), kebabCaseName);
  });


  return historicalData.value.reduce((acc: any, item: HistoricalDataItem ) => {

    const countryKey = countrySymbolMap.get(item.symbol.toLowerCase());


    if (countryKey) {
      if (!acc[countryKey]) {
        acc[countryKey] = [];
      }

      acc[countryKey].push(item);
    }
    

    return acc;
  }, {} as Record<string, HistoricalDataItem[]>); 
});


</script>

<style scoped>

</style>