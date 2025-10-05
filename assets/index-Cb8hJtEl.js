(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))i(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function m(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(f){if(f.ep)return;f.ep=!0;const c=m(f);fetch(f.href,c)}})();function pu(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var E0={exports:{}},Ka={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function W1(){if(kf)return Ka;kf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function m(i,f,c){var h=null;if(c!==void 0&&(h=""+c),f.key!==void 0&&(h=""+f.key),"key"in f){c={};for(var g in f)g!=="key"&&(c[g]=f[g])}else c=f;return f=c.ref,{$$typeof:s,type:i,key:h,ref:f!==void 0?f:null,props:c}}return Ka.Fragment=u,Ka.jsx=m,Ka.jsxs=m,Ka}var qf;function K1(){return qf||(qf=1,E0.exports=W1()),E0.exports}var S=K1(),H0={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function J1(){if(Lf)return ve;Lf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,Y={};function B(x,A,P){this.props=x,this.context=A,this.refs=Y,this.updater=P||D}B.prototype.isReactComponent={},B.prototype.setState=function(x,A){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,A,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function q(){}q.prototype=B.prototype;function G(x,A,P){this.props=x,this.context=A,this.refs=Y,this.updater=P||D}var U=G.prototype=new q;U.constructor=G,w(U,B.prototype),U.isPureReactComponent=!0;var L=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function X(x,A,P,N,J,se){return P=se.ref,{$$typeof:s,type:x,key:A,ref:P!==void 0?P:null,props:se}}function ce(x,A){return X(x.type,A,void 0,void 0,void 0,x.props)}function te(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function ge(x){var A={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(P){return A[P]})}var xe=/\/+/g;function ue(x,A){return typeof x=="object"&&x!==null&&x.key!=null?ge(""+x.key):A.toString(36)}function me(){}function we(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(me,me):(x.status="pending",x.then(function(A){x.status==="pending"&&(x.status="fulfilled",x.value=A)},function(A){x.status==="pending"&&(x.status="rejected",x.reason=A)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function pe(x,A,P,N,J){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ae=!1;if(x===null)ae=!0;else switch(se){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(x.$$typeof){case s:case u:ae=!0;break;case v:return ae=x._init,pe(ae(x._payload),A,P,N,J)}}if(ae)return J=J(x),ae=N===""?"."+ue(x,0):N,L(J)?(P="",ae!=null&&(P=ae.replace(xe,"$&/")+"/"),pe(J,A,P,"",function(Ue){return Ue})):J!=null&&(te(J)&&(J=ce(J,P+(J.key==null||x&&x.key===J.key?"":(""+J.key).replace(xe,"$&/")+"/")+ae)),A.push(J)),1;ae=0;var Be=N===""?".":N+":";if(L(x))for(var _e=0;_e<x.length;_e++)N=x[_e],se=Be+ue(N,_e),ae+=pe(N,A,P,se,J);else if(_e=_(x),typeof _e=="function")for(x=_e.call(x),_e=0;!(N=x.next()).done;)N=N.value,se=Be+ue(N,_e++),ae+=pe(N,A,P,se,J);else if(se==="object"){if(typeof x.then=="function")return pe(we(x),A,P,N,J);throw A=String(x),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return ae}function H(x,A,P){if(x==null)return x;var N=[],J=0;return pe(x,N,"","",function(se){return A.call(P,se,J++)}),N}function K(x){if(x._status===-1){var A=x._result;A=A(),A.then(function(P){(x._status===0||x._status===-1)&&(x._status=1,x._result=P)},function(P){(x._status===0||x._status===-1)&&(x._status=2,x._result=P)}),x._status===-1&&(x._status=0,x._result=A)}if(x._status===1)return x._result.default;throw x._result}var $=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function I(){}return ve.Children={map:H,forEach:function(x,A,P){H(x,function(){A.apply(this,arguments)},P)},count:function(x){var A=0;return H(x,function(){A++}),A},toArray:function(x){return H(x,function(A){return A})||[]},only:function(x){if(!te(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ve.Component=B,ve.Fragment=m,ve.Profiler=f,ve.PureComponent=G,ve.StrictMode=i,ve.Suspense=y,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,ve.__COMPILER_RUNTIME={__proto__:null,c:function(x){return j.H.useMemoCache(x)}},ve.cache=function(x){return function(){return x.apply(null,arguments)}},ve.cloneElement=function(x,A,P){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var N=w({},x.props),J=x.key,se=void 0;if(A!=null)for(ae in A.ref!==void 0&&(se=void 0),A.key!==void 0&&(J=""+A.key),A)!Q.call(A,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&A.ref===void 0||(N[ae]=A[ae]);var ae=arguments.length-2;if(ae===1)N.children=P;else if(1<ae){for(var Be=Array(ae),_e=0;_e<ae;_e++)Be[_e]=arguments[_e+2];N.children=Be}return X(x.type,J,void 0,void 0,se,N)},ve.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},ve.createElement=function(x,A,P){var N,J={},se=null;if(A!=null)for(N in A.key!==void 0&&(se=""+A.key),A)Q.call(A,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(J[N]=A[N]);var ae=arguments.length-2;if(ae===1)J.children=P;else if(1<ae){for(var Be=Array(ae),_e=0;_e<ae;_e++)Be[_e]=arguments[_e+2];J.children=Be}if(x&&x.defaultProps)for(N in ae=x.defaultProps,ae)J[N]===void 0&&(J[N]=ae[N]);return X(x,se,void 0,void 0,null,J)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(x){return{$$typeof:g,render:x}},ve.isValidElement=te,ve.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:K}},ve.memo=function(x,A){return{$$typeof:p,type:x,compare:A===void 0?null:A}},ve.startTransition=function(x){var A=j.T,P={};j.T=P;try{var N=x(),J=j.S;J!==null&&J(P,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(I,$)}catch(se){$(se)}finally{j.T=A}},ve.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},ve.use=function(x){return j.H.use(x)},ve.useActionState=function(x,A,P){return j.H.useActionState(x,A,P)},ve.useCallback=function(x,A){return j.H.useCallback(x,A)},ve.useContext=function(x){return j.H.useContext(x)},ve.useDebugValue=function(){},ve.useDeferredValue=function(x,A){return j.H.useDeferredValue(x,A)},ve.useEffect=function(x,A,P){var N=j.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(x,A)},ve.useId=function(){return j.H.useId()},ve.useImperativeHandle=function(x,A,P){return j.H.useImperativeHandle(x,A,P)},ve.useInsertionEffect=function(x,A){return j.H.useInsertionEffect(x,A)},ve.useLayoutEffect=function(x,A){return j.H.useLayoutEffect(x,A)},ve.useMemo=function(x,A){return j.H.useMemo(x,A)},ve.useOptimistic=function(x,A){return j.H.useOptimistic(x,A)},ve.useReducer=function(x,A,P){return j.H.useReducer(x,A,P)},ve.useRef=function(x){return j.H.useRef(x)},ve.useState=function(x){return j.H.useState(x)},ve.useSyncExternalStore=function(x,A,P){return j.H.useSyncExternalStore(x,A,P)},ve.useTransition=function(){return j.H.useTransition()},ve.version="19.1.1",ve}var Zf;function Z0(){return Zf||(Zf=1,H0.exports=J1()),H0.exports}var F=Z0();const Wt=pu(F);var G0={exports:{}},Ja={},B0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function F1(){return Pf||(Pf=1,(function(s){function u(H,K){var $=H.length;H.push(K);e:for(;0<$;){var I=$-1>>>1,x=H[I];if(0<f(x,K))H[I]=K,H[$]=x,$=I;else break e}}function m(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var K=H[0],$=H.pop();if($!==K){H[0]=$;e:for(var I=0,x=H.length,A=x>>>1;I<A;){var P=2*(I+1)-1,N=H[P],J=P+1,se=H[J];if(0>f(N,$))J<x&&0>f(se,N)?(H[I]=se,H[J]=$,I=J):(H[I]=N,H[P]=$,I=P);else if(J<x&&0>f(se,$))H[I]=se,H[J]=$,I=J;else break e}}return K}function f(H,K){var $=H.sortIndex-K.sortIndex;return $!==0?$:H.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,g=h.now();s.unstable_now=function(){return h.now()-g}}var y=[],p=[],v=1,C=null,_=3,D=!1,w=!1,Y=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(H){for(var K=m(p);K!==null;){if(K.callback===null)i(p);else if(K.startTime<=H)i(p),K.sortIndex=K.expirationTime,u(y,K);else break;K=m(p)}}function j(H){if(Y=!1,L(H),!w)if(m(y)!==null)w=!0,Q||(Q=!0,ue());else{var K=m(p);K!==null&&pe(j,K.startTime-H)}}var Q=!1,X=-1,ce=5,te=-1;function ge(){return B?!0:!(s.unstable_now()-te<ce)}function xe(){if(B=!1,Q){var H=s.unstable_now();te=H;var K=!0;try{e:{w=!1,Y&&(Y=!1,G(X),X=-1),D=!0;var $=_;try{t:{for(L(H),C=m(y);C!==null&&!(C.expirationTime>H&&ge());){var I=C.callback;if(typeof I=="function"){C.callback=null,_=C.priorityLevel;var x=I(C.expirationTime<=H);if(H=s.unstable_now(),typeof x=="function"){C.callback=x,L(H),K=!0;break t}C===m(y)&&i(y),L(H)}else i(y);C=m(y)}if(C!==null)K=!0;else{var A=m(p);A!==null&&pe(j,A.startTime-H),K=!1}}break e}finally{C=null,_=$,D=!1}K=void 0}}finally{K?ue():Q=!1}}}var ue;if(typeof U=="function")ue=function(){U(xe)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,we=me.port2;me.port1.onmessage=xe,ue=function(){we.postMessage(null)}}else ue=function(){q(xe,0)};function pe(H,K){X=q(function(){H(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var $=_;_=K;try{return H()}finally{_=$}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=_;_=H;try{return K()}finally{_=$}},s.unstable_scheduleCallback=function(H,K,$){var I=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,H){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,H={id:v++,callback:K,priorityLevel:H,startTime:$,expirationTime:x,sortIndex:-1},$>I?(H.sortIndex=$,u(p,H),m(y)===null&&H===m(p)&&(Y?(G(X),X=-1):Y=!0,pe(j,$-I))):(H.sortIndex=x,u(y,H),w||D||(w=!0,Q||(Q=!0,ue()))),H},s.unstable_shouldYield=ge,s.unstable_wrapCallback=function(H){var K=_;return function(){var $=_;_=K;try{return H.apply(this,arguments)}finally{_=$}}}})(U0)),U0}var Qf;function $1(){return Qf||(Qf=1,B0.exports=F1()),B0.exports}var j0={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function I1(){if(Wf)return xt;Wf=1;var s=Z0();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var i={d:{f:m,r:function(){throw Error(u(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(y,p,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:y,containerInfo:p,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,xt.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return c(y,p,null,v)},xt.flushSync=function(y){var p=h.T,v=i.p;try{if(h.T=null,i.p=2,y)return y()}finally{h.T=p,i.p=v,i.d.f()}},xt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(y,p))},xt.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},xt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,D=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?i.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:_,fetchPriority:D}):v==="script"&&i.d.X(y,{crossOrigin:C,integrity:_,fetchPriority:D,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=g(p.as,p.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(y)},xt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,C=g(v,p.crossOrigin);i.d.L(y,v,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xt.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=g(p.as,p.crossOrigin);i.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(y)},xt.requestFormReset=function(y){i.d.r(y)},xt.unstable_batchedUpdates=function(y,p){return y(p)},xt.useFormState=function(y,p,v){return h.H.useFormState(y,p,v)},xt.useFormStatus=function(){return h.H.useHostTransitionStatus()},xt.version="19.1.1",xt}var Kf;function ed(){if(Kf)return j0.exports;Kf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),j0.exports=I1(),j0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function td(){if(Jf)return Ja;Jf=1;var s=$1(),u=Z0(),m=ed();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return g(a),e;if(r===l)return g(a),t;r=r.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=r;else{for(var o=!1,d=a.child;d;){if(d===n){o=!0,n=a,l=r;break}if(d===l){o=!0,l=a,n=r;break}d=d.sibling}if(!o){for(d=r.child;d;){if(d===n){o=!0,n=r,l=a;break}if(d===l){o=!0,l=r,n=a;break}d=d.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case B:return"Profiler";case Y:return"StrictMode";case j:return"Suspense";case Q:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case U:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case L:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:we(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var pe=Array.isArray,H=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},I=[],x=-1;function A(e){return{current:e}}function P(e){0>x||(e.current=I[x],I[x]=null,x--)}function N(e,t){x++,I[x]=e.current,e.current=t}var J=A(null),se=A(null),ae=A(null),Be=A(null);function _e(e,t){switch(N(ae,t),N(se,e),N(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gf(t),e=yf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(J),N(J,e)}function Ue(){P(J),P(se),P(ae)}function ut(e){e.memoizedState!==null&&N(Be,e);var t=J.current,n=yf(t,e.type);t!==n&&(N(se,e),N(J,n))}function dt(e){se.current===e&&(P(J),P(se)),Be.current===e&&(P(Be),La._currentValue=$)}var _t=Object.prototype.hasOwnProperty,Re=s.unstable_scheduleCallback,en=s.unstable_cancelCallback,sl=s.unstable_shouldYield,le=s.unstable_requestPaint,re=s.unstable_now,ye=s.unstable_getCurrentPriorityLevel,De=s.unstable_ImmediatePriority,je=s.unstable_UserBlockingPriority,Ze=s.unstable_NormalPriority,lt=s.unstable_LowPriority,gt=s.unstable_IdlePriority,tn=s.log,Zn=s.unstable_setDisableYieldValue,Xe=null,ze=null;function We(e){if(typeof tn=="function"&&Zn(e),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(Xe,e)}catch{}}var Me=Math.clz32?Math.clz32:bu,ee=Math.log,fl=Math.LN2;function bu(e){return e>>>=0,e===0?32:31-(ee(e)/fl|0)|0}var dl=256,hl=4194304;function nn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ml(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~r,l!==0?a=nn(l):(o&=d,o!==0?a=nn(o):n||(n=d&~e,n!==0&&(a=nn(n))))):(d=l&~r,d!==0?a=nn(d):o!==0?a=nn(o):n||(n=l&~e,n!==0&&(a=nn(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Pn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _u(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(){var e=dl;return dl<<=1,(dl&4194048)===0&&(dl=256),e}function $0(){var e=hl;return hl<<=1,(hl&62914560)===0&&(hl=4194304),e}function Cu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function B2(e,t,n,l,a,r){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,b=e.expirationTimes,O=e.hiddenUpdates;for(n=o&~n;0<n;){var k=31-Me(n),W=1<<k;d[k]=0,b[k]=-1;var V=O[k];if(V!==null)for(O[k]=null,k=0;k<V.length;k++){var E=V[k];E!==null&&(E.lane&=-536870913)}n&=~W}l!==0&&I0(e,l,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function I0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Me(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Me(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Su(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tc(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Bf(e.type))}function U2(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Cn=Math.random().toString(36).slice(2),yt="__reactFiber$"+Cn,St="__reactProps$"+Cn,pl="__reactContainer$"+Cn,Ru="__reactEvents$"+Cn,j2="__reactListeners$"+Cn,X2="__reactHandles$"+Cn,nc="__reactResources$"+Cn,ta="__reactMarker$"+Cn;function Du(e){delete e[yt],delete e[St],delete e[Ru],delete e[j2],delete e[X2]}function gl(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pl]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_f(e);e!==null;){if(n=e[yt])return n;e=_f(e)}return t}e=n,n=e.parentNode}return null}function yl(e){if(e=e[yt]||e[pl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function na(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vl(e){var t=e[nc];return t||(t=e[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[ta]=!0}var lc=new Set,ac={};function Qn(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(ac[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var Y2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rc={},uc={};function N2(e){return _t.call(uc,e)?!0:_t.call(rc,e)?!1:Y2.test(e)?uc[e]=!0:(rc[e]=!0,!1)}function lr(e,t,n){if(N2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ar(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ln(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var zu,ic;function bl(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||"",ic=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+e+ic}var Mu=!1;function wu(e,t){if(!e||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(E){var V=E}Reflect.construct(e,[],W)}else{try{W.call()}catch(E){V=E}e.call(W.prototype)}}else{try{throw Error()}catch(E){V=E}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(E){if(E&&V&&typeof E.stack=="string")return[E.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],d=r[1];if(o&&d){var b=o.split(`
`),O=d.split(`
`);for(a=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;if(l===b.length||a===O.length)for(l=b.length-1,a=O.length-1;1<=l&&0<=a&&b[l]!==O[a];)a--;for(;1<=l&&0<=a;l--,a--)if(b[l]!==O[a]){if(l!==1||a!==1)do if(l--,a--,0>a||b[l]!==O[a]){var k=`
`+b[l].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=l&&0<=a);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bl(n):""}function k2(e){switch(e.tag){case 26:case 27:case 5:return bl(e.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 15:return wu(e.type,!1);case 11:return wu(e.type.render,!1);case 1:return wu(e.type,!0);case 31:return bl("Activity");default:return""}}function cc(e){try{var t="";do t+=k2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q2(e){var t=oc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=q2(e))}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=oc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var L2=/[\n"\\]/g;function Ut(e){return e.replace(L2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ou(e,t,n,l,a,r,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Au(e,o,Bt(t)):n!=null?Au(e,o,Bt(n)):l!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Bt(d):e.removeAttribute("name")}function fc(e,t,n,l,a,r,o,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Au(e,t,n){t==="number"&&ur(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _l(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function dc(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function hc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(pe(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Cl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Z2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Z2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function pc(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&mc(e,a,l)}else for(var r in t)t.hasOwnProperty(r)&&mc(e,r,t[r])}function Vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ir(e){return Q2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Eu=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,Tl=null;function gc(e){var t=yl(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ou(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[St]||null;if(!a)throw Error(i(90));Ou(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&sc(l)}break e;case"textarea":dc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&_l(e,!!n.multiple,t,!1)}}}var Gu=!1;function yc(e,t,n){if(Gu)return e(t,n);Gu=!0;try{var l=e(t);return l}finally{if(Gu=!1,(Sl!==null||Tl!==null)&&(Pr(),Sl&&(t=Sl,e=Tl,Tl=Sl=null,gc(t),e)))for(t=0;t<e.length;t++)gc(e[t])}}function la(e,t){var n=e.stateNode;if(n===null)return null;var l=n[St]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(an)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Bu=!1}var Sn=null,Uu=null,cr=null;function vc(){if(cr)return cr;var e,t=Uu,n=t.length,l,a="value"in Sn?Sn.value:Sn.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[r-l];l++);return cr=a.slice(e,1<l?1-l:void 0)}function or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function xc(){return!1}function Tt(e){function t(n,l,a,r,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?sr:xc,this.isPropagationStopped=xc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=Tt(Wn),ra=v({},Wn,{view:0,detail:0}),W2=Tt(ra),ju,Xu,ua,dr=v({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ua&&(ua&&e.type==="mousemove"?(ju=e.screenX-ua.screenX,Xu=e.screenY-ua.screenY):Xu=ju=0,ua=e),ju)},movementY:function(e){return"movementY"in e?e.movementY:Xu}}),bc=Tt(dr),K2=v({},dr,{dataTransfer:0}),J2=Tt(K2),F2=v({},ra,{relatedTarget:0}),Yu=Tt(F2),$2=v({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),I2=Tt($2),e3=v({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t3=Tt(e3),n3=v({},Wn,{data:0}),_c=Tt(n3),l3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r3[e])?!!t[e]:!1}function Nu(){return u3}var i3=v({},ra,{key:function(e){if(e.key){var t=l3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c3=Tt(i3),o3=v({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=Tt(o3),s3=v({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),f3=Tt(s3),d3=v({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),h3=Tt(d3),m3=v({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p3=Tt(m3),g3=v({},Wn,{newState:0,oldState:0}),y3=Tt(g3),v3=[9,13,27,32],ku=an&&"CompositionEvent"in window,ia=null;an&&"documentMode"in document&&(ia=document.documentMode);var x3=an&&"TextEvent"in window&&!ia,Sc=an&&(!ku||ia&&8<ia&&11>=ia),Tc=" ",Rc=!1;function Dc(e,t){switch(e){case"keyup":return v3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rl=!1;function b3(e,t){switch(e){case"compositionend":return zc(t);case"keypress":return t.which!==32?null:(Rc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Rc?null:e;default:return null}}function _3(e,t){if(Rl)return e==="compositionend"||!ku&&Dc(e,t)?(e=vc(),cr=Uu=Sn=null,Rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var C3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C3[e.type]:t==="textarea"}function wc(e,t,n,l){Sl?Tl?Tl.push(l):Tl=[l]:Sl=l,t=$r(t,"onChange"),0<t.length&&(n=new fr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ca=null,oa=null;function S3(e){ff(e,0)}function hr(e){var t=na(e);if(sc(t))return e}function Oc(e,t){if(e==="change")return t}var Ac=!1;if(an){var qu;if(an){var Lu="oninput"in document;if(!Lu){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Lu=typeof Vc.oninput=="function"}qu=Lu}else qu=!1;Ac=qu&&(!document.documentMode||9<document.documentMode)}function Ec(){ca&&(ca.detachEvent("onpropertychange",Hc),oa=ca=null)}function Hc(e){if(e.propertyName==="value"&&hr(oa)){var t=[];wc(t,oa,e,Hu(e)),yc(S3,t)}}function T3(e,t,n){e==="focusin"?(Ec(),ca=t,oa=n,ca.attachEvent("onpropertychange",Hc)):e==="focusout"&&Ec()}function R3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(oa)}function D3(e,t){if(e==="click")return hr(t)}function z3(e,t){if(e==="input"||e==="change")return hr(t)}function M3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:M3;function sa(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!_t.call(t,a)||!wt(e[a],t[a]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var n=Gc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gc(n)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ur(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ur(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var w3=an&&"documentMode"in document&&11>=document.documentMode,Dl=null,Pu=null,fa=null,Qu=!1;function Xc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||Dl==null||Dl!==ur(l)||(l=Dl,"selectionStart"in l&&Zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&sa(fa,l)||(fa=l,l=$r(Pu,"onSelect"),0<l.length&&(t=new fr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Dl)))}function Kn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zl={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionrun:Kn("Transition","TransitionRun"),transitionstart:Kn("Transition","TransitionStart"),transitioncancel:Kn("Transition","TransitionCancel"),transitionend:Kn("Transition","TransitionEnd")},Wu={},Yc={};an&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete zl.animationend.animation,delete zl.animationiteration.animation,delete zl.animationstart.animation),"TransitionEvent"in window||delete zl.transitionend.transition);function Jn(e){if(Wu[e])return Wu[e];if(!zl[e])return e;var t=zl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yc)return Wu[e]=t[n];return e}var Nc=Jn("animationend"),kc=Jn("animationiteration"),qc=Jn("animationstart"),O3=Jn("transitionrun"),A3=Jn("transitionstart"),V3=Jn("transitioncancel"),Lc=Jn("transitionend"),Zc=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Zt(e,t){Zc.set(e,t),Qn(t,[e])}var Pc=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var n=Pc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cc(t)},Pc.set(e,t),t)}return{value:e,source:t,stack:cc(t)}}var Xt=[],Ml=0,Ju=0;function mr(){for(var e=Ml,t=Ju=Ml=0;t<e;){var n=Xt[t];Xt[t++]=null;var l=Xt[t];Xt[t++]=null;var a=Xt[t];Xt[t++]=null;var r=Xt[t];if(Xt[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}r!==0&&Qc(n,a,r)}}function pr(e,t,n,l){Xt[Ml++]=e,Xt[Ml++]=t,Xt[Ml++]=n,Xt[Ml++]=l,Ju|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Fu(e,t,n,l){return pr(e,t,n,l),gr(e)}function wl(e,t){return pr(e,null,null,t),gr(e)}function Qc(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,l=r.alternate,l!==null&&(l.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Me(n),e=r.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),r):null}function gr(e){if(50<Ba)throw Ba=0,l0=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ol={};function E3(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,l){return new E3(e,t,n,l)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yr(e,t,n,l,a,r){var o=0;if(l=e,typeof e=="function")$u(e)&&(o=1);else if(typeof e=="string")o=G1(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=Ot(31,n,t,a),e.elementType=te,e.lanes=r,e;case w:return Fn(n.children,a,r,t);case Y:o=8,a|=24;break;case B:return e=Ot(12,n,t,a|2),e.elementType=B,e.lanes=r,e;case j:return e=Ot(13,n,t,a),e.elementType=j,e.lanes=r,e;case Q:return e=Ot(19,n,t,a),e.elementType=Q,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case U:o=10;break e;case G:o=9;break e;case L:o=11;break e;case X:o=14;break e;case ce:o=16,l=null;break e}o=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Ot(o,n,t,a),t.elementType=e,t.type=l,t.lanes=r,t}function Fn(e,t,n,l){return e=Ot(7,e,l,t),e.lanes=n,e}function Iu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Al=[],Vl=0,vr=null,xr=0,Yt=[],Nt=0,$n=null,un=1,cn="";function In(e,t){Al[Vl++]=xr,Al[Vl++]=vr,vr=e,xr=t}function Kc(e,t,n){Yt[Nt++]=un,Yt[Nt++]=cn,Yt[Nt++]=$n,$n=e;var l=un;e=cn;var a=32-Me(l)-1;l&=~(1<<a),n+=1;var r=32-Me(t)+a;if(30<r){var o=a-a%5;r=(l&(1<<o)-1).toString(32),l>>=o,a-=o,un=1<<32-Me(t)+a|n<<a|l,cn=r+e}else un=1<<r|n<<a|l,cn=e}function ti(e){e.return!==null&&(In(e,1),Kc(e,1,0))}function ni(e){for(;e===vr;)vr=Al[--Vl],Al[Vl]=null,xr=Al[--Vl],Al[Vl]=null;for(;e===$n;)$n=Yt[--Nt],Yt[Nt]=null,cn=Yt[--Nt],Yt[Nt]=null,un=Yt[--Nt],Yt[Nt]=null}var Ct=null,Fe=null,Ve=!1,el=null,Kt=!1,li=Error(i(519));function tl(e){var t=Error(i(418,""));throw ma(jt(t,e)),li}function Jc(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[yt]=e,t[St]=l,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<ja.length;n++)Te(ja[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),fc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),rr(t);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),hc(t,l.value,l.defaultValue,l.children),rr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||pf(t.textContent,n)?(l.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),l.onScroll!=null&&Te("scroll",t),l.onScrollEnd!=null&&Te("scrollend",t),l.onClick!=null&&(t.onclick=Ir),t=!0):t=!1,t||tl(e)}function Fc(e){for(Ct=e.return;Ct;)switch(Ct.tag){case 5:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:Ct=Ct.return}}function da(e){if(e!==Ct)return!1;if(!Ve)return Fc(e),Ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||x0(e.type,e.memoizedProps)),n=!n),n&&Fe&&tl(e),Fc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Fe=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Fe=null}}else t===27?(t=Fe,Xn(e.type)?(e=S0,S0=null,Fe=e):Fe=t):Fe=Ct?Qt(e.stateNode.nextSibling):null;return!0}function ha(){Fe=Ct=null,Ve=!1}function $c(){var e=el;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),el=null),e}function ma(e){el===null?el=[e]:el.push(e)}var ai=A(null),nl=null,on=null;function Tn(e,t,n){N(ai,t._currentValue),t._currentValue=n}function sn(e){e._currentValue=ai.current,P(ai)}function ri(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ui(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var o=a.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=a;for(var b=0;b<t.length;b++)if(d.context===t[b]){r.lanes|=n,d=r.alternate,d!==null&&(d.lanes|=n),ri(r.return,n,e),l||(o=null);break e}r=d.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),ri(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function pa(e,t,n,l){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var d=a.type;wt(a.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(a===Be.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(La):e=[La])}a=a.return}e!==null&&ui(t,e,n,l),t.flags|=262144}function br(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ll(e){nl=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return Ic(nl,e)}function _r(e,t){return nl===null&&ll(e),Ic(e,t)}function Ic(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(i(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var H3=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G3=s.unstable_scheduleCallback,B3=s.unstable_NormalPriority,at={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ii(){return{controller:new H3,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&G3(B3,function(){e.controller.abort()})}var ya=null,ci=0,El=0,Hl=null;function U3(e,t){if(ya===null){var n=ya=[];ci=0,El=s0(),Hl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return ci++,t.then(eo,eo),t}function eo(){if(--ci===0&&ya!==null){Hl!==null&&(Hl.status="fulfilled");var e=ya;ya=null,El=0,Hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function j3(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var to=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&U3(e,t),to!==null&&to(e,t)};var al=A(null);function oi(){var e=al.current;return e!==null?e:Pe.pooledCache}function Cr(e,t){t===null?N(al,al.current):N(al,t.pool)}function no(){var e=oi();return e===null?null:{parent:at._currentValue,pool:e}}var va=Error(i(460)),lo=Error(i(474)),Sr=Error(i(542)),si={then:function(){}};function ao(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tr(){}function ro(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Tr,Tr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,io(e),e;default:if(typeof t.status=="string")t.then(Tr,Tr);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,io(e),e}throw xa=t,va}}var xa=null;function uo(){if(xa===null)throw Error(i(459));var e=xa;return xa=null,e}function io(e){if(e===va||e===Sr)throw Error(i(483))}var Rn=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=gr(e),Qc(e,null,n),t}return pr(e,l,t,n),gr(e)}function ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ec(e,n)}}function hi(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mi=!1;function _a(){if(mi){var e=Hl;if(e!==null)throw e}}function Ca(e,t,n,l){mi=!1;var a=e.updateQueue;Rn=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var b=d,O=b.next;b.next=null,o===null?r=O:o.next=O,o=b;var k=e.alternate;k!==null&&(k=k.updateQueue,d=k.lastBaseUpdate,d!==o&&(d===null?k.firstBaseUpdate=O:d.next=O,k.lastBaseUpdate=b))}if(r!==null){var W=a.baseState;o=0,k=O=b=null,d=r;do{var V=d.lane&-536870913,E=V!==d.lane;if(E?(Oe&V)===V:(l&V)===V){V!==0&&V===El&&(mi=!0),k!==null&&(k=k.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var de=e,oe=d;V=t;var ke=n;switch(oe.tag){case 1:if(de=oe.payload,typeof de=="function"){W=de.call(ke,W,V);break e}W=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=oe.payload,V=typeof de=="function"?de.call(ke,W,V):de,V==null)break e;W=v({},W,V);break e;case 2:Rn=!0}}V=d.callback,V!==null&&(e.flags|=64,E&&(e.flags|=8192),E=a.callbacks,E===null?a.callbacks=[V]:E.push(V))}else E={lane:V,tag:d.tag,payload:d.payload,callback:d.callback,next:null},k===null?(O=k=E,b=W):k=k.next=E,o|=V;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;E=d,d=E.next,E.next=null,a.lastBaseUpdate=E,a.shared.pending=null}}while(!0);k===null&&(b=W),a.baseState=b,a.firstBaseUpdate=O,a.lastBaseUpdate=k,r===null&&(a.shared.lanes=0),Gn|=o,e.lanes=o,e.memoizedState=W}}function co(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function oo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)co(n[e],t)}var Gl=A(null),Rr=A(0);function so(e,t){e=yn,N(Rr,e),N(Gl,t),yn=e|t.baseLanes}function pi(){N(Rr,yn),N(Gl,Gl.current)}function gi(){yn=Rr.current,P(Gl),P(Rr)}var Mn=0,be=null,Ye=null,tt=null,Dr=!1,Bl=!1,rl=!1,zr=0,Sa=0,Ul=null,X3=0;function Ie(){throw Error(i(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function vi(e,t,n,l,a,r){return Mn=r,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Wo:Ko,rl=!1,r=n(l,a),rl=!1,Bl&&(r=ho(t,n,l,a)),fo(e),r}function fo(e){H.H=Er;var t=Ye!==null&&Ye.next!==null;if(Mn=0,tt=Ye=be=null,Dr=!1,Sa=0,Ul=null,t)throw Error(i(300));e===null||ct||(e=e.dependencies,e!==null&&br(e)&&(ct=!0))}function ho(e,t,n,l){be=e;var a=0;do{if(Bl&&(Ul=null),Sa=0,Bl=!1,25<=a)throw Error(i(301));if(a+=1,tt=Ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}H.H=P3,r=t(n,l)}while(Bl);return r}function Y3(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Ta(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(be.flags|=1024),t}function xi(){var e=zr!==0;return zr=0,e}function bi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _i(e){if(Dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dr=!1}Mn=0,tt=Ye=be=null,Bl=!1,Sa=zr=0,Ul=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?be.memoizedState=tt=e:tt=tt.next=e,tt}function nt(){if(Ye===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=tt===null?be.memoizedState:tt.next;if(t!==null)tt=t,Ye=e;else{if(e===null)throw be.alternate===null?Error(i(467)):Error(i(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?be.memoizedState=tt=e:tt=tt.next=e}return tt}function Ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ta(e){var t=Sa;return Sa+=1,Ul===null&&(Ul=[]),e=ro(Ul,e,t),t=be,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Wo:Ko),e}function Mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ta(e);if(e.$$typeof===U)return vt(e)}throw Error(i(438,String(e)))}function Si(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=be.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ci(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ge;return t.index++,n}function fn(e,t){return typeof t=="function"?t(e):t}function wr(e){var t=nt();return Ti(t,Ye,e)}function Ti(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,r=l.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}t.baseQueue=a=r,l.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var d=o=null,b=null,O=t,k=!1;do{var W=O.lane&-536870913;if(W!==O.lane?(Oe&W)===W:(Mn&W)===W){var V=O.revertLane;if(V===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),W===El&&(k=!0);else if((Mn&V)===V){O=O.next,V===El&&(k=!0);continue}else W={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},b===null?(d=b=W,o=r):b=b.next=W,be.lanes|=V,Gn|=V;W=O.action,rl&&n(r,W),r=O.hasEagerState?O.eagerState:n(r,W)}else V={lane:W,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},b===null?(d=b=V,o=r):b=b.next=V,be.lanes|=W,Gn|=W;O=O.next}while(O!==null&&O!==t);if(b===null?o=r:b.next=d,!wt(r,e.memoizedState)&&(ct=!0,k&&(n=Hl,n!==null)))throw n;e.memoizedState=r,e.baseState=o,e.baseQueue=b,l.lastRenderedState=r}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ri(e){var t=nt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);wt(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,l]}function mo(e,t,n){var l=be,a=nt(),r=Ve;if(r){if(n===void 0)throw Error(i(407));n=n()}else n=t();var o=!wt((Ye||a).memoizedState,n);o&&(a.memoizedState=n,ct=!0),a=a.queue;var d=yo.bind(null,l,a,e);if(Ra(2048,8,d,[e]),a.getSnapshot!==t||o||tt!==null&&tt.memoizedState.tag&1){if(l.flags|=2048,jl(9,Or(),go.bind(null,l,a,n,t),null),Pe===null)throw Error(i(349));r||(Mn&124)!==0||po(l,t,n)}return n}function po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=Ci(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function go(e,t,n,l){t.value=n,t.getSnapshot=l,vo(t)&&xo(e)}function yo(e,t,n){return n(function(){vo(t)&&xo(e)})}function vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function xo(e){var t=wl(e,2);t!==null&&Gt(t,e,2)}function Di(e){var t=Rt();if(typeof e=="function"){var n=e;if(e=n(),rl){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:e},t}function bo(e,t,n,l){return e.baseState=n,Ti(e,Ye,typeof l=="function"?l:fn)}function N3(e,t,n,l,a){if(Vr(e))throw Error(i(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};H.T!==null?n(!0):r.isTransition=!1,l(r),n=t.pending,n===null?(r.next=t.pending=r,_o(t,r)):(r.next=n.next,t.pending=n.next=r)}}function _o(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var r=H.T,o={};H.T=o;try{var d=n(a,l),b=H.S;b!==null&&b(o,d),Co(e,t,d)}catch(O){zi(e,t,O)}finally{H.T=r}}else try{r=n(a,l),Co(e,t,r)}catch(O){zi(e,t,O)}}function Co(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){So(e,t,l)},function(l){return zi(e,t,l)}):So(e,t,n)}function So(e,t,n){t.status="fulfilled",t.value=n,To(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_o(e,n)))}function zi(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,To(t),t=t.next;while(t!==l)}e.action=null}function To(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ro(e,t){return t}function Do(e,t){if(Ve){var n=Pe.formState;if(n!==null){e:{var l=be;if(Ve){if(Fe){t:{for(var a=Fe,r=Kt;a.nodeType!==8;){if(!r){a=null;break t}if(a=Qt(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Fe=Qt(a.nextSibling),l=a.data==="F!";break e}}tl(l)}l=!1}l&&(t=n[0])}}return n=Rt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},n.queue=l,n=Zo.bind(null,be,l),l.dispatch=n,l=Di(!1),r=Vi.bind(null,be,!1,l.queue),l=Rt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=N3.bind(null,be,a,r,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function zo(e){var t=nt();return Mo(t,Ye,e)}function Mo(e,t,n){if(t=Ti(e,t,Ro)[0],e=wr(fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ta(t)}catch(o){throw o===va?Sr:o}else l=t;t=nt();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(be.flags|=2048,jl(9,Or(),k3.bind(null,a,n),null)),[l,r,e]}function k3(e,t){e.action=t}function wo(e){var t=nt(),n=Ye;if(n!==null)return Mo(t,n,e);nt(),t=t.memoizedState,n=nt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function jl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=be.updateQueue,t===null&&(t=Ci(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Or(){return{destroy:void 0,resource:void 0}}function Oo(){return nt().memoizedState}function Ar(e,t,n,l){var a=Rt();l=l===void 0?null:l,be.flags|=e,a.memoizedState=jl(1|t,Or(),n,l)}function Ra(e,t,n,l){var a=nt();l=l===void 0?null:l;var r=a.memoizedState.inst;Ye!==null&&l!==null&&yi(l,Ye.memoizedState.deps)?a.memoizedState=jl(t,r,n,l):(be.flags|=e,a.memoizedState=jl(1|t,r,n,l))}function Ao(e,t){Ar(8390656,8,e,t)}function Vo(e,t){Ra(2048,8,e,t)}function Eo(e,t){return Ra(4,2,e,t)}function Ho(e,t){return Ra(4,4,e,t)}function Go(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bo(e,t,n){n=n!=null?n.concat([e]):null,Ra(4,4,Go.bind(null,t,e),n)}function Mi(){}function Uo(e,t){var n=nt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&yi(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function jo(e,t){var n=nt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&yi(t,l[1]))return l[0];if(l=e(),rl){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[l,t],l}function wi(e,t,n){return n===void 0||(Mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ns(),be.lanes|=e,Gn|=e,n)}function Xo(e,t,n,l){return wt(n,t)?n:Gl.current!==null?(e=wi(e,n,l),wt(e,t)||(ct=!0),e):(Mn&42)===0?(ct=!0,e.memoizedState=n):(e=Ns(),be.lanes|=e,Gn|=e,t)}function Yo(e,t,n,l,a){var r=K.p;K.p=r!==0&&8>r?r:8;var o=H.T,d={};H.T=d,Vi(e,!1,t,n);try{var b=a(),O=H.S;if(O!==null&&O(d,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var k=j3(b,l);Da(e,t,k,Ht(e))}else Da(e,t,l,Ht(e))}catch(W){Da(e,t,{then:function(){},status:"rejected",reason:W},Ht())}finally{K.p=r,H.T=o}}function q3(){}function Oi(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=No(e).queue;Yo(e,a,t,$,n===null?q3:function(){return ko(e),n(l)})}function No(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ko(e){var t=No(e).next.queue;Da(e,t,{},Ht())}function Ai(){return vt(La)}function qo(){return nt().memoizedState}function Lo(){return nt().memoizedState}function L3(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Dn(n);var l=zn(t,e,n);l!==null&&(Gt(l,t,n),ba(l,t,n)),t={cache:ii()},e.payload=t;return}t=t.return}}function Z3(e,t,n){var l=Ht();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vr(e)?Po(t,n):(n=Fu(e,t,n,l),n!==null&&(Gt(n,e,l),Qo(n,t,l)))}function Zo(e,t,n){var l=Ht();Da(e,t,n,l)}function Da(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vr(e))Po(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,d=r(o,n);if(a.hasEagerState=!0,a.eagerState=d,wt(d,o))return pr(e,t,a,0),Pe===null&&mr(),!1}catch{}finally{}if(n=Fu(e,t,a,l),n!==null)return Gt(n,e,l),Qo(n,t,l),!0}return!1}function Vi(e,t,n,l){if(l={lane:2,revertLane:s0(),action:l,hasEagerState:!1,eagerState:null,next:null},Vr(e)){if(t)throw Error(i(479))}else t=Fu(e,n,l,2),t!==null&&Gt(t,e,2)}function Vr(e){var t=e.alternate;return e===be||t!==null&&t===be}function Po(e,t){Bl=Dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ec(e,n)}}var Er={readContext:vt,use:Mr,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie},Wo={readContext:vt,use:Mr,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Ao,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ar(4194308,4,Go.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){Ar(4,2,e,t)},useMemo:function(e,t){var n=Rt();t=t===void 0?null:t;var l=e();if(rl){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Rt();if(n!==void 0){var a=n(t);if(rl){We(!0);try{n(t)}finally{We(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Z3.bind(null,be,e),[l.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Di(e);var t=e.queue,n=Zo.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Mi,useDeferredValue:function(e,t){var n=Rt();return wi(n,e,t)},useTransition:function(){var e=Di(!1);return e=Yo.bind(null,be,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=be,a=Rt();if(Ve){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Pe===null)throw Error(i(349));(Oe&124)!==0||po(l,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Ao(yo.bind(null,l,r,e),[e]),l.flags|=2048,jl(9,Or(),go.bind(null,l,r,n,t),null),n},useId:function(){var e=Rt(),t=Pe.identifierPrefix;if(Ve){var n=cn,l=un;n=(l&~(1<<32-Me(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=X3++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ai,useFormState:Do,useActionState:Do,useOptimistic:function(e){var t=Rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vi.bind(null,be,!0,n),n.dispatch=t,[e,t]},useMemoCache:Si,useCacheRefresh:function(){return Rt().memoizedState=L3.bind(null,be)}},Ko={readContext:vt,use:Mr,useCallback:Uo,useContext:vt,useEffect:Vo,useImperativeHandle:Bo,useInsertionEffect:Eo,useLayoutEffect:Ho,useMemo:jo,useReducer:wr,useRef:Oo,useState:function(){return wr(fn)},useDebugValue:Mi,useDeferredValue:function(e,t){var n=nt();return Xo(n,Ye.memoizedState,e,t)},useTransition:function(){var e=wr(fn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Ta(e),t]},useSyncExternalStore:mo,useId:qo,useHostTransitionStatus:Ai,useFormState:zo,useActionState:zo,useOptimistic:function(e,t){var n=nt();return bo(n,Ye,e,t)},useMemoCache:Si,useCacheRefresh:Lo},P3={readContext:vt,use:Mr,useCallback:Uo,useContext:vt,useEffect:Vo,useImperativeHandle:Bo,useInsertionEffect:Eo,useLayoutEffect:Ho,useMemo:jo,useReducer:Ri,useRef:Oo,useState:function(){return Ri(fn)},useDebugValue:Mi,useDeferredValue:function(e,t){var n=nt();return Ye===null?wi(n,e,t):Xo(n,Ye.memoizedState,e,t)},useTransition:function(){var e=Ri(fn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Ta(e),t]},useSyncExternalStore:mo,useId:qo,useHostTransitionStatus:Ai,useFormState:wo,useActionState:wo,useOptimistic:function(e,t){var n=nt();return Ye!==null?bo(n,Ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Si,useCacheRefresh:Lo},Xl=null,za=0;function Hr(e){var t=za;return za+=1,Xl===null&&(Xl=[]),ro(Xl,e,t)}function Ma(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gr(e,t){throw t.$$typeof===C?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jo(e){var t=e._init;return t(e._payload)}function Fo(e){function t(z,T){if(e){var M=z.deletions;M===null?(z.deletions=[T],z.flags|=16):M.push(T)}}function n(z,T){if(!e)return null;for(;T!==null;)t(z,T),T=T.sibling;return null}function l(z){for(var T=new Map;z!==null;)z.key!==null?T.set(z.key,z):T.set(z.index,z),z=z.sibling;return T}function a(z,T){return z=rn(z,T),z.index=0,z.sibling=null,z}function r(z,T,M){return z.index=M,e?(M=z.alternate,M!==null?(M=M.index,M<T?(z.flags|=67108866,T):M):(z.flags|=67108866,T)):(z.flags|=1048576,T)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function d(z,T,M,Z){return T===null||T.tag!==6?(T=Iu(M,z.mode,Z),T.return=z,T):(T=a(T,M),T.return=z,T)}function b(z,T,M,Z){var ne=M.type;return ne===w?k(z,T,M.props.children,Z,M.key):T!==null&&(T.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ce&&Jo(ne)===T.type)?(T=a(T,M.props),Ma(T,M),T.return=z,T):(T=yr(M.type,M.key,M.props,null,z.mode,Z),Ma(T,M),T.return=z,T)}function O(z,T,M,Z){return T===null||T.tag!==4||T.stateNode.containerInfo!==M.containerInfo||T.stateNode.implementation!==M.implementation?(T=ei(M,z.mode,Z),T.return=z,T):(T=a(T,M.children||[]),T.return=z,T)}function k(z,T,M,Z,ne){return T===null||T.tag!==7?(T=Fn(M,z.mode,Z,ne),T.return=z,T):(T=a(T,M),T.return=z,T)}function W(z,T,M){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Iu(""+T,z.mode,M),T.return=z,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _:return M=yr(T.type,T.key,T.props,null,z.mode,M),Ma(M,T),M.return=z,M;case D:return T=ei(T,z.mode,M),T.return=z,T;case ce:var Z=T._init;return T=Z(T._payload),W(z,T,M)}if(pe(T)||ue(T))return T=Fn(T,z.mode,M,null),T.return=z,T;if(typeof T.then=="function")return W(z,Hr(T),M);if(T.$$typeof===U)return W(z,_r(z,T),M);Gr(z,T)}return null}function V(z,T,M,Z){var ne=T!==null?T.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ne!==null?null:d(z,T,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _:return M.key===ne?b(z,T,M,Z):null;case D:return M.key===ne?O(z,T,M,Z):null;case ce:return ne=M._init,M=ne(M._payload),V(z,T,M,Z)}if(pe(M)||ue(M))return ne!==null?null:k(z,T,M,Z,null);if(typeof M.then=="function")return V(z,T,Hr(M),Z);if(M.$$typeof===U)return V(z,T,_r(z,M),Z);Gr(z,M)}return null}function E(z,T,M,Z,ne){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(M)||null,d(T,z,""+Z,ne);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case _:return z=z.get(Z.key===null?M:Z.key)||null,b(T,z,Z,ne);case D:return z=z.get(Z.key===null?M:Z.key)||null,O(T,z,Z,ne);case ce:var Ce=Z._init;return Z=Ce(Z._payload),E(z,T,M,Z,ne)}if(pe(Z)||ue(Z))return z=z.get(M)||null,k(T,z,Z,ne,null);if(typeof Z.then=="function")return E(z,T,M,Hr(Z),ne);if(Z.$$typeof===U)return E(z,T,M,_r(T,Z),ne);Gr(T,Z)}return null}function de(z,T,M,Z){for(var ne=null,Ce=null,ie=T,fe=T=0,st=null;ie!==null&&fe<M.length;fe++){ie.index>fe?(st=ie,ie=null):st=ie.sibling;var Ae=V(z,ie,M[fe],Z);if(Ae===null){ie===null&&(ie=st);break}e&&ie&&Ae.alternate===null&&t(z,ie),T=r(Ae,T,fe),Ce===null?ne=Ae:Ce.sibling=Ae,Ce=Ae,ie=st}if(fe===M.length)return n(z,ie),Ve&&In(z,fe),ne;if(ie===null){for(;fe<M.length;fe++)ie=W(z,M[fe],Z),ie!==null&&(T=r(ie,T,fe),Ce===null?ne=ie:Ce.sibling=ie,Ce=ie);return Ve&&In(z,fe),ne}for(ie=l(ie);fe<M.length;fe++)st=E(ie,z,fe,M[fe],Z),st!==null&&(e&&st.alternate!==null&&ie.delete(st.key===null?fe:st.key),T=r(st,T,fe),Ce===null?ne=st:Ce.sibling=st,Ce=st);return e&&ie.forEach(function(Ln){return t(z,Ln)}),Ve&&In(z,fe),ne}function oe(z,T,M,Z){if(M==null)throw Error(i(151));for(var ne=null,Ce=null,ie=T,fe=T=0,st=null,Ae=M.next();ie!==null&&!Ae.done;fe++,Ae=M.next()){ie.index>fe?(st=ie,ie=null):st=ie.sibling;var Ln=V(z,ie,Ae.value,Z);if(Ln===null){ie===null&&(ie=st);break}e&&ie&&Ln.alternate===null&&t(z,ie),T=r(Ln,T,fe),Ce===null?ne=Ln:Ce.sibling=Ln,Ce=Ln,ie=st}if(Ae.done)return n(z,ie),Ve&&In(z,fe),ne;if(ie===null){for(;!Ae.done;fe++,Ae=M.next())Ae=W(z,Ae.value,Z),Ae!==null&&(T=r(Ae,T,fe),Ce===null?ne=Ae:Ce.sibling=Ae,Ce=Ae);return Ve&&In(z,fe),ne}for(ie=l(ie);!Ae.done;fe++,Ae=M.next())Ae=E(ie,z,fe,Ae.value,Z),Ae!==null&&(e&&Ae.alternate!==null&&ie.delete(Ae.key===null?fe:Ae.key),T=r(Ae,T,fe),Ce===null?ne=Ae:Ce.sibling=Ae,Ce=Ae);return e&&ie.forEach(function(Q1){return t(z,Q1)}),Ve&&In(z,fe),ne}function ke(z,T,M,Z){if(typeof M=="object"&&M!==null&&M.type===w&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case _:e:{for(var ne=M.key;T!==null;){if(T.key===ne){if(ne=M.type,ne===w){if(T.tag===7){n(z,T.sibling),Z=a(T,M.props.children),Z.return=z,z=Z;break e}}else if(T.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ce&&Jo(ne)===T.type){n(z,T.sibling),Z=a(T,M.props),Ma(Z,M),Z.return=z,z=Z;break e}n(z,T);break}else t(z,T);T=T.sibling}M.type===w?(Z=Fn(M.props.children,z.mode,Z,M.key),Z.return=z,z=Z):(Z=yr(M.type,M.key,M.props,null,z.mode,Z),Ma(Z,M),Z.return=z,z=Z)}return o(z);case D:e:{for(ne=M.key;T!==null;){if(T.key===ne)if(T.tag===4&&T.stateNode.containerInfo===M.containerInfo&&T.stateNode.implementation===M.implementation){n(z,T.sibling),Z=a(T,M.children||[]),Z.return=z,z=Z;break e}else{n(z,T);break}else t(z,T);T=T.sibling}Z=ei(M,z.mode,Z),Z.return=z,z=Z}return o(z);case ce:return ne=M._init,M=ne(M._payload),ke(z,T,M,Z)}if(pe(M))return de(z,T,M,Z);if(ue(M)){if(ne=ue(M),typeof ne!="function")throw Error(i(150));return M=ne.call(M),oe(z,T,M,Z)}if(typeof M.then=="function")return ke(z,T,Hr(M),Z);if(M.$$typeof===U)return ke(z,T,_r(z,M),Z);Gr(z,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,T!==null&&T.tag===6?(n(z,T.sibling),Z=a(T,M),Z.return=z,z=Z):(n(z,T),Z=Iu(M,z.mode,Z),Z.return=z,z=Z),o(z)):n(z,T)}return function(z,T,M,Z){try{za=0;var ne=ke(z,T,M,Z);return Xl=null,ne}catch(ie){if(ie===va||ie===Sr)throw ie;var Ce=Ot(29,ie,null,z.mode);return Ce.lanes=Z,Ce.return=z,Ce}finally{}}}var Yl=Fo(!0),$o=Fo(!1),kt=A(null),Jt=null;function wn(e){var t=e.alternate;N(rt,rt.current&1),N(kt,e),Jt===null&&(t===null||Gl.current!==null||t.memoizedState!==null)&&(Jt=e)}function Io(e){if(e.tag===22){if(N(rt,rt.current),N(kt,e),Jt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Jt=e)}}else On()}function On(){N(rt,rt.current),N(kt,kt.current)}function dn(e){P(kt),Jt===e&&(Jt=null),P(rt)}var rt=A(0);function Br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||C0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ei(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hi={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ht(),a=Dn(l);a.payload=t,n!=null&&(a.callback=n),t=zn(e,a,l),t!==null&&(Gt(t,e,l),ba(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ht(),a=Dn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=zn(e,a,l),t!==null&&(Gt(t,e,l),ba(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),l=Dn(n);l.tag=2,t!=null&&(l.callback=t),t=zn(e,l,n),t!==null&&(Gt(t,e,n),ba(t,e,n))}};function es(e,t,n,l,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!sa(n,l)||!sa(a,r):!0}function ts(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function ul(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Ur=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ns(e){Ur(e)}function ls(e){console.error(e)}function as(e){Ur(e)}function jr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function rs(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Gi(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){jr(e,t)},n}function us(e){return e=Dn(e),e.tag=3,e}function is(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;e.payload=function(){return a(r)},e.callback=function(){rs(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){rs(t,n,l),typeof a!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Q3(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&pa(t,n,a,!0),n=kt.current,n!==null){switch(n.tag){case 13:return Jt===null?r0():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===si?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),i0(e,l,a)),!1;case 22:return n.flags|=65536,l===si?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),i0(e,l,a)),!1}throw Error(i(435,n.tag))}return i0(e,l,a),r0(),!1}if(Ve)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==li&&(e=Error(i(422),{cause:l}),ma(jt(e,n)))):(l!==li&&(t=Error(i(423),{cause:l}),ma(jt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=jt(l,n),a=Gi(e.stateNode,l,a),hi(e,a),$e!==4&&($e=2)),!1;var r=Error(i(520),{cause:l});if(r=jt(r,n),Ga===null?Ga=[r]:Ga.push(r),$e!==4&&($e=2),t===null)return!0;l=jt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Gi(n.stateNode,l,e),hi(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=us(a),is(a,e,n,l),hi(n,a),!1}n=n.return}while(n!==null);return!1}var cs=Error(i(461)),ct=!1;function ht(e,t,n,l){t.child=e===null?$o(t,null,n,l):Yl(t,e.child,n,l)}function os(e,t,n,l,a){n=n.render;var r=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return ll(t),l=vi(e,t,n,o,r,a),d=xi(),e!==null&&!ct?(bi(e,t,a),hn(e,t,a)):(Ve&&d&&ti(t),t.flags|=1,ht(e,t,l,a),t.child)}function ss(e,t,n,l,a){if(e===null){var r=n.type;return typeof r=="function"&&!$u(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,fs(e,t,r,l,a)):(e=yr(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!qi(e,a)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,l)&&e.ref===t.ref)return hn(e,t,a)}return t.flags|=1,e=rn(r,l),e.ref=t.ref,e.return=t,t.child=e}function fs(e,t,n,l,a){if(e!==null){var r=e.memoizedProps;if(sa(r,l)&&e.ref===t.ref)if(ct=!1,t.pendingProps=l=r,qi(e,a))(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,hn(e,t,a)}return Bi(e,t,n,l,a)}function ds(e,t,n){var l=t.pendingProps,a=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return hs(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cr(t,r!==null?r.cachePool:null),r!==null?so(t,r):pi(),Io(t);else return t.lanes=t.childLanes=536870912,hs(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Cr(t,r.cachePool),so(t,r),On(),t.memoizedState=null):(e!==null&&Cr(t,null),pi(),On());return ht(e,t,a,n),t.child}function hs(e,t,n,l){var a=oi();return a=a===null?null:{parent:at._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Cr(t,null),pi(),Io(t),e!==null&&pa(e,t,l,!0),null}function Xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bi(e,t,n,l,a){return ll(t),n=vi(e,t,n,l,void 0,a),l=xi(),e!==null&&!ct?(bi(e,t,a),hn(e,t,a)):(Ve&&l&&ti(t),t.flags|=1,ht(e,t,n,a),t.child)}function ms(e,t,n,l,a,r){return ll(t),t.updateQueue=null,n=ho(t,l,n,a),fo(e),l=xi(),e!==null&&!ct?(bi(e,t,r),hn(e,t,r)):(Ve&&l&&ti(t),t.flags|=1,ht(e,t,n,r),t.child)}function ps(e,t,n,l,a){if(ll(t),t.stateNode===null){var r=Ol,o=n.contextType;typeof o=="object"&&o!==null&&(r=vt(o)),r=new n(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hi,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},fi(t),o=n.contextType,r.context=typeof o=="object"&&o!==null?vt(o):Ol,r.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ei(t,n,o,l),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Hi.enqueueReplaceState(r,r.state,null),Ca(t,l,r,a),_a(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,b=ul(n,d);r.props=b;var O=r.context,k=n.contextType;o=Ol,typeof k=="object"&&k!==null&&(o=vt(k));var W=n.getDerivedStateFromProps;k=typeof W=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,k||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||O!==o)&&ts(t,r,l,o),Rn=!1;var V=t.memoizedState;r.state=V,Ca(t,l,r,a),_a(),O=t.memoizedState,d||V!==O||Rn?(typeof W=="function"&&(Ei(t,n,W,l),O=t.memoizedState),(b=Rn||es(t,n,b,l,V,O,o))?(k||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=O),r.props=l,r.state=O,r.context=o,l=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,di(e,t),o=t.memoizedProps,k=ul(n,o),r.props=k,W=t.pendingProps,V=r.context,O=n.contextType,b=Ol,typeof O=="object"&&O!==null&&(b=vt(O)),d=n.getDerivedStateFromProps,(O=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==W||V!==b)&&ts(t,r,l,b),Rn=!1,V=t.memoizedState,r.state=V,Ca(t,l,r,a),_a();var E=t.memoizedState;o!==W||V!==E||Rn||e!==null&&e.dependencies!==null&&br(e.dependencies)?(typeof d=="function"&&(Ei(t,n,d,l),E=t.memoizedState),(k=Rn||es(t,n,k,l,V,E,b)||e!==null&&e.dependencies!==null&&br(e.dependencies))?(O||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,E,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,E,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=E),r.props=l,r.state=E,r.context=b,l=k):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Xr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Yl(t,e.child,null,a),t.child=Yl(t,null,n,a)):ht(e,t,n,a),t.memoizedState=r.state,e=t.child):e=hn(e,t,a),e}function gs(e,t,n,l){return ha(),t.flags|=256,ht(e,t,n,l),t.child}var Ui={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ji(e){return{baseLanes:e,cachePool:no()}}function Xi(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=qt),e}function ys(e,t,n){var l=t.pendingProps,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(rt.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ve){if(a?wn(t):On(),Ve){var d=Fe,b;if(b=d){e:{for(b=d,d=Kt;b.nodeType!==8;){if(!d){d=null;break e}if(b=Qt(b.nextSibling),b===null){d=null;break e}}d=b}d!==null?(t.memoizedState={dehydrated:d,treeContext:$n!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},b=Ot(18,null,null,0),b.stateNode=d,b.return=t,t.child=b,Ct=t,Fe=null,b=!0):b=!1}b||tl(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return C0(d)?t.lanes=32:t.lanes=536870912,null;dn(t)}return d=l.children,l=l.fallback,a?(On(),a=t.mode,d=Yr({mode:"hidden",children:d},a),l=Fn(l,a,n,null),d.return=t,l.return=t,d.sibling=l,t.child=d,a=t.child,a.memoizedState=ji(n),a.childLanes=Xi(e,o,n),t.memoizedState=Ui,l):(wn(t),Yi(t,d))}if(b=e.memoizedState,b!==null&&(d=b.dehydrated,d!==null)){if(r)t.flags&256?(wn(t),t.flags&=-257,t=Ni(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),a=l.fallback,d=t.mode,l=Yr({mode:"visible",children:l.children},d),a=Fn(a,d,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Yl(t,e.child,null,n),l=t.child,l.memoizedState=ji(n),l.childLanes=Xi(e,o,n),t.memoizedState=Ui,t=a);else if(wn(t),C0(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var O=o.dgst;o=O,l=Error(i(419)),l.stack="",l.digest=o,ma({value:l,source:null,stack:null}),t=Ni(e,t,n)}else if(ct||pa(e,t,n,!1),o=(n&e.childLanes)!==0,ct||o){if(o=Pe,o!==null&&(l=n&-n,l=(l&42)!==0?1:Su(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,wl(e,l),Gt(o,e,l),cs;d.data==="$?"||r0(),t=Ni(e,t,n)}else d.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Fe=Qt(d.nextSibling),Ct=t,Ve=!0,el=null,Kt=!1,e!==null&&(Yt[Nt++]=un,Yt[Nt++]=cn,Yt[Nt++]=$n,un=e.id,cn=e.overflow,$n=t),t=Yi(t,l.children),t.flags|=4096);return t}return a?(On(),a=l.fallback,d=t.mode,b=e.child,O=b.sibling,l=rn(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,O!==null?a=rn(O,a):(a=Fn(a,d,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,d=e.child.memoizedState,d===null?d=ji(n):(b=d.cachePool,b!==null?(O=at._currentValue,b=b.parent!==O?{parent:O,pool:O}:b):b=no(),d={baseLanes:d.baseLanes|n,cachePool:b}),a.memoizedState=d,a.childLanes=Xi(e,o,n),t.memoizedState=Ui,l):(wn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Yi(e,t){return t=Yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ni(e,t,n){return Yl(t,e.child,null,n),e=Yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vs(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ri(e.return,t,n)}function ki(e,t,n,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a)}function xs(e,t,n){var l=t.pendingProps,a=l.revealOrder,r=l.tail;if(ht(e,t,l.children,n),l=rt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vs(e,n,t);else if(e.tag===19)vs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(N(rt,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Br(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ki(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Br(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ki(t,!0,n,null,r);break;case"together":ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&br(e)))}function W3(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Tn(t,at,e.memoizedState.cache),ha();break;case 27:case 5:ut(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Tn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ys(e,t,n):(wn(t),e=hn(e,t,n),e!==null?e.sibling:null);wn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(pa(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return xs(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(rt,rt.current),l)break;return null;case 22:case 23:return t.lanes=0,ds(e,t,n);case 24:Tn(t,at,e.memoizedState.cache)}return hn(e,t,n)}function bs(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ct=!0;else{if(!qi(e,n)&&(t.flags&128)===0)return ct=!1,W3(e,t,n);ct=(e.flags&131072)!==0}else ct=!1,Ve&&(t.flags&1048576)!==0&&Kc(t,xr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")$u(l)?(e=ul(l,e),t.tag=1,t=ps(null,t,l,e,n)):(t.tag=0,t=Bi(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===L){t.tag=11,t=os(null,t,l,e,n);break e}else if(a===X){t.tag=14,t=ss(null,t,l,e,n);break e}}throw t=we(l)||l,Error(i(306,t,""))}}return t;case 0:return Bi(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=ul(l,t.pendingProps),ps(e,t,l,a,n);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var r=t.memoizedState;a=r.element,di(e,t),Ca(t,l,null,n);var o=t.memoizedState;if(l=o.cache,Tn(t,at,l),l!==r.cache&&ui(t,[at],n,!0),_a(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=gs(e,t,l,n);break e}else if(l!==a){a=jt(Error(i(424)),t),ma(a),t=gs(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=Qt(e.firstChild),Ct=t,Ve=!0,el=null,Kt=!0,n=$o(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ha(),l===a){t=hn(e,t,n);break e}ht(e,t,l,n)}t=t.child}return t;case 26:return Xr(e,t),e===null?(n=Rf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ve||(n=t.type,e=t.pendingProps,l=eu(ae.current).createElement(n),l[yt]=t,l[St]=e,pt(l,n,e),it(l),t.stateNode=l):t.memoizedState=Rf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ut(t),e===null&&Ve&&(l=t.stateNode=Cf(t.type,t.pendingProps,ae.current),Ct=t,Kt=!0,a=Fe,Xn(t.type)?(S0=a,Fe=Qt(l.firstChild)):Fe=a),ht(e,t,t.pendingProps.children,n),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ve&&((a=l=Fe)&&(l=C1(l,t.type,t.pendingProps,Kt),l!==null?(t.stateNode=l,Ct=t,Fe=Qt(l.firstChild),Kt=!1,a=!0):a=!1),a||tl(t)),ut(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,x0(a,r)?l=null:o!==null&&x0(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=vi(e,t,Y3,null,null,n),La._currentValue=a),Xr(e,t),ht(e,t,l,n),t.child;case 6:return e===null&&Ve&&((e=n=Fe)&&(n=S1(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,Ct=t,Fe=null,e=!0):e=!1),e||tl(t)),null;case 13:return ys(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Yl(t,null,l,n):ht(e,t,l,n),t.child;case 11:return os(e,t,t.type,t.pendingProps,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Tn(t,t.type,l.value),ht(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,ll(t),a=vt(a),l=l(a),t.flags|=1,ht(e,t,l,n),t.child;case 14:return ss(e,t,t.type,t.pendingProps,n);case 15:return fs(e,t,t.type,t.pendingProps,n);case 19:return xs(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Yr(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=rn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ds(e,t,n);case 24:return ll(t),l=vt(at),e===null?(a=oi(),a===null&&(a=Pe,r=ii(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:l,cache:a},fi(t),Tn(t,at,a)):((e.lanes&n)!==0&&(di(e,t),Ca(t,null,null,n),_a()),a=e.memoizedState,r=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Tn(t,at,l)):(l=r.cache,Tn(t,at,l),l!==a.cache&&ui(t,[at],n,!0))),ht(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function mn(e){e.flags|=4}function _s(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Of(t)){if(t=kt.current,t!==null&&((Oe&4194048)===Oe?Jt!==null:(Oe&62914560)!==Oe&&(Oe&536870912)===0||t!==Jt))throw xa=si,lo;e.flags|=8192}}function Nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$0():536870912,e.lanes|=t,Ll|=t)}function wa(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function K3(e,t,n){var l=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),sn(at),Ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$c())),Ke(t),null;case 26:return n=t.memoizedState,e===null?(mn(t),n!==null?(Ke(t),_s(t,n)):(Ke(t),t.flags&=-16777217)):n?n!==e.memoizedState?(mn(t),Ke(t),_s(t,n)):(Ke(t),t.flags&=-16777217):(e.memoizedProps!==l&&mn(t),Ke(t),t.flags&=-16777217),null;case 27:dt(t),n=ae.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&mn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Ke(t),null}e=J.current,da(t)?Jc(t):(e=Cf(a,l,n),t.stateNode=e,mn(t))}return Ke(t),null;case 5:if(dt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&mn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Ke(t),null}if(e=J.current,da(t))Jc(t);else{switch(a=eu(ae.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[yt]=t,e[St]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(pt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&mn(t)}}return Ke(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&mn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=ae.current,da(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Ct,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||pf(e.nodeValue,n)),e||tl(t)}else e=eu(e).createTextNode(l),e[yt]=t,t.stateNode=e}return Ke(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=da(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[yt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),a=!1}else a=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(dn(t),t):(dn(t),null)}if(dn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Nr(t,t.updateQueue),Ke(t),null;case 4:return Ue(),e===null&&m0(t.stateNode.containerInfo),Ke(t),null;case 10:return sn(t.type),Ke(t),null;case 19:if(P(rt),a=t.memoizedState,a===null)return Ke(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)wa(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Br(e),r!==null){for(t.flags|=128,wa(a,!1),e=r.updateQueue,t.updateQueue=e,Nr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wc(n,e),n=n.sibling;return N(rt,rt.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>Lr&&(t.flags|=128,l=!0,wa(a,!1),t.lanes=4194304)}else{if(!l)if(e=Br(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Nr(t,e),wa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Ve)return Ke(t),null}else 2*re()-a.renderingStartTime>Lr&&n!==536870912&&(t.flags|=128,l=!0,wa(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,e=rt.current,N(rt,l?e&1|2:e&1),t):(Ke(t),null);case 22:case 23:return dn(t),gi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&Nr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&P(al),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sn(at),Ke(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function J3(e,t){switch(ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(at),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dt(t),null;case 13:if(dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(rt),null;case 4:return Ue(),null;case 10:return sn(t.type),null;case 22:case 23:return dn(t),gi(),e!==null&&P(al),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sn(at),null;case 25:return null;default:return null}}function Cs(e,t){switch(ni(t),t.tag){case 3:sn(at),Ue();break;case 26:case 27:case 5:dt(t);break;case 4:Ue();break;case 13:dn(t);break;case 19:P(rt);break;case 10:sn(t.type);break;case 22:case 23:dn(t),gi(),e!==null&&P(al);break;case 24:sn(at)}}function Oa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var r=n.create,o=n.inst;l=r(),o.destroy=l}n=n.next}while(n!==a)}}catch(d){qe(t,t.return,d)}}function An(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,a=t;var b=n,O=d;try{O()}catch(k){qe(a,b,k)}}}l=l.next}while(l!==r)}}catch(k){qe(t,t.return,k)}}function Ss(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{oo(t,n)}catch(l){qe(e,e.return,l)}}}function Ts(e,t,n){n.props=ul(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){qe(e,t,l)}}function Aa(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){qe(e,t,a)}}function Ft(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){qe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){qe(e,t,a)}else n.current=null}function Rs(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){qe(e,e.return,a)}}function Li(e,t,n){try{var l=e.stateNode;y1(l,e.type,n,t),l[St]=t}catch(a){qe(e,e.return,a)}}function Ds(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xn(e.type)||e.tag===4}function Zi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ds(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ir));else if(l!==4&&(l===27&&Xn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Pi(e,t,n),e=e.sibling;e!==null;)Pi(e,t,n),e=e.sibling}function kr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Xn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(kr(e,t,n),e=e.sibling;e!==null;)kr(e,t,n),e=e.sibling}function zs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);pt(t,l,n),t[yt]=e,t[St]=n}catch(r){qe(e,e.return,r)}}var pn=!1,et=!1,Qi=!1,Ms=typeof WeakSet=="function"?WeakSet:Set,ot=null;function F3(e,t){if(e=e.containerInfo,y0=uu,e=jc(e),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,d=-1,b=-1,O=0,k=0,W=e,V=null;t:for(;;){for(var E;W!==n||a!==0&&W.nodeType!==3||(d=o+a),W!==r||l!==0&&W.nodeType!==3||(b=o+l),W.nodeType===3&&(o+=W.nodeValue.length),(E=W.firstChild)!==null;)V=W,W=E;for(;;){if(W===e)break t;if(V===n&&++O===a&&(d=o),V===r&&++k===l&&(b=o),(E=W.nextSibling)!==null)break;W=V,V=W.parentNode}W=E}n=d===-1||b===-1?null:{start:d,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(v0={focusedElem:e,selectionRange:n},uu=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,l=n.stateNode;try{var de=ul(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(de,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){qe(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_0(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function ws(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(e,n),l&4&&Oa(5,n);break;case 1:if(Vn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){qe(n,n.return,o)}else{var a=ul(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){qe(n,n.return,o)}}l&64&&Ss(n),l&512&&Aa(n,n.return);break;case 3:if(Vn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{oo(e,t)}catch(o){qe(n,n.return,o)}}break;case 27:t===null&&l&4&&zs(n);case 26:case 5:Vn(e,n),t===null&&l&4&&Rs(n),l&512&&Aa(n,n.return);break;case 12:Vn(e,n);break;case 13:Vn(e,n),l&4&&Vs(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=u1.bind(null,n),T1(e,n))));break;case 22:if(l=n.memoizedState!==null||pn,!l){t=t!==null&&t.memoizedState!==null||et,a=pn;var r=et;pn=l,(et=t)&&!r?En(e,n,(n.subtreeFlags&8772)!==0):Vn(e,n),pn=a,et=r}break;case 30:break;default:Vn(e,n)}}function Os(e){var t=e.alternate;t!==null&&(e.alternate=null,Os(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Du(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Dt=!1;function gn(e,t,n){for(n=n.child;n!==null;)As(e,t,n),n=n.sibling}function As(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Xe,n)}catch{}switch(n.tag){case 26:et||Ft(n,t),gn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:et||Ft(n,t);var l=Qe,a=Dt;Xn(n.type)&&(Qe=n.stateNode,Dt=!1),gn(e,t,n),Ya(n.stateNode),Qe=l,Dt=a;break;case 5:et||Ft(n,t);case 6:if(l=Qe,a=Dt,Qe=null,gn(e,t,n),Qe=l,Dt=a,Qe!==null)if(Dt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(r){qe(n,t,r)}else try{Qe.removeChild(n.stateNode)}catch(r){qe(n,t,r)}break;case 18:Qe!==null&&(Dt?(e=Qe,bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wa(e)):bf(Qe,n.stateNode));break;case 4:l=Qe,a=Dt,Qe=n.stateNode.containerInfo,Dt=!0,gn(e,t,n),Qe=l,Dt=a;break;case 0:case 11:case 14:case 15:et||An(2,n,t),et||An(4,n,t),gn(e,t,n);break;case 1:et||(Ft(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ts(n,t,l)),gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:et=(l=et)||n.memoizedState!==null,gn(e,t,n),et=l;break;default:gn(e,t,n)}}function Vs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wa(e)}catch(n){qe(t,t.return,n)}}function $3(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ms),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ms),t;default:throw Error(i(435,e.tag))}}function Wi(e,t){var n=$3(e);t.forEach(function(l){var a=i1.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function At(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],r=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Xn(d.type)){Qe=d.stateNode,Dt=!1;break e}break;case 5:Qe=d.stateNode,Dt=!1;break e;case 3:case 4:Qe=d.stateNode.containerInfo,Dt=!0;break e}d=d.return}if(Qe===null)throw Error(i(160));As(r,o,a),Qe=null,Dt=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Es(t,e),t=t.sibling}var Pt=null;function Es(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),Vt(e),l&4&&(An(3,e,e.return),Oa(3,e),An(5,e,e.return));break;case 1:At(t,e),Vt(e),l&512&&(et||n===null||Ft(n,n.return)),l&64&&pn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Pt;if(At(t,e),Vt(e),l&512&&(et||n===null||Ft(n,n.return)),l&4){var r=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ta]||r[yt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),pt(r,l,n),r[yt]=e,it(r),l=r;break e;case"link":var o=Mf("link","href",a).get(l+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(r=o[d],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break t}}r=a.createElement(l),pt(r,l,n),a.head.appendChild(r);break;case"meta":if(o=Mf("meta","content",a).get(l+(n.content||""))){for(d=0;d<o.length;d++)if(r=o[d],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break t}}r=a.createElement(l),pt(r,l,n),a.head.appendChild(r);break;default:throw Error(i(468,l))}r[yt]=e,it(r),l=r}e.stateNode=l}else wf(a,e.type,e.stateNode);else e.stateNode=zf(a,l,e.memoizedProps);else r!==l?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,l===null?wf(a,e.type,e.stateNode):zf(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Li(e,e.memoizedProps,n.memoizedProps)}break;case 27:At(t,e),Vt(e),l&512&&(et||n===null||Ft(n,n.return)),n!==null&&l&4&&Li(e,e.memoizedProps,n.memoizedProps);break;case 5:if(At(t,e),Vt(e),l&512&&(et||n===null||Ft(n,n.return)),e.flags&32){a=e.stateNode;try{Cl(a,"")}catch(E){qe(e,e.return,E)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Li(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Qi=!0);break;case 6:if(At(t,e),Vt(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(E){qe(e,e.return,E)}}break;case 3:if(lu=null,a=Pt,Pt=tu(t.containerInfo),At(t,e),Pt=a,Vt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(t.containerInfo)}catch(E){qe(e,e.return,E)}Qi&&(Qi=!1,Hs(e));break;case 4:l=Pt,Pt=tu(e.stateNode.containerInfo),At(t,e),Vt(e),Pt=l;break;case 12:At(t,e),Vt(e);break;case 13:At(t,e),Vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(e0=re()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wi(e,l)));break;case 22:a=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,O=pn,k=et;if(pn=O||a,et=k||b,At(t,e),et=k,pn=O,Vt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||b||pn||et||il(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(r=b.stateNode,a)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=b.stateNode;var W=b.memoizedProps.style,V=W!=null&&W.hasOwnProperty("display")?W.display:null;d.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(E){qe(b,b.return,E)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=a?"":b.memoizedProps}catch(E){qe(b,b.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Wi(e,n))));break;case 19:At(t,e),Vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wi(e,l)));break;case 30:break;case 21:break;default:At(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Ds(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,r=Zi(e);kr(e,r,a);break;case 5:var o=n.stateNode;n.flags&32&&(Cl(o,""),n.flags&=-33);var d=Zi(e);kr(e,d,o);break;case 3:case 4:var b=n.stateNode.containerInfo,O=Zi(e);Pi(e,O,b);break;default:throw Error(i(161))}}catch(k){qe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ws(e,t.alternate,t),t=t.sibling}function il(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:An(4,t,t.return),il(t);break;case 1:Ft(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ts(t,t.return,n),il(t);break;case 27:Ya(t.stateNode);case 26:case 5:Ft(t,t.return),il(t);break;case 22:t.memoizedState===null&&il(t);break;case 30:il(t);break;default:il(t)}e=e.sibling}}function En(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:En(a,r,n),Oa(4,r);break;case 1:if(En(a,r,n),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(O){qe(l,l.return,O)}if(l=r,a=l.updateQueue,a!==null){var d=l.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)co(b[a],d)}catch(O){qe(l,l.return,O)}}n&&o&64&&Ss(r),Aa(r,r.return);break;case 27:zs(r);case 26:case 5:En(a,r,n),n&&l===null&&o&4&&Rs(r),Aa(r,r.return);break;case 12:En(a,r,n);break;case 13:En(a,r,n),n&&o&4&&Vs(a,r);break;case 22:r.memoizedState===null&&En(a,r,n),Aa(r,r.return);break;case 30:break;default:En(a,r,n)}t=t.sibling}}function Ki(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Ji(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function $t(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gs(e,t,n,l),t=t.sibling}function Gs(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:$t(e,t,n,l),a&2048&&Oa(9,t);break;case 1:$t(e,t,n,l);break;case 3:$t(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(a&2048){$t(e,t,n,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,d=r.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){qe(t,t.return,b)}}else $t(e,t,n,l);break;case 13:$t(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?$t(e,t,n,l):Va(e,t):r._visibility&2?$t(e,t,n,l):(r._visibility|=2,Nl(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&Ki(o,t);break;case 24:$t(e,t,n,l),a&2048&&Ji(t.alternate,t);break;default:$t(e,t,n,l)}}function Nl(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,d=n,b=l,O=o.flags;switch(o.tag){case 0:case 11:case 15:Nl(r,o,d,b,a),Oa(8,o);break;case 23:break;case 22:var k=o.stateNode;o.memoizedState!==null?k._visibility&2?Nl(r,o,d,b,a):Va(r,o):(k._visibility|=2,Nl(r,o,d,b,a)),a&&O&2048&&Ki(o.alternate,o);break;case 24:Nl(r,o,d,b,a),a&&O&2048&&Ji(o.alternate,o);break;default:Nl(r,o,d,b,a)}t=t.sibling}}function Va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Va(n,l),a&2048&&Ki(l.alternate,l);break;case 24:Va(n,l),a&2048&&Ji(l.alternate,l);break;default:Va(n,l)}t=t.sibling}}var Ea=8192;function kl(e){if(e.subtreeFlags&Ea)for(e=e.child;e!==null;)Bs(e),e=e.sibling}function Bs(e){switch(e.tag){case 26:kl(e),e.flags&Ea&&e.memoizedState!==null&&U1(Pt,e.memoizedState,e.memoizedProps);break;case 5:kl(e);break;case 3:case 4:var t=Pt;Pt=tu(e.stateNode.containerInfo),kl(e),Pt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ea,Ea=16777216,kl(e),Ea=t):kl(e));break;default:kl(e)}}function Us(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ha(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ot=l,Xs(l,e)}Us(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)js(e),e=e.sibling}function js(e){switch(e.tag){case 0:case 11:case 15:Ha(e),e.flags&2048&&An(9,e,e.return);break;case 3:Ha(e);break;case 12:Ha(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qr(e)):Ha(e);break;default:Ha(e)}}function qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ot=l,Xs(l,e)}Us(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:An(8,t,t.return),qr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qr(t));break;default:qr(t)}e=e.sibling}}function Xs(e,t){for(;ot!==null;){var n=ot;switch(n.tag){case 0:case 11:case 15:An(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ga(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ot=l;else e:for(n=e;ot!==null;){l=ot;var a=l.sibling,r=l.return;if(Os(l),l===n){ot=null;break e}if(a!==null){a.return=r,ot=a;break e}ot=r}}}var I3={getCacheForType:function(e){var t=vt(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},e1=typeof WeakMap=="function"?WeakMap:Map,He=0,Pe=null,Se=null,Oe=0,Ge=0,Et=null,Hn=!1,ql=!1,Fi=!1,yn=0,$e=0,Gn=0,cl=0,$i=0,qt=0,Ll=0,Ga=null,zt=null,Ii=!1,e0=0,Lr=1/0,Zr=null,Bn=null,mt=0,Un=null,Zl=null,Pl=0,t0=0,n0=null,Ys=null,Ba=0,l0=null;function Ht(){if((He&2)!==0&&Oe!==0)return Oe&-Oe;if(H.T!==null){var e=El;return e!==0?e:s0()}return tc()}function Ns(){qt===0&&(qt=(Oe&536870912)===0||Ve?F0():536870912);var e=kt.current;return e!==null&&(e.flags|=32),qt}function Gt(e,t,n){(e===Pe&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Ql(e,0),jn(e,Oe,qt,!1)),ea(e,n),((He&2)===0||e!==Pe)&&(e===Pe&&((He&2)===0&&(cl|=n),$e===4&&jn(e,Oe,qt,!1)),It(e))}function ks(e,t,n){if((He&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Pn(e,t),a=l?l1(e,t):u0(e,t,!0),r=l;do{if(a===0){ql&&!l&&jn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!t1(n)){a=u0(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;a=Ga;var b=d.current.memoizedState.isDehydrated;if(b&&(Ql(d,o).flags|=256),o=u0(d,o,!1),o!==2){if(Fi&&!b){d.errorRecoveryDisabledLanes|=r,cl|=r,a=4;break e}r=zt,zt=a,r!==null&&(zt===null?zt=r:zt.push.apply(zt,r))}a=o}if(r=!1,a!==2)continue}}if(a===1){Ql(e,0),jn(e,t,0,!0);break}e:{switch(l=e,r=a,r){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:jn(l,t,qt,!Hn);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=e0+300-re(),10<a)){if(jn(l,t,qt,!Hn),ml(l,0,!0)!==0)break e;l.timeoutHandle=vf(qs.bind(null,l,n,zt,Zr,Ii,t,qt,cl,Ll,Hn,r,2,-0,0),a);break e}qs(l,n,zt,Zr,Ii,t,qt,cl,Ll,Hn,r,0,-0,0)}}break}while(!0);It(e)}function qs(e,t,n,l,a,r,o,d,b,O,k,W,V,E){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(qa={stylesheets:null,count:0,unsuspend:B1},Bs(t),W=j1(),W!==null)){e.cancelPendingCommit=W(Js.bind(null,e,t,r,n,l,a,o,d,b,k,1,V,E)),jn(e,r,o,!O);return}Js(e,t,r,n,l,a,o,d,b)}function t1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],r=a.getSnapshot;a=a.value;try{if(!wt(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t,n,l){t&=~$i,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var r=31-Me(a),o=1<<r;l[r]=-1,a&=~o}n!==0&&I0(e,n,t)}function Pr(){return(He&6)===0?(Ua(0),!1):!0}function a0(){if(Se!==null){if(Ge===0)var e=Se.return;else e=Se,on=nl=null,_i(e),Xl=null,za=0,e=Se;for(;e!==null;)Cs(e.alternate,e),e=e.return;Se=null}}function Ql(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,x1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),a0(),Pe=e,Se=n=rn(e.current,null),Oe=t,Ge=0,Et=null,Hn=!1,ql=Pn(e,t),Fi=!1,Ll=qt=$i=cl=Gn=$e=0,zt=Ga=null,Ii=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-Me(l),r=1<<a;t|=e[a],l&=~r}return yn=t,mr(),n}function Ls(e,t){be=null,H.H=Er,t===va||t===Sr?(t=uo(),Ge=3):t===lo?(t=uo(),Ge=4):Ge=t===cs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,Se===null&&($e=1,jr(e,jt(t,e.current)))}function Zs(){var e=H.H;return H.H=Er,e===null?Er:e}function Ps(){var e=H.A;return H.A=I3,e}function r0(){$e=4,Hn||(Oe&4194048)!==Oe&&kt.current!==null||(ql=!0),(Gn&134217727)===0&&(cl&134217727)===0||Pe===null||jn(Pe,Oe,qt,!1)}function u0(e,t,n){var l=He;He|=2;var a=Zs(),r=Ps();(Pe!==e||Oe!==t)&&(Zr=null,Ql(e,t)),t=!1;var o=$e;e:do try{if(Ge!==0&&Se!==null){var d=Se,b=Et;switch(Ge){case 8:a0(),o=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var O=Ge;if(Ge=0,Et=null,Wl(e,d,b,O),n&&ql){o=0;break e}break;default:O=Ge,Ge=0,Et=null,Wl(e,d,b,O)}}n1(),o=$e;break}catch(k){Ls(e,k)}while(!0);return t&&e.shellSuspendCounter++,on=nl=null,He=l,H.H=a,H.A=r,Se===null&&(Pe=null,Oe=0,mr()),o}function n1(){for(;Se!==null;)Qs(Se)}function l1(e,t){var n=He;He|=2;var l=Zs(),a=Ps();Pe!==e||Oe!==t?(Zr=null,Lr=re()+500,Ql(e,t)):ql=Pn(e,t);e:do try{if(Ge!==0&&Se!==null){t=Se;var r=Et;t:switch(Ge){case 1:Ge=0,Et=null,Wl(e,t,r,1);break;case 2:case 9:if(ao(r)){Ge=0,Et=null,Ws(t);break}t=function(){Ge!==2&&Ge!==9||Pe!==e||(Ge=7),It(e)},r.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:ao(r)?(Ge=0,Et=null,Ws(t)):(Ge=0,Et=null,Wl(e,t,r,7));break;case 5:var o=null;switch(Se.tag){case 26:o=Se.memoizedState;case 5:case 27:var d=Se;if(!o||Of(o)){Ge=0,Et=null;var b=d.sibling;if(b!==null)Se=b;else{var O=d.return;O!==null?(Se=O,Qr(O)):Se=null}break t}}Ge=0,Et=null,Wl(e,t,r,5);break;case 6:Ge=0,Et=null,Wl(e,t,r,6);break;case 8:a0(),$e=6;break e;default:throw Error(i(462))}}a1();break}catch(k){Ls(e,k)}while(!0);return on=nl=null,H.H=l,H.A=a,He=n,Se!==null?0:(Pe=null,Oe=0,mr(),$e)}function a1(){for(;Se!==null&&!sl();)Qs(Se)}function Qs(e){var t=bs(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Qr(e):Se=t}function Ws(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ms(n,t,t.pendingProps,t.type,void 0,Oe);break;case 11:t=ms(n,t,t.pendingProps,t.type.render,t.ref,Oe);break;case 5:_i(t);default:Cs(n,t),t=Se=Wc(t,yn),t=bs(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Qr(e):Se=t}function Wl(e,t,n,l){on=nl=null,_i(t),Xl=null,za=0;var a=t.return;try{if(Q3(e,a,t,n,Oe)){$e=1,jr(e,jt(n,e.current)),Se=null;return}}catch(r){if(a!==null)throw Se=a,r;$e=1,jr(e,jt(n,e.current)),Se=null;return}t.flags&32768?(Ve||l===1?e=!0:ql||(Oe&536870912)!==0?e=!1:(Hn=e=!0,(l===2||l===9||l===3||l===6)&&(l=kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ks(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){Ks(t,Hn);return}e=t.return;var n=K3(t.alternate,t,yn);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);$e===0&&($e=5)}function Ks(e,t){do{var n=J3(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);$e=6,Se=null}function Js(e,t,n,l,a,r,o,d,b){e.cancelPendingCommit=null;do Wr();while(mt!==0);if((He&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(r=t.lanes|t.childLanes,r|=Ju,B2(e,n,r,o,d,b),e===Pe&&(Se=Pe=null,Oe=0),Zl=t,Un=e,Pl=n,t0=r,n0=a,Ys=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c1(Ze,function(){return tf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,a=K.p,K.p=2,o=He,He|=4;try{F3(e,t,n)}finally{He=o,K.p=a,H.T=l}}mt=1,Fs(),$s(),Is()}}function Fs(){if(mt===1){mt=0;var e=Un,t=Zl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var l=K.p;K.p=2;var a=He;He|=4;try{Es(t,e);var r=v0,o=jc(e.containerInfo),d=r.focusedElem,b=r.selectionRange;if(o!==d&&d&&d.ownerDocument&&Uc(d.ownerDocument.documentElement,d)){if(b!==null&&Zu(d)){var O=b.start,k=b.end;if(k===void 0&&(k=O),"selectionStart"in d)d.selectionStart=O,d.selectionEnd=Math.min(k,d.value.length);else{var W=d.ownerDocument||document,V=W&&W.defaultView||window;if(V.getSelection){var E=V.getSelection(),de=d.textContent.length,oe=Math.min(b.start,de),ke=b.end===void 0?oe:Math.min(b.end,de);!E.extend&&oe>ke&&(o=ke,ke=oe,oe=o);var z=Bc(d,oe),T=Bc(d,ke);if(z&&T&&(E.rangeCount!==1||E.anchorNode!==z.node||E.anchorOffset!==z.offset||E.focusNode!==T.node||E.focusOffset!==T.offset)){var M=W.createRange();M.setStart(z.node,z.offset),E.removeAllRanges(),oe>ke?(E.addRange(M),E.extend(T.node,T.offset)):(M.setEnd(T.node,T.offset),E.addRange(M))}}}}for(W=[],E=d;E=E.parentNode;)E.nodeType===1&&W.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<W.length;d++){var Z=W[d];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}uu=!!y0,v0=y0=null}finally{He=a,K.p=l,H.T=n}}e.current=t,mt=2}}function $s(){if(mt===2){mt=0;var e=Un,t=Zl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var l=K.p;K.p=2;var a=He;He|=4;try{ws(e,t.alternate,t)}finally{He=a,K.p=l,H.T=n}}mt=3}}function Is(){if(mt===4||mt===3){mt=0,le();var e=Un,t=Zl,n=Pl,l=Ys;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,Zl=Un=null,ef(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Bn=null),Tu(n),t=t.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Xe,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,a=K.p,K.p=2,H.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];r(d.value,{componentStack:d.stack})}}finally{H.T=t,K.p=a}}(Pl&3)!==0&&Wr(),It(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===l0?Ba++:(Ba=0,l0=e):Ba=0,Ua(0)}}function ef(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Wr(e){return Fs(),$s(),Is(),tf()}function tf(){if(mt!==5)return!1;var e=Un,t=t0;t0=0;var n=Tu(Pl),l=H.T,a=K.p;try{K.p=32>n?32:n,H.T=null,n=n0,n0=null;var r=Un,o=Pl;if(mt=0,Zl=Un=null,Pl=0,(He&6)!==0)throw Error(i(331));var d=He;if(He|=4,js(r.current),Gs(r,r.current,o,n),He=d,Ua(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Xe,r)}catch{}return!0}finally{K.p=a,H.T=l,ef(e,t)}}function nf(e,t,n){t=jt(n,t),t=Gi(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(ea(e,2),It(e))}function qe(e,t,n){if(e.tag===3)nf(e,e,n);else for(;t!==null;){if(t.tag===3){nf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Bn===null||!Bn.has(l))){e=jt(n,e),n=us(2),l=zn(t,n,2),l!==null&&(is(n,l,t,e),ea(l,2),It(l));break}}t=t.return}}function i0(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new e1;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Fi=!0,a.add(n),e=r1.bind(null,e,t,n),t.then(e,e))}function r1(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(Oe&n)===n&&($e===4||$e===3&&(Oe&62914560)===Oe&&300>re()-e0?(He&2)===0&&Ql(e,0):$i|=n,Ll===Oe&&(Ll=0)),It(e)}function lf(e,t){t===0&&(t=$0()),e=wl(e,t),e!==null&&(ea(e,t),It(e))}function u1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lf(e,n)}function i1(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),lf(e,n)}function c1(e,t){return Re(e,t)}var Kr=null,Kl=null,c0=!1,Jr=!1,o0=!1,ol=0;function It(e){e!==Kl&&e.next===null&&(Kl===null?Kr=Kl=e:Kl=Kl.next=e),Jr=!0,c0||(c0=!0,s1())}function Ua(e,t){if(!o0&&Jr){o0=!0;do for(var n=!1,l=Kr;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var o=l.suspendedLanes,d=l.pingedLanes;r=(1<<31-Me(42|e)+1)-1,r&=a&~(o&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,cf(l,r))}else r=Oe,r=ml(l,l===Pe?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Pn(l,r)||(n=!0,cf(l,r));l=l.next}while(n);o0=!1}}function o1(){af()}function af(){Jr=c0=!1;var e=0;ol!==0&&(v1()&&(e=ol),ol=0);for(var t=re(),n=null,l=Kr;l!==null;){var a=l.next,r=rf(l,t);r===0?(l.next=null,n===null?Kr=a:n.next=a,a===null&&(Kl=n)):(n=l,(e!==0||(r&3)!==0)&&(Jr=!0)),l=a}Ua(e)}function rf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Me(r),d=1<<o,b=a[o];b===-1?((d&n)===0||(d&l)!==0)&&(a[o]=_u(d,t)):b<=t&&(e.expiredLanes|=d),r&=~d}if(t=Pe,n=Oe,n=ml(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&en(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&en(l),Tu(n)){case 2:case 8:n=je;break;case 32:n=Ze;break;case 268435456:n=gt;break;default:n=Ze}return l=uf.bind(null,e),n=Re(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&en(l),e.callbackPriority=2,e.callbackNode=null,2}function uf(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var l=Oe;return l=ml(e,e===Pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ks(e,l,t),rf(e,re()),e.callbackNode!=null&&e.callbackNode===n?uf.bind(null,e):null)}function cf(e,t){if(Wr())return null;ks(e,t,!0)}function s1(){b1(function(){(He&6)!==0?Re(De,o1):af()})}function s0(){return ol===0&&(ol=F0()),ol}function of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ir(""+e)}function sf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function f1(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var r=of((a[St]||null).action),o=l.submitter;o&&(t=(t=o[St]||null)?of(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var d=new fr("action","action",null,l,a);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ol!==0){var b=o?sf(a,o):new FormData(a);Oi(n,{pending:!0,data:b,method:a.method,action:r},null,b)}}else typeof r=="function"&&(d.preventDefault(),b=o?sf(a,o):new FormData(a),Oi(n,{pending:!0,data:b,method:a.method,action:r},r,b))},currentTarget:a}]})}}for(var f0=0;f0<Ku.length;f0++){var d0=Ku[f0],d1=d0.toLowerCase(),h1=d0[0].toUpperCase()+d0.slice(1);Zt(d1,"on"+h1)}Zt(Nc,"onAnimationEnd"),Zt(kc,"onAnimationIteration"),Zt(qc,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(O3,"onTransitionRun"),Zt(A3,"onTransitionStart"),Zt(V3,"onTransitionCancel"),Zt(Lc,"onTransitionEnd"),xl("onMouseEnter",["mouseout","mouseover"]),xl("onMouseLeave",["mouseout","mouseover"]),xl("onPointerEnter",["pointerout","pointerover"]),xl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ja));function ff(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],b=d.instance,O=d.currentTarget;if(d=d.listener,b!==r&&a.isPropagationStopped())break e;r=d,a.currentTarget=O;try{r(a)}catch(k){Ur(k)}a.currentTarget=null,r=b}else for(o=0;o<l.length;o++){if(d=l[o],b=d.instance,O=d.currentTarget,d=d.listener,b!==r&&a.isPropagationStopped())break e;r=d,a.currentTarget=O;try{r(a)}catch(k){Ur(k)}a.currentTarget=null,r=b}}}}function Te(e,t){var n=t[Ru];n===void 0&&(n=t[Ru]=new Set);var l=e+"__bubble";n.has(l)||(df(t,e,2,!1),n.add(l))}function h0(e,t,n){var l=0;t&&(l|=4),df(n,e,l,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function m0(e){if(!e[Fr]){e[Fr]=!0,lc.forEach(function(n){n!=="selectionchange"&&(m1.has(n)||h0(n,!1,e),h0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,h0("selectionchange",!1,t))}}function df(e,t,n,l){switch(Bf(t)){case 2:var a=N1;break;case 8:a=k1;break;default:a=M0}n=a.bind(null,t,n,e),a=void 0,!Bu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function p0(e,t,n,l,a){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===a)break;if(o===4)for(o=l.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;d!==null;){if(o=gl(d),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){l=r=o;continue e}d=d.parentNode}}l=l.return}yc(function(){var O=r,k=Hu(n),W=[];e:{var V=Zc.get(e);if(V!==void 0){var E=fr,de=e;switch(e){case"keypress":if(or(n)===0)break e;case"keydown":case"keyup":E=c3;break;case"focusin":de="focus",E=Yu;break;case"focusout":de="blur",E=Yu;break;case"beforeblur":case"afterblur":E=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=J2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=f3;break;case Nc:case kc:case qc:E=I2;break;case Lc:E=h3;break;case"scroll":case"scrollend":E=W2;break;case"wheel":E=p3;break;case"copy":case"cut":case"paste":E=t3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Cc;break;case"toggle":case"beforetoggle":E=y3}var oe=(t&4)!==0,ke=!oe&&(e==="scroll"||e==="scrollend"),z=oe?V!==null?V+"Capture":null:V;oe=[];for(var T=O,M;T!==null;){var Z=T;if(M=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||M===null||z===null||(Z=la(T,z),Z!=null&&oe.push(Xa(T,Z,M))),ke)break;T=T.return}0<oe.length&&(V=new E(V,de,null,n,k),W.push({event:V,listeners:oe}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",V&&n!==Eu&&(de=n.relatedTarget||n.fromElement)&&(gl(de)||de[pl]))break e;if((E||V)&&(V=k.window===k?k:(V=k.ownerDocument)?V.defaultView||V.parentWindow:window,E?(de=n.relatedTarget||n.toElement,E=O,de=de?gl(de):null,de!==null&&(ke=c(de),oe=de.tag,de!==ke||oe!==5&&oe!==27&&oe!==6)&&(de=null)):(E=null,de=O),E!==de)){if(oe=bc,Z="onMouseLeave",z="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Cc,Z="onPointerLeave",z="onPointerEnter",T="pointer"),ke=E==null?V:na(E),M=de==null?V:na(de),V=new oe(Z,T+"leave",E,n,k),V.target=ke,V.relatedTarget=M,Z=null,gl(k)===O&&(oe=new oe(z,T+"enter",de,n,k),oe.target=M,oe.relatedTarget=ke,Z=oe),ke=Z,E&&de)t:{for(oe=E,z=de,T=0,M=oe;M;M=Jl(M))T++;for(M=0,Z=z;Z;Z=Jl(Z))M++;for(;0<T-M;)oe=Jl(oe),T--;for(;0<M-T;)z=Jl(z),M--;for(;T--;){if(oe===z||z!==null&&oe===z.alternate)break t;oe=Jl(oe),z=Jl(z)}oe=null}else oe=null;E!==null&&hf(W,V,E,oe,!1),de!==null&&ke!==null&&hf(W,ke,de,oe,!0)}}e:{if(V=O?na(O):window,E=V.nodeName&&V.nodeName.toLowerCase(),E==="select"||E==="input"&&V.type==="file")var ne=Oc;else if(Mc(V))if(Ac)ne=z3;else{ne=R3;var Ce=T3}else E=V.nodeName,!E||E.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?O&&Vu(O.elementType)&&(ne=Oc):ne=D3;if(ne&&(ne=ne(e,O))){wc(W,ne,n,k);break e}Ce&&Ce(e,V,O),e==="focusout"&&O&&V.type==="number"&&O.memoizedProps.value!=null&&Au(V,"number",V.value)}switch(Ce=O?na(O):window,e){case"focusin":(Mc(Ce)||Ce.contentEditable==="true")&&(Dl=Ce,Pu=O,fa=null);break;case"focusout":fa=Pu=Dl=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Xc(W,n,k);break;case"selectionchange":if(w3)break;case"keydown":case"keyup":Xc(W,n,k)}var ie;if(ku)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Rl?Dc(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(Sc&&n.locale!=="ko"&&(Rl||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Rl&&(ie=vc()):(Sn=k,Uu="value"in Sn?Sn.value:Sn.textContent,Rl=!0)),Ce=$r(O,fe),0<Ce.length&&(fe=new _c(fe,e,null,n,k),W.push({event:fe,listeners:Ce}),ie?fe.data=ie:(ie=zc(n),ie!==null&&(fe.data=ie)))),(ie=x3?b3(e,n):_3(e,n))&&(fe=$r(O,"onBeforeInput"),0<fe.length&&(Ce=new _c("onBeforeInput","beforeinput",null,n,k),W.push({event:Ce,listeners:fe}),Ce.data=ie)),f1(W,e,O,n,k)}ff(W,t)})}function Xa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=la(e,n),a!=null&&l.unshift(Xa(e,a,r)),a=la(e,t),a!=null&&l.push(Xa(e,a,r))),e.tag===3)return l;e=e.return}return[]}function Jl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hf(e,t,n,l,a){for(var r=t._reactName,o=[];n!==null&&n!==l;){var d=n,b=d.alternate,O=d.stateNode;if(d=d.tag,b!==null&&b===l)break;d!==5&&d!==26&&d!==27||O===null||(b=O,a?(O=la(n,r),O!=null&&o.unshift(Xa(n,O,b))):a||(O=la(n,r),O!=null&&o.push(Xa(n,O,b)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var p1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function mf(e){return(typeof e=="string"?e:""+e).replace(p1,`
`).replace(g1,"")}function pf(e,t){return t=mf(t),mf(e)===t}function Ir(){}function Ne(e,t,n,l,a,r){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Cl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Cl(e,""+l);break;case"className":ar(e,"class",l);break;case"tabIndex":ar(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ar(e,n,l);break;case"style":pc(e,l,r);break;case"data":if(t!=="object"){ar(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ir(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",a.name,a,null),Ne(e,t,"formEncType",a.formEncType,a,null),Ne(e,t,"formMethod",a.formMethod,a,null),Ne(e,t,"formTarget",a.formTarget,a,null)):(Ne(e,t,"encType",a.encType,a,null),Ne(e,t,"method",a.method,a,null),Ne(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ir(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ir);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ir(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),lr(e,"popover",l);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":lr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=P2.get(n)||n,lr(e,n,l))}}function g0(e,t,n,l,a,r){switch(n){case"style":pc(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Cl(e,l):(typeof l=="number"||typeof l=="bigint")&&Cl(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ac.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[St]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):lr(e,n,l)}}}function pt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ne(e,t,r,o,n,null)}}a&&Ne(e,t,"srcSet",n.srcSet,n,null),l&&Ne(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var d=r=o=a=null,b=null,O=null;for(l in n)if(n.hasOwnProperty(l)){var k=n[l];if(k!=null)switch(l){case"name":a=k;break;case"type":o=k;break;case"checked":b=k;break;case"defaultChecked":O=k;break;case"value":r=k;break;case"defaultValue":d=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(i(137,t));break;default:Ne(e,t,l,k,n,null)}}fc(e,r,d,b,O,o,a,!1),rr(e);return;case"select":Te("invalid",e),l=o=r=null;for(a in n)if(n.hasOwnProperty(a)&&(d=n[a],d!=null))switch(a){case"value":r=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:Ne(e,t,a,d,n,null)}t=r,n=o,e.multiple=!!l,t!=null?_l(e,!!l,t,!1):n!=null&&_l(e,!!l,n,!0);return;case"textarea":Te("invalid",e),r=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":a=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:Ne(e,t,o,d,n,null)}hc(e,l,a,r),rr(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(l=n[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ne(e,t,b,l,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<ja.length;l++)Te(ja[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(l=n[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ne(e,t,O,l,n,null)}return;default:if(Vu(t)){for(k in n)n.hasOwnProperty(k)&&(l=n[k],l!==void 0&&g0(e,t,k,l,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(l=n[d],l!=null&&Ne(e,t,d,l,n,null))}function y1(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,o=null,d=null,b=null,O=null,k=null;for(E in n){var W=n[E];if(n.hasOwnProperty(E)&&W!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":b=W;default:l.hasOwnProperty(E)||Ne(e,t,E,null,l,W)}}for(var V in l){var E=l[V];if(W=n[V],l.hasOwnProperty(V)&&(E!=null||W!=null))switch(V){case"type":r=E;break;case"name":a=E;break;case"checked":O=E;break;case"defaultChecked":k=E;break;case"value":o=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(137,t));break;default:E!==W&&Ne(e,t,V,E,l,W)}}Ou(e,o,d,b,O,k,r,a);return;case"select":E=o=d=V=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":E=b;default:l.hasOwnProperty(r)||Ne(e,t,r,null,l,b)}for(a in l)if(r=l[a],b=n[a],l.hasOwnProperty(a)&&(r!=null||b!=null))switch(a){case"value":V=r;break;case"defaultValue":d=r;break;case"multiple":o=r;default:r!==b&&Ne(e,t,a,r,l,b)}t=d,n=o,l=E,V!=null?_l(e,!!n,V,!1):!!l!=!!n&&(t!=null?_l(e,!!n,t,!0):_l(e,!!n,n?[]:"",!1));return;case"textarea":E=V=null;for(d in n)if(a=n[d],n.hasOwnProperty(d)&&a!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ne(e,t,d,null,l,a)}for(o in l)if(a=l[o],r=n[o],l.hasOwnProperty(o)&&(a!=null||r!=null))switch(o){case"value":V=a;break;case"defaultValue":E=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==r&&Ne(e,t,o,a,l,r)}dc(e,V,E);return;case"option":for(var de in n)if(V=n[de],n.hasOwnProperty(de)&&V!=null&&!l.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:Ne(e,t,de,null,l,V)}for(b in l)if(V=l[b],E=n[b],l.hasOwnProperty(b)&&V!==E&&(V!=null||E!=null))switch(b){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Ne(e,t,b,V,l,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)V=n[oe],n.hasOwnProperty(oe)&&V!=null&&!l.hasOwnProperty(oe)&&Ne(e,t,oe,null,l,V);for(O in l)if(V=l[O],E=n[O],l.hasOwnProperty(O)&&V!==E&&(V!=null||E!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,t));break;default:Ne(e,t,O,V,l,E)}return;default:if(Vu(t)){for(var ke in n)V=n[ke],n.hasOwnProperty(ke)&&V!==void 0&&!l.hasOwnProperty(ke)&&g0(e,t,ke,void 0,l,V);for(k in l)V=l[k],E=n[k],!l.hasOwnProperty(k)||V===E||V===void 0&&E===void 0||g0(e,t,k,V,l,E);return}}for(var z in n)V=n[z],n.hasOwnProperty(z)&&V!=null&&!l.hasOwnProperty(z)&&Ne(e,t,z,null,l,V);for(W in l)V=l[W],E=n[W],!l.hasOwnProperty(W)||V===E||V==null&&E==null||Ne(e,t,W,V,l,E)}var y0=null,v0=null;function eu(e){return e.nodeType===9?e:e.ownerDocument}function gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function x0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var b0=null;function v1(){var e=window.event;return e&&e.type==="popstate"?e===b0?!1:(b0=e,!0):(b0=null,!1)}var vf=typeof setTimeout=="function"?setTimeout:void 0,x1=typeof clearTimeout=="function"?clearTimeout:void 0,xf=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof xf<"u"?function(e){return xf.resolve(null).then(e).catch(_1)}:vf;function _1(e){setTimeout(function(){throw e})}function Xn(e){return e==="head"}function bf(e,t){var n=t,l=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<l&&8>l){n=l;var o=e.ownerDocument;if(n&1&&Ya(o.documentElement),n&2&&Ya(o.body),n&4)for(n=o.head,Ya(n),o=n.firstChild;o;){var d=o.nextSibling,b=o.nodeName;o[ta]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=d}}if(a===0){e.removeChild(r),Wa(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=r}while(n);Wa(t)}function _0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":_0(n),Du(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function C1(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ta])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function S1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function C0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function T1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var S0=null;function _f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Cf(e,t,n){switch(t=eu(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Ya(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Du(e)}var Lt=new Map,Sf=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vn=K.d;K.d={f:R1,r:D1,D:z1,C:M1,L:w1,m:O1,X:V1,S:A1,M:E1};function R1(){var e=vn.f(),t=Pr();return e||t}function D1(e){var t=yl(e);t!==null&&t.tag===5&&t.type==="form"?ko(t):vn.r(e)}var Fl=typeof document>"u"?null:document;function Tf(e,t,n){var l=Fl;if(l&&typeof t=="string"&&t){var a=Ut(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Sf.has(a)||(Sf.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),pt(t,"link",e),it(t),l.head.appendChild(t)))}}function z1(e){vn.D(e),Tf("dns-prefetch",e,null)}function M1(e,t){vn.C(e,t),Tf("preconnect",e,t)}function w1(e,t,n){vn.L(e,t,n);var l=Fl;if(l&&e&&t){var a='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ut(n.imageSizes)+'"]')):a+='[href="'+Ut(e)+'"]';var r=a;switch(t){case"style":r=$l(e);break;case"script":r=Il(e)}Lt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(r,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Na(r))||t==="script"&&l.querySelector(ka(r))||(t=l.createElement("link"),pt(t,"link",e),it(t),l.head.appendChild(t)))}}function O1(e,t){vn.m(e,t);var n=Fl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(e)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Il(e)}if(!Lt.has(r)&&(e=v({rel:"modulepreload",href:e},t),Lt.set(r,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ka(r)))return}l=n.createElement("link"),pt(l,"link",e),it(l),n.head.appendChild(l)}}}function A1(e,t,n){vn.S(e,t,n);var l=Fl;if(l&&e){var a=vl(l).hoistableStyles,r=$l(e);t=t||"default";var o=a.get(r);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Na(r)))d.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(r))&&T0(e,n);var b=o=l.createElement("link");it(b),pt(b,"link",e),b._p=new Promise(function(O,k){b.onload=O,b.onerror=k}),b.addEventListener("load",function(){d.loading|=1}),b.addEventListener("error",function(){d.loading|=2}),d.loading|=4,nu(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},a.set(r,o)}}}function V1(e,t){vn.X(e,t);var n=Fl;if(n&&e){var l=vl(n).hoistableScripts,a=Il(e),r=l.get(a);r||(r=n.querySelector(ka(a)),r||(e=v({src:e,async:!0},t),(t=Lt.get(a))&&R0(e,t),r=n.createElement("script"),it(r),pt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function E1(e,t){vn.M(e,t);var n=Fl;if(n&&e){var l=vl(n).hoistableScripts,a=Il(e),r=l.get(a);r||(r=n.querySelector(ka(a)),r||(e=v({src:e,async:!0,type:"module"},t),(t=Lt.get(a))&&R0(e,t),r=n.createElement("script"),it(r),pt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Rf(e,t,n,l){var a=(a=ae.current)?tu(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$l(n.href),n=vl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$l(n.href);var r=vl(a).hoistableStyles,o=r.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=a.querySelector(Na(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),r||H1(a,e,n,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Il(n),n=vl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function $l(e){return'href="'+Ut(e)+'"'}function Na(e){return'link[rel="stylesheet"]['+e+"]"}function Df(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function H1(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),pt(t,"link",n),it(t),e.head.appendChild(t))}function Il(e){return'[src="'+Ut(e)+'"]'}function ka(e){return"script[async]"+e}function zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(l)return t.instance=l,it(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),it(l),pt(l,"style",a),nu(l,n.precedence,e),t.instance=l;case"stylesheet":a=$l(n.href);var r=e.querySelector(Na(a));if(r)return t.state.loading|=4,t.instance=r,it(r),r;l=Df(n),(a=Lt.get(a))&&T0(l,a),r=(e.ownerDocument||e).createElement("link"),it(r);var o=r;return o._p=new Promise(function(d,b){o.onload=d,o.onerror=b}),pt(r,"link",l),t.state.loading|=4,nu(r,n.precedence,e),t.instance=r;case"script":return r=Il(n.src),(a=e.querySelector(ka(r)))?(t.instance=a,it(a),a):(l=n,(a=Lt.get(r))&&(l=v({},n),R0(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),it(a),pt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,nu(l,n.precedence,e));return t.instance}function nu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)r=d;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function T0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function R0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lu=null;function Mf(e,t,n){if(lu===null){var l=new Map,a=lu=new Map;a.set(n,l)}else a=lu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[ta]||r[yt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(r):l.set(o,[r])}}return l}function wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function G1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Of(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var qa=null;function B1(){}function U1(e,t,n){if(qa===null)throw Error(i(475));var l=qa;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=$l(n.href),r=e.querySelector(Na(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=au.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,it(r);return}r=e.ownerDocument||e,n=Df(n),(a=Lt.get(a))&&T0(n,a),r=r.createElement("link"),it(r);var o=r;o._p=new Promise(function(d,b){o.onload=d,o.onerror=b}),pt(r,"link",n),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=au.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function j1(){if(qa===null)throw Error(i(475));var e=qa;return e.stylesheets&&e.count===0&&D0(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&D0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function au(){if(this.count--,this.count===0){if(this.stylesheets)D0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ru=null;function D0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ru=new Map,t.forEach(X1,e),ru=null,au.call(e))}function X1(e,t){if(!(t.state.loading&4)){var n=ru.get(e);if(n)var l=n.get(null);else{n=new Map,ru.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var o=a[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),r=n.get(o)||l,r===l&&n.set(null,a),n.set(o,a),this.count++,l=au.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var La={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Y1(e,t,n,l,a,r,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.hiddenUpdates=Cu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Af(e,t,n,l,a,r,o,d,b,O,k,W){return e=new Y1(e,t,n,o,d,b,O,W),t=1,r===!0&&(t|=24),r=Ot(3,null,null,t),e.current=r,r.stateNode=e,t=ii(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:n,cache:t},fi(r),e}function Vf(e){return e?(e=Ol,e):Ol}function Ef(e,t,n,l,a,r){a=Vf(a),l.context===null?l.context=a:l.pendingContext=a,l=Dn(t),l.payload={element:n},r=r===void 0?null:r,r!==null&&(l.callback=r),n=zn(e,l,t),n!==null&&(Gt(n,e,t),ba(n,e,t))}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function z0(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function Gf(e){if(e.tag===13){var t=wl(e,67108864);t!==null&&Gt(t,e,67108864),z0(e,67108864)}}var uu=!0;function N1(e,t,n,l){var a=H.T;H.T=null;var r=K.p;try{K.p=2,M0(e,t,n,l)}finally{K.p=r,H.T=a}}function k1(e,t,n,l){var a=H.T;H.T=null;var r=K.p;try{K.p=8,M0(e,t,n,l)}finally{K.p=r,H.T=a}}function M0(e,t,n,l){if(uu){var a=w0(l);if(a===null)p0(e,t,l,iu,n),Uf(e,l);else if(L1(a,e,t,n,l))l.stopPropagation();else if(Uf(e,l),t&4&&-1<q1.indexOf(e)){for(;a!==null;){var r=yl(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=nn(r.pendingLanes);if(o!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var b=1<<31-Me(o);d.entanglements[1]|=b,o&=~b}It(r),(He&6)===0&&(Lr=re()+500,Ua(0))}}break;case 13:d=wl(r,2),d!==null&&Gt(d,r,2),Pr(),z0(r,2)}if(r=w0(l),r===null&&p0(e,t,l,iu,n),r===a)break;a=r}a!==null&&l.stopPropagation()}else p0(e,t,l,null,n)}}function w0(e){return e=Hu(e),O0(e)}var iu=null;function O0(e){if(iu=null,e=gl(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return iu=e,null}function Bf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case De:return 2;case je:return 8;case Ze:case lt:return 32;case gt:return 268435456;default:return 32}default:return 32}}var A0=!1,Yn=null,Nn=null,kn=null,Za=new Map,Pa=new Map,qn=[],q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uf(e,t){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function Qa(e,t,n,l,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},t!==null&&(t=yl(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function L1(e,t,n,l,a){switch(t){case"focusin":return Yn=Qa(Yn,e,t,n,l,a),!0;case"dragenter":return Nn=Qa(Nn,e,t,n,l,a),!0;case"mouseover":return kn=Qa(kn,e,t,n,l,a),!0;case"pointerover":var r=a.pointerId;return Za.set(r,Qa(Za.get(r)||null,e,t,n,l,a)),!0;case"gotpointercapture":return r=a.pointerId,Pa.set(r,Qa(Pa.get(r)||null,e,t,n,l,a)),!0}return!1}function jf(e){var t=gl(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,U2(e.priority,function(){if(n.tag===13){var l=Ht();l=Su(l);var a=wl(n,l);a!==null&&Gt(a,n,l),z0(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=w0(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Eu=l,n.target.dispatchEvent(l),Eu=null}else return t=yl(n),t!==null&&Gf(t),e.blockedOn=n,!1;t.shift()}return!0}function Xf(e,t,n){cu(e)&&n.delete(t)}function Z1(){A0=!1,Yn!==null&&cu(Yn)&&(Yn=null),Nn!==null&&cu(Nn)&&(Nn=null),kn!==null&&cu(kn)&&(kn=null),Za.forEach(Xf),Pa.forEach(Xf)}function ou(e,t){e.blockedOn===t&&(e.blockedOn=null,A0||(A0=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Z1)))}var su=null;function Yf(e){su!==e&&(su=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){su===e&&(su=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(O0(l||n)===null)continue;break}var r=yl(n);r!==null&&(e.splice(t,3),t-=3,Oi(r,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Wa(e){function t(b){return ou(b,e)}Yn!==null&&ou(Yn,e),Nn!==null&&ou(Nn,e),kn!==null&&ou(kn,e),Za.forEach(t),Pa.forEach(t);for(var n=0;n<qn.length;n++){var l=qn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)jf(n),n.blockedOn===null&&qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],r=n[l+1],o=a[St]||null;if(typeof r=="function")o||Yf(n);else if(o){var d=null;if(r&&r.hasAttribute("formAction")){if(a=r,o=r[St]||null)d=o.formAction;else if(O0(a)!==null)continue}else d=o.action;typeof d=="function"?n[l+1]=d:(n.splice(l,3),l-=3),Yf(n)}}}function V0(e){this._internalRoot=e}fu.prototype.render=V0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=Ht();Ef(n,l,e,t,null,null)},fu.prototype.unmount=V0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ef(e.current,2,null,e,null,null),Pr(),t[pl]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qn.length&&t!==0&&t<qn[n].priority;n++);qn.splice(n,0,e),n===0&&jf(e)}};var Nf=u.version;if(Nf!=="19.1.1")throw Error(i(527,Nf,"19.1.1"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var P1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Xe=du.inject(P1),ze=du}catch{}}return Ja.createRoot=function(e,t){if(!f(e))throw Error(i(299));var n=!1,l="",a=ns,r=ls,o=as,d=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=Af(e,1,!1,null,null,n,l,a,r,o,d,null),e[pl]=t.current,m0(e),new V0(t)},Ja.hydrateRoot=function(e,t,n){if(!f(e))throw Error(i(299));var l=!1,a="",r=ns,o=ls,d=as,b=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=Af(e,1,!0,t,n??null,l,a,r,o,d,b,O),t.context=Vf(null),n=t.current,l=Ht(),l=Su(l),a=Dn(l),a.callback=null,zn(n,a,l),n=l,t.current.lanes=n,ea(t,n),It(t),e[pl]=t.current,m0(e),new fu(t)},Ja.version="19.1.1",Ja}var Ff;function nd(){if(Ff)return G0.exports;Ff=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),G0.exports=td(),G0.exports}var ld=nd();const ad=pu(ld);async function rd(){if(window.__wgpuDevice)return window.__wgpuDevice;const s=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!s)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=s;const u=await s.requestDevice();return u.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=u,u.lost.then(()=>{window.__wgpuDevice===u&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),u}/**
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
 */class R{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=R.NoiseType.OpenSimplex2;_RotationType3D=R.RotationType3D.None;_TransformType3D=R.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=R.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=R.CellularDistanceFunction.EuclideanSq;_CellularReturnType=R.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=R.DomainWarpType.OpenSimplex2;_WarpTransformType3D=R.TransformType3D.DefaultOpenSimplex2;constructor(u){u!==void 0&&(this._Seed=u)}SetSeed(u){this._Seed=u}SetFrequency(u){this._Frequency=u}SetNoiseType(u){this._NoiseType=u,this._UpdateTransformType3D()}SetRotationType3D(u){this._RotationType3D=u,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(u){this._FractalType=u}SetFractalOctaves(u){this._Octaves=u,this._CalculateFractalBounding()}SetFractalLacunarity(u){this._Lacunarity=u}SetFractalGain(u){this._Gain=u,this._CalculateFractalBounding()}SetFractalWeightedStrength(u){this._WeightedStrength=u}SetFractalPingPongStrength(u){this._PingPongStrength=u}SetCellularDistanceFunction(u){this._CellularDistanceFunction=u}SetCellularReturnType(u){this._CellularReturnType=u}SetCellularJitter(u){this._CellularJitterModifier=u}SetDomainWarpType(u){this._DomainWarpType=u,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(u){this._DomainWarpAmp=u}GetNoise(u,m,i){let f=(h,g)=>{switch(h*=this._Frequency,g*=this._Frequency,this._NoiseType){case R.NoiseType.OpenSimplex2:case R.NoiseType.OpenSimplex2S:const p=.5*(1.7320508075688772-1);let v=(h+g)*p;h+=v,g+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,h,g);case R.FractalType.FBm:return this._GenFractalFBmR2(h,g);case R.FractalType.Ridged:return this._GenFractalRidgedR2(h,g);case R.FractalType.PingPong:return this._GenFractalPingPongR2(h,g)}},c=(h,g,y)=>{switch(h*=this._Frequency,g*=this._Frequency,y*=this._Frequency,this._TransformType3D){case R.TransformType3D.ImproveXYPlanes:{let C=h+g,_=C*-.211324865405187;y*=.577350269189626,h+=_-y,g+=_-y,y+=C*.577350269189626;break}case R.TransformType3D.ImproveXZPlanes:{let C=h+y,_=C*-.211324865405187;g*=.577350269189626,h+=_-g,y+=_-g,g+=C*.577350269189626;break}case R.TransformType3D.DefaultOpenSimplex2:const p=2/3;let v=(h+g+y)*p;h=v-h,g=v-g,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,h,g,y);case R.FractalType.FBm:return this._GenFractalFBmR3(h,g,y);case R.FractalType.Ridged:return this._GenFractalRidgedR3(h,g,y);case R.FractalType.PingPong:return this._GenFractalPingPongR3(h,g,y)}};if(arguments.length===2)return f(u,m);if(arguments.length===3)return c(u,m,i)}DomainWrap(u){switch(this._FractalType){default:this._DomainWarpSingle(u);break;case R.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(u);break;case R.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(u);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(u,m,i){return u+i*(m-u)}static _InterpHermite(u){return u*u*(3-2*u)}static _InterpQuintic(u){return u*u*u*(u*(u*6-15)+10)}static _CubicLerp(u,m,i,f,c){let h=f-i-(u-m);return c*c*c*h+c*c*(u-m-h)+c*(i-u)+m}static _PingPong(u){return u-=Math.trunc(u*.5)*2,u<1?u:2-u}_CalculateFractalBounding(){let u=Math.abs(this._Gain),m=u,i=1;for(let f=1;f<this._Octaves;f++)i+=m,m*=u;this._FractalBounding=1/i}_HashR2(u,m,i){let f=u^m^i;return f=Math.imul(f,668265261),f}_HashR3(u,m,i,f){let c=u^m^i^f;return c=Math.imul(c,668265261),c}_ValCoordR2(u,m,i){let f=this._HashR2(u,m,i);return f=Math.imul(f,f),f^=f<<19,f*(1/2147483648)}_ValCoordR3(u,m,i,f){let c=this._HashR3(u,m,i,f);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(u,m,i,f,c){let h=this._HashR2(u,m,i);h^=h>>15,h&=254;let g=this._Gradients2D[h],y=this._Gradients2D[h|1];return f*g+c*y}_GradCoordR3(u,m,i,f,c,h,g){let y=this._HashR3(u,m,i,f);y^=y>>15,y&=252;let p=this._Gradients3D[y],v=this._Gradients3D[y|1],C=this._Gradients3D[y|2];return c*p+h*v+g*C}_GenNoiseSingleR2(u,m,i){switch(this._NoiseType){case R.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(u,m,i);case R.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(u,m,i);case R.NoiseType.Cellular:return this._SingleCellularR2(u,m,i);case R.NoiseType.Perlin:return this._SinglePerlinR2(u,m,i);case R.NoiseType.ValueCubic:return this._SingleValueCubicR2(u,m,i);case R.NoiseType.Value:return this._SingleValueR2(u,m,i);default:return 0}}_GenNoiseSingleR3(u,m,i,f){switch(this._NoiseType){case R.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(u,m,i,f);case R.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(u,m,i,f);case R.NoiseType.Cellular:return this._SingleCellularR3(u,m,i,f);case R.NoiseType.Perlin:return this._SinglePerlinR3(u,m,i,f);case R.NoiseType.ValueCubic:return this._SingleValueCubicR3(u,m,i,f);case R.NoiseType.Value:return this._SingleValueR3(u,m,i,f);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case R.RotationType3D.ImproveXYPlanes:this._TransformType3D=R.TransformType3D.ImproveXYPlanes;break;case R.RotationType3D.ImproveXZPlanes:this._TransformType3D=R.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case R.NoiseType.OpenSimplex2:case R.NoiseType.OpenSimplex2S:this._TransformType3D=R.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=R.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case R.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=R.TransformType3D.ImproveXYPlanes;break;case R.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=R.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case R.DomainWarpType.OpenSimplex2:case R.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=R.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=R.TransformType3D.None;break}break}}_GenFractalFBmR2(u,m){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=this._GenNoiseSingleR2(i++,u,m);f+=g*c,c*=R._Lerp(1,Math.min(g+1,2)*.5,this._WeightedStrength),u*=this._Lacunarity,m*=this._Lacunarity,c*=this._Gain}return f}_GenFractalFBmR3(u,m,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=this._GenNoiseSingleR3(f++,u,m,i);c+=y*h,h*=R._Lerp(1,(y+1)*.5,this._WeightedStrength),u*=this._Lacunarity,m*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalRidgedR2(u,m){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=Math.abs(this._GenNoiseSingleR2(i++,u,m));f+=(g*-2+1)*c,c*=R._Lerp(1,1-g,this._WeightedStrength),u*=this._Lacunarity,m*=this._Lacunarity,c*=this._Gain}return f}_GenFractalRidgedR3(u,m,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=Math.abs(this._GenNoiseSingleR3(f++,u,m,i));c+=(y*-2+1)*h,h*=R._Lerp(1,1-y,this._WeightedStrength),u*=this._Lacunarity,m*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_GenFractalPingPongR2(u,m){let i=this._Seed,f=0,c=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=R._PingPong((this._GenNoiseSingleR2(i++,u,m)+1)*this._PingPongStrength);f+=(g-.5)*2*c,c*=R._Lerp(1,g,this._WeightedStrength),u*=this._Lacunarity,m*=this._Lacunarity,c*=this._Gain}return f}_GenFractalPingPongR3(u,m,i){let f=this._Seed,c=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=R._PingPong((this._GenNoiseSingleR3(f++,u,m,i)+1)*this._PingPongStrength);c+=(y-.5)*2*h,h*=R._Lerp(1,y,this._WeightedStrength),u*=this._Lacunarity,m*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return c}_SingleOpenSimplex2R2(u,m,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(m),g=Math.floor(i),y=m-h,p=i-g,v=(y+p)*c,C=y-v,_=p-v;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let D,w,Y,B=.5-C*C-_*_;B<=0?D=0:D=B*B*(B*B)*this._GradCoordR2(u,h,g,C,_);let q=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+B);if(q<=0)Y=0;else{let G=C+(2*c-1),U=_+(2*c-1);Y=q*q*(q*q)*this._GradCoordR2(u,h+this._PrimeX,g+this._PrimeY,G,U)}if(_>C){let G=C+c,U=_+(c-1),L=.5-G*G-U*U;L<=0?w=0:w=L*L*(L*L)*this._GradCoordR2(u,h,g+this._PrimeY,G,U)}else{let G=C+(c-1),U=_+c,L=.5-G*G-U*U;L<=0?w=0:w=L*L*(L*L)*this._GradCoordR2(u,h+this._PrimeX,g,G,U)}return(D+w+Y)*99.83685446303647}_SingleOpenSimplex2R3(u,m,i,f){let c=Math.round(m),h=Math.round(i),g=Math.round(f),y=m-c,p=i-h,v=f-g,C=Math.trunc(-1-p|1),_=Math.trunc(-1-y|1),D=Math.trunc(-1-v|1),w=_*-y,Y=C*-p,B=D*-v;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let q=0,G=.6-y*y-(p*p+v*v);for(let U=0;;U++){if(G>0&&(q+=G*G*(G*G)*this._GradCoordR3(u,c,h,g,y,p,v)),w>=Y&&w>=B){let L=G+w+w;L>1&&(L-=1,q+=L*L*(L*L)*this._GradCoordR3(u,c-_*this._PrimeX,h,g,y+_,p,v))}else if(Y>w&&Y>=B){let L=G+Y+Y;L>1&&(L-=1,q+=L*L*(L*L)*this._GradCoordR3(u,c,h-C*this._PrimeY,g,y,p+C,v))}else{let L=G+B+B;L>1&&(L-=1,q+=L*L*(L*L)*this._GradCoordR3(u,c,h,g-D*this._PrimeZ,y,p,v+D))}if(U===1)break;w=.5-w,Y=.5-Y,B=.5-B,y=_*w,p=C*Y,v=D*B,G+=.75-w-(Y+B),c+=_>>1&this._PrimeX,h+=C>>1&this._PrimeY,g+=D>>1&this._PrimeZ,_=-_,C=-C,D=-D,u=~u}return q*32.69428253173828}_SingleOpenSimplex2SR2(u,m,i){const c=(3-1.7320508075688772)/6;let h=Math.floor(m),g=Math.floor(i),y=m-h,p=i-g;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let v=h+this._PrimeX,C=g+this._PrimeY,_=(y+p)*c,D=y-_,w=p-_,Y=2/3-D*D-w*w,B=Y*Y*(Y*Y)*this._GradCoordR2(u,h,g,D,w),q=2*(1-2*c)*(1/c-2)*_+(-2*(1-2*c)*(1-2*c)+Y),G=D-(1-2*c),U=w-(1-2*c);B+=q*q*(q*q)*this._GradCoordR2(u,v,C,G,U);let L=y-p;if(_>c){if(y+L>1){let j=D+(3*c-2),Q=w+(3*c-1),X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h+(this._PrimeX<<1),g+this._PrimeY,j,Q))}else{let j=D+c,Q=w+(c-1),X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h,g+this._PrimeY,j,Q))}if(p-L>1){let j=D+(3*c-1),Q=w+(3*c-2),X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h+this._PrimeX,g+(this._PrimeY<<1),j,Q))}else{let j=D+(c-1),Q=w+c,X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h+this._PrimeX,g,j,Q))}}else{if(y+L<0){let j=D+(1-c),Q=w-c,X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h-this._PrimeX,g,j,Q))}else{let j=D+(c-1),Q=w+c,X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h+this._PrimeX,g,j,Q))}if(p<L){let j=D-c,Q=w-(c-1),X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h,g-this._PrimeY,j,Q))}else{let j=D+c,Q=w+(c-1),X=2/3-j*j-Q*Q;X>0&&(B+=X*X*(X*X)*this._GradCoordR2(u,h,g+this._PrimeY,j,Q))}}return B*18.24196194486065}_SingleOpenSimplex2SR3(u,m,i,f){let c=Math.floor(m),h=Math.floor(i),g=Math.floor(f),y=m-c,p=i-h,v=f-g;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=u+1293373,_=Math.trunc(-.5-y),D=Math.trunc(-.5-p),w=Math.trunc(-.5-v),Y=y+_,B=p+D,q=v+w,G=.75-Y*Y-B*B-q*q,U=G*G*(G*G)*this._GradCoordR3(u,c+(_&this._PrimeX),h+(D&this._PrimeY),g+(w&this._PrimeZ),Y,B,q),L=y-.5,j=p-.5,Q=v-.5,X=.75-L*L-j*j-Q*Q;U+=X*X*(X*X)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,g+this._PrimeZ,L,j,Q);let ce=((_|1)<<1)*L,te=((D|1)<<1)*j,ge=((w|1)<<1)*Q,xe=(-2-(_<<2))*L-1,ue=(-2-(D<<2))*j-1,me=(-2-(w<<2))*Q-1,we=!1,pe=ce+G;if(pe>0){let x=Y-(_|1);U+=pe*pe*(pe*pe)*this._GradCoordR3(u,c+(~_&this._PrimeX),h+(D&this._PrimeY),g+(w&this._PrimeZ),x,B,q)}else{let x=te+ge+G;if(x>0){let P=Y,N=B-(D|1),J=q-(w|1);U+=x*x*(x*x)*this._GradCoordR3(u,c+(_&this._PrimeX),h+(~D&this._PrimeY),g+(~w&this._PrimeZ),P,N,J)}let A=xe+X;if(A>0){let P=(_|1)+L;U+=A*A*(A*A)*this._GradCoordR3(C,c+(_&this._PrimeX*2),h+this._PrimeY,g+this._PrimeZ,P,j,Q),we=!0}}let H=!1,K=te+G;if(K>0){let x=Y,A=B-(D|1);U+=K*K*(K*K)*this._GradCoordR3(u,c+(_&this._PrimeX),h+(~D&this._PrimeY),g+(w&this._PrimeZ),x,A,q)}else{let x=ce+ge+G;if(x>0){let P=Y-(_|1),N=B,J=q-(w|1);U+=x*x*(x*x)*this._GradCoordR3(u,c+(~_&this._PrimeX),h+(D&this._PrimeY),g+(~w&this._PrimeZ),P,N,J)}let A=ue+X;if(A>0){let P=L,N=(D|1)+j;U+=A*A*(A*A)*this._GradCoordR3(C,c+this._PrimeX,h+(D&this._PrimeY<<1),g+this._PrimeZ,P,N,Q),H=!0}}let $=!1,I=ge+G;if(I>0){let x=Y,A=B,P=q-(w|1);U+=I*I*(I*I)*this._GradCoordR3(u,c+(_&this._PrimeX),h+(D&this._PrimeY),g+(~w&this._PrimeZ),x,A,P)}else{let x=ce+te+G;if(x>0){let P=Y-(_|1),N=B-(D|1);U+=x*x*(x*x)*this._GradCoordR3(u,c+(~_&this._PrimeX),h+(~D&this._PrimeY),g+(w&this._PrimeZ),P,N,q)}let A=me+X;if(A>0){let P=L,N=j,J=(w|1)+Q;U+=A*A*(A*A)*this._GradCoordR3(C,c+this._PrimeX,h+this._PrimeY,g+(w&this._PrimeZ<<1),P,N,J),$=!0}}if(!we){let x=ue+me+X;if(x>0){let A=L,P=(D|1)+j,N=(w|1)+Q;U+=x*x*(x*x)*this._GradCoordR3(C,c+this._PrimeX,h+(D&this._PrimeY<<1),g+(w&this._PrimeZ<<1),A,P,N)}}if(!H){let x=xe+me+X;if(x>0){let A=(_|1)+L,P=j,N=(w|1)+Q;U+=x*x*(x*x)*this._GradCoordR3(C,c+(_&this._PrimeX*2),h+this._PrimeY,g+(w&this._PrimeZ<<1),A,P,N)}}if(!$){let x=xe+ue+X;if(x>0){let A=(_|1)+L,P=(D|1)+j;U+=x*x*(x*x)*this._GradCoordR3(C,c+(_&this._PrimeX<<1),h+(D&this._PrimeY<<1),g+this._PrimeZ,A,P,Q)}}return U*9.046026385208288}_SingleCellularR2(u,m,i){let f=Math.round(m),c=Math.round(i),h=Number.MAX_VALUE,g=Number.MAX_VALUE,y=0,p=.43701595*this._CellularJitterModifier,v=(f-1)*this._PrimeX,C=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case R.CellularDistanceFunction.Euclidean:case R.CellularDistanceFunction.EuclideanSq:for(let _=f-1;_<=f+1;_++){let D=C;for(let w=c-1;w<=c+1;w++){let Y=this._HashR2(u,v,D),B=Y&510,q=_-m+this._RandVecs2D[B]*p,G=w-i+this._RandVecs2D[B|1]*p,U=q*q+G*G;g=Math.max(Math.min(g,U),h),U<h&&(h=U,y=Y),D+=this._PrimeY}v+=this._PrimeX}break;case R.CellularDistanceFunction.Manhattan:for(let _=f-1;_<=f+1;_++){let D=C;for(let w=c-1;w<=c+1;w++){let Y=this._HashR2(u,v,D),B=Y&510,q=_-m+this._RandVecs2D[B]*p,G=w-i+this._RandVecs2D[B|1]*p,U=Math.abs(q)+Math.abs(G);g=Math.max(Math.min(g,U),h),U<h&&(h=U,y=Y),D+=this._PrimeY}v+=this._PrimeX}break;case R.CellularDistanceFunction.Hybrid:for(let _=f-1;_<=f+1;_++){let D=C;for(let w=c-1;w<=c+1;w++){let Y=this._HashR2(u,v,D),B=Y&510,q=_-m+this._RandVecs2D[B]*p,G=w-i+this._RandVecs2D[B|1]*p,U=Math.abs(q)+Math.abs(G)+(q*q+G*G);g=Math.max(Math.min(g,U),h),U<h&&(h=U,y=Y),D+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===R.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==R.CellularReturnType.CellValue&&(h=Math.sqrt(h),this._CellularReturnType!==R.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case R.CellularReturnType.CellValue:return y*(1/2147483648);case R.CellularReturnType.Distance:return h-1;case R.CellularReturnType.Distance2:return g-1;case R.CellularReturnType.Distance2Add:return(g+h)*.5-1;case R.CellularReturnType.Distance2Sub:return g-h-1;case R.CellularReturnType.Distance2Mul:return g*h*.5-1;case R.CellularReturnType.Distance2Div:return h/g-1;default:return 0}}_SingleCellularR3(u,m,i,f){let c=Math.round(m),h=Math.round(i),g=Math.round(f),y=Number.MAX_VALUE,p=Number.MAX_VALUE,v=0,C=.39614353*this._CellularJitterModifier,_=(c-1)*this._PrimeX,D=(h-1)*this._PrimeY,w=(g-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case R.CellularDistanceFunction.Euclidean:case R.CellularDistanceFunction.EuclideanSq:for(let Y=c-1;Y<=c+1;Y++){let B=D;for(let q=h-1;q<=h+1;q++){let G=w;for(let U=g-1;U<=g+1;U++){let L=this._HashR3(u,_,B,G),j=L&1020,Q=Y-m+this._RandVecs3D[j]*C,X=q-i+this._RandVecs3D[j|1]*C,ce=U-f+this._RandVecs3D[j|2]*C,te=Q*Q+X*X+ce*ce;p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=L),G+=this._PrimeZ}B+=this._PrimeY}_+=this._PrimeX}break;case R.CellularDistanceFunction.Manhattan:for(let Y=c-1;Y<=c+1;Y++){let B=D;for(let q=h-1;q<=h+1;q++){let G=w;for(let U=g-1;U<=g+1;U++){let L=this._HashR3(u,_,B,G),j=L&1020,Q=Y-m+this._RandVecs3D[j]*C,X=q-i+this._RandVecs3D[j|1]*C,ce=U-f+this._RandVecs3D[j|2]*C,te=Math.abs(Q)+Math.abs(X)+Math.abs(ce);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=L),G+=this._PrimeZ}B+=this._PrimeY}_+=this._PrimeX}break;case R.CellularDistanceFunction.Hybrid:for(let Y=c-1;Y<=c+1;Y++){let B=D;for(let q=h-1;q<=h+1;q++){let G=w;for(let U=g-1;U<=g+1;U++){let L=this._HashR3(u,_,B,G),j=L&1020,Q=Y-m+this._RandVecs3D[j]*C,X=q-i+this._RandVecs3D[j|1]*C,ce=U-f+this._RandVecs3D[j|2]*C,te=Math.abs(Q)+Math.abs(X)+Math.abs(ce)+(Q*Q+X*X+ce*ce);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=L),G+=this._PrimeZ}B+=this._PrimeY}_+=this._PrimeX}break}switch(this._CellularDistanceFunction===R.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==R.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==R.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case R.CellularReturnType.CellValue:return v*(1/2147483648);case R.CellularReturnType.Distance:return y-1;case R.CellularReturnType.Distance2:return p-1;case R.CellularReturnType.Distance2Add:return(p+y)*.5-1;case R.CellularReturnType.Distance2Sub:return p-y-1;case R.CellularReturnType.Distance2Mul:return p*y*.5-1;case R.CellularReturnType.Distance2Div:return y/p-1;default:return 0}}_SinglePerlinR2(u,m,i){let f=Math.floor(m),c=Math.floor(i),h=m-f,g=i-c,y=h-1,p=g-1,v=R._InterpQuintic(h),C=R._InterpQuintic(g);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let _=f+this._PrimeX,D=c+this._PrimeY,w=R._Lerp(this._GradCoordR2(u,f,c,h,g),this._GradCoordR2(u,_,c,y,g),v),Y=R._Lerp(this._GradCoordR2(u,f,D,h,p),this._GradCoordR2(u,_,D,y,p),v);return R._Lerp(w,Y,C)*1.4247691104677813}_SinglePerlinR3(u,m,i,f){let c=Math.floor(m),h=Math.floor(i),g=Math.floor(f),y=m-c,p=i-h,v=f-g,C=y-1,_=p-1,D=v-1,w=R._InterpQuintic(y),Y=R._InterpQuintic(p),B=R._InterpQuintic(v);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let q=c+this._PrimeX,G=h+this._PrimeY,U=g+this._PrimeZ,L=R._Lerp(this._GradCoordR3(u,c,h,g,y,p,v),this._GradCoordR3(u,q,h,g,C,p,v),w),j=R._Lerp(this._GradCoordR3(u,c,G,g,y,_,v),this._GradCoordR3(u,q,G,g,C,_,v),w),Q=R._Lerp(this._GradCoordR3(u,c,h,U,y,p,D),this._GradCoordR3(u,q,h,U,C,p,D),w),X=R._Lerp(this._GradCoordR3(u,c,G,U,y,_,D),this._GradCoordR3(u,q,G,U,C,_,D),w),ce=R._Lerp(L,j,Y),te=R._Lerp(Q,X,Y);return R._Lerp(ce,te,B)*.9649214148521423}_SingleValueCubicR2(u,m,i){let f=Math.floor(m),c=Math.floor(i),h=m-f,g=i-c;f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f-this._PrimeX,p=c-this._PrimeY,v=f+this._PrimeX,C=c+this._PrimeY,_=f+(this._PrimeX<<1),D=c+(this._PrimeY<<1);return R._CubicLerp(R._CubicLerp(this._ValCoordR2(u,y,p),this._ValCoordR2(u,f,p),this._ValCoordR2(u,v,p),this._ValCoordR2(u,_,p),h),R._CubicLerp(this._ValCoordR2(u,y,c),this._ValCoordR2(u,f,c),this._ValCoordR2(u,v,c),this._ValCoordR2(u,_,c),h),R._CubicLerp(this._ValCoordR2(u,y,C),this._ValCoordR2(u,f,C),this._ValCoordR2(u,v,C),this._ValCoordR2(u,_,C),h),R._CubicLerp(this._ValCoordR2(u,y,D),this._ValCoordR2(u,f,D),this._ValCoordR2(u,v,D),this._ValCoordR2(u,_,D),h),g)*(1/(1.5*1.5))}_SingleValueCubicR3(u,m,i,f){let c=Math.floor(m),h=Math.floor(i),g=Math.floor(f),y=m-c,p=i-h,v=f-g;c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c-this._PrimeX,_=h-this._PrimeY,D=g-this._PrimeZ,w=c+this._PrimeX,Y=h+this._PrimeY,B=g+this._PrimeZ,q=c+(this._PrimeX<<1),G=h+(this._PrimeY<<1),U=g+(this._PrimeZ<<1);return R._CubicLerp(R._CubicLerp(R._CubicLerp(this._ValCoordR3(u,C,_,D),this._ValCoordR3(u,c,_,D),this._ValCoordR3(u,w,_,D),this._ValCoordR3(u,q,_,D),y),R._CubicLerp(this._ValCoordR3(u,C,h,D),this._ValCoordR3(u,c,h,D),this._ValCoordR3(u,w,h,D),this._ValCoordR3(u,q,h,D),y),R._CubicLerp(this._ValCoordR3(u,C,Y,D),this._ValCoordR3(u,c,Y,D),this._ValCoordR3(u,w,Y,D),this._ValCoordR3(u,q,Y,D),y),R._CubicLerp(this._ValCoordR3(u,C,G,D),this._ValCoordR3(u,c,G,D),this._ValCoordR3(u,w,G,D),this._ValCoordR3(u,q,G,D),y),p),R._CubicLerp(R._CubicLerp(this._ValCoordR3(u,C,_,g),this._ValCoordR3(u,c,_,g),this._ValCoordR3(u,w,_,g),this._ValCoordR3(u,q,_,g),y),R._CubicLerp(this._ValCoordR3(u,C,h,g),this._ValCoordR3(u,c,h,g),this._ValCoordR3(u,w,h,g),this._ValCoordR3(u,q,h,g),y),R._CubicLerp(this._ValCoordR3(u,C,Y,g),this._ValCoordR3(u,c,Y,g),this._ValCoordR3(u,w,Y,g),this._ValCoordR3(u,q,Y,g),y),R._CubicLerp(this._ValCoordR3(u,C,G,g),this._ValCoordR3(u,c,G,g),this._ValCoordR3(u,w,G,g),this._ValCoordR3(u,q,G,g),y),p),R._CubicLerp(R._CubicLerp(this._ValCoordR3(u,C,_,B),this._ValCoordR3(u,c,_,B),this._ValCoordR3(u,w,_,B),this._ValCoordR3(u,q,_,B),y),R._CubicLerp(this._ValCoordR3(u,C,h,B),this._ValCoordR3(u,c,h,B),this._ValCoordR3(u,w,h,B),this._ValCoordR3(u,q,h,B),y),R._CubicLerp(this._ValCoordR3(u,C,Y,B),this._ValCoordR3(u,c,Y,B),this._ValCoordR3(u,w,Y,B),this._ValCoordR3(u,q,Y,B),y),R._CubicLerp(this._ValCoordR3(u,C,G,B),this._ValCoordR3(u,c,G,B),this._ValCoordR3(u,w,G,B),this._ValCoordR3(u,q,G,B),y),p),R._CubicLerp(R._CubicLerp(this._ValCoordR3(u,C,_,U),this._ValCoordR3(u,c,_,U),this._ValCoordR3(u,w,_,U),this._ValCoordR3(u,q,_,U),y),R._CubicLerp(this._ValCoordR3(u,C,h,U),this._ValCoordR3(u,c,h,U),this._ValCoordR3(u,w,h,U),this._ValCoordR3(u,q,h,U),y),R._CubicLerp(this._ValCoordR3(u,C,Y,U),this._ValCoordR3(u,c,Y,U),this._ValCoordR3(u,w,Y,U),this._ValCoordR3(u,q,Y,U),y),R._CubicLerp(this._ValCoordR3(u,C,G,U),this._ValCoordR3(u,c,G,U),this._ValCoordR3(u,w,G,U),this._ValCoordR3(u,q,G,U),y),p),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(u,m,i){let f=Math.floor(m),c=Math.floor(i),h=R._InterpHermite(m-f),g=R._InterpHermite(i-c);f=Math.imul(f,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=f+this._PrimeX,p=c+this._PrimeY,v=R._Lerp(this._ValCoordR2(u,f,c),this._ValCoordR2(u,y,c),h),C=R._Lerp(this._ValCoordR2(u,f,p),this._ValCoordR2(u,y,p),h);return R._Lerp(v,C,g)}_SingleValueR3(u,m,i,f){let c=Math.floor(m),h=Math.floor(i),g=Math.floor(f),y=R._InterpHermite(m-c),p=R._InterpHermite(i-h),v=R._InterpHermite(f-g);c=Math.imul(c,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let C=c+this._PrimeX,_=h+this._PrimeY,D=g+this._PrimeZ,w=R._Lerp(this._ValCoordR3(u,c,h,g),this._ValCoordR3(u,C,h,g),y),Y=R._Lerp(this._ValCoordR3(u,c,_,g),this._ValCoordR3(u,C,_,g),y),B=R._Lerp(this._ValCoordR3(u,c,h,D),this._ValCoordR3(u,C,h,D),y),q=R._Lerp(this._ValCoordR3(u,c,_,D),this._ValCoordR3(u,C,_,D),y),G=R._Lerp(w,Y,p),U=R._Lerp(B,q,p);return R._Lerp(G,U,v)}_DoSingleDomainWarp(){let u=(i,f,c,h,g,y)=>{switch(this._DomainWarpType){case R.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*38.283687591552734,c,h,!1,g,y);break;case R.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*16,c,h,!0,g,y);break;case R.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,g,y);break}},m=(i,f,c,h,g,y,p)=>{switch(this._DomainWarpType){case R.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,f*32.69428253173828,c,h,!1,g,y,p);break;case R.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,f*7.71604938271605,c,h,!0,g,y,p);break;case R.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,f,c,h,g,y,p);break}};if(arguments.length===6&&arguments[3]instanceof Fa)return u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof $a)return m(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let u=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y;switch(this._DomainWarpType){case R.DomainWarpType.OpenSimplex2:case R.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(g+y)*v;g+=C,y+=C;break}this._DoSingleDomainWarp(f,c,h,i,g,y)},m=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y,p=i.z;switch(this._WarpTransformType3D){case R.TransformType3D.ImproveXYPlanes:{let _=g+y,D=_*-.211324865405187;p*=.577350269189626,g+=D-p,y=y+D-p,p+=_*.577350269189626}break;case R.TransformType3D.ImproveXZPlanes:{let _=g+p,D=_*-.211324865405187;y*=.577350269189626,g+=D-y,p+=D-y,y+=_*.577350269189626}break;case R.TransformType3D.DefaultOpenSimplex2:const v=2/3;let C=(g+y+p)*v;g=C-g,y=C-y,p=C-p;break}this._DoSingleDomainWarp(f,c,h,i,g,y,p)};if(arguments.length===1&&arguments[0]instanceof Fa)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof $a)return m(arguments[0])}_DomainWarpFractalProgressive(){let u=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y;switch(this._DomainWarpType){case R.DomainWarpType.OpenSimplex2:case R.DomainWarpType.OpenSimplex2Reduced:const C=.5*(1.7320508075688772-1);let _=(y+p)*C;y+=_,p+=_;break}this._DoSingleDomainWarp(f,c,h,i,y,p),f++,c*=this._Gain,h*=this._Lacunarity}},m=i=>{let f=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y,v=i.z;switch(this._WarpTransformType3D){case R.TransformType3D.ImproveXYPlanes:{let C=y+p,_=C*-.211324865405187;v*=.577350269189626,y+=_-v,p=p+_-v,v+=C*.577350269189626}break;case R.TransformType3D.ImproveXZPlanes:{let C=y+v,_=C*-.211324865405187;p*=.577350269189626,y+=_-p,v+=_-p,p+=C*.577350269189626}break;case R.TransformType3D.DefaultOpenSimplex2:{let _=(y+p+v)*.6666666666666666;y=_-y,p=_-p,v=_-v}break}this._DoSingleDomainWarp(f,c,h,i,y,p,v),f++,c*=this._Gain,h*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof Fa)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof $a)return m(arguments[0])}_DomainWarpFractalIndependent(){let u=i=>{let f=i.x,c=i.y;switch(this._DomainWarpType){case R.DomainWarpType.OpenSimplex2:case R.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let C=(f+c)*v;f+=C,c+=C;break}let h=this._Seed,g=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let p=0;p<this._Octaves;p++)this._DoSingleDomainWarp(h,g,y,i,f,c),h++,g*=this._Gain,y*=this._Lacunarity},m=i=>{let f=i.x,c=i.y,h=i.z;switch(this._WarpTransformType3D){case R.TransformType3D.ImproveXYPlanes:{let v=f+c,C=v*-.211324865405187;h*=.577350269189626,f+=C-h,c=c+C-h,h+=v*.577350269189626}break;case R.TransformType3D.ImproveXZPlanes:{let v=f+h,C=v*-.211324865405187;c*=.577350269189626,f+=C-c,h+=C-c,c+=v*.577350269189626}break;case R.TransformType3D.DefaultOpenSimplex2:{let C=(f+c+h)*.6666666666666666;f=C-f,c=C-c,h=C-h}break}let g=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,p=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(g,y,p,i,f,c,h),g++,y*=this._Gain,p*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof Fa)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof $a)return m(arguments[0])}_SingleDomainWarpBasicGrid(){let u=(i,f,c,h,g,y)=>{let p=g*c,v=y*c,C=Math.floor(p),_=Math.floor(v),D=R._InterpHermite(p-C),w=R._InterpHermite(v-_);C=Math.imul(C,this._PrimeX),_=Math.imul(_,this._PrimeY);let Y=C+this._PrimeX,B=_+this._PrimeY,q=this._HashR2(i,C,_)&510,G=this._HashR2(i,Y,_)&510,U=R._Lerp(this._RandVecs2D[q],this._RandVecs2D[G],D),L=R._Lerp(this._RandVecs2D[q|1],this._RandVecs2D[G|1],D);q=this._HashR2(i,C,B)&510,G=this._HashR2(i,Y,B)&510;let j=R._Lerp(this._RandVecs2D[q],this._RandVecs2D[G],D),Q=R._Lerp(this._RandVecs2D[q|1],this._RandVecs2D[G|1],D);h.x+=R._Lerp(U,j,w)*f,h.y+=R._Lerp(L,Q,w)*f},m=(i,f,c,h,g,y,p)=>{let v=g*c,C=y*c,_=p*c,D=Math.floor(v),w=Math.floor(C),Y=Math.floor(_),B=R._InterpHermite(v-D),q=R._InterpHermite(C-w),G=R._InterpHermite(_-Y);D=Math.imul(D,this._PrimeX),w=Math.imul(w,this._PrimeY),Y=Math.imul(Y,this._PrimeZ);let U=D+this._PrimeX,L=w+this._PrimeY,j=Y+this._PrimeZ,Q=this._HashR3(i,D,w,Y)&1020,X=this._HashR3(i,U,w,Y)&1020,ce=R._Lerp(this._RandVecs3D[Q],this._RandVecs3D[X],B),te=R._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[X|1],B),ge=R._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[X|2],B);Q=this._HashR3(i,D,L,Y)&1020,X=this._HashR3(i,U,L,Y)&1020;let xe=R._Lerp(this._RandVecs3D[Q],this._RandVecs3D[X],B),ue=R._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[X|1],B),me=R._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[X|2],B),we=R._Lerp(ce,xe,q),pe=R._Lerp(te,ue,q),H=R._Lerp(ge,me,q);Q=this._HashR3(i,D,w,j)&1020,X=this._HashR3(i,U,w,j)&1020,ce=R._Lerp(this._RandVecs3D[Q],this._RandVecs3D[X],B),te=R._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[X|1],B),ge=R._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[X|2],B),Q=this._HashR3(i,D,L,j)&1020,X=this._HashR3(i,U,L,j)&1020,xe=R._Lerp(this._RandVecs3D[Q],this._RandVecs3D[X],B),ue=R._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[X|1],B),me=R._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[X|2],B),h.x+=R._Lerp(we,R._Lerp(ce,xe,q),G)*f,h.y+=R._Lerp(pe,R._Lerp(te,ue,q),G)*f,h.z+=R._Lerp(H,R._Lerp(ge,me,q),G)*f};arguments.length===6&&arguments[3]instanceof Fa&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof $a&&m(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let u=(i,f,c,h,g,y,p)=>{const C=(3-1.7320508075688772)/6;y*=c,p*=c;let _=Math.floor(y),D=Math.floor(p),w=y-_,Y=p-D,B=(w+Y)*C,q=w-B,G=Y-B;_=Math.imul(_,this._PrimeX),D=Math.imul(D,this._PrimeY);let U,L;U=L=0;let j=.5-q*q-G*G;if(j>0){let X=j*j*(j*j),ce,te;if(g){let ge=this._HashR2(i,_,D)&510;ce=this._RandVecs2D[ge],te=this._RandVecs2D[ge|1]}else{let ge=this._HashR2(i,_,D),xe=ge&254,ue=ge>>7&510,me=this._Gradients2D[xe],we=this._Gradients2D[xe|1],pe=q*me+G*we,H=this._RandVecs2D[ue],K=this._RandVecs2D[ue|1];ce=pe*H,te=pe*K}U+=X*ce,L+=X*te}let Q=2*(1-2*C)*(1/C-2)*B+(-2*(1-2*C)*(1-2*C)+j);if(Q>0){let X=q+(2*C-1),ce=G+(2*C-1),te=Q*Q*(Q*Q),ge,xe;if(g){let ue=this._HashR2(i,_+this._PrimeX,D+this._PrimeY)&510;ge=this._RandVecs2D[ue],xe=this._RandVecs2D[ue|1]}else{let ue=this._HashR2(i,_+this._PrimeX,D+this._PrimeY),me=ue&254,we=ue>>7&510,pe=this._Gradients2D[me],H=this._Gradients2D[me|1],K=X*pe+ce*H,$=this._RandVecs2D[we],I=this._RandVecs2D[we|1];ge=K*$,xe=K*I}U+=te*ge,L+=te*xe}if(G>q){let X=q+C,ce=G+(C-1),te=.5-X*X-ce*ce;if(te>0){let ge=te*te*(te*te),xe,ue;if(g){let me=this._HashR2(i,_,D+this._PrimeY)&510;xe=this._RandVecs2D[me],ue=this._RandVecs2D[me|1]}else{let me=this._HashR2(i,_,D+this._PrimeY),we=me&254,pe=me>>7&510,H=this._Gradients2D[we],K=this._Gradients2D[we|1],$=X*H+ce*K,I=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];xe=$*I,ue=$*x}U+=ge*xe,L+=ge*ue}}else{let X=q+(C-1),ce=G+C,te=.5-X*X-ce*ce;if(te>0){let ge=te*te*(te*te),xe,ue;if(g){let me=this._HashR2(i,_+this._PrimeX,D)&510;xe=this._RandVecs2D[me],ue=this._RandVecs2D[me|1]}else{let me=this._HashR2(i,_+this._PrimeX,D),we=me&254,pe=me>>7&510,H=this._Gradients2D[we],K=this._Gradients2D[we|1],$=X*H+ce*K,I=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];xe=$*I,ue=$*x}U+=ge*xe,L+=ge*ue}}h.x+=U*f,h.y+=L*f},m=(i,f,c,h,g,y,p,v)=>{y*=c,p*=c,v*=c;let C=Math.round(y),_=Math.round(p),D=Math.round(v),w=y-C,Y=p-_,B=v-D,q=-w-1|1,G=-Y-1|1,U=-B-1|1,L=q*-w,j=G*-Y,Q=U*-B;C=Math.imul(C,this._PrimeX),_=Math.imul(_,this._PrimeY),D=Math.imul(D,this._PrimeZ);let X,ce,te;X=ce=te=0;let ge=.6-w*w-(Y*Y+B*B);for(let xe=0;;xe++){if(ge>0){let I=ge*ge*(ge*ge),x,A,P;if(g){let N=this._HashR3(i,C,_,D)&1020;x=this._RandVecs3D[N],A=this._RandVecs3D[N|1],P=this._RandVecs3D[N|2]}else{let N=this._HashR3(i,C,_,D),J=N&252,se=N>>6&1020,ae=this._Gradients3D[J],Be=this._Gradients3D[J|1],_e=this._Gradients3D[J|2],Ue=w*ae+Y*Be+B*_e,ut=this._RandVecs3D[se],dt=this._RandVecs3D[se|1],_t=this._RandVecs3D[se|2];x=Ue*ut,A=Ue*dt,P=Ue*_t}X+=I*x,ce+=I*A,te+=I*P}let ue=ge,me=C,we=_,pe=D,H=w,K=Y,$=B;if(L>=j&&L>=Q?(H+=q,ue=ue+L+L,me-=q*this._PrimeX):j>L&&j>=Q?(K+=G,ue=ue+j+j,we-=G*this._PrimeY):($+=U,ue=ue+Q+Q,pe-=U*this._PrimeZ),ue>1){ue-=1;let I=ue*ue*(ue*ue),x,A,P;if(g){let N=this._HashR3(i,me,we,pe)&1020;x=this._RandVecs3D[N],A=this._RandVecs3D[N|1],P=this._RandVecs3D[N|2]}else{let N=this._HashR3(i,me,we,pe),J=N&252,se=N>>6&1020,ae=this._Gradients3D[J],Be=this._Gradients3D[J|1],_e=this._Gradients3D[J|2],Ue=H*ae+K*Be+$*_e,ut=this._RandVecs3D[se],dt=this._RandVecs3D[se|1],_t=this._RandVecs3D[se|2];x=Ue*ut,A=Ue*dt,P=Ue*_t}X+=I*x,ce+=I*A,te+=I*P}if(xe===1)break;L=.5-L,j=.5-j,Q=.5-Q,w=q*L,Y=G*j,B=U*Q,ge+=.75-L-(j+Q),C+=q>>1&this._PrimeX,_+=G>>1&this._PrimeY,D+=U>>1&this._PrimeZ,q=-q,G=-G,U=-U,i+=1293373}h.x+=X*f,h.y+=ce*f,h.z+=te*f};arguments.length===7&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&m(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class Fa{constructor(u,m){this.x=u,this.y=m}}class $a{constructor(u,m,i){this.x=u,this.y=m,this.z=i}}function ud(s=42,u=1920,m=1080,i=R.NoiseType.Perlin,f=6,c=1.7,h=.5,g=R.FractalType.FBm,y=.003){const p=new R;p.SetNoiseType(i),p.SetSeed(s),p.SetFractalOctaves(f),p.SetFractalLacunarity(c),p.SetFractalGain(h),p.SetFractalType(g),p.SetFrequency(y);const v=[];for(let D=0;D<m;D++)for(let w=0;w<u;w++){const B=(p.GetNoise(w,D)+1)/2;v.push(B)}var C=0,_=0;for(let D=0;D<v.length;D++)(v[D]<C||D==0)&&(C=v[D]),(v[D]>_||D==0)&&(_=v[D]);for(let D=0;D<v.length;D++)v[D]=(v[D]-C)/(_-C);return v}const id=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
}`,fd=`@fragment\r
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
    var combinedColor = vec4f(0.0, 0.0, 0.0, 0.0);\r
    combinedColor = over_rgba(combinedColor, terrainColor);\r
    combinedColor = over_rgba(combinedColor, shadowColor);\r
    combinedColor = over_rgba(combinedColor, fluidColor);\r
    combinedColor = over_rgba(combinedColor, cursorOutline);\r
    if(uView.showDebug > 0u) { combinedColor = over_rgba(combinedColor, debugColor); }\r
