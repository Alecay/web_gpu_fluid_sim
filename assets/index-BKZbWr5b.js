(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))i(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(f){if(f.ep)return;f.ep=!0;const c=s(f);fetch(f.href,c)}})();function gr(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Io={exports:{}},or={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function e3(){if(Td)return or;Td=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(i,f,c){var h=null;if(c!==void 0&&(h=""+c),f.key!==void 0&&(h=""+f.key),"key"in f){c={};for(var m in f)m!=="key"&&(c[m]=f[m])}else c=f;return f=c.ref,{$$typeof:o,type:i,key:h,ref:f!==void 0?f:null,props:c}}return or.Fragment=r,or.jsx=s,or.jsxs=s,or}var Rd;function t3(){return Rd||(Rd=1,Io.exports=e3()),Io.exports}var S=t3(),ec={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function n3(){if(Dd)return _e;Dd=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,N={};function G(x,A,Q){this.props=x,this.context=A,this.refs=N,this.updater=Q||T}G.prototype.isReactComponent={},G.prototype.setState=function(x,A){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,A,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Y(){}Y.prototype=G.prototype;function V(x,A,Q){this.props=x,this.context=A,this.refs=N,this.updater=Q||T}var j=V.prototype=new Y;j.constructor=V,w(j,G.prototype),j.isPureReactComponent=!0;var Z=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function X(x,A,Q,q,J,se){return Q=se.ref,{$$typeof:o,type:x,key:A,ref:Q!==void 0?Q:null,props:se}}function ue(x,A){return X(x.type,A,void 0,void 0,void 0,x.props)}function ee(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function pe(x){var A={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Q){return A[Q]})}var ve=/\/+/g;function re(x,A){return typeof x=="object"&&x!==null&&x.key!=null?pe(""+x.key):A.toString(36)}function fe(){}function Re(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(fe,fe):(x.status="pending",x.then(function(A){x.status==="pending"&&(x.status="fulfilled",x.value=A)},function(A){x.status==="pending"&&(x.status="rejected",x.reason=A)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function he(x,A,Q,q,J){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var le=!1;if(x===null)le=!0;else switch(se){case"bigint":case"string":case"number":le=!0;break;case"object":switch(x.$$typeof){case o:case r:le=!0;break;case v:return le=x._init,he(le(x._payload),A,Q,q,J)}}if(le)return J=J(x),le=q===""?"."+re(x,0):q,Z(J)?(Q="",le!=null&&(Q=le.replace(ve,"$&/")+"/"),he(J,A,Q,"",function(Oe){return Oe})):J!=null&&(ee(J)&&(J=ue(J,Q+(J.key==null||x&&x.key===J.key?"":(""+J.key).replace(ve,"$&/")+"/")+le)),A.push(J)),1;le=0;var He=q===""?".":q+":";if(Z(x))for(var be=0;be<x.length;be++)q=x[be],se=He+re(q,be),le+=he(q,A,Q,se,J);else if(be=b(x),typeof be=="function")for(x=be.call(x),be=0;!(q=x.next()).done;)q=q.value,se=He+re(q,be++),le+=he(q,A,Q,se,J);else if(se==="object"){if(typeof x.then=="function")return he(Re(x),A,Q,q,J);throw A=String(x),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return le}function B(x,A,Q){if(x==null)return x;var q=[],J=0;return he(x,q,"","",function(se){return A.call(Q,se,J++)}),q}function F(x){if(x._status===-1){var A=x._result;A=A(),A.then(function(Q){(x._status===0||x._status===-1)&&(x._status=1,x._result=Q)},function(Q){(x._status===0||x._status===-1)&&(x._status=2,x._result=Q)}),x._status===-1&&(x._status=0,x._result=A)}if(x._status===1)return x._result.default;throw x._result}var $=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function I(){}return _e.Children={map:B,forEach:function(x,A,Q){B(x,function(){A.apply(this,arguments)},Q)},count:function(x){var A=0;return B(x,function(){A++}),A},toArray:function(x){return B(x,function(A){return A})||[]},only:function(x){if(!ee(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},_e.Component=G,_e.Fragment=s,_e.Profiler=f,_e.PureComponent=V,_e.StrictMode=i,_e.Suspense=y,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,_e.__COMPILER_RUNTIME={__proto__:null,c:function(x){return k.H.useMemoCache(x)}},_e.cache=function(x){return function(){return x.apply(null,arguments)}},_e.cloneElement=function(x,A,Q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var q=w({},x.props),J=x.key,se=void 0;if(A!=null)for(le in A.ref!==void 0&&(se=void 0),A.key!==void 0&&(J=""+A.key),A)!L.call(A,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&A.ref===void 0||(q[le]=A[le]);var le=arguments.length-2;if(le===1)q.children=Q;else if(1<le){for(var He=Array(le),be=0;be<le;be++)He[be]=arguments[be+2];q.children=He}return X(x.type,J,void 0,void 0,se,q)},_e.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},_e.createElement=function(x,A,Q){var q,J={},se=null;if(A!=null)for(q in A.key!==void 0&&(se=""+A.key),A)L.call(A,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(J[q]=A[q]);var le=arguments.length-2;if(le===1)J.children=Q;else if(1<le){for(var He=Array(le),be=0;be<le;be++)He[be]=arguments[be+2];J.children=He}if(x&&x.defaultProps)for(q in le=x.defaultProps,le)J[q]===void 0&&(J[q]=le[q]);return X(x,se,void 0,void 0,null,J)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(x){return{$$typeof:m,render:x}},_e.isValidElement=ee,_e.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:F}},_e.memo=function(x,A){return{$$typeof:p,type:x,compare:A===void 0?null:A}},_e.startTransition=function(x){var A=k.T,Q={};k.T=Q;try{var q=x(),J=k.S;J!==null&&J(Q,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(I,$)}catch(se){$(se)}finally{k.T=A}},_e.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},_e.use=function(x){return k.H.use(x)},_e.useActionState=function(x,A,Q){return k.H.useActionState(x,A,Q)},_e.useCallback=function(x,A){return k.H.useCallback(x,A)},_e.useContext=function(x){return k.H.useContext(x)},_e.useDebugValue=function(){},_e.useDeferredValue=function(x,A){return k.H.useDeferredValue(x,A)},_e.useEffect=function(x,A,Q){var q=k.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(x,A)},_e.useId=function(){return k.H.useId()},_e.useImperativeHandle=function(x,A,Q){return k.H.useImperativeHandle(x,A,Q)},_e.useInsertionEffect=function(x,A){return k.H.useInsertionEffect(x,A)},_e.useLayoutEffect=function(x,A){return k.H.useLayoutEffect(x,A)},_e.useMemo=function(x,A){return k.H.useMemo(x,A)},_e.useOptimistic=function(x,A){return k.H.useOptimistic(x,A)},_e.useReducer=function(x,A,Q){return k.H.useReducer(x,A,Q)},_e.useRef=function(x){return k.H.useRef(x)},_e.useState=function(x){return k.H.useState(x)},_e.useSyncExternalStore=function(x,A,Q){return k.H.useSyncExternalStore(x,A,Q)},_e.useTransition=function(){return k.H.useTransition()},_e.version="19.1.1",_e}var Ed;function Cc(){return Ed||(Ed=1,ec.exports=n3()),ec.exports}var M=Cc();const gt=gr(M);var tc={exports:{}},cr={},nc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function l3(){return wd||(wd=1,(function(o){function r(B,F){var $=B.length;B.push(F);e:for(;0<$;){var I=$-1>>>1,x=B[I];if(0<f(x,F))B[I]=F,B[$]=x,$=I;else break e}}function s(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var F=B[0],$=B.pop();if($!==F){B[0]=$;e:for(var I=0,x=B.length,A=x>>>1;I<A;){var Q=2*(I+1)-1,q=B[Q],J=Q+1,se=B[J];if(0>f(q,$))J<x&&0>f(se,q)?(B[I]=se,B[J]=$,I=J):(B[I]=q,B[Q]=$,I=Q);else if(J<x&&0>f(se,$))B[I]=se,B[J]=$,I=J;else break e}}return F}function f(B,F){var $=B.sortIndex-F.sortIndex;return $!==0?$:B.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();o.unstable_now=function(){return h.now()-m}}var y=[],p=[],v=1,C=null,b=3,T=!1,w=!1,N=!1,G=!1,Y=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function Z(B){for(var F=s(p);F!==null;){if(F.callback===null)i(p);else if(F.startTime<=B)i(p),F.sortIndex=F.expirationTime,r(y,F);else break;F=s(p)}}function k(B){if(N=!1,Z(B),!w)if(s(y)!==null)w=!0,L||(L=!0,re());else{var F=s(p);F!==null&&he(k,F.startTime-B)}}var L=!1,X=-1,ue=5,ee=-1;function pe(){return G?!0:!(o.unstable_now()-ee<ue)}function ve(){if(G=!1,L){var B=o.unstable_now();ee=B;var F=!0;try{e:{w=!1,N&&(N=!1,V(X),X=-1),T=!0;var $=b;try{t:{for(Z(B),C=s(y);C!==null&&!(C.expirationTime>B&&pe());){var I=C.callback;if(typeof I=="function"){C.callback=null,b=C.priorityLevel;var x=I(C.expirationTime<=B);if(B=o.unstable_now(),typeof x=="function"){C.callback=x,Z(B),F=!0;break t}C===s(y)&&i(y),Z(B)}else i(y);C=s(y)}if(C!==null)F=!0;else{var A=s(p);A!==null&&he(k,A.startTime-B),F=!1}}break e}finally{C=null,b=$,T=!1}F=void 0}}finally{F?re():L=!1}}}var re;if(typeof j=="function")re=function(){j(ve)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Re=fe.port2;fe.port1.onmessage=ve,re=function(){Re.postMessage(null)}}else re=function(){Y(ve,0)};function he(B,F){X=Y(function(){B(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(B){switch(b){case 1:case 2:case 3:var F=3;break;default:F=b}var $=b;b=F;try{return B()}finally{b=$}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=b;b=B;try{return F()}finally{b=$}},o.unstable_scheduleCallback=function(B,F,$){var I=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,B){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,B={id:v++,callback:F,priorityLevel:B,startTime:$,expirationTime:x,sortIndex:-1},$>I?(B.sortIndex=$,r(p,B),s(y)===null&&B===s(p)&&(N?(V(X),X=-1):N=!0,he(k,$-I))):(B.sortIndex=x,r(y,B),w||T||(w=!0,L||(L=!0,re()))),B},o.unstable_shouldYield=pe,o.unstable_wrapCallback=function(B){var F=b;return function(){var $=b;b=F;try{return B.apply(this,arguments)}finally{b=$}}}})(lc)),lc}var Md;function a3(){return Md||(Md=1,nc.exports=l3()),nc.exports}var ac={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function r3(){if(zd)return _t;zd=1;var o=Cc();function r(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var i={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(y,p,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:y,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,_t.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return c(y,p,null,v)},_t.flushSync=function(y){var p=h.T,v=i.p;try{if(h.T=null,i.p=2,y)return y()}finally{h.T=p,i.p=v,i.d.f()}},_t.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(y,p))},_t.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},_t.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,C=m(v,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?i.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:b,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:C,integrity:b,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},_t.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(y)},_t.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,C=m(v,p.crossOrigin);i.d.L(y,v,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},_t.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=m(p.as,p.crossOrigin);i.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(y)},_t.requestFormReset=function(y){i.d.r(y)},_t.unstable_batchedUpdates=function(y,p){return y(p)},_t.useFormState=function(y,p,v){return h.H.useFormState(y,p,v)},_t.useFormStatus=function(){return h.H.useHostTransitionStatus()},_t.version="19.1.1",_t}var Ad;function $d(){if(Ad)return ac.exports;Ad=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),ac.exports=r3(),ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function u3(){if(Od)return cr;Od=1;var o=a3(),r=Cc(),s=$d();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return m(a),e;if(u===l)return m(a),t;u=u.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=u;else{for(var d=!1,g=a.child;g;){if(g===n){d=!0,n=a,l=u;break}if(g===l){d=!0,l=a,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,l=a;break}if(g===l){d=!0,l=u,n=a;break}g=g.sibling}if(!d)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case G:return"Profiler";case N:return"StrictMode";case k:return"Suspense";case L:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case j:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var he=Array.isArray,B=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},I=[],x=-1;function A(e){return{current:e}}function Q(e){0>x||(e.current=I[x],I[x]=null,x--)}function q(e,t){x++,I[x]=e.current,e.current=t}var J=A(null),se=A(null),le=A(null),He=A(null);function be(e,t){switch(q(le,t),q(se,e),q(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$f(t),e=If(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(J),q(J,e)}function Oe(){Q(J),Q(se),Q(le)}function Ke(e){e.memoizedState!==null&&q(He,e);var t=J.current,n=If(t,e.type);t!==n&&(q(se,e),q(J,n))}function Ie(e){se.current===e&&(Q(J),Q(se)),He.current===e&&(Q(He),lr._currentValue=$)}var et=Object.prototype.hasOwnProperty,Se=o.unstable_scheduleCallback,bt=o.unstable_cancelCallback,Ue=o.unstable_shouldYield,te=o.unstable_requestPaint,ne=o.unstable_now,xe=o.unstable_getCurrentPriorityLevel,we=o.unstable_ImmediatePriority,ke=o.unstable_UserBlockingPriority,Ye=o.unstable_NormalPriority,ut=o.unstable_LowPriority,ft=o.unstable_IdlePriority,kt=o.log,an=o.unstable_setDisableYieldValue,oe=null,Ce=null;function Qe(e){if(typeof kt=="function"&&an(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(oe,e)}catch{}}var Ae=Math.clz32?Math.clz32:vl,Kt=Math.log,ie=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(Kt(e)/ie|0)|0}var xl=256,bl=4194304;function rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sl(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~u,l!==0?a=rn(l):(d&=g,d!==0?a=rn(d):n||(n=g&~e,n!==0&&(a=rn(n))))):(g=l&~u,g!==0?a=rn(g):d!==0?a=rn(d):n||(n=l&~e,n!==0&&(a=rn(n)))),a===0?0:t!==0&&t!==a&&(t&u)===0&&(u=a&-a,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:a}function Fn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Nu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(){var e=xl;return xl<<=1,(xl&4194048)===0&&(xl=256),e}function Bc(){var e=bl;return bl<<=1,(bl&62914560)===0&&(bl=4194304),e}function Xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ha(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y2(e,t,n,l,a,u){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,_=e.expirationTimes,O=e.hiddenUpdates;for(n=d&~n;0<n;){var P=31-Ae(n),K=1<<P;g[P]=0,_[P]=-1;var H=O[P];if(H!==null)for(O[P]=null,P=0;P<H.length;P++){var U=H[P];U!==null&&(U.lane&=-536870913)}n&=~K}l!==0&&Gc(e,l,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function Gc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ae(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Ae(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jc(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:vd(e.type))}function q2(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Dn=Math.random().toString(36).slice(2),St="__reactFiber$"+Dn,Dt="__reactProps$"+Dn,Cl="__reactContainer$"+Dn,Zu="__reactEvents$"+Dn,Z2="__reactListeners$"+Dn,L2="__reactHandles$"+Dn,kc="__reactResources$"+Dn,ma="__reactMarker$"+Dn;function Lu(e){delete e[St],delete e[Dt],delete e[Zu],delete e[Z2],delete e[L2]}function _l(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cl]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[St])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function Tl(e){if(e=e[St]||e[Cl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function pa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Rl(e){var t=e[kc];return t||(t=e[kc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dt(e){e[ma]=!0}var Nc=new Set,Xc={};function Jn(e,t){Dl(e,t),Dl(e+"Capture",t)}function Dl(e,t){for(Xc[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var P2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yc={},qc={};function Q2(e){return et.call(qc,e)?!0:et.call(Yc,e)?!1:P2.test(e)?qc[e]=!0:(Yc[e]=!0,!1)}function br(e,t,n){if(Q2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Sr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function un(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Pu,Zc;function El(e){if(Pu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pu=t&&t[1]||"",Zc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pu+e+Zc}var Qu=!1;function Wu(e,t){if(!e||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(U){var H=U}Reflect.construct(e,[],K)}else{try{K.call()}catch(U){H=U}e.call(K.prototype)}}else{try{throw Error()}catch(U){H=U}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(U){if(U&&H&&typeof U.stack=="string")return[U.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),d=u[0],g=u[1];if(d&&g){var _=d.split(`
`),O=g.split(`
`);for(a=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;if(l===_.length||a===O.length)for(l=_.length-1,a=O.length-1;1<=l&&0<=a&&_[l]!==O[a];)a--;for(;1<=l&&0<=a;l--,a--)if(_[l]!==O[a]){if(l!==1||a!==1)do if(l--,a--,0>a||_[l]!==O[a]){var P=`
`+_[l].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=l&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?El(n):""}function W2(e){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Wu(e.type,!1);case 11:return Wu(e.type.render,!1);case 1:return Wu(e.type,!0);case 31:return El("Activity");default:return""}}function Lc(e){try{var t="";do t+=W2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K2(e){var t=Pc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){l=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(d){l=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=K2(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Pc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var F2=/[\n"\\]/g;function Xt(e){return e.replace(F2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ku(e,t,n,l,a,u,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Fu(e,d,Nt(t)):n!=null?Fu(e,d,Nt(n)):l!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Nt(g):e.removeAttribute("name")}function Wc(e,t,n,l,a,u,d,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Nt(n):"",t=t!=null?""+Nt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Fu(e,t,n){t==="number"&&_r(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Kc(e,t,n){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Nt(n):""}function Fc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(he(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Nt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Ml(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var J2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||J2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $c(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Jc(e,a,l)}else for(var u in t)t.hasOwnProperty(u)&&Jc(e,u,t[u])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tr(e){return I2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $u=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Al=null;function Ic(e){var t=Tl(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ku(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Dt]||null;if(!a)throw Error(i(90));Ku(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Qc(l)}break e;case"textarea":Kc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&wl(e,!!n.multiple,t,!1)}}}var ei=!1;function es(e,t,n){if(ei)return e(t,n);ei=!0;try{var l=e(t);return l}finally{if(ei=!1,(zl!==null||Al!==null)&&(cu(),zl&&(t=zl,e=Al,Al=zl=null,Ic(t),e)))for(t=0;t<e.length;t++)Ic(e[t])}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Dt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=!1;if(on)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){ti=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{ti=!1}var En=null,ni=null,Rr=null;function ts(){if(Rr)return Rr;var e,t=ni,n=t.length,l,a="value"in En?En.value:En.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===a[u-l];l++);return Rr=a.slice(e,1<l?1-l:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function ns(){return!1}function Et(e){function t(n,l,a,u,d){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Er:ns,this.isPropagationStopped=ns,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wr=Et($n),va=v({},$n,{view:0,detail:0}),e1=Et(va),li,ai,xa,Mr=v({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?(li=e.screenX-xa.screenX,ai=e.screenY-xa.screenY):ai=li=0,xa=e),li)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),ls=Et(Mr),t1=v({},Mr,{dataTransfer:0}),n1=Et(t1),l1=v({},va,{relatedTarget:0}),ri=Et(l1),a1=v({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=Et(a1),u1=v({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i1=Et(u1),o1=v({},$n,{data:0}),as=Et(o1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=f1[e])?!!t[e]:!1}function ui(){return d1}var h1=v({},va,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=Et(h1),p1=v({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rs=Et(p1),g1=v({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),y1=Et(g1),v1=v({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),x1=Et(v1),b1=v({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S1=Et(b1),C1=v({},$n,{newState:0,oldState:0}),_1=Et(C1),T1=[9,13,27,32],ii=on&&"CompositionEvent"in window,ba=null;on&&"documentMode"in document&&(ba=document.documentMode);var R1=on&&"TextEvent"in window&&!ba,us=on&&(!ii||ba&&8<ba&&11>=ba),is=" ",os=!1;function cs(e,t){switch(e){case"keyup":return T1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ss(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ol=!1;function D1(e,t){switch(e){case"compositionend":return ss(t);case"keypress":return t.which!==32?null:(os=!0,is);case"textInput":return e=t.data,e===is&&os?null:e;default:return null}}function E1(e,t){if(Ol)return e==="compositionend"||!ii&&cs(e,t)?(e=ts(),Rr=ni=En=null,Ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return us&&t.locale!=="ko"?null:t.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w1[e.type]:t==="textarea"}function ds(e,t,n,l){zl?Al?Al.push(l):Al=[l]:zl=l,t=pu(t,"onChange"),0<t.length&&(n=new wr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Sa=null,Ca=null;function M1(e){Qf(e,0)}function zr(e){var t=pa(e);if(Qc(t))return e}function hs(e,t){if(e==="change")return t}var ms=!1;if(on){var oi;if(on){var ci="oninput"in document;if(!ci){var ps=document.createElement("div");ps.setAttribute("oninput","return;"),ci=typeof ps.oninput=="function"}oi=ci}else oi=!1;ms=oi&&(!document.documentMode||9<document.documentMode)}function gs(){Sa&&(Sa.detachEvent("onpropertychange",ys),Ca=Sa=null)}function ys(e){if(e.propertyName==="value"&&zr(Ca)){var t=[];ds(t,Ca,e,Iu(e)),es(M1,t)}}function z1(e,t,n){e==="focusin"?(gs(),Sa=t,Ca=n,Sa.attachEvent("onpropertychange",ys)):e==="focusout"&&gs()}function A1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(Ca)}function O1(e,t){if(e==="click")return zr(t)}function V1(e,t){if(e==="input"||e==="change")return zr(t)}function H1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:H1;function _a(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!et.call(t,a)||!Ot(e[a],t[a]))return!1}return!0}function vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=vs(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vs(n)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ss(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_r(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B1=on&&"documentMode"in document&&11>=document.documentMode,Vl=null,fi=null,Ta=null,di=!1;function Cs(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||Vl==null||Vl!==_r(l)||(l=Vl,"selectionStart"in l&&si(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ta&&_a(Ta,l)||(Ta=l,l=pu(fi,"onSelect"),0<l.length&&(t=new wr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Vl)))}function In(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hl={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionrun:In("Transition","TransitionRun"),transitionstart:In("Transition","TransitionStart"),transitioncancel:In("Transition","TransitionCancel"),transitionend:In("Transition","TransitionEnd")},hi={},_s={};on&&(_s=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function el(e){if(hi[e])return hi[e];if(!Hl[e])return e;var t=Hl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _s)return hi[e]=t[n];return e}var Ts=el("animationend"),Rs=el("animationiteration"),Ds=el("animationstart"),G1=el("transitionrun"),U1=el("transitionstart"),j1=el("transitioncancel"),Es=el("transitionend"),ws=new Map,mi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mi.push("scrollEnd");function Ft(e,t){ws.set(e,t),Jn(t,[e])}var Ms=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=Ms.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Lc(t)},Ms.set(e,t),t)}return{value:e,source:t,stack:Lc(t)}}var qt=[],Bl=0,pi=0;function Ar(){for(var e=Bl,t=pi=Bl=0;t<e;){var n=qt[t];qt[t++]=null;var l=qt[t];qt[t++]=null;var a=qt[t];qt[t++]=null;var u=qt[t];if(qt[t++]=null,l!==null&&a!==null){var d=l.pending;d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a}u!==0&&zs(n,a,u)}}function Or(e,t,n,l){qt[Bl++]=e,qt[Bl++]=t,qt[Bl++]=n,qt[Bl++]=l,pi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function gi(e,t,n,l){return Or(e,t,n,l),Vr(e)}function Gl(e,t){return Or(e,null,null,t),Vr(e)}function zs(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&t!==null&&(a=31-Ae(n),e=u.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),u):null}function Vr(e){if(50<Ka)throw Ka=0,_o=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ul={};function k1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,l){return new k1(e,t,n,l)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cn(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function As(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hr(e,t,n,l,a,u){var d=0;if(l=e,typeof e=="function")yi(e)&&(d=1);else if(typeof e=="string")d=Xh(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=Vt(31,n,t,a),e.elementType=ee,e.lanes=u,e;case w:return tl(n.children,a,u,t);case N:d=8,a|=24;break;case G:return e=Vt(12,n,t,a|2),e.elementType=G,e.lanes=u,e;case k:return e=Vt(13,n,t,a),e.elementType=k,e.lanes=u,e;case L:return e=Vt(19,n,t,a),e.elementType=L,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:case j:d=10;break e;case V:d=9;break e;case Z:d=11;break e;case X:d=14;break e;case ue:d=16,l=null;break e}d=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Vt(d,n,t,a),t.elementType=e,t.type=l,t.lanes=u,t}function tl(e,t,n,l){return e=Vt(7,e,l,t),e.lanes=n,e}function vi(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function xi(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jl=[],kl=0,Br=null,Gr=0,Zt=[],Lt=0,nl=null,sn=1,fn="";function ll(e,t){jl[kl++]=Gr,jl[kl++]=Br,Br=e,Gr=t}function Os(e,t,n){Zt[Lt++]=sn,Zt[Lt++]=fn,Zt[Lt++]=nl,nl=e;var l=sn;e=fn;var a=32-Ae(l)-1;l&=~(1<<a),n+=1;var u=32-Ae(t)+a;if(30<u){var d=a-a%5;u=(l&(1<<d)-1).toString(32),l>>=d,a-=d,sn=1<<32-Ae(t)+a|n<<a|l,fn=u+e}else sn=1<<u|n<<a|l,fn=e}function bi(e){e.return!==null&&(ll(e,1),Os(e,1,0))}function Si(e){for(;e===Br;)Br=jl[--kl],jl[kl]=null,Gr=jl[--kl],jl[kl]=null;for(;e===nl;)nl=Zt[--Lt],Zt[Lt]=null,fn=Zt[--Lt],Zt[Lt]=null,sn=Zt[--Lt],Zt[Lt]=null}var Rt=null,tt=null,je=!1,al=null,It=!1,Ci=Error(i(519));function rl(e){var t=Error(i(418,""));throw Ea(Yt(t,e)),Ci}function Vs(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[St]=e,t[Dt]=l,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<Ja.length;n++)ze(Ja[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),Wc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Cr(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),Fc(t,l.value,l.defaultValue,l.children),Cr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Jf(t.textContent,n)?(l.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),l.onScroll!=null&&ze("scroll",t),l.onScrollEnd!=null&&ze("scrollend",t),l.onClick!=null&&(t.onclick=gu),t=!0):t=!1,t||rl(e)}function Hs(e){for(Rt=e.return;Rt;)switch(Rt.tag){case 5:case 13:It=!1;return;case 27:case 3:It=!0;return;default:Rt=Rt.return}}function Ra(e){if(e!==Rt)return!1;if(!je)return Hs(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ko(e.type,e.memoizedProps)),n=!n),n&&tt&&rl(e),Hs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){tt=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}tt=null}}else t===27?(t=tt,qn(e.type)?(e=qo,qo=null,tt=e):tt=t):tt=Rt?$t(e.stateNode.nextSibling):null;return!0}function Da(){tt=Rt=null,je=!1}function Bs(){var e=al;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),al=null),e}function Ea(e){al===null?al=[e]:al.push(e)}var _i=A(null),ul=null,dn=null;function wn(e,t,n){q(_i,t._currentValue),t._currentValue=n}function hn(e){e._currentValue=_i.current,Q(_i)}function Ti(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ri(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var d=a.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=a;for(var _=0;_<t.length;_++)if(g.context===t[_]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),Ti(u.return,n,e),l||(d=null);break e}u=g.next}}else if(a.tag===18){if(d=a.return,d===null)throw Error(i(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Ti(d,n,e),d=null}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===e){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}}function wa(e,t,n,l){e=null;for(var a=t,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var d=a.alternate;if(d===null)throw Error(i(387));if(d=d.memoizedProps,d!==null){var g=a.type;Ot(a.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(a===He.current){if(d=a.alternate,d===null)throw Error(i(387));d.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(lr):e=[lr])}a=a.return}e!==null&&Ri(t,e,n,l),t.flags|=262144}function Ur(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){ul=e,dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return Gs(ul,e)}function jr(e,t){return ul===null&&il(e),Gs(e,t)}function Gs(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},dn===null){if(e===null)throw Error(i(308));dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else dn=dn.next=t;return n}var N1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},X1=o.unstable_scheduleCallback,Y1=o.unstable_NormalPriority,ct={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Di(){return{controller:new N1,data:new Map,refCount:0}}function Ma(e){e.refCount--,e.refCount===0&&X1(Y1,function(){e.controller.abort()})}var za=null,Ei=0,Nl=0,Xl=null;function q1(e,t){if(za===null){var n=za=[];Ei=0,Nl=zo(),Xl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Ei++,t.then(Us,Us),t}function Us(){if(--Ei===0&&za!==null){Xl!==null&&(Xl.status="fulfilled");var e=za;za=null,Nl=0,Xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Z1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var js=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&q1(e,t),js!==null&&js(e,t)};var ol=A(null);function wi(){var e=ol.current;return e!==null?e:We.pooledCache}function kr(e,t){t===null?q(ol,ol.current):q(ol,t.pool)}function ks(){var e=wi();return e===null?null:{parent:ct._currentValue,pool:e}}var Aa=Error(i(460)),Ns=Error(i(474)),Nr=Error(i(542)),Mi={then:function(){}};function Xs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xr(){}function Ys(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xr,Xr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zs(e),e;default:if(typeof t.status=="string")t.then(Xr,Xr);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zs(e),e}throw Oa=t,Aa}}var Oa=null;function qs(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Zs(e){if(e===Aa||e===Nr)throw Error(i(483))}var Mn=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ai(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Vr(e),zs(e,null,n),t}return Or(e,l,t,n),Vr(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Uc(e,n)}}function Oi(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Vi=!1;function Ha(){if(Vi){var e=Xl;if(e!==null)throw e}}function Ba(e,t,n,l){Vi=!1;var a=e.updateQueue;Mn=!1;var u=a.firstBaseUpdate,d=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var _=g,O=_.next;_.next=null,d===null?u=O:d.next=O,d=_;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==d&&(g===null?P.firstBaseUpdate=O:g.next=O,P.lastBaseUpdate=_))}if(u!==null){var K=a.baseState;d=0,P=O=_=null,g=u;do{var H=g.lane&-536870913,U=H!==g.lane;if(U?(Ve&H)===H:(l&H)===H){H!==0&&H===Nl&&(Vi=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ge=e,de=g;H=t;var Le=n;switch(de.tag){case 1:if(ge=de.payload,typeof ge=="function"){K=ge.call(Le,K,H);break e}K=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=de.payload,H=typeof ge=="function"?ge.call(Le,K,H):ge,H==null)break e;K=v({},K,H);break e;case 2:Mn=!0}}H=g.callback,H!==null&&(e.flags|=64,U&&(e.flags|=8192),U=a.callbacks,U===null?a.callbacks=[H]:U.push(H))}else U={lane:H,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(O=P=U,_=K):P=P.next=U,d|=H;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;U=g,g=U.next,U.next=null,a.lastBaseUpdate=U,a.shared.pending=null}}while(!0);P===null&&(_=K),a.baseState=_,a.firstBaseUpdate=O,a.lastBaseUpdate=P,u===null&&(a.shared.lanes=0),kn|=d,e.lanes=d,e.memoizedState=K}}function Ls(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function Ps(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ls(n[e],t)}var Yl=A(null),Yr=A(0);function Qs(e,t){e=bn,q(Yr,e),q(Yl,t),bn=e|t.baseLanes}function Hi(){q(Yr,bn),q(Yl,Yl.current)}function Bi(){bn=Yr.current,Q(Yl),Q(Yr)}var On=0,De=null,qe=null,it=null,qr=!1,ql=!1,cl=!1,Zr=0,Ga=0,Zl=null,L1=0;function lt(){throw Error(i(321))}function Gi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Ui(e,t,n,l,a,u){return On=u,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?z0:A0,cl=!1,u=n(l,a),cl=!1,ql&&(u=Ks(t,n,l,a)),Ws(e),u}function Ws(e){B.H=Fr;var t=qe!==null&&qe.next!==null;if(On=0,it=qe=De=null,qr=!1,Ga=0,Zl=null,t)throw Error(i(300));e===null||ht||(e=e.dependencies,e!==null&&Ur(e)&&(ht=!0))}function Ks(e,t,n,l){De=e;var a=0;do{if(ql&&(Zl=null),Ga=0,ql=!1,25<=a)throw Error(i(301));if(a+=1,it=qe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}B.H=$1,u=t(n,l)}while(ql);return u}function P1(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Ua(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(De.flags|=1024),t}function ji(){var e=Zr!==0;return Zr=0,e}function ki(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ni(e){if(qr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qr=!1}On=0,it=qe=De=null,ql=!1,Ga=Zr=0,Zl=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?De.memoizedState=it=e:it=it.next=e,it}function ot(){if(qe===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=it===null?De.memoizedState:it.next;if(t!==null)it=t,qe=e;else{if(e===null)throw De.alternate===null?Error(i(467)):Error(i(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},it===null?De.memoizedState=it=e:it=it.next=e}return it}function Xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ua(e){var t=Ga;return Ga+=1,Zl===null&&(Zl=[]),e=Ys(Zl,e,t),t=De,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?z0:A0),e}function Lr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ua(e);if(e.$$typeof===j)return Ct(e)}throw Error(i(438,String(e)))}function Yi(e){var t=null,n=De.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Xi(),De.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=pe;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function Pr(e){var t=ot();return qi(t,qe,e)}function qi(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,u=l.pending;if(u!==null){if(a!==null){var d=a.next;a.next=u.next,u.next=d}t.baseQueue=a=u,l.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{t=a.next;var g=d=null,_=null,O=t,P=!1;do{var K=O.lane&-536870913;if(K!==O.lane?(Ve&K)===K:(On&K)===K){var H=O.revertLane;if(H===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),K===Nl&&(P=!0);else if((On&H)===H){O=O.next,H===Nl&&(P=!0);continue}else K={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},_===null?(g=_=K,d=u):_=_.next=K,De.lanes|=H,kn|=H;K=O.action,cl&&n(u,K),u=O.hasEagerState?O.eagerState:n(u,K)}else H={lane:K,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},_===null?(g=_=H,d=u):_=_.next=H,De.lanes|=K,kn|=K;O=O.next}while(O!==null&&O!==t);if(_===null?d=u:_.next=g,!Ot(u,e.memoizedState)&&(ht=!0,P&&(n=Xl,n!==null)))throw n;e.memoizedState=u,e.baseState=d,e.baseQueue=_,l.lastRenderedState=u}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zi(e){var t=ot(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do u=e(u,d.action),d=d.next;while(d!==a);Ot(u,t.memoizedState)||(ht=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function Fs(e,t,n){var l=De,a=ot(),u=je;if(u){if(n===void 0)throw Error(i(407));n=n()}else n=t();var d=!Ot((qe||a).memoizedState,n);d&&(a.memoizedState=n,ht=!0),a=a.queue;var g=Is.bind(null,l,a,e);if(ja(2048,8,g,[e]),a.getSnapshot!==t||d||it!==null&&it.memoizedState.tag&1){if(l.flags|=2048,Ll(9,Qr(),$s.bind(null,l,a,n,t),null),We===null)throw Error(i(349));u||(On&124)!==0||Js(l,t,n)}return n}function Js(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t=Xi(),De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $s(e,t,n,l){t.value=n,t.getSnapshot=l,e0(t)&&t0(e)}function Is(e,t,n){return n(function(){e0(t)&&t0(e)})}function e0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function t0(e){var t=Gl(e,2);t!==null&&jt(t,e,2)}function Li(e){var t=wt();if(typeof e=="function"){var n=e;if(e=n(),cl){Qe(!0);try{n()}finally{Qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function n0(e,t,n,l){return e.baseState=n,qi(e,qe,typeof l=="function"?l:mn)}function Q1(e,t,n,l,a){if(Kr(e))throw Error(i(485));if(e=t.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};B.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,l0(t,u)):(u.next=n.next,t.pending=n.next=u)}}function l0(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var u=B.T,d={};B.T=d;try{var g=n(a,l),_=B.S;_!==null&&_(d,g),a0(e,t,g)}catch(O){Pi(e,t,O)}finally{B.T=u}}else try{u=n(a,l),a0(e,t,u)}catch(O){Pi(e,t,O)}}function a0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){r0(e,t,l)},function(l){return Pi(e,t,l)}):r0(e,t,n)}function r0(e,t,n){t.status="fulfilled",t.value=n,u0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,l0(e,n)))}function Pi(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,u0(t),t=t.next;while(t!==l)}e.action=null}function u0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function i0(e,t){return t}function o0(e,t){if(je){var n=We.formState;if(n!==null){e:{var l=De;if(je){if(tt){t:{for(var a=tt,u=It;a.nodeType!==8;){if(!u){a=null;break t}if(a=$t(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){tt=$t(a.nextSibling),l=a.data==="F!";break e}}rl(l)}l=!1}l&&(t=n[0])}}return n=wt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:t},n.queue=l,n=E0.bind(null,De,l),l.dispatch=n,l=Li(!1),u=Ji.bind(null,De,!1,l.queue),l=wt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=Q1.bind(null,De,a,u,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function c0(e){var t=ot();return s0(t,qe,e)}function s0(e,t,n){if(t=qi(e,t,i0)[0],e=Pr(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ua(t)}catch(d){throw d===Aa?Nr:d}else l=t;t=ot();var a=t.queue,u=a.dispatch;return n!==t.memoizedState&&(De.flags|=2048,Ll(9,Qr(),W1.bind(null,a,n),null)),[l,u,e]}function W1(e,t){e.action=t}function f0(e){var t=ot(),n=qe;if(n!==null)return s0(t,n,e);ot(),t=t.memoizedState,n=ot();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ll(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=De.updateQueue,t===null&&(t=Xi(),De.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Qr(){return{destroy:void 0,resource:void 0}}function d0(){return ot().memoizedState}function Wr(e,t,n,l){var a=wt();l=l===void 0?null:l,De.flags|=e,a.memoizedState=Ll(1|t,Qr(),n,l)}function ja(e,t,n,l){var a=ot();l=l===void 0?null:l;var u=a.memoizedState.inst;qe!==null&&l!==null&&Gi(l,qe.memoizedState.deps)?a.memoizedState=Ll(t,u,n,l):(De.flags|=e,a.memoizedState=Ll(1|t,u,n,l))}function h0(e,t){Wr(8390656,8,e,t)}function m0(e,t){ja(2048,8,e,t)}function p0(e,t){return ja(4,2,e,t)}function g0(e,t){return ja(4,4,e,t)}function y0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function v0(e,t,n){n=n!=null?n.concat([e]):null,ja(4,4,y0.bind(null,t,e),n)}function Qi(){}function x0(e,t){var n=ot();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Gi(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function b0(e,t){var n=ot();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Gi(t,l[1]))return l[0];if(l=e(),cl){Qe(!0);try{e()}finally{Qe(!1)}}return n.memoizedState=[l,t],l}function Wi(e,t,n){return n===void 0||(On&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Tf(),De.lanes|=e,kn|=e,n)}function S0(e,t,n,l){return Ot(n,t)?n:Yl.current!==null?(e=Wi(e,n,l),Ot(e,t)||(ht=!0),e):(On&42)===0?(ht=!0,e.memoizedState=n):(e=Tf(),De.lanes|=e,kn|=e,t)}function C0(e,t,n,l,a){var u=F.p;F.p=u!==0&&8>u?u:8;var d=B.T,g={};B.T=g,Ji(e,!1,t,n);try{var _=a(),O=B.S;if(O!==null&&O(g,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var P=Z1(_,l);ka(e,t,P,Ut(e))}else ka(e,t,l,Ut(e))}catch(K){ka(e,t,{then:function(){},status:"rejected",reason:K},Ut())}finally{F.p=u,B.T=d}}function K1(){}function Ki(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=_0(e).queue;C0(e,a,t,$,n===null?K1:function(){return T0(e),n(l)})}function _0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function T0(e){var t=_0(e).next.queue;ka(e,t,{},Ut())}function Fi(){return Ct(lr)}function R0(){return ot().memoizedState}function D0(){return ot().memoizedState}function F1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=zn(n);var l=An(t,e,n);l!==null&&(jt(l,t,n),Va(l,t,n)),t={cache:Di()},e.payload=t;return}t=t.return}}function J1(e,t,n){var l=Ut();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Kr(e)?w0(t,n):(n=gi(e,t,n,l),n!==null&&(jt(n,e,l),M0(n,t,l)))}function E0(e,t,n){var l=Ut();ka(e,t,n,l)}function ka(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kr(e))w0(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,g=u(d,n);if(a.hasEagerState=!0,a.eagerState=g,Ot(g,d))return Or(e,t,a,0),We===null&&Ar(),!1}catch{}finally{}if(n=gi(e,t,a,l),n!==null)return jt(n,e,l),M0(n,t,l),!0}return!1}function Ji(e,t,n,l){if(l={lane:2,revertLane:zo(),action:l,hasEagerState:!1,eagerState:null,next:null},Kr(e)){if(t)throw Error(i(479))}else t=gi(e,n,l,2),t!==null&&jt(t,e,2)}function Kr(e){var t=e.alternate;return e===De||t!==null&&t===De}function w0(e,t){ql=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function M0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Uc(e,n)}}var Fr={readContext:Ct,use:Lr,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},z0={readContext:Ct,use:Lr,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:h0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Wr(4194308,4,y0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){Wr(4,2,e,t)},useMemo:function(e,t){var n=wt();t=t===void 0?null:t;var l=e();if(cl){Qe(!0);try{e()}finally{Qe(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=wt();if(n!==void 0){var a=n(t);if(cl){Qe(!0);try{n(t)}finally{Qe(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=J1.bind(null,De,e),[l.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=Li(e);var t=e.queue,n=E0.bind(null,De,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qi,useDeferredValue:function(e,t){var n=wt();return Wi(n,e,t)},useTransition:function(){var e=Li(!1);return e=C0.bind(null,De,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=De,a=wt();if(je){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),We===null)throw Error(i(349));(Ve&124)!==0||Js(l,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,h0(Is.bind(null,l,u,e),[e]),l.flags|=2048,Ll(9,Qr(),$s.bind(null,l,u,n,t),null),n},useId:function(){var e=wt(),t=We.identifierPrefix;if(je){var n=fn,l=sn;n=(l&~(1<<32-Ae(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=L1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Fi,useFormState:o0,useActionState:o0,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ji.bind(null,De,!0,n),n.dispatch=t,[e,t]},useMemoCache:Yi,useCacheRefresh:function(){return wt().memoizedState=F1.bind(null,De)}},A0={readContext:Ct,use:Lr,useCallback:x0,useContext:Ct,useEffect:m0,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:g0,useMemo:b0,useReducer:Pr,useRef:d0,useState:function(){return Pr(mn)},useDebugValue:Qi,useDeferredValue:function(e,t){var n=ot();return S0(n,qe.memoizedState,e,t)},useTransition:function(){var e=Pr(mn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:Fs,useId:R0,useHostTransitionStatus:Fi,useFormState:c0,useActionState:c0,useOptimistic:function(e,t){var n=ot();return n0(n,qe,e,t)},useMemoCache:Yi,useCacheRefresh:D0},$1={readContext:Ct,use:Lr,useCallback:x0,useContext:Ct,useEffect:m0,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:g0,useMemo:b0,useReducer:Zi,useRef:d0,useState:function(){return Zi(mn)},useDebugValue:Qi,useDeferredValue:function(e,t){var n=ot();return qe===null?Wi(n,e,t):S0(n,qe.memoizedState,e,t)},useTransition:function(){var e=Zi(mn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:Fs,useId:R0,useHostTransitionStatus:Fi,useFormState:f0,useActionState:f0,useOptimistic:function(e,t){var n=ot();return qe!==null?n0(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Yi,useCacheRefresh:D0},Pl=null,Na=0;function Jr(e){var t=Na;return Na+=1,Pl===null&&(Pl=[]),Ys(Pl,e,t)}function Xa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $r(e,t){throw t.$$typeof===C?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function O0(e){var t=e._init;return t(e._payload)}function V0(e){function t(E,R){if(e){var z=E.deletions;z===null?(E.deletions=[R],E.flags|=16):z.push(R)}}function n(E,R){if(!e)return null;for(;R!==null;)t(E,R),R=R.sibling;return null}function l(E){for(var R=new Map;E!==null;)E.key!==null?R.set(E.key,E):R.set(E.index,E),E=E.sibling;return R}function a(E,R){return E=cn(E,R),E.index=0,E.sibling=null,E}function u(E,R,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<R?(E.flags|=67108866,R):z):(E.flags|=67108866,R)):(E.flags|=1048576,R)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function g(E,R,z,W){return R===null||R.tag!==6?(R=vi(z,E.mode,W),R.return=E,R):(R=a(R,z),R.return=E,R)}function _(E,R,z,W){var ae=z.type;return ae===w?P(E,R,z.props.children,W,z.key):R!==null&&(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ue&&O0(ae)===R.type)?(R=a(R,z.props),Xa(R,z),R.return=E,R):(R=Hr(z.type,z.key,z.props,null,E.mode,W),Xa(R,z),R.return=E,R)}function O(E,R,z,W){return R===null||R.tag!==4||R.stateNode.containerInfo!==z.containerInfo||R.stateNode.implementation!==z.implementation?(R=xi(z,E.mode,W),R.return=E,R):(R=a(R,z.children||[]),R.return=E,R)}function P(E,R,z,W,ae){return R===null||R.tag!==7?(R=tl(z,E.mode,W,ae),R.return=E,R):(R=a(R,z),R.return=E,R)}function K(E,R,z){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=vi(""+R,E.mode,z),R.return=E,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case b:return z=Hr(R.type,R.key,R.props,null,E.mode,z),Xa(z,R),z.return=E,z;case T:return R=xi(R,E.mode,z),R.return=E,R;case ue:var W=R._init;return R=W(R._payload),K(E,R,z)}if(he(R)||re(R))return R=tl(R,E.mode,z,null),R.return=E,R;if(typeof R.then=="function")return K(E,Jr(R),z);if(R.$$typeof===j)return K(E,jr(E,R),z);$r(E,R)}return null}function H(E,R,z,W){var ae=R!==null?R.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ae!==null?null:g(E,R,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case b:return z.key===ae?_(E,R,z,W):null;case T:return z.key===ae?O(E,R,z,W):null;case ue:return ae=z._init,z=ae(z._payload),H(E,R,z,W)}if(he(z)||re(z))return ae!==null?null:P(E,R,z,W,null);if(typeof z.then=="function")return H(E,R,Jr(z),W);if(z.$$typeof===j)return H(E,R,jr(E,z),W);$r(E,z)}return null}function U(E,R,z,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return E=E.get(z)||null,g(R,E,""+W,ae);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return E=E.get(W.key===null?z:W.key)||null,_(R,E,W,ae);case T:return E=E.get(W.key===null?z:W.key)||null,O(R,E,W,ae);case ue:var Ee=W._init;return W=Ee(W._payload),U(E,R,z,W,ae)}if(he(W)||re(W))return E=E.get(z)||null,P(R,E,W,ae,null);if(typeof W.then=="function")return U(E,R,z,Jr(W),ae);if(W.$$typeof===j)return U(E,R,z,jr(R,W),ae);$r(R,W)}return null}function ge(E,R,z,W){for(var ae=null,Ee=null,ce=R,me=R=0,pt=null;ce!==null&&me<z.length;me++){ce.index>me?(pt=ce,ce=null):pt=ce.sibling;var Ge=H(E,ce,z[me],W);if(Ge===null){ce===null&&(ce=pt);break}e&&ce&&Ge.alternate===null&&t(E,ce),R=u(Ge,R,me),Ee===null?ae=Ge:Ee.sibling=Ge,Ee=Ge,ce=pt}if(me===z.length)return n(E,ce),je&&ll(E,me),ae;if(ce===null){for(;me<z.length;me++)ce=K(E,z[me],W),ce!==null&&(R=u(ce,R,me),Ee===null?ae=ce:Ee.sibling=ce,Ee=ce);return je&&ll(E,me),ae}for(ce=l(ce);me<z.length;me++)pt=U(ce,E,me,z[me],W),pt!==null&&(e&&pt.alternate!==null&&ce.delete(pt.key===null?me:pt.key),R=u(pt,R,me),Ee===null?ae=pt:Ee.sibling=pt,Ee=pt);return e&&ce.forEach(function(Wn){return t(E,Wn)}),je&&ll(E,me),ae}function de(E,R,z,W){if(z==null)throw Error(i(151));for(var ae=null,Ee=null,ce=R,me=R=0,pt=null,Ge=z.next();ce!==null&&!Ge.done;me++,Ge=z.next()){ce.index>me?(pt=ce,ce=null):pt=ce.sibling;var Wn=H(E,ce,Ge.value,W);if(Wn===null){ce===null&&(ce=pt);break}e&&ce&&Wn.alternate===null&&t(E,ce),R=u(Wn,R,me),Ee===null?ae=Wn:Ee.sibling=Wn,Ee=Wn,ce=pt}if(Ge.done)return n(E,ce),je&&ll(E,me),ae;if(ce===null){for(;!Ge.done;me++,Ge=z.next())Ge=K(E,Ge.value,W),Ge!==null&&(R=u(Ge,R,me),Ee===null?ae=Ge:Ee.sibling=Ge,Ee=Ge);return je&&ll(E,me),ae}for(ce=l(ce);!Ge.done;me++,Ge=z.next())Ge=U(ce,E,me,Ge.value,W),Ge!==null&&(e&&Ge.alternate!==null&&ce.delete(Ge.key===null?me:Ge.key),R=u(Ge,R,me),Ee===null?ae=Ge:Ee.sibling=Ge,Ee=Ge);return e&&ce.forEach(function(Ih){return t(E,Ih)}),je&&ll(E,me),ae}function Le(E,R,z,W){if(typeof z=="object"&&z!==null&&z.type===w&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case b:e:{for(var ae=z.key;R!==null;){if(R.key===ae){if(ae=z.type,ae===w){if(R.tag===7){n(E,R.sibling),W=a(R,z.props.children),W.return=E,E=W;break e}}else if(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ue&&O0(ae)===R.type){n(E,R.sibling),W=a(R,z.props),Xa(W,z),W.return=E,E=W;break e}n(E,R);break}else t(E,R);R=R.sibling}z.type===w?(W=tl(z.props.children,E.mode,W,z.key),W.return=E,E=W):(W=Hr(z.type,z.key,z.props,null,E.mode,W),Xa(W,z),W.return=E,E=W)}return d(E);case T:e:{for(ae=z.key;R!==null;){if(R.key===ae)if(R.tag===4&&R.stateNode.containerInfo===z.containerInfo&&R.stateNode.implementation===z.implementation){n(E,R.sibling),W=a(R,z.children||[]),W.return=E,E=W;break e}else{n(E,R);break}else t(E,R);R=R.sibling}W=xi(z,E.mode,W),W.return=E,E=W}return d(E);case ue:return ae=z._init,z=ae(z._payload),Le(E,R,z,W)}if(he(z))return ge(E,R,z,W);if(re(z)){if(ae=re(z),typeof ae!="function")throw Error(i(150));return z=ae.call(z),de(E,R,z,W)}if(typeof z.then=="function")return Le(E,R,Jr(z),W);if(z.$$typeof===j)return Le(E,R,jr(E,z),W);$r(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,R!==null&&R.tag===6?(n(E,R.sibling),W=a(R,z),W.return=E,E=W):(n(E,R),W=vi(z,E.mode,W),W.return=E,E=W),d(E)):n(E,R)}return function(E,R,z,W){try{Na=0;var ae=Le(E,R,z,W);return Pl=null,ae}catch(ce){if(ce===Aa||ce===Nr)throw ce;var Ee=Vt(29,ce,null,E.mode);return Ee.lanes=W,Ee.return=E,Ee}finally{}}}var Ql=V0(!0),H0=V0(!1),Pt=A(null),en=null;function Vn(e){var t=e.alternate;q(st,st.current&1),q(Pt,e),en===null&&(t===null||Yl.current!==null||t.memoizedState!==null)&&(en=e)}function B0(e){if(e.tag===22){if(q(st,st.current),q(Pt,e),en===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(en=e)}}else Hn()}function Hn(){q(st,st.current),q(Pt,Pt.current)}function pn(e){Q(Pt),en===e&&(en=null),Q(st)}var st=A(0);function Ir(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Yo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function $i(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ut(),a=zn(l);a.payload=t,n!=null&&(a.callback=n),t=An(e,a,l),t!==null&&(jt(t,e,l),Va(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ut(),a=zn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=An(e,a,l),t!==null&&(jt(t,e,l),Va(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),l=zn(n);l.tag=2,t!=null&&(l.callback=t),t=An(e,l,n),t!==null&&(jt(t,e,n),Va(t,e,n))}};function G0(e,t,n,l,a,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,d):t.prototype&&t.prototype.isPureReactComponent?!_a(n,l)||!_a(a,u):!0}function U0(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function sl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function j0(e){eu(e)}function k0(e){console.error(e)}function N0(e){eu(e)}function tu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function X0(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function eo(e,t,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){tu(e,t)},n}function Y0(e){return e=zn(e),e.tag=3,e}function q0(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;e.payload=function(){return a(u)},e.callback=function(){X0(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){X0(t,n,l),typeof a!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function I1(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&wa(t,n,a,!0),n=Pt.current,n!==null){switch(n.tag){case 13:return en===null?Ro():n.alternate===null&&nt===0&&(nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Mi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Eo(e,l,a)),!1;case 22:return n.flags|=65536,l===Mi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Eo(e,l,a)),!1}throw Error(i(435,n.tag))}return Eo(e,l,a),Ro(),!1}if(je)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Ci&&(e=Error(i(422),{cause:l}),Ea(Yt(e,n)))):(l!==Ci&&(t=Error(i(423),{cause:l}),Ea(Yt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Yt(l,n),a=eo(e.stateNode,l,a),Oi(e,a),nt!==4&&(nt=2)),!1;var u=Error(i(520),{cause:l});if(u=Yt(u,n),Wa===null?Wa=[u]:Wa.push(u),nt!==4&&(nt=2),t===null)return!0;l=Yt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=eo(n.stateNode,l,e),Oi(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Nn===null||!Nn.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Y0(a),q0(a,e,n,l),Oi(n,a),!1}n=n.return}while(n!==null);return!1}var Z0=Error(i(461)),ht=!1;function yt(e,t,n,l){t.child=e===null?H0(t,null,n,l):Ql(t,e.child,n,l)}function L0(e,t,n,l,a){n=n.render;var u=t.ref;if("ref"in l){var d={};for(var g in l)g!=="ref"&&(d[g]=l[g])}else d=l;return il(t),l=Ui(e,t,n,d,u,a),g=ji(),e!==null&&!ht?(ki(e,t,a),gn(e,t,a)):(je&&g&&bi(t),t.flags|=1,yt(e,t,l,a),t.child)}function P0(e,t,n,l,a){if(e===null){var u=n.type;return typeof u=="function"&&!yi(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Q0(e,t,u,l,a)):(e=Hr(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!oo(e,a)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(d,l)&&e.ref===t.ref)return gn(e,t,a)}return t.flags|=1,e=cn(u,l),e.ref=t.ref,e.return=t,t.child=e}function Q0(e,t,n,l,a){if(e!==null){var u=e.memoizedProps;if(_a(u,l)&&e.ref===t.ref)if(ht=!1,t.pendingProps=l=u,oo(e,a))(e.flags&131072)!==0&&(ht=!0);else return t.lanes=e.lanes,gn(e,t,a)}return to(e,t,n,l,a)}function W0(e,t,n){var l=t.pendingProps,a=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|n:n,e!==null){for(a=t.child=e.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return K0(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kr(t,u!==null?u.cachePool:null),u!==null?Qs(t,u):Hi(),B0(t);else return t.lanes=t.childLanes=536870912,K0(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(kr(t,u.cachePool),Qs(t,u),Hn(),t.memoizedState=null):(e!==null&&kr(t,null),Hi(),Hn());return yt(e,t,a,n),t.child}function K0(e,t,n,l){var a=wi();return a=a===null?null:{parent:ct._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&kr(t,null),Hi(),B0(t),e!==null&&wa(e,t,l,!0),null}function nu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function to(e,t,n,l,a){return il(t),n=Ui(e,t,n,l,void 0,a),l=ji(),e!==null&&!ht?(ki(e,t,a),gn(e,t,a)):(je&&l&&bi(t),t.flags|=1,yt(e,t,n,a),t.child)}function F0(e,t,n,l,a,u){return il(t),t.updateQueue=null,n=Ks(t,l,n,a),Ws(e),l=ji(),e!==null&&!ht?(ki(e,t,u),gn(e,t,u)):(je&&l&&bi(t),t.flags|=1,yt(e,t,n,u),t.child)}function J0(e,t,n,l,a){if(il(t),t.stateNode===null){var u=Ul,d=n.contextType;typeof d=="object"&&d!==null&&(u=Ct(d)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ii,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},zi(t),d=n.contextType,u.context=typeof d=="object"&&d!==null?Ct(d):Ul,u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&($i(t,n,d,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Ii.enqueueReplaceState(u,u.state,null),Ba(t,l,u,a),Ha(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,_=sl(n,g);u.props=_;var O=u.context,P=n.contextType;d=Ul,typeof P=="object"&&P!==null&&(d=Ct(P));var K=n.getDerivedStateFromProps;P=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,P||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||O!==d)&&U0(t,u,l,d),Mn=!1;var H=t.memoizedState;u.state=H,Ba(t,l,u,a),Ha(),O=t.memoizedState,g||H!==O||Mn?(typeof K=="function"&&($i(t,n,K,l),O=t.memoizedState),(_=Mn||G0(t,n,_,l,H,O,d))?(P||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=O),u.props=l,u.state=O,u.context=d,l=_):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Ai(e,t),d=t.memoizedProps,P=sl(n,d),u.props=P,K=t.pendingProps,H=u.context,O=n.contextType,_=Ul,typeof O=="object"&&O!==null&&(_=Ct(O)),g=n.getDerivedStateFromProps,(O=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==K||H!==_)&&U0(t,u,l,_),Mn=!1,H=t.memoizedState,u.state=H,Ba(t,l,u,a),Ha();var U=t.memoizedState;d!==K||H!==U||Mn||e!==null&&e.dependencies!==null&&Ur(e.dependencies)?(typeof g=="function"&&($i(t,n,g,l),U=t.memoizedState),(P=Mn||G0(t,n,P,l,H,U,_)||e!==null&&e.dependencies!==null&&Ur(e.dependencies))?(O||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,U,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,U,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=U),u.props=l,u.state=U,u.context=_,l=P):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,nu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Ql(t,e.child,null,a),t.child=Ql(t,null,n,a)):yt(e,t,n,a),t.memoizedState=u.state,e=t.child):e=gn(e,t,a),e}function $0(e,t,n,l){return Da(),t.flags|=256,yt(e,t,n,l),t.child}var no={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lo(e){return{baseLanes:e,cachePool:ks()}}function ao(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function I0(e,t,n){var l=t.pendingProps,a=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),d&&(a=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(a?Vn(t):Hn(),je){var g=tt,_;if(_=g){e:{for(_=g,g=It;_.nodeType!==8;){if(!g){g=null;break e}if(_=$t(_.nextSibling),_===null){g=null;break e}}g=_}g!==null?(t.memoizedState={dehydrated:g,treeContext:nl!==null?{id:sn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},_=Vt(18,null,null,0),_.stateNode=g,_.return=t,t.child=_,Rt=t,tt=null,_=!0):_=!1}_||rl(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Yo(g)?t.lanes=32:t.lanes=536870912,null;pn(t)}return g=l.children,l=l.fallback,a?(Hn(),a=t.mode,g=lu({mode:"hidden",children:g},a),l=tl(l,a,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,a=t.child,a.memoizedState=lo(n),a.childLanes=ao(e,d,n),t.memoizedState=no,l):(Vn(t),ro(t,g))}if(_=e.memoizedState,_!==null&&(g=_.dehydrated,g!==null)){if(u)t.flags&256?(Vn(t),t.flags&=-257,t=uo(e,t,n)):t.memoizedState!==null?(Hn(),t.child=e.child,t.flags|=128,t=null):(Hn(),a=l.fallback,g=t.mode,l=lu({mode:"visible",children:l.children},g),a=tl(a,g,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Ql(t,e.child,null,n),l=t.child,l.memoizedState=lo(n),l.childLanes=ao(e,d,n),t.memoizedState=no,t=a);else if(Vn(t),Yo(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var O=d.dgst;d=O,l=Error(i(419)),l.stack="",l.digest=d,Ea({value:l,source:null,stack:null}),t=uo(e,t,n)}else if(ht||wa(e,t,n,!1),d=(n&e.childLanes)!==0,ht||d){if(d=We,d!==null&&(l=n&-n,l=(l&42)!==0?1:Yu(l),l=(l&(d.suspendedLanes|n))!==0?0:l,l!==0&&l!==_.retryLane))throw _.retryLane=l,Gl(e,l),jt(d,e,l),Z0;g.data==="$?"||Ro(),t=uo(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,tt=$t(g.nextSibling),Rt=t,je=!0,al=null,It=!1,e!==null&&(Zt[Lt++]=sn,Zt[Lt++]=fn,Zt[Lt++]=nl,sn=e.id,fn=e.overflow,nl=t),t=ro(t,l.children),t.flags|=4096);return t}return a?(Hn(),a=l.fallback,g=t.mode,_=e.child,O=_.sibling,l=cn(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,O!==null?a=cn(O,a):(a=tl(a,g,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,g=e.child.memoizedState,g===null?g=lo(n):(_=g.cachePool,_!==null?(O=ct._currentValue,_=_.parent!==O?{parent:O,pool:O}:_):_=ks(),g={baseLanes:g.baseLanes|n,cachePool:_}),a.memoizedState=g,a.childLanes=ao(e,d,n),t.memoizedState=no,l):(Vn(t),n=e.child,e=n.sibling,n=cn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function ro(e,t){return t=lu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lu(e,t){return e=Vt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function uo(e,t,n){return Ql(t,e.child,null,n),e=ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ef(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ti(e.return,t,n)}function io(e,t,n,l,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=a)}function tf(e,t,n){var l=t.pendingProps,a=l.revealOrder,u=l.tail;if(yt(e,t,l.children,n),l=st.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,n,t);else if(e.tag===19)ef(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(q(st,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ir(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),io(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ir(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}io(t,!0,n,null,u);break;case"together":io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(wa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ur(e)))}function eh(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),wn(t,ct,e.memoizedState.cache),Da();break;case 27:case 5:Ke(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:wn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Vn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?I0(e,t,n):(Vn(t),e=gn(e,t,n),e!==null?e.sibling:null);Vn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(wa(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return tf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(st,st.current),l)break;return null;case 22:case 23:return t.lanes=0,W0(e,t,n);case 24:wn(t,ct,e.memoizedState.cache)}return gn(e,t,n)}function nf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ht=!0;else{if(!oo(e,n)&&(t.flags&128)===0)return ht=!1,eh(e,t,n);ht=(e.flags&131072)!==0}else ht=!1,je&&(t.flags&1048576)!==0&&Os(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")yi(l)?(e=sl(l,e),t.tag=1,t=J0(null,t,l,e,n)):(t.tag=0,t=to(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===Z){t.tag=11,t=L0(null,t,l,e,n);break e}else if(a===X){t.tag=14,t=P0(null,t,l,e,n);break e}}throw t=Re(l)||l,Error(i(306,t,""))}}return t;case 0:return to(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=sl(l,t.pendingProps),J0(e,t,l,a,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var u=t.memoizedState;a=u.element,Ai(e,t),Ba(t,l,null,n);var d=t.memoizedState;if(l=d.cache,wn(t,ct,l),l!==u.cache&&Ri(t,[ct],n,!0),Ha(),l=d.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=$0(e,t,l,n);break e}else if(l!==a){a=Yt(Error(i(424)),t),Ea(a),t=$0(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=$t(e.firstChild),Rt=t,je=!0,al=null,It=!0,n=H0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),l===a){t=gn(e,t,n);break e}yt(e,t,l,n)}t=t.child}return t;case 26:return nu(e,t),e===null?(n=id(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,l=yu(le.current).createElement(n),l[St]=t,l[Dt]=e,xt(l,n,e),dt(l),t.stateNode=l):t.memoizedState=id(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ke(t),e===null&&je&&(l=t.stateNode=ad(t.type,t.pendingProps,le.current),Rt=t,It=!0,a=tt,qn(t.type)?(qo=a,tt=$t(l.firstChild)):tt=a),yt(e,t,t.pendingProps.children,n),nu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((a=l=tt)&&(l=wh(l,t.type,t.pendingProps,It),l!==null?(t.stateNode=l,Rt=t,tt=$t(l.firstChild),It=!1,a=!0):a=!1),a||rl(t)),Ke(t),a=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,l=u.children,ko(a,u)?l=null:d!==null&&ko(a,d)&&(t.flags|=32),t.memoizedState!==null&&(a=Ui(e,t,P1,null,null,n),lr._currentValue=a),nu(e,t),yt(e,t,l,n),t.child;case 6:return e===null&&je&&((e=n=tt)&&(n=Mh(n,t.pendingProps,It),n!==null?(t.stateNode=n,Rt=t,tt=null,e=!0):e=!1),e||rl(t)),null;case 13:return I0(e,t,n);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ql(t,null,l,n):yt(e,t,l,n),t.child;case 11:return L0(e,t,t.type,t.pendingProps,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,wn(t,t.type,l.value),yt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,il(t),a=Ct(a),l=l(a),t.flags|=1,yt(e,t,l,n),t.child;case 14:return P0(e,t,t.type,t.pendingProps,n);case 15:return Q0(e,t,t.type,t.pendingProps,n);case 19:return tf(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=lu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=cn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return W0(e,t,n);case 24:return il(t),l=Ct(ct),e===null?(a=wi(),a===null&&(a=We,u=Di(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),t.memoizedState={parent:l,cache:a},zi(t),wn(t,ct,a)):((e.lanes&n)!==0&&(Ai(e,t),Ba(t,null,null,n),Ha()),a=e.memoizedState,u=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),wn(t,ct,l)):(l=u.cache,wn(t,ct,l),l!==a.cache&&Ri(t,[ct],n,!0))),yt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function yn(e){e.flags|=4}function lf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dd(t)){if(t=Pt.current,t!==null&&((Ve&4194048)===Ve?en!==null:(Ve&62914560)!==Ve&&(Ve&536870912)===0||t!==en))throw Oa=Mi,Ns;e.flags|=8192}}function au(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,Jl|=t)}function Ya(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function th(e,t,n){var l=t.pendingProps;switch(Si(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),hn(ct),Oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ra(t)?yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bs())),Je(t),null;case 26:return n=t.memoizedState,e===null?(yn(t),n!==null?(Je(t),lf(t,n)):(Je(t),t.flags&=-16777217)):n?n!==e.memoizedState?(yn(t),Je(t),lf(t,n)):(Je(t),t.flags&=-16777217):(e.memoizedProps!==l&&yn(t),Je(t),t.flags&=-16777217),null;case 27:Ie(t),n=le.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&yn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Je(t),null}e=J.current,Ra(t)?Vs(t):(e=ad(a,l,n),t.stateNode=e,yn(t))}return Je(t),null;case 5:if(Ie(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&yn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Je(t),null}if(e=J.current,Ra(t))Vs(t);else{switch(a=yu(le.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[St]=t,e[Dt]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(xt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yn(t)}}return Je(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&yn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=le.current,Ra(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Rt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[St]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Jf(e.nodeValue,n)),e||rl(t)}else e=yu(e).createTextNode(l),e[St]=t,t.stateNode=e}return Je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ra(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[St]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else a=Bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(pn(t),t):(pn(t),null)}if(pn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),au(t,t.updateQueue),Je(t),null;case 4:return Oe(),e===null&&Ho(t.stateNode.containerInfo),Je(t),null;case 10:return hn(t.type),Je(t),null;case 19:if(Q(st),a=t.memoizedState,a===null)return Je(t),null;if(l=(t.flags&128)!==0,u=a.rendering,u===null)if(l)Ya(a,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ir(e),u!==null){for(t.flags|=128,Ya(a,!1),e=u.updateQueue,t.updateQueue=e,au(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)As(n,e),n=n.sibling;return q(st,st.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>iu&&(t.flags|=128,l=!0,Ya(a,!1),t.lanes=4194304)}else{if(!l)if(e=Ir(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,au(t,e),Ya(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!je)return Je(t),null}else 2*ne()-a.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,l=!0,Ya(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,e=st.current,q(st,l?e&1|2:e&1),t):(Je(t),null);case 22:case 23:return pn(t),Bi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),n=t.updateQueue,n!==null&&au(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Q(ol),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hn(ct),Je(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function nh(e,t){switch(Si(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(ct),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ie(t),null;case 13:if(pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(st),null;case 4:return Oe(),null;case 10:return hn(t.type),null;case 22:case 23:return pn(t),Bi(),e!==null&&Q(ol),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hn(ct),null;case 25:return null;default:return null}}function af(e,t){switch(Si(t),t.tag){case 3:hn(ct),Oe();break;case 26:case 27:case 5:Ie(t);break;case 4:Oe();break;case 13:pn(t);break;case 19:Q(st);break;case 10:hn(t.type);break;case 22:case 23:pn(t),Bi(),e!==null&&Q(ol);break;case 24:hn(ct)}}function qa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var u=n.create,d=n.inst;l=u(),d.destroy=l}n=n.next}while(n!==a)}}catch(g){Pe(t,t.return,g)}}function Bn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&e)===e){var d=l.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,a=t;var _=n,O=g;try{O()}catch(P){Pe(a,_,P)}}}l=l.next}while(l!==u)}}catch(P){Pe(t,t.return,P)}}function rf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ps(t,n)}catch(l){Pe(e,e.return,l)}}}function uf(e,t,n){n.props=sl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Pe(e,t,l)}}function Za(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Pe(e,t,a)}}function tn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Pe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Pe(e,t,a)}else n.current=null}function of(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Pe(e,e.return,a)}}function co(e,t,n){try{var l=e.stateNode;_h(l,e.type,n,t),l[Dt]=t}catch(a){Pe(e,e.return,a)}}function cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qn(e.type)||e.tag===4}function so(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gu));else if(l!==4&&(l===27&&qn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fo(e,t,n),e=e.sibling;e!==null;)fo(e,t,n),e=e.sibling}function ru(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&qn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function sf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xt(t,l,n),t[St]=e,t[Dt]=n}catch(u){Pe(e,e.return,u)}}var vn=!1,at=!1,ho=!1,ff=typeof WeakSet=="function"?WeakSet:Set,mt=null;function lh(e,t){if(e=e.containerInfo,Uo=_u,e=Ss(e),si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,g=-1,_=-1,O=0,P=0,K=e,H=null;t:for(;;){for(var U;K!==n||a!==0&&K.nodeType!==3||(g=d+a),K!==u||l!==0&&K.nodeType!==3||(_=d+l),K.nodeType===3&&(d+=K.nodeValue.length),(U=K.firstChild)!==null;)H=K,K=U;for(;;){if(K===e)break t;if(H===n&&++O===a&&(g=d),H===u&&++P===l&&(_=d),(U=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=U}n=g===-1||_===-1?null:{start:g,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:e,selectionRange:n},_u=!1,mt=t;mt!==null;)if(t=mt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,mt=e;else for(;mt!==null;){switch(t=mt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var ge=sl(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(ge,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(de){Pe(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Xo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,mt=e;break}mt=t.return}}function df(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Gn(e,n),l&4&&qa(5,n);break;case 1:if(Gn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Pe(n,n.return,d)}else{var a=sl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Pe(n,n.return,d)}}l&64&&rf(n),l&512&&Za(n,n.return);break;case 3:if(Gn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ps(e,t)}catch(d){Pe(n,n.return,d)}}break;case 27:t===null&&l&4&&sf(n);case 26:case 5:Gn(e,n),t===null&&l&4&&of(n),l&512&&Za(n,n.return);break;case 12:Gn(e,n);break;case 13:Gn(e,n),l&4&&pf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=dh.bind(null,n),zh(e,n))));break;case 22:if(l=n.memoizedState!==null||vn,!l){t=t!==null&&t.memoizedState!==null||at,a=vn;var u=at;vn=l,(at=t)&&!u?Un(e,n,(n.subtreeFlags&8772)!==0):Gn(e,n),vn=a,at=u}break;case 30:break;default:Gn(e,n)}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,Mt=!1;function xn(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(oe,n)}catch{}switch(n.tag){case 26:at||tn(n,t),xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:at||tn(n,t);var l=Fe,a=Mt;qn(n.type)&&(Fe=n.stateNode,Mt=!1),xn(e,t,n),Ia(n.stateNode),Fe=l,Mt=a;break;case 5:at||tn(n,t);case 6:if(l=Fe,a=Mt,Fe=null,xn(e,t,n),Fe=l,Mt=a,Fe!==null)if(Mt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(u){Pe(n,t,u)}else try{Fe.removeChild(n.stateNode)}catch(u){Pe(n,t,u)}break;case 18:Fe!==null&&(Mt?(e=Fe,nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ir(e)):nd(Fe,n.stateNode));break;case 4:l=Fe,a=Mt,Fe=n.stateNode.containerInfo,Mt=!0,xn(e,t,n),Fe=l,Mt=a;break;case 0:case 11:case 14:case 15:at||Bn(2,n,t),at||Bn(4,n,t),xn(e,t,n);break;case 1:at||(tn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&uf(n,t,l)),xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:at=(l=at)||n.memoizedState!==null,xn(e,t,n),at=l;break;default:xn(e,t,n)}}function pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ir(e)}catch(n){Pe(t,t.return,n)}}function ah(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ff),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ff),t;default:throw Error(i(435,e.tag))}}function mo(e,t){var n=ah(e);t.forEach(function(l){var a=hh.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function Ht(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(qn(g.type)){Fe=g.stateNode,Mt=!1;break e}break;case 5:Fe=g.stateNode,Mt=!1;break e;case 3:case 4:Fe=g.stateNode.containerInfo,Mt=!0;break e}g=g.return}if(Fe===null)throw Error(i(160));mf(u,d,a),Fe=null,Mt=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}var Jt=null;function gf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),Bt(e),l&4&&(Bn(3,e,e.return),qa(3,e),Bn(5,e,e.return));break;case 1:Ht(t,e),Bt(e),l&512&&(at||n===null||tn(n,n.return)),l&64&&vn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Jt;if(Ht(t,e),Bt(e),l&512&&(at||n===null||tn(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ma]||u[St]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),xt(u,l,n),u[St]=e,dt(u),l=u;break e;case"link":var d=sd("link","href",a).get(l+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(u=d[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}u=a.createElement(l),xt(u,l,n),a.head.appendChild(u);break;case"meta":if(d=sd("meta","content",a).get(l+(n.content||""))){for(g=0;g<d.length;g++)if(u=d[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}u=a.createElement(l),xt(u,l,n),a.head.appendChild(u);break;default:throw Error(i(468,l))}u[St]=e,dt(u),l=u}e.stateNode=l}else fd(a,e.type,e.stateNode);else e.stateNode=cd(a,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?fd(a,e.type,e.stateNode):cd(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&co(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ht(t,e),Bt(e),l&512&&(at||n===null||tn(n,n.return)),n!==null&&l&4&&co(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ht(t,e),Bt(e),l&512&&(at||n===null||tn(n,n.return)),e.flags&32){a=e.stateNode;try{Ml(a,"")}catch(U){Pe(e,e.return,U)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,co(e,a,n!==null?n.memoizedProps:a)),l&1024&&(ho=!0);break;case 6:if(Ht(t,e),Bt(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(U){Pe(e,e.return,U)}}break;case 3:if(bu=null,a=Jt,Jt=vu(t.containerInfo),Ht(t,e),Jt=a,Bt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(U){Pe(e,e.return,U)}ho&&(ho=!1,yf(e));break;case 4:l=Jt,Jt=vu(e.stateNode.containerInfo),Ht(t,e),Bt(e),Jt=l;break;case 12:Ht(t,e),Bt(e);break;case 13:Ht(t,e),Bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bo=ne()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mo(e,l)));break;case 22:a=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,O=vn,P=at;if(vn=O||a,at=P||_,Ht(t,e),at=P,vn=O,Bt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||_||vn||at||fl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(u=_.stateNode,a)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=_.stateNode;var K=_.memoizedProps.style,H=K!=null&&K.hasOwnProperty("display")?K.display:null;g.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(U){Pe(_,_.return,U)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=a?"":_.memoizedProps}catch(U){Pe(_,_.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,mo(e,n))));break;case 19:Ht(t,e),Bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mo(e,l)));break;case 30:break;case 21:break;default:Ht(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(cf(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,u=so(e);ru(e,u,a);break;case 5:var d=n.stateNode;n.flags&32&&(Ml(d,""),n.flags&=-33);var g=so(e);ru(e,g,d);break;case 3:case 4:var _=n.stateNode.containerInfo,O=so(e);fo(e,O,_);break;default:throw Error(i(161))}}catch(P){Pe(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)df(e,t.alternate,t),t=t.sibling}function fl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bn(4,t,t.return),fl(t);break;case 1:tn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&uf(t,t.return,n),fl(t);break;case 27:Ia(t.stateNode);case 26:case 5:tn(t,t.return),fl(t);break;case 22:t.memoizedState===null&&fl(t);break;case 30:fl(t);break;default:fl(t)}e=e.sibling}}function Un(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:Un(a,u,n),qa(4,u);break;case 1:if(Un(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(O){Pe(l,l.return,O)}if(l=u,a=l.updateQueue,a!==null){var g=l.stateNode;try{var _=a.shared.hiddenCallbacks;if(_!==null)for(a.shared.hiddenCallbacks=null,a=0;a<_.length;a++)Ls(_[a],g)}catch(O){Pe(l,l.return,O)}}n&&d&64&&rf(u),Za(u,u.return);break;case 27:sf(u);case 26:case 5:Un(a,u,n),n&&l===null&&d&4&&of(u),Za(u,u.return);break;case 12:Un(a,u,n);break;case 13:Un(a,u,n),n&&d&4&&pf(a,u);break;case 22:u.memoizedState===null&&Un(a,u,n),Za(u,u.return);break;case 30:break;default:Un(a,u,n)}t=t.sibling}}function po(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ma(n))}function go(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ma(e))}function nn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vf(e,t,n,l),t=t.sibling}function vf(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,n,l),a&2048&&qa(9,t);break;case 1:nn(e,t,n,l);break;case 3:nn(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ma(e)));break;case 12:if(a&2048){nn(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,g=u.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Pe(t,t.return,_)}}else nn(e,t,n,l);break;case 13:nn(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?nn(e,t,n,l):La(e,t):u._visibility&2?nn(e,t,n,l):(u._visibility|=2,Wl(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&po(d,t);break;case 24:nn(e,t,n,l),a&2048&&go(t.alternate,t);break;default:nn(e,t,n,l)}}function Wl(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,d=t,g=n,_=l,O=d.flags;switch(d.tag){case 0:case 11:case 15:Wl(u,d,g,_,a),qa(8,d);break;case 23:break;case 22:var P=d.stateNode;d.memoizedState!==null?P._visibility&2?Wl(u,d,g,_,a):La(u,d):(P._visibility|=2,Wl(u,d,g,_,a)),a&&O&2048&&po(d.alternate,d);break;case 24:Wl(u,d,g,_,a),a&&O&2048&&go(d.alternate,d);break;default:Wl(u,d,g,_,a)}t=t.sibling}}function La(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:La(n,l),a&2048&&po(l.alternate,l);break;case 24:La(n,l),a&2048&&go(l.alternate,l);break;default:La(n,l)}t=t.sibling}}var Pa=8192;function Kl(e){if(e.subtreeFlags&Pa)for(e=e.child;e!==null;)xf(e),e=e.sibling}function xf(e){switch(e.tag){case 26:Kl(e),e.flags&Pa&&e.memoizedState!==null&&qh(Jt,e.memoizedState,e.memoizedProps);break;case 5:Kl(e);break;case 3:case 4:var t=Jt;Jt=vu(e.stateNode.containerInfo),Kl(e),Jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Pa,Pa=16777216,Kl(e),Pa=t):Kl(e));break;default:Kl(e)}}function bf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,Cf(l,e)}bf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:Qa(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:Qa(e);break;case 12:Qa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,uu(e)):Qa(e);break;default:Qa(e)}}function uu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,Cf(l,e)}bf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),uu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,uu(t));break;default:uu(t)}e=e.sibling}}function Cf(e,t){for(;mt!==null;){var n=mt;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ma(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,mt=l;else e:for(n=e;mt!==null;){l=mt;var a=l.sibling,u=l.return;if(hf(l),l===n){mt=null;break e}if(a!==null){a.return=u,mt=a;break e}mt=u}}}var rh={getCacheForType:function(e){var t=Ct(ct),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},uh=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,Me=null,Ve=0,Xe=0,Gt=null,jn=!1,Fl=!1,yo=!1,bn=0,nt=0,kn=0,dl=0,vo=0,Qt=0,Jl=0,Wa=null,zt=null,xo=!1,bo=0,iu=1/0,ou=null,Nn=null,vt=0,Xn=null,$l=null,Il=0,So=0,Co=null,_f=null,Ka=0,_o=null;function Ut(){if((Ne&2)!==0&&Ve!==0)return Ve&-Ve;if(B.T!==null){var e=Nl;return e!==0?e:zo()}return jc()}function Tf(){Qt===0&&(Qt=(Ve&536870912)===0||je?xr():536870912);var e=Pt.current;return e!==null&&(e.flags|=32),Qt}function jt(e,t,n){(e===We&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(ea(e,0),Yn(e,Ve,Qt,!1)),ha(e,n),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(dl|=n),nt===4&&Yn(e,Ve,Qt,!1)),ln(e))}function Rf(e,t,n){if((Ne&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Fn(e,t),a=l?ch(e,t):Do(e,t,!0),u=l;do{if(a===0){Fl&&!l&&Yn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!ih(n)){a=Do(e,t,!1),u=!1;continue}if(a===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;a=Wa;var _=g.current.memoizedState.isDehydrated;if(_&&(ea(g,d).flags|=256),d=Do(g,d,!1),d!==2){if(yo&&!_){g.errorRecoveryDisabledLanes|=u,dl|=u,a=4;break e}u=zt,zt=a,u!==null&&(zt===null?zt=u:zt.push.apply(zt,u))}a=d}if(u=!1,a!==2)continue}}if(a===1){ea(e,0),Yn(e,t,0,!0);break}e:{switch(l=e,u=a,u){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Yn(l,t,Qt,!jn);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=bo+300-ne(),10<a)){if(Yn(l,t,Qt,!jn),Sl(l,0,!0)!==0)break e;l.timeoutHandle=ed(Df.bind(null,l,n,zt,ou,xo,t,Qt,dl,Jl,jn,u,2,-0,0),a);break e}Df(l,n,zt,ou,xo,t,Qt,dl,Jl,jn,u,0,-0,0)}}break}while(!0);ln(e)}function Df(e,t,n,l,a,u,d,g,_,O,P,K,H,U){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(nr={stylesheets:null,count:0,unsuspend:Yh},xf(t),K=Zh(),K!==null)){e.cancelPendingCommit=K(Vf.bind(null,e,t,u,n,l,a,d,g,_,P,1,H,U)),Yn(e,u,d,!O);return}Vf(e,t,u,n,l,a,d,g,_)}function ih(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!Ot(u(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yn(e,t,n,l){t&=~vo,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var u=31-Ae(a),d=1<<u;l[u]=-1,a&=~d}n!==0&&Gc(e,n,t)}function cu(){return(Ne&6)===0?(Fa(0),!1):!0}function To(){if(Me!==null){if(Xe===0)var e=Me.return;else e=Me,dn=ul=null,Ni(e),Pl=null,Na=0,e=Me;for(;e!==null;)af(e.alternate,e),e=e.return;Me=null}}function ea(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Rh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),To(),We=e,Me=n=cn(e.current,null),Ve=t,Xe=0,Gt=null,jn=!1,Fl=Fn(e,t),yo=!1,Jl=Qt=vo=dl=kn=nt=0,zt=Wa=null,xo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-Ae(l),u=1<<a;t|=e[a],l&=~u}return bn=t,Ar(),n}function Ef(e,t){De=null,B.H=Fr,t===Aa||t===Nr?(t=qs(),Xe=3):t===Ns?(t=qs(),Xe=4):Xe=t===Z0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Me===null&&(nt=1,tu(e,Yt(t,e.current)))}function wf(){var e=B.H;return B.H=Fr,e===null?Fr:e}function Mf(){var e=B.A;return B.A=rh,e}function Ro(){nt=4,jn||(Ve&4194048)!==Ve&&Pt.current!==null||(Fl=!0),(kn&134217727)===0&&(dl&134217727)===0||We===null||Yn(We,Ve,Qt,!1)}function Do(e,t,n){var l=Ne;Ne|=2;var a=wf(),u=Mf();(We!==e||Ve!==t)&&(ou=null,ea(e,t)),t=!1;var d=nt;e:do try{if(Xe!==0&&Me!==null){var g=Me,_=Gt;switch(Xe){case 8:To(),d=6;break e;case 3:case 2:case 9:case 6:Pt.current===null&&(t=!0);var O=Xe;if(Xe=0,Gt=null,ta(e,g,_,O),n&&Fl){d=0;break e}break;default:O=Xe,Xe=0,Gt=null,ta(e,g,_,O)}}oh(),d=nt;break}catch(P){Ef(e,P)}while(!0);return t&&e.shellSuspendCounter++,dn=ul=null,Ne=l,B.H=a,B.A=u,Me===null&&(We=null,Ve=0,Ar()),d}function oh(){for(;Me!==null;)zf(Me)}function ch(e,t){var n=Ne;Ne|=2;var l=wf(),a=Mf();We!==e||Ve!==t?(ou=null,iu=ne()+500,ea(e,t)):Fl=Fn(e,t);e:do try{if(Xe!==0&&Me!==null){t=Me;var u=Gt;t:switch(Xe){case 1:Xe=0,Gt=null,ta(e,t,u,1);break;case 2:case 9:if(Xs(u)){Xe=0,Gt=null,Af(t);break}t=function(){Xe!==2&&Xe!==9||We!==e||(Xe=7),ln(e)},u.then(t,t);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:Xs(u)?(Xe=0,Gt=null,Af(t)):(Xe=0,Gt=null,ta(e,t,u,7));break;case 5:var d=null;switch(Me.tag){case 26:d=Me.memoizedState;case 5:case 27:var g=Me;if(!d||dd(d)){Xe=0,Gt=null;var _=g.sibling;if(_!==null)Me=_;else{var O=g.return;O!==null?(Me=O,su(O)):Me=null}break t}}Xe=0,Gt=null,ta(e,t,u,5);break;case 6:Xe=0,Gt=null,ta(e,t,u,6);break;case 8:To(),nt=6;break e;default:throw Error(i(462))}}sh();break}catch(P){Ef(e,P)}while(!0);return dn=ul=null,B.H=l,B.A=a,Ne=n,Me!==null?0:(We=null,Ve=0,Ar(),nt)}function sh(){for(;Me!==null&&!Ue();)zf(Me)}function zf(e){var t=nf(e.alternate,e,bn);e.memoizedProps=e.pendingProps,t===null?su(e):Me=t}function Af(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=F0(n,t,t.pendingProps,t.type,void 0,Ve);break;case 11:t=F0(n,t,t.pendingProps,t.type.render,t.ref,Ve);break;case 5:Ni(t);default:af(n,t),t=Me=As(t,bn),t=nf(n,t,bn)}e.memoizedProps=e.pendingProps,t===null?su(e):Me=t}function ta(e,t,n,l){dn=ul=null,Ni(t),Pl=null,Na=0;var a=t.return;try{if(I1(e,a,t,n,Ve)){nt=1,tu(e,Yt(n,e.current)),Me=null;return}}catch(u){if(a!==null)throw Me=a,u;nt=1,tu(e,Yt(n,e.current)),Me=null;return}t.flags&32768?(je||l===1?e=!0:Fl||(Ve&536870912)!==0?e=!1:(jn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Of(t,e)):su(t)}function su(e){var t=e;do{if((t.flags&32768)!==0){Of(t,jn);return}e=t.return;var n=th(t.alternate,t,bn);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);nt===0&&(nt=5)}function Of(e,t){do{var n=nh(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);nt=6,Me=null}function Vf(e,t,n,l,a,u,d,g,_){e.cancelPendingCommit=null;do fu();while(vt!==0);if((Ne&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(u=t.lanes|t.childLanes,u|=pi,Y2(e,n,u,d,g,_),e===We&&(Me=We=null,Ve=0),$l=t,Xn=e,Il=n,So=u,Co=a,_f=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(Ye,function(){return jf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,a=F.p,F.p=2,d=Ne,Ne|=4;try{lh(e,t,n)}finally{Ne=d,F.p=a,B.T=l}}vt=1,Hf(),Bf(),Gf()}}function Hf(){if(vt===1){vt=0;var e=Xn,t=$l,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var l=F.p;F.p=2;var a=Ne;Ne|=4;try{gf(t,e);var u=jo,d=Ss(e.containerInfo),g=u.focusedElem,_=u.selectionRange;if(d!==g&&g&&g.ownerDocument&&bs(g.ownerDocument.documentElement,g)){if(_!==null&&si(g)){var O=_.start,P=_.end;if(P===void 0&&(P=O),"selectionStart"in g)g.selectionStart=O,g.selectionEnd=Math.min(P,g.value.length);else{var K=g.ownerDocument||document,H=K&&K.defaultView||window;if(H.getSelection){var U=H.getSelection(),ge=g.textContent.length,de=Math.min(_.start,ge),Le=_.end===void 0?de:Math.min(_.end,ge);!U.extend&&de>Le&&(d=Le,Le=de,de=d);var E=xs(g,de),R=xs(g,Le);if(E&&R&&(U.rangeCount!==1||U.anchorNode!==E.node||U.anchorOffset!==E.offset||U.focusNode!==R.node||U.focusOffset!==R.offset)){var z=K.createRange();z.setStart(E.node,E.offset),U.removeAllRanges(),de>Le?(U.addRange(z),U.extend(R.node,R.offset)):(z.setEnd(R.node,R.offset),U.addRange(z))}}}}for(K=[],U=g;U=U.parentNode;)U.nodeType===1&&K.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<K.length;g++){var W=K[g];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}_u=!!Uo,jo=Uo=null}finally{Ne=a,F.p=l,B.T=n}}e.current=t,vt=2}}function Bf(){if(vt===2){vt=0;var e=Xn,t=$l,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var l=F.p;F.p=2;var a=Ne;Ne|=4;try{df(e,t.alternate,t)}finally{Ne=a,F.p=l,B.T=n}}vt=3}}function Gf(){if(vt===4||vt===3){vt=0,te();var e=Xn,t=$l,n=Il,l=_f;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,$l=Xn=null,Uf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Nn=null),qu(n),t=t.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(oe,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=B.T,a=F.p,F.p=2,B.T=null;try{for(var u=e.onRecoverableError,d=0;d<l.length;d++){var g=l[d];u(g.value,{componentStack:g.stack})}}finally{B.T=t,F.p=a}}(Il&3)!==0&&fu(),ln(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===_o?Ka++:(Ka=0,_o=e):Ka=0,Fa(0)}}function Uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ma(t)))}function fu(e){return Hf(),Bf(),Gf(),jf()}function jf(){if(vt!==5)return!1;var e=Xn,t=So;So=0;var n=qu(Il),l=B.T,a=F.p;try{F.p=32>n?32:n,B.T=null,n=Co,Co=null;var u=Xn,d=Il;if(vt=0,$l=Xn=null,Il=0,(Ne&6)!==0)throw Error(i(331));var g=Ne;if(Ne|=4,Sf(u.current),vf(u,u.current,d,n),Ne=g,Fa(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(oe,u)}catch{}return!0}finally{F.p=a,B.T=l,Uf(e,t)}}function kf(e,t,n){t=Yt(n,t),t=eo(e.stateNode,t,2),e=An(e,t,2),e!==null&&(ha(e,2),ln(e))}function Pe(e,t,n){if(e.tag===3)kf(e,e,n);else for(;t!==null;){if(t.tag===3){kf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nn===null||!Nn.has(l))){e=Yt(n,e),n=Y0(2),l=An(t,n,2),l!==null&&(q0(n,l,t,e),ha(l,2),ln(l));break}}t=t.return}}function Eo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new uh;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(yo=!0,a.add(n),e=fh.bind(null,e,t,n),t.then(e,e))}function fh(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,We===e&&(Ve&n)===n&&(nt===4||nt===3&&(Ve&62914560)===Ve&&300>ne()-bo?(Ne&2)===0&&ea(e,0):vo|=n,Jl===Ve&&(Jl=0)),ln(e)}function Nf(e,t){t===0&&(t=Bc()),e=Gl(e,t),e!==null&&(ha(e,t),ln(e))}function dh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nf(e,n)}function hh(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),Nf(e,n)}function mh(e,t){return Se(e,t)}var du=null,na=null,wo=!1,hu=!1,Mo=!1,hl=0;function ln(e){e!==na&&e.next===null&&(na===null?du=na=e:na=na.next=e),hu=!0,wo||(wo=!0,gh())}function Fa(e,t){if(!Mo&&hu){Mo=!0;do for(var n=!1,l=du;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var d=l.suspendedLanes,g=l.pingedLanes;u=(1<<31-Ae(42|e)+1)-1,u&=a&~(d&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Zf(l,u))}else u=Ve,u=Sl(l,l===We?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Fn(l,u)||(n=!0,Zf(l,u));l=l.next}while(n);Mo=!1}}function ph(){Xf()}function Xf(){hu=wo=!1;var e=0;hl!==0&&(Th()&&(e=hl),hl=0);for(var t=ne(),n=null,l=du;l!==null;){var a=l.next,u=Yf(l,t);u===0?(l.next=null,n===null?du=a:n.next=a,a===null&&(na=n)):(n=l,(e!==0||(u&3)!==0)&&(hu=!0)),l=a}Fa(e)}function Yf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-Ae(u),g=1<<d,_=a[d];_===-1?((g&n)===0||(g&l)!==0)&&(a[d]=Nu(g,t)):_<=t&&(e.expiredLanes|=g),u&=~g}if(t=We,n=Ve,n=Sl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&bt(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&bt(l),qu(n)){case 2:case 8:n=ke;break;case 32:n=Ye;break;case 268435456:n=ft;break;default:n=Ye}return l=qf.bind(null,e),n=Se(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&bt(l),e.callbackPriority=2,e.callbackNode=null,2}function qf(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fu()&&e.callbackNode!==n)return null;var l=Ve;return l=Sl(e,e===We?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rf(e,l,t),Yf(e,ne()),e.callbackNode!=null&&e.callbackNode===n?qf.bind(null,e):null)}function Zf(e,t){if(fu())return null;Rf(e,t,!0)}function gh(){Dh(function(){(Ne&6)!==0?Se(we,ph):Xf()})}function zo(){return hl===0&&(hl=xr()),hl}function Lf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tr(""+e)}function Pf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function yh(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var u=Lf((a[Dt]||null).action),d=l.submitter;d&&(t=(t=d[Dt]||null)?Lf(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var g=new wr("action","action",null,l,a);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(hl!==0){var _=d?Pf(a,d):new FormData(a);Ki(n,{pending:!0,data:_,method:a.method,action:u},null,_)}}else typeof u=="function"&&(g.preventDefault(),_=d?Pf(a,d):new FormData(a),Ki(n,{pending:!0,data:_,method:a.method,action:u},u,_))},currentTarget:a}]})}}for(var Ao=0;Ao<mi.length;Ao++){var Oo=mi[Ao],vh=Oo.toLowerCase(),xh=Oo[0].toUpperCase()+Oo.slice(1);Ft(vh,"on"+xh)}Ft(Ts,"onAnimationEnd"),Ft(Rs,"onAnimationIteration"),Ft(Ds,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(G1,"onTransitionRun"),Ft(U1,"onTransitionStart"),Ft(j1,"onTransitionCancel"),Ft(Es,"onTransitionEnd"),Dl("onMouseEnter",["mouseout","mouseover"]),Dl("onMouseLeave",["mouseout","mouseover"]),Dl("onPointerEnter",["pointerout","pointerover"]),Dl("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));function Qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var d=l.length-1;0<=d;d--){var g=l[d],_=g.instance,O=g.currentTarget;if(g=g.listener,_!==u&&a.isPropagationStopped())break e;u=g,a.currentTarget=O;try{u(a)}catch(P){eu(P)}a.currentTarget=null,u=_}else for(d=0;d<l.length;d++){if(g=l[d],_=g.instance,O=g.currentTarget,g=g.listener,_!==u&&a.isPropagationStopped())break e;u=g,a.currentTarget=O;try{u(a)}catch(P){eu(P)}a.currentTarget=null,u=_}}}}function ze(e,t){var n=t[Zu];n===void 0&&(n=t[Zu]=new Set);var l=e+"__bubble";n.has(l)||(Wf(t,e,2,!1),n.add(l))}function Vo(e,t,n){var l=0;t&&(l|=4),Wf(n,e,l,t)}var mu="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[mu]){e[mu]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(bh.has(n)||Vo(n,!1,e),Vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mu]||(t[mu]=!0,Vo("selectionchange",!1,t))}}function Wf(e,t,n,l){switch(vd(t)){case 2:var a=Qh;break;case 8:a=Wh;break;default:a=Wo}n=a.bind(null,t,n,e),a=void 0,!ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bo(e,t,n,l,a){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var g=l.stateNode.containerInfo;if(g===a)break;if(d===4)for(d=l.return;d!==null;){var _=d.tag;if((_===3||_===4)&&d.stateNode.containerInfo===a)return;d=d.return}for(;g!==null;){if(d=_l(g),d===null)return;if(_=d.tag,_===5||_===6||_===26||_===27){l=u=d;continue e}g=g.parentNode}}l=l.return}es(function(){var O=u,P=Iu(n),K=[];e:{var H=ws.get(e);if(H!==void 0){var U=wr,ge=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":U=m1;break;case"focusin":ge="focus",U=ri;break;case"focusout":ge="blur",U=ri;break;case"beforeblur":case"afterblur":U=ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=n1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=y1;break;case Ts:case Rs:case Ds:U=r1;break;case Es:U=x1;break;case"scroll":case"scrollend":U=e1;break;case"wheel":U=S1;break;case"copy":case"cut":case"paste":U=i1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=rs;break;case"toggle":case"beforetoggle":U=_1}var de=(t&4)!==0,Le=!de&&(e==="scroll"||e==="scrollend"),E=de?H!==null?H+"Capture":null:H;de=[];for(var R=O,z;R!==null;){var W=R;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||E===null||(W=ga(R,E),W!=null&&de.push($a(R,W,z))),Le)break;R=R.return}0<de.length&&(H=new U(H,ge,null,n,P),K.push({event:H,listeners:de}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",H&&n!==$u&&(ge=n.relatedTarget||n.fromElement)&&(_l(ge)||ge[Cl]))break e;if((U||H)&&(H=P.window===P?P:(H=P.ownerDocument)?H.defaultView||H.parentWindow:window,U?(ge=n.relatedTarget||n.toElement,U=O,ge=ge?_l(ge):null,ge!==null&&(Le=c(ge),de=ge.tag,ge!==Le||de!==5&&de!==27&&de!==6)&&(ge=null)):(U=null,ge=O),U!==ge)){if(de=ls,W="onMouseLeave",E="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(de=rs,W="onPointerLeave",E="onPointerEnter",R="pointer"),Le=U==null?H:pa(U),z=ge==null?H:pa(ge),H=new de(W,R+"leave",U,n,P),H.target=Le,H.relatedTarget=z,W=null,_l(P)===O&&(de=new de(E,R+"enter",ge,n,P),de.target=z,de.relatedTarget=Le,W=de),Le=W,U&&ge)t:{for(de=U,E=ge,R=0,z=de;z;z=la(z))R++;for(z=0,W=E;W;W=la(W))z++;for(;0<R-z;)de=la(de),R--;for(;0<z-R;)E=la(E),z--;for(;R--;){if(de===E||E!==null&&de===E.alternate)break t;de=la(de),E=la(E)}de=null}else de=null;U!==null&&Kf(K,H,U,de,!1),ge!==null&&Le!==null&&Kf(K,Le,ge,de,!0)}}e:{if(H=O?pa(O):window,U=H.nodeName&&H.nodeName.toLowerCase(),U==="select"||U==="input"&&H.type==="file")var ae=hs;else if(fs(H))if(ms)ae=V1;else{ae=A1;var Ee=z1}else U=H.nodeName,!U||U.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?O&&Ju(O.elementType)&&(ae=hs):ae=O1;if(ae&&(ae=ae(e,O))){ds(K,ae,n,P);break e}Ee&&Ee(e,H,O),e==="focusout"&&O&&H.type==="number"&&O.memoizedProps.value!=null&&Fu(H,"number",H.value)}switch(Ee=O?pa(O):window,e){case"focusin":(fs(Ee)||Ee.contentEditable==="true")&&(Vl=Ee,fi=O,Ta=null);break;case"focusout":Ta=fi=Vl=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,Cs(K,n,P);break;case"selectionchange":if(B1)break;case"keydown":case"keyup":Cs(K,n,P)}var ce;if(ii)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Ol?cs(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(us&&n.locale!=="ko"&&(Ol||me!=="onCompositionStart"?me==="onCompositionEnd"&&Ol&&(ce=ts()):(En=P,ni="value"in En?En.value:En.textContent,Ol=!0)),Ee=pu(O,me),0<Ee.length&&(me=new as(me,e,null,n,P),K.push({event:me,listeners:Ee}),ce?me.data=ce:(ce=ss(n),ce!==null&&(me.data=ce)))),(ce=R1?D1(e,n):E1(e,n))&&(me=pu(O,"onBeforeInput"),0<me.length&&(Ee=new as("onBeforeInput","beforeinput",null,n,P),K.push({event:Ee,listeners:me}),Ee.data=ce)),yh(K,e,O,n,P)}Qf(K,t)})}function $a(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pu(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=ga(e,n),a!=null&&l.unshift($a(e,a,u)),a=ga(e,t),a!=null&&l.push($a(e,a,u))),e.tag===3)return l;e=e.return}return[]}function la(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kf(e,t,n,l,a){for(var u=t._reactName,d=[];n!==null&&n!==l;){var g=n,_=g.alternate,O=g.stateNode;if(g=g.tag,_!==null&&_===l)break;g!==5&&g!==26&&g!==27||O===null||(_=O,a?(O=ga(n,u),O!=null&&d.unshift($a(n,O,_))):a||(O=ga(n,u),O!=null&&d.push($a(n,O,_)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Sh=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(Ch,"")}function Jf(e,t){return t=Ff(t),Ff(e)===t}function gu(){}function Ze(e,t,n,l,a,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ml(e,""+l);break;case"className":Sr(e,"class",l);break;case"tabIndex":Sr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Sr(e,n,l);break;case"style":$c(e,l,u);break;case"data":if(t!=="object"){Sr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Tr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",a.name,a,null),Ze(e,t,"formEncType",a.formEncType,a,null),Ze(e,t,"formMethod",a.formMethod,a,null),Ze(e,t,"formTarget",a.formTarget,a,null)):(Ze(e,t,"encType",a.encType,a,null),Ze(e,t,"method",a.method,a,null),Ze(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Tr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=gu);break;case"onScroll":l!=null&&ze("scroll",e);break;case"onScrollEnd":l!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Tr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ze("beforetoggle",e),ze("toggle",e),br(e,"popover",l);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":br(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=$2.get(n)||n,br(e,n,l))}}function Go(e,t,n,l,a,u){switch(n){case"style":$c(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ml(e,l):(typeof l=="number"||typeof l=="bigint")&&Ml(e,""+l);break;case"onScroll":l!=null&&ze("scroll",e);break;case"onScrollEnd":l!=null&&ze("scrollend",e);break;case"onClick":l!=null&&(e.onclick=gu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),u=e[Dt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):br(e,n,l)}}}function xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ze(e,t,u,d,n,null)}}a&&Ze(e,t,"srcSet",n.srcSet,n,null),l&&Ze(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var g=u=d=a=null,_=null,O=null;for(l in n)if(n.hasOwnProperty(l)){var P=n[l];if(P!=null)switch(l){case"name":a=P;break;case"type":d=P;break;case"checked":_=P;break;case"defaultChecked":O=P;break;case"value":u=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(137,t));break;default:Ze(e,t,l,P,n,null)}}Wc(e,u,g,_,O,d,a,!1),Cr(e);return;case"select":ze("invalid",e),l=d=u=null;for(a in n)if(n.hasOwnProperty(a)&&(g=n[a],g!=null))switch(a){case"value":u=g;break;case"defaultValue":d=g;break;case"multiple":l=g;default:Ze(e,t,a,g,n,null)}t=u,n=d,e.multiple=!!l,t!=null?wl(e,!!l,t,!1):n!=null&&wl(e,!!l,n,!0);return;case"textarea":ze("invalid",e),u=a=l=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":l=g;break;case"defaultValue":a=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(i(91));break;default:Ze(e,t,d,g,n,null)}Fc(e,l,a,u),Cr(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(e,t,_,l,n,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(l=0;l<Ja.length;l++)ze(Ja[l],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(l=n[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ze(e,t,O,l,n,null)}return;default:if(Ju(t)){for(P in n)n.hasOwnProperty(P)&&(l=n[P],l!==void 0&&Go(e,t,P,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&Ze(e,t,g,l,n,null))}function _h(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,d=null,g=null,_=null,O=null,P=null;for(U in n){var K=n[U];if(n.hasOwnProperty(U)&&K!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":_=K;default:l.hasOwnProperty(U)||Ze(e,t,U,null,l,K)}}for(var H in l){var U=l[H];if(K=n[H],l.hasOwnProperty(H)&&(U!=null||K!=null))switch(H){case"type":u=U;break;case"name":a=U;break;case"checked":O=U;break;case"defaultChecked":P=U;break;case"value":d=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(i(137,t));break;default:U!==K&&Ze(e,t,H,U,l,K)}}Ku(e,d,g,_,O,P,u,a);return;case"select":U=d=g=H=null;for(u in n)if(_=n[u],n.hasOwnProperty(u)&&_!=null)switch(u){case"value":break;case"multiple":U=_;default:l.hasOwnProperty(u)||Ze(e,t,u,null,l,_)}for(a in l)if(u=l[a],_=n[a],l.hasOwnProperty(a)&&(u!=null||_!=null))switch(a){case"value":H=u;break;case"defaultValue":g=u;break;case"multiple":d=u;default:u!==_&&Ze(e,t,a,u,l,_)}t=g,n=d,l=U,H!=null?wl(e,!!n,H,!1):!!l!=!!n&&(t!=null?wl(e,!!n,t,!0):wl(e,!!n,n?[]:"",!1));return;case"textarea":U=H=null;for(g in n)if(a=n[g],n.hasOwnProperty(g)&&a!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ze(e,t,g,null,l,a)}for(d in l)if(a=l[d],u=n[d],l.hasOwnProperty(d)&&(a!=null||u!=null))switch(d){case"value":H=a;break;case"defaultValue":U=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==u&&Ze(e,t,d,a,l,u)}Kc(e,H,U);return;case"option":for(var ge in n)if(H=n[ge],n.hasOwnProperty(ge)&&H!=null&&!l.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:Ze(e,t,ge,null,l,H)}for(_ in l)if(H=l[_],U=n[_],l.hasOwnProperty(_)&&H!==U&&(H!=null||U!=null))switch(_){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ze(e,t,_,H,l,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)H=n[de],n.hasOwnProperty(de)&&H!=null&&!l.hasOwnProperty(de)&&Ze(e,t,de,null,l,H);for(O in l)if(H=l[O],U=n[O],l.hasOwnProperty(O)&&H!==U&&(H!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,t));break;default:Ze(e,t,O,H,l,U)}return;default:if(Ju(t)){for(var Le in n)H=n[Le],n.hasOwnProperty(Le)&&H!==void 0&&!l.hasOwnProperty(Le)&&Go(e,t,Le,void 0,l,H);for(P in l)H=l[P],U=n[P],!l.hasOwnProperty(P)||H===U||H===void 0&&U===void 0||Go(e,t,P,H,l,U);return}}for(var E in n)H=n[E],n.hasOwnProperty(E)&&H!=null&&!l.hasOwnProperty(E)&&Ze(e,t,E,null,l,H);for(K in l)H=l[K],U=n[K],!l.hasOwnProperty(K)||H===U||H==null&&U==null||Ze(e,t,K,H,l,U)}var Uo=null,jo=null;function yu(e){return e.nodeType===9?e:e.ownerDocument}function $f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function If(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=null;function Th(){var e=window.event;return e&&e.type==="popstate"?e===No?!1:(No=e,!0):(No=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,Rh=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Dh=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(Eh)}:ed;function Eh(e){setTimeout(function(){throw e})}function qn(e){return e==="head"}function nd(e,t){var n=t,l=0,a=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<l&&8>l){n=l;var d=e.ownerDocument;if(n&1&&Ia(d.documentElement),n&2&&Ia(d.body),n&4)for(n=d.head,Ia(n),d=n.firstChild;d;){var g=d.nextSibling,_=d.nodeName;d[ma]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=g}}if(a===0){e.removeChild(u),ir(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=u}while(n);ir(t)}function Xo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xo(n),Lu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function wh(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ma])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function Mh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$t(e.nextSibling),e===null))return null;return e}function Yo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zh(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var qo=null;function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function ad(e,t,n){switch(t=yu(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Ia(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lu(e)}var Wt=new Map,rd=new Set;function vu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=F.d;F.d={f:Ah,r:Oh,D:Vh,C:Hh,L:Bh,m:Gh,X:jh,S:Uh,M:kh};function Ah(){var e=Sn.f(),t=cu();return e||t}function Oh(e){var t=Tl(e);t!==null&&t.tag===5&&t.type==="form"?T0(t):Sn.r(e)}var aa=typeof document>"u"?null:document;function ud(e,t,n){var l=aa;if(l&&typeof t=="string"&&t){var a=Xt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),rd.has(a)||(rd.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),xt(t,"link",e),dt(t),l.head.appendChild(t)))}}function Vh(e){Sn.D(e),ud("dns-prefetch",e,null)}function Hh(e,t){Sn.C(e,t),ud("preconnect",e,t)}function Bh(e,t,n){Sn.L(e,t,n);var l=aa;if(l&&e&&t){var a='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Xt(n.imageSizes)+'"]')):a+='[href="'+Xt(e)+'"]';var u=a;switch(t){case"style":u=ra(e);break;case"script":u=ua(e)}Wt.has(u)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(u,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(er(u))||t==="script"&&l.querySelector(tr(u))||(t=l.createElement("link"),xt(t,"link",e),dt(t),l.head.appendChild(t)))}}function Gh(e,t){Sn.m(e,t);var n=aa;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(e)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ua(e)}if(!Wt.has(u)&&(e=v({rel:"modulepreload",href:e},t),Wt.set(u,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(tr(u)))return}l=n.createElement("link"),xt(l,"link",e),dt(l),n.head.appendChild(l)}}}function Uh(e,t,n){Sn.S(e,t,n);var l=aa;if(l&&e){var a=Rl(l).hoistableStyles,u=ra(e);t=t||"default";var d=a.get(u);if(!d){var g={loading:0,preload:null};if(d=l.querySelector(er(u)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(u))&&Zo(e,n);var _=d=l.createElement("link");dt(_),xt(_,"link",e),_._p=new Promise(function(O,P){_.onload=O,_.onerror=P}),_.addEventListener("load",function(){g.loading|=1}),_.addEventListener("error",function(){g.loading|=2}),g.loading|=4,xu(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:g},a.set(u,d)}}}function jh(e,t){Sn.X(e,t);var n=aa;if(n&&e){var l=Rl(n).hoistableScripts,a=ua(e),u=l.get(a);u||(u=n.querySelector(tr(a)),u||(e=v({src:e,async:!0},t),(t=Wt.get(a))&&Lo(e,t),u=n.createElement("script"),dt(u),xt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function kh(e,t){Sn.M(e,t);var n=aa;if(n&&e){var l=Rl(n).hoistableScripts,a=ua(e),u=l.get(a);u||(u=n.querySelector(tr(a)),u||(e=v({src:e,async:!0,type:"module"},t),(t=Wt.get(a))&&Lo(e,t),u=n.createElement("script"),dt(u),xt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function id(e,t,n,l){var a=(a=le.current)?vu(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ra(n.href),n=Rl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ra(n.href);var u=Rl(a).hoistableStyles,d=u.get(e);if(d||(a=a.ownerDocument||a,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=a.querySelector(er(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),u||Nh(a,e,n,d.state))),t&&l===null)throw Error(i(528,""));return d}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ua(n),n=Rl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function ra(e){return'href="'+Xt(e)+'"'}function er(e){return'link[rel="stylesheet"]['+e+"]"}function od(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Nh(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),xt(t,"link",n),dt(t),e.head.appendChild(t))}function ua(e){return'[src="'+Xt(e)+'"]'}function tr(e){return"script[async]"+e}function cd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(l)return t.instance=l,dt(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),dt(l),xt(l,"style",a),xu(l,n.precedence,e),t.instance=l;case"stylesheet":a=ra(n.href);var u=e.querySelector(er(a));if(u)return t.state.loading|=4,t.instance=u,dt(u),u;l=od(n),(a=Wt.get(a))&&Zo(l,a),u=(e.ownerDocument||e).createElement("link"),dt(u);var d=u;return d._p=new Promise(function(g,_){d.onload=g,d.onerror=_}),xt(u,"link",l),t.state.loading|=4,xu(u,n.precedence,e),t.instance=u;case"script":return u=ua(n.src),(a=e.querySelector(tr(u)))?(t.instance=a,dt(a),a):(l=n,(a=Wt.get(u))&&(l=v({},n),Lo(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),dt(a),xt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,xu(l,n.precedence,e));return t.instance}function xu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,d=0;d<l.length;d++){var g=l[d];if(g.dataset.precedence===t)u=g;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bu=null;function sd(e,t,n){if(bu===null){var l=new Map,a=bu=new Map;a.set(n,l)}else a=bu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var u=n[a];if(!(u[ma]||u[St]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var g=l.get(d);g?g.push(u):l.set(d,[u])}}return l}function fd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xh(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nr=null;function Yh(){}function qh(e,t,n){if(nr===null)throw Error(i(475));var l=nr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=ra(n.href),u=e.querySelector(er(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Su.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,dt(u);return}u=e.ownerDocument||e,n=od(n),(a=Wt.get(a))&&Zo(n,a),u=u.createElement("link"),dt(u);var d=u;d._p=new Promise(function(g,_){d.onload=g,d.onerror=_}),xt(u,"link",n),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Su.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Zh(){if(nr===null)throw Error(i(475));var e=nr;return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Su(){if(this.count--,this.count===0){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cu=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cu=new Map,t.forEach(Lh,e),Cu=null,Su.call(e))}function Lh(e,t){if(!(t.state.loading&4)){var n=Cu.get(e);if(n)var l=n.get(null);else{n=new Map,Cu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var d=a[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}a=t.instance,d=a.getAttribute("data-precedence"),u=n.get(d)||l,u===l&&n.set(null,a),n.set(d,a),this.count++,l=Su.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var lr={$$typeof:j,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Ph(e,t,n,l,a,u,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.hiddenUpdates=Xu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function hd(e,t,n,l,a,u,d,g,_,O,P,K){return e=new Ph(e,t,n,d,g,_,O,K),t=1,u===!0&&(t|=24),u=Vt(3,null,null,t),e.current=u,u.stateNode=e,t=Di(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},zi(u),e}function md(e){return e?(e=Ul,e):Ul}function pd(e,t,n,l,a,u){a=md(a),l.context===null?l.context=a:l.pendingContext=a,l=zn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=An(e,l,t),n!==null&&(jt(n,e,t),Va(n,e,t))}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function yd(e){if(e.tag===13){var t=Gl(e,67108864);t!==null&&jt(t,e,67108864),Qo(e,67108864)}}var _u=!0;function Qh(e,t,n,l){var a=B.T;B.T=null;var u=F.p;try{F.p=2,Wo(e,t,n,l)}finally{F.p=u,B.T=a}}function Wh(e,t,n,l){var a=B.T;B.T=null;var u=F.p;try{F.p=8,Wo(e,t,n,l)}finally{F.p=u,B.T=a}}function Wo(e,t,n,l){if(_u){var a=Ko(l);if(a===null)Bo(e,t,l,Tu,n),xd(e,l);else if(Fh(a,e,t,n,l))l.stopPropagation();else if(xd(e,l),t&4&&-1<Kh.indexOf(e)){for(;a!==null;){var u=Tl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=rn(u.pendingLanes);if(d!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var _=1<<31-Ae(d);g.entanglements[1]|=_,d&=~_}ln(u),(Ne&6)===0&&(iu=ne()+500,Fa(0))}}break;case 13:g=Gl(u,2),g!==null&&jt(g,u,2),cu(),Qo(u,2)}if(u=Ko(l),u===null&&Bo(e,t,l,Tu,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else Bo(e,t,l,null,n)}}function Ko(e){return e=Iu(e),Fo(e)}var Tu=null;function Fo(e){if(Tu=null,e=_l(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tu=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case we:return 2;case ke:return 8;case Ye:case ut:return 32;case ft:return 268435456;default:return 32}default:return 32}}var Jo=!1,Zn=null,Ln=null,Pn=null,ar=new Map,rr=new Map,Qn=[],Kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xd(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function ur(e,t,n,l,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Tl(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Fh(e,t,n,l,a){switch(t){case"focusin":return Zn=ur(Zn,e,t,n,l,a),!0;case"dragenter":return Ln=ur(Ln,e,t,n,l,a),!0;case"mouseover":return Pn=ur(Pn,e,t,n,l,a),!0;case"pointerover":var u=a.pointerId;return ar.set(u,ur(ar.get(u)||null,e,t,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,rr.set(u,ur(rr.get(u)||null,e,t,n,l,a)),!0}return!1}function bd(e){var t=_l(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,q2(e.priority,function(){if(n.tag===13){var l=Ut();l=Yu(l);var a=Gl(n,l);a!==null&&jt(a,n,l),Qo(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ru(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ko(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);$u=l,n.target.dispatchEvent(l),$u=null}else return t=Tl(n),t!==null&&yd(t),e.blockedOn=n,!1;t.shift()}return!0}function Sd(e,t,n){Ru(e)&&n.delete(t)}function Jh(){Jo=!1,Zn!==null&&Ru(Zn)&&(Zn=null),Ln!==null&&Ru(Ln)&&(Ln=null),Pn!==null&&Ru(Pn)&&(Pn=null),ar.forEach(Sd),rr.forEach(Sd)}function Du(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jh)))}var Eu=null;function Cd(e){Eu!==e&&(Eu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Eu===e&&(Eu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Fo(l||n)===null)continue;break}var u=Tl(n);u!==null&&(e.splice(t,3),t-=3,Ki(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function ir(e){function t(_){return Du(_,e)}Zn!==null&&Du(Zn,e),Ln!==null&&Du(Ln,e),Pn!==null&&Du(Pn,e),ar.forEach(t),rr.forEach(t);for(var n=0;n<Qn.length;n++){var l=Qn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)bd(n),n.blockedOn===null&&Qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],d=a[Dt]||null;if(typeof u=="function")d||Cd(n);else if(d){var g=null;if(u&&u.hasAttribute("formAction")){if(a=u,d=u[Dt]||null)g=d.formAction;else if(Fo(a)!==null)continue}else g=d.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),Cd(n)}}}function $o(e){this._internalRoot=e}wu.prototype.render=$o.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=Ut();pd(n,l,e,t,null,null)},wu.prototype.unmount=$o.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pd(e.current,2,null,e,null,null),cu(),t[Cl]=null}};function wu(e){this._internalRoot=e}wu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&bd(e)}};var _d=r.version;if(_d!=="19.1.1")throw Error(i(527,_d,"19.1.1"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var $h={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{oe=Mu.inject($h),Ce=Mu}catch{}}return cr.createRoot=function(e,t){if(!f(e))throw Error(i(299));var n=!1,l="",a=j0,u=k0,d=N0,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=hd(e,1,!1,null,null,n,l,a,u,d,g,null),e[Cl]=t.current,Ho(e),new $o(t)},cr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(i(299));var l=!1,a="",u=j0,d=k0,g=N0,_=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=hd(e,1,!0,t,n??null,l,a,u,d,g,_,O),t.context=md(null),n=t.current,l=Ut(),l=Yu(l),a=zn(l),a.callback=null,An(n,a,l),n=l,t.current.lanes=n,ha(t,n),ln(t),e[Cl]=t.current,Ho(e),new wu(t)},cr.version="19.1.1",cr}var Vd;function i3(){if(Vd)return tc.exports;Vd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),tc.exports=u3(),tc.exports}var o3=i3();const c3=gr(o3);async function s3(){if(window.__wgpuDevice)return window.__wgpuDevice;const o=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!o)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=o;const r=await o.requestDevice();return r.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=r,r.lost.then(()=>{window.__wgpuDevice===r&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),r}/**
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
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(r){r!==void 0&&(this._Seed=r)}SetSeed(r){this._Seed=r}SetFrequency(r){this._Frequency=r}SetNoiseType(r){this._NoiseType=r,this._UpdateTransformType3D()}SetRotationType3D(r){this._RotationType3D=r,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(r){this._FractalType=r}SetFractalOctaves(r){this._Octaves=r,this._CalculateFractalBounding()}SetFractalLacunarity(r){this._Lacunarity=r}SetFractalGain(r){this._Gain=r,this._CalculateFractalBounding()}SetFractalWeightedStrength(r){this._WeightedStrength=r}SetFractalPingPongStrength(r){this._PingPongStrength=r}SetCellularDistanceFunction(r){this._CellularDistanceFunction=r}SetCellularReturnType(r){this._CellularReturnType=r}SetCellularJitter(r){this._CellularJitterModifier=r}SetDomainWarpType(r){this._DomainWarpType=r,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(r){this._DomainWarpAmp=r}GetNoise(r,s,i){let f=(h,m)=>{switch(h*=this._Frequency,m*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const p=.5*(1.7320508075688772-1);let v=(h+m)*p;h+=v,m+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,h,m);case D.FractalType.FBm:return this._GenFractalFBmR2(h,m);case D.FractalType.Ridged:return this._GenFractalRidgedR2(h,m);case D.FractalType.PingPong:return this._GenFractalPingPongR2(h,m)}},c=(h,m,y)=>{switch(h*=this._Frequency,m*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=h+m,b=C*-.211324865405187;y*=.577350269189626,h+=b-y,m+=b-y,y+=C*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let C=h+y,b=C*-.211324865405187;m*=.577350269189626,h+=b-m,y+=b-m,m+=C*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const p=2/3;let v=(h+m+y)*p;h=v-h,m=v-m,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,h,m,y);case D.FractalType.FBm:return this._GenFractalFBmR3(h,m,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(h,m,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(h,m,y)}};if(arguments.length===2)return f(r,s);if(arguments.length===3)return c(r,s,i)}DomainWrap(r){switch(this._FractalType){default:this._DomainWarpSingle(r);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(r);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(r);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(r,s,i){return r+i*(s-r)}static _InterpHermite(r){return r*r*(3-2*r)}static _InterpQuintic(r){return r*r*r*(r*(r*6-15)+10)}static _CubicLerp(r,s,i,f,c){let h=f-i-(r-s);return c*c*c*h+c*c*(r-s-h)+c*(i-r)+s}static _PingPong(r){return r-=Math.trunc(r*.5)*2,r<1?r:2-r}_CalculateFractalBounding(){let r=Math.abs(this._Gain),s=r,i=1;for(let f=1;f<this._Octaves;f++)i+=s,s*=r;this._FractalBounding=1/i}_HashR2(r,s,i){let f=r^s^i;return f=Math.imul(f,668265261),f}_HashR3(r,s,i,f){let c=r^s^i^f;return c=Math.imul(c,668265261),c}_ValCoordR2(r,s,i){let f=this._HashR2(r,s,i);return f=Math.imul(f,f),f^=f<<19,f*(1/2147483648)}_ValCoordR3(r,s,i,f){let c=this._HashR3(r,s,i,f);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(r,s,i,f,c){let h=this._HashR2(r,s,i);h^=h>>15,h&=254;let m=this._Gradients2D[h],y=this._Gradients2D[h|1];return f*m+c*y}_GradCoordR3(r,s,i,f,c,h,m){let y=this._HashR3(r,s,i,f);y^=y>>15,y&=252;let p=this._Gradients3D[y],v=this._Gradients3D[y|1],C=this._Gradients3D[y|2];return c*p+h*v+m*C}_GenNoiseSingleR2(r,s,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(r,s,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(r,s,i);case D.NoiseType.Cellular:return this._SingleCellularR2(r,s,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(r,s,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(r,s,i);case D.NoiseType.Value:return this._SingleValueR2(r,s,i);default:return 0}}_GenNoiseSingleR3(r,s,i,f){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(r,s,i,f);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(r,s,i,f);case D.NoiseType.Cellular:return this._SingleCellularR3(r,s,i,f);case D.NoiseType.Perlin:return this._SinglePerlinR3(r,s,i,f);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(r,s,i,f);case D.NoiseType.Value:return this._SingleValueR3(r,s,i,f);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(r,s){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let m=this._GenNoiseSingleR2(i++,r,s);f+=m*c,c*=D._Lerp(1,Math.min(m+1,2)*.5,this._WeightedStrength),r*=this._Lacunarity,s*=this._Lacunarity,c*=this._Gain}return f}_GenFractalFBmR3(r,s,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let m=0;m<this._Octaves;m++){let y=this._GenNoiseSingleR3(f++,r,s,i);c+=y*h,h*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),r*=this._Lacunarity,s*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalRidgedR2(r,s){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let m=Math.abs(this._GenNoiseSingleR2(i++,r,s));f+=(m*-2+1)*c,c*=D._Lerp(1,1-m,this._WeightedStrength),r*=this._Lacunarity,s*=this._Lacunarity,c*=this._Gain}return f}_GenFractalRidgedR3(r,s,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let m=0;m<this._Octaves;m++){let y=Math.abs(this._GenNoiseSingleR3(f++,r,s,i));c+=(y*-2+1)*h,h*=D._Lerp(1,1-y,this._WeightedStrength),r*=this._Lacunarity,s*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalPingPongR2(r,s){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let m=D._PingPong((this._GenNoiseSingleR2(i++,r,s)+1)*this._PingPongStrength);f+=(m-.5)*2*c,c*=D._Lerp(1,m,this._WeightedStrength),r*=this._Lacunarity,s*=this._Lacunarity,c*=this._Gain}return f}_GenFractalPingPongR3(r,s,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let m=0;m<this._Octaves;m++){let y=D._PingPong((this._GenNoiseSingleR3(f++,r,s,i)+1)*this._PingPongStrength);c+=(y-.5)*2*h,h*=D._Lerp(1,y,this._WeightedStrength),r*=this._Lacunarity,s*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_SingleOpenSimplex2R2(r,s,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(s),m=Math.floor(i),y=s-h,p=i-m,v=(y+p)*c,C=y-v,b=p-v;h=Math.imul(h,this._PrimeX),m=Math.imul(m,this._PrimeY);let T,w,N,G=.5-C*C-b*b;G<=0?T=0:T=G*G*(G*G)*this._GradCoordR2(r,h,m,C,b);let Y=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+G);if(Y<=0)N=0;else{let V=C+(2*c-1),j=b+(2*c-1);N=Y*Y*(Y*Y)*this._GradCoordR2(r,h+this._PrimeX,m+this._PrimeY,V,j)}if(b>C){let V=C+c,j=b+(c-1),Z=.5-V*V-j*j;Z<=0?w=0:w=Z*Z*(Z*Z)*this._GradCoordR2(r,h,m+this._PrimeY,V,j)}else{let V=C+(c-1),j=b+c,Z=.5-V*V-j*j;Z<=0?w=0:w=Z*Z*(Z*Z)*this._GradCoordR2(r,h+this._PrimeX,m,V,j)}return(T+w+N)*99.83685446303647}_SingleOpenSimplex2R3(r,s,i,f){let c=Math.round(s),h=Math.round(i),m=Math.round(f),y=s-c,p=i-h,v=f-m,C=Math.trunc(-1-p|1),b=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),w=b*-y,N=C*-p,G=T*-v;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),m=Math.imul(m,this._PrimeZ);let Y=0,V=.6-y*y-(p*p+v*v);for(let j=0;;j++){if(V>0&&(Y+=V*V*(V*V)*this._GradCoordR3(r,c,h,m,y,p,v)),w>=N&&w>=G){let Z=V+w+w;Z>1&&(Z-=1,Y+=Z*Z*(Z*Z)*this._GradCoordR3(r,c-b*this._PrimeX,h,m,y+b,p,v))}else if(N>w&&N>=G){let Z=V+N+N;Z>1&&(Z-=1,Y+=Z*Z*(Z*Z)*this._GradCoordR3(r,c,h-C*this._PrimeY,m,y,p+C,v))}else{let Z=V+G+G;Z>1&&(Z-=1,Y+=Z*Z*(Z*Z)*this._GradCoordR3(r,c,h,m-T*this._PrimeZ,y,p,v+T))}if(j===1)break;w=.5-w,N=.5-N,G=.5-G,y=b*w,p=C*N,v=T*G,V+=.75-w-(N+G),c+=b>>1&this._PrimeX,h+=C>>1&this._PrimeY,m+=T>>1&this._PrimeZ,b=-b,C=-C,T=-T,r=~r}return Y*32.69428253173828}_SingleOpenSimplex2SR2(r,s,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(s),m=Math.floor(i),y=s-h,p=i-m;h=Math.imul(h,this._PrimeX),m=Math.imul(m,this._PrimeY);let v=h+this._PrimeX,C=m+this._PrimeY,b=(y+p)*c,T=y-b,w=p-b,N=2/3-T*T-w*w,G=N*N*(N*N)*this._GradCoordR2(r,h,m,T,w),Y=2*(1-2*c)*(1/c-2)*b+(-2*(1-2*c)*(1-2*c)+N),V=T-(1-2*c),j=w-(1-2*c);G+=Y*Y*(Y*Y)*this._GradCoordR2(r,v,C,V,j);let Z=y-p;if(b>c){if(y+Z>1){let k=T+(3*c-2),L=w+(3*c-1),X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h+(this._PrimeX<<1),m+this._PrimeY,k,L))}else{let k=T+c,L=w+(c-1),X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h,m+this._PrimeY,k,L))}if(p-Z>1){let k=T+(3*c-1),L=w+(3*c-2),X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h+this._PrimeX,m+(this._PrimeY<<1),k,L))}else{let k=T+(c-1),L=w+c,X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h+this._PrimeX,m,k,L))}}else{if(y+Z<0){let k=T+(1-c),L=w-c,X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h-this._PrimeX,m,k,L))}else{let k=T+(c-1),L=w+c,X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h+this._PrimeX,m,k,L))}if(p<Z){let k=T-c,L=w-(c-1),X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h,m-this._PrimeY,k,L))}else{let k=T+c,L=w+(c-1),X=2/3-k*k-L*L;X>0&&(G+=X*X*(X*X)*this._GradCoordR2(r,h,m+this._PrimeY,k,L))}}return G*18.24196194486065}_SingleOpenSimplex2SR3(r,s,i,f){let c=Math.floor(s),h=Math.floor(i),m=Math.floor(f),y=s-c,p=i-h,v=f-m;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),m=Math.imul(m,this._PrimeZ);let C=r+1293373,b=Math.trunc(-.5-y),T=Math.trunc(-.5-p),w=Math.trunc(-.5-v),N=y+b,G=p+T,Y=v+w,V=.75-N*N-G*G-Y*Y,j=V*V*(V*V)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(T&this._PrimeY),m+(w&this._PrimeZ),N,G,Y),Z=y-.5,k=p-.5,L=v-.5,X=.75-Z*Z-k*k-L*L;j+=X*X*(X*X)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,m+this._PrimeZ,Z,k,L);let ue=((b|1)<<1)*Z,ee=((T|1)<<1)*k,pe=((w|1)<<1)*L,ve=(-2-(b<<2))*Z-1,re=(-2-(T<<2))*k-1,fe=(-2-(w<<2))*L-1,Re=!1,he=ue+V;if(he>0){let x=N-(b|1);j+=he*he*(he*he)*this._GradCoordR3(r,c+(~b&this._PrimeX),h+(T&this._PrimeY),m+(w&this._PrimeZ),x,G,Y)}else{let x=ee+pe+V;if(x>0){let Q=N,q=G-(T|1),J=Y-(w|1);j+=x*x*(x*x)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(~T&this._PrimeY),m+(~w&this._PrimeZ),Q,q,J)}let A=ve+X;if(A>0){let Q=(b|1)+Z;j+=A*A*(A*A)*this._GradCoordR3(C,c+(b&this._PrimeX*2),h+this._PrimeY,m+this._PrimeZ,Q,k,L),Re=!0}}let B=!1,F=ee+V;if(F>0){let x=N,A=G-(T|1);j+=F*F*(F*F)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(~T&this._PrimeY),m+(w&this._PrimeZ),x,A,Y)}else{let x=ue+pe+V;if(x>0){let Q=N-(b|1),q=G,J=Y-(w|1);j+=x*x*(x*x)*this._GradCoordR3(r,c+(~b&this._PrimeX),h+(T&this._PrimeY),m+(~w&this._PrimeZ),Q,q,J)}let A=re+X;if(A>0){let Q=Z,q=(T|1)+k;j+=A*A*(A*A)*this._GradCoordR3(C,c+this._PrimeX,h+(T&this._PrimeY<<1),m+this._PrimeZ,Q,q,L),B=!0}}let $=!1,I=pe+V;if(I>0){let x=N,A=G,Q=Y-(w|1);j+=I*I*(I*I)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(T&this._PrimeY),m+(~w&this._PrimeZ),x,A,Q)}else{let x=ue+ee+V;if(x>0){let Q=N-(b|1),q=G-(T|1);j+=x*x*(x*x)*this._GradCoordR3(r,c+(~b&this._PrimeX),h+(~T&this._PrimeY),m+(w&this._PrimeZ),Q,q,Y)}let A=fe+X;if(A>0){let Q=Z,q=k,J=(w|1)+L;j+=A*A*(A*A)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,m+(w&this._PrimeZ<<1),Q,q,J),$=!0}}if(!Re){let x=re+fe+X;if(x>0){let A=Z,Q=(T|1)+k,q=(w|1)+L;j+=x*x*(x*x)*this._GradCoordR3(C,c+this._PrimeX,h+(T&this._PrimeY<<1),m+(w&this._PrimeZ<<1),A,Q,q)}}if(!B){let x=ve+fe+X;if(x>0){let A=(b|1)+Z,Q=k,q=(w|1)+L;j+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX*2),h+this._PrimeY,m+(w&this._PrimeZ<<1),A,Q,q)}}if(!$){let x=ve+re+X;if(x>0){let A=(b|1)+Z,Q=(T|1)+k;j+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX<<1),h+(T&this._PrimeY<<1),m+this._PrimeZ,A,Q,L)}}return j*9.046026385208288}_SingleCellularR2(r,s,i){let f=Math.round(s),c=Math.round(i),h=Number.MAX_VALUE,m=Number.MAX_VALUE,y=0,p=.43701595*this._CellularJitterModifier,v=(f-1)*this._PrimeX,C=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let b=f-1;b<=f+1;b++){let T=C;for(let w=c-1;w<=c+1;w++){let N=this._HashR2(r,v,T),G=N&510,Y=b-s+this._RandVecs2D[G]*p,V=w-i+this._RandVecs2D[G|1]*p,j=Y*Y+V*V;m=Math.max(Math.min(m,j),h),j<h&&(h=j,y=N),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let b=f-1;b<=f+1;b++){let T=C;for(let w=c-1;w<=c+1;w++){let N=this._HashR2(r,v,T),G=N&510,Y=b-s+this._RandVecs2D[G]*p,V=w-i+this._RandVecs2D[G|1]*p,j=Math.abs(Y)+Math.abs(V);m=Math.max(Math.min(m,j),h),j<h&&(h=j,y=N),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let b=f-1;b<=f+1;b++){let T=C;for(let w=c-1;w<=c+1;w++){let N=this._HashR2(r,v,T),G=N&510,Y=b-s+this._RandVecs2D[G]*p,V=w-i+this._RandVecs2D[G|1]*p,j=Math.abs(Y)+Math.abs(V)+(Y*Y+V*V);m=Math.max(Math.min(m,j),h),j<h&&(h=j,y=N),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(h=Math.sqrt(h),this._CellularReturnType!==D.CellularReturnType.CellValue&&(m=Math.sqrt(m))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return h-1;case D.CellularReturnType.Distance2:return m-1;case D.CellularReturnType.Distance2Add:return(m+h)*.5-1;case D.CellularReturnType.Distance2Sub:return m-h-1;case D.CellularReturnType.Distance2Mul:return m*h*.5-1;case D.CellularReturnType.Distance2Div:return h/m-1;default:return 0}}_SingleCellularR3(r,s,i,f){let c=Math.round(s),h=Math.round(i),m=Math.round(f),y=Number.MAX_VALUE,p=Number.MAX_VALUE,v=0,C=.39614353*this._CellularJitterModifier,b=(c-1)*this._PrimeX,T=(h-1)*this._PrimeY,w=(m-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let N=c-1;N<=c+1;N++){let G=T;for(let Y=h-1;Y<=h+1;Y++){let V=w;for(let j=m-1;j<=m+1;j++){let Z=this._HashR3(r,b,G,V),k=Z&1020,L=N-s+this._RandVecs3D[k]*C,X=Y-i+this._RandVecs3D[k|1]*C,ue=j-f+this._RandVecs3D[k|2]*C,ee=L*L+X*X+ue*ue;p=Math.max(Math.min(p,ee),y),ee<y&&(y=ee,v=Z),V+=this._PrimeZ}G+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let N=c-1;N<=c+1;N++){let G=T;for(let Y=h-1;Y<=h+1;Y++){let V=w;for(let j=m-1;j<=m+1;j++){let Z=this._HashR3(r,b,G,V),k=Z&1020,L=N-s+this._RandVecs3D[k]*C,X=Y-i+this._RandVecs3D[k|1]*C,ue=j-f+this._RandVecs3D[k|2]*C,ee=Math.abs(L)+Math.abs(X)+Math.abs(ue);p=Math.max(Math.min(p,ee),y),ee<y&&(y=ee,v=Z),V+=this._PrimeZ}G+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let N=c-1;N<=c+1;N++){let G=T;for(let Y=h-1;Y<=h+1;Y++){let V=w;for(let j=m-1;j<=m+1;j++){let Z=this._HashR3(r,b,G,V),k=Z&1020,L=N-s+this._RandVecs3D[k]*C,X=Y-i+this._RandVecs3D[k|1]*C,ue=j-f+this._RandVecs3D[k|2]*C,ee=Math.abs(L)+Math.abs(X)+Math.abs(ue)+(L*L+X*X+ue*ue);p=Math.max(Math.min(p,ee),y),ee<y&&(y=ee,v=Z),V+=this._PrimeZ}G+=this._PrimeY}b+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+y)*.5-1;case D.CellularReturnType.Distance2Sub:return p-y-1;case D.CellularReturnType.Distance2Mul:return p*y*.5-1;case D.CellularReturnType.Distance2Div:return y/p-1;default:return 0}}_SinglePerlinR2(r,s,i){let f=Math.floor(s),c=Math.floor(i),h=s-f,m=i-c,y=h-1,p=m-1,v=D._InterpQuintic(h),C=D._InterpQuintic(m);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let b=f+this._PrimeX,T=c+this._PrimeY,w=D._Lerp(this._GradCoordR2(r,f,c,h,m),this._GradCoordR2(r,b,c,y,m),v),N=D._Lerp(this._GradCoordR2(r,f,T,h,p),this._GradCoordR2(r,b,T,y,p),v);return D._Lerp(w,N,C)*1.4247691104677813}_SinglePerlinR3(r,s,i,f){let c=Math.floor(s),h=Math.floor(i),m=Math.floor(f),y=s-c,p=i-h,v=f-m,C=y-1,b=p-1,T=v-1,w=D._InterpQuintic(y),N=D._InterpQuintic(p),G=D._InterpQuintic(v);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),m=Math.imul(m,this._PrimeZ);let Y=c+this._PrimeX,V=h+this._PrimeY,j=m+this._PrimeZ,Z=D._Lerp(this._GradCoordR3(r,c,h,m,y,p,v),this._GradCoordR3(r,Y,h,m,C,p,v),w),k=D._Lerp(this._GradCoordR3(r,c,V,m,y,b,v),this._GradCoordR3(r,Y,V,m,C,b,v),w),L=D._Lerp(this._GradCoordR3(r,c,h,j,y,p,T),this._GradCoordR3(r,Y,h,j,C,p,T),w),X=D._Lerp(this._GradCoordR3(r,c,V,j,y,b,T),this._GradCoordR3(r,Y,V,j,C,b,T),w),ue=D._Lerp(Z,k,N),ee=D._Lerp(L,X,N);return D._Lerp(ue,ee,G)*.9649214148521423}_SingleValueCubicR2(r,s,i){let f=Math.floor(s),c=Math.floor(i),h=s-f,m=i-c;f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f-this._PrimeX,p=c-this._PrimeY,v=f+this._PrimeX,C=c+this._PrimeY,b=f+(this._PrimeX<<1),T=c+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(r,y,p),this._ValCoordR2(r,f,p),this._ValCoordR2(r,v,p),this._ValCoordR2(r,b,p),h),D._CubicLerp(this._ValCoordR2(r,y,c),this._ValCoordR2(r,f,c),this._ValCoordR2(r,v,c),this._ValCoordR2(r,b,c),h),D._CubicLerp(this._ValCoordR2(r,y,C),this._ValCoordR2(r,f,C),this._ValCoordR2(r,v,C),this._ValCoordR2(r,b,C),h),D._CubicLerp(this._ValCoordR2(r,y,T),this._ValCoordR2(r,f,T),this._ValCoordR2(r,v,T),this._ValCoordR2(r,b,T),h),m)*(1/(1.5*1.5))}_SingleValueCubicR3(r,s,i,f){let c=Math.floor(s),h=Math.floor(i),m=Math.floor(f),y=s-c,p=i-h,v=f-m;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),m=Math.imul(m,this._PrimeZ);let C=c-this._PrimeX,b=h-this._PrimeY,T=m-this._PrimeZ,w=c+this._PrimeX,N=h+this._PrimeY,G=m+this._PrimeZ,Y=c+(this._PrimeX<<1),V=h+(this._PrimeY<<1),j=m+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,T),this._ValCoordR3(r,c,b,T),this._ValCoordR3(r,w,b,T),this._ValCoordR3(r,Y,b,T),y),D._CubicLerp(this._ValCoordR3(r,C,h,T),this._ValCoordR3(r,c,h,T),this._ValCoordR3(r,w,h,T),this._ValCoordR3(r,Y,h,T),y),D._CubicLerp(this._ValCoordR3(r,C,N,T),this._ValCoordR3(r,c,N,T),this._ValCoordR3(r,w,N,T),this._ValCoordR3(r,Y,N,T),y),D._CubicLerp(this._ValCoordR3(r,C,V,T),this._ValCoordR3(r,c,V,T),this._ValCoordR3(r,w,V,T),this._ValCoordR3(r,Y,V,T),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,m),this._ValCoordR3(r,c,b,m),this._ValCoordR3(r,w,b,m),this._ValCoordR3(r,Y,b,m),y),D._CubicLerp(this._ValCoordR3(r,C,h,m),this._ValCoordR3(r,c,h,m),this._ValCoordR3(r,w,h,m),this._ValCoordR3(r,Y,h,m),y),D._CubicLerp(this._ValCoordR3(r,C,N,m),this._ValCoordR3(r,c,N,m),this._ValCoordR3(r,w,N,m),this._ValCoordR3(r,Y,N,m),y),D._CubicLerp(this._ValCoordR3(r,C,V,m),this._ValCoordR3(r,c,V,m),this._ValCoordR3(r,w,V,m),this._ValCoordR3(r,Y,V,m),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,G),this._ValCoordR3(r,c,b,G),this._ValCoordR3(r,w,b,G),this._ValCoordR3(r,Y,b,G),y),D._CubicLerp(this._ValCoordR3(r,C,h,G),this._ValCoordR3(r,c,h,G),this._ValCoordR3(r,w,h,G),this._ValCoordR3(r,Y,h,G),y),D._CubicLerp(this._ValCoordR3(r,C,N,G),this._ValCoordR3(r,c,N,G),this._ValCoordR3(r,w,N,G),this._ValCoordR3(r,Y,N,G),y),D._CubicLerp(this._ValCoordR3(r,C,V,G),this._ValCoordR3(r,c,V,G),this._ValCoordR3(r,w,V,G),this._ValCoordR3(r,Y,V,G),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,j),this._ValCoordR3(r,c,b,j),this._ValCoordR3(r,w,b,j),this._ValCoordR3(r,Y,b,j),y),D._CubicLerp(this._ValCoordR3(r,C,h,j),this._ValCoordR3(r,c,h,j),this._ValCoordR3(r,w,h,j),this._ValCoordR3(r,Y,h,j),y),D._CubicLerp(this._ValCoordR3(r,C,N,j),this._ValCoordR3(r,c,N,j),this._ValCoordR3(r,w,N,j),this._ValCoordR3(r,Y,N,j),y),D._CubicLerp(this._ValCoordR3(r,C,V,j),this._ValCoordR3(r,c,V,j),this._ValCoordR3(r,w,V,j),this._ValCoordR3(r,Y,V,j),y),p),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(r,s,i){let f=Math.floor(s),c=Math.floor(i),h=D._InterpHermite(s-f),m=D._InterpHermite(i-c);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f+this._PrimeX,p=c+this._PrimeY,v=D._Lerp(this._ValCoordR2(r,f,c),this._ValCoordR2(r,y,c),h),C=D._Lerp(this._ValCoordR2(r,f,p),this._ValCoordR2(r,y,p),h);return D._Lerp(v,C,m)}_SingleValueR3(r,s,i,f){let c=Math.floor(s),h=Math.floor(i),m=Math.floor(f),y=D._InterpHermite(s-c),p=D._InterpHermite(i-h),v=D._InterpHermite(f-m);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),m=Math.imul(m,this._PrimeZ);let C=c+this._PrimeX,b=h+this._PrimeY,T=m+this._PrimeZ,w=D._Lerp(this._ValCoordR3(r,c,h,m),this._ValCoordR3(r,C,h,m),y),N=D._Lerp(this._ValCoordR3(r,c,b,m),this._ValCoordR3(r,C,b,m),y),G=D._Lerp(this._ValCoordR3(r,c,h,T),this._ValCoordR3(r,C,h,T),y),Y=D._Lerp(this._ValCoordR3(r,c,b,T),this._ValCoordR3(r,C,b,T),y),V=D._Lerp(w,N,p),j=D._Lerp(G,Y,p);return D._Lerp(V,j,v)}_DoSingleDomainWarp(){let r=(i,f,c,h,m,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*38.283687591552734,c,h,!1,m,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*16,c,h,!0,m,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,m,y);break}},s=(i,f,c,h,m,y,p)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*32.69428253173828,c,h,!1,m,y,p);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*7.71604938271605,c,h,!0,m,y,p);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,m,y,p);break}};if(arguments.length===6&&arguments[3]instanceof sr)return r(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof fr)return s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let r=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,m=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(m+y)*v;m+=C,y+=C;break}this._DoSingleDomainWarp(f,c,h,i,m,y)},s=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,m=i.x,y=i.y,p=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let b=m+y,T=b*-.211324865405187;p*=.577350269189626,m+=T-p,y=y+T-p,p+=b*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let b=m+p,T=b*-.211324865405187;y*=.577350269189626,m+=T-y,p+=T-y,y+=b*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let C=(m+y+p)*v;m=C-m,y=C-y,p=C-p;break}this._DoSingleDomainWarp(f,c,h,i,m,y,p)};if(arguments.length===1&&arguments[0]instanceof sr)return r(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return s(arguments[0])}_DomainWarpFractalProgressive(){let r=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let m=0;m<this._Octaves;m++){let y=i.x,p=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const C=.5*(1.7320508075688772-1);let b=(y+p)*C;y+=b,p+=b;break}this._DoSingleDomainWarp(f,c,h,i,y,p),f++,c*=this._Gain,h*=this._Lacunarity}},s=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let m=0;m<this._Octaves;m++){let y=i.x,p=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=y+p,b=C*-.211324865405187;v*=.577350269189626,y+=b-v,p=p+b-v,v+=C*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let C=y+v,b=C*-.211324865405187;p*=.577350269189626,y+=b-p,v+=b-p,p+=C*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let b=(y+p+v)*.6666666666666666;y=b-y,p=b-p,v=b-v}break}this._DoSingleDomainWarp(f,c,h,i,y,p,v),f++,c*=this._Gain,h*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof sr)return r(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return s(arguments[0])}_DomainWarpFractalIndependent(){let r=i=>{let f=i.x,c=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(f+c)*v;f+=C,c+=C;break}let h=this._Seed,m=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let p=0;p<this._Octaves;p++)this._DoSingleDomainWarp(h,m,y,i,f,c),h++,m*=this._Gain,y*=this._Lacunarity},s=i=>{let f=i.x,c=i.y,h=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=f+c,C=v*-.211324865405187;h*=.577350269189626,f+=C-h,c=c+C-h,h+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=f+h,C=v*-.211324865405187;c*=.577350269189626,f+=C-c,h+=C-c,c+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let C=(f+c+h)*.6666666666666666;f=C-f,c=C-c,h=C-h}break}let m=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,p=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(m,y,p,i,f,c,h),m++,y*=this._Gain,p*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof sr)return r(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return s(arguments[0])}_SingleDomainWarpBasicGrid(){let r=(i,f,c,h,m,y)=>{let p=m*c,v=y*c,C=Math.floor(p),b=Math.floor(v),T=D._InterpHermite(p-C),w=D._InterpHermite(v-b);C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY);let N=C+this._PrimeX,G=b+this._PrimeY,Y=this._HashR2(i,C,b)&510,V=this._HashR2(i,N,b)&510,j=D._Lerp(this._RandVecs2D[Y],this._RandVecs2D[V],T),Z=D._Lerp(this._RandVecs2D[Y|1],this._RandVecs2D[V|1],T);Y=this._HashR2(i,C,G)&510,V=this._HashR2(i,N,G)&510;let k=D._Lerp(this._RandVecs2D[Y],this._RandVecs2D[V],T),L=D._Lerp(this._RandVecs2D[Y|1],this._RandVecs2D[V|1],T);h.x+=D._Lerp(j,k,w)*f,h.y+=D._Lerp(Z,L,w)*f},s=(i,f,c,h,m,y,p)=>{let v=m*c,C=y*c,b=p*c,T=Math.floor(v),w=Math.floor(C),N=Math.floor(b),G=D._InterpHermite(v-T),Y=D._InterpHermite(C-w),V=D._InterpHermite(b-N);T=Math.imul(T,this._PrimeX),w=Math.imul(w,this._PrimeY),N=Math.imul(N,this._PrimeZ);let j=T+this._PrimeX,Z=w+this._PrimeY,k=N+this._PrimeZ,L=this._HashR3(i,T,w,N)&1020,X=this._HashR3(i,j,w,N)&1020,ue=D._Lerp(this._RandVecs3D[L],this._RandVecs3D[X],G),ee=D._Lerp(this._RandVecs3D[L|1],this._RandVecs3D[X|1],G),pe=D._Lerp(this._RandVecs3D[L|2],this._RandVecs3D[X|2],G);L=this._HashR3(i,T,Z,N)&1020,X=this._HashR3(i,j,Z,N)&1020;let ve=D._Lerp(this._RandVecs3D[L],this._RandVecs3D[X],G),re=D._Lerp(this._RandVecs3D[L|1],this._RandVecs3D[X|1],G),fe=D._Lerp(this._RandVecs3D[L|2],this._RandVecs3D[X|2],G),Re=D._Lerp(ue,ve,Y),he=D._Lerp(ee,re,Y),B=D._Lerp(pe,fe,Y);L=this._HashR3(i,T,w,k)&1020,X=this._HashR3(i,j,w,k)&1020,ue=D._Lerp(this._RandVecs3D[L],this._RandVecs3D[X],G),ee=D._Lerp(this._RandVecs3D[L|1],this._RandVecs3D[X|1],G),pe=D._Lerp(this._RandVecs3D[L|2],this._RandVecs3D[X|2],G),L=this._HashR3(i,T,Z,k)&1020,X=this._HashR3(i,j,Z,k)&1020,ve=D._Lerp(this._RandVecs3D[L],this._RandVecs3D[X],G),re=D._Lerp(this._RandVecs3D[L|1],this._RandVecs3D[X|1],G),fe=D._Lerp(this._RandVecs3D[L|2],this._RandVecs3D[X|2],G),h.x+=D._Lerp(Re,D._Lerp(ue,ve,Y),V)*f,h.y+=D._Lerp(he,D._Lerp(ee,re,Y),V)*f,h.z+=D._Lerp(B,D._Lerp(pe,fe,Y),V)*f};arguments.length===6&&arguments[3]instanceof sr&&r(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof fr&&s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let r=(i,f,c,h,m,y,p)=>{const C=(3-1.7320508075688772)/6;y*=c,p*=c;let b=Math.floor(y),T=Math.floor(p),w=y-b,N=p-T,G=(w+N)*C,Y=w-G,V=N-G;b=Math.imul(b,this._PrimeX),T=Math.imul(T,this._PrimeY);let j,Z;j=Z=0;let k=.5-Y*Y-V*V;if(k>0){let X=k*k*(k*k),ue,ee;if(m){let pe=this._HashR2(i,b,T)&510;ue=this._RandVecs2D[pe],ee=this._RandVecs2D[pe|1]}else{let pe=this._HashR2(i,b,T),ve=pe&254,re=pe>>7&510,fe=this._Gradients2D[ve],Re=this._Gradients2D[ve|1],he=Y*fe+V*Re,B=this._RandVecs2D[re],F=this._RandVecs2D[re|1];ue=he*B,ee=he*F}j+=X*ue,Z+=X*ee}let L=2*(1-2*C)*(1/C-2)*G+(-2*(1-2*C)*(1-2*C)+k);if(L>0){let X=Y+(2*C-1),ue=V+(2*C-1),ee=L*L*(L*L),pe,ve;if(m){let re=this._HashR2(i,b+this._PrimeX,T+this._PrimeY)&510;pe=this._RandVecs2D[re],ve=this._RandVecs2D[re|1]}else{let re=this._HashR2(i,b+this._PrimeX,T+this._PrimeY),fe=re&254,Re=re>>7&510,he=this._Gradients2D[fe],B=this._Gradients2D[fe|1],F=X*he+ue*B,$=this._RandVecs2D[Re],I=this._RandVecs2D[Re|1];pe=F*$,ve=F*I}j+=ee*pe,Z+=ee*ve}if(V>Y){let X=Y+C,ue=V+(C-1),ee=.5-X*X-ue*ue;if(ee>0){let pe=ee*ee*(ee*ee),ve,re;if(m){let fe=this._HashR2(i,b,T+this._PrimeY)&510;ve=this._RandVecs2D[fe],re=this._RandVecs2D[fe|1]}else{let fe=this._HashR2(i,b,T+this._PrimeY),Re=fe&254,he=fe>>7&510,B=this._Gradients2D[Re],F=this._Gradients2D[Re|1],$=X*B+ue*F,I=this._RandVecs2D[he],x=this._RandVecs2D[he|1];ve=$*I,re=$*x}j+=pe*ve,Z+=pe*re}}else{let X=Y+(C-1),ue=V+C,ee=.5-X*X-ue*ue;if(ee>0){let pe=ee*ee*(ee*ee),ve,re;if(m){let fe=this._HashR2(i,b+this._PrimeX,T)&510;ve=this._RandVecs2D[fe],re=this._RandVecs2D[fe|1]}else{let fe=this._HashR2(i,b+this._PrimeX,T),Re=fe&254,he=fe>>7&510,B=this._Gradients2D[Re],F=this._Gradients2D[Re|1],$=X*B+ue*F,I=this._RandVecs2D[he],x=this._RandVecs2D[he|1];ve=$*I,re=$*x}j+=pe*ve,Z+=pe*re}}h.x+=j*f,h.y+=Z*f},s=(i,f,c,h,m,y,p,v)=>{y*=c,p*=c,v*=c;let C=Math.round(y),b=Math.round(p),T=Math.round(v),w=y-C,N=p-b,G=v-T,Y=-w-1|1,V=-N-1|1,j=-G-1|1,Z=Y*-w,k=V*-N,L=j*-G;C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY),T=Math.imul(T,this._PrimeZ);let X,ue,ee;X=ue=ee=0;let pe=.6-w*w-(N*N+G*G);for(let ve=0;;ve++){if(pe>0){let I=pe*pe*(pe*pe),x,A,Q;if(m){let q=this._HashR3(i,C,b,T)&1020;x=this._RandVecs3D[q],A=this._RandVecs3D[q|1],Q=this._RandVecs3D[q|2]}else{let q=this._HashR3(i,C,b,T),J=q&252,se=q>>6&1020,le=this._Gradients3D[J],He=this._Gradients3D[J|1],be=this._Gradients3D[J|2],Oe=w*le+N*He+G*be,Ke=this._RandVecs3D[se],Ie=this._RandVecs3D[se|1],et=this._RandVecs3D[se|2];x=Oe*Ke,A=Oe*Ie,Q=Oe*et}X+=I*x,ue+=I*A,ee+=I*Q}let re=pe,fe=C,Re=b,he=T,B=w,F=N,$=G;if(Z>=k&&Z>=L?(B+=Y,re=re+Z+Z,fe-=Y*this._PrimeX):k>Z&&k>=L?(F+=V,re=re+k+k,Re-=V*this._PrimeY):($+=j,re=re+L+L,he-=j*this._PrimeZ),re>1){re-=1;let I=re*re*(re*re),x,A,Q;if(m){let q=this._HashR3(i,fe,Re,he)&1020;x=this._RandVecs3D[q],A=this._RandVecs3D[q|1],Q=this._RandVecs3D[q|2]}else{let q=this._HashR3(i,fe,Re,he),J=q&252,se=q>>6&1020,le=this._Gradients3D[J],He=this._Gradients3D[J|1],be=this._Gradients3D[J|2],Oe=B*le+F*He+$*be,Ke=this._RandVecs3D[se],Ie=this._RandVecs3D[se|1],et=this._RandVecs3D[se|2];x=Oe*Ke,A=Oe*Ie,Q=Oe*et}X+=I*x,ue+=I*A,ee+=I*Q}if(ve===1)break;Z=.5-Z,k=.5-k,L=.5-L,w=Y*Z,N=V*k,G=j*L,pe+=.75-Z-(k+L),C+=Y>>1&this._PrimeX,b+=V>>1&this._PrimeY,T+=j>>1&this._PrimeZ,Y=-Y,V=-V,j=-j,i+=1293373}h.x+=X*f,h.y+=ue*f,h.z+=ee*f};arguments.length===7&&r(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class sr{constructor(r,s){this.x=r,this.y=s}}class fr{constructor(r,s,i){this.x=r,this.y=s,this.z=i}}function f3(o=42,r=1920,s=1080,i=D.NoiseType.Perlin,f=6,c=1.7,h=.5,m=D.FractalType.FBm,y=.003){const p=new D;p.SetNoiseType(i),p.SetSeed(o),p.SetFractalOctaves(f),p.SetFractalLacunarity(c),p.SetFractalGain(h),p.SetFractalType(m),p.SetFrequency(y);const v=[];for(let T=0;T<s;T++)for(let w=0;w<r;w++){const G=(p.GetNoise(w,T)+1)/2;v.push(G)}var C=0,b=0;for(let T=0;T<v.length;T++)(v[T]<C||T==0)&&(C=v[T]),(v[T]>b||T==0)&&(b=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-C)/(b-C);return v}const d3=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
}`,h3=`// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)\r
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
    // cycle index? this steps index [0-8]\r
    //var cycleIndex : u32 = uView.simIndex % 8;\r
