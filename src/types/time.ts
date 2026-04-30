/** 符合 ISO 8601 标准的 UTC 日期时间格式。例如 "2025-09-22T09:34:11.066Z" */
export type UtcDateTimeString = string

/**
 * 发布时间信息
 * 包含 created / modified / 各版本发布时间
 */
export interface PackageTime {
  /** 首次创建时间 */
  created: UtcDateTimeString

  /** 最近修改时间 */
  modified: UtcDateTimeString

  /**
   * 各版本发布时间
   * key = 版本号
   */
  [version: string]: string
}
