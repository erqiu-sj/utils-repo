###
# @Author: 邱狮杰
# @Date: 2022-08-01 17:18:58
# @LastEditTime: 2022-11-29 00:17:58
# @Description:
# @FilePath: /repo/packages/taro/build.sh
###

tsc --module CommonJS --outDir ./lib
# tsc --module ES2015 --outDir ./dist
rm -rf ./lib
rollup --config ./rollup.config.js