\r
    // get random starting index based on randomDirectionsBuffer values\r
	//var cIndex : u32 = (cycleIndex + u32(randomDirectionsBuffer[idx(u32(coord.x), u32(coord.y))])) % 8;\r
\r
	// using an odd multiplier (3, 5, or 7 all work). 3 is a good default.\r
	let cycleIndex : u32 = (uView.simIndex * 3u) % 8u;\r
\r
	// keep your existing per-cell offset (randomDirectionsBuffer), but mod 8 explicitly\r
	let baseOffset : u32 = u32(randomDirectionsBuffer[idx(u32(coord.x), u32(coord.y))]) % 8u;\r
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
    // cycle index? this steps index [0-8]\r
    // var cycleIndex : u32 = uView.simIndex % 8;\r
\r
    // get random starting index based on randomDirectionsBuffer values\r
	// var cIndex : u32 = (cycleIndex + u32(randomDirectionsBuffer[idx(u32(coord.x), u32(coord.y))])) % 8;\r
\r
	// using an odd multiplier (3, 5, or 7 all work). 3 is a good default.\r
	let cycleIndex : u32 = (uView.simIndex * 3u) % 8u;\r
\r
	// keep your existing per-cell offset (randomDirectionsBuffer), but mod 8 explicitly\r
	let baseOffset : u32 = u32(randomDirectionsBuffer[idx(u32(coord.x), u32(coord.y))]) % 8u;\r
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
}`,m3=`// ---------- Helpers ----------\r
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
  return roundToColorSteps(cellHeight(coord)) + abs(cellFAmount(coord));\r
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
  if(abs(cellFAmount(coord)) > 0.0)\r
  {\r
    if(abs(cellFAmount(vec2<u32>(coord.x - 1, coord.y))) < 1e-7) { return true; }\r
    if(abs(cellFAmount(vec2<u32>(coord.x + 1, coord.y))) < 1e-7) { return true; }\r
    if(abs(cellFAmount(vec2<u32>(coord.x, coord.y - 1))) < 1e-7) { return true; }\r
    if(abs(cellFAmount(vec2<u32>(coord.x, coord.y + 1))) < 1e-7) { return true; }\r
  }\r
  else { return false; }\r
