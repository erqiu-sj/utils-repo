!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self).mxUtils={})}(this,(function(t){"use strict";
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
function i(t,i,n,e){return new(n||(n=Promise))((function(o,r){function s(t){try{l(e.next(t))}catch(t){r(t)}}function h(t){try{l(e.throw(t))}catch(t){r(t)}}function l(t){var i;t.done?o(t.value):(i=t.value,i instanceof n?i:new n((function(t){t(i)}))).then(s,h)}l((e=e.apply(t,i||[])).next())}))}t.BigTurntable=class{constructor(){this.startRotate=0,this.prevRotate=0,this.isPedding=!1,this.timerPointer=null,this.prizeIndexAndAngle={},this.randomAngleWhenLotteryisNotDrawn=[],this.prizeIdWhenNotWinning=[],this.turntableRotationCycleTiming=null}setPrizeIndexAndAngle(t){return this.prizeIndexAndAngle=t,this}setTurntableCycle(t){return this.turntableRotationCycleTiming=i=>{this.timerPointer=setTimeout((()=>{this.isPedding=!1,null==i||i()}),t.time)},this}setRandomAngleWhenLotteryisNotDrawn(t){return this.randomAngleWhenLotteryisNotDrawn=t,this}setPrizeIdWhenNotWinning(t){return this.prizeIdWhenNotWinning=t,this}round(t){return t[Math.ceil(Math.round(Math.random()*t.length))]}destroySpinCycle(){return this.timerPointer&&clearTimeout(this.timerPointer),this}startTheCarousel(t,i){var n,e,o;if(!t)return;if(this.isPedding)return void(null===(n=i.onCallingBackDraws)||void 0===n||n.call(i));null===(e=i.onPreliminaryDraw)||void 0===e||e.call(i);const r=this.round(this.randomAngleWhenLotteryisNotDrawn);let s=Reflect.get(this.prizeIndexAndAngle,i.winningId)||this.round(this.prizeIdWhenNotWinning)||this.prizeIdWhenNotWinning[0];s=void 0!==Reflect.get(this.prizeIndexAndAngle,i.winningId)?i.winningId:this.round(this.prizeIdWhenNotWinning)||this.prizeIdWhenNotWinning[0];let h=Reflect.get(this.prizeIndexAndAngle,s)||r||this.randomAngleWhenLotteryisNotDrawn[0];if(h=void 0!==Reflect.get(this.prizeIndexAndAngle,s)?Reflect.get(this.prizeIndexAndAngle,s):r||this.randomAngleWhenLotteryisNotDrawn[0],this.startRotate){const i=this.startRotate+1800-this.prevRotate+h;this.prevRotate=h,this.startRotate+=i-this.startRotate,t.style.transform=`rotate(${i}deg)`}else{const i=this.startRotate+1800+h;this.prevRotate=h,t.style.transform=`rotate(${i}deg)`,this.startRotate+=i-this.startRotate}null===(o=this.turntableRotationCycleTiming)||void 0===o||o.call(this,i.onDone)}},t.Phone=class{constructor(t,i){this.strictVerification=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,this.laxValidation=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,this.leastValidation=/^(?:(?:\+|00)86)?1\d{10}$/,this.verify=this.laxValidation,this.phone="",this.options=null,this.phone=t,this.options=i,this.filterVerificationMethod(),this.errorThrowing()}filterVerificationMethod(){var t,i;if(null===(t=this.options)||void 0===t?void 0:t.customRules)return void(this.verify=this.options.customRules);(null===(i=this.options)||void 0===i?void 0:i.stringency)&&(this.verify={loose:this.laxValidation,loosest:this.leastValidation,rigorous:this.strictVerification}[this.options.stringency])}errorThrowing(){var t,n,e,o;return i(this,void 0,void 0,(function*(){if(!1!==(null===(t=this.options)||void 0===t?void 0:t.errorThrowsImmediately)&&!this.verify.test(this.phone))throw null===(e=null===(n=this.options)||void 0===n?void 0:n.throwHandling)||void 0===e||e.call(n),Error((null===(o=this.options)||void 0===o?void 0:o.throwMsg)||"手机号验证失败")}))}verifyPhoneNumber(){var t,i;const n=this.verify.test(this.phone);return!n&&(null===(i=null===(t=this.options)||void 0===t?void 0:t.verificationFailed)||void 0===i||i.call(t)),n}getPhone(){return this.phone}},t.RandomNumberInterval=class{constructor(t,i){this.n=0;const n=Math.max(t[0],t[1]),e=Math.min(t[0],t[1]),o=Math.random()*(n-e+1)+e;this.n=(null==i?void 0:i.isInteger)?Math.floor(o):o}getNumber(){return this.n}},Object.defineProperty(t,"__esModule",{value:!0})}));
