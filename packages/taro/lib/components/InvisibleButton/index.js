"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-25 11:11:59
 * @LastEditTime: 2022-06-25 11:15:34
 * @Description:
 * @FilePath: /repo/packages/taro/src/components/InvisibleButton/index.tsx
 */
const components_1 = require("@tarojs/components");
const InvisibleButton = () => {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(components_1.Button, {}) });
};
exports.default = InvisibleButton;