\r
  let h = fHeight(coord);\r
  var count = 0.0;\r
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
\r
  let h = roundedCellHeight(coord);\r
  if (h >= 0.0) {\r
    let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));\r
    color = terrainColorLerp(h / f32(maxHeight));\r
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
fn inShadow(coord : vec2<u32>, sunPosition : vec3<f32>) -> bool\r
{\r
  // let rayTarget = vec3<f32>(f32(coord.x), roundedCellHeight(coord), f32(coord.y));\r
  // var currentPos = sunPosition;\r
\r
  // let accuracy = f32(10.0);\r
\r
  // var passes = 0;\r
  // while (passes < 1000)\r
  // {\r
  //   passes++;\r
\r
  //   if(distance(currentPos, rayTarget) < 1e-6)\r
  //   {\r
  //     return false;\r
  //   }\r
    \r
  //   let distG = distToGround(currentPos);\r
  //   if(distG <= -1e-3) \r
  //   { \r
  //     return true;\r
  //   }\r
\r
  //   let nextPosition = move_towards3(currentPos, rayTarget, f32(max(0.5, distG / accuracy)));\r
  //   currentPos = nextPosition;    \r
  // }\r
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
\r
\r
  // return false;\r
}\r
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
}`,p3=`@fragment\r
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {\r
    // 1 cell per pixel (nearest)\r
    let w = uView.size.x;\r
    let h = uView.size.y;\r
\r
    let x = u32(clamp(floor(frag_pos.x), 0.0, f32(w - 1u)));\r
    let y = u32(clamp(floor(frag_pos.y), 0.0, f32(h - 1u)));\r
    let coord = vec2(x,y);\r
    let black = vec4f(0.0, 0.0, 0.0, 1.0);\r
\r
    if(!inBounds(x,y)) { return black; }\r
\r
    let terrainColor = outputTex[idx(x,y)];\r
    let shadowColor = outputTex[idx(x,y) + uView.size.x * uView.size.y];\r
    let fluidColor = outputTex[idx(x,y) + uView.size.x * uView.size.y * 2];\r
    let debugColor = outputTex[idx(x,y) + uView.size.x * uView.size.y * 3];\r
\r
    let mouseWidth  = 2.0;\r
    let inOuter = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);\r
    let inInner = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius - mouseWidth);\r
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
    var combinedColor = over_rgba(terrainColor, shadowColor);\r
    combinedColor = over_rgba(combinedColor, fluidColor);\r
    combinedColor = over_rgba(combinedColor, cursorOutline);\r
    if(uView.showDebug > 0u) { combinedColor = over_rgba(combinedColor, debugColor); }\r
