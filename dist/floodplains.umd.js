!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).floodplains=r()}(this,function(){function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function r(r,n){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=function(r,n){if(r){if("string"==typeof r)return e(r,void 0);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(r,void 0):void 0}}(r))||n&&r&&"number"==typeof r.length){t&&(r=t);var o=0;return function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=r[Symbol.iterator]()).next.bind(t)}var n={};return{emit:function(e,t){for(var o,a=n["*"]||[],i=r(n[e]||[]);!(o=i()).done;)(0,o.value)({name:e,value:t});for(var u,f=r(a);!(u=f()).done;)(0,u.value)({name:e,value:t})},on:function(e,t){for(var o,a=r(Array.isArray(e)?e:[e]);!(o=a()).done;){var i=o.value;n[i]||(n[i]=[]),n[i].push(t)}}}});
//# sourceMappingURL=floodplains.umd.js.map
