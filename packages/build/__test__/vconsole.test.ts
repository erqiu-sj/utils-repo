/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 20:00:17
 * @LastEditTime: 2022-06-12 20:56:05
 * @Description: test vconsole
 * @FilePath: /repo/packages/build/__test__/vconsole.test.ts
 */

import { UserConfig } from "vite";
import { expect, it } from "vitest";
import { ViteConfiguration } from '../src/index';

it('addVconsole', () => {
    const viteConfig = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().getConfig({
    }) as UserConfig;

    expect(viteConfig.plugins.at(-1)['name']).toBe('vite:vconsole')
    expect(viteConfig.plugins).toHaveLength(2)
})


