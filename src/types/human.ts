/**
 * 人员信息（至少包含：作者 / 发布者 / 维护者）
 */
export interface Human {
  /** 名称 */
  name?: string

  /** 邮箱 */
  email?: string

  /** 主页 */
  url?: string
}
