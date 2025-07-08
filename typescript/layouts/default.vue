<template>
  <div class="flex flex-col min-h-screen bg-grey50 dark:bg-gray800">
    <Header/>
    <main class="flex-grow">
      <slot /> 
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>