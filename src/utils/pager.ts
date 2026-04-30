import type { NpmSearchParams, PageResult, SearchPagerParams } from '../types/search.js'
import { searchPackages } from '../endpoints/search.js'

/**
 * 搜索结果的分页器
 */
export class SearchPager {
  private readonly otherParams: Omit<NpmSearchParams, 'from' | 'size'>
  private pageSize: number
  private pageNum: number

  constructor(pagerParams: SearchPagerParams) {
    const { pageNum, pageSize, ...reset } = pagerParams
    this.pageNum = pageNum ?? 1
    this.pageSize = pageSize ?? 20
    this.otherParams = reset
  }

  async updatePageSize(pageSize: number, pageNum: number = 1) {
    this.pageSize = pageSize
    this.pageNum = pageNum
  }

  /**
   * 获取下一页的数据
   */
  async fetchNext() {
    const result = await searchPackages({
      ...this.otherParams,
      size: this.pageSize,
      from: (this.pageNum - 1) * this.pageSize,
    })

    const pageResult: PageResult = {
      total: result.total,
      totalPage: Math.ceil(result.total / this.pageSize),
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      items: result.objects,
    }

    this.pageNum++
    return pageResult
  }
}
