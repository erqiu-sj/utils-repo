"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scenes = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:51:08
 * @LastEditTime: 2022-09-04 16:00:42
 * @Description:
 * @FilePath: /repo/packages/build/src/common/scenes.ts
 */
const base_1 = require("../react/base");
const base_2 = require("../vue/base");
class Scenes {
    setScenes(type) {
        this.scenes = type;
        return this;
    }
    // 设置技术栈
    setTechnologyStack(type, ops) {
        this.technologyStackTypes = type;
        if (type === 'react')
            this.defaultScene = new base_1.ScenarioExpectationsForReact(ops);
        if (type === 'vue')
            this.defaultScene = new base_2.ScenarioExpectationsForVue(ops);
        return this;
    }
    verifyScenesThrow() {
        if (!this.scenes)
            throw new Error('not set scenes');
        if (!this.defaultScene)
            throw new Error('not set technology stack');
    }
    getTechnologyStackTypes() {
        return this.technologyStackTypes;
    }
    // 默认值
    combine() {
        var _a, _b;
        this.verifyScenesThrow();
        return (_b = (_a = this.defaultScene) === null || _a === void 0 ? void 0 : _a.setScene) === null || _b === void 0 ? void 0 : _b.call(_a, this.scenes);
    }
}
exports.Scenes = Scenes;
