"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[18352],{337815:(e,t,i)=>{i.d(t,{YS:()=>a,eF:()=>o,m_:()=>n});var r=i(619937),s=i(67347);function n(e,t,i,s,n){let a=new URLSearchParams,o=null!=e?e:"0";return a.append(r.NR.SOURCE_EVENT_ID,o),a.append(r.NR.DESTINATION,function(e){let t;try{t=decodeURIComponent(e)}catch(i){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(r){let i=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(i&&i.length>1)return i[1];return e}}(t)||""),a.append(r.NR.EXPIRY,i?r.uV:r.ug),a.append(r.NR.PRIORITY,i?r.NR.CLICK_PRIORITY:r.NR.VIEW_PRIORITY),n&&a.append(r.NR.ADVERTISER_ID,n),s&&a.append(r.NR.CAMPAIGN_ID,s),a.append(r.NR.SOURCE_EVENT_TYPE,i?r.bC:r.Cu),"/attribution_source/?"+a.toString()}async function a(e,t,i,r,a,o,l){let{appType:d,osType:u}=o||{};if(["Pin","pinImpressions"].includes(e)&&t&&r){(0,s.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:d,osType:u}});try{var c;if(!(null!==(c=window.document.featurePolicy)&&void 0!==c&&c.allowsFeature("attribution-reporting"))){(0,s.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:d,osType:u}});return}let e=n(i,r||"",!1,a,l),t=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!t.ok)throw Error("server request failed.");(0,s.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:d,osType:u}})}catch(e){(0,s.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:e.name,appType:d,osType:u}})}}else(0,s.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:d,osType:u}})}function o(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},755289:(e,t,i)=>{i.d(t,{Z:()=>r});let r=()=>1e6*Date.now()},12610:(e,t,i)=>{function r(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z3:()=>c,LU:()=>p,ZP:()=>h});let s=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,n={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},a={},o={background:"#FF8A8A",transform:"scale(.98)"},l={init:e=>({transform:`scale(${a[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[n.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[n.exit]:o,[n.stopped]:o,[n.paused]:o,[n.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class d{constructor(e){r(this,"setMutationObserver",e=>(this.mutationObserver=e,this)),r(this,"startMutationObserver",e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)}),r(this,"stopMutationObserver",()=>{this.mutationObserver&&this.mutationObserver.disconnect()}),r(this,"handleIntersectionChange",e=>{let t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){let e=Date.now();this.startTime=e,this._debug(n.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach(e=>e())}else!t&&this.inViewport&&(this._debug(n.exit,!0),this.exitCallbacks.forEach(e=>e(this.toJSON())));this.inViewport=t}),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,s&&Object.assign(this.node.style,l.init(e)),this}pause(){return this.inViewport&&(this._debug(n.paused,!0),this.exitCallbacks.forEach(e=>e(this.toJSON()))),this}resume(){if(this.inViewport){let e=Date.now();this._debug(n.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(n.stopped,!0),this.exitCallbacks.forEach(t=>t(this.toJSON(e)))),this}toJSON(e=""){return{startTime:1e6*this.startTime,endTime:1e6*Date.now(),forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:`${(Date.now()-this.startTime)/1e3} seconds`}}_debug(e,t){if(s)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),l[e]&&Object.assign(this.node.style,l[e]),e){case n.flushed:case n.paused:case n.exit:a[this.debugId]=!0}}}function u(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let c=!0,p=!1;class h{constructor(){u(this,"_delegateChange",e=>{e.forEach(e=>{let t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)})}),u(this,"_handleMutations",(e,t)=>{let i=this.mutationObservers.get(t),r=i&&i.offsetHeight<1;r&&i&&this.stop(i,"removed")}),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=p,this.observer=new window.IntersectionObserver(this._delegateChange),window.Cypress&&!window.activeImpressions&&(window.activeImpressions=new Map),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){let i=this.activeImpressions.get(e);if(i){var r;i.stop(t),this.mutationObservers.delete(i.mutationObserver),i.stopMutationObserver(),this.activeImpressions.delete(e),null===(r=window.activeImpressions)||void 0===r||r.delete(e),this.observer.unobserve(e)}}start(e){let t=this.activeImpressions.get(e);if(!t){var i;t=new d(e),this.activeImpressions.set(e,t),null===(i=window.activeImpressions)||void 0===i||i.set(e,t),this.observer.observe(e),t.setMutationObserver(new window.MutationObserver((e,t)=>this._handleMutations(e,t))),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})}return t}pause(e=c){this.paused||(Array.from(this.activeImpressions.values()).forEach(e=>e.pause()),this.paused=!0,this.pausePriority!==p||(this.pausePriority=e))}resume(e=c){(e!==p||this.pausePriority!==c)&&this.paused&&(Array.from(this.activeImpressions.values()).forEach(e=>e.resume()),this.paused=!1,this.pausePriority=p)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){let e=Array.from(this.topObstructions).reduce((e,t)=>{let{bottom:i}=t.getBoundingClientRect();return i>e?i:e},0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce((e,t)=>{let{top:i}=t.getBoundingClientRect();return i<e?i:e},window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){let i={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,i),Array.from(this.activeImpressions.values()).forEach(e=>this.observer.observe(e.node)),this.topHeight=e,this.bottomHeight=t}}}},124580:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(12610);let s=new r.ZP},48714:(e,t,i)=>{i.d(t,{Se:()=>v,iw:()=>_,gV:()=>b,G3:()=>w,Gj:()=>f,Jd:()=>m,$3:()=>g});var r=i(56641),s=i(231486),n=i(226198),a=i(186656),o=i(250059);let l=e=>"string"!=typeof e&&e?e.state:null;var d=i(643913),u=i(547239),c=i(508847),p=i(579164),h=i(333155);let m=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},b=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),g=({location:e,pinId:t,surface:i})=>!!i&&!h.ZF.includes(i)||e.pathname.includes(t),v=(e,t)=>{var i,r;let a=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";s.t8((0,n.GS)(a),o);let l={token:`${a}-${o}`,url:e,...t&&!t.params?t.queryParams:(null==t?void 0:t.params)&&{pin:null!==(i=t.params.pinId)&&void 0!==i?i:void 0,isThirdPartyAd:null!==(r=t.params.isThirdPartyAd)&&void 0!==r?r:void 0,csr:t.params.csrId&&!t.params.pinId?t.params.csrId:void 0,client_tracking_params:t.params.clientTrackingParams,aux_data:t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(l)}`},f=(e,t)=>{(0,r.Z)(v(e,t),!0,null==t?void 0:t.features)},_=async({clientTrackingParams:e,href:t,isMounted:i,pinId:r,spamCheckCallback:s})=>{let n=await (0,a.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:t}});if(!n.resource_response.error&&i){let e=n.resource_response.data||{},{message:t,redirect_status:i,url:r}=e,a=["blocked","suspicious","porn"].includes(i);s({blocked:a,message:t,redirectStatus:i,sanitized_url:r})}},w=({event:e,onHistoryChange:t,href:i,history:s,target:n})=>{let a=(0,o.Z)(i),d=l(i),h=(0,u.Z)(a);h===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===n?(0,r.Z)(a,"blank"===n):s&&h===p.Z.SAME_ORIGIN&&(s.push((0,c.Z)({url:a}),null!=d?d:{}),t&&t({event:e}))}},287072:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(667294),s=i(616550),n=i(768559),a=i(48714),o=i(188335),l=i(250059),d=i(149230),u=i(108234),c=i(67347);function p(e){var t,i,p;let{externalData:h,href:m,onHistoryChange:b,target:g}=e,[v,f]=(0,r.useState)(null),[_,w]=(0,r.useState)(!1),y=(0,s.useHistory)(),I=(0,s.useLocation)(),P=(0,l.Z)(m),k=(0,d.Z)({url:P}),{showWarning:S}=null!==(t=(0,u.s)())&&void 0!==t?t:{},{pin:O,surface:E}=h||{},x=O?(0,n.Z)({boardUrl:null===(i=O.board)||void 0===i?void 0:i.url,location:I,pinId:O.entityId,pinnerUserName:null===(p=O.pinner)||void 0===p?void 0:p.username,storyPinDataId:O.storyPinDataId,trackingParams:O.trackingParams,trackingParamsMap:O.trackingParamsMap}):null,A=(0,o.Z)();return(0,r.useEffect)(()=>(w(!0),()=>{w(!1)}),[]),(0,r.useEffect)(()=>{k&&O&&null===v&&_&&(!O.promoter||O.isDownstreamPromotion)&&(0,a.$3)({location:I,pinId:O.entityId,surface:E})&&(0,a.iw)({clientTrackingParams:x,isMounted:_,pinId:O.entityId,spamCheckCallback:e=>f(e),href:P})},[x,O,E,P,k,_,I,v]),({event:e})=>{if(!(0,a.gV)({isOffsiteUrl:k,event:e})){if(e.preventDefault(),!m||"string"==typeof m&&m.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:I.pathname,href:m}});return}if(k||null!=h&&h.dangerouslyForceOffsiteUrl){var t;A({auxData:null==h?void 0:h.auxData,clientTrackingParams:x,pin:(null==h?void 0:h.pin)&&{attributionSourceId:h.pin.attributionSourceId,campaignId:h.pin.campaignId,isPromoted:h.pin.isPromoted,pinPromotionId:h.pin.pinPromotionId,isThirdPartyAd:h.pin.isThirdPartyAd,advertiserId:h.pin.advertiserId},pinId:null==h?void 0:null===(t=h.pin)||void 0===t?void 0:t.entityId,queryParams:null==h?void 0:h.queryParams,showWarning:S,spamCheck:v,url:P})}else(0,a.G3)({event:e,href:m,history:y,onHistoryChange:b,target:"blank"===g?"blank":null})}}}},188335:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(983722),s=i(619937),n=i(337815),a=i(366284),o=i(407043),l=i(48714),d=i(43760);let u=(e,t,i)=>{let r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(s.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(s.$N.ATTRIBUTE_DESTINATION,i),r.setAttribute(s.$N.ATTRIBUTE_ON,i),r.click()},c=(e,t,i,r,a)=>{let o=(0,n.m_)(e,i,!0,r,a),l=document.createElement("a");l.setAttribute("href",t),l.setAttribute("target","_blank"),l.setAttribute("rel","noopener nofollow noreferrer"),l.style.cursor="pointer",l.style.display="block",l.setAttribute(s.NR.SOURCE,o),l.click()},p=()=>{let{logContextEvent:e}=(0,o.v)();return({attributionSourceId:t,auxData:i,campaignId:s,clientTrackingParams:n,href:o,isPromoted:d,pinId:p,pinPromotionId:h,isThirdPartyAd:m,advertiserId:b})=>{var g,v,f;if(!d)return!1;let _=(0,r.Z)(),w=(0,l.Se)(o,{params:{pinId:p,csrId:null,clientTrackingParams:n,auxData:i,isThirdPartyAd:m}}),y=null!==(g=null==_?void 0:_.userAgent.browserName)&&void 0!==g?g:"";if((0,a.G6)(y)){let{group:i}=null!==(v=null==_?void 0:_.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==v?v:{},r=null!=_&&_.userAgent.browserVersion?_.userAgent.browserVersion:"0.0",a=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(t&&a>=14.1&&["enabled_safari"].includes(i))return u(t,w,o),e({event_type:101,clientTrackingParams:n,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:h||"",click_measurement_campaign_id:s||"",is_pcm:!0,attribution_source_id:t,page_url:o}}),!0}else if((0,a.i7)(y)&&null!==(f=window.document.featurePolicy)&&void 0!==f&&f.allowsFeature("attribution-reporting"))return c(t,w,o,s,b),e({event_type:101,clientTrackingParams:n,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:h||"",click_measurement_campaign_id:s||"",is_arapi:!0,attribution_source_id:t,page_url:o}}),!0;return!1}},h=e=>{let t=p();return({auxData:i,clientTrackingParams:r,pin:s,pinId:n,queryParams:a,showWarning:o,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:r,pinId:n,hasPin:!!s,auxData:i,isThirdPartyAd:null==s?void 0:s.isThirdPartyAd});return}if(!s&&!(null!=e&&e.isFromClickthroughLink)){(0,l.Gj)(c,a?{queryParams:a}:{params:{pinId:n}});return}if(null!=u&&u.blocked){null==o||o(u);return}s&&t({attributionSourceId:s.attributionSourceId,auxData:i,campaignId:s.campaignId?String(s.campaignId):null,clientTrackingParams:r,href:c,isPromoted:s.isPromoted,pinId:n,pinPromotionId:s.pinPromotionId?String(s.pinPromotionId):null,isThirdPartyAd:s.isThirdPartyAd,advertiserId:s.advertiserId?s.advertiserId:null})||(0,l.Gj)(c,{params:{clientTrackingParams:r,auxData:i,pinId:n,isThirdPartyAd:null==s?void 0:s.isThirdPartyAd}})}}},505920:(e,t,i)=>{i.d(t,{UZ:()=>c,Z8:()=>p,my:()=>h});var r=i(667294);i(702664);var s=i(214494),n=i(425288),a=i(785893);function o(e,t,i){var r;let s=[...null!==(r=t[e][i.payload.name])&&void 0!==r?r:[],i.payload.handler],n={...t};return n[e]={...t[e],[i.payload.name]:s},n}function l(e,t,i){if(!t[e][i.payload.name])return t;let r=t[e][i.payload.name].filter(e=>e!==i.payload.handler),s={...t};return s[e]={...t[e],[i.payload.name]:r},s}let{Provider:d,useHook:u}=(0,n.Z)("ResourceContext");function c({children:e}){let[{listeners:t,moreListeners:i},n]=(0,r.useReducer)((e,t)=>{switch(t.type){case"addListener":return o("listeners",e,t);case"addMoreListener":return o("moreListeners",e,t);case"removeListener":return l("listeners",e,t);case"removeMoreListener":return l("moreListeners",e,t);default:return e}},{listeners:{},moreListeners:{}});s.Z.fetchCompleteCallback=({resource:e,options:i,response:r,normalizedResponse:s,refresh:n,resourceSchema:a})=>{t[e]&&t[e].forEach(t=>t({isRefresh:n,normalizedResponse:s,options:i,schema:a,resource:e,response:r}))},s.Z.fetchMoreCompleteCallback=({resource:e,options:t,response:r,normalizedResponse:s,refresh:n,resourceSchema:a})=>{i[e]&&i[e].forEach(i=>i({isRefresh:n,normalizedResponse:s,options:t,schema:a,resource:e,response:r}))};let u=(0,r.useMemo)(()=>({listenerDispatch:n}),[]);return(0,a.jsx)(d,{value:u,children:e})}function p(e,t){let{listenerDispatch:i}=u();(0,r.useEffect)(()=>(i({type:"addListener",payload:{name:e,handler:t}}),()=>{i({type:"removeListener",payload:{name:e,handler:t}})}))}function h(e,t){let{listenerDispatch:i}=u();(0,r.useEffect)(()=>(i({type:"addMoreListener",payload:{name:e,handler:t}}),()=>{i({type:"removeMoreListener",payload:{name:e,handler:t}})}))}},250059:(e,t,i)=>{i.d(t,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},508847:(e,t,i)=>{i.d(t,{Z:()=>n});let r=(e,t)=>0===e.lastIndexOf(t,0);var s=i(567831);let n=({url:e})=>{let t=(0,s.Z)("/");return r(e,t)?e.substr(t.length-1):e}},43760:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(186656),s=i(48714);function n(e,t){let{auxData:i,clientTrackingParams:n,hasPin:a,pinId:o,isThirdPartyAd:l}=t||{},d={pin_id:o,check_only:!0,client_tracking_params:a?n:void 0,url:e,aux_data:JSON.stringify(i)};l&&(d.third_party_ad=o,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:i,url:r}=e.data,s=["blocked","suspicious","porn"].includes(i);if(!s){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,s.Gj)(e,{params:a?{pinId:o,clientTrackingParams:n,auxData:i,isThirdPartyAd:l}:{pinId:o}})})}},333155:(e,t,i)=>{i.d(t,{UP:()=>o,Wv:()=>s,ZF:()=>r,zI:()=>n,zl:()=>a});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],s=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],n=[...s,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],a=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},108234:(e,t,i)=>{i.d(t,{Z:()=>g,s:()=>b});var r=i(667294),s=i(425288),n=i(608575),a=i(883119),o=i(121151),l=i(898781),d=i(349700),u=i(785893);let c=()=>{var e;let t=(0,l.ZP)(),{dismissWarning:i}=null!==(e=b())&&void 0!==e?e:{};return(0,u.jsx)(a.xu,{paddingX:3,children:(0,u.jsx)(a.zx,{fullWidth:!0,color:"red",onClick:i,text:t._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},p=()=>{let e=(0,l.ZP)();return(0,u.jsx)(a.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(a.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},h=({message:e,sanitized_url:t})=>{var i;let r=(0,l.ZP)(),{dismissWarning:s}=null!==(i=b())&&void 0!==i?i:{};return(0,u.jsx)(o.ZP,{accessibilityModalLabel:r._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),onDismiss:s,heading:r._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),footer:(0,u.jsx)(c,{}),children:(0,u.jsxs)(a.xu,{padding:6,children:[(0,u.jsx)(a.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(a.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(a.xu,{marginEnd:3,children:(0,u.jsx)(a.JO,{accessibilityLabel:r._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(a.xv,{inline:!0,lineClamp:1,weight:"bold",children:n.parse(t).hostname})]})]})})},{Provider:m,useMaybeHook:b}=(0,s.Z)("SpammyClickthrough");function g({children:e}){let[t,i]=(0,r.useState)(null),s=(0,r.useCallback)(()=>{i(null)},[i]),n=(0,r.useCallback)(e=>{i(e)},[i]),a=(0,r.useMemo)(()=>({dismissWarning:s,showWarning:n}),[s,n]);return(0,u.jsxs)(m,{value:a,children:[t&&(0,u.jsx)(h,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/18352-481d67e871cc6985.mjs.map