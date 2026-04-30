import type { PackageDistInfo } from './dist.js'
import type { Human } from './human.js'
import type { Repository } from './repository.js'
import type { PackageBugs } from './bugs.js'

/**
 * npm 包版本的元数据
 */
export interface NpmPackageVersion {
  /** 包名 */
  name: string

  /** 版本号 */
  version: string

  /** 此版本的弃用警告消息 */
  deprecated?: string

  /** 生产依赖 */
  dependencies?: Record<string, string>

  /** 当前包可以接受某些依赖包的多个版本范围，而不会被 npm 视为冲突 */
  acceptDependencies?: Record<string, string>

  /** 可选依赖项 */
  optionalDependencies?: Record<string, string>

  /** 开发依赖 */
  devDependencies?: Record<string, string>

  /** 捆绑依赖项（打包时一同发布的依赖包名列表） */
  bundleDependencies?: string[]

  /** 对等依赖项 */
  peerDependencies?: Record<string, string>

  /** 对等依赖的元信息，目前主要用于标记某个 peer 依赖为可选 */
  peerDependenciesMeta?: Record<string, { optional?: boolean }>

  /** bin 命令映射（可执行命令名 -> 对应脚本文件路径） */
  bin?: Record<string, string>

  /** 此版本包含的目录数组 */
  directories?: Record<string, string>

  /** 包发布产物信息 */
  dist: PackageDistInfo

  /** 运行此版本所需的节点引擎 */
  engines?: Record<string, string>

  /** 是否存在 npm-shrinkwrap.json */
  _hasShrinkwrap?: boolean

  /** 赞助信息（字符串、对象或数组） */
  funding?:
    | string
    | {
        url: string
      }
    | Array<
        | string
        | {
            url: string
          }
      >

  /** 软件包支持的 CPU 架构数组 */
  cpu?: string[]

  /** 软件包支持的操作系统数组 */
  os?: string[]

  /** 是否私有包 */
  private?: boolean

  /** module/commonjs */
  type?: 'module' | 'commonjs'

  /** 入口文件 */
  main?: string

  /** 描述 */
  description?: string

  /** 作者 */
  author?: Human

  /** 关键词 */
  keywords?: string[]

  /** 协议 */
  license?: string

  /** 仓库 */
  repository?: Repository

  /** issues */
  bugs?: PackageBugs

  /** 首页 */
  homepage?: string

  /** npm scripts */
  scripts?: Record<string, string>

  /** git commit hash */
  gitHead?: string

  /** 当前版本维护者 */
  maintainers?: Human[]

  /** 当前版本贡献者 */
  contributors?: Human[]

  /** 版本唯一 ID（name@version） */
  _id?: string

  /** 发布此版本的 npm 用于发布此内容的 Node 版本 */
  _nodeVersion?: Human

  /** 发布此版本的 npm 用户的作者对象 */
  _npmUser?: Human

  /** 用于发布此内容的 npm 客户端版本 */
  _npmVersion?: string

  /** 允许扩展字段 */
  [key: string]: unknown
}
