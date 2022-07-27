!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).weChatPublicAccountHelper={})}(this,(function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,i,n){return new(i||(i=Promise))((function(r,c){function o(e){try{l(n.next(e))}catch(e){c(e)}}function s(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))}class i{trigger(e){return t(this,void 0,void 0,(function*(){void 0!==(null===window||void 0===window?void 0:window.wx)?yield e.weChatSdkJnjectionTriggerBehavior():yield e.getCallbacks("success")(yield e.weChatDdkDoesNotInjectTriggerBehavior())}))}}e.UpdateAppMessageShareData=class extends class extends class{constructor(){this.callbackMapper={}}collector(e,t){return t?(Reflect.set(this.callbackMapper,e,t),this):this}getCallbacks(e){return Reflect.get(this.callbackMapper,e)}getAllCallbacks(){return this.callbackMapper}}{constructor(){super(...arguments),this.call=""}readConfiguration(e){return this.configure=e,this}callName(e){this.call=e}getConfiguration(){return this.configure}fail(e){return this.collector("fail",e),this}success(e){return this.collector("success",e),this}complete(e){return this.collector("complete",e),this}cancel(e){return this.collector("cancel",e),this}trigger(e){return this.collector("trigger",e),this}done(){return t(this,void 0,void 0,(function*(){yield(new i).trigger(this)}))}weChatDdkDoesNotInjectTriggerBehavior(){return t(this,void 0,void 0,(function*(){}))}weChatSdkJnjectionTriggerBehavior(){return t(this,void 0,void 0,(function*(){const e=Object.assign(Object.assign({},this.getAllCallbacks()),this.getConfiguration());Reflect.get(window.wx,this.call)(e)}))}}{constructor(){super(),this.callName("updateAppMessageShareData")}},Object.defineProperty(e,"__esModule",{value:!0})}));
