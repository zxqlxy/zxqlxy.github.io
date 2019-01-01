!function(){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m="#14B7F4";mapboxgl.supported()||alert("Hi sorry, looks like your browser is not supported to render the map 😢.\n\nYou could try to load this site on another (latest) browser perhaps? 🙏"),mapboxgl.accessToken="pk.eyJ1IjoiY2hlZWF1biIsImEiOiJjam9yZDY3OGkwZGVkM3dsaGQ3c3B5YWdpIn0.sg3ArlzdkBagspUgNEOyMA";var b=new mapboxgl.Map({container:"map",style:"https://maps.tilehosting.com/styles/darkmatter/style.json?key=xjrAbdVfXA48AYcOS16e",maxZoom:15.5,logoPosition:"top-right",attributionControl:!1,boxZoom:!1,zoom:.1}),k=(document.getElementById("info"),document.getElementById("info-countries")),w=document.getElementById("info-places"),x=document.getElementById("info-checkins"),L=document.getElementById("countries"),E=document.body.classList;function e(){E.add("interactive")}function r(){E.remove("interactive")}b.on("dragstart",e),b.on("zoomstart",e),L.addEventListener("touchstart",r,!1),L.addEventListener("mouseenter",r),b.on("click",function(){E.toggle("interactive")});var P=function(e){return 999<e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e};b.addControl(new mapboxgl.AttributionControl({compact:!0}),"top-right");var i,c=function(){function e(){t(this,e)}return n(e,[{key:"onAdd",value:function(e){var t=document.createElement("div");t.className="mapboxgl-ctrl mapboxgl-ctrl-group";var n=document.createElement("button");return n.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24">\n      <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.5-.07l-3.57 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07L4.93 15.5c.05.15.07.32.07.5 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.5.07l4.57-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56c-.05-.14-.07-.3-.07-.5 0-1.1.9-2 2-2s2 .9 2 2z"/>\n    </svg>',n.type="button",n.title="Show/hide journey lines",n.addEventListener("click",function(){"visible"===e.getLayoutProperty("lines","visibility")?(e.setLayoutProperty("lines","visibility","none"),n.classList.remove("active")):(e.setLayoutProperty("lines","visibility","visible"),n.classList.add("active"))},!1),t.appendChild(n),t}}]),e}();b.addControl(new c,"top-right"),b.addControl(new mapboxgl.NavigationControl,"top-right");var s,l,a=function(){function e(){t(this,e)}return n(e,[{key:"onAdd",value:function(){var e=document.createElement("div");return e.className="mapboxgl-ctrl pitch-ctrl",e.innerHTML='<svg viewBox="0 0 24 24">\n      <title>Pitch</title>\n      <path d="M14 6l-3.8 5 3 3.8-1.7 1.2L7 10l-6 8h22L14 6z"/>\n    </svg>',(i=document.createElement("input")).type="range",i.step=5,i.min=i.value=0,i.max=60,i.className="pitch-slider",i.addEventListener("change",function(e){b.easeTo({pitch:e.target.value})},!1),e.appendChild(i),e}}]),e}();function C(t,n){var o=Math.ceil(n/60),r=0;requestAnimationFrame(function e(){n<=r||(n<(r+=o)&&(r=n),t.textContent=P(r),requestAnimationFrame(e))})}b.addControl(new a,"top-right"),b.on("pitchend",function(){i.value=b.getPitch()}),Promise.all([new Promise(function(e,t){b.on("load",e),b.on("error",t)}),(s="data/checkins.min.geojson",l=l||{},new Promise(function(e,t){var n=new XMLHttpRequest;for(var o in n.open(l.method||"get",s,!0),l.headers)n.setRequestHeader(o,l.headers[o]);function a(){var o,r=[],i=[],c={};return n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){r.push(t=t.toLowerCase()),i.push([t,n]),c[t]=(o=c[t])?o+","+n:n}),{ok:2==(n.status/100|0),status:n.status,statusText:n.statusText,url:n.responseURL,clone:a,text:function(){return Promise.resolve(n.responseText)},json:function(){return Promise.resolve(n.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([n.response]))},headers:{keys:function(){return r},entries:function(){return i},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}}n.withCredentials="include"==l.credentials,n.onload=function(){e(a())},n.onerror=t,n.send(l.body||null)})).then(function(e){return e.json()})]).then(function(e){var t=v(e,2),y=(t[0],t[1]),f={},h={},n=y.features.length,g=[];y.features=y.features.filter(function(e,t){var n=e.properties,o=n.id,r=n.country,i=!h[o],c=v(e.geometry.coordinates,2),a=c[0],s=c[1];if(i){if(!f[r]){var l=e.properties.cc.toLowerCase();f[r]={cc:l,bounds:new mapboxgl.LngLatBounds,places_count:0,checkins_count:0}}f[r].bounds.extend([a,s]),f[r].places_count++,h[o]=!0}f[r].checkins_count++;var u=y.features[t+1];if(u&&e.properties.date===u.properties.date){var d=v(u.geometry.coordinates,2),p=d[0],m=d[1];p+=180<p-a?-360:180<a-p?360:0,g.push([[a,s],[p,m]])}return i});var o=Object.keys(h).length,r=Object.keys(f).map(function(e){var t=f[e];return{name:e,cc:t.cc,bounds:t.bounds,places_count:t.places_count,checkins_count:t.checkins_count}}),i=r.length;r.sort(function(e,t){return t.places_count-e.places_count}),r.forEach(function(e,t){var n=e.cc,o=e.name,r=e.bounds,i=e.checkins_count,c=e.places_count,a=document.createElement("button");a.type="button",a.addEventListener("click",function(e){b.fitBounds(r,{padding:150})},!1),a.innerHTML='\n      <img src="data/countries/'.concat(n,'.svg" width="50" height="50" alt=""><br>\n      <b>').concat(o,"</b>\n      <br>\n      ").concat(P(i)," check-in").concat(1<i?"s":"","\n      <br>\n      ").concat(P(c)," place").concat(1<c?"s":"","\n    "),L.appendChild(a)});var c,a,s,l=b.getStyle().layers.reverse(),u=l.findIndex(function(e){return"symbol"!==e.type}),d=-1!==u?l[u].id:void 0;l.forEach(function(e){"place"===e["source-layer"]&&e.maxzoom?b.setLayerZoomRange(e.id,Math.min(e.maxzoom-4,24),24):"boundary"===e["source-layer"]?b.setPaintProperty(e.id,"line-opacity",.2):"transportation"===e["source-layer"]&&b.setPaintProperty(e.id,"line-opacity",.6)}),b.setPaintProperty("background","background-color","#080808"),b.addSource("checkins",{type:"geojson",data:y,cluster:!0,clusterMaxZoom:10,clusterRadius:10}),b.addLayer({id:"cluster",type:"circle",source:"checkins",filter:["has","point_count"],paint:{"circle-radius":["interpolate",["linear"],["get","point_count"],3,7,10,10,100,13,200,16],"circle-color":m,"circle-opacity":.9,"circle-stroke-width":["interpolate",["linear"],["get","point_count"],3,3,50,6],"circle-stroke-color":m,"circle-stroke-opacity":.3}}),b.addLayer({id:"checkins-count",type:"symbol",source:"checkins",filter:["has","point_count"],maxzoom:11,layout:{"text-field":"{point_count_abbreviated}","text-size":10}}),b.addLayer({id:"checkins",type:"circle",source:"checkins",minzoom:8,filter:["!has","point_count"],paint:{"circle-radius":3,"circle-color":m,"circle-opacity":.9,"circle-stroke-width":3,"circle-stroke-color":m,"circle-stroke-opacity":.1}},d),b.once("data",function(){requestAnimationFrame(function(){C(x,n),C(w,o),C(k,i),E.add("render")})}),b.on("mouseenter","cluster",function(){b.getCanvas().style.cursor="pointer"}),b.on("click","cluster",function(e){e.originalEvent.stopPropagation(),b.flyTo({center:e.lngLat,zoom:b.getZoom()+2})}),b.on("mouseleave","cluster",function(){b.getCanvas().style.cursor=""}),b.addLayer({id:"lines",type:"line",source:{type:"geojson",data:{type:"Feature",geometry:{type:"MultiLineString",coordinates:g}}},layout:{visibility:"none"},paint:{"line-color":"#fff","line-opacity":.3}},d),b.addLayer({id:"3d-buildings",source:"openmaptiles","source-layer":"building",type:"fill-extrusion",minzoom:14,paint:(c={"fill-extrusion-color":"#999","fill-extrusion-height":50,"fill-extrusion-opacity":.1,"fill-extrusion-base":{type:"identity",property:"min_height"}},a="fill-extrusion-opacity",s=.6,a in c?Object.defineProperty(c,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[a]=s,c)},d);var p=function(e){confirm("Oops, the map is acting weird now. Reload this page? 😅")&&location.reload(),console.error(e)};b.on("error",p),window.onerror=p})}();
//# sourceMappingURL=app.js.map
