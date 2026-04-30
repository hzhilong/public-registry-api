const BASE_URL = 'https://registry.npmjs.org/'

export async function registryFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`注册表请求失败 ${response.status} ${response.statusText}`)
  }

  return (await response.json()) as T
}
