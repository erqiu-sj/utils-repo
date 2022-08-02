###
# @Author: 邱狮杰
# @Date: 2022-08-01 17:18:58
# @LastEditTime: 2022-08-01 17:18:59
# @Description:
# @FilePath: /repo/packages/taro/build.sh
###
tsc --module CommonJS --outDir ./lib
rm -rf ./lib
rollup --config ./rollup.config.ts
