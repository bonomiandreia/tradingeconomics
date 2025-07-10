<template>
  <div>
    <button
      @click="callServiceCountries"
      class="group inline-flex items-center bg-grey700 text-grey50 p-2 mt-2"
    >
      <span class="text-center">
      {{ $t('components.chartBalance.loadChart') }}
      </span>
    </button>

      <div v-if="showChart" class="mt-5">
        <div v-if="pending">
          {{ $t('components.chartBalance.loading') }} 
        </div>

        <div v-else-if="error">
          {{ $t('components.chartBalance.sorry') }} 
        </div>

        
        <div v-else-if="historicalData">
          <ClientOnly>
            <VueApexCharts
              width="100%"
              height="500"
              type="line"
              :options="chartOptions"
              :series="chartSeries"
            ></VueApexCharts>
          </ClientOnly>

        </div>

        <div v-else>
          {{ $t('components.chartBalance.noData') }} 
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { CountrySymbols, HistoricalDataItem } from '~/types/wordBankBalance';
import type { ApexOptions } from 'apexcharts';
import VueApexCharts from 'vue3-apexcharts';
const { t } = useI18n();
const showChart = ref(false);

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


const { data: historicalData, pending, error, execute } = useFetch('/api/wordBankBalanceByCountry', {
  query: computed(() => ({
    countrySymbol: props.symbolsQuery,
  })),
  key: computed(() => `historicalData-${props.symbolsQuery}`),
  immediate: false, 
});

const callServiceCountries = () => {
  showChart.value = true;
  execute();
};

const processedDataListByCountry = computed(() => {

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

function formatBigNumber(num: number): string {
  if (num === null || num === undefined) return 'N/A';
  const sign = num < 0 ? '-' : '';
  const absNum = Math.abs(num);

  if (absNum >= 1e12) {
    return `${sign}${(absNum / 1e12).toFixed(2)}T`; 
  }
  if (absNum >= 1e9) {
    return `${sign}${(absNum / 1e9).toFixed(2)}B`; 
  }
  if (absNum >= 1e6) {
    return `${sign}${(absNum / 1e6).toFixed(2)}M`; 
  }
  if (absNum >= 1e3) {
    return `${sign}${(absNum / 1e3).toFixed(1)}K`;
  }
  return num.toString();
}


function capitalizeKebabCase(str: string): string {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const chartSeries = computed(() => {
  if (!processedDataListByCountry.value) {
    return [];
  }

  return Object.keys(processedDataListByCountry.value).map(countryName => {
    const dataPoints = processedDataListByCountry.value![countryName];

    return {
      name: capitalizeKebabCase(countryName),
      data: dataPoints.map((item: any) => [new Date(item.date).getTime(), item.value]),
    };
  });
});

const chartOptions = computed<ApexOptions>(() => ({
  chart: {
    type: 'line',
    height: 500,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  title: {
    text: '--',
    align: 'left'
  },
  tooltip: {
    theme: 'dark',
    x: {
      format: 'yyyy'
    },
    y: {
      title: {
        formatter: (seriesName: any) => `${seriesName}:`
      }
    }
  },

  xaxis: {
    type: 'datetime', 
    title: {
      text: 'Year'
    },
    labels: {
      formatter: (value: any, timestamp: any) => {
        if (timestamp) {
            return new Date(timestamp).getFullYear().toString();
        }
        return '';
      },
    }
  },
  yaxis: {
    title: {
      text: t('components.chartBalance.balance') 
    },
    labels: {
      formatter: (val: any) => formatBigNumber(val),
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -10,
  },
}));


</script>

<style scoped>

</style>