(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))i(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function d(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(f){if(f.ep)return;f.ep=!0;const c=d(f);fetch(f.href,c)}})();function Au(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var q0={exports:{}},cr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function K3(){if(Qf)return cr;Qf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(i,f,c){var h=null;if(c!==void 0&&(h=""+c),f.key!==void 0&&(h=""+f.key),"key"in f){c={};for(var g in f)g!=="key"&&(c[g]=f[g])}else c=f;return f=c.ref,{$$typeof:s,type:i,key:h,ref:f!==void 0?f:null,props:c}}return cr.Fragment=u,cr.jsx=d,cr.jsxs=d,cr}var Kf;function J3(){return Kf||(Kf=1,q0.exports=K3()),q0.exports}var S=J3(),N0={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function W3(){if(Jf)return xe;Jf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,k={};function B(x,O,N){this.props=x,this.context=O,this.refs=k,this.updater=N||T}B.prototype.isReactComponent={},B.prototype.setState=function(x,O){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,O,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function U(){}U.prototype=B.prototype;function j(x,O,N){this.props=x,this.context=O,this.refs=k,this.updater=N||T}var X=j.prototype=new U;X.constructor=j,V(X,B.prototype),X.isPureReactComponent=!0;var K=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function Y(x,O,N,Z,$,oe){return N=oe.ref,{$$typeof:s,type:x,key:O,ref:N!==void 0?N:null,props:oe}}function I(x,O){return Y(x.type,O,void 0,void 0,void 0,x.props)}function te(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function fe(x){var O={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(N){return O[N]})}var ve=/\/+/g;function ae(x,O){return typeof x=="object"&&x!==null&&x.key!=null?fe(""+x.key):O.toString(36)}function ye(){}function ze(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(O){x.status==="pending"&&(x.status="fulfilled",x.value=O)},function(O){x.status==="pending"&&(x.status="rejected",x.reason=O)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ge(x,O,N,Z,$){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(oe){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case s:case u:ue=!0;break;case v:return ue=x._init,ge(ue(x._payload),O,N,Z,$)}}if(ue)return $=$(x),ue=Z===""?"."+ae(x,0):Z,K($)?(N="",ue!=null&&(N=ue.replace(ve,"$&/")+"/"),ge($,O,N,"",function(Ue){return Ue})):$!=null&&(te($)&&($=I($,N+($.key==null||x&&x.key===$.key?"":(""+$.key).replace(ve,"$&/")+"/")+ue)),O.push($)),1;ue=0;var He=Z===""?".":Z+":";if(K(x))for(var De=0;De<x.length;De++)Z=x[De],oe=He+ae(Z,De),ue+=ge(Z,O,N,oe,$);else if(De=b(x),typeof De=="function")for(x=De.call(x),De=0;!(Z=x.next()).done;)Z=Z.value,oe=He+ae(Z,De++),ue+=ge(Z,O,N,oe,$);else if(oe==="object"){if(typeof x.then=="function")return ge(ze(x),O,N,Z,$);throw O=String(x),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(x,O,N){if(x==null)return x;var Z=[],$=0;return ge(x,Z,"","",function(oe){return O.call(N,oe,$++)}),Z}function J(x){if(x._status===-1){var O=x._result;O=O(),O.then(function(N){(x._status===0||x._status===-1)&&(x._status=1,x._result=N)},function(N){(x._status===0||x._status===-1)&&(x._status=2,x._result=N)}),x._status===-1&&(x._status=0,x._result=O)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function re(){}return xe.Children={map:H,forEach:function(x,O,N){H(x,function(){O.apply(this,arguments)},N)},count:function(x){var O=0;return H(x,function(){O++}),O},toArray:function(x){return H(x,function(O){return O})||[]},only:function(x){if(!te(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},xe.Component=B,xe.Fragment=d,xe.Profiler=f,xe.PureComponent=j,xe.StrictMode=i,xe.Suspense=y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,xe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},xe.cache=function(x){return function(){return x.apply(null,arguments)}},xe.cloneElement=function(x,O,N){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Z=V({},x.props),$=x.key,oe=void 0;if(O!=null)for(ue in O.ref!==void 0&&(oe=void 0),O.key!==void 0&&($=""+O.key),O)!P.call(O,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&O.ref===void 0||(Z[ue]=O[ue]);var ue=arguments.length-2;if(ue===1)Z.children=N;else if(1<ue){for(var He=Array(ue),De=0;De<ue;De++)He[De]=arguments[De+2];Z.children=He}return Y(x.type,$,void 0,void 0,oe,Z)},xe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},xe.createElement=function(x,O,N){var Z,$={},oe=null;if(O!=null)for(Z in O.key!==void 0&&(oe=""+O.key),O)P.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&($[Z]=O[Z]);var ue=arguments.length-2;if(ue===1)$.children=N;else if(1<ue){for(var He=Array(ue),De=0;De<ue;De++)He[De]=arguments[De+2];$.children=He}if(x&&x.defaultProps)for(Z in ue=x.defaultProps,ue)$[Z]===void 0&&($[Z]=ue[Z]);return Y(x,oe,void 0,void 0,null,$)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(x){return{$$typeof:g,render:x}},xe.isValidElement=te,xe.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:J}},xe.memo=function(x,O){return{$$typeof:p,type:x,compare:O===void 0?null:O}},xe.startTransition=function(x){var O=G.T,N={};G.T=N;try{var Z=x(),$=G.S;$!==null&&$(N,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(re,F)}catch(oe){F(oe)}finally{G.T=O}},xe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},xe.use=function(x){return G.H.use(x)},xe.useActionState=function(x,O,N){return G.H.useActionState(x,O,N)},xe.useCallback=function(x,O){return G.H.useCallback(x,O)},xe.useContext=function(x){return G.H.useContext(x)},xe.useDebugValue=function(){},xe.useDeferredValue=function(x,O){return G.H.useDeferredValue(x,O)},xe.useEffect=function(x,O,N){var Z=G.H;if(typeof N=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(x,O)},xe.useId=function(){return G.H.useId()},xe.useImperativeHandle=function(x,O,N){return G.H.useImperativeHandle(x,O,N)},xe.useInsertionEffect=function(x,O){return G.H.useInsertionEffect(x,O)},xe.useLayoutEffect=function(x,O){return G.H.useLayoutEffect(x,O)},xe.useMemo=function(x,O){return G.H.useMemo(x,O)},xe.useOptimistic=function(x,O){return G.H.useOptimistic(x,O)},xe.useReducer=function(x,O,N){return G.H.useReducer(x,O,N)},xe.useRef=function(x){return G.H.useRef(x)},xe.useState=function(x){return G.H.useState(x)},xe.useSyncExternalStore=function(x,O,N){return G.H.useSyncExternalStore(x,O,N)},xe.useTransition=function(){return G.H.useTransition()},xe.version="19.1.1",xe}var Wf;function ec(){return Wf||(Wf=1,N0.exports=W3()),N0.exports}var W=ec();const tn=Au(W);var Z0={exports:{}},or={},L0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function F3(){return Ff||(Ff=1,(function(s){function u(H,J){var F=H.length;H.push(J);e:for(;0<F;){var re=F-1>>>1,x=H[re];if(0<f(x,J))H[re]=J,H[F]=x,F=re;else break e}}function d(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var J=H[0],F=H.pop();if(F!==J){H[0]=F;e:for(var re=0,x=H.length,O=x>>>1;re<O;){var N=2*(re+1)-1,Z=H[N],$=N+1,oe=H[$];if(0>f(Z,F))$<x&&0>f(oe,Z)?(H[re]=oe,H[$]=F,re=$):(H[re]=Z,H[N]=F,re=N);else if($<x&&0>f(oe,F))H[re]=oe,H[$]=F,re=$;else break e}}return J}function f(H,J){var F=H.sortIndex-J.sortIndex;return F!==0?F:H.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,g=h.now();s.unstable_now=function(){return h.now()-g}}var y=[],p=[],v=1,C=null,b=3,T=!1,V=!1,k=!1,B=!1,U=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(H){for(var J=d(p);J!==null;){if(J.callback===null)i(p);else if(J.startTime<=H)i(p),J.sortIndex=J.expirationTime,u(y,J);else break;J=d(p)}}function G(H){if(k=!1,K(H),!V)if(d(y)!==null)V=!0,P||(P=!0,ae());else{var J=d(p);J!==null&&ge(G,J.startTime-H)}}var P=!1,Y=-1,I=5,te=-1;function fe(){return B?!0:!(s.unstable_now()-te<I)}function ve(){if(B=!1,P){var H=s.unstable_now();te=H;var J=!0;try{e:{V=!1,k&&(k=!1,j(Y),Y=-1),T=!0;var F=b;try{t:{for(K(H),C=d(y);C!==null&&!(C.expirationTime>H&&fe());){var re=C.callback;if(typeof re=="function"){C.callback=null,b=C.priorityLevel;var x=re(C.expirationTime<=H);if(H=s.unstable_now(),typeof x=="function"){C.callback=x,K(H),J=!0;break t}C===d(y)&&i(y),K(H)}else i(y);C=d(y)}if(C!==null)J=!0;else{var O=d(p);O!==null&&ge(G,O.startTime-H),J=!1}}break e}finally{C=null,b=F,T=!1}J=void 0}}finally{J?ae():P=!1}}}var ae;if(typeof X=="function")ae=function(){X(ve)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,ze=ye.port2;ye.port1.onmessage=ve,ae=function(){ze.postMessage(null)}}else ae=function(){U(ve,0)};function ge(H,J){Y=U(function(){H(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return b},s.unstable_next=function(H){switch(b){case 1:case 2:case 3:var J=3;break;default:J=b}var F=b;b=J;try{return H()}finally{b=F}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var F=b;b=H;try{return J()}finally{b=F}},s.unstable_scheduleCallback=function(H,J,F){var re=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?re+F:re):F=re,H){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=F+x,H={id:v++,callback:J,priorityLevel:H,startTime:F,expirationTime:x,sortIndex:-1},F>re?(H.sortIndex=F,u(p,H),d(y)===null&&H===d(p)&&(k?(j(Y),Y=-1):k=!0,ge(G,F-re))):(H.sortIndex=x,u(y,H),V||T||(V=!0,P||(P=!0,ae()))),H},s.unstable_shouldYield=fe,s.unstable_wrapCallback=function(H){var J=b;return function(){var F=b;b=J;try{return H.apply(this,arguments)}finally{b=F}}}})(P0)),P0}var If;function I3(){return If||(If=1,L0.exports=F3()),L0.exports}var Q0={exports:{}},Rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function $3(){if($f)return Rt;$f=1;var s=ec();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var i={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(y,p,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:y,containerInfo:p,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Rt.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return c(y,p,null,v)},Rt.flushSync=function(y){var p=h.T,v=i.p;try{if(h.T=null,i.p=2,y)return y()}finally{h.T=p,i.p=v,i.d.f()}},Rt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(y,p))},Rt.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},Rt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?i.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:b,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:C,integrity:b,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=g(p.as,p.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(y)},Rt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin);i.d.L(y,v,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rt.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=g(p.as,p.crossOrigin);i.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(y)},Rt.requestFormReset=function(y){i.d.r(y)},Rt.unstable_batchedUpdates=function(y,p){return y(p)},Rt.useFormState=function(y,p,v){return h.H.useFormState(y,p,v)},Rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rt.version="19.1.1",Rt}var e2;function ed(){if(e2)return Q0.exports;e2=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Q0.exports=$3(),Q0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t2;function td(){if(t2)return or;t2=1;var s=I3(),u=ec(),d=ed();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return g(a),e;if(r===l)return g(a),t;r=r.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=r;else{for(var o=!1,m=a.child;m;){if(m===n){o=!0,n=a,l=r;break}if(m===l){o=!0,l=a,n=r;break}m=m.sibling}if(!o){for(m=r.child;m;){if(m===n){o=!0,n=r,l=a;break}if(m===l){o=!0,l=r,n=a;break}m=m.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),X=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case B:return"Profiler";case k:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case X:return(e.displayName||"Context")+".Provider";case j:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:ze(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return ze(e(t))}catch{}}return null}var ge=Array.isArray,H=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},re=[],x=-1;function O(e){return{current:e}}function N(e){0>x||(e.current=re[x],re[x]=null,x--)}function Z(e,t){x++,re[x]=e.current,e.current=t}var $=O(null),oe=O(null),ue=O(null),He=O(null);function De(e,t){switch(Z(ue,t),Z(oe,e),Z($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_f(t),e=Sf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N($),Z($,e)}function Ue(){N($),N(oe),N(ue)}function Ct(e){e.memoizedState!==null&&Z(He,e);var t=$.current,n=Sf(t,e.type);t!==n&&(Z(oe,e),Z($,n))}function $e(e){oe.current===e&&(N($),N(oe)),He.current===e&&(N(He),lr._currentValue=F)}var zt=Object.prototype.hasOwnProperty,En=s.unstable_scheduleCallback,fn=s.unstable_cancelCallback,ne=s.unstable_shouldYield,pe=s.unstable_requestPaint,ce=s.unstable_now,Pe=s.unstable_getCurrentPriorityLevel,je=s.unstable_ImmediatePriority,We=s.unstable_UserBlockingPriority,rt=s.unstable_NormalPriority,yt=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,dn=s.log,ll=s.unstable_setDisableYieldValue,Ft=null,Qe=null;function vt(e){if(typeof dn=="function"&&ll(e),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(Ft,e)}catch{}}var Ye=Math.clz32?Math.clz32:Cl,fa=Math.log,pr=Math.LN2;function Cl(e){return e>>>=0,e===0?32:31-(fa(e)/pr|0)|0}var al=256,rl=4194304;function Vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ae(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?a=Vn(l):(o&=m,o!==0?a=Vn(o):n||(n=m&~e,n!==0&&(a=Vn(n))))):(m=l&~r,m!==0?a=Vn(m):o!==0?a=Vn(o):n||(n=l&~e,n!==0&&(a=Vn(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function _e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var e=al;return al<<=1,(al&4194048)===0&&(al=256),e}function ee(){var e=rl;return rl<<=1,(rl&62914560)===0&&(rl=4194304),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function da(e,t,n,l,a,r){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,_=e.expirationTimes,A=e.hiddenUpdates;for(n=o&~n;0<n;){var q=31-Ye(n),Q=1<<q;m[q]=0,_[q]=-1;var E=A[q];if(E!==null)for(A[q]=null,q=0;q<E.length;q++){var w=E[q];w!==null&&(w.lane&=-536870913)}n&=~Q}l!==0&&wn(e,l,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function wn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ye(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Ye(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ln(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function At(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:kf(e.type))}function ha(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var an=Math.random().toString(36).slice(2),ut="__reactFiber$"+an,Ke="__reactProps$"+an,hn="__reactContainer$"+an,Rl="__reactEvents$"+an,Hu="__reactListeners$"+an,gr="__reactHandles$"+an,ic="__reactResources$"+an,ma="__reactMarker$"+an;function Gu(e){delete e[ut],delete e[Ke],delete e[Rl],delete e[Hu],delete e[gr]}function Dl(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hn]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[ut])return n;e=Df(e)}return t}e=n,n=e.parentNode}return null}function zl(e){if(e=e[ut]||e[hn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function pa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ml(e){var t=e[ic];return t||(t=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dt(e){e[ma]=!0}var cc=new Set,oc={};function ul(e,t){Al(e,t),Al(e+"Capture",t)}function Al(e,t){for(oc[e]=t,e=0;e<t.length;e++)cc.add(t[e])}var X2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sc={},fc={};function k2(e){return zt.call(fc,e)?!0:zt.call(sc,e)?!1:X2.test(e)?fc[e]=!0:(sc[e]=!0,!1)}function yr(e,t,n){if(k2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function vr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Bu,dc;function Ol(e){if(Bu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bu=t&&t[1]||"",dc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bu+e+dc}var Uu=!1;function ju(e,t){if(!e||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(w){var E=w}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(w){E=w}e.call(Q.prototype)}}else{try{throw Error()}catch(w){E=w}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(w){if(w&&E&&typeof w.stack=="string")return[w.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],m=r[1];if(o&&m){var _=o.split(`
`),A=m.split(`
`);for(a=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;if(l===_.length||a===A.length)for(l=_.length-1,a=A.length-1;1<=l&&0<=a&&_[l]!==A[a];)a--;for(;1<=l&&0<=a;l--,a--)if(_[l]!==A[a]){if(l!==1||a!==1)do if(l--,a--,0>a||_[l]!==A[a]){var q=`
`+_[l].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=l&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ol(n):""}function q2(e){switch(e.tag){case 26:case 27:case 5:return Ol(e.type);case 16:return Ol("Lazy");case 13:return Ol("Suspense");case 19:return Ol("SuspenseList");case 0:case 15:return ju(e.type,!1);case 11:return ju(e.type.render,!1);case 1:return ju(e.type,!0);case 31:return Ol("Activity");default:return""}}function hc(e){try{var t="";do t+=q2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N2(e){var t=mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=N2(e))}function pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=mc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z2=/[\n"\\]/g;function Nt(e){return e.replace(Z2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yu(e,t,n,l,a,r,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Xu(e,o,qt(t)):n!=null?Xu(e,o,qt(n)):l!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+qt(m):e.removeAttribute("name")}function gc(e,t,n,l,a,r,o,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Xu(e,t,n){t==="number"&&br(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function El(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function yc(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function vc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(ge(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Vl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||L2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function bc(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&xc(e,a,l)}else for(var r in t)t.hasOwnProperty(r)&&xc(e,r,t[r])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(e){return Q2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qu=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,Hl=null;function _c(e){var t=zl(e);if(t&&(e=t.stateNode)){var n=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Ke]||null;if(!a)throw Error(i(90));Yu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&pc(l)}break e;case"textarea":yc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&El(e,!!n.multiple,t,!1)}}}var Zu=!1;function Sc(e,t,n){if(Zu)return e(t,n);Zu=!0;try{var l=e(t);return l}finally{if(Zu=!1,(wl!==null||Hl!==null)&&(uu(),wl&&(t=wl,e=Hl,Hl=wl=null,_c(t),e)))for(t=0;t<e.length;t++)_c(e[t])}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Ke]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(pn)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Lu=!1}var Gn=null,Pu=null,Sr=null;function Cc(){if(Sr)return Sr;var e,t=Pu,n=t.length,l,a="value"in Gn?Gn.value:Gn.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[r-l];l++);return Sr=a.slice(e,1<l?1-l:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Tc(){return!1}function Ot(e){function t(n,l,a,r,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Tr:Tc,this.isPropagationStopped=Tc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rr=Ot(il),va=v({},il,{view:0,detail:0}),K2=Ot(va),Qu,Ku,xa,Dr=v({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?(Qu=e.screenX-xa.screenX,Ku=e.screenY-xa.screenY):Ku=Qu=0,xa=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Ku}}),Rc=Ot(Dr),J2=v({},Dr,{dataTransfer:0}),W2=Ot(J2),F2=v({},va,{relatedTarget:0}),Ju=Ot(F2),I2=v({},il,{animationName:0,elapsedTime:0,pseudoElement:0}),$2=Ot(I2),e1=v({},il,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t1=Ot(e1),n1=v({},il,{data:0}),Dc=Ot(n1),l1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r1[e])?!!t[e]:!1}function Wu(){return u1}var i1=v({},va,{key:function(e){if(e.key){var t=l1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c1=Ot(i1),o1=v({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=Ot(o1),s1=v({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),f1=Ot(s1),d1=v({},il,{propertyName:0,elapsedTime:0,pseudoElement:0}),h1=Ot(d1),m1=v({},Dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p1=Ot(m1),g1=v({},il,{newState:0,oldState:0}),y1=Ot(g1),v1=[9,13,27,32],Fu=pn&&"CompositionEvent"in window,ba=null;pn&&"documentMode"in document&&(ba=document.documentMode);var x1=pn&&"TextEvent"in window&&!ba,Mc=pn&&(!Fu||ba&&8<ba&&11>=ba),Ac=" ",Oc=!1;function Ec(e,t){switch(e){case"keyup":return v1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gl=!1;function b1(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(Oc=!0,Ac);case"textInput":return e=t.data,e===Ac&&Oc?null:e;default:return null}}function _1(e,t){if(Gl)return e==="compositionend"||!Fu&&Ec(e,t)?(e=Cc(),Sr=Pu=Gn=null,Gl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S1[e.type]:t==="textarea"}function Hc(e,t,n,l){wl?Hl?Hl.push(l):Hl=[l]:wl=l,t=du(t,"onChange"),0<t.length&&(n=new Rr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var _a=null,Sa=null;function C1(e){gf(e,0)}function zr(e){var t=pa(e);if(pc(t))return e}function Gc(e,t){if(e==="change")return t}var Bc=!1;if(pn){var Iu;if(pn){var $u="oninput"in document;if(!$u){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),$u=typeof Uc.oninput=="function"}Iu=$u}else Iu=!1;Bc=Iu&&(!document.documentMode||9<document.documentMode)}function jc(){_a&&(_a.detachEvent("onpropertychange",Yc),Sa=_a=null)}function Yc(e){if(e.propertyName==="value"&&zr(Sa)){var t=[];Hc(t,Sa,e,Nu(e)),Sc(C1,t)}}function T1(e,t,n){e==="focusin"?(jc(),_a=t,Sa=n,_a.attachEvent("onpropertychange",Yc)):e==="focusout"&&jc()}function R1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(Sa)}function D1(e,t){if(e==="click")return zr(t)}function z1(e,t){if(e==="input"||e==="change")return zr(t)}function M1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:M1;function Ca(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!zt.call(t,a)||!Gt(e[a],t[a]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=Xc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function ei(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A1=pn&&"documentMode"in document&&11>=document.documentMode,Bl=null,ti=null,Ta=null,ni=!1;function Zc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||Bl==null||Bl!==br(l)||(l=Bl,"selectionStart"in l&&ei(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ta&&Ca(Ta,l)||(Ta=l,l=du(ti,"onSelect"),0<l.length&&(t=new Rr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Bl)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ul={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionrun:cl("Transition","TransitionRun"),transitionstart:cl("Transition","TransitionStart"),transitioncancel:cl("Transition","TransitionCancel"),transitionend:cl("Transition","TransitionEnd")},li={},Lc={};pn&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete Ul.animationend.animation,delete Ul.animationiteration.animation,delete Ul.animationstart.animation),"TransitionEvent"in window||delete Ul.transitionend.transition);function ol(e){if(li[e])return li[e];if(!Ul[e])return e;var t=Ul[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return li[e]=t[n];return e}var Pc=ol("animationend"),Qc=ol("animationiteration"),Kc=ol("animationstart"),O1=ol("transitionrun"),E1=ol("transitionstart"),V1=ol("transitioncancel"),Jc=ol("transitionend"),Wc=new Map,ai="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ai.push("scrollEnd");function It(e,t){Wc.set(e,t),ul(t,[e])}var Fc=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=Fc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:hc(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:hc(t)}}var Lt=[],jl=0,ri=0;function Mr(){for(var e=jl,t=ri=jl=0;t<e;){var n=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var a=Lt[t];Lt[t++]=null;var r=Lt[t];if(Lt[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}r!==0&&Ic(n,a,r)}}function Ar(e,t,n,l){Lt[jl++]=e,Lt[jl++]=t,Lt[jl++]=n,Lt[jl++]=l,ri|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ui(e,t,n,l){return Ar(e,t,n,l),Or(e)}function Yl(e,t){return Ar(e,null,null,t),Or(e)}function Ic(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,l=r.alternate,l!==null&&(l.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Ye(n),e=r.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),r):null}function Or(e){if(50<Ja)throw Ja=0,d0=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xl={};function w1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,l){return new w1(e,t,n,l)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $c(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Er(e,t,n,l,a,r){var o=0;if(l=e,typeof e=="function")ii(e)&&(o=1);else if(typeof e=="string")o=G3(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=Bt(31,n,t,a),e.elementType=te,e.lanes=r,e;case V:return sl(n.children,a,r,t);case k:o=8,a|=24;break;case B:return e=Bt(12,n,t,a|2),e.elementType=B,e.lanes=r,e;case G:return e=Bt(13,n,t,a),e.elementType=G,e.lanes=r,e;case P:return e=Bt(19,n,t,a),e.elementType=P,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case X:o=10;break e;case j:o=9;break e;case K:o=11;break e;case Y:o=14;break e;case I:o=16,l=null;break e}o=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Bt(o,n,t,a),t.elementType=e,t.type=l,t.lanes=r,t}function sl(e,t,n,l){return e=Bt(7,e,l,t),e.lanes=n,e}function ci(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kl=[],ql=0,Vr=null,wr=0,Pt=[],Qt=0,fl=null,yn=1,vn="";function dl(e,t){kl[ql++]=wr,kl[ql++]=Vr,Vr=e,wr=t}function eo(e,t,n){Pt[Qt++]=yn,Pt[Qt++]=vn,Pt[Qt++]=fl,fl=e;var l=yn;e=vn;var a=32-Ye(l)-1;l&=~(1<<a),n+=1;var r=32-Ye(t)+a;if(30<r){var o=a-a%5;r=(l&(1<<o)-1).toString(32),l>>=o,a-=o,yn=1<<32-Ye(t)+a|n<<a|l,vn=r+e}else yn=1<<r|n<<a|l,vn=e}function si(e){e.return!==null&&(dl(e,1),eo(e,1,0))}function fi(e){for(;e===Vr;)Vr=kl[--ql],kl[ql]=null,wr=kl[--ql],kl[ql]=null;for(;e===fl;)fl=Pt[--Qt],Pt[Qt]=null,vn=Pt[--Qt],Pt[Qt]=null,yn=Pt[--Qt],Pt[Qt]=null}var Mt=null,tt=null,Ee=!1,hl=null,rn=!1,di=Error(i(519));function ml(e){var t=Error(i(418,""));throw za(Zt(t,e)),di}function to(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ut]=e,t[Ke]=l,n){case"dialog":Re("cancel",t),Re("close",t);break;case"iframe":case"object":case"embed":Re("load",t);break;case"video":case"audio":for(n=0;n<Fa.length;n++)Re(Fa[n],t);break;case"source":Re("error",t);break;case"img":case"image":case"link":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"input":Re("invalid",t),gc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),xr(t);break;case"select":Re("invalid",t);break;case"textarea":Re("invalid",t),vc(t,l.value,l.defaultValue,l.children),xr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||bf(t.textContent,n)?(l.popover!=null&&(Re("beforetoggle",t),Re("toggle",t)),l.onScroll!=null&&Re("scroll",t),l.onScrollEnd!=null&&Re("scrollend",t),l.onClick!=null&&(t.onclick=hu),t=!0):t=!1,t||ml(e)}function no(e){for(Mt=e.return;Mt;)switch(Mt.tag){case 5:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:Mt=Mt.return}}function Ra(e){if(e!==Mt)return!1;if(!Ee)return no(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||M0(e.type,e.memoizedProps)),n=!n),n&&tt&&ml(e),no(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){tt=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}tt=null}}else t===27?(t=tt,Fn(e.type)?(e=V0,V0=null,tt=e):tt=t):tt=Mt?en(e.stateNode.nextSibling):null;return!0}function Da(){tt=Mt=null,Ee=!1}function lo(){var e=hl;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),hl=null),e}function za(e){hl===null?hl=[e]:hl.push(e)}var hi=O(null),pl=null,xn=null;function Bn(e,t,n){Z(hi,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=hi.current,N(hi)}function mi(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function pi(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var o=a.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=a;for(var _=0;_<t.length;_++)if(m.context===t[_]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),mi(r.return,n,e),l||(o=null);break e}r=m.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),mi(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Ma(e,t,n,l){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var m=a.type;Gt(a.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(a===He.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(lr):e=[lr])}a=a.return}e!==null&&pi(t,e,n,l),t.flags|=262144}function Hr(e){for(e=e.firstContext;e!==null;){if(!Gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){pl=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tt(e){return ao(pl,e)}function Gr(e,t){return pl===null&&gl(e),ao(e,t)}function ao(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(i(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var H1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G1=s.unstable_scheduleCallback,B1=s.unstable_NormalPriority,st={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gi(){return{controller:new H1,data:new Map,refCount:0}}function Aa(e){e.refCount--,e.refCount===0&&G1(B1,function(){e.controller.abort()})}var Oa=null,yi=0,Nl=0,Zl=null;function U1(e,t){if(Oa===null){var n=Oa=[];yi=0,Nl=x0(),Zl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return yi++,t.then(ro,ro),t}function ro(){if(--yi===0&&Oa!==null){Zl!==null&&(Zl.status="fulfilled");var e=Oa;Oa=null,Nl=0,Zl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function j1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var uo=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&U1(e,t),uo!==null&&uo(e,t)};var yl=O(null);function vi(){var e=yl.current;return e!==null?e:Le.pooledCache}function Br(e,t){t===null?Z(yl,yl.current):Z(yl,t.pool)}function io(){var e=vi();return e===null?null:{parent:st._currentValue,pool:e}}var Ea=Error(i(460)),co=Error(i(474)),Ur=Error(i(542)),xi={then:function(){}};function oo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jr(){}function so(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jr,jr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ho(e),e;default:if(typeof t.status=="string")t.then(jr,jr);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ho(e),e}throw Va=t,Ea}}var Va=null;function fo(){if(Va===null)throw Error(i(459));var e=Va;return Va=null,e}function ho(e){if(e===Ea||e===Ur)throw Error(i(483))}var Un=!1;function bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _i(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Or(e),Ic(e,null,n),t}return Ar(e,l,t,n),Or(e)}function wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Tl(e,n)}}function Si(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ci=!1;function Ha(){if(Ci){var e=Zl;if(e!==null)throw e}}function Ga(e,t,n,l){Ci=!1;var a=e.updateQueue;Un=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var _=m,A=_.next;_.next=null,o===null?r=A:o.next=A,o=_;var q=e.alternate;q!==null&&(q=q.updateQueue,m=q.lastBaseUpdate,m!==o&&(m===null?q.firstBaseUpdate=A:m.next=A,q.lastBaseUpdate=_))}if(r!==null){var Q=a.baseState;o=0,q=A=_=null,m=r;do{var E=m.lane&-536870913,w=E!==m.lane;if(w?(Me&E)===E:(l&E)===E){E!==0&&E===Nl&&(Ci=!0),q!==null&&(q=q.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var he=e,se=m;E=t;var qe=n;switch(se.tag){case 1:if(he=se.payload,typeof he=="function"){Q=he.call(qe,Q,E);break e}Q=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=se.payload,E=typeof he=="function"?he.call(qe,Q,E):he,E==null)break e;Q=v({},Q,E);break e;case 2:Un=!0}}E=m.callback,E!==null&&(e.flags|=64,w&&(e.flags|=8192),w=a.callbacks,w===null?a.callbacks=[E]:w.push(E))}else w={lane:E,tag:m.tag,payload:m.payload,callback:m.callback,next:null},q===null?(A=q=w,_=Q):q=q.next=w,o|=E;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;w=m,m=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);q===null&&(_=Q),a.baseState=_,a.firstBaseUpdate=A,a.lastBaseUpdate=q,r===null&&(a.shared.lanes=0),Qn|=o,e.lanes=o,e.memoizedState=Q}}function mo(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mo(n[e],t)}var Ll=O(null),Yr=O(0);function go(e,t){e=zn,Z(Yr,e),Z(Ll,t),zn=e|t.baseLanes}function Ti(){Z(Yr,zn),Z(Ll,Ll.current)}function Ri(){zn=Yr.current,N(Ll),N(Yr)}var Xn=0,be=null,Xe=null,it=null,Xr=!1,Pl=!1,vl=!1,kr=0,Ba=0,Ql=null,Y1=0;function lt(){throw Error(i(321))}function Di(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function zi(e,t,n,l,a,r){return Xn=r,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?$o:es,vl=!1,r=n(l,a),vl=!1,Pl&&(r=vo(t,n,l,a)),yo(e),r}function yo(e){H.H=Qr;var t=Xe!==null&&Xe.next!==null;if(Xn=0,it=Xe=be=null,Xr=!1,Ba=0,Ql=null,t)throw Error(i(300));e===null||ht||(e=e.dependencies,e!==null&&Hr(e)&&(ht=!0))}function vo(e,t,n,l){be=e;var a=0;do{if(Pl&&(Ql=null),Ba=0,Pl=!1,25<=a)throw Error(i(301));if(a+=1,it=Xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}H.H=P1,r=t(n,l)}while(Pl);return r}function X1(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Ua(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(be.flags|=1024),t}function Mi(){var e=kr!==0;return kr=0,e}function Ai(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oi(e){if(Xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xr=!1}Xn=0,it=Xe=be=null,Pl=!1,Ba=kr=0,Ql=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?be.memoizedState=it=e:it=it.next=e,it}function ct(){if(Xe===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=it===null?be.memoizedState:it.next;if(t!==null)it=t,Xe=e;else{if(e===null)throw be.alternate===null?Error(i(467)):Error(i(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},it===null?be.memoizedState=it=e:it=it.next=e}return it}function Ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ua(e){var t=Ba;return Ba+=1,Ql===null&&(Ql=[]),e=so(Ql,e,t),t=be,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?$o:es),e}function qr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ua(e);if(e.$$typeof===X)return Tt(e)}throw Error(i(438,String(e)))}function Vi(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=be.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ei(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=fe;return t.index++,n}function _n(e,t){return typeof t=="function"?t(e):t}function Nr(e){var t=ct();return wi(t,Xe,e)}function wi(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,r=l.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}t.baseQueue=a=r,l.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var m=o=null,_=null,A=t,q=!1;do{var Q=A.lane&-536870913;if(Q!==A.lane?(Me&Q)===Q:(Xn&Q)===Q){var E=A.revertLane;if(E===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),Q===Nl&&(q=!0);else if((Xn&E)===E){A=A.next,E===Nl&&(q=!0);continue}else Q={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},_===null?(m=_=Q,o=r):_=_.next=Q,be.lanes|=E,Qn|=E;Q=A.action,vl&&n(r,Q),r=A.hasEagerState?A.eagerState:n(r,Q)}else E={lane:Q,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},_===null?(m=_=E,o=r):_=_.next=E,be.lanes|=Q,Qn|=Q;A=A.next}while(A!==null&&A!==t);if(_===null?o=r:_.next=m,!Gt(r,e.memoizedState)&&(ht=!0,q&&(n=Zl,n!==null)))throw n;e.memoizedState=r,e.baseState=o,e.baseQueue=_,l.lastRenderedState=r}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Hi(e){var t=ct(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Gt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,l]}function xo(e,t,n){var l=be,a=ct(),r=Ee;if(r){if(n===void 0)throw Error(i(407));n=n()}else n=t();var o=!Gt((Xe||a).memoizedState,n);o&&(a.memoizedState=n,ht=!0),a=a.queue;var m=So.bind(null,l,a,e);if(ja(2048,8,m,[e]),a.getSnapshot!==t||o||it!==null&&it.memoizedState.tag&1){if(l.flags|=2048,Kl(9,Zr(),_o.bind(null,l,a,n,t),null),Le===null)throw Error(i(349));r||(Xn&124)!==0||bo(l,t,n)}return n}function bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=Ei(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _o(e,t,n,l){t.value=n,t.getSnapshot=l,Co(t)&&To(e)}function So(e,t,n){return n(function(){Co(t)&&To(e)})}function Co(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function To(e){var t=Yl(e,2);t!==null&&kt(t,e,2)}function Gi(e){var t=Et();if(typeof e=="function"){var n=e;if(e=n(),vl){vt(!0);try{n()}finally{vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},t}function Ro(e,t,n,l){return e.baseState=n,wi(e,Xe,typeof l=="function"?l:_n)}function k1(e,t,n,l,a){if(Pr(e))throw Error(i(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};H.T!==null?n(!0):r.isTransition=!1,l(r),n=t.pending,n===null?(r.next=t.pending=r,Do(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Do(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var r=H.T,o={};H.T=o;try{var m=n(a,l),_=H.S;_!==null&&_(o,m),zo(e,t,m)}catch(A){Bi(e,t,A)}finally{H.T=r}}else try{r=n(a,l),zo(e,t,r)}catch(A){Bi(e,t,A)}}function zo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Mo(e,t,l)},function(l){return Bi(e,t,l)}):Mo(e,t,n)}function Mo(e,t,n){t.status="fulfilled",t.value=n,Ao(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Do(e,n)))}function Bi(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ao(t),t=t.next;while(t!==l)}e.action=null}function Ao(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oo(e,t){return t}function Eo(e,t){if(Ee){var n=Le.formState;if(n!==null){e:{var l=be;if(Ee){if(tt){t:{for(var a=tt,r=rn;a.nodeType!==8;){if(!r){a=null;break t}if(a=en(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){tt=en(a.nextSibling),l=a.data==="F!";break e}}ml(l)}l=!1}l&&(t=n[0])}}return n=Et(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},n.queue=l,n=Wo.bind(null,be,l),l.dispatch=n,l=Gi(!1),r=ki.bind(null,be,!1,l.queue),l=Et(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=k1.bind(null,be,a,r,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Vo(e){var t=ct();return wo(t,Xe,e)}function wo(e,t,n){if(t=wi(e,t,Oo)[0],e=Nr(_n)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ua(t)}catch(o){throw o===Ea?Ur:o}else l=t;t=ct();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(be.flags|=2048,Kl(9,Zr(),q1.bind(null,a,n),null)),[l,r,e]}function q1(e,t){e.action=t}function Ho(e){var t=ct(),n=Xe;if(n!==null)return wo(t,n,e);ct(),t=t.memoizedState,n=ct();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Kl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=be.updateQueue,t===null&&(t=Ei(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Zr(){return{destroy:void 0,resource:void 0}}function Go(){return ct().memoizedState}function Lr(e,t,n,l){var a=Et();l=l===void 0?null:l,be.flags|=e,a.memoizedState=Kl(1|t,Zr(),n,l)}function ja(e,t,n,l){var a=ct();l=l===void 0?null:l;var r=a.memoizedState.inst;Xe!==null&&l!==null&&Di(l,Xe.memoizedState.deps)?a.memoizedState=Kl(t,r,n,l):(be.flags|=e,a.memoizedState=Kl(1|t,r,n,l))}function Bo(e,t){Lr(8390656,8,e,t)}function Uo(e,t){ja(2048,8,e,t)}function jo(e,t){return ja(4,2,e,t)}function Yo(e,t){return ja(4,4,e,t)}function Xo(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=n!=null?n.concat([e]):null,ja(4,4,Xo.bind(null,t,e),n)}function Ui(){}function qo(e,t){var n=ct();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Di(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function No(e,t){var n=ct();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Di(t,l[1]))return l[0];if(l=e(),vl){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[l,t],l}function ji(e,t,n){return n===void 0||(Xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ps(),be.lanes|=e,Qn|=e,n)}function Zo(e,t,n,l){return Gt(n,t)?n:Ll.current!==null?(e=ji(e,n,l),Gt(e,t)||(ht=!0),e):(Xn&42)===0?(ht=!0,e.memoizedState=n):(e=Ps(),be.lanes|=e,Qn|=e,t)}function Lo(e,t,n,l,a){var r=J.p;J.p=r!==0&&8>r?r:8;var o=H.T,m={};H.T=m,ki(e,!1,t,n);try{var _=a(),A=H.S;if(A!==null&&A(m,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var q=j1(_,l);Ya(e,t,q,Xt(e))}else Ya(e,t,l,Xt(e))}catch(Q){Ya(e,t,{then:function(){},status:"rejected",reason:Q},Xt())}finally{J.p=r,H.T=o}}function N1(){}function Yi(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=Po(e).queue;Lo(e,a,t,F,n===null?N1:function(){return Qo(e),n(l)})}function Po(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qo(e){var t=Po(e).next.queue;Ya(e,t,{},Xt())}function Xi(){return Tt(lr)}function Ko(){return ct().memoizedState}function Jo(){return ct().memoizedState}function Z1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xt();e=jn(n);var l=Yn(t,e,n);l!==null&&(kt(l,t,n),wa(l,t,n)),t={cache:gi()},e.payload=t;return}t=t.return}}function L1(e,t,n){var l=Xt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Pr(e)?Fo(t,n):(n=ui(e,t,n,l),n!==null&&(kt(n,e,l),Io(n,t,l)))}function Wo(e,t,n){var l=Xt();Ya(e,t,n,l)}function Ya(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pr(e))Fo(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,m=r(o,n);if(a.hasEagerState=!0,a.eagerState=m,Gt(m,o))return Ar(e,t,a,0),Le===null&&Mr(),!1}catch{}finally{}if(n=ui(e,t,a,l),n!==null)return kt(n,e,l),Io(n,t,l),!0}return!1}function ki(e,t,n,l){if(l={lane:2,revertLane:x0(),action:l,hasEagerState:!1,eagerState:null,next:null},Pr(e)){if(t)throw Error(i(479))}else t=ui(e,n,l,2),t!==null&&kt(t,e,2)}function Pr(e){var t=e.alternate;return e===be||t!==null&&t===be}function Fo(e,t){Pl=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Io(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Tl(e,n)}}var Qr={readContext:Tt,use:qr,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},$o={readContext:Tt,use:qr,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:Bo,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Lr(4194308,4,Xo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){Lr(4,2,e,t)},useMemo:function(e,t){var n=Et();t=t===void 0?null:t;var l=e();if(vl){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Et();if(n!==void 0){var a=n(t);if(vl){vt(!0);try{n(t)}finally{vt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=L1.bind(null,be,e),[l.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Gi(e);var t=e.queue,n=Wo.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ui,useDeferredValue:function(e,t){var n=Et();return ji(n,e,t)},useTransition:function(){var e=Gi(!1);return e=Lo.bind(null,be,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=be,a=Et();if(Ee){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Le===null)throw Error(i(349));(Me&124)!==0||bo(l,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Bo(So.bind(null,l,r,e),[e]),l.flags|=2048,Kl(9,Zr(),_o.bind(null,l,r,n,t),null),n},useId:function(){var e=Et(),t=Le.identifierPrefix;if(Ee){var n=vn,l=yn;n=(l&~(1<<32-Ye(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Y1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Xi,useFormState:Eo,useActionState:Eo,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ki.bind(null,be,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vi,useCacheRefresh:function(){return Et().memoizedState=Z1.bind(null,be)}},es={readContext:Tt,use:qr,useCallback:qo,useContext:Tt,useEffect:Uo,useImperativeHandle:ko,useInsertionEffect:jo,useLayoutEffect:Yo,useMemo:No,useReducer:Nr,useRef:Go,useState:function(){return Nr(_n)},useDebugValue:Ui,useDeferredValue:function(e,t){var n=ct();return Zo(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Nr(_n)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:xo,useId:Ko,useHostTransitionStatus:Xi,useFormState:Vo,useActionState:Vo,useOptimistic:function(e,t){var n=ct();return Ro(n,Xe,e,t)},useMemoCache:Vi,useCacheRefresh:Jo},P1={readContext:Tt,use:qr,useCallback:qo,useContext:Tt,useEffect:Uo,useImperativeHandle:ko,useInsertionEffect:jo,useLayoutEffect:Yo,useMemo:No,useReducer:Hi,useRef:Go,useState:function(){return Hi(_n)},useDebugValue:Ui,useDeferredValue:function(e,t){var n=ct();return Xe===null?ji(n,e,t):Zo(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Hi(_n)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:xo,useId:Ko,useHostTransitionStatus:Xi,useFormState:Ho,useActionState:Ho,useOptimistic:function(e,t){var n=ct();return Xe!==null?Ro(n,Xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:Jo},Jl=null,Xa=0;function Kr(e){var t=Xa;return Xa+=1,Jl===null&&(Jl=[]),so(Jl,e,t)}function ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Jr(e,t){throw t.$$typeof===C?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ts(e){var t=e._init;return t(e._payload)}function ns(e){function t(z,R){if(e){var M=z.deletions;M===null?(z.deletions=[R],z.flags|=16):M.push(R)}}function n(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function l(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function a(z,R){return z=gn(z,R),z.index=0,z.sibling=null,z}function r(z,R,M){return z.index=M,e?(M=z.alternate,M!==null?(M=M.index,M<R?(z.flags|=67108866,R):M):(z.flags|=67108866,R)):(z.flags|=1048576,R)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,R,M,L){return R===null||R.tag!==6?(R=ci(M,z.mode,L),R.return=z,R):(R=a(R,M),R.return=z,R)}function _(z,R,M,L){var le=M.type;return le===V?q(z,R,M.props.children,L,M.key):R!==null&&(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===I&&ts(le)===R.type)?(R=a(R,M.props),ka(R,M),R.return=z,R):(R=Er(M.type,M.key,M.props,null,z.mode,L),ka(R,M),R.return=z,R)}function A(z,R,M,L){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=oi(M,z.mode,L),R.return=z,R):(R=a(R,M.children||[]),R.return=z,R)}function q(z,R,M,L,le){return R===null||R.tag!==7?(R=sl(M,z.mode,L,le),R.return=z,R):(R=a(R,M),R.return=z,R)}function Q(z,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ci(""+R,z.mode,M),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case b:return M=Er(R.type,R.key,R.props,null,z.mode,M),ka(M,R),M.return=z,M;case T:return R=oi(R,z.mode,M),R.return=z,R;case I:var L=R._init;return R=L(R._payload),Q(z,R,M)}if(ge(R)||ae(R))return R=sl(R,z.mode,M,null),R.return=z,R;if(typeof R.then=="function")return Q(z,Kr(R),M);if(R.$$typeof===X)return Q(z,Gr(z,R),M);Jr(z,R)}return null}function E(z,R,M,L){var le=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return le!==null?null:m(z,R,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return M.key===le?_(z,R,M,L):null;case T:return M.key===le?A(z,R,M,L):null;case I:return le=M._init,M=le(M._payload),E(z,R,M,L)}if(ge(M)||ae(M))return le!==null?null:q(z,R,M,L,null);if(typeof M.then=="function")return E(z,R,Kr(M),L);if(M.$$typeof===X)return E(z,R,Gr(z,M),L);Jr(z,M)}return null}function w(z,R,M,L,le){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return z=z.get(M)||null,m(R,z,""+L,le);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case b:return z=z.get(L.key===null?M:L.key)||null,_(R,z,L,le);case T:return z=z.get(L.key===null?M:L.key)||null,A(R,z,L,le);case I:var Se=L._init;return L=Se(L._payload),w(z,R,M,L,le)}if(ge(L)||ae(L))return z=z.get(M)||null,q(R,z,L,le,null);if(typeof L.then=="function")return w(z,R,M,Kr(L),le);if(L.$$typeof===X)return w(z,R,M,Gr(R,L),le);Jr(R,L)}return null}function he(z,R,M,L){for(var le=null,Se=null,ie=R,de=R=0,pt=null;ie!==null&&de<M.length;de++){ie.index>de?(pt=ie,ie=null):pt=ie.sibling;var Oe=E(z,ie,M[de],L);if(Oe===null){ie===null&&(ie=pt);break}e&&ie&&Oe.alternate===null&&t(z,ie),R=r(Oe,R,de),Se===null?le=Oe:Se.sibling=Oe,Se=Oe,ie=pt}if(de===M.length)return n(z,ie),Ee&&dl(z,de),le;if(ie===null){for(;de<M.length;de++)ie=Q(z,M[de],L),ie!==null&&(R=r(ie,R,de),Se===null?le=ie:Se.sibling=ie,Se=ie);return Ee&&dl(z,de),le}for(ie=l(ie);de<M.length;de++)pt=w(ie,z,de,M[de],L),pt!==null&&(e&&pt.alternate!==null&&ie.delete(pt.key===null?de:pt.key),R=r(pt,R,de),Se===null?le=pt:Se.sibling=pt,Se=pt);return e&&ie.forEach(function(nl){return t(z,nl)}),Ee&&dl(z,de),le}function se(z,R,M,L){if(M==null)throw Error(i(151));for(var le=null,Se=null,ie=R,de=R=0,pt=null,Oe=M.next();ie!==null&&!Oe.done;de++,Oe=M.next()){ie.index>de?(pt=ie,ie=null):pt=ie.sibling;var nl=E(z,ie,Oe.value,L);if(nl===null){ie===null&&(ie=pt);break}e&&ie&&nl.alternate===null&&t(z,ie),R=r(nl,R,de),Se===null?le=nl:Se.sibling=nl,Se=nl,ie=pt}if(Oe.done)return n(z,ie),Ee&&dl(z,de),le;if(ie===null){for(;!Oe.done;de++,Oe=M.next())Oe=Q(z,Oe.value,L),Oe!==null&&(R=r(Oe,R,de),Se===null?le=Oe:Se.sibling=Oe,Se=Oe);return Ee&&dl(z,de),le}for(ie=l(ie);!Oe.done;de++,Oe=M.next())Oe=w(ie,z,de,Oe.value,L),Oe!==null&&(e&&Oe.alternate!==null&&ie.delete(Oe.key===null?de:Oe.key),R=r(Oe,R,de),Se===null?le=Oe:Se.sibling=Oe,Se=Oe);return e&&ie.forEach(function(Q3){return t(z,Q3)}),Ee&&dl(z,de),le}function qe(z,R,M,L){if(typeof M=="object"&&M!==null&&M.type===V&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case b:e:{for(var le=M.key;R!==null;){if(R.key===le){if(le=M.type,le===V){if(R.tag===7){n(z,R.sibling),L=a(R,M.props.children),L.return=z,z=L;break e}}else if(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===I&&ts(le)===R.type){n(z,R.sibling),L=a(R,M.props),ka(L,M),L.return=z,z=L;break e}n(z,R);break}else t(z,R);R=R.sibling}M.type===V?(L=sl(M.props.children,z.mode,L,M.key),L.return=z,z=L):(L=Er(M.type,M.key,M.props,null,z.mode,L),ka(L,M),L.return=z,z=L)}return o(z);case T:e:{for(le=M.key;R!==null;){if(R.key===le)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){n(z,R.sibling),L=a(R,M.children||[]),L.return=z,z=L;break e}else{n(z,R);break}else t(z,R);R=R.sibling}L=oi(M,z.mode,L),L.return=z,z=L}return o(z);case I:return le=M._init,M=le(M._payload),qe(z,R,M,L)}if(ge(M))return he(z,R,M,L);if(ae(M)){if(le=ae(M),typeof le!="function")throw Error(i(150));return M=le.call(M),se(z,R,M,L)}if(typeof M.then=="function")return qe(z,R,Kr(M),L);if(M.$$typeof===X)return qe(z,R,Gr(z,M),L);Jr(z,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(n(z,R.sibling),L=a(R,M),L.return=z,z=L):(n(z,R),L=ci(M,z.mode,L),L.return=z,z=L),o(z)):n(z,R)}return function(z,R,M,L){try{Xa=0;var le=qe(z,R,M,L);return Jl=null,le}catch(ie){if(ie===Ea||ie===Ur)throw ie;var Se=Bt(29,ie,null,z.mode);return Se.lanes=L,Se.return=z,Se}finally{}}}var Wl=ns(!0),ls=ns(!1),Kt=O(null),un=null;function kn(e){var t=e.alternate;Z(ft,ft.current&1),Z(Kt,e),un===null&&(t===null||Ll.current!==null||t.memoizedState!==null)&&(un=e)}function as(e){if(e.tag===22){if(Z(ft,ft.current),Z(Kt,e),un===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(un=e)}}else qn()}function qn(){Z(ft,ft.current),Z(Kt,Kt.current)}function Sn(e){N(Kt),un===e&&(un=null),N(ft)}var ft=O(0);function Wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||E0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function qi(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ni={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Xt(),a=jn(l);a.payload=t,n!=null&&(a.callback=n),t=Yn(e,a,l),t!==null&&(kt(t,e,l),wa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Xt(),a=jn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Yn(e,a,l),t!==null&&(kt(t,e,l),wa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),l=jn(n);l.tag=2,t!=null&&(l.callback=t),t=Yn(e,l,n),t!==null&&(kt(t,e,n),wa(t,e,n))}};function rs(e,t,n,l,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!Ca(n,l)||!Ca(a,r):!0}function us(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ni.enqueueReplaceState(t,t.state,null)}function xl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function is(e){Fr(e)}function cs(e){console.error(e)}function os(e){Fr(e)}function Ir(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ss(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Zi(e,t,n){return n=jn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ir(e,t)},n}function fs(e){return e=jn(e),e.tag=3,e}function ds(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;e.payload=function(){return a(r)},e.callback=function(){ss(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ss(t,n,l),typeof a!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Q1(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ma(t,n,a,!0),n=Kt.current,n!==null){switch(n.tag){case 13:return un===null?m0():n.alternate===null&&nt===0&&(nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===xi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),g0(e,l,a)),!1;case 22:return n.flags|=65536,l===xi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),g0(e,l,a)),!1}throw Error(i(435,n.tag))}return g0(e,l,a),m0(),!1}if(Ee)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==di&&(e=Error(i(422),{cause:l}),za(Zt(e,n)))):(l!==di&&(t=Error(i(423),{cause:l}),za(Zt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Zt(l,n),a=Zi(e.stateNode,l,a),Si(e,a),nt!==4&&(nt=2)),!1;var r=Error(i(520),{cause:l});if(r=Zt(r,n),Ka===null?Ka=[r]:Ka.push(r),nt!==4&&(nt=2),t===null)return!0;l=Zt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zi(n.stateNode,l,e),Si(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=fs(a),ds(a,e,n,l),Si(n,a),!1}n=n.return}while(n!==null);return!1}var hs=Error(i(461)),ht=!1;function bt(e,t,n,l){t.child=e===null?ls(t,null,n,l):Wl(t,e.child,n,l)}function ms(e,t,n,l,a){n=n.render;var r=t.ref;if("ref"in l){var o={};for(var m in l)m!=="ref"&&(o[m]=l[m])}else o=l;return gl(t),l=zi(e,t,n,o,r,a),m=Mi(),e!==null&&!ht?(Ai(e,t,a),Cn(e,t,a)):(Ee&&m&&si(t),t.flags|=1,bt(e,t,l,a),t.child)}function ps(e,t,n,l,a){if(e===null){var r=n.type;return typeof r=="function"&&!ii(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,gs(e,t,r,l,a)):(e=Er(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ii(e,a)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(o,l)&&e.ref===t.ref)return Cn(e,t,a)}return t.flags|=1,e=gn(r,l),e.ref=t.ref,e.return=t,t.child=e}function gs(e,t,n,l,a){if(e!==null){var r=e.memoizedProps;if(Ca(r,l)&&e.ref===t.ref)if(ht=!1,t.pendingProps=l=r,Ii(e,a))(e.flags&131072)!==0&&(ht=!0);else return t.lanes=e.lanes,Cn(e,t,a)}return Li(e,t,n,l,a)}function ys(e,t,n){var l=t.pendingProps,a=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return vs(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Br(t,r!==null?r.cachePool:null),r!==null?go(t,r):Ti(),as(t);else return t.lanes=t.childLanes=536870912,vs(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Br(t,r.cachePool),go(t,r),qn(),t.memoizedState=null):(e!==null&&Br(t,null),Ti(),qn());return bt(e,t,a,n),t.child}function vs(e,t,n,l){var a=vi();return a=a===null?null:{parent:st._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Br(t,null),Ti(),as(t),e!==null&&Ma(e,t,l,!0),null}function $r(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Li(e,t,n,l,a){return gl(t),n=zi(e,t,n,l,void 0,a),l=Mi(),e!==null&&!ht?(Ai(e,t,a),Cn(e,t,a)):(Ee&&l&&si(t),t.flags|=1,bt(e,t,n,a),t.child)}function xs(e,t,n,l,a,r){return gl(t),t.updateQueue=null,n=vo(t,l,n,a),yo(e),l=Mi(),e!==null&&!ht?(Ai(e,t,r),Cn(e,t,r)):(Ee&&l&&si(t),t.flags|=1,bt(e,t,n,r),t.child)}function bs(e,t,n,l,a){if(gl(t),t.stateNode===null){var r=Xl,o=n.contextType;typeof o=="object"&&o!==null&&(r=Tt(o)),r=new n(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ni,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},bi(t),o=n.contextType,r.context=typeof o=="object"&&o!==null?Tt(o):Xl,r.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(qi(t,n,o,l),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Ni.enqueueReplaceState(r,r.state,null),Ga(t,l,r,a),Ha(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,_=xl(n,m);r.props=_;var A=r.context,q=n.contextType;o=Xl,typeof q=="object"&&q!==null&&(o=Tt(q));var Q=n.getDerivedStateFromProps;q=typeof Q=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||A!==o)&&us(t,r,l,o),Un=!1;var E=t.memoizedState;r.state=E,Ga(t,l,r,a),Ha(),A=t.memoizedState,m||E!==A||Un?(typeof Q=="function"&&(qi(t,n,Q,l),A=t.memoizedState),(_=Un||rs(t,n,_,l,E,A,o))?(q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),r.props=l,r.state=A,r.context=o,l=_):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,_i(e,t),o=t.memoizedProps,q=xl(n,o),r.props=q,Q=t.pendingProps,E=r.context,A=n.contextType,_=Xl,typeof A=="object"&&A!==null&&(_=Tt(A)),m=n.getDerivedStateFromProps,(A=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==Q||E!==_)&&us(t,r,l,_),Un=!1,E=t.memoizedState,r.state=E,Ga(t,l,r,a),Ha();var w=t.memoizedState;o!==Q||E!==w||Un||e!==null&&e.dependencies!==null&&Hr(e.dependencies)?(typeof m=="function"&&(qi(t,n,m,l),w=t.memoizedState),(q=Un||rs(t,n,q,l,E,w,_)||e!==null&&e.dependencies!==null&&Hr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,w,_),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,w,_)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=_,l=q):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,$r(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Wl(t,e.child,null,a),t.child=Wl(t,null,n,a)):bt(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Cn(e,t,a),e}function _s(e,t,n,l){return Da(),t.flags|=256,bt(e,t,n,l),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qi(e){return{baseLanes:e,cachePool:io()}}function Ki(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Jt),e}function Ss(e,t,n){var l=t.pendingProps,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(ft.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(a?kn(t):qn(),Ee){var m=tt,_;if(_=m){e:{for(_=m,m=rn;_.nodeType!==8;){if(!m){m=null;break e}if(_=en(_.nextSibling),_===null){m=null;break e}}m=_}m!==null?(t.memoizedState={dehydrated:m,treeContext:fl!==null?{id:yn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},_=Bt(18,null,null,0),_.stateNode=m,_.return=t,t.child=_,Mt=t,tt=null,_=!0):_=!1}_||ml(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return E0(m)?t.lanes=32:t.lanes=536870912,null;Sn(t)}return m=l.children,l=l.fallback,a?(qn(),a=t.mode,m=eu({mode:"hidden",children:m},a),l=sl(l,a,n,null),m.return=t,l.return=t,m.sibling=l,t.child=m,a=t.child,a.memoizedState=Qi(n),a.childLanes=Ki(e,o,n),t.memoizedState=Pi,l):(kn(t),Ji(t,m))}if(_=e.memoizedState,_!==null&&(m=_.dehydrated,m!==null)){if(r)t.flags&256?(kn(t),t.flags&=-257,t=Wi(e,t,n)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,t=null):(qn(),a=l.fallback,m=t.mode,l=eu({mode:"visible",children:l.children},m),a=sl(a,m,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Wl(t,e.child,null,n),l=t.child,l.memoizedState=Qi(n),l.childLanes=Ki(e,o,n),t.memoizedState=Pi,t=a);else if(kn(t),E0(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var A=o.dgst;o=A,l=Error(i(419)),l.stack="",l.digest=o,za({value:l,source:null,stack:null}),t=Wi(e,t,n)}else if(ht||Ma(e,t,n,!1),o=(n&e.childLanes)!==0,ht||o){if(o=Le,o!==null&&(l=n&-n,l=(l&42)!==0?1:ln(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==_.retryLane))throw _.retryLane=l,Yl(e,l),kt(o,e,l),hs;m.data==="$?"||m0(),t=Wi(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,tt=en(m.nextSibling),Mt=t,Ee=!0,hl=null,rn=!1,e!==null&&(Pt[Qt++]=yn,Pt[Qt++]=vn,Pt[Qt++]=fl,yn=e.id,vn=e.overflow,fl=t),t=Ji(t,l.children),t.flags|=4096);return t}return a?(qn(),a=l.fallback,m=t.mode,_=e.child,A=_.sibling,l=gn(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,A!==null?a=gn(A,a):(a=sl(a,m,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,m=e.child.memoizedState,m===null?m=Qi(n):(_=m.cachePool,_!==null?(A=st._currentValue,_=_.parent!==A?{parent:A,pool:A}:_):_=io(),m={baseLanes:m.baseLanes|n,cachePool:_}),a.memoizedState=m,a.childLanes=Ki(e,o,n),t.memoizedState=Pi,l):(kn(t),n=e.child,e=n.sibling,n=gn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ji(e,t){return t=eu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function eu(e,t){return e=Bt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Wi(e,t,n){return Wl(t,e.child,null,n),e=Ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cs(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),mi(e.return,t,n)}function Fi(e,t,n,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a)}function Ts(e,t,n){var l=t.pendingProps,a=l.revealOrder,r=l.tail;if(bt(e,t,l.children,n),l=ft.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cs(e,n,t);else if(e.tag===19)Cs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Z(ft,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Wr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Fi(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Fi(t,!0,n,null,r);break;case"together":Fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ii(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hr(e)))}function K1(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Bn(t,st,e.memoizedState.cache),Da();break;case 27:case 5:Ct(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Bn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ss(e,t,n):(kn(t),e=Cn(e,t,n),e!==null?e.sibling:null);kn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ma(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Ts(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(ft,ft.current),l)break;return null;case 22:case 23:return t.lanes=0,ys(e,t,n);case 24:Bn(t,st,e.memoizedState.cache)}return Cn(e,t,n)}function Rs(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ht=!0;else{if(!Ii(e,n)&&(t.flags&128)===0)return ht=!1,K1(e,t,n);ht=(e.flags&131072)!==0}else ht=!1,Ee&&(t.flags&1048576)!==0&&eo(t,wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")ii(l)?(e=xl(l,e),t.tag=1,t=bs(null,t,l,e,n)):(t.tag=0,t=Li(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===K){t.tag=11,t=ms(null,t,l,e,n);break e}else if(a===Y){t.tag=14,t=ps(null,t,l,e,n);break e}}throw t=ze(l)||l,Error(i(306,t,""))}}return t;case 0:return Li(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=xl(l,t.pendingProps),bs(e,t,l,a,n);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var r=t.memoizedState;a=r.element,_i(e,t),Ga(t,l,null,n);var o=t.memoizedState;if(l=o.cache,Bn(t,st,l),l!==r.cache&&pi(t,[st],n,!0),Ha(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=_s(e,t,l,n);break e}else if(l!==a){a=Zt(Error(i(424)),t),za(a),t=_s(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=en(e.firstChild),Mt=t,Ee=!0,hl=null,rn=!0,n=ls(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),l===a){t=Cn(e,t,n);break e}bt(e,t,l,n)}t=t.child}return t;case 26:return $r(e,t),e===null?(n=Of(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,l=mu(ue.current).createElement(n),l[ut]=t,l[Ke]=e,St(l,n,e),dt(l),t.stateNode=l):t.memoizedState=Of(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ct(t),e===null&&Ee&&(l=t.stateNode=zf(t.type,t.pendingProps,ue.current),Mt=t,rn=!0,a=tt,Fn(t.type)?(V0=a,tt=en(l.firstChild)):tt=a),bt(e,t,t.pendingProps.children,n),$r(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((a=l=tt)&&(l=S3(l,t.type,t.pendingProps,rn),l!==null?(t.stateNode=l,Mt=t,tt=en(l.firstChild),rn=!1,a=!0):a=!1),a||ml(t)),Ct(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,M0(a,r)?l=null:o!==null&&M0(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=zi(e,t,X1,null,null,n),lr._currentValue=a),$r(e,t),bt(e,t,l,n),t.child;case 6:return e===null&&Ee&&((e=n=tt)&&(n=C3(n,t.pendingProps,rn),n!==null?(t.stateNode=n,Mt=t,tt=null,e=!0):e=!1),e||ml(t)),null;case 13:return Ss(e,t,n);case 4:return De(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wl(t,null,l,n):bt(e,t,l,n),t.child;case 11:return ms(e,t,t.type,t.pendingProps,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Bn(t,t.type,l.value),bt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,gl(t),a=Tt(a),l=l(a),t.flags|=1,bt(e,t,l,n),t.child;case 14:return ps(e,t,t.type,t.pendingProps,n);case 15:return gs(e,t,t.type,t.pendingProps,n);case 19:return Ts(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=eu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=gn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ys(e,t,n);case 24:return gl(t),l=Tt(st),e===null?(a=vi(),a===null&&(a=Le,r=gi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:l,cache:a},bi(t),Bn(t,st,a)):((e.lanes&n)!==0&&(_i(e,t),Ga(t,null,null,n),Ha()),a=e.memoizedState,r=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Bn(t,st,l)):(l=r.cache,Bn(t,st,l),l!==a.cache&&pi(t,[st],n,!0))),bt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Tn(e){e.flags|=4}function Ds(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(t=Kt.current,t!==null&&((Me&4194048)===Me?un!==null:(Me&62914560)!==Me&&(Me&536870912)===0||t!==un))throw Va=xi,co;e.flags|=8192}}function tu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ee():536870912,e.lanes|=t,ea|=t)}function qa(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function J1(e,t,n){var l=t.pendingProps;switch(fi(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),bn(st),Ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ra(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lo())),Fe(t),null;case 26:return n=t.memoizedState,e===null?(Tn(t),n!==null?(Fe(t),Ds(t,n)):(Fe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Tn(t),Fe(t),Ds(t,n)):(Fe(t),t.flags&=-16777217):(e.memoizedProps!==l&&Tn(t),Fe(t),t.flags&=-16777217),null;case 27:$e(t),n=ue.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Tn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Fe(t),null}e=$.current,Ra(t)?to(t):(e=zf(a,l,n),t.stateNode=e,Tn(t))}return Fe(t),null;case 5:if($e(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Tn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Fe(t),null}if(e=$.current,Ra(t))to(t);else{switch(a=mu(ue.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[ut]=t,e[Ke]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(St(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Tn(t)}}return Fe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Tn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Ra(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Mt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||bf(e.nodeValue,n)),e||ml(t)}else e=mu(e).createTextNode(l),e[ut]=t,t.stateNode=e}return Fe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ra(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[ut]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else a=lo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Sn(t),t):(Sn(t),null)}if(Sn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),tu(t,t.updateQueue),Fe(t),null;case 4:return Ue(),e===null&&C0(t.stateNode.containerInfo),Fe(t),null;case 10:return bn(t.type),Fe(t),null;case 19:if(N(ft),a=t.memoizedState,a===null)return Fe(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)qa(a,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Wr(e),r!==null){for(t.flags|=128,qa(a,!1),e=r.updateQueue,t.updateQueue=e,tu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)$c(n,e),n=n.sibling;return Z(ft,ft.current&1|2),t.child}e=e.sibling}a.tail!==null&&ce()>au&&(t.flags|=128,l=!0,qa(a,!1),t.lanes=4194304)}else{if(!l)if(e=Wr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,tu(t,e),qa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Ee)return Fe(t),null}else 2*ce()-a.renderingStartTime>au&&n!==536870912&&(t.flags|=128,l=!0,qa(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ce(),t.sibling=null,e=ft.current,Z(ft,l?e&1|2:e&1),t):(Fe(t),null);case 22:case 23:return Sn(t),Ri(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&tu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&N(yl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn(st),Fe(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function W1(e,t){switch(fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(st),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $e(t),null;case 13:if(Sn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(ft),null;case 4:return Ue(),null;case 10:return bn(t.type),null;case 22:case 23:return Sn(t),Ri(),e!==null&&N(yl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(st),null;case 25:return null;default:return null}}function zs(e,t){switch(fi(t),t.tag){case 3:bn(st),Ue();break;case 26:case 27:case 5:$e(t);break;case 4:Ue();break;case 13:Sn(t);break;case 19:N(ft);break;case 10:bn(t.type);break;case 22:case 23:Sn(t),Ri(),e!==null&&N(yl);break;case 24:bn(st)}}function Na(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var r=n.create,o=n.inst;l=r(),o.destroy=l}n=n.next}while(n!==a)}}catch(m){Ne(t,t.return,m)}}function Nn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&e)===e){var o=l.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,a=t;var _=n,A=m;try{A()}catch(q){Ne(a,_,q)}}}l=l.next}while(l!==r)}}catch(q){Ne(t,t.return,q)}}function Ms(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{po(t,n)}catch(l){Ne(e,e.return,l)}}}function As(e,t,n){n.props=xl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ne(e,t,l)}}function Za(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Ne(e,t,a)}}function cn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Ne(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ne(e,t,a)}else n.current=null}function Os(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Ne(e,e.return,a)}}function $i(e,t,n){try{var l=e.stateNode;y3(l,e.type,n,t),l[Ke]=t}catch(a){Ne(e,e.return,a)}}function Es(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fn(e.type)||e.tag===4}function e0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Es(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function t0(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hu));else if(l!==4&&(l===27&&Fn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(t0(e,t,n),e=e.sibling;e!==null;)t0(e,t,n),e=e.sibling}function nu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Fn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}function Vs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);St(t,l,n),t[ut]=e,t[Ke]=n}catch(r){Ne(e,e.return,r)}}var Rn=!1,at=!1,n0=!1,ws=typeof WeakSet=="function"?WeakSet:Set,mt=null;function F1(e,t){if(e=e.containerInfo,D0=bu,e=Nc(e),ei(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,m=-1,_=-1,A=0,q=0,Q=e,E=null;t:for(;;){for(var w;Q!==n||a!==0&&Q.nodeType!==3||(m=o+a),Q!==r||l!==0&&Q.nodeType!==3||(_=o+l),Q.nodeType===3&&(o+=Q.nodeValue.length),(w=Q.firstChild)!==null;)E=Q,Q=w;for(;;){if(Q===e)break t;if(E===n&&++A===a&&(m=o),E===r&&++q===l&&(_=o),(w=Q.nextSibling)!==null)break;Q=E,E=Q.parentNode}Q=w}n=m===-1||_===-1?null:{start:m,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(z0={focusedElem:e,selectionRange:n},bu=!1,mt=t;mt!==null;)if(t=mt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,mt=e;else for(;mt!==null;){switch(t=mt,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,l=n.stateNode;try{var he=xl(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(he,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ne(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)O0(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":O0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,mt=e;break}mt=t.return}}function Hs(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Zn(e,n),l&4&&Na(5,n);break;case 1:if(Zn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Ne(n,n.return,o)}else{var a=xl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ne(n,n.return,o)}}l&64&&Ms(n),l&512&&Za(n,n.return);break;case 3:if(Zn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{po(e,t)}catch(o){Ne(n,n.return,o)}}break;case 27:t===null&&l&4&&Vs(n);case 26:case 5:Zn(e,n),t===null&&l&4&&Os(n),l&512&&Za(n,n.return);break;case 12:Zn(e,n);break;case 13:Zn(e,n),l&4&&Us(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=u3.bind(null,n),T3(e,n))));break;case 22:if(l=n.memoizedState!==null||Rn,!l){t=t!==null&&t.memoizedState!==null||at,a=Rn;var r=at;Rn=l,(at=t)&&!r?Ln(e,n,(n.subtreeFlags&8772)!==0):Zn(e,n),Rn=a,at=r}break;case 30:break;default:Zn(e,n)}}function Gs(e){var t=e.alternate;t!==null&&(e.alternate=null,Gs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Vt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)Bs(e,t,n),n=n.sibling}function Bs(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Ft,n)}catch{}switch(n.tag){case 26:at||cn(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:at||cn(n,t);var l=Je,a=Vt;Fn(n.type)&&(Je=n.stateNode,Vt=!1),Dn(e,t,n),$a(n.stateNode),Je=l,Vt=a;break;case 5:at||cn(n,t);case 6:if(l=Je,a=Vt,Je=null,Dn(e,t,n),Je=l,Vt=a,Je!==null)if(Vt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(n.stateNode)}catch(r){Ne(n,t,r)}else try{Je.removeChild(n.stateNode)}catch(r){Ne(n,t,r)}break;case 18:Je!==null&&(Vt?(e=Je,Rf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ir(e)):Rf(Je,n.stateNode));break;case 4:l=Je,a=Vt,Je=n.stateNode.containerInfo,Vt=!0,Dn(e,t,n),Je=l,Vt=a;break;case 0:case 11:case 14:case 15:at||Nn(2,n,t),at||Nn(4,n,t),Dn(e,t,n);break;case 1:at||(cn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&As(n,t,l)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:at=(l=at)||n.memoizedState!==null,Dn(e,t,n),at=l;break;default:Dn(e,t,n)}}function Us(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ir(e)}catch(n){Ne(t,t.return,n)}}function I1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ws),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ws),t;default:throw Error(i(435,e.tag))}}function l0(e,t){var n=I1(e);t.forEach(function(l){var a=i3.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function Ut(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],r=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(Fn(m.type)){Je=m.stateNode,Vt=!1;break e}break;case 5:Je=m.stateNode,Vt=!1;break e;case 3:case 4:Je=m.stateNode.containerInfo,Vt=!0;break e}m=m.return}if(Je===null)throw Error(i(160));Bs(r,o,a),Je=null,Vt=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)js(t,e),t=t.sibling}var $t=null;function js(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ut(t,e),jt(e),l&4&&(Nn(3,e,e.return),Na(3,e),Nn(5,e,e.return));break;case 1:Ut(t,e),jt(e),l&512&&(at||n===null||cn(n,n.return)),l&64&&Rn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=$t;if(Ut(t,e),jt(e),l&512&&(at||n===null||cn(n,n.return)),l&4){var r=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ma]||r[ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),St(r,l,n),r[ut]=e,dt(r),l=r;break e;case"link":var o=wf("link","href",a).get(l+(n.href||""));if(o){for(var m=0;m<o.length;m++)if(r=o[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(m,1);break t}}r=a.createElement(l),St(r,l,n),a.head.appendChild(r);break;case"meta":if(o=wf("meta","content",a).get(l+(n.content||""))){for(m=0;m<o.length;m++)if(r=o[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(m,1);break t}}r=a.createElement(l),St(r,l,n),a.head.appendChild(r);break;default:throw Error(i(468,l))}r[ut]=e,dt(r),l=r}e.stateNode=l}else Hf(a,e.type,e.stateNode);else e.stateNode=Vf(a,l,e.memoizedProps);else r!==l?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,l===null?Hf(a,e.type,e.stateNode):Vf(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$i(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ut(t,e),jt(e),l&512&&(at||n===null||cn(n,n.return)),n!==null&&l&4&&$i(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ut(t,e),jt(e),l&512&&(at||n===null||cn(n,n.return)),e.flags&32){a=e.stateNode;try{Vl(a,"")}catch(w){Ne(e,e.return,w)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,$i(e,a,n!==null?n.memoizedProps:a)),l&1024&&(n0=!0);break;case 6:if(Ut(t,e),jt(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(w){Ne(e,e.return,w)}}break;case 3:if(yu=null,a=$t,$t=pu(t.containerInfo),Ut(t,e),$t=a,jt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(w){Ne(e,e.return,w)}n0&&(n0=!1,Ys(e));break;case 4:l=$t,$t=pu(e.stateNode.containerInfo),Ut(t,e),jt(e),$t=l;break;case 12:Ut(t,e),jt(e);break;case 13:Ut(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(o0=ce()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,l0(e,l)));break;case 22:a=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,A=Rn,q=at;if(Rn=A||a,at=q||_,Ut(t,e),at=q,Rn=A,jt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||_||Rn||at||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(r=_.stateNode,a)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=_.stateNode;var Q=_.memoizedProps.style,E=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;m.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(w){Ne(_,_.return,w)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=a?"":_.memoizedProps}catch(w){Ne(_,_.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,l0(e,n))));break;case 19:Ut(t,e),jt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,l0(e,l)));break;case 30:break;case 21:break;default:Ut(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Es(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,r=e0(e);nu(e,r,a);break;case 5:var o=n.stateNode;n.flags&32&&(Vl(o,""),n.flags&=-33);var m=e0(e);nu(e,m,o);break;case 3:case 4:var _=n.stateNode.containerInfo,A=e0(e);t0(e,A,_);break;default:throw Error(i(161))}}catch(q){Ne(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ys(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ys(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hs(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nn(4,t,t.return),bl(t);break;case 1:cn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&As(t,t.return,n),bl(t);break;case 27:$a(t.stateNode);case 26:case 5:cn(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function Ln(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Ln(a,r,n),Na(4,r);break;case 1:if(Ln(a,r,n),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(A){Ne(l,l.return,A)}if(l=r,a=l.updateQueue,a!==null){var m=l.stateNode;try{var _=a.shared.hiddenCallbacks;if(_!==null)for(a.shared.hiddenCallbacks=null,a=0;a<_.length;a++)mo(_[a],m)}catch(A){Ne(l,l.return,A)}}n&&o&64&&Ms(r),Za(r,r.return);break;case 27:Vs(r);case 26:case 5:Ln(a,r,n),n&&l===null&&o&4&&Os(r),Za(r,r.return);break;case 12:Ln(a,r,n);break;case 13:Ln(a,r,n),n&&o&4&&Us(a,r);break;case 22:r.memoizedState===null&&Ln(a,r,n),Za(r,r.return);break;case 30:break;default:Ln(a,r,n)}t=t.sibling}}function a0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Aa(n))}function r0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Aa(e))}function on(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xs(e,t,n,l),t=t.sibling}function Xs(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,l),a&2048&&Na(9,t);break;case 1:on(e,t,n,l);break;case 3:on(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Aa(e)));break;case 12:if(a&2048){on(e,t,n,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,m=r.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Ne(t,t.return,_)}}else on(e,t,n,l);break;case 13:on(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?on(e,t,n,l):La(e,t):r._visibility&2?on(e,t,n,l):(r._visibility|=2,Fl(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&a0(o,t);break;case 24:on(e,t,n,l),a&2048&&r0(t.alternate,t);break;default:on(e,t,n,l)}}function Fl(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,m=n,_=l,A=o.flags;switch(o.tag){case 0:case 11:case 15:Fl(r,o,m,_,a),Na(8,o);break;case 23:break;case 22:var q=o.stateNode;o.memoizedState!==null?q._visibility&2?Fl(r,o,m,_,a):La(r,o):(q._visibility|=2,Fl(r,o,m,_,a)),a&&A&2048&&a0(o.alternate,o);break;case 24:Fl(r,o,m,_,a),a&&A&2048&&r0(o.alternate,o);break;default:Fl(r,o,m,_,a)}t=t.sibling}}function La(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:La(n,l),a&2048&&a0(l.alternate,l);break;case 24:La(n,l),a&2048&&r0(l.alternate,l);break;default:La(n,l)}t=t.sibling}}var Pa=8192;function Il(e){if(e.subtreeFlags&Pa)for(e=e.child;e!==null;)ks(e),e=e.sibling}function ks(e){switch(e.tag){case 26:Il(e),e.flags&Pa&&e.memoizedState!==null&&U3($t,e.memoizedState,e.memoizedProps);break;case 5:Il(e);break;case 3:case 4:var t=$t;$t=pu(e.stateNode.containerInfo),Il(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Pa,Pa=16777216,Il(e),Pa=t):Il(e));break;default:Il(e)}}function qs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,Zs(l,e)}qs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ns(e),e=e.sibling}function Ns(e){switch(e.tag){case 0:case 11:case 15:Qa(e),e.flags&2048&&Nn(9,e,e.return);break;case 3:Qa(e);break;case 12:Qa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lu(e)):Qa(e);break;default:Qa(e)}}function lu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,Zs(l,e)}qs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nn(8,t,t.return),lu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,lu(t));break;default:lu(t)}e=e.sibling}}function Zs(e,t){for(;mt!==null;){var n=mt;switch(n.tag){case 0:case 11:case 15:Nn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Aa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,mt=l;else e:for(n=e;mt!==null;){l=mt;var a=l.sibling,r=l.return;if(Gs(l),l===n){mt=null;break e}if(a!==null){a.return=r,mt=a;break e}mt=r}}}var $1={getCacheForType:function(e){var t=Tt(st),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},e3=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Le=null,Te=null,Me=0,Be=0,Yt=null,Pn=!1,$l=!1,u0=!1,zn=0,nt=0,Qn=0,_l=0,i0=0,Jt=0,ea=0,Ka=null,wt=null,c0=!1,o0=0,au=1/0,ru=null,Kn=null,_t=0,Jn=null,ta=null,na=0,s0=0,f0=null,Ls=null,Ja=0,d0=null;function Xt(){if((Ge&2)!==0&&Me!==0)return Me&-Me;if(H.T!==null){var e=Nl;return e!==0?e:x0()}return At()}function Ps(){Jt===0&&(Jt=(Me&536870912)===0||Ee?Ve():536870912);var e=Kt.current;return e!==null&&(e.flags|=32),Jt}function kt(e,t,n){(e===Le&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(la(e,0),Wn(e,Me,Jt,!1)),ot(e,n),((Ge&2)===0||e!==Le)&&(e===Le&&((Ge&2)===0&&(_l|=n),nt===4&&Wn(e,Me,Jt,!1)),sn(e))}function Qs(e,t,n){if((Ge&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||_e(e,t),a=l?l3(e,t):p0(e,t,!0),r=l;do{if(a===0){$l&&!l&&Wn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!t3(n)){a=p0(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;a=Ka;var _=m.current.memoizedState.isDehydrated;if(_&&(la(m,o).flags|=256),o=p0(m,o,!1),o!==2){if(u0&&!_){m.errorRecoveryDisabledLanes|=r,_l|=r,a=4;break e}r=wt,wt=a,r!==null&&(wt===null?wt=r:wt.push.apply(wt,r))}a=o}if(r=!1,a!==2)continue}}if(a===1){la(e,0),Wn(e,t,0,!0);break}e:{switch(l=e,r=a,r){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Wn(l,t,Jt,!Pn);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=o0+300-ce(),10<a)){if(Wn(l,t,Jt,!Pn),Ae(l,0,!0)!==0)break e;l.timeoutHandle=Cf(Ks.bind(null,l,n,wt,ru,c0,t,Jt,_l,ea,Pn,r,2,-0,0),a);break e}Ks(l,n,wt,ru,c0,t,Jt,_l,ea,Pn,r,0,-0,0)}}break}while(!0);sn(e)}function Ks(e,t,n,l,a,r,o,m,_,A,q,Q,E,w){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(nr={stylesheets:null,count:0,unsuspend:B3},ks(t),Q=j3(),Q!==null)){e.cancelPendingCommit=Q(tf.bind(null,e,t,r,n,l,a,o,m,_,q,1,E,w)),Wn(e,r,o,!A);return}tf(e,t,r,n,l,a,o,m,_)}function t3(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],r=a.getSnapshot;a=a.value;try{if(!Gt(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t,n,l){t&=~i0,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var r=31-Ye(a),o=1<<r;l[r]=-1,a&=~o}n!==0&&wn(e,n,t)}function uu(){return(Ge&6)===0?(Wa(0),!1):!0}function h0(){if(Te!==null){if(Be===0)var e=Te.return;else e=Te,xn=pl=null,Oi(e),Jl=null,Xa=0,e=Te;for(;e!==null;)zs(e.alternate,e),e=e.return;Te=null}}function la(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,x3(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),h0(),Le=e,Te=n=gn(e.current,null),Me=t,Be=0,Yt=null,Pn=!1,$l=_e(e,t),u0=!1,ea=Jt=i0=_l=Qn=nt=0,wt=Ka=null,c0=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-Ye(l),r=1<<a;t|=e[a],l&=~r}return zn=t,Mr(),n}function Js(e,t){be=null,H.H=Qr,t===Ea||t===Ur?(t=fo(),Be=3):t===co?(t=fo(),Be=4):Be=t===hs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yt=t,Te===null&&(nt=1,Ir(e,Zt(t,e.current)))}function Ws(){var e=H.H;return H.H=Qr,e===null?Qr:e}function Fs(){var e=H.A;return H.A=$1,e}function m0(){nt=4,Pn||(Me&4194048)!==Me&&Kt.current!==null||($l=!0),(Qn&134217727)===0&&(_l&134217727)===0||Le===null||Wn(Le,Me,Jt,!1)}function p0(e,t,n){var l=Ge;Ge|=2;var a=Ws(),r=Fs();(Le!==e||Me!==t)&&(ru=null,la(e,t)),t=!1;var o=nt;e:do try{if(Be!==0&&Te!==null){var m=Te,_=Yt;switch(Be){case 8:h0(),o=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var A=Be;if(Be=0,Yt=null,aa(e,m,_,A),n&&$l){o=0;break e}break;default:A=Be,Be=0,Yt=null,aa(e,m,_,A)}}n3(),o=nt;break}catch(q){Js(e,q)}while(!0);return t&&e.shellSuspendCounter++,xn=pl=null,Ge=l,H.H=a,H.A=r,Te===null&&(Le=null,Me=0,Mr()),o}function n3(){for(;Te!==null;)Is(Te)}function l3(e,t){var n=Ge;Ge|=2;var l=Ws(),a=Fs();Le!==e||Me!==t?(ru=null,au=ce()+500,la(e,t)):$l=_e(e,t);e:do try{if(Be!==0&&Te!==null){t=Te;var r=Yt;t:switch(Be){case 1:Be=0,Yt=null,aa(e,t,r,1);break;case 2:case 9:if(oo(r)){Be=0,Yt=null,$s(t);break}t=function(){Be!==2&&Be!==9||Le!==e||(Be=7),sn(e)},r.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:oo(r)?(Be=0,Yt=null,$s(t)):(Be=0,Yt=null,aa(e,t,r,7));break;case 5:var o=null;switch(Te.tag){case 26:o=Te.memoizedState;case 5:case 27:var m=Te;if(!o||Gf(o)){Be=0,Yt=null;var _=m.sibling;if(_!==null)Te=_;else{var A=m.return;A!==null?(Te=A,iu(A)):Te=null}break t}}Be=0,Yt=null,aa(e,t,r,5);break;case 6:Be=0,Yt=null,aa(e,t,r,6);break;case 8:h0(),nt=6;break e;default:throw Error(i(462))}}a3();break}catch(q){Js(e,q)}while(!0);return xn=pl=null,H.H=l,H.A=a,Ge=n,Te!==null?0:(Le=null,Me=0,Mr(),nt)}function a3(){for(;Te!==null&&!ne();)Is(Te)}function Is(e){var t=Rs(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?iu(e):Te=t}function $s(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xs(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=xs(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Oi(t);default:zs(n,t),t=Te=$c(t,zn),t=Rs(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?iu(e):Te=t}function aa(e,t,n,l){xn=pl=null,Oi(t),Jl=null,Xa=0;var a=t.return;try{if(Q1(e,a,t,n,Me)){nt=1,Ir(e,Zt(n,e.current)),Te=null;return}}catch(r){if(a!==null)throw Te=a,r;nt=1,Ir(e,Zt(n,e.current)),Te=null;return}t.flags&32768?(Ee||l===1?e=!0:$l||(Me&536870912)!==0?e=!1:(Pn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ef(t,e)):iu(t)}function iu(e){var t=e;do{if((t.flags&32768)!==0){ef(t,Pn);return}e=t.return;var n=J1(t.alternate,t,zn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);nt===0&&(nt=5)}function ef(e,t){do{var n=W1(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);nt=6,Te=null}function tf(e,t,n,l,a,r,o,m,_){e.cancelPendingCommit=null;do cu();while(_t!==0);if((Ge&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(r=t.lanes|t.childLanes,r|=ri,da(e,n,r,o,m,_),e===Le&&(Te=Le=null,Me=0),ta=t,Jn=e,na=n,s0=r,f0=a,Ls=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c3(rt,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,a=J.p,J.p=2,o=Ge,Ge|=4;try{F1(e,t,n)}finally{Ge=o,J.p=a,H.T=l}}_t=1,nf(),lf(),af()}}function nf(){if(_t===1){_t=0;var e=Jn,t=ta,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var l=J.p;J.p=2;var a=Ge;Ge|=4;try{js(t,e);var r=z0,o=Nc(e.containerInfo),m=r.focusedElem,_=r.selectionRange;if(o!==m&&m&&m.ownerDocument&&qc(m.ownerDocument.documentElement,m)){if(_!==null&&ei(m)){var A=_.start,q=_.end;if(q===void 0&&(q=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(q,m.value.length);else{var Q=m.ownerDocument||document,E=Q&&Q.defaultView||window;if(E.getSelection){var w=E.getSelection(),he=m.textContent.length,se=Math.min(_.start,he),qe=_.end===void 0?se:Math.min(_.end,he);!w.extend&&se>qe&&(o=qe,qe=se,se=o);var z=kc(m,se),R=kc(m,qe);if(z&&R&&(w.rangeCount!==1||w.anchorNode!==z.node||w.anchorOffset!==z.offset||w.focusNode!==R.node||w.focusOffset!==R.offset)){var M=Q.createRange();M.setStart(z.node,z.offset),w.removeAllRanges(),se>qe?(w.addRange(M),w.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),w.addRange(M))}}}}for(Q=[],w=m;w=w.parentNode;)w.nodeType===1&&Q.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Q.length;m++){var L=Q[m];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}bu=!!D0,z0=D0=null}finally{Ge=a,J.p=l,H.T=n}}e.current=t,_t=2}}function lf(){if(_t===2){_t=0;var e=Jn,t=ta,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var l=J.p;J.p=2;var a=Ge;Ge|=4;try{Hs(e,t.alternate,t)}finally{Ge=a,J.p=l,H.T=n}}_t=3}}function af(){if(_t===4||_t===3){_t=0,pe();var e=Jn,t=ta,n=na,l=Ls;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_t=5:(_t=0,ta=Jn=null,rf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Kn=null),Hn(n),t=t.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Ft,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,a=J.p,J.p=2,H.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var m=l[o];r(m.value,{componentStack:m.stack})}}finally{H.T=t,J.p=a}}(na&3)!==0&&cu(),sn(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===d0?Ja++:(Ja=0,d0=e):Ja=0,Wa(0)}}function rf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Aa(t)))}function cu(e){return nf(),lf(),af(),uf()}function uf(){if(_t!==5)return!1;var e=Jn,t=s0;s0=0;var n=Hn(na),l=H.T,a=J.p;try{J.p=32>n?32:n,H.T=null,n=f0,f0=null;var r=Jn,o=na;if(_t=0,ta=Jn=null,na=0,(Ge&6)!==0)throw Error(i(331));var m=Ge;if(Ge|=4,Ns(r.current),Xs(r,r.current,o,n),Ge=m,Wa(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Ft,r)}catch{}return!0}finally{J.p=a,H.T=l,rf(e,t)}}function cf(e,t,n){t=Zt(n,t),t=Zi(e.stateNode,t,2),e=Yn(e,t,2),e!==null&&(ot(e,2),sn(e))}function Ne(e,t,n){if(e.tag===3)cf(e,e,n);else for(;t!==null;){if(t.tag===3){cf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Kn===null||!Kn.has(l))){e=Zt(n,e),n=fs(2),l=Yn(t,n,2),l!==null&&(ds(n,l,t,e),ot(l,2),sn(l));break}}t=t.return}}function g0(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new e3;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(u0=!0,a.add(n),e=r3.bind(null,e,t,n),t.then(e,e))}function r3(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Me&n)===n&&(nt===4||nt===3&&(Me&62914560)===Me&&300>ce()-o0?(Ge&2)===0&&la(e,0):i0|=n,ea===Me&&(ea=0)),sn(e)}function of(e,t){t===0&&(t=ee()),e=Yl(e,t),e!==null&&(ot(e,t),sn(e))}function u3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),of(e,n)}function i3(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),of(e,n)}function c3(e,t){return En(e,t)}var ou=null,ra=null,y0=!1,su=!1,v0=!1,Sl=0;function sn(e){e!==ra&&e.next===null&&(ra===null?ou=ra=e:ra=ra.next=e),su=!0,y0||(y0=!0,s3())}function Wa(e,t){if(!v0&&su){v0=!0;do for(var n=!1,l=ou;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var o=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-Ye(42|e)+1)-1,r&=a&~(o&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,hf(l,r))}else r=Me,r=Ae(l,l===Le?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||_e(l,r)||(n=!0,hf(l,r));l=l.next}while(n);v0=!1}}function o3(){sf()}function sf(){su=y0=!1;var e=0;Sl!==0&&(v3()&&(e=Sl),Sl=0);for(var t=ce(),n=null,l=ou;l!==null;){var a=l.next,r=ff(l,t);r===0?(l.next=null,n===null?ou=a:n.next=a,a===null&&(ra=n)):(n=l,(e!==0||(r&3)!==0)&&(su=!0)),l=a}Wa(e)}function ff(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Ye(r),m=1<<o,_=a[o];_===-1?((m&n)===0||(m&l)!==0)&&(a[o]=et(m,t)):_<=t&&(e.expiredLanes|=m),r&=~m}if(t=Le,n=Me,n=Ae(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&fn(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&fn(l),Hn(n)){case 2:case 8:n=We;break;case 32:n=rt;break;case 268435456:n=Ce;break;default:n=rt}return l=df.bind(null,e),n=En(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&fn(l),e.callbackPriority=2,e.callbackNode=null,2}function df(e,t){if(_t!==0&&_t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cu()&&e.callbackNode!==n)return null;var l=Me;return l=Ae(e,e===Le?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qs(e,l,t),ff(e,ce()),e.callbackNode!=null&&e.callbackNode===n?df.bind(null,e):null)}function hf(e,t){if(cu())return null;Qs(e,t,!0)}function s3(){b3(function(){(Ge&6)!==0?En(je,o3):sf()})}function x0(){return Sl===0&&(Sl=Ve()),Sl}function mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_r(""+e)}function pf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function f3(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var r=mf((a[Ke]||null).action),o=l.submitter;o&&(t=(t=o[Ke]||null)?mf(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var m=new Rr("action","action",null,l,a);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Sl!==0){var _=o?pf(a,o):new FormData(a);Yi(n,{pending:!0,data:_,method:a.method,action:r},null,_)}}else typeof r=="function"&&(m.preventDefault(),_=o?pf(a,o):new FormData(a),Yi(n,{pending:!0,data:_,method:a.method,action:r},r,_))},currentTarget:a}]})}}for(var b0=0;b0<ai.length;b0++){var _0=ai[b0],d3=_0.toLowerCase(),h3=_0[0].toUpperCase()+_0.slice(1);It(d3,"on"+h3)}It(Pc,"onAnimationEnd"),It(Qc,"onAnimationIteration"),It(Kc,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(O1,"onTransitionRun"),It(E1,"onTransitionStart"),It(V1,"onTransitionCancel"),It(Jc,"onTransitionEnd"),Al("onMouseEnter",["mouseout","mouseover"]),Al("onMouseLeave",["mouseout","mouseover"]),Al("onPointerEnter",["pointerout","pointerover"]),Al("onPointerLeave",["pointerout","pointerover"]),ul("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ul("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ul("onBeforeInput",["compositionend","keypress","textInput","paste"]),ul("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ul("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ul("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa));function gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var m=l[o],_=m.instance,A=m.currentTarget;if(m=m.listener,_!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=A;try{r(a)}catch(q){Fr(q)}a.currentTarget=null,r=_}else for(o=0;o<l.length;o++){if(m=l[o],_=m.instance,A=m.currentTarget,m=m.listener,_!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=A;try{r(a)}catch(q){Fr(q)}a.currentTarget=null,r=_}}}}function Re(e,t){var n=t[Rl];n===void 0&&(n=t[Rl]=new Set);var l=e+"__bubble";n.has(l)||(yf(t,e,2,!1),n.add(l))}function S0(e,t,n){var l=0;t&&(l|=4),yf(n,e,l,t)}var fu="_reactListening"+Math.random().toString(36).slice(2);function C0(e){if(!e[fu]){e[fu]=!0,cc.forEach(function(n){n!=="selectionchange"&&(m3.has(n)||S0(n,!1,e),S0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fu]||(t[fu]=!0,S0("selectionchange",!1,t))}}function yf(e,t,n,l){switch(kf(t)){case 2:var a=k3;break;case 8:a=q3;break;default:a=U0}n=a.bind(null,t,n,e),a=void 0,!Lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function T0(e,t,n,l,a){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var m=l.stateNode.containerInfo;if(m===a)break;if(o===4)for(o=l.return;o!==null;){var _=o.tag;if((_===3||_===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;m!==null;){if(o=Dl(m),o===null)return;if(_=o.tag,_===5||_===6||_===26||_===27){l=r=o;continue e}m=m.parentNode}}l=l.return}Sc(function(){var A=r,q=Nu(n),Q=[];e:{var E=Wc.get(e);if(E!==void 0){var w=Rr,he=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":w=c1;break;case"focusin":he="focus",w=Ju;break;case"focusout":he="blur",w=Ju;break;case"beforeblur":case"afterblur":w=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=f1;break;case Pc:case Qc:case Kc:w=$2;break;case Jc:w=h1;break;case"scroll":case"scrollend":w=K2;break;case"wheel":w=p1;break;case"copy":case"cut":case"paste":w=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=zc;break;case"toggle":case"beforetoggle":w=y1}var se=(t&4)!==0,qe=!se&&(e==="scroll"||e==="scrollend"),z=se?E!==null?E+"Capture":null:E;se=[];for(var R=A,M;R!==null;){var L=R;if(M=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||M===null||z===null||(L=ga(R,z),L!=null&&se.push(Ia(R,L,M))),qe)break;R=R.return}0<se.length&&(E=new w(E,he,null,n,q),Q.push({event:E,listeners:se}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",E&&n!==qu&&(he=n.relatedTarget||n.fromElement)&&(Dl(he)||he[hn]))break e;if((w||E)&&(E=q.window===q?q:(E=q.ownerDocument)?E.defaultView||E.parentWindow:window,w?(he=n.relatedTarget||n.toElement,w=A,he=he?Dl(he):null,he!==null&&(qe=c(he),se=he.tag,he!==qe||se!==5&&se!==27&&se!==6)&&(he=null)):(w=null,he=A),w!==he)){if(se=Rc,L="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(se=zc,L="onPointerLeave",z="onPointerEnter",R="pointer"),qe=w==null?E:pa(w),M=he==null?E:pa(he),E=new se(L,R+"leave",w,n,q),E.target=qe,E.relatedTarget=M,L=null,Dl(q)===A&&(se=new se(z,R+"enter",he,n,q),se.target=M,se.relatedTarget=qe,L=se),qe=L,w&&he)t:{for(se=w,z=he,R=0,M=se;M;M=ua(M))R++;for(M=0,L=z;L;L=ua(L))M++;for(;0<R-M;)se=ua(se),R--;for(;0<M-R;)z=ua(z),M--;for(;R--;){if(se===z||z!==null&&se===z.alternate)break t;se=ua(se),z=ua(z)}se=null}else se=null;w!==null&&vf(Q,E,w,se,!1),he!==null&&qe!==null&&vf(Q,qe,he,se,!0)}}e:{if(E=A?pa(A):window,w=E.nodeName&&E.nodeName.toLowerCase(),w==="select"||w==="input"&&E.type==="file")var le=Gc;else if(wc(E))if(Bc)le=z1;else{le=R1;var Se=T1}else w=E.nodeName,!w||w.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&ku(A.elementType)&&(le=Gc):le=D1;if(le&&(le=le(e,A))){Hc(Q,le,n,q);break e}Se&&Se(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&Xu(E,"number",E.value)}switch(Se=A?pa(A):window,e){case"focusin":(wc(Se)||Se.contentEditable==="true")&&(Bl=Se,ti=A,Ta=null);break;case"focusout":Ta=ti=Bl=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,Zc(Q,n,q);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":Zc(Q,n,q)}var ie;if(Fu)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Gl?Ec(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(Mc&&n.locale!=="ko"&&(Gl||de!=="onCompositionStart"?de==="onCompositionEnd"&&Gl&&(ie=Cc()):(Gn=q,Pu="value"in Gn?Gn.value:Gn.textContent,Gl=!0)),Se=du(A,de),0<Se.length&&(de=new Dc(de,e,null,n,q),Q.push({event:de,listeners:Se}),ie?de.data=ie:(ie=Vc(n),ie!==null&&(de.data=ie)))),(ie=x1?b1(e,n):_1(e,n))&&(de=du(A,"onBeforeInput"),0<de.length&&(Se=new Dc("onBeforeInput","beforeinput",null,n,q),Q.push({event:Se,listeners:de}),Se.data=ie)),f3(Q,e,A,n,q)}gf(Q,t)})}function Ia(e,t,n){return{instance:e,listener:t,currentTarget:n}}function du(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ga(e,n),a!=null&&l.unshift(Ia(e,a,r)),a=ga(e,t),a!=null&&l.push(Ia(e,a,r))),e.tag===3)return l;e=e.return}return[]}function ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vf(e,t,n,l,a){for(var r=t._reactName,o=[];n!==null&&n!==l;){var m=n,_=m.alternate,A=m.stateNode;if(m=m.tag,_!==null&&_===l)break;m!==5&&m!==26&&m!==27||A===null||(_=A,a?(A=ga(n,r),A!=null&&o.unshift(Ia(n,A,_))):a||(A=ga(n,r),A!=null&&o.push(Ia(n,A,_)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var p3=/\r\n?/g,g3=/\u0000|\uFFFD/g;function xf(e){return(typeof e=="string"?e:""+e).replace(p3,`
`).replace(g3,"")}function bf(e,t){return t=xf(t),xf(e)===t}function hu(){}function ke(e,t,n,l,a,r){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Vl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Vl(e,""+l);break;case"className":vr(e,"class",l);break;case"tabIndex":vr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(e,n,l);break;case"style":bc(e,l,r);break;case"data":if(t!=="object"){vr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=_r(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",a.name,a,null),ke(e,t,"formEncType",a.formEncType,a,null),ke(e,t,"formMethod",a.formMethod,a,null),ke(e,t,"formTarget",a.formTarget,a,null)):(ke(e,t,"encType",a.encType,a,null),ke(e,t,"method",a.method,a,null),ke(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=_r(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=hu);break;case"onScroll":l!=null&&Re("scroll",e);break;case"onScrollEnd":l!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=_r(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Re("beforetoggle",e),Re("toggle",e),yr(e,"popover",l);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=P2.get(n)||n,yr(e,n,l))}}function R0(e,t,n,l,a,r){switch(n){case"style":bc(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Vl(e,l):(typeof l=="number"||typeof l=="bigint")&&Vl(e,""+l);break;case"onScroll":l!=null&&Re("scroll",e);break;case"onScrollEnd":l!=null&&Re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=hu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[Ke]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):yr(e,n,l)}}}function St(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var l=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:ke(e,t,r,o,n,null)}}a&&ke(e,t,"srcSet",n.srcSet,n,null),l&&ke(e,t,"src",n.src,n,null);return;case"input":Re("invalid",e);var m=r=o=a=null,_=null,A=null;for(l in n)if(n.hasOwnProperty(l)){var q=n[l];if(q!=null)switch(l){case"name":a=q;break;case"type":o=q;break;case"checked":_=q;break;case"defaultChecked":A=q;break;case"value":r=q;break;case"defaultValue":m=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,t));break;default:ke(e,t,l,q,n,null)}}gc(e,r,m,_,A,o,a,!1),xr(e);return;case"select":Re("invalid",e),l=o=r=null;for(a in n)if(n.hasOwnProperty(a)&&(m=n[a],m!=null))switch(a){case"value":r=m;break;case"defaultValue":o=m;break;case"multiple":l=m;default:ke(e,t,a,m,n,null)}t=r,n=o,e.multiple=!!l,t!=null?El(e,!!l,t,!1):n!=null&&El(e,!!l,n,!0);return;case"textarea":Re("invalid",e),r=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(m=n[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":a=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:ke(e,t,o,m,n,null)}vc(e,l,a,r),xr(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,t,_,l,n,null)}return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(l=0;l<Fa.length;l++)Re(Fa[l],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(l=n[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:ke(e,t,A,l,n,null)}return;default:if(ku(t)){for(q in n)n.hasOwnProperty(q)&&(l=n[q],l!==void 0&&R0(e,t,q,l,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(l=n[m],l!=null&&ke(e,t,m,l,n,null))}function y3(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,o=null,m=null,_=null,A=null,q=null;for(w in n){var Q=n[w];if(n.hasOwnProperty(w)&&Q!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":_=Q;default:l.hasOwnProperty(w)||ke(e,t,w,null,l,Q)}}for(var E in l){var w=l[E];if(Q=n[E],l.hasOwnProperty(E)&&(w!=null||Q!=null))switch(E){case"type":r=w;break;case"name":a=w;break;case"checked":A=w;break;case"defaultChecked":q=w;break;case"value":o=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(137,t));break;default:w!==Q&&ke(e,t,E,w,l,Q)}}Yu(e,o,m,_,A,q,r,a);return;case"select":w=o=m=E=null;for(r in n)if(_=n[r],n.hasOwnProperty(r)&&_!=null)switch(r){case"value":break;case"multiple":w=_;default:l.hasOwnProperty(r)||ke(e,t,r,null,l,_)}for(a in l)if(r=l[a],_=n[a],l.hasOwnProperty(a)&&(r!=null||_!=null))switch(a){case"value":E=r;break;case"defaultValue":m=r;break;case"multiple":o=r;default:r!==_&&ke(e,t,a,r,l,_)}t=m,n=o,l=w,E!=null?El(e,!!n,E,!1):!!l!=!!n&&(t!=null?El(e,!!n,t,!0):El(e,!!n,n?[]:"",!1));return;case"textarea":w=E=null;for(m in n)if(a=n[m],n.hasOwnProperty(m)&&a!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ke(e,t,m,null,l,a)}for(o in l)if(a=l[o],r=n[o],l.hasOwnProperty(o)&&(a!=null||r!=null))switch(o){case"value":E=a;break;case"defaultValue":w=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==r&&ke(e,t,o,a,l,r)}yc(e,E,w);return;case"option":for(var he in n)if(E=n[he],n.hasOwnProperty(he)&&E!=null&&!l.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:ke(e,t,he,null,l,E)}for(_ in l)if(E=l[_],w=n[_],l.hasOwnProperty(_)&&E!==w&&(E!=null||w!=null))switch(_){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ke(e,t,_,E,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)E=n[se],n.hasOwnProperty(se)&&E!=null&&!l.hasOwnProperty(se)&&ke(e,t,se,null,l,E);for(A in l)if(E=l[A],w=n[A],l.hasOwnProperty(A)&&E!==w&&(E!=null||w!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(137,t));break;default:ke(e,t,A,E,l,w)}return;default:if(ku(t)){for(var qe in n)E=n[qe],n.hasOwnProperty(qe)&&E!==void 0&&!l.hasOwnProperty(qe)&&R0(e,t,qe,void 0,l,E);for(q in l)E=l[q],w=n[q],!l.hasOwnProperty(q)||E===w||E===void 0&&w===void 0||R0(e,t,q,E,l,w);return}}for(var z in n)E=n[z],n.hasOwnProperty(z)&&E!=null&&!l.hasOwnProperty(z)&&ke(e,t,z,null,l,E);for(Q in l)E=l[Q],w=n[Q],!l.hasOwnProperty(Q)||E===w||E==null&&w==null||ke(e,t,Q,E,l,w)}var D0=null,z0=null;function mu(e){return e.nodeType===9?e:e.ownerDocument}function _f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function M0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var A0=null;function v3(){var e=window.event;return e&&e.type==="popstate"?e===A0?!1:(A0=e,!0):(A0=null,!1)}var Cf=typeof setTimeout=="function"?setTimeout:void 0,x3=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,b3=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(_3)}:Cf;function _3(e){setTimeout(function(){throw e})}function Fn(e){return e==="head"}function Rf(e,t){var n=t,l=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<l&&8>l){n=l;var o=e.ownerDocument;if(n&1&&$a(o.documentElement),n&2&&$a(o.body),n&4)for(n=o.head,$a(n),o=n.firstChild;o;){var m=o.nextSibling,_=o.nodeName;o[ma]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=m}}if(a===0){e.removeChild(r),ir(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=r}while(n);ir(t)}function O0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":O0(n),Gu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function S3(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ma])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function C3(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=en(e.nextSibling),e===null))return null;return e}function E0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function T3(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var V0=null;function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function zf(e,t,n){switch(t=mu(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function $a(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gu(e)}var Wt=new Map,Mf=new Set;function pu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=J.d;J.d={f:R3,r:D3,D:z3,C:M3,L:A3,m:O3,X:V3,S:E3,M:w3};function R3(){var e=Mn.f(),t=uu();return e||t}function D3(e){var t=zl(e);t!==null&&t.tag===5&&t.type==="form"?Qo(t):Mn.r(e)}var ia=typeof document>"u"?null:document;function Af(e,t,n){var l=ia;if(l&&typeof t=="string"&&t){var a=Nt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Mf.has(a)||(Mf.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),St(t,"link",e),dt(t),l.head.appendChild(t)))}}function z3(e){Mn.D(e),Af("dns-prefetch",e,null)}function M3(e,t){Mn.C(e,t),Af("preconnect",e,t)}function A3(e,t,n){Mn.L(e,t,n);var l=ia;if(l&&e&&t){var a='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Nt(n.imageSizes)+'"]')):a+='[href="'+Nt(e)+'"]';var r=a;switch(t){case"style":r=ca(e);break;case"script":r=oa(e)}Wt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(r,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(er(r))||t==="script"&&l.querySelector(tr(r))||(t=l.createElement("link"),St(t,"link",e),dt(t),l.head.appendChild(t)))}}function O3(e,t){Mn.m(e,t);var n=ia;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=oa(e)}if(!Wt.has(r)&&(e=v({rel:"modulepreload",href:e},t),Wt.set(r,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(tr(r)))return}l=n.createElement("link"),St(l,"link",e),dt(l),n.head.appendChild(l)}}}function E3(e,t,n){Mn.S(e,t,n);var l=ia;if(l&&e){var a=Ml(l).hoistableStyles,r=ca(e);t=t||"default";var o=a.get(r);if(!o){var m={loading:0,preload:null};if(o=l.querySelector(er(r)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(r))&&w0(e,n);var _=o=l.createElement("link");dt(_),St(_,"link",e),_._p=new Promise(function(A,q){_.onload=A,_.onerror=q}),_.addEventListener("load",function(){m.loading|=1}),_.addEventListener("error",function(){m.loading|=2}),m.loading|=4,gu(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:m},a.set(r,o)}}}function V3(e,t){Mn.X(e,t);var n=ia;if(n&&e){var l=Ml(n).hoistableScripts,a=oa(e),r=l.get(a);r||(r=n.querySelector(tr(a)),r||(e=v({src:e,async:!0},t),(t=Wt.get(a))&&H0(e,t),r=n.createElement("script"),dt(r),St(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function w3(e,t){Mn.M(e,t);var n=ia;if(n&&e){var l=Ml(n).hoistableScripts,a=oa(e),r=l.get(a);r||(r=n.querySelector(tr(a)),r||(e=v({src:e,async:!0,type:"module"},t),(t=Wt.get(a))&&H0(e,t),r=n.createElement("script"),dt(r),St(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Of(e,t,n,l){var a=(a=ue.current)?pu(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ca(n.href),n=Ml(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ca(n.href);var r=Ml(a).hoistableStyles,o=r.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=a.querySelector(er(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),r||H3(a,e,n,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=oa(n),n=Ml(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function ca(e){return'href="'+Nt(e)+'"'}function er(e){return'link[rel="stylesheet"]['+e+"]"}function Ef(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function H3(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),St(t,"link",n),dt(t),e.head.appendChild(t))}function oa(e){return'[src="'+Nt(e)+'"]'}function tr(e){return"script[async]"+e}function Vf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(n.href)+'"]');if(l)return t.instance=l,dt(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),dt(l),St(l,"style",a),gu(l,n.precedence,e),t.instance=l;case"stylesheet":a=ca(n.href);var r=e.querySelector(er(a));if(r)return t.state.loading|=4,t.instance=r,dt(r),r;l=Ef(n),(a=Wt.get(a))&&w0(l,a),r=(e.ownerDocument||e).createElement("link"),dt(r);var o=r;return o._p=new Promise(function(m,_){o.onload=m,o.onerror=_}),St(r,"link",l),t.state.loading|=4,gu(r,n.precedence,e),t.instance=r;case"script":return r=oa(n.src),(a=e.querySelector(tr(r)))?(t.instance=a,dt(a),a):(l=n,(a=Wt.get(r))&&(l=v({},n),H0(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),dt(a),St(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,gu(l,n.precedence,e));return t.instance}function gu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,o=0;o<l.length;o++){var m=l[o];if(m.dataset.precedence===t)r=m;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function w0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function H0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yu=null;function wf(e,t,n){if(yu===null){var l=new Map,a=yu=new Map;a.set(n,l)}else a=yu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[ma]||r[ut]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var m=l.get(o);m?m.push(r):l.set(o,[r])}}return l}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function G3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nr=null;function B3(){}function U3(e,t,n){if(nr===null)throw Error(i(475));var l=nr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=ca(n.href),r=e.querySelector(er(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=vu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,dt(r);return}r=e.ownerDocument||e,n=Ef(n),(a=Wt.get(a))&&w0(n,a),r=r.createElement("link"),dt(r);var o=r;o._p=new Promise(function(m,_){o.onload=m,o.onerror=_}),St(r,"link",n),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=vu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function j3(){if(nr===null)throw Error(i(475));var e=nr;return e.stylesheets&&e.count===0&&G0(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&G0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function vu(){if(this.count--,this.count===0){if(this.stylesheets)G0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function G0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(Y3,e),xu=null,vu.call(e))}function Y3(e,t){if(!(t.state.loading&4)){var n=xu.get(e);if(n)var l=n.get(null);else{n=new Map,xu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var o=a[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),r=n.get(o)||l,r===l&&n.set(null,a),n.set(o,a),this.count++,l=vu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var lr={$$typeof:X,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function X3(e,t,n,l,a,r,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Bf(e,t,n,l,a,r,o,m,_,A,q,Q){return e=new X3(e,t,n,o,m,_,A,Q),t=1,r===!0&&(t|=24),r=Bt(3,null,null,t),e.current=r,r.stateNode=e,t=gi(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:n,cache:t},bi(r),e}function Uf(e){return e?(e=Xl,e):Xl}function jf(e,t,n,l,a,r){a=Uf(a),l.context===null?l.context=a:l.pendingContext=a,l=jn(t),l.payload={element:n},r=r===void 0?null:r,r!==null&&(l.callback=r),n=Yn(e,l,t),n!==null&&(kt(n,e,t),wa(n,e,t))}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function B0(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function Xf(e){if(e.tag===13){var t=Yl(e,67108864);t!==null&&kt(t,e,67108864),B0(e,67108864)}}var bu=!0;function k3(e,t,n,l){var a=H.T;H.T=null;var r=J.p;try{J.p=2,U0(e,t,n,l)}finally{J.p=r,H.T=a}}function q3(e,t,n,l){var a=H.T;H.T=null;var r=J.p;try{J.p=8,U0(e,t,n,l)}finally{J.p=r,H.T=a}}function U0(e,t,n,l){if(bu){var a=j0(l);if(a===null)T0(e,t,l,_u,n),qf(e,l);else if(Z3(a,e,t,n,l))l.stopPropagation();else if(qf(e,l),t&4&&-1<N3.indexOf(e)){for(;a!==null;){var r=zl(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Vn(r.pendingLanes);if(o!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var _=1<<31-Ye(o);m.entanglements[1]|=_,o&=~_}sn(r),(Ge&6)===0&&(au=ce()+500,Wa(0))}}break;case 13:m=Yl(r,2),m!==null&&kt(m,r,2),uu(),B0(r,2)}if(r=j0(l),r===null&&T0(e,t,l,_u,n),r===a)break;a=r}a!==null&&l.stopPropagation()}else T0(e,t,l,null,n)}}function j0(e){return e=Nu(e),Y0(e)}var _u=null;function Y0(e){if(_u=null,e=Dl(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _u=e,null}function kf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pe()){case je:return 2;case We:return 8;case rt:case yt:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var X0=!1,In=null,$n=null,el=null,ar=new Map,rr=new Map,tl=[],N3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qf(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":el=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function ur(e,t,n,l,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},t!==null&&(t=zl(t),t!==null&&Xf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Z3(e,t,n,l,a){switch(t){case"focusin":return In=ur(In,e,t,n,l,a),!0;case"dragenter":return $n=ur($n,e,t,n,l,a),!0;case"mouseover":return el=ur(el,e,t,n,l,a),!0;case"pointerover":var r=a.pointerId;return ar.set(r,ur(ar.get(r)||null,e,t,n,l,a)),!0;case"gotpointercapture":return r=a.pointerId,rr.set(r,ur(rr.get(r)||null,e,t,n,l,a)),!0}return!1}function Nf(e){var t=Dl(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,ha(e.priority,function(){if(n.tag===13){var l=Xt();l=ln(l);var a=Yl(n,l);a!==null&&kt(a,n,l),B0(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Su(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=j0(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);qu=l,n.target.dispatchEvent(l),qu=null}else return t=zl(n),t!==null&&Xf(t),e.blockedOn=n,!1;t.shift()}return!0}function Zf(e,t,n){Su(e)&&n.delete(t)}function L3(){X0=!1,In!==null&&Su(In)&&(In=null),$n!==null&&Su($n)&&($n=null),el!==null&&Su(el)&&(el=null),ar.forEach(Zf),rr.forEach(Zf)}function Cu(e,t){e.blockedOn===t&&(e.blockedOn=null,X0||(X0=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,L3)))}var Tu=null;function Lf(e){Tu!==e&&(Tu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Tu===e&&(Tu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Y0(l||n)===null)continue;break}var r=zl(n);r!==null&&(e.splice(t,3),t-=3,Yi(r,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function ir(e){function t(_){return Cu(_,e)}In!==null&&Cu(In,e),$n!==null&&Cu($n,e),el!==null&&Cu(el,e),ar.forEach(t),rr.forEach(t);for(var n=0;n<tl.length;n++){var l=tl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<tl.length&&(n=tl[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&tl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],r=n[l+1],o=a[Ke]||null;if(typeof r=="function")o||Lf(n);else if(o){var m=null;if(r&&r.hasAttribute("formAction")){if(a=r,o=r[Ke]||null)m=o.formAction;else if(Y0(a)!==null)continue}else m=o.action;typeof m=="function"?n[l+1]=m:(n.splice(l,3),l-=3),Lf(n)}}}function k0(e){this._internalRoot=e}Ru.prototype.render=k0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=Xt();jf(n,l,e,t,null,null)},Ru.prototype.unmount=k0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jf(e.current,2,null,e,null,null),uu(),t[hn]=null}};function Ru(e){this._internalRoot=e}Ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=At();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tl.length&&t!==0&&t<tl[n].priority;n++);tl.splice(n,0,e),n===0&&Nf(e)}};var Pf=u.version;if(Pf!=="19.1.1")throw Error(i(527,Pf,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var P3={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{Ft=Du.inject(P3),Qe=Du}catch{}}return or.createRoot=function(e,t){if(!f(e))throw Error(i(299));var n=!1,l="",a=is,r=cs,o=os,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Bf(e,1,!1,null,null,n,l,a,r,o,m,null),e[hn]=t.current,C0(e),new k0(t)},or.hydrateRoot=function(e,t,n){if(!f(e))throw Error(i(299));var l=!1,a="",r=is,o=cs,m=os,_=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=Bf(e,1,!0,t,n??null,l,a,r,o,m,_,A),t.context=Uf(null),n=t.current,l=Xt(),l=ln(l),a=jn(l),a.callback=null,Yn(n,a,l),n=l,t.current.lanes=n,ot(t,n),sn(t),e[hn]=t.current,C0(e),new Ru(t)},or.version="19.1.1",or}var n2;function nd(){if(n2)return Z0.exports;n2=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Z0.exports=td(),Z0.exports}var ld=nd();const ad=Au(ld);async function rd(){if(window.__wgpuDevice)return window.__wgpuDevice;const s=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!s)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=s;const u=await s.requestDevice();return u.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=u,u.lost.then(()=>{window.__wgpuDevice===u&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),u}/**
 * @description FastNoise Lite is an extremely portable open source noise generation library with a large selection of noise algorithms
 * @author Jordan Peck, snowfoxsh
 * @version 1.1.0
 * @copyright Copyright(c) 2023 Jordan Peck, Contributors
 * @license MIT
 * @git https://github.com/Auburn/FastNoiseLite
 * @npm https://www.npmjs.com/package/fastnoise-lite
 * @example
// Import from npm (if you used npm)

import FastNoiseLite from "fastnoise-lite";

// Create and configure FastNoiseLite object

let noise = new FastNoiseLite();
noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);

// Gather noise data
let noiseData = [];

for (let x = 0; x < 128; x++) {
    noiseData[x] = [];

    for (let y = 0; y < 128; y++) {        
        noiseData[x][y] = noise.GetNoise(x,y);
    }
}

// Do something with this data...
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(u){u!==void 0&&(this._Seed=u)}SetSeed(u){this._Seed=u}SetFrequency(u){this._Frequency=u}SetNoiseType(u){this._NoiseType=u,this._UpdateTransformType3D()}SetRotationType3D(u){this._RotationType3D=u,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(u){this._FractalType=u}SetFractalOctaves(u){this._Octaves=u,this._CalculateFractalBounding()}SetFractalLacunarity(u){this._Lacunarity=u}SetFractalGain(u){this._Gain=u,this._CalculateFractalBounding()}SetFractalWeightedStrength(u){this._WeightedStrength=u}SetFractalPingPongStrength(u){this._PingPongStrength=u}SetCellularDistanceFunction(u){this._CellularDistanceFunction=u}SetCellularReturnType(u){this._CellularReturnType=u}SetCellularJitter(u){this._CellularJitterModifier=u}SetDomainWarpType(u){this._DomainWarpType=u,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(u){this._DomainWarpAmp=u}GetNoise(u,d,i){let f=(h,g)=>{switch(h*=this._Frequency,g*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const p=.5*(1.7320508075688772-1);let v=(h+g)*p;h+=v,g+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,h,g);case D.FractalType.FBm:return this._GenFractalFBmR2(h,g);case D.FractalType.Ridged:return this._GenFractalRidgedR2(h,g);case D.FractalType.PingPong:return this._GenFractalPingPongR2(h,g)}},c=(h,g,y)=>{switch(h*=this._Frequency,g*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=h+g,b=C*-.211324865405187;y*=.577350269189626,h+=b-y,g+=b-y,y+=C*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let C=h+y,b=C*-.211324865405187;g*=.577350269189626,h+=b-g,y+=b-g,g+=C*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const p=2/3;let v=(h+g+y)*p;h=v-h,g=v-g,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,h,g,y);case D.FractalType.FBm:return this._GenFractalFBmR3(h,g,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(h,g,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(h,g,y)}};if(arguments.length===2)return f(u,d);if(arguments.length===3)return c(u,d,i)}DomainWrap(u){switch(this._FractalType){default:this._DomainWarpSingle(u);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(u);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(u);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(u,d,i){return u+i*(d-u)}static _InterpHermite(u){return u*u*(3-2*u)}static _InterpQuintic(u){return u*u*u*(u*(u*6-15)+10)}static _CubicLerp(u,d,i,f,c){let h=f-i-(u-d);return c*c*c*h+c*c*(u-d-h)+c*(i-u)+d}static _PingPong(u){return u-=Math.trunc(u*.5)*2,u<1?u:2-u}_CalculateFractalBounding(){let u=Math.abs(this._Gain),d=u,i=1;for(let f=1;f<this._Octaves;f++)i+=d,d*=u;this._FractalBounding=1/i}_HashR2(u,d,i){let f=u^d^i;return f=Math.imul(f,668265261),f}_HashR3(u,d,i,f){let c=u^d^i^f;return c=Math.imul(c,668265261),c}_ValCoordR2(u,d,i){let f=this._HashR2(u,d,i);return f=Math.imul(f,f),f^=f<<19,f*(1/2147483648)}_ValCoordR3(u,d,i,f){let c=this._HashR3(u,d,i,f);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(u,d,i,f,c){let h=this._HashR2(u,d,i);h^=h>>15,h&=254;let g=this._Gradients2D[h],y=this._Gradients2D[h|1];return f*g+c*y}_GradCoordR3(u,d,i,f,c,h,g){let y=this._HashR3(u,d,i,f);y^=y>>15,y&=252;let p=this._Gradients3D[y],v=this._Gradients3D[y|1],C=this._Gradients3D[y|2];return c*p+h*v+g*C}_GenNoiseSingleR2(u,d,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(u,d,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(u,d,i);case D.NoiseType.Cellular:return this._SingleCellularR2(u,d,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(u,d,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(u,d,i);case D.NoiseType.Value:return this._SingleValueR2(u,d,i);default:return 0}}_GenNoiseSingleR3(u,d,i,f){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(u,d,i,f);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(u,d,i,f);case D.NoiseType.Cellular:return this._SingleCellularR3(u,d,i,f);case D.NoiseType.Perlin:return this._SinglePerlinR3(u,d,i,f);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(u,d,i,f);case D.NoiseType.Value:return this._SingleValueR3(u,d,i,f);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(u,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=this._GenNoiseSingleR2(i++,u,d);f+=g*c,c*=D._Lerp(1,Math.min(g+1,2)*.5,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalFBmR3(u,d,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=this._GenNoiseSingleR3(f++,u,d,i);c+=y*h,h*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalRidgedR2(u,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=Math.abs(this._GenNoiseSingleR2(i++,u,d));f+=(g*-2+1)*c,c*=D._Lerp(1,1-g,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalRidgedR3(u,d,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=Math.abs(this._GenNoiseSingleR3(f++,u,d,i));c+=(y*-2+1)*h,h*=D._Lerp(1,1-y,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalPingPongR2(u,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=D._PingPong((this._GenNoiseSingleR2(i++,u,d)+1)*this._PingPongStrength);f+=(g-.5)*2*c,c*=D._Lerp(1,g,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalPingPongR3(u,d,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=D._PingPong((this._GenNoiseSingleR3(f++,u,d,i)+1)*this._PingPongStrength);c+=(y-.5)*2*h,h*=D._Lerp(1,y,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_SingleOpenSimplex2R2(u,d,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(d),g=Math.floor(i),y=d-h,p=i-g,v=(y+p)*c,C=y-v,b=p-v;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let T,V,k,B=.5-C*C-b*b;B<=0?T=0:T=B*B*(B*B)*this._GradCoordR2(u,h,g,C,b);let U=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+B);if(U<=0)k=0;else{let j=C+(2*c-1),X=b+(2*c-1);k=U*U*(U*U)*this._GradCoordR2(u,h+this._PrimeX,g+this._PrimeY,j,X)}if(b>C){let j=C+c,X=b+(c-1),K=.5-j*j-X*X;K<=0?V=0:V=K*K*(K*K)*this._GradCoordR2(u,h,g+this._PrimeY,j,X)}else{let j=C+(c-1),X=b+c,K=.5-j*j-X*X;K<=0?V=0:V=K*K*(K*K)*this._GradCoordR2(u,h+this._PrimeX,g,j,X)}return(T+V+k)*99.83685446303647}_SingleOpenSimplex2R3(u,d,i,f){let c=Math.round(d),h=Math.round(i),g=Math.round(f),y=d-c,p=i-h,v=f-g,C=Math.trunc(-1-p|1),b=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),V=b*-y,k=C*-p,B=T*-v;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let U=0,j=.6-y*y-(p*p+v*v);for(let X=0;;X++){if(j>0&&(U+=j*j*(j*j)*this._GradCoordR3(u,c,h,g,y,p,v)),V>=k&&V>=B){let K=j+V+V;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(u,c-b*this._PrimeX,h,g,y+b,p,v))}else if(k>V&&k>=B){let K=j+k+k;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(u,c,h-C*this._PrimeY,g,y,p+C,v))}else{let K=j+B+B;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(u,c,h,g-T*this._PrimeZ,y,p,v+T))}if(X===1)break;V=.5-V,k=.5-k,B=.5-B,y=b*V,p=C*k,v=T*B,j+=.75-V-(k+B),c+=b>>1&this._PrimeX,h+=C>>1&this._PrimeY,g+=T>>1&this._PrimeZ,b=-b,C=-C,T=-T,u=~u}return U*32.69428253173828}_SingleOpenSimplex2SR2(u,d,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(d),g=Math.floor(i),y=d-h,p=i-g;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let v=h+this._PrimeX,C=g+this._PrimeY,b=(y+p)*c,T=y-b,V=p-b,k=2/3-T*T-V*V,B=k*k*(k*k)*this._GradCoordR2(u,h,g,T,V),U=2*(1-2*c)*(1/c-2)*b+(-2*(1-2*c)*(1-2*c)+k),j=T-(1-2*c),X=V-(1-2*c);B+=U*U*(U*U)*this._GradCoordR2(u,v,C,j,X);let K=y-p;if(b>c){if(y+K>1){let G=T+(3*c-2),P=V+(3*c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h+(this._PrimeX<<1),g+this._PrimeY,G,P))}else{let G=T+c,P=V+(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h,g+this._PrimeY,G,P))}if(p-K>1){let G=T+(3*c-1),P=V+(3*c-2),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h+this._PrimeX,g+(this._PrimeY<<1),G,P))}else{let G=T+(c-1),P=V+c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h+this._PrimeX,g,G,P))}}else{if(y+K<0){let G=T+(1-c),P=V-c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h-this._PrimeX,g,G,P))}else{let G=T+(c-1),P=V+c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h+this._PrimeX,g,G,P))}if(p<K){let G=T-c,P=V-(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h,g-this._PrimeY,G,P))}else{let G=T+c,P=V+(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,h,g+this._PrimeY,G,P))}}return B*18.24196194486065}_SingleOpenSimplex2SR3(u,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=d-c,p=i-h,v=f-g;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=u+1293373,b=Math.trunc(-.5-y),T=Math.trunc(-.5-p),V=Math.trunc(-.5-v),k=y+b,B=p+T,U=v+V,j=.75-k*k-B*B-U*U,X=j*j*(j*j)*this._GradCoordR3(u,c+(b&this._PrimeX),h+(T&this._PrimeY),g+(V&this._PrimeZ),k,B,U),K=y-.5,G=p-.5,P=v-.5,Y=.75-K*K-G*G-P*P;X+=Y*Y*(Y*Y)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,g+this._PrimeZ,K,G,P);let I=((b|1)<<1)*K,te=((T|1)<<1)*G,fe=((V|1)<<1)*P,ve=(-2-(b<<2))*K-1,ae=(-2-(T<<2))*G-1,ye=(-2-(V<<2))*P-1,ze=!1,ge=I+j;if(ge>0){let x=k-(b|1);X+=ge*ge*(ge*ge)*this._GradCoordR3(u,c+(~b&this._PrimeX),h+(T&this._PrimeY),g+(V&this._PrimeZ),x,B,U)}else{let x=te+fe+j;if(x>0){let N=k,Z=B-(T|1),$=U-(V|1);X+=x*x*(x*x)*this._GradCoordR3(u,c+(b&this._PrimeX),h+(~T&this._PrimeY),g+(~V&this._PrimeZ),N,Z,$)}let O=ve+Y;if(O>0){let N=(b|1)+K;X+=O*O*(O*O)*this._GradCoordR3(C,c+(b&this._PrimeX*2),h+this._PrimeY,g+this._PrimeZ,N,G,P),ze=!0}}let H=!1,J=te+j;if(J>0){let x=k,O=B-(T|1);X+=J*J*(J*J)*this._GradCoordR3(u,c+(b&this._PrimeX),h+(~T&this._PrimeY),g+(V&this._PrimeZ),x,O,U)}else{let x=I+fe+j;if(x>0){let N=k-(b|1),Z=B,$=U-(V|1);X+=x*x*(x*x)*this._GradCoordR3(u,c+(~b&this._PrimeX),h+(T&this._PrimeY),g+(~V&this._PrimeZ),N,Z,$)}let O=ae+Y;if(O>0){let N=K,Z=(T|1)+G;X+=O*O*(O*O)*this._GradCoordR3(C,c+this._PrimeX,h+(T&this._PrimeY<<1),g+this._PrimeZ,N,Z,P),H=!0}}let F=!1,re=fe+j;if(re>0){let x=k,O=B,N=U-(V|1);X+=re*re*(re*re)*this._GradCoordR3(u,c+(b&this._PrimeX),h+(T&this._PrimeY),g+(~V&this._PrimeZ),x,O,N)}else{let x=I+te+j;if(x>0){let N=k-(b|1),Z=B-(T|1);X+=x*x*(x*x)*this._GradCoordR3(u,c+(~b&this._PrimeX),h+(~T&this._PrimeY),g+(V&this._PrimeZ),N,Z,U)}let O=ye+Y;if(O>0){let N=K,Z=G,$=(V|1)+P;X+=O*O*(O*O)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,g+(V&this._PrimeZ<<1),N,Z,$),F=!0}}if(!ze){let x=ae+ye+Y;if(x>0){let O=K,N=(T|1)+G,Z=(V|1)+P;X+=x*x*(x*x)*this._GradCoordR3(C,c+this._PrimeX,h+(T&this._PrimeY<<1),g+(V&this._PrimeZ<<1),O,N,Z)}}if(!H){let x=ve+ye+Y;if(x>0){let O=(b|1)+K,N=G,Z=(V|1)+P;X+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX*2),h+this._PrimeY,g+(V&this._PrimeZ<<1),O,N,Z)}}if(!F){let x=ve+ae+Y;if(x>0){let O=(b|1)+K,N=(T|1)+G;X+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX<<1),h+(T&this._PrimeY<<1),g+this._PrimeZ,O,N,P)}}return X*9.046026385208288}_SingleCellularR2(u,d,i){let f=Math.round(d),c=Math.round(i),h=Number.MAX_VALUE,g=Number.MAX_VALUE,y=0,p=.43701595*this._CellularJitterModifier,v=(f-1)*this._PrimeX,C=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let b=f-1;b<=f+1;b++){let T=C;for(let V=c-1;V<=c+1;V++){let k=this._HashR2(u,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=V-i+this._RandVecs2D[B|1]*p,X=U*U+j*j;g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let b=f-1;b<=f+1;b++){let T=C;for(let V=c-1;V<=c+1;V++){let k=this._HashR2(u,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=V-i+this._RandVecs2D[B|1]*p,X=Math.abs(U)+Math.abs(j);g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let b=f-1;b<=f+1;b++){let T=C;for(let V=c-1;V<=c+1;V++){let k=this._HashR2(u,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=V-i+this._RandVecs2D[B|1]*p,X=Math.abs(U)+Math.abs(j)+(U*U+j*j);g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(h=Math.sqrt(h),this._CellularReturnType!==D.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return h-1;case D.CellularReturnType.Distance2:return g-1;case D.CellularReturnType.Distance2Add:return(g+h)*.5-1;case D.CellularReturnType.Distance2Sub:return g-h-1;case D.CellularReturnType.Distance2Mul:return g*h*.5-1;case D.CellularReturnType.Distance2Div:return h/g-1;default:return 0}}_SingleCellularR3(u,d,i,f){let c=Math.round(d),h=Math.round(i),g=Math.round(f),y=Number.MAX_VALUE,p=Number.MAX_VALUE,v=0,C=.39614353*this._CellularJitterModifier,b=(c-1)*this._PrimeX,T=(h-1)*this._PrimeY,V=(g-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=h-1;U<=h+1;U++){let j=V;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,I=X-f+this._RandVecs3D[G|2]*C,te=P*P+Y*Y+I*I;p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=h-1;U<=h+1;U++){let j=V;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,I=X-f+this._RandVecs3D[G|2]*C,te=Math.abs(P)+Math.abs(Y)+Math.abs(I);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=h-1;U<=h+1;U++){let j=V;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,I=X-f+this._RandVecs3D[G|2]*C,te=Math.abs(P)+Math.abs(Y)+Math.abs(I)+(P*P+Y*Y+I*I);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+y)*.5-1;case D.CellularReturnType.Distance2Sub:return p-y-1;case D.CellularReturnType.Distance2Mul:return p*y*.5-1;case D.CellularReturnType.Distance2Div:return y/p-1;default:return 0}}_SinglePerlinR2(u,d,i){let f=Math.floor(d),c=Math.floor(i),h=d-f,g=i-c,y=h-1,p=g-1,v=D._InterpQuintic(h),C=D._InterpQuintic(g);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let b=f+this._PrimeX,T=c+this._PrimeY,V=D._Lerp(this._GradCoordR2(u,f,c,h,g),this._GradCoordR2(u,b,c,y,g),v),k=D._Lerp(this._GradCoordR2(u,f,T,h,p),this._GradCoordR2(u,b,T,y,p),v);return D._Lerp(V,k,C)*1.4247691104677813}_SinglePerlinR3(u,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=d-c,p=i-h,v=f-g,C=y-1,b=p-1,T=v-1,V=D._InterpQuintic(y),k=D._InterpQuintic(p),B=D._InterpQuintic(v);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let U=c+this._PrimeX,j=h+this._PrimeY,X=g+this._PrimeZ,K=D._Lerp(this._GradCoordR3(u,c,h,g,y,p,v),this._GradCoordR3(u,U,h,g,C,p,v),V),G=D._Lerp(this._GradCoordR3(u,c,j,g,y,b,v),this._GradCoordR3(u,U,j,g,C,b,v),V),P=D._Lerp(this._GradCoordR3(u,c,h,X,y,p,T),this._GradCoordR3(u,U,h,X,C,p,T),V),Y=D._Lerp(this._GradCoordR3(u,c,j,X,y,b,T),this._GradCoordR3(u,U,j,X,C,b,T),V),I=D._Lerp(K,G,k),te=D._Lerp(P,Y,k);return D._Lerp(I,te,B)*.9649214148521423}_SingleValueCubicR2(u,d,i){let f=Math.floor(d),c=Math.floor(i),h=d-f,g=i-c;f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f-this._PrimeX,p=c-this._PrimeY,v=f+this._PrimeX,C=c+this._PrimeY,b=f+(this._PrimeX<<1),T=c+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(u,y,p),this._ValCoordR2(u,f,p),this._ValCoordR2(u,v,p),this._ValCoordR2(u,b,p),h),D._CubicLerp(this._ValCoordR2(u,y,c),this._ValCoordR2(u,f,c),this._ValCoordR2(u,v,c),this._ValCoordR2(u,b,c),h),D._CubicLerp(this._ValCoordR2(u,y,C),this._ValCoordR2(u,f,C),this._ValCoordR2(u,v,C),this._ValCoordR2(u,b,C),h),D._CubicLerp(this._ValCoordR2(u,y,T),this._ValCoordR2(u,f,T),this._ValCoordR2(u,v,T),this._ValCoordR2(u,b,T),h),g)*(1/(1.5*1.5))}_SingleValueCubicR3(u,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=d-c,p=i-h,v=f-g;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c-this._PrimeX,b=h-this._PrimeY,T=g-this._PrimeZ,V=c+this._PrimeX,k=h+this._PrimeY,B=g+this._PrimeZ,U=c+(this._PrimeX<<1),j=h+(this._PrimeY<<1),X=g+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,T),this._ValCoordR3(u,c,b,T),this._ValCoordR3(u,V,b,T),this._ValCoordR3(u,U,b,T),y),D._CubicLerp(this._ValCoordR3(u,C,h,T),this._ValCoordR3(u,c,h,T),this._ValCoordR3(u,V,h,T),this._ValCoordR3(u,U,h,T),y),D._CubicLerp(this._ValCoordR3(u,C,k,T),this._ValCoordR3(u,c,k,T),this._ValCoordR3(u,V,k,T),this._ValCoordR3(u,U,k,T),y),D._CubicLerp(this._ValCoordR3(u,C,j,T),this._ValCoordR3(u,c,j,T),this._ValCoordR3(u,V,j,T),this._ValCoordR3(u,U,j,T),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,g),this._ValCoordR3(u,c,b,g),this._ValCoordR3(u,V,b,g),this._ValCoordR3(u,U,b,g),y),D._CubicLerp(this._ValCoordR3(u,C,h,g),this._ValCoordR3(u,c,h,g),this._ValCoordR3(u,V,h,g),this._ValCoordR3(u,U,h,g),y),D._CubicLerp(this._ValCoordR3(u,C,k,g),this._ValCoordR3(u,c,k,g),this._ValCoordR3(u,V,k,g),this._ValCoordR3(u,U,k,g),y),D._CubicLerp(this._ValCoordR3(u,C,j,g),this._ValCoordR3(u,c,j,g),this._ValCoordR3(u,V,j,g),this._ValCoordR3(u,U,j,g),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,B),this._ValCoordR3(u,c,b,B),this._ValCoordR3(u,V,b,B),this._ValCoordR3(u,U,b,B),y),D._CubicLerp(this._ValCoordR3(u,C,h,B),this._ValCoordR3(u,c,h,B),this._ValCoordR3(u,V,h,B),this._ValCoordR3(u,U,h,B),y),D._CubicLerp(this._ValCoordR3(u,C,k,B),this._ValCoordR3(u,c,k,B),this._ValCoordR3(u,V,k,B),this._ValCoordR3(u,U,k,B),y),D._CubicLerp(this._ValCoordR3(u,C,j,B),this._ValCoordR3(u,c,j,B),this._ValCoordR3(u,V,j,B),this._ValCoordR3(u,U,j,B),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,X),this._ValCoordR3(u,c,b,X),this._ValCoordR3(u,V,b,X),this._ValCoordR3(u,U,b,X),y),D._CubicLerp(this._ValCoordR3(u,C,h,X),this._ValCoordR3(u,c,h,X),this._ValCoordR3(u,V,h,X),this._ValCoordR3(u,U,h,X),y),D._CubicLerp(this._ValCoordR3(u,C,k,X),this._ValCoordR3(u,c,k,X),this._ValCoordR3(u,V,k,X),this._ValCoordR3(u,U,k,X),y),D._CubicLerp(this._ValCoordR3(u,C,j,X),this._ValCoordR3(u,c,j,X),this._ValCoordR3(u,V,j,X),this._ValCoordR3(u,U,j,X),y),p),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(u,d,i){let f=Math.floor(d),c=Math.floor(i),h=D._InterpHermite(d-f),g=D._InterpHermite(i-c);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f+this._PrimeX,p=c+this._PrimeY,v=D._Lerp(this._ValCoordR2(u,f,c),this._ValCoordR2(u,y,c),h),C=D._Lerp(this._ValCoordR2(u,f,p),this._ValCoordR2(u,y,p),h);return D._Lerp(v,C,g)}_SingleValueR3(u,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=D._InterpHermite(d-c),p=D._InterpHermite(i-h),v=D._InterpHermite(f-g);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c+this._PrimeX,b=h+this._PrimeY,T=g+this._PrimeZ,V=D._Lerp(this._ValCoordR3(u,c,h,g),this._ValCoordR3(u,C,h,g),y),k=D._Lerp(this._ValCoordR3(u,c,b,g),this._ValCoordR3(u,C,b,g),y),B=D._Lerp(this._ValCoordR3(u,c,h,T),this._ValCoordR3(u,C,h,T),y),U=D._Lerp(this._ValCoordR3(u,c,b,T),this._ValCoordR3(u,C,b,T),y),j=D._Lerp(V,k,p),X=D._Lerp(B,U,p);return D._Lerp(j,X,v)}_DoSingleDomainWarp(){let u=(i,f,c,h,g,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*38.283687591552734,c,h,!1,g,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*16,c,h,!0,g,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,g,y);break}},d=(i,f,c,h,g,y,p)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*32.69428253173828,c,h,!1,g,y,p);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*7.71604938271605,c,h,!0,g,y,p);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,g,y,p);break}};if(arguments.length===6&&arguments[3]instanceof sr)return u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof fr)return d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let u=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(g+y)*v;g+=C,y+=C;break}this._DoSingleDomainWarp(f,c,h,i,g,y)},d=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y,p=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let b=g+y,T=b*-.211324865405187;p*=.577350269189626,g+=T-p,y=y+T-p,p+=b*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let b=g+p,T=b*-.211324865405187;y*=.577350269189626,g+=T-y,p+=T-y,y+=b*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let C=(g+y+p)*v;g=C-g,y=C-y,p=C-p;break}this._DoSingleDomainWarp(f,c,h,i,g,y,p)};if(arguments.length===1&&arguments[0]instanceof sr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return d(arguments[0])}_DomainWarpFractalProgressive(){let u=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const C=.5*(1.7320508075688772-1);let b=(y+p)*C;y+=b,p+=b;break}this._DoSingleDomainWarp(f,c,h,i,y,p),f++,c*=this._Gain,h*=this._Lacunarity}},d=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=y+p,b=C*-.211324865405187;v*=.577350269189626,y+=b-v,p=p+b-v,v+=C*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let C=y+v,b=C*-.211324865405187;p*=.577350269189626,y+=b-p,v+=b-p,p+=C*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let b=(y+p+v)*.6666666666666666;y=b-y,p=b-p,v=b-v}break}this._DoSingleDomainWarp(f,c,h,i,y,p,v),f++,c*=this._Gain,h*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof sr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return d(arguments[0])}_DomainWarpFractalIndependent(){let u=i=>{let f=i.x,c=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(f+c)*v;f+=C,c+=C;break}let h=this._Seed,g=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let p=0;p<this._Octaves;p++)this._DoSingleDomainWarp(h,g,y,i,f,c),h++,g*=this._Gain,y*=this._Lacunarity},d=i=>{let f=i.x,c=i.y,h=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=f+c,C=v*-.211324865405187;h*=.577350269189626,f+=C-h,c=c+C-h,h+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=f+h,C=v*-.211324865405187;c*=.577350269189626,f+=C-c,h+=C-c,c+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let C=(f+c+h)*.6666666666666666;f=C-f,c=C-c,h=C-h}break}let g=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,p=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(g,y,p,i,f,c,h),g++,y*=this._Gain,p*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof sr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return d(arguments[0])}_SingleDomainWarpBasicGrid(){let u=(i,f,c,h,g,y)=>{let p=g*c,v=y*c,C=Math.floor(p),b=Math.floor(v),T=D._InterpHermite(p-C),V=D._InterpHermite(v-b);C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY);let k=C+this._PrimeX,B=b+this._PrimeY,U=this._HashR2(i,C,b)&510,j=this._HashR2(i,k,b)&510,X=D._Lerp(this._RandVecs2D[U],this._RandVecs2D[j],T),K=D._Lerp(this._RandVecs2D[U|1],this._RandVecs2D[j|1],T);U=this._HashR2(i,C,B)&510,j=this._HashR2(i,k,B)&510;let G=D._Lerp(this._RandVecs2D[U],this._RandVecs2D[j],T),P=D._Lerp(this._RandVecs2D[U|1],this._RandVecs2D[j|1],T);h.x+=D._Lerp(X,G,V)*f,h.y+=D._Lerp(K,P,V)*f},d=(i,f,c,h,g,y,p)=>{let v=g*c,C=y*c,b=p*c,T=Math.floor(v),V=Math.floor(C),k=Math.floor(b),B=D._InterpHermite(v-T),U=D._InterpHermite(C-V),j=D._InterpHermite(b-k);T=Math.imul(T,this._PrimeX),V=Math.imul(V,this._PrimeY),k=Math.imul(k,this._PrimeZ);let X=T+this._PrimeX,K=V+this._PrimeY,G=k+this._PrimeZ,P=this._HashR3(i,T,V,k)&1020,Y=this._HashR3(i,X,V,k)&1020,I=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),te=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),fe=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B);P=this._HashR3(i,T,K,k)&1020,Y=this._HashR3(i,X,K,k)&1020;let ve=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),ae=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),ye=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),ze=D._Lerp(I,ve,U),ge=D._Lerp(te,ae,U),H=D._Lerp(fe,ye,U);P=this._HashR3(i,T,V,G)&1020,Y=this._HashR3(i,X,V,G)&1020,I=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),te=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),fe=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),P=this._HashR3(i,T,K,G)&1020,Y=this._HashR3(i,X,K,G)&1020,ve=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),ae=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),ye=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),h.x+=D._Lerp(ze,D._Lerp(I,ve,U),j)*f,h.y+=D._Lerp(ge,D._Lerp(te,ae,U),j)*f,h.z+=D._Lerp(H,D._Lerp(fe,ye,U),j)*f};arguments.length===6&&arguments[3]instanceof sr&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof fr&&d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let u=(i,f,c,h,g,y,p)=>{const C=(3-1.7320508075688772)/6;y*=c,p*=c;let b=Math.floor(y),T=Math.floor(p),V=y-b,k=p-T,B=(V+k)*C,U=V-B,j=k-B;b=Math.imul(b,this._PrimeX),T=Math.imul(T,this._PrimeY);let X,K;X=K=0;let G=.5-U*U-j*j;if(G>0){let Y=G*G*(G*G),I,te;if(g){let fe=this._HashR2(i,b,T)&510;I=this._RandVecs2D[fe],te=this._RandVecs2D[fe|1]}else{let fe=this._HashR2(i,b,T),ve=fe&254,ae=fe>>7&510,ye=this._Gradients2D[ve],ze=this._Gradients2D[ve|1],ge=U*ye+j*ze,H=this._RandVecs2D[ae],J=this._RandVecs2D[ae|1];I=ge*H,te=ge*J}X+=Y*I,K+=Y*te}let P=2*(1-2*C)*(1/C-2)*B+(-2*(1-2*C)*(1-2*C)+G);if(P>0){let Y=U+(2*C-1),I=j+(2*C-1),te=P*P*(P*P),fe,ve;if(g){let ae=this._HashR2(i,b+this._PrimeX,T+this._PrimeY)&510;fe=this._RandVecs2D[ae],ve=this._RandVecs2D[ae|1]}else{let ae=this._HashR2(i,b+this._PrimeX,T+this._PrimeY),ye=ae&254,ze=ae>>7&510,ge=this._Gradients2D[ye],H=this._Gradients2D[ye|1],J=Y*ge+I*H,F=this._RandVecs2D[ze],re=this._RandVecs2D[ze|1];fe=J*F,ve=J*re}X+=te*fe,K+=te*ve}if(j>U){let Y=U+C,I=j+(C-1),te=.5-Y*Y-I*I;if(te>0){let fe=te*te*(te*te),ve,ae;if(g){let ye=this._HashR2(i,b,T+this._PrimeY)&510;ve=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,b,T+this._PrimeY),ze=ye&254,ge=ye>>7&510,H=this._Gradients2D[ze],J=this._Gradients2D[ze|1],F=Y*H+I*J,re=this._RandVecs2D[ge],x=this._RandVecs2D[ge|1];ve=F*re,ae=F*x}X+=fe*ve,K+=fe*ae}}else{let Y=U+(C-1),I=j+C,te=.5-Y*Y-I*I;if(te>0){let fe=te*te*(te*te),ve,ae;if(g){let ye=this._HashR2(i,b+this._PrimeX,T)&510;ve=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,b+this._PrimeX,T),ze=ye&254,ge=ye>>7&510,H=this._Gradients2D[ze],J=this._Gradients2D[ze|1],F=Y*H+I*J,re=this._RandVecs2D[ge],x=this._RandVecs2D[ge|1];ve=F*re,ae=F*x}X+=fe*ve,K+=fe*ae}}h.x+=X*f,h.y+=K*f},d=(i,f,c,h,g,y,p,v)=>{y*=c,p*=c,v*=c;let C=Math.round(y),b=Math.round(p),T=Math.round(v),V=y-C,k=p-b,B=v-T,U=-V-1|1,j=-k-1|1,X=-B-1|1,K=U*-V,G=j*-k,P=X*-B;C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY),T=Math.imul(T,this._PrimeZ);let Y,I,te;Y=I=te=0;let fe=.6-V*V-(k*k+B*B);for(let ve=0;;ve++){if(fe>0){let re=fe*fe*(fe*fe),x,O,N;if(g){let Z=this._HashR3(i,C,b,T)&1020;x=this._RandVecs3D[Z],O=this._RandVecs3D[Z|1],N=this._RandVecs3D[Z|2]}else{let Z=this._HashR3(i,C,b,T),$=Z&252,oe=Z>>6&1020,ue=this._Gradients3D[$],He=this._Gradients3D[$|1],De=this._Gradients3D[$|2],Ue=V*ue+k*He+B*De,Ct=this._RandVecs3D[oe],$e=this._RandVecs3D[oe|1],zt=this._RandVecs3D[oe|2];x=Ue*Ct,O=Ue*$e,N=Ue*zt}Y+=re*x,I+=re*O,te+=re*N}let ae=fe,ye=C,ze=b,ge=T,H=V,J=k,F=B;if(K>=G&&K>=P?(H+=U,ae=ae+K+K,ye-=U*this._PrimeX):G>K&&G>=P?(J+=j,ae=ae+G+G,ze-=j*this._PrimeY):(F+=X,ae=ae+P+P,ge-=X*this._PrimeZ),ae>1){ae-=1;let re=ae*ae*(ae*ae),x,O,N;if(g){let Z=this._HashR3(i,ye,ze,ge)&1020;x=this._RandVecs3D[Z],O=this._RandVecs3D[Z|1],N=this._RandVecs3D[Z|2]}else{let Z=this._HashR3(i,ye,ze,ge),$=Z&252,oe=Z>>6&1020,ue=this._Gradients3D[$],He=this._Gradients3D[$|1],De=this._Gradients3D[$|2],Ue=H*ue+J*He+F*De,Ct=this._RandVecs3D[oe],$e=this._RandVecs3D[oe|1],zt=this._RandVecs3D[oe|2];x=Ue*Ct,O=Ue*$e,N=Ue*zt}Y+=re*x,I+=re*O,te+=re*N}if(ve===1)break;K=.5-K,G=.5-G,P=.5-P,V=U*K,k=j*G,B=X*P,fe+=.75-K-(G+P),C+=U>>1&this._PrimeX,b+=j>>1&this._PrimeY,T+=X>>1&this._PrimeZ,U=-U,j=-j,X=-X,i+=1293373}h.x+=Y*f,h.y+=I*f,h.z+=te*f};arguments.length===7&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class sr{constructor(u,d){this.x=u,this.y=d}}class fr{constructor(u,d,i){this.x=u,this.y=d,this.z=i}}function ud(s=42,u=1920,d=1080,i=D.NoiseType.Perlin,f=6,c=1.7,h=.5,g=D.FractalType.FBm,y=.003){const p=new D;p.SetNoiseType(i),p.SetSeed(s),p.SetFractalOctaves(f),p.SetFractalLacunarity(c),p.SetFractalGain(h),p.SetFractalType(g),p.SetFrequency(y);const v=[];for(let T=0;T<d;T++)for(let V=0;V<u;V++){const B=(p.GetNoise(V,T)+1)/2;v.push(B)}var C=0,b=0;for(let T=0;T<v.length;T++)(v[T]<C||T==0)&&(C=v[T]),(v[T]>b||T==0)&&(b=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-C)/(b-C);return v}const id=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
    // ceil(width / chunkSize) = (width + chunkSize - 1) / chunkSize\r
    let chunksX = (width  + chunkSize - 1u) / chunkSize;\r
    let chunksY = (height + chunkSize - 1u) / chunkSize;\r
    return vec2<u32>(chunksX, chunksY);\r
}\r
\r
fn getChunkPos(cellPos: vec2<u32>, chunkSize: u32) -> vec2<u32> {\r
    return cellPos / vec2<u32>(chunkSize, chunkSize);\r
}\r
\r
fn clampChunkPos(chunkPos: vec2<i32>, chunkSize: u32) -> vec2<u32>\r
{\r
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);\r
    return vec2<u32>(\r
        u32(clamp(chunkPos.x, 0i, i32(numChunks.x) - 1i)), \r
        u32(clamp(chunkPos.y, 0i, i32(numChunks.x) - 1i)));\r
}\r
\r
fn getChunk(chunkPos: vec2<u32>, chunkSize: u32) -> ChunkData\r
{\r
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);\r
    let chunkIdx = chunkPos.x + chunkPos.y * numChunks.x;\r
    return chunkData[chunkIdx];\r
}\r
\r
fn getSurroundingChunk(chunkPos: vec2<u32>, chunkSize: u32, index: u32) -> ChunkData\r
{\r
    let chunkPosI = vec2<i32>(chunkPos);\r
    var nCoord = chunkPos;\r
    if(index == 0)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(0, 1), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 1)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(1, 1), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 2)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(1, 0), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 3)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(1, -1), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 4)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(0, -1), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 5)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(-1, -1), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 6)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(-1, 0), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    else if(index == 7)\r
    {\r
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(-1, 1), chunkSize);\r
        return getChunk(nCoord, chunkSize);\r
    }\r
    \r
\r
    return getChunk(nCoord, chunkSize);\r
}\r
\r
fn chunkHasFluid(chunkPos: vec2<u32>, chunkSize: u32) -> bool\r
{\r
    let epsilon = 1e-7;\r
    let chunk = getChunk(chunkPos, chunkSize);\r
    return (chunk.fluidTotal > epsilon || chunk.anitFluidTotal > epsilon);\r
}\r
\r
fn chunkRegionHasFluid(chunkPos: vec2<u32>, chunkSize: u32) -> bool\r
{\r
    let epsilon = 1e-7;\r
    var chunk = getChunk(chunkPos, chunkSize);\r
    if(chunk.fluidTotal > epsilon || chunk.anitFluidTotal > epsilon) {return true; }\r
\r
    for(var i = 0u; i < 8u; i++)\r
    {\r
        chunk = getSurroundingChunk(chunkPos, chunkSize, i);\r
        if(chunk.fluidTotal > epsilon || chunk.anitFluidTotal > epsilon) {return true; }\r
    }\r
\r
    return false;\r
}\r
\r
fn localCoord2D(cellIdx: u32, chunkSize: u32) -> vec2<u32> {\r
    let x = cellIdx % chunkSize;\r
    let y = cellIdx / chunkSize;\r
    return vec2<u32>(x, y);\r
}`,cd=`// RGB (0–1 range)\r
const COLOR_WHITE  = vec4<f32>(1.0, 1.0, 1.0, 1.0);\r
const COLOR_BLACK  = vec4<f32>(0.0, 0.0, 0.0, 1.0);\r
const COLOR_RED    = vec4<f32>(1.0, 0.0, 0.0, 1.0);\r
const COLOR_GREEN  = vec4<f32>(0.0, 1.0, 0.0, 1.0);\r
const COLOR_BLUE   = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r
const COLOR_YELLOW = vec4<f32>(1.0, 1.0, 0.0, 1.0);\r
const COLOR_CYAN   = vec4<f32>(0.0, 1.0, 1.0, 1.0);\r
const COLOR_MAGENTA= vec4<f32>(1.0, 0.0, 1.0, 1.0);\r
const COLOR_GRAY   = vec4<f32>(0.5, 0.5, 0.5, 1.0);\r
const COLOR_CLEAR  = vec4<f32>(0.0, 0.0, 0.0, 1.0);`,od=`// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)\r
const OFFSETS : array<vec2<i32>, 8> = array<vec2<i32>, 8>(\r
  vec2<i32>(0,  1),  // 0: Up\r
  vec2<i32>(1,  1),  // 1: Up-Right\r
  vec2<i32>(1,  0),  // 2: Right\r
  vec2<i32>(1, -1),  // 3: Right-Down\r
  vec2<i32>(0, -1),  // 4: Down\r
  vec2<i32>(-1,-1),  // 5: Down-Left\r
  vec2<i32>(-1, 0),  // 6: Left\r
  vec2<i32>(-1, 1)   // 7: Left-Up\r
);\r
\r
// Basic neighbor (signed coords). The caller should handle bounds.\r
// Safe neighbor coord: clamps into [0, size-1]\r
fn neighborCoord(coord: vec2<i32>, index: u32) -> vec2<i32> {\r
  let idx = ((index % 8) + 8) % 8;  // normalize to 0..7\r
  let c   = vec2<i32>(coord);\r
  let n   = c + OFFSETS[idx];\r
  return n;\r
}\r
\r
fn getFurtureCellFAmount(coord: vec2<u32>) -> f32\r
{\r
	let cellValue = cellFAmount(coord);\r
	let cellH = cellHeight(coord);\r
	var futureCellValue = cellValue;\r
	let maxCellValue : f32 = f32(uTerrain.maxCellValue) * 2.0;\r
	\r
	futureCellValue += getFlowChange(coord);\r
	//futureCellValue += GetInteractionChange(coord.xy);\r
	//futureCellValue += GetEmissionChange(coord.xy);\r
	\r
    \r
	// futureCellValue = clamp(futureCellValue, 0, uTerrain.maxCellValue - cellH);\r
	futureCellValue = clamp(futureCellValue, -maxCellValue + cellH, maxCellValue - cellH);\r
	\r
	return futureCellValue;\r
\r
}\r
\r
fn highestNeighborIndex(coord: vec2<i32>) -> u32\r
{\r
	var index : u32 = 0;\r
	var nCoord = vec2<i32>(0, 0);\r
	var nValue : f32 = -1.0;\r
	var maxValue : f32 = -1.0;\r
	var j : u32 = 0;\r
	\r
	let cell = currentCells[idx(u32(coord.x), u32(coord.y))];\r
\r
	// using an odd multiplier (3, 5, or 7 all work). 3 is a good default.\r
	let cycleIndex : u32 = (uView.simIndex * 3u) % 8u;\r
\r
	// keep your existing per-cell offset\r
	let baseOffset : u32 = u32(cell.randDir) % 8u;\r
\r
	// final start index\r
	let cIndex     : u32 = (cycleIndex + baseOffset) % 8u;\r
	\r
	for (var i : u32 = 0; i < 8; i += 1)\r
	{\r
		j = (i + cIndex) % 8;\r
		nCoord = neighborCoord(coord, j);\r
		\r
		if (!inBoundsV2I(nCoord)) { continue; }\r
		\r
		nValue = roundedCombinedCellHeight(vec2<u32>(nCoord)); //CellValue(nCoord);\r
		\r
		if (index < 0 || nValue > maxValue || i == 0)\r
		{\r
			index = j;\r
			maxValue = nValue;\r
		}\r
	}\r
	\r
	return index;\r
}\r
\r
fn lowestNeighborIndex(coord: vec2<i32>) -> u32\r
{\r
	var index : u32 = 0;\r
	var nCoord = vec2<i32>(0, 0);\r
	var nValue : f32 = -1.0;\r
	var minValue : f32 = -1.0;\r
	var j : u32 = 0;\r
	\r
	let cell = currentCells[idx(u32(coord.x), u32(coord.y))];\r
\r
	// using an odd multiplier (3, 5, or 7 all work). 3 is a good default.\r
	let cycleIndex : u32 = (uView.simIndex * 3u) % 8u;\r
\r
	// keep your existing per-cell offset\r
	let baseOffset : u32 = u32(cell.randDir) % 8u;\r
\r
	// final start index\r
	let cIndex     : u32 = (cycleIndex + baseOffset) % 8u;\r
	\r
	for (var i : u32 = 0; i < 8; i += 1)\r
	{\r
		j = (i + cIndex) % 8;\r
		nCoord = neighborCoord(coord, j);\r
		\r
		if (!inBoundsV2I(nCoord)) { continue; }\r
		\r
		nValue = roundedCombinedCellHeight(vec2<u32>(nCoord)); //CellValue(nCoord);\r
		\r
		if (index < 0 || nValue < minValue || i == 0)\r
		{\r
			index = j;\r
			minValue = nValue;\r
		}\r
	}\r
	\r
	return index;\r
}\r
\r
fn directNeighorCount(coord : vec2<i32>) -> u32\r
{\r
	var count : u32 = 0;\r
	var cellValue = cellFAmount(vec2<u32>(coord));\r
	var isAnti : bool = cellValue < 0;\r
	var nCoord : vec2<i32> = vec2<i32>(0, 0);\r
	var nValue : f32 = 0.0;\r
	\r
	for (var i : u32 = 0; i < 8; i += 1)\r
	{\r
		nCoord = neighborCoord(coord, i);\r
		\r
		if (!inBoundsV2I(nCoord)) { continue; }\r
				\r
		nValue = cellFAmount(vec2<u32>(nCoord));\r
		\r
		if(nValue == 0) { continue; }\r
		\r
		if ((cellValue != 0) && (isAnti != (nValue < 0))) { continue; }\r
		\r
		count++;\r
	}\r
	\r
	return count;\r
}\r
\r
fn getFlowChange(coord: vec2<u32>) -> f32\r
{\r
	// if (cellMovementMultiplier <= 0)\r
	// {\r
	// 	return 0;\r
	// }\r
	\r
	var currentCoord = vec2<i32>(coord);\r
    let cellValue = cellFAmount(coord);\r
	let cellH = roundedCellHeight(coord);\r
	let combinedCellValue = roundedCombinedCellHeight(coord);\r
	var futureCellValue = cellValue;\r
	\r
	var nCoord = vec2<i32>(0, 0);\r
	var nValue : f32 = 0.0;\r
    var nCombinedValue : f32 = 0.0;\r
    var nHeight : f32 = 0.0;\r
	var oppositeIndex : u32 = 0;\r
	var lowestIndex: u32 = 0;\r
    var highestIndex: u32 = 0;\r
		\r
	var change : f32 = 0.0;\r
	\r
	var checkNeighors : bool = false;	\r
	var requiredNeighbors : u32 = 0;\r
	var requiredRadius :u32 = 1;\r
	\r
	var isAnti : bool = cellValue < 0;\r
	var nIsAnti : bool = false;\r
	\r
	var clampToOne : bool = false;\r
	var movementDivsor : f32 = 2.0;\r
	\r
	var minSpreadAmount : f32 = 1.0;\r
	var minMoveAmount : f32 = 0.1;\r
	var cellMovementMultiplier : f32 = 1.0;\r
\r
    var maxCellValue = uTerrain.maxCellValue * 2;\r
	\r
	//Should this cell increase due to flow from a neighbor\r
	if (combinedCellValue < maxCellValue)\r
	{\r
		//Get this cells highest neighbor\r
		highestIndex = highestNeighborIndex(currentCoord);\r
		nCoord = neighborCoord(currentCoord, highestIndex);\r
		\r
		//If neighbor is in bounds\r
		if (inBoundsV2I(nCoord) && ((requiredNeighbors <= 0) || (directNeighorCount(nCoord) >= requiredNeighbors)))\r
		{\r
			nValue = cellFAmount(vec2<u32>(nCoord));\r
			nCombinedValue = roundedCombinedCellHeight(vec2<u32>(nCoord));\r
			nIsAnti = nValue < 0;						\r
			\r
			//If the neigbor has more than the min amount and the combined height of the neighbor cell is higher\r
			if (((cellValue != 0) || (abs(nValue) > minSpreadAmount)) && (abs(nValue) > minMoveAmount) && (nCombinedValue >= combinedCellValue))\r
			{\r
				//Get the lowest index of the neighbor\r
				oppositeIndex = (highestIndex + 4) % 8;\r
				lowestIndex = lowestNeighborIndex(nCoord);\r
				\r
				//if the lowestIndex equals the opposite, meaning that the two cells are paired\r
				if (lowestIndex == oppositeIndex)\r
				{\r
					let m = maxCellValue - combinedCellValue;\r
					var n = ((nCombinedValue - combinedCellValue) / movementDivsor * cellMovementMultiplier);\r
					n = min(abs(nValue), n);\r
					//increase cell by up to half of the difference in amounts\r
					let lower = f32(select(0, 1, clampToOne));\r
					let sign  = f32(select(1, -1, nIsAnti));\r
					change += clamp(n, lower, m) * sign;\r
				}\r
\r
			}\r
\r
		}\r
\r
	}\r
\r
	//Should this cell decrease due to flow to a neighbor\r
	if (abs(cellValue) > minMoveAmount && (requiredNeighbors <= 0 || directNeighorCount(currentCoord) >= requiredNeighbors))\r
	{\r
		//Get this cells lowest neighbor\r
		lowestIndex = lowestNeighborIndex(currentCoord);\r
		nCoord = neighborCoord(currentCoord, lowestIndex);\r
		\r
		//If neighbor is in bounds\r
		if (inBoundsV2I(nCoord))\r
		{\r
			nValue = cellFAmount(vec2<u32>(nCoord));\r
			nCombinedValue = roundedCombinedCellHeight(vec2<u32>(nCoord));\r
			\r
			//If the neigbor has less than the max amount and the combined height of the neighbor cell is lower\r
			if ((nValue != 0 || abs(cellValue) > minSpreadAmount) && nCombinedValue < maxCellValue && nCombinedValue <= combinedCellValue)\r
			{\r
				//Get the highest index of the neighbor\r
				oppositeIndex = (lowestIndex + 4) % 8;\r
				highestIndex = highestNeighborIndex(nCoord);\r
				nHeight = cellHeight(vec2<u32>(nCoord));\r
				\r
				//if the highestIndex equals the opposite, meaning that the two cells are paired\r
				if (highestIndex == oppositeIndex)\r
				{\r
					//Get the remaining space in the cell\r
					let m = maxCellValue - nCombinedValue;\r
					//Get half of the difference in the cells\r
					var n = ((combinedCellValue - nCombinedValue) / movementDivsor * cellMovementMultiplier);\r
					//If the half is bigger than the value clamp\r
					n = min(abs(cellValue), n);\r
					\r
					//decrease cell by up to half of the difference in amounts\r
					let lower = f32(select(0, 1, clampToOne));\r
					let sign  = f32(select(1, -1, isAnti));\r
					change -= clamp(n, lower, m) * sign;\r
					//change--;\r
				}\r
\r
			}\r
\r
		}\r
\r
	}\r
	\r
	return change;\r
}`,sd=`// ---------- Helpers ----------\r
fn idx(x : u32, y : u32) -> u32 {\r
    return y * uView.size.x + x;\r
}\r
\r
fn distanceSqrd(p: vec2<u32>, c: vec2<u32>) -> f32\r
{\r
  let d = vec2<f32>(f32(i32(p.x) - i32(c.x)), f32(i32(p.y) - i32(c.y)));\r
  return dot(d, d);\r
}\r
\r
fn isCloseToIncrement(x: f32, step: f32, epsilon: f32) -> bool {\r
    // Scale x by step size\r
    let scaled = x / step;\r
\r
    // Round to nearest integer multiple\r
    let nearest = round(scaled);\r
\r
    // Difference between x and the nearest multiple\r
    let diff = abs(x - nearest * step);\r
\r
    return diff < epsilon;\r
}\r
\r
fn inside_circle(p: vec2<u32>, c: vec2<u32>, radius: f32) -> bool {\r
    return distanceSqrd(p, c) <= radius * radius;\r
}\r
\r
fn lerp4(a: vec4f, b: vec4f, t: f32) -> vec4f {\r
    return a * (1.0 - t) + b * t;\r
}\r
\r
fn roundToStep(value: f32, step: f32) -> f32 {\r
    // Divide by step, round to nearest integer, multiply back\r
    return round(value / step) * step;\r
}\r
\r
fn inBounds(x:u32, y:u32) -> bool \r
{\r
  return (x < uView.size.x) && (y < uView.size.y);\r
}\r
\r
fn inBoundsV2U(coord: vec2<u32>) -> bool \r
{\r
  return (coord.x < uView.size.x) && (coord.y < uView.size.y);\r
}\r
\r
fn inBoundsV2I(coord: vec2<i32>) -> bool \r
{\r
  return (coord.x < i32(uView.size.x)) && (coord.y < i32(uView.size.y)) && (coord.x >= 0i) && (coord.y >= 0i);\r
}\r
\r
fn clampCoord(coord: vec2<u32>) -> vec2<u32> {\r
  let cx = clamp(coord.x, 0u, u32(uView.size.x) - 1u);\r
  let cy = clamp(coord.y, 0u, u32(uView.size.y) - 1u);\r
  return vec2<u32>(u32(cx), u32(cy));\r
}\r
\r
// visibleRect = (x0, y0, x1, y1) in canvas coords; x1,y1 are EXCLUSIVE\r
fn isVisible(coord: vec2<u32>, expand: i32) -> bool {\r
  let w: u32 = uView.size.x;\r
  let h: u32 = uView.size.y;\r
\r
  let vr = uInput.visibleRect; // vec4<u32> (x0,y0,x1,y1)\r
\r
  // expand/shrink in signed space, then clamp to [0, size]\r
  let x0: u32 = u32(clamp(i32(vr.x) - expand, 0, i32(w)));\r
  let y0: u32 = u32(clamp(i32(vr.y) - expand, 0, i32(h)));\r
  let x1: u32 = u32(clamp(i32(vr.z) + expand, 0, i32(w)));\r
  let y1: u32 = u32(clamp(i32(vr.w) + expand, 0, i32(h)));\r
\r
  return (coord.x >= x0 && coord.x < x1) &&\r
         (coord.y >= y0 && coord.y < y1);\r
}\r
\r
fn isDirectNeighbor(a: vec2<u32>, b: vec2<u32>) -> bool {\r
    let dx = i32(a.x) - i32(b.x);\r
    let dy = i32(a.y) - i32(b.y);\r
    let adx = abs(dx);\r
    let ady = abs(dy);\r
\r
    return (a.x == b.x && a.y == b.y) || ((adx + ady) == 1);\r
}\r
\r
fn isNeighbor(a: vec2<u32>, b: vec2<u32>) -> bool {\r
    let dx = abs(i32(a.x) - i32(b.x));\r
    let dy = abs(i32(a.y) - i32(b.y));\r
\r
    // Exclude self (dx=0 && dy=0)\r
    return (dx <= 1 && dy <= 1) && !(dx == 0 && dy == 0);\r
}\r
\r
fn getColorStepHeight() -> f32\r
{\r
  if(uTerrain.colorSteps <= 0u) { return 0.0; }\r
\r
  let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));\r
  let steps = max(1, i32(uTerrain.colorSteps)); // avoid div by zero\r
  return f32(maxHeight) / f32(steps);\r
}\r
\r
fn roundToColorSteps(value: f32) -> f32\r
{\r
  if(uTerrain.colorSteps <= 0u) { return value; }\r
\r
  let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));\r
  let steps = max(1, i32(uTerrain.colorSteps)); // avoid div by zero\r
  return roundToStep(value, f32(maxHeight) / f32(steps));\r
}\r
\r
fn cellHeight(coord: vec2<u32>) -> f32 {\r
  let cCoord = clampCoord(coord);\r
  return currentCells[idx(cCoord.x, cCoord.y)].height;\r
}\r
\r
fn roundedCellHeight(coord: vec2<u32>) -> f32 {\r
  let cCoord = clampCoord(coord);\r
  let cell = currentCells[idx(cCoord.x, cCoord.y)];\r
\r
  let spriteInfo = unpackSpriteInfo(cell.spriteInfo);\r
  if (spriteInfo.height > 0)\r
  {\r
    let spriteHeight = f32(spriteInfo.height) * f32(uTerrain.maxCellValue) / 5.0;\r
    return roundToColorSteps(cell.height + spriteHeight);\r
  }\r
  \r
  return roundToColorSteps(cellHeight(coord));\r
}\r
\r
fn cellFAmount(coord: vec2<u32>) -> f32 {\r
  let cCoord = clampCoord(coord);\r
  return currentCells[idx(cCoord.x, cCoord.y)].fAmount;\r
}\r
\r
fn roundedCellFAmount(coord: vec2<u32>) -> f32 {\r
  return roundToColorSteps(cellFAmount(coord));\r
}\r
\r
fn roundedCombinedCellHeight(coord: vec2<u32>) -> f32 {\r
  return roundedCellHeight(coord) + abs(cellFAmount(coord));\r
}\r
\r
fn fHeight(coord: vec2<u32>) -> f32 {\r
  return abs(roundedCellFAmount(coord)) + roundedCellHeight(coord);\r
}\r
\r
fn avgFHeight(coord: vec2<u32>) -> f32 {\r
  let x = coord.x;\r
  let y = coord.y;\r
\r
  let currentHeight = abs(cellFAmount(coord)) + roundedCellHeight(coord);\r
\r
  if(!(currentHeight < 0 || currentHeight > 0)) { return 0.0; }\r
\r
  // get surrounding heights\r
  let nVal0 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal1 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal2 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal3 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal4 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal5 = abs(cellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal6 = abs(cellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal7 = abs(cellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
\r
  var count : f32 = 1.0;\r
  if(nVal0 > 0 || nVal0 < 0) { count += 1.0; }\r
  if(nVal1 > 0 || nVal1 < 0) { count += 1.0; }\r
  if(nVal2 > 0 || nVal2 < 0) { count += 1.0; }\r
  if(nVal3 > 0 || nVal3 < 0) { count += 1.0; }\r
  if(nVal4 > 0 || nVal4 < 0) { count += 1.0; }\r
  if(nVal5 > 0 || nVal5 < 0) { count += 1.0; }\r
  if(nVal6 > 0 || nVal6 < 0) { count += 1.0; }\r
  if(nVal7 > 0 || nVal7 < 0) { count += 1.0; }\r
\r
  return roundToColorSteps((nVal0 + nVal1 + nVal2 + nVal3 + nVal4 + nVal5 + nVal6 + nVal7 + currentHeight) / count);\r
}\r
\r
fn isFluidBoundary(coord: vec2<u32>, epsilon : f32) -> bool\r
{\r
  var fAmount = cellFAmount(coord);\r
  var nAmount = 0.0;\r
\r
  if(abs(fAmount) > 0.0)\r
  {\r
    nAmount = cellFAmount(vec2<u32>(coord.x - 1, coord.y));\r
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }\r
\r
    nAmount = cellFAmount(vec2<u32>(coord.x + 1, coord.y));\r
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }\r
\r
    nAmount = cellFAmount(vec2<u32>(coord.x, coord.y - 1));\r
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }\r
\r
    nAmount = cellFAmount(vec2<u32>(coord.x, coord.y + 1));\r
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }\r
  }\r
  else { return false; }\r
\r
  let h = fHeight(coord);\r
  var count = 0.0;\r
\r
  if(abs(h - fHeight(vec2<u32>(coord.x - 1, coord.y))) > epsilon) { count += 1.0; }\r
  if(abs(h - fHeight(vec2<u32>(coord.x + 1, coord.y))) > epsilon) { count += 1.0; }\r
  if(abs(h - fHeight(vec2<u32>(coord.x, coord.y - 1))) > epsilon) { count += 1.0; }\r
  if(abs(h - fHeight(vec2<u32>(coord.x, coord.y + 1))) > epsilon) { count += 1.0; }\r
\r
  // Diagonals\r
  if(abs(h - fHeight(vec2<u32>(coord.x - 1, coord.y - 1))) > epsilon) { count += 1.0; }\r
  if(abs(h - fHeight(vec2<u32>(coord.x + 1, coord.y + 1))) > epsilon) { count += 1.0; }\r
  if(abs(h - fHeight(vec2<u32>(coord.x + 1, coord.y - 1))) > epsilon) { count += 1.0; }\r
  if(abs(h - fHeight(vec2<u32>(coord.x - 1, coord.y + 1))) > epsilon) { count += 1.0; }\r
\r
\r
  if(count > 2.0) { return true; }\r
\r
  return false;\r
}\r
\r
fn colorLerp(a: vec4f, b: vec4f, t: f32) -> vec4f \r
{\r
  return mix(a, b, clamp(t, 0.0, 1.0));\r
}\r
\r
fn move_towards3(a: vec3<f32>, b: vec3<f32>, step: f32) -> vec3<f32> {\r
    let delta = b - a;\r
    let d = length(delta);\r
    if (d < 1e-6) { return b; }\r
    let t = clamp(step / d, 0.0, 1.0);\r
    return mix(a, b, t);\r
}\r
\r
// ----------- Sobel normal (8 taps, smoother) -----------\r
fn surfaceNormalSobel(coord: vec2<u32>) -> vec3<f32> {\r
  let x = u32(coord.x);\r
  let y = u32(coord.y);\r
\r
  let hL  = roundedCellHeight(vec2<u32>(x - 1, y));\r
  let hR  = roundedCellHeight(vec2<u32>(x + 1, y));\r
  let hD  = roundedCellHeight(vec2<u32>(x, y - 1));\r
  let hU  = roundedCellHeight(vec2<u32>(x, y + 1));\r
  let hLU = roundedCellHeight(vec2<u32>(x - 1, y + 1));\r
  let hLD = roundedCellHeight(vec2<u32>(x - 1, y - 1));\r
  let hRU = roundedCellHeight(vec2<u32>(x + 1, y + 1));\r
  let hRD = roundedCellHeight(vec2<u32>(x + 1, y - 1));\r
\r
  // Sobel kernels\r
  let gx = (hLD + 2.0 * hL + hLU) - (hRD + 2.0 * hR + hRU);\r
  let gz = (hRU + 2.0 * hU + hLU) - (hRD + 2.0 * hD + hLD);\r
\r
  // Scale to world units (kernel sum factor = 8)\r
  let inv8dx = uTerrain.maxCellValue / (8.0 * 1.0);\r
  let inv8dz = inv8dx;\r
\r
  let dHx = gx * inv8dx;\r
  let dHz = gz * inv8dz;\r
\r
  return normalize(vec3(-dHx, 1.0, -dHz));\r
}\r
\r
// Sample gradient array (terrainColorsBuf.items[0..N-1]) at t∈[0,1]\r
fn terrainColorLerp(t: f32) -> vec4f {\r
  let n = uTerrain.numberOfTerrainColors;\r
  if (n == 0u) { return vec4f(0.0, 0.0, 0.0, 1.0); }\r
  if (n == 1u) { return terrainColors[0u]; }\r
\r
  // map t to [0, n-1]\r
  let pos   = clamp(t, 0.0, 1.0) * f32(n - 1u);\r
  let i0    = u32(floor(pos));\r
  let i1    = u32(min(i0 + 1u, n - 1u));\r
  let local = fract(pos);\r
\r
  return mix(terrainColors[i0], terrainColors[i1], local);\r
}\r
\r
// ---------- Port of getTerrainColor ----------\r
fn getTerrainColor(coord: vec2<u32>) -> vec4f {\r
  var color = vec4f(0.0, 0.0, 0.0, 0.0); // CLEAR\r
  let cell = currentCells[idx(coord.x, coord.y)];\r
\r
  let h = roundedCellHeight(coord);\r
  if (h >= 0.0) {\r
    let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));\r
    color = terrainColorLerp(h / f32(maxHeight));\r
\r
    color = lerp4(color, vec4(0.0, 0.0, 0.0, 1.0), cell.randDir / 8.0 * 0.1);\r
  }\r
\r
  return color;\r
}\r
\r
fn distToGround(pos : vec3<f32>) -> f32\r
{\r
  let x = u32(round(pos.x));\r
  let y = u32(round(pos.z));\r
  let height = roundedCellHeight(vec2<u32>(x,y));\r
  let dist = f32(pos.y - height);\r
\r
  return dist;\r
}\r
\r
fn over_rgba(base: vec4<f32>, top: vec4<f32>) -> vec4<f32> {\r
  let a  = clamp(top.a, 0.0, 1.0);\r
  let oa = a + base.a * (1.0 - a);\r
  let rgb = (top.rgb * a + base.rgb * base.a * (1.0 - a)) / max(oa, 1e-6);\r
  return vec4<f32>(rgb, oa);\r
}\r
\r
fn slice_count(coord: vec2<u32>) -> u32\r
{\r
  if (coord.x >= 400u && coord.x < 402u && coord.y >= 280u && coord.y < 282u)\r
  {\r
    return 2u;\r
  }\r
  return 0u;\r
}\r
\r
fn slice_min(coord: vec2<u32>, idx: u32) -> f32\r
{\r
  if (coord.x >= 400u && coord.x < 402u && coord.y >= 280u && coord.y < 282u)\r
  {\r
    let gap = 3.0;\r
    let width = 3.0;\r
    if(idx == 0u)\r
    {\r
      return roundedCellHeight(coord) + gap;\r
    }\r
    else if(idx == 1u)\r
    {\r
      return roundedCellHeight(coord) + gap * 2.0 + width;\r
    }\r
  }\r
\r
  return 0.0;\r
}\r
\r
fn slice_max(coord: vec2<u32>, idx: u32) -> f32\r
{\r
  if (coord.x >= 400u && coord.x < 402u && coord.y >= 280u && coord.y < 282u)\r
  {\r
    let gap = 3.0;\r
    let width = 3.0;\r
    if(idx == 0u)\r
    {\r
      return roundedCellHeight(coord) + gap + width;\r
    }\r
    else if(idx == 1u)\r
    {\r
      return roundedCellHeight(coord) + gap * 2.0 + width * 2.0;\r
    }\r
  }\r
\r
  return roundedCellHeight(coord);\r
}\r
\r
fn inShadowSlices(coord : vec2<u32>, sunPosition : vec3<f32>) -> bool\r
{\r
  var targetHeight = roundedCellHeight(coord);\r
  targetHeight = max(50.0, targetHeight);\r
\r
  let rayTarget = vec3<f32>(f32(coord.x), targetHeight, f32(coord.y));\r
  var currentPos = sunPosition;\r
\r
  let accuracy = f32(1.0);\r
  let EPS = 1e-3;\r
\r
  var passes = 0;\r
  while (passes < 1000) {\r
    passes++;\r
\r
    // --- done? (avoid sqrt unless needed)\r
    let toT = currentPos - rayTarget;\r
    let toT2 = dot(toT, toT);\r
    if (toT2 < 1e-8) {\r
      return false;\r
    }\r
\r
    // --- terrain hit (your existing SDF/height test)\r
    let distG = distToGround(currentPos);\r
    if (distG <= -EPS) {\r
      return true;\r
    }\r
\r
    // --- OVERHANG test: check vertical slices in this XZ cell\r
    //     If current Y lies within any [z0, z1], we are inside shadow.\r
    //     (Assumes slices do NOT include the terrain interval.)\r
    let ix = u32(clamp(floor(currentPos.x), 0.0, f32(uView.size.x - 1u)));\r
    let iz = u32(clamp(floor(currentPos.z), 0.0, f32(uView.size.y - 1u)));\r
    let cCell = vec2<u32>(ix, iz);\r
\r
    let nSlices = slice_count(cCell);\r
    var hitSlice = false;\r
    for (var s: u32 = 0u; s < nSlices; s = s + 1u) {\r
      let z0 = slice_min(cCell, s);\r
      let z1 = slice_max(cCell, s);\r
      // inclusive with small epsilon to be robust\r
      if (currentPos.y >= z0 - EPS && currentPos.y <= z1 + EPS) {\r
        hitSlice = true;\r
        break;\r
      }\r
    }\r
    if (hitSlice) {\r
      return true;\r
    }\r
\r
    // --- Adaptive step (as before), but avoid skipping thin slices:\r
    let coarse = clamp(distG * 0.8, 0.5, uTerrain.maxCellValue * 0.2);\r
    let fine   = clamp(distG / accuracy, 0.5, 2.0);\r
    var moveAmount = select(coarse, fine, distG > uTerrain.maxCellValue * 0.02);\r
\r
    // If this column has overhangs, cap step so we don't leap past them\r
    if (nSlices > 0u) {\r
      // Tune this cap to your vertical resolution; 0.75..1.0 cell is a good start.\r
      moveAmount = min(moveAmount, 1.0);\r
    }\r
\r
    // Never overshoot the target\r
    let toTargetLen = sqrt(toT2);\r
    moveAmount = min(moveAmount, toTargetLen);\r
\r
    // March toward target\r
    currentPos = move_towards3(currentPos, rayTarget, moveAmount);\r
  }\r
  return false;\r
}\r
\r
fn inShadow(coord : vec2<u32>, sunPosition : vec3<f32>) -> bool\r
{\r
  //return inShadowSlices(coord, sunPosition);\r
\r
  var targetHeight = roundedCellHeight(coord);\r
  targetHeight = max(50.0, targetHeight);\r
\r
  let rayTarget = vec3<f32>(f32(coord.x), targetHeight, f32(coord.y));\r
  var currentPos = sunPosition;\r
\r
  // accuracy stays high, but steps adapt to distance-to-ground\r
  let accuracy = f32(1.0);\r
\r
  var passes = 0;\r
  while (passes < 1000) {\r
    passes++;\r
\r
    // squared distance check (avoid sqrt each loop)\r
    let toT = currentPos - rayTarget;\r
    let toT2 = dot(toT, toT);\r
    if (toT2 < 1e-8) {        // (~1e-4^2); tune as needed\r
      return false;\r
    }\r
\r
    let distG = distToGround(currentPos);\r
    if (distG <= -1e-3) {\r
      return true;\r
    }\r
\r
\r
    // --- Adaptive step: coarse when far from ground, fine near ground ---\r
    // Coarse branch: larger/faster steps when well above ground\r
    let coarse = clamp(distG * 0.8, 0.5, uTerrain.maxCellValue * 0.2);\r
    // Fine branch: smaller/safer steps near ground to prevent gaps\r
    let fine = clamp(distG / accuracy, 0.5, 2.0);\r
    var moveAmount = select(coarse, fine, distG > uTerrain.maxCellValue * 0.02);\r
\r
    // Never overshoot the target\r
    let toTargetLen = sqrt(toT2);        // one sqrt only when needed\r
    moveAmount = min(moveAmount, toTargetLen);\r
\r
    let nextPosition = move_towards3(currentPos, rayTarget, moveAmount);\r
    currentPos = nextPosition;\r
  }\r
  return false;\r
}\r
\r
\r
// Build one "shadow layer" that combines tinting + shading.\r
// Inputs:\r
//   shadowRgb  - the shadow/tint color (e.g., black or bluish tint)\r
//   s          - shadow strength in [0,1] (0 if not in shadow, else e.g. 0.5)\r
//   shade      - lambert-ish term in [0,1] (1=no darkening, 0=black)\r
// Output: straight-alpha color to place OVER the base with normal alpha.\r
fn makeCombinedShadowLayer(shadowRgb: vec3<f32>, s: f32, shade: f32) -> vec4<f32> \r
{\r
  let bs = clamp(s, 0.0, 1.0);\r
  let bm = clamp(shade, 0.0, 1.0);\r
\r
  // Combined alpha that reproduces: shade * mix(base, shadowRgb, S)\r
  let a = 1.0 - bm * (1.0 - bs);\r
\r
  if (a <= 1e-6) {\r
    return vec4<f32>(0.0, 0.0, 0.0, 0.0); // no effect\r
  }\r
\r
  // Top RGB so that mix(base, topRgb, a) == shade * mix(base, shadowRgb, S)\r
  let topRgb = (bm * bs / a) * shadowRgb;\r
  return vec4<f32>(topRgb, a);\r
}\r
\r
// Gets a highlight or shade color based on terrain height\r
fn getTerrainOutlineColor(coord : vec2<u32>, lightDir: vec3<f32>, shadeColor: vec4<f32>, highlightColor: vec4<f32>, inShadow: bool) -> vec4<f32> \r
{\r
  \r
  let x = coord.x;\r
  let y = coord.y;\r
\r
  let currentHeight = roundedCellHeight(coord);\r
\r
  // get surrounding heights\r
  let nVal0 = roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal1 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));\r
  let nVal2 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));\r
  let nVal3 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));\r
  let nVal4 = roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));\r
  let nVal5 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));\r
  let nVal6 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));\r
  let nVal7 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));\r
\r
  var normalOutline = vec4f(0.0, 0.0, 0.0, 0.0);\r
\r
  // axis feather width in direction space (tweak 0.08..0.2)\r
  let k = 30.0;\r
\r
  // weights that go to 1 near the seam (x≈0 or z≈0)\r
  let sx = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.x));\r
  let sz = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.z));\r
\r
  // --- compute your four triplet results exactly as before ---\r
  let maxXp = max(max(nVal2, nVal1), nVal3);\r
  let minXp = min(min(nVal2, nVal1), nVal3);\r
  let maxXn = max(max(nVal6, nVal7), nVal5);\r
  let minXn = min(min(nVal6, nVal7), nVal5);\r
  let maxZp = max(max(nVal0, nVal7), nVal1);\r
  let minZp = min(min(nVal0, nVal7), nVal1);\r
  let maxZn = max(max(nVal4, nVal5), nVal3);\r
  let minZn = min(min(nVal4, nVal5), nVal3);\r
\r
  // base directional weights (no branching)\r
  var wxp = max(lightDir.x, 0.0);\r
  var wxn = max(-lightDir.x, 0.0);\r
  var wzp = max(lightDir.z, 0.0);\r
  var wzn = max(-lightDir.z, 0.0);\r
\r
  // add a tiny floor so weights never hit exact 0 at the seam\r
  let epsW = 1e-3;\r
  wxp += epsW; wxn += epsW; wzp += epsW; wzn += epsW;\r
\r
  // normalize\r
  let wsum = wxp + wxn + wzp + wzn;\r
  let WXp = wxp / wsum;\r
  let WXn = wxn / wsum;\r
  let WZp = wzp / wsum;\r
  let WZn = wzn / wsum;\r
\r
  // pre-blend (no seam)\r
  var blendedMax = WXp*maxXp + WXn*maxXn + WZp*maxZp + WZn*maxZn;\r
  var blendedMin = WXp*minXp + WXn*minXn + WZp*minZp + WZn*minZn;\r
\r
  // axis cross-fade: when near x=0, mix X+ and X−; when near z=0, mix Z+ and Z−\r
  let maxX_axis = mix(maxXp, maxXn, 0.5 + 0.5*sign(-lightDir.x)); // equal when |x| small\r
  let minX_axis = mix(minXp, minXn, 0.5 + 0.5*sign(-lightDir.x));\r
  let maxZ_axis = mix(maxZp, maxZn, 0.5 + 0.5*sign(-lightDir.z));\r
  let minZ_axis = mix(minZp, minZn, 0.5 + 0.5*sign(-lightDir.z));\r
\r
  // stronger replacement only *near* axes\r
  blendedMax = mix(blendedMax, 0.5*(maxX_axis + maxZ_axis), max(sx, sz));\r
  blendedMin = mix(blendedMin, 0.5*(minX_axis + minZ_axis), max(sx, sz));\r
\r
  let E = 1e-4;  // tiny dead zone to avoid flicker on flats\r
  if (blendedMax > currentHeight + E) \r
  {\r
      normalOutline = shadeColor;\r
  } \r
  // Only apply highlight when not in shadow\r
  else if (!inShadow && blendedMin < currentHeight - E) \r
  {\r
      normalOutline = highlightColor;\r
  }\r
\r
  return normalOutline;\r
}\r
\r
// Gets a highlight or shade color based on terrain height\r
fn getFluidOutlineColor(coord : vec2<u32>, lightDir: vec3<f32>, shadeColor: vec4<f32>, highlightColor: vec4<f32>, inShadow: bool) -> vec4<f32> \r
{\r
  \r
  let x = coord.x;\r
  let y = coord.y;\r
\r
  var normalOutline = vec4f(0.0, 0.0, 0.0, 0.0);\r
\r
  let currentHeight = fHeight(coord);\r
\r
  // get surrounding heights\r
  let nVal0 = fHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  let nVal1 = fHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));\r
  let nVal2 = fHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));\r
  let nVal3 = fHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));\r
  let nVal4 = fHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));\r
  let nVal5 = fHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));\r
  let nVal6 = fHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));\r
  let nVal7 = fHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));\r
\r
  // let nVal0 = avgFHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));\r
  // let nVal1 = avgFHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));\r
  // let nVal2 = avgFHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));\r
  // let nVal3 = avgFHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));\r
  // let nVal4 = avgFHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));\r
  // let nVal5 = avgFHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));\r
  // let nVal6 = avgFHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));\r
  // let nVal7 = avgFHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));\r
\r
  // let diffThreshold : f32 = 1.5;\r
  // if(\r
  //     (abs(nVal0 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal1 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal2 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal3 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal4 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal5 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal6 - currentHeight) < diffThreshold) &&\r
  //     (abs(nVal7 - currentHeight) < diffThreshold)\r
  //   )\r
  //   {\r
  //     return normalOutline;\r
  //   }\r
\r
  \r
\r
  // axis feather width in direction space (tweak 0.08..0.2)\r
  let k = 30.0;\r
\r
  // weights that go to 1 near the seam (x≈0 or z≈0)\r
  let sx = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.x));\r
  let sz = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.z));\r
\r
  // --- compute your four triplet results exactly as before ---\r
  let maxXp = max(max(nVal2, nVal1), nVal3);\r
  let minXp = min(min(nVal2, nVal1), nVal3);\r
  let maxXn = max(max(nVal6, nVal7), nVal5);\r
  let minXn = min(min(nVal6, nVal7), nVal5);\r
  let maxZp = max(max(nVal0, nVal7), nVal1);\r
  let minZp = min(min(nVal0, nVal7), nVal1);\r
  let maxZn = max(max(nVal4, nVal5), nVal3);\r
  let minZn = min(min(nVal4, nVal5), nVal3);\r
\r
  // base directional weights (no branching)\r
  var wxp = max(lightDir.x, 0.0);\r
  var wxn = max(-lightDir.x, 0.0);\r
  var wzp = max(lightDir.z, 0.0);\r
  var wzn = max(-lightDir.z, 0.0);\r
\r
  // add a tiny floor so weights never hit exact 0 at the seam\r
  let epsW = 1e-3;\r
  wxp += epsW; wxn += epsW; wzp += epsW; wzn += epsW;\r
\r
  // normalize\r
  let wsum = wxp + wxn + wzp + wzn;\r
  let WXp = wxp / wsum;\r
  let WXn = wxn / wsum;\r
  let WZp = wzp / wsum;\r
  let WZn = wzn / wsum;\r
\r
  // pre-blend (no seam)\r
  var blendedMax = WXp*maxXp + WXn*maxXn + WZp*maxZp + WZn*maxZn;\r
  var blendedMin = WXp*minXp + WXn*minXn + WZp*minZp + WZn*minZn;\r
\r
  // axis cross-fade: when near x=0, mix X+ and X−; when near z=0, mix Z+ and Z−\r
  let maxX_axis = mix(maxXp, maxXn, 0.5 + 0.5*sign(-lightDir.x)); // equal when |x| small\r
  let minX_axis = mix(minXp, minXn, 0.5 + 0.5*sign(-lightDir.x));\r
  let maxZ_axis = mix(maxZp, maxZn, 0.5 + 0.5*sign(-lightDir.z));\r
  let minZ_axis = mix(minZp, minZn, 0.5 + 0.5*sign(-lightDir.z));\r
\r
  // stronger replacement only *near* axes\r
  blendedMax = mix(blendedMax, 0.5*(maxX_axis + maxZ_axis), max(sx, sz));\r
  blendedMin = mix(blendedMin, 0.5*(minX_axis + minZ_axis), max(sx, sz));\r
\r
  let E = 1e-4;  // tiny dead zone to avoid flicker on flats\r
  if (blendedMax > currentHeight + E) \r
  {\r
      normalOutline = shadeColor;\r
  } \r
  // Only apply highlight when not in shadow\r
  else if (!inShadow && blendedMin < currentHeight - E) \r
  {\r
      normalOutline = highlightColor;\r
  }\r
\r
  return normalOutline;\r
}`,fd=`const MAX_SPRITE_SIZE = 64 * 64;\r
\r
struct SpriteData\r
{\r
    width       : u32,\r
    height      : u32,\r
    _pad0        : u32,\r
    _pad1        : u32,\r
    colors      : array<u32, MAX_SPRITE_SIZE * 2u>\r
}\r
\r
fn getSprite(spriteIndex : u32) -> SpriteData\r
{\r
    let len = arrayLength(&sprites);\r
    return sprites[spriteIndex];\r
}\r
\r
fn getSpriteColor(spriteIndex: u32, pixelCoord : vec2<u32>) -> u32\r
{\r
    let sprite = getSprite(spriteIndex);\r
    return sprite.colors[pixelCoord.x + pixelCoord.y * sprite.width];\r
}\r
\r
fn getSpriteHeight(spriteIndex: u32, pixelCoord : vec2<u32>) -> u32\r
{\r
    let sprite = getSprite(spriteIndex);\r
    let rawHeight = sprite.colors[MAX_SPRITE_SIZE + pixelCoord.x + pixelCoord.y * sprite.width];\r
    return rawHeight;\r
}\r
\r
fn setSprite(spriteIndex: u32, coord: vec2<u32>, pixelCoord: vec2<u32>)\r
{\r
    let x = pixelCoord.x;\r
    let y = pixelCoord.y;\r
\r
    let sprite = getSprite(spriteIndex);\r
    let ps = uView.pixelScale;\r
\r
    let subSizeX = uView.size.x * ps;\r
    let subSizeY = uView.size.y * ps;\r
    let subOrigin = coord * ps;\r
\r
    var maxX = 0u; if (subOrigin.x < subSizeX) { maxX = min(sprite.width,  subSizeX - subOrigin.x); }\r
    var maxY = 0u; if (subOrigin.y < subSizeY) { maxY = min(sprite.height, subSizeY - subOrigin.y); }\r
\r
    let layer4Index = uView.size.x * uView.size.y * 4u;\r
    let outRowStride = subSizeX;\r
\r
    let color = sprite.colors[x + y * sprite.width];\r
    let sCoord = subOrigin + vec2<u32>(x, y);\r
\r
    let outIndex = layer4Index + sCoord.x + sCoord.y * outRowStride;\r
    outputTex[outIndex] = color;\r
\r
    if(x % uView.pixelScale == 0 && y % uView.pixelScale == 0)\r
    {\r
        let currentCoord = vec2<u32>(coord.x + x / uView.pixelScale, coord.y + y / uView.pixelScale);\r
        let cellID = idx(currentCoord.x, currentCoord.y);\r
        var out = currentCells[cellID];        \r
\r
        var spriteInfo = SpriteInfo();\r
        spriteInfo.subPixel = x + y * sprite.width;\r
        spriteInfo.spriteIndex = spriteIndex;\r
        spriteInfo.height = getSpriteHeight(spriteIndex, pixelCoord);\r
\r
        out.spriteInfo = packSpriteInfo(spriteInfo);\r
        currentCells[cellID] = out;\r
    }\r
}\r
\r
\r
// ---- Unpack from u32 → SpriteInfo ----\r
fn unpackSpriteInfo(packed : u32) -> SpriteInfo {\r
    let height      =  packed         & 0x3FFu;        // 10 bits\r
    let subPixel    = (packed >> 10u) & 0xFFFu;        // 12 bits\r
    let spriteIndex = (packed >> 22u) & 0x3FFu;        // 10 bits\r
    return SpriteInfo(spriteIndex, subPixel, height);\r
}\r
\r
// ---- Pack from SpriteInfo → u32 ----\r
fn packSpriteInfo(info : SpriteInfo) -> u32 {\r
    let si = info.spriteIndex & 0x3FFu;             // 10 bits\r
    let sp = info.subPixel    & 0xFFFu;             // 12 bits\r
    let h  = min(info.height, 1000u) & 0x3FFu;      // clamp to 0..1000, 10 bits\r
    return (si << 22u) | (sp << 10u) | h;\r
}`,dd=`// Uses: uView, uTerrain, uInput, outputTex\r
\r
@fragment\r
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {\r
    let pixelScale : u32 = uView.pixelScale;\r
    \r
    // 1 cell per pixel (nearest)\r
    let w = uView.size.x;\r
    let h = uView.size.y;\r
\r
    let x = u32(clamp(floor(frag_pos.x) / f32(pixelScale), 0.0, f32(w - 1u)));\r
    let y = u32(clamp(floor(frag_pos.y) / f32(pixelScale), 0.0, f32(h - 1u)));\r
\r
    let canvasX = u32(clamp(floor(frag_pos.x), 0.0, f32(w * pixelScale - 1u)));\r
    let canvasY = u32(clamp(floor(frag_pos.y), 0.0, f32(h * pixelScale - 1u)));\r
\r
    let coord = vec2(x,y);\r
    let canvasCoord = vec2(canvasX, canvasY);\r
    let black = vec4f(0.0, 0.0, 0.0, 1.0);\r
\r
    if(!inBounds(x,y)) { return black; }\r
\r
    let terrainColor = unpack4x8unorm(outputTex[idx(x,y)]);\r
    let shadowColor = unpack4x8unorm(outputTex[idx(x,y) + uView.size.x * uView.size.y]);\r
    let fluidColor = unpack4x8unorm(outputTex[idx(x,y) + uView.size.x * uView.size.y * 2]);\r
    let debugColor = unpack4x8unorm(outputTex[idx(x,y) + uView.size.x * uView.size.y * 3]);\r
\r
    let layer4Index = uView.size.x * uView.size.y * 4;\r
    var subPixelColor = unpack4x8unorm(outputTex[layer4Index + canvasX + (uView.size.x * pixelScale) * canvasY]);\r
\r
    let mouseWidth  = 2.0;\r
    let inOuter = inside_circle(coord, uInput.mousePos, uInput.mouseRadius);\r
    let inInner = inside_circle(coord, uInput.mousePos, uInput.mouseRadius - mouseWidth);\r
    \r
    let isCursorSpot = \r
        (x == uInput.mousePos.x && y == uInput.mousePos.y)     ||   // center\r
        (x == uInput.mousePos.x - 1 && y == uInput.mousePos.y) ||   // left\r
        (x == uInput.mousePos.x  + 1&& y == uInput.mousePos.y) ||   // right\r
        (x == uInput.mousePos.x && y == uInput.mousePos.y + 1) ||   // up\r
        (x == uInput.mousePos.x && y == uInput.mousePos.y - 1);     // down\r
    \r
    var cursorOutline = vec4f(0.0, 0.0, 0.0, 0.0);\r
    if ((inOuter && !inInner) || isCursorSpot) \r
    {\r
        cursorOutline = vec4f(0.0, 0.0, 0.0, 0.5);\r
    }\r
\r
    var combinedColor = vec4f(0.0, 0.0, 0.0, 0.0);\r
    combinedColor = over_rgba(combinedColor, terrainColor);\r
    combinedColor = over_rgba(combinedColor, subPixelColor);\r
    combinedColor = over_rgba(combinedColor, shadowColor);\r
    combinedColor = over_rgba(combinedColor, fluidColor);\r
    combinedColor = over_rgba(combinedColor, cursorOutline);\r
    if(uView.showDebug > 0u) { combinedColor = over_rgba(combinedColor, debugColor); }\r
\r
\r
    // if(inInner && (canvasX % pixelScale == 0 || canvasY % pixelScale == 0))\r
    // {\r
    //     combinedColor = over_rgba(combinedColor, vec4<f32>(1.0, 0.0, 0.0, 1.0));\r
    // }\r
\r
    // if(canvasX % canvasScale == 0 || canvasY % canvasScale == 0)//if(canvasX == 400u && canvasY == 400u)\r
    // {\r
    //     combinedColor = over_rgba(combinedColor, vec4<f32>(1.0, 0.0, 0.0, 1.0));\r
    // }\r
\r
    return combinedColor;\r
}`,f2=`//{colors}\r
\r
//{structs}\r
\r
//{object_def}\r
\r
//{helpers}\r
\r
//{flow_helpers}\r
\r
//{chunk_helpers}\r
\r
//{sprite_helpers}\r
\r
// Binding Group 0 - Uniforms\r
@group(0) @binding(0)  var<uniform>             uView                       : View;\r
@group(0) @binding(1)  var<uniform>             uInput                      : Input;\r
@group(0) @binding(2)  var<uniform>             uTerrain                    : TerrainParams;\r
\r
@group(0) @binding(3)  var<storage, read_write> currentCells                : array<CellData>;\r
@group(0) @binding(4)  var<storage, read_write> nextCells                   : array<CellData>;\r
\r
@group(0) @binding(5)  var<storage, read>       terrainColors               : array<vec4f>;\r
@group(0) @binding(6)  var<storage, read_write> outputTex                   : array<u32>;\r
@group(0) @binding(7)  var<storage, read_write> cursorQuery                 : CursorQuery;\r
@group(0) @binding(8)  var<storage, read_write> chunkData                   : array<ChunkData>;\r
@group(0) @binding(9)  var<storage, read>        sprites                     : array<SpriteData>;\r
\r
\r
// =====================================================\r
// ===================== RENDER ========================\r
// =====================================================\r
\r
//{vertex}\r
\r
//{fragment}\r
\r
// =====================================================\r
// ===================== COMPUTE =======================\r
// =====================================================\r
\r
//{normal_compute}\r
\r
//{terrain_render_compute}\r
\r
//{shadow_render_compute}\r
\r
//{fluid_render_compute}\r
\r
//{debug_render_compute}\r
\r
//{sprite_render_compute}\r
\r
//{step_compute}\r
\r
//{cursor_query}\r
\r
//{total_query}\r
\r
//{chunk_data_calc}`,hd=`struct View {\r
    size        : vec2<u32>, // width, height (pixels)\r
    time        : f32,       // seconds\r
    simIndex    : u32,       // [0-inf] simulation passes\r
    showDebug   : u32, // @16\r
    pixelScale  : u32\r
};\r
\r
struct Input {\r
  mousePos     : vec2<u32>, // 0..1: u32 pixels\r
  mouse0Held   : f32,       // 2: 0/1\r
  mouse1Held   : f32,       // 3: 0/1\r
  mouse2Held   : f32,       \r
  mouseRadius  : f32,       // 4\r
  // (12 bytes implicit padding here to align next member to 16B)\r
  visibleRect  : vec4<u32>, //  (x0, y0, x1, y1) in canvas coords\r
};                          // total size = 48 bytes\r
\r
struct SpriteInfo {\r
    spriteIndex : u32, // 10 bits (0..1023)\r
    subPixel    : u32, // 12 bits (e.g., 6+6 for 64x64)\r
    height      : u32, // 10 bits (0..1000 stored exactly)\r
}\r
\r
\r
struct CellData {\r
    height       : f32,       // 0..3\r
    heightNormal : vec3<f32>, // starts at 16, uses 16 bytes\r
    fAmount      : f32,       // at 28\r
    randDir      : f32,\r
    spriteInfo   : u32,\r
    // _pad0        : vec3<f32>, // starts at 32, uses 16 bytes\r
};\r
// total size = 48 bytes, 12 floats\r
\r
struct StepData\r
{\r
  height       : f32,\r
  fAmount      : f32,\r
}\r
\r
// Terrain params you had in HLSL: maxCellValue, terrainHeightMultiplier, colorSteps, numberOfTerrainColors\r
struct TerrainParams {\r
  maxCellValue            : f32,   // e.g., 100.0\r
  terrainHeightMultiplier : f32,   // scales max height\r
  colorSteps              : u32,   // number of discrete steps used for t\r
  numberOfTerrainColors   : u32,   // gradient array length\r
  _padT0                  : vec2<f32>,\r
};\r
\r
struct CursorQuery\r
{\r
    // Current cell under the cursor\r
    cell           : CellData, // size 48, align 16\r
    // Total fluid on the entire map\r
    fluidTotal     : f32,      // starts as 48\r
    // Total antiFluid on the entire map\r
    anitFluidTotal : f32,      // starts as 52\r
    chunkUpdates   : u32, // starts at 56\r
    _pad0          : u32,\r
};\r
// total size = 56 -> rounded to 64 bytes\r
\r
struct ChunkData // total of 16 bytes\r
{\r
  fluidTotal          : f32,      // The total fluid in this chunk @ 0\r
  anitFluidTotal      : f32,      // The total anti fluid in this chunk @ 4\r
  deepestFluid        : i32,      // The index of the deepest fluid in this chunk @ 8\r
  deepestAntiFluid    : i32,      // The index of the deepest anti fluid in this chunk @ 12\r
};`,md=`// Fullscreen triangle VS\r
struct VSOut {\r
  @builtin(position) pos : vec4f\r
};\r
\r
@vertex\r
fn vs(@builtin(vertex_index) vid : u32) -> VSOut {\r
  var xy = array<vec2f, 3>(\r
    vec2f(-1.0, -3.0),\r
    vec2f( 3.0,  1.0),\r
    vec2f(-1.0,  1.0)\r
  );\r
  var out : VSOut;\r
  out.pos = vec4f(xy[vid], 0.0, 1.0);\r
  return out;\r
}`,pd=`const MAX_SLICES_PER_CELL : u32 = 3u;\r
\r
struct ObjectCell\r
{\r
    color       : vec4<f32>, // color of the cell's top most\r
    sliceCount  : u32,\r
    _pad0       : vec3<u32>,                 // keep 16B alignment\r
    slices      : array<vec2<f32>, MAX_SLICES_PER_CELL>\r
};\r
\r
struct ObjectDef {\r
  size          : vec2<u32>,\r
  cellOffset    : u32,                       // into OBJ_CELLS\r
  cellCount     : u32,\r
}\r
\r
// const EMPTY_OBJ_CELL : ObjectCell = ObjectCell(\r
//     COLOR_CLEAR, \r
//     array<vec2<f32>, 3>(\r
//         vec2()\r
//     )\r
// );\r
// const TREE_CANOPY_CELL : ObjectCell = ObjectCell(COLOR_GREEN, array<vec2<f32>, 0>());\r
// const TREE_TRUNK_CELL : ObjectCell = ObjectCell(COLOR_GREEN, array<vec2<f32>, 0>());\r
\r
const OBJECT_DEFS  : array<ObjectDef, 1> = array<ObjectDef, 1>(\r
    // 0 - Columnar Tree (small)\r
    ObjectDef(vec2(4u, 4u), 0u, 16u),\r
);\r
\r
const TOTAL_OBJ_CELL_COUNT = 16u;\r
\r
// const OBJECT_CELLS : array<ObjectCell, TOTAL_OBJ_CELL_COUNT> = array<ObjectCell, TOTAL_OBJ_CELL_COUNT>(\r
//     EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,\r
// );\r
\r
// const OBJECT_DEFS  : array<ObjectDef, 1> = array<ObjectDef, 1>(\r
//     // 0 - Columnar Tree (small)\r
//     ObjectDef(\r
//         vec2<u32>(4u, 4u), \r
//         array<ObjectCell, 4 * 4> (\r
//             // empty\r
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,\r
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,\r
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,\r
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,\r
//             // lower canopy\r
\r
//         )),\r
// );\r
\r
`,gd=`// Uses: uView, uTerrain, chunkData, currentCells\r
\r
@compute @workgroup_size(1, 1, 1)\r
fn chunk_data_calc(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let chunkX = gid.x;\r
    let chunkY = gid.y;\r
\r
    let chunkSize : u32 = 16u;\r
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);\r
\r
    if (chunkX >= numChunks.x || chunkY >= numChunks.y) { return; }\r
\r
    let startX = chunkX * chunkSize;\r
    let startY = chunkY * chunkSize;\r
    let endX   = min(startX + chunkSize, uView.size.x);\r
    let endY   = min(startY + chunkSize, uView.size.y);\r
\r
    var fluidTotal      : f32 = 0.0;\r
    var anitFluidTotal  : f32 = 0.0;\r
\r
    var fluidMax = 0.0;\r
    var aFluidMax = 0.0;\r
    var maxFI : i32 = -1;\r
    var maxAFI : i32 = -1;\r
    var currentI : i32 = -1;\r
\r
    var left:   u32 = startX + 1u;  // inclusive\r
    var right:  u32 = endX;    // exclusive\r
    var top:    u32 = startY + 1u;  // inclusive\r
    var bottom: u32 = endY;    // exclusive\r
\r
    loop \r
    {\r
        // stop when empty\r
        if (!(left < right && top < bottom)) { break; }\r
\r
        // 1) top row (left -> right-1) at y = top\r
        var x: u32 = left;\r
        var y: u32 = top;\r
        loop {\r
            if (x >= right) { break; }\r
            {\r
                let c = currentCells[idx(x, top)];\r
                let v = c.fAmount;\r
                if (v > 0.0) {\r
                    fluidTotal += v;\r
                } else {\r
                    anitFluidTotal -= v; // add magnitude of negative\r
                }\r
\r
                if(v > fluidMax)\r
                {\r
                    maxFI = i32(x - startX + (top - startY) * chunkSize);\r
                    fluidMax = v;\r
                }\r
\r
                if(v < aFluidMax || (currentI == 0i && v < 0.0))\r
                {\r
                    maxAFI = i32(x - startX + (top - startY) * chunkSize);\r
                    aFluidMax = v;\r
                }\r
\r
                currentI++;\r
            }\r
            x += 1u;\r
        }\r
        top += 1u;\r
\r
        if (!(left < right && top < bottom)) { break; }\r
\r
        // 2) right column (top -> bottom-1) at x = right-1\r
        let xr: u32 = right - 1u;\r
        \r
        loop {\r
            if (y >= bottom) { break; }\r
            {\r
                let c = currentCells[idx(xr, y)];\r
                let v = c.fAmount;\r
                if (v > 0.0) {\r
                    fluidTotal += v;\r
                } else {\r
                    anitFluidTotal -= v; // add magnitude of negative\r
                }\r
\r
                if(v > fluidMax)\r
                {\r
                    maxFI = i32(xr - startX + (y - startY) * chunkSize);\r
                    fluidMax = v;\r
                }\r
\r
                if(v < aFluidMax || (currentI == 0i && v < 0.0))\r
                {\r
                    maxAFI = i32(xr - startX + (y - startY) * chunkSize);\r
                    aFluidMax = v;\r
                }\r
                \r
                currentI++;\r
            }\r
            y += 1u;\r
        }\r
        right -= 1u;\r
\r
        if (!(left < right && top < bottom)) { break; }\r
\r
        // 3) bottom row (right-1 -> left) at y = bottom-1  (reverse)\r
        let yb: u32 = bottom - 1u;\r
        var xi: i32 = i32(right) - 1;          // start at right-1\r
        loop {\r
            if (xi < i32(left)) { break; }\r
            let xu: u32 = u32(xi);\r
            {\r
                let c = currentCells[idx(xu, yb)];\r
                let v = c.fAmount;\r
                if (v > 0.0) {\r
                    fluidTotal += v;\r
                } else {\r
                    anitFluidTotal -= v; // add magnitude of negative\r
                }\r
\r
                if(v > fluidMax)\r
                {\r
                    maxFI = i32(xu - startX + (yb - startY) * chunkSize);\r
                    fluidMax = v;\r
                }\r
\r
                if(v < aFluidMax || (currentI == 0i && v < 0.0))\r
                {\r
                    maxAFI = i32(xu - startX + (yb - startY) * chunkSize);\r
                    aFluidMax = v;\r
                }\r
                \r
                currentI++;\r
            }\r
            xi -= 1;\r
        }\r
        bottom -= 1u;\r
\r
        if (!(left < right && top < bottom)) { break; }\r
\r
        // 4) left column (bottom-1 -> top) at x = left  (reverse)\r
        let xl: u32 = left;\r
        var yi: i32 = i32(bottom) - 1;         // start at bottom-1\r
        loop {\r
            if (yi < i32(top)) { break; }\r
            let yu: u32 = u32(yi);\r
            {\r
                let c = currentCells[idx(xl, u32(yi))];\r
                let v = c.fAmount;\r
                if (v > 0.0) {\r
                    fluidTotal += v;\r
                } else {\r
                    anitFluidTotal -= v; // add magnitude of negative\r
                }\r
\r
                if(v > fluidMax)\r
                {\r
                    maxFI = i32(xl - startX + (u32(yi) - startY) * chunkSize);\r
                    fluidMax = v;\r
                }\r
\r
                if(v < aFluidMax || (currentI == 0i && v < 0.0))\r
                {\r
                    maxAFI = i32(xl - startX + (u32(yi) - startY) * chunkSize);\r
                    aFluidMax = v;\r
                }\r
                \r
                currentI++;\r
            }\r
            yi -= 1;\r
        }\r
        left += 1u;\r
    }\r
\r
    let chunkIdx = chunkX + chunkY * numChunks.x;\r
    chunkData[chunkIdx].fluidTotal       = fluidTotal;\r
    chunkData[chunkIdx].anitFluidTotal   = anitFluidTotal;\r
    chunkData[chunkIdx].deepestFluid     = maxFI;\r
    chunkData[chunkIdx].deepestAntiFluid = maxAFI;\r
}\r
`,yd=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells\r
\r
@compute @workgroup_size(1, 1, 1)\r
fn cursor_query(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    if(gid.x > 0) { return; }\r
\r
    let i = idx(uInput.mousePos.x, uInput.mousePos.y);\r
    var cell = currentCells[i];\r
    cell.height = roundedCellHeight(vec2(uInput.mousePos.x, uInput.mousePos.y));\r
    cursorQuery.cell = cell;\r
}\r
`,vd=`// Uses: uView, uTerrain, cursorQuery, currentCells, chunkData\r
\r
@compute @workgroup_size(1, 1, 1)\r
fn total_query(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    if(gid.x > 0 || gid.y > 0 || gid.z > 0) { return; }\r
\r
    let chunkSize = 16u;\r
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);\r
    let chunkCount : u32 =  numChunks.x * numChunks.y;\r
\r
    var fluidTotal : f32 = 0.0;\r
    var anitFluidTotal : f32 = 0.0;\r
    var chunkUpdates : u32 = 0u;\r
\r
    for(var i : u32 = 0; i < chunkCount; i++)\r
    {\r
        let chunkPos = vec2<u32>(i % numChunks.x, i / numChunks.x);\r
        let chunkUpdated = chunkRegionHasFluid(chunkPos, chunkSize);\r
\r
        fluidTotal += chunkData[i].fluidTotal;\r
        anitFluidTotal += chunkData[i].anitFluidTotal;\r
\r
        if(chunkUpdated) { chunkUpdates++; }\r
    }\r
\r
    cursorQuery.fluidTotal = fluidTotal;\r
    cursorQuery.anitFluidTotal = anitFluidTotal;\r
    cursorQuery.chunkUpdates = chunkUpdates;\r
}\r
`,xd=`// ---- Fragment shader ----\r
@fragment\r
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {\r
    let w = uView.size.x;\r
    let h = uView.size.y;\r
\r
    let x = u32(clamp(floor(frag_pos.x), 0.0, f32(w - 1u)));\r
    let y = u32(clamp(floor(frag_pos.y), 0.0, f32(h - 1u)));\r
    let pos = vec2<u32>(x, y);\r
\r
    // Get height from height map\r
    // let hgt: f32 = cellHeight(pos);\r
\r
    // // Starting point for ray cast\r
    // var p: vec3f = vec3f(vec2<f32>(clamp(floor(frag_pos.x), 0.0, f32(w - 1u)), clamp(floor(frag_pos.y), 0.0, f32(h - 1u))), cellHeight(pos));\r
\r
    // // Minimum step size based on pixel size\r
    // let minStepSize: f32 = 0.5;\r
\r
    // // Direction of raycast is towards the sun from centre of screen\r
    // let sunPos  = vec3<f32>(f32(uInput.mousePos.x), 300, f32(uInput.mousePos.y));\r
    // let sunDir: vec3f = sunPos - vec3f(0.5, 0.5, 0.0);\r
    // let stepDir: vec3f = normalize(sunDir);\r
\r
    // // Ray-march to check shadow\r
    // var inShadow: f32 = 0.0;\r
    // var n: i32 = 0;\r
\r
    // let MAX_STEPS = 64;\r
\r
    // for (var i: i32 = 1; i <= MAX_STEPS; i = i + 1) {\r
    // n = n + 1;\r
\r
    // let px = u32(clamp(floor(p.x), 0.0, f32(w - 1u)));\r
    // let py = u32(clamp(floor(p.y), 0.0, f32(h - 1u)));\r
\r
    // // Sample height at current ray location\r
    // let h: f32 = cellHeight(vec2<u32>(px, py));\r
\r
    // if (h > p.z) {\r
    //     // Ray is inside terrain => in shadow\r
    //     inShadow = 1.0;\r
    //     break;\r
    // }\r
    // if (p.z > 1.0) {\r
    //     // Above highest terrain level => not in shadow\r
    //     break;\r
    // }\r
\r
    // // Step towards the sun; ensure a minimum step\r
    // let dz: f32 = p.z - h;\r
    // let stepLen: f32 = max(minStepSize, dz * 0.05);\r
    // p = p + stepDir * stepLen;\r
    // }\r
\r
    // if (n == MAX_STEPS) \r
    // {\r
    //     inShadow = 1.0;\r
    // }\r
\r
    // // Normal-based shading term (faces away from sun get darker)\r
    // let normal: vec3f = surfaceNormalSobel(pos);\r
    // let normalShadow: f32 = (dot(normal, -stepDir) + 1.0) * 0.5;\r
\r
    // // Base terrain color\r
    // let terrainColor = outputTex[idx(x,y)];\r
    // var col: vec4f = terrainColor;//getTerrainColour(hgt, normal);\r
\r
    // // Water logic\r
    // // let waterDepth: f32 = uParams.waterLevel - hgt;\r
\r
    // // // isWater = step(0., waterDepth)\r
    // // let isWater: f32 = select(0.0, 1.0, waterDepth >= 0.0);\r
\r
    // // // Shallow-water waves factor\r
    // // var isWave: f32 = isWater * (1.0 - smoothstep(0.0, 0.05, waterDepth));\r
    // // isWave = isWave * ( (sin(cos(uParams.millis / 500.0) * 2.0 + waterDepth * 500.0) + 1.0) * 0.5 );\r
\r
    // // let waterLerp: f32 = easeOut(waterDepth / uParams.waterLevel);\r
\r
    // // // Simulate see-through water by depth-based lerp\r
    // // col = mix(col, uParams.colourWater, waterLerp);\r
\r
    // // // Add waves\r
    // // col = col + vec4f(isWave / 8.0);\r
\r
    // // Combine ray shadow and normal-based shadow\r
    // inShadow = clamp(inShadow + normalShadow, 0.0, 1.0);\r
\r
    // let shadowBrightness = 0.6;\r
\r
    // // Slight blue shift in shadow based on inShadow\r
    // let shadowCol: vec4f = col * shadowBrightness * vec4f(1.0, 1.0, 1.0 + inShadow * 0.2, 1.0);\r
\r
    // // Final color\r
    // let outCol: vec4f = mix(col, shadowCol, inShadow);\r
    // return outCol;\r
\r
    return vec4(1.0, 0.0, 0.0, 1.0);\r
}`,bd=`// Uses: uView, chunkData, currentCells, outputTex\r
\r
@compute @workgroup_size(16, 16, 1)\r
fn debug_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2(x,y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    if(!isVisible(coord, 16)) \r
    { \r
        //outputTex[idx(x,y) + uView.size.x * uView.size.y] = vec4(1.0, 0.0, 0.0, 0.5);\r
        return; \r
    }\r
\r
    let clear = vec4f(0.0, 0.0, 0.0, 0.0);\r
    let black = vec4f(0.0, 0.0, 0.0, 1.0);\r
    let white = vec4f(1.0, 1.0, 1.0, 1.0);\r
\r
    // Compute the final color\r
    var finalColor = clear;\r
\r
    let showChunkDebug = uView.showDebug > 0u;\r
    let chunkSize = 16u;\r
    var chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.0);\r
    if(showChunkDebug)\r
    {\r
        let chunkPos = getChunkPos(coord, chunkSize);\r
        let chunkStart = chunkPos * chunkSize;\r
        let chunkEnd = chunkStart + vec2<u32>(chunkSize, chunkSize);\r
        let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);\r
        let chunkIdx = chunkPos.x + chunkPos.y * numChunks.x;\r
\r
        if(chunkIdx < numChunks.x * numChunks.y)\r
        {\r
            let chunk = chunkData[chunkIdx];\r
\r
            let cx = x % chunkSize;\r
            let cy = y % chunkSize;\r
\r
            let inside = (cx >= 0u && cx <= chunkSize - 1u) &&\r
                        (cy >= 0u && cy <= chunkSize - 1u);\r
\r
            // on the inner frame (one in from any side)\r
            let on_inner_frame = (cx == 0u || cx == chunkSize - 1u ||\r
                                cy == 0u || cy == chunkSize - 1u);\r
\r
            let isBoundary = inside && on_inner_frame;\r
            \r
            if(isBoundary)\r
            {\r
                if(chunk.fluidTotal > 0.0 && chunk.anitFluidTotal > 0.0)\r
                {\r
                    chunkDebugColor = vec4f(1.0, 1.0, 0.0, 0.5);\r
                }\r
                else if(chunk.fluidTotal > 0.0)\r
                {\r
                    chunkDebugColor = vec4f(1.0, 0.0, 0.0, 0.5);\r
                }\r
                else if(chunk.anitFluidTotal > 0.0)\r
                {\r
                    chunkDebugColor = vec4f(0.0, 1.0, 0.0, 0.5);\r
                }\r
                else\r
                {\r
                    if(chunkRegionHasFluid(chunkPos, chunkSize))\r
                    {\r
                        chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.5);\r
                    }\r
                    else\r
                    {\r
                        chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.1);\r
                    }\r
                }\r
            }\r
\r
            if(chunk.deepestFluid >= 0)\r
            {\r
                let deepestFluidPos = chunkPos * chunkSize + localCoord2D(u32(chunk.deepestFluid), chunkSize);\r
                if(isDirectNeighbor(deepestFluidPos, coord))\r
                {\r
                    chunkDebugColor = vec4f(1.0, 0.5, 0.0, 0.75);\r
                }\r
            }\r
\r
            if(chunk.deepestAntiFluid >= 0)\r
            {\r
                let deepestAntiFluidPos = chunkPos * chunkSize + localCoord2D(u32(chunk.deepestAntiFluid), chunkSize);\r
                if(isDirectNeighbor(deepestAntiFluidPos, coord))\r
                {\r
                    chunkDebugColor = vec4f(0.0, 0.5, 1.0, 0.75);\r
                }\r
            }\r
\r
        }       \r
        \r
    }\r
\r
    finalColor = over_rgba(finalColor, chunkDebugColor);\r
\r
\r
    let idOffset = uView.size.x * uView.size.y * 3;\r
    outputTex[idx(x,y) + idOffset] = pack4x8unorm(finalColor);\r
}\r
`,_d=`// Uses: uView, uTerrain, chunkData, currentCells, outputTex\r
\r
@compute @workgroup_size(16, 16, 1)\r
fn fluid_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2(x,y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    if(!isVisible(coord, 16)) \r
    { \r
        //outputTex[idx(x,y) + uView.size.x * uView.size.y] = vec4(1.0, 0.0, 0.0, 0.5);\r
        return; \r
    }\r
\r
    let cell = currentCells[idx(x, y)];\r
\r
    let clear = vec4f(0.0, 0.0, 0.0, 0.0);\r
    let black = vec4f(0.0, 0.0, 0.0, 1.0);\r
    let white = vec4f(1.0, 1.0, 1.0, 1.0);\r
\r
    // Compute the final shadow color\r
    let idOffset = uView.size.x * uView.size.y * 2;\r
    var finalColor = clear;\r
\r
    let chunkSize = 16u;\r
    let chunk = getChunk(getChunkPos(coord, chunkSize), chunkSize);\r
    if(chunk.fluidTotal < 1e-7 && chunk.anitFluidTotal < 1e-7)\r
    {\r
        outputTex[idx(x,y) + idOffset] = pack4x8unorm(clear);\r
        return;\r
    }\r
\r
    let fluidLevel = (f32(uTerrain.maxCellValue) * 1.0);\r
    let fluidAMax = 0.75;\r
    let fluidAMin = 0.3;\r
    let fluidRgb = vec3(0.059, 0.145, 0.478);//0.384, 0.651, 0.663\r
    let fluidHeight = cellFAmount(coord);\r
    let terrainHeight = cellHeight(coord);\r
    let fluidA = clamp(fluidHeight / fluidLevel * fluidAMax, fluidAMin, fluidAMax);\r
\r
    let antiFluidRgb = vec3(1.0, 1.0, 1.0);//0.384, 0.651, 0.663\r
    let antiFluidA = clamp(fluidHeight / -fluidLevel * fluidAMax, fluidAMin, fluidAMax);\r
\r
    var fluidColor = select(vec4(fluidRgb, fluidA), vec4(antiFluidRgb, antiFluidA), fluidHeight < 0);\r
    \r
\r
    //Compute Outline\r
    if(abs(fluidHeight) > 0.0)\r
    {\r
        finalColor = over_rgba(finalColor, fluidColor);\r
\r
        var fluidOutline = clear;//getFluidOutlineColor(coord, lightDir, shadeColor, highlightColor, castedShadowColor.a < 1e-4);\r
        let epsilon = getColorStepHeight() * 0.9;\r
        if(abs(fluidHeight) + terrainHeight < f32(uTerrain.maxCellValue) * 2.0 && isFluidBoundary(coord, epsilon))\r
        {\r
            fluidOutline = lerp4(fluidColor, vec4(0.0, 0.0, 0.0, fluidA), 0.5);\r
            finalColor = over_rgba(finalColor, fluidOutline);\r
        }\r
    }\r
    \r
\r
\r
    outputTex[idx(x,y) + idOffset] = pack4x8unorm(finalColor);\r
}\r
`,Sd=`// Uses: uView, currentCells\r
\r
@compute @workgroup_size(16, 16, 1)\r
fn calc_normals(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2(x,y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    let i = idx(x, y);\r
    var out = currentCells[i];\r
\r
    let sNorm = surfaceNormalSobel(coord);\r
    out.heightNormal = sNorm;\r
\r
    currentCells[i] = out;\r
}\r
`,Cd=`// Uses: uView, uTerrain, currentCells, outputTex\r
\r
@compute @workgroup_size(16, 16, 1)\r
fn shadow_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2(x,y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    if(!isVisible(coord, 16)) \r
    { \r
        //outputTex[idx(x,y) + uView.size.x * uView.size.y] = vec4(1.0, 0.0, 0.0, 0.5);\r
        return; \r
    }\r
\r
    let clear = vec4f(0.0, 0.0, 0.0, 0.0);\r
    let black = vec4f(0.0, 0.0, 0.0, 1.0);\r
    let white = vec4f(1.0, 1.0, 1.0, 1.0);\r
\r
    let cell = currentCells[idx(x,y)];\r
    let currentHeight = roundedCellHeight(coord);\r
\r
    let sunHeight       = uTerrain.maxCellValue * 2.5;\r
    let center          = vec3<f32>(f32(uView.size.x / 2), sunHeight, f32(uView.size.y / 2));\r
    // let sunPosition     = vec3<f32>(f32(uInput.mousePos.x), sunHeight, f32(uInput.mousePos.y));\r
    let sunPosition     = vec3<f32>(f32(uView.size.x), sunHeight, center.y);\r
    let terrainInShadow = inShadow(coord, sunPosition);\r
    let shadowColor     = vec4<f32>(0.0, 0.0, 0.0, 1.0);          // or your tint\r
    let highlightColor  = vec4f(1.0, 1.0, 1.0, 0.05);\r
    let shadeColor      = vec4f(0.0, 0.0, 0.0, 0.25);\r
    let lightDir        = normalize(sunPosition - center);//normalize(sunPosition - terrainPos);\r
\r
    var shade = 1.0;\r
    if(uTerrain.colorSteps >= 100 && distance(vec3(0.0, 1.0, 0.0), cell.heightNormal) > 1e-3)\r
    {\r
        shade = clamp(max(dot(cell.heightNormal, lightDir), 0.0) + 0.95, 0.0, 1.0);   // tweak as desired\r
    }\r
\r
    // Shadow strength s: 0 if not in shadow, else e.g. 0.5 (you can multiply by shadowColor.a if you want)\r
    var shadowStrength : f32 = 0.5;\r
    // Build one layer that encodes both effects, then OVER it\r
    var castedShadowColor = makeCombinedShadowLayer(shadowColor.rgb, select(0.0, shadowStrength, terrainInShadow), shade);\r
    // Apply outline to terrain based on sun position\r
    var normalOutline = getTerrainOutlineColor(coord, lightDir, shadeColor, highlightColor, castedShadowColor.a < 1e-4);\r
\r
\r
    // Compute the final shadow color\r
    var finalColor = clear;\r
    if(uTerrain.colorSteps < 100)\r
    {\r
        finalColor = over_rgba(finalColor, normalOutline);\r
    }\r
\r
    finalColor = over_rgba(finalColor, castedShadowColor);\r
\r
    // let spriteInfo = unpackSpriteInfo(cell.spriteInfo);\r
    // if(spriteInfo.height > 0)\r
    // {\r
    //     finalColor = vec4f(1.0, 0.0, 0.0, 1.0);\r
    // }\r
\r
\r
    let idOffset = uView.size.x * uView.size.y;\r
    outputTex[idx(x,y) + idOffset] = pack4x8unorm(finalColor);\r
}\r
`,Td=`@compute @workgroup_size(16, 16, 1)\r
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let spriteIndex : u32 = 1u;\r
    let coord = uInput.mousePos;//vec2<u32>(534, 200);\r
    \r
    let sprite = getSprite(spriteIndex);\r
    if (gid.x >= sprite.width || gid.y >= sprite.height) { return; }\r
\r
    setSprite(spriteIndex, coord, vec2<u32>(gid.x, gid.y));\r
}`,Rd=`// Uses: uView, uTerrain, currentCells, outputTex\r
\r
@compute @workgroup_size(16, 16, 1)\r
fn terrain_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2(x,y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    outputTex[idx(x,y)] = pack4x8unorm(getTerrainColor(coord));\r
}\r
`,Dd=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells, nextCells\r
\r
@compute @workgroup_size(16, 16, 1)\r
fn step(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2<u32>(x, y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    let i = idx(x, y);\r
    var prev = currentCells[i];\r
    var out  = prev; // start from previous state\r
\r
    // Mouse "paint" demo (writes to next)\r
    let mouse0Held = uInput.mouse0Held > 0.5;\r
    let mouse1Held = uInput.mouse1Held > 0.5;\r
    let mouse2Held = uInput.mouse2Held > 0.5;\r
\r
    let dSqrd = distanceSqrd(vec2<u32>(x,y), uInput.mousePos);\r
    let radiusSqrd = uInput.mouseRadius * uInput.mouseRadius;\r
    var radiusT = clamp((radiusSqrd - dSqrd) / radiusSqrd, 0.0, 1.0);\r
    radiusT = radiusT * radiusT;\r
    let inside = dSqrd <= radiusSqrd;\r
\r
    let chunkSize = 16u;\r
    let chunkPos = getChunkPos(coord, chunkSize);\r
    let shouldSim = chunkRegionHasFluid(chunkPos, chunkSize);\r
\r
    if(shouldSim)\r
    {\r
      var futureCellValue = getFurtureCellFAmount(coord);\r
      out.fAmount = futureCellValue;\r
    }\r
\r
\r
    // height editing\r
    // if(mouse0Held || mouse2Held)\r
    // {\r
    //     let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);\r
    //     if (mouse0Held && inside) {\r
    //         out.height = out.height + 1.0;\r
    //     }\r
    //     else if (mouse2Held && inside) {\r
    //         out.height = out.height - 1.0;\r
    //     }\r
\r
    //     // if(inside)\r
    //     // {\r
    //     //   out.height = 47.0;\r
    //     // }\r
    // }\r
    // Clamp\r
    out.height = clamp(out.height, 0.0, uTerrain.maxCellValue);\r
\r
    // Fluid editing\r
    let fStrength = 3.0;\r
    if(mouse0Held || mouse2Held)\r
    {\r
        //let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);\r
        if (mouse0Held && inside) {\r
            out.fAmount = out.fAmount + fStrength * radiusT;\r
        }\r
        else if (mouse2Held && inside) {\r
            out.fAmount = out.fAmount - fStrength * radiusT;\r
        }\r
    }\r
\r
    let simPerSec = 60.0;\r
    let ePerSec = 3.0;\r
\r
    var eD = distanceSqrd(vec2<u32>(x, y), vec2<u32>(270, 350));\r
    if(eD < 5)\r
    {\r
      out.fAmount += ePerSec;\r
    }\r
\r
    eD = distanceSqrd(vec2<u32>(x, y), vec2<u32>(720, 120));\r
    if(eD < 5)\r
    {  \r
      out.fAmount -= ePerSec;\r
    }\r
\r
\r
    // Apply evaporation\r
    let ns = directNeighorCount(vec2<i32>(coord));\r
    let aAmount = abs(out.fAmount);\r
    if((ns <= 3 && aAmount < 10.0) || (aAmount <= 2.0 && ns < 8))\r
    {\r
      let evapAmount = 0.01;\r
      out.fAmount -= clamp(out.fAmount * evapAmount, -evapAmount, evapAmount);\r
      if (abs(out.fAmount) < 0.1) { out.fAmount = 0.0;}\r
    }\r
\r
    // Clamp\r
    let cellmax : f32 = uTerrain.maxCellValue * 2 - out.height;\r
    out.fAmount = clamp(out.fAmount, -cellmax, cellmax);\r
\r
    nextCells[i] = out;\r
}`,zd=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":id,"../shaders/helpers/colors.wgsl":cd,"../shaders/helpers/flow_helpers.wgsl":od,"../shaders/helpers/helpers.wgsl":sd,"../shaders/helpers/sprite_helpers.wgsl":fd,"../shaders/main/fragment.wgsl":dd,"../shaders/main/shader_outline.wgsl":f2,"../shaders/main/structs.wgsl":hd,"../shaders/main/vertex.wgsl":md,"../shaders/objects/object_def.wgsl":pd,"../shaders/query/chunk_data_calc.wgsl":gd,"../shaders/query/cursor_query.wgsl":yd,"../shaders/query/total_query.wgsl":vd,"../shaders/realtime_frag.wgsl":xd,"../shaders/render/debug_render_compute.wgsl":bd,"../shaders/render/fluid_render_compute.wgsl":_d,"../shaders/render/normal_compute.wgsl":Sd,"../shaders/render/shadow_render_compute.wgsl":Cd,"../shaders/render/sprite_render_compute.wgsl":Td,"../shaders/render/terrain_render_compute.wgsl":Rd,"../shaders/simulation/step_compute.wgsl":Dd});function Md(){let s=f2;for(const[u,d]of Object.entries(zd)){const i=u.split("/").pop().replace(".wgsl","");s=s.replace(`//{${i}}`,d)}return s}var K0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var l2;function Ad(){return l2||(l2=1,(function(s){(function(){var u={}.hasOwnProperty;function d(){for(var c="",h=0;h<arguments.length;h++){var g=arguments[h];g&&(c=f(c,i(g)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return d.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var h="";for(var g in c)u.call(c,g)&&c[g]&&(h=f(h,g));return h}function f(c,h){return h?c?c+" "+h:c+h:c}s.exports?(d.default=d,s.exports=d):window.classNames=d})()})(K0)),K0.exports}var Od=Ad();const we=Au(Od),Ed=["xxl","xl","lg","md","sm","xs"],Vd="xs",Ou=W.createContext({prefixes:{},breakpoints:Ed,minBreakpoint:Vd}),{Consumer:Bh,Provider:Uh}=Ou;function Ze(s,u){const{prefixes:d}=W.useContext(Ou);return s||d[u]||u}function d2(){const{breakpoints:s}=W.useContext(Ou);return s}function h2(){const{minBreakpoint:s}=W.useContext(Ou);return s}var J0={exports:{}},W0,a2;function wd(){if(a2)return W0;a2=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return W0=s,W0}var F0,r2;function Hd(){if(r2)return F0;r2=1;var s=wd();function u(){}function d(){}return d.resetWarningCache=u,F0=function(){function i(h,g,y,p,v,C){if(C!==s){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}i.isRequired=i;function f(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:f,element:i,elementType:i,instanceOf:f,node:i,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:d,resetWarningCache:u};return c.PropTypes=c,c},F0}var u2;function Gd(){return u2||(u2=1,J0.exports=Hd()()),J0.exports}var Bd=Gd();const gt=Au(Bd),m2=(s=>W.forwardRef((u,d)=>S.jsx("div",{...u,ref:d,className:we(u.className,s)}))),Ud=["as","disabled"];function jd(s,u){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)>=0)continue;d[i]=s[i]}return d}function Yd(s){return!s||s.trim()==="#"}function p2({tagName:s,disabled:u,href:d,target:i,rel:f,role:c,onClick:h,tabIndex:g=0,type:y}){s||(d!=null||i!=null||f!=null?s="a":s="button");const p={tagName:s};if(s==="button")return[{type:y||"button",disabled:u},p];const v=b=>{if((u||s==="a"&&Yd(d))&&b.preventDefault(),u){b.stopPropagation();return}h?.(b)},C=b=>{b.key===" "&&(b.preventDefault(),v(b))};return s==="a"&&(d||(d="#"),u&&(d=void 0)),[{role:c??"button",disabled:void 0,tabIndex:u?void 0:g,href:d,target:s==="a"?i:void 0,"aria-disabled":u||void 0,rel:s==="a"?f:void 0,onClick:v,onKeyDown:C},p]}const Xd=W.forwardRef((s,u)=>{let{as:d,disabled:i}=s,f=jd(s,Ud);const[c,{tagName:h}]=p2(Object.assign({tagName:d,disabled:i},f));return S.jsx(h,Object.assign({},f,c,{ref:u}))});Xd.displayName="Button";const sa=W.forwardRef(({as:s,bsPrefix:u,variant:d="primary",size:i,active:f=!1,disabled:c=!1,className:h,...g},y)=>{const p=Ze(u,"btn"),[v,{tagName:C}]=p2({tagName:s,disabled:c,...g}),b=C;return S.jsx(b,{...v,...g,ref:y,disabled:c,className:we(h,p,f&&"active",d&&`${p}-${d}`,i&&`${p}-${i}`,g.href&&c&&"disabled")})});sa.displayName="Button";const tc=W.forwardRef(({bsPrefix:s,size:u,vertical:d=!1,className:i,role:f="group",as:c="div",...h},g)=>{const y=Ze(s,"btn-group");let p=y;return d&&(p=`${y}-vertical`),S.jsx(c,{...h,ref:g,role:f,className:we(i,p,u&&`${y}-${u}`)})});tc.displayName="ButtonGroup";const nc=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=Ze(u,"card-body"),S.jsx(d,{ref:f,className:we(s,u),...i})));nc.displayName="CardBody";const g2=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=Ze(u,"card-footer"),S.jsx(d,{ref:f,className:we(s,u),...i})));g2.displayName="CardFooter";const y2=W.createContext(null);y2.displayName="CardHeaderContext";const v2=W.forwardRef(({bsPrefix:s,className:u,as:d="div",...i},f)=>{const c=Ze(s,"card-header"),h=W.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return S.jsx(y2.Provider,{value:h,children:S.jsx(d,{ref:f,...i,className:we(u,c)})})});v2.displayName="CardHeader";const x2=W.forwardRef(({bsPrefix:s,className:u,variant:d,as:i="img",...f},c)=>{const h=Ze(s,"card-img");return S.jsx(i,{ref:c,className:we(d?`${h}-${d}`:h,u),...f})});x2.displayName="CardImg";const b2=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=Ze(u,"card-img-overlay"),S.jsx(d,{ref:f,className:we(s,u),...i})));b2.displayName="CardImgOverlay";const _2=W.forwardRef(({className:s,bsPrefix:u,as:d="a",...i},f)=>(u=Ze(u,"card-link"),S.jsx(d,{ref:f,className:we(s,u),...i})));_2.displayName="CardLink";const kd=m2("h6"),S2=W.forwardRef(({className:s,bsPrefix:u,as:d=kd,...i},f)=>(u=Ze(u,"card-subtitle"),S.jsx(d,{ref:f,className:we(s,u),...i})));S2.displayName="CardSubtitle";const C2=W.forwardRef(({className:s,bsPrefix:u,as:d="p",...i},f)=>(u=Ze(u,"card-text"),S.jsx(d,{ref:f,className:we(s,u),...i})));C2.displayName="CardText";const qd=m2("h5"),T2=W.forwardRef(({className:s,bsPrefix:u,as:d=qd,...i},f)=>(u=Ze(u,"card-title"),S.jsx(d,{ref:f,className:we(s,u),...i})));T2.displayName="CardTitle";const R2=W.forwardRef(({bsPrefix:s,className:u,bg:d,text:i,border:f,body:c=!1,children:h,as:g="div",...y},p)=>{const v=Ze(s,"card");return S.jsx(g,{ref:p,...y,className:we(u,v,d&&`bg-${d}`,i&&`text-${i}`,f&&`border-${f}`),children:c?S.jsx(nc,{children:h}):h})});R2.displayName="Card";const nn=Object.assign(R2,{Img:x2,Title:T2,Subtitle:S2,Body:nc,Link:_2,Text:C2,Header:v2,Footer:g2,ImgOverlay:b2});function Nd(s,u){return W.Children.toArray(s).some(d=>W.isValidElement(d)&&d.type===u)}function Zd({as:s,bsPrefix:u,className:d,...i}){u=Ze(u,"col");const f=d2(),c=h2(),h=[],g=[];return f.forEach(y=>{const p=i[y];delete i[y];let v,C,b;typeof p=="object"&&p!=null?{span:v,offset:C,order:b}=p:v=p;const T=y!==c?`-${y}`:"";v&&h.push(v===!0?`${u}${T}`:`${u}${T}-${v}`),b!=null&&g.push(`order${T}-${b}`),C!=null&&g.push(`offset${T}-${C}`)}),[{...i,className:we(d,...h,...g)},{as:s,bsPrefix:u,spans:h}]}const Dt=W.forwardRef((s,u)=>{const[{className:d,...i},{as:f="div",bsPrefix:c,spans:h}]=Zd(s);return S.jsx(f,{...i,ref:u,className:we(d,!h.length&&c)})});Dt.displayName="Col";const D2=W.createContext(null);D2.displayName="InputGroupContext";const Ld={type:gt.string,tooltip:gt.bool,as:gt.elementType},Eu=W.forwardRef(({as:s="div",className:u,type:d="valid",tooltip:i=!1,...f},c)=>S.jsx(s,{...f,ref:c,className:we(u,`${d}-${i?"tooltip":"feedback"}`)}));Eu.displayName="Feedback";Eu.propTypes=Ld;const On=W.createContext({}),mr=W.forwardRef(({id:s,bsPrefix:u,className:d,type:i="checkbox",isValid:f=!1,isInvalid:c=!1,as:h="input",...g},y)=>{const{controlId:p}=W.useContext(On);return u=Ze(u,"form-check-input"),S.jsx(h,{...g,ref:y,type:i,id:s||p,className:we(d,u,f&&"is-valid",c&&"is-invalid")})});mr.displayName="FormCheckInput";const zu=W.forwardRef(({bsPrefix:s,className:u,htmlFor:d,...i},f)=>{const{controlId:c}=W.useContext(On);return s=Ze(s,"form-check-label"),S.jsx("label",{...i,ref:f,htmlFor:d||c,className:we(u,s)})});zu.displayName="FormCheckLabel";const z2=W.forwardRef(({id:s,bsPrefix:u,bsSwitchPrefix:d,inline:i=!1,reverse:f=!1,disabled:c=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:p,feedbackType:v,className:C,style:b,title:T="",type:V="checkbox",label:k,children:B,as:U="input",...j},X)=>{u=Ze(u,"form-check"),d=Ze(d,"form-switch");const{controlId:K}=W.useContext(On),G=W.useMemo(()=>({controlId:s||K}),[K,s]),P=!B&&k!=null&&k!==!1||Nd(B,zu),Y=S.jsx(mr,{...j,type:V==="switch"?"checkbox":V,ref:X,isValid:h,isInvalid:g,disabled:c,as:U});return S.jsx(On.Provider,{value:G,children:S.jsx("div",{style:b,className:we(C,P&&u,i&&`${u}-inline`,f&&`${u}-reverse`,V==="switch"&&d),children:B||S.jsxs(S.Fragment,{children:[Y,P&&S.jsx(zu,{title:T,children:k}),p&&S.jsx(Eu,{type:v,tooltip:y,children:p})]})})})});z2.displayName="FormCheck";const Mu=Object.assign(z2,{Input:mr,Label:zu}),M2=W.forwardRef(({bsPrefix:s,type:u,size:d,htmlSize:i,id:f,className:c,isValid:h=!1,isInvalid:g=!1,plaintext:y,readOnly:p,as:v="input",...C},b)=>{const{controlId:T}=W.useContext(On);return s=Ze(s,"form-control"),S.jsx(v,{...C,type:u,size:i,ref:b,readOnly:p,id:f||T,className:we(c,y?`${s}-plaintext`:s,d&&`${s}-${d}`,u==="color"&&`${s}-color`,h&&"is-valid",g&&"is-invalid")})});M2.displayName="FormControl";const Pd=Object.assign(M2,{Feedback:Eu}),A2=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=Ze(u,"form-floating"),S.jsx(d,{ref:f,className:we(s,u),...i})));A2.displayName="FormFloating";const lc=W.forwardRef(({controlId:s,as:u="div",...d},i)=>{const f=W.useMemo(()=>({controlId:s}),[s]);return S.jsx(On.Provider,{value:f,children:S.jsx(u,{...d,ref:i})})});lc.displayName="FormGroup";const O2=W.forwardRef(({as:s="label",bsPrefix:u,column:d=!1,visuallyHidden:i=!1,className:f,htmlFor:c,...h},g)=>{const{controlId:y}=W.useContext(On);u=Ze(u,"form-label");let p="col-form-label";typeof d=="string"&&(p=`${p} ${p}-${d}`);const v=we(f,u,i&&"visually-hidden",d&&p);return c=c||y,d?S.jsx(Dt,{ref:g,as:"label",className:v,htmlFor:c,...h}):S.jsx(s,{ref:g,className:v,htmlFor:c,...h})});O2.displayName="FormLabel";const E2=W.forwardRef(({bsPrefix:s,className:u,id:d,...i},f)=>{const{controlId:c}=W.useContext(On);return s=Ze(s,"form-range"),S.jsx("input",{...i,type:"range",ref:f,className:we(u,s),id:d||c})});E2.displayName="FormRange";const V2=W.forwardRef(({bsPrefix:s,size:u,htmlSize:d,className:i,isValid:f=!1,isInvalid:c=!1,id:h,...g},y)=>{const{controlId:p}=W.useContext(On);return s=Ze(s,"form-select"),S.jsx("select",{...g,size:d,ref:y,className:we(i,s,u&&`${s}-${u}`,f&&"is-valid",c&&"is-invalid"),id:h||p})});V2.displayName="FormSelect";const w2=W.forwardRef(({bsPrefix:s,className:u,as:d="small",muted:i,...f},c)=>(s=Ze(s,"form-text"),S.jsx(d,{...f,ref:c,className:we(u,s,i&&"text-muted")})));w2.displayName="FormText";const H2=W.forwardRef((s,u)=>S.jsx(Mu,{...s,ref:u,type:"switch"}));H2.displayName="Switch";const Qd=Object.assign(H2,{Input:Mu.Input,Label:Mu.Label}),G2=W.forwardRef(({bsPrefix:s,className:u,children:d,controlId:i,label:f,...c},h)=>(s=Ze(s,"form-floating"),S.jsxs(lc,{ref:h,className:we(u,s),controlId:i,...c,children:[d,S.jsx("label",{htmlFor:i,children:f})]})));G2.displayName="FloatingLabel";const Kd={_ref:gt.any,validated:gt.bool,as:gt.elementType},ac=W.forwardRef(({className:s,validated:u,as:d="form",...i},f)=>S.jsx(d,{...i,ref:f,className:we(s,u&&"was-validated")}));ac.displayName="Form";ac.propTypes=Kd;const me=Object.assign(ac,{Group:lc,Control:Pd,Floating:A2,Check:Mu,Switch:Qd,Label:O2,Text:w2,Range:E2,Select:V2,FloatingLabel:G2}),Vu=W.forwardRef(({className:s,bsPrefix:u,as:d="span",...i},f)=>(u=Ze(u,"input-group-text"),S.jsx(d,{ref:f,className:we(s,u),...i})));Vu.displayName="InputGroupText";const Jd=s=>S.jsx(Vu,{children:S.jsx(mr,{type:"checkbox",...s})}),Wd=s=>S.jsx(Vu,{children:S.jsx(mr,{type:"radio",...s})}),B2=W.forwardRef(({bsPrefix:s,size:u,hasValidation:d,className:i,as:f="div",...c},h)=>{s=Ze(s,"input-group");const g=W.useMemo(()=>({}),[]);return S.jsx(D2.Provider,{value:g,children:S.jsx(f,{ref:h,...c,className:we(i,s,u&&`${s}-${u}`,d&&"has-validation")})})});B2.displayName="InputGroup";const Fd=Object.assign(B2,{Text:Vu,Radio:Wd,Checkbox:Jd}),dr=W.forwardRef(({bsPrefix:s,className:u,as:d="div",...i},f)=>{const c=Ze(s,"row"),h=d2(),g=h2(),y=`${c}-cols`,p=[];return h.forEach(v=>{const C=i[v];delete i[v];let b;C!=null&&typeof C=="object"?{cols:b}=C:b=C;const T=v!==g?`-${v}`:"";b!=null&&p.push(`${y}${T}-${b}`)}),S.jsx(d,{ref:f,...i,className:we(u,c,...p)})});dr.displayName="Row";const wu={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,pixelScale:2,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};tn.memo(Id,(s,u)=>s.initial===u.initial&&s.title===u.title);function Id({initial:s,onChange:u,onApply:d,title:i="Noise & Render Settings"}){const f=W.useMemo(()=>({...wu,...s}),[s]),[c,h]=W.useState(f);W.useEffect(()=>{h(v=>{const C=Math.max(1,Math.min(32,v.numberOfTerrainColors));let b=v.colors.slice(0,C);if(b.length<C){const T=C-b.length,V=b[b.length-1]??"#888888";b=b.concat(Array.from({length:T},()=>V))}return{...v,numberOfTerrainColors:C,colors:b}})},[c.numberOfTerrainColors]);const g=(v,C)=>h(b=>({...b,[v]:C})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],p=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return S.jsx(nn,{children:S.jsxs(nn.Body,{children:[S.jsx(nn.Title,{className:"mb-3",children:i}),S.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),S.jsxs(dr,{className:"g-3",children:[S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"width",children:[S.jsx(me.Label,{children:"Width"}),S.jsx(me.Control,{type:"number",min:1,value:c.width,onChange:v=>g("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(me.Text,{muted:!0,children:"Width in pixels of the map."})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"height",children:[S.jsx(me.Label,{children:"Height"}),S.jsx(me.Control,{type:"number",min:1,value:c.height,onChange:v=>g("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(me.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),S.jsxs(dr,{className:"g-3",children:[S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"noiseType",children:[S.jsx(me.Label,{children:"Noise Type"}),S.jsx(me.Select,{value:c.noiseType,onChange:v=>g("noiseType",v.currentTarget.value),children:y.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"seed",children:[S.jsx(me.Label,{children:"Seed"}),S.jsx(me.Control,{type:"number",value:c.seed,onChange:v=>g("seed",parseInt(v.currentTarget.value||"0",10))})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"octaves",children:[S.jsx(me.Label,{children:"Fractal Octaves"}),S.jsx(me.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>g("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"lacunarity",children:[S.jsx(me.Label,{children:"Fractal Lacunarity"}),S.jsx(Fd,{children:S.jsx(me.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>g("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"gain",children:[S.jsx(me.Label,{children:"Fractal Gain"}),S.jsx(me.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>g("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"fractalType",children:[S.jsx(me.Label,{children:"Fractal Type"}),S.jsx(me.Select,{value:c.fractalType,onChange:v=>g("fractalType",v.currentTarget.value),children:p.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"frequency",children:[S.jsx(me.Label,{children:"Frequency"}),S.jsx(me.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>g("frequency",parseFloat(v.currentTarget.value||"0"))}),S.jsx(me.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),S.jsxs(dr,{className:"g-3",children:[S.jsxs(Dt,{md:6,lg:4,children:[S.jsxs(me.Group,{controlId:"maxCellValue",children:[S.jsx(me.Label,{children:"Max Terrain Height"}),S.jsx(me.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>g("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(me.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),S.jsxs(Dt,{md:6,lg:4,children:[S.jsxs(me.Group,{controlId:"thm",children:[S.jsx(me.Label,{children:"Terrain Height Multiplier"}),S.jsx(me.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>g("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(me.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),S.jsxs(Dt,{md:6,lg:4,children:[S.jsxs(me.Group,{controlId:"colorSteps",children:[S.jsx(me.Label,{children:"Terrain Steps"}),S.jsx(me.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>g("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),S.jsx(me.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),S.jsx(Dt,{md:6,lg:4,children:S.jsxs(me.Group,{controlId:"numColors",children:[S.jsx(me.Label,{children:"Number of Terrain Colors"}),S.jsx(me.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>g("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),S.jsx(me.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),S.jsxs("div",{className:"mt-4",children:[S.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),S.jsx(dr,{className:"g-3",children:c.colors.map((v,C)=>S.jsx(Dt,{xs:3,sm:2,md:1,lg:1,children:S.jsx(me.Group,{controlId:`color-${C}`,children:S.jsx(me.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:b=>{const T=b.currentTarget.value;g("colors",c.colors.map((V,k)=>k===C?T:V))},title:`Pick color ${C+1}`})})},C))})]}),S.jsxs("div",{className:"d-flex gap-2 mt-4",children:[S.jsx(sa,{variant:"primary",onClick:()=>d?.(c),children:"Apply"}),S.jsx(sa,{variant:"outline-secondary",onClick:()=>h(f),children:"Reset to Defaults"})]})]})})}function i2(s,u){const d=s>>>0,i=u>>>0||1;return(i&i-1)===0?d+(i-1)&~(i-1):Math.ceil(d/i)*i>>>0}function $d(s){if(typeof s!="string")return"";const u=s.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(u))return u;const d=u.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(d)return`vec${d[1]}${d[2][0]}`;const i=u.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const eh={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function rc(s){const u={fields:[],size:0};let d=0,i=1;for(const f of s){const c=$d(f.type);if(!c)throw new Error(`Unsupported type: ${f.type}`);const h=c;if(h.startsWith("pad")){const v=parseInt(h.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${h}`);const C={name:f.name,type:h,offset:d,size:v,align:1};u.fields.push(C),d+=v;continue}const y=eh[h];if(!y)throw new Error(`Unsupported non-pad type: ${h}`);d=i2(d,y.align);const p={name:f.name,type:h,offset:d,size:y.size,align:y.align};u.fields.push(p),d+=y.size,y.align>i&&(i=y.align)}return u.size=i2(d,Math.max(16,i)),u}function th(s,u){const d=new ArrayBuffer(s.size),i=new DataView(d);for(const f of s.fields){if(f.type.startsWith("pad"))continue;const c=u[f.name];if(c==null)throw new Error(`Missing field '${f.name}'`);switch(f.type){case"f32":i.setFloat32(f.offset,+c,!0);break;case"u32":i.setUint32(f.offset,c>>>0,!0);break;case"i32":i.setInt32(f.offset,c|0,!0);break;case"bool":i.setUint32(f.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0),i.setFloat32(f.offset+12,c[3],!0);break;case"vec2u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0),i.setUint32(f.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0),i.setInt32(f.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${f.type}`)}}return d}function uc(s,u,d,i,f,c){const h=th(u,d),g=c??s.createBuffer({size:u.size,usage:i,label:f});return s.queue.writeBuffer(g,0,h),g}const nh=rc([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function lh(s,u,d,i){const f={maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps>>>0,numberOfTerrainColors:(d?.length??0)>>>0,_padT0:[0,0]};return uc(s,nh,f,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function ah(s,u,d){{const i=s.createBuffer({label:"Terrain Colors Buffer",size:u.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return s.queue.writeBuffer(i,0,rh(u)),i}}function rh(s){const u=[];for(let d of s){/^#([0-9a-fA-F]{3})$/.test(d)&&(d=d.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=d.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const f=i[1],c=parseInt(f.slice(0,2),16)/255,h=parseInt(f.slice(2,4),16)/255,g=parseInt(f.slice(4,6),16)/255;u.push(c,h,g,1)}return new Float32Array(u)}const uh=rc([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"simIndex",type:"u32"},{name:"showDebug",type:"u32"},{name:"pixelScale",type:"u32"}]);function c2(s,u,d){const i={size:[u.width,u.height],time:u.time,simIndex:u.simIndex,showDebug:u.showDebug?1:0,pixelScale:u.pixelScale};return uc(s,uh,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",d)}const ih=rc([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouse2Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"visibleRect",type:"vec4u"}]);function o2(s,u,d){const i={mousePos:[u.mousePos.x,u.mousePos.y],mouse0Held:u.mouse0Held?1:0,mouse1Held:u.mouse1Held?1:0,mouse2Held:u.mouse2Held?1:0,mouseRadius:u.mouseRadius,visibleRect:[u.visibleRect.x0,u.visibleRect.y0,u.visibleRect.x1,u.visibleRect.y1]};return uc(s,ih,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",d)}function ch(s,u,d,i){const f={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},currentCells:{binding:3,type:"storage",buffer:i.prevCellsBuffer},nextCells:{binding:4,type:"storage",buffer:i.nextCellsBuffer},terrainColors:{binding:5,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:6,type:"storage",buffer:i.outputTextureBuffer},cursorQuery:{binding:7,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:8,type:"storage",buffer:i.chunkDataBuffer},sprites:{binding:9,type:"read-only-storage",buffer:i.spriteDataBuffer}},c=s.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(f).filter(G=>!["sprite","spriteColors"].includes(G)).map(G=>({binding:f[G].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:f[G].type}}))}),h=s.createBindGroup({label:"Unified Compute BG A",layout:c,entries:Object.keys(f).map(G=>G==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:G==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:{binding:f[G].binding,resource:{buffer:f[G].buffer}})}),g=s.createBindGroup({label:"Unified Compute BG show B",layout:c,entries:Object.keys(f).map(G=>G==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:G==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:{binding:f[G].binding,resource:{buffer:f[G].buffer}})}),y=s.createBindGroupLayout({label:"Render BGL",entries:[{binding:f.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uView.type}},{binding:f.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uInput.type}},{binding:f.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:f.outputTex.type}}]}),p=s.createRenderPipeline({label:"Render Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[y],label:"Render Pipeline Layout"}),vertex:{module:u,entryPoint:"vs"},fragment:{module:u,entryPoint:"fs",targets:[{format:d}]},primitive:{topology:"triangle-list"}}),v=s.createComputePipeline({label:"Normal Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Normal Compute Pipeline Layout"}),compute:{module:u,entryPoint:"calc_normals"}}),C=s.createComputePipeline({label:"Cursor Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Cursor Query Pipeline Layout"}),compute:{module:u,entryPoint:"cursor_query"}}),b=s.createComputePipeline({label:"Total Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Total Query Pipeline Layout"}),compute:{module:u,entryPoint:"total_query"}}),T=s.createComputePipeline({label:"Chunk Data Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Chunk Data Pipeline Layout"}),compute:{module:u,entryPoint:"chunk_data_calc"}}),V=s.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"terrain_render"}}),k=s.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"shadow_render"}}),B=s.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"fluid_render"}}),U=s.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"debug_render"}}),j=s.createComputePipeline({label:"Sprite Render Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Sprite Render Compute Pipeline Layout"}),compute:{module:u,entryPoint:"sprite_render"}}),X=s.createComputePipeline({label:"Step Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Step Compute Pipeline Layout"}),compute:{module:u,entryPoint:"step"}}),K=s.createBindGroup({label:"Render BG",layout:y,entries:[{binding:f.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:f.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:f.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:p,normalComputePipeline:v,cursorQueryPipeline:C,totalQueryPipeline:b,chunkDataPipeline:T,terrainTextureComputePipeline:V,shadowTextureComputePipeline:k,fluidTextureComputePipeline:B,debugTextureComputePipeline:U,spriteRenderComputePipeline:j,stepComputePipeline:X},bindGroups:{unifiedComputeBG_A:h,unifiedComputeBG_B:g,renderBG:K}}}function oh(s,u){return s.mouse0Held===u.mouse0Held&&s.mouse1Held===u.mouse1Held&&s.mouse2Held===u.mouse2Held&&s.mouse0Pressed===u.mouse0Pressed&&s.mouse1Pressed===u.mouse1Pressed&&s.mouse2Pressed===u.mouse2Pressed&&s.mouseRadius===u.mouseRadius&&s.mouseMoved===u.mouseMoved&&s.cursorVisible===u.cursorVisible&&s.mousePosition.x===u.mousePosition.x&&s.mousePosition.y===u.mousePosition.y&&s.visibleRect.x0===u.visibleRect.x0&&s.visibleRect.y0===u.visibleRect.y0&&s.visibleRect.x1===u.visibleRect.x1&&s.visibleRect.y1===u.visibleRect.y1&&s.visibleRect.width===u.visibleRect.width&&s.visibleRect.height===u.visibleRect.height&&s.visibleRectChanged===u.visibleRectChanged&&s.simulationSubSteps===u.simulationSubSteps}const sh={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseRadius:30,mouseMoved:!1,cursorVisible:!0,mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class fh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(u){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(u);const d=u-this.winMs;for(;this.times.length&&this.times[0]<d;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const hr=new fh;async function dh(s){const u=new Image;u.crossOrigin="anonymous",u.decoding="async",u.src=s,await u.decode();const d=await createImageBitmap(u),f=new OffscreenCanvas(d.width,d.height).getContext("2d",{willReadFrequently:!0});f.drawImage(d,0,0);const{data:c,width:h,height:g}=f.getImageData(0,0,d.width,d.height),y=new Uint8Array(c.buffer.slice(0));return d.close(),{width:h,height:g,data:y}}function hh(s){if(s.length%4!==0)throw new Error("RGBA length must be multiple of 4");const u=s.length/4,d=new Uint32Array(u);for(let i=0,f=0;f<u;i+=4,f++){const c=s[i+0],h=s[i+1],g=s[i+2],y=s[i+3];d[f]=y<<24|g<<16|h<<8|c}return d}async function mh(s){const{width:u,height:d,data:i}=await dh(s);return{width:u,height:d,data:hh(i)}}async function ph(s,u=wu,d,i,f,c){if(!s)return()=>{};s.__wgpuCleanup&&s.__wgpuCleanup();const h=!1;var g=!0,y=!0,p=!0;const v=await rd(),C=s.getContext("webgpu"),b=navigator.gpu.getPreferredCanvasFormat();s.style.imageRendering="pixelated",C.__deviceId=v.__id,s.width=u.width*u.pixelScale,s.height=u.height*u.pixelScale,C.configure({device:v,format:b,alphaMode:"opaque"});let T=Md();const V=v.createShaderModule({label:"Rect Shader",code:T});var k=0,B=0,U=0,j=h;const X=()=>{j=!j},K=Ae=>{j=Ae},G=c2(v,{width:u.width,height:u.height,time:0,simIndex:0,showDebug:j,pixelScale:u.pixelScale});function P(){c2(v,{width:u.width,height:u.height,time:k,simIndex:U,showDebug:j,pixelScale:u.pixelScale},G)}const Y=d(),I=o2(v,{mousePos:Y.mousePosition,mouse0Held:Y.mouse0Held,mouse1Held:Y.mouse1Held,mouseRadius:Y.mouseRadius,visibleRect:Y.visibleRect}),te=lh(v,{maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps},u.colors),fe=ah(v,u.colors);function ve(Ae,_e,et){const Ve=Math.ceil(Ae/et),ee=Math.ceil(_e/et);return[Ve,ee]}const ae=16,[ye,ze]=ve(u.width,u.height,ae),ge=v.createBuffer({label:"Chunk Data",size:16*ye*ze,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(ge,0,new Float32Array(4*ye*ze));function H(Ae){o2(v,{mousePos:Ae.mousePosition,mouse0Held:Ae.mouse0Held,mouse1Held:Ae.mouse1Held,mouse2Held:Ae.mouse2Held,mouseRadius:Ae.mouseRadius,visibleRect:Ae.visibleRect},I)}const F=u.width*u.height*4*4,re=u.width*u.height*4*u.pixelScale*u.pixelScale,x=v.createBuffer({label:"Output Texture",size:F+re,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(x,0,new Float32Array((F+re)/4)),console.log("Started building sprite data");const O=["./sprites/Tower.png","./sprites/top_down_tree.png"],N=await Promise.all(O.map(async(Ae,_e)=>{const{width:et,height:Ve,data:ee}=await mh(Ae);return{path:Ae,width:et,height:Ve,data:ee,index:_e}}));function Z(Ae,_e,et="any"){const Ve=et==="all";for(let ee=0;ee<Ae.length;ee++){const{width:xt,height:ot,data:da}=Ae[ee],wn=Math.ceil(xt/_e),Tl=Math.ceil(ot/_e),ln=new Uint8Array(wn*Tl);Ve&&ln.fill(1);for(let At=0;At<ot;At++){const ha=At*xt,ut=Math.floor(At/_e)*wn;for(let Ke=0;Ke<xt;Ke++){const Rl=da[ha+Ke]>>>0>>>24&255,Hu=Math.floor(Ke/_e),gr=ut+Hu;Ve?Rl===0&&(ln[gr]=0):Rl>0&&(ln[gr]=1)}}const Hn=new Uint32Array(xt*ot);for(let At=0;At<ot;At++){const ha=At*xt,ut=Math.floor(At/_e)*wn;for(let Ke=0;Ke<xt;Ke++){const hn=Math.floor(Ke/_e);Hn[ha+Ke]=ln[ut+hn]}}Ae[ee]={...Ae[ee],heightData:Hn}}}Z(N,u.pixelScale,"all"),console.log("Ended building sprite data");const $=64,oe=$*$,ue=4,He=ue+oe*2,De=He*4,Ue=N.length,Ct=v.createBuffer({label:"Sprite Data",size:Ue*De,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),$e=new Uint32Array(Ue*He);for(let Ae=0;Ae<Ue;Ae++){const _e=N[Ae],et=Ae*He;$e[et+0]=_e.width>>>0,$e[et+1]=_e.height>>>0,$e[et+2]=0,$e[et+3]=0;const Ve=_e.data,ee=_e.heightData,xt=Math.min(oe,Ve.length);for(let ot=0;ot<xt;ot++)$e[et+ue+ot]=Ve[ot]>>>0,$e[et+ue+oe+ot]=ee[ot]>>>0}v.queue.writeBuffer(Ct,0,$e);const zt=12,En=4*zt,fn=u.width*u.height*En,ne=v.createBuffer({label:"Prev Cells",size:fn,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),pe=v.createBuffer({label:"Next Cells",size:fn,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ce=Ae=>{const _e=new Float32Array(u.width*u.height*zt),et=ud(Ae,u.width,u.height,u.noiseType,u.fractalOctaves,u.fractalLacunarity,u.fractalGain,u.fractalType,u.frequency);for(let Ve=0;Ve<et.length;Ve++){const ee=Ve*zt;_e[ee]=et[Ve]*100,_e[ee+8]=Math.floor(Math.random()*8)+0}v.queue.writeBuffer(ne,0,_e),v.queue.writeBuffer(pe,0,_e),B=0,U=0,y=!0};var Pe=u.seed;const je=()=>{ce(Pe)},We=()=>{Pe=Math.ceil(Math.random()*1e9),je()};je();const rt=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),yt=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),Ce=ch(v,V,b,{prevCellsBuffer:ne,nextCellsBuffer:pe,terrainBuffer:te,terrainColorsBuffer:fe,viewUniformBuffer:G,inputUniformBuffer:I,outputTextureBuffer:x,cursorQueryBuffer:rt,chunkDataBuffer:ge,spriteDataBuffer:Ct}),dn={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},ll=16,Ft=16,Qe=Math.ceil(u.width/ll),vt=Math.ceil(u.height/Ft);let Ye=!0,fa=0;var pr=d();let Cl=!1;function al(Ae=0){if(C.__deviceId!==v.__id)return;hr.begin();var _e=d();oh(_e,pr)||(H(_e),pr=_e);const et=B%6===0;v.pushErrorScope("validation"),k=Ae*.001,P();const Ve=v.createCommandEncoder({label:"Encoder"});{const ee=Ve.beginComputePass({label:"Step Compute Pass"});ee.setPipeline(Ce.piplines.stepComputePipeline);for(let xt=0;xt<_e.simulationSubSteps;xt++)ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,vt,1),Ye=!Ye,U++,P();c(U),ee.end()}if((B===0||_e.mouse0Held||_e.mouse1Held)&&(p=!0),B<60&&(y=!0,g=!0),_e.visibleRectChanged&&(p=!0),p=!0,g||y){const ee=Ve.beginComputePass({label:"Normal Compute Pass"});ee.setPipeline(Ce.piplines.normalComputePipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,vt,1),ee.end()}if(y){const ee=Ve.beginComputePass({label:"Terrain Texture Compute Pass"});ee.setPipeline(Ce.piplines.terrainTextureComputePipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,vt,1),ee.end()}if(p||y){const ee=Ve.beginComputePass({label:"Shadow Texture Compute Pass"});ee.setPipeline(Ce.piplines.shadowTextureComputePipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,vt,1),ee.end(),_e={..._e,visibleRectChanged:!1}}if(p||y){const ee=Ve.beginComputePass({label:"Fluid Texture Compute Pass"});ee.setPipeline(Ce.piplines.fluidTextureComputePipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,vt,1),ee.end(),_e={..._e,visibleRectChanged:!1}}if(B%10==0&&j){const ee=Ve.beginComputePass({label:"Debug Texture Compute Pass"});ee.setPipeline(Ce.piplines.debugTextureComputePipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,vt,1),ee.end()}if(et){const ee=Ve.beginComputePass({label:"Cursor Query Pass"});ee.setPipeline(Ce.piplines.cursorQueryPipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}if(B%60==0){const ee=Ve.beginComputePass({label:"Total Query Pass"});ee.setPipeline(Ce.piplines.totalQueryPipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}{const ee=Ve.beginComputePass({label:"Chunk Data Pass"});ee.setPipeline(Ce.piplines.chunkDataPipeline),ee.setBindGroup(0,Ye?Ce.bindGroups.unifiedComputeBG_A:Ce.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(ye,ze,1),ee.end()}dn.colorAttachments[0].view=C.getCurrentTexture().createView();{const ee=Ve.beginRenderPass(dn);ee.setPipeline(Ce.piplines.renderPipeline),ee.setBindGroup(0,Ce.bindGroups.renderBG),ee.draw(3),ee.end()}et&&!Cl&&Ve.copyBufferToBuffer(rt,0,yt,0,64),v.queue.submit([Ve.finish()]),v.popErrorScope().then(ee=>{ee&&console.error(ee.message)}),et&&!Cl&&(Cl=!0,yt.mapAsync(GPUMapMode.READ).then(()=>{const ee=new DataView(yt.getMappedRange(0,64)),xt=ee.getFloat32(0,!0),ot=ee.getFloat32(16,!0),da=ee.getFloat32(20,!0),wn=ee.getFloat32(24,!0),Tl=ee.getFloat32(28,!0),ln=ee.getFloat32(48,!0),Hn=ee.getFloat32(52,!0),At=ee.getUint32(56,!0);f({height:xt,normal:{x:ot,y:da,z:wn},fAmount:Tl,fluidTotal:ln,antiFluidTotal:Hn,chunkUpdates:At})}).catch(()=>{}).finally(()=>{yt.unmap(),Cl=!1})),y=!1,p=!1,g=!1,hr.end(Ae),B++,fa=requestAnimationFrame(al)}fa=requestAnimationFrame(al);const rl=()=>{cancelAnimationFrame(fa),G.destroy(),I.destroy(),te.destroy(),fe.destroy(),ne.destroy(),pe.destroy(),x.destroy()};return s.__wgpuCleanup=rl,{cleanup:rl,resetMap:je,randomizeMap:We,toggleShowDebug:X,setShowDebug:K}}const gh=W.forwardRef(({noiseSettings:s=wu,inputRef:u,setInput:d,setWebGPUHandle:i,setCursorQuery:f,style:c,setSimIndex:h,children:g},y)=>{const p=W.useRef(null);return W.useImperativeHandle(y,()=>p.current,[]),W.useEffect(()=>{if(!p.current)return;let v=()=>{};return(async()=>{const C=await ph(p.current,s,()=>u.current,d,f,h);v=C.cleanup,i(C)})(),()=>v?.()},[s,d,i,f]),S.jsx("canvas",{ref:p,style:{...c,display:"block",width:"100%",height:"100%"},children:g})}),yh=tn.memo(gh,(s,u)=>s.noiseSettings===u.noiseSettings&&s.children===u.children),vh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function xh({cursorQuery:s}){var c=Math.ceil(s.height),h=Math.abs(s.fAmount<0?Math.floor(s.fAmount):Math.ceil(s.fAmount));h+c>200&&(h=200-c);const g=c/200*150,y=h/200*150;var p="";return h>0&&(Math.abs(s.fAmount)<1?p=" < 1":p=`${h}`),S.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),S.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:s.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"0px"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:p})}),S.jsx("div",{style:{width:"50px",height:`${g}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:s.height>0?`${c}`:""})})]})}function bh({input:s}){return S.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${s.mousePosition.x}, ${s.mousePosition.y})`})}const Ie=({children:s})=>S.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:s});function _h(){return S.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:S.jsx(nn,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:S.jsxs(nn.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsx(nn.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),S.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[S.jsxs("div",{children:[S.jsx(Ie,{children:"F11"})," — Toggle Fullscreen"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"F9"})," — Toggle Controls"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"F8"})," — Toggle Debug Stats"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"W"}),S.jsx(Ie,{children:"A"}),S.jsx(Ie,{children:"S"}),S.jsx(Ie,{children:"D"})," or ",S.jsx(Ie,{children:"←"}),S.jsx(Ie,{children:"→"}),S.jsx(Ie,{children:"↑"}),S.jsx(Ie,{children:"↓"})," — Pan Camera"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"ScrollWheel"})," — Zoom"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"Shift"})," +"," ",S.jsx(Ie,{children:"ScrollWheel"})," — Change Brush Radius"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"LMB"}),"/",S.jsx(Ie,{children:"RMB"})," — (Paint / Remove) Fluid"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"Spacebar"})," — Toggle Pause"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"Tab"})," / ",S.jsx(Ie,{children:"Shift"}),"+",S.jsx(Ie,{children:"Tab"})," — Increase / Decrease Speed"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"C"})," — Clear Map"]}),S.jsxs("div",{children:[S.jsx(Ie,{children:"R"})," — Randmoize Map"]})]})]})})})}var Sh=["color","size","title","className"];function I0(){return I0=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var i in d)({}).hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},I0.apply(null,arguments)}function Ch(s,u){if(s==null)return{};var d,i,f=Th(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)d=c[i],u.indexOf(d)===-1&&{}.propertyIsEnumerable.call(s,d)&&(f[d]=s[d])}return f}function Th(s,u){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;d[i]=s[i]}return d}var U2=W.forwardRef(function(s,u){var d=s.color,i=d===void 0?"currentColor":d,f=s.size,c=f===void 0?"1em":f,h=s.title,g=h===void 0?null:h,y=s.className,p=y===void 0?"":y,v=Ch(s,Sh);return tn.createElement("svg",I0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",p].filter(Boolean).join(" ")},v),g?tn.createElement("title",null,g):null,tn.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});U2.propTypes={color:gt.string,size:gt.oneOfType([gt.string,gt.number]),title:gt.string,className:gt.string};var Rh=["color","size","title","className"];function $0(){return $0=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var i in d)({}).hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},$0.apply(null,arguments)}function Dh(s,u){if(s==null)return{};var d,i,f=zh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)d=c[i],u.indexOf(d)===-1&&{}.propertyIsEnumerable.call(s,d)&&(f[d]=s[d])}return f}function zh(s,u){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;d[i]=s[i]}return d}var j2=W.forwardRef(function(s,u){var d=s.color,i=d===void 0?"currentColor":d,f=s.size,c=f===void 0?"1em":f,h=s.title,g=h===void 0?null:h,y=s.className,p=y===void 0?"":y,v=Dh(s,Rh);return tn.createElement("svg",$0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",p].filter(Boolean).join(" ")},v),g?tn.createElement("title",null,g):null,tn.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});j2.propTypes={color:gt.string,size:gt.oneOfType([gt.string,gt.number]),title:gt.string,className:gt.string};const Ht=[.25,.5,1,2,3,4,8],Y2=(s,u,d)=>Math.min(d,Math.max(u,s));function Mh(s,u=!0){if(u){var d=(Ht.indexOf(s)+1)%Ht.length;return Ht[d]}else{var d=Y2(Ht.indexOf(s)+1,0,Ht.length-1);return Ht[d]}}function Ah(s,u=!0){if(u){var d=(Ht.indexOf(s)-1+Ht.length)%Ht.length;return Ht[d]}else{var d=Y2(Ht.indexOf(s)-1,0,Ht.length-1);return Ht[d]}}function Oh({gameSpeed:s,paused:u,onChange:d,className:i,size:f}){const c=p=>d({paused:!1,gameSpeed:p}),h=()=>d({paused:!u,gameSpeed:s}),y={backgroundColor:"rgba(99, 99, 99, 0.57)",border:"4px solid white",borderRadius:0,fontSize:"20px",width:40,height:40,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none"};return S.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:S.jsxs(tc,{className:`${i} rounded-0`,size:f,style:{border:"none"},children:[S.jsx(sa,{type:"button",variant:"primary",onClick:h,"aria-pressed":u,"aria-label":u?"Resume":"Pause",title:u?"Resume":"Pause",style:y,children:u?S.jsx(j2,{}):S.jsx(U2,{})}),Ht.map(p=>S.jsx(sa,{type:"button",variant:s===p&&!u?"primary":"outline-secondary",active:s===p&&!u,onClick:()=>c(p),"aria-pressed":s===p&&!u,"aria-label":p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,title:p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,style:{...y,color:s===p&&!u?"white":"darkgray",marginLeft:"-4px",fontSize:p<1?"15px":""},children:p<1?`1/${Math.round(1/p)}x`:`${p}x`},p))]})})}function Eh({cursorQuery:s,gameSpeed:u,mode:d="full",simIndex:i}){const[f,c]=W.useState(0),[h,g]=W.useState(0),[y,p]=W.useState(0);W.useEffect(()=>{const T=setInterval(()=>{c(hr.fps),g(hr.cpuMs),p(hr.frameCount)},250);return()=>clearInterval(T)},[]);const v=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),C=`${h.toFixed(2)}`.padStart(5,"0"),b=s.chunkUpdates*16*16*u*4;return d=="simple"?S.jsx("div",{children:`FPS: ${f}`}):S.jsx(nn,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:S.jsxs(nn.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsxs(nn.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",S.jsx(Ie,{children:"F8"})," to close"]}),S.jsx("div",{children:`FPS: ${f} (Frame Duration: ${C} ms) (Frames: ${v.format(y)})`}),S.jsx("div",{children:`Simulation Steps: ${v.format(i)}`}),S.jsx("div",{children:`Chunk Updates: ${v.format(s.chunkUpdates)}`}),S.jsx("div",{children:`Cell Updates per frame: ${v.format(b)}`}),S.jsx("div",{children:`Total Fluid: ${v.format(Math.ceil(s.fluidTotal))}`}),S.jsx("div",{children:`Total Anti Fluid: ${v.format(Math.ceil(s.antiFluidTotal))}`}),S.jsx("div",{children:`Total Combined Fluid: ${v.format(Math.ceil(s.fluidTotal-s.antiFluidTotal))}`})]})})}function Vh({tabs:s,initialActiveKey:u=null,onTabChange:d,panelHeight:i=150,className:f,children:c,closeOnEscape:h=!0,closeOnOutsideClick:g=!0,hotkey:y="b"}){const p={imageRendering:"pixelated",pointerEvents:"none",aspectRatio:"initial",width:"100%"},v=W.useMemo(()=>[{key:"terraform",icon:S.jsx("img",{src:"./sprites/icon_paintbrush.png",style:p}),label:"Terraform",hotkey:"1"},{key:"econ",icon:S.jsx("img",{src:"./sprites/icon_coin.png",style:p}),label:"Economy",hotkey:"2"},{key:"power",icon:S.jsx("img",{src:"./sprites/icon_power.png",style:p}),label:"Power",hotkey:"3"},{key:"defend",icon:S.jsx("img",{src:"./sprites/icon_shield.png",style:p}),label:"Defend",hotkey:"4"}],[]),C=s?.length?s:v,[b,T]=W.useState(u),V=W.useRef(null),[k,B]=W.useState(u),U=I=>{const te=b===I?null:I;T(te),d?.(te),te!=null&&B(te)},j=()=>{k!=null&&U(k)},X=()=>{T(null),d?.(null)},K=48,G=44,P=44,Y=2.5;return W.useEffect(()=>{if(!g)return;const I=te=>{if(!b)return;const fe=te.target;if(!fe)return;const ve=V.current;ve&&(ve.contains(fe)||(T(null),d?.(null)))};return window.addEventListener("pointerdown",I,!0),()=>window.removeEventListener("pointerdown",I,!0)},[b,g,d]),W.useEffect(()=>{const I=te=>{te.key==="Escape"&&b?X():te.key===y?b?b&&X():j():C.forEach(fe=>{te.key==fe.hotkey&&U(fe.key)})};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[b,h,d]),S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
        .tabButton:hover
        {
            height: ${P+4}px;
        }
      `}),S.jsx("div",{className:f,style:{position:"absolute",left:0,right:0,bottom:0,pointerEvents:"none",zIndex:10},children:S.jsxs("div",{ref:V,style:{position:"absolute",left:0,right:0,bottom:0,height:i+K,transform:b?"translateY(0)":`translateY(${i}px)`,transition:"transform 220ms ease",display:"flex",flexDirection:"column",pointerEvents:"none"},children:[S.jsx("div",{style:{height:K,display:"flex",justifyContent:"start",alignItems:"flex-end",gap:8,padding:"0 12px",paddingLeft:"100px",borderTopLeftRadius:16,borderTopRightRadius:16},children:S.jsx(tc,{style:{display:"inline-flex",alignItems:"flex-end",pointerEvents:"auto"},onMouseDown:I=>I.preventDefault(),children:C.map(I=>{const te=b===I.key;return S.jsx(sa,{className:"tabButton",onClick:()=>!I.disabled&&U(I.key),disabled:I.disabled,style:{borderTop:"solid white 4px",borderLeft:"solid white 4px",borderRight:"solid white 4px",borderBottom:"none",borderRadius:"0px 0px 0px 0px",width:G,height:te?P*2:P,margin:`0px ${Y}px`,backgroundColor:"rgba(0,0,0,.35)",background:"none",display:"inline-flex",alignItems:"flex-start",outline:"none !important",padding:"4px"},"aria-label":I.label,title:I.label,children:I.icon},I.key)})})}),S.jsx(nn,{text:"light",style:{height:i,borderRadius:0,margin:0,boxShadow:b?"0 -6px 18px rgba(0,0,0,.45)":"none",pointerEvents:b?"auto":"none",backgroundColor:"rgba(46, 44, 44, 0.51)",borderTop:"solid white 4px"},children:S.jsx(nn.Body,{style:{display:"flex",gap:12,alignItems:"stretch",justifyContent:"flex-start",padding:12},children:b?C.find(I=>I.key===b)?.content??S.jsxs("div",{style:{opacity:.8,fontSize:14},children:[S.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",S.jsx("b",{children:b})," ","tab."]}),S.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]}):S.jsx("div",{style:{opacity:.65},children:"Choose a tab to open the menu."})})}),S.jsx("div",{style:{position:"relative",bottom:i},children:c})]})})]})}function wh({settings:s,setSettings:u,input:d,setInput:i,cursorQuery:f,paused:c,setPaused:h,gameSpeed:g,setGameSpeed:y,simIndex:p,showControlsUI:v,showDebugUI:C}){return S.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[S.jsx("div",{id:"output"}),v&&S.jsx(_h,{}),S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx(Eh,{cursorQuery:f,gameSpeed:g,simIndex:p,mode:C?"full":"simple"})}),S.jsxs(Vh,{children:[S.jsx(bh,{input:d}),S.jsx(Oh,{gameSpeed:g,paused:c,onChange:({paused:b,gameSpeed:T})=>{h(b),y(T),i({...d,simulationSubSteps:b?0:Math.ceil(4*T)})}}),S.jsx(xh,{cursorQuery:f})]})]})}const Hh=s=>{const u=s;if(!u)return!1;const d=u.tagName?.toLowerCase();return d==="input"||d==="textarea"||u.isContentEditable||d==="select"},An=(s,u,d)=>Math.min(d,Math.max(u,s)),s2=(s,u,d,i)=>{const f=Math.max(0,(d-s)/2),c=Math.max(0,(i-u)/2);return{xMin:-f,xMax:f,yMin:-c,yMax:c}};function Gh(){const[s,u]=W.useState(wu),[d,i]=tn.useState(!1),[f,c]=tn.useState(1),[h,g]=W.useState(0),[y,p]=W.useState(!0),[v,C]=W.useState(!1),[b,T]=W.useState(sh),V=W.useRef(b);W.useEffect(()=>{V.current=b},[b]);const[k,B]=W.useState(vh),U=W.useRef(null),[j,X]=W.useState({width:1920,height:1080}),[K,G]=W.useState({x:0,y:0}),[P,Y]=W.useState(!1),[I,te]=W.useState(2),[fe,ve]=W.useState(null),ae=W.useRef(null);W.useEffect(()=>{ae.current=fe},[fe]);const ye=W.useRef(null),ze=W.useCallback((F,re,x,O=!1)=>{const N=U.current;if(!N)return;const Z=F!==void 0&&re!==void 0?{x:F,y:re}:ye.current;if(!Z)return;const $=N.getBoundingClientRect();if($.width===0||$.height===0)return;const oe=N.width/s.pixelScale/$.width,ue=N.height/s.pixelScale/$.height,He=Math.floor((Z.x-$.left)*oe),De=Math.floor((Z.y-$.top)*ue);T(Ue=>{const Ct=An(He,0,s.width-1),$e=An(De,0,s.height-1);return!O&&Ue.mousePosition.x===Ct&&Ue.mousePosition.y===$e?Ue:{...Ue,mousePosition:{x:Ct,y:$e},mouseMoved:O,cursorVisible:x==null||x==U.current}})},[s.width,s.height,s.pixelScale]),ge=W.useCallback((F,re)=>{const x=U.current;if(!x)return{x:0,y:0};const O={x:F,y:re},N=x.getBoundingClientRect();if(N.width===0||N.height===0)return{x:0,y:0};const Z=x.width/s.pixelScale/N.width,$=x.height/s.pixelScale/N.height,oe=Math.floor((O.x-N.left)*Z),ue=Math.floor((O.y-N.top)*$),He=An(oe,0,s.width-1),De=An(ue,0,s.height-1);return{x:He,y:De}},[s.width,s.height,s.pixelScale]);W.useEffect(()=>{const F=new Set;let re=0,x=performance.now();const O=600;ae.current?.setShowDebug(v);const N=()=>{const ne=window.innerWidth,pe=window.innerHeight,ce=s.width/s.height;let Pe=ne,je=Pe/ce;return je<pe&&(je=pe,Pe=je*ce),{vw:ne,vh:pe,baseW:Pe,baseH:je}},Z=()=>{const{vw:ne,baseW:pe}=N();return ne/pe},$=ne=>{if(Hh(ne.target))return;const pe=ne.key.toLowerCase();(pe==="w"||pe==="a"||pe==="s"||pe==="d"||pe==="arrowup"||pe==="arrowleft"||pe==="arrowdown"||pe==="arrowright")&&(F.add(pe),ne.preventDefault());const ce=()=>{i(We=>{let rt=!We;return T(yt=>({...yt,simulationSubSteps:rt?0:Math.ceil(4*f)})),rt}),ne.preventDefault()},Pe=()=>{c(We=>{let rt=Mh(We,!1);return T(yt=>({...yt,simulationSubSteps:d?0:Math.ceil(4*rt)})),rt}),ne.preventDefault()},je=()=>{c(We=>{let rt=Ah(We,!1);return T(yt=>({...yt,simulationSubSteps:d?0:Math.ceil(4*rt)})),rt}),ne.preventDefault()};ne.code=="Space"?ce():ne.code=="Tab"?(d?ce():ne.shiftKey?je():Pe(),ne.preventDefault()):ne.code=="F9"?(p(We=>!We),ne.preventDefault()):ne.code=="F8"?(C(We=>(ae.current?.setShowDebug(!We),!We)),ne.preventDefault()):ne.code=="KeyC"?(ae.current?.resetMap(),ne.preventDefault()):!ne.ctrlKey&&ne.code=="KeyR"&&(ae.current?.randomizeMap(),ne.preventDefault())},oe=ne=>{const pe=ne.key.toLowerCase();F.delete(pe)};function ue(ne,pe,ce,Pe){const je=Math.max(ne/ce,pe/Pe),We=Math.min(ne*4/ce,pe*4/Pe);return{minScale:je,maxScale:We}}function He(){const ne=window.innerWidth,pe=window.innerHeight,ce=s.width/s.height;let Pe=ne,je=Pe/ce;je<pe&&(je=pe,Pe=je*ce);const{minScale:We,maxScale:rt}=ue(ne,pe,Pe,je),yt=Math.min(Math.max(I,We),rt),Ce=Pe*yt,dn=je*yt,{xMin:ll,xMax:Ft,yMin:Qe,yMax:vt}=s2(ne,pe,Ce,dn);X({width:Ce,height:dn}),G(Ye=>({x:An(Ye.x,ll,Ft),y:An(Ye.y,Qe,vt)})),requestAnimationFrame(()=>ze()),J()}const De=ne=>{let pe=0,ce=0;if((F.has("w")||F.has("arrowup"))&&(ce-=1),(F.has("s")||F.has("arrowdown"))&&(ce+=1),(F.has("a")||F.has("arrowleft"))&&(pe-=1),(F.has("d")||F.has("arrowright"))&&(pe+=1),pe!==0||ce!==0){const Pe=Math.hypot(pe,ce)||1;pe/=Pe,ce/=Pe;const je=window.innerWidth,We=window.innerHeight,rt=j.width,yt=j.height,{xMin:Ce,xMax:dn,yMin:ll,yMax:Ft}=s2(je,We,rt,yt);G(Qe=>({x:An(Qe.x-pe*O*I*ne,Ce,dn),y:An(Qe.y-ce*O*I*ne,ll,Ft)})),requestAnimationFrame(()=>ze()),J()}};function Ue(ne){ne.preventDefault();const pe=Math.sign(ne.deltaY)*-1;if(ne.shiftKey)T(ce=>{const Pe=.1*ce.mouseRadius*pe,je=Math.min(Math.max(5,ce.mouseRadius+Pe),s.width/2);return{...ce,mouseRadius:je}});else{const ce=Z(),Pe=4;te(je=>An(je+.1*je*pe,ce,Pe))}}function Ct(ne){ye.current={x:ne.clientX,y:ne.clientY},ze(ne.clientX,ne.clientY,ne.target,!0)}const $e=ne=>{ne.button===2&&ne.preventDefault(),T(pe=>{const ce={...pe};return ne.button===0&&(ce.mouse0Held=!0,ce.mouse0Pressed=!0),ne.button===1&&(ce.mouse1Held=!0,ce.mouse1Pressed=!0),ne.button===2&&(ce.mouse2Held=!0,ce.mouse2Pressed=!0),ce})},zt=ne=>{T(pe=>{const ce={...pe};return ne.button===0&&(ce.mouse0Held=!1,ce.mouse0Pressed=!1),ne.button===1&&(ce.mouse1Held=!1,ce.mouse1Pressed=!1),ne.button===2&&(ce.mouse2Held=!1,ce.mouse2Pressed=!1),ce})};function En(ne){ne.preventDefault()}const fn=async ne=>{const pe=(ne-x)/1e3;x=ne,De(pe),J(),re=requestAnimationFrame(fn),T(ce=>({...ce,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseMoved:!1}))};return window.addEventListener("mousemove",Ct),U.current?.addEventListener("mouseup",zt),window.addEventListener("contextmenu",En),U.current?.addEventListener("mousedown",$e),window.addEventListener("keydown",$),window.addEventListener("keyup",oe),U.current?.addEventListener("wheel",Ue,{passive:!1}),window.addEventListener("resize",He),He(),re=requestAnimationFrame(fn),J(),()=>{cancelAnimationFrame(re),window.removeEventListener("mousemove",Ct),U.current?.removeEventListener("mouseup",zt),window.removeEventListener("contextmenu",En),U.current?.removeEventListener("mousedown",$e),window.removeEventListener("keydown",$),window.removeEventListener("keyup",oe),U.current?.removeEventListener("wheel",Ue),window.removeEventListener("resize",He)}},[j.width,j.height,I,d,T,i,f,c,p]);const H=W.useRef(null),J=W.useCallback((F=!0)=>{const re=()=>{if(!U.current)return;const O=ge(0,0),N=ge(window.innerWidth,window.innerHeight),Z={x0:O.x,y0:O.y,x1:N.x,y1:N.y,width:N.x-O.x,height:N.y-O.y};!Z||H.current&&Z.x0===H.current.x0&&Z.y0===H.current.y0&&Z.x1===H.current.x1&&Z.y1===H.current.y1||(H.current=Z,T(oe=>({...oe,visibleRect:Z,visibleRectChanged:!0})))};F?requestAnimationFrame(re):re()},[T,ge,window.innerWidth,window.innerHeight]);return S.jsx(S.Fragment,{children:S.jsxs("div",{id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[S.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:j.width,height:j.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${K.x}px, ${K.y}px, 0)`,transition:P?"transform 360ms ease-out":"none",willChange:"transform"},children:S.jsx(yh,{ref:U,noiseSettings:s,inputRef:V,setInput:T,setWebGPUHandle:ve,setCursorQuery:B,setSimIndex:g})}),S.jsx(wh,{settings:s,setSettings:u,input:b,setInput:F=>{T(F)},cursorQuery:k,paused:d,setPaused:i,gameSpeed:f,setGameSpeed:c,simIndex:h,showControlsUI:y,showDebugUI:v})]})})}ad.createRoot(document.getElementById("root")).render(S.jsx(tn.StrictMode,{children:S.jsx(Gh,{})}));
