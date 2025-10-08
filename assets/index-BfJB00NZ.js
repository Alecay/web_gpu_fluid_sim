(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))i(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function d(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(f){if(f.ep)return;f.ep=!0;const c=d(f);fetch(f.href,c)}})();function Rr(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Y0={exports:{}},nu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function K3(){if(Zf)return nu;Zf=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function d(i,f,c){var h=null;if(c!==void 0&&(h=""+c),f.key!==void 0&&(h=""+f.key),"key"in f){c={};for(var g in f)g!=="key"&&(c[g]=f[g])}else c=f;return f=c.ref,{$$typeof:s,type:i,key:h,ref:f!==void 0?f:null,props:c}}return nu.Fragment=r,nu.jsx=d,nu.jsxs=d,nu}var Lf;function J3(){return Lf||(Lf=1,Y0.exports=K3()),Y0.exports}var S=J3(),X0={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function W3(){if(Pf)return xe;Pf=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,k={};function B(x,V,q){this.props=x,this.context=V,this.refs=k,this.updater=q||T}B.prototype.isReactComponent={},B.prototype.setState=function(x,V){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,V,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function U(){}U.prototype=B.prototype;function j(x,V,q){this.props=x,this.context=V,this.refs=k,this.updater=q||T}var X=j.prototype=new U;X.constructor=j,E(X,B.prototype),X.isPureReactComponent=!0;var K=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function Y(x,V,q,Z,I,ce){return q=ce.ref,{$$typeof:s,type:x,key:V,ref:q!==void 0?q:null,props:ce}}function F(x,V){return Y(x.type,V,void 0,void 0,void 0,x.props)}function te(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function se(x){var V={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return V[q]})}var ve=/\/+/g;function ae(x,V){return typeof x=="object"&&x!==null&&x.key!=null?se(""+x.key):V.toString(36)}function ye(){}function De(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(V){x.status==="pending"&&(x.status="fulfilled",x.value=V)},function(V){x.status==="pending"&&(x.status="rejected",x.reason=V)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function pe(x,V,q,Z,I){var ce=typeof x;(ce==="undefined"||ce==="boolean")&&(x=null);var re=!1;if(x===null)re=!0;else switch(ce){case"bigint":case"string":case"number":re=!0;break;case"object":switch(x.$$typeof){case s:case r:re=!0;break;case v:return re=x._init,pe(re(x._payload),V,q,Z,I)}}if(re)return I=I(x),re=Z===""?"."+ae(x,0):Z,K(I)?(q="",re!=null&&(q=re.replace(ve,"$&/")+"/"),pe(I,V,q,"",function(Ue){return Ue})):I!=null&&(te(I)&&(I=F(I,q+(I.key==null||x&&x.key===I.key?"":(""+I.key).replace(ve,"$&/")+"/")+re)),V.push(I)),1;re=0;var we=Z===""?".":Z+":";if(K(x))for(var Re=0;Re<x.length;Re++)Z=x[Re],ce=we+ae(Z,Re),re+=pe(Z,V,q,ce,I);else if(Re=b(x),typeof Re=="function")for(x=Re.call(x),Re=0;!(Z=x.next()).done;)Z=Z.value,ce=we+ae(Z,Re++),re+=pe(Z,V,q,ce,I);else if(ce==="object"){if(typeof x.then=="function")return pe(De(x),V,q,Z,I);throw V=String(x),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return re}function H(x,V,q){if(x==null)return x;var Z=[],I=0;return pe(x,Z,"","",function(ce){return V.call(q,ce,I++)}),Z}function J(x){if(x._status===-1){var V=x._result;V=V(),V.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=V)}if(x._status===1)return x._result.default;throw x._result}var $=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ue(){}return xe.Children={map:H,forEach:function(x,V,q){H(x,function(){V.apply(this,arguments)},q)},count:function(x){var V=0;return H(x,function(){V++}),V},toArray:function(x){return H(x,function(V){return V})||[]},only:function(x){if(!te(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},xe.Component=B,xe.Fragment=d,xe.Profiler=f,xe.PureComponent=j,xe.StrictMode=i,xe.Suspense=y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,xe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},xe.cache=function(x){return function(){return x.apply(null,arguments)}},xe.cloneElement=function(x,V,q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Z=E({},x.props),I=x.key,ce=void 0;if(V!=null)for(re in V.ref!==void 0&&(ce=void 0),V.key!==void 0&&(I=""+V.key),V)!P.call(V,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&V.ref===void 0||(Z[re]=V[re]);var re=arguments.length-2;if(re===1)Z.children=q;else if(1<re){for(var we=Array(re),Re=0;Re<re;Re++)we[Re]=arguments[Re+2];Z.children=we}return Y(x.type,I,void 0,void 0,ce,Z)},xe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},xe.createElement=function(x,V,q){var Z,I={},ce=null;if(V!=null)for(Z in V.key!==void 0&&(ce=""+V.key),V)P.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(I[Z]=V[Z]);var re=arguments.length-2;if(re===1)I.children=q;else if(1<re){for(var we=Array(re),Re=0;Re<re;Re++)we[Re]=arguments[Re+2];I.children=we}if(x&&x.defaultProps)for(Z in re=x.defaultProps,re)I[Z]===void 0&&(I[Z]=re[Z]);return Y(x,ce,void 0,void 0,null,I)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(x){return{$$typeof:g,render:x}},xe.isValidElement=te,xe.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:J}},xe.memo=function(x,V){return{$$typeof:p,type:x,compare:V===void 0?null:V}},xe.startTransition=function(x){var V=G.T,q={};G.T=q;try{var Z=x(),I=G.S;I!==null&&I(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ue,$)}catch(ce){$(ce)}finally{G.T=V}},xe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},xe.use=function(x){return G.H.use(x)},xe.useActionState=function(x,V,q){return G.H.useActionState(x,V,q)},xe.useCallback=function(x,V){return G.H.useCallback(x,V)},xe.useContext=function(x){return G.H.useContext(x)},xe.useDebugValue=function(){},xe.useDeferredValue=function(x,V){return G.H.useDeferredValue(x,V)},xe.useEffect=function(x,V,q){var Z=G.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(x,V)},xe.useId=function(){return G.H.useId()},xe.useImperativeHandle=function(x,V,q){return G.H.useImperativeHandle(x,V,q)},xe.useInsertionEffect=function(x,V){return G.H.useInsertionEffect(x,V)},xe.useLayoutEffect=function(x,V){return G.H.useLayoutEffect(x,V)},xe.useMemo=function(x,V){return G.H.useMemo(x,V)},xe.useOptimistic=function(x,V){return G.H.useOptimistic(x,V)},xe.useReducer=function(x,V,q){return G.H.useReducer(x,V,q)},xe.useRef=function(x){return G.H.useRef(x)},xe.useState=function(x){return G.H.useState(x)},xe.useSyncExternalStore=function(x,V,q){return G.H.useSyncExternalStore(x,V,q)},xe.useTransition=function(){return G.H.useTransition()},xe.version="19.1.1",xe}var Qf;function $0(){return Qf||(Qf=1,X0.exports=W3()),X0.exports}var W=$0();const It=Rr(W);var k0={exports:{}},lu={},q0={exports:{}},N0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function $3(){return Kf||(Kf=1,(function(s){function r(H,J){var $=H.length;H.push(J);e:for(;0<$;){var ue=$-1>>>1,x=H[ue];if(0<f(x,J))H[ue]=J,H[$]=x,$=ue;else break e}}function d(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var J=H[0],$=H.pop();if($!==J){H[0]=$;e:for(var ue=0,x=H.length,V=x>>>1;ue<V;){var q=2*(ue+1)-1,Z=H[q],I=q+1,ce=H[I];if(0>f(Z,$))I<x&&0>f(ce,Z)?(H[ue]=ce,H[I]=$,ue=I):(H[ue]=Z,H[q]=$,ue=q);else if(I<x&&0>f(ce,$))H[ue]=ce,H[I]=$,ue=I;else break e}}return J}function f(H,J){var $=H.sortIndex-J.sortIndex;return $!==0?$:H.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,g=h.now();s.unstable_now=function(){return h.now()-g}}var y=[],p=[],v=1,C=null,b=3,T=!1,E=!1,k=!1,B=!1,U=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(H){for(var J=d(p);J!==null;){if(J.callback===null)i(p);else if(J.startTime<=H)i(p),J.sortIndex=J.expirationTime,r(y,J);else break;J=d(p)}}function G(H){if(k=!1,K(H),!E)if(d(y)!==null)E=!0,P||(P=!0,ae());else{var J=d(p);J!==null&&pe(G,J.startTime-H)}}var P=!1,Y=-1,F=5,te=-1;function se(){return B?!0:!(s.unstable_now()-te<F)}function ve(){if(B=!1,P){var H=s.unstable_now();te=H;var J=!0;try{e:{E=!1,k&&(k=!1,j(Y),Y=-1),T=!0;var $=b;try{t:{for(K(H),C=d(y);C!==null&&!(C.expirationTime>H&&se());){var ue=C.callback;if(typeof ue=="function"){C.callback=null,b=C.priorityLevel;var x=ue(C.expirationTime<=H);if(H=s.unstable_now(),typeof x=="function"){C.callback=x,K(H),J=!0;break t}C===d(y)&&i(y),K(H)}else i(y);C=d(y)}if(C!==null)J=!0;else{var V=d(p);V!==null&&pe(G,V.startTime-H),J=!1}}break e}finally{C=null,b=$,T=!1}J=void 0}}finally{J?ae():P=!1}}}var ae;if(typeof X=="function")ae=function(){X(ve)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,De=ye.port2;ye.port1.onmessage=ve,ae=function(){De.postMessage(null)}}else ae=function(){U(ve,0)};function pe(H,J){Y=U(function(){H(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return b},s.unstable_next=function(H){switch(b){case 1:case 2:case 3:var J=3;break;default:J=b}var $=b;b=J;try{return H()}finally{b=$}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=b;b=H;try{return J()}finally{b=$}},s.unstable_scheduleCallback=function(H,J,$){var ue=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ue+$:ue):$=ue,H){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,H={id:v++,callback:J,priorityLevel:H,startTime:$,expirationTime:x,sortIndex:-1},$>ue?(H.sortIndex=$,r(p,H),d(y)===null&&H===d(p)&&(k?(j(Y),Y=-1):k=!0,pe(G,$-ue))):(H.sortIndex=x,r(y,H),E||T||(E=!0,P||(P=!0,ae()))),H},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(H){var J=b;return function(){var $=b;b=J;try{return H.apply(this,arguments)}finally{b=$}}}})(N0)),N0}var Jf;function F3(){return Jf||(Jf=1,q0.exports=$3()),q0.exports}var Z0={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function I3(){if(Wf)return St;Wf=1;var s=$0();function r(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var i={d:{f:d,r:function(){throw Error(r(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(y,p,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:y,containerInfo:p,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,St.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return c(y,p,null,v)},St.flushSync=function(y){var p=h.T,v=i.p;try{if(h.T=null,i.p=2,y)return y()}finally{h.T=p,i.p=v,i.d.f()}},St.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(y,p))},St.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},St.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?i.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:b,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:C,integrity:b,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},St.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=g(p.as,p.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(y)},St.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin);i.d.L(y,v,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},St.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=g(p.as,p.crossOrigin);i.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(y)},St.requestFormReset=function(y){i.d.r(y)},St.unstable_batchedUpdates=function(y,p){return y(p)},St.useFormState=function(y,p,v){return h.H.useFormState(y,p,v)},St.useFormStatus=function(){return h.H.useHostTransitionStatus()},St.version="19.1.1",St}var $f;function ed(){if($f)return Z0.exports;$f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Z0.exports=I3(),Z0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function td(){if(Ff)return lu;Ff=1;var s=F3(),r=$0(),d=ed();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return g(a),e;if(u===l)return g(a),t;u=u.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=u;else{for(var o=!1,m=a.child;m;){if(m===n){o=!0,n=a,l=u;break}if(m===l){o=!0,l=a,n=u;break}m=m.sibling}if(!o){for(m=u.child;m;){if(m===n){o=!0,n=u,l=a;break}if(m===l){o=!0,l=u,n=a;break}m=m.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),X=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case B:return"Profiler";case k:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case X:return(e.displayName||"Context")+".Provider";case j:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var pe=Array.isArray,H=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ue=[],x=-1;function V(e){return{current:e}}function q(e){0>x||(e.current=ue[x],ue[x]=null,x--)}function Z(e,t){x++,ue[x]=e.current,e.current=t}var I=V(null),ce=V(null),re=V(null),we=V(null);function Re(e,t){switch(Z(re,t),Z(ce,e),Z(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vf(t),e=xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(I),Z(I,e)}function Ue(){q(I),q(ce),q(re)}function xt(e){e.memoizedState!==null&&Z(we,e);var t=I.current,n=xf(t,e.type);t!==n&&(Z(ce,e),Z(I,n))}function et(e){ce.current===e&&(q(I),q(ce)),we.current===e&&(q(we),$a._currentValue=$)}var Tt=Object.prototype.hasOwnProperty,Dn=s.unstable_scheduleCallback,rn=s.unstable_cancelCallback,ne=s.unstable_shouldYield,me=s.unstable_requestPaint,ge=s.unstable_now,Pe=s.unstable_getCurrentPriorityLevel,je=s.unstable_ImmediatePriority,Je=s.unstable_UserBlockingPriority,lt=s.unstable_NormalPriority,mt=s.unstable_LowPriority,be=s.unstable_IdlePriority,cn=s.log,$n=s.unstable_setDisableYieldValue,Jt=null,Qe=null;function pt(e){if(typeof cn=="function"&&$n(e),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(Jt,e)}catch{}}var He=Math.clz32?Math.clz32:vl,ua=Math.log,ou=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(ua(e)/ou|0)|0}var Fn=256,In=4194304;function zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ze(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,u=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~u,l!==0?a=zn(l):(o&=m,o!==0?a=zn(o):n||(n=m&~e,n!==0&&(a=zn(n))))):(m=l&~u,m!==0?a=zn(m):o!==0?a=zn(o):n||(n=l&~e,n!==0&&(a=zn(n)))),a===0?0:t!==0&&t!==a&&(t&u)===0&&(u=a&-a,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:a}function Ve(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Fn;return Fn<<=1,(Fn&4194048)===0&&(Fn=256),e}function ee(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function Et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function el(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vr(e,t,n,l,a,u){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,_=e.expirationTimes,A=e.hiddenUpdates;for(n=o&~n;0<n;){var N=31-He(n),Q=1<<N;m[N]=0,_[N]=-1;var O=A[N];if(O!==null)for(A[N]=null,N=0;N<O.length;N++){var w=O[N];w!==null&&(w.lane&=-536870913)}n&=~Q}l!==0&&su(e,l,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(o&~t))}function su(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-He(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-He(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ra(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ia(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function du(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:jf(e.type))}function U2(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Mn=Math.random().toString(36).slice(2),bt="__reactFiber$"+Mn,Dt="__reactProps$"+Mn,xl="__reactContainer$"+Mn,Or="__reactEvents$"+Mn,j2="__reactListeners$"+Mn,Y2="__reactHandles$"+Mn,ac="__reactResources$"+Mn,ca="__reactMarker$"+Mn;function Er(e){delete e[bt],delete e[Dt],delete e[Or],delete e[j2],delete e[Y2]}function bl(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xl]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cf(e);e!==null;){if(n=e[bt])return n;e=Cf(e)}return t}e=n,n=e.parentNode}return null}function _l(e){if(e=e[bt]||e[xl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function oa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Sl(e){var t=e[ac];return t||(t=e[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[ca]=!0}var uc=new Set,rc={};function tl(e,t){Cl(e,t),Cl(e+"Capture",t)}function Cl(e,t){for(rc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var X2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ic={},cc={};function k2(e){return Tt.call(cc,e)?!0:Tt.call(ic,e)?!1:X2.test(e)?cc[e]=!0:(ic[e]=!0,!1)}function hu(e,t,n){if(k2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function mu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function on(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var wr,oc;function Tl(e){if(wr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wr=t&&t[1]||"",oc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wr+e+oc}var Hr=!1;function Gr(e,t){if(!e||Hr)return"";Hr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(w){var O=w}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(w){O=w}e.call(Q.prototype)}}else{try{throw Error()}catch(w){O=w}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(w){if(w&&O&&typeof w.stack=="string")return[w.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),o=u[0],m=u[1];if(o&&m){var _=o.split(`
`),A=m.split(`
`);for(a=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;if(l===_.length||a===A.length)for(l=_.length-1,a=A.length-1;1<=l&&0<=a&&_[l]!==A[a];)a--;for(;1<=l&&0<=a;l--,a--)if(_[l]!==A[a]){if(l!==1||a!==1)do if(l--,a--,0>a||_[l]!==A[a]){var N=`
`+_[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=a);break}}}finally{Hr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Tl(n):""}function q2(e){switch(e.tag){case 26:case 27:case 5:return Tl(e.type);case 16:return Tl("Lazy");case 13:return Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return Gr(e.type,!1);case 11:return Gr(e.type.render,!1);case 1:return Gr(e.type,!0);case 31:return Tl("Activity");default:return""}}function sc(e){try{var t="";do t+=q2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N2(e){var t=fc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,u.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pu(e){e._valueTracker||(e._valueTracker=N2(e))}function dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=fc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function gu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z2=/[\n"\\]/g;function kt(e){return e.replace(Z2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Br(e,t,n,l,a,u,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ur(e,o,Xt(t)):n!=null?Ur(e,o,Xt(n)):l!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Xt(m):e.removeAttribute("name")}function hc(e,t,n,l,a,u,o,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Xt(n):"",t=t!=null?""+Xt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Ur(e,t,n){t==="number"&&gu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Rl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function mc(e,t,n){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xt(n):""}function pc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(pe(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Xt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Dl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||L2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yc(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&gc(e,a,l)}else for(var u in t)t.hasOwnProperty(u)&&gc(e,u,t[u])}function jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yu(e){return Q2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Ml=null;function vc(e){var t=_l(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Br(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Dt]||null;if(!a)throw Error(i(90));Br(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&dc(l)}break e;case"textarea":mc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Rl(e,!!n.multiple,t,!1)}}}var kr=!1;function xc(e,t,n){if(kr)return e(t,n);kr=!0;try{var l=e(t);return l}finally{if(kr=!1,(zl!==null||Ml!==null)&&(nr(),zl&&(t=zl,e=Ml,Ml=zl=null,vc(t),e)))for(t=0;t<e.length;t++)vc(e[t])}}function sa(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Dt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(sn)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){qr=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{qr=!1}var An=null,Nr=null,vu=null;function bc(){if(vu)return vu;var e,t=Nr,n=t.length,l,a="value"in An?An.value:An.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[u-l];l++);return vu=a.slice(e,1<l?1-l:void 0)}function xu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bu(){return!0}function _c(){return!1}function zt(e){function t(n,l,a,u,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?bu:_c,this.isPropagationStopped=_c,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bu)},persist:function(){},isPersistent:bu}),t}var nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=zt(nl),da=v({},nl,{view:0,detail:0}),K2=zt(da),Zr,Lr,ha,Su=v({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(Zr=e.screenX-ha.screenX,Lr=e.screenY-ha.screenY):Lr=Zr=0,ha=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:Lr}}),Sc=zt(Su),J2=v({},Su,{dataTransfer:0}),W2=zt(J2),$2=v({},da,{relatedTarget:0}),Pr=zt($2),F2=v({},nl,{animationName:0,elapsedTime:0,pseudoElement:0}),I2=zt(F2),e1=v({},nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t1=zt(e1),n1=v({},nl,{data:0}),Cc=zt(n1),l1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u1[e])?!!t[e]:!1}function Qr(){return r1}var i1=v({},da,{key:function(e){if(e.key){var t=l1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c1=zt(i1),o1=v({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=zt(o1),s1=v({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),f1=zt(s1),d1=v({},nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),h1=zt(d1),m1=v({},Su,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p1=zt(m1),g1=v({},nl,{newState:0,oldState:0}),y1=zt(g1),v1=[9,13,27,32],Kr=sn&&"CompositionEvent"in window,ma=null;sn&&"documentMode"in document&&(ma=document.documentMode);var x1=sn&&"TextEvent"in window&&!ma,Rc=sn&&(!Kr||ma&&8<ma&&11>=ma),Dc=" ",zc=!1;function Mc(e,t){switch(e){case"keyup":return v1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Al=!1;function b1(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(zc=!0,Dc);case"textInput":return e=t.data,e===Dc&&zc?null:e;default:return null}}function _1(e,t){if(Al)return e==="compositionend"||!Kr&&Mc(e,t)?(e=bc(),vu=Nr=An=null,Al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S1[e.type]:t==="textarea"}function Oc(e,t,n,l){zl?Ml?Ml.push(l):Ml=[l]:zl=l,t=cr(t,"onChange"),0<t.length&&(n=new _u("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var pa=null,ga=null;function C1(e){hf(e,0)}function Cu(e){var t=oa(e);if(dc(t))return e}function Ec(e,t){if(e==="change")return t}var wc=!1;if(sn){var Jr;if(sn){var Wr="oninput"in document;if(!Wr){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Wr=typeof Hc.oninput=="function"}Jr=Wr}else Jr=!1;wc=Jr&&(!document.documentMode||9<document.documentMode)}function Gc(){pa&&(pa.detachEvent("onpropertychange",Bc),ga=pa=null)}function Bc(e){if(e.propertyName==="value"&&Cu(ga)){var t=[];Oc(t,ga,e,Xr(e)),xc(C1,t)}}function T1(e,t,n){e==="focusin"?(Gc(),pa=t,ga=n,pa.attachEvent("onpropertychange",Bc)):e==="focusout"&&Gc()}function R1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(ga)}function D1(e,t){if(e==="click")return Cu(t)}function z1(e,t){if(e==="input"||e==="change")return Cu(t)}function M1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:M1;function ya(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Tt.call(t,a)||!wt(e[a],t[a]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var n=Uc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uc(n)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gu(e.document)}return t}function $r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A1=sn&&"documentMode"in document&&11>=document.documentMode,Vl=null,Fr=null,va=null,Ir=!1;function kc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Vl==null||Vl!==gu(l)||(l=Vl,"selectionStart"in l&&$r(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),va&&ya(va,l)||(va=l,l=cr(Fr,"onSelect"),0<l.length&&(t=new _u("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Vl)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ol={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionrun:ll("Transition","TransitionRun"),transitionstart:ll("Transition","TransitionStart"),transitioncancel:ll("Transition","TransitionCancel"),transitionend:ll("Transition","TransitionEnd")},ei={},qc={};sn&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function al(e){if(ei[e])return ei[e];if(!Ol[e])return e;var t=Ol[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qc)return ei[e]=t[n];return e}var Nc=al("animationend"),Zc=al("animationiteration"),Lc=al("animationstart"),V1=al("transitionrun"),O1=al("transitionstart"),E1=al("transitioncancel"),Pc=al("transitionend"),Qc=new Map,ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ti.push("scrollEnd");function Wt(e,t){Qc.set(e,t),tl(t,[e])}var Kc=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=Kc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:sc(t)},Kc.set(e,t),t)}return{value:e,source:t,stack:sc(t)}}var Nt=[],El=0,ni=0;function Tu(){for(var e=El,t=ni=El=0;t<e;){var n=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var u=Nt[t];if(Nt[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}u!==0&&Jc(n,a,u)}}function Ru(e,t,n,l){Nt[El++]=e,Nt[El++]=t,Nt[El++]=n,Nt[El++]=l,ni|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function li(e,t,n,l){return Ru(e,t,n,l),Du(e)}function wl(e,t){return Ru(e,null,null,t),Du(e)}function Jc(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&t!==null&&(a=31-He(n),e=u.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),u):null}function Du(e){if(50<Na)throw Na=0,o0=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hl={};function w1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,l){return new w1(e,t,n,l)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zu(e,t,n,l,a,u){var o=0;if(l=e,typeof e=="function")ai(e)&&(o=1);else if(typeof e=="string")o=G3(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=Ht(31,n,t,a),e.elementType=te,e.lanes=u,e;case E:return ul(n.children,a,u,t);case k:o=8,a|=24;break;case B:return e=Ht(12,n,t,a|2),e.elementType=B,e.lanes=u,e;case G:return e=Ht(13,n,t,a),e.elementType=G,e.lanes=u,e;case P:return e=Ht(19,n,t,a),e.elementType=P,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case X:o=10;break e;case j:o=9;break e;case K:o=11;break e;case Y:o=14;break e;case F:o=16,l=null;break e}o=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Ht(o,n,t,a),t.elementType=e,t.type=l,t.lanes=u,t}function ul(e,t,n,l){return e=Ht(7,e,l,t),e.lanes=n,e}function ui(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function ri(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gl=[],Bl=0,Mu=null,Au=0,Zt=[],Lt=0,rl=null,dn=1,hn="";function il(e,t){Gl[Bl++]=Au,Gl[Bl++]=Mu,Mu=e,Au=t}function $c(e,t,n){Zt[Lt++]=dn,Zt[Lt++]=hn,Zt[Lt++]=rl,rl=e;var l=dn;e=hn;var a=32-He(l)-1;l&=~(1<<a),n+=1;var u=32-He(t)+a;if(30<u){var o=a-a%5;u=(l&(1<<o)-1).toString(32),l>>=o,a-=o,dn=1<<32-He(t)+a|n<<a|l,hn=u+e}else dn=1<<u|n<<a|l,hn=e}function ii(e){e.return!==null&&(il(e,1),$c(e,1,0))}function ci(e){for(;e===Mu;)Mu=Gl[--Bl],Gl[Bl]=null,Au=Gl[--Bl],Gl[Bl]=null;for(;e===rl;)rl=Zt[--Lt],Zt[Lt]=null,hn=Zt[--Lt],Zt[Lt]=null,dn=Zt[--Lt],Zt[Lt]=null}var Rt=null,Fe=null,Oe=!1,cl=null,tn=!1,oi=Error(i(519));function ol(e){var t=Error(i(418,""));throw _a(qt(t,e)),oi}function Fc(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[bt]=e,t[Dt]=l,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<La.length;n++)Te(La[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),hc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pu(t);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),pc(t,l.value,l.defaultValue,l.children),pu(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||yf(t.textContent,n)?(l.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),l.onScroll!=null&&Te("scroll",t),l.onScrollEnd!=null&&Te("scrollend",t),l.onClick!=null&&(t.onclick=or),t=!0):t=!1,t||ol(e)}function Ic(e){for(Rt=e.return;Rt;)switch(Rt.tag){case 5:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:Rt=Rt.return}}function xa(e){if(e!==Rt)return!1;if(!Oe)return Ic(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||R0(e.type,e.memoizedProps)),n=!n),n&&Fe&&ol(e),Ic(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Fe=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Fe=null}}else t===27?(t=Fe,Ln(e.type)?(e=A0,A0=null,Fe=e):Fe=t):Fe=Rt?Ft(e.stateNode.nextSibling):null;return!0}function ba(){Fe=Rt=null,Oe=!1}function eo(){var e=cl;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),cl=null),e}function _a(e){cl===null?cl=[e]:cl.push(e)}var si=V(null),sl=null,mn=null;function Vn(e,t,n){Z(si,t._currentValue),t._currentValue=n}function pn(e){e._currentValue=si.current,q(si)}function fi(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function di(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var o=a.child;u=u.firstContext;e:for(;u!==null;){var m=u;u=a;for(var _=0;_<t.length;_++)if(m.context===t[_]){u.lanes|=n,m=u.alternate,m!==null&&(m.lanes|=n),fi(u.return,n,e),l||(o=null);break e}u=m.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),fi(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Sa(e,t,n,l){e=null;for(var a=t,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var m=a.type;wt(a.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(a===we.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push($a):e=[$a])}a=a.return}e!==null&&di(t,e,n,l),t.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fl(e){sl=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return to(sl,e)}function Ou(e,t){return sl===null&&fl(e),to(e,t)}function to(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},mn===null){if(e===null)throw Error(i(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return n}var H1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G1=s.unstable_scheduleCallback,B1=s.unstable_NormalPriority,it={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hi(){return{controller:new H1,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&G1(B1,function(){e.controller.abort()})}var Ta=null,mi=0,Ul=0,jl=null;function U1(e,t){if(Ta===null){var n=Ta=[];mi=0,Ul=g0(),jl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return mi++,t.then(no,no),t}function no(){if(--mi===0&&Ta!==null){jl!==null&&(jl.status="fulfilled");var e=Ta;Ta=null,Ul=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function j1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var lo=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&U1(e,t),lo!==null&&lo(e,t)};var dl=V(null);function pi(){var e=dl.current;return e!==null?e:Le.pooledCache}function Eu(e,t){t===null?Z(dl,dl.current):Z(dl,t.pool)}function ao(){var e=pi();return e===null?null:{parent:it._currentValue,pool:e}}var Ra=Error(i(460)),uo=Error(i(474)),wu=Error(i(542)),gi={then:function(){}};function ro(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hu(){}function io(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Hu,Hu),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oo(e),e;default:if(typeof t.status=="string")t.then(Hu,Hu);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oo(e),e}throw Da=t,Ra}}var Da=null;function co(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function oo(e){if(e===Ra||e===wu)throw Error(i(483))}var On=!1;function yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Du(e),Jc(e,null,n),t}return Ru(e,l,t,n),Du(e)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,fu(e,n)}}function xi(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=o:u=u.next=o,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bi=!1;function Ma(){if(bi){var e=jl;if(e!==null)throw e}}function Aa(e,t,n,l){bi=!1;var a=e.updateQueue;On=!1;var u=a.firstBaseUpdate,o=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var _=m,A=_.next;_.next=null,o===null?u=A:o.next=A,o=_;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==o&&(m===null?N.firstBaseUpdate=A:m.next=A,N.lastBaseUpdate=_))}if(u!==null){var Q=a.baseState;o=0,N=A=_=null,m=u;do{var O=m.lane&-536870913,w=O!==m.lane;if(w?(Me&O)===O:(l&O)===O){O!==0&&O===Ul&&(bi=!0),N!==null&&(N=N.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var de=e,oe=m;O=t;var qe=n;switch(oe.tag){case 1:if(de=oe.payload,typeof de=="function"){Q=de.call(qe,Q,O);break e}Q=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=oe.payload,O=typeof de=="function"?de.call(qe,Q,O):de,O==null)break e;Q=v({},Q,O);break e;case 2:On=!0}}O=m.callback,O!==null&&(e.flags|=64,w&&(e.flags|=8192),w=a.callbacks,w===null?a.callbacks=[O]:w.push(O))}else w={lane:O,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(A=N=w,_=Q):N=N.next=w,o|=O;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;w=m,m=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);N===null&&(_=Q),a.baseState=_,a.firstBaseUpdate=A,a.lastBaseUpdate=N,u===null&&(a.shared.lanes=0),kn|=o,e.lanes=o,e.memoizedState=Q}}function so(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function fo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)so(n[e],t)}var Yl=V(null),Gu=V(0);function ho(e,t){e=Sn,Z(Gu,e),Z(Yl,t),Sn=e|t.baseLanes}function _i(){Z(Gu,Sn),Z(Yl,Yl.current)}function Si(){Sn=Gu.current,q(Yl),q(Gu)}var Hn=0,_e=null,Xe=null,at=null,Bu=!1,Xl=!1,hl=!1,Uu=0,Va=0,kl=null,Y1=0;function tt(){throw Error(i(321))}function Ci(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Ti(e,t,n,l,a,u){return Hn=u,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Wo:$o,hl=!1,u=n(l,a),hl=!1,Xl&&(u=po(t,n,l,a)),mo(e),u}function mo(e){H.H=Nu;var t=Xe!==null&&Xe.next!==null;if(Hn=0,at=Xe=_e=null,Bu=!1,Va=0,kl=null,t)throw Error(i(300));e===null||st||(e=e.dependencies,e!==null&&Vu(e)&&(st=!0))}function po(e,t,n,l){_e=e;var a=0;do{if(Xl&&(kl=null),Va=0,Xl=!1,25<=a)throw Error(i(301));if(a+=1,at=Xe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}H.H=P1,u=t(n,l)}while(Xl);return u}function X1(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Oa(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(_e.flags|=1024),t}function Ri(){var e=Uu!==0;return Uu=0,e}function Di(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zi(e){if(Bu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bu=!1}Hn=0,at=Xe=_e=null,Xl=!1,Va=Uu=0,kl=null}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?_e.memoizedState=at=e:at=at.next=e,at}function ut(){if(Xe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=at===null?_e.memoizedState:at.next;if(t!==null)at=t,Xe=e;else{if(e===null)throw _e.alternate===null?Error(i(467)):Error(i(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},at===null?_e.memoizedState=at=e:at=at.next=e}return at}function Mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oa(e){var t=Va;return Va+=1,kl===null&&(kl=[]),e=io(kl,e,t),t=_e,(at===null?t.memoizedState:at.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Wo:$o),e}function ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oa(e);if(e.$$typeof===X)return _t(e)}throw Error(i(438,String(e)))}function Ai(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Mi(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=se;return t.index++,n}function gn(e,t){return typeof t=="function"?t(e):t}function Yu(e){var t=ut();return Vi(t,Xe,e)}function Vi(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,u=l.pending;if(u!==null){if(a!==null){var o=a.next;a.next=u.next,u.next=o}t.baseQueue=a=u,l.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{t=a.next;var m=o=null,_=null,A=t,N=!1;do{var Q=A.lane&-536870913;if(Q!==A.lane?(Me&Q)===Q:(Hn&Q)===Q){var O=A.revertLane;if(O===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),Q===Ul&&(N=!0);else if((Hn&O)===O){A=A.next,O===Ul&&(N=!0);continue}else Q={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},_===null?(m=_=Q,o=u):_=_.next=Q,_e.lanes|=O,kn|=O;Q=A.action,hl&&n(u,Q),u=A.hasEagerState?A.eagerState:n(u,Q)}else O={lane:Q,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},_===null?(m=_=O,o=u):_=_.next=O,_e.lanes|=Q,kn|=Q;A=A.next}while(A!==null&&A!==t);if(_===null?o=u:_.next=m,!wt(u,e.memoizedState)&&(st=!0,N&&(n=jl,n!==null)))throw n;e.memoizedState=u,e.baseState=o,e.baseQueue=_,l.lastRenderedState=u}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Oi(e){var t=ut(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do u=e(u,o.action),o=o.next;while(o!==a);wt(u,t.memoizedState)||(st=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function go(e,t,n){var l=_e,a=ut(),u=Oe;if(u){if(n===void 0)throw Error(i(407));n=n()}else n=t();var o=!wt((Xe||a).memoizedState,n);o&&(a.memoizedState=n,st=!0),a=a.queue;var m=xo.bind(null,l,a,e);if(Ea(2048,8,m,[e]),a.getSnapshot!==t||o||at!==null&&at.memoizedState.tag&1){if(l.flags|=2048,ql(9,Xu(),vo.bind(null,l,a,n,t),null),Le===null)throw Error(i(349));u||(Hn&124)!==0||yo(l,t,n)}return n}function yo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=Mi(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vo(e,t,n,l){t.value=n,t.getSnapshot=l,bo(t)&&_o(e)}function xo(e,t,n){return n(function(){bo(t)&&_o(e)})}function bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function _o(e){var t=wl(e,2);t!==null&&Yt(t,e,2)}function Ei(e){var t=Mt();if(typeof e=="function"){var n=e;if(e=n(),hl){pt(!0);try{n()}finally{pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t}function So(e,t,n,l){return e.baseState=n,Vi(e,Xe,typeof l=="function"?l:gn)}function k1(e,t,n,l,a){if(qu(e))throw Error(i(485));if(e=t.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};H.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,Co(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Co(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var u=H.T,o={};H.T=o;try{var m=n(a,l),_=H.S;_!==null&&_(o,m),To(e,t,m)}catch(A){wi(e,t,A)}finally{H.T=u}}else try{u=n(a,l),To(e,t,u)}catch(A){wi(e,t,A)}}function To(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Ro(e,t,l)},function(l){return wi(e,t,l)}):Ro(e,t,n)}function Ro(e,t,n){t.status="fulfilled",t.value=n,Do(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Co(e,n)))}function wi(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Do(t),t=t.next;while(t!==l)}e.action=null}function Do(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zo(e,t){return t}function Mo(e,t){if(Oe){var n=Le.formState;if(n!==null){e:{var l=_e;if(Oe){if(Fe){t:{for(var a=Fe,u=tn;a.nodeType!==8;){if(!u){a=null;break t}if(a=Ft(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Fe=Ft(a.nextSibling),l=a.data==="F!";break e}}ol(l)}l=!1}l&&(t=n[0])}}return n=Mt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},n.queue=l,n=Qo.bind(null,_e,l),l.dispatch=n,l=Ei(!1),u=ji.bind(null,_e,!1,l.queue),l=Mt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=k1.bind(null,_e,a,u,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Ao(e){var t=ut();return Vo(t,Xe,e)}function Vo(e,t,n){if(t=Vi(e,t,zo)[0],e=Yu(gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Oa(t)}catch(o){throw o===Ra?wu:o}else l=t;t=ut();var a=t.queue,u=a.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,ql(9,Xu(),q1.bind(null,a,n),null)),[l,u,e]}function q1(e,t){e.action=t}function Oo(e){var t=ut(),n=Xe;if(n!==null)return Vo(t,n,e);ut(),t=t.memoizedState,n=ut();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function ql(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=_e.updateQueue,t===null&&(t=Mi(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Xu(){return{destroy:void 0,resource:void 0}}function Eo(){return ut().memoizedState}function ku(e,t,n,l){var a=Mt();l=l===void 0?null:l,_e.flags|=e,a.memoizedState=ql(1|t,Xu(),n,l)}function Ea(e,t,n,l){var a=ut();l=l===void 0?null:l;var u=a.memoizedState.inst;Xe!==null&&l!==null&&Ci(l,Xe.memoizedState.deps)?a.memoizedState=ql(t,u,n,l):(_e.flags|=e,a.memoizedState=ql(1|t,u,n,l))}function wo(e,t){ku(8390656,8,e,t)}function Ho(e,t){Ea(2048,8,e,t)}function Go(e,t){return Ea(4,2,e,t)}function Bo(e,t){return Ea(4,4,e,t)}function Uo(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jo(e,t,n){n=n!=null?n.concat([e]):null,Ea(4,4,Uo.bind(null,t,e),n)}function Hi(){}function Yo(e,t){var n=ut();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Ci(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Xo(e,t){var n=ut();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Ci(t,l[1]))return l[0];if(l=e(),hl){pt(!0);try{e()}finally{pt(!1)}}return n.memoizedState=[l,t],l}function Gi(e,t,n){return n===void 0||(Hn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ns(),_e.lanes|=e,kn|=e,n)}function ko(e,t,n,l){return wt(n,t)?n:Yl.current!==null?(e=Gi(e,n,l),wt(e,t)||(st=!0),e):(Hn&42)===0?(st=!0,e.memoizedState=n):(e=Ns(),_e.lanes|=e,kn|=e,t)}function qo(e,t,n,l,a){var u=J.p;J.p=u!==0&&8>u?u:8;var o=H.T,m={};H.T=m,ji(e,!1,t,n);try{var _=a(),A=H.S;if(A!==null&&A(m,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var N=j1(_,l);wa(e,t,N,jt(e))}else wa(e,t,l,jt(e))}catch(Q){wa(e,t,{then:function(){},status:"rejected",reason:Q},jt())}finally{J.p=u,H.T=o}}function N1(){}function Bi(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=No(e).queue;qo(e,a,t,$,n===null?N1:function(){return Zo(e),n(l)})}function No(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zo(e){var t=No(e).next.queue;wa(e,t,{},jt())}function Ui(){return _t($a)}function Lo(){return ut().memoizedState}function Po(){return ut().memoizedState}function Z1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jt();e=En(n);var l=wn(t,e,n);l!==null&&(Yt(l,t,n),za(l,t,n)),t={cache:hi()},e.payload=t;return}t=t.return}}function L1(e,t,n){var l=jt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e)?Ko(t,n):(n=li(e,t,n,l),n!==null&&(Yt(n,e,l),Jo(n,t,l)))}function Qo(e,t,n){var l=jt();wa(e,t,n,l)}function wa(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))Ko(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var o=t.lastRenderedState,m=u(o,n);if(a.hasEagerState=!0,a.eagerState=m,wt(m,o))return Ru(e,t,a,0),Le===null&&Tu(),!1}catch{}finally{}if(n=li(e,t,a,l),n!==null)return Yt(n,e,l),Jo(n,t,l),!0}return!1}function ji(e,t,n,l){if(l={lane:2,revertLane:g0(),action:l,hasEagerState:!1,eagerState:null,next:null},qu(e)){if(t)throw Error(i(479))}else t=li(e,n,l,2),t!==null&&Yt(t,e,2)}function qu(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Ko(e,t){Xl=Bu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jo(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,fu(e,n)}}var Nu={readContext:_t,use:ju,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},Wo={readContext:_t,use:ju,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:wo,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ku(4194308,4,Uo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ku(4194308,4,e,t)},useInsertionEffect:function(e,t){ku(4,2,e,t)},useMemo:function(e,t){var n=Mt();t=t===void 0?null:t;var l=e();if(hl){pt(!0);try{e()}finally{pt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Mt();if(n!==void 0){var a=n(t);if(hl){pt(!0);try{n(t)}finally{pt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=L1.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ei(e);var t=e.queue,n=Qo.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hi,useDeferredValue:function(e,t){var n=Mt();return Gi(n,e,t)},useTransition:function(){var e=Ei(!1);return e=qo.bind(null,_e,e.queue,!0,!1),Mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=_e,a=Mt();if(Oe){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Le===null)throw Error(i(349));(Me&124)!==0||yo(l,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,wo(xo.bind(null,l,u,e),[e]),l.flags|=2048,ql(9,Xu(),vo.bind(null,l,u,n,t),null),n},useId:function(){var e=Mt(),t=Le.identifierPrefix;if(Oe){var n=hn,l=dn;n=(l&~(1<<32-He(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Uu++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Y1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ui,useFormState:Mo,useActionState:Mo,useOptimistic:function(e){var t=Mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ji.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ai,useCacheRefresh:function(){return Mt().memoizedState=Z1.bind(null,_e)}},$o={readContext:_t,use:ju,useCallback:Yo,useContext:_t,useEffect:Ho,useImperativeHandle:jo,useInsertionEffect:Go,useLayoutEffect:Bo,useMemo:Xo,useReducer:Yu,useRef:Eo,useState:function(){return Yu(gn)},useDebugValue:Hi,useDeferredValue:function(e,t){var n=ut();return ko(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Yu(gn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Oa(e),t]},useSyncExternalStore:go,useId:Lo,useHostTransitionStatus:Ui,useFormState:Ao,useActionState:Ao,useOptimistic:function(e,t){var n=ut();return So(n,Xe,e,t)},useMemoCache:Ai,useCacheRefresh:Po},P1={readContext:_t,use:ju,useCallback:Yo,useContext:_t,useEffect:Ho,useImperativeHandle:jo,useInsertionEffect:Go,useLayoutEffect:Bo,useMemo:Xo,useReducer:Oi,useRef:Eo,useState:function(){return Oi(gn)},useDebugValue:Hi,useDeferredValue:function(e,t){var n=ut();return Xe===null?Gi(n,e,t):ko(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Oi(gn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Oa(e),t]},useSyncExternalStore:go,useId:Lo,useHostTransitionStatus:Ui,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var n=ut();return Xe!==null?So(n,Xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ai,useCacheRefresh:Po},Nl=null,Ha=0;function Zu(e){var t=Ha;return Ha+=1,Nl===null&&(Nl=[]),io(Nl,e,t)}function Ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lu(e,t){throw t.$$typeof===C?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fo(e){var t=e._init;return t(e._payload)}function Io(e){function t(z,R){if(e){var M=z.deletions;M===null?(z.deletions=[R],z.flags|=16):M.push(R)}}function n(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function l(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function a(z,R){return z=fn(z,R),z.index=0,z.sibling=null,z}function u(z,R,M){return z.index=M,e?(M=z.alternate,M!==null?(M=M.index,M<R?(z.flags|=67108866,R):M):(z.flags|=67108866,R)):(z.flags|=1048576,R)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,R,M,L){return R===null||R.tag!==6?(R=ui(M,z.mode,L),R.return=z,R):(R=a(R,M),R.return=z,R)}function _(z,R,M,L){var le=M.type;return le===E?N(z,R,M.props.children,L,M.key):R!==null&&(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===F&&Fo(le)===R.type)?(R=a(R,M.props),Ga(R,M),R.return=z,R):(R=zu(M.type,M.key,M.props,null,z.mode,L),Ga(R,M),R.return=z,R)}function A(z,R,M,L){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=ri(M,z.mode,L),R.return=z,R):(R=a(R,M.children||[]),R.return=z,R)}function N(z,R,M,L,le){return R===null||R.tag!==7?(R=ul(M,z.mode,L,le),R.return=z,R):(R=a(R,M),R.return=z,R)}function Q(z,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ui(""+R,z.mode,M),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case b:return M=zu(R.type,R.key,R.props,null,z.mode,M),Ga(M,R),M.return=z,M;case T:return R=ri(R,z.mode,M),R.return=z,R;case F:var L=R._init;return R=L(R._payload),Q(z,R,M)}if(pe(R)||ae(R))return R=ul(R,z.mode,M,null),R.return=z,R;if(typeof R.then=="function")return Q(z,Zu(R),M);if(R.$$typeof===X)return Q(z,Ou(z,R),M);Lu(z,R)}return null}function O(z,R,M,L){var le=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return le!==null?null:m(z,R,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return M.key===le?_(z,R,M,L):null;case T:return M.key===le?A(z,R,M,L):null;case F:return le=M._init,M=le(M._payload),O(z,R,M,L)}if(pe(M)||ae(M))return le!==null?null:N(z,R,M,L,null);if(typeof M.then=="function")return O(z,R,Zu(M),L);if(M.$$typeof===X)return O(z,R,Ou(z,M),L);Lu(z,M)}return null}function w(z,R,M,L,le){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return z=z.get(M)||null,m(R,z,""+L,le);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case b:return z=z.get(L.key===null?M:L.key)||null,_(R,z,L,le);case T:return z=z.get(L.key===null?M:L.key)||null,A(R,z,L,le);case F:var Se=L._init;return L=Se(L._payload),w(z,R,M,L,le)}if(pe(L)||ae(L))return z=z.get(M)||null,N(R,z,L,le,null);if(typeof L.then=="function")return w(z,R,M,Zu(L),le);if(L.$$typeof===X)return w(z,R,M,Ou(R,L),le);Lu(R,L)}return null}function de(z,R,M,L){for(var le=null,Se=null,ie=R,fe=R=0,dt=null;ie!==null&&fe<M.length;fe++){ie.index>fe?(dt=ie,ie=null):dt=ie.sibling;var Ae=O(z,ie,M[fe],L);if(Ae===null){ie===null&&(ie=dt);break}e&&ie&&Ae.alternate===null&&t(z,ie),R=u(Ae,R,fe),Se===null?le=Ae:Se.sibling=Ae,Se=Ae,ie=dt}if(fe===M.length)return n(z,ie),Oe&&il(z,fe),le;if(ie===null){for(;fe<M.length;fe++)ie=Q(z,M[fe],L),ie!==null&&(R=u(ie,R,fe),Se===null?le=ie:Se.sibling=ie,Se=ie);return Oe&&il(z,fe),le}for(ie=l(ie);fe<M.length;fe++)dt=w(ie,z,fe,M[fe],L),dt!==null&&(e&&dt.alternate!==null&&ie.delete(dt.key===null?fe:dt.key),R=u(dt,R,fe),Se===null?le=dt:Se.sibling=dt,Se=dt);return e&&ie.forEach(function(Wn){return t(z,Wn)}),Oe&&il(z,fe),le}function oe(z,R,M,L){if(M==null)throw Error(i(151));for(var le=null,Se=null,ie=R,fe=R=0,dt=null,Ae=M.next();ie!==null&&!Ae.done;fe++,Ae=M.next()){ie.index>fe?(dt=ie,ie=null):dt=ie.sibling;var Wn=O(z,ie,Ae.value,L);if(Wn===null){ie===null&&(ie=dt);break}e&&ie&&Wn.alternate===null&&t(z,ie),R=u(Wn,R,fe),Se===null?le=Wn:Se.sibling=Wn,Se=Wn,ie=dt}if(Ae.done)return n(z,ie),Oe&&il(z,fe),le;if(ie===null){for(;!Ae.done;fe++,Ae=M.next())Ae=Q(z,Ae.value,L),Ae!==null&&(R=u(Ae,R,fe),Se===null?le=Ae:Se.sibling=Ae,Se=Ae);return Oe&&il(z,fe),le}for(ie=l(ie);!Ae.done;fe++,Ae=M.next())Ae=w(ie,z,fe,Ae.value,L),Ae!==null&&(e&&Ae.alternate!==null&&ie.delete(Ae.key===null?fe:Ae.key),R=u(Ae,R,fe),Se===null?le=Ae:Se.sibling=Ae,Se=Ae);return e&&ie.forEach(function(Q3){return t(z,Q3)}),Oe&&il(z,fe),le}function qe(z,R,M,L){if(typeof M=="object"&&M!==null&&M.type===E&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case b:e:{for(var le=M.key;R!==null;){if(R.key===le){if(le=M.type,le===E){if(R.tag===7){n(z,R.sibling),L=a(R,M.props.children),L.return=z,z=L;break e}}else if(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===F&&Fo(le)===R.type){n(z,R.sibling),L=a(R,M.props),Ga(L,M),L.return=z,z=L;break e}n(z,R);break}else t(z,R);R=R.sibling}M.type===E?(L=ul(M.props.children,z.mode,L,M.key),L.return=z,z=L):(L=zu(M.type,M.key,M.props,null,z.mode,L),Ga(L,M),L.return=z,z=L)}return o(z);case T:e:{for(le=M.key;R!==null;){if(R.key===le)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){n(z,R.sibling),L=a(R,M.children||[]),L.return=z,z=L;break e}else{n(z,R);break}else t(z,R);R=R.sibling}L=ri(M,z.mode,L),L.return=z,z=L}return o(z);case F:return le=M._init,M=le(M._payload),qe(z,R,M,L)}if(pe(M))return de(z,R,M,L);if(ae(M)){if(le=ae(M),typeof le!="function")throw Error(i(150));return M=le.call(M),oe(z,R,M,L)}if(typeof M.then=="function")return qe(z,R,Zu(M),L);if(M.$$typeof===X)return qe(z,R,Ou(z,M),L);Lu(z,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(n(z,R.sibling),L=a(R,M),L.return=z,z=L):(n(z,R),L=ui(M,z.mode,L),L.return=z,z=L),o(z)):n(z,R)}return function(z,R,M,L){try{Ha=0;var le=qe(z,R,M,L);return Nl=null,le}catch(ie){if(ie===Ra||ie===wu)throw ie;var Se=Ht(29,ie,null,z.mode);return Se.lanes=L,Se.return=z,Se}finally{}}}var Zl=Io(!0),es=Io(!1),Pt=V(null),nn=null;function Gn(e){var t=e.alternate;Z(ct,ct.current&1),Z(Pt,e),nn===null&&(t===null||Yl.current!==null||t.memoizedState!==null)&&(nn=e)}function ts(e){if(e.tag===22){if(Z(ct,ct.current),Z(Pt,e),nn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(nn=e)}}else Bn()}function Bn(){Z(ct,ct.current),Z(Pt,Pt.current)}function yn(e){q(Pt),nn===e&&(nn=null),q(ct)}var ct=V(0);function Pu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||M0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Yi(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xi={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=jt(),a=En(l);a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,l),t!==null&&(Yt(t,e,l),za(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=jt(),a=En(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,l),t!==null&&(Yt(t,e,l),za(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),l=En(n);l.tag=2,t!=null&&(l.callback=t),t=wn(e,l,n),t!==null&&(Yt(t,e,n),za(t,e,n))}};function ns(e,t,n,l,a,u,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,o):t.prototype&&t.prototype.isPureReactComponent?!ya(n,l)||!ya(a,u):!0}function ls(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function ml(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Qu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function as(e){Qu(e)}function us(e){console.error(e)}function rs(e){Qu(e)}function Ku(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function is(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ki(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){Ku(e,t)},n}function cs(e){return e=En(e),e.tag=3,e}function os(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;e.payload=function(){return a(u)},e.callback=function(){is(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){is(t,n,l),typeof a!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Q1(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Sa(t,n,a,!0),n=Pt.current,n!==null){switch(n.tag){case 13:return nn===null?f0():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===gi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),h0(e,l,a)),!1;case 22:return n.flags|=65536,l===gi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),h0(e,l,a)),!1}throw Error(i(435,n.tag))}return h0(e,l,a),f0(),!1}if(Oe)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==oi&&(e=Error(i(422),{cause:l}),_a(qt(e,n)))):(l!==oi&&(t=Error(i(423),{cause:l}),_a(qt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=qt(l,n),a=ki(e.stateNode,l,a),xi(e,a),Ie!==4&&(Ie=2)),!1;var u=Error(i(520),{cause:l});if(u=qt(u,n),qa===null?qa=[u]:qa.push(u),Ie!==4&&(Ie=2),t===null)return!0;l=qt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ki(n.stateNode,l,e),xi(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(qn===null||!qn.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=cs(a),os(a,e,n,l),xi(n,a),!1}n=n.return}while(n!==null);return!1}var ss=Error(i(461)),st=!1;function gt(e,t,n,l){t.child=e===null?es(t,null,n,l):Zl(t,e.child,n,l)}function fs(e,t,n,l,a){n=n.render;var u=t.ref;if("ref"in l){var o={};for(var m in l)m!=="ref"&&(o[m]=l[m])}else o=l;return fl(t),l=Ti(e,t,n,o,u,a),m=Ri(),e!==null&&!st?(Di(e,t,a),vn(e,t,a)):(Oe&&m&&ii(t),t.flags|=1,gt(e,t,l,a),t.child)}function ds(e,t,n,l,a){if(e===null){var u=n.type;return typeof u=="function"&&!ai(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,hs(e,t,u,l,a)):(e=zu(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Ji(e,a)){var o=u.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,l)&&e.ref===t.ref)return vn(e,t,a)}return t.flags|=1,e=fn(u,l),e.ref=t.ref,e.return=t,t.child=e}function hs(e,t,n,l,a){if(e!==null){var u=e.memoizedProps;if(ya(u,l)&&e.ref===t.ref)if(st=!1,t.pendingProps=l=u,Ji(e,a))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,vn(e,t,a)}return qi(e,t,n,l,a)}function ms(e,t,n){var l=t.pendingProps,a=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|n:n,e!==null){for(a=t.child=e.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return ps(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Eu(t,u!==null?u.cachePool:null),u!==null?ho(t,u):_i(),ts(t);else return t.lanes=t.childLanes=536870912,ps(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Eu(t,u.cachePool),ho(t,u),Bn(),t.memoizedState=null):(e!==null&&Eu(t,null),_i(),Bn());return gt(e,t,a,n),t.child}function ps(e,t,n,l){var a=pi();return a=a===null?null:{parent:it._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Eu(t,null),_i(),ts(t),e!==null&&Sa(e,t,l,!0),null}function Ju(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qi(e,t,n,l,a){return fl(t),n=Ti(e,t,n,l,void 0,a),l=Ri(),e!==null&&!st?(Di(e,t,a),vn(e,t,a)):(Oe&&l&&ii(t),t.flags|=1,gt(e,t,n,a),t.child)}function gs(e,t,n,l,a,u){return fl(t),t.updateQueue=null,n=po(t,l,n,a),mo(e),l=Ri(),e!==null&&!st?(Di(e,t,u),vn(e,t,u)):(Oe&&l&&ii(t),t.flags|=1,gt(e,t,n,u),t.child)}function ys(e,t,n,l,a){if(fl(t),t.stateNode===null){var u=Hl,o=n.contextType;typeof o=="object"&&o!==null&&(u=_t(o)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Xi,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},yi(t),o=n.contextType,u.context=typeof o=="object"&&o!==null?_t(o):Hl,u.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Yi(t,n,o,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Xi.enqueueReplaceState(u,u.state,null),Aa(t,l,u,a),Ma(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var m=t.memoizedProps,_=ml(n,m);u.props=_;var A=u.context,N=n.contextType;o=Hl,typeof N=="object"&&N!==null&&(o=_t(N));var Q=n.getDerivedStateFromProps;N=typeof Q=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||A!==o)&&ls(t,u,l,o),On=!1;var O=t.memoizedState;u.state=O,Aa(t,l,u,a),Ma(),A=t.memoizedState,m||O!==A||On?(typeof Q=="function"&&(Yi(t,n,Q,l),A=t.memoizedState),(_=On||ns(t,n,_,l,O,A,o))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),u.props=l,u.state=A,u.context=o,l=_):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,vi(e,t),o=t.memoizedProps,N=ml(n,o),u.props=N,Q=t.pendingProps,O=u.context,A=n.contextType,_=Hl,typeof A=="object"&&A!==null&&(_=_t(A)),m=n.getDerivedStateFromProps,(A=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==Q||O!==_)&&ls(t,u,l,_),On=!1,O=t.memoizedState,u.state=O,Aa(t,l,u,a),Ma();var w=t.memoizedState;o!==Q||O!==w||On||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof m=="function"&&(Yi(t,n,m,l),w=t.memoizedState),(N=On||ns(t,n,N,l,O,w,_)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(A||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,w,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,w,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),u.props=l,u.state=w,u.context=_,l=N):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Ju(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Zl(t,e.child,null,a),t.child=Zl(t,null,n,a)):gt(e,t,n,a),t.memoizedState=u.state,e=t.child):e=vn(e,t,a),e}function vs(e,t,n,l){return ba(),t.flags|=256,gt(e,t,n,l),t.child}var Ni={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zi(e){return{baseLanes:e,cachePool:ao()}}function Li(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function xs(e,t,n){var l=t.pendingProps,a=!1,u=(t.flags&128)!==0,o;if((o=u)||(o=e!==null&&e.memoizedState===null?!1:(ct.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(a?Gn(t):Bn(),Oe){var m=Fe,_;if(_=m){e:{for(_=m,m=tn;_.nodeType!==8;){if(!m){m=null;break e}if(_=Ft(_.nextSibling),_===null){m=null;break e}}m=_}m!==null?(t.memoizedState={dehydrated:m,treeContext:rl!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},_=Ht(18,null,null,0),_.stateNode=m,_.return=t,t.child=_,Rt=t,Fe=null,_=!0):_=!1}_||ol(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return M0(m)?t.lanes=32:t.lanes=536870912,null;yn(t)}return m=l.children,l=l.fallback,a?(Bn(),a=t.mode,m=Wu({mode:"hidden",children:m},a),l=ul(l,a,n,null),m.return=t,l.return=t,m.sibling=l,t.child=m,a=t.child,a.memoizedState=Zi(n),a.childLanes=Li(e,o,n),t.memoizedState=Ni,l):(Gn(t),Pi(t,m))}if(_=e.memoizedState,_!==null&&(m=_.dehydrated,m!==null)){if(u)t.flags&256?(Gn(t),t.flags&=-257,t=Qi(e,t,n)):t.memoizedState!==null?(Bn(),t.child=e.child,t.flags|=128,t=null):(Bn(),a=l.fallback,m=t.mode,l=Wu({mode:"visible",children:l.children},m),a=ul(a,m,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Zl(t,e.child,null,n),l=t.child,l.memoizedState=Zi(n),l.childLanes=Li(e,o,n),t.memoizedState=Ni,t=a);else if(Gn(t),M0(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var A=o.dgst;o=A,l=Error(i(419)),l.stack="",l.digest=o,_a({value:l,source:null,stack:null}),t=Qi(e,t,n)}else if(st||Sa(e,t,n,!1),o=(n&e.childLanes)!==0,st||o){if(o=Le,o!==null&&(l=n&-n,l=(l&42)!==0?1:ra(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==_.retryLane))throw _.retryLane=l,wl(e,l),Yt(o,e,l),ss;m.data==="$?"||f0(),t=Qi(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,Fe=Ft(m.nextSibling),Rt=t,Oe=!0,cl=null,tn=!1,e!==null&&(Zt[Lt++]=dn,Zt[Lt++]=hn,Zt[Lt++]=rl,dn=e.id,hn=e.overflow,rl=t),t=Pi(t,l.children),t.flags|=4096);return t}return a?(Bn(),a=l.fallback,m=t.mode,_=e.child,A=_.sibling,l=fn(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,A!==null?a=fn(A,a):(a=ul(a,m,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,m=e.child.memoizedState,m===null?m=Zi(n):(_=m.cachePool,_!==null?(A=it._currentValue,_=_.parent!==A?{parent:A,pool:A}:_):_=ao(),m={baseLanes:m.baseLanes|n,cachePool:_}),a.memoizedState=m,a.childLanes=Li(e,o,n),t.memoizedState=Ni,l):(Gn(t),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Pi(e,t){return t=Wu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wu(e,t){return e=Ht(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qi(e,t,n){return Zl(t,e.child,null,n),e=Pi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bs(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),fi(e.return,t,n)}function Ki(e,t,n,l,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=a)}function _s(e,t,n){var l=t.pendingProps,a=l.revealOrder,u=l.tail;if(gt(e,t,l.children,n),l=ct.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bs(e,n,t);else if(e.tag===19)bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Z(ct,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Pu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ki(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Pu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ki(t,!0,n,null,u);break;case"together":Ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ji(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function K1(e,t,n){switch(t.tag){case 3:Re(t,t.stateNode.containerInfo),Vn(t,it,e.memoizedState.cache),ba();break;case 27:case 5:xt(t);break;case 4:Re(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?xs(e,t,n):(Gn(t),e=vn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Sa(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return _s(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(ct,ct.current),l)break;return null;case 22:case 23:return t.lanes=0,ms(e,t,n);case 24:Vn(t,it,e.memoizedState.cache)}return vn(e,t,n)}function Ss(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!Ji(e,n)&&(t.flags&128)===0)return st=!1,K1(e,t,n);st=(e.flags&131072)!==0}else st=!1,Oe&&(t.flags&1048576)!==0&&$c(t,Au,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")ai(l)?(e=ml(l,e),t.tag=1,t=ys(null,t,l,e,n)):(t.tag=0,t=qi(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===K){t.tag=11,t=fs(null,t,l,e,n);break e}else if(a===Y){t.tag=14,t=ds(null,t,l,e,n);break e}}throw t=De(l)||l,Error(i(306,t,""))}}return t;case 0:return qi(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=ml(l,t.pendingProps),ys(e,t,l,a,n);case 3:e:{if(Re(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var u=t.memoizedState;a=u.element,vi(e,t),Aa(t,l,null,n);var o=t.memoizedState;if(l=o.cache,Vn(t,it,l),l!==u.cache&&di(t,[it],n,!0),Ma(),l=o.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=vs(e,t,l,n);break e}else if(l!==a){a=qt(Error(i(424)),t),_a(a),t=vs(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=Ft(e.firstChild),Rt=t,Oe=!0,cl=null,tn=!0,n=es(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ba(),l===a){t=vn(e,t,n);break e}gt(e,t,l,n)}t=t.child}return t;case 26:return Ju(e,t),e===null?(n=zf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,l=sr(re.current).createElement(n),l[bt]=t,l[Dt]=e,vt(l,n,e),ot(l),t.stateNode=l):t.memoizedState=zf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xt(t),e===null&&Oe&&(l=t.stateNode=Tf(t.type,t.pendingProps,re.current),Rt=t,tn=!0,a=Fe,Ln(t.type)?(A0=a,Fe=Ft(l.firstChild)):Fe=a),gt(e,t,t.pendingProps.children,n),Ju(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((a=l=Fe)&&(l=S3(l,t.type,t.pendingProps,tn),l!==null?(t.stateNode=l,Rt=t,Fe=Ft(l.firstChild),tn=!1,a=!0):a=!1),a||ol(t)),xt(t),a=t.type,u=t.pendingProps,o=e!==null?e.memoizedProps:null,l=u.children,R0(a,u)?l=null:o!==null&&R0(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=Ti(e,t,X1,null,null,n),$a._currentValue=a),Ju(e,t),gt(e,t,l,n),t.child;case 6:return e===null&&Oe&&((e=n=Fe)&&(n=C3(n,t.pendingProps,tn),n!==null?(t.stateNode=n,Rt=t,Fe=null,e=!0):e=!1),e||ol(t)),null;case 13:return xs(e,t,n);case 4:return Re(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Zl(t,null,l,n):gt(e,t,l,n),t.child;case 11:return fs(e,t,t.type,t.pendingProps,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Vn(t,t.type,l.value),gt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,fl(t),a=_t(a),l=l(a),t.flags|=1,gt(e,t,l,n),t.child;case 14:return ds(e,t,t.type,t.pendingProps,n);case 15:return hs(e,t,t.type,t.pendingProps,n);case 19:return _s(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Wu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=fn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ms(e,t,n);case 24:return fl(t),l=_t(it),e===null?(a=pi(),a===null&&(a=Le,u=hi(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),t.memoizedState={parent:l,cache:a},yi(t),Vn(t,it,a)):((e.lanes&n)!==0&&(vi(e,t),Aa(t,null,null,n),Ma()),a=e.memoizedState,u=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Vn(t,it,l)):(l=u.cache,Vn(t,it,l),l!==a.cache&&di(t,[it],n,!0))),gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function xn(e){e.flags|=4}function Cs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ef(t)){if(t=Pt.current,t!==null&&((Me&4194048)===Me?nn!==null:(Me&62914560)!==Me&&(Me&536870912)===0||t!==nn))throw Da=gi,uo;e.flags|=8192}}function $u(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ee():536870912,e.lanes|=t,Kl|=t)}function Ba(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function J1(e,t,n){var l=t.pendingProps;switch(ci(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return We(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),pn(it),Ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xa(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,eo())),We(t),null;case 26:return n=t.memoizedState,e===null?(xn(t),n!==null?(We(t),Cs(t,n)):(We(t),t.flags&=-16777217)):n?n!==e.memoizedState?(xn(t),We(t),Cs(t,n)):(We(t),t.flags&=-16777217):(e.memoizedProps!==l&&xn(t),We(t),t.flags&=-16777217),null;case 27:et(t),n=re.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return We(t),null}e=I.current,xa(t)?Fc(t):(e=Tf(a,l,n),t.stateNode=e,xn(t))}return We(t),null;case 5:if(et(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return We(t),null}if(e=I.current,xa(t))Fc(t);else{switch(a=sr(re.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[bt]=t,e[Dt]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(vt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&xn(t)}}return We(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=re.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Rt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[bt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||yf(e.nodeValue,n)),e||ol(t)}else e=sr(e).createTextNode(l),e[bt]=t,t.stateNode=e}return We(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=xa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[bt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else a=eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(yn(t),t):(yn(t),null)}if(yn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),$u(t,t.updateQueue),We(t),null;case 4:return Ue(),e===null&&b0(t.stateNode.containerInfo),We(t),null;case 10:return pn(t.type),We(t),null;case 19:if(q(ct),a=t.memoizedState,a===null)return We(t),null;if(l=(t.flags&128)!==0,u=a.rendering,u===null)if(l)Ba(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Pu(e),u!==null){for(t.flags|=128,Ba(a,!1),e=u.updateQueue,t.updateQueue=e,$u(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wc(n,e),n=n.sibling;return Z(ct,ct.current&1|2),t.child}e=e.sibling}a.tail!==null&&ge()>er&&(t.flags|=128,l=!0,Ba(a,!1),t.lanes=4194304)}else{if(!l)if(e=Pu(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,$u(t,e),Ba(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Oe)return We(t),null}else 2*ge()-a.renderingStartTime>er&&n!==536870912&&(t.flags|=128,l=!0,Ba(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,e=ct.current,Z(ct,l?e&1|2:e&1),t):(We(t),null);case 22:case 23:return yn(t),Si(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),n=t.updateQueue,n!==null&&$u(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&q(dl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pn(it),We(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function W1(e,t){switch(ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(it),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return et(t),null;case 13:if(yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ct),null;case 4:return Ue(),null;case 10:return pn(t.type),null;case 22:case 23:return yn(t),Si(),e!==null&&q(dl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pn(it),null;case 25:return null;default:return null}}function Ts(e,t){switch(ci(t),t.tag){case 3:pn(it),Ue();break;case 26:case 27:case 5:et(t);break;case 4:Ue();break;case 13:yn(t);break;case 19:q(ct);break;case 10:pn(t.type);break;case 22:case 23:yn(t),Si(),e!==null&&q(dl);break;case 24:pn(it)}}function Ua(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var u=n.create,o=n.inst;l=u(),o.destroy=l}n=n.next}while(n!==a)}}catch(m){Ne(t,t.return,m)}}function Un(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&e)===e){var o=l.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,a=t;var _=n,A=m;try{A()}catch(N){Ne(a,_,N)}}}l=l.next}while(l!==u)}}catch(N){Ne(t,t.return,N)}}function Rs(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fo(t,n)}catch(l){Ne(e,e.return,l)}}}function Ds(e,t,n){n.props=ml(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ne(e,t,l)}}function ja(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Ne(e,t,a)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Ne(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ne(e,t,a)}else n.current=null}function zs(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Ne(e,e.return,a)}}function Wi(e,t,n){try{var l=e.stateNode;y3(l,e.type,n,t),l[Dt]=t}catch(a){Ne(e,e.return,a)}}function Ms(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ln(e.type)||e.tag===4}function $i(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ln(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=or));else if(l!==4&&(l===27&&Ln(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Fu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Ln(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fu(e,t,n),e=e.sibling;e!==null;)Fu(e,t,n),e=e.sibling}function As(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);vt(t,l,n),t[bt]=e,t[Dt]=n}catch(u){Ne(e,e.return,u)}}var bn=!1,nt=!1,Ii=!1,Vs=typeof WeakSet=="function"?WeakSet:Set,ft=null;function $1(e,t){if(e=e.containerInfo,C0=gr,e=Xc(e),$r(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var o=0,m=-1,_=-1,A=0,N=0,Q=e,O=null;t:for(;;){for(var w;Q!==n||a!==0&&Q.nodeType!==3||(m=o+a),Q!==u||l!==0&&Q.nodeType!==3||(_=o+l),Q.nodeType===3&&(o+=Q.nodeValue.length),(w=Q.firstChild)!==null;)O=Q,Q=w;for(;;){if(Q===e)break t;if(O===n&&++A===a&&(m=o),O===u&&++N===l&&(_=o),(w=Q.nextSibling)!==null)break;Q=O,O=Q.parentNode}Q=w}n=m===-1||_===-1?null:{start:m,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(T0={focusedElem:e,selectionRange:n},gr=!1,ft=t;ft!==null;)if(t=ft,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ft=e;else for(;ft!==null;){switch(t=ft,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var de=ml(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(de,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ne(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)z0(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":z0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ft=e;break}ft=t.return}}function Os(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),l&4&&Ua(5,n);break;case 1:if(jn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Ne(n,n.return,o)}else{var a=ml(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ne(n,n.return,o)}}l&64&&Rs(n),l&512&&ja(n,n.return);break;case 3:if(jn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fo(e,t)}catch(o){Ne(n,n.return,o)}}break;case 27:t===null&&l&4&&As(n);case 26:case 5:jn(e,n),t===null&&l&4&&zs(n),l&512&&ja(n,n.return);break;case 12:jn(e,n);break;case 13:jn(e,n),l&4&&Hs(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=r3.bind(null,n),T3(e,n))));break;case 22:if(l=n.memoizedState!==null||bn,!l){t=t!==null&&t.memoizedState!==null||nt,a=bn;var u=nt;bn=l,(nt=t)&&!u?Yn(e,n,(n.subtreeFlags&8772)!==0):jn(e,n),bn=a,nt=u}break;case 30:break;default:jn(e,n)}}function Es(e){var t=e.alternate;t!==null&&(e.alternate=null,Es(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Er(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,At=!1;function _n(e,t,n){for(n=n.child;n!==null;)ws(e,t,n),n=n.sibling}function ws(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Jt,n)}catch{}switch(n.tag){case 26:nt||ln(n,t),_n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||ln(n,t);var l=Ke,a=At;Ln(n.type)&&(Ke=n.stateNode,At=!1),_n(e,t,n),Qa(n.stateNode),Ke=l,At=a;break;case 5:nt||ln(n,t);case 6:if(l=Ke,a=At,Ke=null,_n(e,t,n),Ke=l,At=a,Ke!==null)if(At)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(u){Ne(n,t,u)}else try{Ke.removeChild(n.stateNode)}catch(u){Ne(n,t,u)}break;case 18:Ke!==null&&(At?(e=Ke,Sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),tu(e)):Sf(Ke,n.stateNode));break;case 4:l=Ke,a=At,Ke=n.stateNode.containerInfo,At=!0,_n(e,t,n),Ke=l,At=a;break;case 0:case 11:case 14:case 15:nt||Un(2,n,t),nt||Un(4,n,t),_n(e,t,n);break;case 1:nt||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ds(n,t,l)),_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:nt=(l=nt)||n.memoizedState!==null,_n(e,t,n),nt=l;break;default:_n(e,t,n)}}function Hs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tu(e)}catch(n){Ne(t,t.return,n)}}function F1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vs),t;default:throw Error(i(435,e.tag))}}function e0(e,t){var n=F1(e);t.forEach(function(l){var a=i3.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(Ln(m.type)){Ke=m.stateNode,At=!1;break e}break;case 5:Ke=m.stateNode,At=!1;break e;case 3:case 4:Ke=m.stateNode.containerInfo,At=!0;break e}m=m.return}if(Ke===null)throw Error(i(160));ws(u,o,a),Ke=null,At=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Gs(t,e),t=t.sibling}var $t=null;function Gs(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Bt(e),l&4&&(Un(3,e,e.return),Ua(3,e),Un(5,e,e.return));break;case 1:Gt(t,e),Bt(e),l&512&&(nt||n===null||ln(n,n.return)),l&64&&bn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=$t;if(Gt(t,e),Bt(e),l&512&&(nt||n===null||ln(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ca]||u[bt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),vt(u,l,n),u[bt]=e,ot(u),l=u;break e;case"link":var o=Vf("link","href",a).get(l+(n.href||""));if(o){for(var m=0;m<o.length;m++)if(u=o[m],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(m,1);break t}}u=a.createElement(l),vt(u,l,n),a.head.appendChild(u);break;case"meta":if(o=Vf("meta","content",a).get(l+(n.content||""))){for(m=0;m<o.length;m++)if(u=o[m],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(m,1);break t}}u=a.createElement(l),vt(u,l,n),a.head.appendChild(u);break;default:throw Error(i(468,l))}u[bt]=e,ot(u),l=u}e.stateNode=l}else Of(a,e.type,e.stateNode);else e.stateNode=Af(a,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Of(a,e.type,e.stateNode):Af(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Wi(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Bt(e),l&512&&(nt||n===null||ln(n,n.return)),n!==null&&l&4&&Wi(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Bt(e),l&512&&(nt||n===null||ln(n,n.return)),e.flags&32){a=e.stateNode;try{Dl(a,"")}catch(w){Ne(e,e.return,w)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Wi(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ii=!0);break;case 6:if(Gt(t,e),Bt(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(w){Ne(e,e.return,w)}}break;case 3:if(hr=null,a=$t,$t=fr(t.containerInfo),Gt(t,e),$t=a,Bt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{tu(t.containerInfo)}catch(w){Ne(e,e.return,w)}Ii&&(Ii=!1,Bs(e));break;case 4:l=$t,$t=fr(e.stateNode.containerInfo),Gt(t,e),Bt(e),$t=l;break;case 12:Gt(t,e),Bt(e);break;case 13:Gt(t,e),Bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(r0=ge()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,e0(e,l)));break;case 22:a=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,A=bn,N=nt;if(bn=A||a,nt=N||_,Gt(t,e),nt=N,bn=A,Bt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||_||bn||nt||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(u=_.stateNode,a)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=_.stateNode;var Q=_.memoizedProps.style,O=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;m.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(w){Ne(_,_.return,w)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=a?"":_.memoizedProps}catch(w){Ne(_,_.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,e0(e,n))));break;case 19:Gt(t,e),Bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,e0(e,l)));break;case 30:break;case 21:break;default:Gt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Ms(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,u=$i(e);Fu(e,u,a);break;case 5:var o=n.stateNode;n.flags&32&&(Dl(o,""),n.flags&=-33);var m=$i(e);Fu(e,m,o);break;case 3:case 4:var _=n.stateNode.containerInfo,A=$i(e);Fi(e,A,_);break;default:throw Error(i(161))}}catch(N){Ne(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Os(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Un(4,t,t.return),pl(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ds(t,t.return,n),pl(t);break;case 27:Qa(t.stateNode);case 26:case 5:ln(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function Yn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,u=t,o=u.flags;switch(u.tag){case 0:case 11:case 15:Yn(a,u,n),Ua(4,u);break;case 1:if(Yn(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(A){Ne(l,l.return,A)}if(l=u,a=l.updateQueue,a!==null){var m=l.stateNode;try{var _=a.shared.hiddenCallbacks;if(_!==null)for(a.shared.hiddenCallbacks=null,a=0;a<_.length;a++)so(_[a],m)}catch(A){Ne(l,l.return,A)}}n&&o&64&&Rs(u),ja(u,u.return);break;case 27:As(u);case 26:case 5:Yn(a,u,n),n&&l===null&&o&4&&zs(u),ja(u,u.return);break;case 12:Yn(a,u,n);break;case 13:Yn(a,u,n),n&&o&4&&Hs(a,u);break;case 22:u.memoizedState===null&&Yn(a,u,n),ja(u,u.return);break;case 30:break;default:Yn(a,u,n)}t=t.sibling}}function t0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function n0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function an(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Us(e,t,n,l),t=t.sibling}function Us(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,l),a&2048&&Ua(9,t);break;case 1:an(e,t,n,l);break;case 3:an(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e)));break;case 12:if(a&2048){an(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,o=u.id,m=u.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Ne(t,t.return,_)}}else an(e,t,n,l);break;case 13:an(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,o=t.alternate,t.memoizedState!==null?u._visibility&2?an(e,t,n,l):Ya(e,t):u._visibility&2?an(e,t,n,l):(u._visibility|=2,Ll(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&t0(o,t);break;case 24:an(e,t,n,l),a&2048&&n0(t.alternate,t);break;default:an(e,t,n,l)}}function Ll(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,o=t,m=n,_=l,A=o.flags;switch(o.tag){case 0:case 11:case 15:Ll(u,o,m,_,a),Ua(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?Ll(u,o,m,_,a):Ya(u,o):(N._visibility|=2,Ll(u,o,m,_,a)),a&&A&2048&&t0(o.alternate,o);break;case 24:Ll(u,o,m,_,a),a&&A&2048&&n0(o.alternate,o);break;default:Ll(u,o,m,_,a)}t=t.sibling}}function Ya(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Ya(n,l),a&2048&&t0(l.alternate,l);break;case 24:Ya(n,l),a&2048&&n0(l.alternate,l);break;default:Ya(n,l)}t=t.sibling}}var Xa=8192;function Pl(e){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)js(e),e=e.sibling}function js(e){switch(e.tag){case 26:Pl(e),e.flags&Xa&&e.memoizedState!==null&&U3($t,e.memoizedState,e.memoizedProps);break;case 5:Pl(e);break;case 3:case 4:var t=$t;$t=fr(e.stateNode.containerInfo),Pl(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xa,Xa=16777216,Pl(e),Xa=t):Pl(e));break;default:Pl(e)}}function Ys(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ka(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ft=l,ks(l,e)}Ys(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:ka(e),e.flags&2048&&Un(9,e,e.return);break;case 3:ka(e);break;case 12:ka(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Iu(e)):ka(e);break;default:ka(e)}}function Iu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ft=l,ks(l,e)}Ys(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Un(8,t,t.return),Iu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Iu(t));break;default:Iu(t)}e=e.sibling}}function ks(e,t){for(;ft!==null;){var n=ft;switch(n.tag){case 0:case 11:case 15:Un(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ft=l;else e:for(n=e;ft!==null;){l=ft;var a=l.sibling,u=l.return;if(Es(l),l===n){ft=null;break e}if(a!==null){a.return=u,ft=a;break e}ft=u}}}var I1={getCacheForType:function(e){var t=_t(it),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},e3=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Le=null,Ce=null,Me=0,Be=0,Ut=null,Xn=!1,Ql=!1,l0=!1,Sn=0,Ie=0,kn=0,gl=0,a0=0,Qt=0,Kl=0,qa=null,Vt=null,u0=!1,r0=0,er=1/0,tr=null,qn=null,yt=0,Nn=null,Jl=null,Wl=0,i0=0,c0=null,qs=null,Na=0,o0=null;function jt(){if((Ge&2)!==0&&Me!==0)return Me&-Me;if(H.T!==null){var e=Ul;return e!==0?e:g0()}return du()}function Ns(){Qt===0&&(Qt=(Me&536870912)===0||Oe?Ye():536870912);var e=Pt.current;return e!==null&&(e.flags|=32),Qt}function Yt(e,t,n){(e===Le&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&($l(e,0),Zn(e,Me,Qt,!1)),el(e,n),((Ge&2)===0||e!==Le)&&(e===Le&&((Ge&2)===0&&(gl|=n),Ie===4&&Zn(e,Me,Qt,!1)),un(e))}function Zs(e,t,n){if((Ge&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ve(e,t),a=l?l3(e,t):d0(e,t,!0),u=l;do{if(a===0){Ql&&!l&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!t3(n)){a=d0(e,t,!1),u=!1;continue}if(a===2){if(u=t,e.errorRecoveryDisabledLanes&u)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;a=qa;var _=m.current.memoizedState.isDehydrated;if(_&&($l(m,o).flags|=256),o=d0(m,o,!1),o!==2){if(l0&&!_){m.errorRecoveryDisabledLanes|=u,gl|=u,a=4;break e}u=Vt,Vt=a,u!==null&&(Vt===null?Vt=u:Vt.push.apply(Vt,u))}a=o}if(u=!1,a!==2)continue}}if(a===1){$l(e,0),Zn(e,t,0,!0);break}e:{switch(l=e,u=a,u){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Zn(l,t,Qt,!Xn);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=r0+300-ge(),10<a)){if(Zn(l,t,Qt,!Xn),ze(l,0,!0)!==0)break e;l.timeoutHandle=bf(Ls.bind(null,l,n,Vt,tr,u0,t,Qt,gl,Kl,Xn,u,2,-0,0),a);break e}Ls(l,n,Vt,tr,u0,t,Qt,gl,Kl,Xn,u,0,-0,0)}}break}while(!0);un(e)}function Ls(e,t,n,l,a,u,o,m,_,A,N,Q,O,w){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Wa={stylesheets:null,count:0,unsuspend:B3},js(t),Q=j3(),Q!==null)){e.cancelPendingCommit=Q(Fs.bind(null,e,t,u,n,l,a,o,m,_,N,1,O,w)),Zn(e,u,o,!A);return}Fs(e,t,u,n,l,a,o,m,_)}function t3(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!wt(u(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,l){t&=~a0,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var u=31-He(a),o=1<<u;l[u]=-1,a&=~o}n!==0&&su(e,n,t)}function nr(){return(Ge&6)===0?(Za(0),!1):!0}function s0(){if(Ce!==null){if(Be===0)var e=Ce.return;else e=Ce,mn=sl=null,zi(e),Nl=null,Ha=0,e=Ce;for(;e!==null;)Ts(e.alternate,e),e=e.return;Ce=null}}function $l(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,x3(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),s0(),Le=e,Ce=n=fn(e.current,null),Me=t,Be=0,Ut=null,Xn=!1,Ql=Ve(e,t),l0=!1,Kl=Qt=a0=gl=kn=Ie=0,Vt=qa=null,u0=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-He(l),u=1<<a;t|=e[a],l&=~u}return Sn=t,Tu(),n}function Ps(e,t){_e=null,H.H=Nu,t===Ra||t===wu?(t=co(),Be=3):t===uo?(t=co(),Be=4):Be=t===ss?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,Ce===null&&(Ie=1,Ku(e,qt(t,e.current)))}function Qs(){var e=H.H;return H.H=Nu,e===null?Nu:e}function Ks(){var e=H.A;return H.A=I1,e}function f0(){Ie=4,Xn||(Me&4194048)!==Me&&Pt.current!==null||(Ql=!0),(kn&134217727)===0&&(gl&134217727)===0||Le===null||Zn(Le,Me,Qt,!1)}function d0(e,t,n){var l=Ge;Ge|=2;var a=Qs(),u=Ks();(Le!==e||Me!==t)&&(tr=null,$l(e,t)),t=!1;var o=Ie;e:do try{if(Be!==0&&Ce!==null){var m=Ce,_=Ut;switch(Be){case 8:s0(),o=6;break e;case 3:case 2:case 9:case 6:Pt.current===null&&(t=!0);var A=Be;if(Be=0,Ut=null,Fl(e,m,_,A),n&&Ql){o=0;break e}break;default:A=Be,Be=0,Ut=null,Fl(e,m,_,A)}}n3(),o=Ie;break}catch(N){Ps(e,N)}while(!0);return t&&e.shellSuspendCounter++,mn=sl=null,Ge=l,H.H=a,H.A=u,Ce===null&&(Le=null,Me=0,Tu()),o}function n3(){for(;Ce!==null;)Js(Ce)}function l3(e,t){var n=Ge;Ge|=2;var l=Qs(),a=Ks();Le!==e||Me!==t?(tr=null,er=ge()+500,$l(e,t)):Ql=Ve(e,t);e:do try{if(Be!==0&&Ce!==null){t=Ce;var u=Ut;t:switch(Be){case 1:Be=0,Ut=null,Fl(e,t,u,1);break;case 2:case 9:if(ro(u)){Be=0,Ut=null,Ws(t);break}t=function(){Be!==2&&Be!==9||Le!==e||(Be=7),un(e)},u.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:ro(u)?(Be=0,Ut=null,Ws(t)):(Be=0,Ut=null,Fl(e,t,u,7));break;case 5:var o=null;switch(Ce.tag){case 26:o=Ce.memoizedState;case 5:case 27:var m=Ce;if(!o||Ef(o)){Be=0,Ut=null;var _=m.sibling;if(_!==null)Ce=_;else{var A=m.return;A!==null?(Ce=A,lr(A)):Ce=null}break t}}Be=0,Ut=null,Fl(e,t,u,5);break;case 6:Be=0,Ut=null,Fl(e,t,u,6);break;case 8:s0(),Ie=6;break e;default:throw Error(i(462))}}a3();break}catch(N){Ps(e,N)}while(!0);return mn=sl=null,H.H=l,H.A=a,Ge=n,Ce!==null?0:(Le=null,Me=0,Tu(),Ie)}function a3(){for(;Ce!==null&&!ne();)Js(Ce)}function Js(e){var t=Ss(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?lr(e):Ce=t}function Ws(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gs(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=gs(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:zi(t);default:Ts(n,t),t=Ce=Wc(t,Sn),t=Ss(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?lr(e):Ce=t}function Fl(e,t,n,l){mn=sl=null,zi(t),Nl=null,Ha=0;var a=t.return;try{if(Q1(e,a,t,n,Me)){Ie=1,Ku(e,qt(n,e.current)),Ce=null;return}}catch(u){if(a!==null)throw Ce=a,u;Ie=1,Ku(e,qt(n,e.current)),Ce=null;return}t.flags&32768?(Oe||l===1?e=!0:Ql||(Me&536870912)!==0?e=!1:(Xn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),$s(t,e)):lr(t)}function lr(e){var t=e;do{if((t.flags&32768)!==0){$s(t,Xn);return}e=t.return;var n=J1(t.alternate,t,Sn);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Ie===0&&(Ie=5)}function $s(e,t){do{var n=W1(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);Ie=6,Ce=null}function Fs(e,t,n,l,a,u,o,m,_){e.cancelPendingCommit=null;do ar();while(yt!==0);if((Ge&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(u=t.lanes|t.childLanes,u|=ni,Vr(e,n,u,o,m,_),e===Le&&(Ce=Le=null,Me=0),Jl=t,Nn=e,Wl=n,i0=u,c0=a,qs=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c3(lt,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,a=J.p,J.p=2,o=Ge,Ge|=4;try{$1(e,t,n)}finally{Ge=o,J.p=a,H.T=l}}yt=1,Is(),ef(),tf()}}function Is(){if(yt===1){yt=0;var e=Nn,t=Jl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var l=J.p;J.p=2;var a=Ge;Ge|=4;try{Gs(t,e);var u=T0,o=Xc(e.containerInfo),m=u.focusedElem,_=u.selectionRange;if(o!==m&&m&&m.ownerDocument&&Yc(m.ownerDocument.documentElement,m)){if(_!==null&&$r(m)){var A=_.start,N=_.end;if(N===void 0&&(N=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(N,m.value.length);else{var Q=m.ownerDocument||document,O=Q&&Q.defaultView||window;if(O.getSelection){var w=O.getSelection(),de=m.textContent.length,oe=Math.min(_.start,de),qe=_.end===void 0?oe:Math.min(_.end,de);!w.extend&&oe>qe&&(o=qe,qe=oe,oe=o);var z=jc(m,oe),R=jc(m,qe);if(z&&R&&(w.rangeCount!==1||w.anchorNode!==z.node||w.anchorOffset!==z.offset||w.focusNode!==R.node||w.focusOffset!==R.offset)){var M=Q.createRange();M.setStart(z.node,z.offset),w.removeAllRanges(),oe>qe?(w.addRange(M),w.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),w.addRange(M))}}}}for(Q=[],w=m;w=w.parentNode;)w.nodeType===1&&Q.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Q.length;m++){var L=Q[m];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}gr=!!C0,T0=C0=null}finally{Ge=a,J.p=l,H.T=n}}e.current=t,yt=2}}function ef(){if(yt===2){yt=0;var e=Nn,t=Jl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var l=J.p;J.p=2;var a=Ge;Ge|=4;try{Os(e,t.alternate,t)}finally{Ge=a,J.p=l,H.T=n}}yt=3}}function tf(){if(yt===4||yt===3){yt=0,me();var e=Nn,t=Jl,n=Wl,l=qs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,Jl=Nn=null,nf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(qn=null),ia(n),t=t.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,a=J.p,J.p=2,H.T=null;try{for(var u=e.onRecoverableError,o=0;o<l.length;o++){var m=l[o];u(m.value,{componentStack:m.stack})}}finally{H.T=t,J.p=a}}(Wl&3)!==0&&ar(),un(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===o0?Na++:(Na=0,o0=e):Na=0,Za(0)}}function nf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function ar(e){return Is(),ef(),tf(),lf()}function lf(){if(yt!==5)return!1;var e=Nn,t=i0;i0=0;var n=ia(Wl),l=H.T,a=J.p;try{J.p=32>n?32:n,H.T=null,n=c0,c0=null;var u=Nn,o=Wl;if(yt=0,Jl=Nn=null,Wl=0,(Ge&6)!==0)throw Error(i(331));var m=Ge;if(Ge|=4,Xs(u.current),Us(u,u.current,o,n),Ge=m,Za(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Jt,u)}catch{}return!0}finally{J.p=a,H.T=l,nf(e,t)}}function af(e,t,n){t=qt(n,t),t=ki(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(el(e,2),un(e))}function Ne(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qn===null||!qn.has(l))){e=qt(n,e),n=cs(2),l=wn(t,n,2),l!==null&&(os(n,l,t,e),el(l,2),un(l));break}}t=t.return}}function h0(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new e3;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(l0=!0,a.add(n),e=u3.bind(null,e,t,n),t.then(e,e))}function u3(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Me&n)===n&&(Ie===4||Ie===3&&(Me&62914560)===Me&&300>ge()-r0?(Ge&2)===0&&$l(e,0):a0|=n,Kl===Me&&(Kl=0)),un(e)}function uf(e,t){t===0&&(t=ee()),e=wl(e,t),e!==null&&(el(e,t),un(e))}function r3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uf(e,n)}function i3(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),uf(e,n)}function c3(e,t){return Dn(e,t)}var ur=null,Il=null,m0=!1,rr=!1,p0=!1,yl=0;function un(e){e!==Il&&e.next===null&&(Il===null?ur=Il=e:Il=Il.next=e),rr=!0,m0||(m0=!0,s3())}function Za(e,t){if(!p0&&rr){p0=!0;do for(var n=!1,l=ur;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var o=l.suspendedLanes,m=l.pingedLanes;u=(1<<31-He(42|e)+1)-1,u&=a&~(o&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,sf(l,u))}else u=Me,u=ze(l,l===Le?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Ve(l,u)||(n=!0,sf(l,u));l=l.next}while(n);p0=!1}}function o3(){rf()}function rf(){rr=m0=!1;var e=0;yl!==0&&(v3()&&(e=yl),yl=0);for(var t=ge(),n=null,l=ur;l!==null;){var a=l.next,u=cf(l,t);u===0?(l.next=null,n===null?ur=a:n.next=a,a===null&&(Il=n)):(n=l,(e!==0||(u&3)!==0)&&(rr=!0)),l=a}Za(e)}function cf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var o=31-He(u),m=1<<o,_=a[o];_===-1?((m&n)===0||(m&l)!==0)&&(a[o]=rt(m,t)):_<=t&&(e.expiredLanes|=m),u&=~m}if(t=Le,n=Me,n=ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rn(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ve(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&rn(l),ia(n)){case 2:case 8:n=Je;break;case 32:n=lt;break;case 268435456:n=be;break;default:n=lt}return l=of.bind(null,e),n=Dn(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&rn(l),e.callbackPriority=2,e.callbackNode=null,2}function of(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var l=Me;return l=ze(e,e===Le?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zs(e,l,t),cf(e,ge()),e.callbackNode!=null&&e.callbackNode===n?of.bind(null,e):null)}function sf(e,t){if(ar())return null;Zs(e,t,!0)}function s3(){b3(function(){(Ge&6)!==0?Dn(je,o3):rf()})}function g0(){return yl===0&&(yl=Ye()),yl}function ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yu(""+e)}function df(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function f3(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var u=ff((a[Dt]||null).action),o=l.submitter;o&&(t=(t=o[Dt]||null)?ff(t.formAction):o.getAttribute("formAction"),t!==null&&(u=t,o=null));var m=new _u("action","action",null,l,a);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(yl!==0){var _=o?df(a,o):new FormData(a);Bi(n,{pending:!0,data:_,method:a.method,action:u},null,_)}}else typeof u=="function"&&(m.preventDefault(),_=o?df(a,o):new FormData(a),Bi(n,{pending:!0,data:_,method:a.method,action:u},u,_))},currentTarget:a}]})}}for(var y0=0;y0<ti.length;y0++){var v0=ti[y0],d3=v0.toLowerCase(),h3=v0[0].toUpperCase()+v0.slice(1);Wt(d3,"on"+h3)}Wt(Nc,"onAnimationEnd"),Wt(Zc,"onAnimationIteration"),Wt(Lc,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(V1,"onTransitionRun"),Wt(O1,"onTransitionStart"),Wt(E1,"onTransitionCancel"),Wt(Pc,"onTransitionEnd"),Cl("onMouseEnter",["mouseout","mouseover"]),Cl("onMouseLeave",["mouseout","mouseover"]),Cl("onPointerEnter",["pointerout","pointerover"]),Cl("onPointerLeave",["pointerout","pointerover"]),tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La));function hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var o=l.length-1;0<=o;o--){var m=l[o],_=m.instance,A=m.currentTarget;if(m=m.listener,_!==u&&a.isPropagationStopped())break e;u=m,a.currentTarget=A;try{u(a)}catch(N){Qu(N)}a.currentTarget=null,u=_}else for(o=0;o<l.length;o++){if(m=l[o],_=m.instance,A=m.currentTarget,m=m.listener,_!==u&&a.isPropagationStopped())break e;u=m,a.currentTarget=A;try{u(a)}catch(N){Qu(N)}a.currentTarget=null,u=_}}}}function Te(e,t){var n=t[Or];n===void 0&&(n=t[Or]=new Set);var l=e+"__bubble";n.has(l)||(mf(t,e,2,!1),n.add(l))}function x0(e,t,n){var l=0;t&&(l|=4),mf(n,e,l,t)}var ir="_reactListening"+Math.random().toString(36).slice(2);function b0(e){if(!e[ir]){e[ir]=!0,uc.forEach(function(n){n!=="selectionchange"&&(m3.has(n)||x0(n,!1,e),x0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ir]||(t[ir]=!0,x0("selectionchange",!1,t))}}function mf(e,t,n,l){switch(jf(t)){case 2:var a=k3;break;case 8:a=q3;break;default:a=H0}n=a.bind(null,t,n,e),a=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _0(e,t,n,l,a){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var m=l.stateNode.containerInfo;if(m===a)break;if(o===4)for(o=l.return;o!==null;){var _=o.tag;if((_===3||_===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;m!==null;){if(o=bl(m),o===null)return;if(_=o.tag,_===5||_===6||_===26||_===27){l=u=o;continue e}m=m.parentNode}}l=l.return}xc(function(){var A=u,N=Xr(n),Q=[];e:{var O=Qc.get(e);if(O!==void 0){var w=_u,de=e;switch(e){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":w=c1;break;case"focusin":de="focus",w=Pr;break;case"focusout":de="blur",w=Pr;break;case"beforeblur":case"afterblur":w=Pr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=f1;break;case Nc:case Zc:case Lc:w=I2;break;case Pc:w=h1;break;case"scroll":case"scrollend":w=K2;break;case"wheel":w=p1;break;case"copy":case"cut":case"paste":w=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Tc;break;case"toggle":case"beforetoggle":w=y1}var oe=(t&4)!==0,qe=!oe&&(e==="scroll"||e==="scrollend"),z=oe?O!==null?O+"Capture":null:O;oe=[];for(var R=A,M;R!==null;){var L=R;if(M=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||M===null||z===null||(L=sa(R,z),L!=null&&oe.push(Pa(R,L,M))),qe)break;R=R.return}0<oe.length&&(O=new w(O,de,null,n,N),Q.push({event:O,listeners:oe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",O&&n!==Yr&&(de=n.relatedTarget||n.fromElement)&&(bl(de)||de[xl]))break e;if((w||O)&&(O=N.window===N?N:(O=N.ownerDocument)?O.defaultView||O.parentWindow:window,w?(de=n.relatedTarget||n.toElement,w=A,de=de?bl(de):null,de!==null&&(qe=c(de),oe=de.tag,de!==qe||oe!==5&&oe!==27&&oe!==6)&&(de=null)):(w=null,de=A),w!==de)){if(oe=Sc,L="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Tc,L="onPointerLeave",z="onPointerEnter",R="pointer"),qe=w==null?O:oa(w),M=de==null?O:oa(de),O=new oe(L,R+"leave",w,n,N),O.target=qe,O.relatedTarget=M,L=null,bl(N)===A&&(oe=new oe(z,R+"enter",de,n,N),oe.target=M,oe.relatedTarget=qe,L=oe),qe=L,w&&de)t:{for(oe=w,z=de,R=0,M=oe;M;M=ea(M))R++;for(M=0,L=z;L;L=ea(L))M++;for(;0<R-M;)oe=ea(oe),R--;for(;0<M-R;)z=ea(z),M--;for(;R--;){if(oe===z||z!==null&&oe===z.alternate)break t;oe=ea(oe),z=ea(z)}oe=null}else oe=null;w!==null&&pf(Q,O,w,oe,!1),de!==null&&qe!==null&&pf(Q,qe,de,oe,!0)}}e:{if(O=A?oa(A):window,w=O.nodeName&&O.nodeName.toLowerCase(),w==="select"||w==="input"&&O.type==="file")var le=Ec;else if(Vc(O))if(wc)le=z1;else{le=R1;var Se=T1}else w=O.nodeName,!w||w.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&jr(A.elementType)&&(le=Ec):le=D1;if(le&&(le=le(e,A))){Oc(Q,le,n,N);break e}Se&&Se(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&Ur(O,"number",O.value)}switch(Se=A?oa(A):window,e){case"focusin":(Vc(Se)||Se.contentEditable==="true")&&(Vl=Se,Fr=A,va=null);break;case"focusout":va=Fr=Vl=null;break;case"mousedown":Ir=!0;break;case"contextmenu":case"mouseup":case"dragend":Ir=!1,kc(Q,n,N);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":kc(Q,n,N)}var ie;if(Kr)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Al?Mc(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(Rc&&n.locale!=="ko"&&(Al||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Al&&(ie=bc()):(An=N,Nr="value"in An?An.value:An.textContent,Al=!0)),Se=cr(A,fe),0<Se.length&&(fe=new Cc(fe,e,null,n,N),Q.push({event:fe,listeners:Se}),ie?fe.data=ie:(ie=Ac(n),ie!==null&&(fe.data=ie)))),(ie=x1?b1(e,n):_1(e,n))&&(fe=cr(A,"onBeforeInput"),0<fe.length&&(Se=new Cc("onBeforeInput","beforeinput",null,n,N),Q.push({event:Se,listeners:fe}),Se.data=ie)),f3(Q,e,A,n,N)}hf(Q,t)})}function Pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cr(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=sa(e,n),a!=null&&l.unshift(Pa(e,a,u)),a=sa(e,t),a!=null&&l.push(Pa(e,a,u))),e.tag===3)return l;e=e.return}return[]}function ea(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pf(e,t,n,l,a){for(var u=t._reactName,o=[];n!==null&&n!==l;){var m=n,_=m.alternate,A=m.stateNode;if(m=m.tag,_!==null&&_===l)break;m!==5&&m!==26&&m!==27||A===null||(_=A,a?(A=sa(n,u),A!=null&&o.unshift(Pa(n,A,_))):a||(A=sa(n,u),A!=null&&o.push(Pa(n,A,_)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var p3=/\r\n?/g,g3=/\u0000|\uFFFD/g;function gf(e){return(typeof e=="string"?e:""+e).replace(p3,`
`).replace(g3,"")}function yf(e,t){return t=gf(t),gf(e)===t}function or(){}function ke(e,t,n,l,a,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Dl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Dl(e,""+l);break;case"className":mu(e,"class",l);break;case"tabIndex":mu(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mu(e,n,l);break;case"style":yc(e,l,u);break;case"data":if(t!=="object"){mu(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=yu(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",a.name,a,null),ke(e,t,"formEncType",a.formEncType,a,null),ke(e,t,"formMethod",a.formMethod,a,null),ke(e,t,"formTarget",a.formTarget,a,null)):(ke(e,t,"encType",a.encType,a,null),ke(e,t,"method",a.method,a,null),ke(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=yu(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=or);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=yu(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),hu(e,"popover",l);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hu(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=P2.get(n)||n,hu(e,n,l))}}function S0(e,t,n,l,a,u){switch(n){case"style":yc(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Dl(e,l):(typeof l=="number"||typeof l=="bigint")&&Dl(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=or);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),u=e[Dt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):hu(e,n,l)}}}function vt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var o=n[u];if(o!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:ke(e,t,u,o,n,null)}}a&&ke(e,t,"srcSet",n.srcSet,n,null),l&&ke(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var m=u=o=a=null,_=null,A=null;for(l in n)if(n.hasOwnProperty(l)){var N=n[l];if(N!=null)switch(l){case"name":a=N;break;case"type":o=N;break;case"checked":_=N;break;case"defaultChecked":A=N;break;case"value":u=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(137,t));break;default:ke(e,t,l,N,n,null)}}hc(e,u,m,_,A,o,a,!1),pu(e);return;case"select":Te("invalid",e),l=o=u=null;for(a in n)if(n.hasOwnProperty(a)&&(m=n[a],m!=null))switch(a){case"value":u=m;break;case"defaultValue":o=m;break;case"multiple":l=m;default:ke(e,t,a,m,n,null)}t=u,n=o,e.multiple=!!l,t!=null?Rl(e,!!l,t,!1):n!=null&&Rl(e,!!l,n,!0);return;case"textarea":Te("invalid",e),u=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(m=n[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":a=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:ke(e,t,o,m,n,null)}pc(e,l,a,u),pu(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,t,_,l,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<La.length;l++)Te(La[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(l=n[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:ke(e,t,A,l,n,null)}return;default:if(jr(t)){for(N in n)n.hasOwnProperty(N)&&(l=n[N],l!==void 0&&S0(e,t,N,l,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(l=n[m],l!=null&&ke(e,t,m,l,n,null))}function y3(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,o=null,m=null,_=null,A=null,N=null;for(w in n){var Q=n[w];if(n.hasOwnProperty(w)&&Q!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":_=Q;default:l.hasOwnProperty(w)||ke(e,t,w,null,l,Q)}}for(var O in l){var w=l[O];if(Q=n[O],l.hasOwnProperty(O)&&(w!=null||Q!=null))switch(O){case"type":u=w;break;case"name":a=w;break;case"checked":A=w;break;case"defaultChecked":N=w;break;case"value":o=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(137,t));break;default:w!==Q&&ke(e,t,O,w,l,Q)}}Br(e,o,m,_,A,N,u,a);return;case"select":w=o=m=O=null;for(u in n)if(_=n[u],n.hasOwnProperty(u)&&_!=null)switch(u){case"value":break;case"multiple":w=_;default:l.hasOwnProperty(u)||ke(e,t,u,null,l,_)}for(a in l)if(u=l[a],_=n[a],l.hasOwnProperty(a)&&(u!=null||_!=null))switch(a){case"value":O=u;break;case"defaultValue":m=u;break;case"multiple":o=u;default:u!==_&&ke(e,t,a,u,l,_)}t=m,n=o,l=w,O!=null?Rl(e,!!n,O,!1):!!l!=!!n&&(t!=null?Rl(e,!!n,t,!0):Rl(e,!!n,n?[]:"",!1));return;case"textarea":w=O=null;for(m in n)if(a=n[m],n.hasOwnProperty(m)&&a!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ke(e,t,m,null,l,a)}for(o in l)if(a=l[o],u=n[o],l.hasOwnProperty(o)&&(a!=null||u!=null))switch(o){case"value":O=a;break;case"defaultValue":w=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==u&&ke(e,t,o,a,l,u)}mc(e,O,w);return;case"option":for(var de in n)if(O=n[de],n.hasOwnProperty(de)&&O!=null&&!l.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:ke(e,t,de,null,l,O)}for(_ in l)if(O=l[_],w=n[_],l.hasOwnProperty(_)&&O!==w&&(O!=null||w!=null))switch(_){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:ke(e,t,_,O,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)O=n[oe],n.hasOwnProperty(oe)&&O!=null&&!l.hasOwnProperty(oe)&&ke(e,t,oe,null,l,O);for(A in l)if(O=l[A],w=n[A],l.hasOwnProperty(A)&&O!==w&&(O!=null||w!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(137,t));break;default:ke(e,t,A,O,l,w)}return;default:if(jr(t)){for(var qe in n)O=n[qe],n.hasOwnProperty(qe)&&O!==void 0&&!l.hasOwnProperty(qe)&&S0(e,t,qe,void 0,l,O);for(N in l)O=l[N],w=n[N],!l.hasOwnProperty(N)||O===w||O===void 0&&w===void 0||S0(e,t,N,O,l,w);return}}for(var z in n)O=n[z],n.hasOwnProperty(z)&&O!=null&&!l.hasOwnProperty(z)&&ke(e,t,z,null,l,O);for(Q in l)O=l[Q],w=n[Q],!l.hasOwnProperty(Q)||O===w||O==null&&w==null||ke(e,t,Q,O,l,w)}var C0=null,T0=null;function sr(e){return e.nodeType===9?e:e.ownerDocument}function vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function R0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var D0=null;function v3(){var e=window.event;return e&&e.type==="popstate"?e===D0?!1:(D0=e,!0):(D0=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,x3=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,b3=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(_3)}:bf;function _3(e){setTimeout(function(){throw e})}function Ln(e){return e==="head"}function Sf(e,t){var n=t,l=0,a=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<l&&8>l){n=l;var o=e.ownerDocument;if(n&1&&Qa(o.documentElement),n&2&&Qa(o.body),n&4)for(n=o.head,Qa(n),o=n.firstChild;o;){var m=o.nextSibling,_=o.nodeName;o[ca]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=m}}if(a===0){e.removeChild(u),tu(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=u}while(n);tu(t)}function z0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":z0(n),Er(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function S3(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ca])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function C3(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function M0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function T3(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var A0=null;function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Tf(e,t,n){switch(t=sr(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Qa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Er(e)}var Kt=new Map,Rf=new Set;function fr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cn=J.d;J.d={f:R3,r:D3,D:z3,C:M3,L:A3,m:V3,X:E3,S:O3,M:w3};function R3(){var e=Cn.f(),t=nr();return e||t}function D3(e){var t=_l(e);t!==null&&t.tag===5&&t.type==="form"?Zo(t):Cn.r(e)}var ta=typeof document>"u"?null:document;function Df(e,t,n){var l=ta;if(l&&typeof t=="string"&&t){var a=kt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Rf.has(a)||(Rf.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),vt(t,"link",e),ot(t),l.head.appendChild(t)))}}function z3(e){Cn.D(e),Df("dns-prefetch",e,null)}function M3(e,t){Cn.C(e,t),Df("preconnect",e,t)}function A3(e,t,n){Cn.L(e,t,n);var l=ta;if(l&&e&&t){var a='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+kt(n.imageSizes)+'"]')):a+='[href="'+kt(e)+'"]';var u=a;switch(t){case"style":u=na(e);break;case"script":u=la(e)}Kt.has(u)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(u,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ka(u))||t==="script"&&l.querySelector(Ja(u))||(t=l.createElement("link"),vt(t,"link",e),ot(t),l.head.appendChild(t)))}}function V3(e,t){Cn.m(e,t);var n=ta;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=la(e)}if(!Kt.has(u)&&(e=v({rel:"modulepreload",href:e},t),Kt.set(u,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ja(u)))return}l=n.createElement("link"),vt(l,"link",e),ot(l),n.head.appendChild(l)}}}function O3(e,t,n){Cn.S(e,t,n);var l=ta;if(l&&e){var a=Sl(l).hoistableStyles,u=na(e);t=t||"default";var o=a.get(u);if(!o){var m={loading:0,preload:null};if(o=l.querySelector(Ka(u)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(u))&&V0(e,n);var _=o=l.createElement("link");ot(_),vt(_,"link",e),_._p=new Promise(function(A,N){_.onload=A,_.onerror=N}),_.addEventListener("load",function(){m.loading|=1}),_.addEventListener("error",function(){m.loading|=2}),m.loading|=4,dr(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:m},a.set(u,o)}}}function E3(e,t){Cn.X(e,t);var n=ta;if(n&&e){var l=Sl(n).hoistableScripts,a=la(e),u=l.get(a);u||(u=n.querySelector(Ja(a)),u||(e=v({src:e,async:!0},t),(t=Kt.get(a))&&O0(e,t),u=n.createElement("script"),ot(u),vt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function w3(e,t){Cn.M(e,t);var n=ta;if(n&&e){var l=Sl(n).hoistableScripts,a=la(e),u=l.get(a);u||(u=n.querySelector(Ja(a)),u||(e=v({src:e,async:!0,type:"module"},t),(t=Kt.get(a))&&O0(e,t),u=n.createElement("script"),ot(u),vt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function zf(e,t,n,l){var a=(a=re.current)?fr(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=na(n.href),n=Sl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=na(n.href);var u=Sl(a).hoistableStyles,o=u.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,o),(u=a.querySelector(Ka(e)))&&!u._p&&(o.instance=u,o.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),u||H3(a,e,n,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=la(n),n=Sl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function na(e){return'href="'+kt(e)+'"'}function Ka(e){return'link[rel="stylesheet"]['+e+"]"}function Mf(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function H3(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),vt(t,"link",n),ot(t),e.head.appendChild(t))}function la(e){return'[src="'+kt(e)+'"]'}function Ja(e){return"script[async]"+e}function Af(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(l)return t.instance=l,ot(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ot(l),vt(l,"style",a),dr(l,n.precedence,e),t.instance=l;case"stylesheet":a=na(n.href);var u=e.querySelector(Ka(a));if(u)return t.state.loading|=4,t.instance=u,ot(u),u;l=Mf(n),(a=Kt.get(a))&&V0(l,a),u=(e.ownerDocument||e).createElement("link"),ot(u);var o=u;return o._p=new Promise(function(m,_){o.onload=m,o.onerror=_}),vt(u,"link",l),t.state.loading|=4,dr(u,n.precedence,e),t.instance=u;case"script":return u=la(n.src),(a=e.querySelector(Ja(u)))?(t.instance=a,ot(a),a):(l=n,(a=Kt.get(u))&&(l=v({},n),O0(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ot(a),vt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,dr(l,n.precedence,e));return t.instance}function dr(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,o=0;o<l.length;o++){var m=l[o];if(m.dataset.precedence===t)u=m;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function V0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function O0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hr=null;function Vf(e,t,n){if(hr===null){var l=new Map,a=hr=new Map;a.set(n,l)}else a=hr,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var u=n[a];if(!(u[ca]||u[bt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(t)||"";o=e+o;var m=l.get(o);m?m.push(u):l.set(o,[u])}}return l}function Of(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function G3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ef(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wa=null;function B3(){}function U3(e,t,n){if(Wa===null)throw Error(i(475));var l=Wa;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=na(n.href),u=e.querySelector(Ka(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=mr.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,ot(u);return}u=e.ownerDocument||e,n=Mf(n),(a=Kt.get(a))&&V0(n,a),u=u.createElement("link"),ot(u);var o=u;o._p=new Promise(function(m,_){o.onload=m,o.onerror=_}),vt(u,"link",n),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=mr.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function j3(){if(Wa===null)throw Error(i(475));var e=Wa;return e.stylesheets&&e.count===0&&E0(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&E0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function mr(){if(this.count--,this.count===0){if(this.stylesheets)E0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pr=null;function E0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pr=new Map,t.forEach(Y3,e),pr=null,mr.call(e))}function Y3(e,t){if(!(t.state.loading&4)){var n=pr.get(e);if(n)var l=n.get(null);else{n=new Map,pr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var o=a[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),u=n.get(o)||l,u===l&&n.set(null,a),n.set(o,a),this.count++,l=mr.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var $a={$$typeof:X,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function X3(e,t,n,l,a,u,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function wf(e,t,n,l,a,u,o,m,_,A,N,Q){return e=new X3(e,t,n,o,m,_,A,Q),t=1,u===!0&&(t|=24),u=Ht(3,null,null,t),e.current=u,u.stateNode=e,t=hi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},yi(u),e}function Hf(e){return e?(e=Hl,e):Hl}function Gf(e,t,n,l,a,u){a=Hf(a),l.context===null?l.context=a:l.pendingContext=a,l=En(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=wn(e,l,t),n!==null&&(Yt(n,e,t),za(n,e,t))}function Bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function w0(e,t){Bf(e,t),(e=e.alternate)&&Bf(e,t)}function Uf(e){if(e.tag===13){var t=wl(e,67108864);t!==null&&Yt(t,e,67108864),w0(e,67108864)}}var gr=!0;function k3(e,t,n,l){var a=H.T;H.T=null;var u=J.p;try{J.p=2,H0(e,t,n,l)}finally{J.p=u,H.T=a}}function q3(e,t,n,l){var a=H.T;H.T=null;var u=J.p;try{J.p=8,H0(e,t,n,l)}finally{J.p=u,H.T=a}}function H0(e,t,n,l){if(gr){var a=G0(l);if(a===null)_0(e,t,l,yr,n),Yf(e,l);else if(Z3(a,e,t,n,l))l.stopPropagation();else if(Yf(e,l),t&4&&-1<N3.indexOf(e)){for(;a!==null;){var u=_l(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=zn(u.pendingLanes);if(o!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var _=1<<31-He(o);m.entanglements[1]|=_,o&=~_}un(u),(Ge&6)===0&&(er=ge()+500,Za(0))}}break;case 13:m=wl(u,2),m!==null&&Yt(m,u,2),nr(),w0(u,2)}if(u=G0(l),u===null&&_0(e,t,l,yr,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else _0(e,t,l,null,n)}}function G0(e){return e=Xr(e),B0(e)}var yr=null;function B0(e){if(yr=null,e=bl(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yr=e,null}function jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pe()){case je:return 2;case Je:return 8;case lt:case mt:return 32;case be:return 268435456;default:return 32}default:return 32}}var U0=!1,Pn=null,Qn=null,Kn=null,Fa=new Map,Ia=new Map,Jn=[],N3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yf(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(t.pointerId)}}function eu(e,t,n,l,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},t!==null&&(t=_l(t),t!==null&&Uf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Z3(e,t,n,l,a){switch(t){case"focusin":return Pn=eu(Pn,e,t,n,l,a),!0;case"dragenter":return Qn=eu(Qn,e,t,n,l,a),!0;case"mouseover":return Kn=eu(Kn,e,t,n,l,a),!0;case"pointerover":var u=a.pointerId;return Fa.set(u,eu(Fa.get(u)||null,e,t,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,Ia.set(u,eu(Ia.get(u)||null,e,t,n,l,a)),!0}return!1}function Xf(e){var t=bl(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,U2(e.priority,function(){if(n.tag===13){var l=jt();l=ra(l);var a=wl(n,l);a!==null&&Yt(a,n,l),w0(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=G0(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Yr=l,n.target.dispatchEvent(l),Yr=null}else return t=_l(n),t!==null&&Uf(t),e.blockedOn=n,!1;t.shift()}return!0}function kf(e,t,n){vr(e)&&n.delete(t)}function L3(){U0=!1,Pn!==null&&vr(Pn)&&(Pn=null),Qn!==null&&vr(Qn)&&(Qn=null),Kn!==null&&vr(Kn)&&(Kn=null),Fa.forEach(kf),Ia.forEach(kf)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,U0||(U0=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,L3)))}var br=null;function qf(e){br!==e&&(br=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){br===e&&(br=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(B0(l||n)===null)continue;break}var u=_l(n);u!==null&&(e.splice(t,3),t-=3,Bi(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function tu(e){function t(_){return xr(_,e)}Pn!==null&&xr(Pn,e),Qn!==null&&xr(Qn,e),Kn!==null&&xr(Kn,e),Fa.forEach(t),Ia.forEach(t);for(var n=0;n<Jn.length;n++){var l=Jn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Xf(n),n.blockedOn===null&&Jn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],o=a[Dt]||null;if(typeof u=="function")o||qf(n);else if(o){var m=null;if(u&&u.hasAttribute("formAction")){if(a=u,o=u[Dt]||null)m=o.formAction;else if(B0(a)!==null)continue}else m=o.action;typeof m=="function"?n[l+1]=m:(n.splice(l,3),l-=3),qf(n)}}}function j0(e){this._internalRoot=e}_r.prototype.render=j0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=jt();Gf(n,l,e,t,null,null)},_r.prototype.unmount=j0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gf(e.current,2,null,e,null,null),nr(),t[xl]=null}};function _r(e){this._internalRoot=e}_r.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&Xf(e)}};var Nf=r.version;if(Nf!=="19.1.1")throw Error(i(527,Nf,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var P3={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{Jt=Sr.inject(P3),Qe=Sr}catch{}}return lu.createRoot=function(e,t){if(!f(e))throw Error(i(299));var n=!1,l="",a=as,u=us,o=rs,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=wf(e,1,!1,null,null,n,l,a,u,o,m,null),e[xl]=t.current,b0(e),new j0(t)},lu.hydrateRoot=function(e,t,n){if(!f(e))throw Error(i(299));var l=!1,a="",u=as,o=us,m=rs,_=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=wf(e,1,!0,t,n??null,l,a,u,o,m,_,A),t.context=Hf(null),n=t.current,l=jt(),l=ra(l),a=En(l),a.callback=null,wn(n,a,l),n=l,t.current.lanes=n,el(t,n),un(t),e[xl]=t.current,b0(e),new _r(t)},lu.version="19.1.1",lu}var If;function nd(){if(If)return k0.exports;If=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),k0.exports=td(),k0.exports}var ld=nd();const ad=Rr(ld);async function ud(){if(window.__wgpuDevice)return window.__wgpuDevice;const s=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!s)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=s;const r=await s.requestDevice();return r.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=r,r.lost.then(()=>{window.__wgpuDevice===r&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),r}/**
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
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(r){r!==void 0&&(this._Seed=r)}SetSeed(r){this._Seed=r}SetFrequency(r){this._Frequency=r}SetNoiseType(r){this._NoiseType=r,this._UpdateTransformType3D()}SetRotationType3D(r){this._RotationType3D=r,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(r){this._FractalType=r}SetFractalOctaves(r){this._Octaves=r,this._CalculateFractalBounding()}SetFractalLacunarity(r){this._Lacunarity=r}SetFractalGain(r){this._Gain=r,this._CalculateFractalBounding()}SetFractalWeightedStrength(r){this._WeightedStrength=r}SetFractalPingPongStrength(r){this._PingPongStrength=r}SetCellularDistanceFunction(r){this._CellularDistanceFunction=r}SetCellularReturnType(r){this._CellularReturnType=r}SetCellularJitter(r){this._CellularJitterModifier=r}SetDomainWarpType(r){this._DomainWarpType=r,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(r){this._DomainWarpAmp=r}GetNoise(r,d,i){let f=(h,g)=>{switch(h*=this._Frequency,g*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const p=.5*(1.7320508075688772-1);let v=(h+g)*p;h+=v,g+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,h,g);case D.FractalType.FBm:return this._GenFractalFBmR2(h,g);case D.FractalType.Ridged:return this._GenFractalRidgedR2(h,g);case D.FractalType.PingPong:return this._GenFractalPingPongR2(h,g)}},c=(h,g,y)=>{switch(h*=this._Frequency,g*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=h+g,b=C*-.211324865405187;y*=.577350269189626,h+=b-y,g+=b-y,y+=C*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let C=h+y,b=C*-.211324865405187;g*=.577350269189626,h+=b-g,y+=b-g,g+=C*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const p=2/3;let v=(h+g+y)*p;h=v-h,g=v-g,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,h,g,y);case D.FractalType.FBm:return this._GenFractalFBmR3(h,g,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(h,g,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(h,g,y)}};if(arguments.length===2)return f(r,d);if(arguments.length===3)return c(r,d,i)}DomainWrap(r){switch(this._FractalType){default:this._DomainWarpSingle(r);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(r);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(r);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(r,d,i){return r+i*(d-r)}static _InterpHermite(r){return r*r*(3-2*r)}static _InterpQuintic(r){return r*r*r*(r*(r*6-15)+10)}static _CubicLerp(r,d,i,f,c){let h=f-i-(r-d);return c*c*c*h+c*c*(r-d-h)+c*(i-r)+d}static _PingPong(r){return r-=Math.trunc(r*.5)*2,r<1?r:2-r}_CalculateFractalBounding(){let r=Math.abs(this._Gain),d=r,i=1;for(let f=1;f<this._Octaves;f++)i+=d,d*=r;this._FractalBounding=1/i}_HashR2(r,d,i){let f=r^d^i;return f=Math.imul(f,668265261),f}_HashR3(r,d,i,f){let c=r^d^i^f;return c=Math.imul(c,668265261),c}_ValCoordR2(r,d,i){let f=this._HashR2(r,d,i);return f=Math.imul(f,f),f^=f<<19,f*(1/2147483648)}_ValCoordR3(r,d,i,f){let c=this._HashR3(r,d,i,f);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(r,d,i,f,c){let h=this._HashR2(r,d,i);h^=h>>15,h&=254;let g=this._Gradients2D[h],y=this._Gradients2D[h|1];return f*g+c*y}_GradCoordR3(r,d,i,f,c,h,g){let y=this._HashR3(r,d,i,f);y^=y>>15,y&=252;let p=this._Gradients3D[y],v=this._Gradients3D[y|1],C=this._Gradients3D[y|2];return c*p+h*v+g*C}_GenNoiseSingleR2(r,d,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(r,d,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(r,d,i);case D.NoiseType.Cellular:return this._SingleCellularR2(r,d,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(r,d,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(r,d,i);case D.NoiseType.Value:return this._SingleValueR2(r,d,i);default:return 0}}_GenNoiseSingleR3(r,d,i,f){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(r,d,i,f);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(r,d,i,f);case D.NoiseType.Cellular:return this._SingleCellularR3(r,d,i,f);case D.NoiseType.Perlin:return this._SinglePerlinR3(r,d,i,f);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(r,d,i,f);case D.NoiseType.Value:return this._SingleValueR3(r,d,i,f);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(r,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=this._GenNoiseSingleR2(i++,r,d);f+=g*c,c*=D._Lerp(1,Math.min(g+1,2)*.5,this._WeightedStrength),r*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalFBmR3(r,d,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=this._GenNoiseSingleR3(f++,r,d,i);c+=y*h,h*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),r*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalRidgedR2(r,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=Math.abs(this._GenNoiseSingleR2(i++,r,d));f+=(g*-2+1)*c,c*=D._Lerp(1,1-g,this._WeightedStrength),r*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalRidgedR3(r,d,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=Math.abs(this._GenNoiseSingleR3(f++,r,d,i));c+=(y*-2+1)*h,h*=D._Lerp(1,1-y,this._WeightedStrength),r*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalPingPongR2(r,d){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=D._PingPong((this._GenNoiseSingleR2(i++,r,d)+1)*this._PingPongStrength);f+=(g-.5)*2*c,c*=D._Lerp(1,g,this._WeightedStrength),r*=this._Lacunarity,d*=this._Lacunarity,c*=this._Gain}return f}_GenFractalPingPongR3(r,d,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=D._PingPong((this._GenNoiseSingleR3(f++,r,d,i)+1)*this._PingPongStrength);c+=(y-.5)*2*h,h*=D._Lerp(1,y,this._WeightedStrength),r*=this._Lacunarity,d*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_SingleOpenSimplex2R2(r,d,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(d),g=Math.floor(i),y=d-h,p=i-g,v=(y+p)*c,C=y-v,b=p-v;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let T,E,k,B=.5-C*C-b*b;B<=0?T=0:T=B*B*(B*B)*this._GradCoordR2(r,h,g,C,b);let U=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+B);if(U<=0)k=0;else{let j=C+(2*c-1),X=b+(2*c-1);k=U*U*(U*U)*this._GradCoordR2(r,h+this._PrimeX,g+this._PrimeY,j,X)}if(b>C){let j=C+c,X=b+(c-1),K=.5-j*j-X*X;K<=0?E=0:E=K*K*(K*K)*this._GradCoordR2(r,h,g+this._PrimeY,j,X)}else{let j=C+(c-1),X=b+c,K=.5-j*j-X*X;K<=0?E=0:E=K*K*(K*K)*this._GradCoordR2(r,h+this._PrimeX,g,j,X)}return(T+E+k)*99.83685446303647}_SingleOpenSimplex2R3(r,d,i,f){let c=Math.round(d),h=Math.round(i),g=Math.round(f),y=d-c,p=i-h,v=f-g,C=Math.trunc(-1-p|1),b=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),E=b*-y,k=C*-p,B=T*-v;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let U=0,j=.6-y*y-(p*p+v*v);for(let X=0;;X++){if(j>0&&(U+=j*j*(j*j)*this._GradCoordR3(r,c,h,g,y,p,v)),E>=k&&E>=B){let K=j+E+E;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(r,c-b*this._PrimeX,h,g,y+b,p,v))}else if(k>E&&k>=B){let K=j+k+k;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(r,c,h-C*this._PrimeY,g,y,p+C,v))}else{let K=j+B+B;K>1&&(K-=1,U+=K*K*(K*K)*this._GradCoordR3(r,c,h,g-T*this._PrimeZ,y,p,v+T))}if(X===1)break;E=.5-E,k=.5-k,B=.5-B,y=b*E,p=C*k,v=T*B,j+=.75-E-(k+B),c+=b>>1&this._PrimeX,h+=C>>1&this._PrimeY,g+=T>>1&this._PrimeZ,b=-b,C=-C,T=-T,r=~r}return U*32.69428253173828}_SingleOpenSimplex2SR2(r,d,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(d),g=Math.floor(i),y=d-h,p=i-g;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let v=h+this._PrimeX,C=g+this._PrimeY,b=(y+p)*c,T=y-b,E=p-b,k=2/3-T*T-E*E,B=k*k*(k*k)*this._GradCoordR2(r,h,g,T,E),U=2*(1-2*c)*(1/c-2)*b+(-2*(1-2*c)*(1-2*c)+k),j=T-(1-2*c),X=E-(1-2*c);B+=U*U*(U*U)*this._GradCoordR2(r,v,C,j,X);let K=y-p;if(b>c){if(y+K>1){let G=T+(3*c-2),P=E+(3*c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h+(this._PrimeX<<1),g+this._PrimeY,G,P))}else{let G=T+c,P=E+(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h,g+this._PrimeY,G,P))}if(p-K>1){let G=T+(3*c-1),P=E+(3*c-2),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h+this._PrimeX,g+(this._PrimeY<<1),G,P))}else{let G=T+(c-1),P=E+c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h+this._PrimeX,g,G,P))}}else{if(y+K<0){let G=T+(1-c),P=E-c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h-this._PrimeX,g,G,P))}else{let G=T+(c-1),P=E+c,Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h+this._PrimeX,g,G,P))}if(p<K){let G=T-c,P=E-(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h,g-this._PrimeY,G,P))}else{let G=T+c,P=E+(c-1),Y=2/3-G*G-P*P;Y>0&&(B+=Y*Y*(Y*Y)*this._GradCoordR2(r,h,g+this._PrimeY,G,P))}}return B*18.24196194486065}_SingleOpenSimplex2SR3(r,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=d-c,p=i-h,v=f-g;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=r+1293373,b=Math.trunc(-.5-y),T=Math.trunc(-.5-p),E=Math.trunc(-.5-v),k=y+b,B=p+T,U=v+E,j=.75-k*k-B*B-U*U,X=j*j*(j*j)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(T&this._PrimeY),g+(E&this._PrimeZ),k,B,U),K=y-.5,G=p-.5,P=v-.5,Y=.75-K*K-G*G-P*P;X+=Y*Y*(Y*Y)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,g+this._PrimeZ,K,G,P);let F=((b|1)<<1)*K,te=((T|1)<<1)*G,se=((E|1)<<1)*P,ve=(-2-(b<<2))*K-1,ae=(-2-(T<<2))*G-1,ye=(-2-(E<<2))*P-1,De=!1,pe=F+j;if(pe>0){let x=k-(b|1);X+=pe*pe*(pe*pe)*this._GradCoordR3(r,c+(~b&this._PrimeX),h+(T&this._PrimeY),g+(E&this._PrimeZ),x,B,U)}else{let x=te+se+j;if(x>0){let q=k,Z=B-(T|1),I=U-(E|1);X+=x*x*(x*x)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(~T&this._PrimeY),g+(~E&this._PrimeZ),q,Z,I)}let V=ve+Y;if(V>0){let q=(b|1)+K;X+=V*V*(V*V)*this._GradCoordR3(C,c+(b&this._PrimeX*2),h+this._PrimeY,g+this._PrimeZ,q,G,P),De=!0}}let H=!1,J=te+j;if(J>0){let x=k,V=B-(T|1);X+=J*J*(J*J)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(~T&this._PrimeY),g+(E&this._PrimeZ),x,V,U)}else{let x=F+se+j;if(x>0){let q=k-(b|1),Z=B,I=U-(E|1);X+=x*x*(x*x)*this._GradCoordR3(r,c+(~b&this._PrimeX),h+(T&this._PrimeY),g+(~E&this._PrimeZ),q,Z,I)}let V=ae+Y;if(V>0){let q=K,Z=(T|1)+G;X+=V*V*(V*V)*this._GradCoordR3(C,c+this._PrimeX,h+(T&this._PrimeY<<1),g+this._PrimeZ,q,Z,P),H=!0}}let $=!1,ue=se+j;if(ue>0){let x=k,V=B,q=U-(E|1);X+=ue*ue*(ue*ue)*this._GradCoordR3(r,c+(b&this._PrimeX),h+(T&this._PrimeY),g+(~E&this._PrimeZ),x,V,q)}else{let x=F+te+j;if(x>0){let q=k-(b|1),Z=B-(T|1);X+=x*x*(x*x)*this._GradCoordR3(r,c+(~b&this._PrimeX),h+(~T&this._PrimeY),g+(E&this._PrimeZ),q,Z,U)}let V=ye+Y;if(V>0){let q=K,Z=G,I=(E|1)+P;X+=V*V*(V*V)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,g+(E&this._PrimeZ<<1),q,Z,I),$=!0}}if(!De){let x=ae+ye+Y;if(x>0){let V=K,q=(T|1)+G,Z=(E|1)+P;X+=x*x*(x*x)*this._GradCoordR3(C,c+this._PrimeX,h+(T&this._PrimeY<<1),g+(E&this._PrimeZ<<1),V,q,Z)}}if(!H){let x=ve+ye+Y;if(x>0){let V=(b|1)+K,q=G,Z=(E|1)+P;X+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX*2),h+this._PrimeY,g+(E&this._PrimeZ<<1),V,q,Z)}}if(!$){let x=ve+ae+Y;if(x>0){let V=(b|1)+K,q=(T|1)+G;X+=x*x*(x*x)*this._GradCoordR3(C,c+(b&this._PrimeX<<1),h+(T&this._PrimeY<<1),g+this._PrimeZ,V,q,P)}}return X*9.046026385208288}_SingleCellularR2(r,d,i){let f=Math.round(d),c=Math.round(i),h=Number.MAX_VALUE,g=Number.MAX_VALUE,y=0,p=.43701595*this._CellularJitterModifier,v=(f-1)*this._PrimeX,C=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let b=f-1;b<=f+1;b++){let T=C;for(let E=c-1;E<=c+1;E++){let k=this._HashR2(r,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=E-i+this._RandVecs2D[B|1]*p,X=U*U+j*j;g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let b=f-1;b<=f+1;b++){let T=C;for(let E=c-1;E<=c+1;E++){let k=this._HashR2(r,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=E-i+this._RandVecs2D[B|1]*p,X=Math.abs(U)+Math.abs(j);g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let b=f-1;b<=f+1;b++){let T=C;for(let E=c-1;E<=c+1;E++){let k=this._HashR2(r,v,T),B=k&510,U=b-d+this._RandVecs2D[B]*p,j=E-i+this._RandVecs2D[B|1]*p,X=Math.abs(U)+Math.abs(j)+(U*U+j*j);g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(h=Math.sqrt(h),this._CellularReturnType!==D.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return h-1;case D.CellularReturnType.Distance2:return g-1;case D.CellularReturnType.Distance2Add:return(g+h)*.5-1;case D.CellularReturnType.Distance2Sub:return g-h-1;case D.CellularReturnType.Distance2Mul:return g*h*.5-1;case D.CellularReturnType.Distance2Div:return h/g-1;default:return 0}}_SingleCellularR3(r,d,i,f){let c=Math.round(d),h=Math.round(i),g=Math.round(f),y=Number.MAX_VALUE,p=Number.MAX_VALUE,v=0,C=.39614353*this._CellularJitterModifier,b=(c-1)*this._PrimeX,T=(h-1)*this._PrimeY,E=(g-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=h-1;U<=h+1;U++){let j=E;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(r,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,F=X-f+this._RandVecs3D[G|2]*C,te=P*P+Y*Y+F*F;p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=h-1;U<=h+1;U++){let j=E;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(r,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,F=X-f+this._RandVecs3D[G|2]*C,te=Math.abs(P)+Math.abs(Y)+Math.abs(F);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let k=c-1;k<=c+1;k++){let B=T;for(let U=h-1;U<=h+1;U++){let j=E;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(r,b,B,j),G=K&1020,P=k-d+this._RandVecs3D[G]*C,Y=U-i+this._RandVecs3D[G|1]*C,F=X-f+this._RandVecs3D[G|2]*C,te=Math.abs(P)+Math.abs(Y)+Math.abs(F)+(P*P+Y*Y+F*F);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),j+=this._PrimeZ}B+=this._PrimeY}b+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+y)*.5-1;case D.CellularReturnType.Distance2Sub:return p-y-1;case D.CellularReturnType.Distance2Mul:return p*y*.5-1;case D.CellularReturnType.Distance2Div:return y/p-1;default:return 0}}_SinglePerlinR2(r,d,i){let f=Math.floor(d),c=Math.floor(i),h=d-f,g=i-c,y=h-1,p=g-1,v=D._InterpQuintic(h),C=D._InterpQuintic(g);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let b=f+this._PrimeX,T=c+this._PrimeY,E=D._Lerp(this._GradCoordR2(r,f,c,h,g),this._GradCoordR2(r,b,c,y,g),v),k=D._Lerp(this._GradCoordR2(r,f,T,h,p),this._GradCoordR2(r,b,T,y,p),v);return D._Lerp(E,k,C)*1.4247691104677813}_SinglePerlinR3(r,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=d-c,p=i-h,v=f-g,C=y-1,b=p-1,T=v-1,E=D._InterpQuintic(y),k=D._InterpQuintic(p),B=D._InterpQuintic(v);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let U=c+this._PrimeX,j=h+this._PrimeY,X=g+this._PrimeZ,K=D._Lerp(this._GradCoordR3(r,c,h,g,y,p,v),this._GradCoordR3(r,U,h,g,C,p,v),E),G=D._Lerp(this._GradCoordR3(r,c,j,g,y,b,v),this._GradCoordR3(r,U,j,g,C,b,v),E),P=D._Lerp(this._GradCoordR3(r,c,h,X,y,p,T),this._GradCoordR3(r,U,h,X,C,p,T),E),Y=D._Lerp(this._GradCoordR3(r,c,j,X,y,b,T),this._GradCoordR3(r,U,j,X,C,b,T),E),F=D._Lerp(K,G,k),te=D._Lerp(P,Y,k);return D._Lerp(F,te,B)*.9649214148521423}_SingleValueCubicR2(r,d,i){let f=Math.floor(d),c=Math.floor(i),h=d-f,g=i-c;f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f-this._PrimeX,p=c-this._PrimeY,v=f+this._PrimeX,C=c+this._PrimeY,b=f+(this._PrimeX<<1),T=c+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(r,y,p),this._ValCoordR2(r,f,p),this._ValCoordR2(r,v,p),this._ValCoordR2(r,b,p),h),D._CubicLerp(this._ValCoordR2(r,y,c),this._ValCoordR2(r,f,c),this._ValCoordR2(r,v,c),this._ValCoordR2(r,b,c),h),D._CubicLerp(this._ValCoordR2(r,y,C),this._ValCoordR2(r,f,C),this._ValCoordR2(r,v,C),this._ValCoordR2(r,b,C),h),D._CubicLerp(this._ValCoordR2(r,y,T),this._ValCoordR2(r,f,T),this._ValCoordR2(r,v,T),this._ValCoordR2(r,b,T),h),g)*(1/(1.5*1.5))}_SingleValueCubicR3(r,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=d-c,p=i-h,v=f-g;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c-this._PrimeX,b=h-this._PrimeY,T=g-this._PrimeZ,E=c+this._PrimeX,k=h+this._PrimeY,B=g+this._PrimeZ,U=c+(this._PrimeX<<1),j=h+(this._PrimeY<<1),X=g+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,T),this._ValCoordR3(r,c,b,T),this._ValCoordR3(r,E,b,T),this._ValCoordR3(r,U,b,T),y),D._CubicLerp(this._ValCoordR3(r,C,h,T),this._ValCoordR3(r,c,h,T),this._ValCoordR3(r,E,h,T),this._ValCoordR3(r,U,h,T),y),D._CubicLerp(this._ValCoordR3(r,C,k,T),this._ValCoordR3(r,c,k,T),this._ValCoordR3(r,E,k,T),this._ValCoordR3(r,U,k,T),y),D._CubicLerp(this._ValCoordR3(r,C,j,T),this._ValCoordR3(r,c,j,T),this._ValCoordR3(r,E,j,T),this._ValCoordR3(r,U,j,T),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,g),this._ValCoordR3(r,c,b,g),this._ValCoordR3(r,E,b,g),this._ValCoordR3(r,U,b,g),y),D._CubicLerp(this._ValCoordR3(r,C,h,g),this._ValCoordR3(r,c,h,g),this._ValCoordR3(r,E,h,g),this._ValCoordR3(r,U,h,g),y),D._CubicLerp(this._ValCoordR3(r,C,k,g),this._ValCoordR3(r,c,k,g),this._ValCoordR3(r,E,k,g),this._ValCoordR3(r,U,k,g),y),D._CubicLerp(this._ValCoordR3(r,C,j,g),this._ValCoordR3(r,c,j,g),this._ValCoordR3(r,E,j,g),this._ValCoordR3(r,U,j,g),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,B),this._ValCoordR3(r,c,b,B),this._ValCoordR3(r,E,b,B),this._ValCoordR3(r,U,b,B),y),D._CubicLerp(this._ValCoordR3(r,C,h,B),this._ValCoordR3(r,c,h,B),this._ValCoordR3(r,E,h,B),this._ValCoordR3(r,U,h,B),y),D._CubicLerp(this._ValCoordR3(r,C,k,B),this._ValCoordR3(r,c,k,B),this._ValCoordR3(r,E,k,B),this._ValCoordR3(r,U,k,B),y),D._CubicLerp(this._ValCoordR3(r,C,j,B),this._ValCoordR3(r,c,j,B),this._ValCoordR3(r,E,j,B),this._ValCoordR3(r,U,j,B),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(r,C,b,X),this._ValCoordR3(r,c,b,X),this._ValCoordR3(r,E,b,X),this._ValCoordR3(r,U,b,X),y),D._CubicLerp(this._ValCoordR3(r,C,h,X),this._ValCoordR3(r,c,h,X),this._ValCoordR3(r,E,h,X),this._ValCoordR3(r,U,h,X),y),D._CubicLerp(this._ValCoordR3(r,C,k,X),this._ValCoordR3(r,c,k,X),this._ValCoordR3(r,E,k,X),this._ValCoordR3(r,U,k,X),y),D._CubicLerp(this._ValCoordR3(r,C,j,X),this._ValCoordR3(r,c,j,X),this._ValCoordR3(r,E,j,X),this._ValCoordR3(r,U,j,X),y),p),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(r,d,i){let f=Math.floor(d),c=Math.floor(i),h=D._InterpHermite(d-f),g=D._InterpHermite(i-c);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f+this._PrimeX,p=c+this._PrimeY,v=D._Lerp(this._ValCoordR2(r,f,c),this._ValCoordR2(r,y,c),h),C=D._Lerp(this._ValCoordR2(r,f,p),this._ValCoordR2(r,y,p),h);return D._Lerp(v,C,g)}_SingleValueR3(r,d,i,f){let c=Math.floor(d),h=Math.floor(i),g=Math.floor(f),y=D._InterpHermite(d-c),p=D._InterpHermite(i-h),v=D._InterpHermite(f-g);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c+this._PrimeX,b=h+this._PrimeY,T=g+this._PrimeZ,E=D._Lerp(this._ValCoordR3(r,c,h,g),this._ValCoordR3(r,C,h,g),y),k=D._Lerp(this._ValCoordR3(r,c,b,g),this._ValCoordR3(r,C,b,g),y),B=D._Lerp(this._ValCoordR3(r,c,h,T),this._ValCoordR3(r,C,h,T),y),U=D._Lerp(this._ValCoordR3(r,c,b,T),this._ValCoordR3(r,C,b,T),y),j=D._Lerp(E,k,p),X=D._Lerp(B,U,p);return D._Lerp(j,X,v)}_DoSingleDomainWarp(){let r=(i,f,c,h,g,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*38.283687591552734,c,h,!1,g,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*16,c,h,!0,g,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,g,y);break}},d=(i,f,c,h,g,y,p)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*32.69428253173828,c,h,!1,g,y,p);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*7.71604938271605,c,h,!0,g,y,p);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,g,y,p);break}};if(arguments.length===6&&arguments[3]instanceof au)return r(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof uu)return d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let r=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(g+y)*v;g+=C,y+=C;break}this._DoSingleDomainWarp(f,c,h,i,g,y)},d=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y,p=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let b=g+y,T=b*-.211324865405187;p*=.577350269189626,g+=T-p,y=y+T-p,p+=b*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let b=g+p,T=b*-.211324865405187;y*=.577350269189626,g+=T-y,p+=T-y,y+=b*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let C=(g+y+p)*v;g=C-g,y=C-y,p=C-p;break}this._DoSingleDomainWarp(f,c,h,i,g,y,p)};if(arguments.length===1&&arguments[0]instanceof au)return r(arguments[0]);if(arguments.length===1&&arguments[0]instanceof uu)return d(arguments[0])}_DomainWarpFractalProgressive(){let r=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const C=.5*(1.7320508075688772-1);let b=(y+p)*C;y+=b,p+=b;break}this._DoSingleDomainWarp(f,c,h,i,y,p),f++,c*=this._Gain,h*=this._Lacunarity}},d=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let C=y+p,b=C*-.211324865405187;v*=.577350269189626,y+=b-v,p=p+b-v,v+=C*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let C=y+v,b=C*-.211324865405187;p*=.577350269189626,y+=b-p,v+=b-p,p+=C*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let b=(y+p+v)*.6666666666666666;y=b-y,p=b-p,v=b-v}break}this._DoSingleDomainWarp(f,c,h,i,y,p,v),f++,c*=this._Gain,h*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof au)return r(arguments[0]);if(arguments.length===1&&arguments[0]instanceof uu)return d(arguments[0])}_DomainWarpFractalIndependent(){let r=i=>{let f=i.x,c=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(f+c)*v;f+=C,c+=C;break}let h=this._Seed,g=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let p=0;p<this._Octaves;p++)this._DoSingleDomainWarp(h,g,y,i,f,c),h++,g*=this._Gain,y*=this._Lacunarity},d=i=>{let f=i.x,c=i.y,h=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=f+c,C=v*-.211324865405187;h*=.577350269189626,f+=C-h,c=c+C-h,h+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=f+h,C=v*-.211324865405187;c*=.577350269189626,f+=C-c,h+=C-c,c+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let C=(f+c+h)*.6666666666666666;f=C-f,c=C-c,h=C-h}break}let g=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,p=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(g,y,p,i,f,c,h),g++,y*=this._Gain,p*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof au)return r(arguments[0]);if(arguments.length===1&&arguments[0]instanceof uu)return d(arguments[0])}_SingleDomainWarpBasicGrid(){let r=(i,f,c,h,g,y)=>{let p=g*c,v=y*c,C=Math.floor(p),b=Math.floor(v),T=D._InterpHermite(p-C),E=D._InterpHermite(v-b);C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY);let k=C+this._PrimeX,B=b+this._PrimeY,U=this._HashR2(i,C,b)&510,j=this._HashR2(i,k,b)&510,X=D._Lerp(this._RandVecs2D[U],this._RandVecs2D[j],T),K=D._Lerp(this._RandVecs2D[U|1],this._RandVecs2D[j|1],T);U=this._HashR2(i,C,B)&510,j=this._HashR2(i,k,B)&510;let G=D._Lerp(this._RandVecs2D[U],this._RandVecs2D[j],T),P=D._Lerp(this._RandVecs2D[U|1],this._RandVecs2D[j|1],T);h.x+=D._Lerp(X,G,E)*f,h.y+=D._Lerp(K,P,E)*f},d=(i,f,c,h,g,y,p)=>{let v=g*c,C=y*c,b=p*c,T=Math.floor(v),E=Math.floor(C),k=Math.floor(b),B=D._InterpHermite(v-T),U=D._InterpHermite(C-E),j=D._InterpHermite(b-k);T=Math.imul(T,this._PrimeX),E=Math.imul(E,this._PrimeY),k=Math.imul(k,this._PrimeZ);let X=T+this._PrimeX,K=E+this._PrimeY,G=k+this._PrimeZ,P=this._HashR3(i,T,E,k)&1020,Y=this._HashR3(i,X,E,k)&1020,F=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),te=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),se=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B);P=this._HashR3(i,T,K,k)&1020,Y=this._HashR3(i,X,K,k)&1020;let ve=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),ae=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),ye=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),De=D._Lerp(F,ve,U),pe=D._Lerp(te,ae,U),H=D._Lerp(se,ye,U);P=this._HashR3(i,T,E,G)&1020,Y=this._HashR3(i,X,E,G)&1020,F=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),te=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),se=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),P=this._HashR3(i,T,K,G)&1020,Y=this._HashR3(i,X,K,G)&1020,ve=D._Lerp(this._RandVecs3D[P],this._RandVecs3D[Y],B),ae=D._Lerp(this._RandVecs3D[P|1],this._RandVecs3D[Y|1],B),ye=D._Lerp(this._RandVecs3D[P|2],this._RandVecs3D[Y|2],B),h.x+=D._Lerp(De,D._Lerp(F,ve,U),j)*f,h.y+=D._Lerp(pe,D._Lerp(te,ae,U),j)*f,h.z+=D._Lerp(H,D._Lerp(se,ye,U),j)*f};arguments.length===6&&arguments[3]instanceof au&&r(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof uu&&d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let r=(i,f,c,h,g,y,p)=>{const C=(3-1.7320508075688772)/6;y*=c,p*=c;let b=Math.floor(y),T=Math.floor(p),E=y-b,k=p-T,B=(E+k)*C,U=E-B,j=k-B;b=Math.imul(b,this._PrimeX),T=Math.imul(T,this._PrimeY);let X,K;X=K=0;let G=.5-U*U-j*j;if(G>0){let Y=G*G*(G*G),F,te;if(g){let se=this._HashR2(i,b,T)&510;F=this._RandVecs2D[se],te=this._RandVecs2D[se|1]}else{let se=this._HashR2(i,b,T),ve=se&254,ae=se>>7&510,ye=this._Gradients2D[ve],De=this._Gradients2D[ve|1],pe=U*ye+j*De,H=this._RandVecs2D[ae],J=this._RandVecs2D[ae|1];F=pe*H,te=pe*J}X+=Y*F,K+=Y*te}let P=2*(1-2*C)*(1/C-2)*B+(-2*(1-2*C)*(1-2*C)+G);if(P>0){let Y=U+(2*C-1),F=j+(2*C-1),te=P*P*(P*P),se,ve;if(g){let ae=this._HashR2(i,b+this._PrimeX,T+this._PrimeY)&510;se=this._RandVecs2D[ae],ve=this._RandVecs2D[ae|1]}else{let ae=this._HashR2(i,b+this._PrimeX,T+this._PrimeY),ye=ae&254,De=ae>>7&510,pe=this._Gradients2D[ye],H=this._Gradients2D[ye|1],J=Y*pe+F*H,$=this._RandVecs2D[De],ue=this._RandVecs2D[De|1];se=J*$,ve=J*ue}X+=te*se,K+=te*ve}if(j>U){let Y=U+C,F=j+(C-1),te=.5-Y*Y-F*F;if(te>0){let se=te*te*(te*te),ve,ae;if(g){let ye=this._HashR2(i,b,T+this._PrimeY)&510;ve=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,b,T+this._PrimeY),De=ye&254,pe=ye>>7&510,H=this._Gradients2D[De],J=this._Gradients2D[De|1],$=Y*H+F*J,ue=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];ve=$*ue,ae=$*x}X+=se*ve,K+=se*ae}}else{let Y=U+(C-1),F=j+C,te=.5-Y*Y-F*F;if(te>0){let se=te*te*(te*te),ve,ae;if(g){let ye=this._HashR2(i,b+this._PrimeX,T)&510;ve=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,b+this._PrimeX,T),De=ye&254,pe=ye>>7&510,H=this._Gradients2D[De],J=this._Gradients2D[De|1],$=Y*H+F*J,ue=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];ve=$*ue,ae=$*x}X+=se*ve,K+=se*ae}}h.x+=X*f,h.y+=K*f},d=(i,f,c,h,g,y,p,v)=>{y*=c,p*=c,v*=c;let C=Math.round(y),b=Math.round(p),T=Math.round(v),E=y-C,k=p-b,B=v-T,U=-E-1|1,j=-k-1|1,X=-B-1|1,K=U*-E,G=j*-k,P=X*-B;C=Math.imul(C,this._PrimeX),b=Math.imul(b,this._PrimeY),T=Math.imul(T,this._PrimeZ);let Y,F,te;Y=F=te=0;let se=.6-E*E-(k*k+B*B);for(let ve=0;;ve++){if(se>0){let ue=se*se*(se*se),x,V,q;if(g){let Z=this._HashR3(i,C,b,T)&1020;x=this._RandVecs3D[Z],V=this._RandVecs3D[Z|1],q=this._RandVecs3D[Z|2]}else{let Z=this._HashR3(i,C,b,T),I=Z&252,ce=Z>>6&1020,re=this._Gradients3D[I],we=this._Gradients3D[I|1],Re=this._Gradients3D[I|2],Ue=E*re+k*we+B*Re,xt=this._RandVecs3D[ce],et=this._RandVecs3D[ce|1],Tt=this._RandVecs3D[ce|2];x=Ue*xt,V=Ue*et,q=Ue*Tt}Y+=ue*x,F+=ue*V,te+=ue*q}let ae=se,ye=C,De=b,pe=T,H=E,J=k,$=B;if(K>=G&&K>=P?(H+=U,ae=ae+K+K,ye-=U*this._PrimeX):G>K&&G>=P?(J+=j,ae=ae+G+G,De-=j*this._PrimeY):($+=X,ae=ae+P+P,pe-=X*this._PrimeZ),ae>1){ae-=1;let ue=ae*ae*(ae*ae),x,V,q;if(g){let Z=this._HashR3(i,ye,De,pe)&1020;x=this._RandVecs3D[Z],V=this._RandVecs3D[Z|1],q=this._RandVecs3D[Z|2]}else{let Z=this._HashR3(i,ye,De,pe),I=Z&252,ce=Z>>6&1020,re=this._Gradients3D[I],we=this._Gradients3D[I|1],Re=this._Gradients3D[I|2],Ue=H*re+J*we+$*Re,xt=this._RandVecs3D[ce],et=this._RandVecs3D[ce|1],Tt=this._RandVecs3D[ce|2];x=Ue*xt,V=Ue*et,q=Ue*Tt}Y+=ue*x,F+=ue*V,te+=ue*q}if(ve===1)break;K=.5-K,G=.5-G,P=.5-P,E=U*K,k=j*G,B=X*P,se+=.75-K-(G+P),C+=U>>1&this._PrimeX,b+=j>>1&this._PrimeY,T+=X>>1&this._PrimeZ,U=-U,j=-j,X=-X,i+=1293373}h.x+=Y*f,h.y+=F*f,h.z+=te*f};arguments.length===7&&r(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&d(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class au{constructor(r,d){this.x=r,this.y=d}}class uu{constructor(r,d,i){this.x=r,this.y=d,this.z=i}}function rd(s=42,r=1920,d=1080,i=D.NoiseType.Perlin,f=6,c=1.7,h=.5,g=D.FractalType.FBm,y=.003){const p=new D;p.SetNoiseType(i),p.SetSeed(s),p.SetFractalOctaves(f),p.SetFractalLacunarity(c),p.SetFractalGain(h),p.SetFractalType(g),p.SetFrequency(y);const v=[];for(let T=0;T<d;T++)for(let E=0;E<r;E++){const B=(p.GetNoise(E,T)+1)/2;v.push(B)}var C=0,b=0;for(let T=0;T<v.length;T++)(v[T]<C||T==0)&&(C=v[T]),(v[T]>b||T==0)&&(b=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-C)/(b-C);return v}const id=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
    colorStart  : u32, // where the first pixel starts in sprite colors\r
    _pad        : u32,\r
    colors      : array<u32, MAX_SPRITE_SIZE>\r
}\r
\r
fn getSprite(index : u32) -> SpriteData\r
{\r
    let len = arrayLength(&sprites);\r
    return sprites[index];\r
}\r
\r
fn getSpriteColor(index: u32, pixelCoord : vec2<u32>) -> u32\r
{\r
    let sprite = getSprite(index);\r
    return sprite.colors[pixelCoord.x + pixelCoord.y * sprite.width];\r
}\r
\r
fn setSprite(index : u32, subPixelCoord : vec2<u32>)\r
{\r
    let sprite = getSprite(index);\r
    let subPixelTexSize = vec2<u32>(uView.size.x * uView.pixelScale, uView.size.y * uView.pixelScale);\r
    \r
    let layer4Index = uView.size.x * uView.size.y * 4;\r
\r
    for(var x = 0u; x < sprite.width; x++)\r
    {\r
        for(var y = 0u; y < sprite.height; y++)\r
        {\r
            let color = sprite.colors[x + y * sprite.width];\r
            let sCoord = subPixelCoord + vec2<u32>(x, y);\r
            if(sCoord.x >= subPixelTexSize.x || sCoord.y >= subPixelTexSize.y)\r
            {\r
                continue;\r
            }\r
\r
            outputTex[layer4Index + sCoord.x + subPixelTexSize.x * sCoord.y] = color;\r
        }\r
    }\r
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
  mouseRadius  : f32,       // 4\r
  // (12 bytes implicit padding here to align next member to 16B)\r
  visibleRect  : vec4<u32>, //  (x0, y0, x1, y1) in canvas coords\r
};                          // total size = 48 bytes\r
\r
struct CellData {\r
    height       : f32,       // 0..3\r
    heightNormal : vec3<f32>, // starts at 16, uses 16 bytes\r
    fAmount      : f32,       // at 28\r
    randDir      : f32,\r
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
\r
    let idOffset = uView.size.x * uView.size.y;\r
    outputTex[idx(x,y) + idOffset] = pack4x8unorm(finalColor);\r
}\r
`,Td=`@compute @workgroup_size(1, 1, 1)\r
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    if(gid.x > 0 || gid.y > 0 || gid.z > 0) { return; }\r
\r
    // setSprite(0, vec2<u32>(359, 275) * uView.pixelScale);\r
\r
    // setSprite(2, vec2<u32>(400, 275) * uView.pixelScale);\r
\r
    // setSprite(2, vec2<u32>(366, 252) * uView.pixelScale);\r
\r
    // setSprite(2, vec2<u32>(290, 140) * uView.pixelScale);\r
}\r
`,Rd=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
}`,zd=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":id,"../shaders/helpers/colors.wgsl":cd,"../shaders/helpers/flow_helpers.wgsl":od,"../shaders/helpers/helpers.wgsl":sd,"../shaders/helpers/sprite_helpers.wgsl":fd,"../shaders/main/fragment.wgsl":dd,"../shaders/main/shader_outline.wgsl":c2,"../shaders/main/structs.wgsl":hd,"../shaders/main/vertex.wgsl":md,"../shaders/objects/object_def.wgsl":pd,"../shaders/query/chunk_data_calc.wgsl":gd,"../shaders/query/cursor_query.wgsl":yd,"../shaders/query/total_query.wgsl":vd,"../shaders/realtime_frag.wgsl":xd,"../shaders/render/debug_render_compute.wgsl":bd,"../shaders/render/fluid_render_compute.wgsl":_d,"../shaders/render/normal_compute.wgsl":Sd,"../shaders/render/shadow_render_compute.wgsl":Cd,"../shaders/render/sprite_render_compute.wgsl":Td,"../shaders/render/terrain_render_compute.wgsl":Rd,"../shaders/simulation/step_compute.wgsl":Dd});function Md(){let s=c2;for(const[r,d]of Object.entries(zd)){const i=r.split("/").pop().replace(".wgsl","");s=s.replace(`//{${i}}`,d)}return s}var L0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var e2;function Ad(){return e2||(e2=1,(function(s){(function(){var r={}.hasOwnProperty;function d(){for(var c="",h=0;h<arguments.length;h++){var g=arguments[h];g&&(c=f(c,i(g)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return d.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var h="";for(var g in c)r.call(c,g)&&c[g]&&(h=f(h,g));return h}function f(c,h){return h?c?c+" "+h:c+h:c}s.exports?(d.default=d,s.exports=d):window.classNames=d})()})(L0)),L0.exports}var Vd=Ad();const Ee=Rr(Vd),Od=["xxl","xl","lg","md","sm","xs"],Ed="xs",Dr=W.createContext({prefixes:{},breakpoints:Od,minBreakpoint:Ed}),{Consumer:Bh,Provider:Uh}=Dr;function Ze(s,r){const{prefixes:d}=W.useContext(Dr);return s||d[r]||r}function o2(){const{breakpoints:s}=W.useContext(Dr);return s}function s2(){const{minBreakpoint:s}=W.useContext(Dr);return s}var P0={exports:{}},Q0,t2;function wd(){if(t2)return Q0;t2=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Q0=s,Q0}var K0,n2;function Hd(){if(n2)return K0;n2=1;var s=wd();function r(){}function d(){}return d.resetWarningCache=r,K0=function(){function i(h,g,y,p,v,C){if(C!==s){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}i.isRequired=i;function f(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:f,element:i,elementType:i,instanceOf:f,node:i,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:d,resetWarningCache:r};return c.PropTypes=c,c},K0}var l2;function Gd(){return l2||(l2=1,P0.exports=Hd()()),P0.exports}var Bd=Gd();const ht=Rr(Bd),f2=(s=>W.forwardRef((r,d)=>S.jsx("div",{...r,ref:d,className:Ee(r.className,s)}))),Ud=["as","disabled"];function jd(s,r){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(r.indexOf(i)>=0)continue;d[i]=s[i]}return d}function Yd(s){return!s||s.trim()==="#"}function d2({tagName:s,disabled:r,href:d,target:i,rel:f,role:c,onClick:h,tabIndex:g=0,type:y}){s||(d!=null||i!=null||f!=null?s="a":s="button");const p={tagName:s};if(s==="button")return[{type:y||"button",disabled:r},p];const v=b=>{if((r||s==="a"&&Yd(d))&&b.preventDefault(),r){b.stopPropagation();return}h?.(b)},C=b=>{b.key===" "&&(b.preventDefault(),v(b))};return s==="a"&&(d||(d="#"),r&&(d=void 0)),[{role:c??"button",disabled:void 0,tabIndex:r?void 0:g,href:d,target:s==="a"?i:void 0,"aria-disabled":r||void 0,rel:s==="a"?f:void 0,onClick:v,onKeyDown:C},p]}const Xd=W.forwardRef((s,r)=>{let{as:d,disabled:i}=s,f=jd(s,Ud);const[c,{tagName:h}]=d2(Object.assign({tagName:d,disabled:i},f));return S.jsx(h,Object.assign({},f,c,{ref:r}))});Xd.displayName="Button";const aa=W.forwardRef(({as:s,bsPrefix:r,variant:d="primary",size:i,active:f=!1,disabled:c=!1,className:h,...g},y)=>{const p=Ze(r,"btn"),[v,{tagName:C}]=d2({tagName:s,disabled:c,...g}),b=C;return S.jsx(b,{...v,...g,ref:y,disabled:c,className:Ee(h,p,f&&"active",d&&`${p}-${d}`,i&&`${p}-${i}`,g.href&&c&&"disabled")})});aa.displayName="Button";const F0=W.forwardRef(({bsPrefix:s,size:r,vertical:d=!1,className:i,role:f="group",as:c="div",...h},g)=>{const y=Ze(s,"btn-group");let p=y;return d&&(p=`${y}-vertical`),S.jsx(c,{...h,ref:g,role:f,className:Ee(i,p,r&&`${y}-${r}`)})});F0.displayName="ButtonGroup";const I0=W.forwardRef(({className:s,bsPrefix:r,as:d="div",...i},f)=>(r=Ze(r,"card-body"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));I0.displayName="CardBody";const h2=W.forwardRef(({className:s,bsPrefix:r,as:d="div",...i},f)=>(r=Ze(r,"card-footer"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));h2.displayName="CardFooter";const m2=W.createContext(null);m2.displayName="CardHeaderContext";const p2=W.forwardRef(({bsPrefix:s,className:r,as:d="div",...i},f)=>{const c=Ze(s,"card-header"),h=W.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return S.jsx(m2.Provider,{value:h,children:S.jsx(d,{ref:f,...i,className:Ee(r,c)})})});p2.displayName="CardHeader";const g2=W.forwardRef(({bsPrefix:s,className:r,variant:d,as:i="img",...f},c)=>{const h=Ze(s,"card-img");return S.jsx(i,{ref:c,className:Ee(d?`${h}-${d}`:h,r),...f})});g2.displayName="CardImg";const y2=W.forwardRef(({className:s,bsPrefix:r,as:d="div",...i},f)=>(r=Ze(r,"card-img-overlay"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));y2.displayName="CardImgOverlay";const v2=W.forwardRef(({className:s,bsPrefix:r,as:d="a",...i},f)=>(r=Ze(r,"card-link"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));v2.displayName="CardLink";const kd=f2("h6"),x2=W.forwardRef(({className:s,bsPrefix:r,as:d=kd,...i},f)=>(r=Ze(r,"card-subtitle"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));x2.displayName="CardSubtitle";const b2=W.forwardRef(({className:s,bsPrefix:r,as:d="p",...i},f)=>(r=Ze(r,"card-text"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));b2.displayName="CardText";const qd=f2("h5"),_2=W.forwardRef(({className:s,bsPrefix:r,as:d=qd,...i},f)=>(r=Ze(r,"card-title"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));_2.displayName="CardTitle";const S2=W.forwardRef(({bsPrefix:s,className:r,bg:d,text:i,border:f,body:c=!1,children:h,as:g="div",...y},p)=>{const v=Ze(s,"card");return S.jsx(g,{ref:p,...y,className:Ee(r,v,d&&`bg-${d}`,i&&`text-${i}`,f&&`border-${f}`),children:c?S.jsx(I0,{children:h}):h})});S2.displayName="Card";const en=Object.assign(S2,{Img:g2,Title:_2,Subtitle:x2,Body:I0,Link:v2,Text:b2,Header:p2,Footer:h2,ImgOverlay:y2});function Nd(s,r){return W.Children.toArray(s).some(d=>W.isValidElement(d)&&d.type===r)}function Zd({as:s,bsPrefix:r,className:d,...i}){r=Ze(r,"col");const f=o2(),c=s2(),h=[],g=[];return f.forEach(y=>{const p=i[y];delete i[y];let v,C,b;typeof p=="object"&&p!=null?{span:v,offset:C,order:b}=p:v=p;const T=y!==c?`-${y}`:"";v&&h.push(v===!0?`${r}${T}`:`${r}${T}-${v}`),b!=null&&g.push(`order${T}-${b}`),C!=null&&g.push(`offset${T}-${C}`)}),[{...i,className:Ee(d,...h,...g)},{as:s,bsPrefix:r,spans:h}]}const Ct=W.forwardRef((s,r)=>{const[{className:d,...i},{as:f="div",bsPrefix:c,spans:h}]=Zd(s);return S.jsx(f,{...i,ref:r,className:Ee(d,!h.length&&c)})});Ct.displayName="Col";const C2=W.createContext(null);C2.displayName="InputGroupContext";const Ld={type:ht.string,tooltip:ht.bool,as:ht.elementType},zr=W.forwardRef(({as:s="div",className:r,type:d="valid",tooltip:i=!1,...f},c)=>S.jsx(s,{...f,ref:c,className:Ee(r,`${d}-${i?"tooltip":"feedback"}`)}));zr.displayName="Feedback";zr.propTypes=Ld;const Rn=W.createContext({}),cu=W.forwardRef(({id:s,bsPrefix:r,className:d,type:i="checkbox",isValid:f=!1,isInvalid:c=!1,as:h="input",...g},y)=>{const{controlId:p}=W.useContext(Rn);return r=Ze(r,"form-check-input"),S.jsx(h,{...g,ref:y,type:i,id:s||p,className:Ee(d,r,f&&"is-valid",c&&"is-invalid")})});cu.displayName="FormCheckInput";const Cr=W.forwardRef(({bsPrefix:s,className:r,htmlFor:d,...i},f)=>{const{controlId:c}=W.useContext(Rn);return s=Ze(s,"form-check-label"),S.jsx("label",{...i,ref:f,htmlFor:d||c,className:Ee(r,s)})});Cr.displayName="FormCheckLabel";const T2=W.forwardRef(({id:s,bsPrefix:r,bsSwitchPrefix:d,inline:i=!1,reverse:f=!1,disabled:c=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:p,feedbackType:v,className:C,style:b,title:T="",type:E="checkbox",label:k,children:B,as:U="input",...j},X)=>{r=Ze(r,"form-check"),d=Ze(d,"form-switch");const{controlId:K}=W.useContext(Rn),G=W.useMemo(()=>({controlId:s||K}),[K,s]),P=!B&&k!=null&&k!==!1||Nd(B,Cr),Y=S.jsx(cu,{...j,type:E==="switch"?"checkbox":E,ref:X,isValid:h,isInvalid:g,disabled:c,as:U});return S.jsx(Rn.Provider,{value:G,children:S.jsx("div",{style:b,className:Ee(C,P&&r,i&&`${r}-inline`,f&&`${r}-reverse`,E==="switch"&&d),children:B||S.jsxs(S.Fragment,{children:[Y,P&&S.jsx(Cr,{title:T,children:k}),p&&S.jsx(zr,{type:v,tooltip:y,children:p})]})})})});T2.displayName="FormCheck";const Tr=Object.assign(T2,{Input:cu,Label:Cr}),R2=W.forwardRef(({bsPrefix:s,type:r,size:d,htmlSize:i,id:f,className:c,isValid:h=!1,isInvalid:g=!1,plaintext:y,readOnly:p,as:v="input",...C},b)=>{const{controlId:T}=W.useContext(Rn);return s=Ze(s,"form-control"),S.jsx(v,{...C,type:r,size:i,ref:b,readOnly:p,id:f||T,className:Ee(c,y?`${s}-plaintext`:s,d&&`${s}-${d}`,r==="color"&&`${s}-color`,h&&"is-valid",g&&"is-invalid")})});R2.displayName="FormControl";const Pd=Object.assign(R2,{Feedback:zr}),D2=W.forwardRef(({className:s,bsPrefix:r,as:d="div",...i},f)=>(r=Ze(r,"form-floating"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));D2.displayName="FormFloating";const ec=W.forwardRef(({controlId:s,as:r="div",...d},i)=>{const f=W.useMemo(()=>({controlId:s}),[s]);return S.jsx(Rn.Provider,{value:f,children:S.jsx(r,{...d,ref:i})})});ec.displayName="FormGroup";const z2=W.forwardRef(({as:s="label",bsPrefix:r,column:d=!1,visuallyHidden:i=!1,className:f,htmlFor:c,...h},g)=>{const{controlId:y}=W.useContext(Rn);r=Ze(r,"form-label");let p="col-form-label";typeof d=="string"&&(p=`${p} ${p}-${d}`);const v=Ee(f,r,i&&"visually-hidden",d&&p);return c=c||y,d?S.jsx(Ct,{ref:g,as:"label",className:v,htmlFor:c,...h}):S.jsx(s,{ref:g,className:v,htmlFor:c,...h})});z2.displayName="FormLabel";const M2=W.forwardRef(({bsPrefix:s,className:r,id:d,...i},f)=>{const{controlId:c}=W.useContext(Rn);return s=Ze(s,"form-range"),S.jsx("input",{...i,type:"range",ref:f,className:Ee(r,s),id:d||c})});M2.displayName="FormRange";const A2=W.forwardRef(({bsPrefix:s,size:r,htmlSize:d,className:i,isValid:f=!1,isInvalid:c=!1,id:h,...g},y)=>{const{controlId:p}=W.useContext(Rn);return s=Ze(s,"form-select"),S.jsx("select",{...g,size:d,ref:y,className:Ee(i,s,r&&`${s}-${r}`,f&&"is-valid",c&&"is-invalid"),id:h||p})});A2.displayName="FormSelect";const V2=W.forwardRef(({bsPrefix:s,className:r,as:d="small",muted:i,...f},c)=>(s=Ze(s,"form-text"),S.jsx(d,{...f,ref:c,className:Ee(r,s,i&&"text-muted")})));V2.displayName="FormText";const O2=W.forwardRef((s,r)=>S.jsx(Tr,{...s,ref:r,type:"switch"}));O2.displayName="Switch";const Qd=Object.assign(O2,{Input:Tr.Input,Label:Tr.Label}),E2=W.forwardRef(({bsPrefix:s,className:r,children:d,controlId:i,label:f,...c},h)=>(s=Ze(s,"form-floating"),S.jsxs(ec,{ref:h,className:Ee(r,s),controlId:i,...c,children:[d,S.jsx("label",{htmlFor:i,children:f})]})));E2.displayName="FloatingLabel";const Kd={_ref:ht.any,validated:ht.bool,as:ht.elementType},tc=W.forwardRef(({className:s,validated:r,as:d="form",...i},f)=>S.jsx(d,{...i,ref:f,className:Ee(s,r&&"was-validated")}));tc.displayName="Form";tc.propTypes=Kd;const he=Object.assign(tc,{Group:ec,Control:Pd,Floating:D2,Check:Tr,Switch:Qd,Label:z2,Text:V2,Range:M2,Select:A2,FloatingLabel:E2}),Mr=W.forwardRef(({className:s,bsPrefix:r,as:d="span",...i},f)=>(r=Ze(r,"input-group-text"),S.jsx(d,{ref:f,className:Ee(s,r),...i})));Mr.displayName="InputGroupText";const Jd=s=>S.jsx(Mr,{children:S.jsx(cu,{type:"checkbox",...s})}),Wd=s=>S.jsx(Mr,{children:S.jsx(cu,{type:"radio",...s})}),w2=W.forwardRef(({bsPrefix:s,size:r,hasValidation:d,className:i,as:f="div",...c},h)=>{s=Ze(s,"input-group");const g=W.useMemo(()=>({}),[]);return S.jsx(C2.Provider,{value:g,children:S.jsx(f,{ref:h,...c,className:Ee(i,s,r&&`${s}-${r}`,d&&"has-validation")})})});w2.displayName="InputGroup";const $d=Object.assign(w2,{Text:Mr,Radio:Wd,Checkbox:Jd}),ru=W.forwardRef(({bsPrefix:s,className:r,as:d="div",...i},f)=>{const c=Ze(s,"row"),h=o2(),g=s2(),y=`${c}-cols`,p=[];return h.forEach(v=>{const C=i[v];delete i[v];let b;C!=null&&typeof C=="object"?{cols:b}=C:b=C;const T=v!==g?`-${v}`:"";b!=null&&p.push(`${y}${T}-${b}`)}),S.jsx(d,{ref:f,...i,className:Ee(r,c,...p)})});ru.displayName="Row";const Ar={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,pixelScale:4,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};It.memo(Fd,(s,r)=>s.initial===r.initial&&s.title===r.title);function Fd({initial:s,onChange:r,onApply:d,title:i="Noise & Render Settings"}){const f=W.useMemo(()=>({...Ar,...s}),[s]),[c,h]=W.useState(f);W.useEffect(()=>{h(v=>{const C=Math.max(1,Math.min(32,v.numberOfTerrainColors));let b=v.colors.slice(0,C);if(b.length<C){const T=C-b.length,E=b[b.length-1]??"#888888";b=b.concat(Array.from({length:T},()=>E))}return{...v,numberOfTerrainColors:C,colors:b}})},[c.numberOfTerrainColors]);const g=(v,C)=>h(b=>({...b,[v]:C})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],p=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return S.jsx(en,{children:S.jsxs(en.Body,{children:[S.jsx(en.Title,{className:"mb-3",children:i}),S.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),S.jsxs(ru,{className:"g-3",children:[S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"width",children:[S.jsx(he.Label,{children:"Width"}),S.jsx(he.Control,{type:"number",min:1,value:c.width,onChange:v=>g("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(he.Text,{muted:!0,children:"Width in pixels of the map."})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"height",children:[S.jsx(he.Label,{children:"Height"}),S.jsx(he.Control,{type:"number",min:1,value:c.height,onChange:v=>g("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(he.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),S.jsxs(ru,{className:"g-3",children:[S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"noiseType",children:[S.jsx(he.Label,{children:"Noise Type"}),S.jsx(he.Select,{value:c.noiseType,onChange:v=>g("noiseType",v.currentTarget.value),children:y.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"seed",children:[S.jsx(he.Label,{children:"Seed"}),S.jsx(he.Control,{type:"number",value:c.seed,onChange:v=>g("seed",parseInt(v.currentTarget.value||"0",10))})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"octaves",children:[S.jsx(he.Label,{children:"Fractal Octaves"}),S.jsx(he.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>g("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"lacunarity",children:[S.jsx(he.Label,{children:"Fractal Lacunarity"}),S.jsx($d,{children:S.jsx(he.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>g("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"gain",children:[S.jsx(he.Label,{children:"Fractal Gain"}),S.jsx(he.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>g("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"fractalType",children:[S.jsx(he.Label,{children:"Fractal Type"}),S.jsx(he.Select,{value:c.fractalType,onChange:v=>g("fractalType",v.currentTarget.value),children:p.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"frequency",children:[S.jsx(he.Label,{children:"Frequency"}),S.jsx(he.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>g("frequency",parseFloat(v.currentTarget.value||"0"))}),S.jsx(he.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),S.jsxs(ru,{className:"g-3",children:[S.jsxs(Ct,{md:6,lg:4,children:[S.jsxs(he.Group,{controlId:"maxCellValue",children:[S.jsx(he.Label,{children:"Max Terrain Height"}),S.jsx(he.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>g("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(he.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),S.jsxs(Ct,{md:6,lg:4,children:[S.jsxs(he.Group,{controlId:"thm",children:[S.jsx(he.Label,{children:"Terrain Height Multiplier"}),S.jsx(he.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>g("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(he.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),S.jsxs(Ct,{md:6,lg:4,children:[S.jsxs(he.Group,{controlId:"colorSteps",children:[S.jsx(he.Label,{children:"Terrain Steps"}),S.jsx(he.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>g("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),S.jsx(he.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),S.jsx(Ct,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"numColors",children:[S.jsx(he.Label,{children:"Number of Terrain Colors"}),S.jsx(he.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>g("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),S.jsx(he.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),S.jsxs("div",{className:"mt-4",children:[S.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),S.jsx(ru,{className:"g-3",children:c.colors.map((v,C)=>S.jsx(Ct,{xs:3,sm:2,md:1,lg:1,children:S.jsx(he.Group,{controlId:`color-${C}`,children:S.jsx(he.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:b=>{const T=b.currentTarget.value;g("colors",c.colors.map((E,k)=>k===C?T:E))},title:`Pick color ${C+1}`})})},C))})]}),S.jsxs("div",{className:"d-flex gap-2 mt-4",children:[S.jsx(aa,{variant:"primary",onClick:()=>d?.(c),children:"Apply"}),S.jsx(aa,{variant:"outline-secondary",onClick:()=>h(f),children:"Reset to Defaults"})]})]})})}function a2(s,r){const d=s>>>0,i=r>>>0||1;return(i&i-1)===0?d+(i-1)&~(i-1):Math.ceil(d/i)*i>>>0}function Id(s){if(typeof s!="string")return"";const r=s.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(r))return r;const d=r.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(d)return`vec${d[1]}${d[2][0]}`;const i=r.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const eh={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function nc(s){const r={fields:[],size:0};let d=0,i=1;for(const f of s){const c=Id(f.type);if(!c)throw new Error(`Unsupported type: ${f.type}`);const h=c;if(h.startsWith("pad")){const v=parseInt(h.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${h}`);const C={name:f.name,type:h,offset:d,size:v,align:1};r.fields.push(C),d+=v;continue}const y=eh[h];if(!y)throw new Error(`Unsupported non-pad type: ${h}`);d=a2(d,y.align);const p={name:f.name,type:h,offset:d,size:y.size,align:y.align};r.fields.push(p),d+=y.size,y.align>i&&(i=y.align)}return r.size=a2(d,Math.max(16,i)),r}function th(s,r){const d=new ArrayBuffer(s.size),i=new DataView(d);for(const f of s.fields){if(f.type.startsWith("pad"))continue;const c=r[f.name];if(c==null)throw new Error(`Missing field '${f.name}'`);switch(f.type){case"f32":i.setFloat32(f.offset,+c,!0);break;case"u32":i.setUint32(f.offset,c>>>0,!0);break;case"i32":i.setInt32(f.offset,c|0,!0);break;case"bool":i.setUint32(f.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0),i.setFloat32(f.offset+12,c[3],!0);break;case"vec2u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0),i.setUint32(f.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0),i.setInt32(f.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${f.type}`)}}return d}function lc(s,r,d,i,f,c){const h=th(r,d),g=c??s.createBuffer({size:r.size,usage:i,label:f});return s.queue.writeBuffer(g,0,h),g}const nh=nc([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function lh(s,r,d,i){const f={maxCellValue:r.maxCellValue,terrainHeightMultiplier:r.terrainHeightMultiplier,colorSteps:r.colorSteps>>>0,numberOfTerrainColors:(d?.length??0)>>>0,_padT0:[0,0]};return lc(s,nh,f,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function ah(s,r,d){{const i=s.createBuffer({label:"Terrain Colors Buffer",size:r.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return s.queue.writeBuffer(i,0,uh(r)),i}}function uh(s){const r=[];for(let d of s){/^#([0-9a-fA-F]{3})$/.test(d)&&(d=d.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=d.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const f=i[1],c=parseInt(f.slice(0,2),16)/255,h=parseInt(f.slice(2,4),16)/255,g=parseInt(f.slice(4,6),16)/255;r.push(c,h,g,1)}return new Float32Array(r)}const rh=nc([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"simIndex",type:"u32"},{name:"showDebug",type:"u32"},{name:"pixelScale",type:"u32"}]);function u2(s,r,d){const i={size:[r.width,r.height],time:r.time,simIndex:r.simIndex,showDebug:r.showDebug?1:0,pixelScale:r.pixelScale};return lc(s,rh,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",d)}const ih=nc([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"visibleRect",type:"vec4u"}]);function r2(s,r,d){const i={mousePos:[r.mousePos.x,r.mousePos.y],mouse0Held:r.mouse0Held?1:0,mouse1Held:r.mouse1Held?1:0,mouseRadius:r.mouseRadius,visibleRect:[r.visibleRect.x0,r.visibleRect.y0,r.visibleRect.x1,r.visibleRect.y1]};return lc(s,ih,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",d)}function ch(s,r,d,i){const f={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},currentCells:{binding:3,type:"storage",buffer:i.prevCellsBuffer},nextCells:{binding:4,type:"storage",buffer:i.nextCellsBuffer},terrainColors:{binding:5,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:6,type:"storage",buffer:i.outputTextureBuffer},cursorQuery:{binding:7,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:8,type:"storage",buffer:i.chunkDataBuffer},sprites:{binding:9,type:"read-only-storage",buffer:i.spriteDataBuffer}},c=s.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(f).filter(G=>!["sprite","spriteColors"].includes(G)).map(G=>({binding:f[G].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:f[G].type}}))}),h=s.createBindGroup({label:"Unified Compute BG A",layout:c,entries:Object.keys(f).map(G=>G==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:G==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:{binding:f[G].binding,resource:{buffer:f[G].buffer}})}),g=s.createBindGroup({label:"Unified Compute BG show B",layout:c,entries:Object.keys(f).map(G=>G==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:G==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:{binding:f[G].binding,resource:{buffer:f[G].buffer}})}),y=s.createBindGroupLayout({label:"Render BGL",entries:[{binding:f.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uView.type}},{binding:f.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uInput.type}},{binding:f.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:f.outputTex.type}}]}),p=s.createRenderPipeline({label:"Render Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[y],label:"Render Pipeline Layout"}),vertex:{module:r,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:d}]},primitive:{topology:"triangle-list"}}),v=s.createComputePipeline({label:"Normal Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Normal Compute Pipeline Layout"}),compute:{module:r,entryPoint:"calc_normals"}}),C=s.createComputePipeline({label:"Cursor Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Cursor Query Pipeline Layout"}),compute:{module:r,entryPoint:"cursor_query"}}),b=s.createComputePipeline({label:"Total Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Total Query Pipeline Layout"}),compute:{module:r,entryPoint:"total_query"}}),T=s.createComputePipeline({label:"Chunk Data Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Chunk Data Pipeline Layout"}),compute:{module:r,entryPoint:"chunk_data_calc"}}),E=s.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"terrain_render"}}),k=s.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"shadow_render"}}),B=s.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"fluid_render"}}),U=s.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:r,entryPoint:"debug_render"}}),j=s.createComputePipeline({label:"Sprite Render Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Sprite Render Compute Pipeline Layout"}),compute:{module:r,entryPoint:"sprite_render"}}),X=s.createComputePipeline({label:"Step Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Step Compute Pipeline Layout"}),compute:{module:r,entryPoint:"step"}}),K=s.createBindGroup({label:"Render BG",layout:y,entries:[{binding:f.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:f.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:f.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:p,normalComputePipeline:v,cursorQueryPipeline:C,totalQueryPipeline:b,chunkDataPipeline:T,terrainTextureComputePipeline:E,shadowTextureComputePipeline:k,fluidTextureComputePipeline:B,debugTextureComputePipeline:U,spriteRenderComputePipeline:j,stepComputePipeline:X},bindGroups:{unifiedComputeBG_A:h,unifiedComputeBG_B:g,renderBG:K}}}function oh(s,r){return s.mouse0Held===r.mouse0Held&&s.mouse1Held===r.mouse1Held&&s.mouse2Held===r.mouse2Held&&s.mouseRadius===r.mouseRadius&&s.mouseMoved===r.mouseMoved&&s.cursorVisible===r.cursorVisible&&s.mousePosition.x===r.mousePosition.x&&s.mousePosition.y===r.mousePosition.y&&s.visibleRect.x0===r.visibleRect.x0&&s.visibleRect.y0===r.visibleRect.y0&&s.visibleRect.x1===r.visibleRect.x1&&s.visibleRect.y1===r.visibleRect.y1&&s.visibleRect.width===r.visibleRect.width&&s.visibleRect.height===r.visibleRect.height&&s.visibleRectChanged===r.visibleRectChanged&&s.simulationSubSteps===r.simulationSubSteps}const sh={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouseRadius:30,mouseMoved:!1,cursorVisible:!0,mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class fh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(r){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(r);const d=r-this.winMs;for(;this.times.length&&this.times[0]<d;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const iu=new fh;async function dh(s){const r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.src=s,await r.decode();const d=await createImageBitmap(r),f=new OffscreenCanvas(d.width,d.height).getContext("2d",{willReadFrequently:!0});f.drawImage(d,0,0);const{data:c,width:h,height:g}=f.getImageData(0,0,d.width,d.height),y=new Uint8Array(c.buffer.slice(0));return d.close(),{width:h,height:g,data:y}}function hh(s){if(s.length%4!==0)throw new Error("RGBA length must be multiple of 4");const r=s.length/4,d=new Uint32Array(r);for(let i=0,f=0;f<r;i+=4,f++){const c=s[i+0],h=s[i+1],g=s[i+2],y=s[i+3];d[f]=y<<24|g<<16|h<<8|c}return d}async function mh(s){const{width:r,height:d,data:i}=await dh(s);return{width:r,height:d,data:hh(i)}}async function ph(s,r=Ar,d,i,f,c){if(!s)return()=>{};s.__wgpuCleanup&&s.__wgpuCleanup();const h=!1;var g=!0,y=!0,p=!0;const v=await ud(),C=s.getContext("webgpu"),b=navigator.gpu.getPreferredCanvasFormat();s.style.imageRendering="pixelated",C.__deviceId=v.__id,s.width=r.width*r.pixelScale,s.height=r.height*r.pixelScale,C.configure({device:v,format:b,alphaMode:"opaque"});let T=Md();const E=v.createShaderModule({label:"Rect Shader",code:T});var k=0,B=0,U=0,j=h;const X=()=>{j=!j},K=ze=>{j=ze},G=u2(v,{width:r.width,height:r.height,time:0,simIndex:0,showDebug:j,pixelScale:r.pixelScale});function P(){u2(v,{width:r.width,height:r.height,time:k,simIndex:U,showDebug:j,pixelScale:r.pixelScale},G)}const Y=d(),F=r2(v,{mousePos:Y.mousePosition,mouse0Held:Y.mouse0Held,mouse1Held:Y.mouse1Held,mouseRadius:Y.mouseRadius,visibleRect:Y.visibleRect}),te=lh(v,{maxCellValue:r.maxCellValue,terrainHeightMultiplier:r.terrainHeightMultiplier,colorSteps:r.colorSteps},r.colors),se=ah(v,r.colors);function ve(ze,Ve,rt){const Ye=Math.ceil(ze/rt),ee=Math.ceil(Ve/rt);return[Ye,ee]}const ae=16,[ye,De]=ve(r.width,r.height,ae),pe=v.createBuffer({label:"Chunk Data",size:16*ye*De,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(pe,0,new Float32Array(4*ye*De));function H(ze){r2(v,{mousePos:ze.mousePosition,mouse0Held:ze.mouse0Held,mouse1Held:ze.mouse1Held,mouseRadius:ze.mouseRadius,visibleRect:ze.visibleRect},F)}const $=r.width*r.height*4*4,ue=r.width*r.height*4*r.pixelScale*r.pixelScale,x=v.createBuffer({label:"Output Texture",size:$+ue,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(x,0,new Float32Array(($+ue)/4));const V=["./sprites/Tower.png","./sprites/16bit_tree.png","./sprites/top_down_tree.png"],q=await Promise.all(V.map(async(ze,Ve)=>{const{width:rt,height:Ye,data:ee}=await mh(ze);return{path:ze,width:rt,height:Ye,data:ee,index:Ve}}));let Z=0;for(let ze=0;ze<q.length;ze++)q[ze]={...q[ze],colorStart:Z},Z+=q[ze].width*q[ze].height;const I=64,ce=I*I,re=4,we=re+ce,Re=we*4,Ue=q.length,xt=v.createBuffer({label:"Sprite Data",size:Ue*Re,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),et=new Uint32Array(Ue*we);for(let ze=0;ze<Ue;ze++){const Ve=q[ze],rt=ze*we;et[rt+0]=Ve.width>>>0,et[rt+1]=Ve.height>>>0,et[rt+2]=(Ve.colorStart??0)>>>0,et[rt+3]=0;const Ye=Ve.data,ee=Math.min(ce,Ye.length);for(let Et=0;Et<ee;Et++)et[rt+re+Et]=Ye[Et]>>>0}v.queue.writeBuffer(xt,0,et);const Tt=12,Dn=4*Tt,rn=r.width*r.height*Dn,ne=v.createBuffer({label:"Prev Cells",size:rn,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),me=v.createBuffer({label:"Next Cells",size:rn,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ge=ze=>{const Ve=new Float32Array(r.width*r.height*Tt),rt=rd(ze,r.width,r.height,r.noiseType,r.fractalOctaves,r.fractalLacunarity,r.fractalGain,r.fractalType,r.frequency);for(let Ye=0;Ye<rt.length;Ye++){const ee=Ye*Tt;Ve[ee]=rt[Ye]*100,Ve[ee+8]=Math.floor(Math.random()*8)+0}v.queue.writeBuffer(ne,0,Ve),v.queue.writeBuffer(me,0,Ve),B=0,U=0,y=!0};var Pe=r.seed;const je=()=>{ge(Pe)},Je=()=>{Pe=Math.ceil(Math.random()*1e9),je()};je();const lt=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),mt=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),be=ch(v,E,b,{prevCellsBuffer:ne,nextCellsBuffer:me,terrainBuffer:te,terrainColorsBuffer:se,viewUniformBuffer:G,inputUniformBuffer:F,outputTextureBuffer:x,cursorQueryBuffer:lt,chunkDataBuffer:pe,spriteDataBuffer:xt}),cn={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},$n=16,Jt=16,Qe=Math.ceil(r.width/$n),pt=Math.ceil(r.height/Jt);let He=!0,ua=0;var ou=d();let vl=!1;function Fn(ze=0){if(C.__deviceId!==v.__id)return;iu.begin();var Ve=d();oh(Ve,ou)||(H(Ve),ou=Ve);const rt=B%6===0;v.pushErrorScope("validation"),k=ze*.001,P();const Ye=v.createCommandEncoder({label:"Encoder"});{const ee=Ye.beginComputePass({label:"Step Compute Pass"});ee.setPipeline(be.piplines.stepComputePipeline);for(let Et=0;Et<Ve.simulationSubSteps;Et++)ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,pt,1),He=!He,U++,P();c(U),ee.end()}if((B===0||Ve.mouse0Held||Ve.mouse1Held)&&(p=!0),B<60&&(y=!0,g=!0),Ve.visibleRectChanged&&(p=!0),p=!0,g||y){const ee=Ye.beginComputePass({label:"Normal Compute Pass"});ee.setPipeline(be.piplines.normalComputePipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,pt,1),ee.end()}if(y){const ee=Ye.beginComputePass({label:"Terrain Texture Compute Pass"});ee.setPipeline(be.piplines.terrainTextureComputePipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,pt,1),ee.end()}if(p||y){const ee=Ye.beginComputePass({label:"Shadow Texture Compute Pass"});ee.setPipeline(be.piplines.shadowTextureComputePipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,pt,1),ee.end(),Ve={...Ve,visibleRectChanged:!1}}if(p||y){const ee=Ye.beginComputePass({label:"Fluid Texture Compute Pass"});ee.setPipeline(be.piplines.fluidTextureComputePipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,pt,1),ee.end(),Ve={...Ve,visibleRectChanged:!1}}if(B%10==0&&j){const ee=Ye.beginComputePass({label:"Debug Texture Compute Pass"});ee.setPipeline(be.piplines.debugTextureComputePipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(Qe,pt,1),ee.end()}if(B%10==0){const ee=Ye.beginComputePass({label:"Sprite Render Compute Pass"});ee.setPipeline(be.piplines.spriteRenderComputePipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}if(rt){const ee=Ye.beginComputePass({label:"Cursor Query Pass"});ee.setPipeline(be.piplines.cursorQueryPipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}if(B%60==0){const ee=Ye.beginComputePass({label:"Total Query Pass"});ee.setPipeline(be.piplines.totalQueryPipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}{const ee=Ye.beginComputePass({label:"Chunk Data Pass"});ee.setPipeline(be.piplines.chunkDataPipeline),ee.setBindGroup(0,He?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(ye,De,1),ee.end()}cn.colorAttachments[0].view=C.getCurrentTexture().createView();{const ee=Ye.beginRenderPass(cn);ee.setPipeline(be.piplines.renderPipeline),ee.setBindGroup(0,be.bindGroups.renderBG),ee.draw(3),ee.end()}rt&&!vl&&Ye.copyBufferToBuffer(lt,0,mt,0,64),v.queue.submit([Ye.finish()]),v.popErrorScope().then(ee=>{ee&&console.error(ee.message)}),rt&&!vl&&(vl=!0,mt.mapAsync(GPUMapMode.READ).then(()=>{const ee=new DataView(mt.getMappedRange(0,64)),Et=ee.getFloat32(0,!0),el=ee.getFloat32(16,!0),Vr=ee.getFloat32(20,!0),su=ee.getFloat32(24,!0),fu=ee.getFloat32(28,!0),ra=ee.getFloat32(48,!0),ia=ee.getFloat32(52,!0),du=ee.getUint32(56,!0);f({height:Et,normal:{x:el,y:Vr,z:su},fAmount:fu,fluidTotal:ra,antiFluidTotal:ia,chunkUpdates:du})}).catch(()=>{}).finally(()=>{mt.unmap(),vl=!1})),y=!1,p=!1,g=!1,iu.end(ze),B++,ua=requestAnimationFrame(Fn)}ua=requestAnimationFrame(Fn);const In=()=>{cancelAnimationFrame(ua),G.destroy(),F.destroy(),te.destroy(),se.destroy(),ne.destroy(),me.destroy(),x.destroy()};return s.__wgpuCleanup=In,{cleanup:In,resetMap:je,randomizeMap:Je,toggleShowDebug:X,setShowDebug:K}}const gh=W.forwardRef(({noiseSettings:s=Ar,inputRef:r,setInput:d,setWebGPUHandle:i,setCursorQuery:f,style:c,setSimIndex:h,children:g},y)=>{const p=W.useRef(null);return W.useImperativeHandle(y,()=>p.current,[]),W.useEffect(()=>{if(!p.current)return;let v=()=>{};return(async()=>{const C=await ph(p.current,s,()=>r.current,d,f,h);v=C.cleanup,i(C)})(),()=>v?.()},[s,d,i,f]),S.jsx("canvas",{ref:p,style:{...c,display:"block",width:"100%",height:"100%"},children:g})}),yh=It.memo(gh,(s,r)=>s.noiseSettings===r.noiseSettings&&s.children===r.children),vh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function xh({cursorQuery:s}){var c=Math.ceil(s.height),h=Math.abs(s.fAmount<0?Math.floor(s.fAmount):Math.ceil(s.fAmount));h+c>200&&(h=200-c);const g=c/200*150,y=h/200*150;var p="";return h>0&&(Math.abs(s.fAmount)<1?p=" < 1":p=`${h}`),S.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),S.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:s.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"0px"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:p})}),S.jsx("div",{style:{width:"50px",height:`${g}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:s.height>0?`${c}`:""})})]})}function bh({input:s}){return S.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${s.mousePosition.x}, ${s.mousePosition.y})`})}const $e=({children:s})=>S.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:s});function _h(){return S.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:S.jsx(en,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:S.jsxs(en.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsx(en.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),S.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[S.jsxs("div",{children:[S.jsx($e,{children:"F11"})," — Toggle Fullscreen"]}),S.jsxs("div",{children:[S.jsx($e,{children:"F9"})," — Toggle Controls"]}),S.jsxs("div",{children:[S.jsx($e,{children:"F8"})," — Toggle Debug Stats"]}),S.jsxs("div",{children:[S.jsx($e,{children:"W"}),S.jsx($e,{children:"A"}),S.jsx($e,{children:"S"}),S.jsx($e,{children:"D"})," or ",S.jsx($e,{children:"←"}),S.jsx($e,{children:"→"}),S.jsx($e,{children:"↑"}),S.jsx($e,{children:"↓"})," — Pan Camera"]}),S.jsxs("div",{children:[S.jsx($e,{children:"ScrollWheel"})," — Zoom"]}),S.jsxs("div",{children:[S.jsx($e,{children:"Shift"})," +"," ",S.jsx($e,{children:"ScrollWheel"})," — Change Brush Radius"]}),S.jsxs("div",{children:[S.jsx($e,{children:"LMB"}),"/",S.jsx($e,{children:"RMB"})," — (Paint / Remove) Fluid"]}),S.jsxs("div",{children:[S.jsx($e,{children:"Spacebar"})," — Toggle Pause"]}),S.jsxs("div",{children:[S.jsx($e,{children:"Tab"})," / ",S.jsx($e,{children:"Shift"}),"+",S.jsx($e,{children:"Tab"})," — Increase / Decrease Speed"]}),S.jsxs("div",{children:[S.jsx($e,{children:"C"})," — Clear Map"]}),S.jsxs("div",{children:[S.jsx($e,{children:"R"})," — Randmoize Map"]})]})]})})})}var Sh=["color","size","title","className"];function J0(){return J0=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var i in d)({}).hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},J0.apply(null,arguments)}function Ch(s,r){if(s==null)return{};var d,i,f=Th(s,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)d=c[i],r.indexOf(d)===-1&&{}.propertyIsEnumerable.call(s,d)&&(f[d]=s[d])}return f}function Th(s,r){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(r.indexOf(i)!==-1)continue;d[i]=s[i]}return d}var H2=W.forwardRef(function(s,r){var d=s.color,i=d===void 0?"currentColor":d,f=s.size,c=f===void 0?"1em":f,h=s.title,g=h===void 0?null:h,y=s.className,p=y===void 0?"":y,v=Ch(s,Sh);return It.createElement("svg",J0({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",p].filter(Boolean).join(" ")},v),g?It.createElement("title",null,g):null,It.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});H2.propTypes={color:ht.string,size:ht.oneOfType([ht.string,ht.number]),title:ht.string,className:ht.string};var Rh=["color","size","title","className"];function W0(){return W0=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var i in d)({}).hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},W0.apply(null,arguments)}function Dh(s,r){if(s==null)return{};var d,i,f=zh(s,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)d=c[i],r.indexOf(d)===-1&&{}.propertyIsEnumerable.call(s,d)&&(f[d]=s[d])}return f}function zh(s,r){if(s==null)return{};var d={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(r.indexOf(i)!==-1)continue;d[i]=s[i]}return d}var G2=W.forwardRef(function(s,r){var d=s.color,i=d===void 0?"currentColor":d,f=s.size,c=f===void 0?"1em":f,h=s.title,g=h===void 0?null:h,y=s.className,p=y===void 0?"":y,v=Dh(s,Rh);return It.createElement("svg",W0({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",p].filter(Boolean).join(" ")},v),g?It.createElement("title",null,g):null,It.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});G2.propTypes={color:ht.string,size:ht.oneOfType([ht.string,ht.number]),title:ht.string,className:ht.string};const Ot=[.25,.5,1,2,3,4,8],B2=(s,r,d)=>Math.min(d,Math.max(r,s));function Mh(s,r=!0){if(r){var d=(Ot.indexOf(s)+1)%Ot.length;return Ot[d]}else{var d=B2(Ot.indexOf(s)+1,0,Ot.length-1);return Ot[d]}}function Ah(s,r=!0){if(r){var d=(Ot.indexOf(s)-1+Ot.length)%Ot.length;return Ot[d]}else{var d=B2(Ot.indexOf(s)-1,0,Ot.length-1);return Ot[d]}}function Vh({gameSpeed:s,paused:r,onChange:d,className:i,size:f}){const c=p=>d({paused:!1,gameSpeed:p}),h=()=>d({paused:!r,gameSpeed:s}),y={backgroundColor:"rgba(99, 99, 99, 0.57)",border:"4px solid white",borderRadius:0,fontSize:"20px",width:40,height:40,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none"};return S.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:S.jsxs(F0,{className:`${i} rounded-0`,size:f,style:{border:"none"},children:[S.jsx(aa,{type:"button",variant:"primary",onClick:h,"aria-pressed":r,"aria-label":r?"Resume":"Pause",title:r?"Resume":"Pause",style:y,children:r?S.jsx(G2,{}):S.jsx(H2,{})}),Ot.map(p=>S.jsx(aa,{type:"button",variant:s===p&&!r?"primary":"outline-secondary",active:s===p&&!r,onClick:()=>c(p),"aria-pressed":s===p&&!r,"aria-label":p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,title:p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,style:{...y,color:s===p&&!r?"white":"darkgray",marginLeft:"-4px",fontSize:p<1?"15px":""},children:p<1?`1/${Math.round(1/p)}x`:`${p}x`},p))]})})}function Oh({cursorQuery:s,gameSpeed:r,mode:d="full",simIndex:i}){const[f,c]=W.useState(0),[h,g]=W.useState(0),[y,p]=W.useState(0);W.useEffect(()=>{const T=setInterval(()=>{c(iu.fps),g(iu.cpuMs),p(iu.frameCount)},250);return()=>clearInterval(T)},[]);const v=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),C=`${h.toFixed(2)}`.padStart(5,"0"),b=s.chunkUpdates*16*16*r*4;return d=="simple"?S.jsx("div",{children:`FPS: ${f}`}):S.jsx(en,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:S.jsxs(en.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsxs(en.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",S.jsx($e,{children:"F8"})," to close"]}),S.jsx("div",{children:`FPS: ${f} (Frame Duration: ${C} ms) (Frames: ${v.format(y)})`}),S.jsx("div",{children:`Simulation Steps: ${v.format(i)}`}),S.jsx("div",{children:`Chunk Updates: ${v.format(s.chunkUpdates)}`}),S.jsx("div",{children:`Cell Updates per frame: ${v.format(b)}`}),S.jsx("div",{children:`Total Fluid: ${v.format(Math.ceil(s.fluidTotal))}`}),S.jsx("div",{children:`Total Anti Fluid: ${v.format(Math.ceil(s.antiFluidTotal))}`}),S.jsx("div",{children:`Total Combined Fluid: ${v.format(Math.ceil(s.fluidTotal-s.antiFluidTotal))}`})]})})}function Eh({tabs:s,initialActiveKey:r=null,onTabChange:d,panelHeight:i=150,className:f,children:c,closeOnEscape:h=!0,closeOnOutsideClick:g=!0,hotkey:y="b"}){const p={imageRendering:"pixelated",pointerEvents:"none",aspectRatio:"initial",width:"100%"},v=W.useMemo(()=>[{key:"terrain",icon:S.jsx("img",{src:"./sprites/icon_paintbrush.png",style:p}),label:"Terrain",hotkey:"1"},{key:"econ",icon:S.jsx("img",{src:"./sprites/icon_coin.png",style:p}),label:"Economy",hotkey:"2"},{key:"power",icon:S.jsx("img",{src:"./sprites/icon_power.png",style:p}),label:"Power",hotkey:"3"},{key:"defend",icon:S.jsx("img",{src:"./sprites/icon_shield.png",style:p}),label:"Defend",hotkey:"4"}],[]),C=s?.length?s:v,[b,T]=W.useState(r),E=W.useRef(null),[k,B]=W.useState(r),U=F=>{const te=b===F?null:F;T(te),d?.(te),te!=null&&B(te)},j=()=>{k!=null&&U(k)},X=()=>{T(null),d?.(null)},K=48,G=44,P=44,Y=2.5;return W.useEffect(()=>{if(!g)return;const F=te=>{if(!b)return;const se=te.target;if(!se)return;const ve=E.current;ve&&(ve.contains(se)||(T(null),d?.(null)))};return window.addEventListener("pointerdown",F,!0),()=>window.removeEventListener("pointerdown",F,!0)},[b,g,d]),W.useEffect(()=>{const F=te=>{te.key==="Escape"&&b?X():te.key===y?b?b&&X():j():C.forEach(se=>{te.key==se.hotkey&&U(se.key)})};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[b,h,d]),S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
        .tabButton:hover
        {
            height: ${P+4}px;
        }
      `}),S.jsx("div",{className:f,style:{position:"absolute",left:0,right:0,bottom:0,pointerEvents:"none",zIndex:10},children:S.jsxs("div",{ref:E,style:{position:"absolute",left:0,right:0,bottom:0,height:i+K,transform:b?"translateY(0)":`translateY(${i}px)`,transition:"transform 220ms ease",display:"flex",flexDirection:"column",pointerEvents:"none"},children:[S.jsx("div",{style:{height:K,display:"flex",justifyContent:"start",alignItems:"flex-end",gap:8,padding:"0 12px",paddingLeft:"100px",borderTopLeftRadius:16,borderTopRightRadius:16},children:S.jsx(F0,{style:{display:"inline-flex",alignItems:"flex-end",pointerEvents:"auto"},onMouseDown:F=>F.preventDefault(),children:C.map(F=>{const te=b===F.key;return S.jsx(aa,{className:"tabButton",onClick:()=>!F.disabled&&U(F.key),disabled:F.disabled,style:{borderTop:"solid white 4px",borderLeft:"solid white 4px",borderRight:"solid white 4px",borderBottom:"none",borderRadius:"0px 0px 0px 0px",width:G,height:te?P*2:P,margin:`0px ${Y}px`,backgroundColor:"rgba(0,0,0,.35)",background:"none",display:"inline-flex",alignItems:"flex-start",outline:"none !important",padding:"4px"},"aria-label":F.label,title:F.label,children:F.icon},F.key)})})}),S.jsx(en,{text:"light",style:{height:i,borderRadius:0,margin:0,boxShadow:b?"0 -6px 18px rgba(0,0,0,.45)":"none",pointerEvents:b?"auto":"none",backgroundColor:"rgba(46, 44, 44, 0.51)",borderTop:"solid white 4px"},children:S.jsx(en.Body,{style:{display:"flex",gap:12,alignItems:"stretch",justifyContent:"flex-start",padding:12},children:b?C.find(F=>F.key===b)?.content??S.jsxs("div",{style:{opacity:.8,fontSize:14},children:[S.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",S.jsx("b",{children:b})," ","tab."]}),S.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]}):S.jsx("div",{style:{opacity:.65},children:"Choose a tab to open the menu."})})}),S.jsx("div",{style:{position:"relative",bottom:i},children:c})]})})]})}function wh({settings:s,setSettings:r,input:d,setInput:i,cursorQuery:f,paused:c,setPaused:h,gameSpeed:g,setGameSpeed:y,simIndex:p,showControlsUI:v,showDebugUI:C}){return S.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[S.jsx("div",{id:"output"}),v&&S.jsx(_h,{}),S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx(Oh,{cursorQuery:f,gameSpeed:g,simIndex:p,mode:C?"full":"simple"})}),S.jsxs(Eh,{children:[S.jsx(bh,{input:d}),S.jsx(Vh,{gameSpeed:g,paused:c,onChange:({paused:b,gameSpeed:T})=>{h(b),y(T),i({...d,simulationSubSteps:b?0:Math.ceil(4*T)})}}),S.jsx(xh,{cursorQuery:f})]})]})}const Hh=s=>{const r=s;if(!r)return!1;const d=r.tagName?.toLowerCase();return d==="input"||d==="textarea"||r.isContentEditable||d==="select"},Tn=(s,r,d)=>Math.min(d,Math.max(r,s)),i2=(s,r,d,i)=>{const f=Math.max(0,(d-s)/2),c=Math.max(0,(i-r)/2);return{xMin:-f,xMax:f,yMin:-c,yMax:c}};function Gh(){const[s,r]=W.useState(Ar),[d,i]=It.useState(!1),[f,c]=It.useState(1),[h,g]=W.useState(0),[y,p]=W.useState(!0),[v,C]=W.useState(!1),[b,T]=W.useState(sh),E=W.useRef(b);W.useEffect(()=>{E.current=b},[b]);const[k,B]=W.useState(vh),U=W.useRef(null),[j,X]=W.useState({width:1920,height:1080}),[K,G]=W.useState({x:0,y:0}),[P,Y]=W.useState(!1),[F,te]=W.useState(2),[se,ve]=W.useState(null),ae=W.useRef(null);W.useEffect(()=>{ae.current=se},[se]);const ye=W.useRef(null),De=W.useCallback(($,ue,x,V=!1)=>{const q=U.current;if(!q)return;const Z=$!==void 0&&ue!==void 0?{x:$,y:ue}:ye.current;if(!Z)return;const I=q.getBoundingClientRect();if(I.width===0||I.height===0)return;const ce=q.width/s.pixelScale/I.width,re=q.height/s.pixelScale/I.height,we=Math.floor((Z.x-I.left)*ce),Re=Math.floor((Z.y-I.top)*re);T(Ue=>{const xt=Tn(we,0,s.width-1),et=Tn(Re,0,s.height-1);return!V&&Ue.mousePosition.x===xt&&Ue.mousePosition.y===et?Ue:{...Ue,mousePosition:{x:xt,y:et},mouseMoved:V,cursorVisible:x==null||x==U.current}})},[s.width,s.height,s.pixelScale]),pe=W.useCallback(($,ue)=>{const x=U.current;if(!x)return{x:0,y:0};const V={x:$,y:ue},q=x.getBoundingClientRect();if(q.width===0||q.height===0)return{x:0,y:0};const Z=x.width/s.pixelScale/q.width,I=x.height/s.pixelScale/q.height,ce=Math.floor((V.x-q.left)*Z),re=Math.floor((V.y-q.top)*I),we=Tn(ce,0,s.width-1),Re=Tn(re,0,s.height-1);return{x:we,y:Re}},[s.width,s.height,s.pixelScale]);W.useEffect(()=>{const $=new Set;let ue=0,x=performance.now();const V=600;ae.current?.setShowDebug(v);const q=()=>{const ne=window.innerWidth,me=window.innerHeight,ge=s.width/s.height;let Pe=ne,je=Pe/ge;return je<me&&(je=me,Pe=je*ge),{vw:ne,vh:me,baseW:Pe,baseH:je}},Z=()=>{const{vw:ne,baseW:me}=q();return ne/me},I=ne=>{if(Hh(ne.target))return;const me=ne.key.toLowerCase();(me==="w"||me==="a"||me==="s"||me==="d"||me==="arrowup"||me==="arrowleft"||me==="arrowdown"||me==="arrowright")&&($.add(me),ne.preventDefault());const ge=()=>{i(Je=>{let lt=!Je;return T(mt=>({...mt,simulationSubSteps:lt?0:Math.ceil(4*f)})),lt}),ne.preventDefault()},Pe=()=>{c(Je=>{let lt=Mh(Je,!1);return T(mt=>({...mt,simulationSubSteps:d?0:Math.ceil(4*lt)})),lt}),ne.preventDefault()},je=()=>{c(Je=>{let lt=Ah(Je,!1);return T(mt=>({...mt,simulationSubSteps:d?0:Math.ceil(4*lt)})),lt}),ne.preventDefault()};ne.code=="Space"?ge():ne.code=="Tab"?(d?ge():ne.shiftKey?je():Pe(),ne.preventDefault()):ne.code=="F9"?(p(Je=>!Je),ne.preventDefault()):ne.code=="F8"?(C(Je=>(ae.current?.setShowDebug(!Je),!Je)),ne.preventDefault()):ne.code=="KeyC"?(ae.current?.resetMap(),ne.preventDefault()):!ne.ctrlKey&&ne.code=="KeyR"&&(ae.current?.randomizeMap(),ne.preventDefault())},ce=ne=>{const me=ne.key.toLowerCase();$.delete(me)};function re(ne,me,ge,Pe){const je=Math.max(ne/ge,me/Pe),Je=Math.min(ne*4/ge,me*4/Pe);return{minScale:je,maxScale:Je}}function we(){const ne=window.innerWidth,me=window.innerHeight,ge=s.width/s.height;let Pe=ne,je=Pe/ge;je<me&&(je=me,Pe=je*ge);const{minScale:Je,maxScale:lt}=re(ne,me,Pe,je),mt=Math.min(Math.max(F,Je),lt),be=Pe*mt,cn=je*mt,{xMin:$n,xMax:Jt,yMin:Qe,yMax:pt}=i2(ne,me,be,cn);X({width:be,height:cn}),G(He=>({x:Tn(He.x,$n,Jt),y:Tn(He.y,Qe,pt)})),requestAnimationFrame(()=>De()),J()}const Re=ne=>{let me=0,ge=0;if(($.has("w")||$.has("arrowup"))&&(ge-=1),($.has("s")||$.has("arrowdown"))&&(ge+=1),($.has("a")||$.has("arrowleft"))&&(me-=1),($.has("d")||$.has("arrowright"))&&(me+=1),me!==0||ge!==0){const Pe=Math.hypot(me,ge)||1;me/=Pe,ge/=Pe;const je=window.innerWidth,Je=window.innerHeight,lt=j.width,mt=j.height,{xMin:be,xMax:cn,yMin:$n,yMax:Jt}=i2(je,Je,lt,mt);G(Qe=>({x:Tn(Qe.x-me*V*F*ne,be,cn),y:Tn(Qe.y-ge*V*F*ne,$n,Jt)})),requestAnimationFrame(()=>De()),J()}};function Ue(ne){ne.preventDefault();const me=Math.sign(ne.deltaY)*-1;if(ne.shiftKey)T(ge=>{const Pe=.1*ge.mouseRadius*me,je=Math.min(Math.max(5,ge.mouseRadius+Pe),s.width/2);return{...ge,mouseRadius:je}});else{const ge=Z(),Pe=4;te(je=>Tn(je+.1*je*me,ge,Pe))}}function xt(ne){ye.current={x:ne.clientX,y:ne.clientY},De(ne.clientX,ne.clientY,ne.target,!0)}const et=ne=>{ne.button===2&&ne.preventDefault(),T(me=>{const ge={...me};return ne.button===0&&(ge.mouse0Held=!0),ne.button===2&&(ge.mouse1Held=!0),ge})},Tt=ne=>{T(me=>{const ge={...me};return ne.button===0&&(ge.mouse0Held=!1),ne.button===2&&(ge.mouse1Held=!1),ge})};function Dn(ne){ne.preventDefault()}const rn=async ne=>{const me=(ne-x)/1e3;x=ne,Re(me),J(),ue=requestAnimationFrame(rn)};return window.addEventListener("mousemove",xt),U.current?.addEventListener("mouseup",Tt),window.addEventListener("contextmenu",Dn),U.current?.addEventListener("mousedown",et),window.addEventListener("keydown",I),window.addEventListener("keyup",ce),U.current?.addEventListener("wheel",Ue,{passive:!1}),window.addEventListener("resize",we),we(),ue=requestAnimationFrame(rn),J(),()=>{cancelAnimationFrame(ue),window.removeEventListener("mousemove",xt),U.current?.removeEventListener("mouseup",Tt),window.removeEventListener("contextmenu",Dn),U.current?.removeEventListener("mousedown",et),window.removeEventListener("keydown",I),window.removeEventListener("keyup",ce),U.current?.removeEventListener("wheel",Ue),window.removeEventListener("resize",we)}},[j.width,j.height,F,d,T,i,f,c,p]);const H=W.useRef(null),J=W.useCallback(($=!0)=>{const ue=()=>{if(!U.current)return;const V=pe(0,0),q=pe(window.innerWidth,window.innerHeight),Z={x0:V.x,y0:V.y,x1:q.x,y1:q.y,width:q.x-V.x,height:q.y-V.y};!Z||H.current&&Z.x0===H.current.x0&&Z.y0===H.current.y0&&Z.x1===H.current.x1&&Z.y1===H.current.y1||(H.current=Z,T(ce=>({...ce,visibleRect:Z,visibleRectChanged:!0})))};$?requestAnimationFrame(ue):ue()},[T,pe,window.innerWidth,window.innerHeight]);return S.jsx(S.Fragment,{children:S.jsxs("div",{id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[S.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:j.width,height:j.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${K.x}px, ${K.y}px, 0)`,transition:P?"transform 360ms ease-out":"none",willChange:"transform"},children:S.jsx(yh,{ref:U,noiseSettings:s,inputRef:E,setInput:T,setWebGPUHandle:ve,setCursorQuery:B,setSimIndex:g})}),S.jsx(wh,{settings:s,setSettings:r,input:b,setInput:$=>{T($)},cursorQuery:k,paused:d,setPaused:i,gameSpeed:f,setGameSpeed:c,simIndex:h,showControlsUI:y,showDebugUI:v})]})})}ad.createRoot(document.getElementById("root")).render(S.jsx(It.StrictMode,{children:S.jsx(Gh,{})}));