\r
    return combinedColor;\r
}`,Id=`//{structs}\r
\r
//{helpers}\r
\r
//{flow_helpers}\r
\r
//{chunk_helpers}\r
\r
@group(0) @binding(0) var<uniform> uView : View;\r
@group(0) @binding(1) var<uniform> uInput : Input;\r
@group(0) @binding(2) var<uniform> uTerrain : TerrainParams;\r
@group(0) @binding(3) var<storage, read_write> currentCells : array<CellData>;\r
@group(0) @binding(4) var<storage, read>       terrainColors : array<vec4f>;\r
@group(0) @binding(5) var<storage, read_write> outputTex : array<vec4f>;\r
@group(0) @binding(6) var<storage, read_write> nextCells : array<CellData>;\r
@group(0) @binding(7) var<storage, read>       randomDirectionsBuffer : array<u32>;\r
@group(0) @binding(8) var<storage, read_write> cursorQuery : CursorQuery;\r
@group(0) @binding(9) var<storage, read_write> chunkData : array<ChunkData>;\r
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
//{step_compute}\r
\r
//{cursor_query}\r
\r
//{total_query}\r
\r
//{chunk_data_calc}`,g3=`struct View {\r
    size      : vec2<u32>, // width, height (pixels)\r
    time      : f32,       // seconds\r
    simIndex  : u32,       // [0-inf] simulation passes\r
    showDebug : u32, // @16\r
    \r
};\r
\r
struct Input {\r
  mousePos     : vec2<u32>, // 0..1: u32 pixels\r
  mouse0Held   : f32,       // 2: 0/1\r
  mouse1Held   : f32,       // 3: 0/1\r
  mouseRadius  : f32,       // 4\r
  // (12 bytes implicit padding here to align next member to 16B)\r
  visibleRect  : vec4<u32>, //  (x0, y0, x1, y1) in canvas coords\r
};                          // total size = 48 bytes\r
\r
struct CellData {\r
    height       : f32,       // 0..3\r
    heightNormal : vec3<f32>, // starts at 16, uses 16 bytes\r
    fAmount      : f32,       // at 28\r
    _pad0        : vec3<f32>, // starts at 32, uses 16 bytes\r
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
};`,y3=`// Fullscreen triangle VS\r
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
}`,v3=`@compute @workgroup_size(1, 1, 1)\r
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
    // loop {\r
    //     if (y >= endY) { break; }\r
    //     var x = startX;\r
    //     loop {\r
    //         if (x >= endX) { break; }\r
    //         let c = currentCells[idx(x, y)];\r
    //         let v = c.fAmount;\r
    //         if (v > 0.0) {\r
    //             fluidTotal += v;\r
    //         } else {\r
    //             anitFluidTotal -= v; // add magnitude of negative\r
    //         }\r
