import { apiFetch as api } from "../utils/apiKey"


export default defineEventHandler(async (event) => {

  try {
    //const countriesList = await api<any[]>(`/worldbank/indicator?s=bn.cab.xoka.cd`)
    const countriesList: any = [];
    return countriesList
  } catch (error: any) {
    setResponseStatus(event, error.status)
    return {
      error: 'Failed to fetch word bank list countries',
      details: error.message,
    }
  }
})
