(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/WMSLayer":1439,"esri/layers/support/ExportWMSImageParameters":1905,"esri/layers/support/wmsUtils":1981,"esri/layers/support/WMSSublayer":2265})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1439:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(10),r(1),r(0),r(208),r(55),r(41),r(104),r(29),r(16),r(291),r(17),r(6),r(2),r(127),r(19),r(24),r(63),r(69),r(194),r(192),r(440),r(439),r(142),r(93),r(1905),r(2265),r(1981)],void 0===(a=function(e,t,n,a,i,o,s,l,u,p,y,f,c,d,m,h,b,g,v,x,w,E,O,S,N,I,P,_,R){function L(e,t){return e.some(function(e){for(var r in e)if(h.willPropertyWrite(e,r,null,t))return!0;return!1})}function U(e,t,r){var n=[],a=new Map;return e.forEach(function(e){var i=new _;if(i.read(e,t),r&&-1===r.indexOf(i.name)&&(i.visible=!1),a[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){var o=a[e.parentLayerId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(i)}else n.unshift(i)}),n}return function(e){function t(t,r){var n=e.call(this)||this;return n._sublayersHandles=new c,n.allSublayers=new f({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.customParameters=null,n.customLayerParameters=null,n.copyright=null,n.description=null,n.fullExtent=null,n.fullExtents=null,n.featureInfoFormat=null,n.featureInfoUrl=null,n.imageFormat=null,n.imageMaxHeight=2048,n.imageMaxWidth=2048,n.imageTransparency=!0,n.legendEnabled=!0,n.mapUrl=null,n.operationalLayerType="WMS",n.spatialReference=null,n.spatialReferences=null,n.sublayers=null,n.type="wms",n.url=null,n.version=null,n.watch("sublayers",function(e,t){t&&(t.forEach(function(e){e.layer=null}),n._sublayersHandles.removeAll(),n._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=n,e.layer=n}),n._sublayersHandles||(n._sublayersHandles=new c),n._sublayersHandles.add([e.on("after-add",function(e){var t=e.item;t.parent=n,t.layer=n}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})]))},!0),n}return a(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?n({url:e},t):e},t.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]}).then(function(){return e._fetchService()})),this.when()},t.prototype.readFullExtentFromItemOrMap=function(e,t,r){var n=t.extent,a=t.spatialReferences;return new b(a&&a.length>0?{xmin:n[0][0],ymin:n[0][1],xmax:n[1][0],ymax:n[1][1],spatialReference:a[0]}:{xmin:n[0][0],ymin:n[0][1],xmax:n[1][0],ymax:n[1][1]})},t.prototype.writeFullExtent=function(e,t,r,n){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]},t.prototype.readImageFormat=function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]},t.prototype.readSpatialReferenceFromItemOrDocument=function(e,t,r){return new g(t.spatialReferences[0])},t.prototype.writeSpatialReferences=function(e,t,r,n){var a=this.spatialReference&&this.spatialReference.wkid;e&&a?(t.spatialReferences=e.filter(function(e){return e!==a}),t.spatialReferences.unshift(a)):t.spatialReferences=e},t.prototype.readSublayersFromItemOrMap=function(e,t,r){return U(t.layers,r,t.visibleLayers)},t.prototype.readSublayers=function(e,t,r){return U(t.layers,r)},t.prototype.writeSublayers=function(e,t,r,a){t.layers=[];var i=new Map,o=e.flatten(function(e){var t=e.sublayers;return t&&t.toArray()}).toArray();o.forEach(function(e){"number"==typeof e.parent.id&&(i.has(e.parent.id)?i.get(e.parent.id).push(e.id):i.set(e.parent.id,[e.id]))}),o.forEach(function(e){var r=n({sublayer:e},a),o=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(i.has(e.id)&&(o.sublayerIds=i.get(e.id)),!e.sublayers&&e.name){var s=e.write({},r);delete s.id,t.layers.push(s)}}),t.visibleLayers=o.filter(function(e){return e.visible&&!e.sublayers}).map(function(e){return e.name})},t.prototype.createExportImageParameters=function(e){return this._exportWMSImageParameters=new P({layer:this,extent:e}),this._exportWMSImageParameters.toJSON()},t.prototype.fetchImage=function(e,t,r,a){var i=this.mapUrl,o={responseType:"image",query:this._mixCustomParameters(n({width:t,height:r},this.createExportImageParameters(e)))};return a&&a.timestamp&&(o.query=n({_ts:a.timestamp},o.query)),p(i,o).then(function(e){return e.data})},t.prototype.fetchFeatureInfo=function(e,t,r,a,i){var o=this,s=R.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!s)return null;var y="1.3.0"===this.version?{I:a,J:i}:{x:a,y:i},f=n({query_layers:s,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},y),c=n({},this.createExportImageParameters(e),f);return c=this._mixCustomParameters(c),p(this.featureInfoUrl,{query:c,responseType:"text"}).then(function(e){var t=o.featureInfoUrl;for(var r in t+=-1===t.indexOf("?")?"?":"",c)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=r+"="+c[r];return new l({sourceLayer:o,popupTemplate:new u({title:o.title,content:'<iframe src="'+t+'" frameborder="0" marginwidth="0" marginheight="0">'+e.data+"</iframe>"})})})},t.prototype.findSublayerById=function(e){return this.allSublayers.find(function(t){return t.id===e})},t.prototype.supportsSpatialReference=function(e){return N.isWmsServer(this.url)||this.spatialReferences.some(function(t){var r=900913===t?g.WebMercator:new g({wkid:t});return v.equals(r,e)})},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return d.create(function(e){return Promise.all([r.e(14),r.e(82)]).then(function(){var t=[r(2492)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return d.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(50)]).then(function(){var t=[r(2493)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._fetchService=function(){var e=this;return d.resolve().then(function(){return e.resourceInfo?{data:e.resourceInfo}:(e.parsedUrl.query&&e.parsedUrl.query.service&&(e.parsedUrl.query.SERVICE=e.parsedUrl.query.service,delete e.parsedUrl.query.service),e.parsedUrl.query&&e.parsedUrl.query.request&&(e.parsedUrl.query.REQUEST=e.parsedUrl.query.request,delete e.parsedUrl.query.request),p(e.parsedUrl.path,{query:n({SERVICE:"WMS",REQUEST:"GetCapabilities"},e.parsedUrl.query,e.customParameters),responseType:"xml"}))}).then(function(t){if(!e.resourceInfo){t.data=R.parseCapabilities(t.data);var r=new o(e.parsedUrl.path);"https"!==r.scheme||r.port&&"443"!==r.port||-1!==s.request.httpsDomains.indexOf(r.host)||s.request.httpsDomains.push(r.host)}t.data&&e.read(t.data,{origin:"service"})})},t.prototype._mixCustomParameters=function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=n({},this.customParameters,this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e},i([m.property({readOnly:!0})],t.prototype,"allSublayers",void 0),i([m.property({json:{write:!0}})],t.prototype,"customParameters",void 0),i([m.property({json:{write:!0}})],t.prototype,"customLayerParameters",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"copyright",void 0),i([m.property()],t.prototype,"description",void 0),i([m.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],t.prototype,"fullExtent",void 0),i([m.reader(["web-document","portal-item"],"fullExtent",["extent"])],t.prototype,"readFullExtentFromItemOrMap",null),i([m.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],t.prototype,"writeFullExtent",null),i([m.property()],t.prototype,"fullExtents",void 0),i([m.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"featureInfoFormat",void 0),i([m.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"featureInfoUrl",void 0),i([m.property({type:String,json:{origins:{"web-document":{default:"png",read:{source:"format"},write:{target:"format"}}}}})],t.prototype,"imageFormat",void 0),i([m.reader("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),i([m.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],t.prototype,"imageMaxHeight",void 0),i([m.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],t.prototype,"imageMaxWidth",void 0),i([m.property()],t.prototype,"imageTransparency",void 0),i([m.property(I.legendEnabled)],t.prototype,"legendEnabled",void 0),i([m.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"mapUrl",void 0),i([m.property({type:["WMS"]})],t.prototype,"operationalLayerType",void 0),i([m.property({type:g,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],t.prototype,"spatialReference",void 0),i([m.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],t.prototype,"readSpatialReferenceFromItemOrDocument",null),i([m.property({type:[Number],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],t.prototype,"spatialReferences",void 0),i([m.writer(["web-document","portal-item"],"spatialReferences")],t.prototype,"writeSpatialReferences",null),i([m.property({type:y.ofType(_),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(L(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],t.prototype,"sublayers",void 0),i([m.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],t.prototype,"readSublayersFromItemOrMap",null),i([m.reader("service","sublayers",["layers"])],t.prototype,"readSublayers",null),i([m.writer("sublayers",{layers:{type:[_]},visibleLayers:{type:[String]}})],t.prototype,"writeSublayers",null),i([m.property({json:{read:!1},readOnly:!0,value:"wms"})],t.prototype,"type",void 0),i([m.property(I.url)],t.prototype,"url",void 0),i([m.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"version",void 0),i([m.subclass("esri.layers.WMSLayer")],t)}(m.declared(x,w,E,O,S))}.apply(null,n))||(e.exports=a)},1905:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(10),r(1),r(0),r(5),r(17),r(2),r(1981)],void 0===(a=function(e,t,r,n,a,i,o,s,l){var u={visible:"visibleSublayers"},p=[102100,3857,102113,900913],y=[3395,54004];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerHandles=new o,t.extent=null,t}return n(t,e),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new o),this._layerHandles.add([e.sublayers.on("change",function(){return t.notifyChange("visibleSublayers")}),e.on("wms-sublayer-update",function(e){return t.notifyChange(u[e.propertyName])})])))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){return this.visibleSublayers.map(function(e){return e.name}).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.layer.sublayers,t=[],r=function(e){e.visible&&(e.sublayers?e.sublayers.forEach(r):t.unshift(e))};return e&&e.forEach(r),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=p.some(function(e){return e===r});if(!t)return r;if(n){var a=[];t.forEach(function(e){p.indexOf(e)>-1&&a.push(e)}),a.length||t.forEach(function(e){y.indexOf(e)>-1&&a.push(e)}),r=a.length>0?a[0]:p[0]}return r},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.layer,t=this.extent,n=this.wkid;e.spatialReferences&&-1===e.spatialReferences.indexOf(n)&&t.spatialReference.latestWkid&&(n=t.spatialReference.latestWkid);var a={bbox:"1.3.0"===e.version&&l.coordsReversed(n)?t.ymin+","+t.xmin+","+t.ymax+","+t.xmax:t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version};return isNaN(n)||("1.3.0"===e.version?a.crs="EPSG:"+n:a.srs="EPSG:"+n),r({},a,{layers:this.layers})},a([s.property()],t.prototype,"extent",void 0),a([s.property()],t.prototype,"layer",null),a([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),a([s.property({dependsOn:["layers","layer.imageTransparency"]})],t.prototype,"version",null),a([s.property({readOnly:!0,dependsOn:["layer.sublayers"]})],t.prototype,"visibleSublayers",null),a([s.property()],t.prototype,"wkid",null),a([s.subclass("esri.layers.support.ExportWMSImageParameters")],t)}(s.declared(i))}.apply(null,n))||(e.exports=a)},1981:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(9),r(23),r(19),r(24)],void 0===(a=function(e,t,r,n,a,i){function o(e){return h.some(function(t){var r=t[0],n=t[1];return e>=r&&e<=n})}function s(e){var t=[];return e.forEach(function(e){t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(s(e.sublayers)),delete e.sublayers)}),t}function l(e,t){var r=t&&t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function u(e,t,r){var n=l(e,t);return n?n.textContent:r}function p(e,t,r){if(!e)return null;var n,o,s,l,u=parseFloat(e.getAttribute("minx")),p=parseFloat(e.getAttribute("miny")),y=parseFloat(e.getAttribute("maxx")),f=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(p)?-Number.MAX_VALUE:p,o=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(f)?Number.MAX_VALUE:f,l=isNaN(y)?Number.MAX_VALUE:y):(n=isNaN(u)?-Number.MAX_VALUE:u,o=isNaN(p)?-Number.MAX_VALUE:p,s=isNaN(y)?Number.MAX_VALUE:y,l=isNaN(f)?Number.MAX_VALUE:f);var c=new i({wkid:t});return new a({xmin:n,ymin:o,xmax:s,ymax:l,spatialReference:c})}function y(e,t){var r=l(t,e),n=l("DCPType",r);if(n){var a=l("HTTP",n);if(a){var i=l("Get",a);if(i){var o=function(e,t,r,n){var a=l(e,r);return a?a.getAttribute(t):n}("OnlineResource","xlink:href",i,null);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),d(o,["service","request"])}}}return null}function f(e,t){var r=e.getElementsByTagName("Operation");if(r&&r.length){var n=Array.prototype.slice.call(r),a=[];return n.forEach(function(e){if(e.getAttribute("name")===t){var r=e.getElementsByTagName("Format");Array.prototype.slice.call(r).forEach(function(e){a.push(e.textContent)})}}),a}var i=l(t,e).getElementsByTagName("Format");return Array.prototype.slice.call(i).map(function(e){return e.textContent})}function c(e,t){if(!e)return null;var r={id:m++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},n=l("LatLonBoundingBox",e),s=l("EX_GeographicBoundingBox",e),y=null;n&&(y=p(n,4326)),s&&((y=new a(0,0,0,0,new i({wkid:4326}))).xmin=parseFloat(u("westBoundLongitude",s,0)),y.ymin=parseFloat(u("southBoundLatitude",s,0)),y.xmax=parseFloat(u("eastBoundLongitude",s,0)),y.ymax=parseFloat(u("northBoundLatitude",s,0))),n||s||(y=new a(-180,-90,180,90,new i({wkid:4326})));var f=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(function(e){if("Name"===e.nodeName)r.name=e.textContent||"";else if("Title"===e.nodeName)r.title=e.textContent||"";else if("Abstract"===e.nodeName)r.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(f);if(n&&0===n.indexOf("EPSG:"))0===(i=parseInt(n.substring(5),10))||isNaN(i)||y||(y="1.3.0"===t?p(e,i,o(i)):p(e,i));var a=n&&n.indexOf(":");if(a&&a>-1){var i;0===(i=parseInt(n.substring(a+1,n.length),10))||isNaN(i)||(i=b[i]?b[i]:i);var s="1.3.0"===t?p(e,i,o(i)):p(e,i);r.fullExtents.push(s)}}else if(e.nodeName===f){e.textContent.split(" ").forEach(function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(b[e]&&(e=b[e]),-1===r.spatialReferences.indexOf(e)&&r.spatialReferences.push(e))})}else if("Style"!==e.nodeName||r.legendURL){if("Layer"===e.nodeName){var u=c(e,t);u&&(u.parentLayerId=r.id,r.sublayers||(r.sublayers=[]),r.sublayers.push(u))}}else{var d=l("LegendURL",e);if(d){var m=l("OnlineResource",d);m&&(r.legendURL=m.getAttribute("xlink:href"))}}}),r.extent=y&&y.toJSON(),r}function d(e,t){var r=[],a=n.urlToObject(e);for(var i in a.query)a.query.hasOwnProperty(i)&&-1===t.indexOf(i.toLowerCase())&&r.push(i+"="+a.query[i]);return a.path+(r.length?"?"+r.join("&"):"")}Object.defineProperty(t,"__esModule",{value:!0});var m,h=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],b={84:4326,83:4269,27:4267};t.parseCapabilities=function(e){if(e){m=-1,"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var t=e.documentElement;if("ServiceExceptionReport"===t.nodeName){var n=Array.prototype.slice.call(t.childNodes).map(function(e){return e.textContent}).join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",n)}var i=l("Layer",t);if(i){var o,p="WMS_Capabilities"===t.nodeName||"WMT_MS_Capabilities"===t.nodeName?t.getAttribute("version"):"1.3.0",d=l("Service",t),h=u("Title",d,"")||u("Name",d,""),b=u("AccessConstraints",d,""),g=u("Abstract",d,""),v=parseInt(u("MaxWidth",d,5e3),10),x=parseInt(u("MaxHeight",d,5e3),10),w=l("Capability",t),E=f(t,"GetMap"),O=y(t,"GetMap"),S=c(i,p),N=0;if(Array.prototype.slice.call(w.childNodes).forEach(function(e){"Layer"===e.nodeName&&(0===N?o=e:1===N?(S.name&&(S.name="",S.sublayers.push(c(o,p))),S.sublayers.push(c(e,p))):S.sublayers.push(c(e,p)),N++)}),!S)return null;var I,P,_,R=S.fullExtents;if((I=S.sublayers)||(I=[]),0===I.length&&I.push(S),!(P=S.extent)){var L=new a(I[0].extent);S.extent=L.toJSON(),P=S.extent}if(!(_=S.spatialReferences).length&&I.length>0){var U=function(e){var t=[];return e.sublayers.forEach(function(e){!t.length&&e.spatialReferences.length&&(t=e.spatialReferences||U(e))}),t};I.forEach(function(e){_.length||(_=e.spatialReferences||U(e))})}var j,M=y(t,"GetFeatureInfo");if(M){var F=f(t,"GetFeatureInfo");F.indexOf("text/html")>-1?j="text/html":F.indexOf("text/plain")>-1&&(j="text/plain")}if(!j){var A=function(e){e&&(e.queryable=!1,e.sublayers&&e.sublayers.forEach(function(e){A(e)}))};A(S)}return{copyright:b,description:g,extent:P,fullExtents:R,featureInfoFormat:j,featureInfoUrl:M,mapUrl:O,maxImageWidth:v,maxImageHeight:x,layers:s(I),spatialReferences:_,supportedImageFormatTypes:E,title:h,version:p}}}},t.coordsReversed=o,t.getPopupLayers=function(e){return e.length?e.filter(function(e){return e.popupEnabled&&e.name&&e.queryable}).map(function(e){return e.name}).join(","):""}}.apply(null,n))||(e.exports=a)},2265:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(1),r(0),r(56),r(16),r(17),r(146),r(2),r(21),r(19)],void 0===(a=function(e,t,r,n,a,i,o,s,l,u,p){var y=0;return function(e){function t(t){var r=e.call(this)||this;return r._sublayersHandles=new o,r.fullExtents=null,r.featureInfoFormat=null,r.featureInfoUrl=null,r.legendUrl=null,r.legendEnabled=!0,r.popupEnabled=!1,r.queryable=!1,r.spatialReferences=null,r}var a;return r(t,e),a=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)},enumerable:!0,configurable:!0}),t.prototype.readExtent=function(e,t,r){return(e=t.extent)?p.fromJSON(e):null},Object.defineProperty(t.prototype,"id",{get:function(){var e=this._get("id");return null==e?y++:e},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(t){return t.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._get("name")},set:function(e){this._set("name",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sublayers",{set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach(function(e){e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t.layer}),this._sublayersHandles.add([e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t.layer}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})])),this._set("sublayers",e)},enumerable:!0,configurable:!0}),t.prototype.castSublayers=function(e){return u.default(i.ofType(a),e)},Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new a;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(function(e){return e.clone()})),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(function(e){return e.clone()})),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(function(e){return e})),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e},t.prototype._setAndNotifyLayer=function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))},n([l.property()],t.prototype,"description",null),n([l.property({value:null})],t.prototype,"fullExtent",null),n([l.reader("fullExtent",["extent"])],t.prototype,"readExtent",null),n([l.property()],t.prototype,"fullExtents",void 0),n([l.property()],t.prototype,"featureInfoFormat",void 0),n([l.property()],t.prototype,"featureInfoUrl",void 0),n([l.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"id",null),n([l.property({type:String,json:{origins:{"web-document":{read:{source:"legendUrl"},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],t.prototype,"legendUrl",void 0),n([l.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],t.prototype,"legendEnabled",void 0),n([l.property({value:null})],t.prototype,"layer",null),n([l.property({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],t.prototype,"name",null),n([l.property()],t.prototype,"parent",void 0),n([l.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],t.prototype,"popupEnabled",void 0),n([l.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],t.prototype,"queryable",void 0),n([l.property()],t.prototype,"sublayers",null),n([l.cast("sublayers")],t.prototype,"castSublayers",null),n([l.property({type:[Number],json:{read:{source:"spatialReferences"}}})],t.prototype,"spatialReferences",void 0),n([l.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),n([l.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],t.prototype,"visible",null),a=n([l.subclass("esri.layers.support.WMSSublayer")],t)}(l.declared(s))}.apply(null,n))||(e.exports=a)}}]);