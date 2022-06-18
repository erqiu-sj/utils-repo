/*
 * @Author: 邱狮杰
 * @Date: 2022-06-16 16:51:22
 * @LastEditTime: 2022-06-16 17:03:40
 * @Description:  auto import api test
 * @FilePath: /repo/packages/build/__test__/autoImportApi.test.ts
 */
import { UserConfig } from 'vite';
import { expect, it } from "vitest";
import { ViteConfiguration } from "../src/index";



it('add auto import api', () => {
    const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().addAutoImport().getConfig() as UserConfig
    expect(config.plugins.at(-1)['name']).toBe('unplugin-auto-import')
    expect(config.plugins).toHaveLength(3)
})
