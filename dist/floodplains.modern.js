let e={};const t={emit:function(t,o){let f=e[t]||[],l=e["*"]||[];for(let e of f)e({name:t,value:o});for(let e of l)e({name:t,value:o})},on:function(t,o){let f=Array.isArray(t)?t:[t];for(let t of f)e[t]||(e[t]=[]),e[t].push(o)}};export default t;
//# sourceMappingURL=floodplains.modern.js.map
