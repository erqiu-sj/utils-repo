"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteConfiguration = void 0;
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const scenes_1 = require("./scenes");
class ViteConfiguration {
    constructor(config) {
        this.config = {};
        this.scenes = new scenes_1.Scenes();
        this.config = config || {};
    }
    setScenes(type) {
        this.scenes.setScenes(type);
        return this;
    }
    setTechnologyStack(type, ops) {
        this.scenes.setTechnologyStack(type, ops);
        (0, lodash_defaultsdeep_1.default)(this.config, this.scenes.combine().getConfig());
        return this;
    }
    getConfig(config) {
        (0, lodash_defaultsdeep_1.default)(this.config, config);
        return this.config;
    }
}
exports.ViteConfiguration = ViteConfiguration;
