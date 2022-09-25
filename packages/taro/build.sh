###
# @Author: 邱狮杰
# @Date: 2022-08-01 17:18:58
# @LastEditTime: 2022-09-25 11:26:04
# @Description:
# @FilePath: /repo/packages/taro/build.sh
###

tsc --module CommonJS --outDir ./lib
# tsc --module ES2015 --outDir ./dist
rm -rf ./lib
rollup --config ./rollup.config.ts
