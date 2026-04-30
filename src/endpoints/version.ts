import { registryFetch } from '../client/client.js'
import type { NpmPackageVersion } from '../types/version.js'

/**
 * 获取包的某个版本的元数据
 */
export async function getPackageVersion(name: string, version: string) {
  return await registryFetch<NpmPackageVersion>(`${encodeURIComponent(name)}/${version}`)
}
