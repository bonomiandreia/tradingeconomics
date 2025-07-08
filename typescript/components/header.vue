<template>
  <header class="bg-grey900 w-full h-[65px] flex items-center px-4 sm:px-6">
    <div class="w-full max-w-screen-xl mx-auto flex items-center sm:justify-between">
      <a href="/" class="flex-shrink-0">
        <img class="h-10 w-auto" :src="Logo" alt="TE logo" />
      </a>
      <div class="
          flex flex-1 items-center justify-between gap-3
          sm:flex-none sm:justify-start sm:gap-4
        ">
        <div class="flex flex-1 justify-center sm:flex-none">
          <div class="relative items-center">
            <input type="text" class="
              bg-grey600 text-white rounded-full h-10 pl-4 pr-12
              focus:outline-none focus:ring-2 focus:ring-gray-100
              w-40 xs:w-48 sm:w-56 lg:w-80
            " />
            <div class="absolute inset-y-0 right-1 flex items-center">
              <button class="
                  flex items-center justify-center bg-grey300
                  hover:bg-gray-500 w-8 h-8 rounded-full text-2xl
                ">
                <Icon name="i-material-symbols-light:search-insights-rounded" />
              </button>
            </div>
          </div>
        </div>

        <button class="
            bg-grey200 w-8 h-8 rounded-full flex items-center
            justify-center text-grey900 flex-shrink-0 text-2xl
          ">
          <Icon name="i-material-symbols:person-rounded" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Logo from '../public/imgs/logo-te.png';

</script>