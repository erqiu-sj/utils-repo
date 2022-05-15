import { UserConfigExport } from 'vite'
import { resolve } from 'path'

export class Alias {
  config: UserConfigExport = {}

  private pwd(path: string) {
    return resolve(process.cwd(), '.', path) + '/'
  }

  analysis(obj?: { [key: string]: string }) {
    const h: { [key: string]: string } = {}
    for (const key in obj) {
      h[key] = this.pwd(obj[key])
    }
    const config: UserConfigExport = {
      resolve: {
        alias: { '~/': this.pwd('src'), ...h },
      },
    }
    this.config = config
    return this
  }

  getConfig(): UserConfigExport {
    return this.config
  }
}
