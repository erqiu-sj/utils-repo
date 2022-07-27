"use strict";
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
***************************************************************************** */
function t(t,e,i,r){return new(i||(i=Promise))((function(c,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function o(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?c(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,o)}a((r=r.apply(t,e||[])).next())}))}Object.defineProperty(exports,"__esModule",{value:!0});class e{trigger(e){return t(this,void 0,void 0,(function*(){void 0!==(null===window||void 0===window?void 0:window.wx)?yield e.weChatSdkJnjectionTriggerBehavior():yield e.getCallbacks("success")(yield e.weChatDdkDoesNotInjectTriggerBehavior())}))}}exports.UpdateAppMessageShareData=class extends class extends class{constructor(){this.callbackMapper={}}collector(t,e){return e?(Reflect.set(this.callbackMapper,t,e),this):this}getCallbacks(t){return Reflect.get(this.callbackMapper,t)}getAllCallbacks(){return this.callbackMapper}}{constructor(){super(...arguments),this.call=""}readConfiguration(t){return this.configure=t,this}callName(t){this.call=t}getConfiguration(){return this.configure}fail(t){return this.collector("fail",t),this}success(t){return this.collector("success",t),this}complete(t){return this.collector("complete",t),this}cancel(t){return this.collector("cancel",t),this}trigger(t){return this.collector("trigger",t),this}done(){return t(this,void 0,void 0,(function*(){yield(new e).trigger(this)}))}weChatDdkDoesNotInjectTriggerBehavior(){return t(this,void 0,void 0,(function*(){}))}weChatSdkJnjectionTriggerBehavior(){return t(this,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},this.getAllCallbacks()),this.getConfiguration());Reflect.get(window.wx,this.call)(t)}))}}{constructor(){super(),this.callName("updateAppMessageShareData")}};
