"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desc = void 0;
const decorator_1 = require("../../utils/decorator");
class Desc {
    requestFailInterceptor(err) { }
    requestSuccessInterceptor(config) {
        if (typeof config.reqDesc === 'function') {
            // @ts-ignore
            console.log(config.reqDesc(config), ...config.reqDescOption);
            return config;
        }
        console.log(config.reqDesc, ...config.reqDescOption);
        return config;
    }
    responseFailInterceptor(err) { }
    responseSuccessInterceptor(response) {
        const resDescHandler = Reflect.get(response.config, 'resDesc');
        if (typeof resDescHandler === 'function') {
            console.log(resDescHandler(response), ...Reflect.get(response.config, 'resDescOption'));
            return response;
        }
        console.log(resDescHandler);
        return response;
    }
}
__decorate([
    (0, decorator_1.allowExecution)(config => Reflect.has(config, 'reqDesc'))
], Desc.prototype, "requestSuccessInterceptor", null);
__decorate([
    (0, decorator_1.allowExecution)(config => Reflect.has(config.config, 'resDesc'))
], Desc.prototype, "responseSuccessInterceptor", null);
exports.Desc = Desc;
