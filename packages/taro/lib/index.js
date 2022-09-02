"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@tarojs/taro"),e=require("react");function o(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:function(){return t[o]}})}})),e.default=t,Object.freeze(e)}var n=o(t);var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+e+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var c=function(){return c=Object.assign||function(t){for(var e,o=1,n=arguments.length;n>o;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},c.apply(this,arguments)};function l(t,e,o,n){return new(o||(o=Promise))((function(r,i){function c(t){try{a(n.next(t))}catch(t){i(t)}}function l(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(c,l)}a((n=n.apply(t,e||[])).next())}))}function a(t,e){var o,n,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&r[3]>i[1])){c.label=i[1];break}if(6===i[0]&&r[1]>c.label){c.label=r[1],r=i;break}if(r&&r[2]>c.label){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var u=function(){function t(){this.callbackCollector={}}return t.prototype.success=function(t){return Reflect.set(this.callbackCollector,"success",t),this},t.prototype.complete=function(t){return Reflect.set(this.callbackCollector,"complete",t),this},t.prototype.fail=function(t){return Reflect.set(this.callbackCollector,"fail",t),this},t.prototype.callTrigger=function(t,e){var o;return null===(o=Reflect.get(this.callbackCollector,t))||void 0===o||o(e),this},t.prototype.setCallback=function(t,e){return Reflect.set(this.callbackCollector,t,e),this},t.prototype.getCallback=function(t){return this.callbackCollector[t]},t.prototype.getCallbackAll=function(){return this.callbackCollector},t}(),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.injectApi=function(t){return this.fn=n[t],this},e.prototype.injectionParameters=function(t){return this.parameter=t,this},e.prototype.done=function(){var t;return l(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,null===(t=this.fn)||void 0===t?void 0:t.call(this,Object.assign({},c(c({},this.parameter),this.getCallbackAll())))];case 1:return[2,e.sent()]}}))}))},e}(u),p=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.done=function(e){t.getFileSystemManager().writeFile(c(c({},this.getCallbackAll()),e))},o}(u),f=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.done=function(e){t.getFileSystemManager().saveFile(c({tempFilePath:e.tempFilePath},this.getCallbackAll()))},o}(u),h=function(t){function e(){var e=t.call(this)||this;return e.ops={},e}return i(e,t),e.prototype.setDownloadLocation=function(t){return this.ops=c(c({},this.ops),{downloadLocation:t}),this},e.prototype.cacheDownload=function(t){var e=new f;e.setCallback("complete",this.getCallback("complete")),e.setCallback("success",this.getCallback("success")),e.setCallback("fail",this.getCallback("fail")),(new s).injectApi("downloadFile").success((function(t){e.done(t)})).fail((function(t){e.callTrigger("fail",t)})).complete((function(t){e.callTrigger("complete",t)})).injectionParameters(t).done()},e.prototype.writeFile=function(t){var e=new p;e.setCallback("fail",this.getCallback("fail")),e.setCallback("complete",this.getCallback("complete")),e.setCallback("success",this.getCallback("success")),e.done(t)},e.prototype.down=function(t){var e,o;(null===(e=this.ops)||void 0===e?void 0:e.downloadLocation)?"cache"===(null===(o=this.ops)||void 0===o?void 0:o.downloadLocation)?this.cacheDownload(t):this.writeFile(t):(new s).injectApi("downloadFile").success(this.getCallback("success")).fail(this.getCallback("fail")).complete(this.getCallback("complete")).injectionParameters(t).done()},e}(u);var m=function(){function t(){this.callbackCollection={}}return t.prototype.success=function(t){return this.callbackCollection=c(c({},this.callbackCollection),{success:t}),this},t.prototype.fail=function(t){return this.callbackCollection=c(c({},this.callbackCollection),{fail:t}),this},t.prototype.complete=function(t){return this.callbackCollection=c(c({},this.callbackCollection),{complete:t}),this},t}(),g={navigateBack:t.navigateBack,navigateTo:t.navigateTo,reLaunch:t.reLaunch,redirectTo:t.redirectTo},d=function(t){function e(e){var o=t.call(this)||this;return o.simpleRouteJumpConfig={method:"navigateTo"},o.setUrl(e),o}return i(e,t),e.prototype.setUrl=function(t){return this.simpleRouteJumpConfig=c(c({},this.simpleRouteJumpConfig),{url:t}),this},e.prototype.setMethod=function(t){return this.simpleRouteJumpConfig=c(c({},this.simpleRouteJumpConfig),{method:t||"navigateTo"}),this},e.prototype.setPreJumpJnterceptor=function(t){return t?(this.simpleRouteJumpConfig=c(c({},this.simpleRouteJumpConfig),{preJumpJnterceptor:t}),this):this},e.prototype.trigger=function(t){if(this.simpleRouteJumpConfig.preJumpJnterceptor){if(this.simpleRouteJumpConfig.preJumpJnterceptor(null==t?void 0:t.mete))return g[this.simpleRouteJumpConfig.method](c(c(c({},this.callbackCollection),t),{url:"".concat(this.simpleRouteJumpConfig.url).concat(b((null==t?void 0:t.mete)||{}))}));throw Error("预跳转验证未通过 ".concat(this.simpleRouteJumpConfig.url))}if(!this.simpleRouteJumpConfig.preJumpJnterceptor)return g[this.simpleRouteJumpConfig.method](c(c(c({},this.callbackCollection),t),{url:"".concat(this.simpleRouteJumpConfig.url).concat(b((null==t?void 0:t.mete)||{}))}))},e.parseParameters=b,e}(m);function b(t){if("object"!=typeof t)throw Error("".concat(t," 不是一个对象"));if(Array.isArray(t))throw Error("".concat(t," 不是一个对象 {} "));var e="?";for(var o in t)e+=1===e.length?"".concat(o,"=").concat(t[o]):"&".concat(o,"=").concat(t[o]);return e}var y=function(){function e(){}return e.prototype.get=function(e){return t.getStorageSync(e)},e.prototype.set=function(e,o){return t.setStorageSync(e,o),this},e}();exports.ChainCall=s,exports.DownloadFile=h,exports.SimpleRouteJump=d,exports.Storeage=y,exports.getAppId=function(){return l(this,void 0,void 0,(function(){return a(this,(function(e){return[2,t.getAccountInfoSync().miniProgram.appId]}))}))},exports.getCurRouter=function(){var e=t.getCurrentInstance().router;return{getParameter:function(){return null==e?void 0:e.params},getCurRoute:function(){return e}}},exports.getWxLoginCode=function(){return l(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,t.login()];case 1:return[2,e.sent().code]}}))}))},exports.useAudio=function(){var o=e.useRef(),n=t.createInnerAudioContext();return{audioInstanceToUpdate:function(t){for(var e in t)n[e]=t[e];o.current=n},audioInstanceRef:o}};
//# sourceMappingURL=index.js.map
