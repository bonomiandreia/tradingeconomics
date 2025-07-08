<template>
  <div>
    <h1>Credit Ratings for Sweden</h1>

    <div v-if="pending">
      Loading...
    </div>

    <div v-else-if="error">
      <p>Could not load credit ratings. Please try again later.</p>
    </div>

    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Agency</th>
            <th>Rating</th>
            <th>Outlook</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rating, index) in ratings" :key="index">
            <td>{{ rating.Agency }}</td>
            <td>{{ rating.Rating }}</td>
            <td>{{ rating.Outlook }}</td>
            <td>{{ rating.Date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Snackbar
      v-model:show="snackBar.show"
      :message="snackBar.message"
      :type="snackBar.type"
    />
  </div>
</template>

<script setup lang="ts">
import type { CreditRating } from '~/types/creditRating';

const snackBar = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'warning' | 'error',
});

const { data: ratings, pending, error } = useFetch('/api/creditRating', {
  query: { country: 'sweden' },
  transform: (data): CreditRating[] => {
    return data as CreditRating[];
  }
});

watch(error, (newError) => {
  if (newError) {
    snackBar.value.show = true;
    snackBar.value.message = newError.message || 'An unexpected error occurred.';
    snackBar.value.type = 'error';
  }
});
</script>


<style scoped>

</style>