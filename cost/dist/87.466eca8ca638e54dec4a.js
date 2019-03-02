(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/controllers/AutoController2D":1464})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1464:function(t,e,r){var o,n;o=[r.dj.c(t.i),e,r(1),r(0),r(41),r(5),r(16),r(9),r(191),r(6),r(2),r(292),r(306)],void 0===(n=function(t,e,o,n,i,a,u,s,p,l,c,y,h){var d;return function(t){t[t.Snapshot=0]="Snapshot",t[t.OnDemand=1]="OnDemand"}(d||(d={})),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.maxPointCountForAuto=4e3,e.maxRecordCountForAuto=2e3,e.maxVertexCountForAuto=25e4,e}return o(e,t),e.prototype.initialize=function(){var t=this,e=this.layer.when(function(){t._verifyCapabilities()}).then(function(){return t._figureOutMode().then(function(e){return t._createController(e)})}).then(function(e){return t._set("activeController",e)});this.addResolvingPromise(e)},e.prototype.destroy=function(){this.activeController&&(this.activeController.destroy(),this._set("activeController",null))},Object.defineProperty(e.prototype,"countThresholdForAuto",{get:function(){var t,e=this.layer.geometryType;return"polyline"===e||"polygon"===e||"multipoint"===e?t=this.maxRecordCountForAuto:"point"===e&&(t=this.maxPointCountForAuto),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!1===this.isFulfilled()||!0===this.get("activeController.updating")},enumerable:!0,configurable:!0}),e.prototype._figureOutMode=function(){return this._isStatisticsSupported()?this._checkByStatistics():this._checkByCount()},e.prototype._isStatisticsSupported=function(){if(!this.layer.capabilities.query.supportsStatistics)return!1;var t=this.layer.parsedUrl;return t&&/(https?:)?\/\/services.*\.arcgis\.com/i.test(t.path)},e.prototype._checkByStatistics=function(){var t=this,e=this.layer,r=e.parsedUrl.path,o=e.createQuery();return o.outStatistics=[new h({statisticType:"exceedslimit",maxPointCount:this.maxPointCountForAuto,maxRecordCount:this.maxRecordCountForAuto,maxVertexCount:this.maxVertexCountForAuto,outStatisticFieldName:"exceedslimit"})],new y({url:r+"/query"}).execute(o).then(function(e){var r=e&&e.features&&e.features[0];if(0===(r&&r.attributes&&r.attributes.exceedslimit)){var o=t.layer,n=o.maxRecordCount;if(o.get("capabilities.query.supportsPagination")||n>=t.countThresholdForAuto)return d.Snapshot}return d.OnDemand})},e.prototype._checkByCount=function(){var t=this,e=this.layer;return e.queryFeatureCount().then(function(r){return r<=t.countThresholdForAuto&&r<=e.maxRecordCount?d.Snapshot:d.OnDemand})},e.prototype._createController=function(t){var e=this;return(d.OnDemand,l.create(function(t){return r.e(32).then(function(){var e=[r(1446)];t.apply(null,e)}.bind(this)).catch(r.oe)})).then(function(t){return new t({layer:e.layer,layerView:e.layerView,graphics:e.graphics})}).catch(function(e){throw new Error("Module path not found for controller type: "+(t===d.Snapshot?"snapshot":"on demand"))})},e.prototype._verifyCapabilities=function(){if(!this.layer.get("capabilities.operations.supportsQuery"))throw new s("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:this.layer})},n([c.property()],e.prototype,"activeController",void 0),n([c.property({dependsOn:["layer.geometryType"]})],e.prototype,"countThresholdForAuto",null),n([c.property({type:u.ofType(i)})],e.prototype,"graphics",void 0),n([c.property()],e.prototype,"layer",void 0),n([c.property()],e.prototype,"layerView",void 0),n([c.property({dependsOn:["activeController.updating"]})],e.prototype,"updating",null),n([c.aliasOf("activeController.update")],e.prototype,"update",void 0),n([c.subclass("esri.layers.graphics.controllers.AutoController2D")],e)}(c.declared(a,p))}.apply(null,o))||(t.exports=n)}}]);