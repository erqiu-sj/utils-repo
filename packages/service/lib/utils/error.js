"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-11 13:18:41
 * @LastEditTime: 2022-06-11 13:25:04
 * @Description:
 * @FilePath: /repo/packages/service/src/utils/error.ts
 */
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
exports.SynchronizationAwaitError = void 0;
/**
 * @description 同步捕获错误
 * @param promise
 * @param errorCaptured
 * @returns
 */
function SynchronizationAwaitError(promise, errorCaptured) {
    return __awaiter(this, void 0, void 0, function* () {
        return promise
            .then((result) => {
            return [null, result];
        })
            .catch((causeOfError) => {
            if (errorCaptured)
                return [Object.assign(causeOfError, errorCaptured), null];
            return [causeOfError, null];
        });
    });
}
exports.SynchronizationAwaitError = SynchronizationAwaitError;
