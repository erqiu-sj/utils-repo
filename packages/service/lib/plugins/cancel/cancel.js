"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 17:56:58
 * @LastEditTime: 2022-08-21 13:31:58
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cancel/cancel.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancel = void 0;
const cancel_1 = require("../../utils/cancel");
const decorator_1 = require("../../utils/decorator");
const config_1 = require("./config");
class Cancel {
    requestFailInterceptor(err) { }
    responseFailInterceptor(err) { }
    requestSuccessInterceptor(config) {
        var _a;
        const rule = ((_a = config.cancellationRules) === null || _a === void 0 ? void 0 : _a.call(config, config)) || (0, config_1.defaultRules)(config);
        if (rule && config_1.requestContainer.has(rule))
            (0, cancel_1.requestCancellationHepler)(config);
        else if (rule)
            config_1.requestContainer.set(rule, true);
    }
    responseSuccessInterceptor(response) {
        var _a, _b;
        // @ts-ignore
        const rule = ((_b = (_a = response.config) === null || _a === void 0 ? void 0 : _a['cancellationRules']) === null || _b === void 0 ? void 0 : _b.call(_a, response.config)) || (0, config_1.defaultRules)(response.config);
        if (rule && config_1.requestContainer.has(rule))
            config_1.requestContainer.delete(rule);
    }
}
__decorate([
    (0, decorator_1.allowExecution)(config => Reflect.get(config.headers || {}, 'cancelHeader') === config_1.cancelHeader)
], Cancel.prototype, "requestSuccessInterceptor", null);
__decorate([
    (0, decorator_1.allowExecution)(config => {
        var _a;
        return Reflect.get(((_a = config === null || config === void 0 ? void 0 : config.config) === null || _a === void 0 ? void 0 : _a.headers) || {}, 'cancelHeader') === config_1.cancelHeader;
    })
], Cancel.prototype, "responseSuccessInterceptor", null);
exports.Cancel = Cancel;
