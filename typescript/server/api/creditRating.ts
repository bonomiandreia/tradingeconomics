
import { CreditRating } from "~/types/creditRating"
import { apiFetch as api } from "../utils/apiKey"


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const country = query.country || 'sweden'

  try {
    // const ratings = await api<CreditRating[]>(`/credit-ratings/country/${country}`)
    const ratings: any = [];

    return ratings
  } catch (error: any) {
    console.error(`Error fetching credit ratings for ${country}:`, error);

    setResponseStatus(event, error.status)
    return {
      error: 'Failed to fetch credit ratings.',
      details: error.message,
    }
  }
})