###
# @Author: 邱狮杰
# @Date: 2022-11-20 13:51:12
# @LastEditTime: 2022-11-20 13:54:45
# @Description:
# @FilePath: /repo/packages/rluBuild/build.sh
###

tsc --rootDir ./src --outDir ./lib -d true --declarationDir ./dts --module ES2015

tsc --rootDir ./src --outDir ./dist -d true --declarationDir ./dts --module commonjs
