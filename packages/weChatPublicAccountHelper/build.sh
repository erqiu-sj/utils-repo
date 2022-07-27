###
# @Author: 邱狮杰
# @Date: 2022-07-23 11:12:26
# @LastEditTime: 2022-07-23 11:22:17
# @Description:
# @FilePath: /repo/packages/weChatPublicAccountHelper/build.sh
###

tsc --rootDir ./src --outDir ./source -d true --declarationDir ./dts
rm -rf "./source"
yarn build
