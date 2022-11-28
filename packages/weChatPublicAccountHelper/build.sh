###
# @Author: 邱狮杰
# @Date: 2022-07-23 11:12:26
# @LastEditTime: 2022-11-29 00:11:05
# @Description:
# @FilePath: /repo/packages/weChatPublicAccountHelper/build.sh
###

tsc --rootDir ./src --outDir ./source -d true --declarationDir ./dts
rm -rf "./source"
rollup -c rollup.config.js
