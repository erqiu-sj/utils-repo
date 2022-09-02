"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 22:56:15
 * @LastEditTime: 2022-08-28 14:49:13
 * @Description:
 * @FilePath: /repo/packages/utils/src/verification/index.ts
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtInTypeStrategy = exports.TypeInvalidValidation = exports.typeInvalidValidation = exports.isFalseValue = exports.isEmptyObject = exports.isEmptyArray = exports.singletonPattern = void 0;
var singletonPattern_1 = require("./singletonPattern");
Object.defineProperty(exports, "singletonPattern", { enumerable: true, get: function () { return singletonPattern_1.singletonPattern; } });
var typeValidation_1 = require("./typeValidation");
Object.defineProperty(exports, "isEmptyArray", { enumerable: true, get: function () { return typeValidation_1.isEmptyArray; } });
Object.defineProperty(exports, "isEmptyObject", { enumerable: true, get: function () { return typeValidation_1.isEmptyObject; } });
Object.defineProperty(exports, "isFalseValue", { enumerable: true, get: function () { return typeValidation_1.isFalseValue; } });
var typeInvalidValidation_1 = require("./typeInvalidValidation");
Object.defineProperty(exports, "typeInvalidValidation", { enumerable: true, get: function () { return typeInvalidValidation_1.typeInvalidValidation; } });
Object.defineProperty(exports, "TypeInvalidValidation", { enumerable: true, get: function () { return typeInvalidValidation_1.TypeInvalidValidation; } });
Object.defineProperty(exports, "builtInTypeStrategy", { enumerable: true, get: function () { return typeInvalidValidation_1.builtInTypeStrategy; } });
__exportStar(require("./phone"), exports);