\r
    //         if(v > fluidMax)\r
    //         {\r
    //             maxFI = currentI;\r
    //             fluidMax = v;\r
    //         }\r
\r
    //         if(v < aFluidMax || (currentI == 0i && v < 0.0))\r
    //         {\r
    //             maxAFI = currentI;\r
    //             aFluidMax = v;\r
    //         }\r
\r
    //         if(allSameF && abs(startingCellFValue - v) > 0.1)\r
    //         {\r
    //             allSameF = false;\r
    //         }\r
\r
    //         x = x + 1u;\r
    //         currentI++;\r
    //     }\r
    //     y = y + 1u;\r
    // }\r
\r
    let chunkIdx = chunkX + chunkY * numChunks.x;\r
    chunkData[chunkIdx].fluidTotal       = fluidTotal;\r
    chunkData[chunkIdx].anitFluidTotal   = anitFluidTotal;\r
    chunkData[chunkIdx].deepestFluid     = maxFI;\r
    chunkData[chunkIdx].deepestAntiFluid = maxAFI;\r
}\r
`,x3=`@compute @workgroup_size(1, 1, 1)\r
fn cursor_query(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    if(gid.x > 0) { return; }\r
\r
    let i = idx(uInput.mousePos.x, uInput.mousePos.y);\r
    var cell = currentCells[i];\r
    // cell.height = roundedCellHeight(vec2(x,y));\r
    // cell.fAmount = roundedCellFAmount(vec2(x,y));\r
    cursorQuery.cell = cell;\r
}\r
`,b3=`@compute @workgroup_size(1, 1, 1)\r
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
`,S3=`// ---- Fragment shader ----\r
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
}`,C3=`@compute @workgroup_size(16, 16, 1)\r
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
    outputTex[idx(x,y) + idOffset] = finalColor;\r
}\r
`,_3=`@compute @workgroup_size(16, 16, 1)\r
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
        outputTex[idx(x,y) + idOffset] = clear;\r
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
    outputTex[idx(x,y) + idOffset] = finalColor;\r
}\r
`,T3=`@compute @workgroup_size(16, 16, 1)\r
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
`,R3=`@compute @workgroup_size(16, 16, 1)\r
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
    let showChunkDebug = false;\r
    let chunkSize = 16u;\r
    var chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.0);\r
    if(showChunkDebug)\r
    {\r
        let chunkPos = getChunkPos(coord, chunkSize);\r
        let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);\r
        let chunkIdx = chunkPos.x + chunkPos.y * numChunks.x;\r
\r
        if(chunkIdx < numChunks.x * numChunks.y)\r
        {\r
            let chunk = chunkData[chunkIdx];\r
\r
            var isBoundary = (x % chunkSize == 1 || x % chunkSize == chunkSize - 1u) || (y % chunkSize == 1 || y % chunkSize == chunkSize - 1u);\r
            //isBoundary = chunkPos.y == 0u;//numChunks.y - 1u;\r
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
            }\r
        }\r
        \r
        if(x % chunkSize == 0 || y % chunkSize == 0)\r
        {\r
            chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.5);\r
        }\r
        \r
    }\r
\r
    finalColor = over_rgba(finalColor, chunkDebugColor);\r
\r
\r
    let idOffset = uView.size.x * uView.size.y;\r
    outputTex[idx(x,y) + idOffset] = finalColor;\r
}\r
`,D3=`@compute @workgroup_size(16, 16, 1)\r
fn terrain_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let x = gid.x;\r
    let y = gid.y;\r
    let coord = vec2(x,y);\r
    if (x >= uView.size.x || y >= uView.size.y) { return; }\r
\r
    outputTex[idx(x,y)] = getTerrainColor(coord);\r
\r
    // updated\r
    // let w = uView.size.x;\r
    // let h = uView.size.y;\r
    // let pos = vec2<u32>(x, y);\r
\r
    // // Get height from height map\r
    // let hgt: f32 = cellHeight(pos);\r
\r
    // // Starting point for ray cast\r
    // var px = f32(clamp(f32(x), 0.0, f32(w - 1u)));\r
    // var py = f32(clamp(f32(y), 0.0, f32(h - 1u)));\r
    // var p: vec3f = vec3<f32>(px, py, cellHeight(pos));\r
