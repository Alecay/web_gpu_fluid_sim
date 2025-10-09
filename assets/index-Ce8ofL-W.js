(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))i(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function d(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(f){if(f.ep)return;f.ep=!0;const c=d(f);fetch(f.href,c)}})();function xu(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var G0={exports:{}},$a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function J3(){if(Nf)return $a;Nf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(i,f,c){var m=null;if(c!==void 0&&(m=""+c),f.key!==void 0&&(m=""+f.key),"key"in f){c={};for(var g in f)g!=="key"&&(c[g]=f[g])}else c=f;return f=c.ref,{$$typeof:s,type:i,key:m,ref:f!==void 0?f:null,props:c}}return $a.Fragment=u,$a.jsx=d,$a.jsxs=d,$a}var Zf;function W3(){return Zf||(Zf=1,G0.exports=J3()),G0.exports}var S=W3(),B0={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function F3(){if(Lf)return xe;Lf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,k={};function B(x,V,L){this.props=x,this.context=V,this.refs=k,this.updater=L||T}B.prototype.isReactComponent={},B.prototype.setState=function(x,V){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,V,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function U(){}U.prototype=B.prototype;function j(x,V,L){this.props=x,this.context=V,this.refs=k,this.updater=L||T}var X=j.prototype=new U;X.constructor=j,M(X,B.prototype),X.isPureReactComponent=!0;var K=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function Y(x,V,L,N,I,se){return L=se.ref,{$$typeof:s,type:x,key:V,ref:L!==void 0?L:null,props:se}}function $(x,V){return Y(x.type,V,void 0,void 0,void 0,x.props)}function ne(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function de(x){var V={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return V[L]})}var ve=/\/+/g;function re(x,V){return typeof x=="object"&&x!==null&&x.key!=null?de(""+x.key):V.toString(36)}function ye(){}function Re(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(V){x.status==="pending"&&(x.status="fulfilled",x.value=V)},function(V){x.status==="pending"&&(x.status="rejected",x.reason=V)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ge(x,V,L,N,I){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ie=!1;if(x===null)ie=!0;else switch(se){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(x.$$typeof){case s:case u:ie=!0;break;case v:return ie=x._init,ge(ie(x._payload),V,L,N,I)}}if(ie)return I=I(x),ie=N===""?"."+re(x,0):N,K(I)?(L="",ie!=null&&(L=ie.replace(ve,"$&/")+"/"),ge(I,V,L,"",function(He){return He})):I!=null&&(ne(I)&&(I=$(I,L+(I.key==null||x&&x.key===I.key?"":(""+I.key).replace(ve,"$&/")+"/")+ie)),V.push(I)),1;ie=0;var we=N===""?".":N+":";if(K(x))for(var _e=0;_e<x.length;_e++)N=x[_e],se=we+re(N,_e),ie+=ge(N,V,L,se,I);else if(_e=b(x),typeof _e=="function")for(x=_e.call(x),_e=0;!(N=x.next()).done;)N=N.value,se=we+re(N,_e++),ie+=ge(N,V,L,se,I);else if(se==="object"){if(typeof x.then=="function")return ge(Re(x),V,L,N,I);throw V=String(x),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ie}function H(x,V,L){if(x==null)return x;var N=[],I=0;return ge(x,N,"","",function(se){return V.call(L,se,I++)}),N}function J(x){if(x._status===-1){var V=x._result;V=V(),V.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=V)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ue(){}return xe.Children={map:H,forEach:function(x,V,L){H(x,function(){V.apply(this,arguments)},L)},count:function(x){var V=0;return H(x,function(){V++}),V},toArray:function(x){return H(x,function(V){return V})||[]},only:function(x){if(!ne(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},xe.Component=B,xe.Fragment=d,xe.Profiler=f,xe.PureComponent=j,xe.StrictMode=i,xe.Suspense=y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,xe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},xe.cache=function(x){return function(){return x.apply(null,arguments)}},xe.cloneElement=function(x,V,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var N=M({},x.props),I=x.key,se=void 0;if(V!=null)for(ie in V.ref!==void 0&&(se=void 0),V.key!==void 0&&(I=""+V.key),V)!P.call(V,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&V.ref===void 0||(N[ie]=V[ie]);var ie=arguments.length-2;if(ie===1)N.children=L;else if(1<ie){for(var we=Array(ie),_e=0;_e<ie;_e++)we[_e]=arguments[_e+2];N.children=we}return Y(x.type,I,void 0,void 0,se,N)},xe.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},xe.createElement=function(x,V,L){var N,I={},se=null;if(V!=null)for(N in V.key!==void 0&&(se=""+V.key),V)P.call(V,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(I[N]=V[N]);var ie=arguments.length-2;if(ie===1)I.children=L;else if(1<ie){for(var we=Array(ie),_e=0;_e<ie;_e++)we[_e]=arguments[_e+2];I.children=we}if(x&&x.defaultProps)for(N in ie=x.defaultProps,ie)I[N]===void 0&&(I[N]=ie[N]);return Y(x,se,void 0,void 0,null,I)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(x){return{$$typeof:g,render:x}},xe.isValidElement=ne,xe.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:J}},xe.memo=function(x,V){return{$$typeof:p,type:x,compare:V===void 0?null:V}},xe.startTransition=function(x){var V=G.T,L={};G.T=L;try{var N=x(),I=G.S;I!==null&&I(L,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ue,F)}catch(se){F(se)}finally{G.T=V}},xe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},xe.use=function(x){return G.H.use(x)},xe.useActionState=function(x,V,L){return G.H.useActionState(x,V,L)},xe.useCallback=function(x,V){return G.H.useCallback(x,V)},xe.useContext=function(x){return G.H.useContext(x)},xe.useDebugValue=function(){},xe.useDeferredValue=function(x,V){return G.H.useDeferredValue(x,V)},xe.useEffect=function(x,V,L){var N=G.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(x,V)},xe.useId=function(){return G.H.useId()},xe.useImperativeHandle=function(x,V,L){return G.H.useImperativeHandle(x,V,L)},xe.useInsertionEffect=function(x,V){return G.H.useInsertionEffect(x,V)},xe.useLayoutEffect=function(x,V){return G.H.useLayoutEffect(x,V)},xe.useMemo=function(x,V){return G.H.useMemo(x,V)},xe.useOptimistic=function(x,V){return G.H.useOptimistic(x,V)},xe.useReducer=function(x,V,L){return G.H.useReducer(x,V,L)},xe.useRef=function(x){return G.H.useRef(x)},xe.useState=function(x){return G.H.useState(x)},xe.useSyncExternalStore=function(x,V,L){return G.H.useSyncExternalStore(x,V,L)},xe.useTransition=function(){return G.H.useTransition()},xe.version="19.1.1",xe}var Pf;function Q0(){return Pf||(Pf=1,B0.exports=F3()),B0.exports}var W=Q0();const Ft=xu(W);var U0={exports:{}},Ia={},j0={exports:{}},Y0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function $3(){return Qf||(Qf=1,(function(s){function u(H,J){var F=H.length;H.push(J);e:for(;0<F;){var ue=F-1>>>1,x=H[ue];if(0<f(x,J))H[ue]=J,H[F]=x,F=ue;else break e}}function d(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var J=H[0],F=H.pop();if(F!==J){H[0]=F;e:for(var ue=0,x=H.length,V=x>>>1;ue<V;){var L=2*(ue+1)-1,N=H[L],I=L+1,se=H[I];if(0>f(N,F))I<x&&0>f(se,N)?(H[ue]=se,H[I]=F,ue=I):(H[ue]=N,H[L]=F,ue=L);else if(I<x&&0>f(se,F))H[ue]=se,H[I]=F,ue=I;else break e}}return J}function f(H,J){var F=H.sortIndex-J.sortIndex;return F!==0?F:H.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var m=Date,g=m.now();s.unstable_now=function(){return m.now()-g}}var y=[],p=[],v=1,C=null,b=3,T=!1,M=!1,k=!1,B=!1,U=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(H){for(var J=d(p);J!==null;){if(J.callback===null)i(p);else if(J.startTime<=H)i(p),J.sortIndex=J.expirationTime,u(y,J);else break;J=d(p)}}function G(H){if(k=!1,K(H),!M)if(d(y)!==null)M=!0,P||(P=!0,re());else{var J=d(p);J!==null&&ge(G,J.startTime-H)}}var P=!1,Y=-1,$=5,ne=-1;function de(){return B?!0:!(s.unstable_now()-ne<$)}function ve(){if(B=!1,P){var H=s.unstable_now();ne=H;var J=!0;try{e:{M=!1,k&&(k=!1,j(Y),Y=-1),T=!0;var F=b;try{t:{for(K(H),C=d(y);C!==null&&!(C.expirationTime>H&&de());){var ue=C.callback;if(typeof ue=="function"){C.callback=null,b=C.priorityLevel;var x=ue(C.expirationTime<=H);if(H=s.unstable_now(),typeof x=="function"){C.callback=x,K(H),J=!0;break t}C===d(y)&&i(y),K(H)}else i(y);C=d(y)}if(C!==null)J=!0;else{var V=d(p);V!==null&&ge(G,V.startTime-H),J=!1}}break e}finally{C=null,b=F,T=!1}J=void 0}}finally{J?re():P=!1}}}var re;if(typeof X=="function")re=function(){X(ve)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Re=ye.port2;ye.port1.onmessage=ve,re=function(){Re.postMessage(null)}}else re=function(){U(ve,0)};function ge(H,J){Y=U(function(){H(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return b},s.unstable_next=function(H){switch(b){case 1:case 2:case 3:var J=3;break;default:J=b}var F=b;b=J;try{return H()}finally{b=F}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var F=b;b=H;try{return J()}finally{b=F}},s.unstable_scheduleCallback=function(H,J,F){var ue=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ue+F:ue):F=ue,H){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=F+x,H={id:v++,callback:J,priorityLevel:H,startTime:F,expirationTime:x,sortIndex:-1},F>ue?(H.sortIndex=F,u(p,H),d(y)===null&&H===d(p)&&(k?(j(Y),Y=-1):k=!0,ge(G,F-ue))):(H.sortIndex=x,u(y,H),M||T||(M=!0,P||(P=!0,re()))),H},s.unstable_shouldYield=de,s.unstable_wrapCallback=function(H){var J=b;return function(){var F=b;b=J;try{return H.apply(this,arguments)}finally{b=F}}}})(Y0)),Y0}var Kf;function I3(){return Kf||(Kf=1,j0.exports=$3()),j0.exports}var X0={exports:{}},yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function ed(){if(Jf)return yt;Jf=1;var s=Q0();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var i={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(y,p,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:y,containerInfo:p,implementation:v}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,yt.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return c(y,p,null,v)},yt.flushSync=function(y){var p=m.T,v=i.p;try{if(m.T=null,i.p=2,y)return y()}finally{m.T=p,i.p=v,i.d.f()}},yt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(y,p))},yt.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},yt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?i.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:b,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:C,integrity:b,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=g(p.as,p.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(y)},yt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin);i.d.L(y,v,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yt.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=g(p.as,p.crossOrigin);i.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(y)},yt.requestFormReset=function(y){i.d.r(y)},yt.unstable_batchedUpdates=function(y,p){return y(p)},yt.useFormState=function(y,p,v){return m.H.useFormState(y,p,v)},yt.useFormStatus=function(){return m.H.useHostTransitionStatus()},yt.version="19.1.1",yt}var Wf;function td(){if(Wf)return X0.exports;Wf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),X0.exports=ed(),X0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function nd(){if(Ff)return Ia;Ff=1;var s=I3(),u=Q0(),d=td();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return g(a),e;if(r===l)return g(a),t;r=r.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=r;else{for(var o=!1,h=a.child;h;){if(h===n){o=!0,n=a,l=r;break}if(h===l){o=!0,l=a,n=r;break}h=h.sibling}if(!o){for(h=r.child;h;){if(h===n){o=!0,n=r,l=a;break}if(h===l){o=!0,l=r,n=a;break}h=h.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),X=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case B:return"Profiler";case k:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case X:return(e.displayName||"Context")+".Provider";case j:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var ge=Array.isArray,H=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ue=[],x=-1;function V(e){return{current:e}}function L(e){0>x||(e.current=ue[x],ue[x]=null,x--)}function N(e,t){x++,ue[x]=e.current,e.current=t}var I=V(null),se=V(null),ie=V(null),we=V(null);function _e(e,t){switch(N(ie,t),N(se,e),N(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yf(t),e=vf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(I),N(I,e)}function He(){L(I),L(se),L(ie)}function xt(e){e.memoizedState!==null&&N(we,e);var t=I.current,n=vf(t,e.type);t!==n&&(N(se,e),N(I,n))}function ft(e){se.current===e&&(L(I),L(se)),we.current===e&&(L(we),Qa._currentValue=F)}var bt=Object.prototype.hasOwnProperty,zn=s.unstable_scheduleCallback,rn=s.unstable_cancelCallback,le=s.unstable_shouldYield,ee=s.unstable_requestPaint,oe=s.unstable_now,Ne=s.unstable_getCurrentPriorityLevel,Ye=s.unstable_ImmediatePriority,Ge=s.unstable_UserBlockingPriority,Le=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,Lt=s.unstable_IdlePriority,un=s.log,It=s.unstable_setDisableYieldValue,Gt=null,$e=null;function Pt(e){if(typeof un=="function"&&It(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Gt,e)}catch{}}var ze=Math.clz32?Math.clz32:Je,Ie=Math.log,Qt=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ie(e)/Qt|0)|0}var te=256,cn=4194304;function on(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pl(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~r,l!==0?a=on(l):(o&=h,o!==0?a=on(o):n||(n=h&~e,n!==0&&(a=on(n))))):(h=l&~r,h!==0?a=on(h):o!==0?a=on(o):n||(n=l&~e,n!==0&&(a=on(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Fn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Tu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(){var e=te;return te<<=1,(te&4194048)===0&&(te=256),e}function ur(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function U2(e,t,n,l,a,r){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,_=e.expirationTimes,O=e.hiddenUpdates;for(n=o&~n;0<n;){var q=31-ze(n),Q=1<<q;h[q]=0,_[q]=-1;var E=O[q];if(E!==null)for(O[q]=null,q=0;q<E.length;q++){var w=E[q];w!==null&&(w.lane&=-536870913)}n&=~Q}l!==0&&ec(e,l,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function ec(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ze(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-ze(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nc(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Uf(e.type))}function j2(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Mn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Mn,St="__reactProps$"+Mn,gl="__reactContainer$"+Mn,zu="__reactEvents$"+Mn,Y2="__reactListeners$"+Mn,X2="__reactHandles$"+Mn,lc="__reactResources$"+Mn,aa="__reactMarker$"+Mn;function Mu(e){delete e[pt],delete e[St],delete e[zu],delete e[Y2],delete e[X2]}function yl(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gl]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sf(e);e!==null;){if(n=e[pt])return n;e=Sf(e)}return t}e=n,n=e.parentNode}return null}function vl(e){if(e=e[pt]||e[gl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ra(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xl(e){var t=e[lc];return t||(t=e[lc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[aa]=!0}var ac=new Set,rc={};function $n(e,t){bl(e,t),bl(e+"Capture",t)}function bl(e,t){for(rc[e]=t,e=0;e<t.length;e++)ac.add(t[e])}var k2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uc={},ic={};function q2(e){return bt.call(ic,e)?!0:bt.call(uc,e)?!1:k2.test(e)?ic[e]=!0:(uc[e]=!0,!1)}function ir(e,t,n){if(q2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function cr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function sn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Au,cc;function _l(e){if(Au===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Au=t&&t[1]||"",cc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Au+e+cc}var Ou=!1;function Vu(e,t){if(!e||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(w){var E=w}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(w){E=w}e.call(Q.prototype)}}else{try{throw Error()}catch(w){E=w}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(w){if(w&&E&&typeof w.stack=="string")return[w.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],h=r[1];if(o&&h){var _=o.split(`
`),O=h.split(`
`);for(a=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;if(l===_.length||a===O.length)for(l=_.length-1,a=O.length-1;1<=l&&0<=a&&_[l]!==O[a];)a--;for(;1<=l&&0<=a;l--,a--)if(_[l]!==O[a]){if(l!==1||a!==1)do if(l--,a--,0>a||_[l]!==O[a]){var q=`
`+_[l].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=l&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_l(n):""}function N2(e){switch(e.tag){case 26:case 27:case 5:return _l(e.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 15:return Vu(e.type,!1);case 11:return Vu(e.type.render,!1);case 1:return Vu(e.type,!0);case 31:return _l("Activity");default:return""}}function oc(e){try{var t="";do t+=N2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z2(e){var t=sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Z2(e))}function fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=sc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var L2=/[\n"\\]/g;function Ut(e){return e.replace(L2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Eu(e,t,n,l,a,r,o,h){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?wu(e,o,Bt(t)):n!=null?wu(e,o,Bt(n)):l!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Bt(h):e.removeAttribute("name")}function dc(e,t,n,l,a,r,o,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function wu(e,t,n){t==="number"&&sr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Sl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function hc(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function mc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(ge(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Cl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var P2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||P2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gc(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&pc(e,a,l)}else for(var r in t)t.hasOwnProperty(r)&&pc(e,r,t[r])}function Hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fr(e){return K2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gu=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,Rl=null;function yc(e){var t=vl(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(Eu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[St]||null;if(!a)throw Error(i(90));Eu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&fc(l)}break e;case"textarea":hc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Sl(e,!!n.multiple,t,!1)}}}var Uu=!1;function vc(e,t,n){if(Uu)return e(t,n);Uu=!0;try{var l=e(t);return l}finally{if(Uu=!1,(Tl!==null||Rl!==null)&&(Wr(),Tl&&(t=Tl,e=Rl,Rl=Tl=null,yc(t),e)))for(t=0;t<e.length;t++)yc(e[t])}}function ua(e,t){var n=e.stateNode;if(n===null)return null;var l=n[St]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(fn)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){ju=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{ju=!1}var An=null,Yu=null,dr=null;function xc(){if(dr)return dr;var e,t=Yu,n=t.length,l,a="value"in An?An.value:An.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[r-l];l++);return dr=a.slice(e,1<l?1-l:void 0)}function hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function bc(){return!1}function Ct(e){function t(n,l,a,r,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?mr:bc,this.isPropagationStopped=bc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=Ct(In),ca=v({},In,{view:0,detail:0}),J2=Ct(ca),Xu,ku,oa,gr=v({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(Xu=e.screenX-oa.screenX,ku=e.screenY-oa.screenY):ku=Xu=0,oa=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),_c=Ct(gr),W2=v({},gr,{dataTransfer:0}),F2=Ct(W2),$2=v({},ca,{relatedTarget:0}),qu=Ct($2),I2=v({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=Ct(I2),t1=v({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n1=Ct(t1),l1=v({},In,{data:0}),Sc=Ct(l1),a1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u1[e])?!!t[e]:!1}function Nu(){return i1}var c1=v({},ca,{key:function(e){if(e.key){var t=a1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o1=Ct(c1),s1=v({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=Ct(s1),f1=v({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),d1=Ct(f1),h1=v({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=Ct(h1),p1=v({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=Ct(p1),y1=v({},In,{newState:0,oldState:0}),v1=Ct(y1),x1=[9,13,27,32],Zu=fn&&"CompositionEvent"in window,sa=null;fn&&"documentMode"in document&&(sa=document.documentMode);var b1=fn&&"TextEvent"in window&&!sa,Tc=fn&&(!Zu||sa&&8<sa&&11>=sa),Rc=" ",Dc=!1;function zc(e,t){switch(e){case"keyup":return x1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dl=!1;function _1(e,t){switch(e){case"compositionend":return Mc(t);case"keypress":return t.which!==32?null:(Dc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Dc?null:e;default:return null}}function S1(e,t){if(Dl)return e==="compositionend"||!Zu&&zc(e,t)?(e=xc(),dr=Yu=An=null,Dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C1[e.type]:t==="textarea"}function Oc(e,t,n,l){Tl?Rl?Rl.push(l):Rl=[l]:Tl=l,t=nu(t,"onChange"),0<t.length&&(n=new pr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var fa=null,da=null;function T1(e){df(e,0)}function yr(e){var t=ra(e);if(fc(t))return e}function Vc(e,t){if(e==="change")return t}var Ec=!1;if(fn){var Lu;if(fn){var Pu="oninput"in document;if(!Pu){var wc=document.createElement("div");wc.setAttribute("oninput","return;"),Pu=typeof wc.oninput=="function"}Lu=Pu}else Lu=!1;Ec=Lu&&(!document.documentMode||9<document.documentMode)}function Hc(){fa&&(fa.detachEvent("onpropertychange",Gc),da=fa=null)}function Gc(e){if(e.propertyName==="value"&&yr(da)){var t=[];Oc(t,da,e,Bu(e)),vc(T1,t)}}function R1(e,t,n){e==="focusin"?(Hc(),fa=t,da=n,fa.attachEvent("onpropertychange",Gc)):e==="focusout"&&Hc()}function D1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yr(da)}function z1(e,t){if(e==="click")return yr(t)}function M1(e,t){if(e==="input"||e==="change")return yr(t)}function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:A1;function ha(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!bt.call(t,a)||!Mt(e[a],t[a]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uc(e,t){var n=Bc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bc(n)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=sr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sr(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var O1=fn&&"documentMode"in document&&11>=document.documentMode,zl=null,Ku=null,ma=null,Ju=!1;function Xc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||zl==null||zl!==sr(l)||(l=zl,"selectionStart"in l&&Qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&ha(ma,l)||(ma=l,l=nu(Ku,"onSelect"),0<l.length&&(t=new pr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=zl)))}function el(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ml={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},Wu={},kc={};fn&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete Ml.animationend.animation,delete Ml.animationiteration.animation,delete Ml.animationstart.animation),"TransitionEvent"in window||delete Ml.transitionend.transition);function tl(e){if(Wu[e])return Wu[e];if(!Ml[e])return e;var t=Ml[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kc)return Wu[e]=t[n];return e}var qc=tl("animationend"),Nc=tl("animationiteration"),Zc=tl("animationstart"),V1=tl("transitionrun"),E1=tl("transitionstart"),w1=tl("transitioncancel"),Lc=tl("transitionend"),Pc=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Kt(e,t){Pc.set(e,t),$n(t,[e])}var Qc=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var n=Qc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:oc(t)},Qc.set(e,t),t)}return{value:e,source:t,stack:oc(t)}}var Yt=[],Al=0,$u=0;function vr(){for(var e=Al,t=$u=Al=0;t<e;){var n=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var a=Yt[t];Yt[t++]=null;var r=Yt[t];if(Yt[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}r!==0&&Kc(n,a,r)}}function xr(e,t,n,l){Yt[Al++]=e,Yt[Al++]=t,Yt[Al++]=n,Yt[Al++]=l,$u|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Iu(e,t,n,l){return xr(e,t,n,l),br(e)}function Ol(e,t){return xr(e,null,null,t),br(e)}function Kc(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,l=r.alternate,l!==null&&(l.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-ze(n),e=r.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),r):null}function br(e){if(50<Ya)throw Ya=0,r0=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vl={};function H1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,l){return new H1(e,t,n,l)}function ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Jc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _r(e,t,n,l,a,r){var o=0;if(l=e,typeof e=="function")ei(e)&&(o=1);else if(typeof e=="string")o=B3(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=At(31,n,t,a),e.elementType=ne,e.lanes=r,e;case M:return nl(n.children,a,r,t);case k:o=8,a|=24;break;case B:return e=At(12,n,t,a|2),e.elementType=B,e.lanes=r,e;case G:return e=At(13,n,t,a),e.elementType=G,e.lanes=r,e;case P:return e=At(19,n,t,a),e.elementType=P,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case X:o=10;break e;case j:o=9;break e;case K:o=11;break e;case Y:o=14;break e;case $:o=16,l=null;break e}o=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=At(o,n,t,a),t.elementType=e,t.type=l,t.lanes=r,t}function nl(e,t,n,l){return e=At(7,e,l,t),e.lanes=n,e}function ti(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function ni(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var El=[],wl=0,Sr=null,Cr=0,Xt=[],kt=0,ll=null,hn=1,mn="";function al(e,t){El[wl++]=Cr,El[wl++]=Sr,Sr=e,Cr=t}function Wc(e,t,n){Xt[kt++]=hn,Xt[kt++]=mn,Xt[kt++]=ll,ll=e;var l=hn;e=mn;var a=32-ze(l)-1;l&=~(1<<a),n+=1;var r=32-ze(t)+a;if(30<r){var o=a-a%5;r=(l&(1<<o)-1).toString(32),l>>=o,a-=o,hn=1<<32-ze(t)+a|n<<a|l,mn=r+e}else hn=1<<r|n<<a|l,mn=e}function li(e){e.return!==null&&(al(e,1),Wc(e,1,0))}function ai(e){for(;e===Sr;)Sr=El[--wl],El[wl]=null,Cr=El[--wl],El[wl]=null;for(;e===ll;)ll=Xt[--kt],Xt[kt]=null,mn=Xt[--kt],Xt[kt]=null,hn=Xt[--kt],Xt[kt]=null}var _t=null,We=null,Ae=!1,rl=null,en=!1,ri=Error(i(519));function ul(e){var t=Error(i(418,""));throw ya(jt(t,e)),ri}function Fc(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[pt]=e,t[St]=l,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<ka.length;n++)Te(ka[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),dc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),or(t);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),mc(t,l.value,l.defaultValue,l.children),or(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||gf(t.textContent,n)?(l.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),l.onScroll!=null&&Te("scroll",t),l.onScrollEnd!=null&&Te("scrollend",t),l.onClick!=null&&(t.onclick=lu),t=!0):t=!1,t||ul(e)}function $c(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 13:en=!1;return;case 27:case 3:en=!0;return;default:_t=_t.return}}function pa(e){if(e!==_t)return!1;if(!Ae)return $c(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_0(e.type,e.memoizedProps)),n=!n),n&&We&&ul(e),$c(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){We=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}We=null}}else t===27?(t=We,Ln(e.type)?(e=R0,R0=null,We=e):We=t):We=_t?Wt(e.stateNode.nextSibling):null;return!0}function ga(){We=_t=null,Ae=!1}function Ic(){var e=rl;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),rl=null),e}function ya(e){rl===null?rl=[e]:rl.push(e)}var ui=V(null),il=null,pn=null;function On(e,t,n){N(ui,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=ui.current,L(ui)}function ii(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ci(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var o=a.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=a;for(var _=0;_<t.length;_++)if(h.context===t[_]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ii(r.return,n,e),l||(o=null);break e}r=h.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),ii(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function va(e,t,n,l){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var h=a.type;Mt(a.pendingProps.value,o.value)||(e!==null?e.push(h):e=[h])}}else if(a===we.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Qa):e=[Qa])}a=a.return}e!==null&&ci(t,e,n,l),t.flags|=262144}function Tr(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cl(e){il=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gt(e){return eo(il,e)}function Rr(e,t){return il===null&&cl(e),eo(e,t)}function eo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(i(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var G1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},B1=s.unstable_scheduleCallback,U1=s.unstable_NormalPriority,at={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oi(){return{controller:new G1,data:new Map,refCount:0}}function xa(e){e.refCount--,e.refCount===0&&B1(U1,function(){e.controller.abort()})}var ba=null,si=0,Hl=0,Gl=null;function j1(e,t){if(ba===null){var n=ba=[];si=0,Hl=d0(),Gl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return si++,t.then(to,to),t}function to(){if(--si===0&&ba!==null){Gl!==null&&(Gl.status="fulfilled");var e=ba;ba=null,Hl=0,Gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Y1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var no=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&j1(e,t),no!==null&&no(e,t)};var ol=V(null);function fi(){var e=ol.current;return e!==null?e:qe.pooledCache}function Dr(e,t){t===null?N(ol,ol.current):N(ol,t.pool)}function lo(){var e=fi();return e===null?null:{parent:at._currentValue,pool:e}}var _a=Error(i(460)),ao=Error(i(474)),zr=Error(i(542)),di={then:function(){}};function ro(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mr(){}function uo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Mr,Mr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e;default:if(typeof t.status=="string")t.then(Mr,Mr);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e}throw Sa=t,_a}}var Sa=null;function io(){if(Sa===null)throw Error(i(459));var e=Sa;return Sa=null,e}function co(e){if(e===_a||e===zr)throw Error(i(483))}var Vn=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ve&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=br(e),Kc(e,null,n),t}return xr(e,l,t,n),br(e)}function Ca(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,tc(e,n)}}function pi(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gi=!1;function Ta(){if(gi){var e=Gl;if(e!==null)throw e}}function Ra(e,t,n,l){gi=!1;var a=e.updateQueue;Vn=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var _=h,O=_.next;_.next=null,o===null?r=O:o.next=O,o=_;var q=e.alternate;q!==null&&(q=q.updateQueue,h=q.lastBaseUpdate,h!==o&&(h===null?q.firstBaseUpdate=O:h.next=O,q.lastBaseUpdate=_))}if(r!==null){var Q=a.baseState;o=0,q=O=_=null,h=r;do{var E=h.lane&-536870913,w=E!==h.lane;if(w?(De&E)===E:(l&E)===E){E!==0&&E===Hl&&(gi=!0),q!==null&&(q=q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var me=e,fe=h;E=t;var je=n;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){Q=me.call(je,Q,E);break e}Q=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,E=typeof me=="function"?me.call(je,Q,E):me,E==null)break e;Q=v({},Q,E);break e;case 2:Vn=!0}}E=h.callback,E!==null&&(e.flags|=64,w&&(e.flags|=8192),w=a.callbacks,w===null?a.callbacks=[E]:w.push(E))}else w={lane:E,tag:h.tag,payload:h.payload,callback:h.callback,next:null},q===null?(O=q=w,_=Q):q=q.next=w,o|=E;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;w=h,h=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);q===null&&(_=Q),a.baseState=_,a.firstBaseUpdate=O,a.lastBaseUpdate=q,r===null&&(a.shared.lanes=0),kn|=o,e.lanes=o,e.memoizedState=Q}}function oo(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function so(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)oo(n[e],t)}var Bl=V(null),Ar=V(0);function fo(e,t){e=Cn,N(Ar,e),N(Bl,t),Cn=e|t.baseLanes}function yi(){N(Ar,Cn),N(Bl,Bl.current)}function vi(){Cn=Ar.current,L(Bl),L(Ar)}var Hn=0,be=null,Be=null,nt=null,Or=!1,Ul=!1,sl=!1,Vr=0,Da=0,jl=null,X1=0;function et(){throw Error(i(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function bi(e,t,n,l,a,r){return Hn=r,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Jo:Wo,sl=!1,r=n(l,a),sl=!1,Ul&&(r=mo(t,n,l,a)),ho(e),r}function ho(e){H.H=Ur;var t=Be!==null&&Be.next!==null;if(Hn=0,nt=Be=be=null,Or=!1,Da=0,jl=null,t)throw Error(i(300));e===null||it||(e=e.dependencies,e!==null&&Tr(e)&&(it=!0))}function mo(e,t,n,l){be=e;var a=0;do{if(Ul&&(jl=null),Da=0,Ul=!1,25<=a)throw Error(i(301));if(a+=1,nt=Be=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}H.H=Q1,r=t(n,l)}while(Ul);return r}function k1(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?za(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(be.flags|=1024),t}function _i(){var e=Vr!==0;return Vr=0,e}function Si(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ci(e){if(Or){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Or=!1}Hn=0,nt=Be=be=null,Ul=!1,Da=Vr=0,jl=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?be.memoizedState=nt=e:nt=nt.next=e,nt}function lt(){if(Be===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=nt===null?be.memoizedState:nt.next;if(t!==null)nt=t,Be=e;else{if(e===null)throw be.alternate===null?Error(i(467)):Error(i(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},nt===null?be.memoizedState=nt=e:nt=nt.next=e}return nt}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var t=Da;return Da+=1,jl===null&&(jl=[]),e=uo(jl,e,t),t=be,(nt===null?t.memoizedState:nt.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Jo:Wo),e}function Er(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===X)return gt(e)}throw Error(i(438,String(e)))}function Ri(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=be.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ti(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=de;return t.index++,n}function yn(e,t){return typeof t=="function"?t(e):t}function wr(e){var t=lt();return Di(t,Be,e)}function Di(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,r=l.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}t.baseQueue=a=r,l.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var h=o=null,_=null,O=t,q=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(De&Q)===Q:(Hn&Q)===Q){var E=O.revertLane;if(E===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===Hl&&(q=!0);else if((Hn&E)===E){O=O.next,E===Hl&&(q=!0);continue}else Q={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},_===null?(h=_=Q,o=r):_=_.next=Q,be.lanes|=E,kn|=E;Q=O.action,sl&&n(r,Q),r=O.hasEagerState?O.eagerState:n(r,Q)}else E={lane:Q,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},_===null?(h=_=E,o=r):_=_.next=E,be.lanes|=Q,kn|=Q;O=O.next}while(O!==null&&O!==t);if(_===null?o=r:_.next=h,!Mt(r,e.memoizedState)&&(it=!0,q&&(n=Gl,n!==null)))throw n;e.memoizedState=r,e.baseState=o,e.baseQueue=_,l.lastRenderedState=r}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function zi(e){var t=lt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Mt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,l]}function po(e,t,n){var l=be,a=lt(),r=Ae;if(r){if(n===void 0)throw Error(i(407));n=n()}else n=t();var o=!Mt((Be||a).memoizedState,n);o&&(a.memoizedState=n,it=!0),a=a.queue;var h=vo.bind(null,l,a,e);if(Ma(2048,8,h,[e]),a.getSnapshot!==t||o||nt!==null&&nt.memoizedState.tag&1){if(l.flags|=2048,Yl(9,Hr(),yo.bind(null,l,a,n,t),null),qe===null)throw Error(i(349));r||(Hn&124)!==0||go(l,t,n)}return n}function go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=Ti(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yo(e,t,n,l){t.value=n,t.getSnapshot=l,xo(t)&&bo(e)}function vo(e,t,n){return n(function(){xo(t)&&bo(e)})}function xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function bo(e){var t=Ol(e,2);t!==null&&Ht(t,e,2)}function Mi(e){var t=Tt();if(typeof e=="function"){var n=e;if(e=n(),sl){Pt(!0);try{n()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function _o(e,t,n,l){return e.baseState=n,Di(e,Be,typeof l=="function"?l:yn)}function q1(e,t,n,l,a){if(Br(e))throw Error(i(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};H.T!==null?n(!0):r.isTransition=!1,l(r),n=t.pending,n===null?(r.next=t.pending=r,So(t,r)):(r.next=n.next,t.pending=n.next=r)}}function So(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var r=H.T,o={};H.T=o;try{var h=n(a,l),_=H.S;_!==null&&_(o,h),Co(e,t,h)}catch(O){Ai(e,t,O)}finally{H.T=r}}else try{r=n(a,l),Co(e,t,r)}catch(O){Ai(e,t,O)}}function Co(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){To(e,t,l)},function(l){return Ai(e,t,l)}):To(e,t,n)}function To(e,t,n){t.status="fulfilled",t.value=n,Ro(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,So(e,n)))}function Ai(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ro(t),t=t.next;while(t!==l)}e.action=null}function Ro(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Do(e,t){return t}function zo(e,t){if(Ae){var n=qe.formState;if(n!==null){e:{var l=be;if(Ae){if(We){t:{for(var a=We,r=en;a.nodeType!==8;){if(!r){a=null;break t}if(a=Wt(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){We=Wt(a.nextSibling),l=a.data==="F!";break e}}ul(l)}l=!1}l&&(t=n[0])}}return n=Tt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},n.queue=l,n=Po.bind(null,be,l),l.dispatch=n,l=Mi(!1),r=Hi.bind(null,be,!1,l.queue),l=Tt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=q1.bind(null,be,a,r,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Mo(e){var t=lt();return Ao(t,Be,e)}function Ao(e,t,n){if(t=Di(e,t,Do)[0],e=wr(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=za(t)}catch(o){throw o===_a?zr:o}else l=t;t=lt();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(be.flags|=2048,Yl(9,Hr(),N1.bind(null,a,n),null)),[l,r,e]}function N1(e,t){e.action=t}function Oo(e){var t=lt(),n=Be;if(n!==null)return Ao(t,n,e);lt(),t=t.memoizedState,n=lt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Yl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=be.updateQueue,t===null&&(t=Ti(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Hr(){return{destroy:void 0,resource:void 0}}function Vo(){return lt().memoizedState}function Gr(e,t,n,l){var a=Tt();l=l===void 0?null:l,be.flags|=e,a.memoizedState=Yl(1|t,Hr(),n,l)}function Ma(e,t,n,l){var a=lt();l=l===void 0?null:l;var r=a.memoizedState.inst;Be!==null&&l!==null&&xi(l,Be.memoizedState.deps)?a.memoizedState=Yl(t,r,n,l):(be.flags|=e,a.memoizedState=Yl(1|t,r,n,l))}function Eo(e,t){Gr(8390656,8,e,t)}function wo(e,t){Ma(2048,8,e,t)}function Ho(e,t){return Ma(4,2,e,t)}function Go(e,t){return Ma(4,4,e,t)}function Bo(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uo(e,t,n){n=n!=null?n.concat([e]):null,Ma(4,4,Bo.bind(null,t,e),n)}function Oi(){}function jo(e,t){var n=lt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&xi(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Yo(e,t){var n=lt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&xi(t,l[1]))return l[0];if(l=e(),sl){Pt(!0);try{e()}finally{Pt(!1)}}return n.memoizedState=[l,t],l}function Vi(e,t,n){return n===void 0||(Hn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=qs(),be.lanes|=e,kn|=e,n)}function Xo(e,t,n,l){return Mt(n,t)?n:Bl.current!==null?(e=Vi(e,n,l),Mt(e,t)||(it=!0),e):(Hn&42)===0?(it=!0,e.memoizedState=n):(e=qs(),be.lanes|=e,kn|=e,t)}function ko(e,t,n,l,a){var r=J.p;J.p=r!==0&&8>r?r:8;var o=H.T,h={};H.T=h,Hi(e,!1,t,n);try{var _=a(),O=H.S;if(O!==null&&O(h,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var q=Y1(_,l);Aa(e,t,q,wt(e))}else Aa(e,t,l,wt(e))}catch(Q){Aa(e,t,{then:function(){},status:"rejected",reason:Q},wt())}finally{J.p=r,H.T=o}}function Z1(){}function Ei(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=qo(e).queue;ko(e,a,t,F,n===null?Z1:function(){return No(e),n(l)})}function qo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function No(e){var t=qo(e).next.queue;Aa(e,t,{},wt())}function wi(){return gt(Qa)}function Zo(){return lt().memoizedState}function Lo(){return lt().memoizedState}function L1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=wt();e=En(n);var l=wn(t,e,n);l!==null&&(Ht(l,t,n),Ca(l,t,n)),t={cache:oi()},e.payload=t;return}t=t.return}}function P1(e,t,n){var l=wt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Br(e)?Qo(t,n):(n=Iu(e,t,n,l),n!==null&&(Ht(n,e,l),Ko(n,t,l)))}function Po(e,t,n){var l=wt();Aa(e,t,n,l)}function Aa(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Br(e))Qo(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,h=r(o,n);if(a.hasEagerState=!0,a.eagerState=h,Mt(h,o))return xr(e,t,a,0),qe===null&&vr(),!1}catch{}finally{}if(n=Iu(e,t,a,l),n!==null)return Ht(n,e,l),Ko(n,t,l),!0}return!1}function Hi(e,t,n,l){if(l={lane:2,revertLane:d0(),action:l,hasEagerState:!1,eagerState:null,next:null},Br(e)){if(t)throw Error(i(479))}else t=Iu(e,n,l,2),t!==null&&Ht(t,e,2)}function Br(e){var t=e.alternate;return e===be||t!==null&&t===be}function Qo(e,t){Ul=Or=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ko(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,tc(e,n)}}var Ur={readContext:gt,use:Er,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et},Jo={readContext:gt,use:Er,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Eo,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gr(4194308,4,Bo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){Gr(4,2,e,t)},useMemo:function(e,t){var n=Tt();t=t===void 0?null:t;var l=e();if(sl){Pt(!0);try{e()}finally{Pt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Tt();if(n!==void 0){var a=n(t);if(sl){Pt(!0);try{n(t)}finally{Pt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=P1.bind(null,be,e),[l.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Mi(e);var t=e.queue,n=Po.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Oi,useDeferredValue:function(e,t){var n=Tt();return Vi(n,e,t)},useTransition:function(){var e=Mi(!1);return e=ko.bind(null,be,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=be,a=Tt();if(Ae){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),qe===null)throw Error(i(349));(De&124)!==0||go(l,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Eo(vo.bind(null,l,r,e),[e]),l.flags|=2048,Yl(9,Hr(),yo.bind(null,l,r,n,t),null),n},useId:function(){var e=Tt(),t=qe.identifierPrefix;if(Ae){var n=mn,l=hn;n=(l&~(1<<32-ze(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=X1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:wi,useFormState:zo,useActionState:zo,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hi.bind(null,be,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ri,useCacheRefresh:function(){return Tt().memoizedState=L1.bind(null,be)}},Wo={readContext:gt,use:Er,useCallback:jo,useContext:gt,useEffect:wo,useImperativeHandle:Uo,useInsertionEffect:Ho,useLayoutEffect:Go,useMemo:Yo,useReducer:wr,useRef:Vo,useState:function(){return wr(yn)},useDebugValue:Oi,useDeferredValue:function(e,t){var n=lt();return Xo(n,Be.memoizedState,e,t)},useTransition:function(){var e=wr(yn)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:za(e),t]},useSyncExternalStore:po,useId:Zo,useHostTransitionStatus:wi,useFormState:Mo,useActionState:Mo,useOptimistic:function(e,t){var n=lt();return _o(n,Be,e,t)},useMemoCache:Ri,useCacheRefresh:Lo},Q1={readContext:gt,use:Er,useCallback:jo,useContext:gt,useEffect:wo,useImperativeHandle:Uo,useInsertionEffect:Ho,useLayoutEffect:Go,useMemo:Yo,useReducer:zi,useRef:Vo,useState:function(){return zi(yn)},useDebugValue:Oi,useDeferredValue:function(e,t){var n=lt();return Be===null?Vi(n,e,t):Xo(n,Be.memoizedState,e,t)},useTransition:function(){var e=zi(yn)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:za(e),t]},useSyncExternalStore:po,useId:Zo,useHostTransitionStatus:wi,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var n=lt();return Be!==null?_o(n,Be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ri,useCacheRefresh:Lo},Xl=null,Oa=0;function jr(e){var t=Oa;return Oa+=1,Xl===null&&(Xl=[]),uo(Xl,e,t)}function Va(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yr(e,t){throw t.$$typeof===C?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fo(e){var t=e._init;return t(e._payload)}function $o(e){function t(z,R){if(e){var A=z.deletions;A===null?(z.deletions=[R],z.flags|=16):A.push(R)}}function n(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function l(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function a(z,R){return z=dn(z,R),z.index=0,z.sibling=null,z}function r(z,R,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<R?(z.flags|=67108866,R):A):(z.flags|=67108866,R)):(z.flags|=1048576,R)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function h(z,R,A,Z){return R===null||R.tag!==6?(R=ti(A,z.mode,Z),R.return=z,R):(R=a(R,A),R.return=z,R)}function _(z,R,A,Z){var ae=A.type;return ae===M?q(z,R,A.props.children,Z,A.key):R!==null&&(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===$&&Fo(ae)===R.type)?(R=a(R,A.props),Va(R,A),R.return=z,R):(R=_r(A.type,A.key,A.props,null,z.mode,Z),Va(R,A),R.return=z,R)}function O(z,R,A,Z){return R===null||R.tag!==4||R.stateNode.containerInfo!==A.containerInfo||R.stateNode.implementation!==A.implementation?(R=ni(A,z.mode,Z),R.return=z,R):(R=a(R,A.children||[]),R.return=z,R)}function q(z,R,A,Z,ae){return R===null||R.tag!==7?(R=nl(A,z.mode,Z,ae),R.return=z,R):(R=a(R,A),R.return=z,R)}function Q(z,R,A){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ti(""+R,z.mode,A),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case b:return A=_r(R.type,R.key,R.props,null,z.mode,A),Va(A,R),A.return=z,A;case T:return R=ni(R,z.mode,A),R.return=z,R;case $:var Z=R._init;return R=Z(R._payload),Q(z,R,A)}if(ge(R)||re(R))return R=nl(R,z.mode,A,null),R.return=z,R;if(typeof R.then=="function")return Q(z,jr(R),A);if(R.$$typeof===X)return Q(z,Rr(z,R),A);Yr(z,R)}return null}function E(z,R,A,Z){var ae=R!==null?R.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ae!==null?null:h(z,R,""+A,Z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case b:return A.key===ae?_(z,R,A,Z):null;case T:return A.key===ae?O(z,R,A,Z):null;case $:return ae=A._init,A=ae(A._payload),E(z,R,A,Z)}if(ge(A)||re(A))return ae!==null?null:q(z,R,A,Z,null);if(typeof A.then=="function")return E(z,R,jr(A),Z);if(A.$$typeof===X)return E(z,R,Rr(z,A),Z);Yr(z,A)}return null}function w(z,R,A,Z,ae){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(A)||null,h(R,z,""+Z,ae);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return z=z.get(Z.key===null?A:Z.key)||null,_(R,z,Z,ae);case T:return z=z.get(Z.key===null?A:Z.key)||null,O(R,z,Z,ae);case $:var Se=Z._init;return Z=Se(Z._payload),w(z,R,A,Z,ae)}if(ge(Z)||re(Z))return z=z.get(A)||null,q(R,z,Z,ae,null);if(typeof Z.then=="function")return w(z,R,A,jr(Z),ae);if(Z.$$typeof===X)return w(z,R,A,Rr(R,Z),ae);Yr(R,Z)}return null}function me(z,R,A,Z){for(var ae=null,Se=null,ce=R,he=R=0,ot=null;ce!==null&&he<A.length;he++){ce.index>he?(ot=ce,ce=null):ot=ce.sibling;var Me=E(z,ce,A[he],Z);if(Me===null){ce===null&&(ce=ot);break}e&&ce&&Me.alternate===null&&t(z,ce),R=r(Me,R,he),Se===null?ae=Me:Se.sibling=Me,Se=Me,ce=ot}if(he===A.length)return n(z,ce),Ae&&al(z,he),ae;if(ce===null){for(;he<A.length;he++)ce=Q(z,A[he],Z),ce!==null&&(R=r(ce,R,he),Se===null?ae=ce:Se.sibling=ce,Se=ce);return Ae&&al(z,he),ae}for(ce=l(ce);he<A.length;he++)ot=w(ce,z,he,A[he],Z),ot!==null&&(e&&ot.alternate!==null&&ce.delete(ot.key===null?he:ot.key),R=r(ot,R,he),Se===null?ae=ot:Se.sibling=ot,Se=ot);return e&&ce.forEach(function(Wn){return t(z,Wn)}),Ae&&al(z,he),ae}function fe(z,R,A,Z){if(A==null)throw Error(i(151));for(var ae=null,Se=null,ce=R,he=R=0,ot=null,Me=A.next();ce!==null&&!Me.done;he++,Me=A.next()){ce.index>he?(ot=ce,ce=null):ot=ce.sibling;var Wn=E(z,ce,Me.value,Z);if(Wn===null){ce===null&&(ce=ot);break}e&&ce&&Wn.alternate===null&&t(z,ce),R=r(Wn,R,he),Se===null?ae=Wn:Se.sibling=Wn,Se=Wn,ce=ot}if(Me.done)return n(z,ce),Ae&&al(z,he),ae;if(ce===null){for(;!Me.done;he++,Me=A.next())Me=Q(z,Me.value,Z),Me!==null&&(R=r(Me,R,he),Se===null?ae=Me:Se.sibling=Me,Se=Me);return Ae&&al(z,he),ae}for(ce=l(ce);!Me.done;he++,Me=A.next())Me=w(ce,z,he,Me.value,Z),Me!==null&&(e&&Me.alternate!==null&&ce.delete(Me.key===null?he:Me.key),R=r(Me,R,he),Se===null?ae=Me:Se.sibling=Me,Se=Me);return e&&ce.forEach(function(K3){return t(z,K3)}),Ae&&al(z,he),ae}function je(z,R,A,Z){if(typeof A=="object"&&A!==null&&A.type===M&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case b:e:{for(var ae=A.key;R!==null;){if(R.key===ae){if(ae=A.type,ae===M){if(R.tag===7){n(z,R.sibling),Z=a(R,A.props.children),Z.return=z,z=Z;break e}}else if(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===$&&Fo(ae)===R.type){n(z,R.sibling),Z=a(R,A.props),Va(Z,A),Z.return=z,z=Z;break e}n(z,R);break}else t(z,R);R=R.sibling}A.type===M?(Z=nl(A.props.children,z.mode,Z,A.key),Z.return=z,z=Z):(Z=_r(A.type,A.key,A.props,null,z.mode,Z),Va(Z,A),Z.return=z,z=Z)}return o(z);case T:e:{for(ae=A.key;R!==null;){if(R.key===ae)if(R.tag===4&&R.stateNode.containerInfo===A.containerInfo&&R.stateNode.implementation===A.implementation){n(z,R.sibling),Z=a(R,A.children||[]),Z.return=z,z=Z;break e}else{n(z,R);break}else t(z,R);R=R.sibling}Z=ni(A,z.mode,Z),Z.return=z,z=Z}return o(z);case $:return ae=A._init,A=ae(A._payload),je(z,R,A,Z)}if(ge(A))return me(z,R,A,Z);if(re(A)){if(ae=re(A),typeof ae!="function")throw Error(i(150));return A=ae.call(A),fe(z,R,A,Z)}if(typeof A.then=="function")return je(z,R,jr(A),Z);if(A.$$typeof===X)return je(z,R,Rr(z,A),Z);Yr(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,R!==null&&R.tag===6?(n(z,R.sibling),Z=a(R,A),Z.return=z,z=Z):(n(z,R),Z=ti(A,z.mode,Z),Z.return=z,z=Z),o(z)):n(z,R)}return function(z,R,A,Z){try{Oa=0;var ae=je(z,R,A,Z);return Xl=null,ae}catch(ce){if(ce===_a||ce===zr)throw ce;var Se=At(29,ce,null,z.mode);return Se.lanes=Z,Se.return=z,Se}finally{}}}var kl=$o(!0),Io=$o(!1),qt=V(null),tn=null;function Gn(e){var t=e.alternate;N(rt,rt.current&1),N(qt,e),tn===null&&(t===null||Bl.current!==null||t.memoizedState!==null)&&(tn=e)}function es(e){if(e.tag===22){if(N(rt,rt.current),N(qt,e),tn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(tn=e)}}else Bn()}function Bn(){N(rt,rt.current),N(qt,qt.current)}function vn(e){L(qt),tn===e&&(tn=null),L(rt)}var rt=V(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||T0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Gi(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bi={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=wt(),a=En(l);a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,l),t!==null&&(Ht(t,e,l),Ca(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=wt(),a=En(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,l),t!==null&&(Ht(t,e,l),Ca(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),l=En(n);l.tag=2,t!=null&&(l.callback=t),t=wn(e,l,n),t!==null&&(Ht(t,e,n),Ca(t,e,n))}};function ts(e,t,n,l,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!ha(n,l)||!ha(a,r):!0}function ns(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function fl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var kr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ls(e){kr(e)}function as(e){console.error(e)}function rs(e){kr(e)}function qr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function us(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ui(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){qr(e,t)},n}function is(e){return e=En(e),e.tag=3,e}function cs(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;e.payload=function(){return a(r)},e.callback=function(){us(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){us(t,n,l),typeof a!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function K1(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&va(t,n,a,!0),n=qt.current,n!==null){switch(n.tag){case 13:return tn===null?i0():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===di?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),o0(e,l,a)),!1;case 22:return n.flags|=65536,l===di?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),o0(e,l,a)),!1}throw Error(i(435,n.tag))}return o0(e,l,a),i0(),!1}if(Ae)return t=qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==ri&&(e=Error(i(422),{cause:l}),ya(jt(e,n)))):(l!==ri&&(t=Error(i(423),{cause:l}),ya(jt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=jt(l,n),a=Ui(e.stateNode,l,a),pi(e,a),Fe!==4&&(Fe=2)),!1;var r=Error(i(520),{cause:l});if(r=jt(r,n),ja===null?ja=[r]:ja.push(r),Fe!==4&&(Fe=2),t===null)return!0;l=jt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ui(n.stateNode,l,e),pi(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=is(a),cs(a,e,n,l),pi(n,a),!1}n=n.return}while(n!==null);return!1}var os=Error(i(461)),it=!1;function dt(e,t,n,l){t.child=e===null?Io(t,null,n,l):kl(t,e.child,n,l)}function ss(e,t,n,l,a){n=n.render;var r=t.ref;if("ref"in l){var o={};for(var h in l)h!=="ref"&&(o[h]=l[h])}else o=l;return cl(t),l=bi(e,t,n,o,r,a),h=_i(),e!==null&&!it?(Si(e,t,a),xn(e,t,a)):(Ae&&h&&li(t),t.flags|=1,dt(e,t,l,a),t.child)}function fs(e,t,n,l,a){if(e===null){var r=n.type;return typeof r=="function"&&!ei(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,ds(e,t,r,l,a)):(e=_r(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Li(e,a)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,l)&&e.ref===t.ref)return xn(e,t,a)}return t.flags|=1,e=dn(r,l),e.ref=t.ref,e.return=t,t.child=e}function ds(e,t,n,l,a){if(e!==null){var r=e.memoizedProps;if(ha(r,l)&&e.ref===t.ref)if(it=!1,t.pendingProps=l=r,Li(e,a))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,xn(e,t,a)}return ji(e,t,n,l,a)}function hs(e,t,n){var l=t.pendingProps,a=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return ms(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dr(t,r!==null?r.cachePool:null),r!==null?fo(t,r):yi(),es(t);else return t.lanes=t.childLanes=536870912,ms(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Dr(t,r.cachePool),fo(t,r),Bn(),t.memoizedState=null):(e!==null&&Dr(t,null),yi(),Bn());return dt(e,t,a,n),t.child}function ms(e,t,n,l){var a=fi();return a=a===null?null:{parent:at._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Dr(t,null),yi(),es(t),e!==null&&va(e,t,l,!0),null}function Nr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ji(e,t,n,l,a){return cl(t),n=bi(e,t,n,l,void 0,a),l=_i(),e!==null&&!it?(Si(e,t,a),xn(e,t,a)):(Ae&&l&&li(t),t.flags|=1,dt(e,t,n,a),t.child)}function ps(e,t,n,l,a,r){return cl(t),t.updateQueue=null,n=mo(t,l,n,a),ho(e),l=_i(),e!==null&&!it?(Si(e,t,r),xn(e,t,r)):(Ae&&l&&li(t),t.flags|=1,dt(e,t,n,r),t.child)}function gs(e,t,n,l,a){if(cl(t),t.stateNode===null){var r=Vl,o=n.contextType;typeof o=="object"&&o!==null&&(r=gt(o)),r=new n(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bi,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},hi(t),o=n.contextType,r.context=typeof o=="object"&&o!==null?gt(o):Vl,r.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Gi(t,n,o,l),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Bi.enqueueReplaceState(r,r.state,null),Ra(t,l,r,a),Ta(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,_=fl(n,h);r.props=_;var O=r.context,q=n.contextType;o=Vl,typeof q=="object"&&q!==null&&(o=gt(q));var Q=n.getDerivedStateFromProps;q=typeof Q=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||O!==o)&&ns(t,r,l,o),Vn=!1;var E=t.memoizedState;r.state=E,Ra(t,l,r,a),Ta(),O=t.memoizedState,h||E!==O||Vn?(typeof Q=="function"&&(Gi(t,n,Q,l),O=t.memoizedState),(_=Vn||ts(t,n,_,l,E,O,o))?(q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=O),r.props=l,r.state=O,r.context=o,l=_):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,mi(e,t),o=t.memoizedProps,q=fl(n,o),r.props=q,Q=t.pendingProps,E=r.context,O=n.contextType,_=Vl,typeof O=="object"&&O!==null&&(_=gt(O)),h=n.getDerivedStateFromProps,(O=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==Q||E!==_)&&ns(t,r,l,_),Vn=!1,E=t.memoizedState,r.state=E,Ra(t,l,r,a),Ta();var w=t.memoizedState;o!==Q||E!==w||Vn||e!==null&&e.dependencies!==null&&Tr(e.dependencies)?(typeof h=="function"&&(Gi(t,n,h,l),w=t.memoizedState),(q=Vn||ts(t,n,q,l,E,w,_)||e!==null&&e.dependencies!==null&&Tr(e.dependencies))?(O||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,w,_),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,w,_)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=_,l=q):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Nr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=kl(t,e.child,null,a),t.child=kl(t,null,n,a)):dt(e,t,n,a),t.memoizedState=r.state,e=t.child):e=xn(e,t,a),e}function ys(e,t,n,l){return ga(),t.flags|=256,dt(e,t,n,l),t.child}var Yi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xi(e){return{baseLanes:e,cachePool:lo()}}function ki(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function vs(e,t,n){var l=t.pendingProps,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(rt.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(a?Gn(t):Bn(),Ae){var h=We,_;if(_=h){e:{for(_=h,h=en;_.nodeType!==8;){if(!h){h=null;break e}if(_=Wt(_.nextSibling),_===null){h=null;break e}}h=_}h!==null?(t.memoizedState={dehydrated:h,treeContext:ll!==null?{id:hn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},_=At(18,null,null,0),_.stateNode=h,_.return=t,t.child=_,_t=t,We=null,_=!0):_=!1}_||ul(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return T0(h)?t.lanes=32:t.lanes=536870912,null;vn(t)}return h=l.children,l=l.fallback,a?(Bn(),a=t.mode,h=Zr({mode:"hidden",children:h},a),l=nl(l,a,n,null),h.return=t,l.return=t,h.sibling=l,t.child=h,a=t.child,a.memoizedState=Xi(n),a.childLanes=ki(e,o,n),t.memoizedState=Yi,l):(Gn(t),qi(t,h))}if(_=e.memoizedState,_!==null&&(h=_.dehydrated,h!==null)){if(r)t.flags&256?(Gn(t),t.flags&=-257,t=Ni(e,t,n)):t.memoizedState!==null?(Bn(),t.child=e.child,t.flags|=128,t=null):(Bn(),a=l.fallback,h=t.mode,l=Zr({mode:"visible",children:l.children},h),a=nl(a,h,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,kl(t,e.child,null,n),l=t.child,l.memoizedState=Xi(n),l.childLanes=ki(e,o,n),t.memoizedState=Yi,t=a);else if(Gn(t),T0(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var O=o.dgst;o=O,l=Error(i(419)),l.stack="",l.digest=o,ya({value:l,source:null,stack:null}),t=Ni(e,t,n)}else if(it||va(e,t,n,!1),o=(n&e.childLanes)!==0,it||o){if(o=qe,o!==null&&(l=n&-n,l=(l&42)!==0?1:Ru(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==_.retryLane))throw _.retryLane=l,Ol(e,l),Ht(o,e,l),os;h.data==="$?"||i0(),t=Ni(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,We=Wt(h.nextSibling),_t=t,Ae=!0,rl=null,en=!1,e!==null&&(Xt[kt++]=hn,Xt[kt++]=mn,Xt[kt++]=ll,hn=e.id,mn=e.overflow,ll=t),t=qi(t,l.children),t.flags|=4096);return t}return a?(Bn(),a=l.fallback,h=t.mode,_=e.child,O=_.sibling,l=dn(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,O!==null?a=dn(O,a):(a=nl(a,h,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,h=e.child.memoizedState,h===null?h=Xi(n):(_=h.cachePool,_!==null?(O=at._currentValue,_=_.parent!==O?{parent:O,pool:O}:_):_=lo(),h={baseLanes:h.baseLanes|n,cachePool:_}),a.memoizedState=h,a.childLanes=ki(e,o,n),t.memoizedState=Yi,l):(Gn(t),n=e.child,e=n.sibling,n=dn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function qi(e,t){return t=Zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zr(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ni(e,t,n){return kl(t,e.child,null,n),e=qi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xs(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ii(e.return,t,n)}function Zi(e,t,n,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a)}function bs(e,t,n){var l=t.pendingProps,a=l.revealOrder,r=l.tail;if(dt(e,t,l.children,n),l=rt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xs(e,n,t);else if(e.tag===19)xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(N(rt,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Zi(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Xr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Zi(t,!0,n,null,r);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(va(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Li(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tr(e)))}function J1(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),On(t,at,e.memoizedState.cache),ga();break;case 27:case 5:xt(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:On(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vs(e,t,n):(Gn(t),e=xn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(va(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return bs(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(rt,rt.current),l)break;return null;case 22:case 23:return t.lanes=0,hs(e,t,n);case 24:On(t,at,e.memoizedState.cache)}return xn(e,t,n)}function _s(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!Li(e,n)&&(t.flags&128)===0)return it=!1,J1(e,t,n);it=(e.flags&131072)!==0}else it=!1,Ae&&(t.flags&1048576)!==0&&Wc(t,Cr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")ei(l)?(e=fl(l,e),t.tag=1,t=gs(null,t,l,e,n)):(t.tag=0,t=ji(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===K){t.tag=11,t=ss(null,t,l,e,n);break e}else if(a===Y){t.tag=14,t=fs(null,t,l,e,n);break e}}throw t=Re(l)||l,Error(i(306,t,""))}}return t;case 0:return ji(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=fl(l,t.pendingProps),gs(e,t,l,a,n);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var r=t.memoizedState;a=r.element,mi(e,t),Ra(t,l,null,n);var o=t.memoizedState;if(l=o.cache,On(t,at,l),l!==r.cache&&ci(t,[at],n,!0),Ta(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ys(e,t,l,n);break e}else if(l!==a){a=jt(Error(i(424)),t),ya(a),t=ys(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=Wt(e.firstChild),_t=t,Ae=!0,rl=null,en=!0,n=Io(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ga(),l===a){t=xn(e,t,n);break e}dt(e,t,l,n)}t=t.child}return t;case 26:return Nr(e,t),e===null?(n=Df(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,l=au(ie.current).createElement(n),l[pt]=t,l[St]=e,mt(l,n,e),ut(l),t.stateNode=l):t.memoizedState=Df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xt(t),e===null&&Ae&&(l=t.stateNode=Cf(t.type,t.pendingProps,ie.current),_t=t,en=!0,a=We,Ln(t.type)?(R0=a,We=Wt(l.firstChild)):We=a),dt(e,t,t.pendingProps.children,n),Nr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((a=l=We)&&(l=C3(l,t.type,t.pendingProps,en),l!==null?(t.stateNode=l,_t=t,We=Wt(l.firstChild),en=!1,a=!0):a=!1),a||ul(t)),xt(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,_0(a,r)?l=null:o!==null&&_0(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=bi(e,t,k1,null,null,n),Qa._currentValue=a),Nr(e,t),dt(e,t,l,n),t.child;case 6:return e===null&&Ae&&((e=n=We)&&(n=T3(n,t.pendingProps,en),n!==null?(t.stateNode=n,_t=t,We=null,e=!0):e=!1),e||ul(t)),null;case 13:return vs(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=kl(t,null,l,n):dt(e,t,l,n),t.child;case 11:return ss(e,t,t.type,t.pendingProps,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,On(t,t.type,l.value),dt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,cl(t),a=gt(a),l=l(a),t.flags|=1,dt(e,t,l,n),t.child;case 14:return fs(e,t,t.type,t.pendingProps,n);case 15:return ds(e,t,t.type,t.pendingProps,n);case 19:return bs(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Zr(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=dn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return hs(e,t,n);case 24:return cl(t),l=gt(at),e===null?(a=fi(),a===null&&(a=qe,r=oi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:l,cache:a},hi(t),On(t,at,a)):((e.lanes&n)!==0&&(mi(e,t),Ra(t,null,null,n),Ta()),a=e.memoizedState,r=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),On(t,at,l)):(l=r.cache,On(t,at,l),l!==a.cache&&ci(t,[at],n,!0))),dt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function bn(e){e.flags|=4}function Ss(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vf(t)){if(t=qt.current,t!==null&&((De&4194048)===De?tn!==null:(De&62914560)!==De&&(De&536870912)===0||t!==tn))throw Sa=di,ao;e.flags|=8192}}function Lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ur():536870912,e.lanes|=t,Ll|=t)}function Ea(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function W1(e,t,n){var l=t.pendingProps;switch(ai(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Qe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),gn(at),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ic())),Qe(t),null;case 26:return n=t.memoizedState,e===null?(bn(t),n!==null?(Qe(t),Ss(t,n)):(Qe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(bn(t),Qe(t),Ss(t,n)):(Qe(t),t.flags&=-16777217):(e.memoizedProps!==l&&bn(t),Qe(t),t.flags&=-16777217),null;case 27:ft(t),n=ie.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Qe(t),null}e=I.current,pa(t)?Fc(t):(e=Cf(a,l,n),t.stateNode=e,bn(t))}return Qe(t),null;case 5:if(ft(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Qe(t),null}if(e=I.current,pa(t))Fc(t);else{switch(a=au(ie.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[pt]=t,e[St]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(mt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&bn(t)}}return Qe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=ie.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=_t,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||gf(e.nodeValue,n)),e||ul(t)}else e=au(e).createTextNode(l),e[pt]=t,t.stateNode=e}return Qe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[pt]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),a=!1}else a=Ic(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(vn(t),t):(vn(t),null)}if(vn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Lr(t,t.updateQueue),Qe(t),null;case 4:return He(),e===null&&g0(t.stateNode.containerInfo),Qe(t),null;case 10:return gn(t.type),Qe(t),null;case 19:if(L(rt),a=t.memoizedState,a===null)return Qe(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)Ea(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Xr(e),r!==null){for(t.flags|=128,Ea(a,!1),e=r.updateQueue,t.updateQueue=e,Lr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Jc(n,e),n=n.sibling;return N(rt,rt.current&1|2),t.child}e=e.sibling}a.tail!==null&&oe()>Kr&&(t.flags|=128,l=!0,Ea(a,!1),t.lanes=4194304)}else{if(!l)if(e=Xr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Lr(t,e),Ea(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Ae)return Qe(t),null}else 2*oe()-a.renderingStartTime>Kr&&n!==536870912&&(t.flags|=128,l=!0,Ea(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=oe(),t.sibling=null,e=rt.current,N(rt,l?e&1|2:e&1),t):(Qe(t),null);case 22:case 23:return vn(t),vi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),n=t.updateQueue,n!==null&&Lr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&L(ol),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(at),Qe(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function F1(e,t){switch(ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(at),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ft(t),null;case 13:if(vn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(rt),null;case 4:return He(),null;case 10:return gn(t.type),null;case 22:case 23:return vn(t),vi(),e!==null&&L(ol),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(at),null;case 25:return null;default:return null}}function Cs(e,t){switch(ai(t),t.tag){case 3:gn(at),He();break;case 26:case 27:case 5:ft(t);break;case 4:He();break;case 13:vn(t);break;case 19:L(rt);break;case 10:gn(t.type);break;case 22:case 23:vn(t),vi(),e!==null&&L(ol);break;case 24:gn(at)}}function wa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var r=n.create,o=n.inst;l=r(),o.destroy=l}n=n.next}while(n!==a)}}catch(h){Xe(t,t.return,h)}}function Un(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&e)===e){var o=l.inst,h=o.destroy;if(h!==void 0){o.destroy=void 0,a=t;var _=n,O=h;try{O()}catch(q){Xe(a,_,q)}}}l=l.next}while(l!==r)}}catch(q){Xe(t,t.return,q)}}function Ts(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{so(t,n)}catch(l){Xe(e,e.return,l)}}}function Rs(e,t,n){n.props=fl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Xe(e,t,l)}}function Ha(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Xe(e,t,a)}}function nn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Xe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Xe(e,t,a)}else n.current=null}function Ds(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Xe(e,e.return,a)}}function Pi(e,t,n){try{var l=e.stateNode;v3(l,e.type,n,t),l[St]=t}catch(a){Xe(e,e.return,a)}}function zs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ln(e.type)||e.tag===4}function Qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ln(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lu));else if(l!==4&&(l===27&&Ln(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Pr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Ln(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Pr(e,t,n),e=e.sibling;e!==null;)Pr(e,t,n),e=e.sibling}function Ms(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);mt(t,l,n),t[pt]=e,t[St]=n}catch(r){Xe(e,e.return,r)}}var _n=!1,tt=!1,Ji=!1,As=typeof WeakSet=="function"?WeakSet:Set,ct=null;function $1(e,t){if(e=e.containerInfo,x0=su,e=Yc(e),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,h=-1,_=-1,O=0,q=0,Q=e,E=null;t:for(;;){for(var w;Q!==n||a!==0&&Q.nodeType!==3||(h=o+a),Q!==r||l!==0&&Q.nodeType!==3||(_=o+l),Q.nodeType===3&&(o+=Q.nodeValue.length),(w=Q.firstChild)!==null;)E=Q,Q=w;for(;;){if(Q===e)break t;if(E===n&&++O===a&&(h=o),E===r&&++q===l&&(_=o),(w=Q.nextSibling)!==null)break;Q=E,E=Q.parentNode}Q=w}n=h===-1||_===-1?null:{start:h,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(b0={focusedElem:e,selectionRange:n},su=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,l=n.stateNode;try{var me=fl(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(me,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Xe(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)C0(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":C0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function Os(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),l&4&&wa(5,n);break;case 1:if(jn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Xe(n,n.return,o)}else{var a=fl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Xe(n,n.return,o)}}l&64&&Ts(n),l&512&&Ha(n,n.return);break;case 3:if(jn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{so(e,t)}catch(o){Xe(n,n.return,o)}}break;case 27:t===null&&l&4&&Ms(n);case 26:case 5:jn(e,n),t===null&&l&4&&Ds(n),l&512&&Ha(n,n.return);break;case 12:jn(e,n);break;case 13:jn(e,n),l&4&&ws(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=i3.bind(null,n),R3(e,n))));break;case 22:if(l=n.memoizedState!==null||_n,!l){t=t!==null&&t.memoizedState!==null||tt,a=_n;var r=tt;_n=l,(tt=t)&&!r?Yn(e,n,(n.subtreeFlags&8772)!==0):jn(e,n),_n=a,tt=r}break;case 30:break;default:jn(e,n)}}function Vs(e){var t=e.alternate;t!==null&&(e.alternate=null,Vs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Rt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Es(e,t,n),n=n.sibling}function Es(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Gt,n)}catch{}switch(n.tag){case 26:tt||nn(n,t),Sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||nn(n,t);var l=Pe,a=Rt;Ln(n.type)&&(Pe=n.stateNode,Rt=!1),Sn(e,t,n),Na(n.stateNode),Pe=l,Rt=a;break;case 5:tt||nn(n,t);case 6:if(l=Pe,a=Rt,Pe=null,Sn(e,t,n),Pe=l,Rt=a,Pe!==null)if(Rt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(r){Xe(n,t,r)}else try{Pe.removeChild(n.stateNode)}catch(r){Xe(n,t,r)}break;case 18:Pe!==null&&(Rt?(e=Pe,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fa(e)):_f(Pe,n.stateNode));break;case 4:l=Pe,a=Rt,Pe=n.stateNode.containerInfo,Rt=!0,Sn(e,t,n),Pe=l,Rt=a;break;case 0:case 11:case 14:case 15:tt||Un(2,n,t),tt||Un(4,n,t),Sn(e,t,n);break;case 1:tt||(nn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Rs(n,t,l)),Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:tt=(l=tt)||n.memoizedState!==null,Sn(e,t,n),tt=l;break;default:Sn(e,t,n)}}function ws(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fa(e)}catch(n){Xe(t,t.return,n)}}function I1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new As),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new As),t;default:throw Error(i(435,e.tag))}}function Wi(e,t){var n=I1(e);t.forEach(function(l){var a=c3.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function Ot(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],r=e,o=t,h=o;e:for(;h!==null;){switch(h.tag){case 27:if(Ln(h.type)){Pe=h.stateNode,Rt=!1;break e}break;case 5:Pe=h.stateNode,Rt=!1;break e;case 3:case 4:Pe=h.stateNode.containerInfo,Rt=!0;break e}h=h.return}if(Pe===null)throw Error(i(160));Es(r,o,a),Pe=null,Rt=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Hs(t,e),t=t.sibling}var Jt=null;function Hs(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(t,e),Vt(e),l&4&&(Un(3,e,e.return),wa(3,e),Un(5,e,e.return));break;case 1:Ot(t,e),Vt(e),l&512&&(tt||n===null||nn(n,n.return)),l&64&&_n&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Jt;if(Ot(t,e),Vt(e),l&512&&(tt||n===null||nn(n,n.return)),l&4){var r=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[aa]||r[pt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),mt(r,l,n),r[pt]=e,ut(r),l=r;break e;case"link":var o=Af("link","href",a).get(l+(n.href||""));if(o){for(var h=0;h<o.length;h++)if(r=o[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(h,1);break t}}r=a.createElement(l),mt(r,l,n),a.head.appendChild(r);break;case"meta":if(o=Af("meta","content",a).get(l+(n.content||""))){for(h=0;h<o.length;h++)if(r=o[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(h,1);break t}}r=a.createElement(l),mt(r,l,n),a.head.appendChild(r);break;default:throw Error(i(468,l))}r[pt]=e,ut(r),l=r}e.stateNode=l}else Of(a,e.type,e.stateNode);else e.stateNode=Mf(a,l,e.memoizedProps);else r!==l?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,l===null?Of(a,e.type,e.stateNode):Mf(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pi(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ot(t,e),Vt(e),l&512&&(tt||n===null||nn(n,n.return)),n!==null&&l&4&&Pi(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ot(t,e),Vt(e),l&512&&(tt||n===null||nn(n,n.return)),e.flags&32){a=e.stateNode;try{Cl(a,"")}catch(w){Xe(e,e.return,w)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Pi(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ji=!0);break;case 6:if(Ot(t,e),Vt(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(w){Xe(e,e.return,w)}}break;case 3:if(iu=null,a=Jt,Jt=ru(t.containerInfo),Ot(t,e),Jt=a,Vt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(t.containerInfo)}catch(w){Xe(e,e.return,w)}Ji&&(Ji=!1,Gs(e));break;case 4:l=Jt,Jt=ru(e.stateNode.containerInfo),Ot(t,e),Vt(e),Jt=l;break;case 12:Ot(t,e),Vt(e);break;case 13:Ot(t,e),Vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(n0=oe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wi(e,l)));break;case 22:a=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,O=_n,q=tt;if(_n=O||a,tt=q||_,Ot(t,e),tt=q,_n=O,Vt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||_||_n||tt||dl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(r=_.stateNode,a)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{h=_.stateNode;var Q=_.memoizedProps.style,E=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;h.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(w){Xe(_,_.return,w)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=a?"":_.memoizedProps}catch(w){Xe(_,_.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Wi(e,n))));break;case 19:Ot(t,e),Vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wi(e,l)));break;case 30:break;case 21:break;default:Ot(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(zs(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,r=Qi(e);Pr(e,r,a);break;case 5:var o=n.stateNode;n.flags&32&&(Cl(o,""),n.flags&=-33);var h=Qi(e);Pr(e,h,o);break;case 3:case 4:var _=n.stateNode.containerInfo,O=Qi(e);Ki(e,O,_);break;default:throw Error(i(161))}}catch(q){Xe(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Os(e,t.alternate,t),t=t.sibling}function dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Un(4,t,t.return),dl(t);break;case 1:nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Rs(t,t.return,n),dl(t);break;case 27:Na(t.stateNode);case 26:case 5:nn(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}e=e.sibling}}function Yn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Yn(a,r,n),wa(4,r);break;case 1:if(Yn(a,r,n),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(O){Xe(l,l.return,O)}if(l=r,a=l.updateQueue,a!==null){var h=l.stateNode;try{var _=a.shared.hiddenCallbacks;if(_!==null)for(a.shared.hiddenCallbacks=null,a=0;a<_.length;a++)oo(_[a],h)}catch(O){Xe(l,l.return,O)}}n&&o&64&&Ts(r),Ha(r,r.return);break;case 27:Ms(r);case 26:case 5:Yn(a,r,n),n&&l===null&&o&4&&Ds(r),Ha(r,r.return);break;case 12:Yn(a,r,n);break;case 13:Yn(a,r,n),n&&o&4&&ws(a,r);break;case 22:r.memoizedState===null&&Yn(a,r,n),Ha(r,r.return);break;case 30:break;default:Yn(a,r,n)}t=t.sibling}}function Fi(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&xa(n))}function $i(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xa(e))}function ln(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bs(e,t,n,l),t=t.sibling}function Bs(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,l),a&2048&&wa(9,t);break;case 1:ln(e,t,n,l);break;case 3:ln(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xa(e)));break;case 12:if(a&2048){ln(e,t,n,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,h=r.onPostCommit;typeof h=="function"&&h(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Xe(t,t.return,_)}}else ln(e,t,n,l);break;case 13:ln(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?ln(e,t,n,l):Ga(e,t):r._visibility&2?ln(e,t,n,l):(r._visibility|=2,ql(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&Fi(o,t);break;case 24:ln(e,t,n,l),a&2048&&$i(t.alternate,t);break;default:ln(e,t,n,l)}}function ql(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,h=n,_=l,O=o.flags;switch(o.tag){case 0:case 11:case 15:ql(r,o,h,_,a),wa(8,o);break;case 23:break;case 22:var q=o.stateNode;o.memoizedState!==null?q._visibility&2?ql(r,o,h,_,a):Ga(r,o):(q._visibility|=2,ql(r,o,h,_,a)),a&&O&2048&&Fi(o.alternate,o);break;case 24:ql(r,o,h,_,a),a&&O&2048&&$i(o.alternate,o);break;default:ql(r,o,h,_,a)}t=t.sibling}}function Ga(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Ga(n,l),a&2048&&Fi(l.alternate,l);break;case 24:Ga(n,l),a&2048&&$i(l.alternate,l);break;default:Ga(n,l)}t=t.sibling}}var Ba=8192;function Nl(e){if(e.subtreeFlags&Ba)for(e=e.child;e!==null;)Us(e),e=e.sibling}function Us(e){switch(e.tag){case 26:Nl(e),e.flags&Ba&&e.memoizedState!==null&&j3(Jt,e.memoizedState,e.memoizedProps);break;case 5:Nl(e);break;case 3:case 4:var t=Jt;Jt=ru(e.stateNode.containerInfo),Nl(e),Jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ba,Ba=16777216,Nl(e),Ba=t):Nl(e));break;default:Nl(e)}}function js(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ua(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ct=l,Xs(l,e)}js(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ys(e),e=e.sibling}function Ys(e){switch(e.tag){case 0:case 11:case 15:Ua(e),e.flags&2048&&Un(9,e,e.return);break;case 3:Ua(e);break;case 12:Ua(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qr(e)):Ua(e);break;default:Ua(e)}}function Qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ct=l,Xs(l,e)}js(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Un(8,t,t.return),Qr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qr(t));break;default:Qr(t)}e=e.sibling}}function Xs(e,t){for(;ct!==null;){var n=ct;switch(n.tag){case 0:case 11:case 15:Un(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ct=l;else e:for(n=e;ct!==null;){l=ct;var a=l.sibling,r=l.return;if(Vs(l),l===n){ct=null;break e}if(a!==null){a.return=r,ct=a;break e}ct=r}}}var e3={getCacheForType:function(e){var t=gt(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},t3=typeof WeakMap=="function"?WeakMap:Map,Ve=0,qe=null,Ce=null,De=0,Ee=0,Et=null,Xn=!1,Zl=!1,Ii=!1,Cn=0,Fe=0,kn=0,hl=0,e0=0,Nt=0,Ll=0,ja=null,Dt=null,t0=!1,n0=0,Kr=1/0,Jr=null,qn=null,ht=0,Nn=null,Pl=null,Ql=0,l0=0,a0=null,ks=null,Ya=0,r0=null;function wt(){if((Ve&2)!==0&&De!==0)return De&-De;if(H.T!==null){var e=Hl;return e!==0?e:d0()}return nc()}function qs(){Nt===0&&(Nt=(De&536870912)===0||Ae?rr():536870912);var e=qt.current;return e!==null&&(e.flags|=32),Nt}function Ht(e,t,n){(e===qe&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Kl(e,0),Zn(e,De,Nt,!1)),la(e,n),((Ve&2)===0||e!==qe)&&(e===qe&&((Ve&2)===0&&(hl|=n),Fe===4&&Zn(e,De,Nt,!1)),an(e))}function Ns(e,t,n){if((Ve&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Fn(e,t),a=l?a3(e,t):c0(e,t,!0),r=l;do{if(a===0){Zl&&!l&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!n3(n)){a=c0(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var h=e;a=ja;var _=h.current.memoizedState.isDehydrated;if(_&&(Kl(h,o).flags|=256),o=c0(h,o,!1),o!==2){if(Ii&&!_){h.errorRecoveryDisabledLanes|=r,hl|=r,a=4;break e}r=Dt,Dt=a,r!==null&&(Dt===null?Dt=r:Dt.push.apply(Dt,r))}a=o}if(r=!1,a!==2)continue}}if(a===1){Kl(e,0),Zn(e,t,0,!0);break}e:{switch(l=e,r=a,r){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Zn(l,t,Nt,!Xn);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=n0+300-oe(),10<a)){if(Zn(l,t,Nt,!Xn),pl(l,0,!0)!==0)break e;l.timeoutHandle=xf(Zs.bind(null,l,n,Dt,Jr,t0,t,Nt,hl,Ll,Xn,r,2,-0,0),a);break e}Zs(l,n,Dt,Jr,t0,t,Nt,hl,Ll,Xn,r,0,-0,0)}}break}while(!0);an(e)}function Zs(e,t,n,l,a,r,o,h,_,O,q,Q,E,w){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Pa={stylesheets:null,count:0,unsuspend:U3},Us(t),Q=Y3(),Q!==null)){e.cancelPendingCommit=Q(Fs.bind(null,e,t,r,n,l,a,o,h,_,q,1,E,w)),Zn(e,r,o,!O);return}Fs(e,t,r,n,l,a,o,h,_)}function n3(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],r=a.getSnapshot;a=a.value;try{if(!Mt(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,l){t&=~e0,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var r=31-ze(a),o=1<<r;l[r]=-1,a&=~o}n!==0&&ec(e,n,t)}function Wr(){return(Ve&6)===0?(Xa(0),!1):!0}function u0(){if(Ce!==null){if(Ee===0)var e=Ce.return;else e=Ce,pn=il=null,Ci(e),Xl=null,Oa=0,e=Ce;for(;e!==null;)Cs(e.alternate,e),e=e.return;Ce=null}}function Kl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,b3(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),u0(),qe=e,Ce=n=dn(e.current,null),De=t,Ee=0,Et=null,Xn=!1,Zl=Fn(e,t),Ii=!1,Ll=Nt=e0=hl=kn=Fe=0,Dt=ja=null,t0=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-ze(l),r=1<<a;t|=e[a],l&=~r}return Cn=t,vr(),n}function Ls(e,t){be=null,H.H=Ur,t===_a||t===zr?(t=io(),Ee=3):t===ao?(t=io(),Ee=4):Ee=t===os?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,Ce===null&&(Fe=1,qr(e,jt(t,e.current)))}function Ps(){var e=H.H;return H.H=Ur,e===null?Ur:e}function Qs(){var e=H.A;return H.A=e3,e}function i0(){Fe=4,Xn||(De&4194048)!==De&&qt.current!==null||(Zl=!0),(kn&134217727)===0&&(hl&134217727)===0||qe===null||Zn(qe,De,Nt,!1)}function c0(e,t,n){var l=Ve;Ve|=2;var a=Ps(),r=Qs();(qe!==e||De!==t)&&(Jr=null,Kl(e,t)),t=!1;var o=Fe;e:do try{if(Ee!==0&&Ce!==null){var h=Ce,_=Et;switch(Ee){case 8:u0(),o=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(t=!0);var O=Ee;if(Ee=0,Et=null,Jl(e,h,_,O),n&&Zl){o=0;break e}break;default:O=Ee,Ee=0,Et=null,Jl(e,h,_,O)}}l3(),o=Fe;break}catch(q){Ls(e,q)}while(!0);return t&&e.shellSuspendCounter++,pn=il=null,Ve=l,H.H=a,H.A=r,Ce===null&&(qe=null,De=0,vr()),o}function l3(){for(;Ce!==null;)Ks(Ce)}function a3(e,t){var n=Ve;Ve|=2;var l=Ps(),a=Qs();qe!==e||De!==t?(Jr=null,Kr=oe()+500,Kl(e,t)):Zl=Fn(e,t);e:do try{if(Ee!==0&&Ce!==null){t=Ce;var r=Et;t:switch(Ee){case 1:Ee=0,Et=null,Jl(e,t,r,1);break;case 2:case 9:if(ro(r)){Ee=0,Et=null,Js(t);break}t=function(){Ee!==2&&Ee!==9||qe!==e||(Ee=7),an(e)},r.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:ro(r)?(Ee=0,Et=null,Js(t)):(Ee=0,Et=null,Jl(e,t,r,7));break;case 5:var o=null;switch(Ce.tag){case 26:o=Ce.memoizedState;case 5:case 27:var h=Ce;if(!o||Vf(o)){Ee=0,Et=null;var _=h.sibling;if(_!==null)Ce=_;else{var O=h.return;O!==null?(Ce=O,Fr(O)):Ce=null}break t}}Ee=0,Et=null,Jl(e,t,r,5);break;case 6:Ee=0,Et=null,Jl(e,t,r,6);break;case 8:u0(),Fe=6;break e;default:throw Error(i(462))}}r3();break}catch(q){Ls(e,q)}while(!0);return pn=il=null,H.H=l,H.A=a,Ve=n,Ce!==null?0:(qe=null,De=0,vr(),Fe)}function r3(){for(;Ce!==null&&!le();)Ks(Ce)}function Ks(e){var t=_s(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?Fr(e):Ce=t}function Js(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ps(n,t,t.pendingProps,t.type,void 0,De);break;case 11:t=ps(n,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:Ci(t);default:Cs(n,t),t=Ce=Jc(t,Cn),t=_s(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?Fr(e):Ce=t}function Jl(e,t,n,l){pn=il=null,Ci(t),Xl=null,Oa=0;var a=t.return;try{if(K1(e,a,t,n,De)){Fe=1,qr(e,jt(n,e.current)),Ce=null;return}}catch(r){if(a!==null)throw Ce=a,r;Fe=1,qr(e,jt(n,e.current)),Ce=null;return}t.flags&32768?(Ae||l===1?e=!0:Zl||(De&536870912)!==0?e=!1:(Xn=e=!0,(l===2||l===9||l===3||l===6)&&(l=qt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ws(t,e)):Fr(t)}function Fr(e){var t=e;do{if((t.flags&32768)!==0){Ws(t,Xn);return}e=t.return;var n=W1(t.alternate,t,Cn);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Fe===0&&(Fe=5)}function Ws(e,t){do{var n=F1(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);Fe=6,Ce=null}function Fs(e,t,n,l,a,r,o,h,_){e.cancelPendingCommit=null;do $r();while(ht!==0);if((Ve&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(r=t.lanes|t.childLanes,r|=$u,U2(e,n,r,o,h,_),e===qe&&(Ce=qe=null,De=0),Pl=t,Nn=e,Ql=n,l0=r,a0=a,ks=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,o3(Le,function(){return nf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,a=J.p,J.p=2,o=Ve,Ve|=4;try{$1(e,t,n)}finally{Ve=o,J.p=a,H.T=l}}ht=1,$s(),Is(),ef()}}function $s(){if(ht===1){ht=0;var e=Nn,t=Pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var l=J.p;J.p=2;var a=Ve;Ve|=4;try{Hs(t,e);var r=b0,o=Yc(e.containerInfo),h=r.focusedElem,_=r.selectionRange;if(o!==h&&h&&h.ownerDocument&&jc(h.ownerDocument.documentElement,h)){if(_!==null&&Qu(h)){var O=_.start,q=_.end;if(q===void 0&&(q=O),"selectionStart"in h)h.selectionStart=O,h.selectionEnd=Math.min(q,h.value.length);else{var Q=h.ownerDocument||document,E=Q&&Q.defaultView||window;if(E.getSelection){var w=E.getSelection(),me=h.textContent.length,fe=Math.min(_.start,me),je=_.end===void 0?fe:Math.min(_.end,me);!w.extend&&fe>je&&(o=je,je=fe,fe=o);var z=Uc(h,fe),R=Uc(h,je);if(z&&R&&(w.rangeCount!==1||w.anchorNode!==z.node||w.anchorOffset!==z.offset||w.focusNode!==R.node||w.focusOffset!==R.offset)){var A=Q.createRange();A.setStart(z.node,z.offset),w.removeAllRanges(),fe>je?(w.addRange(A),w.extend(R.node,R.offset)):(A.setEnd(R.node,R.offset),w.addRange(A))}}}}for(Q=[],w=h;w=w.parentNode;)w.nodeType===1&&Q.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<Q.length;h++){var Z=Q[h];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}su=!!x0,b0=x0=null}finally{Ve=a,J.p=l,H.T=n}}e.current=t,ht=2}}function Is(){if(ht===2){ht=0;var e=Nn,t=Pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var l=J.p;J.p=2;var a=Ve;Ve|=4;try{Os(e,t.alternate,t)}finally{Ve=a,J.p=l,H.T=n}}ht=3}}function ef(){if(ht===4||ht===3){ht=0,ee();var e=Nn,t=Pl,n=Ql,l=ks;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,Pl=Nn=null,tf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(qn=null),Du(n),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Gt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,a=J.p,J.p=2,H.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var h=l[o];r(h.value,{componentStack:h.stack})}}finally{H.T=t,J.p=a}}(Ql&3)!==0&&$r(),an(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===r0?Ya++:(Ya=0,r0=e):Ya=0,Xa(0)}}function tf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xa(t)))}function $r(e){return $s(),Is(),ef(),nf()}function nf(){if(ht!==5)return!1;var e=Nn,t=l0;l0=0;var n=Du(Ql),l=H.T,a=J.p;try{J.p=32>n?32:n,H.T=null,n=a0,a0=null;var r=Nn,o=Ql;if(ht=0,Pl=Nn=null,Ql=0,(Ve&6)!==0)throw Error(i(331));var h=Ve;if(Ve|=4,Ys(r.current),Bs(r,r.current,o,n),Ve=h,Xa(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Gt,r)}catch{}return!0}finally{J.p=a,H.T=l,tf(e,t)}}function lf(e,t,n){t=jt(n,t),t=Ui(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(la(e,2),an(e))}function Xe(e,t,n){if(e.tag===3)lf(e,e,n);else for(;t!==null;){if(t.tag===3){lf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qn===null||!qn.has(l))){e=jt(n,e),n=is(2),l=wn(t,n,2),l!==null&&(cs(n,l,t,e),la(l,2),an(l));break}}t=t.return}}function o0(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new t3;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Ii=!0,a.add(n),e=u3.bind(null,e,t,n),t.then(e,e))}function u3(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,qe===e&&(De&n)===n&&(Fe===4||Fe===3&&(De&62914560)===De&&300>oe()-n0?(Ve&2)===0&&Kl(e,0):e0|=n,Ll===De&&(Ll=0)),an(e)}function af(e,t){t===0&&(t=ur()),e=Ol(e,t),e!==null&&(la(e,t),an(e))}function i3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),af(e,n)}function c3(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),af(e,n)}function o3(e,t){return zn(e,t)}var Ir=null,Wl=null,s0=!1,eu=!1,f0=!1,ml=0;function an(e){e!==Wl&&e.next===null&&(Wl===null?Ir=Wl=e:Wl=Wl.next=e),eu=!0,s0||(s0=!0,f3())}function Xa(e,t){if(!f0&&eu){f0=!0;do for(var n=!1,l=Ir;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var o=l.suspendedLanes,h=l.pingedLanes;r=(1<<31-ze(42|e)+1)-1,r&=a&~(o&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,of(l,r))}else r=De,r=pl(l,l===qe?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Fn(l,r)||(n=!0,of(l,r));l=l.next}while(n);f0=!1}}function s3(){rf()}function rf(){eu=s0=!1;var e=0;ml!==0&&(x3()&&(e=ml),ml=0);for(var t=oe(),n=null,l=Ir;l!==null;){var a=l.next,r=uf(l,t);r===0?(l.next=null,n===null?Ir=a:n.next=a,a===null&&(Wl=n)):(n=l,(e!==0||(r&3)!==0)&&(eu=!0)),l=a}Xa(e)}function uf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-ze(r),h=1<<o,_=a[o];_===-1?((h&n)===0||(h&l)!==0)&&(a[o]=Tu(h,t)):_<=t&&(e.expiredLanes|=h),r&=~h}if(t=qe,n=De,n=pl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rn(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&rn(l),Du(n)){case 2:case 8:n=Ge;break;case 32:n=Le;break;case 268435456:n=Lt;break;default:n=Le}return l=cf.bind(null,e),n=zn(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&rn(l),e.callbackPriority=2,e.callbackNode=null,2}function cf(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var l=De;return l=pl(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ns(e,l,t),uf(e,oe()),e.callbackNode!=null&&e.callbackNode===n?cf.bind(null,e):null)}function of(e,t){if($r())return null;Ns(e,t,!0)}function f3(){_3(function(){(Ve&6)!==0?zn(Ye,s3):rf()})}function d0(){return ml===0&&(ml=rr()),ml}function sf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fr(""+e)}function ff(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function d3(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var r=sf((a[St]||null).action),o=l.submitter;o&&(t=(t=o[St]||null)?sf(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var h=new pr("action","action",null,l,a);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ml!==0){var _=o?ff(a,o):new FormData(a);Ei(n,{pending:!0,data:_,method:a.method,action:r},null,_)}}else typeof r=="function"&&(h.preventDefault(),_=o?ff(a,o):new FormData(a),Ei(n,{pending:!0,data:_,method:a.method,action:r},r,_))},currentTarget:a}]})}}for(var h0=0;h0<Fu.length;h0++){var m0=Fu[h0],h3=m0.toLowerCase(),m3=m0[0].toUpperCase()+m0.slice(1);Kt(h3,"on"+m3)}Kt(qc,"onAnimationEnd"),Kt(Nc,"onAnimationIteration"),Kt(Zc,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(V1,"onTransitionRun"),Kt(E1,"onTransitionStart"),Kt(w1,"onTransitionCancel"),Kt(Lc,"onTransitionEnd"),bl("onMouseEnter",["mouseout","mouseover"]),bl("onMouseLeave",["mouseout","mouseover"]),bl("onPointerEnter",["pointerout","pointerover"]),bl("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ka));function df(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var h=l[o],_=h.instance,O=h.currentTarget;if(h=h.listener,_!==r&&a.isPropagationStopped())break e;r=h,a.currentTarget=O;try{r(a)}catch(q){kr(q)}a.currentTarget=null,r=_}else for(o=0;o<l.length;o++){if(h=l[o],_=h.instance,O=h.currentTarget,h=h.listener,_!==r&&a.isPropagationStopped())break e;r=h,a.currentTarget=O;try{r(a)}catch(q){kr(q)}a.currentTarget=null,r=_}}}}function Te(e,t){var n=t[zu];n===void 0&&(n=t[zu]=new Set);var l=e+"__bubble";n.has(l)||(hf(t,e,2,!1),n.add(l))}function p0(e,t,n){var l=0;t&&(l|=4),hf(n,e,l,t)}var tu="_reactListening"+Math.random().toString(36).slice(2);function g0(e){if(!e[tu]){e[tu]=!0,ac.forEach(function(n){n!=="selectionchange"&&(p3.has(n)||p0(n,!1,e),p0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tu]||(t[tu]=!0,p0("selectionchange",!1,t))}}function hf(e,t,n,l){switch(Uf(t)){case 2:var a=q3;break;case 8:a=N3;break;default:a=O0}n=a.bind(null,t,n,e),a=void 0,!ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function y0(e,t,n,l,a){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var h=l.stateNode.containerInfo;if(h===a)break;if(o===4)for(o=l.return;o!==null;){var _=o.tag;if((_===3||_===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;h!==null;){if(o=yl(h),o===null)return;if(_=o.tag,_===5||_===6||_===26||_===27){l=r=o;continue e}h=h.parentNode}}l=l.return}vc(function(){var O=r,q=Bu(n),Q=[];e:{var E=Pc.get(e);if(E!==void 0){var w=pr,me=e;switch(e){case"keypress":if(hr(n)===0)break e;case"keydown":case"keyup":w=o1;break;case"focusin":me="focus",w=qu;break;case"focusout":me="blur",w=qu;break;case"beforeblur":case"afterblur":w=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=F2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=d1;break;case qc:case Nc:case Zc:w=e1;break;case Lc:w=m1;break;case"scroll":case"scrollend":w=J2;break;case"wheel":w=g1;break;case"copy":case"cut":case"paste":w=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Cc;break;case"toggle":case"beforetoggle":w=v1}var fe=(t&4)!==0,je=!fe&&(e==="scroll"||e==="scrollend"),z=fe?E!==null?E+"Capture":null:E;fe=[];for(var R=O,A;R!==null;){var Z=R;if(A=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||A===null||z===null||(Z=ua(R,z),Z!=null&&fe.push(qa(R,Z,A))),je)break;R=R.return}0<fe.length&&(E=new w(E,me,null,n,q),Q.push({event:E,listeners:fe}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",E&&n!==Gu&&(me=n.relatedTarget||n.fromElement)&&(yl(me)||me[gl]))break e;if((w||E)&&(E=q.window===q?q:(E=q.ownerDocument)?E.defaultView||E.parentWindow:window,w?(me=n.relatedTarget||n.toElement,w=O,me=me?yl(me):null,me!==null&&(je=c(me),fe=me.tag,me!==je||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(w=null,me=O),w!==me)){if(fe=_c,Z="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Cc,Z="onPointerLeave",z="onPointerEnter",R="pointer"),je=w==null?E:ra(w),A=me==null?E:ra(me),E=new fe(Z,R+"leave",w,n,q),E.target=je,E.relatedTarget=A,Z=null,yl(q)===O&&(fe=new fe(z,R+"enter",me,n,q),fe.target=A,fe.relatedTarget=je,Z=fe),je=Z,w&&me)t:{for(fe=w,z=me,R=0,A=fe;A;A=Fl(A))R++;for(A=0,Z=z;Z;Z=Fl(Z))A++;for(;0<R-A;)fe=Fl(fe),R--;for(;0<A-R;)z=Fl(z),A--;for(;R--;){if(fe===z||z!==null&&fe===z.alternate)break t;fe=Fl(fe),z=Fl(z)}fe=null}else fe=null;w!==null&&mf(Q,E,w,fe,!1),me!==null&&je!==null&&mf(Q,je,me,fe,!0)}}e:{if(E=O?ra(O):window,w=E.nodeName&&E.nodeName.toLowerCase(),w==="select"||w==="input"&&E.type==="file")var ae=Vc;else if(Ac(E))if(Ec)ae=M1;else{ae=D1;var Se=R1}else w=E.nodeName,!w||w.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?O&&Hu(O.elementType)&&(ae=Vc):ae=z1;if(ae&&(ae=ae(e,O))){Oc(Q,ae,n,q);break e}Se&&Se(e,E,O),e==="focusout"&&O&&E.type==="number"&&O.memoizedProps.value!=null&&wu(E,"number",E.value)}switch(Se=O?ra(O):window,e){case"focusin":(Ac(Se)||Se.contentEditable==="true")&&(zl=Se,Ku=O,ma=null);break;case"focusout":ma=Ku=zl=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Xc(Q,n,q);break;case"selectionchange":if(O1)break;case"keydown":case"keyup":Xc(Q,n,q)}var ce;if(Zu)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Dl?zc(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(Tc&&n.locale!=="ko"&&(Dl||he!=="onCompositionStart"?he==="onCompositionEnd"&&Dl&&(ce=xc()):(An=q,Yu="value"in An?An.value:An.textContent,Dl=!0)),Se=nu(O,he),0<Se.length&&(he=new Sc(he,e,null,n,q),Q.push({event:he,listeners:Se}),ce?he.data=ce:(ce=Mc(n),ce!==null&&(he.data=ce)))),(ce=b1?_1(e,n):S1(e,n))&&(he=nu(O,"onBeforeInput"),0<he.length&&(Se=new Sc("onBeforeInput","beforeinput",null,n,q),Q.push({event:Se,listeners:he}),Se.data=ce)),d3(Q,e,O,n,q)}df(Q,t)})}function qa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nu(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ua(e,n),a!=null&&l.unshift(qa(e,a,r)),a=ua(e,t),a!=null&&l.push(qa(e,a,r))),e.tag===3)return l;e=e.return}return[]}function Fl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mf(e,t,n,l,a){for(var r=t._reactName,o=[];n!==null&&n!==l;){var h=n,_=h.alternate,O=h.stateNode;if(h=h.tag,_!==null&&_===l)break;h!==5&&h!==26&&h!==27||O===null||(_=O,a?(O=ua(n,r),O!=null&&o.unshift(qa(n,O,_))):a||(O=ua(n,r),O!=null&&o.push(qa(n,O,_)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var g3=/\r\n?/g,y3=/\u0000|\uFFFD/g;function pf(e){return(typeof e=="string"?e:""+e).replace(g3,`
`).replace(y3,"")}function gf(e,t){return t=pf(t),pf(e)===t}function lu(){}function Ue(e,t,n,l,a,r){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Cl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Cl(e,""+l);break;case"className":cr(e,"class",l);break;case"tabIndex":cr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":cr(e,n,l);break;case"style":gc(e,l,r);break;case"data":if(t!=="object"){cr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=fr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",a.name,a,null),Ue(e,t,"formEncType",a.formEncType,a,null),Ue(e,t,"formMethod",a.formMethod,a,null),Ue(e,t,"formTarget",a.formTarget,a,null)):(Ue(e,t,"encType",a.encType,a,null),Ue(e,t,"method",a.method,a,null),Ue(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=fr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=lu);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=fr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),ir(e,"popover",l);break;case"xlinkActuate":sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":sn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":sn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":sn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":sn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ir(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Q2.get(n)||n,ir(e,n,l))}}function v0(e,t,n,l,a,r){switch(n){case"style":gc(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Cl(e,l):(typeof l=="number"||typeof l=="bigint")&&Cl(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=lu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[St]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ir(e,n,l)}}}function mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ue(e,t,r,o,n,null)}}a&&Ue(e,t,"srcSet",n.srcSet,n,null),l&&Ue(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var h=r=o=a=null,_=null,O=null;for(l in n)if(n.hasOwnProperty(l)){var q=n[l];if(q!=null)switch(l){case"name":a=q;break;case"type":o=q;break;case"checked":_=q;break;case"defaultChecked":O=q;break;case"value":r=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,t));break;default:Ue(e,t,l,q,n,null)}}dc(e,r,h,_,O,o,a,!1),or(e);return;case"select":Te("invalid",e),l=o=r=null;for(a in n)if(n.hasOwnProperty(a)&&(h=n[a],h!=null))switch(a){case"value":r=h;break;case"defaultValue":o=h;break;case"multiple":l=h;default:Ue(e,t,a,h,n,null)}t=r,n=o,e.multiple=!!l,t!=null?Sl(e,!!l,t,!1):n!=null&&Sl(e,!!l,n,!0);return;case"textarea":Te("invalid",e),r=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(h=n[o],h!=null))switch(o){case"value":l=h;break;case"defaultValue":a=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:Ue(e,t,o,h,n,null)}mc(e,l,a,r),or(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ue(e,t,_,l,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<ka.length;l++)Te(ka[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(l=n[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ue(e,t,O,l,n,null)}return;default:if(Hu(t)){for(q in n)n.hasOwnProperty(q)&&(l=n[q],l!==void 0&&v0(e,t,q,l,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!=null&&Ue(e,t,h,l,n,null))}function v3(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,o=null,h=null,_=null,O=null,q=null;for(w in n){var Q=n[w];if(n.hasOwnProperty(w)&&Q!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":_=Q;default:l.hasOwnProperty(w)||Ue(e,t,w,null,l,Q)}}for(var E in l){var w=l[E];if(Q=n[E],l.hasOwnProperty(E)&&(w!=null||Q!=null))switch(E){case"type":r=w;break;case"name":a=w;break;case"checked":O=w;break;case"defaultChecked":q=w;break;case"value":o=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(137,t));break;default:w!==Q&&Ue(e,t,E,w,l,Q)}}Eu(e,o,h,_,O,q,r,a);return;case"select":w=o=h=E=null;for(r in n)if(_=n[r],n.hasOwnProperty(r)&&_!=null)switch(r){case"value":break;case"multiple":w=_;default:l.hasOwnProperty(r)||Ue(e,t,r,null,l,_)}for(a in l)if(r=l[a],_=n[a],l.hasOwnProperty(a)&&(r!=null||_!=null))switch(a){case"value":E=r;break;case"defaultValue":h=r;break;case"multiple":o=r;default:r!==_&&Ue(e,t,a,r,l,_)}t=h,n=o,l=w,E!=null?Sl(e,!!n,E,!1):!!l!=!!n&&(t!=null?Sl(e,!!n,t,!0):Sl(e,!!n,n?[]:"",!1));return;case"textarea":w=E=null;for(h in n)if(a=n[h],n.hasOwnProperty(h)&&a!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ue(e,t,h,null,l,a)}for(o in l)if(a=l[o],r=n[o],l.hasOwnProperty(o)&&(a!=null||r!=null))switch(o){case"value":E=a;break;case"defaultValue":w=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==r&&Ue(e,t,o,a,l,r)}hc(e,E,w);return;case"option":for(var me in n)if(E=n[me],n.hasOwnProperty(me)&&E!=null&&!l.hasOwnProperty(me))switch(me){case"selected":e.selected=!1;break;default:Ue(e,t,me,null,l,E)}for(_ in l)if(E=l[_],w=n[_],l.hasOwnProperty(_)&&E!==w&&(E!=null||w!=null))switch(_){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Ue(e,t,_,E,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)E=n[fe],n.hasOwnProperty(fe)&&E!=null&&!l.hasOwnProperty(fe)&&Ue(e,t,fe,null,l,E);for(O in l)if(E=l[O],w=n[O],l.hasOwnProperty(O)&&E!==w&&(E!=null||w!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(137,t));break;default:Ue(e,t,O,E,l,w)}return;default:if(Hu(t)){for(var je in n)E=n[je],n.hasOwnProperty(je)&&E!==void 0&&!l.hasOwnProperty(je)&&v0(e,t,je,void 0,l,E);for(q in l)E=l[q],w=n[q],!l.hasOwnProperty(q)||E===w||E===void 0&&w===void 0||v0(e,t,q,E,l,w);return}}for(var z in n)E=n[z],n.hasOwnProperty(z)&&E!=null&&!l.hasOwnProperty(z)&&Ue(e,t,z,null,l,E);for(Q in l)E=l[Q],w=n[Q],!l.hasOwnProperty(Q)||E===w||E==null&&w==null||Ue(e,t,Q,E,l,w)}var x0=null,b0=null;function au(e){return e.nodeType===9?e:e.ownerDocument}function yf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var S0=null;function x3(){var e=window.event;return e&&e.type==="popstate"?e===S0?!1:(S0=e,!0):(S0=null,!1)}var xf=typeof setTimeout=="function"?setTimeout:void 0,b3=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,_3=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(e){return bf.resolve(null).then(e).catch(S3)}:xf;function S3(e){setTimeout(function(){throw e})}function Ln(e){return e==="head"}function _f(e,t){var n=t,l=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<l&&8>l){n=l;var o=e.ownerDocument;if(n&1&&Na(o.documentElement),n&2&&Na(o.body),n&4)for(n=o.head,Na(n),o=n.firstChild;o;){var h=o.nextSibling,_=o.nodeName;o[aa]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=h}}if(a===0){e.removeChild(r),Fa(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=r}while(n);Fa(t)}function C0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":C0(n),Mu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function C3(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function T3(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function T0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function R3(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var R0=null;function Sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Cf(e,t,n){switch(t=au(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Na(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mu(e)}var Zt=new Map,Tf=new Set;function ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=J.d;J.d={f:D3,r:z3,D:M3,C:A3,L:O3,m:V3,X:w3,S:E3,M:H3};function D3(){var e=Tn.f(),t=Wr();return e||t}function z3(e){var t=vl(e);t!==null&&t.tag===5&&t.type==="form"?No(t):Tn.r(e)}var $l=typeof document>"u"?null:document;function Rf(e,t,n){var l=$l;if(l&&typeof t=="string"&&t){var a=Ut(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Tf.has(a)||(Tf.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),mt(t,"link",e),ut(t),l.head.appendChild(t)))}}function M3(e){Tn.D(e),Rf("dns-prefetch",e,null)}function A3(e,t){Tn.C(e,t),Rf("preconnect",e,t)}function O3(e,t,n){Tn.L(e,t,n);var l=$l;if(l&&e&&t){var a='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ut(n.imageSizes)+'"]')):a+='[href="'+Ut(e)+'"]';var r=a;switch(t){case"style":r=Il(e);break;case"script":r=ea(e)}Zt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(r,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Za(r))||t==="script"&&l.querySelector(La(r))||(t=l.createElement("link"),mt(t,"link",e),ut(t),l.head.appendChild(t)))}}function V3(e,t){Tn.m(e,t);var n=$l;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(e)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ea(e)}if(!Zt.has(r)&&(e=v({rel:"modulepreload",href:e},t),Zt.set(r,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(La(r)))return}l=n.createElement("link"),mt(l,"link",e),ut(l),n.head.appendChild(l)}}}function E3(e,t,n){Tn.S(e,t,n);var l=$l;if(l&&e){var a=xl(l).hoistableStyles,r=Il(e);t=t||"default";var o=a.get(r);if(!o){var h={loading:0,preload:null};if(o=l.querySelector(Za(r)))h.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(r))&&D0(e,n);var _=o=l.createElement("link");ut(_),mt(_,"link",e),_._p=new Promise(function(O,q){_.onload=O,_.onerror=q}),_.addEventListener("load",function(){h.loading|=1}),_.addEventListener("error",function(){h.loading|=2}),h.loading|=4,uu(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:h},a.set(r,o)}}}function w3(e,t){Tn.X(e,t);var n=$l;if(n&&e){var l=xl(n).hoistableScripts,a=ea(e),r=l.get(a);r||(r=n.querySelector(La(a)),r||(e=v({src:e,async:!0},t),(t=Zt.get(a))&&z0(e,t),r=n.createElement("script"),ut(r),mt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function H3(e,t){Tn.M(e,t);var n=$l;if(n&&e){var l=xl(n).hoistableScripts,a=ea(e),r=l.get(a);r||(r=n.querySelector(La(a)),r||(e=v({src:e,async:!0,type:"module"},t),(t=Zt.get(a))&&z0(e,t),r=n.createElement("script"),ut(r),mt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Df(e,t,n,l){var a=(a=ie.current)?ru(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Il(n.href),n=xl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Il(n.href);var r=xl(a).hoistableStyles,o=r.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=a.querySelector(Za(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),r||G3(a,e,n,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ea(n),n=xl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Il(e){return'href="'+Ut(e)+'"'}function Za(e){return'link[rel="stylesheet"]['+e+"]"}function zf(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function G3(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),mt(t,"link",n),ut(t),e.head.appendChild(t))}function ea(e){return'[src="'+Ut(e)+'"]'}function La(e){return"script[async]"+e}function Mf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(l)return t.instance=l,ut(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ut(l),mt(l,"style",a),uu(l,n.precedence,e),t.instance=l;case"stylesheet":a=Il(n.href);var r=e.querySelector(Za(a));if(r)return t.state.loading|=4,t.instance=r,ut(r),r;l=zf(n),(a=Zt.get(a))&&D0(l,a),r=(e.ownerDocument||e).createElement("link"),ut(r);var o=r;return o._p=new Promise(function(h,_){o.onload=h,o.onerror=_}),mt(r,"link",l),t.state.loading|=4,uu(r,n.precedence,e),t.instance=r;case"script":return r=ea(n.src),(a=e.querySelector(La(r)))?(t.instance=a,ut(a),a):(l=n,(a=Zt.get(r))&&(l=v({},n),z0(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ut(a),mt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,uu(l,n.precedence,e));return t.instance}function uu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,o=0;o<l.length;o++){var h=l[o];if(h.dataset.precedence===t)r=h;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function D0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function z0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var iu=null;function Af(e,t,n){if(iu===null){var l=new Map,a=iu=new Map;a.set(n,l)}else a=iu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[aa]||r[pt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var h=l.get(o);h?h.push(r):l.set(o,[r])}}return l}function Of(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function B3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Pa=null;function U3(){}function j3(e,t,n){if(Pa===null)throw Error(i(475));var l=Pa;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Il(n.href),r=e.querySelector(Za(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=cu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,ut(r);return}r=e.ownerDocument||e,n=zf(n),(a=Zt.get(a))&&D0(n,a),r=r.createElement("link"),ut(r);var o=r;o._p=new Promise(function(h,_){o.onload=h,o.onerror=_}),mt(r,"link",n),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=cu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Y3(){if(Pa===null)throw Error(i(475));var e=Pa;return e.stylesheets&&e.count===0&&M0(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&M0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function cu(){if(this.count--,this.count===0){if(this.stylesheets)M0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function M0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(X3,e),ou=null,cu.call(e))}function X3(e,t){if(!(t.state.loading&4)){var n=ou.get(e);if(n)var l=n.get(null);else{n=new Map,ou.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var o=a[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),r=n.get(o)||l,r===l&&n.set(null,a),n.set(o,a),this.count++,l=cu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Qa={$$typeof:X,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function k3(e,t,n,l,a,r,o,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=na(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.hiddenUpdates=na(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Ef(e,t,n,l,a,r,o,h,_,O,q,Q){return e=new k3(e,t,n,o,h,_,O,Q),t=1,r===!0&&(t|=24),r=At(3,null,null,t),e.current=r,r.stateNode=e,t=oi(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:n,cache:t},hi(r),e}function wf(e){return e?(e=Vl,e):Vl}function Hf(e,t,n,l,a,r){a=wf(a),l.context===null?l.context=a:l.pendingContext=a,l=En(t),l.payload={element:n},r=r===void 0?null:r,r!==null&&(l.callback=r),n=wn(e,l,t),n!==null&&(Ht(n,e,t),Ca(n,e,t))}function Gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function A0(e,t){Gf(e,t),(e=e.alternate)&&Gf(e,t)}function Bf(e){if(e.tag===13){var t=Ol(e,67108864);t!==null&&Ht(t,e,67108864),A0(e,67108864)}}var su=!0;function q3(e,t,n,l){var a=H.T;H.T=null;var r=J.p;try{J.p=2,O0(e,t,n,l)}finally{J.p=r,H.T=a}}function N3(e,t,n,l){var a=H.T;H.T=null;var r=J.p;try{J.p=8,O0(e,t,n,l)}finally{J.p=r,H.T=a}}function O0(e,t,n,l){if(su){var a=V0(l);if(a===null)y0(e,t,l,fu,n),jf(e,l);else if(L3(a,e,t,n,l))l.stopPropagation();else if(jf(e,l),t&4&&-1<Z3.indexOf(e)){for(;a!==null;){var r=vl(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=on(r.pendingLanes);if(o!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;o;){var _=1<<31-ze(o);h.entanglements[1]|=_,o&=~_}an(r),(Ve&6)===0&&(Kr=oe()+500,Xa(0))}}break;case 13:h=Ol(r,2),h!==null&&Ht(h,r,2),Wr(),A0(r,2)}if(r=V0(l),r===null&&y0(e,t,l,fu,n),r===a)break;a=r}a!==null&&l.stopPropagation()}else y0(e,t,l,null,n)}}function V0(e){return e=Bu(e),E0(e)}var fu=null;function E0(e){if(fu=null,e=yl(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fu=e,null}function Uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case Ye:return 2;case Ge:return 8;case Le:case Ze:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var w0=!1,Pn=null,Qn=null,Kn=null,Ka=new Map,Ja=new Map,Jn=[],Z3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jf(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(t.pointerId)}}function Wa(e,t,n,l,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},t!==null&&(t=vl(t),t!==null&&Bf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function L3(e,t,n,l,a){switch(t){case"focusin":return Pn=Wa(Pn,e,t,n,l,a),!0;case"dragenter":return Qn=Wa(Qn,e,t,n,l,a),!0;case"mouseover":return Kn=Wa(Kn,e,t,n,l,a),!0;case"pointerover":var r=a.pointerId;return Ka.set(r,Wa(Ka.get(r)||null,e,t,n,l,a)),!0;case"gotpointercapture":return r=a.pointerId,Ja.set(r,Wa(Ja.get(r)||null,e,t,n,l,a)),!0}return!1}function Yf(e){var t=yl(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,j2(e.priority,function(){if(n.tag===13){var l=wt();l=Ru(l);var a=Ol(n,l);a!==null&&Ht(a,n,l),A0(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function du(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=V0(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Gu=l,n.target.dispatchEvent(l),Gu=null}else return t=vl(n),t!==null&&Bf(t),e.blockedOn=n,!1;t.shift()}return!0}function Xf(e,t,n){du(e)&&n.delete(t)}function P3(){w0=!1,Pn!==null&&du(Pn)&&(Pn=null),Qn!==null&&du(Qn)&&(Qn=null),Kn!==null&&du(Kn)&&(Kn=null),Ka.forEach(Xf),Ja.forEach(Xf)}function hu(e,t){e.blockedOn===t&&(e.blockedOn=null,w0||(w0=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,P3)))}var mu=null;function kf(e){mu!==e&&(mu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mu===e&&(mu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(E0(l||n)===null)continue;break}var r=vl(n);r!==null&&(e.splice(t,3),t-=3,Ei(r,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Fa(e){function t(_){return hu(_,e)}Pn!==null&&hu(Pn,e),Qn!==null&&hu(Qn,e),Kn!==null&&hu(Kn,e),Ka.forEach(t),Ja.forEach(t);for(var n=0;n<Jn.length;n++){var l=Jn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&Jn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],r=n[l+1],o=a[St]||null;if(typeof r=="function")o||kf(n);else if(o){var h=null;if(r&&r.hasAttribute("formAction")){if(a=r,o=r[St]||null)h=o.formAction;else if(E0(a)!==null)continue}else h=o.action;typeof h=="function"?n[l+1]=h:(n.splice(l,3),l-=3),kf(n)}}}function H0(e){this._internalRoot=e}pu.prototype.render=H0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=wt();Hf(n,l,e,t,null,null)},pu.prototype.unmount=H0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hf(e.current,2,null,e,null,null),Wr(),t[gl]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&Yf(e)}};var qf=u.version;if(qf!=="19.1.1")throw Error(i(527,qf,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Q3={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{Gt=gu.inject(Q3),$e=gu}catch{}}return Ia.createRoot=function(e,t){if(!f(e))throw Error(i(299));var n=!1,l="",a=ls,r=as,o=rs,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=Ef(e,1,!1,null,null,n,l,a,r,o,h,null),e[gl]=t.current,g0(e),new H0(t)},Ia.hydrateRoot=function(e,t,n){if(!f(e))throw Error(i(299));var l=!1,a="",r=ls,o=as,h=rs,_=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=Ef(e,1,!0,t,n??null,l,a,r,o,h,_,O),t.context=wf(null),n=t.current,l=wt(),l=Ru(l),a=En(l),a.callback=null,wn(n,a,l),n=l,t.current.lanes=n,la(t,n),an(t),e[gl]=t.current,g0(e),new pu(t)},Ia.version="19.1.1",Ia}var $f;function ld(){if($f)return U0.exports;$f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),U0.exports=nd(),U0.exports}var ad=ld();const rd=xu(ad);async function ud(){if(window.__wgpuDevice)return window.__wgpuDevice;const s=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!s)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=s;const u=await s.requestDevice();return u.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=u,u.lost.then(()=>{window.__wgpuDevice===u&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),u}/**
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
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(u){u!==void 0&&(this._Seed=u)}SetSeed(u){this._Seed=u}SetFrequency(u){this._Frequency=u}SetNoiseType(u){this._NoiseType=u,this._UpdateTransformType3D()}SetRotationType3D(u){this._RotationType3D=u,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(u){this._FractalType=u}SetFractalOctaves(u){this._Octaves=u,this._CalculateFractalBounding()}SetFractalLacunarity(u){this._Lacunarity=u}SetFractalGain(u){this._Gain=u,this._CalculateFractalBounding()}SetFractalWeightedStrength(u){this._WeightedStrength=u}SetFractalPingPongStrength(u){this._PingPongStrength=u}SetCellularDistanceFunction(u){this._CellularDistanceFunction=u}SetCellularReturnType(u){this._CellularReturnType=u}SetCellularJitter(u){this._CellularJitterModifier=u}SetDomainWarpType(u){this._DomainWarpType=u,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(u){this._DomainWarpAmp=u}GetNoise(u,d,i){let f=(m,g)=>{switch(m*=this._Frequency,g*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const p=.5*(1.7320508075688772-1);let v=(m+g)*p;m+=v,g+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,m,g);case D.FractalType.FBm:return this._GenFractalFBmR2(m,g);case D.FractalType.Ridged:return this._GenFractalRidgedR2(m,g);case D.FractalType.PingPong:return this._GenFractalPingPongR2(m,g)}},c=(m,g,y)=>{switch(m*=this._Frequency,g*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=m+g,b=C*-.211324865405187;y*=.577350269189626,m+=b-y,g+=b-y,y+=C*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let C=m+y,b=C*-.211324865405187;g*=.577350269189626,m+=b-g,y+=b-g,g+=C*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const p=2/3;let v=(m+g+y)*p;m=v-m,g=v-g,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,m,g,y);case D.FractalType.FBm:return this._GenFractalFBmR3(m,g,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(m,g,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(m,g,y)}};if(arguments.length===2)return f(u,d);if(arguments.length===3)return c(u,d,i)}DomainWrap(u){switch(this._FractalType){default:this._DomainWarpSingle(u);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(u);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(u);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(u,d,i){return u+i*(d-u)}static _InterpHermite(u){return u*u*(3-2*u)}static _InterpQuintic(u){return u*u*u*(u*(u*6-15)+10)}static _CubicLerp(u,d,i,f,c){let m=f-i-(u-d);return c*c*c*m+c*c*(u-d-m)+c*(i-u)+d}static _PingPong(u){return u-=Math.trunc(u*.5)*2,u<1?u:2-u}_CalculateFractalBounding(){let u=Math.abs(this._Gain),d=u,i=1;for(let f=1;f<this._Octaves;f++)i+=d,d*=u;this._FractalBounding=1/i}_HashR2(u,d,i){let f=u^d^i;return f=Math.imul(f,668265261),f}_HashR3(u,d,i,f){let c=u^d^i^f;return c=Math.imul(c,668265261),c}_ValCoordR2(u,d,i){let f=this._HashR2(u,d,i);return f=Math.imul(f,f),f^=f<<19,f*(1/2147483648)}_ValCoordR3(u,d,i,f){let c=this._HashR3(u,d,i,f);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(u,d,i,f,c){let m=this._HashR2(u,d,i);m^=m>>15,m&=254;let g=this._Gradients2D[m],y=this._Gradients2D[m|1];return f*g+c*y}_GradCoordR3(u,d,i,f,c,m,g){let y=this._HashR3(u,d,i,f);y^=y>>15,y&=252;let p=this._Gradients3D[y],v=this._Gradients3D[y|1],C=this._Gradients3D[y|2];return c*p+m*v+g*C}_GenNoiseSingleR2(u,d,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(u,d,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(u,d,i);case D.NoiseType.Cellular:return this._SingleCellularR2(u,d,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(u,d,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(u,d,i);case D.NoiseType.Value:return this._SingleValueR2(u,d,i);default:return 0}}_GenNoiseSingleR3(u,d,i,f){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(u,d,i,f);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(u,d,i,f);case D.NoiseType.Cellular:return this._SingleCellularR3(u,d,i,f);case D.NoiseType.Perlin:return this._SinglePerlinR3(u,d,i,f);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(u,d,i,f);case D.NoiseType.Value:return this._SingleValueR3(u,d,i,f);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(u,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let m=0;m<this._Octaves;m++){let g=this._GenNoiseSingleR2(i++,u,d);f+=g*c,c*=D._Lerp(1,Math.min(g+1,2)*.5,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalFBmR3(u,d,i){let f=this._Seed,c=0,m=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=this._GenNoiseSingleR3(f++,u,d,i);c+=y*m,m*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,m*=this._Gain}return c}_GenFractalRidgedR2(u,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let m=0;m<this._Octaves;m++){let g=Math.abs(this._GenNoiseSingleR2(i++,u,d));f+=(g*-2+1)*c,c*=D._Lerp(1,1-g,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalRidgedR3(u,d,i){let f=this._Seed,c=0,m=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=Math.abs(this._GenNoiseSingleR3(f++,u,d,i));c+=(y*-2+1)*m,m*=D._Lerp(1,1-y,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,m*=this._Gain}return c}_GenFractalPingPongR2(u,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let m=0;m<this._Octaves;m++){let g=D._PingPong((this._GenNoiseSingleR2(i++,u,d)+1)*this._PingPongStrength);f+=(g-.5)*2*c,c*=D._Lerp(1,g,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalPingPongR3(u,d,i){let f=this._Seed,c=0,m=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=D._PingPong((this._GenNoiseSingleR3(f++,u,d,i)+1)*this._PingPongStrength);c+=(y-.5)*2*m,m*=D._Lerp(1,y,this._WeightedStrength),u*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,m*=this._Gain}return c}_SingleOpenSimplex2R2(u,d,i){const c=(3-1.7320508075688772)/6;let m=Math.floor(d),g=Math.floor(i),y=d-m,p=i-g,v=(y+p)*c,C=y-v,b=p-v;m=Math.imul(m,this._PrimeX),g=Math.imul(g,this._PrimeY);let T,M,k,B=.5-C*C-b*b;B<=0?T=0:T=B*B*(B*B)*this._GradCoordR2(u,m,g,C,b);let U=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+B);if(U<=0)k=0;else{let j=C+(2*c-1),X=b+(2*c-1);k=U*U*(U*U)*this._GradCoordR2(u,m+this._PrimeX,g+this._PrimeY,j,X)}if(b>C){let j=C+c,X=b+(c-1),K=.5-j*j-X*X;K<=0?M=0:M=K*K*(K*K)*this._GradCoordR2(u,m,g+this._PrimeY,j,X)}else{let j=C+(c-1),X=b+c,K=.5-j*j-X*X;K<=0?M=0:M=K*K*(K*K)*this._GradCoordR2(u,m+this._PrimeX,g,j,X)}return(T+M+k)*99.83685446303647}_SingleOpenSimplex2R3(u,d,i,f){let c=Math.round(d),m=Math.round(i),g=Math.round(f),y=d-c,p=i-m,v=f-g,C=Math.trunc(-1-p|1),b=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),M=b*-y,k=C*-p,B=T*-v;c=Math.imul(c,this._PrimeX),m=Math.imul(m,this._PrimeY),g=Math.imul(g,this._PrimeZ);let U=0,j=.6-y*y-(p*p+v*v);for(let X=0;;X++){if(j>0&&(U+=j*j*(j*j)*this._GradCoordR3(u,c,m,g,y,p,v)),M>=k&&M>=B){let K=j+M+M;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(u,c-b*this._PrimeX,m,g,y+b,p,v))}else if(k>M&&k>=B){let K=j+k+k;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(u,c,m-C*this._PrimeY,g,y,p+C,v))}else{let K=j+B+B;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(u,c,m,g-T*this._PrimeZ,y,p,v+T))}if(X===1)break;M=.5-M,k=.5-k,B=.5-B,y=b*M,p=C*k,v=T*B,j+=.75-M-(k+B),c+=b>>1&this._PrimeX,m+=C>>1&this._PrimeY,g+=T>>1&this._PrimeZ,b=-b,C=-C,T=-T,u=~u}return U*32.69428253173828}_SingleOpenSimplex2SR2(u,d,i){const c=(3-1.7320508075688772)/6;let m=Math.floor(d),g=Math.floor(i),y=d-m,p=i-g;m=Math.imul(m,this._PrimeX),g=Math.imul(g,this._PrimeY);let v=m+this._PrimeX,C=g+this._PrimeY,b=(y+p)*c,T=y-b,M=p-b,k=2/3-T*T-M*M,B=k*k*(k*k)*this._GradCoordR2(u,m,g,T,M),U=2*(1-2*c)*(1/c-2)*b+(-2*(1-2*c)*(1-2*c)+k),j=T-(1-2*c),X=M-(1-2*c);B+=U*U*(U*U)*this._GradCoordR2(u,v,C,j,X);let K=y-p;if(b>c){if(y+K>1){let G=T+(3*c-2),P=M+(3*c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m+(this._PrimeX<<1),g+this._PrimeY,G,P))}else{let G=T+c,P=M+(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m,g+this._PrimeY,G,P))}if(p-K>1){let G=T+(3*c-1),P=M+(3*c-2),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m+this._PrimeX,g+(this._PrimeY<<1),G,P))}else{let G=T+(c-1),P=M+c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m+this._PrimeX,g,G,P))}}else{if(y+K<0){let G=T+(1-c),P=M-c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m-this._PrimeX,g,G,P))}else{let G=T+(c-1),P=M+c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m+this._PrimeX,g,G,P))}if(p<K){let G=T-c,P=M-(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m,g-this._PrimeY,G,P))}else{let G=T+c,P=M+(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(u,m,g+this._PrimeY,G,P))}}return B*18.24196194486065}_SingleOpenSimplex2SR3(u,d,i,f){let c=Math.floor(d),m=Math.floor(i),g=Math.floor(f),y=d-c,p=i-m,v=f-g;c=Math.imul(c,this._PrimeX),m=Math.imul(m,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=u+1293373,b=Math.trunc(-.5-y),T=Math.trunc(-.5-p),M=Math.trunc(-.5-v),k=y+b,B=p+T,U=v+M,j=.75-k*k-B*B-U*U,X=j*j*(j*j)*this._GradCoordR3(u,c+(b&this._PrimeX),m+(T&this._PrimeY),g+(M&this._PrimeZ),k,B,U),K=y-.5,G=p-.5,P=v-.5,Y=.75-K*K-G*G-P*P;X+=Y*Y*(Y*Y)*this._GradCoordR3(C,c+this._PrimeX,m+this._PrimeY,g+this._PrimeZ,K,G,P);let $=((b|1)<<1)*K,ne=((T|1)<<1)*G,de=((M|1)<<1)*P,ve=(-2-(b<<2))*K-1,re=(-2-(T<<2))*G-1,ye=(-2-(M<<2))*P-1,Re=!1,ge=$+j;if(ge>0){let x=k-(b|1);X+=ge*ge*(ge*ge)*this._GradCoordR3(u,c+(~b&this._PrimeX),m+(T&this._PrimeY),g+(M&this._PrimeZ),x,B,U)}else{let x=ne+de+j;if(x>0){let L=k,N=B-(T|1),I=U-(M|1);X+=x*x*(x*x)*this._GradCoordR3(u,c+(b&this._PrimeX),m+(~T&this._PrimeY),g+(~M&this._PrimeZ),L,N,I)}let V=ve+Y;if(V>0){let L=(b|1)+K;X+=V*V*(V*V)*this._GradCoordR3(C,c+(b&this._PrimeX*2),m+this._PrimeY,g+this._PrimeZ,L,G,P),Re=!0}}let H=!1,J=ne+j;if(J>0){let x=k,V=B-(T|1);X+=J*J*(J*J)*this._GradCoordR3(u,c+(b&this._PrimeX),m+(~T&this._PrimeY),g+(M&this._PrimeZ),x,V,U)}else{let x=$+de+j;if(x>0){let L=k-(b|1),N=B,I=U-(M|1);X+=x*x*(x*x)*this._GradCoordR3(u,c+(~b&this._PrimeX),m+(T&this._PrimeY),g+(~M&this._PrimeZ),L,N,I)}let V=re+Y;if(V>0){let L=K,N=(T|1)+G;X+=V*V*(V*V)*this._GradCoordR3(C,c+this._PrimeX,m+(T&this._PrimeY<<1),g+this._PrimeZ,L,N,P),H=!0}}let F=!1,ue=de+j;if(ue>0){let x=k,V=B,L=U-(M|1);X+=ue*ue*(ue*ue)*this._GradCoordR3(u,c+(b&this._PrimeX),m+(T&this._PrimeY),g+(~M&this._PrimeZ),x,V,L)}else{let x=$+ne+j;if(x>0){let L=k-(b|1),N=B-(T|1);X+=x*x*(x*x)*this._GradCoordR3(u,c+(~b&this._PrimeX),m+(~T&this._PrimeY),g+(M&this._PrimeZ),L,N,U)}let V=ye+Y;if(V>0){let L=K,N=G,I=(M|1)+P;X+=V*V*(V*V)*this._GradCoordR3(C,c+this._PrimeX,m+this._PrimeY,g+(M&this._PrimeZ<<1),L,N,I),F=!0}}if(!Re){let x=re+ye+Y;if(x>0){let V=K,L=(T|1)+G,N=(M|1)+P;X+=x*x*(x*x)*this._GradCoordR3(C,c+this._PrimeX,m+(T&this._PrimeY<<1),g+(M&this._PrimeZ<<1),V,L,N)}}if(!H){let x=ve+ye+Y;if(x>0){let V=(b|1)+K,L=G,N=(M|1)+P;X+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX*2),m+this._PrimeY,g+(M&this._PrimeZ<<1),V,L,N)}}if(!F){let x=ve+re+Y;if(x>0){let V=(b|1)+K,L=(T|1)+G;X+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX<<1),m+(T&this._PrimeY<<1),g+this._PrimeZ,V,L,P)}}return X*9.046026385208288}_SingleCellularR2(u,d,i){let f=Math.round(d),c=Math.round(i),m=Number.MAX_VALUE,g=Number.MAX_VALUE,y=0,p=.43701595*this._CellularJitterModifier,v=(f-1)*this._PrimeX,C=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let b=f-1;b<=f+1;b++){let T=C;for(let M=c-1;M<=c+1;M++){let k=this._HashR2(u,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=M-i+this._RandVecs2D[B|1]*p,X=U*U+j*j;g=Math.max(Math.min(g,X),m),X<m&&(m=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let b=f-1;b<=f+1;b++){let T=C;for(let M=c-1;M<=c+1;M++){let k=this._HashR2(u,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=M-i+this._RandVecs2D[B|1]*p,X=Math.abs(U)+Math.abs(j);g=Math.max(Math.min(g,X),m),X<m&&(m=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let b=f-1;b<=f+1;b++){let T=C;for(let M=c-1;M<=c+1;M++){let k=this._HashR2(u,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=M-i+this._RandVecs2D[B|1]*p,X=Math.abs(U)+Math.abs(j)+(U*U+j*j);g=Math.max(Math.min(g,X),m),X<m&&(m=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(m=Math.sqrt(m),this._CellularReturnType!==D.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return m-1;case D.CellularReturnType.Distance2:return g-1;case D.CellularReturnType.Distance2Add:return(g+m)*.5-1;case D.CellularReturnType.Distance2Sub:return g-m-1;case D.CellularReturnType.Distance2Mul:return g*m*.5-1;case D.CellularReturnType.Distance2Div:return m/g-1;default:return 0}}_SingleCellularR3(u,d,i,f){let c=Math.round(d),m=Math.round(i),g=Math.round(f),y=Number.MAX_VALUE,p=Number.MAX_VALUE,v=0,C=.39614353*this._CellularJitterModifier,b=(c-1)*this._PrimeX,T=(m-1)*this._PrimeY,M=(g-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=m-1;U<=m+1;U++){let j=M;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,$=X-f+this._RandVecs3D[G|2]*C,ne=P*P+Y*Y+$*$;p=Math.max(Math.min(p,ne),y),ne<y&&(y=ne,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=m-1;U<=m+1;U++){let j=M;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,$=X-f+this._RandVecs3D[G|2]*C,ne=Math.abs(P)+Math.abs(Y)+Math.abs($);p=Math.max(Math.min(p,ne),y),ne<y&&(y=ne,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=m-1;U<=m+1;U++){let j=M;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,$=X-f+this._RandVecs3D[G|2]*C,ne=Math.abs(P)+Math.abs(Y)+Math.abs($)+(P*P+Y*Y+$*$);p=Math.max(Math.min(p,ne),y),ne<y&&(y=ne,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+y)*.5-1;case D.CellularReturnType.Distance2Sub:return p-y-1;case D.CellularReturnType.Distance2Mul:return p*y*.5-1;case D.CellularReturnType.Distance2Div:return y/p-1;default:return 0}}_SinglePerlinR2(u,d,i){let f=Math.floor(d),c=Math.floor(i),m=d-f,g=i-c,y=m-1,p=g-1,v=D._InterpQuintic(m),C=D._InterpQuintic(g);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let b=f+this._PrimeX,T=c+this._PrimeY,M=D._Lerp(this._GradCoordR2(u,f,c,m,g),this._GradCoordR2(u,b,c,y,g),v),k=D._Lerp(this._GradCoordR2(u,f,T,m,p),this._GradCoordR2(u,b,T,y,p),v);return D._Lerp(M,k,C)*1.4247691104677813}_SinglePerlinR3(u,d,i,f){let c=Math.floor(d),m=Math.floor(i),g=Math.floor(f),y=d-c,p=i-m,v=f-g,C=y-1,b=p-1,T=v-1,M=D._InterpQuintic(y),k=D._InterpQuintic(p),B=D._InterpQuintic(v);c=Math.imul(c,this._PrimeX),m=Math.imul(m,this._PrimeY),g=Math.imul(g,this._PrimeZ);let U=c+this._PrimeX,j=m+this._PrimeY,X=g+this._PrimeZ,K=D._Lerp(this._GradCoordR3(u,c,m,g,y,p,v),this._GradCoordR3(u,U,m,g,C,p,v),M),G=D._Lerp(this._GradCoordR3(u,c,j,g,y,b,v),this._GradCoordR3(u,U,j,g,C,b,v),M),P=D._Lerp(this._GradCoordR3(u,c,m,X,y,p,T),this._GradCoordR3(u,U,m,X,C,p,T),M),Y=D._Lerp(this._GradCoordR3(u,c,j,X,y,b,T),this._GradCoordR3(u,U,j,X,C,b,T),M),$=D._Lerp(K,G,k),ne=D._Lerp(P,Y,k);return D._Lerp($,ne,B)*.9649214148521423}_SingleValueCubicR2(u,d,i){let f=Math.floor(d),c=Math.floor(i),m=d-f,g=i-c;f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f-this._PrimeX,p=c-this._PrimeY,v=f+this._PrimeX,C=c+this._PrimeY,b=f+(this._PrimeX<<1),T=c+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(u,y,p),this._ValCoordR2(u,f,p),this._ValCoordR2(u,v,p),this._ValCoordR2(u,b,p),m),D._CubicLerp(this._ValCoordR2(u,y,c),this._ValCoordR2(u,f,c),this._ValCoordR2(u,v,c),this._ValCoordR2(u,b,c),m),D._CubicLerp(this._ValCoordR2(u,y,C),this._ValCoordR2(u,f,C),this._ValCoordR2(u,v,C),this._ValCoordR2(u,b,C),m),D._CubicLerp(this._ValCoordR2(u,y,T),this._ValCoordR2(u,f,T),this._ValCoordR2(u,v,T),this._ValCoordR2(u,b,T),m),g)*(1/(1.5*1.5))}_SingleValueCubicR3(u,d,i,f){let c=Math.floor(d),m=Math.floor(i),g=Math.floor(f),y=d-c,p=i-m,v=f-g;c=Math.imul(c,this._PrimeX),m=Math.imul(m,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c-this._PrimeX,b=m-this._PrimeY,T=g-this._PrimeZ,M=c+this._PrimeX,k=m+this._PrimeY,B=g+this._PrimeZ,U=c+(this._PrimeX<<1),j=m+(this._PrimeY<<1),X=g+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,T),this._ValCoordR3(u,c,b,T),this._ValCoordR3(u,M,b,T),this._ValCoordR3(u,U,b,T),y),D._CubicLerp(this._ValCoordR3(u,C,m,T),this._ValCoordR3(u,c,m,T),this._ValCoordR3(u,M,m,T),this._ValCoordR3(u,U,m,T),y),D._CubicLerp(this._ValCoordR3(u,C,k,T),this._ValCoordR3(u,c,k,T),this._ValCoordR3(u,M,k,T),this._ValCoordR3(u,U,k,T),y),D._CubicLerp(this._ValCoordR3(u,C,j,T),this._ValCoordR3(u,c,j,T),this._ValCoordR3(u,M,j,T),this._ValCoordR3(u,U,j,T),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,g),this._ValCoordR3(u,c,b,g),this._ValCoordR3(u,M,b,g),this._ValCoordR3(u,U,b,g),y),D._CubicLerp(this._ValCoordR3(u,C,m,g),this._ValCoordR3(u,c,m,g),this._ValCoordR3(u,M,m,g),this._ValCoordR3(u,U,m,g),y),D._CubicLerp(this._ValCoordR3(u,C,k,g),this._ValCoordR3(u,c,k,g),this._ValCoordR3(u,M,k,g),this._ValCoordR3(u,U,k,g),y),D._CubicLerp(this._ValCoordR3(u,C,j,g),this._ValCoordR3(u,c,j,g),this._ValCoordR3(u,M,j,g),this._ValCoordR3(u,U,j,g),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,B),this._ValCoordR3(u,c,b,B),this._ValCoordR3(u,M,b,B),this._ValCoordR3(u,U,b,B),y),D._CubicLerp(this._ValCoordR3(u,C,m,B),this._ValCoordR3(u,c,m,B),this._ValCoordR3(u,M,m,B),this._ValCoordR3(u,U,m,B),y),D._CubicLerp(this._ValCoordR3(u,C,k,B),this._ValCoordR3(u,c,k,B),this._ValCoordR3(u,M,k,B),this._ValCoordR3(u,U,k,B),y),D._CubicLerp(this._ValCoordR3(u,C,j,B),this._ValCoordR3(u,c,j,B),this._ValCoordR3(u,M,j,B),this._ValCoordR3(u,U,j,B),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,C,b,X),this._ValCoordR3(u,c,b,X),this._ValCoordR3(u,M,b,X),this._ValCoordR3(u,U,b,X),y),D._CubicLerp(this._ValCoordR3(u,C,m,X),this._ValCoordR3(u,c,m,X),this._ValCoordR3(u,M,m,X),this._ValCoordR3(u,U,m,X),y),D._CubicLerp(this._ValCoordR3(u,C,k,X),this._ValCoordR3(u,c,k,X),this._ValCoordR3(u,M,k,X),this._ValCoordR3(u,U,k,X),y),D._CubicLerp(this._ValCoordR3(u,C,j,X),this._ValCoordR3(u,c,j,X),this._ValCoordR3(u,M,j,X),this._ValCoordR3(u,U,j,X),y),p),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(u,d,i){let f=Math.floor(d),c=Math.floor(i),m=D._InterpHermite(d-f),g=D._InterpHermite(i-c);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f+this._PrimeX,p=c+this._PrimeY,v=D._Lerp(this._ValCoordR2(u,f,c),this._ValCoordR2(u,y,c),m),C=D._Lerp(this._ValCoordR2(u,f,p),this._ValCoordR2(u,y,p),m);return D._Lerp(v,C,g)}_SingleValueR3(u,d,i,f){let c=Math.floor(d),m=Math.floor(i),g=Math.floor(f),y=D._InterpHermite(d-c),p=D._InterpHermite(i-m),v=D._InterpHermite(f-g);c=Math.imul(c,this._PrimeX),m=Math.imul(m,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c+this._PrimeX,b=m+this._PrimeY,T=g+this._PrimeZ,M=D._Lerp(this._ValCoordR3(u,c,m,g),this._ValCoordR3(u,C,m,g),y),k=D._Lerp(this._ValCoordR3(u,c,b,g),this._ValCoordR3(u,C,b,g),y),B=D._Lerp(this._ValCoordR3(u,c,m,T),this._ValCoordR3(u,C,m,T),y),U=D._Lerp(this._ValCoordR3(u,c,b,T),this._ValCoordR3(u,C,b,T),y),j=D._Lerp(M,k,p),X=D._Lerp(B,U,p);return D._Lerp(j,X,v)}_DoSingleDomainWarp(){let u=(i,f,c,m,g,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*38.283687591552734,c,m,!1,g,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*16,c,m,!0,g,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,m,g,y);break}},d=(i,f,c,m,g,y,p)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*32.69428253173828,c,m,!1,g,y,p);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*7.71604938271605,c,m,!0,g,y,p);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,m,g,y,p);break}};if(arguments.length===6&&arguments[3]instanceof er)return u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof tr)return d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let u=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,m=this._Frequency,g=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(g+y)*v;g+=C,y+=C;break}this._DoSingleDomainWarp(f,c,m,i,g,y)},d=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,m=this._Frequency,g=i.x,y=i.y,p=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let b=g+y,T=b*-.211324865405187;p*=.577350269189626,g+=T-p,y=y+T-p,p+=b*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let b=g+p,T=b*-.211324865405187;y*=.577350269189626,g+=T-y,p+=T-y,y+=b*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let C=(g+y+p)*v;g=C-g,y=C-y,p=C-p;break}this._DoSingleDomainWarp(f,c,m,i,g,y,p)};if(arguments.length===1&&arguments[0]instanceof er)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof tr)return d(arguments[0])}_DomainWarpFractalProgressive(){let u=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,m=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const C=.5*(1.7320508075688772-1);let b=(y+p)*C;y+=b,p+=b;break}this._DoSingleDomainWarp(f,c,m,i,y,p),f++,c*=this._Gain,m*=this._Lacunarity}},d=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,m=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=y+p,b=C*-.211324865405187;v*=.577350269189626,y+=b-v,p=p+b-v,v+=C*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let C=y+v,b=C*-.211324865405187;p*=.577350269189626,y+=b-p,v+=b-p,p+=C*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let b=(y+p+v)*.6666666666666666;y=b-y,p=b-p,v=b-v}break}this._DoSingleDomainWarp(f,c,m,i,y,p,v),f++,c*=this._Gain,m*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof er)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof tr)return d(arguments[0])}_DomainWarpFractalIndependent(){let u=i=>{let f=i.x,c=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(f+c)*v;f+=C,c+=C;break}let m=this._Seed,g=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let p=0;p<this._Octaves;p++)this._DoSingleDomainWarp(m,g,y,i,f,c),m++,g*=this._Gain,y*=this._Lacunarity},d=i=>{let f=i.x,c=i.y,m=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=f+c,C=v*-.211324865405187;m*=.577350269189626,f+=C-m,c=c+C-m,m+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=f+m,C=v*-.211324865405187;c*=.577350269189626,f+=C-c,m+=C-c,c+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let C=(f+c+m)*.6666666666666666;f=C-f,c=C-c,m=C-m}break}let g=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,p=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(g,y,p,i,f,c,m),g++,y*=this._Gain,p*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof er)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof tr)return d(arguments[0])}_SingleDomainWarpBasicGrid(){let u=(i,f,c,m,g,y)=>{let p=g*c,v=y*c,C=Math.floor(p),b=Math.floor(v),T=D._InterpHermite(p-C),M=D._InterpHermite(v-b);C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY);let k=C+this._PrimeX,B=b+this._PrimeY,U=this._HashR2(i,C,b)&510,j=this._HashR2(i,k,b)&510,X=D._Lerp(this._RandVecs2D[U],this._RandVecs2D[j],T),K=D._Lerp(this._RandVecs2D[U|1],this._RandVecs2D[j|1],T);U=this._HashR2(i,C,B)&510,j=this._HashR2(i,k,B)&510;let G=D._Lerp(this._RandVecs2D[U],this._RandVecs2D[j],T),P=D._Lerp(this._RandVecs2D[U|1],this._RandVecs2D[j|1],T);m.x+=D._Lerp(X,G,M)*f,m.y+=D._Lerp(K,P,M)*f},d=(i,f,c,m,g,y,p)=>{let v=g*c,C=y*c,b=p*c,T=Math.floor(v),M=Math.floor(C),k=Math.floor(b),B=D._InterpHermite(v-T),U=D._InterpHermite(C-M),j=D._InterpHermite(b-k);T=Math.imul(T,this._PrimeX),M=Math.imul(M,this._PrimeY),k=Math.imul(k,this._PrimeZ);let X=T+this._PrimeX,K=M+this._PrimeY,G=k+this._PrimeZ,P=this._HashR3(i,T,M,k)&1020,Y=this._HashR3(i,X,M,k)&1020,$=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),ne=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),de=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B);P=this._HashR3(i,T,K,k)&1020,Y=this._HashR3(i,X,K,k)&1020;let ve=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),re=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),ye=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),Re=D._Lerp($,ve,U),ge=D._Lerp(ne,re,U),H=D._Lerp(de,ye,U);P=this._HashR3(i,T,M,G)&1020,Y=this._HashR3(i,X,M,G)&1020,$=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),ne=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),de=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),P=this._HashR3(i,T,K,G)&1020,Y=this._HashR3(i,X,K,G)&1020,ve=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),re=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),ye=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),m.x+=D._Lerp(Re,D._Lerp($,ve,U),j)*f,m.y+=D._Lerp(ge,D._Lerp(ne,re,U),j)*f,m.z+=D._Lerp(H,D._Lerp(de,ye,U),j)*f};arguments.length===6&&arguments[3]instanceof er&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof tr&&d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let u=(i,f,c,m,g,y,p)=>{const C=(3-1.7320508075688772)/6;y*=c,p*=c;let b=Math.floor(y),T=Math.floor(p),M=y-b,k=p-T,B=(M+k)*C,U=M-B,j=k-B;b=Math.imul(b,this._PrimeX),T=Math.imul(T,this._PrimeY);let X,K;X=K=0;let G=.5-U*U-j*j;if(G>0){let Y=G*G*(G*G),$,ne;if(g){let de=this._HashR2(i,b,T)&510;$=this._RandVecs2D[de],ne=this._RandVecs2D[de|1]}else{let de=this._HashR2(i,b,T),ve=de&254,re=de>>7&510,ye=this._Gradients2D[ve],Re=this._Gradients2D[ve|1],ge=U*ye+j*Re,H=this._RandVecs2D[re],J=this._RandVecs2D[re|1];$=ge*H,ne=ge*J}X+=Y*$,K+=Y*ne}let P=2*(1-2*C)*(1/C-2)*B+(-2*(1-2*C)*(1-2*C)+G);if(P>0){let Y=U+(2*C-1),$=j+(2*C-1),ne=P*P*(P*P),de,ve;if(g){let re=this._HashR2(i,b+this._PrimeX,T+this._PrimeY)&510;de=this._RandVecs2D[re],ve=this._RandVecs2D[re|1]}else{let re=this._HashR2(i,b+this._PrimeX,T+this._PrimeY),ye=re&254,Re=re>>7&510,ge=this._Gradients2D[ye],H=this._Gradients2D[ye|1],J=Y*ge+$*H,F=this._RandVecs2D[Re],ue=this._RandVecs2D[Re|1];de=J*F,ve=J*ue}X+=ne*de,K+=ne*ve}if(j>U){let Y=U+C,$=j+(C-1),ne=.5-Y*Y-$*$;if(ne>0){let de=ne*ne*(ne*ne),ve,re;if(g){let ye=this._HashR2(i,b,T+this._PrimeY)&510;ve=this._RandVecs2D[ye],re=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,b,T+this._PrimeY),Re=ye&254,ge=ye>>7&510,H=this._Gradients2D[Re],J=this._Gradients2D[Re|1],F=Y*H+$*J,ue=this._RandVecs2D[ge],x=this._RandVecs2D[ge|1];ve=F*ue,re=F*x}X+=de*ve,K+=de*re}}else{let Y=U+(C-1),$=j+C,ne=.5-Y*Y-$*$;if(ne>0){let de=ne*ne*(ne*ne),ve,re;if(g){let ye=this._HashR2(i,b+this._PrimeX,T)&510;ve=this._RandVecs2D[ye],re=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,b+this._PrimeX,T),Re=ye&254,ge=ye>>7&510,H=this._Gradients2D[Re],J=this._Gradients2D[Re|1],F=Y*H+$*J,ue=this._RandVecs2D[ge],x=this._RandVecs2D[ge|1];ve=F*ue,re=F*x}X+=de*ve,K+=de*re}}m.x+=X*f,m.y+=K*f},d=(i,f,c,m,g,y,p,v)=>{y*=c,p*=c,v*=c;let C=Math.round(y),b=Math.round(p),T=Math.round(v),M=y-C,k=p-b,B=v-T,U=-M-1|1,j=-k-1|1,X=-B-1|1,K=U*-M,G=j*-k,P=X*-B;C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY),T=Math.imul(T,this._PrimeZ);let Y,$,ne;Y=$=ne=0;let de=.6-M*M-(k*k+B*B);for(let ve=0;;ve++){if(de>0){let ue=de*de*(de*de),x,V,L;if(g){let N=this._HashR3(i,C,b,T)&1020;x=this._RandVecs3D[N],V=this._RandVecs3D[N|1],L=this._RandVecs3D[N|2]}else{let N=this._HashR3(i,C,b,T),I=N&252,se=N>>6&1020,ie=this._Gradients3D[I],we=this._Gradients3D[I|1],_e=this._Gradients3D[I|2],He=M*ie+k*we+B*_e,xt=this._RandVecs3D[se],ft=this._RandVecs3D[se|1],bt=this._RandVecs3D[se|2];x=He*xt,V=He*ft,L=He*bt}Y+=ue*x,$+=ue*V,ne+=ue*L}let re=de,ye=C,Re=b,ge=T,H=M,J=k,F=B;if(K>=G&&K>=P?(H+=U,re=re+K+K,ye-=U*this._PrimeX):G>K&&G>=P?(J+=j,re=re+G+G,Re-=j*this._PrimeY):(F+=X,re=re+P+P,ge-=X*this._PrimeZ),re>1){re-=1;let ue=re*re*(re*re),x,V,L;if(g){let N=this._HashR3(i,ye,Re,ge)&1020;x=this._RandVecs3D[N],V=this._RandVecs3D[N|1],L=this._RandVecs3D[N|2]}else{let N=this._HashR3(i,ye,Re,ge),I=N&252,se=N>>6&1020,ie=this._Gradients3D[I],we=this._Gradients3D[I|1],_e=this._Gradients3D[I|2],He=H*ie+J*we+F*_e,xt=this._RandVecs3D[se],ft=this._RandVecs3D[se|1],bt=this._RandVecs3D[se|2];x=He*xt,V=He*ft,L=He*bt}Y+=ue*x,$+=ue*V,ne+=ue*L}if(ve===1)break;K=.5-K,G=.5-G,P=.5-P,M=U*K,k=j*G,B=X*P,de+=.75-K-(G+P),C+=U>>1&this._PrimeX,b+=j>>1&this._PrimeY,T+=X>>1&this._PrimeZ,U=-U,j=-j,X=-X,i+=1293373}m.x+=Y*f,m.y+=$*f,m.z+=ne*f};arguments.length===7&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class er{constructor(u,d){this.x=u,this.y=d}}class tr{constructor(u,d,i){this.x=u,this.y=d,this.z=i}}function id(s=42,u=1920,d=1080,i=D.NoiseType.Perlin,f=6,c=1.7,m=.5,g=D.FractalType.FBm,y=.003){const p=new D;p.SetNoiseType(i),p.SetSeed(s),p.SetFractalOctaves(f),p.SetFractalLacunarity(c),p.SetFractalGain(m),p.SetFractalType(g),p.SetFrequency(y);const v=[];for(let T=0;T<d;T++)for(let M=0;M<u;M++){const B=(p.GetNoise(M,T)+1)/2;v.push(B)}var C=0,b=0;for(let T=0;T<v.length;T++)(v[T]<C||T==0)&&(C=v[T]),(v[T]>b||T==0)&&(b=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-C)/(b-C);return v}const cd=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
}`,od=`// RGB (0–1 range)\r
const COLOR_WHITE  = vec4<f32>(1.0, 1.0, 1.0, 1.0);\r
const COLOR_BLACK  = vec4<f32>(0.0, 0.0, 0.0, 1.0);\r
const COLOR_RED    = vec4<f32>(1.0, 0.0, 0.0, 1.0);\r
const COLOR_GREEN  = vec4<f32>(0.0, 1.0, 0.0, 1.0);\r
const COLOR_BLUE   = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r
const COLOR_YELLOW = vec4<f32>(1.0, 1.0, 0.0, 1.0);\r
const COLOR_CYAN   = vec4<f32>(0.0, 1.0, 1.0, 1.0);\r
const COLOR_MAGENTA= vec4<f32>(1.0, 0.0, 1.0, 1.0);\r
const COLOR_GRAY   = vec4<f32>(0.5, 0.5, 0.5, 1.0);\r
const COLOR_CLEAR  = vec4<f32>(0.0, 0.0, 0.0, 1.0);`,sd=`// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)\r
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
}`,fd=`// ---------- Helpers ----------\r
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
\r
  let cCoord = clampCoord(coord);\r
  let cell = currentCells[idx(cCoord.x, cCoord.y)];\r
