(function(){(this||window).webpackJsonp.registerAbsMids({"esri/geometry/support/aaBoundingBox":1474,"esri/views/3d/support/buffer/typedArrayUtil":1494,"esri/layers/graphics/dehydratedFeatures":1504,"esri/core/HandleOwner":1512,"esri/views/layers/RefreshableLayerView":1529,"esri/views/layers/LayerView":1532,"esri/geometry/support/quantizationUtils":1533,"esri/views/3d/layers/support/layerViewUpdatingProperties":1547,"esri/views/3d/layers/LayerView3D":1552,"esri/renderers/support/clickToleranceUtils":1570,"esri/layers/graphics/dehydratedFeatureComparison":1646,"esri/views/3d/layers/TileLayerView3D":1726,"esri/views/3d/layers/support/popupUtils3D":1754,"esri/views/3d/terrain/terrainUtils":1759,"esri/views/3d/layers/TiledLayerView3D":1771,"esri/views/3d/terrain/terrainUtilsPlanar":1772,"esri/views/3d/terrain/terrainUtilsSpherical":1773,"esri/views/3d/layers/support/tiledLayerUtils":1897,"esri/views/layers/TileLayerView":1947})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1474:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(19),r(82)],void 0===(i=function(e,t,r,n){function i(e){return e}function a(e){return void 0===e&&(e=t.ZERO),i([e[0],e[1],e[2],e[3],e[4],e[5]])}function o(e,t,r,n,i,o,s){return void 0===s&&(s=a()),s[0]=e,s[1]=t,s[2]=r,s[3]=n,s[4]=i,s[5]=o,s}function s(e){return e[0]>=e[3]?0:e[3]-e[0]}function l(e){return e[1]>=e[4]?0:e[4]-e[1]}function u(e){return e[2]>=e[5]?0:e[5]-e[2]}function c(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function p(e){return 6===e.length}Object.defineProperty(t,"__esModule",{value:!0}),t.create=a,t.fromValues=o,t.fromExtent=function(e,t){return void 0===t&&(t=a()),t[0]=e.xmin,t[1]=e.ymin,t[2]=e.zmin,t[3]=e.xmax,t[4]=e.ymax,t[5]=e.zmax,t},t.toExtent=function(e,t){var n=isFinite(e[2])||isFinite(e[5]);return new r(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})},t.fromMinMax=function(e,t,r){return void 0===r&&(r=a()),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r},t.expandPointInPlace=function(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[3]&&(e[3]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[4]&&(e[4]=t[1]),t[2]<e[2]&&(e[2]=t[2]),t[2]>e[5]&&(e[5]=t[2])},t.expand=function(e,t,r){return void 0===r&&(r=e),p(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[3]),r[4]=Math.max(e[4],t[4]),r[5]=Math.max(e[5],t[5])):n.is(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[2]),r[4]=Math.max(e[4],t[3])):2===t.length?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1])):3===t.length&&(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1]),r[5]=Math.max(e[5],t[2])),r},t.expandWithBuffer=function(e,t,r,n,i){void 0===i&&(i=e);for(var a=e[0],o=e[1],s=e[2],l=e[3],u=e[4],c=e[5],p=0;p<n;p++)a=Math.min(a,t[r+3*p]),o=Math.min(o,t[r+3*p+1]),s=Math.min(s,t[r+3*p+2]),l=Math.max(l,t[r+3*p]),u=Math.max(u,t[r+3*p+1]),c=Math.max(c,t[r+3*p+2]);return i[0]=a,i[1]=o,i[2]=s,i[3]=l,i[4]=u,i[5]=c,i},t.expandWithNestedArray=function(e,t,r,n){void 0===n&&(n=e);var i=t.length,a=e[0],o=e[1],s=e[2],l=e[3],u=e[4],c=e[5];if(r)for(var p=0;p<i;p++){var f=t[p];a=Math.min(a,f[0]),o=Math.min(o,f[1]),s=Math.min(s,f[2]),l=Math.max(l,f[0]),u=Math.max(u,f[1]),c=Math.max(c,f[2])}else for(p=0;p<i;p++)f=t[p],a=Math.min(a,f[0]),o=Math.min(o,f[1]),l=Math.max(l,f[0]),u=Math.max(u,f[1]);return n[0]=a,n[1]=o,n[2]=s,n[3]=l,n[4]=u,n[5]=c,n},t.allFinite=function(e){for(var t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0},t.width=s,t.depth=l,t.height=u,t.diameter=function(e){var t=s(e),r=u(e),n=l(e);return Math.sqrt(t*t+r*r+n*n)},t.center=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=e[0]+s(e)/2,t[1]=e[1]+l(e)/2,t[2]=e[2]+u(e)/2,t},t.size=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=s(e),t[1]=l(e),t[2]=u(e),t},t.maximumDimension=function(e){return Math.max(s(e),u(e),l(e))},t.containsPoint=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]},t.containsPointWithMargin=function(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[2]>=e[2]-r&&t[0]<=e[3]+r&&t[1]<=e[4]+r&&t[2]<=e[5]+r},t.contains=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]},t.intersects=function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])},t.offset=function(e,t,r,n,i){return void 0===i&&(i=e),i[0]=e[0]+t,i[1]=e[1]+r,i[2]=e[2]+n,i[3]=e[3]+t,i[4]=e[4]+r,i[5]=e[5]+n,i},t.setMin=function(e,t,r){return void 0===r&&(r=e),r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r},t.setMax=function(e,t,r){return void 0===r&&(r=e),r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e},t.set=c,t.empty=function(e){return e?c(e,t.NEGATIVE_INFINITY):a(t.NEGATIVE_INFINITY)},t.toRect=function(e,t){return t||(t=n.create()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t},t.fromRect=function(e,t){return e[0]=t[0],e[1]=t[1],e[3]=t[2],e[4]=t[3],e},t.is=p,t.isPoint=function(e){return 0===s(e)&&0===l(e)&&0===u(e)},t.equals=function(e,t,r){if(null==e||null==t)return e===t;if(!p(e)||!p(t))return!1;if(r){for(var n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},t.wrap=function(e,t,r,n,i,a){return o(e,t,r,n,i,a,f)},t.POSITIVE_INFINITY=i([-1/0,-1/0,-1/0,1/0,1/0,1/0]),t.NEGATIVE_INFINITY=i([1/0,1/0,1/0,-1/0,-1/0,-1/0]),t.ZERO=i([0,0,0,0,0,0]);var f=a()}.apply(null,n))||(e.exports=i)},1494:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.forEach=function(e,t){if(e.forEach)e.forEach(t);else for(var r=0;r<e.length;r++)t(e[r],r,e)},t.slice=function(e,t,r){if(e.slice)return e.slice(t,r);void 0===t?t=0:(t<0&&(t+=e.length),t=Math.min(e.length,Math.max(0,t))),void 0===r?r=e.length:(r<0&&(r+=e.length),r=Math.min(e.length,Math.max(0,r)));for(var n=Math.max(0,r-t),i=new(0,e.constructor)(n),a=0;a<n;a++)i[a]=e[t+a];return i},t.isArrayBuffer=function(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name},t.isInt8Array=function(e){return e instanceof Int8Array||e&&e.constructor&&"Int8Array"===e.constructor.name},t.isUint8Array=function(e){return e instanceof Uint8Array||e&&e.constructor&&"Uint8Array"===e.constructor.name},t.isInt16Array=function(e){return e instanceof Int16Array||e&&e.constructor&&"Int16Array"===e.constructor.name},t.isUint16Array=function(e){return e instanceof Uint16Array||e&&e.constructor&&"Uint16Array"===e.constructor.name},t.isInt32Array=function(e){return e instanceof Int32Array||e&&e.constructor&&"Int32Array"===e.constructor.name},t.isUint32Array=function(e){return e instanceof Uint32Array||e&&e.constructor&&"Uint32Array"===e.constructor.name},t.isFloat32Array=function(e){return e instanceof Float32Array||e&&e.constructor&&"Float32Array"===e.constructor.name},t.isFloat64Array=function(e){return e instanceof Float64Array||e&&e.constructor&&"Float64Array"===e.constructor.name},t.toArray=function(e){for(var t=new Array(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}}.apply(null,n))||(e.exports=i)},1504:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(33),r(41),r(51),r(3),r(24),r(1474),r(82),r(1533),r(98),r(1494),r(1646)],void 0===(i=function(e,t,r,n,i,a,o,s,l,u,c,p,f){function h(e,t,r,i){return{uid:n.generateUID(),objectId:i&&e.attributes?e.attributes[i]:null,attributes:e.attributes,geometry:y(e.geometry,t,r),visible:!0}}function y(e,t,r){if(!e)return null;switch(t){case"point":var n=e;return{x:n.x,y:n.y,z:n.z,m:n.m,hasZ:null!=n.z,hasM:null!=n.m,type:t,spatialReference:r};case"polyline":var i=e;return{paths:i.paths,hasZ:!!i.hasZ,hasM:!!i.hasM,type:t,spatialReference:r};case"polygon":var a=e;return{rings:a.rings,hasZ:!!a.hasZ,hasM:!!a.hasM,type:t,spatialReference:r};case"multipoint":var o=e;return{points:o.points,hasZ:!!o.hasZ,hasM:!!o.hasM,type:t,spatialReference:r}}}function d(e,t,r,n){return{x:e,y:t,z:r,hasZ:null!=r,hasM:!1,spatialReference:n,type:"point"}}function m(e){return"declaredClass"in e}function v(e){return"declaredClass"in e}function g(e){if(!e)return 0;switch(e.type){case"point":return 1;case"polyline":for(var t=0,r=0,n=e.paths;r<n.length;r++)t+=n[r].length;return t;case"polygon":t=0;for(var a=0,o=e.rings;a<o.length;a++)t+=o[a].length;return t;case"multipoint":return e.points.length;case"extent":return 2;case"mesh":var s=e.vertexAttributes&&e.vertexAttributes.position;return s?s.length/3:0;default:i.neverReached(e)}}function x(e){var t=e.spatialReference.toJSON();switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:t};case"polygon":var r=e.rings,n=e.hasZ,a=e.hasM;return{rings:M(r),hasZ:n,hasM:a,spatialReference:t};case"polyline":var o=e.paths;n=e.hasZ,a=e.hasM;return{paths:M(o),hasZ:n,hasM:a,spatialReference:t};case"extent":return{xmin:e.xmin,xmax:e.xmax,ymin:e.ymin,ymax:e.ymax,zmin:e.zmin,zmax:e.zmax,mmin:e.mmin,mmax:e.mmax,hasZ:n=e.hasZ,hasM:a=e.hasM,spatialReference:t};case"multipoint":var s=e.points;n=e.hasZ,a=e.hasM;return{points:w(s)?b(s):s,hasZ:n,hasM:a,spatialReference:t};default:i.neverReached(e)}}function M(e){if(function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(0!==n.length)return w(n)}return!1}(e))return e.map(function(e){return b(e)})}function b(e){return e.map(function(e){return p.toArray(e)})}function w(e){return e.length&&(p.isFloat32Array(e[0])||p.isFloat64Array(e[0]))}function I(e,t){switch(s.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(var r=0;r<e.paths.length;r++)s.expandWithNestedArray(t,e.paths[r],e.hasZ);break;case"polygon":for(r=0;r<e.rings.length;r++)s.expandWithNestedArray(t,e.rings[r],e.hasZ);break;case"multipoint":s.expandWithNestedArray(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax);break;default:i.neverReached(e)}}function T(e,t){switch(l.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var r=0;r<e.paths.length;r++)l.expandWithNestedArray(t,e.paths[r]);break;case"polygon":for(r=0;r<e.rings.length;r++)l.expandWithNestedArray(t,e.rings[r]);break;case"multipoint":l.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax;break;default:i.neverReached(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=f.equals,t.isPoint=function(e){return"point"===e.type},t.fromFeatureSetJSON=function(e){var t=r.featureGeometryTypeKebabDictionary.fromJSON(e.geometryType),n=o.fromJSON(e.spatialReference),a=e.transform,s=e.features.map(function(r){var o=h(r,t,n,e.objectIdFieldName),s=o.geometry;if(s&&a)switch(s.type){case"point":o.geometry=u.hydratePoint(a,s,s,s.hasZ,s.hasM);break;case"multipoint":o.geometry=u.hydrateMultipoint(a,s,s,s.hasZ,s.hasM);break;case"polygon":o.geometry=u.hydratePolygon(a,s,s,s.hasZ,s.hasM);break;case"polyline":o.geometry=u.hydratePolyline(a,s,s,s.hasZ,s.hasM);break;default:i.neverReached(s)}return o});return{geometryType:t,features:s,spatialReference:n,fields:e.fields?e.fields.map(function(e){return c.fromJSON(e)}):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}},t.fromJSONGeometry=y,t.makeDehydratedPoint=d,t.isHydratedGeometry=m,t.isHydratedGraphic=v,t.hydrateGraphic=function(e,t){if(!e||v(e))return e;var r=new n({layer:t,sourceLayer:t});return r.visible=e.visible,r.symbol=a.clone(e.symbol),r.attributes=a.clone(e.attributes),e.geometry&&("mesh"===e.geometry.type?r.geometry=e.geometry:r.read({geometry:x(e.geometry)})),r},t.clonePoint=function(e){if(!e)return null;if(m(e))return e.clone();var t=d(e.x,e.y,e.z,e.spatialReference);return e.hasM&&(t.m=e.m,t.hasM=!0),t},t.estimateSize=function(e){for(var t=32,r=0,n=Object.keys(e.attributes);r<n.length;r++){var i=n[r];t+=i.length;var a=e.attributes[i];switch(typeof a){case"string":t+=a.length;break;default:case"number":t+=8}}return t+12*(e.geometry?"mesh"===e.geometry.type?0:g(e.geometry):0)},t.numVertices=g,t.hasVertices=function(e){if(!e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(var t=0,r=e.paths;t<r.length;t++)if(r[t].length>0)return!0;return!1;case"polygon":for(var n=0,a=e.rings;n<a.length;n++)if(a[n].length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return e.vertexAttributes&&e.vertexAttributes.position&&e.vertexAttributes.position.length>0;default:i.neverReached(e)}},t.computeAABB=I,t.expandAABB=function(e,t){I(e,P),s.expand(t,P)},t.computeAABR=T,t.expandAABR=function(e,t){T(e,A),l.expand(t,A)};var P=s.create(),A=l.create()}.apply(null,n))||(e.exports=i)},1512:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(5),r(17),r(2)],void 0===(i=function(e,t,r,n,i,a,o){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=e.call(this)||this;return n.handles=new a,n}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},n([o.property({readOnly:!0})],t.prototype,"handles",void 0),n([o.subclass("esri.core.HandleOwner")],t)}(o.declared(i))}.apply(null,n))||(e.exports=i)},1529:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(5),r(2)],void 0===(i=function(e,t,r,n,i,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return r(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},n([a.property()],t.prototype,"layer",void 0),n([a.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),n([a.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),n([a.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(a.declared(i))}.apply(null,n))||(e.exports=i)},1532:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(42),r(1512),r(95),r(7),r(191),r(6),r(2)],void 0===(i=function(e,t,r,n,i,a,o,s,l,u,c){return function(e){function t(t){var r=e.call(this)||this;return r.layer=null,r.parent=null,r.view=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";return s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+n+"', id: '"+r+"')",t),u.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},n([c.property()],t.prototype,"layer",void 0),n([c.property()],t.prototype,"parent",void 0),n([c.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),n([c.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),n([c.property()],t.prototype,"view",void 0),n([c.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),n([c.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),n([c.subclass("esri.views.layers.LayerView")],t)}(c.declared(a,i,o.Identifiable,l))}.apply(null,n))||(e.exports=i)},1533:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(52)],void 0===(i=function(e,t,r){function n(e){return e&&"upperLeft"===e.originPosition}function i(e,t){var r=e.scale,n=e.translate;return Math.round((t-n[0])/r[0])}function a(e,t){var r=e.scale,n=e.translate;return Math.round((n[1]-t)/r[1])}function o(e,t,r){for(var n,o,s,l,u=[],c=0;c<r.length;c++){var p=r[c];c>0?(s=i(e,p[0]),l=a(e,p[1]),s===n&&l===o||(u.push(t(p,s-n,l-o)),n=s,o=l)):(n=i(e,p[0]),o=a(e,p[1]),u.push(t(p,n,o)))}return u.length>0?u:null}function s(e,t,r,n){return o(e,r?n?A:P:n?P:T,t)}function l(e,t,r,n){for(var i=[],a=r?n?A:P:n?P:T,s=0;s<t.length;s++){var l=o(e,a,t[s]);l&&l.length>=3&&i.push(l)}return i.length?i:null}function u(e,t,r,n){for(var i=[],a=r?n?A:P:n?P:T,s=0;s<t.length;s++){var l=o(e,a,t[s]);l&&l.length>=2&&i.push(l)}return i.length?i:null}function c(e,t){var r=e.scale,n=e.translate;return t*r[0]+n[0]}function p(e,t){var r=e.scale;return e.translate[1]-t*r[1]}function f(e,t,r){var n=new Array(r.length);if(!r.length)return n;var i=e.scale,a=i[0],o=i[1],s=c(e,r[0][0]),l=p(e,r[0][1]);n[0]=t(r[0],s,l);for(var u=1;u<r.length;u++){var f=r[u];s+=f[0]*a,l-=f[1]*o,n[u]=t(f,s,l)}return n}function h(e,t,r){for(var n=new Array(r.length),i=0;i<r.length;i++)n[i]=f(e,t,r[i]);return n}function y(e,t,r,n){return f(e,r?n?A:P:n?P:T,t)}function d(e,t,r,n){return h(e,r?n?A:P:n?P:T,t)}function m(e,t,r,n){return h(e,r?n?A:P:n?P:T,t)}function v(e,t,r){for(var n=r[0],i=n[0],a=n[1],o=Math.min(i,t[0]),s=Math.min(a,t[1]),l=Math.max(i,t[2]),u=Math.max(a,t[3]),c=1;c<r.length;c++){var p=r[c],f=p[0],h=p[1];i+=f,a+=h,f<0&&(o=Math.min(o,i)),f>0&&(l=Math.max(l,i)),h<0?s=Math.min(s,a):h>0&&(u=Math.max(u,a))}return e[0]=o,e[1]=s,e[2]=l,e[3]=u,e}function g(e,t){if(!t.length)return null;e[0]=e[1]=Number.POSITIVE_INFINITY,e[2]=e[3]=Number.NEGATIVE_INFINITY;for(var r=0;r<t.length;r++)v(e,e,t[r]);return e}function x(e,t,r,n,o){return t.xmin=i(e,r.xmin),t.ymin=a(e,r.ymin),t.xmax=i(e,r.xmax),t.ymax=a(e,r.ymax),t!==r&&(n&&(t.zmin=r.zmin,t.zmax=r.zmax),o&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function M(e,t,r,n,i){return t.points=s(e,r.points,n,i),t}function b(e,t,r,n,o){return t.x=i(e,r.x),t.y=a(e,r.y),t!==r&&(n&&(t.z=r.z),o&&(t.m=r.m)),t}function w(e,t,r,n,i){var a=l(e,r.rings,n,i);return a?(t.rings=a,t):null}function I(e,t,r,n,i){var a=u(e,r.paths,n,i);return a?(t.paths=a,t):null}Object.defineProperty(t,"__esModule",{value:!0});var T=function(e,t,r){return[t,r]},P=function(e,t,r){return[t,r,e[2]]},A=function(e,t,r){return[t,r,e[2],e[3]]};t.toTransform=function(e){return e?{originPosition:"upperLeft",scale:[e.tolerance,e.tolerance],translate:[e.extent.xmin,e.extent.ymax]}:null},t.equals=function(e,t){return e===t||null==e&&null==t||null!=e&&null!=t&&(n(e)?(r=e.translate[0],i=e.translate[1],a=e.scale[0]):(r=e.extent.xmin,i=e.extent.ymax,a=e.tolerance),n(t)?(o=t.translate[0],s=t.translate[1],l=t.scale[0]):(o=t.extent.xmin,s=t.extent.ymax,l=t.tolerance),r===o&&i===s&&a===l);var r,i,a,o,s,l},t.quantizeX=i,t.quantizeY=a,t.quantizeBounds=function(e,t,r){return t[0]=i(e,r[0]),t[3]=a(e,r[1]),t[2]=i(e,r[2]),t[1]=a(e,r[3]),t},t.quantizePoints=s,t.quantizeRings=l,t.quantizePaths=u,t.hydrateX=c,t.hydrateY=p,t.hydrateCoordsArray=f,t.hydrateCoordsArrayArray=h,t.hydrateBounds=function(e,t,r){return r?(t[0]=c(e,r[0]),t[1]=p(e,r[3]),t[2]=c(e,r[2]),t[3]=p(e,r[1]),t):[c(e,t[0]),p(e,t[3]),c(e,t[2]),p(e,t[1])]},t.hydratePoints=y,t.hydratePaths=d,t.hydrateRings=m,t.getQuantizedBoundsCoordsArray=v,t.getQuantizedBoundsCoordsArrayArray=g,t.getQuantizedBoundsPoints=function(e){var t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return v(t,t,e)},t.getQuantizedBoundsPaths=function(e){return g([0,0,0,0],e)},t.getQuantizedBoundsRings=function(e){return g([0,0,0,0],e)},t.quantizeExtent=x,t.quantizeMultipoint=M,t.quantizePoint=b,t.quantizePolygon=w,t.quantizePolyline=I,t.quantizeGeometry=function(e,t){return e&&t?r.isPoint(t)?b(e,{},t,!1,!1):r.isPolyline(t)?I(e,{},t,!1,!1):r.isPolygon(t)?w(e,{},t,!1,!1):r.isMultipoint(t)?M(e,{},t,!1,!1):r.isExtent(t)?x(e,{},t,!1,!1):null:null},t.hydrateExtent=function(e,t,r,n,i){return t.xmin=c(e,r.xmin),t.ymin=p(e,r.ymin),t.xmax=c(e,r.xmax),t.ymax=p(e,r.ymax),t!==r&&(n&&(t.zmin=r.zmin,t.zmax=r.zmax),i&&(t.mmin=r.mmin,t.mmax=r.mmax)),t},t.hydrateMultipoint=function(e,t,r,n,i){return t.points=y(e,r.points,n,i),t},t.hydratePoint=function(e,t,r,n,i){return t.x=c(e,r.x),t.y=p(e,r.y),t!==r&&(n&&(t.z=r.z),i&&(t.m=r.m)),t},t.hydratePolygon=function(e,t,r,n,i){return t.rings=m(e,r.rings,n,i),t},t.hydratePolyline=function(e,t,r,n,i){return t.paths=d(e,r.paths,n,i),t}}.apply(null,n))||(e.exports=i)},1547:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.updatingPercentageValue={value:100,readOnly:!0},t.updatingPercentage={dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}}.apply(null,n))||(e.exports=i)},1552:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(6),r(14),r(2),r(465),r(1532)],void 0===(i=function(e,t,r,n,i,a,o,s,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return r(t,e),t.prototype.postscript=function(e){this.inherited(arguments),s.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return i.create(function(t,r){a.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var n=s.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);n?r(n):t()})})},n([o.property()],t.prototype,"view",void 0),n([o.property()],t.prototype,"slicePlaneEnabled",void 0),n([o.subclass("esri.views.3d.layers.LayerView3D")],t)}(o.declared(l))}.apply(null,n))||(e.exports=i)},1570:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){function r(e,t){return t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):t&&t.yoffset?Math.max(e,Math.abs(t.yoffset)):e}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){if(!e)return 6;if("simple"===e.type)return r(6,e.symbol);if("unique-value"===e.type){var t=6;return e.uniqueValueInfos.forEach(function(e){t=r(t,e.symbol)}),t}if("class-breaks"===e.type){var n=6;return e.classBreakInfos.forEach(function(e){n=r(n,e.symbol)}),n}return 6}}.apply(null,n))||(e.exports=i)},1646:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(51)],void 0===(i=function(e,t,r){function n(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++){var n=e[r],i=t[r];if(n.length!==i.length)return!1;for(var a=0;a<n.length;a++)if(n[a]!==i[a])return!1}return!0}function i(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function a(e,t){return e===t||e&&t&&e.equals(t)}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.type!==t.type)return!1;switch(e.type){case"point":return function(e,t){return!!a(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}(e,t);case"extent":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!a(e.spatialReference,t.spatialReference)&&e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax}(e,t);case"polyline":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!a(e.spatialReference,t.spatialReference)&&i(e.paths,t.paths)}(e,t);case"polygon":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!a(e.spatialReference,t.spatialReference)&&i(e.rings,t.rings)}(e,t);case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!a(e.spatialReference,t.spatialReference)&&n(e.points,t.points)}(e,t);case"mesh":return!1;default:r.neverReached(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=function(e,t){return e===t||null!=e&&null!=t&&e.objectId===t.objectId&&!!o(e.geometry,t.geometry)&&!!function(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var i=0,a=r;i<a.length;i++){var o=a[i];if(e[o]!==t[o])return!1}return!0}(e.attributes,t.attributes)}}.apply(null,n))||(e.exports=i)},1726:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(6),r(14),r(2),r(1771),r(1754),r(1897),r(1759),r(1947)],void 0===(i=function(e,t,r,n,i,a,o,s,l,u,c,p){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(t)this.addResolvingPromise(i.reject(t));else{var r=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var t=e.view.basemapTerrain.tilingScheme;u.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,t))});this.addResolvingPromise(r)}"version"in this.layer&&this.addResolvingPromise(u.checkArcGISServiceVersionCompatibility(this.layer)),this._updateMinMaxDataLevel(),this.maxDataLevel=Math.min(this.maxDataLevel,c.getKnownTiledServiceLevelCap(this.layer.url))},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return l.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")},n([o.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],t.prototype,"imageFormatIsOpaque",null),n([o.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),n([o.property()],t.prototype,"layer",void 0),n([o.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),n([o.subclass("esri.views.3d.layers.TileLayerView3D")],t)}(o.declared(s,p))}.apply(null,n))||(e.exports=i)},1754:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(28),r(0),r(19),r(70),r(1504),r(1570)],void 0===(i=function(e,t,r,n,i,a,o,s){function l(e,t,r){var n=r.get("basemapTerrain"),o=r.get("basemapTerrain.overlayManager"),s=o?o.overlayPixelSizeInMapUnits(e):1,l=n&&!n.spatialReference.equals(r.spatialReference)?a.getMetersPerUnitForSR(n.spatialReference)/a.getMetersPerUnitForSR(r.spatialReference):t*s,u=e.clone().offset(-l,-l),c=e.clone().offset(l,l),p=r.spatialReference;return new i({xmin:Math.min(u.x,c.x),ymin:Math.min(u.y,c.y),xmax:Math.max(u.x,c.x),ymax:Math.max(u.y,c.y),spatialReference:p})}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=l,t.queryDrapedGraphics=function(e){var t=e.area,r=e.view,n=e.loadedGraphics,i=e.popupTemplate,a=e.layer,u=e.clientGraphics,c=l(t,s.calculateTolerance(),r),p=[];return n.forEach(function(e){e.visible&&c.intersects(e.geometry)&&(i||o.isHydratedGraphic(e)&&e.popupTemplate)&&p.push(o.hydrateGraphic(e,a))}),u&&u.length?u.concat(p):p}}.apply(null,n))||(e.exports=i)},1759:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(198),r(438),r(1427),r(303),r(1772),r(1773)],void 0===(i=function(e,t,r,n,i,a,o,s){function l(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function u(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function c(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function p(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function f(){for(var e in d={},a)a[e].baseMapLayers.forEach(function(e){d[e.url]=19});d["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function h(e,t,r,n){return y["local"===n||"planar"===n?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(e,t,r)}Object.defineProperty(t,"__esModule",{value:!0});var y={planar:o,spherical:s};t.weakAssert=function(e,t){e||console.warn("Terrain: "+t)},t.autoUpdateSkirtsVisibility=function(e,t,r){var n,i=y[e.manifold],a=i.isInsideExtent(e,t);if(a)n=e.getElevation(t);else{var o=e.getElevationBounds();n=.5*(o[0]+o[1])}var s=t[2]-n,l=.9*Math.abs(s)<r?0:s<0?-1:1;if(!a)if(i.isInsideExtent(e,t,e.hideSkirtsDistanceFromExtentMargin)){var u=i.tiltToExtentEdge(e,t);u>e.hideSkirtsMinimumCameraTilt&&u<e.hideSkirtsMaximumCameraTilt&&(l=0)}else l=0;e.skirtScale=l},t.isTiledLayer=function(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type},t.isVectorTileLayer=function(e){return e&&e.isInstanceOf(i)},t.isTileLayerView=l,t.isVectorTileLayerView=u,t.isWMTSLayerView=c,t.isElevationLayerView=p,t.isTiledLayerView=function(e){return e&&(l(e)||p(e)||u(e)||c(e))},t.useFetchTileForLayer=function(e){return e.fetchTile&&!(e.fetchTile===n.prototype.fetchTile||e.fetchTile===r.prototype.fetchTile)};var d=null;t.getKnownTiledServiceLevelCap=function(e){d||f();var t=e&&e.replace(/https?:/,"");return t in d?d[t]:1/0},t.prepareKnownTiledServiceLevelCaps=f,t.checkIfTileInfoSupportedForView=h,t.getTiledLayerInfo=function(e,t,r){var n,i;if("wmts"===e.type){var a=e.activeLayer;if(a){var o=a.tileMatrixSet;if(o)n=o.tileInfo,i=o.fullExtent;else{var s=a.tileMatrixSets;if(s){var l=s.find(function(e){return null==h(e.tileInfo,e.fullExtent,t,r)});if(l)return{tileInfo:l.tileInfo,fullExtent:l.fullExtent}}}}}else n="vector-tile"===e.type?e.compatibleTileInfo256:e.tileInfo,i=e.fullExtent;return n&&i&&null==h(n,i,t,r)?{tileInfo:n,fullExtent:i}:{tileInfo:null,fullExtent:null}}}.apply(null,n))||(e.exports=i)},1771:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(9),r(2),r(1552),r(1547),r(1759)],void 0===(i=function(e,t,r,n,i,a,o,s,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minDataLevel=0,t.maxDataLevel=1/0,t._isUpdating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},t.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var r=l.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var n={layer:this.layer,error:r},a=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":a=new i("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",n);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":a=new i("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",n);break;default:a=new i("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",n)}return a}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new i("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype._updateMinMaxDataLevel=function(){var e,t=1/0,r=0;this.tileInfo.lods.forEach(function(e){t=Math.min(e.level,t),r=Math.max(e.level,r)}),e=[t,r],this.minDataLevel=e[0],this.maxDataLevel=e[1]},n([a.property({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),n([a.property(s.updatingPercentage)],t.prototype,"updatingPercentage",void 0),n([a.property(s.updatingPercentageValue)],t.prototype,"updatingPercentageValue",void 0),n([a.property()],t.prototype,"fullExtent",void 0),n([a.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],t.prototype,"isOpaque",null),n([a.property()],t.prototype,"layer",void 0),n([a.property()],t.prototype,"minDataLevel",void 0),n([a.property()],t.prototype,"maxDataLevel",void 0),n([a.property()],t.prototype,"tileInfo",void 0),n([a.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(a.declared(o))}.apply(null,n))||(e.exports=i)},1772:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(9),r(36),r(82),r(471),r(451)],void 0===(i=function(e,t,r,n,i,a,o){function s(e,t,r,i){n.vec3.copy(u,r),u[i]=t[i];var a,o=n.vec3.subtract(u,u,t),s=n.vec3.subtract(c,e,t),l=n.vec3.dot(s,o),p=n.vec3.dot(o,o);a=l<=0?t:p<=l?r:n.vec3.add(u,t,n.vec3.scale(o,o,l/p));var f=n.vec3.subtract(u,e,a);return Math.PI/2-Math.atan(f[2]/Math.sqrt(f[0]*f[0]+f[1]*f[1]))}function l(e,t){var n=e.lods,s=n[0].resolution*Math.pow(2,n[0].level),l=[s*e.size[0],s*e.size[1]],u=[e.origin.x,e.origin.y],c=i.fromExtent(t),p=i.create();o.computeRowColExtent(c,l,u,p);var f=(p[2]-p[0])*(p[3]-p[1]);if(f>a.MAX_ROOT_TILES){var h=n[0].scale*Math.pow(2,n[0].level),y=Math.max((c[3]-c[1])/e.size[1],(c[2]-c[0])/e.size[0])*h/s,d=Math.floor(Math.log(y)/Math.log(10));return y=Math.ceil(y/Math.pow(10,d))*Math.pow(10,d),new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(h).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+y.toLocaleString()+".",{level0Scale:h,suggestedLevel0Scale:y,requiredNumRootTiles:f,allowedNumRootTiles:a.MAX_ROOT_TILES})}return null}Object.defineProperty(t,"__esModule",{value:!0});var u=n.vec3f64.create(),c=n.vec3f64.create(),p=n.vec3f64.create(),f=n.vec3f64.create();t.isInsideExtent=function(e,t,r){void 0===r&&(r=0);var n=e.extent;if(0===r)return i.containsPoint(n,t);var a=Math.min(n[2]-n[0],n[3]-n[1]);return i.containsPointWithMargin(n,t,r*a)},t.tiltOnEdge=s,t.tiltToExtentEdge=function(e,t){var r=e.getElevationBounds(),n=e.extent,i=.5*(r[0]+r[1]);p[0]=n[0],p[1]=n[1],p[2]=i,f[0]=n[2],f[1]=n[3],f[2]=i;var a=1/0,o=1/0;return t[0]<p[0]?a=s(t,p,f,0):t[0]>f[0]&&(a=s(t,f,p,0)),t[1]<p[1]?o=s(t,p,f,1):t[1]>f[1]&&(o=s(t,f,p,1)),Math.min(a,o)},t.checkIfTileInfoSupportedForViewSR=function(e,t,n){if(e.spatialReference.isGeographic)return new r("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var i=o.checkUnsupported(e);return i||l(e,t)||(n&&!e.spatialReference.equals(n)?new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}}.apply(null,n))||(e.exports=i)},1773:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(9),r(451)],void 0===(i=function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isInsideExtent=function(e,t,r){return void 0===r&&(r=0),!0},t.tiltToExtentEdge=function(e,t){return 0},t.checkIfTileInfoSupportedForViewSR=function(e,t,i){var a=e.lods.length-1;if(e.spatialReference.isWebMercator){if(!n.makeWebMercatorAuxiliarySphere(a).compatibleWith(e))return new r("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!e.spatialReference.isWGS84)return new r("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!n.makeWGS84WithTileSize(e.size[1],a).compatibleWith(e))return new r("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme")}if(i&&!e.spatialReference.equals(i))return new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}}.apply(null,n))||(e.exports=i)},1897:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(301),r(9),r(6),r(142)],void 0===(i=function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0}),t.checkArcGISServiceVersionCompatibility=function(e){if(!a.isHostedAgolService(e.url)){if(e.version<10.22){var t=new n("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+e.version,{minVersion:10.22,detectedVersion:e.version});return i.reject(t)}if(10.22!==e.version||a.isHostedSecuredProxyService(e.url,e.get("portalItem.id")))return i.resolve();var o=function(e){var t=null,r=e.search(/\/rest\/services\//i);return r>0&&(t=e.substring(0,r+6)),t}(e.url),s=new n("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.");return r(o+"self?f=json",{headers:{"X-Requested-With":null},timeout:1e4,handleAs:"json"}).then(function(e){if(!e||e.error)throw s}).catch(function(){throw s})}},t.throwIfError=function(e){if(e)throw e}}.apply(null,n))||(e.exports=i)},1947:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(9),r(6),r(2),r(1570),r(1529)],void 0===(i=function(e,t,r,n,i,a,o,s,l){return function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.fetchPopupFeatures=function(e){var t=this,r=this.layer;if(!e)return a.reject(new i("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));if("tile"!==r.type)return a.reject(new i("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:r.type}));var n=this.get("view.scale"),o=r.allSublayers.toArray().filter(function(e){var t=0===e.minScale||n<=e.minScale,r=0===e.maxScale||n>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r});return a.eachAlways(o.map(function(r){var n=r.createQuery(),i=s.calculateTolerance(r.renderer);return n.geometry=t.createFetchPopupFeaturesQueryGeometry(e,i),n.outFields=r.get("popupTemplate.requiredFields"),r.queryFeatures(n).then(function(e){return e.features})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})},n([o.property()],t.prototype,"layer",void 0),n([o.subclass("esri.views.layers.TileLayerView")],t)}(o.declared(l))}.apply(null,n))||(e.exports=i)}}]);