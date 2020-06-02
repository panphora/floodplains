!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).floodplains=n()}(this,function(){return{trigger:function(e,n){var t=new CustomEvent(e,{detail:n});document.dispatchEvent(t)},listen:function(e,n){document.addEventListener(e,function(e){n(e.detail)},!1)}}});
//# sourceMappingURL=floodplains.umd.js.map
