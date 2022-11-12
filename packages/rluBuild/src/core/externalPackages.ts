/*
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:54:07
 * @LastEditTime: 2022-11-13 00:35:50
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/core/externalPackages.ts
 */

import { Plugin } from 'rollup'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'

const externalPackages = ['']

export class ExternalPackages extends ConfigImpl {

    private helper: PluginHelper = new PluginHelper()

    getConfig(): Plugin {
        return {
            name: this.helper.plugInNamePrefix('externalPackages'),
        }
    }
}