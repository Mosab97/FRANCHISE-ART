!function(e){function t(t){for(var r,l,a=t[0],u=t[1],c=t[2],f=0,d=[];f<a.length;f++)l=a[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={1:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=u;i.push([77,0,3]),n()}({108:function(e,t,n){},38:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t),function(e){n(39),n(57),n(58),n(59),n(36),n(65),n(67),n(68),n(69),n(71),n(72),n(104),n(74),n(38),n(108);function t(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,l=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.scrollY;var o=document.querySelector("header"),i=o.offsetHeight;window.addEventListener("scroll",(function(){window.scrollY>=i?o.classList.add("sticky"):o.classList.remove("sticky")}));var l,a=t(document.querySelectorAll(".scroll-to-id"));try{for(a.s();!(l=a.n()).done;){l.value.addEventListener("click",u)}}catch(e){a.e(e)}finally{a.f()}function u(e){e.preventDefault();var t=this.getAttribute("href"),n=document.querySelector(t).offsetTop;scroll({top:n,behavior:"smooth"})}document.getElementById("formSubmit").addEventListener("click",(function(){var t=document.getElementById("name"),n=document.getElementById("email"),r=document.getElementById("nameError"),o=document.getElementById("emailError");""===t.value?(r.innerHTML="Please enter name",this.isNameError=!0):(r.innerHTML="",this.isNameError=!1);if(""===n.value)return o.innerHTML="Please enter email.",void(this.isEmailError=!0);if(!n.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))return o.innerHTML="Please enter valid email.",void(this.isEmailError=!0);o.innerHTML="",this.isEmailError=!1;if(this.isNameError||this.isEmailError)return;e.post("contact.php",{name1:document.getElementById("name").value,email1:document.getElementById("email").value},(function(e){console.log(e),document.getElementById("contactForm").style.display="none",document.getElementById("contactSuccess").style.display="block"}))}));var c=document.getElementById("burger"),s=document.getElementById("main-nav"),f=document.querySelectorAll(".mobile-menu");c.addEventListener("click",(function(e){y(),console.log(f)}));var d,m=t(f);try{for(m.s();!(d=m.n()).done;){d.value.addEventListener("click",y)}}catch(e){m.e(e)}finally{m.f()}function y(e){c.classList.toggle("is-open"),s.classList.toggle("is-open"),document.getElementsByTagName("body")[0].classList.toggle("no-scroll")}}.call(this,n(78))}});
//# sourceMappingURL=../index.bc113017.map