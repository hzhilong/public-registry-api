/**
 * 全文查询条件构建
 * @description 注意【整个 text 参数总长度限制 2～64 字符】
 */
export class SearchText {
  private parts: string[] = []

  static create() {
    return new SearchText()
  }

  /** 普通关键词 */
  text(text: string) {
    this.parts.push(text)
    return this
  }

  /** 筛选作者 */
  author(author: string) {
    this.parts.push(`author:${author}`)
    return this
  }

  /** 筛选维护者 */
  maintainer(maintainer: string) {
    this.parts.push(`maintainer:${maintainer}`)
    return this
  }

  /** 筛选组织 */
  scope(scope: string) {
    this.parts.push(`scope:${scope}`)
    return this
  }

  /** 筛选关键词 */
  keywords(and: string[], or: string[] = [], exclude?: string[]) {
    const parts: string[] = []

    if (and.length > 0) {
      parts.push(and.join('+'))
    }

    if (or.length > 0) {
      parts.push(...or)
    }

    if (exclude?.length) {
      parts.push(...exclude.map((item) => `-${item}`))
    }

    if (parts.length === 0) return this

    this.parts.push(`keywords:${parts.join(',')}`)
    return this
  }

  /** 排除版本为< 1.0.0 */
  notUnstable() {
    this.parts.push('not:unstable')
    return this
  }

  /** 筛选版本< 1.0.0 */
  isUnstable() {
    this.parts.push('is:unstable')
    return this
  }

  /** 排除不安全或存在易受攻击依赖项的软件包 */
  notInsecure() {
    this.parts.push('not:insecure')
    return this
  }

  /** 筛选不安全或存在易受攻击依赖项的软件包 */
  isInsecure() {
    this.parts.push(`is:insecure`)
    return this
  }

  /** 是否提升精确匹配的权重，默认设置为true */
  boostExact(enabled: boolean) {
    this.parts.push(`boost-exact:${enabled}`)
    return this
  }

  toString() {
    const text = this.parts.join(' ').trim()
    if (text.length < 2 || text.length > 64) {
      throw new Error("The 'text' parameter must be between 2 and 64 characters")
    }
    return text
  }
}
