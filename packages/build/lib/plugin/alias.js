"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-14 21:56:23
 * @LastEditTime: 2022-06-12 21:12:11
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/alias.ts
 */
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const path_1 = require("path");
class Alias {
    constructor() {
        this.config = {};
    }
    pwd(path) {
        return (0, path_1.resolve)(process.cwd(), '.', path) + '/';
    }
    analysis(obj) {
        const h = {};
        for (const key in obj) {
            h[key] = this.pwd(obj[key]);
        }
        const config = {
            resolve: {
                alias: Object.assign({ '~/': this.pwd('src') }, h),
            },
        };
        this.config = config;
        return this;
    }
    getConfig(userConfig) {
        const result = (0, lodash_defaultsdeep_1.default)(userConfig, this.config);
        return result;
    }
}
exports.Alias = Alias;
