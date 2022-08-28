/*
 * @Author: 邱狮杰
 * @Date: 2022-08-13 14:57:13
 * @LastEditTime: 2022-08-28 10:34:10
 * @Description: 
 * @FilePath: /repo/script/parseImport/src/index.ts
 */
// import { transformFileSync } from "@swc/core";
const { parseFileSync, transformFileSync } = require("@swc/core");
import { CallExpression, Expression, Import, ImportDeclaration, ImportSpecifier } from '@swc/core';
import { Visitor } from '@swc/core/Visitor';
// 解析文件
// const parseResult = parseFileSync('./test.ts', {
//     syntax: 'typescript',
//     comments: false,
//     script: true,
//     target: 'es2016',
//     isModule: true
// })

// const filterImport = parseResult.body.filter((n) => {
//     return n.type === 'ImportDeclaration'
// })

// console.log(filterImport);

class ImportStripper extends Visitor {

    visitImportSpecifier(node: ImportSpecifier): ImportSpecifier {
        if (node.type === 'ImportDefaultSpecifier') {
        }
        return node
    }

    visitImportDeclaration(n: ImportDeclaration): ImportDeclaration {
        n.source.value
        return n
    }

}

const { code } = transformFileSync('./test.ts', {
    sourceMaps: false,
    isModule: true,
    jsc: {
        parser: {
            syntax: 'typescript'
        },
        transform:
            {}
    },
    plugin(programs) {
        console.log(
            programs.body
        )
        return programs
    }
})
console.log(code);
