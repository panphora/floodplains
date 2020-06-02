module.exports={emit:function(e,n){var a=new CustomEvent("floodplains-event",{detail:{name:e,value:n}});document.dispatchEvent(a)},on:function(e,n){document.addEventListener("floodplains-event",function(a){Array.isArray(e)?e.includes(a.detail.name)&&n({name:a.detail.name,value:a.detail.value}):e===a.detail.name&&n({name:e,value:a.detail.value})},!1)}};
//# sourceMappingURL=floodplains.js.map
