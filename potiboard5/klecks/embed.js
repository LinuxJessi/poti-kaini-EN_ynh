!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequire94c2;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequire94c2=i),i.register("2evKT",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("4gaLD",(function(t,r){e(t.exports,"asyncToGenerator",(function(){return i("1ELdT").default})),e(t.exports,"classCallCheck",(function(){return i("5nGP2").default})),e(t.exports,"createClass",(function(){return i("8TCpN").default})),e(t.exports,"defineProperty",(function(){return i("iXkAt").default})),e(t.exports,"typeOf",(function(){return i("gdFSe").default}));i("1ELdT"),i("5nGP2"),i("8TCpN"),i("iXkAt"),i("gdFSe")})),i.register("1ELdT",(function(t,r){function n(e,t,r,n,o,i,a){try{var c=e[i](a),f=c.value}catch(e){return void r(e)}c.done?t(f):Promise.resolve(f).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,f,"next",e)}function f(e){n(a,o,i,c,f,"throw",e)}c(void 0)}))}}e(t.exports,"default",(function(){return o}))})),i.register("5nGP2",(function(t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e(t.exports,"default",(function(){return n}))})),i.register("8TCpN",(function(t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}e(t.exports,"default",(function(){return o}))})),i.register("iXkAt",(function(t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e(t.exports,"default",(function(){return n}))})),i.register("gdFSe",(function(t,r){function n(e){return e&&e.constructor===Symbol?"symbol":typeof e}e(t.exports,"default",(function(){return n}))})),i.register("cijLd",(function(e,t){var r=function(e){var t,r=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]},n=function(e,t,r,n){var o=t&&t.prototype instanceof i?t:i,a=Object.create(o.prototype),c=new h(n||[]);return a._invoke=s(e,r,c),a},o=function(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}},i=function(){},a=function(){},c=function(){},f=function(e){["next","throw","return"].forEach((function(t){r(e,t,(function(e){return this._invoke(t,e)}))}))},u=function(e,t){function r(n,i,a,c){var f=o(e[n],e,i);if("throw"!==f.type){var u=f.arg,s=u.value;return s&&"object"==typeof s&&_.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(f.arg)}var n;this._invoke=function(e,o){function i(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(i,i):i()}},s=function(e,t,r){var n=E;return function(i,a){if(n===S)throw new Error("Generator is already running");if(n===F){if("throw"===i)throw a;return g()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var f=P(c,r);if(f){if(f===A)continue;return f}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===E)throw n=F,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=S;var u=o(e,t,r);if("normal"===u.type){if(n=r.done?F:w,u.arg===A)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=F,r.method="throw",r.arg=u.arg)}}},l=function(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)},d=function(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t},h=function(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(l,this),this.reset(!0)},p=function(e){if(e){var r=e[H];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(_.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:g}},g=function(){return{value:t,done:!0}},v=Object.prototype,_=v.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},H=y.iterator||"@@iterator",b=y.asyncIterator||"@@asyncIterator",m=y.toStringTag||"@@toStringTag";try{r({},"")}catch(e){r=function(e,t,r){return e[t]=r}}e.wrap=n;var E="suspendedStart",w="suspendedYield",S="executing",F="completed",A={},R={};r(R,H,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(p([])));L&&L!==v&&_.call(L,H)&&(R=L);var k=c.prototype=i.prototype=Object.create(R);function P(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method))return A;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var i=o(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,A;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,A):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,A)}return a.prototype=c,r(k,"constructor",c),r(c,"constructor",a),a.displayName=r(c,m,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,r(e,m,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},f(u.prototype),r(u.prototype,b,(function(){return this})),e.AsyncIterator=u,e.async=function(t,r,o,i,a){void 0===a&&(a=Promise);var c=new u(n(t,r,o,i),a);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},f(k),r(k,m,"Generator"),r(k,H,(function(){return this})),r(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=p,h.prototype={constructor:h,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(d),!e)for(var r in this)"t"===r.charAt(0)&&_.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){var r=function(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o};if(this.done)throw e;for(var n=this,o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=_.call(i,"catchLoc"),f=_.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&_.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),A},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),d(r),A}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;d(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:p(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),A}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("f6OTe",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i.register("a8fvS",(function(e,t){e.exports=i("ih7W4")(i("f6OTe").getBundleURL("dGDZJ")+i("2evKT").resolve("dafOa")).then((function(){return i("6NgYC")}))})),i.register("ih7W4",(function(e,t){"use strict";var r=i("5Y6Bl");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("script");if([].concat(n).some((function(t){return t.src===e})))t();else{var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.charset="utf-8",o.src=e,o.onerror=function(t){var n=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),r(n)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),i.register("5Y6Bl",(function(e,t){"use strict";var r={},n={},o={};function i(e){switch(e){case"preload":return n;case"prefetch":return o;default:return r}}e.exports=function(e,t){return function(r){var n=i(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch((function(e){throw delete n[r],e}))}}})),i("2evKT").register(JSON.parse('{"dGDZJ":"embed.js","eHdqz":"klecks-logo.77be0db3.png","dafOa":"main-embed.b5d6a101.js","l7FYj":"check.8d706b11.svg","kbyFQ":"cancel.17aa34ea.svg","5H9IS":"brush-pressure.1131c5e6.svg","cTtMO":"tool-picker.c6f73455.svg","iQ1f0":"angle.e4f21bbf.svg","1mb1v":"add-layer.c9406d53.svg","11KJK":"duplicate-layer.cd7d5574.svg","floUo":"merge-layers.94a536a2.svg","kino6":"remove-layer.b262151d.svg","1dLwT":"cursor-picker.db2f5b39.png","9wZxU":"cursor-zoom-ew.fbb85406.png","hQSEH":"cursor-fill.8027a243.png","916ZI":"cursor-text.dcaa5de5.png","045N6":"cursor-rotate.5b164044.png","iGeXe":"loading.7ff8a2ac.gif","3x5dR":"new-image.1fef1bb9.svg","hbDTd":"import.d401a030.svg","16iGk":"export.bc31616f.svg","2ME3z":"share.b5c9f88c.svg","hZnSk":"help.d641c4d8.svg","jArAq":"tool-paint.97b255d7.png","hS5Hj":"tool-fill.6a50c444.svg","doX4v":"tool-text.b22c85de.svg","7NqHO":"tool-shape.f08836f9.svg","dz3mY":"caret-down.4fe99ecd.svg","ldMMs":"tool-move.4a5e2450.svg","04ZZm":"tool-zoom-in.a890b5ec.svg","j9xio":"tool-zoom-out.ffe98816.svg","AnO0a":"tool-undo.c9d1f089.svg","6toXQ":"edit-rotate.a0ef807d.svg","b1UMP":"ui-collapse.2b5dfc6a.svg","lvwQ5":"align-left.4876a845.svg","imAvm":"align-center.6f56d4bd.svg","dC0sF":"align-right.1521d61c.svg","h3hPo":"typo-italic.39f02a8d.svg","1pAeY":"typo-bold.8156fef3.svg","5tPq3":"edit-brightness-contrast.8430cb26.svg","cazOx":"edit-crop.16c534dd.svg","245NA":"edit-curves.bbdb97b2.svg","1hkCG":"edit-flip.00fd2c6b.svg","k2eFf":"edit-hue-saturation.c9c1c847.svg","krKGd":"edit-invert.fa435c66.png","ehfxY":"edit-perspective.e23100db.svg","beOjS":"edit-resize.56391e2b.svg","Gk9bV":"edit-tilt-shift.dd20efff.png","csed7":"edit-to-alpha.f7a2065a.svg","equSE":"edit-transform.c8795430.svg","h1dN3":"edit-triangle-blur.9df2dbef.png","LfAXI":"edit-unsharp-mask.c58e988c.png","ljmLX":"brush-smpl.d80143e4.png","hC7PC":"brush-sketchy.9e5d0120.png","eZgVv":"brush-pixel.9b87174e.svg","fPZin":"brush-eraser.053ab849.svg","lQywM":"brush-smudge.794901f0.png","hCPh2":"brush-smooth.f93cc369.png","2oHM2":"upload.6d420015.svg","la7yv":"copy.85b930e2.svg","kNYzr":"dist.abd92f9b.js","4FMUg":"ui-swap-lr.2e123545.svg","eFiVD":"checkmark.5cb0764b.svg","2BZYe":"constrain.62f04e45.svg","lntsQ":"embed.css"}')),i("4gaLD");var a,c=i("1ELdT"),f=i("cijLd");a=i("f6OTe").getBundleURL("dGDZJ")+i("2evKT").resolve("eHdqz");var u,s=!1;!function(){for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++)"stylesheet"===e[t].rel&&(e[t].disabled=!0);var r=document.createElement("link");r.rel="stylesheet",r.href=function(){if(u)return u;var e,t;try{throw new Error}catch(t){e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g)}return t=e[e.length-1],u=(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}()+"embed.css",document.head.appendChild(r)}(),window.Klecks=function(e){if(s)throw new Error("Already created an embed");s=!0;for(var r=document.createElement("div"),n=[["position","fixed"],["left","0"],["top","0"],["width","100vw"],["height","100vh"],["display","flex"],["alignItems","center"],["justifyContent","center"],["flexDirection","column"],["background","rgb(158,158,158)"],["fontFamily","Arial, sans-serif"],["fontSize","30px"],["color","#e3e3e3"]],o=0;o<n.length;o++)r.style[n[o][0]]=n[o][1];r.id="loading-screen",r.innerHTML='<img width="150" height="54" src="'+(e.logoImg?e.logoImg:t(a))+'" alt="Logo"/>\n<div style="margin: 15px 0 0 0; display: flex; align-items: center">\n<div class="spinner"></div>\n<span id="loading-screen-text">Loading app</span></div>',document.body.appendChild(r);var u=void 0,l=void 0,d=[],h=void 0;c.default(t(f).mark((function r(){var n;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("a8fvS");case 2:n=t.sent,h=new n.Embed(e),this.openProject=h.openProject,this.getPNG=h.getPNG,this.getPSD=h.getPSD,this.initError=h.initError,u&&h.openProject(u),l&&h.initError(l),d.length&&h.readPSDs(d);case 11:case"end":return t.stop()}}),r,this)})).bind(this)).bind(this)(),this.openProject=function(e){if(u)throw new Error("Already called openProject");u=e},this.initError=function(e){l=e},this.readPSD=c.default(t(f).mark((function e(r){var n;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e,t){var n={blob:r,callback:function(r){d.splice(d.indexOf(n),1),r?e(r):t()}};h?h.readPSDs([n]):d.push(n)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))}}();
//# sourceMappingURL=embed.js.map