\r
    // // Minimum step size based on pixel size\r
    // let minStepSize: f32 = 0.5;\r
\r
    // // Direction of raycast is towards the sun from centre of screen\r
    // let sunPos  = vec3<f32>(f32(uInput.mousePos.x), f32(uInput.mousePos.y), 300);\r
    // // let terrainPos   = vec3<f32>(f32(x), hgt, f32(y));\r
    // // let lightDir     = normalize(sunPos - terrainPos);\r
    // let sunDir: vec3f = sunPos - vec3f(f32(w / 2), f32(h / 2), 300);\r
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
    // var col: vec4f = getTerrainColor(coord);//getTerrainColour(hgt, normal);\r
\r
    // // // Water logic\r
    // // // let waterDepth: f32 = uParams.waterLevel - hgt;\r
\r
    // // // // isWater = step(0., waterDepth)\r
    // // // let isWater: f32 = select(0.0, 1.0, waterDepth >= 0.0);\r
\r
    // // // // Shallow-water waves factor\r
    // // // var isWave: f32 = isWater * (1.0 - smoothstep(0.0, 0.05, waterDepth));\r
    // // // isWave = isWave * ( (sin(cos(uParams.millis / 500.0) * 2.0 + waterDepth * 500.0) + 1.0) * 0.5 );\r
\r
    // // // let waterLerp: f32 = easeOut(waterDepth / uParams.waterLevel);\r
\r
    // // // // Simulate see-through water by depth-based lerp\r
    // // // col = mix(col, uParams.colourWater, waterLerp);\r
\r
    // // // // Add waves\r
    // // // col = col + vec4f(isWave / 8.0);\r
\r
    // // Combine ray shadow and normal-based shadow\r
    // inShadow = clamp(inShadow + normalShadow, 0.0, 1.0);\r
\r
    // let shadowBrightness = 0.2;\r
\r
    // // Slight blue shift in shadow based on inShadow\r
    // let shadowCol: vec4f = col * shadowBrightness * vec4f(1.0, 1.0, 1.0 + inShadow * 0.2, 1.0);\r
\r
    // // Final color\r
    // // let outCol: vec4f = mix(col, shadowCol, inShadow);\r
    // let outCol: vec4f = mix(col, shadowCol, inShadow);\r
    // // return outCol;\r
\r
    // outputTex[idx(x,y)] = outCol;// vec4(1.0, 0.0, 0.0, 1.0);\r
}\r
`,E3=`@compute @workgroup_size(16, 16, 1)\r
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
    // if(mouse0Held || mouse1Held)\r
    // {\r
    //     let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);\r
    //     if (mouse0Held && inside) {\r
    //         out.height = out.height + 1.0;\r
    //     }\r
    //     else if (mouse1Held && inside) {\r
    //         out.height = out.height - 1.0;\r
    //     }\r
    // }\r
    // Clamp\r
    out.height = clamp(out.height, 0.0, uTerrain.maxCellValue);\r
