"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scenes = void 0;
const base_1 = require("../vue/base");
const base_2 = require("../react/base");
class Scenes {
    setScenes(type) {
        this.scenes = type;
        return this;
    }
    // 设置技术栈
    setTechnologyStack(type, ops) {
        if (type === 'react')
            this.defaultScene = new base_2.ScenarioExpectationsForReact(ops);
        if (type === 'vue')
            this.defaultScene = new base_1.ScenarioExpectationsForVue(ops);
        return this;
    }
    verifyScenesThrow() {
        if (!this.scenes)
            throw new Error('not set scenes');
        if (!this.defaultScene)
            throw new Error('not set technology stack');
    }
    // 默认值
    combine() {
        var _a, _b;
        this.verifyScenesThrow();
        return (_b = (_a = this.defaultScene) === null || _a === void 0 ? void 0 : _a.setScene) === null || _b === void 0 ? void 0 : _b.call(_a, this.scenes);
    }
}
exports.Scenes = Scenes;
