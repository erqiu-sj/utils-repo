"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:15:41
 * @LastEditTime: 2022-08-01 14:39:15
 * @Description:
 * @FilePath: /repo/packages/taro/src/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudio = exports.Storeage = exports.SimpleRouteJump = exports.getCurRouter = exports.getWxLoginCode = exports.getAppId = exports.ChainCall = void 0;
var chainCall_1 = require("./utils/chainCall");
Object.defineProperty(exports, "ChainCall", { enumerable: true, get: function () { return chainCall_1.ChainCall; } });
var getAppMetadata_1 = require("./utils/getAppMetadata");
Object.defineProperty(exports, "getAppId", { enumerable: true, get: function () { return getAppMetadata_1.getAppId; } });
Object.defineProperty(exports, "getWxLoginCode", { enumerable: true, get: function () { return getAppMetadata_1.getWxLoginCode; } });
var getCurRouter_1 = require("./utils/getCurRouter");
Object.defineProperty(exports, "getCurRouter", { enumerable: true, get: function () { return getCurRouter_1.getCurRouter; } });
var simpleRouteJump_1 = require("./utils/simpleRouteJump");
Object.defineProperty(exports, "SimpleRouteJump", { enumerable: true, get: function () { return simpleRouteJump_1.SimpleRouteJump; } });
var storeage_1 = require("./utils/storeage");
Object.defineProperty(exports, "Storeage", { enumerable: true, get: function () { return storeage_1.Storeage; } });
var useAudio_1 = require("./hooks/useAudio");
Object.defineProperty(exports, "useAudio", { enumerable: true, get: function () { return useAudio_1.useAudio; } });
