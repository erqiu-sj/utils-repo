/*
 * @Author: 邱狮杰
 * @Date: 2022-06-17 10:13:36
 * @LastEditTime: 2022-06-18 11:54:44
 * @Description: 多版本切换
 * @FilePath: /repo/packages/service/src/core/multiVersionSwitching.ts
 */

export class MultiVersionSwitching {
  private versionPlaceholder: string = ''

  private baseURL: string = ''

  private originalBaseURL: string = ''

  // 修改版本号占位符
  setVersionPlaceholder(pl: string) {
    this.versionPlaceholder = pl
    return this
  }

  setBaseURL(URL: string) {
    this.baseURL = URL
    this.originalBaseURL = URL
  }

  replaceVersionPlaceholder(baseURL: string, repl: string) {
    return baseURL.replace(new RegExp(this.versionPlaceholder, 'g'), repl)
  }

  getOriginalBaseURL() {
    return this.originalBaseURL
  }

  switchVersion(item: string): string {
    this.baseURL = this.replaceVersionPlaceholder(this.baseURL, item)
    return this.baseURL
  }
}
