var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register("9OeKo",(function(t,n){var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function h(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(E,t),s?h(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function E(){var e=p();if(x(e))return w(e);f=setTimeout(E,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function w(e){return f=void 0,g&&r?h(e):(r=i=void 0,u)}function j(){var e=p(),n=x(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(E,t),h(l)}return void 0===f&&(f=setTimeout(E,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},j.flush=function(){return void 0===f?u:w(p())},j}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})}}));const r={KEY:"feedback-form-state",form:document.querySelector(".feedback-form"),throttle:o("9OeKo")},{email:i,message:a}=r.form.elements;let u={};if(localStorage[r.KEY])try{u=JSON.parse(localStorage.getItem(r.KEY)),i.value=u.email,a.value=u.message}catch(e){console.log(e.name),console.log(e.message)}r.form.addEventListener("input",r.throttle((function(){u.email=i.value,u.message=a.value,localStorage.setItem(r.KEY,JSON.stringify(u))}),500)),r.form.addEventListener("submit",(function(e){e.preventDefault(),""!==i.value&&""!==a.value?(console.log(u),localStorage.removeItem(r.KEY),i.value="",a.value="",u={}):alert("You must fill out all fields of the form!")}));
//# sourceMappingURL=03-feedback.65974f5e.js.map