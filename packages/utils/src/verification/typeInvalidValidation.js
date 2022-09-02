"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtInTypeStrategy = exports.typeInvalidValidation = exports.TypeInvalidValidation = void 0;
const singletonPattern_1 = require("./singletonPattern");
const typeValidation_1 = require("./typeValidation");
// 类型策略验证
class TypeInvalidValidation {
    constructor() {
        this.policySet = new Map();
    }
    /**
     * @description 新增策略
     * @param name
     * @param fn
     * @returns
     */
    addTypePolicy(name, fn) {
        var _a;
        (_a = this.policySet) === null || _a === void 0 ? void 0 : _a.set(name, fn);
        return this;
    }
    /**
     * @description 删除策略
     * @param name
     * @returns
     */
    deletePolicy(name) {
        var _a;
        if (typeof name !== 'string')
            throw new Error(`deletePolicy function need a string parameter , but got a ${typeof name}. ${name.toString()}`);
        (_a = this.policySet) === null || _a === void 0 ? void 0 : _a.delete(name);
        return this;
    }
    /**
     * @description  调用类型策略
     * @param name
     * @param params
     * @returns
     */
    // @ts-ignore
    callTypeStrategy(name, ...params) {
        var _a, _b;
        if (typeof name !== 'string')
            throw new Error(`callTypeStrategy function need a string parameter , but got a ${typeof name}. ${name.toString()}`);
        if (!((_a = this.policySet) === null || _a === void 0 ? void 0 : _a.has(name)))
            throw new Error(`call failed(${name}), check for type policy`);
        // @ts-ignore
        return (_b = this.policySet.get(name)) === null || _b === void 0 ? void 0 : _b(...params);
    }
    /**
     * @description 销毁策略者实例
     */
    deleteInstance() {
        this.policySet = null;
    }
}
exports.TypeInvalidValidation = TypeInvalidValidation;
exports.typeInvalidValidation = (0, singletonPattern_1.singletonPattern)(() => new TypeInvalidValidation())();
function builtInTypeStrategy() {
    return exports.typeInvalidValidation.addTypePolicy('isEmptyObject', typeValidation_1.isEmptyObject).addTypePolicy('isEmptyArray', typeValidation_1.isEmptyArray).addTypePolicy('isFalseValue', typeValidation_1.isFalseValue);
}
exports.builtInTypeStrategy = builtInTypeStrategy;
const s = new TypeInvalidValidation();
s.callTypeStrategy('add', 1);
