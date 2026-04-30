import { registryFetch } from '../client/client.js'
import type { NpmPackage } from '../types/package.js'

/**
 * 获取包的完整元数据
 * @param name
 */
export async function getPackage(name: string): Promise<NpmPackage> {
  return await registryFetch<NpmPackage>(encodeURIComponent(name))
}