\r
    return combinedColor;\r
}`,u2=`//{colors}\r
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
//{chunk_data_calc}`,dd=`struct View {\r
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
};`,hd=`// Fullscreen triangle VS\r
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
}`,md=`const MAX_SLICES_PER_CELL : u32 = 3u;\r
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
`,pd=`@compute @workgroup_size(1, 1, 1)\r
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
`,gd=`@compute @workgroup_size(1, 1, 1)\r
fn cursor_query(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    if(gid.x > 0) { return; }\r
\r
    let i = idx(uInput.mousePos.x, uInput.mousePos.y);\r
    var cell = currentCells[i];\r
    // cell.height = roundedCellHeight(vec2(x,y));\r
    // cell.fAmount = roundedCellFAmount(vec2(x,y));\r
    cursorQuery.cell = cell;\r
}\r
`,yd=`@compute @workgroup_size(1, 1, 1)\r
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
`,vd=`// ---- Fragment shader ----\r
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
}`,xd=`@compute @workgroup_size(16, 16, 1)\r
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
`,bd=`@compute @workgroup_size(16, 16, 1)\r
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
`,_d=`@compute @workgroup_size(16, 16, 1)\r
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
`,Cd=`@compute @workgroup_size(16, 16, 1)\r
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
    outputTex[idx(x,y) + idOffset] = finalColor;\r
}\r
`,Sd=`@compute @workgroup_size(16, 16, 1)\r
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
`,Td=`@compute @workgroup_size(16, 16, 1)\r
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
// }`,Rd=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":id,"../shaders/helpers/colors.wgsl":cd,"../shaders/helpers/flow_helpers.wgsl":od,"../shaders/helpers/helpers.wgsl":sd,"../shaders/main/fragment.wgsl":fd,"../shaders/main/shader_outline.wgsl":u2,"../shaders/main/structs.wgsl":dd,"../shaders/main/vertex.wgsl":hd,"../shaders/objects/object_def.wgsl":md,"../shaders/query/chunk_data_calc.wgsl":pd,"../shaders/query/cursor_query.wgsl":gd,"../shaders/query/total_query.wgsl":yd,"../shaders/realtime_frag.wgsl":vd,"../shaders/render/debug_render_compute.wgsl":xd,"../shaders/render/fluid_render_compute.wgsl":bd,"../shaders/render/normal_compute.wgsl":_d,"../shaders/render/shadow_render_compute.wgsl":Cd,"../shaders/render/terrain_render_compute.wgsl":Sd,"../shaders/simulation/step_compute.wgsl":Td});function Dd(){let s=u2;for(const[u,m]of Object.entries(Rd)){const i=u.split("/").pop().replace(".wgsl","");s=s.replace(`//{${i}}`,m)}return s}var X0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var $f;function zd(){return $f||($f=1,(function(s){(function(){var u={}.hasOwnProperty;function m(){for(var c="",h=0;h<arguments.length;h++){var g=arguments[h];g&&(c=f(c,i(g)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return m.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var h="";for(var g in c)u.call(c,g)&&c[g]&&(h=f(h,g));return h}function f(c,h){return h?c?c+" "+h:c+h:c}s.exports?(m.default=m,s.exports=m):window.classNames=m})()})(X0)),X0.exports}var Md=zd();const Ee=pu(Md),wd=["xxl","xl","lg","md","sm","xs"],Od="xs",gu=F.createContext({prefixes:{},breakpoints:wd,minBreakpoint:Od}),{Consumer:wh,Provider:Oh}=gu;function Le(s,u){const{prefixes:m}=F.useContext(gu);return s||m[u]||u}function i2(){const{breakpoints:s}=F.useContext(gu);return s}function c2(){const{minBreakpoint:s}=F.useContext(gu);return s}var Y0={exports:{}},N0,If;function Ad(){if(If)return N0;If=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return N0=s,N0}var k0,e2;function Vd(){if(e2)return k0;e2=1;var s=Ad();function u(){}function m(){}return m.resetWarningCache=u,k0=function(){function i(h,g,y,p,v,C){if(C!==s){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}i.isRequired=i;function f(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:f,element:i,elementType:i,instanceOf:f,node:i,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:m,resetWarningCache:u};return c.PropTypes=c,c},k0}var t2;function Ed(){return t2||(t2=1,Y0.exports=Vd()()),Y0.exports}var Hd=Ed();const ft=pu(Hd),o2=(s=>F.forwardRef((u,m)=>S.jsx("div",{...u,ref:m,className:Ee(u.className,s)}))),Gd=["as","disabled"];function Bd(s,u){if(s==null)return{};var m={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)>=0)continue;m[i]=s[i]}return m}function Ud(s){return!s||s.trim()==="#"}function s2({tagName:s,disabled:u,href:m,target:i,rel:f,role:c,onClick:h,tabIndex:g=0,type:y}){s||(m!=null||i!=null||f!=null?s="a":s="button");const p={tagName:s};if(s==="button")return[{type:y||"button",disabled:u},p];const v=_=>{if((u||s==="a"&&Ud(m))&&_.preventDefault(),u){_.stopPropagation();return}h?.(_)},C=_=>{_.key===" "&&(_.preventDefault(),v(_))};return s==="a"&&(m||(m="#"),u&&(m=void 0)),[{role:c??"button",disabled:void 0,tabIndex:u?void 0:g,href:m,target:s==="a"?i:void 0,"aria-disabled":u||void 0,rel:s==="a"?f:void 0,onClick:v,onKeyDown:C},p]}const jd=F.forwardRef((s,u)=>{let{as:m,disabled:i}=s,f=Bd(s,Gd);const[c,{tagName:h}]=s2(Object.assign({tagName:m,disabled:i},f));return S.jsx(h,Object.assign({},f,c,{ref:u}))});jd.displayName="Button";const tr=F.forwardRef(({as:s,bsPrefix:u,variant:m="primary",size:i,active:f=!1,disabled:c=!1,className:h,...g},y)=>{const p=Le(u,"btn"),[v,{tagName:C}]=s2({tagName:s,disabled:c,...g}),_=C;return S.jsx(_,{...v,...g,ref:y,disabled:c,className:Ee(h,p,f&&"active",m&&`${p}-${m}`,i&&`${p}-${i}`,g.href&&c&&"disabled")})});tr.displayName="Button";const f2=F.forwardRef(({bsPrefix:s,size:u,vertical:m=!1,className:i,role:f="group",as:c="div",...h},g)=>{const y=Le(s,"btn-group");let p=y;return m&&(p=`${y}-vertical`),S.jsx(c,{...h,ref:g,role:f,className:Ee(i,p,u&&`${y}-${u}`)})});f2.displayName="ButtonGroup";const P0=F.forwardRef(({className:s,bsPrefix:u,as:m="div",...i},f)=>(u=Le(u,"card-body"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));P0.displayName="CardBody";const d2=F.forwardRef(({className:s,bsPrefix:u,as:m="div",...i},f)=>(u=Le(u,"card-footer"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));d2.displayName="CardFooter";const h2=F.createContext(null);h2.displayName="CardHeaderContext";const m2=F.forwardRef(({bsPrefix:s,className:u,as:m="div",...i},f)=>{const c=Le(s,"card-header"),h=F.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return S.jsx(h2.Provider,{value:h,children:S.jsx(m,{ref:f,...i,className:Ee(u,c)})})});m2.displayName="CardHeader";const p2=F.forwardRef(({bsPrefix:s,className:u,variant:m,as:i="img",...f},c)=>{const h=Le(s,"card-img");return S.jsx(i,{ref:c,className:Ee(m?`${h}-${m}`:h,u),...f})});p2.displayName="CardImg";const g2=F.forwardRef(({className:s,bsPrefix:u,as:m="div",...i},f)=>(u=Le(u,"card-img-overlay"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));g2.displayName="CardImgOverlay";const y2=F.forwardRef(({className:s,bsPrefix:u,as:m="a",...i},f)=>(u=Le(u,"card-link"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));y2.displayName="CardLink";const Xd=o2("h6"),v2=F.forwardRef(({className:s,bsPrefix:u,as:m=Xd,...i},f)=>(u=Le(u,"card-subtitle"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));v2.displayName="CardSubtitle";const x2=F.forwardRef(({className:s,bsPrefix:u,as:m="p",...i},f)=>(u=Le(u,"card-text"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));x2.displayName="CardText";const Yd=o2("h5"),b2=F.forwardRef(({className:s,bsPrefix:u,as:m=Yd,...i},f)=>(u=Le(u,"card-title"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));b2.displayName="CardTitle";const _2=F.forwardRef(({bsPrefix:s,className:u,bg:m,text:i,border:f,body:c=!1,children:h,as:g="div",...y},p)=>{const v=Le(s,"card");return S.jsx(g,{ref:p,...y,className:Ee(u,v,m&&`bg-${m}`,i&&`text-${i}`,f&&`border-${f}`),children:c?S.jsx(P0,{children:h}):h})});_2.displayName="Card";const bn=Object.assign(_2,{Img:p2,Title:b2,Subtitle:v2,Body:P0,Link:y2,Text:x2,Header:m2,Footer:d2,ImgOverlay:g2});function Nd(s,u){return F.Children.toArray(s).some(m=>F.isValidElement(m)&&m.type===u)}function kd({as:s,bsPrefix:u,className:m,...i}){u=Le(u,"col");const f=i2(),c=c2(),h=[],g=[];return f.forEach(y=>{const p=i[y];delete i[y];let v,C,_;typeof p=="object"&&p!=null?{span:v,offset:C,order:_}=p:v=p;const D=y!==c?`-${y}`:"";v&&h.push(v===!0?`${u}${D}`:`${u}${D}-${v}`),_!=null&&g.push(`order${D}-${_}`),C!=null&&g.push(`offset${D}-${C}`)}),[{...i,className:Ee(m,...h,...g)},{as:s,bsPrefix:u,spans:h}]}const bt=F.forwardRef((s,u)=>{const[{className:m,...i},{as:f="div",bsPrefix:c,spans:h}]=kd(s);return S.jsx(f,{...i,ref:u,className:Ee(m,!h.length&&c)})});bt.displayName="Col";const C2=F.createContext(null);C2.displayName="InputGroupContext";const qd={type:ft.string,tooltip:ft.bool,as:ft.elementType},yu=F.forwardRef(({as:s="div",className:u,type:m="valid",tooltip:i=!1,...f},c)=>S.jsx(s,{...f,ref:c,className:Ee(u,`${m}-${i?"tooltip":"feedback"}`)}));yu.displayName="Feedback";yu.propTypes=qd;const _n=F.createContext({}),nr=F.forwardRef(({id:s,bsPrefix:u,className:m,type:i="checkbox",isValid:f=!1,isInvalid:c=!1,as:h="input",...g},y)=>{const{controlId:p}=F.useContext(_n);return u=Le(u,"form-check-input"),S.jsx(h,{...g,ref:y,type:i,id:s||p,className:Ee(m,u,f&&"is-valid",c&&"is-invalid")})});nr.displayName="FormCheckInput";const hu=F.forwardRef(({bsPrefix:s,className:u,htmlFor:m,...i},f)=>{const{controlId:c}=F.useContext(_n);return s=Le(s,"form-check-label"),S.jsx("label",{...i,ref:f,htmlFor:m||c,className:Ee(u,s)})});hu.displayName="FormCheckLabel";const S2=F.forwardRef(({id:s,bsPrefix:u,bsSwitchPrefix:m,inline:i=!1,reverse:f=!1,disabled:c=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:p,feedbackType:v,className:C,style:_,title:D="",type:w="checkbox",label:Y,children:B,as:q="input",...G},U)=>{u=Le(u,"form-check"),m=Le(m,"form-switch");const{controlId:L}=F.useContext(_n),j=F.useMemo(()=>({controlId:s||L}),[L,s]),Q=!B&&Y!=null&&Y!==!1||Nd(B,hu),X=S.jsx(nr,{...G,type:w==="switch"?"checkbox":w,ref:U,isValid:h,isInvalid:g,disabled:c,as:q});return S.jsx(_n.Provider,{value:j,children:S.jsx("div",{style:_,className:Ee(C,Q&&u,i&&`${u}-inline`,f&&`${u}-reverse`,w==="switch"&&m),children:B||S.jsxs(S.Fragment,{children:[X,Q&&S.jsx(hu,{title:D,children:Y}),p&&S.jsx(yu,{type:v,tooltip:y,children:p})]})})})});S2.displayName="FormCheck";const mu=Object.assign(S2,{Input:nr,Label:hu}),T2=F.forwardRef(({bsPrefix:s,type:u,size:m,htmlSize:i,id:f,className:c,isValid:h=!1,isInvalid:g=!1,plaintext:y,readOnly:p,as:v="input",...C},_)=>{const{controlId:D}=F.useContext(_n);return s=Le(s,"form-control"),S.jsx(v,{...C,type:u,size:i,ref:_,readOnly:p,id:f||D,className:Ee(c,y?`${s}-plaintext`:s,m&&`${s}-${m}`,u==="color"&&`${s}-color`,h&&"is-valid",g&&"is-invalid")})});T2.displayName="FormControl";const Ld=Object.assign(T2,{Feedback:yu}),R2=F.forwardRef(({className:s,bsPrefix:u,as:m="div",...i},f)=>(u=Le(u,"form-floating"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));R2.displayName="FormFloating";const Q0=F.forwardRef(({controlId:s,as:u="div",...m},i)=>{const f=F.useMemo(()=>({controlId:s}),[s]);return S.jsx(_n.Provider,{value:f,children:S.jsx(u,{...m,ref:i})})});Q0.displayName="FormGroup";const D2=F.forwardRef(({as:s="label",bsPrefix:u,column:m=!1,visuallyHidden:i=!1,className:f,htmlFor:c,...h},g)=>{const{controlId:y}=F.useContext(_n);u=Le(u,"form-label");let p="col-form-label";typeof m=="string"&&(p=`${p} ${p}-${m}`);const v=Ee(f,u,i&&"visually-hidden",m&&p);return c=c||y,m?S.jsx(bt,{ref:g,as:"label",className:v,htmlFor:c,...h}):S.jsx(s,{ref:g,className:v,htmlFor:c,...h})});D2.displayName="FormLabel";const z2=F.forwardRef(({bsPrefix:s,className:u,id:m,...i},f)=>{const{controlId:c}=F.useContext(_n);return s=Le(s,"form-range"),S.jsx("input",{...i,type:"range",ref:f,className:Ee(u,s),id:m||c})});z2.displayName="FormRange";const M2=F.forwardRef(({bsPrefix:s,size:u,htmlSize:m,className:i,isValid:f=!1,isInvalid:c=!1,id:h,...g},y)=>{const{controlId:p}=F.useContext(_n);return s=Le(s,"form-select"),S.jsx("select",{...g,size:m,ref:y,className:Ee(i,s,u&&`${s}-${u}`,f&&"is-valid",c&&"is-invalid"),id:h||p})});M2.displayName="FormSelect";const w2=F.forwardRef(({bsPrefix:s,className:u,as:m="small",muted:i,...f},c)=>(s=Le(s,"form-text"),S.jsx(m,{...f,ref:c,className:Ee(u,s,i&&"text-muted")})));w2.displayName="FormText";const O2=F.forwardRef((s,u)=>S.jsx(mu,{...s,ref:u,type:"switch"}));O2.displayName="Switch";const Zd=Object.assign(O2,{Input:mu.Input,Label:mu.Label}),A2=F.forwardRef(({bsPrefix:s,className:u,children:m,controlId:i,label:f,...c},h)=>(s=Le(s,"form-floating"),S.jsxs(Q0,{ref:h,className:Ee(u,s),controlId:i,...c,children:[m,S.jsx("label",{htmlFor:i,children:f})]})));A2.displayName="FloatingLabel";const Pd={_ref:ft.any,validated:ft.bool,as:ft.elementType},W0=F.forwardRef(({className:s,validated:u,as:m="form",...i},f)=>S.jsx(m,{...i,ref:f,className:Ee(s,u&&"was-validated")}));W0.displayName="Form";W0.propTypes=Pd;const he=Object.assign(W0,{Group:Q0,Control:Ld,Floating:R2,Check:mu,Switch:Zd,Label:D2,Text:w2,Range:z2,Select:M2,FloatingLabel:A2}),vu=F.forwardRef(({className:s,bsPrefix:u,as:m="span",...i},f)=>(u=Le(u,"input-group-text"),S.jsx(m,{ref:f,className:Ee(s,u),...i})));vu.displayName="InputGroupText";const Qd=s=>S.jsx(vu,{children:S.jsx(nr,{type:"checkbox",...s})}),Wd=s=>S.jsx(vu,{children:S.jsx(nr,{type:"radio",...s})}),V2=F.forwardRef(({bsPrefix:s,size:u,hasValidation:m,className:i,as:f="div",...c},h)=>{s=Le(s,"input-group");const g=F.useMemo(()=>({}),[]);return S.jsx(C2.Provider,{value:g,children:S.jsx(f,{ref:h,...c,className:Ee(i,s,u&&`${s}-${u}`,m&&"has-validation")})})});V2.displayName="InputGroup";const Kd=Object.assign(V2,{Text:vu,Radio:Wd,Checkbox:Qd}),Ia=F.forwardRef(({bsPrefix:s,className:u,as:m="div",...i},f)=>{const c=Le(s,"row"),h=i2(),g=c2(),y=`${c}-cols`,p=[];return h.forEach(v=>{const C=i[v];delete i[v];let _;C!=null&&typeof C=="object"?{cols:_}=C:_=C;const D=v!==g?`-${v}`:"";_!=null&&p.push(`${y}${D}-${_}`)}),S.jsx(m,{ref:f,...i,className:Ee(u,c,...p)})});Ia.displayName="Row";const xu={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};Wt.memo(Jd,(s,u)=>s.initial===u.initial&&s.title===u.title);function Jd({initial:s,onChange:u,onApply:m,title:i="Noise & Render Settings"}){const f=F.useMemo(()=>({...xu,...s}),[s]),[c,h]=F.useState(f);F.useEffect(()=>{h(v=>{const C=Math.max(1,Math.min(32,v.numberOfTerrainColors));let _=v.colors.slice(0,C);if(_.length<C){const D=C-_.length,w=_[_.length-1]??"#888888";_=_.concat(Array.from({length:D},()=>w))}return{...v,numberOfTerrainColors:C,colors:_}})},[c.numberOfTerrainColors]);const g=(v,C)=>h(_=>({..._,[v]:C})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],p=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return S.jsx(bn,{children:S.jsxs(bn.Body,{children:[S.jsx(bn.Title,{className:"mb-3",children:i}),S.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),S.jsxs(Ia,{className:"g-3",children:[S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"width",children:[S.jsx(he.Label,{children:"Width"}),S.jsx(he.Control,{type:"number",min:1,value:c.width,onChange:v=>g("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(he.Text,{muted:!0,children:"Width in pixels of the map."})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"height",children:[S.jsx(he.Label,{children:"Height"}),S.jsx(he.Control,{type:"number",min:1,value:c.height,onChange:v=>g("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),S.jsx(he.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),S.jsxs(Ia,{className:"g-3",children:[S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"noiseType",children:[S.jsx(he.Label,{children:"Noise Type"}),S.jsx(he.Select,{value:c.noiseType,onChange:v=>g("noiseType",v.currentTarget.value),children:y.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"seed",children:[S.jsx(he.Label,{children:"Seed"}),S.jsx(he.Control,{type:"number",value:c.seed,onChange:v=>g("seed",parseInt(v.currentTarget.value||"0",10))})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"octaves",children:[S.jsx(he.Label,{children:"Fractal Octaves"}),S.jsx(he.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>g("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"lacunarity",children:[S.jsx(he.Label,{children:"Fractal Lacunarity"}),S.jsx(Kd,{children:S.jsx(he.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>g("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"gain",children:[S.jsx(he.Label,{children:"Fractal Gain"}),S.jsx(he.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>g("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"fractalType",children:[S.jsx(he.Label,{children:"Fractal Type"}),S.jsx(he.Select,{value:c.fractalType,onChange:v=>g("fractalType",v.currentTarget.value),children:p.map(v=>S.jsx("option",{value:v,children:v},v))})]})}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"frequency",children:[S.jsx(he.Label,{children:"Frequency"}),S.jsx(he.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>g("frequency",parseFloat(v.currentTarget.value||"0"))}),S.jsx(he.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),S.jsx("hr",{className:"my-4"}),S.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),S.jsxs(Ia,{className:"g-3",children:[S.jsxs(bt,{md:6,lg:4,children:[S.jsxs(he.Group,{controlId:"maxCellValue",children:[S.jsx(he.Label,{children:"Max Terrain Height"}),S.jsx(he.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>g("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(he.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),S.jsxs(bt,{md:6,lg:4,children:[S.jsxs(he.Group,{controlId:"thm",children:[S.jsx(he.Label,{children:"Terrain Height Multiplier"}),S.jsx(he.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>g("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),S.jsx(he.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),S.jsxs(bt,{md:6,lg:4,children:[S.jsxs(he.Group,{controlId:"colorSteps",children:[S.jsx(he.Label,{children:"Terrain Steps"}),S.jsx(he.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>g("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),S.jsx(he.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),S.jsx(bt,{md:6,lg:4,children:S.jsxs(he.Group,{controlId:"numColors",children:[S.jsx(he.Label,{children:"Number of Terrain Colors"}),S.jsx(he.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>g("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),S.jsx(he.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),S.jsxs("div",{className:"mt-4",children:[S.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),S.jsx(Ia,{className:"g-3",children:c.colors.map((v,C)=>S.jsx(bt,{xs:3,sm:2,md:1,lg:1,children:S.jsx(he.Group,{controlId:`color-${C}`,children:S.jsx(he.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:_=>{const D=_.currentTarget.value;g("colors",c.colors.map((w,Y)=>Y===C?D:w))},title:`Pick color ${C+1}`})})},C))})]}),S.jsxs("div",{className:"d-flex gap-2 mt-4",children:[S.jsx(tr,{variant:"primary",onClick:()=>m?.(c),children:"Apply"}),S.jsx(tr,{variant:"outline-secondary",onClick:()=>h(f),children:"Reset to Defaults"})]})]})})}function n2(s,u){const m=s>>>0,i=u>>>0||1;return(i&i-1)===0?m+(i-1)&~(i-1):Math.ceil(m/i)*i>>>0}function Fd(s){if(typeof s!="string")return"";const u=s.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(u))return u;const m=u.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(m)return`vec${m[1]}${m[2][0]}`;const i=u.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const $d={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function K0(s){const u={fields:[],size:0};let m=0,i=1;for(const f of s){const c=Fd(f.type);if(!c)throw new Error(`Unsupported type: ${f.type}`);const h=c;if(h.startsWith("pad")){const v=parseInt(h.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${h}`);const C={name:f.name,type:h,offset:m,size:v,align:1};u.fields.push(C),m+=v;continue}const y=$d[h];if(!y)throw new Error(`Unsupported non-pad type: ${h}`);m=n2(m,y.align);const p={name:f.name,type:h,offset:m,size:y.size,align:y.align};u.fields.push(p),m+=y.size,y.align>i&&(i=y.align)}return u.size=n2(m,Math.max(16,i)),u}function Id(s,u){const m=new ArrayBuffer(s.size),i=new DataView(m);for(const f of s.fields){if(f.type.startsWith("pad"))continue;const c=u[f.name];if(c==null)throw new Error(`Missing field '${f.name}'`);switch(f.type){case"f32":i.setFloat32(f.offset,+c,!0);break;case"u32":i.setUint32(f.offset,c>>>0,!0);break;case"i32":i.setInt32(f.offset,c|0,!0);break;case"bool":i.setUint32(f.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(f.offset,c[0],!0),i.setFloat32(f.offset+4,c[1],!0),i.setFloat32(f.offset+8,c[2],!0),i.setFloat32(f.offset+12,c[3],!0);break;case"vec2u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(f.offset,c[0]>>>0,!0),i.setUint32(f.offset+4,c[1]>>>0,!0),i.setUint32(f.offset+8,c[2]>>>0,!0),i.setUint32(f.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(f.offset,c[0]|0,!0),i.setInt32(f.offset+4,c[1]|0,!0),i.setInt32(f.offset+8,c[2]|0,!0),i.setInt32(f.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${f.type}`)}}return m}function J0(s,u,m,i,f,c){const h=Id(u,m),g=c??s.createBuffer({size:u.size,usage:i,label:f});return s.queue.writeBuffer(g,0,h),g}const eh=K0([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function th(s,u,m,i){const f={maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps>>>0,numberOfTerrainColors:(m?.length??0)>>>0,_padT0:[0,0]};return J0(s,eh,f,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function nh(s,u,m){{const i=s.createBuffer({label:"Terrain Colors Buffer",size:u.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return s.queue.writeBuffer(i,0,lh(u)),i}}function lh(s){const u=[];for(let m of s){/^#([0-9a-fA-F]{3})$/.test(m)&&(m=m.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=m.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const f=i[1],c=parseInt(f.slice(0,2),16)/255,h=parseInt(f.slice(2,4),16)/255,g=parseInt(f.slice(4,6),16)/255;u.push(c,h,g,1)}return new Float32Array(u)}const ah=K0([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"simIndex",type:"u32"},{name:"showDebug",type:"u32"}]);function l2(s,u,m){const i={size:[u.width,u.height],time:u.time,simIndex:u.simIndex,showDebug:u.showDebug?1:0};return J0(s,ah,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",m)}const rh=K0([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"visibleRect",type:"vec4u"}]);function a2(s,u,m){const i={mousePos:[u.mousePos.x,u.mousePos.y],mouse0Held:u.mouse0Held?1:0,mouse1Held:u.mouse1Held?1:0,mouseRadius:u.mouseRadius,visibleRect:[u.visibleRect.x0,u.visibleRect.y0,u.visibleRect.x1,u.visibleRect.y1]};return J0(s,rh,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",m)}function uh(s,u,m,i){const f={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},currentCells:{binding:3,type:"storage",buffer:i.prevCellsBuffer},terrainColors:{binding:4,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:5,type:"storage",buffer:i.outputTextureBuffer},nextCells:{binding:6,type:"storage",buffer:i.nextCellsBuffer},randomDirections:{binding:7,type:"read-only-storage",buffer:i.randomFlowDirectionsBuffer},cursorQuery:{binding:8,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:9,type:"storage",buffer:i.chunkDataBuffer}},c=s.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(f).map(L=>({binding:f[L].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:f[L].type}}))}),h=s.createBindGroup({label:"Unified Compute BG A",layout:c,entries:Object.keys(f).map(L=>L==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:L==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:{binding:f[L].binding,resource:{buffer:f[L].buffer}})}),g=s.createBindGroup({label:"Unified Compute BG show B",layout:c,entries:Object.keys(f).map(L=>L==="currentCells"?{binding:f.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:L==="nextCells"?{binding:f.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:{binding:f[L].binding,resource:{buffer:f[L].buffer}})}),y=s.createBindGroupLayout({label:"Render BGL",entries:[{binding:f.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uView.type}},{binding:f.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:f.uInput.type}},{binding:f.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:f.outputTex.type}}]}),p=s.createRenderPipeline({label:"Render Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[y],label:"Render Pipeline Layout"}),vertex:{module:u,entryPoint:"vs"},fragment:{module:u,entryPoint:"fs",targets:[{format:m}]},primitive:{topology:"triangle-list"}}),v=s.createComputePipeline({label:"Normal Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Normal Compute Pipeline Layout"}),compute:{module:u,entryPoint:"calc_normals"}}),C=s.createComputePipeline({label:"Cursor Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Cursor Query Pipeline Layout"}),compute:{module:u,entryPoint:"cursor_query"}}),_=s.createComputePipeline({label:"Total Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Total Query Pipeline Layout"}),compute:{module:u,entryPoint:"total_query"}}),D=s.createComputePipeline({label:"Chunk Data Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Chunk Data Pipeline Layout"}),compute:{module:u,entryPoint:"chunk_data_calc"}}),w=s.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"terrain_render"}}),Y=s.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"shadow_render"}}),B=s.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"fluid_render"}}),q=s.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"debug_render"}}),G=s.createComputePipeline({label:"Step Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[c],label:"Step Compute Pipeline Layout"}),compute:{module:u,entryPoint:"step"}}),U=s.createBindGroup({label:"Render BG",layout:y,entries:[{binding:f.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:f.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:f.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:p,normalComputePipeline:v,cursorQueryPipeline:C,totalQueryPipeline:_,chunkDataPipeline:D,terrainTextureComputePipeline:w,shadowTextureComputePipeline:Y,fluidTextureComputePipeline:B,debugTextureComputePipeline:q,stepComputePipeline:G},bindGroups:{unifiedComputeBG_A:h,unifiedComputeBG_B:g,renderBG:U}}}function ih(s,u){return s.mouse0Held===u.mouse0Held&&s.mouse1Held===u.mouse1Held&&s.mouse2Held===u.mouse2Held&&s.mouseRadius===u.mouseRadius&&s.mouseMoved===u.mouseMoved&&s.mousePosition.x===u.mousePosition.x&&s.mousePosition.y===u.mousePosition.y&&s.visibleRect.x0===u.visibleRect.x0&&s.visibleRect.y0===u.visibleRect.y0&&s.visibleRect.x1===u.visibleRect.x1&&s.visibleRect.y1===u.visibleRect.y1&&s.visibleRect.width===u.visibleRect.width&&s.visibleRect.height===u.visibleRect.height&&s.visibleRectChanged===u.visibleRectChanged&&s.simulationSubSteps===u.simulationSubSteps}const ch={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouseRadius:30,mouseMoved:!1,mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class oh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(u){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(u);const m=u-this.winMs;for(;this.times.length&&this.times[0]<m;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const er=new oh;async function sh(s,u=xu,m,i,f,c){if(!s)return()=>{};s.__wgpuCleanup&&s.__wgpuCleanup();const h=!1;var g=!0,y=!0,p=!0;const v=await rd(),C=s.getContext("webgpu"),_=navigator.gpu.getPreferredCanvasFormat();s.style.imageRendering="pixelated",C.__deviceId=v.__id,s.width=u.width,s.height=u.height,C.configure({device:v,format:_,alphaMode:"opaque"});let D=Dd();const w=v.createShaderModule({label:"Rect Shader",code:D});var Y=0,B=0,q=0,G=h;const U=()=>{G=!G},L=Xe=>{G=Xe},j=l2(v,{width:u.width,height:u.height,time:0,simIndex:0,showDebug:G});function Q(){l2(v,{width:u.width,height:u.height,time:Y,simIndex:q,showDebug:G},j)}const X=m(),ce=a2(v,{mousePos:X.mousePosition,mouse0Held:X.mouse0Held,mouse1Held:X.mouse1Held,mouseRadius:X.mouseRadius,visibleRect:X.visibleRect}),te=th(v,{maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps},u.colors),ge=nh(v,u.colors);function xe(Xe,ze,We){const Me=Math.ceil(Xe/We),ee=Math.ceil(ze/We);return[Me,ee]}const ue=16,[me,we]=xe(u.width,u.height,ue),pe=v.createBuffer({label:"Chunk Data",size:16*me*we,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(pe,0,new Float32Array(4*me*we));function H(Xe){a2(v,{mousePos:Xe.mousePosition,mouse0Held:Xe.mouse0Held,mouse1Held:Xe.mouse1Held,mouseRadius:Xe.mouseRadius,visibleRect:Xe.visibleRect},ce)}const $=u.width*u.height*4*4*4,I=v.createBuffer({label:"Output Texture",size:$,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(I,0,new Float32Array($/4));const x=12,A=4*x,P=u.width*u.height*A,N=v.createBuffer({label:"Prev Cells",size:P,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),J=v.createBuffer({label:"Next Cells",size:P,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),se=Xe=>{const ze=new Float32Array(u.width*u.height*x),We=ud(Xe,u.width,u.height,u.noiseType,u.fractalOctaves,u.fractalLacunarity,u.fractalGain,u.fractalType,u.frequency);for(let Me=0;Me<We.length;Me++){const ee=Me*x;ze[ee]=We[Me]*100}v.queue.writeBuffer(N,0,ze),v.queue.writeBuffer(J,0,ze),B=0,q=0,y=!0};var ae=u.seed;const Be=()=>{se(ae)},_e=()=>{ae=Math.ceil(Math.random()*1e9),Be()};Be();const Ue=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),ut=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),dt=v.createBuffer({label:"Random Flow Directions Buffer",size:4*u.width*u.height,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),_t=new Float32Array(u.width*u.height);for(let Xe=0;Xe<_t.length;Xe++)_t[Xe]=Math.floor(Math.random()*8)+0;v.queue.writeBuffer(dt,0,_t);const Re=uh(v,w,_,{prevCellsBuffer:N,nextCellsBuffer:J,terrainBuffer:te,terrainColorsBuffer:ge,viewUniformBuffer:j,inputUniformBuffer:ce,outputTextureBuffer:I,cursorQueryBuffer:Ue,chunkDataBuffer:pe,randomFlowDirectionsBuffer:dt}),en={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},sl=16,le=16,re=Math.ceil(u.width/sl),ye=Math.ceil(u.height/le);let De=!0,je=0;var Ze=m();let lt=!1;function gt(Xe=0){if(C.__deviceId!==v.__id)return;er.begin();var ze=m();ih(ze,Ze)||(H(ze),Ze=ze);const We=B%6===0;v.pushErrorScope("validation"),Y=Xe*.001,Q();const Me=v.createCommandEncoder({label:"Encoder"});{const ee=Me.beginComputePass({label:"Step Compute Pass"});ee.setPipeline(Re.piplines.stepComputePipeline);for(let fl=0;fl<ze.simulationSubSteps;fl++)ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(re,ye,1),De=!De,q++,Q();c(q),ee.end()}if((B===0||ze.mouse0Held||ze.mouse1Held)&&(p=!0),B<60&&(y=!0,g=!0),ze.visibleRectChanged&&(p=!0),p=!0,g||y){const ee=Me.beginComputePass({label:"Normal Compute Pass"});ee.setPipeline(Re.piplines.normalComputePipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(re,ye,1),ee.end()}if(y){const ee=Me.beginComputePass({label:"Terrain Texture Compute Pass"});ee.setPipeline(Re.piplines.terrainTextureComputePipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(re,ye,1),ee.end()}if(p||y){const ee=Me.beginComputePass({label:"Shadow Texture Compute Pass"});ee.setPipeline(Re.piplines.shadowTextureComputePipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(re,ye,1),ee.end(),ze={...ze,visibleRectChanged:!1}}if(p||y){const ee=Me.beginComputePass({label:"Fluid Texture Compute Pass"});ee.setPipeline(Re.piplines.fluidTextureComputePipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(re,ye,1),ee.end(),ze={...ze,visibleRectChanged:!1}}if(B%10==0){const ee=Me.beginComputePass({label:"Debug Texture Compute Pass"});ee.setPipeline(Re.piplines.debugTextureComputePipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(re,ye,1),ee.end()}if(We){const ee=Me.beginComputePass({label:"Cursor Query Pass"});ee.setPipeline(Re.piplines.cursorQueryPipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}if(B%60==0){const ee=Me.beginComputePass({label:"Total Query Pass"});ee.setPipeline(Re.piplines.totalQueryPipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(1,1,1),ee.end()}{const ee=Me.beginComputePass({label:"Chunk Data Pass"});ee.setPipeline(Re.piplines.chunkDataPipeline),ee.setBindGroup(0,De?Re.bindGroups.unifiedComputeBG_A:Re.bindGroups.unifiedComputeBG_B),ee.dispatchWorkgroups(me,we,1),ee.end()}en.colorAttachments[0].view=C.getCurrentTexture().createView();{const ee=Me.beginRenderPass(en);ee.setPipeline(Re.piplines.renderPipeline),ee.setBindGroup(0,Re.bindGroups.renderBG),ee.draw(3),ee.end()}We&&!lt&&Me.copyBufferToBuffer(Ue,0,ut,0,64),v.queue.submit([Me.finish()]),v.popErrorScope().then(ee=>{ee&&console.error(ee.message)}),We&&!lt&&(lt=!0,ut.mapAsync(GPUMapMode.READ).then(()=>{const ee=new DataView(ut.getMappedRange(0,64)),fl=ee.getFloat32(0,!0),bu=ee.getFloat32(16,!0),dl=ee.getFloat32(20,!0),hl=ee.getFloat32(24,!0),nn=ee.getFloat32(28,!0),ml=ee.getFloat32(48,!0),Pn=ee.getFloat32(52,!0),_u=ee.getUint32(56,!0);f({height:fl,normal:{x:bu,y:dl,z:hl},fAmount:nn,fluidTotal:ml,antiFluidTotal:Pn,chunkUpdates:_u})}).catch(()=>{}).finally(()=>{ut.unmap(),lt=!1})),y=!1,p=!1,g=!1,er.end(Xe),B++,je=requestAnimationFrame(gt)}je=requestAnimationFrame(gt);const tn=()=>{cancelAnimationFrame(je),j.destroy(),ce.destroy(),te.destroy(),ge.destroy(),N.destroy(),J.destroy(),I.destroy()};return s.__wgpuCleanup=tn,{cleanup:tn,resetMap:Be,randomizeMap:_e,toggleShowDebug:U,setShowDebug:L}}const fh=F.forwardRef(({noiseSettings:s=xu,inputRef:u,setInput:m,setWebGPUHandle:i,setCursorQuery:f,style:c,setSimIndex:h,children:g},y)=>{const p=F.useRef(null);return F.useImperativeHandle(y,()=>p.current,[]),F.useEffect(()=>{if(!p.current)return;let v=()=>{};return(async()=>{const C=await sh(p.current,s,()=>u.current,m,f,h);v=C.cleanup,i(C)})(),()=>v?.()},[s,m,i,f]),S.jsx("canvas",{ref:p,style:{...c,display:"block",width:"100%",height:"100%"},children:g})}),dh=Wt.memo(fh,(s,u)=>s.noiseSettings===u.noiseSettings&&s.children===u.children),hh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function mh({cursorQuery:s}){var c=Math.ceil(s.height),h=Math.abs(s.fAmount<0?Math.floor(s.fAmount):Math.ceil(s.fAmount));h+c>200&&(h=200-c);const g=c/200*150,y=h/200*150;var p="";return h>0&&(Math.abs(s.fAmount)<1?p=" < 1":p=`${h}`),S.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),S.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:s.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"5px 5px 0px 0px"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:p})}),S.jsx("div",{style:{width:"50px",height:`${g}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:S.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:s.height>0?`${c}`:""})})]})}function ph({input:s}){return S.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${s.mousePosition.x}, ${s.mousePosition.y})`})}const Je=({children:s})=>S.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:s});function gh(){return S.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:S.jsx(bn,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:S.jsxs(bn.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsx(bn.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),S.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[S.jsxs("div",{children:[S.jsx(Je,{children:"F11"})," — Toggle Fullscreen"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"F9"})," — Toggle Controls"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"F8"})," — Toggle Debug Stats"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"W"}),S.jsx(Je,{children:"A"}),S.jsx(Je,{children:"S"}),S.jsx(Je,{children:"D"})," or ",S.jsx(Je,{children:"←"}),S.jsx(Je,{children:"→"}),S.jsx(Je,{children:"↑"}),S.jsx(Je,{children:"↓"})," — Pan Camera"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"ScrollWheel"})," — Zoom"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"Shift"})," +"," ",S.jsx(Je,{children:"ScrollWheel"})," — Change Brush Radius"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"LMB"}),"/",S.jsx(Je,{children:"RMB"})," — (Paint / Remove) Fluid"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"Spacebar"})," — Toggle Pause"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"Tab"})," / ",S.jsx(Je,{children:"Shift"}),"+",S.jsx(Je,{children:"Tab"})," — Increase / Decrease Speed"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"C"})," — Clear Map"]}),S.jsxs("div",{children:[S.jsx(Je,{children:"R"})," — Randmoize Map"]})]})]})})})}var yh=["color","size","title","className"];function q0(){return q0=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var m=arguments[u];for(var i in m)({}).hasOwnProperty.call(m,i)&&(s[i]=m[i])}return s},q0.apply(null,arguments)}function vh(s,u){if(s==null)return{};var m,i,f=xh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)m=c[i],u.indexOf(m)===-1&&{}.propertyIsEnumerable.call(s,m)&&(f[m]=s[m])}return f}function xh(s,u){if(s==null)return{};var m={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;m[i]=s[i]}return m}var E2=F.forwardRef(function(s,u){var m=s.color,i=m===void 0?"currentColor":m,f=s.size,c=f===void 0?"1em":f,h=s.title,g=h===void 0?null:h,y=s.className,p=y===void 0?"":y,v=vh(s,yh);return Wt.createElement("svg",q0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",p].filter(Boolean).join(" ")},v),g?Wt.createElement("title",null,g):null,Wt.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});E2.propTypes={color:ft.string,size:ft.oneOfType([ft.string,ft.number]),title:ft.string,className:ft.string};var bh=["color","size","title","className"];function L0(){return L0=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var m=arguments[u];for(var i in m)({}).hasOwnProperty.call(m,i)&&(s[i]=m[i])}return s},L0.apply(null,arguments)}function _h(s,u){if(s==null)return{};var m,i,f=Ch(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)m=c[i],u.indexOf(m)===-1&&{}.propertyIsEnumerable.call(s,m)&&(f[m]=s[m])}return f}function Ch(s,u){if(s==null)return{};var m={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;m[i]=s[i]}return m}var H2=F.forwardRef(function(s,u){var m=s.color,i=m===void 0?"currentColor":m,f=s.size,c=f===void 0?"1em":f,h=s.title,g=h===void 0?null:h,y=s.className,p=y===void 0?"":y,v=_h(s,bh);return Wt.createElement("svg",L0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",p].filter(Boolean).join(" ")},v),g?Wt.createElement("title",null,g):null,Wt.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});H2.propTypes={color:ft.string,size:ft.oneOfType([ft.string,ft.number]),title:ft.string,className:ft.string};const Mt=[.25,.5,1,2,3,4,8],G2=(s,u,m)=>Math.min(m,Math.max(u,s));function Sh(s,u=!0){if(u){var m=(Mt.indexOf(s)+1)%Mt.length;return Mt[m]}else{var m=G2(Mt.indexOf(s)+1,0,Mt.length-1);return Mt[m]}}function Th(s,u=!0){if(u){var m=(Mt.indexOf(s)-1+Mt.length)%Mt.length;return Mt[m]}else{var m=G2(Mt.indexOf(s)-1,0,Mt.length-1);return Mt[m]}}function Rh({speed:s,paused:u,onChange:m,className:i,size:f}){const c=p=>m({paused:!1,speed:p}),h=()=>m({paused:!u,speed:s}),y={backgroundColor:"rgba(99, 99, 99, 0.57)",border:"4px solid white",borderRadius:0,fontSize:"20px",width:40,height:40,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none"};return S.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:S.jsxs(f2,{className:`${i} rounded-0`,size:f,style:{border:"none"},children:[S.jsx(tr,{type:"button",variant:"primary",onClick:h,"aria-pressed":u,"aria-label":u?"Resume":"Pause",title:u?"Resume":"Pause",style:y,children:u?S.jsx(H2,{}):S.jsx(E2,{})}),Mt.map(p=>S.jsx(tr,{type:"button",variant:s===p&&!u?"primary":"outline-secondary",active:s===p&&!u,onClick:()=>c(p),"aria-pressed":s===p&&!u,"aria-label":p<1?`1/${Math.round(1/p)}x speed`:`${p}x speed`,title:p<1?`1/${Math.round(1/p)}x speed`:`${p}x speed`,style:{...y,color:s===p&&!u?"white":"darkgray",marginLeft:"-4px",fontSize:p<1?"15px":""},children:p<1?`1/${Math.round(1/p)}x`:`${p}x`},p))]})})}function Dh({settings:s,setSettings:u,input:m,setInput:i,cursorQuery:f,paused:c,setPaused:h,speed:g,setSpeed:y,simIndex:p,showControlsUI:v,showDebugUI:C}){const[_,D]=F.useState(0),[w,Y]=F.useState(0),[B,q]=F.useState(0);F.useEffect(()=>{const j=setInterval(()=>{D(er.fps),Y(er.cpuMs),q(er.frameCount)},250);return()=>clearInterval(j)},[]);const G=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),U=`${w.toFixed(2)}`.padStart(5,"0"),L=f.chunkUpdates*16*16*g*4;return S.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[S.jsx("div",{id:"output"}),S.jsx(ph,{input:m}),v&&S.jsx(gh,{}),S.jsx(Rh,{speed:g,paused:c,onChange:({paused:j,speed:Q})=>{h(j),y(Q),i({...m,simulationSubSteps:j?0:Math.ceil(4*Q)})}}),C&&S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx(bn,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:S.jsxs(bn.Body,{style:{padding:"0.9rem 1rem"},children:[S.jsxs(bn.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",S.jsx(Je,{children:"F8"})," to close"]}),S.jsx("div",{children:`FPS: ${_} (Frame Duration: ${U} ms) (Frames: ${G.format(B)})`}),S.jsx("div",{children:`Simulation Steps: ${G.format(p)}`}),S.jsx("div",{children:`Chunk Updates: ${G.format(f.chunkUpdates)}`}),S.jsx("div",{children:`Cell Updates per frame: ${G.format(L)}`}),S.jsx("div",{children:`Total Fluid: ${G.format(Math.ceil(f.fluidTotal))}`}),S.jsx("div",{children:`Total Anti Fluid: ${G.format(Math.ceil(f.antiFluidTotal))}`}),S.jsx("div",{children:`Total Combined Fluid: ${G.format(Math.ceil(f.fluidTotal-f.antiFluidTotal))}`})]})})}),!C&&S.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:S.jsx("div",{children:`FPS: ${_}`})}),S.jsx(mh,{cursorQuery:f})]})}const zh=s=>{const u=s;if(!u)return!1;const m=u.tagName?.toLowerCase();return m==="input"||m==="textarea"||u.isContentEditable||m==="select"},xn=(s,u,m)=>Math.min(m,Math.max(u,s)),r2=(s,u,m,i)=>{const f=Math.max(0,(m-s)/2),c=Math.max(0,(i-u)/2);return{xMin:-f,xMax:f,yMin:-c,yMax:c}};function Mh(){const[s,u]=F.useState(xu),m=!1,[i,f]=Wt.useState(!1),[c,h]=Wt.useState(1),[g,y]=F.useState(0),[p,v]=F.useState(!0),[C,_]=F.useState(m),[D,w]=F.useState(ch),Y=F.useRef(D);F.useEffect(()=>{Y.current=D},[D]);const[B,q]=F.useState(hh),G=F.useRef(null),[U,L]=F.useState({width:1920,height:1080}),[j,Q]=F.useState({x:0,y:0}),[X,ce]=F.useState(!1),[te,ge]=F.useState(2),[xe,ue]=F.useState(null),me=F.useRef(null);F.useEffect(()=>{me.current=xe},[xe]);const we=F.useRef(null),pe=F.useCallback((I,x,A=!1)=>{const P=G.current;if(!P)return;const N=I!==void 0&&x!==void 0?{x:I,y:x}:we.current;if(!N)return;const J=P.getBoundingClientRect();if(J.width===0||J.height===0)return;const se=P.width/J.width,ae=P.height/J.height,Be=Math.floor((N.x-J.left)*se),_e=Math.floor((N.y-J.top)*ae);w(Ue=>{const ut=xn(Be,0,s.width-1),dt=xn(_e,0,s.height-1);return!A&&Ue.mousePosition.x===ut&&Ue.mousePosition.y===dt?Ue:{...Ue,mousePosition:{x:ut,y:dt},mouseMoved:A}})},[s.width,s.height]),H=F.useCallback((I,x)=>{const A=G.current;if(!A)return{x:0,y:0};const P={x:I,y:x},N=A.getBoundingClientRect();if(N.width===0||N.height===0)return{x:0,y:0};const J=A.width/N.width,se=A.height/N.height,ae=Math.floor((P.x-N.left)*J),Be=Math.floor((P.y-N.top)*se),_e=xn(ae,0,s.width-1),Ue=xn(Be,0,s.height-1);return{x:_e,y:Ue}},[s.width,s.height]);F.useEffect(()=>{const I=new Set;let x=0,A=performance.now();const P=600;me.current?.setShowDebug(C);const N=()=>{const le=window.innerWidth,re=window.innerHeight,ye=s.width/s.height;let De=le,je=De/ye;return je<re&&(je=re,De=je*ye),{vw:le,vh:re,baseW:De,baseH:je}},J=()=>{const{vw:le,baseW:re}=N();return le/re},se=le=>{if(zh(le.target))return;const re=le.key.toLowerCase();(re==="w"||re==="a"||re==="s"||re==="d"||re==="arrowup"||re==="arrowleft"||re==="arrowdown"||re==="arrowright")&&(I.add(re),le.preventDefault());const ye=()=>{f(Ze=>{let lt=!Ze;return w(gt=>({...gt,simulationSubSteps:lt?0:Math.ceil(4*c)})),lt}),le.preventDefault()},De=()=>{h(Ze=>{let lt=Sh(Ze,!1);return w(gt=>({...gt,simulationSubSteps:i?0:Math.ceil(4*lt)})),lt}),le.preventDefault()},je=()=>{h(Ze=>{let lt=Th(Ze,!1);return w(gt=>({...gt,simulationSubSteps:i?0:Math.ceil(4*lt)})),lt}),le.preventDefault()};le.code=="Space"?ye():le.code=="Tab"?(i?ye():le.shiftKey?je():De(),le.preventDefault()):le.code=="F9"?(v(Ze=>!Ze),le.preventDefault()):le.code=="F8"?(_(Ze=>(me.current?.setShowDebug(!Ze),!Ze)),le.preventDefault()):le.code=="KeyC"?(me.current?.resetMap(),le.preventDefault()):!le.ctrlKey&&le.code=="KeyR"&&(me.current?.randomizeMap(),le.preventDefault())},ae=le=>{const re=le.key.toLowerCase();I.delete(re)};function Be(le,re,ye,De){const je=Math.max(le/ye,re/De),Ze=Math.min(le*4/ye,re*4/De);return{minScale:je,maxScale:Ze}}function _e(){const le=window.innerWidth,re=window.innerHeight,ye=s.width/s.height;let De=le,je=De/ye;je<re&&(je=re,De=je*ye);const{minScale:Ze,maxScale:lt}=Be(le,re,De,je),gt=Math.min(Math.max(te,Ze),lt),tn=De*gt,Zn=je*gt,{xMin:Xe,xMax:ze,yMin:We,yMax:Me}=r2(le,re,tn,Zn);L({width:tn,height:Zn}),Q(ee=>({x:xn(ee.x,Xe,ze),y:xn(ee.y,We,Me)})),requestAnimationFrame(()=>pe()),$()}const Ue=le=>{let re=0,ye=0;if((I.has("w")||I.has("arrowup"))&&(ye-=1),(I.has("s")||I.has("arrowdown"))&&(ye+=1),(I.has("a")||I.has("arrowleft"))&&(re-=1),(I.has("d")||I.has("arrowright"))&&(re+=1),re!==0||ye!==0){const De=Math.hypot(re,ye)||1;re/=De,ye/=De;const je=window.innerWidth,Ze=window.innerHeight,lt=U.width,gt=U.height,{xMin:tn,xMax:Zn,yMin:Xe,yMax:ze}=r2(je,Ze,lt,gt);Q(We=>({x:xn(We.x-re*P*te*le,tn,Zn),y:xn(We.y-ye*P*te*le,Xe,ze)})),requestAnimationFrame(()=>pe()),$()}};function ut(le){le.preventDefault();const re=Math.sign(le.deltaY)*-1;if(le.shiftKey)w(ye=>{const De=.1*ye.mouseRadius*re,je=Math.max(5,ye.mouseRadius+De);return{...ye,mouseRadius:je}});else{const ye=J(),De=4;ge(je=>xn(je+.1*je*re,ye,De))}}function dt(le){we.current={x:le.clientX,y:le.clientY},pe(le.clientX,le.clientY,!0)}const _t=le=>{le.button===2&&le.preventDefault(),w(re=>{const ye={...re};return le.button===0&&(ye.mouse0Held=!0),le.button===2&&(ye.mouse1Held=!0),ye})},Re=le=>{w(re=>{const ye={...re};return le.button===0&&(ye.mouse0Held=!1),le.button===2&&(ye.mouse1Held=!1),ye})};function en(le){le.preventDefault()}const sl=async le=>{const re=(le-A)/1e3;A=le,Ue(re),$(),x=requestAnimationFrame(sl)};return window.addEventListener("mousemove",dt),G.current?.addEventListener("mouseup",Re),window.addEventListener("contextmenu",en),G.current?.addEventListener("mousedown",_t),window.addEventListener("keydown",se),window.addEventListener("keyup",ae),G.current?.addEventListener("wheel",ut,{passive:!1}),window.addEventListener("resize",_e),_e(),x=requestAnimationFrame(sl),$(),()=>{cancelAnimationFrame(x),window.removeEventListener("mousemove",dt),G.current?.removeEventListener("mouseup",Re),window.removeEventListener("contextmenu",en),G.current?.removeEventListener("mousedown",_t),window.removeEventListener("keydown",se),window.removeEventListener("keyup",ae),G.current?.removeEventListener("wheel",ut),window.removeEventListener("resize",_e)}},[U.width,U.height,te,i,w,f,c,h,v]);const K=F.useRef(null),$=F.useCallback((I=!0)=>{const x=()=>{if(!G.current)return;const P=H(0,0),N=H(window.innerWidth,window.innerHeight),J={x0:P.x,y0:P.y,x1:N.x,y1:N.y,width:N.x-P.x,height:N.y-P.y};!J||K.current&&J.x0===K.current.x0&&J.y0===K.current.y0&&J.x1===K.current.x1&&J.y1===K.current.y1||(K.current=J,w(ae=>({...ae,visibleRect:J,visibleRectChanged:!0})))};I?requestAnimationFrame(x):x()},[w,H,window.innerWidth,window.innerHeight]);return S.jsx(S.Fragment,{children:S.jsxs("div",{id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[S.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:U.width,height:U.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${j.x}px, ${j.y}px, 0)`,transition:X?"transform 360ms ease-out":"none",willChange:"transform"},children:S.jsx(dh,{ref:G,noiseSettings:s,inputRef:Y,setInput:w,setWebGPUHandle:ue,setCursorQuery:q,setSimIndex:y})}),S.jsx(Dh,{settings:s,setSettings:u,input:D,setInput:I=>{w(I)},cursorQuery:B,paused:i,setPaused:f,speed:c,setSpeed:h,simIndex:g,showControlsUI:p,showDebugUI:C})]})})}ad.createRoot(document.getElementById("root")).render(S.jsx(Wt.StrictMode,{children:S.jsx(Mh,{})}));
