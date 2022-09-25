###
# @Author: 邱狮杰
# @Date: 2022-09-25 11:15:06
# @LastEditTime: 2022-09-25 12:38:56
# @Description:
# @FilePath: /repo/r.sh
###

yarn test

echo 'start build <packages/build>'
cd ./packages/build &&
    yarn build

cd ../../

echo 'start build <packages/imageTransition>'
cd ./packages/imageTransition && yarn build

cd ../../

echo 'start build <packages/service>'
cd ./packages/service && yarn build

cd ../../

echo 'start build <packages/vite-plugin-img-reload>'
cd ./packages/vite-plugin-img-reload && yarn build && cp ./src/imgReload.css ./dist && cp ./src/imgReload.css ./lib
cd ../../

echo 'start build <packages/weChatPublicAccountHelper>'
cd ./packages/weChatPublicAccountHelper && yarn build

cd ../../

echo 'start build <packages/taro>'
cd ./packages/taro && yarn build
