<template>
  <div>
    <Header></Header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
      layout: "default",
  });

</script>

<style>

</style>