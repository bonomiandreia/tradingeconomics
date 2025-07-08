<template>
  <div>
    <h1>Credit Ratings for Sweden</h1>

    <div v-if="pending">
      Loading...
    </div>

    <div v-else-if="error">
      <p>Sorry, something went wrong:</p>
      <pre>{{ error.message }}</pre>
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
            <td>{{ new Date(rating.Date).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CreditRating } from '~/types/creditRating';


const { data: ratings, pending, error } = await useFetch('/api/creditRating', {
  query: { country: 'sweden' },
  transform: (data): CreditRating[] => {

    return data as CreditRating[]
  }
})
</script>

<style scoped>

</style>