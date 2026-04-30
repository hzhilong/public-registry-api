import type { UtcDateTimeString } from './time.js'
import type { NpmPackageVersion } from './version.js'

/**
 * npm registry 搜索 API 的查询参数
 * @see https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md#get-v1search
 */
export interface NpmSearchParams {
  /**
   * 全文搜索关键字
   */
  text?: string

  /**
   * 返回的结果数量（默认 20，最大 250）
   */
  size?: number

  /**
   * 返回结果的偏移量（用于分页）
   */
  from?: number

  /**
   * 质量权重对搜索结果的影响程度（规范、完整度、健康度等）
   */
  quality?: number

  /**
   * 流行度权重对搜索结果的影响程度（下载量、使用量）
   */
  popularity?: number

  /**
   * 维护性权重对搜索结果的影响程度（更新频率、活跃度）
   */
  maintenance?: number
}

/**
 * npm registry 搜索 API 的结果
 * @see https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md#get-v1search
 */
export interface NpmSearchResult {
  total: number
  time: string
  objects: NpmSearchResultItem[]
}

/**
 * npm registry 搜索 API 的结果列表项目
 */
export interface NpmSearchResultItem {
  package: SearchResultPackage
  score: {
    /** 最终综合评分 */
    final: number
    /** 评分详情 */
    detail: {
      /** 质量评分 */
      quality: number
      /** 流行度评分 */
      popularity: number
      /** 维护情况评分 */
      maintenance: number
    }
  }
  /** 搜索得分，用于排序 */
  searchScore: number
  /** 下载量 */
  downloads: {
    monthly: number
    weekly: number
  }
}

/**
 * 搜索结果中的包信息
 */
export type SearchResultPackage = Pick<NpmPackageVersion, 'name' | 'version' | 'description' | 'keywords'> & {
  /** 发布时间 */
  date: UtcDateTimeString
  /** 相关链接 */
  links: {
    /** npm 页面链接 */
    npm: string
    /** 包的主页 */
    homepage?: string
    /** 仓库地址 */
    repository?: string
    /** 问题反馈页面 */
    bugs?: string
  }
  /** 发布者信息 */
  publisher: {
    username: string
    email: string
  }
  /** 维护者列表 */
  maintainers: Array<{
    username: string
    email: string
  }>
}

/**
 * 搜索分页器的参数
 */
export type SearchPagerParams = Omit<NpmSearchParams, 'from' | 'size'> & {
  pageNum?: number
  pageSize?: number
}

/**
 * 分页获取的结果
 */
export interface PageResult {
  pageNum: number
  pageSize: number
  total: number
  totalPage: number
  items: NpmSearchResultItem[]
}
