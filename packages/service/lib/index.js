"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminationResult = exports.SynchronizationAwaitError = exports.Cache = exports.ExpirationTime = exports.Cancel = exports.cancelHeader = exports.requestCancellationHepler = exports.Service = exports.Desc = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:55:32
 * @LastEditTime: 2022-08-21 15:36:10
 * @Description:
 * @FilePath: /repo/packages/service/src/index.ts
 */
const create_1 = require("./core/create");
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return create_1.Service; } });
const cache_1 = require("./plugins/cache/cache");
Object.defineProperty(exports, "Cache", { enumerable: true, get: function () { return cache_1.Cache; } });
const utils_1 = require("./plugins/cache/utils");
Object.defineProperty(exports, "ExpirationTime", { enumerable: true, get: function () { return utils_1.ExpirationTime; } });
const cancel_1 = require("./plugins/cancel/cancel");
Object.defineProperty(exports, "Cancel", { enumerable: true, get: function () { return cancel_1.Cancel; } });
const config_1 = require("./plugins/cancel/config");
Object.defineProperty(exports, "cancelHeader", { enumerable: true, get: function () { return config_1.cancelHeader; } });
const desc_1 = require("./plugins/desc/desc");
Object.defineProperty(exports, "Desc", { enumerable: true, get: function () { return desc_1.Desc; } });
const cancel_2 = require("./utils/cancel");
Object.defineProperty(exports, "requestCancellationHepler", { enumerable: true, get: function () { return cancel_2.requestCancellationHepler; } });
const error_1 = require("./utils/error");
Object.defineProperty(exports, "SynchronizationAwaitError", { enumerable: true, get: function () { return error_1.SynchronizationAwaitError; } });
const terminationResult_1 = require("./utils/terminationResult");
Object.defineProperty(exports, "TerminationResult", { enumerable: true, get: function () { return terminationResult_1.TerminationResult; } });
