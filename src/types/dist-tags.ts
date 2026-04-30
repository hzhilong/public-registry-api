/**
 * 发行版标签信息
 * @description 将发行版标签映射到版本号，每个软件包都会定义一个最新版本标签 latest
 */
export interface DistTags {
  /** 最新版本的标签 */
  latest: string

  /**
   * 其他版本的标签
   */
  [tag: string]: string
}
