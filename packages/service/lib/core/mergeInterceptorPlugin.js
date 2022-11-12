"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeInterceptorPlugin = void 0;
class MergeInterceptorPlugin {
    collectionPlugin(interceptorList, defaultInterceptor, axios) {
        const parsePlugin = this.parsePlugin(interceptorList);
        axios.interceptors.request.use((request) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const config = (yield this.schedulingPluginCallbacks(parsePlugin.requestSuccessInterceptor, request)) || request;
            return (yield ((_a = defaultInterceptor === null || defaultInterceptor === void 0 ? void 0 : defaultInterceptor.requestSuccessInterceptor) === null || _a === void 0 ? void 0 : _a.call(defaultInterceptor, config))) || config;
        }), error => {
            var _a;
            const err = this.schedulingPluginCallbacks(parsePlugin === null || parsePlugin === void 0 ? void 0 : parsePlugin.requestFailInterceptorList, error);
            return ((_a = defaultInterceptor === null || defaultInterceptor === void 0 ? void 0 : defaultInterceptor.requestFailInterceptor) === null || _a === void 0 ? void 0 : _a.call(defaultInterceptor, err)) || err;
        });
        axios.interceptors.response.use((response) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            const res = (yield this.schedulingPluginCallbacks(parsePlugin.responseSuccessInterceptor, response)) || response;
            return ((_b = defaultInterceptor === null || defaultInterceptor === void 0 ? void 0 : defaultInterceptor.responseSuccessInterceptor) === null || _b === void 0 ? void 0 : _b.call(defaultInterceptor, res)) || res;
        }), (error) => __awaiter(this, void 0, void 0, function* () {
            var _c;
            const err = this.schedulingPluginCallbacks(parsePlugin.responseFailInterceptor, error);
            return ((_c = defaultInterceptor === null || defaultInterceptor === void 0 ? void 0 : defaultInterceptor.responseFailInterceptor) === null || _c === void 0 ? void 0 : _c.call(defaultInterceptor, err)) || err;
        }));
        return axios;
    }
    parsePlugin(interceptorList) {
        const requestFailInterceptorList = [];
        const requestSuccessInterceptor = [];
        const responseFailInterceptor = [];
        const responseSuccessInterceptor = [];
        interceptorList.forEach(i => {
            (i === null || i === void 0 ? void 0 : i.requestFailInterceptor) && requestFailInterceptorList.push(i.requestFailInterceptor);
            (i === null || i === void 0 ? void 0 : i.requestSuccessInterceptor) && requestSuccessInterceptor.push(i.requestSuccessInterceptor);
            (i === null || i === void 0 ? void 0 : i.responseFailInterceptor) && responseFailInterceptor.push(i.responseFailInterceptor);
            (i === null || i === void 0 ? void 0 : i.responseSuccessInterceptor) && responseSuccessInterceptor.push(i.responseSuccessInterceptor);
        });
        return {
            requestFailInterceptorList,
            requestSuccessInterceptor,
            responseFailInterceptor,
            responseSuccessInterceptor,
        };
    }
    schedulingPluginCallbacks(list, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = params;
            for (let i = 0; i < list.length; i++) {
                config = (yield list[i](config)) || config;
            }
            return config;
        });
    }
}
exports.MergeInterceptorPlugin = MergeInterceptorPlugin;
