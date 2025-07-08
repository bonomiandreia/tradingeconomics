
<template>
  <Transition
    enter-active-class="transition-opacity ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >

    <div
      v-if="show"
      class="fixed inset-0 flex items-end justify-center p-4 z-50"
      @click.self="close"
    >
      <div
        id="toast-interactive"
        class="flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-xl dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div
          class="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg"
          :class="[typeStyles.iconBg, typeStyles.iconText]"
        >
          <Icon :name="typeStyles.icon"/>
        </div>
        <div class="ms-3 text-sm font-normal">
          {{ message }}
        </div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
          @click="close"
        >
          <Icon name="i-mi:close"/>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, watch, onUnmounted } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => 'success' | 'warning' | 'error',
    default: 'success',
    validator: (value: string) => ['success', 'warning', 'error'].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
})


const emit = defineEmits(['update:show'])

const typeStyles = computed(() => {
  switch (props.type) {
    case 'error':
      return {
        icon: 'i-mi-circle-error',
        iconBg: 'bg-red-100 dark:bg-red-800',
        iconText: 'text-red-500 dark:text-red-200',
      }
    case 'warning':
      return {
        icon: 'i-mi-warning',
        iconBg: 'bg-orange-100 dark:bg-orange-700',
        iconText: 'text-orange-500 dark:text-orange-200',
      }
    case 'success':
    default: 
      return {
        icon: 'i-mi-check',
        iconBg: 'bg-green-100 dark:bg-green-800',
        iconText: 'text-green-500 dark:text-green-200',
      }
  }
})

let timeoutId: ReturnType<typeof setTimeout> | null = null

function close() {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
  emit('update:show', false)
}

watch(() => props.show, (newValue) => {
  if (newValue) {
    timeoutId = setTimeout(() => {
      close()
    }, props.duration)
  }
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>