<template>
  <div class="px-4 sm:px-6 mt-5">
    <div class="mx-auto max-w-screen-xl">
      <h1 class="h1-title-trading-economic">Compare countries</h1>

      <div class="text-center" v-if="error">
        Ops! something went wrong. {{ error.message }}
      </div>

      <div class="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4" v-if="!pending">
        <div v-for="item in ratingsByCountry" class="border border-grey200 rounded-3xl h-[300px]"  data-aos="fade-up">
          <div class="p-4">
            <div class="text-8xl has-tooltip" v-if="item.Icon">
              <span class='tooltip rounded text-sm shadow-lg p-1 bg-grey50 -mt-8'>{{ item.Country }}</span>
              <Icon :name="item.Icon"/>
            </div>
            <h2 class="h2-title-trading-economic">Credit rating</h2>
            <div class="mt-3">
              <div class="grid grid-cols-4" v-for="ratings in item.Ratings">
                <div>{{ ratings?.Agency }}</div>
                <div>{{ ratings?.Date }}</div>
                <div>{{ ratings?.Rating }}</div>
                <div class="has-tooltip text-2xl">
                  <span class='tooltip rounded text-sm shadow-lg p-1 bg-grey50 -mt-8'>{{ ratings?.Outlook }}</span>
                  <Icon :name="getIconClass(ratings?.Outlook)"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import { OutlookIcon } from '~/types/creditRating';

definePageMeta({
  layout: "default",
});

const snackBar = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'warning' | 'error',
});

const getIconClass = (outlook: string) => {
  const key = outlook.toLowerCase() as keyof typeof OutlookIcon;
  return OutlookIcon[key] || ''; 
}

const { data: ratingsByCountry, pending, error } = useFetch('/api/creditRating', {
  key: 'creditRatingsByCountry',
  query: { country: 'mexico,sweden' },
  transform: (data: GroupedCountryRating[]): GroupedCountryRating[] => {
    if (!Array.isArray(data)) {
      return []; 
    }

    const grouped = data.reduce((accumulator, rating) => {
      const countryName = rating.Country; 
      
      if (!accumulator[countryName]) {
        accumulator[countryName] = [];
      }
      
      accumulator[countryName]!.push(rating as unknown as CreditRating);
      
      return accumulator;
    }, {} as Record<string, CreditRating[]>);


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