\r
    // Fluid editing\r
    let fStrength = 3.0;\r
    if(mouse0Held || mouse1Held)\r
    {\r
        //let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);\r
        if (mouse0Held && inside) {\r
            out.fAmount = out.fAmount + fStrength * radiusT;\r
        }\r
        else if (mouse1Held && inside) {\r
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
    {\r
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
}\r
\r
// // Core tile (WG × WG), plus halo for multi-step evolution\r
// const WG        : u32 = 16u;\r
// const HALO      : u32 = 8u;                           // supports up to 4 sub-steps\r
// const EXTW      : u32 = WG + 2u*HALO;             // shared width\r
// const EXTH      : u32 = WG + 2u*HALO;             // shared height\r
// const EXTN      : u32 = EXTW * EXTH;\r
// const STRIDE    : u32 = EXTW;\r
\r
// var<workgroup> prevH : array<f32, EXTN>;  // read-only across substeps\r
// var<workgroup> prevF : array<f32, EXTN>;  // read in, updated each substep\r
// var<workgroup> nextF : array<f32, EXTN>;  // scratch per substep\r
\r
// fn sidx(x:u32, y:u32) -> u32 { return y * EXTW + x; }\r
\r
// // Row-major index into a 1D buffer using an explicit width.\r
// fn gidx(x: u32, y: u32, width: u32) -> u32 {\r
//   return y * width + x;\r
// }\r
\r
// // ---- Shared/tile bounds helpers ----\r
// fn sInBounds(sx:u32, sy:u32) -> bool {\r
//   return (sx < EXTW) && (sy < EXTH);\r
// }\r
// fn sInBoundsI(c: vec2<i32>) -> bool {\r
//   return c.x >= 0 && c.y >= 0 && u32(c.x) < EXTW && u32(c.y) < EXTH;\r
// }\r
\r
// fn sNeighborCoord(scoord: vec2<i32>, index: u32) -> vec2<i32> {\r
//   let k = ((index % 8u) + 8u) % 8u;\r
//   return scoord + OFFSETS[k];\r
// }\r
\r
// fn sH(sx:u32, sy:u32) -> f32 { return prevH[sidx(sx,sy)]; }\r
// fn sF(sx:u32, sy:u32) -> f32 { return prevF[sidx(sx,sy)]; }\r
\r
// // ---- prevTile readers (shared coords) ----\r
// fn sCellHeight(sx:u32, sy:u32) -> f32 {\r
//   return sH(sx, sy);\r
// }\r
// fn sCellFAmount(sx:u32, sy:u32) -> f32 {\r
//   return sF(sx, sy);\r
// }\r
\r
// // ---- rounding / coloring based on uniforms ----\r
\r
// fn sRoundedCellHeight(sx:u32, sy:u32) -> f32 {\r
//   return roundToColorSteps(sCellHeight(sx, sy));\r
// }\r
// fn sRoundedCellFAmount(sx:u32, sy:u32) -> f32 {\r
//   return roundToColorSteps(sCellFAmount(sx, sy));\r
// }\r
// fn sRoundedCombinedHeight(sx:u32, sy:u32) -> f32 {\r
//   return roundToColorSteps(sCellHeight(sx, sy)) + sCellFAmount(sx, sy);\r
// }\r
\r
// // ---- neighbor index search (shared coords) ----\r
// // Pass (gx,gy) so we can still index your randomDirectionsBuffer[idx(gx,gy)]\r
// fn sHighestNeighborIndex(scoord: vec2<i32>, gx:u32, gy:u32) -> u32 {\r
//   var bestIdx : u32 = 0u;\r
//   var bestVal : f32 = -1.0;\r
//   let cycleIndex  : u32 = (uView.simIndex * 3u) % 8u;\r
//   let baseOffset  : u32 = u32(randomDirectionsBuffer[idx(gx, gy)]) % 8u;\r
//   let start       : u32 = (cycleIndex + baseOffset) % 8u;\r
\r
//   for (var i: u32 = 0u; i < 8u; i++) {\r
//     let j = (i + start) % 8u;\r
//     let nC = sNeighborCoord(scoord, j);\r
//     if (!sInBoundsI(nC)) { continue; }\r
//     let v = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));\r
//     if (i == 0u || v > bestVal) {\r
//       bestVal = v;\r
//       bestIdx = j;\r
//     }\r
//   }\r
//   return bestIdx;\r
// }\r
\r
// fn sLowestNeighborIndex(scoord: vec2<i32>, gx:u32, gy:u32) -> u32 {\r
//   var bestIdx : u32 = 0u;\r
//   var bestVal : f32 =  1e30; // large\r
//   let cycleIndex  : u32 = (uView.simIndex * 3u) % 8u;\r
//   let baseOffset  : u32 = u32(randomDirectionsBuffer[idx(gx, gy)]) % 8u;\r
//   let start       : u32 = (cycleIndex + baseOffset) % 8u;\r
\r
//   for (var i: u32 = 0u; i < 8u; i++) {\r
//     let j = (i + start) % 8u;\r
//     let nC = sNeighborCoord(scoord, j);\r
//     if (!sInBoundsI(nC)) { continue; }\r
//     let v = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));\r
//     if (i == 0u || v < bestVal) {\r
//       bestVal = v;\r
//       bestIdx = j;\r
//     }\r
//   }\r
//   return bestIdx;\r
// }\r
\r
// // Direct neighbor count with sign filtering, from prevTile\r
// fn sDirectNeighborCount(scoord: vec2<i32>) -> u32 {\r
//   var count : u32 = 0u;\r
//   let selfVal = sCellFAmount(u32(scoord.x), u32(scoord.y));\r
//   let isAnti  = selfVal < 0.0;\r
\r
//   for (var i: u32 = 0u; i < 8u; i++) {\r
//     let nC = sNeighborCoord(scoord, i);\r
//     if (!sInBoundsI(nC)) { continue; }\r
//     let nVal = sCellFAmount(u32(nC.x), u32(nC.y));\r
//     if (nVal == 0.0) { continue; }\r
//     if ((selfVal != 0.0) && (isAnti != (nVal < 0.0))) { continue; }\r
//     count++;\r
//   }\r
//   return count;\r
// }\r
\r
// // ---- flow change computed entirely from prevTile (shared coords) ----\r
// fn sGetFlowChange(sx:u32, sy:u32, gx:u32, gy:u32) -> f32 {\r
//   let scoord = vec2<i32>(i32(sx), i32(sy));\r
//   let cellVal  = sCellFAmount(sx, sy);\r
//   let cellH    = sRoundedCellHeight(sx, sy);\r
//   let combined = cellVal + cellH;\r
\r
//   var change : f32 = 0.0;\r
//   let maxCellValue : f32 = uTerrain.maxCellValue;\r
\r
//   var nC : vec2<i32>;\r
//   var nVal : f32;\r
//   var nComb : f32;\r
//   var nH : f32;\r
//   var highestIdx : u32;\r
//   var lowestIdx  : u32;\r
//   var opposite   : u32;\r
\r
//   // tunables (copied from your func)\r
//   let movementDivisor        : f32 = 2.0;\r
//   let minSpreadAmount        : f32 = 1.0;\r
//   let minMoveAmount          : f32 = 0.1;\r
//   let cellMovementMultiplier : f32 = 1.0;\r
//   let clampToOne             : bool = true;\r
\r
//   // Increase due to higher neighbor flowing in\r
//   if (combined < maxCellValue) {\r
//     highestIdx = sHighestNeighborIndex(scoord, gx, gy);\r
//     nC = sNeighborCoord(scoord, highestIdx);\r
\r
//     if (sInBoundsI(nC)) {\r
//       nVal  = sCellFAmount(u32(nC.x), u32(nC.y));\r
//       nComb = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));\r
//       let nIsAnti = nVal < 0.0;\r
\r
//       if (((cellVal != 0.0) || (abs(nVal) > minSpreadAmount))\r
//            && (abs(nVal) > minMoveAmount)\r
//            && (nComb >= combined))\r
//       {\r
//         opposite  = (highestIdx + 4u) % 8u;\r
//         lowestIdx = sLowestNeighborIndex(nC, u32(i32(gx) + OFFSETS[highestIdx].x), \r
//                                              u32(i32(gy) + OFFSETS[highestIdx].y));\r
\r
//         if (lowestIdx == opposite) {\r
//           let m = maxCellValue - combined;\r
//           var n = floor((nComb - combined) / movementDivisor * cellMovementMultiplier);\r
//           n = min(abs(nVal), n);\r
//           let lower = f32(select(0, 1, clampToOne));\r
//           let sign  = f32(select(1, -1, nIsAnti));\r
//           change += clamp(n, lower, m) * sign;\r
//         }\r
//       }\r
//     }\r
//   }\r
\r
//   // Decrease due to flowing out to lower neighbor\r
//   if (abs(cellVal) > minMoveAmount) {\r
//     lowestIdx = sLowestNeighborIndex(scoord, gx, gy);\r
//     nC = sNeighborCoord(scoord, lowestIdx);\r
\r
//     if (sInBoundsI(nC)) {\r
//       nVal  = sCellFAmount(u32(nC.x), u32(nC.y));\r
//       nComb = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));\r
//       if ((nVal != 0.0 || abs(cellVal) > minSpreadAmount)\r
//            && nComb < maxCellValue && nComb <= combined)\r
//       {\r
//         opposite   = (lowestIdx + 4u) % 8u;\r
//         highestIdx = sHighestNeighborIndex(nC, u32(i32(gx) + OFFSETS[lowestIdx].x),\r
//                                                u32(i32(gy) + OFFSETS[lowestIdx].y));\r
//         nH = sCellHeight(u32(nC.x), u32(nC.y));\r
\r
//         if (highestIdx == opposite) {\r
//           let m = maxCellValue - nComb;\r
//           var n = floor((combined - nComb) / movementDivisor * cellMovementMultiplier);\r
//           n = min(abs(cellVal), n);\r
//           let lower = f32(select(0, 1, clampToOne));\r
//           let sign  = f32(select(1, -1, (nVal < 0.0)));\r
//           change -= clamp(n, lower, m) * sign;\r
//         }\r
//       }\r
//     }\r
//   }\r
\r
//   return change;\r
// }\r
\r
// fn sGetFutureF(sx:u32, sy:u32, gx:u32, gy:u32) -> f32 {\r
//     let f = sF(sx, sy);\r
//     let h = sH(sx, sy);\r
//     var out = f;\r
//     out += sGetFlowChange(sx, sy, gx, gy);\r
\r
//     let mouse0Held = uInput.mouse0Held > 0.5;\r
//     let mouse1Held = uInput.mouse1Held > 0.5;\r
\r
//     let dSqrd = distanceSqrd(vec2<u32>(gx,gy), uInput.mousePos);\r
//     let radiusSqrd = uInput.mouseRadius * uInput.mouseRadius;\r
//     var radiusT = clamp((radiusSqrd - dSqrd) / radiusSqrd, 0.0, 1.0);\r
//     radiusT = radiusT * radiusT;\r
//     let inside = dSqrd <= radiusSqrd;\r
\r
\r
\r
//     // Fluid editing\r
//     let fStrength = 3.0;\r
//     if(mouse0Held || mouse1Held)\r
//     {\r
//         //let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);\r
//         if (mouse0Held && inside) {\r
//             out = out + fStrength * radiusT;\r
//         }\r
//         else if (mouse1Held && inside) {\r
//             out = out - fStrength * radiusT;\r
//         }\r
//     }\r
\r
//     // Apply evaporation\r
//     if(out < 2.0 && sDirectNeighborCount(vec2<i32>(vec2(gx, gy))) < 8)\r
//     {\r
//         out -= clamp(out * 0.001, 0.0, 0.001);\r
//         if(out < 0.1 && out > 0.0) { out = 0.0;}\r
//     }\r
\r
\r
//     let maxV = uTerrain.maxCellValue * 2.0;\r
//     return clamp(out, -maxV + h, maxV - h);\r
// }\r
\r
\r
// // --- Helper: cooperative load of prevTile (no wrap; clamp-to-edge halo) ---\r
// fn loadPrevTileNoWrap(lid: vec3<u32>, wid: vec3<u32>, W:u32, H:u32) {\r
//   let gx0 = wid.x * WG;\r
//   let gy0 = wid.y * WG;\r
\r
//   var sy = lid.y;\r
//   loop {\r
//     if (sy >= EXTH) { break; }\r
//     var sx = lid.x;\r
//     loop {\r
//       if (sx >= EXTW) { break; }\r
\r
//       let gx_i = i32(gx0) + i32(sx) - i32(HALO);\r
//       let gy_i = i32(gy0) + i32(sy) - i32(HALO);\r
//       let cx   = u32(clamp(gx_i, 0, i32(W) - 1));\r
//       let cy   = u32(clamp(gy_i, 0, i32(H) - 1));\r
\r
//       let gi = gidx(cx, cy, W);\r
//       let si = sidx(sx, sy);\r
//       let c  = currentCells[gi];\r
\r
//       prevH[si] = c.height;\r
//       prevF[si] = c.fAmount;\r
\r
//       sx += WG;\r
//     }\r
//     sy += WG;\r
//   }\r
//   workgroupBarrier();\r
// }\r
\r
// // Evolve up to \`steps\` sub-steps entirely in shared memory.\r
// // Fixed indexing: sx=HALO+lid.x, sy=HALO+lid.y (no sliding).\r
// fn evolveNSteps(steps:u32, lid:vec3<u32>, wid:vec3<u32>) {\r
//   let N  : u32 = min(steps, HALO);\r
\r
//   // Global origin (if your helpers need gx,gy for random indexing etc.)\r
//   let gx0 = wid.x * WG;\r
//   let gy0 = wid.y * WG;\r
\r
//   // Fixed shared coords for this thread\r
//   let sx_fixed : u32 = HALO + lid.x;\r
//   let sy_fixed : u32 = HALO + lid.y;\r
\r
//   var s:u32 = 0u;\r
//   loop {\r
//     if (s >= N) { break; }\r
\r
//     let gx = gx0 + lid.x;\r
//     let gy = gy0 + lid.y;\r
\r
//     let i = sidx(sx_fixed, sy_fixed);\r
//     nextF[i] = sGetFutureF(sx_fixed, sy_fixed, gx, gy);\r
\r
//     workgroupBarrier(); // make nextF visible\r
\r
//     // Copy results back in-place (no sliding): only where we computed\r
//     prevF[i] = nextF[i];\r
\r
//     workgroupBarrier(); // prevF now holds the state for next sub-step\r
//     s += 1u;\r
//   }\r
// }\r
\r
\r
\r
// // Writes only the final interior of size (WG - 2*N) × (WG - 2*N)\r
// fn writeBackToNext(steps:u32, lid:vec3<u32>, wid:vec3<u32>, W:u32, H:u32) {\r
//   let N : u32 = min(steps, HALO);\r
\r
//   let gx0 = wid.x * WG;\r
//   let gy0 = wid.y * WG;\r
\r
//   let sx  = HALO + lid.x;   // fixed, no sliding\r
//   let sy  = HALO + lid.y;\r
\r
//   let outX = gx0 + lid.x;\r
//   let outY = gy0 + lid.y;\r
\r
//   // Final interior: N cells away from each edge; no ±1 neighbor margin needed for write-back\r
//   if (outX < W && outY < H ) {\r
\r
//     let si = sidx(sx, sy);\r
//     let gi = gidx(outX, outY, W);\r
\r
//     var out = currentCells[gi];                 // preserve other fields\r
//     out.height  = clamp(prevH[si], 0.0, uTerrain.maxCellValue);\r
//     out.fAmount = prevF[si];\r
//     nextCells[gi] = out;\r
//   }\r
// }\r
\r
\r
// @compute @workgroup_size(WG, WG, 1)\r
// fn stepN(\r
//   @builtin(local_invocation_id) lid : vec3<u32>,\r
//   @builtin(workgroup_id)        wid : vec3<u32>\r
// ) {\r
//     let W = uView.size.x;   // or your params.width\r
//     let H = uView.size.y;   // or your params.height\r
\r
//     let gx = wid.x * WG;\r
//     let gy = wid.y * WG;\r
\r
//     if(gx >= W || gy >= H || gx < 0 || gy < 0) { return; }\r
\r
//     let steps : u32 = 4u;\r
\r
//     loadPrevTileNoWrap(lid, wid, W, H);  // fills prevTile (+halo), then barriers\r
\r
//     evolveNSteps(steps, lid, wid);               // your multi-step shared-memory loop\r
\r
//     writeBackToNext(steps, lid, wid, W, H); // store central WG×WG to nextCells\r
// }`,w3=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":d3,"../shaders/helpers/flow_helpers.wgsl":h3,"../shaders/helpers/helpers.wgsl":m3,"../shaders/main/fragment.wgsl":p3,"../shaders/main/shader_outline.wgsl":Id,"../shaders/main/structs.wgsl":g3,"../shaders/main/vertex.wgsl":y3,"../shaders/query/chunk_data_calc.wgsl":v3,"../shaders/query/cursor_query.wgsl":x3,"../shaders/query/total_query.wgsl":b3,"../shaders/realtime_frag.wgsl":S3,"../shaders/render/debug_render_compute.wgsl":C3,"../shaders/render/fluid_render_compute.wgsl":_3,"../shaders/render/normal_compute.wgsl":T3,"../shaders/render/shadow_render_compute.wgsl":R3,"../shaders/render/terrain_render_compute.wgsl":D3,"../shaders/simulation/step_compute.wgsl":E3});function M3(){let o=Id;for(const[r,s]of Object.entries(w3)){const i=r.split("/").pop().replace(".wgsl","");o=o.replace(`//{${i}}`,s)}return o}var rc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Hd;function z3(){return Hd||(Hd=1,(function(o){(function(){var r={}.hasOwnProperty;function s(){for(var c="",h=0;h<arguments.length;h++){var m=arguments[h];m&&(c=f(c,i(m)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return s.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var h="";for(var m in c)r.call(c,m)&&c[m]&&(h=f(h,m));return h}function f(c,h){return h?c?c+" "+h:c+h:c}o.exports?(s.default=s,o.exports=s):window.classNames=s})()})(rc)),rc.exports}var A3=z3();const Te=gr(A3);function O3(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)!==-1)continue;s[i]=o[i]}return s}function mc(o,r){return mc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},mc(o,r)}function V3(o,r){o.prototype=Object.create(r.prototype),o.prototype.constructor=o,mc(o,r)}const H3=["xxl","xl","lg","md","sm","xs"],B3="xs",yr=M.createContext({prefixes:{},breakpoints:H3,minBreakpoint:B3}),{Consumer:Zp,Provider:Lp}=yr;function Be(o,r){const{prefixes:s}=M.useContext(yr);return o||s[r]||r}function e2(){const{breakpoints:o}=M.useContext(yr);return o}function t2(){const{minBreakpoint:o}=M.useContext(yr);return o}function G3(){const{dir:o}=M.useContext(yr);return o==="rtl"}function Bu(o){return o&&o.ownerDocument||document}function U3(o){var r=Bu(o);return r&&r.defaultView||window}function j3(o,r){return U3(o).getComputedStyle(o,r)}var k3=/([A-Z])/g;function N3(o){return o.replace(k3,"-$1").toLowerCase()}var X3=/^ms-/;function zu(o){return N3(o).replace(X3,"-ms-")}var Y3=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function q3(o){return!!(o&&Y3.test(o))}function yl(o,r){var s="",i="";if(typeof r=="string")return o.style.getPropertyValue(zu(r))||j3(o).getPropertyValue(zu(r));Object.keys(r).forEach(function(f){var c=r[f];!c&&c!==0?o.style.removeProperty(zu(f)):q3(f)?i+=f+"("+c+") ":s+=zu(f)+": "+c+";"}),i&&(s+="transform: "+i+";"),o.style.cssText+=";"+s}var uc={exports:{}},ic,Bd;function Z3(){if(Bd)return ic;Bd=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ic=o,ic}var oc,Gd;function L3(){if(Gd)return oc;Gd=1;var o=Z3();function r(){}function s(){}return s.resetWarningCache=r,oc=function(){function i(h,m,y,p,v,C){if(C!==o){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}i.isRequired=i;function f(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:f,element:i,elementType:i,instanceOf:f,node:i,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:r};return c.PropTypes=c,c},oc}var Ud;function P3(){return Ud||(Ud=1,uc.exports=L3()()),uc.exports}var Q3=P3();const rt=gr(Q3);var W3=$d();const sa=gr(W3),jd={disabled:!1},n2=gt.createContext(null);var K3=function(r){return r.scrollTop},hr="unmounted",ml="exited",Kn="entering",pl="entered",pc="exiting",Rn=(function(o){V3(r,o);function r(i,f){var c;c=o.call(this,i,f)||this;var h=f,m=h&&!h.isMounting?i.enter:i.appear,y;return c.appearStatus=null,i.in?m?(y=ml,c.appearStatus=Kn):y=pl:i.unmountOnExit||i.mountOnEnter?y=hr:y=ml,c.state={status:y},c.nextCallback=null,c}r.getDerivedStateFromProps=function(f,c){var h=f.in;return h&&c.status===hr?{status:ml}:null};var s=r.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(f){var c=null;if(f!==this.props){var h=this.state.status;this.props.in?h!==Kn&&h!==pl&&(c=Kn):(h===Kn||h===pl)&&(c=pc)}this.updateStatus(!1,c)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var f=this.props.timeout,c,h,m;return c=h=m=f,f!=null&&typeof f!="number"&&(c=f.exit,h=f.enter,m=f.appear!==void 0?f.appear:h),{exit:c,enter:h,appear:m}},s.updateStatus=function(f,c){if(f===void 0&&(f=!1),c!==null)if(this.cancelNextCallback(),c===Kn){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:sa.findDOMNode(this);h&&K3(h)}this.performEnter(f)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ml&&this.setState({status:hr})},s.performEnter=function(f){var c=this,h=this.props.enter,m=this.context?this.context.isMounting:f,y=this.props.nodeRef?[m]:[sa.findDOMNode(this),m],p=y[0],v=y[1],C=this.getTimeouts(),b=m?C.appear:C.enter;if(!f&&!h||jd.disabled){this.safeSetState({status:pl},function(){c.props.onEntered(p)});return}this.props.onEnter(p,v),this.safeSetState({status:Kn},function(){c.props.onEntering(p,v),c.onTransitionEnd(b,function(){c.safeSetState({status:pl},function(){c.props.onEntered(p,v)})})})},s.performExit=function(){var f=this,c=this.props.exit,h=this.getTimeouts(),m=this.props.nodeRef?void 0:sa.findDOMNode(this);if(!c||jd.disabled){this.safeSetState({status:ml},function(){f.props.onExited(m)});return}this.props.onExit(m),this.safeSetState({status:pc},function(){f.props.onExiting(m),f.onTransitionEnd(h.exit,function(){f.safeSetState({status:ml},function(){f.props.onExited(m)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(f,c){c=this.setNextCallback(c),this.setState(f,c)},s.setNextCallback=function(f){var c=this,h=!0;return this.nextCallback=function(m){h&&(h=!1,c.nextCallback=null,f(m))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},s.onTransitionEnd=function(f,c){this.setNextCallback(c);var h=this.props.nodeRef?this.props.nodeRef.current:sa.findDOMNode(this),m=f==null&&!this.props.addEndListener;if(!h||m){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var y=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],p=y[0],v=y[1];this.props.addEndListener(p,v)}f!=null&&setTimeout(this.nextCallback,f)},s.render=function(){var f=this.state.status;if(f===hr)return null;var c=this.props,h=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var m=O3(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return gt.createElement(n2.Provider,{value:null},typeof h=="function"?h(f,m):gt.cloneElement(gt.Children.only(h),m))},r})(gt.Component);Rn.contextType=n2;Rn.propTypes={};function ia(){}Rn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ia,onEntering:ia,onEntered:ia,onExit:ia,onExiting:ia,onExited:ia};Rn.UNMOUNTED=hr;Rn.EXITED=ml;Rn.ENTERING=Kn;Rn.ENTERED=pl;Rn.EXITING=pc;function F3(o){return o.code==="Escape"||o.keyCode===27}function J3(){const o=M.version.split(".");return{major:+o[0],minor:+o[1],patch:+o[2]}}function Gu(o){if(!o||typeof o=="function")return null;const{major:r}=J3();return r>=19?o.props.ref:o.ref}const da=!!(typeof window<"u"&&window.document&&window.document.createElement);var gc=!1,yc=!1;try{var cc={get passive(){return gc=!0},get once(){return yc=gc=!0}};da&&(window.addEventListener("test",cc,cc),window.removeEventListener("test",cc,!0))}catch{}function l2(o,r,s,i){if(i&&typeof i!="boolean"&&!yc){var f=i.once,c=i.capture,h=s;!yc&&f&&(h=s.__once||function m(y){this.removeEventListener(r,m,c),s.call(this,y)},s.__once=h),o.addEventListener(r,h,gc?i:c)}o.addEventListener(r,s,i)}function vc(o,r,s,i){var f=i&&typeof i!="boolean"?i.capture:i;o.removeEventListener(r,s,f),s.__once&&o.removeEventListener(r,s.__once,f)}function Ou(o,r,s,i){return l2(o,r,s,i),function(){vc(o,r,s,i)}}function $3(o,r,s,i){if(i===void 0&&(i=!0),o){var f=document.createEvent("HTMLEvents");f.initEvent(r,s,i),o.dispatchEvent(f)}}function I3(o){var r=yl(o,"transitionDuration")||"",s=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*s}function em(o,r,s){s===void 0&&(s=5);var i=!1,f=setTimeout(function(){i||$3(o,"transitionend",!0)},r+s),c=Ou(o,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(f),c()}}function a2(o,r,s,i){s==null&&(s=I3(o)||0);var f=em(o,s,i),c=Ou(o,"transitionend",r);return function(){f(),c()}}function kd(o,r){const s=yl(o,r)||"",i=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*i}function tm(o,r){const s=kd(o,"transitionDuration"),i=kd(o,"transitionDelay"),f=a2(o,c=>{c.target===o&&(f(),r(c))},s+i)}function nm(o){o.offsetHeight}const Nd=o=>!o||typeof o=="function"?o:r=>{o.current=r};function lm(o,r){const s=Nd(o),i=Nd(r);return f=>{s&&s(f),i&&i(f)}}function r2(o,r){return M.useMemo(()=>lm(o,r),[o,r])}function am(o){return o&&"setState"in o?sa.findDOMNode(o):o??null}const u2=gt.forwardRef(({onEnter:o,onEntering:r,onEntered:s,onExit:i,onExiting:f,onExited:c,addEndListener:h,children:m,childRef:y,...p},v)=>{const C=M.useRef(null),b=r2(C,y),T=L=>{b(am(L))},w=L=>X=>{L&&C.current&&L(C.current,X)},N=M.useCallback(w(o),[o]),G=M.useCallback(w(r),[r]),Y=M.useCallback(w(s),[s]),V=M.useCallback(w(i),[i]),j=M.useCallback(w(f),[f]),Z=M.useCallback(w(c),[c]),k=M.useCallback(w(h),[h]);return S.jsx(Rn,{ref:v,...p,onEnter:N,onEntered:Y,onEntering:G,onExit:V,onExited:Z,onExiting:j,addEndListener:k,nodeRef:C,children:typeof m=="function"?(L,X)=>m(L,{...X,ref:T}):gt.cloneElement(m,{ref:T})})});u2.displayName="TransitionWrapper";function rm(o){const r=M.useRef(o);return M.useEffect(()=>{r.current=o},[o]),r}function xc(o){const r=rm(o);return M.useCallback(function(...s){return r.current&&r.current(...s)},[r])}const _c=(o=>M.forwardRef((r,s)=>S.jsx("div",{...r,ref:s,className:Te(r.className,o)})));function um(o){const r=M.useRef(o);return M.useEffect(()=>{r.current=o},[o]),r}function gl(o){const r=um(o);return M.useCallback(function(...s){return r.current&&r.current(...s)},[r])}function im(){const o=M.useRef(!0),r=M.useRef(()=>o.current);return M.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[]),r.current}function om(o){const r=M.useRef(null);return M.useEffect(()=>{r.current=o}),r.current}const cm=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",sm=typeof document<"u",Xd=sm||cm?M.useLayoutEffect:M.useEffect,fm=["as","disabled"];function dm(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)>=0)continue;s[i]=o[i]}return s}function hm(o){return!o||o.trim()==="#"}function i2({tagName:o,disabled:r,href:s,target:i,rel:f,role:c,onClick:h,tabIndex:m=0,type:y}){o||(s!=null||i!=null||f!=null?o="a":o="button");const p={tagName:o};if(o==="button")return[{type:y||"button",disabled:r},p];const v=b=>{if((r||o==="a"&&hm(s))&&b.preventDefault(),r){b.stopPropagation();return}h?.(b)},C=b=>{b.key===" "&&(b.preventDefault(),v(b))};return o==="a"&&(s||(s="#"),r&&(s=void 0)),[{role:c??"button",disabled:void 0,tabIndex:r?void 0:m,href:s,target:o==="a"?i:void 0,"aria-disabled":r||void 0,rel:o==="a"?f:void 0,onClick:v,onKeyDown:C},p]}const mm=M.forwardRef((o,r)=>{let{as:s,disabled:i}=o,f=dm(o,fm);const[c,{tagName:h}]=i2(Object.assign({tagName:s,disabled:i},f));return S.jsx(h,Object.assign({},f,c,{ref:r}))});mm.displayName="Button";const pm={[Kn]:"show",[pl]:"show"},Tc=M.forwardRef(({className:o,children:r,transitionClasses:s={},onEnter:i,...f},c)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},m=M.useCallback((y,p)=>{nm(y),i?.(y,p)},[i]);return S.jsx(u2,{ref:c,addEndListener:tm,...h,onEnter:m,childRef:Gu(r),children:(y,p)=>M.cloneElement(r,{...p,className:Te("fade",o,r.props.className,pm[y],s[y])})})});Tc.displayName="Fade";const gm={"aria-label":rt.string,onClick:rt.func,variant:rt.oneOf(["white"])},Rc=M.forwardRef(({className:o,variant:r,"aria-label":s="Close",...i},f)=>S.jsx("button",{ref:f,type:"button",className:Te("btn-close",r&&`btn-close-${r}`,o),"aria-label":s,...i}));Rc.displayName="CloseButton";Rc.propTypes=gm;const fa=M.forwardRef(({as:o,bsPrefix:r,variant:s="primary",size:i,active:f=!1,disabled:c=!1,className:h,...m},y)=>{const p=Be(r,"btn"),[v,{tagName:C}]=i2({tagName:o,disabled:c,...m}),b=C;return S.jsx(b,{...v,...m,ref:y,disabled:c,className:Te(h,p,f&&"active",s&&`${p}-${s}`,i&&`${p}-${i}`,m.href&&c&&"disabled")})});fa.displayName="Button";const o2=M.forwardRef(({bsPrefix:o,size:r,vertical:s=!1,className:i,role:f="group",as:c="div",...h},m)=>{const y=Be(o,"btn-group");let p=y;return s&&(p=`${y}-vertical`),S.jsx(c,{...h,ref:m,role:f,className:Te(i,p,r&&`${y}-${r}`)})});o2.displayName="ButtonGroup";const Dc=M.forwardRef(({className:o,bsPrefix:r,as:s="div",...i},f)=>(r=Be(r,"card-body"),S.jsx(s,{ref:f,className:Te(o,r),...i})));Dc.displayName="CardBody";const c2=M.forwardRef(({className:o,bsPrefix:r,as:s="div",...i},f)=>(r=Be(r,"card-footer"),S.jsx(s,{ref:f,className:Te(o,r),...i})));c2.displayName="CardFooter";const s2=M.createContext(null);s2.displayName="CardHeaderContext";const f2=M.forwardRef(({bsPrefix:o,className:r,as:s="div",...i},f)=>{const c=Be(o,"card-header"),h=M.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return S.jsx(s2.Provider,{value:h,children:S.jsx(s,{ref:f,...i,className:Te(r,c)})})});f2.displayName="CardHeader";const d2=M.forwardRef(({bsPrefix:o,className:r,variant:s,as:i="img",...f},c)=>{const h=Be(o,"card-img");return S.jsx(i,{ref:c,className:Te(s?`${h}-${s}`:h,r),...f})});d2.displayName="CardImg";const h2=M.forwardRef(({className:o,bsPrefix:r,as:s="div",...i},f)=>(r=Be(r,"card-img-overlay"),S.jsx(s,{ref:f,className:Te(o,r),...i})));h2.displayName="CardImgOverlay";const m2=M.forwardRef(({className:o,bsPrefix:r,as:s="a",...i},f)=>(r=Be(r,"card-link"),S.jsx(s,{ref:f,className:Te(o,r),...i})));m2.displayName="CardLink";const ym=_c("h6"),p2=M.forwardRef(({className:o,bsPrefix:r,as:s=ym,...i},f)=>(r=Be(r,"card-subtitle"),S.jsx(s,{ref:f,className:Te(o,r),...i})));p2.displayName="CardSubtitle";const g2=M.forwardRef(({className:o,bsPrefix:r,as:s="p",...i},f)=>(r=Be(r,"card-text"),S.jsx(s,{ref:f,className:Te(o,r),...i})));g2.displayName="CardText";const vm=_c("h5"),y2=M.forwardRef(({className:o,bsPrefix:r,as:s=vm,...i},f)=>(r=Be(r,"card-title"),S.jsx(s,{ref:f,className:Te(o,r),...i})));y2.displayName="CardTitle";const v2=M.forwardRef(({bsPrefix:o,className:r,bg:s,text:i,border:f,body:c=!1,children:h,as:m="div",...y},p)=>{const v=Be(o,"card");return S.jsx(m,{ref:p,...y,className:Te(r,v,s&&`bg-${s}`,i&&`text-${i}`,f&&`border-${f}`),children:c?S.jsx(Dc,{children:h}):h})});v2.displayName="Card";const _n=Object.assign(v2,{Img:d2,Title:y2,Subtitle:p2,Body:Dc,Link:m2,Text:g2,Header:f2,Footer:c2,ImgOverlay:h2});function xm(o){const r=M.useRef(o);return r.current=o,r}function bm(o){const r=xm(o);M.useEffect(()=>()=>r.current(),[])}function Sm(o,r){return M.Children.toArray(o).some(s=>M.isValidElement(s)&&s.type===r)}function Cm({as:o,bsPrefix:r,className:s,...i}){r=Be(r,"col");const f=e2(),c=t2(),h=[],m=[];return f.forEach(y=>{const p=i[y];delete i[y];let v,C,b;typeof p=="object"&&p!=null?{span:v,offset:C,order:b}=p:v=p;const T=y!==c?`-${y}`:"";v&&h.push(v===!0?`${r}${T}`:`${r}${T}-${v}`),b!=null&&m.push(`order${T}-${b}`),C!=null&&m.push(`offset${T}-${C}`)}),[{...i,className:Te(s,...h,...m)},{as:o,bsPrefix:r,spans:h}]}const Tt=M.forwardRef((o,r)=>{const[{className:s,...i},{as:f="div",bsPrefix:c,spans:h}]=Cm(o);return S.jsx(f,{...i,ref:r,className:Te(s,!h.length&&c)})});Tt.displayName="Col";var _m=Function.prototype.bind.call(Function.prototype.call,[].slice);function oa(o,r){return _m(o.querySelectorAll(r))}function Yd(o,r){if(o.contains)return o.contains(r);if(o.compareDocumentPosition)return o===r||!!(o.compareDocumentPosition(r)&16)}const Tm="data-rr-ui-";function Rm(o){return`${Tm}${o}`}const x2=M.createContext(da?window:void 0);x2.Provider;function Ec(){return M.useContext(x2)}const b2=M.createContext(null);b2.displayName="InputGroupContext";const Dm={type:rt.string,tooltip:rt.bool,as:rt.elementType},Uu=M.forwardRef(({as:o="div",className:r,type:s="valid",tooltip:i=!1,...f},c)=>S.jsx(o,{...f,ref:c,className:Te(r,`${s}-${i?"tooltip":"feedback"}`)}));Uu.displayName="Feedback";Uu.propTypes=Dm;const Tn=M.createContext({}),vr=M.forwardRef(({id:o,bsPrefix:r,className:s,type:i="checkbox",isValid:f=!1,isInvalid:c=!1,as:h="input",...m},y)=>{const{controlId:p}=M.useContext(Tn);return r=Be(r,"form-check-input"),S.jsx(h,{...m,ref:y,type:i,id:o||p,className:Te(s,r,f&&"is-valid",c&&"is-invalid")})});vr.displayName="FormCheckInput";const Vu=M.forwardRef(({bsPrefix:o,className:r,htmlFor:s,...i},f)=>{const{controlId:c}=M.useContext(Tn);return o=Be(o,"form-check-label"),S.jsx("label",{...i,ref:f,htmlFor:s||c,className:Te(r,o)})});Vu.displayName="FormCheckLabel";const S2=M.forwardRef(({id:o,bsPrefix:r,bsSwitchPrefix:s,inline:i=!1,reverse:f=!1,disabled:c=!1,isValid:h=!1,isInvalid:m=!1,feedbackTooltip:y=!1,feedback:p,feedbackType:v,className:C,style:b,title:T="",type:w="checkbox",label:N,children:G,as:Y="input",...V},j)=>{r=Be(r,"form-check"),s=Be(s,"form-switch");const{controlId:Z}=M.useContext(Tn),k=M.useMemo(()=>({controlId:o||Z}),[Z,o]),L=!G&&N!=null&&N!==!1||Sm(G,Vu),X=S.jsx(vr,{...V,type:w==="switch"?"checkbox":w,ref:j,isValid:h,isInvalid:m,disabled:c,as:Y});return S.jsx(Tn.Provider,{value:k,children:S.jsx("div",{style:b,className:Te(C,L&&r,i&&`${r}-inline`,f&&`${r}-reverse`,w==="switch"&&s),children:G||S.jsxs(S.Fragment,{children:[X,L&&S.jsx(Vu,{title:T,children:N}),p&&S.jsx(Uu,{type:v,tooltip:y,children:p})]})})})});S2.displayName="FormCheck";const Hu=Object.assign(S2,{Input:vr,Label:Vu}),C2=M.forwardRef(({bsPrefix:o,type:r,size:s,htmlSize:i,id:f,className:c,isValid:h=!1,isInvalid:m=!1,plaintext:y,readOnly:p,as:v="input",...C},b)=>{const{controlId:T}=M.useContext(Tn);return o=Be(o,"form-control"),S.jsx(v,{...C,type:r,size:i,ref:b,readOnly:p,id:f||T,className:Te(c,y?`${o}-plaintext`:o,s&&`${o}-${s}`,r==="color"&&`${o}-color`,h&&"is-valid",m&&"is-invalid")})});C2.displayName="FormControl";const Em=Object.assign(C2,{Feedback:Uu}),_2=M.forwardRef(({className:o,bsPrefix:r,as:s="div",...i},f)=>(r=Be(r,"form-floating"),S.jsx(s,{ref:f,className:Te(o,r),...i})));_2.displayName="FormFloating";const wc=M.forwardRef(({controlId:o,as:r="div",...s},i)=>{const f=M.useMemo(()=>({controlId:o}),[o]);return S.jsx(Tn.Provider,{value:f,children:S.jsx(r,{...s,ref:i})})});wc.displayName="FormGroup";const T2=M.forwardRef(({as:o="label",bsPrefix:r,column:s=!1,visuallyHidden:i=!1,className:f,htmlFor:c,...h},m)=>{const{controlId:y}=M.useContext(Tn);r=Be(r,"form-label");let p="col-form-label";typeof s=="string"&&(p=`${p} ${p}-${s}`);const v=Te(f,r,i&&"visually-hidden",s&&p);return c=c||y,s?S.jsx(Tt,{ref:m,as:"label",className:v,htmlFor:c,...h}):S.jsx(o,{ref:m,className:v,htmlFor:c,...h})});T2.displayName="FormLabel";const R2=M.forwardRef(({bsPrefix:o,className:r,id:s,...i},f)=>{const{controlId:c}=M.useContext(Tn);return o=Be(o,"form-range"),S.jsx("input",{...i,type:"range",ref:f,className:Te(r,o),id:s||c})});R2.displayName="FormRange";const D2=M.forwardRef(({bsPrefix:o,size:r,htmlSize:s,className:i,isValid:f=!1,isInvalid:c=!1,id:h,...m},y)=>{const{controlId:p}=M.useContext(Tn);return o=Be(o,"form-select"),S.jsx("select",{...m,size:s,ref:y,className:Te(i,o,r&&`${o}-${r}`,f&&"is-valid",c&&"is-invalid"),id:h||p})});D2.displayName="FormSelect";const E2=M.forwardRef(({bsPrefix:o,className:r,as:s="small",muted:i,...f},c)=>(o=Be(o,"form-text"),S.jsx(s,{...f,ref:c,className:Te(r,o,i&&"text-muted")})));E2.displayName="FormText";const w2=M.forwardRef((o,r)=>S.jsx(Hu,{...o,ref:r,type:"switch"}));w2.displayName="Switch";const wm=Object.assign(w2,{Input:Hu.Input,Label:Hu.Label}),M2=M.forwardRef(({bsPrefix:o,className:r,children:s,controlId:i,label:f,...c},h)=>(o=Be(o,"form-floating"),S.jsxs(wc,{ref:h,className:Te(r,o),controlId:i,...c,children:[s,S.jsx("label",{htmlFor:i,children:f})]})));M2.displayName="FloatingLabel";const Mm={_ref:rt.any,validated:rt.bool,as:rt.elementType},Mc=M.forwardRef(({className:o,validated:r,as:s="form",...i},f)=>S.jsx(s,{...i,ref:f,className:Te(o,r&&"was-validated")}));Mc.displayName="Form";Mc.propTypes=Mm;const ye=Object.assign(Mc,{Group:wc,Control:Em,Floating:_2,Check:Hu,Switch:wm,Label:T2,Text:E2,Range:R2,Select:D2,FloatingLabel:M2}),ju=M.forwardRef(({className:o,bsPrefix:r,as:s="span",...i},f)=>(r=Be(r,"input-group-text"),S.jsx(s,{ref:f,className:Te(o,r),...i})));ju.displayName="InputGroupText";const zm=o=>S.jsx(ju,{children:S.jsx(vr,{type:"checkbox",...o})}),Am=o=>S.jsx(ju,{children:S.jsx(vr,{type:"radio",...o})}),z2=M.forwardRef(({bsPrefix:o,size:r,hasValidation:s,className:i,as:f="div",...c},h)=>{o=Be(o,"input-group");const m=M.useMemo(()=>({}),[]);return S.jsx(b2.Provider,{value:m,children:S.jsx(f,{ref:h,...c,className:Te(i,o,r&&`${o}-${r}`,s&&"has-validation")})})});z2.displayName="InputGroup";const Om=Object.assign(z2,{Text:ju,Radio:Am,Checkbox:zm}),qd=o=>!o||typeof o=="function"?o:r=>{o.current=r};function Vm(o,r){const s=qd(o),i=qd(r);return f=>{s&&s(f),i&&i(f)}}function zc(o,r){return M.useMemo(()=>Vm(o,r),[o,r])}var Au;function Zd(o){if((!Au&&Au!==0||o)&&da){var r=document.createElement("div");r.style.position="absolute",r.style.top="-9999px",r.style.width="50px",r.style.height="50px",r.style.overflow="scroll",document.body.appendChild(r),Au=r.offsetWidth-r.clientWidth,document.body.removeChild(r)}return Au}function Hm(){return M.useState(null)}function sc(o){o===void 0&&(o=Bu());try{var r=o.activeElement;return!r||!r.nodeName?null:r}catch{return o.body}}function Bm(o){const r=M.useRef(o);return r.current=o,r}function Gm(o){const r=Bm(o);M.useEffect(()=>()=>r.current(),[])}function Um(o=document){const r=o.defaultView;return Math.abs(r.innerWidth-o.documentElement.clientWidth)}const Ld=Rm("modal-open");class Ac{constructor({ownerDocument:r,handleContainerOverflow:s=!0,isRTL:i=!1}={}){this.handleContainerOverflow=s,this.isRTL=i,this.modals=[],this.ownerDocument=r}getScrollbarWidth(){return Um(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(r){}removeModalAttributes(r){}setContainerStyle(r){const s={overflow:"hidden"},i=this.isRTL?"paddingLeft":"paddingRight",f=this.getElement();r.style={overflow:f.style.overflow,[i]:f.style[i]},r.scrollBarWidth&&(s[i]=`${parseInt(yl(f,i)||"0",10)+r.scrollBarWidth}px`),f.setAttribute(Ld,""),yl(f,s)}reset(){[...this.modals].forEach(r=>this.remove(r))}removeContainerStyle(r){const s=this.getElement();s.removeAttribute(Ld),Object.assign(s.style,r.style)}add(r){let s=this.modals.indexOf(r);return s!==-1||(s=this.modals.length,this.modals.push(r),this.setModalAttributes(r),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(r){const s=this.modals.indexOf(r);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(r))}isTopModal(r){return!!this.modals.length&&this.modals[this.modals.length-1]===r}}const fc=(o,r)=>da?o==null?(r||Bu()).body:(typeof o=="function"&&(o=o()),o&&"current"in o&&(o=o.current),o&&("nodeType"in o||o.getBoundingClientRect)?o:null):null;function jm(o,r){const s=Ec(),[i,f]=M.useState(()=>fc(o,s?.document));if(!i){const c=fc(o);c&&f(c)}return M.useEffect(()=>{},[r,i]),M.useEffect(()=>{const c=fc(o);c!==i&&f(c)},[o,i]),i}function km({children:o,in:r,onExited:s,mountOnEnter:i,unmountOnExit:f}){const c=M.useRef(null),h=M.useRef(r),m=gl(s);M.useEffect(()=>{r?h.current=!0:m(c.current)},[r,m]);const y=zc(c,Gu(o)),p=M.cloneElement(o,{ref:y});return r?p:f||!h.current&&i?null:p}const Nm=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Xm(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)>=0)continue;s[i]=o[i]}return s}function Ym(o){let{onEnter:r,onEntering:s,onEntered:i,onExit:f,onExiting:c,onExited:h,addEndListener:m,children:y}=o,p=Xm(o,Nm);const v=M.useRef(null),C=zc(v,Gu(y)),b=Z=>k=>{Z&&v.current&&Z(v.current,k)},T=M.useCallback(b(r),[r]),w=M.useCallback(b(s),[s]),N=M.useCallback(b(i),[i]),G=M.useCallback(b(f),[f]),Y=M.useCallback(b(c),[c]),V=M.useCallback(b(h),[h]),j=M.useCallback(b(m),[m]);return Object.assign({},p,{nodeRef:v},r&&{onEnter:T},s&&{onEntering:w},i&&{onEntered:N},f&&{onExit:G},c&&{onExiting:Y},h&&{onExited:V},m&&{addEndListener:j},{children:typeof y=="function"?(Z,k)=>y(Z,Object.assign({},k,{ref:C})):M.cloneElement(y,{ref:C})})}const qm=["component"];function Zm(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)>=0)continue;s[i]=o[i]}return s}const Lm=M.forwardRef((o,r)=>{let{component:s}=o,i=Zm(o,qm);const f=Ym(i);return S.jsx(s,Object.assign({ref:r},f))});function Pm({in:o,onTransition:r}){const s=M.useRef(null),i=M.useRef(!0),f=gl(r);return Xd(()=>{if(!s.current)return;let c=!1;return f({in:o,element:s.current,initial:i.current,isStale:()=>c}),()=>{c=!0}},[o,f]),Xd(()=>(i.current=!1,()=>{i.current=!0}),[]),s}function Qm({children:o,in:r,onExited:s,onEntered:i,transition:f}){const[c,h]=M.useState(!r);r&&c&&h(!1);const m=Pm({in:!!r,onTransition:p=>{const v=()=>{p.isStale()||(p.in?i?.(p.element,p.initial):(h(!0),s?.(p.element)))};Promise.resolve(f(p)).then(v,C=>{throw p.in||h(!0),C})}}),y=zc(m,Gu(o));return c&&!r?null:M.cloneElement(o,{ref:y})}function Pd(o,r,s){return o?S.jsx(Lm,Object.assign({},s,{component:o})):r?S.jsx(Qm,Object.assign({},s,{transition:r})):S.jsx(km,Object.assign({},s))}const Wm=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Km(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)>=0)continue;s[i]=o[i]}return s}let dc;function Fm(o){return dc||(dc=new Ac({ownerDocument:o?.document})),dc}function Jm(o){const r=Ec(),s=o||Fm(r),i=M.useRef({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>s.add(i.current),remove:()=>s.remove(i.current),isTopModal:()=>s.isTopModal(i.current),setDialogRef:M.useCallback(f=>{i.current.dialog=f},[]),setBackdropRef:M.useCallback(f=>{i.current.backdrop=f},[])})}const A2=M.forwardRef((o,r)=>{let{show:s=!1,role:i="dialog",className:f,style:c,children:h,backdrop:m=!0,keyboard:y=!0,onBackdropClick:p,onEscapeKeyDown:v,transition:C,runTransition:b,backdropTransition:T,runBackdropTransition:w,autoFocus:N=!0,enforceFocus:G=!0,restoreFocus:Y=!0,restoreFocusOptions:V,renderDialog:j,renderBackdrop:Z=Ue=>S.jsx("div",Object.assign({},Ue)),manager:k,container:L,onShow:X,onHide:ue=()=>{},onExit:ee,onExited:pe,onExiting:ve,onEnter:re,onEntering:fe,onEntered:Re}=o,he=Km(o,Wm);const B=Ec(),F=jm(L),$=Jm(k),I=im(),x=om(s),[A,Q]=M.useState(!s),q=M.useRef(null);M.useImperativeHandle(r,()=>$,[$]),da&&!x&&s&&(q.current=sc(B?.document)),s&&A&&Q(!1);const J=gl(()=>{if($.add(),Ke.current=Ou(document,"keydown",be),Oe.current=Ou(document,"focus",()=>setTimeout(le),!0),X&&X(),N){var Ue,te;const ne=sc((Ue=(te=$.dialog)==null?void 0:te.ownerDocument)!=null?Ue:B?.document);$.dialog&&ne&&!Yd($.dialog,ne)&&(q.current=ne,$.dialog.focus())}}),se=gl(()=>{if($.remove(),Ke.current==null||Ke.current(),Oe.current==null||Oe.current(),Y){var Ue;(Ue=q.current)==null||Ue.focus==null||Ue.focus(V),q.current=null}});M.useEffect(()=>{!s||!F||J()},[s,F,J]),M.useEffect(()=>{A&&se()},[A,se]),Gm(()=>{se()});const le=gl(()=>{if(!G||!I()||!$.isTopModal())return;const Ue=sc(B?.document);$.dialog&&Ue&&!Yd($.dialog,Ue)&&$.dialog.focus()}),He=gl(Ue=>{Ue.target===Ue.currentTarget&&(p?.(Ue),m===!0&&ue())}),be=gl(Ue=>{y&&F3(Ue)&&$.isTopModal()&&(v?.(Ue),Ue.defaultPrevented||ue())}),Oe=M.useRef(),Ke=M.useRef(),Ie=(...Ue)=>{Q(!0),pe?.(...Ue)};if(!F)return null;const et=Object.assign({role:i,ref:$.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},he,{style:c,className:f,tabIndex:-1});let Se=j?j(et):S.jsx("div",Object.assign({},et,{children:M.cloneElement(h,{role:"document"})}));Se=Pd(C,b,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:ee,onExiting:ve,onExited:Ie,onEnter:re,onEntering:fe,onEntered:Re,children:Se});let bt=null;return m&&(bt=Z({ref:$.setBackdropRef,onClick:He}),bt=Pd(T,w,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:bt})),S.jsx(S.Fragment,{children:sa.createPortal(S.jsxs(S.Fragment,{children:[bt,Se]}),F)})});A2.displayName="Modal";const $m=Object.assign(A2,{Manager:Ac});function Im(o,r){return o.classList?o.classList.contains(r):(" "+(o.className.baseVal||o.className)+" ").indexOf(" "+r+" ")!==-1}function ep(o,r){o.classList?o.classList.add(r):Im(o,r)||(typeof o.className=="string"?o.className=o.className+" "+r:o.setAttribute("class",(o.className&&o.className.baseVal||"")+" "+r))}function Qd(o,r){return o.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function tp(o,r){o.classList?o.classList.remove(r):typeof o.className=="string"?o.className=Qd(o.className,r):o.setAttribute("class",Qd(o.className&&o.className.baseVal||"",r))}const ca={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class np extends Ac{adjustAndStore(r,s,i){const f=s.style[r];s.dataset[r]=f,yl(s,{[r]:`${parseFloat(yl(s,r))+i}px`})}restore(r,s){const i=s.dataset[r];i!==void 0&&(delete s.dataset[r],yl(s,{[r]:i}))}setContainerStyle(r){super.setContainerStyle(r);const s=this.getElement();if(ep(s,"modal-open"),!r.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";oa(s,ca.FIXED_CONTENT).forEach(c=>this.adjustAndStore(i,c,r.scrollBarWidth)),oa(s,ca.STICKY_CONTENT).forEach(c=>this.adjustAndStore(f,c,-r.scrollBarWidth)),oa(s,ca.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(f,c,r.scrollBarWidth))}removeContainerStyle(r){super.removeContainerStyle(r);const s=this.getElement();tp(s,"modal-open");const i=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";oa(s,ca.FIXED_CONTENT).forEach(c=>this.restore(i,c)),oa(s,ca.STICKY_CONTENT).forEach(c=>this.restore(f,c)),oa(s,ca.NAVBAR_TOGGLER).forEach(c=>this.restore(f,c))}}let hc;function lp(o){return hc||(hc=new np(o)),hc}const O2=M.forwardRef(({className:o,bsPrefix:r,as:s="div",...i},f)=>(r=Be(r,"modal-body"),S.jsx(s,{ref:f,className:Te(o,r),...i})));O2.displayName="ModalBody";const V2=M.createContext({onHide(){}}),Oc=M.forwardRef(({bsPrefix:o,className:r,contentClassName:s,centered:i,size:f,fullscreen:c,children:h,scrollable:m,...y},p)=>{o=Be(o,"modal");const v=`${o}-dialog`,C=typeof c=="string"?`${o}-fullscreen-${c}`:`${o}-fullscreen`;return S.jsx("div",{...y,ref:p,className:Te(v,r,f&&`${o}-${f}`,i&&`${v}-centered`,m&&`${v}-scrollable`,c&&C),children:S.jsx("div",{className:Te(`${o}-content`,s),children:h})})});Oc.displayName="ModalDialog";const H2=M.forwardRef(({className:o,bsPrefix:r,as:s="div",...i},f)=>(r=Be(r,"modal-footer"),S.jsx(s,{ref:f,className:Te(o,r),...i})));H2.displayName="ModalFooter";const B2=M.forwardRef(({closeLabel:o="Close",closeVariant:r,closeButton:s=!1,onHide:i,children:f,...c},h)=>{const m=M.useContext(V2),y=xc(()=>{m?.onHide(),i?.()});return S.jsxs("div",{ref:h,...c,children:[f,s&&S.jsx(Rc,{"aria-label":o,variant:r,onClick:y})]})});B2.displayName="AbstractModalHeader";const G2=M.forwardRef(({bsPrefix:o,className:r,closeLabel:s="Close",closeButton:i=!1,...f},c)=>(o=Be(o,"modal-header"),S.jsx(B2,{ref:c,...f,className:Te(r,o),closeLabel:s,closeButton:i})));G2.displayName="ModalHeader";const ap=_c("h4"),U2=M.forwardRef(({className:o,bsPrefix:r,as:s=ap,...i},f)=>(r=Be(r,"modal-title"),S.jsx(s,{ref:f,className:Te(o,r),...i})));U2.displayName="ModalTitle";function rp(o){return S.jsx(Tc,{...o,timeout:null})}function up(o){return S.jsx(Tc,{...o,timeout:null})}const j2=M.forwardRef(({bsPrefix:o,className:r,style:s,dialogClassName:i,contentClassName:f,children:c,dialogAs:h=Oc,"data-bs-theme":m,"aria-labelledby":y,"aria-describedby":p,"aria-label":v,show:C=!1,animation:b=!0,backdrop:T=!0,keyboard:w=!0,onEscapeKeyDown:N,onShow:G,onHide:Y,container:V,autoFocus:j=!0,enforceFocus:Z=!0,restoreFocus:k=!0,restoreFocusOptions:L,onEntered:X,onExit:ue,onExiting:ee,onEnter:pe,onEntering:ve,onExited:re,backdropClassName:fe,manager:Re,...he},B)=>{const[F,$]=M.useState({}),[I,x]=M.useState(!1),A=M.useRef(!1),Q=M.useRef(!1),q=M.useRef(null),[J,se]=Hm(),le=r2(B,se),He=xc(Y),be=G3();o=Be(o,"modal");const Oe=M.useMemo(()=>({onHide:He}),[He]);function Ke(){return Re||lp({isRTL:be})}function Ie(oe){if(!da)return;const Ce=Ke().getScrollbarWidth()>0,Qe=oe.scrollHeight>Bu(oe).documentElement.clientHeight;$({paddingRight:Ce&&!Qe?Zd():void 0,paddingLeft:!Ce&&Qe?Zd():void 0})}const et=xc(()=>{J&&Ie(J.dialog)});bm(()=>{vc(window,"resize",et),q.current==null||q.current()});const Se=()=>{A.current=!0},bt=oe=>{A.current&&J&&oe.target===J.dialog&&(Q.current=!0),A.current=!1},Ue=()=>{x(!0),q.current=a2(J.dialog,()=>{x(!1)})},te=oe=>{oe.target===oe.currentTarget&&Ue()},ne=oe=>{if(T==="static"){te(oe);return}if(Q.current||oe.target!==oe.currentTarget){Q.current=!1;return}Y?.()},xe=oe=>{w?N?.(oe):(oe.preventDefault(),T==="static"&&Ue())},we=(oe,Ce)=>{oe&&Ie(oe),pe?.(oe,Ce)},ke=oe=>{q.current==null||q.current(),ue?.(oe)},Ye=(oe,Ce)=>{ve?.(oe,Ce),l2(window,"resize",et)},ut=oe=>{oe&&(oe.style.display=""),re?.(oe),vc(window,"resize",et)},ft=M.useCallback(oe=>S.jsx("div",{...oe,className:Te(`${o}-backdrop`,fe,!b&&"show")}),[b,fe,o]),kt={...s,...F};kt.display="block";const an=oe=>S.jsx("div",{role:"dialog",...oe,style:kt,className:Te(r,o,I&&`${o}-static`,!b&&"show"),onClick:T?ne:void 0,onMouseUp:bt,"data-bs-theme":m,"aria-label":v,"aria-labelledby":y,"aria-describedby":p,children:S.jsx(h,{...he,onMouseDown:Se,className:i,contentClassName:f,children:c})});return S.jsx(V2.Provider,{value:Oe,children:S.jsx($m,{show:C,ref:le,backdrop:T,container:V,keyboard:!0,autoFocus:j,enforceFocus:Z,restoreFocus:k,restoreFocusOptions:L,onEscapeKeyDown:xe,onShow:G,onHide:Y,onEnter:we,onEntering:Ye,onEntered:X,onExit:ke,onExiting:ee,onExited:ut,manager:Ke(),transition:b?rp:void 0,backdropTransition:b?up:void 0,renderBackdrop:ft,renderDialog:an})})});j2.displayName="Modal";const dr=Object.assign(j2,{Body:O2,Header:G2,Title:U2,Footer:H2,Dialog:Oc,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),mr=M.forwardRef(({bsPrefix:o,className:r,as:s="div",...i},f)=>{const c=Be(o,"row"),h=e2(),m=t2(),y=`${c}-cols`,p=[];return h.forEach(v=>{const C=i[v];delete i[v];let b;C!=null&&typeof C=="object"?{cols:b}=C:b=C;const T=v!==m?`-${v}`:"";b!=null&&p.push(`${y}${T}-${b}`)}),S.jsx(s,{ref:f,...i,className:Te(r,c,...p)})});mr.displayName="Row";const ku={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,width:1e3,height:1e3,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]},ip=gt.memo(op,(o,r)=>o.initial===r.initial&&o.title===r.title);function op({initial:o,onChange:r,onApply:s,title:i="Noise & Render Settings"}){const f=M.useMemo(()=>({...ku,...o}),[o]),[c,h]=M.useState(f);M.useEffect(()=>{h(v=>{const C=Math.max(1,Math.min(32,v.numberOfTerrainColors));let b=v.colors.slice(0,C);if(b.length<C){const T=C-b.length,w=b[b.length-1]??"#888888";b=b.concat(Array.from({length:T},()=>w))}return{...v,numberOfTerrainColors:C,colors:b}})},[c.numberOfTerrainColors]);const m=(v,C)=>h(b=>({...b,[v]:C})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],p=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return S.jsx(_n,{children:S.jsxs(_n.Body,{children:[S.jsx(_n.Title,{className:"mb-3",children:i}),S.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),S.jsxs(mr,{className:"g-3",children:[S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"width",children:[S.jsx(ye.Label,{children:"Width"}),S.jsx(ye.Control,{type:"number",min:1,value:c.width,onChange:v=>m("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(ye.Text,{muted:!0,children:"Width in pixels of the map."})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"height",children:[S.jsx(ye.Label,{children:"Height"}),S.jsx(ye.Control,{type:"number",min:1,value:c.height,onChange:v=>m("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(ye.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),S.jsxs(mr,{className:"g-3",children:[S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"noiseType",children:[S.jsx(ye.Label,{children:"Noise Type"}),S.jsx(ye.Select,{value:c.noiseType,onChange:v=>m("noiseType",v.currentTarget.value),children:y.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"seed",children:[S.jsx(ye.Label,{children:"Seed"}),S.jsx(ye.Control,{type:"number",value:c.seed,onChange:v=>m("seed",parseInt(v.currentTarget.value||"0",10))})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"octaves",children:[S.jsx(ye.Label,{children:"Fractal Octaves"}),S.jsx(ye.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>m("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"lacunarity",children:[S.jsx(ye.Label,{children:"Fractal Lacunarity"}),S.jsx(Om,{children:S.jsx(ye.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>m("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"gain",children:[S.jsx(ye.Label,{children:"Fractal Gain"}),S.jsx(ye.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>m("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"fractalType",children:[S.jsx(ye.Label,{children:"Fractal Type"}),S.jsx(ye.Select,{value:c.fractalType,onChange:v=>m("fractalType",v.currentTarget.value),children:p.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"frequency",children:[S.jsx(ye.Label,{children:"Frequency"}),S.jsx(ye.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>m("frequency",parseFloat(v.currentTarget.value||"0"))}),S.jsx(ye.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),S.jsxs(mr,{className:"g-3",children:[S.jsxs(Tt,{md:6,lg:4,children:[S.jsxs(ye.Group,{controlId:"maxCellValue",children:[S.jsx(ye.Label,{children:"Max Terrain Height"}),S.jsx(ye.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>m("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(ye.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),S.jsxs(Tt,{md:6,lg:4,children:[S.jsxs(ye.Group,{controlId:"thm",children:[S.jsx(ye.Label,{children:"Terrain Height Multiplier"}),S.jsx(ye.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>m("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(ye.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),S.jsxs(Tt,{md:6,lg:4,children:[S.jsxs(ye.Group,{controlId:"colorSteps",children:[S.jsx(ye.Label,{children:"Terrain Steps"}),S.jsx(ye.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>m("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),S.jsx(ye.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),S.jsx(Tt,{md:6,lg:4,children:S.jsxs(ye.Group,{controlId:"numColors",children:[S.jsx(ye.Label,{children:"Number of Terrain Colors"}),S.jsx(ye.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>m("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),S.jsx(ye.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),S.jsxs("div",{className:"mt-4",children:[S.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),S.jsx(mr,{className:"g-3",children:c.colors.map((v,C)=>S.jsx(Tt,{xs:3,sm:2,md:1,lg:1,children:S.jsx(ye.Group,{controlId:`color-${C}`,children:S.jsx(ye.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:b=>{const T=b.currentTarget.value;m("colors",c.colors.map((w,N)=>N===C?T:w))},title:`Pick color ${C+1}`})})},C))})]}),S.jsxs("div",{className:"d-flex gap-2 mt-4",children:[S.jsx(fa,{variant:"primary",onClick:()=>s?.(c),children:"Apply"}),S.jsx(fa,{variant:"outline-secondary",onClick:()=>h(f),children:"Reset to Defaults"})]})]})})}function Wd(o,r){const s=o>>>0,i=r>>>0||1;return(i&i-1)===0?s+(i-1)&~(i-1):Math.ceil(s/i)*i>>>0}function cp(o){if(typeof o!="string")return"";const r=o.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(r))return r;const s=r.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(s)return`vec${s[1]}${s[2][0]}`;const i=r.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const sp={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function Vc(o){const r={fields:[],size:0};let s=0,i=1;for(const f of o){const c=cp(f.type);if(!c)throw new Error(`Unsupported type: ${f.type}`);const h=c;if(h.startsWith("pad")){const v=parseInt(h.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${h}`);const C={name:f.name,type:h,offset:s,size:v,align:1};r.fields.push(C),s+=v;continue}const y=sp[h];if(!y)throw new Error(`Unsupported non-pad type: ${h}`);s=Wd(s,y.align);const p={name:f.name,type:h,offset:s,size:y.size,align:y.align};r.fields.push(p),s+=y.size,y.align>i&&(i=y.align)}return r.size=Wd(s,Math.max(16,i)),r}function fp(o,r){const s=new ArrayBuffer(o.size),i=new DataView(s);for(const f of o.fields){if(f.type.startsWith("pad"))continue;const c=r[f.name];if(c==null)throw new Error(`Missing field '${f.name}'`);switch(f.type){case"f32":i.setFloat32(f.offset,+c,!0);break;case"u32":i.setUint32(f.offset,c>>>0,!0);break;case"i32":i.setInt32(f.offset,c|0,!0);break;case"bool":i.setUint32(f.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0),i.setFloat32(f.offset+12,c[3],!0);break;case"vec2u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0),i.setUint32(f.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0),i.setInt32(f.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${f.type}`)}}return s}function Hc(o,r,s,i,f,c){const h=fp(r,s),m=c??o.createBuffer({size:r.size,usage:i,label:f});return o.queue.writeBuffer(m,0,h),m}const dp=Vc([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function hp(o,r,s,i){const f={maxCellValue:r.maxCellValue,terrainHeightMultiplier:r.terrainHeightMultiplier,colorSteps:r.colorSteps>>>0,numberOfTerrainColors:(s?.length??0)>>>0,_padT0:[0,0]};return Hc(o,dp,f,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function mp(o,r,s){{const i=o.createBuffer({label:"Terrain Colors Buffer",size:r.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(i,0,pp(r)),i}}function pp(o){const r=[];for(let s of o){/^#([0-9a-fA-F]{3})$/.test(s)&&(s=s.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=s.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const f=i[1],c=parseInt(f.slice(0,2),16)/255,h=parseInt(f.slice(2,4),16)/255,m=parseInt(f.slice(4,6),16)/255;r.push(c,h,m,1)}return new Float32Array(r)}const gp=Vc([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"simIndex",type:"u32"},{name:"showDebug",type:"u32"}]);function Kd(o,r,s){const i={size:[r.width,r.height],time:r.time,simIndex:r.simIndex,showDebug:r.showDebug?1:0};return Hc(o,gp,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",s)}const yp=Vc([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"visibleRect",type:"vec4u"}]);function Fd(o,r,s){const i={mousePos:[r.mousePos.x,r.mousePos.y],mouse0Held:r.mouse0Held?1:0,mouse1Held:r.mouse1Held?1:0,mouseRadius:r.mouseRadius,visibleRect:[r.visibleRect.x0,r.visibleRect.y0,r.visibleRect.x1,r.visibleRect.y1]};return Hc(o,yp,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",s)}function vp(o,r,s,i){const f={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},currentCells:{binding:3,type:"storage",buffer:i.prevCellsBuffer},terrainColors:{binding:4,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:5,type:"storage",buffer:i.outputTextureBuffer},nextCells:{binding:6,type:"storage",buffer:i.nextCellsBuffer},randomDirections:{binding:7,type:"read-only-storage",buffer:i.randomFlowDirectionsBuffer},cursorQuery:{binding:8,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:9,type:"storage",buffer:i.chunkDataBuffer}},c=o.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(f).map(Z=>({binding:f[Z].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:f[Z].type}}))}),h=o.createBindGroup({label:"Unified Compute BG A",layout:c,entries:Object.keys(f).map(Z=>Z==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:Z==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:{binding:f[Z].binding,resource:{buffer:f[Z].buffer}})}),m=o.createBindGroup({label:"Unified Compute BG show B",layout:c,entries:Object.keys(f).map(Z=>Z==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:Z==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:{binding:f[Z].binding,resource:{buffer:f[Z].buffer}})}),y=o.createBindGroupLayout({label:"Render BGL",entries:[{binding:f.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uView.type}},{binding:f.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uInput.type}},{binding:f.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:f.outputTex.type}}]}),p=o.createRenderPipeline({label:"Render Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[y],label:"Render Pipeline Layout"}),vertex:{module:r,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:s}]},primitive:{topology:"triangle-list"}}),v=o.createComputePipeline({label:"Normal Compute Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Normal Compute Pipeline Layout"}),compute:{module:r,entryPoint:"calc_normals"}}),C=o.createComputePipeline({label:"Cursor Query Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Cursor Query Pipeline Layout"}),compute:{module:r,entryPoint:"cursor_query"}}),b=o.createComputePipeline({label:"Total Query Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Total Query Pipeline Layout"}),compute:{module:r,entryPoint:"total_query"}}),T=o.createComputePipeline({label:"Chunk Data Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Chunk Data Pipeline Layout"}),compute:{module:r,entryPoint:"chunk_data_calc"}}),w=o.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"terrain_render"}}),N=o.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"shadow_render"}}),G=o.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"fluid_render"}}),Y=o.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"debug_render"}}),V=o.createComputePipeline({label:"Step Compute Pipeline",layout:o.createPipelineLayout({bindGroupLayouts:[c],label:"Step Compute Pipeline Layout"}),compute:{module:r,entryPoint:"step"}}),j=o.createBindGroup({label:"Render BG",layout:y,entries:[{binding:f.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:f.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:f.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:p,normalComputePipeline:v,cursorQueryPipeline:C,totalQueryPipeline:b,chunkDataPipeline:T,terrainTextureComputePipeline:w,shadowTextureComputePipeline:N,fluidTextureComputePipeline:G,debugTextureComputePipeline:Y,stepComputePipeline:V},bindGroups:{unifiedComputeBG_A:h,unifiedComputeBG_B:m,renderBG:j}}}function xp(o,r){return o.mouse0Held===r.mouse0Held&&o.mouse1Held===r.mouse1Held&&o.mouse2Held===r.mouse2Held&&o.mouseRadius===r.mouseRadius&&o.mouseMoved===r.mouseMoved&&o.mousePosition.x===r.mousePosition.x&&o.mousePosition.y===r.mousePosition.y&&o.visibleRect.x0===r.visibleRect.x0&&o.visibleRect.y0===r.visibleRect.y0&&o.visibleRect.x1===r.visibleRect.x1&&o.visibleRect.y1===r.visibleRect.y1&&o.visibleRect.width===r.visibleRect.width&&o.visibleRect.height===r.visibleRect.height&&o.visibleRectChanged===r.visibleRectChanged&&o.simulationSubSteps===r.simulationSubSteps}const bp={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouseRadius:30,mouseMoved:!1,mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class Sp{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(r){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(r);const s=r-this.winMs;for(;this.times.length&&this.times[0]<s;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const pr=new Sp;async function Cp(o,r=ku,s,i,f,c){if(!o)return()=>{};o.__wgpuCleanup&&o.__wgpuCleanup();const h=!1;var m=!0,y=!0,p=!0;const v=await s3(),C=o.getContext("webgpu"),b=navigator.gpu.getPreferredCanvasFormat();o.style.imageRendering="pixelated",C.__deviceId=v.__id,o.width=r.width,o.height=r.height,C.configure({device:v,format:b,alphaMode:"opaque"});let T=M3();const w=v.createShaderModule({label:"Rect Shader",code:T});var N=0,G=0,Y=0,V=h;const j=()=>{V=!V},Z=oe=>{V=oe},k=Kd(v,{width:r.width,height:r.height,time:0,simIndex:0,showDebug:V});function L(){Kd(v,{width:r.width,height:r.height,time:N,simIndex:Y,showDebug:V},k)}const X=s(),ue=Fd(v,{mousePos:X.mousePosition,mouse0Held:X.mouse0Held,mouse1Held:X.mouse1Held,mouseRadius:X.mouseRadius,visibleRect:X.visibleRect}),ee=hp(v,{maxCellValue:r.maxCellValue,terrainHeightMultiplier:r.terrainHeightMultiplier,colorSteps:r.colorSteps},r.colors),pe=mp(v,r.colors);function ve(oe,Ce,Qe){const Ae=Math.ceil(oe/Qe),Kt=Math.ceil(Ce/Qe);return[Ae,Kt]}const re=16,[fe,Re]=ve(r.width,r.height,re),he=v.createBuffer({label:"Chunk Data",size:16*fe*Re,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(he,0,new Float32Array(4*fe*Re));function B(oe){Fd(v,{mousePos:oe.mousePosition,mouse0Held:oe.mouse0Held,mouse1Held:oe.mouse1Held,mouseRadius:oe.mouseRadius,visibleRect:oe.visibleRect},ue)}const $=r.width*r.height*4*4*4,I=v.createBuffer({label:"Output Texture",size:$,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(I,0,new Float32Array($/4));const x=12,A=4*x,Q=r.width*r.height*A,q=v.createBuffer({label:"Prev Cells",size:Q,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),J=v.createBuffer({label:"Next Cells",size:Q,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),se=oe=>{const Ce=new Float32Array(r.width*r.height*x),Qe=f3(oe,r.width,r.height,r.noiseType,r.fractalOctaves,r.fractalLacunarity,r.fractalGain,r.fractalType,r.frequency);for(let Ae=0;Ae<Qe.length;Ae++){const Kt=Ae*x;Ce[Kt]=Qe[Ae]*100}v.queue.writeBuffer(q,0,Ce),v.queue.writeBuffer(J,0,Ce),G=0,Y=0,y=!0};var le=r.seed;const He=()=>{se(le)},be=()=>{le=Math.ceil(Math.random()*1e9),He()};He();const Oe=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),Ke=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),Ie=v.createBuffer({label:"Random Flow Directions Buffer",size:4*r.width*r.height,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),et=new Float32Array(r.width*r.height);for(let oe=0;oe<et.length;oe++)et[oe]=Math.floor(Math.random()*8)+0;v.queue.writeBuffer(Ie,0,et);const Se=vp(v,w,b,{prevCellsBuffer:q,nextCellsBuffer:J,terrainBuffer:ee,terrainColorsBuffer:pe,viewUniformBuffer:k,inputUniformBuffer:ue,outputTextureBuffer:I,cursorQueryBuffer:Oe,chunkDataBuffer:he,randomFlowDirectionsBuffer:Ie}),bt={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},Ue=16,te=16,ne=Math.ceil(r.width/Ue),xe=Math.ceil(r.height/te);let we=!0,ke=0;var Ye=s();let ut=!1;async function ft(oe=0){if(C.__deviceId!==v.__id)return;pr.begin();var Ce=s();xp(Ce,Ye)||(B(Ce),Ye=Ce);const Qe=G%6===0;await v.pushErrorScope("validation"),N=oe*.001,L();const Ae=v.createCommandEncoder({label:"Encoder"});{const ie=Ae.beginComputePass({label:"Step Compute Pass"});ie.setPipeline(Se.piplines.stepComputePipeline);for(let vl=0;vl<Ce.simulationSubSteps;vl++)ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(ne,xe,1),we=!we,Y++,L();c(Y),ie.end()}if((G===0||Ce.mouse0Held||Ce.mouse1Held)&&(p=!0),G<60&&(y=!0,m=!0),Ce.visibleRectChanged&&(p=!0),p=!0,m||y){const ie=Ae.beginComputePass({label:"Normal Compute Pass"});ie.setPipeline(Se.piplines.normalComputePipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(ne,xe,1),ie.end()}if(y){const ie=Ae.beginComputePass({label:"Terrain Texture Compute Pass"});ie.setPipeline(Se.piplines.terrainTextureComputePipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(ne,xe,1),ie.end()}if(p||y){const ie=Ae.beginComputePass({label:"Shadow Texture Compute Pass"});ie.setPipeline(Se.piplines.shadowTextureComputePipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(ne,xe,1),ie.end(),Ce={...Ce,visibleRectChanged:!1}}if(p||y){const ie=Ae.beginComputePass({label:"Fluid Texture Compute Pass"});ie.setPipeline(Se.piplines.fluidTextureComputePipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(ne,xe,1),ie.end(),Ce={...Ce,visibleRectChanged:!1}}if(G%10==0){const ie=Ae.beginComputePass({label:"Debug Texture Compute Pass"});ie.setPipeline(Se.piplines.debugTextureComputePipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(ne,xe,1),ie.end()}if(Qe){const ie=Ae.beginComputePass({label:"Cursor Query Pass"});ie.setPipeline(Se.piplines.cursorQueryPipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(1,1,1),ie.end()}if(G%60==0){const ie=Ae.beginComputePass({label:"Total Query Pass"});ie.setPipeline(Se.piplines.totalQueryPipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(1,1,1),ie.end()}{const ie=Ae.beginComputePass({label:"Chunk Data Pass"});ie.setPipeline(Se.piplines.chunkDataPipeline),ie.setBindGroup(0,we?Se.bindGroups.unifiedComputeBG_A:Se.bindGroups.unifiedComputeBG_B),ie.dispatchWorkgroups(fe,Re,1),ie.end()}bt.colorAttachments[0].view=C.getCurrentTexture().createView();{const ie=Ae.beginRenderPass(bt);ie.setPipeline(Se.piplines.renderPipeline),ie.setBindGroup(0,Se.bindGroups.renderBG),ie.draw(3),ie.end()}Qe&&!ut&&Ae.copyBufferToBuffer(Oe,0,Ke,0,64),v.queue.submit([Ae.finish()]);const Kt=await v.popErrorScope();Kt&&console.error("Validation error:",Kt.message),Qe&&!ut&&Ke.mapAsync(GPUMapMode.READ).then(()=>{const ie=new DataView(Ke.getMappedRange(0,64)),vl=ie.getFloat32(0,!0),xl=ie.getFloat32(16,!0),bl=ie.getFloat32(20,!0),rn=ie.getFloat32(24,!0),Sl=ie.getFloat32(28,!0),Fn=ie.getFloat32(48,!0),Nu=ie.getFloat32(52,!0),xr=ie.getUint32(56,!0);f({height:vl,normal:{x:xl,y:bl,z:rn},fAmount:Sl,fluidTotal:Fn,antiFluidTotal:Nu,chunkUpdates:xr})}).catch(()=>{}).finally(()=>{Ke.unmap(),ut=!1}),y=!1,p=!1,m=!1,pr.end(oe),G++,ke=requestAnimationFrame(ft)}ke=requestAnimationFrame(ft);const kt=()=>{cancelAnimationFrame(ke),k.destroy(),ue.destroy(),ee.destroy(),pe.destroy(),q.destroy(),J.destroy(),I.destroy()};return o.__wgpuCleanup=kt,{cleanup:kt,resetMap:He,randomizeMap:be,toggleShowDebug:j,setShowDebug:Z}}const _p=M.forwardRef(({noiseSettings:o=ku,inputRef:r,setInput:s,setWebGPUHandle:i,setCursorQuery:f,style:c,setSimIndex:h},m)=>{const y=M.useRef(null);return M.useImperativeHandle(m,()=>y.current,[]),M.useEffect(()=>{if(!y.current)return;let p=()=>{};return(async()=>{const v=await Cp(y.current,o,()=>r.current,s,f,h);p=v.cleanup,i(v)})(),()=>p?.()},[o,s,i,f]),S.jsx("canvas",{ref:y,style:{...c,display:"block",width:"100%",height:"100%"}})}),Tp=gt.memo(_p,(o,r)=>o.noiseSettings===r.noiseSettings&&o.children===r.children),Rp={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function Dp({cursorQuery:o}){var c=Math.ceil(o.height),h=Math.abs(o.fAmount<0?Math.floor(o.fAmount):Math.ceil(o.fAmount));h+c>200&&(h=200-c);const m=c/200*150,y=h/200*150;var p="";return h>0&&(Math.abs(o.fAmount)<1?p=" < 1":p=`${h}`),S.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),S.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:o.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"5px 5px 0px 0px"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:p})}),S.jsx("div",{style:{width:"50px",height:`${m}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:o.height>0?`${c}`:""})})]})}function Ep({input:o}){return S.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${o.mousePosition.x}, ${o.mousePosition.y})`})}function wp(o){const r=o;if(!r)return!1;const s=r.tagName?.toLowerCase();return s==="input"||s==="textarea"||r.isContentEditable||s==="select"}function Mp(o,r){if(!r)return!1;const s=Array.isArray(r)?r:[r],i=o.key.toLowerCase(),f=o.code.toLowerCase();return s.some(c=>{const h=c.toLowerCase();return i===h||f===h})}function zp({title:o="Menu",children:r,openKey:s="Escape",openWhen:i,disableWhileTyping:f=!0,initialShow:c=!1,size:h,centered:m=!0,backdrop:y=!0,keyboard:p=!0,onShow:v,onHide:C,footer:b}){const[T,w]=M.useState(c);M.useEffect(()=>{const Y=V=>{if(V.repeat||f&&wp(V.target))return;(i?i(V):Mp(V,s))&&(V.preventDefault(),w(!0))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[s,i,f]),M.useEffect(()=>{T&&v?.()},[T,v]);const N=()=>{w(!1),C?.()},G=80;return S.jsxs(S.Fragment,{children:[S.jsxs(dr,{show:T,onHide:N,size:h,centered:m,backdrop:y,keyboard:p,contentClassName:"clamped-modal-content",children:[o&&S.jsx(dr.Header,{closeButton:!0,children:S.jsx(dr.Title,{children:o})}),S.jsx(dr.Body,{className:"clamped-modal-body",children:r}),S.jsx(dr.Footer,{children:b??S.jsx(fa,{variant:"secondary",onClick:N,children:"Close"})})]}),S.jsx("style",{children:`
        .clamped-modal-content {
          /* Clamp whole card to ~80% of viewport height */
          max-height: ${G}vh;
          /* Use dvh for mobile browser UI chrome correctness */
          max-height: min(${G}vh, ${G}dvh);
          display: flex;            /* make header/body/footer a column */
          flex-direction: column;
        }
        .clamped-modal-body {
          overflow-y: auto;         /* scroll INSIDE the body */
          /* Allow the body to take remaining space between header & footer */
          flex: 1 1 auto;
          /* Optional: smooth scrolling */
          overscroll-behavior: contain;
        }
      `})]})}const $e=({children:o})=>S.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:o});function Ap(){return S.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:S.jsx(_n,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:S.jsxs(_n.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsx(_n.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),S.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[S.jsxs("div",{children:[S.jsx($e,{children:"F11"})," — Toggle Fullscreen"]}),S.jsxs("div",{children:[S.jsx($e,{children:"F9"})," — Toggle Controls"]}),S.jsxs("div",{children:[S.jsx($e,{children:"F8"})," — Toggle Debug Stats"]}),S.jsxs("div",{children:[S.jsx($e,{children:"W"}),S.jsx($e,{children:"A"}),S.jsx($e,{children:"S"}),S.jsx($e,{children:"D"})," or ",S.jsx($e,{children:"←"}),S.jsx($e,{children:"→"}),S.jsx($e,{children:"↑"}),S.jsx($e,{children:"↓"})," — Pan Camera"]}),S.jsxs("div",{children:[S.jsx($e,{children:"ScrollWheel"})," — Zoom"]}),S.jsxs("div",{children:[S.jsx($e,{children:"Shift"})," +"," ",S.jsx($e,{children:"ScrollWheel"})," — Change Brush Radius"]}),S.jsxs("div",{children:[S.jsx($e,{children:"LMB"}),"/",S.jsx($e,{children:"RMB"})," — (Paint / Remove) Fluid"]}),S.jsxs("div",{children:[S.jsx($e,{children:"Spacebar"})," — Toggle Pause"]}),S.jsxs("div",{children:[S.jsx($e,{children:"Tab"})," / ",S.jsx($e,{children:"Shift"}),"+",S.jsx($e,{children:"Tab"})," — Increase / Decrease Speed"]}),S.jsxs("div",{children:[S.jsx($e,{children:"C"})," — Clear Map"]}),S.jsxs("div",{children:[S.jsx($e,{children:"R"})," — Randmoize Map"]})]})]})})})}var Op=["color","size","title","className"];function bc(){return bc=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)({}).hasOwnProperty.call(s,i)&&(o[i]=s[i])}return o},bc.apply(null,arguments)}function Vp(o,r){if(o==null)return{};var s,i,f=Hp(o,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(i=0;i<c.length;i++)s=c[i],r.indexOf(s)===-1&&{}.propertyIsEnumerable.call(o,s)&&(f[s]=o[s])}return f}function Hp(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)!==-1)continue;s[i]=o[i]}return s}var k2=M.forwardRef(function(o,r){var s=o.color,i=s===void 0?"currentColor":s,f=o.size,c=f===void 0?"1em":f,h=o.title,m=h===void 0?null:h,y=o.className,p=y===void 0?"":y,v=Vp(o,Op);return gt.createElement("svg",bc({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",p].filter(Boolean).join(" ")},v),m?gt.createElement("title",null,m):null,gt.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});k2.propTypes={color:rt.string,size:rt.oneOfType([rt.string,rt.number]),title:rt.string,className:rt.string};var Bp=["color","size","title","className"];function Sc(){return Sc=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)({}).hasOwnProperty.call(s,i)&&(o[i]=s[i])}return o},Sc.apply(null,arguments)}function Gp(o,r){if(o==null)return{};var s,i,f=Up(o,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(i=0;i<c.length;i++)s=c[i],r.indexOf(s)===-1&&{}.propertyIsEnumerable.call(o,s)&&(f[s]=o[s])}return f}function Up(o,r){if(o==null)return{};var s={};for(var i in o)if({}.hasOwnProperty.call(o,i)){if(r.indexOf(i)!==-1)continue;s[i]=o[i]}return s}var N2=M.forwardRef(function(o,r){var s=o.color,i=s===void 0?"currentColor":s,f=o.size,c=f===void 0?"1em":f,h=o.title,m=h===void 0?null:h,y=o.className,p=y===void 0?"":y,v=Gp(o,Bp);return gt.createElement("svg",Sc({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",p].filter(Boolean).join(" ")},v),m?gt.createElement("title",null,m):null,gt.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});N2.propTypes={color:rt.string,size:rt.oneOfType([rt.string,rt.number]),title:rt.string,className:rt.string};const At=[.25,.5,1,2,3,4],X2=(o,r,s)=>Math.min(s,Math.max(r,o));function jp(o,r=!0){if(r){var s=(At.indexOf(o)+1)%At.length;return At[s]}else{var s=X2(At.indexOf(o)+1,0,At.length-1);return At[s]}}function kp(o,r=!0){if(r){var s=(At.indexOf(o)-1+At.length)%At.length;return At[s]}else{var s=X2(At.indexOf(o)-1,0,At.length-1);return At[s]}}function Np({speed:o,paused:r,onChange:s,className:i,size:f}){const c=p=>s({paused:!1,speed:p}),h=()=>s({paused:!r,speed:o}),y={backgroundColor:"rgba(99, 99, 99, 0.57)",border:"4px solid white",borderRadius:0,fontSize:"20px",width:40,height:40,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none"};return S.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:S.jsxs(o2,{className:`${i} rounded-0`,size:f,style:{border:"none"},children:[S.jsx(fa,{type:"button",variant:"primary",onClick:h,"aria-pressed":r,"aria-label":r?"Resume":"Pause",title:r?"Resume":"Pause",style:y,children:r?S.jsx(N2,{}):S.jsx(k2,{})}),At.map(p=>S.jsx(fa,{type:"button",variant:o===p&&!r?"primary":"outline-secondary",active:o===p&&!r,onClick:()=>c(p),"aria-pressed":o===p&&!r,"aria-label":p<1?`1/${Math.round(1/p)}x speed`:`${p}x speed`,title:p<1?`1/${Math.round(1/p)}x speed`:`${p}x speed`,style:{...y,color:o===p&&!r?"white":"darkgray",marginLeft:"-4px",fontSize:p<1?"15px":""},children:p<1?`1/${Math.round(1/p)}x`:`${p}x`},p))]})})}function Xp({settings:o,setSettings:r,input:s,setInput:i,cursorQuery:f,paused:c,setPaused:h,speed:m,setSpeed:y,simIndex:p,showControlsUI:v,showDebugUI:C}){const[b,T]=M.useState(0),[w,N]=M.useState(0),[G,Y]=M.useState(0);M.useEffect(()=>{const k=setInterval(()=>{T(pr.fps),N(pr.cpuMs),Y(pr.frameCount)},250);return()=>clearInterval(k)},[]);const V=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),j=`${w.toFixed(2)}`.padStart(5,"0"),Z=f.chunkUpdates*16*16*m*4;return S.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[S.jsx("div",{id:"output"}),S.jsx(Ep,{input:s}),v&&S.jsx(Ap,{}),S.jsx(Np,{speed:m,paused:c,onChange:({paused:k,speed:L})=>{h(k),y(L),i({...s,simulationSubSteps:k?0:Math.ceil(4*L)})}}),C&&S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx(_n,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:S.jsxs(_n.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsxs(_n.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",S.jsx($e,{children:"F8"})," to close"]}),S.jsx("div",{children:`FPS: ${b} (Frame Duration: ${j} ms) (Frames: ${V.format(G)})`}),S.jsx("div",{children:`Simulation Steps: ${V.format(p)}`}),S.jsx("div",{children:`Chunk Updates: ${V.format(f.chunkUpdates)}`}),S.jsx("div",{children:`Cell Updates per frame: ${V.format(Z)}`}),S.jsx("div",{children:`Total Fluid: ${V.format(Math.ceil(f.fluidTotal))}`}),S.jsx("div",{children:`Total Anti Fluid: ${V.format(Math.ceil(f.antiFluidTotal))}`}),S.jsx("div",{children:`Total Combined Fluid: ${V.format(Math.ceil(f.fluidTotal-f.antiFluidTotal))}`})]})})}),!C&&S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx("div",{children:`FPS: ${b}`})}),S.jsx(Dp,{cursorQuery:f}),S.jsx(zp,{title:"Debug Menu",size:"xl",children:S.jsx(ip,{initial:o,onChange:r,onApply:k=>{r(k),console.log("Apply clicked:",k)}})})]})}const Yp=o=>{const r=o;if(!r)return!1;const s=r.tagName?.toLowerCase();return s==="input"||s==="textarea"||r.isContentEditable||s==="select"},Cn=(o,r,s)=>Math.min(s,Math.max(r,o)),Jd=(o,r,s,i)=>{const f=Math.max(0,(s-o)/2),c=Math.max(0,(i-r)/2);return{xMin:-f,xMax:f,yMin:-c,yMax:c}};function qp(){const[o,r]=M.useState(ku),s=!1,[i,f]=gt.useState(!1),[c,h]=gt.useState(1),[m,y]=M.useState(0),[p,v]=M.useState(!0),[C,b]=M.useState(s),[T,w]=M.useState(bp),N=M.useRef(T);M.useEffect(()=>{N.current=T},[T]);const[G,Y]=M.useState(Rp),V=M.useRef(null),[j,Z]=M.useState({width:1920,height:1080}),[k,L]=M.useState({x:0,y:0}),[X,ue]=M.useState(!1),[ee,pe]=M.useState(2),[ve,re]=M.useState(null),fe=M.useRef(null);M.useEffect(()=>{fe.current=ve},[ve]);const Re=M.useRef(null),he=M.useCallback((I,x,A=!1)=>{const Q=V.current;if(!Q)return;const q=I!==void 0&&x!==void 0?{x:I,y:x}:Re.current;if(!q)return;const J=Q.getBoundingClientRect();if(J.width===0||J.height===0)return;const se=Q.width/J.width,le=Q.height/J.height,He=Math.floor((q.x-J.left)*se),be=Math.floor((q.y-J.top)*le);w(Oe=>{const Ke=Cn(He,0,o.width-1),Ie=Cn(be,0,o.height-1);return!A&&Oe.mousePosition.x===Ke&&Oe.mousePosition.y===Ie?Oe:{...Oe,mousePosition:{x:Ke,y:Ie},mouseMoved:A}})},[o.width,o.height]),B=M.useCallback((I,x)=>{const A=V.current;if(!A)return{x:0,y:0};const Q={x:I,y:x},q=A.getBoundingClientRect();if(q.width===0||q.height===0)return{x:0,y:0};const J=A.width/q.width,se=A.height/q.height,le=Math.floor((Q.x-q.left)*J),He=Math.floor((Q.y-q.top)*se),be=Cn(le,0,o.width-1),Oe=Cn(He,0,o.height-1);return{x:be,y:Oe}},[o.width,o.height]);M.useEffect(()=>{const I=new Set;let x=0,A=performance.now();const Q=600;fe.current?.setShowDebug(C);const q=()=>{const te=window.innerWidth,ne=window.innerHeight,xe=o.width/o.height;let we=te,ke=we/xe;return ke<ne&&(ke=ne,we=ke*xe),{vw:te,vh:ne,baseW:we,baseH:ke}},J=()=>{const{vw:te,baseW:ne}=q();return te/ne},se=te=>{if(Yp(te.target))return;const ne=te.key.toLowerCase();(ne==="w"||ne==="a"||ne==="s"||ne==="d"||ne==="arrowup"||ne==="arrowleft"||ne==="arrowdown"||ne==="arrowright")&&(I.add(ne),te.preventDefault());const xe=()=>{f(Ye=>{let ut=!Ye;return w(ft=>({...ft,simulationSubSteps:ut?0:Math.ceil(4*c)})),ut}),te.preventDefault()},we=()=>{h(Ye=>{let ut=jp(Ye,!1);return w(ft=>({...ft,simulationSubSteps:i?0:Math.ceil(4*ut)})),ut}),te.preventDefault()},ke=()=>{h(Ye=>{let ut=kp(Ye,!1);return w(ft=>({...ft,simulationSubSteps:i?0:Math.ceil(4*ut)})),ut}),te.preventDefault()};te.code=="Space"?xe():te.code=="Tab"?(i?xe():te.shiftKey?ke():we(),te.preventDefault()):te.code=="F9"?(v(Ye=>!Ye),te.preventDefault()):te.code=="F8"?(b(Ye=>(fe.current?.setShowDebug(!Ye),!Ye)),te.preventDefault()):te.code=="KeyC"?(fe.current?.resetMap(),te.preventDefault()):!te.ctrlKey&&te.code=="KeyR"&&(fe.current?.randomizeMap(),te.preventDefault())},le=te=>{const ne=te.key.toLowerCase();I.delete(ne)};function He(te,ne,xe,we){const ke=Math.max(te/xe,ne/we),Ye=Math.min(te*4/xe,ne*4/we);return{minScale:ke,maxScale:Ye}}function be(){const te=window.innerWidth,ne=window.innerHeight,xe=o.width/o.height;let we=te,ke=we/xe;ke<ne&&(ke=ne,we=ke*xe);const{minScale:Ye,maxScale:ut}=He(te,ne,we,ke),ft=Math.min(Math.max(ee,Ye),ut),kt=we*ft,an=ke*ft,{xMin:oe,xMax:Ce,yMin:Qe,yMax:Ae}=Jd(te,ne,kt,an);Z({width:kt,height:an}),L(Kt=>({x:Cn(Kt.x,oe,Ce),y:Cn(Kt.y,Qe,Ae)})),requestAnimationFrame(()=>he()),$()}const Oe=te=>{let ne=0,xe=0;if((I.has("w")||I.has("arrowup"))&&(xe-=1),(I.has("s")||I.has("arrowdown"))&&(xe+=1),(I.has("a")||I.has("arrowleft"))&&(ne-=1),(I.has("d")||I.has("arrowright"))&&(ne+=1),ne!==0||xe!==0){const we=Math.hypot(ne,xe)||1;ne/=we,xe/=we;const ke=window.innerWidth,Ye=window.innerHeight,ut=j.width,ft=j.height,{xMin:kt,xMax:an,yMin:oe,yMax:Ce}=Jd(ke,Ye,ut,ft);L(Qe=>({x:Cn(Qe.x-ne*Q*ee*te,kt,an),y:Cn(Qe.y-xe*Q*ee*te,oe,Ce)})),requestAnimationFrame(()=>he()),$()}};function Ke(te){te.preventDefault();const ne=Math.sign(te.deltaY)*-1;if(te.shiftKey)w(xe=>{const we=.1*xe.mouseRadius*ne,ke=Math.max(5,xe.mouseRadius+we);return{...xe,mouseRadius:ke}});else{const xe=J(),we=4;pe(ke=>Cn(ke+.1*ke*ne,xe,we))}}function Ie(te){Re.current={x:te.clientX,y:te.clientY},he(te.clientX,te.clientY,!0)}const et=te=>{te.button===2&&te.preventDefault(),w(ne=>{const xe={...ne};return te.button===0&&(xe.mouse0Held=!0),te.button===2&&(xe.mouse1Held=!0),xe})},Se=te=>{w(ne=>{const xe={...ne};return te.button===0&&(xe.mouse0Held=!1),te.button===2&&(xe.mouse1Held=!1),xe})};function bt(te){te.preventDefault()}const Ue=async te=>{const ne=(te-A)/1e3;A=te,Oe(ne),$(),x=requestAnimationFrame(Ue)};return window.addEventListener("mousemove",Ie),V.current?.addEventListener("mouseup",Se),window.addEventListener("contextmenu",bt),V.current?.addEventListener("mousedown",et),window.addEventListener("keydown",se),window.addEventListener("keyup",le),V.current?.addEventListener("wheel",Ke,{passive:!1}),window.addEventListener("resize",be),be(),x=requestAnimationFrame(Ue),$(),()=>{cancelAnimationFrame(x),window.removeEventListener("mousemove",Ie),V.current?.removeEventListener("mouseup",Se),window.removeEventListener("contextmenu",bt),V.current?.removeEventListener("mousedown",et),window.removeEventListener("keydown",se),window.removeEventListener("keyup",le),V.current?.removeEventListener("wheel",Ke),window.removeEventListener("resize",be)}},[j.width,j.height,ee,i,w,f,c,h,v]);const F=M.useRef(null),$=M.useCallback((I=!0)=>{const x=()=>{if(!V.current)return;const Q=B(0,0),q=B(window.innerWidth,window.innerHeight),J={x0:Q.x,y0:Q.y,x1:q.x,y1:q.y,width:q.x-Q.x,height:q.y-Q.y};!J||F.current&&J.x0===F.current.x0&&J.y0===F.current.y0&&J.x1===F.current.x1&&J.y1===F.current.y1||(F.current=J,w(le=>({...le,visibleRect:J,visibleRectChanged:!0})))};I?requestAnimationFrame(x):x()},[w,B,window.innerWidth,window.innerHeight]);return S.jsx(S.Fragment,{children:S.jsxs("div",{id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[S.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:j.width,height:j.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${k.x}px, ${k.y}px, 0)`,transition:X?"transform 360ms ease-out":"none",willChange:"transform"},children:S.jsx(Tp,{ref:V,noiseSettings:o,inputRef:N,setInput:w,setWebGPUHandle:re,setCursorQuery:Y,setSimIndex:y})}),S.jsx(Xp,{settings:o,setSettings:r,input:T,setInput:I=>{w(I)},cursorQuery:G,paused:i,setPaused:f,speed:c,setSpeed:h,simIndex:m,showControlsUI:p,showDebugUI:C})]})})}c3.createRoot(document.getElementById("root")).render(S.jsx(gt.StrictMode,{children:S.jsx(qp,{})}));
