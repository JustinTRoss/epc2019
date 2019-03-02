(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/TileLayer":438,"esri/layers/support/arcgisLayers":1426,"esri/layers/support/sublayerUtils":1638,"esri/layers/mixins/ArcGISMapService":1657,"esri/layers/mixins/SublayersOwner":1658})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1426:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(10),t(29),t(9),t(6),t(142),t(142),t(1569)],void 0===(a=function(e,r,n,a,i,o,s,l,u){function p(e){return(0,u.layerLookupMap[e])()}function c(e){return a(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=function(e){return function(e){var r=l.parse(e);if(!r)return o.reject(new i("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var t,n=r.serverType,a=r.sublayer;switch(n){case"MapServer":t=null!=a?"FeatureLayer":function(e){return c(e).then(function(e){return e.tileInfo})}(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":t=c(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":t=c(r.url.path).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"});break;default:t={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"}[n]}var s,u={FeatureLayer:!0,SceneLayer:!0},y={parsedUrl:r,Constructor:null,sublayerIds:null};return o.when(t).then(function(r){if(s=r,u[r]&&null==a)return function(e){return c(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}(e).then(function(e){1!==e.length&&(y.sublayerIds=e)})}).then(function(){return p(s)}).then(function(e){return y.Constructor=e,y})}(e.url).then(function(r){var a=function(e,r){var t=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===t||"esri.layers.StreamLayer"===t?n({outFields:["*"]},r):r}(r,n({},e.properties,{url:e.url}));return r.sublayerIds?o.create(function(e){return t.e(16).then(function(){var r=[t(1425)];e.apply(null,r)}.bind(this)).catch(t.oe)}).then(function(e){var t=new e({title:r.parsedUrl.title});return function(e,r){return e.sublayerIds.map(function(t){return new e.Constructor(n({},r,{layerId:t,sublayerTitleMode:"service-name"}))})}(r,a).forEach(function(e){return t.add(e)}),o.resolve(t)}):o.resolve(new r.Constructor(a))})},r.fetchServerVersion=function(e){if(!s.test(e))return o.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return a(r,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:o.reject()})}}.apply(null,n))||(e.exports=a)},1638:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(295)],void 0===(a=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.isExportDynamic=function(e,r,n){return!!e.some(function(e){var r=e.source;return!(!r||r.type===t.MAPLAYER&&r.mapLayerId===e.id&&(!r.gdbVersion||r.gdbVersion===n.gdbVersion))||null!=e.renderer||null!=e.labelingInfo||e.hasOwnProperty("opacity")&&null!=e.opacity||e.hasOwnProperty("labelsVisible")&&null!=e.labelsVisible})||!function(e,r){if(!e||!e.length)return!0;var t=[];if(r.forEach(function e(r){var n=r.id,a=r.sublayers;t.unshift(n),a&&a.forEach(e)}),e.length>t.length)return!1;for(var n=0,a=t.length,i=0,o=e;i<o.length;i++){for(var s=o[i].id;n<a&&t[n]!==s;)n++;if(n>=a)return!1}return!0}(e,r)},r.sameStructureAsService=function(e,r){return r.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reverse().every(function(r,t){var n=e[t];return n&&r.id===n.id&&(null==r.sublayers&&null==n.sublayers||null!=r.sublayers&&null!=n.sublayers&&r.sublayers.map(function(e){return e.id}).join(",")===n.sublayers.map(function(e){return e.id}).join(","))})}}.apply(null,n))||(e.exports=a)},1657:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(1),t(0),t(2),t(19),t(24),t(207),t(93)],void 0===(a=function(e,r,t,n,a,i,o,s,l){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map(function(e){return e.toLowerCase().trim()});if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var n=this.type,a=-1!==t.indexOf("query"),i=-1!==t.indexOf("map"),o=!!r.exportTilesAllowed,s=-1!==t.indexOf("tilemap"),l="tile"!==n&&!!r.supportsDynamicLayers,u="tile"!==n&&(!r.tileInfo||l),p="tile"!==n&&(!r.tileInfo||l);return{operations:{supportsQuery:a,supportsExportMap:i,supportsExportTiles:o,supportsTileMap:s},exportMap:i?{supportsSublayersChanges:"tile"!==n,supportsDynamicLayers:l,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:p}:null,exportTiles:o?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},n([a.property({readOnly:!0})],r.prototype,"capabilities",void 0),n([a.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),n([a.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),n([a.property({type:i})],r.prototype,"fullExtent",void 0),n([a.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),n([a.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),n([a.property(l.popupEnabled)],r.prototype,"popupEnabled",void 0),n([a.property({type:o})],r.prototype,"spatialReference",void 0),n([a.property()],r.prototype,"version",void 0),n([a.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),n([a.subclass("esri.layers.mixins.ArcGISMapService")],r)}(a.declared(s))}.apply(null,n))||(e.exports=a)},1658:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(10),t(1),t(0),t(5),t(16),t(291),t(9),t(3),t(7),t(2),t(21),t(88),t(456),t(1638)],void 0===(a=function(e,r,t,n,a,i,o,s,l,u,p,c,y,d,f,v){function b(e,r,t){var n=[],a={};return e.forEach(function(e){var i=new f;if(i.read(e,r),t&&(-1===t.indexOf(i.id)?i.visible=!1:i.visible=!0),a[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){var o=a[e.parentLayerId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(i)}else n.unshift(i)}),n}function h(e){return e.__accessor__.store._values}function m(e){return e.__accessor__.overridden}Object.defineProperty(r,"__esModule",{value:!0});var g=p.getLogger("esri.layers.TileLayer"),S=function(e){function r(){var r=e.call(this)||this;return r.allSublayers=new s({root:r,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),r.watch("sublayers",function(e,t){return r._handleSublayersChange(e,t)},!0),r}return n(r,e),r.prototype.readServiceSublayers=function(e,r,t){return b(r.layers,t)},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){return!r.layers&&r.visibleLayers?r.visibleLayers.map(function(e){return{id:e}}):b(r.layers,t,r.visibleLayers)},r.prototype.readSublayers=function(e,r,t){var n=b(r.layers,t);return this._updateSublayersForOrigin(d.OriginId.PORTAL_ITEM,n),this._updateSublayersForOrigin(d.OriginId.WEB_MAP,n),this._updateSublayersForOrigin(d.OriginId.WEB_SCENE,n),n},r.prototype.writeSublayers=function(e,r,n,a){var i=e.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reverse(),o=this.serviceSublayers.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reduce(function(e,r){return e.set(r.id,r),e},new Map),s=!1,l=!0;this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers?(s=v.isExportDynamic(i,this.serviceSublayers,this),l=!s&&v.sameStructureAsService(i,this.serviceSublayers)):l=v.sameStructureAsService(i,this.serviceSublayers),r.layers=[],i.forEach(function(e){var n=o.get(e.id),i=t({writeAsDynamic:s,writeOverridesOnly:l,serviceSublayer:n},a),u=e.write({},i);(!l||l&&Object.keys(u).length>1)&&r.layers.push(u)}),r.visibleLayers=i.filter(function(e){return e.visible}).map(function(e){return e.id})},r.prototype.findSublayerById=function(e){return this.allSublayers.find(function(r){return r.id===e})},r.prototype.createServiceSublayers=function(){return this.serviceSublayers.map(function(e){return e.clone()})},r.prototype._updateSublayersForOrigin=function(e,r){var t=this.__accessor__.store;if(t.has("sublayers",e)){var n=t.get("sublayers",e).flatten(function(e){return e.sublayers});if(n.every(function(e){return!h(e).hasOwnProperty("minScale")})){var a=n.reduce(function(e,r){return e.set(r.id,r),e},new Map),i=r.map(function(e){return function e(r,t){var n=t.get(r.id);return n?(u.mixin(h(r),h(n)),m(n)&&(r.__accessor__.overridden=u.mixin(m(r)||{},m(n))),n.sublayers&&(r.sublayers=n.sublayers.map(function(r){return e(r,t)}))):r.sublayers&&r.sublayers.forEach(function(r){return e(r,t)}),r}(e.clone(),a)});t.set("sublayers",new(o.ofType(f))(i),e)}}},r.prototype._handleSublayersChange=function(e,r){var t=this;r&&(r.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t}),this._sublayersHandles=[e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})],"tile"===this.type&&this._sublayersHandles.push(e.on("before-changes",function(e){g.error(new l("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault()})))},a([c.property({readOnly:!0})],r.prototype,"allSublayers",void 0),a([c.property({readOnly:!0,type:o.ofType(f)})],r.prototype,"serviceSublayers",void 0),a([c.reader("service","serviceSublayers",["layers"])],r.prototype,"readServiceSublayers",null),a([c.property({value:null,type:o.ofType(f),json:{type:[Number],write:{target:"subLayerIds",allowNull:!0}}})],r.prototype,"sublayers",void 0),a([c.reader(["web-map","web-scene","portal-item"],"sublayers",["layers","visibleLayers"])],r.prototype,"readSublayersFromItemOrWebMap",null),a([c.reader("service","sublayers",["layers"])],r.prototype,"readSublayers",null),a([c.writer(["web-map","web-scene","portal-item"],"sublayers",{layers:{type:[f]},visibleLayers:{type:[y.Integer]}})],r.prototype,"writeSublayers",null),a([c.subclass("esri.layers.mixins.SublayersOwner")],r)}(c.declared(i));r.default=S}.apply(null,n))||(e.exports=a)},438:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(10),t(1),t(0),t(72),t(33),t(29),t(6),t(23),t(2),t(69),t(455),t(1657),t(194),t(192),t(440),t(439),t(1658),t(1426),t(142),t(93)],void 0===(a=function(e,r,n,a,i,o,s,l,u,p,c,y,d,f,v,b,h,m,g,S,_,L){var T=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function r(r,t){var n=e.call(this)||this;return n.spatialReference=null,n.sublayers=null,n.type="tile",n.url=null,n}return a(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?n({url:e},r):e},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()})),this.when()},Object.defineProperty(r.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&s.SpatialReference.fromJSON(e)},Object.defineProperty(r.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),r.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return p.urlToObject(e).path}):null},r.prototype.fetchTile=function(e,r,t,n){var a=this.getTileUrl(e,r,t),i={responseType:"image"};return n&&n.timestamp&&(i.query={_ts:n.timestamp}),l(a,i).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,r,t){var a=!this.tilemapCache&&this.supportsBlankTile,i=o.objectToQuery(n({},this.parsedUrl.query,{blankTile:!a&&null,token:this.token?encodeURIComponent(this.token):null})),s=this.tileServers;return(s&&s.length?s[r%s.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+t+(i?"?"+i:"")},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return u.create(function(e){return t.e(13).then(function(){var r=[t(1725)];e.apply(null,r)}.bind(this)).catch(t.oe)});case"3d":return u.create(function(e){return Promise.all([t.e(5),t.e(12)]).then(function(){var r=[t(1726)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._fetchService=function(){var e=this;return u.create(function(r,t){e.resourceInfo?r({data:e.resourceInfo}):l(e.parsedUrl.path,{query:n({f:"json"},e.parsedUrl.query),responseType:"json"}).then(r,t)}).then(function(r){if(r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl}),10.1===e.version&&!_.isHostedAgolService(e.url))return S.fetchServerVersion(e.url).then(function(r){e.read({currentVersion:r})}).catch(function(){})})},r.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},r.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,n=T.length;t<n;t++)if((r=T[t]).toLowerCase().indexOf(e)>-1)return p.makeAbsolute("//static.arcgis.com/attribution/"+r)}},r.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},i([c.property({readOnly:!0,dependsOn:["parsedUrl"]})],r.prototype,"attributionDataUrl",null),i([c.property({readOnly:!0})],r.prototype,"operationalLayerType",null),i([c.property()],r.prototype,"popupTemplates",void 0),i([c.property({type:s.SpatialReference})],r.prototype,"spatialReference",void 0),i([c.reader("spatialReference",["spatialReference","tileInfo"])],r.prototype,"readSpatialReference",null),i([c.property()],r.prototype,"resourceInfo",void 0),i([c.property({readOnly:!0})],r.prototype,"sublayers",void 0),i([c.property({dependsOn:["parsedUrl"],readOnly:!0})],r.prototype,"tileServers",null),i([c.cast("tileServers")],r.prototype,"castTileServers",null),i([c.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([c.property(L.url)],r.prototype,"url",void 0),i([c.subclass("esri.layers.TileLayer")],r)}(c.declared(y,g.default,f,d,m,v,b,h))}.apply(null,n))||(e.exports=a)}}]);