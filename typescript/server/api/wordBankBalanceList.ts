import { apiFetch as api } from "../utils/apiKey"
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default defineEventHandler(async (event) => {
  await sleep(5000);
  try {
    const countriesList = await api<any[]>(`/worldbank/indicator?s=bn.cab.xoka.cd`)
    // const countriesList: any = [];
    return countriesList
  } catch (error: any) {
    setResponseStatus(event, error.status)
    return {
      error: 'Failed to fetch word bank list countries',
      details: error.message,
    }
  }
})
