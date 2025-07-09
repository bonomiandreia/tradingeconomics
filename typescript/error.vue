<template>
    <NuxtLayout name="404">
      <div class="container mx-auto px-4 text-center w-full">
        <div class="mt-5">
          <div class="text-4xl">{{ $t('404.ops') }}</div>
            <button
                    @click="goBack"
                    class="group inline-flex items-center bg-grey700 text-grey50 p-2 mt-5"
                >
                <span class="text-center">
                {{ $t('404.backTo') }}
                </span>
            </button>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  const { t, locale } = useI18n()
  const router = useRouter();
  
  const goBack = () => {
    router.push(`compares/sweden,mexico`);
  };
  
</script>
  