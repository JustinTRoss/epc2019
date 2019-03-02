(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/webgl/Texture":1471,"esri/views/2d/engine/webgl/enums":1493,"esri/views/2d/engine/BitmapContainer":1718,"esri/views/2d/engine/Bitmap":1756,"esri/views/2d/engine/Tiled":1870,"esri/renderers/support/heatmapUtils":1888,"esri/views/2d/engine/BitmapTile":1946,"esri/views/2d/layers/features/tileRenderers/BaseTileRenderer":1955,"esri/views/2d/layers/features/tileRenderers/HeatmapTileRenderer":2505,"esri/views/2d/layers/features/tileRenderers/support/HeatmapSource":2506})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1471:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(18)],void 0===(r=function(e,t,i){return function(){function e(t,n,r){this._context=null,this._glName=null,this._id=-1,this._desc=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._boundToUnits=new Set,this._context=t,this._desc={pixelFormat:n.pixelFormat,internalFormat:n.internalFormat,dataType:n.dataType,target:n.target?n.target:3553,samplingMode:n.samplingMode?n.samplingMode:9729,wrapMode:n.wrapMode?n.wrapMode:10497,maxAnisotropy:n.maxAnisotropy,flipped:void 0!==n.flipped&&n.flipped,hasMipmap:void 0!==n.hasMipmap&&n.hasMipmap,unpackAlignment:n.unpackAlignment?n.unpackAlignment:4,width:n.width,height:n.height,preMultiplyAlpha:void 0!==n.preMultiplyAlpha&&n.preMultiplyAlpha},this._id=++e._nextId,i("esri-webgl-debug")&&t.instanceCounter.incrementCount(0),this.setData(r)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this;if(this._context){if(this._glName){var t=this._context.gl;this._boundToUnits.forEach(function(t){e._context.bindTexture(null,t)}),t.deleteTexture(this._glName),this._glName=null}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(0),this._context=null}},e.prototype.resize=function(e,t){var i=this._desc;i.width===e&&i.height===t||(i.width=e,i.height=t,this.setData(null))},e.prototype.setData=function(t){var i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null),null===t&&(this._desc.width=this._desc.width||4,this._desc.height=this._desc.height||4);var n=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var r=this._desc;e._validateTexture(r),i.pixelStorei(i.UNPACK_ALIGNMENT,r.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,r.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.preMultiplyAlpha?1:0);var o=r.pixelFormat,a=r.internalFormat?r.internalFormat:o;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement)r.width&&r.height&&console.assert(t.width===r.width&&t.height===r.height),i.texImage2D(i.TEXTURE_2D,0,a,o,r.dataType,t),r.hasMipmap&&this.generateMipmap(),void 0===this._desc.width&&(this._desc.width=t.width),void 0===this._desc.height&&(this._desc.height=t.height);else{null!=r.width&&null!=r.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&a===i.DEPTH_STENCIL&&(a=i.DEPTH24_STENCIL8);var s=r.width,l=r.height;if(function(e){return null!=e&&"type"in e&&"compressed"===e.type}(t))for(var p=0;;++p){var u=t.levels[Math.min(p,t.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,p,a,s,l,0,u),1===s&&1===l||!r.hasMipmap)break;s=Math.max(1,s>>1),l=Math.max(1,l>>1)}else if(t)i.texImage2D(i.TEXTURE_2D,0,a,s,l,0,o,r.dataType,t),r.hasMipmap&&this.generateMipmap();else for(p=0;i.texImage2D(i.TEXTURE_2D,p,a,s,l,0,o,r.dataType,null),(1!==s||1!==l)&&r.hasMipmap;++p)s=Math.max(1,s>>1),l=Math.max(1,l>>1)}e._applySamplingMode(i,this._desc),e._applyWrapMode(i,this._desc),e._applyAnisotropicFilteringParameters(this._context,this._desc),this._context.bindTexture(n,0)},e.prototype.updateData=function(e,t,i,n,r,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var a=this._context.gl,s=this._desc,l=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(t<0||i<0||n>s.width||r>s.height||t+n>s.width||i+r>s.height)&&console.error("An attempt to update out of bounds of the texture!"),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?(console.assert(o.width===n&&o.height===r),a.texSubImage2D(a.TEXTURE_2D,e,t,i,s.pixelFormat,s.dataType,o)):a.texSubImage2D(a.TEXTURE_2D,e,t,i,n,r,s.pixelFormat,s.dataType,o),this._context.bindTexture(l,0)},e.prototype.generateMipmap=function(){var t=this._desc;t.hasMipmap||(t.hasMipmap=!0,e._validateTexture(t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var n=this._context.gl;n.generateMipmap(n.TEXTURE_2D),this._context.bindTexture(i,0)},e.prototype.setSamplingMode=function(t){t!==this._desc.samplingMode&&(this._desc.samplingMode=t,e._validateTexture(this._desc),this._samplingModeDirty=!0)},e.prototype.setWrapMode=function(t){t!==this._desc.wrapMode&&(this._desc.wrapMode=t,e._validateTexture(this._desc),this._wrapModeDirty=!0)},e.prototype.applyChanges=function(){var t=this._context.gl,i=this._desc;this._samplingModeDirty&&(e._applySamplingMode(t,i),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,i),this._wrapModeDirty=!1)},e.prototype.setBoundToUnit=function(e,t){t?this._boundToUnits.add(e):this._boundToUnits.delete(e)},e._isPowerOfTwo=function(e){return 0==(e&e-1)},e._validateTexture=function(t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!"),e._isPowerOfTwo(t.width)&&e._isPowerOfTwo(t.height)||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))},e._applySamplingMode=function(e,t){var i=t.samplingMode;9985===i||9987===i?i=9729:9984!==i&&9986!==i||(i=9728),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.samplingMode)},e._applyWrapMode=function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))},e._applyAnisotropicFilteringParameters=function(e,t){if(null!=t.maxAnisotropy){var i=e.capabilities.textureFilterAnisotropic;if(i){var n=e.gl;n.texParameterf(n.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy)}}},e._nextId=0,e}()}.apply(null,n))||(e.exports=r)},1493:function(e,t,i){var n,r;n=[i.dj.c(e.i),t],void 0===(r=function(e,t){var i,n,r,o,a,s,l,p,u,h;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.WGLGeometryType||(t.WGLGeometryType={}))[i.FILL=0]="FILL",i[i.LINE=1]="LINE",i[i.MARKER=2]="MARKER",i[i.TEXT=3]="TEXT",i[i.LABEL=4]="LABEL",i[i.NONE=5]="NONE",i[i.UNKNOWN=6]="UNKNOWN",i[i.COUNT=7]="COUNT",(n=t.WGLGeometryTransactionStatus||(t.WGLGeometryTransactionStatus={}))[n.SUCCEEDED=0]="SUCCEEDED",n[n.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(r=t.WGLDrawPhase||(t.WGLDrawPhase={}))[r.NONE=0]="NONE",r[r.MAP=1]="MAP",r[r.LABEL=2]="LABEL",r[r.LABEL_ALPHA=4]="LABEL_ALPHA",r[r.HITTEST=8]="HITTEST",r[r.HIGHLIGHT=16]="HIGHLIGHT",r[r.CLIP=32]="CLIP",r[r.DEBUG=64]="DEBUG",r[r.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(o=t.VVType||(t.VVType={}))[o.SIZE=0]="SIZE",o[o.COLOR=1]="COLOR",o[o.OPACITY=2]="OPACITY",o[o.ROTATION=3]="ROTATION",(a=t.WGLVVFlag||(t.WGLVVFlag={}))[a.NONE=0]="NONE",a[a.OPACITY=1]="OPACITY",a[a.COLOR=2]="COLOR",a[a.ROTATION=4]="ROTATION",a[a.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",a[a.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",a[a.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",a[a.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(s=t.WGLVVTarget||(t.WGLVVTarget={}))[s.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",s[s.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",s[s.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",s[s.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(l=t.CapType||(t.CapType={}))[l.UNKNOWN=0]="UNKNOWN",l[l.BUTT=1]="BUTT",l[l.ROUND=2]="ROUND",l[l.SQUARE=3]="SQUARE",(p=t.JoinType||(t.JoinType={}))[p.UNKNOWN=0]="UNKNOWN",p[p.MITER=1]="MITER",p[p.BEVEL=2]="BEVEL",p[p.ROUND=3]="ROUND",(u=t.EsriSymbolType||(t.EsriSymbolType={})).SIMPLE_MARKER="esriSMS",u.SIMPLE_LINE="esriSLS",u.SIMPLE_FILL="esriSFS",u.PICTURE_MARKER="esriPMS",u.PICTURE_FILL="esriPFS",u.TEXT="esriTS",(h=t.EsriSymbolTypeKebab||(t.EsriSymbolTypeKebab={})).SIMPLE_MARKER="simple-marker",h.SIMPLE_LINE="simple-line",h.SIMPLE_FILL="simple-fill",h.PICTURE_MARKER="picture-marker",h.PICTURE_FILL="picture-fill",h.TEXT="text"}.apply(null,n))||(e.exports=r)},1718:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(28),i(0),i(1539),i(1493)],void 0===(r=function(e,t,i,n,r,o){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.doRender=function(t){this.visible&&t.drawPhase===o.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,t)},t.prototype.renderChildren=function(e){var t=this.stage.painter,i=this.children,n=e.drawPhase;this.sortChildren(function(e,t){return t.resolution-e.resolution}),e.drawPhase=o.WGLDrawPhase.CLIP,t.startStencilBurn();for(var r=0,a=i.length;r<a;r++){(s=i[r]).attached&&s.visible&&(t.stencilRef=r,s.processRender(e))}e.drawPhase=n,t.startStencilDraw();for(r=0,a=i.length;r<a;r++){var s;(s=i[r]).attached&&s.visible&&(t.stencilRef=r,s.processRender(e))}t.endStencilDraw()},t}(r.Container);t.BitmapContainer=a}.apply(null,n))||(e.exports=r)},1756:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(28),i(437),i(1528),i(1471)],void 0===(r=function(e,t,i,n,r,o){function a(e){return e.updateTexture()}function s(e){u.has(e)&&(p.splice(p.indexOf(e),1),u.delete(e))}Object.defineProperty(t,"__esModule",{value:!0});var l=[0,0],p=[],u=new n.default,h=function(e){function t(t){void 0===t&&(t=null);var i=e.call(this)||this;return i._height=void 0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._source=null,i._width=void 0,i.x=0,i.y=0,i.source=t,i.requestRender=i.requestRender.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"height",{get:function(){return void 0!==this._height?this._height:this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},set:function(e){this._height=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"source",{get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return void 0!==this._width?this._width:this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},set:function(e){this._width=e},enumerable:!0,configurable:!0}),t.prototype.attach=function(){return this._texture=(e=this.stage.context,new o(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0})),a(this),!0;var e},t.prototype.detach=function(){this._texture.dispose(),this._texture=null,s(this),e.prototype.detach.call(this)},t.prototype.invalidateTexture=function(){this.attached?a(this):s(this)},t.prototype.updateTexture=function(){if(this._texture){var e=this.source;if(!e)return void this._texture.setData(null);this._texture.resize(this.width,this.height),function(e){return e&&"render"in e}(e)?this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(e)):function(e){return e&&!("render"in e)}(e)&&this._texture.setData(e),this.ready(),this.requestRender()}},t.prototype.doRender=function(e){if(this.source&&this.width>0&&this.isReady){var t=this.stage,i=t.context,n=t.painter,r=e.state,o=e.pixelRatio,a=r.resolution,s=r.rotation,p=this.resolution/this.pixelRatio/a;if(!(p<.05)){var u=r.toScreen(l,this.x,this.y),h=u[0],d=u[1];!(s+this.rotation)&&p<1.05&&p>.95?this._texture.setSamplingMode(9728):this._texture.setSamplingMode(9729),n.drawImage(i,this._texture,h,d,this.width*p,this.height*p,-Math.PI*s/180,-Math.PI*this.rotation/180,this.opacity*e.globalOpacity,o,e.drawPhase)}}},t}(r.DisplayObject);t.Bitmap=h}.apply(null,n))||(e.exports=r)},1870:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(28),i(1553)],void 0===(r=function(e,t,i,n){return function(e){var t=function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.call(this)||this}return i(t,e),t}(e);return n.EventedMixin(t)}}.apply(null,n))||(e.exports=r)},1888:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(58),i(90)],void 0===(r=function(e,t,i,n){function r(e,t,i,r,o){for(var a=new Uint32Array(e*e),s=("buffer"in t?t:new Float64Array(t)),l=("buffer"in i?new Uint32Array(i.buffer):new Uint32Array(new Uint8Array(i).buffer)),p=l.length/(o-r),u=0;u<s.length;u++){var h=s[u],d=Math.floor((h-r)*p);a[u]=l[n.clamp(d,0,l.length-1)]}return a.buffer}function o(e){for(var t=Math.round(4.5*e),i=e*e,n=new Float64Array(2*t+1),r=0;r<=n.length;r++)n[r]=Math.exp(-Math.pow(r-t,2)/(2*i))/Math.sqrt(2*Math.PI)*(e/2);return n}function a(e,t){return"function"==typeof e?e:e?"string"==typeof t?function(t){return-1*+t[e]}:function(i){return+i[e]+t}:function(e){return 1}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateGradient=function(){if(!("document"in i))return function(e){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(i){for(var n=t.createLinearGradient(0,0,0,e.height),r=0,o=i.colorStops;r<o.length;r++){var a=o[r],s=a.ratio,l=a.color;n.addColorStop(s,"rgba("+l[0]+", "+l[1]+", "+l[2]+", "+l[3]+")")}return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}(),t.calculateHeatmapIntensityInfo=function(e,t,i,n){for(var r,s=t.blurRadius,l=t.fieldOffset,p=t.field,u=new Float64Array(i*n),h=o(s),d=Math.round(4.5*s),c=Number.NEGATIVE_INFINITY,f=a(p,l),_=0,T=e;_<T.length;_++)for(var y=T[_],g=y.geometry,m=y.attributes,E=g.x-d,v=g.y-d,x=Math.max(0,E),M=Math.max(0,v),w=Math.min(n,g.y+d),I=Math.min(i,g.x+d),L=+f(m),P=M;P<w;P++)for(var R=h[P-v],A=x;A<I;A++){var S=h[A-E];(r=u[P*i+A]+=R*S*L)>c&&(c=r)}return{matrix:u.buffer,max:c}},t.drawHeatmap=function(e,t,i,n,o,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var s=e.getImageData(0,0,t,t);i&&n&&s.data.set(new Uint8ClampedArray(r(t,i,n,o,a))),e.putImageData(s,0,0)},t.createHeatmapImageData=r,t.createKernel=o,t.createValueFunction=a}.apply(null,n))||(e.exports=r)},1946:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(28),i(0),i(83),i(472),i(1756),i(1870)],void 0===(r=function(e,t,i,n,r,o,a,s){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t){var i=e.call(this,t)||this;return i.key=new o.TileKey(0,0,0,0),i}return i(t,e),t.prototype.acquire=function(e){},t.prototype.release=function(){this.key.set(0,0,0,0),this.source=null},t.pool=new r(t,!0),t}(s(a.Bitmap));t.BitmapTile=l}.apply(null,n))||(e.exports=r)},1955:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(1),i(0),i(5),i(1512),i(2)],void 0===(r=function(e,t,i,n,r,o,a){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=e.call(this)||this;return i.tiles=new Map,i.layer=null,i}return i(t,e),t.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.highlightOptions=this.configuration=this.tiles=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),t.prototype.acquireTile=function(e){var t=this,i=this.createTile(e);return i.once("isReady",function(){return t.notifyChange("updating")}),this.tiles.set(e.id,i),i},t.prototype.forEachTile=function(e){this.tiles.forEach(e)},t.prototype.releaseTile=function(e){this.tiles.delete(e.key.id),this.disposeTile(e)},t.prototype.isUpdating=function(){var e=!0;return this.tiles.forEach(function(t){e=e&&t.isReady}),!e},t.prototype.requestUpdate=function(){this.layerView.requestUpdate()},n([a.property()],t.prototype,"configuration",void 0),n([a.property()],t.prototype,"highlightOptions",void 0),n([a.property()],t.prototype,"layer",void 0),n([a.property()],t.prototype,"layerView",void 0),n([a.property()],t.prototype,"tileInfoView",void 0),n([a.property()],t.prototype,"updating",null),n([a.subclass()],t)}(a.declared(r,o));t.default=s}.apply(null,n))||(e.exports=r)},2505:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(1),i(0),i(467),i(5),i(6),i(2),i(453),i(1888),i(1718),i(1946),i(1955),i(2506)],void 0===(r=function(e,t,i,n,r,o,a,s,l,p,u,h,d,c){Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(t){var i=e.call(this,t)||this;return i.container=new u.BitmapContainer,i}return i(t,e),Object.defineProperty(t.prototype,"gradient",{get:function(){return p.generateGradient(this.configuration.renderer)},enumerable:!0,configurable:!0}),t.prototype.createTile=function(e){var t=h.BitmapTile.pool.acquire();return t.key.set(e),this.tileInfoView.getTileCoords(t,e),t.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.applyConfiguration=function(e){this.configuration=e;var t=e.renderer,i=t.minPixelIntensity,n=t.maxPixelIntensity,r=this.gradient;this.tiles.forEach(function(e){var t=e.source;t&&(t.minPixelIntensity=i,t.maxPixelIntensity=n,t.gradient=r,e.invalidateTexture())})},t.prototype.clear=function(){this.tiles.forEach(function(e){var t=e.source;t&&(t.intensities=null)})},t.prototype.getProcessorConfiguration=function(){var e=this.layer;return{type:"heatmap",renderer:e.renderer.toJSON(),definitionExpression:e.definitionExpression,outFields:e.outFields,gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime()}},t.prototype.hitTest=function(e,t){return a.resolve([])},t.prototype.highlight=function(e){return{remove:function(){}}},t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeAllChildren(),e.removeChild(this.container)},t.prototype.needsProcessorReconfiguration=function(e){var t=this.configuration;return this.wouldClear(e)||t.definitionExpression!==e.definitionExpression},t.prototype.wouldClear=function(e){var t=this.configuration;if(!t||t.outFields.join()!==e.outFields.join())return!0;var i=this.configuration&&r.fromJSON(this.configuration.renderer)||null,n=e&&r.fromJSON(e.renderer)||null,o=l.diff(i,n);if(!o)return!1;switch(o.type){case"complete":return!0;case"partial":for(var a in o.diff)if("colorStops"!==a&&"minPixelIntensity"!==a&&"maxPixelIntensity"!==a)return!0}return!1},t.prototype.disposeTile=function(e){this.container.removeChild(e),h.BitmapTile.pool.release(e)},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this.configuration.renderer,r=n.minPixelIntensity,o=n.maxPixelIntensity,a=t.source||new c.HeatmapSource;a.intensities=i&&i.matrix||null,a.minPixelIntensity=r,a.maxPixelIntensity=o,a.gradient=this.gradient,t.source=a,this.container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},n([s.property({readOnly:!0,dependsOn:["configuration"]})],t.prototype,"gradient",null),n([s.subclass()],t)}(s.declared(o,d.default));t.default=f}.apply(null,n))||(e.exports=r)},2506:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(1888)],void 0===(r=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.gradient=null,this.height=512,this.width=512}return e.prototype.render=function(e){i.drawHeatmap(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)},e}();t.HeatmapSource=n}.apply(null,n))||(e.exports=r)}}]);