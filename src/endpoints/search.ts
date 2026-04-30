import type { NpmSearchParams, NpmSearchResult } from '../types/search.js'
import { registryFetch } from '../client/client.js'

export async function searchPackages(params: NpmSearchParams) {
  const searchParams = (Object.keys(params) as Array<keyof NpmSearchParams>)
    .filter((key) => params[key] != null)
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key]!)}`
    })
    .join('&')
  return await registryFetch<NpmSearchResult>(`-/v1/search?${searchParams}`)
}
