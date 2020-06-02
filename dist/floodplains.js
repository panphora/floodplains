module.exports={trigger:function(t,e){var n=new CustomEvent(t,{detail:e});document.dispatchEvent(n)},listen:function(t,e){document.addEventListener(t,function(t){e(t.detail)},!1)}};
//# sourceMappingURL=floodplains.js.map
