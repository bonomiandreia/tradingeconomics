// server/utils/apiKey.ts

import { ofetch } from 'ofetch'

const config = useRuntimeConfig()

const apiBaseUrl = config.apiBaseUrl as string;
const apiKey = config.apiKey as string;


if (!apiBaseUrl) {
  throw new Error('API base URL is not configured. Please set NUXT_PUBLIC_API_BASE_URL in your .env file.');
}
if (!apiKey) {
  throw new Error('API key is not configured. Please set NUXT_API_KEY in your .env file.');
}

export const apiFetch = ofetch.create({
  baseURL: apiBaseUrl,

  onRequest({ options }) {
    options.query = { 
      ...options.query, 
      c: apiKey
    }
  },

  onResponseError({ request, response, options }) {
    console.error(
      '[fetch response error]',
      request,
      response.status,
      response.body
    )
  }
})