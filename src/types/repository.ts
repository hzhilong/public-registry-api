/**
 * 仓库信息
 */
export interface Repository {
  /** git / svn 等 */
  type: string

  /** 仓库地址 */
  url: string
}
