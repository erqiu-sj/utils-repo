"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = void 0;
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
    getConfig() {
        return this.config;
    }
}
exports.Alias = Alias;