\r
  let spriteInfo = unpackSpriteInfo(cell.spriteInfo);\r
  if (spriteInfo.height > 0)\r
  {\r
    let spriteHeight = f32(spriteInfo.height) * f32(uTerrain.maxCellValue) / 10.0;\r
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
}`,dd=`const MAX_SPRITE_SIZE = 64 * 64;\r
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
}`,hd=`// Uses: uView, uTerrain, uInput, outputTex\r
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
        (x == uInput.mousePos.x && y == uInput.mousePos.y) || \r
        isDirectNeighbor(coord, uInput.mousePos);\r
    \r
    var cursorOutline = select(\r
            vec4f(0.0, 0.0, 0.0, 0.0), \r
            vec4f(0.0, 0.0, 0.0, 0.5), \r
            (inOuter && !inInner) || isCursorSpot\r
        );\r
\r
    var combinedColor = vec4f(0.0, 0.0, 0.0, 0.0);\r
    combinedColor = over_rgba(combinedColor, terrainColor);\r
    combinedColor = over_rgba(combinedColor, subPixelColor);\r
    combinedColor = over_rgba(combinedColor, shadowColor);\r
    combinedColor = over_rgba(combinedColor, fluidColor);\r
    combinedColor = over_rgba(combinedColor, cursorOutline);\r
    //combinedColor = select(combinedColor, over_rgba(combinedColor, debugColor), uView.showDebug > 0u);\r
    if (uView.showDebug > 0u) { combinedColor = over_rgba(combinedColor, debugColor); }\r
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
}`,c2=`//{colors}\r
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
//{chunk_data_calc}`,md=`struct View {\r
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
};`,pd=`// Fullscreen triangle VS\r
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
}`,gd=`const MAX_SLICES_PER_CELL : u32 = 3u;\r
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
`,yd=`// Uses: uView, uTerrain, chunkData, currentCells\r
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
`,vd=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells\r
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
`,xd=`// Uses: uView, uTerrain, cursorQuery, currentCells, chunkData\r
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
`,bd=`// ---- Fragment shader ----\r
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
}`,_d=`// Uses: uView, chunkData, currentCells, outputTex\r
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
`,Sd=`// Uses: uView, uTerrain, chunkData, currentCells, outputTex\r
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
`,Cd=`// Uses: uView, currentCells\r
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
`,Td=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,Rd=`@compute @workgroup_size(16, 16, 1)\r
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let spriteIndex : u32 = 0u;\r
    let coord = uInput.mousePos;//vec2<u32>(534, 200);\r
    \r
    let sprite = getSprite(spriteIndex);\r
    if (gid.x >= sprite.width || gid.y >= sprite.height) { return; }\r
\r
    setSprite(spriteIndex, coord, vec2<u32>(gid.x, gid.y));\r
}`,Dd=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,zd=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells, nextCells\r
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
}`,Md=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":cd,"../shaders/helpers/colors.wgsl":od,"../shaders/helpers/flow_helpers.wgsl":sd,"../shaders/helpers/helpers.wgsl":fd,"../shaders/helpers/sprite_helpers.wgsl":dd,"../shaders/main/fragment.wgsl":hd,"../shaders/main/shader_outline.wgsl":c2,"../shaders/main/structs.wgsl":md,"../shaders/main/vertex.wgsl":pd,"../shaders/objects/object_def.wgsl":gd,"../shaders/query/chunk_data_calc.wgsl":yd,"../shaders/query/cursor_query.wgsl":vd,"../shaders/query/total_query.wgsl":xd,"../shaders/realtime_frag.wgsl":bd,"../shaders/render/debug_render_compute.wgsl":_d,"../shaders/render/fluid_render_compute.wgsl":Sd,"../shaders/render/normal_compute.wgsl":Cd,"../shaders/render/shadow_render_compute.wgsl":Td,"../shaders/render/sprite_render_compute.wgsl":Rd,"../shaders/render/terrain_render_compute.wgsl":Dd,"../shaders/simulation/step_compute.wgsl":zd});function Ad(){let s=c2;for(const[u,d]of Object.entries(Md)){const i=u.split("/").pop().replace(".wgsl","");s=s.replace(`//{${i}}`,d)}return s}var k0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var If;function Od(){return If||(If=1,(function(s){(function(){var u={}.hasOwnProperty;function d(){for(var c="",m=0;m<arguments.length;m++){var g=arguments[m];g&&(c=f(c,i(g)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return d.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var m="";for(var g in c)u.call(c,g)&&c[g]&&(m=f(m,g));return m}function f(c,m){return m?c?c+" "+m:c+m:c}s.exports?(d.default=d,s.exports=d):window.classNames=d})()})(k0)),k0.exports}var Vd=Od();const Oe=xu(Vd),Ed=["xxl","xl","lg","md","sm","xs"],wd="xs",bu=W.createContext({prefixes:{},breakpoints:Ed,minBreakpoint:wd}),{Consumer:Hh,Provider:Gh}=bu;function ke(s,u){const{prefixes:d}=W.useContext(bu);return s||d[u]||u}function o2(){const{breakpoints:s}=W.useContext(bu);return s}function s2(){const{minBreakpoint:s}=W.useContext(bu);return s}var q0={exports:{}},N0,e2;function Hd(){if(e2)return N0;e2=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return N0=s,N0}var Z0,t2;function Gd(){if(t2)return Z0;t2=1;var s=Hd();function u(){}function d(){}return d.resetWarningCache=u,Z0=function(){function i(m,g,y,p,v,C){if(C!==s){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}i.isRequired=i;function f(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:f,element:i,elementType:i,instanceOf:f,node:i,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:d,resetWarningCache:u};return c.PropTypes=c,c},Z0}var n2;function Bd(){return n2||(n2=1,q0.exports=Gd()()),q0.exports}var Ud=Bd();const st=xu(Ud),f2=(s=>W.forwardRef((u,d)=>S.jsx("div",{...u,ref:d,className:Oe(u.className,s)}))),jd=["as","disabled"];function Yd(s,u){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)>=0)continue;d[i]=s[i]}return d}function Xd(s){return!s||s.trim()==="#"}function d2({tagName:s,disabled:u,href:d,target:i,rel:f,role:c,onClick:m,tabIndex:g=0,type:y}){s||(d!=null||i!=null||f!=null?s="a":s="button");const p={tagName:s};if(s==="button")return[{type:y||"button",disabled:u},p];const v=b=>{if((u||s==="a"&&Xd(d))&&b.preventDefault(),u){b.stopPropagation();return}m?.(b)},C=b=>{b.key===" "&&(b.preventDefault(),v(b))};return s==="a"&&(d||(d="#"),u&&(d=void 0)),[{role:c??"button",disabled:void 0,tabIndex:u?void 0:g,href:d,target:s==="a"?i:void 0,"aria-disabled":u||void 0,rel:s==="a"?f:void 0,onClick:v,onKeyDown:C},p]}const kd=W.forwardRef((s,u)=>{let{as:d,disabled:i}=s,f=Yd(s,jd);const[c,{tagName:m}]=d2(Object.assign({tagName:d,disabled:i},f));return S.jsx(m,Object.assign({},f,c,{ref:u}))});kd.displayName="Button";const ta=W.forwardRef(({as:s,bsPrefix:u,variant:d="primary",size:i,active:f=!1,disabled:c=!1,className:m,...g},y)=>{const p=ke(u,"btn"),[v,{tagName:C}]=d2({tagName:s,disabled:c,...g}),b=C;return S.jsx(b,{...v,...g,ref:y,disabled:c,className:Oe(m,p,f&&"active",d&&`${p}-${d}`,i&&`${p}-${i}`,g.href&&c&&"disabled")})});ta.displayName="Button";const K0=W.forwardRef(({bsPrefix:s,size:u,vertical:d=!1,className:i,role:f="group",as:c="div",...m},g)=>{const y=ke(s,"btn-group");let p=y;return d&&(p=`${y}-vertical`),S.jsx(c,{...m,ref:g,role:f,className:Oe(i,p,u&&`${y}-${u}`)})});K0.displayName="ButtonGroup";const J0=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=ke(u,"card-body"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));J0.displayName="CardBody";const h2=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=ke(u,"card-footer"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));h2.displayName="CardFooter";const m2=W.createContext(null);m2.displayName="CardHeaderContext";const p2=W.forwardRef(({bsPrefix:s,className:u,as:d="div",...i},f)=>{const c=ke(s,"card-header"),m=W.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return S.jsx(m2.Provider,{value:m,children:S.jsx(d,{ref:f,...i,className:Oe(u,c)})})});p2.displayName="CardHeader";const g2=W.forwardRef(({bsPrefix:s,className:u,variant:d,as:i="img",...f},c)=>{const m=ke(s,"card-img");return S.jsx(i,{ref:c,className:Oe(d?`${m}-${d}`:m,u),...f})});g2.displayName="CardImg";const y2=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=ke(u,"card-img-overlay"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));y2.displayName="CardImgOverlay";const v2=W.forwardRef(({className:s,bsPrefix:u,as:d="a",...i},f)=>(u=ke(u,"card-link"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));v2.displayName="CardLink";const qd=f2("h6"),x2=W.forwardRef(({className:s,bsPrefix:u,as:d=qd,...i},f)=>(u=ke(u,"card-subtitle"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));x2.displayName="CardSubtitle";const b2=W.forwardRef(({className:s,bsPrefix:u,as:d="p",...i},f)=>(u=ke(u,"card-text"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));b2.displayName="CardText";const Nd=f2("h5"),_2=W.forwardRef(({className:s,bsPrefix:u,as:d=Nd,...i},f)=>(u=ke(u,"card-title"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));_2.displayName="CardTitle";const S2=W.forwardRef(({bsPrefix:s,className:u,bg:d,text:i,border:f,body:c=!1,children:m,as:g="div",...y},p)=>{const v=ke(s,"card");return S.jsx(g,{ref:p,...y,className:Oe(u,v,d&&`bg-${d}`,i&&`text-${i}`,f&&`border-${f}`),children:c?S.jsx(J0,{children:m}):m})});S2.displayName="Card";const $t=Object.assign(S2,{Img:g2,Title:_2,Subtitle:x2,Body:J0,Link:v2,Text:b2,Header:p2,Footer:h2,ImgOverlay:y2});function Zd(s,u){return W.Children.toArray(s).some(d=>W.isValidElement(d)&&d.type===u)}function Ld({as:s,bsPrefix:u,className:d,...i}){u=ke(u,"col");const f=o2(),c=s2(),m=[],g=[];return f.forEach(y=>{const p=i[y];delete i[y];let v,C,b;typeof p=="object"&&p!=null?{span:v,offset:C,order:b}=p:v=p;const T=y!==c?`-${y}`:"";v&&m.push(v===!0?`${u}${T}`:`${u}${T}-${v}`),b!=null&&g.push(`order${T}-${b}`),C!=null&&g.push(`offset${T}-${C}`)}),[{...i,className:Oe(d,...m,...g)},{as:s,bsPrefix:u,spans:m}]}const vt=W.forwardRef((s,u)=>{const[{className:d,...i},{as:f="div",bsPrefix:c,spans:m}]=Ld(s);return S.jsx(f,{...i,ref:u,className:Oe(d,!m.length&&c)})});vt.displayName="Col";const C2=W.createContext(null);C2.displayName="InputGroupContext";const Pd={type:st.string,tooltip:st.bool,as:st.elementType},_u=W.forwardRef(({as:s="div",className:u,type:d="valid",tooltip:i=!1,...f},c)=>S.jsx(s,{...f,ref:c,className:Oe(u,`${d}-${i?"tooltip":"feedback"}`)}));_u.displayName="Feedback";_u.propTypes=Pd;const Dn=W.createContext({}),ar=W.forwardRef(({id:s,bsPrefix:u,className:d,type:i="checkbox",isValid:f=!1,isInvalid:c=!1,as:m="input",...g},y)=>{const{controlId:p}=W.useContext(Dn);return u=ke(u,"form-check-input"),S.jsx(m,{...g,ref:y,type:i,id:s||p,className:Oe(d,u,f&&"is-valid",c&&"is-invalid")})});ar.displayName="FormCheckInput";const yu=W.forwardRef(({bsPrefix:s,className:u,htmlFor:d,...i},f)=>{const{controlId:c}=W.useContext(Dn);return s=ke(s,"form-check-label"),S.jsx("label",{...i,ref:f,htmlFor:d||c,className:Oe(u,s)})});yu.displayName="FormCheckLabel";const T2=W.forwardRef(({id:s,bsPrefix:u,bsSwitchPrefix:d,inline:i=!1,reverse:f=!1,disabled:c=!1,isValid:m=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:p,feedbackType:v,className:C,style:b,title:T="",type:M="checkbox",label:k,children:B,as:U="input",...j},X)=>{u=ke(u,"form-check"),d=ke(d,"form-switch");const{controlId:K}=W.useContext(Dn),G=W.useMemo(()=>({controlId:s||K}),[K,s]),P=!B&&k!=null&&k!==!1||Zd(B,yu),Y=S.jsx(ar,{...j,type:M==="switch"?"checkbox":M,ref:X,isValid:m,isInvalid:g,disabled:c,as:U});return S.jsx(Dn.Provider,{value:G,children:S.jsx("div",{style:b,className:Oe(C,P&&u,i&&`${u}-inline`,f&&`${u}-reverse`,M==="switch"&&d),children:B||S.jsxs(S.Fragment,{children:[Y,P&&S.jsx(yu,{title:T,children:k}),p&&S.jsx(_u,{type:v,tooltip:y,children:p})]})})})});T2.displayName="FormCheck";const vu=Object.assign(T2,{Input:ar,Label:yu}),R2=W.forwardRef(({bsPrefix:s,type:u,size:d,htmlSize:i,id:f,className:c,isValid:m=!1,isInvalid:g=!1,plaintext:y,readOnly:p,as:v="input",...C},b)=>{const{controlId:T}=W.useContext(Dn);return s=ke(s,"form-control"),S.jsx(v,{...C,type:u,size:i,ref:b,readOnly:p,id:f||T,className:Oe(c,y?`${s}-plaintext`:s,d&&`${s}-${d}`,u==="color"&&`${s}-color`,m&&"is-valid",g&&"is-invalid")})});R2.displayName="FormControl";const Qd=Object.assign(R2,{Feedback:_u}),D2=W.forwardRef(({className:s,bsPrefix:u,as:d="div",...i},f)=>(u=ke(u,"form-floating"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));D2.displayName="FormFloating";const W0=W.forwardRef(({controlId:s,as:u="div",...d},i)=>{const f=W.useMemo(()=>({controlId:s}),[s]);return S.jsx(Dn.Provider,{value:f,children:S.jsx(u,{...d,ref:i})})});W0.displayName="FormGroup";const z2=W.forwardRef(({as:s="label",bsPrefix:u,column:d=!1,visuallyHidden:i=!1,className:f,htmlFor:c,...m},g)=>{const{controlId:y}=W.useContext(Dn);u=ke(u,"form-label");let p="col-form-label";typeof d=="string"&&(p=`${p} ${p}-${d}`);const v=Oe(f,u,i&&"visually-hidden",d&&p);return c=c||y,d?S.jsx(vt,{ref:g,as:"label",className:v,htmlFor:c,...m}):S.jsx(s,{ref:g,className:v,htmlFor:c,...m})});z2.displayName="FormLabel";const M2=W.forwardRef(({bsPrefix:s,className:u,id:d,...i},f)=>{const{controlId:c}=W.useContext(Dn);return s=ke(s,"form-range"),S.jsx("input",{...i,type:"range",ref:f,className:Oe(u,s),id:d||c})});M2.displayName="FormRange";const A2=W.forwardRef(({bsPrefix:s,size:u,htmlSize:d,className:i,isValid:f=!1,isInvalid:c=!1,id:m,...g},y)=>{const{controlId:p}=W.useContext(Dn);return s=ke(s,"form-select"),S.jsx("select",{...g,size:d,ref:y,className:Oe(i,s,u&&`${s}-${u}`,f&&"is-valid",c&&"is-invalid"),id:m||p})});A2.displayName="FormSelect";const O2=W.forwardRef(({bsPrefix:s,className:u,as:d="small",muted:i,...f},c)=>(s=ke(s,"form-text"),S.jsx(d,{...f,ref:c,className:Oe(u,s,i&&"text-muted")})));O2.displayName="FormText";const V2=W.forwardRef((s,u)=>S.jsx(vu,{...s,ref:u,type:"switch"}));V2.displayName="Switch";const Kd=Object.assign(V2,{Input:vu.Input,Label:vu.Label}),E2=W.forwardRef(({bsPrefix:s,className:u,children:d,controlId:i,label:f,...c},m)=>(s=ke(s,"form-floating"),S.jsxs(W0,{ref:m,className:Oe(u,s),controlId:i,...c,children:[d,S.jsx("label",{htmlFor:i,children:f})]})));E2.displayName="FloatingLabel";const Jd={_ref:st.any,validated:st.bool,as:st.elementType},F0=W.forwardRef(({className:s,validated:u,as:d="form",...i},f)=>S.jsx(d,{...i,ref:f,className:Oe(s,u&&"was-validated")}));F0.displayName="Form";F0.propTypes=Jd;const pe=Object.assign(F0,{Group:W0,Control:Qd,Floating:D2,Check:vu,Switch:Kd,Label:z2,Text:O2,Range:M2,Select:A2,FloatingLabel:E2}),Su=W.forwardRef(({className:s,bsPrefix:u,as:d="span",...i},f)=>(u=ke(u,"input-group-text"),S.jsx(d,{ref:f,className:Oe(s,u),...i})));Su.displayName="InputGroupText";const Wd=s=>S.jsx(Su,{children:S.jsx(ar,{type:"checkbox",...s})}),Fd=s=>S.jsx(Su,{children:S.jsx(ar,{type:"radio",...s})}),w2=W.forwardRef(({bsPrefix:s,size:u,hasValidation:d,className:i,as:f="div",...c},m)=>{s=ke(s,"input-group");const g=W.useMemo(()=>({}),[]);return S.jsx(C2.Provider,{value:g,children:S.jsx(f,{ref:m,...c,className:Oe(i,s,u&&`${s}-${u}`,d&&"has-validation")})})});w2.displayName="InputGroup";const $d=Object.assign(w2,{Text:Su,Radio:Fd,Checkbox:Wd}),nr=W.forwardRef(({bsPrefix:s,className:u,as:d="div",...i},f)=>{const c=ke(s,"row"),m=o2(),g=s2(),y=`${c}-cols`,p=[];return m.forEach(v=>{const C=i[v];delete i[v];let b;C!=null&&typeof C=="object"?{cols:b}=C:b=C;const T=v!==g?`-${v}`:"";b!=null&&p.push(`${y}${T}-${b}`)}),S.jsx(d,{ref:f,...i,className:Oe(u,c,...p)})});nr.displayName="Row";const Cu={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,pixelScale:2,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};Ft.memo(Id,(s,u)=>s.initial===u.initial&&s.title===u.title);function Id({initial:s,onChange:u,onApply:d,title:i="Noise & Render Settings"}){const f=W.useMemo(()=>({...Cu,...s}),[s]),[c,m]=W.useState(f);W.useEffect(()=>{m(v=>{const C=Math.max(1,Math.min(32,v.numberOfTerrainColors));let b=v.colors.slice(0,C);if(b.length<C){const T=C-b.length,M=b[b.length-1]??"#888888";b=b.concat(Array.from({length:T},()=>M))}return{...v,numberOfTerrainColors:C,colors:b}})},[c.numberOfTerrainColors]);const g=(v,C)=>m(b=>({...b,[v]:C})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],p=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return S.jsx($t,{children:S.jsxs($t.Body,{children:[S.jsx($t.Title,{className:"mb-3",children:i}),S.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),S.jsxs(nr,{className:"g-3",children:[S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"width",children:[S.jsx(pe.Label,{children:"Width"}),S.jsx(pe.Control,{type:"number",min:1,value:c.width,onChange:v=>g("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(pe.Text,{muted:!0,children:"Width in pixels of the map."})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"height",children:[S.jsx(pe.Label,{children:"Height"}),S.jsx(pe.Control,{type:"number",min:1,value:c.height,onChange:v=>g("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(pe.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),S.jsxs(nr,{className:"g-3",children:[S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"noiseType",children:[S.jsx(pe.Label,{children:"Noise Type"}),S.jsx(pe.Select,{value:c.noiseType,onChange:v=>g("noiseType",v.currentTarget.value),children:y.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"seed",children:[S.jsx(pe.Label,{children:"Seed"}),S.jsx(pe.Control,{type:"number",value:c.seed,onChange:v=>g("seed",parseInt(v.currentTarget.value||"0",10))})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"octaves",children:[S.jsx(pe.Label,{children:"Fractal Octaves"}),S.jsx(pe.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>g("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"lacunarity",children:[S.jsx(pe.Label,{children:"Fractal Lacunarity"}),S.jsx($d,{children:S.jsx(pe.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>g("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"gain",children:[S.jsx(pe.Label,{children:"Fractal Gain"}),S.jsx(pe.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>g("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"fractalType",children:[S.jsx(pe.Label,{children:"Fractal Type"}),S.jsx(pe.Select,{value:c.fractalType,onChange:v=>g("fractalType",v.currentTarget.value),children:p.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"frequency",children:[S.jsx(pe.Label,{children:"Frequency"}),S.jsx(pe.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>g("frequency",parseFloat(v.currentTarget.value||"0"))}),S.jsx(pe.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),S.jsxs(nr,{className:"g-3",children:[S.jsxs(vt,{md:6,lg:4,children:[S.jsxs(pe.Group,{controlId:"maxCellValue",children:[S.jsx(pe.Label,{children:"Max Terrain Height"}),S.jsx(pe.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>g("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(pe.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),S.jsxs(vt,{md:6,lg:4,children:[S.jsxs(pe.Group,{controlId:"thm",children:[S.jsx(pe.Label,{children:"Terrain Height Multiplier"}),S.jsx(pe.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>g("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(pe.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),S.jsxs(vt,{md:6,lg:4,children:[S.jsxs(pe.Group,{controlId:"colorSteps",children:[S.jsx(pe.Label,{children:"Terrain Steps"}),S.jsx(pe.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>g("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),S.jsx(pe.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),S.jsx(vt,{md:6,lg:4,children:S.jsxs(pe.Group,{controlId:"numColors",children:[S.jsx(pe.Label,{children:"Number of Terrain Colors"}),S.jsx(pe.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>g("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),S.jsx(pe.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),S.jsxs("div",{className:"mt-4",children:[S.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),S.jsx(nr,{className:"g-3",children:c.colors.map((v,C)=>S.jsx(vt,{xs:3,sm:2,md:1,lg:1,children:S.jsx(pe.Group,{controlId:`color-${C}`,children:S.jsx(pe.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:b=>{const T=b.currentTarget.value;g("colors",c.colors.map((M,k)=>k===C?T:M))},title:`Pick color ${C+1}`})})},C))})]}),S.jsxs("div",{className:"d-flex gap-2 mt-4",children:[S.jsx(ta,{variant:"primary",onClick:()=>d?.(c),children:"Apply"}),S.jsx(ta,{variant:"outline-secondary",onClick:()=>m(f),children:"Reset to Defaults"})]})]})})}function l2(s,u){const d=s>>>0,i=u>>>0||1;return(i&i-1)===0?d+(i-1)&~(i-1):Math.ceil(d/i)*i>>>0}function eh(s){if(typeof s!="string")return"";const u=s.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(u))return u;const d=u.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(d)return`vec${d[1]}${d[2][0]}`;const i=u.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const th={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function $0(s){const u={fields:[],size:0};let d=0,i=1;for(const f of s){const c=eh(f.type);if(!c)throw new Error(`Unsupported type: ${f.type}`);const m=c;if(m.startsWith("pad")){const v=parseInt(m.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${m}`);const C={name:f.name,type:m,offset:d,size:v,align:1};u.fields.push(C),d+=v;continue}const y=th[m];if(!y)throw new Error(`Unsupported non-pad type: ${m}`);d=l2(d,y.align);const p={name:f.name,type:m,offset:d,size:y.size,align:y.align};u.fields.push(p),d+=y.size,y.align>i&&(i=y.align)}return u.size=l2(d,Math.max(16,i)),u}function nh(s,u){const d=new ArrayBuffer(s.size),i=new DataView(d);for(const f of s.fields){if(f.type.startsWith("pad"))continue;const c=u[f.name];if(c==null)throw new Error(`Missing field '${f.name}'`);switch(f.type){case"f32":i.setFloat32(f.offset,+c,!0);break;case"u32":i.setUint32(f.offset,c>>>0,!0);break;case"i32":i.setInt32(f.offset,c|0,!0);break;case"bool":i.setUint32(f.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0),i.setFloat32(f.offset+12,c[3],!0);break;case"vec2u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0),i.setUint32(f.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0),i.setInt32(f.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${f.type}`)}}return d}function I0(s,u,d,i,f,c){const m=nh(u,d),g=c??s.createBuffer({size:u.size,usage:i,label:f});return s.queue.writeBuffer(g,0,m),g}const lh=$0([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function ah(s,u,d,i){const f={maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps>>>0,numberOfTerrainColors:(d?.length??0)>>>0,_padT0:[0,0]};return I0(s,lh,f,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function rh(s,u,d){{const i=s.createBuffer({label:"Terrain Colors Buffer",size:u.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return s.queue.writeBuffer(i,0,uh(u)),i}}function uh(s){const u=[];for(let d of s){/^#([0-9a-fA-F]{3})$/.test(d)&&(d=d.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=d.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const f=i[1],c=parseInt(f.slice(0,2),16)/255,m=parseInt(f.slice(2,4),16)/255,g=parseInt(f.slice(4,6),16)/255;u.push(c,m,g,1)}return new Float32Array(u)}const ih=$0([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"simIndex",type:"u32"},{name:"showDebug",type:"u32"},{name:"pixelScale",type:"u32"}]);function a2(s,u,d){const i={size:[u.width,u.height],time:u.time,simIndex:u.simIndex,showDebug:u.showDebug?1:0,pixelScale:u.pixelScale};return I0(s,ih,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",d)}const ch=$0([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouse2Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"visibleRect",type:"vec4u"}]);function r2(s,u,d){const i={mousePos:[u.mousePos.x,u.mousePos.y],mouse0Held:u.mouse0Held?1:0,mouse1Held:u.mouse1Held?1:0,mouse2Held:u.mouse2Held?1:0,mouseRadius:u.mouseRadius,visibleRect:[u.visibleRect.x0,u.visibleRect.y0,u.visibleRect.x1,u.visibleRect.y1]};return I0(s,ch,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",d)}function oh(s,u,d,i){const f={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},currentCells:{binding:3,type:"storage",buffer:i.prevCellsBuffer},nextCells:{binding:4,type:"storage",buffer:i.nextCellsBuffer},terrainColors:{binding:5,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:6,type:"storage",buffer:i.outputTextureBuffer},cursorQuery:{binding:7,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:8,type:"storage",buffer:i.chunkDataBuffer},sprites:{binding:9,type:"read-only-storage",buffer:i.spriteDataBuffer}},c=s.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(f).filter(G=>!["sprite","spriteColors"].includes(G)).map(G=>({binding:f[G].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:f[G].type}}))}),m=s.createBindGroup({label:"Unified Compute BG A",layout:c,entries:Object.keys(f).map(G=>G==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:G==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:{binding:f[G].binding,resource:{buffer:f[G].buffer}})}),g=s.createBindGroup({label:"Unified Compute BG show B",layout:c,entries:Object.keys(f).map(G=>G==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:G==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:{binding:f[G].binding,resource:{buffer:f[G].buffer}})}),y=s.createBindGroupLayout({label:"Render BGL",entries:[{binding:f.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uView.type}},{binding:f.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uInput.type}},{binding:f.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:f.outputTex.type}}]}),p=s.createRenderPipeline({label:"Render Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[y],label:"Render Pipeline Layout"}),vertex:{module:u,entryPoint:"vs"},fragment:{module:u,entryPoint:"fs",targets:[{format:d}]},primitive:{topology:"triangle-list"}}),v=s.createComputePipeline({label:"Normal Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Normal Compute Pipeline Layout"}),compute:{module:u,entryPoint:"calc_normals"}}),C=s.createComputePipeline({label:"Cursor Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Cursor Query Pipeline Layout"}),compute:{module:u,entryPoint:"cursor_query"}}),b=s.createComputePipeline({label:"Total Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Total Query Pipeline Layout"}),compute:{module:u,entryPoint:"total_query"}}),T=s.createComputePipeline({label:"Chunk Data Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Chunk Data Pipeline Layout"}),compute:{module:u,entryPoint:"chunk_data_calc"}}),M=s.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"terrain_render"}}),k=s.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"shadow_render"}}),B=s.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"fluid_render"}}),U=s.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"debug_render"}}),j=s.createComputePipeline({label:"Sprite Render Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Sprite Render Compute Pipeline Layout"}),compute:{module:u,entryPoint:"sprite_render"}}),X=s.createComputePipeline({label:"Step Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Step Compute Pipeline Layout"}),compute:{module:u,entryPoint:"step"}}),K=s.createBindGroup({label:"Render BG",layout:y,entries:[{binding:f.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:f.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:f.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:p,normalComputePipeline:v,cursorQueryPipeline:C,totalQueryPipeline:b,chunkDataPipeline:T,terrainTextureComputePipeline:M,shadowTextureComputePipeline:k,fluidTextureComputePipeline:B,debugTextureComputePipeline:U,spriteRenderComputePipeline:j,stepComputePipeline:X},bindGroups:{unifiedComputeBG_A:m,unifiedComputeBG_B:g,renderBG:K}}}function sh(s,u){return s.mouse0Held===u.mouse0Held&&s.mouse1Held===u.mouse1Held&&s.mouse2Held===u.mouse2Held&&s.mouse0Pressed===u.mouse0Pressed&&s.mouse1Pressed===u.mouse1Pressed&&s.mouse2Pressed===u.mouse2Pressed&&s.mouseRadius===u.mouseRadius&&s.mouseMoved===u.mouseMoved&&s.cursorVisible===u.cursorVisible&&s.mousePosition.x===u.mousePosition.x&&s.mousePosition.y===u.mousePosition.y&&s.visibleRect.x0===u.visibleRect.x0&&s.visibleRect.y0===u.visibleRect.y0&&s.visibleRect.x1===u.visibleRect.x1&&s.visibleRect.y1===u.visibleRect.y1&&s.visibleRect.width===u.visibleRect.width&&s.visibleRect.height===u.visibleRect.height&&s.visibleRectChanged===u.visibleRectChanged&&s.simulationSubSteps===u.simulationSubSteps}const fh={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseRadius:30,mouseMoved:!1,cursorVisible:!0,mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class dh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(u){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(u);const d=u-this.winMs;for(;this.times.length&&this.times[0]<d;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const lr=new dh,u2=64;async function hh(s,u=Cu,d,i,f,c){if(!s)return()=>{};s.__wgpuCleanup&&s.__wgpuCleanup();const m=!1;var g=!0,y=!0,p=!0;const v=await ud(),C=s.getContext("webgpu"),b=navigator.gpu.getPreferredCanvasFormat();s.style.imageRendering="pixelated",C.__deviceId=v.__id,s.width=u.width*u.pixelScale,s.height=u.height*u.pixelScale,C.configure({device:v,format:b,alphaMode:"opaque"});let T=Ad();const M=v.createShaderModule({label:"Rect Shader",code:T});var k=0,B=0,U=0,j=m;const X=()=>{j=!j},K=ze=>{j=ze},G=a2(v,{width:u.width,height:u.height,time:0,simIndex:0,showDebug:j,pixelScale:u.pixelScale});function P(){a2(v,{width:u.width,height:u.height,time:k,simIndex:U,showDebug:j,pixelScale:u.pixelScale},G)}const Y=d(),$=r2(v,{mousePos:Y.mousePosition,mouse0Held:Y.mouse0Held,mouse1Held:Y.mouse1Held,mouseRadius:Y.mouseRadius,visibleRect:Y.visibleRect}),ne=ah(v,{maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps},u.colors),de=rh(v,u.colors);function ve(ze,Ie,Qt){const Je=Math.ceil(ze/Qt),te=Math.ceil(Ie/Qt);return[Je,te]}const re=16,[ye,Re]=ve(u.width,u.height,re),ge=v.createBuffer({label:"Chunk Data",size:16*ye*Re,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(ge,0,new Float32Array(4*ye*Re));function H(ze){r2(v,{mousePos:ze.mousePosition,mouse0Held:ze.mouse0Held,mouse1Held:ze.mouse1Held,mouse2Held:ze.mouse2Held,mouseRadius:ze.mouseRadius,visibleRect:ze.visibleRect},$)}const F=u.width*u.height*4*4,ue=u.width*u.height*4*u.pixelScale*u.pixelScale,x=v.createBuffer({label:"Output Texture",size:F+ue,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(x,0,new Float32Array((F+ue)/4)),console.time("loadPackedSprites");const L=await(await fetch("./sprites_built/sprites_u32.bin")).arrayBuffer(),N=new Uint32Array(L);console.timeEnd("loadPackedSprites");const I=v.createBuffer({label:"Sprite Data",size:N.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(I,0,N);const se=12,ie=4*se,we=u.width*u.height*ie,_e=v.createBuffer({label:"Prev Cells",size:we,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),He=v.createBuffer({label:"Next Cells",size:we,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),xt=ze=>{const Ie=new Float32Array(u.width*u.height*se),Qt=id(ze,u.width,u.height,u.noiseType,u.fractalOctaves,u.fractalLacunarity,u.fractalGain,u.fractalType,u.frequency);for(let Je=0;Je<Qt.length;Je++){const te=Je*se;Ie[te]=Qt[Je]*100,Ie[te+8]=Math.floor(Math.random()*8)+0}v.queue.writeBuffer(_e,0,Ie),v.queue.writeBuffer(He,0,Ie),B=0,U=0,y=!0};var ft=u.seed;const bt=()=>{xt(ft)},zn=()=>{ft=Math.ceil(Math.random()*1e9),bt()};bt();const rn=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),le=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),ee=oh(v,M,b,{prevCellsBuffer:_e,nextCellsBuffer:He,terrainBuffer:ne,terrainColorsBuffer:de,viewUniformBuffer:G,inputUniformBuffer:$,outputTextureBuffer:x,cursorQueryBuffer:rn,chunkDataBuffer:ge,spriteDataBuffer:I}),oe={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},Ne=16,Ye=16,Ge=Math.ceil(u.width/Ne),Le=Math.ceil(u.height/Ye);let Ze=!0,Lt=0;var un=d();let It=!1;function Gt(ze=0){if(C.__deviceId!==v.__id)return;lr.begin();var Ie=d();sh(Ie,un)||(H(Ie),un=Ie);const Qt=B%6===0;v.pushErrorScope("validation"),k=ze*.001,P();const Je=v.createCommandEncoder({label:"Encoder"});{const te=Je.beginComputePass({label:"Step Compute Pass"});te.setPipeline(ee.piplines.stepComputePipeline);for(let cn=0;cn<Ie.simulationSubSteps*2;cn++)te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Ge,Le,1),Ze=!Ze,U++,P();c(U),te.end()}if((B===0||Ie.mouse0Held||Ie.mouse1Held)&&(p=!0),B<60&&(y=!0,g=!0,p=!0),Ie.visibleRectChanged&&(p=!0),g||y){const te=Je.beginComputePass({label:"Normal Compute Pass"});te.setPipeline(ee.piplines.normalComputePipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Ge,Le,1),te.end()}if(y){const te=Je.beginComputePass({label:"Terrain Texture Compute Pass"});te.setPipeline(ee.piplines.terrainTextureComputePipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Ge,Le,1),te.end()}if(p||y){const te=Je.beginComputePass({label:"Shadow Texture Compute Pass"});te.setPipeline(ee.piplines.shadowTextureComputePipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Ge,Le,1),te.end(),Ie={...Ie,visibleRectChanged:!1}}if(p||y){const te=Je.beginComputePass({label:"Fluid Texture Compute Pass"});te.setPipeline(ee.piplines.fluidTextureComputePipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Ge,Le,1),te.end(),Ie={...Ie,visibleRectChanged:!1}}if(B%10==0&&j){const te=Je.beginComputePass({label:"Debug Texture Compute Pass"});te.setPipeline(ee.piplines.debugTextureComputePipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Ge,Le,1),te.end()}if(Ie.mouse0Pressed){const te=Je.beginComputePass({label:"Sprite Render Compute Pass"});te.setPipeline(ee.piplines.spriteRenderComputePipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(Math.ceil(u2/Ne),Math.ceil(u2/Ye),1),te.end()}if(Qt){const te=Je.beginComputePass({label:"Cursor Query Pass"});te.setPipeline(ee.piplines.cursorQueryPipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(1,1,1),te.end()}if(B%60==0){const te=Je.beginComputePass({label:"Total Query Pass"});te.setPipeline(ee.piplines.totalQueryPipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(1,1,1),te.end()}{const te=Je.beginComputePass({label:"Chunk Data Pass"});te.setPipeline(ee.piplines.chunkDataPipeline),te.setBindGroup(0,Ze?ee.bindGroups.unifiedComputeBG_A:ee.bindGroups.unifiedComputeBG_B),te.dispatchWorkgroups(ye,Re,1),te.end()}oe.colorAttachments[0].view=C.getCurrentTexture().createView();{const te=Je.beginRenderPass(oe);te.setPipeline(ee.piplines.renderPipeline),te.setBindGroup(0,ee.bindGroups.renderBG),te.draw(3),te.end()}Qt&&!It&&Je.copyBufferToBuffer(rn,0,le,0,64),v.queue.submit([Je.finish()]),v.popErrorScope().then(te=>{te&&console.error(te.message)}),Qt&&!It&&(It=!0,le.mapAsync(GPUMapMode.READ).then(()=>{const te=new DataView(le.getMappedRange(0,64)),cn=te.getFloat32(0,!0),on=te.getFloat32(16,!0),pl=te.getFloat32(20,!0),Fn=te.getFloat32(24,!0),Tu=te.getFloat32(28,!0),rr=te.getFloat32(48,!0),ur=te.getFloat32(52,!0),na=te.getUint32(56,!0);f({height:cn,normal:{x:on,y:pl,z:Fn},fAmount:Tu,fluidTotal:rr,antiFluidTotal:ur,chunkUpdates:na})}).catch(()=>{}).finally(()=>{le.unmap(),It=!1})),y=!1,p=!1,g=!1,lr.end(ze),B++,Lt=requestAnimationFrame(Gt)}Lt=requestAnimationFrame(Gt);const $e=()=>{cancelAnimationFrame(Lt),G.destroy(),$.destroy(),ne.destroy(),de.destroy(),_e.destroy(),He.destroy(),x.destroy()};return s.__wgpuCleanup=$e,{cleanup:$e,resetMap:bt,randomizeMap:zn,toggleShowDebug:X,setShowDebug:K}}const mh=W.forwardRef(({noiseSettings:s=Cu,inputRef:u,setInput:d,setWebGPUHandle:i,setCursorQuery:f,style:c,setSimIndex:m,children:g},y)=>{const p=W.useRef(null);return W.useImperativeHandle(y,()=>p.current,[]),W.useEffect(()=>{if(!p.current)return;let v=()=>{},C=!1;const b=()=>new Promise(M=>requestAnimationFrame(()=>M())),T=()=>new Promise(M=>window.requestIdleCallback?window.requestIdleCallback(()=>M()):requestAnimationFrame(()=>M()));return(async()=>{if(await b(),C||(await T(),C))return;const M=await hh(p.current,s,()=>u.current,d,f,m);if(C){M.cleanup?.();return}v=M.cleanup,i(M)})(),()=>{C=!0,v?.()}},[s,d,i,f]),S.jsx("canvas",{ref:p,style:{...c,display:"block",width:"100%",height:"100%"},children:g})}),ph=Ft.memo(mh,(s,u)=>s.noiseSettings===u.noiseSettings&&s.children===u.children),gh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function yh({cursorQuery:s}){var c=Math.ceil(s.height),m=Math.abs(s.fAmount<0?Math.floor(s.fAmount):Math.ceil(s.fAmount));m+c>200&&(m=200-c);const g=c/200*150,y=m/200*150;var p="";return m>0&&(Math.abs(s.fAmount)<1?p=" < 1":p=`${m}`),S.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),S.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:s.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"0px"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:p})}),S.jsx("div",{style:{width:"50px",height:`${g}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:s.height>0?`${c}`:""})})]})}function vh({input:s}){return S.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${s.mousePosition.x}, ${s.mousePosition.y})`})}const Ke=({children:s})=>S.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:s});function xh(){return S.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:S.jsx($t,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:S.jsxs($t.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsx($t.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),S.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[S.jsxs("div",{children:[S.jsx(Ke,{children:"F11"})," — Toggle Fullscreen"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"F9"})," — Toggle Controls"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"F8"})," — Toggle Debug Stats"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"W"}),S.jsx(Ke,{children:"A"}),S.jsx(Ke,{children:"S"}),S.jsx(Ke,{children:"D"})," or ",S.jsx(Ke,{children:"←"}),S.jsx(Ke,{children:"→"}),S.jsx(Ke,{children:"↑"}),S.jsx(Ke,{children:"↓"})," — Pan Camera"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"ScrollWheel"})," — Zoom"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"Shift"})," +"," ",S.jsx(Ke,{children:"ScrollWheel"})," — Change Brush Radius"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"LMB"}),"/",S.jsx(Ke,{children:"RMB"})," — (Paint / Remove) Fluid"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"Spacebar"})," — Toggle Pause"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"Tab"})," / ",S.jsx(Ke,{children:"Shift"}),"+",S.jsx(Ke,{children:"Tab"})," — Increase / Decrease Speed"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"C"})," — Clear Map"]}),S.jsxs("div",{children:[S.jsx(Ke,{children:"R"})," — Randmoize Map"]})]})]})})})}var bh=["color","size","title","className"];function L0(){return L0=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var i in d)({}).hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},L0.apply(null,arguments)}function _h(s,u){if(s==null)return{};var d,i,f=Sh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)d=c[i],u.indexOf(d)===-1&&{}.propertyIsEnumerable.call(s,d)&&(f[d]=s[d])}return f}function Sh(s,u){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;d[i]=s[i]}return d}var H2=W.forwardRef(function(s,u){var d=s.color,i=d===void 0?"currentColor":d,f=s.size,c=f===void 0?"1em":f,m=s.title,g=m===void 0?null:m,y=s.className,p=y===void 0?"":y,v=_h(s,bh);return Ft.createElement("svg",L0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",p].filter(Boolean).join(" ")},v),g?Ft.createElement("title",null,g):null,Ft.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});H2.propTypes={color:st.string,size:st.oneOfType([st.string,st.number]),title:st.string,className:st.string};var Ch=["color","size","title","className"];function P0(){return P0=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var i in d)({}).hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},P0.apply(null,arguments)}function Th(s,u){if(s==null)return{};var d,i,f=Rh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)d=c[i],u.indexOf(d)===-1&&{}.propertyIsEnumerable.call(s,d)&&(f[d]=s[d])}return f}function Rh(s,u){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;d[i]=s[i]}return d}var G2=W.forwardRef(function(s,u){var d=s.color,i=d===void 0?"currentColor":d,f=s.size,c=f===void 0?"1em":f,m=s.title,g=m===void 0?null:m,y=s.className,p=y===void 0?"":y,v=Th(s,Ch);return Ft.createElement("svg",P0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",p].filter(Boolean).join(" ")},v),g?Ft.createElement("title",null,g):null,Ft.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});G2.propTypes={color:st.string,size:st.oneOfType([st.string,st.number]),title:st.string,className:st.string};const zt=[.5,1,2,3],B2=(s,u,d)=>Math.min(d,Math.max(u,s));function Dh(s,u=!0){if(u){var d=(zt.indexOf(s)+1)%zt.length;return zt[d]}else{var d=B2(zt.indexOf(s)+1,0,zt.length-1);return zt[d]}}function zh(s,u=!0){if(u){var d=(zt.indexOf(s)-1+zt.length)%zt.length;return zt[d]}else{var d=B2(zt.indexOf(s)-1,0,zt.length-1);return zt[d]}}function Mh({gameSpeed:s,paused:u,onChange:d,className:i,size:f}){const c=p=>d({paused:!1,gameSpeed:p}),m=()=>d({paused:!u,gameSpeed:s}),y={backgroundColor:"rgba(99, 99, 99, 0.57)",border:"4px solid white",borderRadius:0,fontSize:"20px",width:40,height:40,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none"};return S.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:S.jsxs(K0,{className:`${i} rounded-0`,size:f,style:{border:"none"},children:[S.jsx(ta,{type:"button",variant:"primary",onClick:m,"aria-pressed":u,"aria-label":u?"Resume":"Pause",title:u?"Resume":"Pause",style:y,children:u?S.jsx(G2,{}):S.jsx(H2,{})}),zt.map(p=>S.jsx(ta,{type:"button",variant:s===p&&!u?"primary":"outline-secondary",active:s===p&&!u,onClick:()=>c(p),"aria-pressed":s===p&&!u,"aria-label":p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,title:p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,style:{...y,color:s===p&&!u?"white":"darkgray",marginLeft:"-4px",fontSize:p<1?"15px":""},children:p<1?`1/${Math.round(1/p)}x`:`${p}x`},p))]})})}function Ah({cursorQuery:s,gameSpeed:u,mode:d="full",simIndex:i}){const[f,c]=W.useState(0),[m,g]=W.useState(0),[y,p]=W.useState(0);W.useEffect(()=>{const T=setInterval(()=>{c(lr.fps),g(lr.cpuMs),p(lr.frameCount)},250);return()=>clearInterval(T)},[]);const v=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),C=`${m.toFixed(2)}`.padStart(5,"0"),b=s.chunkUpdates*16*16*u*4;return d=="simple"?S.jsx("div",{children:`FPS: ${f}`}):S.jsx($t,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:S.jsxs($t.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsxs($t.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",S.jsx(Ke,{children:"F8"})," to close"]}),S.jsx("div",{children:`FPS: ${f} (Frame Duration: ${C} ms) (Frames: ${v.format(y)})`}),S.jsx("div",{children:`Simulation Steps: ${v.format(i)}`}),S.jsx("div",{children:`Chunk Updates: ${v.format(s.chunkUpdates)}`}),S.jsx("div",{children:`Cell Updates per frame: ${v.format(b)}`}),S.jsx("div",{children:`Total Fluid: ${v.format(Math.ceil(s.fluidTotal))}`}),S.jsx("div",{children:`Total Anti Fluid: ${v.format(Math.ceil(s.antiFluidTotal))}`}),S.jsx("div",{children:`Total Combined Fluid: ${v.format(Math.ceil(s.fluidTotal-s.antiFluidTotal))}`})]})})}function Oh({tabs:s,initialActiveKey:u=null,onTabChange:d,panelHeight:i=150,className:f,children:c,closeOnEscape:m=!0,closeOnOutsideClick:g=!0,hotkey:y="b"}){const p={imageRendering:"pixelated",pointerEvents:"none",aspectRatio:"initial",width:"100%"},v=W.useMemo(()=>[{key:"terraform",icon:S.jsx("img",{src:"./icons/icon_paintbrush.png",style:p}),label:"Terraform",hotkey:"1"},{key:"econ",icon:S.jsx("img",{src:"./icons/icon_coin.png",style:p}),label:"Economy",hotkey:"2"},{key:"power",icon:S.jsx("img",{src:"./icons/icon_power.png",style:p}),label:"Power",hotkey:"3"},{key:"defend",icon:S.jsx("img",{src:"./icons/icon_shield.png",style:p}),label:"Defend",hotkey:"4"}],[]),C=s?.length?s:v,[b,T]=W.useState(u),M=W.useRef(null),[k,B]=W.useState(u),U=$=>{const ne=b===$?null:$;T(ne),d?.(ne),ne!=null&&B(ne)},j=()=>{k!=null&&U(k)},X=()=>{T(null),d?.(null)},K=48,G=44,P=44,Y=2.5;return W.useEffect(()=>{if(!g)return;const $=ne=>{if(!b)return;const de=ne.target;if(!de)return;const ve=M.current;ve&&(ve.contains(de)||(T(null),d?.(null)))};return window.addEventListener("pointerdown",$,!0),()=>window.removeEventListener("pointerdown",$,!0)},[b,g,d]),W.useEffect(()=>{const $=ne=>{ne.key==="Escape"&&b?X():ne.key===y?b?b&&X():j():C.forEach(de=>{ne.key==de.hotkey&&U(de.key)})};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[b,m,d]),S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
        .tabButton:hover
        {
            height: ${P+4}px;
        }
      `}),S.jsx("div",{className:f,style:{position:"absolute",left:0,right:0,bottom:0,pointerEvents:"none",zIndex:10},children:S.jsxs("div",{ref:M,style:{position:"absolute",left:0,right:0,bottom:0,height:i+K,transform:b?"translateY(0)":`translateY(${i}px)`,transition:"transform 220ms ease",display:"flex",flexDirection:"column",pointerEvents:"none"},children:[S.jsx("div",{style:{height:K,display:"flex",justifyContent:"start",alignItems:"flex-end",gap:8,padding:"0 12px",paddingLeft:"100px",borderTopLeftRadius:16,borderTopRightRadius:16},children:S.jsx(K0,{style:{display:"inline-flex",alignItems:"flex-end",pointerEvents:"auto"},onMouseDown:$=>$.preventDefault(),children:C.map($=>{const ne=b===$.key;return S.jsx(ta,{className:"tabButton",onClick:()=>!$.disabled&&U($.key),disabled:$.disabled,style:{borderTop:"solid white 4px",borderLeft:"solid white 4px",borderRight:"solid white 4px",borderBottom:"none",borderRadius:"0px 0px 0px 0px",width:G,height:ne?P*2:P,margin:`0px ${Y}px`,backgroundColor:"rgba(0,0,0,.35)",background:"none",display:"inline-flex",alignItems:"flex-start",outline:"none !important",padding:"4px"},"aria-label":$.label,title:$.label,children:$.icon},$.key)})})}),S.jsx($t,{text:"light",style:{height:i,borderRadius:0,margin:0,boxShadow:b?"0 -6px 18px rgba(0,0,0,.45)":"none",pointerEvents:b?"auto":"none",backgroundColor:"rgba(46, 44, 44, 0.51)",borderTop:"solid white 4px"},children:S.jsx($t.Body,{style:{display:"flex",gap:12,alignItems:"stretch",justifyContent:"flex-start",padding:12},children:b?C.find($=>$.key===b)?.content??S.jsxs("div",{style:{opacity:.8,fontSize:14},children:[S.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",S.jsx("b",{children:b})," ","tab."]}),S.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]}):S.jsx("div",{style:{opacity:.65},children:"Choose a tab to open the menu."})})}),S.jsx("div",{style:{position:"relative",bottom:i},children:c})]})})]})}function Vh({settings:s,setSettings:u,input:d,setInput:i,cursorQuery:f,paused:c,setPaused:m,gameSpeed:g,setGameSpeed:y,simIndex:p,showControlsUI:v,showDebugUI:C}){return S.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[S.jsx("div",{id:"output"}),v&&S.jsx(xh,{}),S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx(Ah,{cursorQuery:f,gameSpeed:g,simIndex:p,mode:C?"full":"simple"})}),S.jsxs(Oh,{children:[S.jsx(vh,{input:d}),S.jsx(Mh,{gameSpeed:g,paused:c,onChange:({paused:b,gameSpeed:T})=>{m(b),y(T),i({...d,simulationSubSteps:b?0:Math.ceil(4*T)})}}),S.jsx(yh,{cursorQuery:f})]})]})}const Eh=s=>{const u=s;if(!u)return!1;const d=u.tagName?.toLowerCase();return d==="input"||d==="textarea"||u.isContentEditable||d==="select"},Rn=(s,u,d)=>Math.min(d,Math.max(u,s)),i2=(s,u,d,i)=>{const f=Math.max(0,(d-s)/2),c=Math.max(0,(i-u)/2);return{xMin:-f,xMax:f,yMin:-c,yMax:c}};function wh(){const[s,u]=W.useState(Cu),[d,i]=Ft.useState(!1),[f,c]=Ft.useState(1),[m,g]=W.useState(0),[y,p]=W.useState(!0),[v,C]=W.useState(!1),[b,T]=W.useState(fh),M=W.useRef(b);W.useEffect(()=>{M.current=b},[b]);const[k,B]=W.useState(gh),U=W.useRef(null),[j,X]=W.useState({width:1920,height:1080}),[K,G]=W.useState({x:0,y:0}),[P,Y]=W.useState(!1),[$,ne]=W.useState(2),[de,ve]=W.useState(null),re=W.useRef(null);W.useEffect(()=>{re.current=de},[de]);const ye=W.useRef(null),Re=W.useCallback((F,ue,x,V=!1)=>{const L=U.current;if(!L)return;const N=F!==void 0&&ue!==void 0?{x:F,y:ue}:ye.current;if(!N)return;const I=L.getBoundingClientRect();if(I.width===0||I.height===0)return;const se=L.width/s.pixelScale/I.width,ie=L.height/s.pixelScale/I.height,we=Math.floor((N.x-I.left)*se),_e=Math.floor((N.y-I.top)*ie);T(He=>{const xt=Rn(we,0,s.width-1),ft=Rn(_e,0,s.height-1);return!V&&He.mousePosition.x===xt&&He.mousePosition.y===ft?He:{...He,mousePosition:{x:xt,y:ft},mouseMoved:V,cursorVisible:x==null||x==U.current}})},[s.width,s.height,s.pixelScale]),ge=W.useCallback((F,ue)=>{const x=U.current;if(!x)return{x:0,y:0};const V={x:F,y:ue},L=x.getBoundingClientRect();if(L.width===0||L.height===0)return{x:0,y:0};const N=x.width/s.pixelScale/L.width,I=x.height/s.pixelScale/L.height,se=Math.floor((V.x-L.left)*N),ie=Math.floor((V.y-L.top)*I),we=Rn(se,0,s.width-1),_e=Rn(ie,0,s.height-1);return{x:we,y:_e}},[s.width,s.height,s.pixelScale]);W.useEffect(()=>{const F=new Set;let ue=0,x=performance.now();const V=600;re.current?.setShowDebug(v);const L=()=>{const le=window.innerWidth,ee=window.innerHeight,oe=s.width/s.height;let Ne=le,Ye=Ne/oe;return Ye<ee&&(Ye=ee,Ne=Ye*oe),{vw:le,vh:ee,baseW:Ne,baseH:Ye}},N=()=>{const{vw:le,baseW:ee}=L();return le/ee},I=le=>{if(Eh(le.target))return;const ee=le.key.toLowerCase();(ee==="w"||ee==="a"||ee==="s"||ee==="d"||ee==="arrowup"||ee==="arrowleft"||ee==="arrowdown"||ee==="arrowright")&&(F.add(ee),le.preventDefault());const oe=()=>{i(Ge=>{let Le=!Ge;return T(Ze=>({...Ze,simulationSubSteps:Le?0:Math.ceil(f)})),Le}),le.preventDefault()},Ne=()=>{c(Ge=>{let Le=Dh(Ge,!1);return T(Ze=>({...Ze,simulationSubSteps:d?0:Math.ceil(Le)})),Le}),le.preventDefault()},Ye=()=>{c(Ge=>{let Le=zh(Ge,!1);return T(Ze=>({...Ze,simulationSubSteps:d?0:Math.ceil(Le)})),Le}),le.preventDefault()};le.code=="Space"?oe():le.code=="Tab"?(d?oe():le.shiftKey?Ye():Ne(),le.preventDefault()):le.code=="F9"?(p(Ge=>!Ge),le.preventDefault()):le.code=="F8"?(C(Ge=>(re.current?.setShowDebug(!Ge),!Ge)),le.preventDefault()):le.code=="KeyC"?(re.current?.resetMap(),le.preventDefault()):!le.ctrlKey&&le.code=="KeyR"&&(re.current?.randomizeMap(),le.preventDefault())},se=le=>{const ee=le.key.toLowerCase();F.delete(ee)};function ie(le,ee,oe,Ne){const Ye=Math.max(le/oe,ee/Ne),Ge=Math.min(le*4/oe,ee*4/Ne);return{minScale:Ye,maxScale:Ge}}function we(){const le=window.innerWidth,ee=window.innerHeight,oe=s.width/s.height;let Ne=le,Ye=Ne/oe;Ye<ee&&(Ye=ee,Ne=Ye*oe);const{minScale:Ge,maxScale:Le}=ie(le,ee,Ne,Ye),Ze=Math.min(Math.max($,Ge),Le),Lt=Ne*Ze,un=Ye*Ze,{xMin:It,xMax:Gt,yMin:$e,yMax:Pt}=i2(le,ee,Lt,un);X({width:Lt,height:un}),G(ze=>({x:Rn(ze.x,It,Gt),y:Rn(ze.y,$e,Pt)})),requestAnimationFrame(()=>Re()),J()}const _e=le=>{let ee=0,oe=0;if((F.has("w")||F.has("arrowup"))&&(oe-=1),(F.has("s")||F.has("arrowdown"))&&(oe+=1),(F.has("a")||F.has("arrowleft"))&&(ee-=1),(F.has("d")||F.has("arrowright"))&&(ee+=1),ee!==0||oe!==0){const Ne=Math.hypot(ee,oe)||1;ee/=Ne,oe/=Ne;const Ye=window.innerWidth,Ge=window.innerHeight,Le=j.width,Ze=j.height,{xMin:Lt,xMax:un,yMin:It,yMax:Gt}=i2(Ye,Ge,Le,Ze);G($e=>({x:Rn($e.x-ee*V*$*le,Lt,un),y:Rn($e.y-oe*V*$*le,It,Gt)})),requestAnimationFrame(()=>Re()),J()}};function He(le){le.preventDefault();const ee=Math.sign(le.deltaY)*-1;if(le.shiftKey)T(oe=>{const Ne=.1*oe.mouseRadius*ee,Ye=Math.min(Math.max(5,oe.mouseRadius+Ne),s.width/2);return{...oe,mouseRadius:Ye}});else{const oe=N(),Ne=4;ne(Ye=>Rn(Ye+.1*Ye*ee,oe,Ne))}}function xt(le){ye.current={x:le.clientX,y:le.clientY},Re(le.clientX,le.clientY,le.target,!0)}const ft=le=>{le.button===2&&le.preventDefault(),T(ee=>{const oe={...ee};return le.button===0&&(oe.mouse0Held=!0,oe.mouse0Pressed=!0),le.button===1&&(oe.mouse1Held=!0,oe.mouse1Pressed=!0),le.button===2&&(oe.mouse2Held=!0,oe.mouse2Pressed=!0),oe})},bt=le=>{T(ee=>{const oe={...ee};return le.button===0&&(oe.mouse0Held=!1,oe.mouse0Pressed=!1),le.button===1&&(oe.mouse1Held=!1,oe.mouse1Pressed=!1),le.button===2&&(oe.mouse2Held=!1,oe.mouse2Pressed=!1),oe})};function zn(le){le.preventDefault()}const rn=async le=>{const ee=(le-x)/1e3;x=le,_e(ee),J(),ue=requestAnimationFrame(rn),(M.current.mouse0Pressed||M.current.mouse1Pressed||M.current.mouse2Pressed||M.current.mouseMoved)&&T(oe=>({...oe,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseMoved:!1}))};return window.addEventListener("mousemove",xt),U.current?.addEventListener("mouseup",bt),window.addEventListener("contextmenu",zn),U.current?.addEventListener("mousedown",ft),window.addEventListener("keydown",I),window.addEventListener("keyup",se),U.current?.addEventListener("wheel",He,{passive:!1}),window.addEventListener("resize",we),we(),ue=requestAnimationFrame(rn),J(),()=>{cancelAnimationFrame(ue),window.removeEventListener("mousemove",xt),U.current?.removeEventListener("mouseup",bt),window.removeEventListener("contextmenu",zn),U.current?.removeEventListener("mousedown",ft),window.removeEventListener("keydown",I),window.removeEventListener("keyup",se),U.current?.removeEventListener("wheel",He),window.removeEventListener("resize",we)}},[j.width,j.height,$,d,T,i,f,c,p]);const H=W.useRef(null),J=W.useCallback((F=!0)=>{const ue=()=>{if(!U.current)return;const V=ge(0,0),L=ge(window.innerWidth,window.innerHeight),N={x0:V.x,y0:V.y,x1:L.x,y1:L.y,width:L.x-V.x,height:L.y-V.y};!N||H.current&&N.x0===H.current.x0&&N.y0===H.current.y0&&N.x1===H.current.x1&&N.y1===H.current.y1||(H.current=N,T(se=>({...se,visibleRect:N,visibleRectChanged:!0})))};F?requestAnimationFrame(ue):ue()},[T,ge,window.innerWidth,window.innerHeight]);return S.jsx(S.Fragment,{children:S.jsxs("div",{id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[S.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:j.width,height:j.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${K.x}px, ${K.y}px, 0)`,transition:P?"transform 360ms ease-out":"none",willChange:"transform"},children:S.jsx(ph,{ref:U,noiseSettings:s,inputRef:M,setInput:T,setWebGPUHandle:ve,setCursorQuery:B,setSimIndex:g})}),S.jsx(Vh,{settings:s,setSettings:u,input:b,setInput:F=>{T(F)},cursorQuery:k,paused:d,setPaused:i,gameSpeed:f,setGameSpeed:c,simIndex:m,showControlsUI:y,showDebugUI:v})]})})}rd.createRoot(document.getElementById("root")).render(S.jsx(Ft.StrictMode,{children:S.jsx(wh,{})}));
