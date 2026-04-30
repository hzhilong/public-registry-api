import type { PackageTime } from './time.js'
import type { DistTags } from './dist-tags.js'
import type { NpmPackageVersion } from './version.js'

/**
 * NPM 包的完整元数据
 * @description npm Registry API（https://registry.npmjs.org/<packageName>）
 */
export type NpmPackage = Pick<
  NpmPackageVersion,
  | 'name'
  | 'author'
  | 'bugs'
  | 'contributors'
  | 'description'
  | 'homepage'
  | 'keywords'
  | 'license'
  | 'maintainers'
  | 'repository'
> & {
  /** 包名称，用作 CouchDB 中的 ID */
  _id: string

  /** 最新修订 ID */
  _rev: string

  /** 发行版标签信息 */
  'dist-tags': DistTags

  /**
   * 所有已发布版本
   * key = 版本号（如 1.0.0）
   */
  versions: Record<string, NpmPackageVersion>

  /**
   * 发布时间信息
   * 包含 created / modified / 各版本发布时间
   */
  time: PackageTime

  /** 软件包最新发布版本的 README 数据的前 64K 部分 */
  readme?: string

  /** 从中提取 readme 数据的文件名 */
  readmeFilename?: string

  /** 是否声明了安装相关脚本（如 preinstall/install/postinstall） */
  hasInstallScript?: boolean
}
