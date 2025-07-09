<template>
  <div class="border border-grey200 rounded-3xl h-[300px]">
    <div class="p-4">
      <div class="text-8xl has-tooltip" v-if="countryData.Icon">
        <span class='tooltip rounded text-sm shadow-lg p-1 bg-grey50 -mt-8'>{{ countryData.Country }}</span>
        <Icon :name="countryData.Icon"/>
      </div>

      <h3 class="h3-title-trading-economic">Credit rating</h3>
      <div class="mt-3">
        <div class="grid grid-cols-4" v-for="rating in countryData.Ratings" :key="rating.Agency">
          <div>{{ rating?.Agency }}</div>
          <div>{{ getYear(rating?.Date) }}</div>
          <div>{{ rating?.Rating }}</div>
          <div class="has-tooltip text-2xl">
            <span class='tooltip rounded text-sm shadow-lg p-1 bg-grey50 -mt-8'>Outlook: {{ rating?.Outlook }}</span>
            <Icon :name="getIconClass(rating?.Outlook)"/>
            <Icon class="relative bottom-2 text-sm text-center ml-2 text-grey500" name="i-garden:info-stroke-16"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GroupedCountryRating } from '~/types/creditRating';
import { OutlookIcon } from '~/types/creditRating';


const props = defineProps<{
  countryData: GroupedCountryRating;
  latestImport?: any;
  latestExport?: any;
}>();

const getYear = (dateString: string) => {
    if (!dateString) {
      return ''; 
    }
    return new Date(dateString).getFullYear();
  };

const getIconClass = (outlook?: string) => {
  if (!outlook) return '';
  const key = outlook.toLowerCase() as keyof typeof OutlookIcon;
  return OutlookIcon[key] || '';
}
</script>