/*! *****************************************************************************
Copyright (c) maixun Corporation.

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
function i(i,t,o,n){return new(o||(o=Promise))((function(s,e){function r(i){try{l(n.next(i))}catch(i){e(i)}}function h(i){try{l(n.throw(i))}catch(i){e(i)}}function l(i){var t;i.done?s(i.value):(t=i.value,t instanceof o?t:new o((function(i){i(t)}))).then(r,h)}l((n=n.apply(i,t||[])).next())}))}Object.defineProperty(exports,"__esModule",{value:!0});exports.Phone=class{constructor(i,t){this.strictVerification=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,this.laxValidation=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,this.leastValidation=/^(?:(?:\+|00)86)?1\d{10}$/,this.verify=this.laxValidation,this.phone="",this.options=null,this.phone=i,this.options=t,this.filterVerificationMethod(),this.errorThrowing()}filterVerificationMethod(){var i,t;if(null===(i=this.options)||void 0===i?void 0:i.customRules)return void(this.verify=this.options.customRules);(null===(t=this.options)||void 0===t?void 0:t.stringency)&&(this.verify={loose:this.laxValidation,loosest:this.leastValidation,rigorous:this.strictVerification}[this.options.stringency])}errorThrowing(){var t,o,n,s;return i(this,void 0,void 0,(function*(){if(!1!==(null===(t=this.options)||void 0===t?void 0:t.errorThrowsImmediately)&&!this.verify.test(this.phone))throw null===(n=null===(o=this.options)||void 0===o?void 0:o.throwHandling)||void 0===n||n.call(o),Error((null===(s=this.options)||void 0===s?void 0:s.throwMsg)||"手机号验证失败")}))}verifyPhoneNumber(){var i,t;const o=this.verify.test(this.phone);return!o&&(null===(t=null===(i=this.options)||void 0===i?void 0:i.verificationFailed)||void 0===t||t.call(i)),o}getPhone(){return this.phone}};
