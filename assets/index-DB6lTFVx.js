(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function f(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(d){if(d.ep)return;d.ep=!0;const o=f(d);fetch(d.href,o)}})();function Ru(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Y0={exports:{}},nr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function nd(){if(Kf)return nr;Kf=1;var c=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(i,d,o){var h=null;if(o!==void 0&&(h=""+o),d.key!==void 0&&(h=""+d.key),"key"in d){o={};for(var g in d)g!=="key"&&(o[g]=d[g])}else o=d;return d=o.ref,{$$typeof:c,type:i,key:h,ref:d!==void 0?d:null,props:o}}return nr.Fragment=u,nr.jsx=f,nr.jsxs=f,nr}var Wf;function ld(){return Wf||(Wf=1,Y0.exports=nd()),Y0.exports}var C=ld(),X0={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function ad(){if(Jf)return xe;Jf=1;var c=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=b&&x[b]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,k={};function U(x,M,N){this.props=x,this.context=M,this.refs=k,this.updater=N||T}U.prototype.isReactComponent={},U.prototype.setState=function(x,M){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,M,"setState")},U.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function j(){}j.prototype=U.prototype;function Y(x,M,N){this.props=x,this.context=M,this.refs=k,this.updater=N||T}var X=Y.prototype=new j;X.constructor=Y,E(X,U.prototype),X.isPureReactComponent=!0;var K=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function V(x,M,N,L,F,ce){return N=ce.ref,{$$typeof:c,type:x,key:M,ref:N!==void 0?N:null,props:ce}}function ee(x,M){return V(x.type,M,void 0,void 0,void 0,x.props)}function te(x){return typeof x=="object"&&x!==null&&x.$$typeof===c}function he(x){var M={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(N){return M[N]})}var _e=/\/+/g;function ae(x,M){return typeof x=="object"&&x!==null&&x.key!=null?he(""+x.key):M.toString(36)}function ye(){}function ze(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(M){x.status==="pending"&&(x.status="fulfilled",x.value=M)},function(M){x.status==="pending"&&(x.status="rejected",x.reason=M)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function pe(x,M,N,L,F){var ce=typeof x;(ce==="undefined"||ce==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(ce){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case c:case u:ue=!0;break;case v:return ue=x._init,pe(ue(x._payload),M,N,L,F)}}if(ue)return F=F(x),ue=L===""?"."+ae(x,0):L,K(F)?(N="",ue!=null&&(N=ue.replace(_e,"$&/")+"/"),pe(F,M,N,"",function(je){return je})):F!=null&&(te(F)&&(F=ee(F,N+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(_e,"$&/")+"/")+ue)),M.push(F)),1;ue=0;var He=L===""?".":L+":";if(K(x))for(var De=0;De<x.length;De++)L=x[De],ce=He+ae(L,De),ue+=pe(L,M,N,ce,F);else if(De=_(x),typeof De=="function")for(x=De.call(x),De=0;!(L=x.next()).done;)L=L.value,ce=He+ae(L,De++),ue+=pe(L,M,N,ce,F);else if(ce==="object"){if(typeof x.then=="function")return pe(ze(x),M,N,L,F);throw M=String(x),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return ue}function B(x,M,N){if(x==null)return x;var L=[],F=0;return pe(x,L,"","",function(ce){return M.call(N,ce,F++)}),L}function J(x){if(x._status===-1){var M=x._result;M=M(),M.then(function(N){(x._status===0||x._status===-1)&&(x._status=1,x._result=N)},function(N){(x._status===0||x._status===-1)&&(x._status=2,x._result=N)}),x._status===-1&&(x._status=0,x._result=M)}if(x._status===1)return x._result.default;throw x._result}var $=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function re(){}return xe.Children={map:B,forEach:function(x,M,N){B(x,function(){M.apply(this,arguments)},N)},count:function(x){var M=0;return B(x,function(){M++}),M},toArray:function(x){return B(x,function(M){return M})||[]},only:function(x){if(!te(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},xe.Component=U,xe.Fragment=f,xe.Profiler=d,xe.PureComponent=Y,xe.StrictMode=i,xe.Suspense=y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,xe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},xe.cache=function(x){return function(){return x.apply(null,arguments)}},xe.cloneElement=function(x,M,N){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var L=E({},x.props),F=x.key,ce=void 0;if(M!=null)for(ue in M.ref!==void 0&&(ce=void 0),M.key!==void 0&&(F=""+M.key),M)!Q.call(M,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&M.ref===void 0||(L[ue]=M[ue]);var ue=arguments.length-2;if(ue===1)L.children=N;else if(1<ue){for(var He=Array(ue),De=0;De<ue;De++)He[De]=arguments[De+2];L.children=He}return V(x.type,F,void 0,void 0,ce,L)},xe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:o,_context:x},x},xe.createElement=function(x,M,N){var L,F={},ce=null;if(M!=null)for(L in M.key!==void 0&&(ce=""+M.key),M)Q.call(M,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(F[L]=M[L]);var ue=arguments.length-2;if(ue===1)F.children=N;else if(1<ue){for(var He=Array(ue),De=0;De<ue;De++)He[De]=arguments[De+2];F.children=He}if(x&&x.defaultProps)for(L in ue=x.defaultProps,ue)F[L]===void 0&&(F[L]=ue[L]);return V(x,ce,void 0,void 0,null,F)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(x){return{$$typeof:g,render:x}},xe.isValidElement=te,xe.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:J}},xe.memo=function(x,M){return{$$typeof:p,type:x,compare:M===void 0?null:M}},xe.startTransition=function(x){var M=G.T,N={};G.T=N;try{var L=x(),F=G.S;F!==null&&F(N,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(re,$)}catch(ce){$(ce)}finally{G.T=M}},xe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},xe.use=function(x){return G.H.use(x)},xe.useActionState=function(x,M,N){return G.H.useActionState(x,M,N)},xe.useCallback=function(x,M){return G.H.useCallback(x,M)},xe.useContext=function(x){return G.H.useContext(x)},xe.useDebugValue=function(){},xe.useDeferredValue=function(x,M){return G.H.useDeferredValue(x,M)},xe.useEffect=function(x,M,N){var L=G.H;if(typeof N=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(x,M)},xe.useId=function(){return G.H.useId()},xe.useImperativeHandle=function(x,M,N){return G.H.useImperativeHandle(x,M,N)},xe.useInsertionEffect=function(x,M){return G.H.useInsertionEffect(x,M)},xe.useLayoutEffect=function(x,M){return G.H.useLayoutEffect(x,M)},xe.useMemo=function(x,M){return G.H.useMemo(x,M)},xe.useOptimistic=function(x,M){return G.H.useOptimistic(x,M)},xe.useReducer=function(x,M,N){return G.H.useReducer(x,M,N)},xe.useRef=function(x){return G.H.useRef(x)},xe.useState=function(x){return G.H.useState(x)},xe.useSyncExternalStore=function(x,M,N){return G.H.useSyncExternalStore(x,M,N)},xe.useTransition=function(){return G.H.useTransition()},xe.version="19.1.1",xe}var $f;function tc(){return $f||($f=1,X0.exports=ad()),X0.exports}var W=tc();const Je=Ru(W);var k0={exports:{}},lr={},N0={exports:{}},q0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function rd(){return Ff||(Ff=1,(function(c){function u(B,J){var $=B.length;B.push(J);e:for(;0<$;){var re=$-1>>>1,x=B[re];if(0<d(x,J))B[re]=J,B[$]=x,$=re;else break e}}function f(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var J=B[0],$=B.pop();if($!==J){B[0]=$;e:for(var re=0,x=B.length,M=x>>>1;re<M;){var N=2*(re+1)-1,L=B[N],F=N+1,ce=B[F];if(0>d(L,$))F<x&&0>d(ce,L)?(B[re]=ce,B[F]=$,re=F):(B[re]=L,B[N]=$,re=N);else if(F<x&&0>d(ce,$))B[re]=ce,B[F]=$,re=F;else break e}}return J}function d(B,J){var $=B.sortIndex-J.sortIndex;return $!==0?$:B.id-J.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;c.unstable_now=function(){return o.now()}}else{var h=Date,g=h.now();c.unstable_now=function(){return h.now()-g}}var y=[],p=[],v=1,b=null,_=3,T=!1,E=!1,k=!1,U=!1,j=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(B){for(var J=f(p);J!==null;){if(J.callback===null)i(p);else if(J.startTime<=B)i(p),J.sortIndex=J.expirationTime,u(y,J);else break;J=f(p)}}function G(B){if(k=!1,K(B),!E)if(f(y)!==null)E=!0,Q||(Q=!0,ae());else{var J=f(p);J!==null&&pe(G,J.startTime-B)}}var Q=!1,V=-1,ee=5,te=-1;function he(){return U?!0:!(c.unstable_now()-te<ee)}function _e(){if(U=!1,Q){var B=c.unstable_now();te=B;var J=!0;try{e:{E=!1,k&&(k=!1,Y(V),V=-1),T=!0;var $=_;try{t:{for(K(B),b=f(y);b!==null&&!(b.expirationTime>B&&he());){var re=b.callback;if(typeof re=="function"){b.callback=null,_=b.priorityLevel;var x=re(b.expirationTime<=B);if(B=c.unstable_now(),typeof x=="function"){b.callback=x,K(B),J=!0;break t}b===f(y)&&i(y),K(B)}else i(y);b=f(y)}if(b!==null)J=!0;else{var M=f(p);M!==null&&pe(G,M.startTime-B),J=!1}}break e}finally{b=null,_=$,T=!1}J=void 0}}finally{J?ae():Q=!1}}}var ae;if(typeof X=="function")ae=function(){X(_e)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,ze=ye.port2;ye.port1.onmessage=_e,ae=function(){ze.postMessage(null)}}else ae=function(){j(_e,0)};function pe(B,J){V=j(function(){B(c.unstable_now())},J)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(B){B.callback=null},c.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<B?Math.floor(1e3/B):5},c.unstable_getCurrentPriorityLevel=function(){return _},c.unstable_next=function(B){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var $=_;_=J;try{return B()}finally{_=$}},c.unstable_requestPaint=function(){U=!0},c.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=_;_=B;try{return J()}finally{_=$}},c.unstable_scheduleCallback=function(B,J,$){var re=c.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?re+$:re):$=re,B){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,B={id:v++,callback:J,priorityLevel:B,startTime:$,expirationTime:x,sortIndex:-1},$>re?(B.sortIndex=$,u(p,B),f(y)===null&&B===f(p)&&(k?(Y(V),V=-1):k=!0,pe(G,$-re))):(B.sortIndex=x,u(y,B),E||T||(E=!0,Q||(Q=!0,ae()))),B},c.unstable_shouldYield=he,c.unstable_wrapCallback=function(B){var J=_;return function(){var $=_;_=J;try{return B.apply(this,arguments)}finally{_=$}}}})(q0)),q0}var If;function ud(){return If||(If=1,N0.exports=rd()),N0.exports}var L0={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e2;function id(){if(e2)return Ct;e2=1;var c=tc();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var i={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function o(y,p,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:b==null?null:""+b,children:y,containerInfo:p,implementation:v}}var h=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ct.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return o(y,p,null,v)},Ct.flushSync=function(y){var p=h.T,v=i.p;try{if(h.T=null,i.p=2,y)return y()}finally{h.T=p,i.p=v,i.d.f()}},Ct.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(y,p))},Ct.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},Ct.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,b=g(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?i.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:_,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:b,integrity:_,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ct.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=g(p.as,p.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(y)},Ct.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,b=g(v,p.crossOrigin);i.d.L(y,v,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ct.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=g(p.as,p.crossOrigin);i.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(y)},Ct.requestFormReset=function(y){i.d.r(y)},Ct.unstable_batchedUpdates=function(y,p){return y(p)},Ct.useFormState=function(y,p,v){return h.H.useFormState(y,p,v)},Ct.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ct.version="19.1.1",Ct}var t2;function cd(){if(t2)return L0.exports;t2=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(u){console.error(u)}}return c(),L0.exports=id(),L0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n2;function od(){if(n2)return lr;n2=1;var c=ud(),u=tc(),f=cd();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(o(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return g(a),e;if(r===l)return g(a),t;r=r.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=r;else{for(var s=!1,m=a.child;m;){if(m===n){s=!0,n=a,l=r;break}if(m===l){s=!0,l=a,n=r;break}m=m.sibling}if(!s){for(m=r.child;m;){if(m===n){s=!0,n=r,l=a;break}if(m===l){s=!0,l=r,n=a;break}m=m.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),X=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case U:return"Profiler";case k:return"StrictMode";case G:return"Suspense";case Q:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case X:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:ze(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return ze(e(t))}catch{}}return null}var pe=Array.isArray,B=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},re=[],x=-1;function M(e){return{current:e}}function N(e){0>x||(e.current=re[x],re[x]=null,x--)}function L(e,t){x++,re[x]=e.current,e.current=t}var F=M(null),ce=M(null),ue=M(null),He=M(null);function De(e,t){switch(L(ue,t),L(ce,e),L(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sf(t),e=Cf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(F),L(F,e)}function je(){N(F),N(ce),N(ue)}function bt(e){e.memoizedState!==null&&L(He,e);var t=F.current,n=Cf(t,e.type);t!==n&&(L(ce,e),L(F,n))}function nt(e){ce.current===e&&(N(F),N(ce)),He.current===e&&(N(He),$a._currentValue=$)}var Rt=Object.prototype.hasOwnProperty,Dn=c.unstable_scheduleCallback,un=c.unstable_cancelCallback,ne=c.unstable_shouldYield,me=c.unstable_requestPaint,ge=c.unstable_now,Qe=c.unstable_getCurrentPriorityLevel,Ye=c.unstable_ImmediatePriority,$e=c.unstable_UserBlockingPriority,rt=c.unstable_NormalPriority,pt=c.unstable_LowPriority,be=c.unstable_IdlePriority,cn=c.log,$n=c.unstable_setDisableYieldValue,Jt=null,Ke=null;function gt(e){if(typeof cn=="function"&&$n(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Jt,e)}catch{}}var Be=Math.clz32?Math.clz32:vl,ra=Math.log,or=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(ra(e)/or|0)|0}var Fn=256,In=4194304;function zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oe(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?a=zn(l):(s&=m,s!==0?a=zn(s):n||(n=m&~e,n!==0&&(a=zn(n))))):(m=l&~r,m!==0?a=zn(m):s!==0?a=zn(s):n||(n=l&~e,n!==0&&(a=zn(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ae(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ct(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Fn;return Fn<<=1,(Fn&4194048)===0&&(Fn=256),e}function I(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function Vt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function el(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mu(e,t,n,l,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,w=e.hiddenUpdates;for(n=s&~n;0<n;){var q=31-Be(n),P=1<<q;m[q]=0,S[q]=-1;var A=w[q];if(A!==null)for(w[q]=null,q=0;q<A.length;q++){var H=A[q];H!==null&&(H.lane&=-536870913)}n&=~P}l!==0&&sr(e,l,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function sr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Be(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function fr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Be(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ua(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ia(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dr(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Nf(e.type))}function Z2(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var On=Math.random().toString(36).slice(2),_t="__reactFiber$"+On,zt="__reactProps$"+On,xl="__reactContainer$"+On,Au="__reactEvents$"+On,P2="__reactListeners$"+On,Q2="__reactHandles$"+On,cc="__reactResources$"+On,ca="__reactMarker$"+On;function Eu(e){delete e[_t],delete e[zt],delete e[Au],delete e[P2],delete e[Q2]}function bl(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xl]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zf(e);e!==null;){if(n=e[_t])return n;e=zf(e)}return t}e=n,n=e.parentNode}return null}function _l(e){if(e=e[_t]||e[xl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function oa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Sl(e){var t=e[cc];return t||(t=e[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[ca]=!0}var oc=new Set,sc={};function tl(e,t){Cl(e,t),Cl(e+"Capture",t)}function Cl(e,t){for(sc[e]=t,e=0;e<t.length;e++)oc.add(t[e])}var K2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},dc={};function W2(e){return Rt.call(dc,e)?!0:Rt.call(fc,e)?!1:K2.test(e)?dc[e]=!0:(fc[e]=!0,!1)}function hr(e,t,n){if(W2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function mr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function on(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Vu,hc;function Tl(e){if(Vu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vu=t&&t[1]||"",hc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vu+e+hc}var Hu=!1;function Bu(e,t){if(!e||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(H){var A=H}Reflect.construct(e,[],P)}else{try{P.call()}catch(H){A=H}e.call(P.prototype)}}else{try{throw Error()}catch(H){A=H}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(H){if(H&&A&&typeof H.stack=="string")return[H.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),s=r[0],m=r[1];if(s&&m){var S=s.split(`
`),w=m.split(`
`);for(a=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(l===S.length||a===w.length)for(l=S.length-1,a=w.length-1;1<=l&&0<=a&&S[l]!==w[a];)a--;for(;1<=l&&0<=a;l--,a--)if(S[l]!==w[a]){if(l!==1||a!==1)do if(l--,a--,0>a||S[l]!==w[a]){var q=`
`+S[l].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=l&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Tl(n):""}function J2(e){switch(e.tag){case 26:case 27:case 5:return Tl(e.type);case 16:return Tl("Lazy");case 13:return Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return Bu(e.type,!1);case 11:return Bu(e.type.render,!1);case 1:return Bu(e.type,!0);case 31:return Tl("Activity");default:return""}}function mc(e){try{var t="";do t+=J2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $2(e){var t=pc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){l=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=$2(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=pc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var F2=/[\n"\\]/g;function Nt(e){return e.replace(F2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gu(e,t,n,l,a,r,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Uu(e,s,kt(t)):n!=null?Uu(e,s,kt(n)):l!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+kt(m):e.removeAttribute("name")}function yc(e,t,n,l,a,r,s,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+kt(n):"",t=t!=null?""+kt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Uu(e,t,n){t==="number"&&gr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Rl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function vc(e,t,n){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kt(n):""}function xc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(pe(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=kt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Dl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var I2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||I2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _c(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&bc(e,a,l)}else for(var r in t)t.hasOwnProperty(r)&&bc(e,r,t[r])}function ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yr(e){return t1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yu=null;function Xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Ol=null;function Sc(e){var t=_l(e);if(t&&(e=t.stateNode)){var n=e[zt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[zt]||null;if(!a)throw Error(i(90));Gu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&gc(l)}break e;case"textarea":vc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Rl(e,!!n.multiple,t,!1)}}}var ku=!1;function Cc(e,t,n){if(ku)return e(t,n);ku=!0;try{var l=e(t);return l}finally{if(ku=!1,(zl!==null||Ol!==null)&&(nu(),zl&&(t=zl,e=Ol,Ol=zl=null,Sc(t),e)))for(t=0;t<e.length;t++)Sc(e[t])}}function sa(e,t){var n=e.stateNode;if(n===null)return null;var l=n[zt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(sn)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Nu=!1}var wn=null,qu=null,vr=null;function Tc(){if(vr)return vr;var e,t=qu,n=t.length,l,a="value"in wn?wn.value:wn.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(l=1;l<=s&&t[n-l]===a[r-l];l++);return vr=a.slice(e,1<l?1-l:void 0)}function xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Rc(){return!1}function Ot(e){function t(n,l,a,r,s){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?br:Rc,this.isPropagationStopped=Rc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=Ot(nl),da=v({},nl,{view:0,detail:0}),n1=Ot(da),Lu,Zu,ha,Sr=v({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(Lu=e.screenX-ha.screenX,Zu=e.screenY-ha.screenY):Zu=Lu=0,ha=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),Dc=Ot(Sr),l1=v({},Sr,{dataTransfer:0}),a1=Ot(l1),r1=v({},da,{relatedTarget:0}),Pu=Ot(r1),u1=v({},nl,{animationName:0,elapsedTime:0,pseudoElement:0}),i1=Ot(u1),c1=v({},nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o1=Ot(c1),s1=v({},nl,{data:0}),zc=Ot(s1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h1[e])?!!t[e]:!1}function Qu(){return m1}var p1=v({},da,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g1=Ot(p1),y1=v({},Sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=Ot(y1),v1=v({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),x1=Ot(v1),b1=v({},nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=Ot(b1),S1=v({},Sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=Ot(S1),T1=v({},nl,{newState:0,oldState:0}),R1=Ot(T1),D1=[9,13,27,32],Ku=sn&&"CompositionEvent"in window,ma=null;sn&&"documentMode"in document&&(ma=document.documentMode);var z1=sn&&"TextEvent"in window&&!ma,wc=sn&&(!Ku||ma&&8<ma&&11>=ma),Mc=" ",Ac=!1;function Ec(e,t){switch(e){case"keyup":return D1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wl=!1;function O1(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(Ac=!0,Mc);case"textInput":return e=t.data,e===Mc&&Ac?null:e;default:return null}}function w1(e,t){if(wl)return e==="compositionend"||!Ku&&Ec(e,t)?(e=Tc(),vr=qu=wn=null,wl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var M1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!M1[e.type]:t==="textarea"}function Bc(e,t,n,l){zl?Ol?Ol.push(l):Ol=[l]:zl=l,t=cu(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var pa=null,ga=null;function A1(e){yf(e,0)}function Cr(e){var t=oa(e);if(gc(t))return e}function Gc(e,t){if(e==="change")return t}var Uc=!1;if(sn){var Wu;if(sn){var Ju="oninput"in document;if(!Ju){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),Ju=typeof jc.oninput=="function"}Wu=Ju}else Wu=!1;Uc=Wu&&(!document.documentMode||9<document.documentMode)}function Yc(){pa&&(pa.detachEvent("onpropertychange",Xc),ga=pa=null)}function Xc(e){if(e.propertyName==="value"&&Cr(ga)){var t=[];Bc(t,ga,e,Xu(e)),Cc(A1,t)}}function E1(e,t,n){e==="focusin"?(Yc(),pa=t,ga=n,pa.attachEvent("onpropertychange",Xc)):e==="focusout"&&Yc()}function V1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cr(ga)}function H1(e,t){if(e==="click")return Cr(t)}function B1(e,t){if(e==="input"||e==="change")return Cr(t)}function G1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:G1;function ya(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Rt.call(t,a)||!Ht(e[a],t[a]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=kc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gr(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var U1=sn&&"documentMode"in document&&11>=document.documentMode,Ml=null,Fu=null,va=null,Iu=!1;function Zc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Iu||Ml==null||Ml!==gr(l)||(l=Ml,"selectionStart"in l&&$u(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),va&&ya(va,l)||(va=l,l=cu(Fu,"onSelect"),0<l.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ml)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Al={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionrun:ll("Transition","TransitionRun"),transitionstart:ll("Transition","TransitionStart"),transitioncancel:ll("Transition","TransitionCancel"),transitionend:ll("Transition","TransitionEnd")},ei={},Pc={};sn&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function al(e){if(ei[e])return ei[e];if(!Al[e])return e;var t=Al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return ei[e]=t[n];return e}var Qc=al("animationend"),Kc=al("animationiteration"),Wc=al("animationstart"),j1=al("transitionrun"),Y1=al("transitionstart"),X1=al("transitioncancel"),Jc=al("transitionend"),$c=new Map,ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ti.push("scrollEnd");function $t(e,t){$c.set(e,t),tl(t,[e])}var Fc=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=Fc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mc(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:mc(t)}}var Lt=[],El=0,ni=0;function Tr(){for(var e=El,t=ni=El=0;t<e;){var n=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var a=Lt[t];Lt[t++]=null;var r=Lt[t];if(Lt[t++]=null,l!==null&&a!==null){var s=l.pending;s===null?a.next=a:(a.next=s.next,s.next=a),l.pending=a}r!==0&&Ic(n,a,r)}}function Rr(e,t,n,l){Lt[El++]=e,Lt[El++]=t,Lt[El++]=n,Lt[El++]=l,ni|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function li(e,t,n,l){return Rr(e,t,n,l),Dr(e)}function Vl(e,t){return Rr(e,null,null,t),Dr(e)}function Ic(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,l=r.alternate,l!==null&&(l.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Be(n),e=r.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),r):null}function Dr(e){if(50<qa)throw qa=0,o0=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hl={};function k1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,l){return new k1(e,t,n,l)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function eo(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zr(e,t,n,l,a,r){var s=0;if(l=e,typeof e=="function")ai(e)&&(s=1);else if(typeof e=="string")s=q3(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=Bt(31,n,t,a),e.elementType=te,e.lanes=r,e;case E:return rl(n.children,a,r,t);case k:s=8,a|=24;break;case U:return e=Bt(12,n,t,a|2),e.elementType=U,e.lanes=r,e;case G:return e=Bt(13,n,t,a),e.elementType=G,e.lanes=r,e;case Q:return e=Bt(19,n,t,a),e.elementType=Q,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:case X:s=10;break e;case Y:s=9;break e;case K:s=11;break e;case V:s=14;break e;case ee:s=16,l=null;break e}s=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Bt(s,n,t,a),t.elementType=e,t.type=l,t.lanes=r,t}function rl(e,t,n,l){return e=Bt(7,e,l,t),e.lanes=n,e}function ri(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function ui(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bl=[],Gl=0,Or=null,wr=0,Zt=[],Pt=0,ul=null,dn=1,hn="";function il(e,t){Bl[Gl++]=wr,Bl[Gl++]=Or,Or=e,wr=t}function to(e,t,n){Zt[Pt++]=dn,Zt[Pt++]=hn,Zt[Pt++]=ul,ul=e;var l=dn;e=hn;var a=32-Be(l)-1;l&=~(1<<a),n+=1;var r=32-Be(t)+a;if(30<r){var s=a-a%5;r=(l&(1<<s)-1).toString(32),l>>=s,a-=s,dn=1<<32-Be(t)+a|n<<a|l,hn=r+e}else dn=1<<r|n<<a|l,hn=e}function ii(e){e.return!==null&&(il(e,1),to(e,1,0))}function ci(e){for(;e===Or;)Or=Bl[--Gl],Bl[Gl]=null,wr=Bl[--Gl],Bl[Gl]=null;for(;e===ul;)ul=Zt[--Pt],Zt[Pt]=null,hn=Zt[--Pt],Zt[Pt]=null,dn=Zt[--Pt],Zt[Pt]=null}var Dt=null,et=null,Ee=!1,cl=null,tn=!1,oi=Error(i(519));function ol(e){var t=Error(i(418,""));throw _a(qt(t,e)),oi}function no(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[_t]=e,t[zt]=l,n){case"dialog":Re("cancel",t),Re("close",t);break;case"iframe":case"object":case"embed":Re("load",t);break;case"video":case"audio":for(n=0;n<Za.length;n++)Re(Za[n],t);break;case"source":Re("error",t);break;case"img":case"image":case"link":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"input":Re("invalid",t),yc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pr(t);break;case"select":Re("invalid",t);break;case"textarea":Re("invalid",t),xc(t,l.value,l.defaultValue,l.children),pr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||_f(t.textContent,n)?(l.popover!=null&&(Re("beforetoggle",t),Re("toggle",t)),l.onScroll!=null&&Re("scroll",t),l.onScrollEnd!=null&&Re("scrollend",t),l.onClick!=null&&(t.onclick=ou),t=!0):t=!1,t||ol(e)}function lo(e){for(Dt=e.return;Dt;)switch(Dt.tag){case 5:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:Dt=Dt.return}}function xa(e){if(e!==Dt)return!1;if(!Ee)return lo(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||R0(e.type,e.memoizedProps)),n=!n),n&&et&&ol(e),lo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){et=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}et=null}}else t===27?(t=et,Zn(e.type)?(e=w0,w0=null,et=e):et=t):et=Dt?It(e.stateNode.nextSibling):null;return!0}function ba(){et=Dt=null,Ee=!1}function ao(){var e=cl;return e!==null&&(At===null?At=e:At.push.apply(At,e),cl=null),e}function _a(e){cl===null?cl=[e]:cl.push(e)}var si=M(null),sl=null,mn=null;function Mn(e,t,n){L(si,t._currentValue),t._currentValue=n}function pn(e){e._currentValue=si.current,N(si)}function fi(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function di(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=a;for(var S=0;S<t.length;S++)if(m.context===t[S]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),fi(r.return,n,e),l||(s=null);break e}r=m.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),fi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Sa(e,t,n,l){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var m=a.type;Ht(a.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(a===He.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push($a):e=[$a])}a=a.return}e!==null&&di(t,e,n,l),t.flags|=262144}function Mr(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fl(e){sl=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return ro(sl,e)}function Ar(e,t){return sl===null&&fl(e),ro(e,t)}function ro(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},mn===null){if(e===null)throw Error(i(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return n}var N1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},q1=c.unstable_scheduleCallback,L1=c.unstable_NormalPriority,ot={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hi(){return{controller:new N1,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&q1(L1,function(){e.controller.abort()})}var Ta=null,mi=0,Ul=0,jl=null;function Z1(e,t){if(Ta===null){var n=Ta=[];mi=0,Ul=g0(),jl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return mi++,t.then(uo,uo),t}function uo(){if(--mi===0&&Ta!==null){jl!==null&&(jl.status="fulfilled");var e=Ta;Ta=null,Ul=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function P1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var io=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Z1(e,t),io!==null&&io(e,t)};var dl=M(null);function pi(){var e=dl.current;return e!==null?e:Pe.pooledCache}function Er(e,t){t===null?L(dl,dl.current):L(dl,t.pool)}function co(){var e=pi();return e===null?null:{parent:ot._currentValue,pool:e}}var Ra=Error(i(460)),oo=Error(i(474)),Vr=Error(i(542)),gi={then:function(){}};function so(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hr(){}function fo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Hr,Hr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mo(e),e;default:if(typeof t.status=="string")t.then(Hr,Hr);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mo(e),e}throw Da=t,Ra}}var Da=null;function ho(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function mo(e){if(e===Ra||e===Vr)throw Error(i(483))}var An=!1;function yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Dr(e),Ic(e,null,n),t}return Rr(e,l,t,n),Dr(e)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,fr(e,n)}}function xi(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bi=!1;function Oa(){if(bi){var e=jl;if(e!==null)throw e}}function wa(e,t,n,l){bi=!1;var a=e.updateQueue;An=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var S=m,w=S.next;S.next=null,s===null?r=w:s.next=w,s=S;var q=e.alternate;q!==null&&(q=q.updateQueue,m=q.lastBaseUpdate,m!==s&&(m===null?q.firstBaseUpdate=w:m.next=w,q.lastBaseUpdate=S))}if(r!==null){var P=a.baseState;s=0,q=w=S=null,m=r;do{var A=m.lane&-536870913,H=A!==m.lane;if(H?(we&A)===A:(l&A)===A){A!==0&&A===Ul&&(bi=!0),q!==null&&(q=q.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var fe=e,oe=m;A=t;var qe=n;switch(oe.tag){case 1:if(fe=oe.payload,typeof fe=="function"){P=fe.call(qe,P,A);break e}P=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=oe.payload,A=typeof fe=="function"?fe.call(qe,P,A):fe,A==null)break e;P=v({},P,A);break e;case 2:An=!0}}A=m.callback,A!==null&&(e.flags|=64,H&&(e.flags|=8192),H=a.callbacks,H===null?a.callbacks=[A]:H.push(A))}else H={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},q===null?(w=q=H,S=P):q=q.next=H,s|=A;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;H=m,m=H.next,H.next=null,a.lastBaseUpdate=H,a.shared.pending=null}}while(!0);q===null&&(S=P),a.baseState=S,a.firstBaseUpdate=w,a.lastBaseUpdate=q,r===null&&(a.shared.lanes=0),kn|=s,e.lanes=s,e.memoizedState=P}}function po(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function go(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)po(n[e],t)}var Yl=M(null),Br=M(0);function yo(e,t){e=Sn,L(Br,e),L(Yl,t),Sn=e|t.baseLanes}function _i(){L(Br,Sn),L(Yl,Yl.current)}function Si(){Sn=Br.current,N(Yl),N(Br)}var Hn=0,Se=null,ke=null,ut=null,Gr=!1,Xl=!1,hl=!1,Ur=0,Ma=0,kl=null,Q1=0;function lt(){throw Error(i(321))}function Ci(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Ti(e,t,n,l,a,r){return Hn=r,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?es:ts,hl=!1,r=n(l,a),hl=!1,Xl&&(r=xo(t,n,l,a)),vo(e),r}function vo(e){B.H=qr;var t=ke!==null&&ke.next!==null;if(Hn=0,ut=ke=Se=null,Gr=!1,Ma=0,kl=null,t)throw Error(i(300));e===null||dt||(e=e.dependencies,e!==null&&Mr(e)&&(dt=!0))}function xo(e,t,n,l){Se=e;var a=0;do{if(Xl&&(kl=null),Ma=0,Xl=!1,25<=a)throw Error(i(301));if(a+=1,ut=ke=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=e3,r=t(n,l)}while(Xl);return r}function K1(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Aa(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(Se.flags|=1024),t}function Ri(){var e=Ur!==0;return Ur=0,e}function Di(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zi(e){if(Gr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gr=!1}Hn=0,ut=ke=Se=null,Xl=!1,Ma=Ur=0,kl=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Se.memoizedState=ut=e:ut=ut.next=e,ut}function it(){if(ke===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=ut===null?Se.memoizedState:ut.next;if(t!==null)ut=t,ke=e;else{if(e===null)throw Se.alternate===null?Error(i(467)):Error(i(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},ut===null?Se.memoizedState=ut=e:ut=ut.next=e}return ut}function Oi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Aa(e){var t=Ma;return Ma+=1,kl===null&&(kl=[]),e=fo(kl,e,t),t=Se,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?es:ts),e}function jr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Aa(e);if(e.$$typeof===X)return St(e)}throw Error(i(438,String(e)))}function wi(e){var t=null,n=Se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Oi(),Se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=he;return t.index++,n}function gn(e,t){return typeof t=="function"?t(e):t}function Yr(e){var t=it();return Mi(t,ke,e)}function Mi(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,r=l.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,l.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var m=s=null,S=null,w=t,q=!1;do{var P=w.lane&-536870913;if(P!==w.lane?(we&P)===P:(Hn&P)===P){var A=w.revertLane;if(A===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),P===Ul&&(q=!0);else if((Hn&A)===A){w=w.next,A===Ul&&(q=!0);continue}else P={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},S===null?(m=S=P,s=r):S=S.next=P,Se.lanes|=A,kn|=A;P=w.action,hl&&n(r,P),r=w.hasEagerState?w.eagerState:n(r,P)}else A={lane:P,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},S===null?(m=S=A,s=r):S=S.next=A,Se.lanes|=P,kn|=P;w=w.next}while(w!==null&&w!==t);if(S===null?s=r:S.next=m,!Ht(r,e.memoizedState)&&(dt=!0,q&&(n=jl,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=S,l.lastRenderedState=r}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ai(e){var t=it(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Ht(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,l]}function bo(e,t,n){var l=Se,a=it(),r=Ee;if(r){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ht((ke||a).memoizedState,n);s&&(a.memoizedState=n,dt=!0),a=a.queue;var m=Co.bind(null,l,a,e);if(Ea(2048,8,m,[e]),a.getSnapshot!==t||s||ut!==null&&ut.memoizedState.tag&1){if(l.flags|=2048,Nl(9,Xr(),So.bind(null,l,a,n,t),null),Pe===null)throw Error(i(349));r||(Hn&124)!==0||_o(l,t,n)}return n}function _o(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t=Oi(),Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function So(e,t,n,l){t.value=n,t.getSnapshot=l,To(t)&&Ro(e)}function Co(e,t,n){return n(function(){To(t)&&Ro(e)})}function To(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Ro(e){var t=Vl(e,2);t!==null&&Xt(t,e,2)}function Ei(e){var t=wt();if(typeof e=="function"){var n=e;if(e=n(),hl){gt(!0);try{n()}finally{gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t}function Do(e,t,n,l){return e.baseState=n,Mi(e,ke,typeof l=="function"?l:gn)}function W1(e,t,n,l,a){if(Nr(e))throw Error(i(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};B.T!==null?n(!0):r.isTransition=!1,l(r),n=t.pending,n===null?(r.next=t.pending=r,zo(t,r)):(r.next=n.next,t.pending=n.next=r)}}function zo(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var r=B.T,s={};B.T=s;try{var m=n(a,l),S=B.S;S!==null&&S(s,m),Oo(e,t,m)}catch(w){Vi(e,t,w)}finally{B.T=r}}else try{r=n(a,l),Oo(e,t,r)}catch(w){Vi(e,t,w)}}function Oo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){wo(e,t,l)},function(l){return Vi(e,t,l)}):wo(e,t,n)}function wo(e,t,n){t.status="fulfilled",t.value=n,Mo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,zo(e,n)))}function Vi(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Mo(t),t=t.next;while(t!==l)}e.action=null}function Mo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ao(e,t){return t}function Eo(e,t){if(Ee){var n=Pe.formState;if(n!==null){e:{var l=Se;if(Ee){if(et){t:{for(var a=et,r=tn;a.nodeType!==8;){if(!r){a=null;break t}if(a=It(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){et=It(a.nextSibling),l=a.data==="F!";break e}}ol(l)}l=!1}l&&(t=n[0])}}return n=wt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},n.queue=l,n=$o.bind(null,Se,l),l.dispatch=n,l=Ei(!1),r=ji.bind(null,Se,!1,l.queue),l=wt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=W1.bind(null,Se,a,r,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Vo(e){var t=it();return Ho(t,ke,e)}function Ho(e,t,n){if(t=Mi(e,t,Ao)[0],e=Yr(gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Aa(t)}catch(s){throw s===Ra?Vr:s}else l=t;t=it();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Se.flags|=2048,Nl(9,Xr(),J1.bind(null,a,n),null)),[l,r,e]}function J1(e,t){e.action=t}function Bo(e){var t=it(),n=ke;if(n!==null)return Ho(t,n,e);it(),t=t.memoizedState,n=it();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Nl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Se.updateQueue,t===null&&(t=Oi(),Se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Xr(){return{destroy:void 0,resource:void 0}}function Go(){return it().memoizedState}function kr(e,t,n,l){var a=wt();l=l===void 0?null:l,Se.flags|=e,a.memoizedState=Nl(1|t,Xr(),n,l)}function Ea(e,t,n,l){var a=it();l=l===void 0?null:l;var r=a.memoizedState.inst;ke!==null&&l!==null&&Ci(l,ke.memoizedState.deps)?a.memoizedState=Nl(t,r,n,l):(Se.flags|=e,a.memoizedState=Nl(1|t,r,n,l))}function Uo(e,t){kr(8390656,8,e,t)}function jo(e,t){Ea(2048,8,e,t)}function Yo(e,t){return Ea(4,2,e,t)}function Xo(e,t){return Ea(4,4,e,t)}function ko(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function No(e,t,n){n=n!=null?n.concat([e]):null,Ea(4,4,ko.bind(null,t,e),n)}function Hi(){}function qo(e,t){var n=it();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Ci(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Lo(e,t){var n=it();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Ci(t,l[1]))return l[0];if(l=e(),hl){gt(!0);try{e()}finally{gt(!1)}}return n.memoizedState=[l,t],l}function Bi(e,t,n){return n===void 0||(Hn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Qs(),Se.lanes|=e,kn|=e,n)}function Zo(e,t,n,l){return Ht(n,t)?n:Yl.current!==null?(e=Bi(e,n,l),Ht(e,t)||(dt=!0),e):(Hn&42)===0?(dt=!0,e.memoizedState=n):(e=Qs(),Se.lanes|=e,kn|=e,t)}function Po(e,t,n,l,a){var r=J.p;J.p=r!==0&&8>r?r:8;var s=B.T,m={};B.T=m,ji(e,!1,t,n);try{var S=a(),w=B.S;if(w!==null&&w(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var q=P1(S,l);Va(e,t,q,Yt(e))}else Va(e,t,l,Yt(e))}catch(P){Va(e,t,{then:function(){},status:"rejected",reason:P},Yt())}finally{J.p=r,B.T=s}}function $1(){}function Gi(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=Qo(e).queue;Po(e,a,t,$,n===null?$1:function(){return Ko(e),n(l)})}function Qo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ko(e){var t=Qo(e).next.queue;Va(e,t,{},Yt())}function Ui(){return St($a)}function Wo(){return it().memoizedState}function Jo(){return it().memoizedState}function F1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=En(n);var l=Vn(t,e,n);l!==null&&(Xt(l,t,n),za(l,t,n)),t={cache:hi()},e.payload=t;return}t=t.return}}function I1(e,t,n){var l=Yt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Nr(e)?Fo(t,n):(n=li(e,t,n,l),n!==null&&(Xt(n,e,l),Io(n,t,l)))}function $o(e,t,n){var l=Yt();Va(e,t,n,l)}function Va(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))Fo(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,m=r(s,n);if(a.hasEagerState=!0,a.eagerState=m,Ht(m,s))return Rr(e,t,a,0),Pe===null&&Tr(),!1}catch{}finally{}if(n=li(e,t,a,l),n!==null)return Xt(n,e,l),Io(n,t,l),!0}return!1}function ji(e,t,n,l){if(l={lane:2,revertLane:g0(),action:l,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(t)throw Error(i(479))}else t=li(e,n,l,2),t!==null&&Xt(t,e,2)}function Nr(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Fo(e,t){Xl=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Io(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,fr(e,n)}}var qr={readContext:St,use:jr,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},es={readContext:St,use:jr,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Uo,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,kr(4194308,4,ko.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kr(4194308,4,e,t)},useInsertionEffect:function(e,t){kr(4,2,e,t)},useMemo:function(e,t){var n=wt();t=t===void 0?null:t;var l=e();if(hl){gt(!0);try{e()}finally{gt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=wt();if(n!==void 0){var a=n(t);if(hl){gt(!0);try{n(t)}finally{gt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=I1.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ei(e);var t=e.queue,n=$o.bind(null,Se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hi,useDeferredValue:function(e,t){var n=wt();return Bi(n,e,t)},useTransition:function(){var e=Ei(!1);return e=Po.bind(null,Se,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Se,a=wt();if(Ee){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Pe===null)throw Error(i(349));(we&124)!==0||_o(l,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Uo(Co.bind(null,l,r,e),[e]),l.flags|=2048,Nl(9,Xr(),So.bind(null,l,r,n,t),null),n},useId:function(){var e=wt(),t=Pe.identifierPrefix;if(Ee){var n=hn,l=dn;n=(l&~(1<<32-Be(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Q1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ui,useFormState:Eo,useActionState:Eo,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ji.bind(null,Se,!0,n),n.dispatch=t,[e,t]},useMemoCache:wi,useCacheRefresh:function(){return wt().memoizedState=F1.bind(null,Se)}},ts={readContext:St,use:jr,useCallback:qo,useContext:St,useEffect:jo,useImperativeHandle:No,useInsertionEffect:Yo,useLayoutEffect:Xo,useMemo:Lo,useReducer:Yr,useRef:Go,useState:function(){return Yr(gn)},useDebugValue:Hi,useDeferredValue:function(e,t){var n=it();return Zo(n,ke.memoizedState,e,t)},useTransition:function(){var e=Yr(gn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Aa(e),t]},useSyncExternalStore:bo,useId:Wo,useHostTransitionStatus:Ui,useFormState:Vo,useActionState:Vo,useOptimistic:function(e,t){var n=it();return Do(n,ke,e,t)},useMemoCache:wi,useCacheRefresh:Jo},e3={readContext:St,use:jr,useCallback:qo,useContext:St,useEffect:jo,useImperativeHandle:No,useInsertionEffect:Yo,useLayoutEffect:Xo,useMemo:Lo,useReducer:Ai,useRef:Go,useState:function(){return Ai(gn)},useDebugValue:Hi,useDeferredValue:function(e,t){var n=it();return ke===null?Bi(n,e,t):Zo(n,ke.memoizedState,e,t)},useTransition:function(){var e=Ai(gn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Aa(e),t]},useSyncExternalStore:bo,useId:Wo,useHostTransitionStatus:Ui,useFormState:Bo,useActionState:Bo,useOptimistic:function(e,t){var n=it();return ke!==null?Do(n,ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wi,useCacheRefresh:Jo},ql=null,Ha=0;function Lr(e){var t=Ha;return Ha+=1,ql===null&&(ql=[]),fo(ql,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zr(e,t){throw t.$$typeof===b?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ns(e){var t=e._init;return t(e._payload)}function ls(e){function t(z,R){if(e){var O=z.deletions;O===null?(z.deletions=[R],z.flags|=16):O.push(R)}}function n(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function l(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function a(z,R){return z=fn(z,R),z.index=0,z.sibling=null,z}function r(z,R,O){return z.index=O,e?(O=z.alternate,O!==null?(O=O.index,O<R?(z.flags|=67108866,R):O):(z.flags|=67108866,R)):(z.flags|=1048576,R)}function s(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,R,O,Z){return R===null||R.tag!==6?(R=ri(O,z.mode,Z),R.return=z,R):(R=a(R,O),R.return=z,R)}function S(z,R,O,Z){var le=O.type;return le===E?q(z,R,O.props.children,Z,O.key):R!==null&&(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ee&&ns(le)===R.type)?(R=a(R,O.props),Ba(R,O),R.return=z,R):(R=zr(O.type,O.key,O.props,null,z.mode,Z),Ba(R,O),R.return=z,R)}function w(z,R,O,Z){return R===null||R.tag!==4||R.stateNode.containerInfo!==O.containerInfo||R.stateNode.implementation!==O.implementation?(R=ui(O,z.mode,Z),R.return=z,R):(R=a(R,O.children||[]),R.return=z,R)}function q(z,R,O,Z,le){return R===null||R.tag!==7?(R=rl(O,z.mode,Z,le),R.return=z,R):(R=a(R,O),R.return=z,R)}function P(z,R,O){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ri(""+R,z.mode,O),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case _:return O=zr(R.type,R.key,R.props,null,z.mode,O),Ba(O,R),O.return=z,O;case T:return R=ui(R,z.mode,O),R.return=z,R;case ee:var Z=R._init;return R=Z(R._payload),P(z,R,O)}if(pe(R)||ae(R))return R=rl(R,z.mode,O,null),R.return=z,R;if(typeof R.then=="function")return P(z,Lr(R),O);if(R.$$typeof===X)return P(z,Ar(z,R),O);Zr(z,R)}return null}function A(z,R,O,Z){var le=R!==null?R.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return le!==null?null:m(z,R,""+O,Z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _:return O.key===le?S(z,R,O,Z):null;case T:return O.key===le?w(z,R,O,Z):null;case ee:return le=O._init,O=le(O._payload),A(z,R,O,Z)}if(pe(O)||ae(O))return le!==null?null:q(z,R,O,Z,null);if(typeof O.then=="function")return A(z,R,Lr(O),Z);if(O.$$typeof===X)return A(z,R,Ar(z,O),Z);Zr(z,O)}return null}function H(z,R,O,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(O)||null,m(R,z,""+Z,le);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case _:return z=z.get(Z.key===null?O:Z.key)||null,S(R,z,Z,le);case T:return z=z.get(Z.key===null?O:Z.key)||null,w(R,z,Z,le);case ee:var Ce=Z._init;return Z=Ce(Z._payload),H(z,R,O,Z,le)}if(pe(Z)||ae(Z))return z=z.get(O)||null,q(R,z,Z,le,null);if(typeof Z.then=="function")return H(z,R,O,Lr(Z),le);if(Z.$$typeof===X)return H(z,R,O,Ar(R,Z),le);Zr(R,Z)}return null}function fe(z,R,O,Z){for(var le=null,Ce=null,ie=R,se=R=0,mt=null;ie!==null&&se<O.length;se++){ie.index>se?(mt=ie,ie=null):mt=ie.sibling;var Me=A(z,ie,O[se],Z);if(Me===null){ie===null&&(ie=mt);break}e&&ie&&Me.alternate===null&&t(z,ie),R=r(Me,R,se),Ce===null?le=Me:Ce.sibling=Me,Ce=Me,ie=mt}if(se===O.length)return n(z,ie),Ee&&il(z,se),le;if(ie===null){for(;se<O.length;se++)ie=P(z,O[se],Z),ie!==null&&(R=r(ie,R,se),Ce===null?le=ie:Ce.sibling=ie,Ce=ie);return Ee&&il(z,se),le}for(ie=l(ie);se<O.length;se++)mt=H(ie,z,se,O[se],Z),mt!==null&&(e&&mt.alternate!==null&&ie.delete(mt.key===null?se:mt.key),R=r(mt,R,se),Ce===null?le=mt:Ce.sibling=mt,Ce=mt);return e&&ie.forEach(function(Jn){return t(z,Jn)}),Ee&&il(z,se),le}function oe(z,R,O,Z){if(O==null)throw Error(i(151));for(var le=null,Ce=null,ie=R,se=R=0,mt=null,Me=O.next();ie!==null&&!Me.done;se++,Me=O.next()){ie.index>se?(mt=ie,ie=null):mt=ie.sibling;var Jn=A(z,ie,Me.value,Z);if(Jn===null){ie===null&&(ie=mt);break}e&&ie&&Jn.alternate===null&&t(z,ie),R=r(Jn,R,se),Ce===null?le=Jn:Ce.sibling=Jn,Ce=Jn,ie=mt}if(Me.done)return n(z,ie),Ee&&il(z,se),le;if(ie===null){for(;!Me.done;se++,Me=O.next())Me=P(z,Me.value,Z),Me!==null&&(R=r(Me,R,se),Ce===null?le=Me:Ce.sibling=Me,Ce=Me);return Ee&&il(z,se),le}for(ie=l(ie);!Me.done;se++,Me=O.next())Me=H(ie,z,se,Me.value,Z),Me!==null&&(e&&Me.alternate!==null&&ie.delete(Me.key===null?se:Me.key),R=r(Me,R,se),Ce===null?le=Me:Ce.sibling=Me,Ce=Me);return e&&ie.forEach(function(td){return t(z,td)}),Ee&&il(z,se),le}function qe(z,R,O,Z){if(typeof O=="object"&&O!==null&&O.type===E&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case _:e:{for(var le=O.key;R!==null;){if(R.key===le){if(le=O.type,le===E){if(R.tag===7){n(z,R.sibling),Z=a(R,O.props.children),Z.return=z,z=Z;break e}}else if(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ee&&ns(le)===R.type){n(z,R.sibling),Z=a(R,O.props),Ba(Z,O),Z.return=z,z=Z;break e}n(z,R);break}else t(z,R);R=R.sibling}O.type===E?(Z=rl(O.props.children,z.mode,Z,O.key),Z.return=z,z=Z):(Z=zr(O.type,O.key,O.props,null,z.mode,Z),Ba(Z,O),Z.return=z,z=Z)}return s(z);case T:e:{for(le=O.key;R!==null;){if(R.key===le)if(R.tag===4&&R.stateNode.containerInfo===O.containerInfo&&R.stateNode.implementation===O.implementation){n(z,R.sibling),Z=a(R,O.children||[]),Z.return=z,z=Z;break e}else{n(z,R);break}else t(z,R);R=R.sibling}Z=ui(O,z.mode,Z),Z.return=z,z=Z}return s(z);case ee:return le=O._init,O=le(O._payload),qe(z,R,O,Z)}if(pe(O))return fe(z,R,O,Z);if(ae(O)){if(le=ae(O),typeof le!="function")throw Error(i(150));return O=le.call(O),oe(z,R,O,Z)}if(typeof O.then=="function")return qe(z,R,Lr(O),Z);if(O.$$typeof===X)return qe(z,R,Ar(z,O),Z);Zr(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,R!==null&&R.tag===6?(n(z,R.sibling),Z=a(R,O),Z.return=z,z=Z):(n(z,R),Z=ri(O,z.mode,Z),Z.return=z,z=Z),s(z)):n(z,R)}return function(z,R,O,Z){try{Ha=0;var le=qe(z,R,O,Z);return ql=null,le}catch(ie){if(ie===Ra||ie===Vr)throw ie;var Ce=Bt(29,ie,null,z.mode);return Ce.lanes=Z,Ce.return=z,Ce}finally{}}}var Ll=ls(!0),as=ls(!1),Qt=M(null),nn=null;function Bn(e){var t=e.alternate;L(st,st.current&1),L(Qt,e),nn===null&&(t===null||Yl.current!==null||t.memoizedState!==null)&&(nn=e)}function rs(e){if(e.tag===22){if(L(st,st.current),L(Qt,e),nn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(nn=e)}}else Gn()}function Gn(){L(st,st.current),L(Qt,Qt.current)}function yn(e){N(Qt),nn===e&&(nn=null),N(st)}var st=M(0);function Pr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||O0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Yi(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xi={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=En(l);a.payload=t,n!=null&&(a.callback=n),t=Vn(e,a,l),t!==null&&(Xt(t,e,l),za(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=En(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vn(e,a,l),t!==null&&(Xt(t,e,l),za(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),l=En(n);l.tag=2,t!=null&&(l.callback=t),t=Vn(e,l,n),t!==null&&(Xt(t,e,n),za(t,e,n))}};function us(e,t,n,l,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,s):t.prototype&&t.prototype.isPureReactComponent?!ya(n,l)||!ya(a,r):!0}function is(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function ml(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Qr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function cs(e){Qr(e)}function os(e){console.error(e)}function ss(e){Qr(e)}function Kr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function fs(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ki(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){Kr(e,t)},n}function ds(e){return e=En(e),e.tag=3,e}function hs(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;e.payload=function(){return a(r)},e.callback=function(){fs(t,n,l)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){fs(t,n,l),typeof a!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function t3(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Sa(t,n,a,!0),n=Qt.current,n!==null){switch(n.tag){case 13:return nn===null?f0():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===gi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),h0(e,l,a)),!1;case 22:return n.flags|=65536,l===gi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),h0(e,l,a)),!1}throw Error(i(435,n.tag))}return h0(e,l,a),f0(),!1}if(Ee)return t=Qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==oi&&(e=Error(i(422),{cause:l}),_a(qt(e,n)))):(l!==oi&&(t=Error(i(423),{cause:l}),_a(qt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=qt(l,n),a=ki(e.stateNode,l,a),xi(e,a),tt!==4&&(tt=2)),!1;var r=Error(i(520),{cause:l});if(r=qt(r,n),Na===null?Na=[r]:Na.push(r),tt!==4&&(tt=2),t===null)return!0;l=qt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ki(n.stateNode,l,e),xi(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ds(a),hs(a,e,n,l),xi(n,a),!1}n=n.return}while(n!==null);return!1}var ms=Error(i(461)),dt=!1;function yt(e,t,n,l){t.child=e===null?as(t,null,n,l):Ll(t,e.child,n,l)}function ps(e,t,n,l,a){n=n.render;var r=t.ref;if("ref"in l){var s={};for(var m in l)m!=="ref"&&(s[m]=l[m])}else s=l;return fl(t),l=Ti(e,t,n,s,r,a),m=Ri(),e!==null&&!dt?(Di(e,t,a),vn(e,t,a)):(Ee&&m&&ii(t),t.flags|=1,yt(e,t,l,a),t.child)}function gs(e,t,n,l,a){if(e===null){var r=n.type;return typeof r=="function"&&!ai(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,ys(e,t,r,l,a)):(e=zr(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Wi(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(s,l)&&e.ref===t.ref)return vn(e,t,a)}return t.flags|=1,e=fn(r,l),e.ref=t.ref,e.return=t,t.child=e}function ys(e,t,n,l,a){if(e!==null){var r=e.memoizedProps;if(ya(r,l)&&e.ref===t.ref)if(dt=!1,t.pendingProps=l=r,Wi(e,a))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,vn(e,t,a)}return Ni(e,t,n,l,a)}function vs(e,t,n){var l=t.pendingProps,a=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return xs(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Er(t,r!==null?r.cachePool:null),r!==null?yo(t,r):_i(),rs(t);else return t.lanes=t.childLanes=536870912,xs(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Er(t,r.cachePool),yo(t,r),Gn(),t.memoizedState=null):(e!==null&&Er(t,null),_i(),Gn());return yt(e,t,a,n),t.child}function xs(e,t,n,l){var a=pi();return a=a===null?null:{parent:ot._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Er(t,null),_i(),rs(t),e!==null&&Sa(e,t,l,!0),null}function Wr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ni(e,t,n,l,a){return fl(t),n=Ti(e,t,n,l,void 0,a),l=Ri(),e!==null&&!dt?(Di(e,t,a),vn(e,t,a)):(Ee&&l&&ii(t),t.flags|=1,yt(e,t,n,a),t.child)}function bs(e,t,n,l,a,r){return fl(t),t.updateQueue=null,n=xo(t,l,n,a),vo(e),l=Ri(),e!==null&&!dt?(Di(e,t,r),vn(e,t,r)):(Ee&&l&&ii(t),t.flags|=1,yt(e,t,n,r),t.child)}function _s(e,t,n,l,a){if(fl(t),t.stateNode===null){var r=Hl,s=n.contextType;typeof s=="object"&&s!==null&&(r=St(s)),r=new n(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xi,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},yi(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?St(s):Hl,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Yi(t,n,s,l),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Xi.enqueueReplaceState(r,r.state,null),wa(t,l,r,a),Oa(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,S=ml(n,m);r.props=S;var w=r.context,q=n.contextType;s=Hl,typeof q=="object"&&q!==null&&(s=St(q));var P=n.getDerivedStateFromProps;q=typeof P=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||w!==s)&&is(t,r,l,s),An=!1;var A=t.memoizedState;r.state=A,wa(t,l,r,a),Oa(),w=t.memoizedState,m||A!==w||An?(typeof P=="function"&&(Yi(t,n,P,l),w=t.memoizedState),(S=An||us(t,n,S,l,A,w,s))?(q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=s,l=S):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,vi(e,t),s=t.memoizedProps,q=ml(n,s),r.props=q,P=t.pendingProps,A=r.context,w=n.contextType,S=Hl,typeof w=="object"&&w!==null&&(S=St(w)),m=n.getDerivedStateFromProps,(w=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==P||A!==S)&&is(t,r,l,S),An=!1,A=t.memoizedState,r.state=A,wa(t,l,r,a),Oa();var H=t.memoizedState;s!==P||A!==H||An||e!==null&&e.dependencies!==null&&Mr(e.dependencies)?(typeof m=="function"&&(Yi(t,n,m,l),H=t.memoizedState),(q=An||us(t,n,q,l,A,H,S)||e!==null&&e.dependencies!==null&&Mr(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,H,S),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,H,S)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=H),r.props=l,r.state=H,r.context=S,l=q):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Wr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ll(t,e.child,null,a),t.child=Ll(t,null,n,a)):yt(e,t,n,a),t.memoizedState=r.state,e=t.child):e=vn(e,t,a),e}function Ss(e,t,n,l){return ba(),t.flags|=256,yt(e,t,n,l),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Li(e){return{baseLanes:e,cachePool:co()}}function Zi(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kt),e}function Cs(e,t,n){var l=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(a?Bn(t):Gn(),Ee){var m=et,S;if(S=m){e:{for(S=m,m=tn;S.nodeType!==8;){if(!m){m=null;break e}if(S=It(S.nextSibling),S===null){m=null;break e}}m=S}m!==null?(t.memoizedState={dehydrated:m,treeContext:ul!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},S=Bt(18,null,null,0),S.stateNode=m,S.return=t,t.child=S,Dt=t,et=null,S=!0):S=!1}S||ol(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return O0(m)?t.lanes=32:t.lanes=536870912,null;yn(t)}return m=l.children,l=l.fallback,a?(Gn(),a=t.mode,m=Jr({mode:"hidden",children:m},a),l=rl(l,a,n,null),m.return=t,l.return=t,m.sibling=l,t.child=m,a=t.child,a.memoizedState=Li(n),a.childLanes=Zi(e,s,n),t.memoizedState=qi,l):(Bn(t),Pi(t,m))}if(S=e.memoizedState,S!==null&&(m=S.dehydrated,m!==null)){if(r)t.flags&256?(Bn(t),t.flags&=-257,t=Qi(e,t,n)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,t=null):(Gn(),a=l.fallback,m=t.mode,l=Jr({mode:"visible",children:l.children},m),a=rl(a,m,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Ll(t,e.child,null,n),l=t.child,l.memoizedState=Li(n),l.childLanes=Zi(e,s,n),t.memoizedState=qi,t=a);else if(Bn(t),O0(m)){if(s=m.nextSibling&&m.nextSibling.dataset,s)var w=s.dgst;s=w,l=Error(i(419)),l.stack="",l.digest=s,_a({value:l,source:null,stack:null}),t=Qi(e,t,n)}else if(dt||Sa(e,t,n,!1),s=(n&e.childLanes)!==0,dt||s){if(s=Pe,s!==null&&(l=n&-n,l=(l&42)!==0?1:ua(l),l=(l&(s.suspendedLanes|n))!==0?0:l,l!==0&&l!==S.retryLane))throw S.retryLane=l,Vl(e,l),Xt(s,e,l),ms;m.data==="$?"||f0(),t=Qi(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,et=It(m.nextSibling),Dt=t,Ee=!0,cl=null,tn=!1,e!==null&&(Zt[Pt++]=dn,Zt[Pt++]=hn,Zt[Pt++]=ul,dn=e.id,hn=e.overflow,ul=t),t=Pi(t,l.children),t.flags|=4096);return t}return a?(Gn(),a=l.fallback,m=t.mode,S=e.child,w=S.sibling,l=fn(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,w!==null?a=fn(w,a):(a=rl(a,m,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,m=e.child.memoizedState,m===null?m=Li(n):(S=m.cachePool,S!==null?(w=ot._currentValue,S=S.parent!==w?{parent:w,pool:w}:S):S=co(),m={baseLanes:m.baseLanes|n,cachePool:S}),a.memoizedState=m,a.childLanes=Zi(e,s,n),t.memoizedState=qi,l):(Bn(t),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Pi(e,t){return t=Jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jr(e,t){return e=Bt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qi(e,t,n){return Ll(t,e.child,null,n),e=Pi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ts(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),fi(e.return,t,n)}function Ki(e,t,n,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a)}function Rs(e,t,n){var l=t.pendingProps,a=l.revealOrder,r=l.tail;if(yt(e,t,l.children,n),l=st.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ts(e,n,t);else if(e.tag===19)Ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(L(st,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Pr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ki(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Pr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ki(t,!0,n,null,r);break;case"together":Ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mr(e)))}function n3(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Mn(t,ot,e.memoizedState.cache),ba();break;case 27:case 5:bt(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Cs(e,t,n):(Bn(t),e=vn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Sa(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Rs(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(st,st.current),l)break;return null;case 22:case 23:return t.lanes=0,vs(e,t,n);case 24:Mn(t,ot,e.memoizedState.cache)}return vn(e,t,n)}function Ds(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!Wi(e,n)&&(t.flags&128)===0)return dt=!1,n3(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Ee&&(t.flags&1048576)!==0&&to(t,wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")ai(l)?(e=ml(l,e),t.tag=1,t=_s(null,t,l,e,n)):(t.tag=0,t=Ni(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===K){t.tag=11,t=ps(null,t,l,e,n);break e}else if(a===V){t.tag=14,t=gs(null,t,l,e,n);break e}}throw t=ze(l)||l,Error(i(306,t,""))}}return t;case 0:return Ni(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=ml(l,t.pendingProps),_s(e,t,l,a,n);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var r=t.memoizedState;a=r.element,vi(e,t),wa(t,l,null,n);var s=t.memoizedState;if(l=s.cache,Mn(t,ot,l),l!==r.cache&&di(t,[ot],n,!0),Oa(),l=s.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ss(e,t,l,n);break e}else if(l!==a){a=qt(Error(i(424)),t),_a(a),t=Ss(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(et=It(e.firstChild),Dt=t,Ee=!0,cl=null,tn=!0,n=as(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ba(),l===a){t=vn(e,t,n);break e}yt(e,t,l,n)}t=t.child}return t;case 26:return Wr(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,l=su(ue.current).createElement(n),l[_t]=t,l[zt]=e,xt(l,n,e),ft(l),t.stateNode=l):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bt(t),e===null&&Ee&&(l=t.stateNode=Of(t.type,t.pendingProps,ue.current),Dt=t,tn=!0,a=et,Zn(t.type)?(w0=a,et=It(l.firstChild)):et=a),yt(e,t,t.pendingProps.children,n),Wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((a=l=et)&&(l=M3(l,t.type,t.pendingProps,tn),l!==null?(t.stateNode=l,Dt=t,et=It(l.firstChild),tn=!1,a=!0):a=!1),a||ol(t)),bt(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,l=r.children,R0(a,r)?l=null:s!==null&&R0(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Ti(e,t,K1,null,null,n),$a._currentValue=a),Wr(e,t),yt(e,t,l,n),t.child;case 6:return e===null&&Ee&&((e=n=et)&&(n=A3(n,t.pendingProps,tn),n!==null?(t.stateNode=n,Dt=t,et=null,e=!0):e=!1),e||ol(t)),null;case 13:return Cs(e,t,n);case 4:return De(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ll(t,null,l,n):yt(e,t,l,n),t.child;case 11:return ps(e,t,t.type,t.pendingProps,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Mn(t,t.type,l.value),yt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,fl(t),a=St(a),l=l(a),t.flags|=1,yt(e,t,l,n),t.child;case 14:return gs(e,t,t.type,t.pendingProps,n);case 15:return ys(e,t,t.type,t.pendingProps,n);case 19:return Rs(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Jr(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=fn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return vs(e,t,n);case 24:return fl(t),l=St(ot),e===null?(a=pi(),a===null&&(a=Pe,r=hi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:l,cache:a},yi(t),Mn(t,ot,a)):((e.lanes&n)!==0&&(vi(e,t),wa(t,null,null,n),Oa()),a=e.memoizedState,r=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Mn(t,ot,l)):(l=r.cache,Mn(t,ot,l),l!==a.cache&&di(t,[ot],n,!0))),yt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function xn(e){e.flags|=4}function zs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(t=Qt.current,t!==null&&((we&4194048)===we?nn!==null:(we&62914560)!==we&&(we&536870912)===0||t!==nn))throw Da=gi,oo;e.flags|=8192}}function $r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?I():536870912,e.lanes|=t,Kl|=t)}function Ga(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function l3(e,t,n){var l=t.pendingProps;switch(ci(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),pn(ot),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xa(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ao())),Fe(t),null;case 26:return n=t.memoizedState,e===null?(xn(t),n!==null?(Fe(t),zs(t,n)):(Fe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(xn(t),Fe(t),zs(t,n)):(Fe(t),t.flags&=-16777217):(e.memoizedProps!==l&&xn(t),Fe(t),t.flags&=-16777217),null;case 27:nt(t),n=ue.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Fe(t),null}e=F.current,xa(t)?no(t):(e=Of(a,l,n),t.stateNode=e,xn(t))}return Fe(t),null;case 5:if(nt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Fe(t),null}if(e=F.current,xa(t))no(t);else{switch(a=su(ue.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[_t]=t,e[zt]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(xt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&xn(t)}}return Fe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=ue.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Dt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||_f(e.nodeValue,n)),e||ol(t)}else e=su(e).createTextNode(l),e[_t]=t,t.stateNode=e}return Fe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=xa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[_t]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else a=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(yn(t),t):(yn(t),null)}if(yn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),$r(t,t.updateQueue),Fe(t),null;case 4:return je(),e===null&&b0(t.stateNode.containerInfo),Fe(t),null;case 10:return pn(t.type),Fe(t),null;case 19:if(N(st),a=t.memoizedState,a===null)return Fe(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)Ga(a,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Pr(e),r!==null){for(t.flags|=128,Ga(a,!1),e=r.updateQueue,t.updateQueue=e,$r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)eo(n,e),n=n.sibling;return L(st,st.current&1|2),t.child}e=e.sibling}a.tail!==null&&ge()>eu&&(t.flags|=128,l=!0,Ga(a,!1),t.lanes=4194304)}else{if(!l)if(e=Pr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,$r(t,e),Ga(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Ee)return Fe(t),null}else 2*ge()-a.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,l=!0,Ga(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,e=st.current,L(st,l?e&1|2:e&1),t):(Fe(t),null);case 22:case 23:return yn(t),Si(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&$r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&N(dl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pn(ot),Fe(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function a3(e,t){switch(ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(ot),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return nt(t),null;case 13:if(yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(st),null;case 4:return je(),null;case 10:return pn(t.type),null;case 22:case 23:return yn(t),Si(),e!==null&&N(dl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pn(ot),null;case 25:return null;default:return null}}function Os(e,t){switch(ci(t),t.tag){case 3:pn(ot),je();break;case 26:case 27:case 5:nt(t);break;case 4:je();break;case 13:yn(t);break;case 19:N(st);break;case 10:pn(t.type);break;case 22:case 23:yn(t),Si(),e!==null&&N(dl);break;case 24:pn(ot)}}function Ua(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var r=n.create,s=n.inst;l=r(),s.destroy=l}n=n.next}while(n!==a)}}catch(m){Le(t,t.return,m)}}function Un(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&e)===e){var s=l.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,a=t;var S=n,w=m;try{w()}catch(q){Le(a,S,q)}}}l=l.next}while(l!==r)}}catch(q){Le(t,t.return,q)}}function ws(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{go(t,n)}catch(l){Le(e,e.return,l)}}}function Ms(e,t,n){n.props=ml(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Le(e,t,l)}}function ja(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Le(e,t,a)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Le(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Le(e,t,a)}else n.current=null}function As(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Le(e,e.return,a)}}function Ji(e,t,n){try{var l=e.stateNode;R3(l,e.type,n,t),l[zt]=t}catch(a){Le(e,e.return,a)}}function Es(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zn(e.type)||e.tag===4}function $i(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Es(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ou));else if(l!==4&&(l===27&&Zn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Fr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Zn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function Vs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xt(t,l,n),t[_t]=e,t[zt]=n}catch(r){Le(e,e.return,r)}}var bn=!1,at=!1,Ii=!1,Hs=typeof WeakSet=="function"?WeakSet:Set,ht=null;function r3(e,t){if(e=e.containerInfo,C0=gu,e=Lc(e),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,m=-1,S=-1,w=0,q=0,P=e,A=null;t:for(;;){for(var H;P!==n||a!==0&&P.nodeType!==3||(m=s+a),P!==r||l!==0&&P.nodeType!==3||(S=s+l),P.nodeType===3&&(s+=P.nodeValue.length),(H=P.firstChild)!==null;)A=P,P=H;for(;;){if(P===e)break t;if(A===n&&++w===a&&(m=s),A===r&&++q===l&&(S=s),(H=P.nextSibling)!==null)break;P=A,A=P.parentNode}P=H}n=m===-1||S===-1?null:{start:m,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(T0={focusedElem:e,selectionRange:n},gu=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,l=n.stateNode;try{var fe=ml(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(fe,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Le(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)z0(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":z0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function Bs(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),l&4&&Ua(5,n);break;case 1:if(jn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Le(n,n.return,s)}else{var a=ml(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Le(n,n.return,s)}}l&64&&ws(n),l&512&&ja(n,n.return);break;case 3:if(jn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{go(e,t)}catch(s){Le(n,n.return,s)}}break;case 27:t===null&&l&4&&Vs(n);case 26:case 5:jn(e,n),t===null&&l&4&&As(n),l&512&&ja(n,n.return);break;case 12:jn(e,n);break;case 13:jn(e,n),l&4&&js(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=m3.bind(null,n),E3(e,n))));break;case 22:if(l=n.memoizedState!==null||bn,!l){t=t!==null&&t.memoizedState!==null||at,a=bn;var r=at;bn=l,(at=t)&&!r?Yn(e,n,(n.subtreeFlags&8772)!==0):jn(e,n),bn=a,at=r}break;case 30:break;default:jn(e,n)}}function Gs(e){var t=e.alternate;t!==null&&(e.alternate=null,Gs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Mt=!1;function _n(e,t,n){for(n=n.child;n!==null;)Us(e,t,n),n=n.sibling}function Us(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Jt,n)}catch{}switch(n.tag){case 26:at||ln(n,t),_n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:at||ln(n,t);var l=We,a=Mt;Zn(n.type)&&(We=n.stateNode,Mt=!1),_n(e,t,n),Qa(n.stateNode),We=l,Mt=a;break;case 5:at||ln(n,t);case 6:if(l=We,a=Mt,We=null,_n(e,t,n),We=l,Mt=a,We!==null)if(Mt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(r){Le(n,t,r)}else try{We.removeChild(n.stateNode)}catch(r){Le(n,t,r)}break;case 18:We!==null&&(Mt?(e=We,Df(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),tr(e)):Df(We,n.stateNode));break;case 4:l=We,a=Mt,We=n.stateNode.containerInfo,Mt=!0,_n(e,t,n),We=l,Mt=a;break;case 0:case 11:case 14:case 15:at||Un(2,n,t),at||Un(4,n,t),_n(e,t,n);break;case 1:at||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ms(n,t,l)),_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:at=(l=at)||n.memoizedState!==null,_n(e,t,n),at=l;break;default:_n(e,t,n)}}function js(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tr(e)}catch(n){Le(t,t.return,n)}}function u3(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hs),t;default:throw Error(i(435,e.tag))}}function e0(e,t){var n=u3(e);t.forEach(function(l){var a=p3.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],r=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:if(Zn(m.type)){We=m.stateNode,Mt=!1;break e}break;case 5:We=m.stateNode,Mt=!1;break e;case 3:case 4:We=m.stateNode.containerInfo,Mt=!0;break e}m=m.return}if(We===null)throw Error(i(160));Us(r,s,a),We=null,Mt=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ys(t,e),t=t.sibling}var Ft=null;function Ys(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Ut(e),l&4&&(Un(3,e,e.return),Ua(3,e),Un(5,e,e.return));break;case 1:Gt(t,e),Ut(e),l&512&&(at||n===null||ln(n,n.return)),l&64&&bn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Ft;if(Gt(t,e),Ut(e),l&512&&(at||n===null||ln(n,n.return)),l&4){var r=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ca]||r[_t]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),xt(r,l,n),r[_t]=e,ft(r),l=r;break e;case"link":var s=Hf("link","href",a).get(l+(n.href||""));if(s){for(var m=0;m<s.length;m++)if(r=s[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(m,1);break t}}r=a.createElement(l),xt(r,l,n),a.head.appendChild(r);break;case"meta":if(s=Hf("meta","content",a).get(l+(n.content||""))){for(m=0;m<s.length;m++)if(r=s[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(m,1);break t}}r=a.createElement(l),xt(r,l,n),a.head.appendChild(r);break;default:throw Error(i(468,l))}r[_t]=e,ft(r),l=r}e.stateNode=l}else Bf(a,e.type,e.stateNode);else e.stateNode=Vf(a,l,e.memoizedProps);else r!==l?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,l===null?Bf(a,e.type,e.stateNode):Vf(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ji(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Ut(e),l&512&&(at||n===null||ln(n,n.return)),n!==null&&l&4&&Ji(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Ut(e),l&512&&(at||n===null||ln(n,n.return)),e.flags&32){a=e.stateNode;try{Dl(a,"")}catch(H){Le(e,e.return,H)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Ji(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ii=!0);break;case 6:if(Gt(t,e),Ut(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(H){Le(e,e.return,H)}}break;case 3:if(hu=null,a=Ft,Ft=fu(t.containerInfo),Gt(t,e),Ft=a,Ut(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(H){Le(e,e.return,H)}Ii&&(Ii=!1,Xs(e));break;case 4:l=Ft,Ft=fu(e.stateNode.containerInfo),Gt(t,e),Ut(e),Ft=l;break;case 12:Gt(t,e),Ut(e);break;case 13:Gt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(u0=ge()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,e0(e,l)));break;case 22:a=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,w=bn,q=at;if(bn=w||a,at=q||S,Gt(t,e),at=q,bn=w,Ut(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||S||bn||at||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(r=S.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=S.stateNode;var P=S.memoizedProps.style,A=P!=null&&P.hasOwnProperty("display")?P.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(H){Le(S,S.return,H)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=a?"":S.memoizedProps}catch(H){Le(S,S.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,e0(e,n))));break;case 19:Gt(t,e),Ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,e0(e,l)));break;case 30:break;case 21:break;default:Gt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Es(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,r=$i(e);Fr(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(Dl(s,""),n.flags&=-33);var m=$i(e);Fr(e,m,s);break;case 3:case 4:var S=n.stateNode.containerInfo,w=$i(e);Fi(e,w,S);break;default:throw Error(i(161))}}catch(q){Le(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bs(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Un(4,t,t.return),pl(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ms(t,t.return,n),pl(t);break;case 27:Qa(t.stateNode);case 26:case 5:ln(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function Yn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Yn(a,r,n),Ua(4,r);break;case 1:if(Yn(a,r,n),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(w){Le(l,l.return,w)}if(l=r,a=l.updateQueue,a!==null){var m=l.stateNode;try{var S=a.shared.hiddenCallbacks;if(S!==null)for(a.shared.hiddenCallbacks=null,a=0;a<S.length;a++)po(S[a],m)}catch(w){Le(l,l.return,w)}}n&&s&64&&ws(r),ja(r,r.return);break;case 27:Vs(r);case 26:case 5:Yn(a,r,n),n&&l===null&&s&4&&As(r),ja(r,r.return);break;case 12:Yn(a,r,n);break;case 13:Yn(a,r,n),n&&s&4&&js(a,r);break;case 22:r.memoizedState===null&&Yn(a,r,n),ja(r,r.return);break;case 30:break;default:Yn(a,r,n)}t=t.sibling}}function t0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function n0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function an(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ks(e,t,n,l),t=t.sibling}function ks(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,l),a&2048&&Ua(9,t);break;case 1:an(e,t,n,l);break;case 3:an(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e)));break;case 12:if(a&2048){an(e,t,n,l),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,m=r.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Le(t,t.return,S)}}else an(e,t,n,l);break;case 13:an(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?an(e,t,n,l):Ya(e,t):r._visibility&2?an(e,t,n,l):(r._visibility|=2,Zl(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&t0(s,t);break;case 24:an(e,t,n,l),a&2048&&n0(t.alternate,t);break;default:an(e,t,n,l)}}function Zl(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,m=n,S=l,w=s.flags;switch(s.tag){case 0:case 11:case 15:Zl(r,s,m,S,a),Ua(8,s);break;case 23:break;case 22:var q=s.stateNode;s.memoizedState!==null?q._visibility&2?Zl(r,s,m,S,a):Ya(r,s):(q._visibility|=2,Zl(r,s,m,S,a)),a&&w&2048&&t0(s.alternate,s);break;case 24:Zl(r,s,m,S,a),a&&w&2048&&n0(s.alternate,s);break;default:Zl(r,s,m,S,a)}t=t.sibling}}function Ya(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Ya(n,l),a&2048&&t0(l.alternate,l);break;case 24:Ya(n,l),a&2048&&n0(l.alternate,l);break;default:Ya(n,l)}t=t.sibling}}var Xa=8192;function Pl(e){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)Ns(e),e=e.sibling}function Ns(e){switch(e.tag){case 26:Pl(e),e.flags&Xa&&e.memoizedState!==null&&Z3(Ft,e.memoizedState,e.memoizedProps);break;case 5:Pl(e);break;case 3:case 4:var t=Ft;Ft=fu(e.stateNode.containerInfo),Pl(e),Ft=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xa,Xa=16777216,Pl(e),Xa=t):Pl(e));break;default:Pl(e)}}function qs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ka(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ht=l,Zs(l,e)}qs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ls(e),e=e.sibling}function Ls(e){switch(e.tag){case 0:case 11:case 15:ka(e),e.flags&2048&&Un(9,e,e.return);break;case 3:ka(e);break;case 12:ka(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ir(e)):ka(e);break;default:ka(e)}}function Ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ht=l,Zs(l,e)}qs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Un(8,t,t.return),Ir(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ir(t));break;default:Ir(t)}e=e.sibling}}function Zs(e,t){for(;ht!==null;){var n=ht;switch(n.tag){case 0:case 11:case 15:Un(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ht=l;else e:for(n=e;ht!==null;){l=ht;var a=l.sibling,r=l.return;if(Gs(l),l===n){ht=null;break e}if(a!==null){a.return=r,ht=a;break e}ht=r}}}var i3={getCacheForType:function(e){var t=St(ot),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},c3=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Pe=null,Te=null,we=0,Ue=0,jt=null,Xn=!1,Ql=!1,l0=!1,Sn=0,tt=0,kn=0,gl=0,a0=0,Kt=0,Kl=0,Na=null,At=null,r0=!1,u0=0,eu=1/0,tu=null,Nn=null,vt=0,qn=null,Wl=null,Jl=0,i0=0,c0=null,Ps=null,qa=0,o0=null;function Yt(){if((Ge&2)!==0&&we!==0)return we&-we;if(B.T!==null){var e=Ul;return e!==0?e:g0()}return dr()}function Qs(){Kt===0&&(Kt=(we&536870912)===0||Ee?Xe():536870912);var e=Qt.current;return e!==null&&(e.flags|=32),Kt}function Xt(e,t,n){(e===Pe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&($l(e,0),Ln(e,we,Kt,!1)),el(e,n),((Ge&2)===0||e!==Pe)&&(e===Pe&&((Ge&2)===0&&(gl|=n),tt===4&&Ln(e,we,Kt,!1)),rn(e))}function Ks(e,t,n){if((Ge&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ae(e,t),a=l?f3(e,t):d0(e,t,!0),r=l;do{if(a===0){Ql&&!l&&Ln(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!o3(n)){a=d0(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;a=Na;var S=m.current.memoizedState.isDehydrated;if(S&&($l(m,s).flags|=256),s=d0(m,s,!1),s!==2){if(l0&&!S){m.errorRecoveryDisabledLanes|=r,gl|=r,a=4;break e}r=At,At=a,r!==null&&(At===null?At=r:At.push.apply(At,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){$l(e,0),Ln(e,t,0,!0);break}e:{switch(l=e,r=a,r){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Ln(l,t,Kt,!Xn);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=u0+300-ge(),10<a)){if(Ln(l,t,Kt,!Xn),Oe(l,0,!0)!==0)break e;l.timeoutHandle=Tf(Ws.bind(null,l,n,At,tu,r0,t,Kt,gl,Kl,Xn,r,2,-0,0),a);break e}Ws(l,n,At,tu,r0,t,Kt,gl,Kl,Xn,r,0,-0,0)}}break}while(!0);rn(e)}function Ws(e,t,n,l,a,r,s,m,S,w,q,P,A,H){if(e.timeoutHandle=-1,P=t.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(Ja={stylesheets:null,count:0,unsuspend:L3},Ns(t),P=P3(),P!==null)){e.cancelPendingCommit=P(nf.bind(null,e,t,r,n,l,a,s,m,S,q,1,A,H)),Ln(e,r,s,!w);return}nf(e,t,r,n,l,a,s,m,S)}function o3(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],r=a.getSnapshot;a=a.value;try{if(!Ht(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t,n,l){t&=~a0,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var r=31-Be(a),s=1<<r;l[r]=-1,a&=~s}n!==0&&sr(e,n,t)}function nu(){return(Ge&6)===0?(La(0),!1):!0}function s0(){if(Te!==null){if(Ue===0)var e=Te.return;else e=Te,mn=sl=null,zi(e),ql=null,Ha=0,e=Te;for(;e!==null;)Os(e.alternate,e),e=e.return;Te=null}}function $l(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,z3(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),s0(),Pe=e,Te=n=fn(e.current,null),we=t,Ue=0,jt=null,Xn=!1,Ql=Ae(e,t),l0=!1,Kl=Kt=a0=gl=kn=tt=0,At=Na=null,r0=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-Be(l),r=1<<a;t|=e[a],l&=~r}return Sn=t,Tr(),n}function Js(e,t){Se=null,B.H=qr,t===Ra||t===Vr?(t=ho(),Ue=3):t===oo?(t=ho(),Ue=4):Ue=t===ms?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,Te===null&&(tt=1,Kr(e,qt(t,e.current)))}function $s(){var e=B.H;return B.H=qr,e===null?qr:e}function Fs(){var e=B.A;return B.A=i3,e}function f0(){tt=4,Xn||(we&4194048)!==we&&Qt.current!==null||(Ql=!0),(kn&134217727)===0&&(gl&134217727)===0||Pe===null||Ln(Pe,we,Kt,!1)}function d0(e,t,n){var l=Ge;Ge|=2;var a=$s(),r=Fs();(Pe!==e||we!==t)&&(tu=null,$l(e,t)),t=!1;var s=tt;e:do try{if(Ue!==0&&Te!==null){var m=Te,S=jt;switch(Ue){case 8:s0(),s=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(t=!0);var w=Ue;if(Ue=0,jt=null,Fl(e,m,S,w),n&&Ql){s=0;break e}break;default:w=Ue,Ue=0,jt=null,Fl(e,m,S,w)}}s3(),s=tt;break}catch(q){Js(e,q)}while(!0);return t&&e.shellSuspendCounter++,mn=sl=null,Ge=l,B.H=a,B.A=r,Te===null&&(Pe=null,we=0,Tr()),s}function s3(){for(;Te!==null;)Is(Te)}function f3(e,t){var n=Ge;Ge|=2;var l=$s(),a=Fs();Pe!==e||we!==t?(tu=null,eu=ge()+500,$l(e,t)):Ql=Ae(e,t);e:do try{if(Ue!==0&&Te!==null){t=Te;var r=jt;t:switch(Ue){case 1:Ue=0,jt=null,Fl(e,t,r,1);break;case 2:case 9:if(so(r)){Ue=0,jt=null,ef(t);break}t=function(){Ue!==2&&Ue!==9||Pe!==e||(Ue=7),rn(e)},r.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:so(r)?(Ue=0,jt=null,ef(t)):(Ue=0,jt=null,Fl(e,t,r,7));break;case 5:var s=null;switch(Te.tag){case 26:s=Te.memoizedState;case 5:case 27:var m=Te;if(!s||Gf(s)){Ue=0,jt=null;var S=m.sibling;if(S!==null)Te=S;else{var w=m.return;w!==null?(Te=w,lu(w)):Te=null}break t}}Ue=0,jt=null,Fl(e,t,r,5);break;case 6:Ue=0,jt=null,Fl(e,t,r,6);break;case 8:s0(),tt=6;break e;default:throw Error(i(462))}}d3();break}catch(q){Js(e,q)}while(!0);return mn=sl=null,B.H=l,B.A=a,Ge=n,Te!==null?0:(Pe=null,we=0,Tr(),tt)}function d3(){for(;Te!==null&&!ne();)Is(Te)}function Is(e){var t=Ds(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?lu(e):Te=t}function ef(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bs(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=bs(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:zi(t);default:Os(n,t),t=Te=eo(t,Sn),t=Ds(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?lu(e):Te=t}function Fl(e,t,n,l){mn=sl=null,zi(t),ql=null,Ha=0;var a=t.return;try{if(t3(e,a,t,n,we)){tt=1,Kr(e,qt(n,e.current)),Te=null;return}}catch(r){if(a!==null)throw Te=a,r;tt=1,Kr(e,qt(n,e.current)),Te=null;return}t.flags&32768?(Ee||l===1?e=!0:Ql||(we&536870912)!==0?e=!1:(Xn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Qt.current,l!==null&&l.tag===13&&(l.flags|=16384))),tf(t,e)):lu(t)}function lu(e){var t=e;do{if((t.flags&32768)!==0){tf(t,Xn);return}e=t.return;var n=l3(t.alternate,t,Sn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);tt===0&&(tt=5)}function tf(e,t){do{var n=a3(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);tt=6,Te=null}function nf(e,t,n,l,a,r,s,m,S){e.cancelPendingCommit=null;do au();while(vt!==0);if((Ge&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(r=t.lanes|t.childLanes,r|=ni,Mu(e,n,r,s,m,S),e===Pe&&(Te=Pe=null,we=0),Wl=t,qn=e,Jl=n,i0=r,c0=a,Ps=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g3(rt,function(){return cf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,a=J.p,J.p=2,s=Ge,Ge|=4;try{r3(e,t,n)}finally{Ge=s,J.p=a,B.T=l}}vt=1,lf(),af(),rf()}}function lf(){if(vt===1){vt=0;var e=qn,t=Wl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var l=J.p;J.p=2;var a=Ge;Ge|=4;try{Ys(t,e);var r=T0,s=Lc(e.containerInfo),m=r.focusedElem,S=r.selectionRange;if(s!==m&&m&&m.ownerDocument&&qc(m.ownerDocument.documentElement,m)){if(S!==null&&$u(m)){var w=S.start,q=S.end;if(q===void 0&&(q=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(q,m.value.length);else{var P=m.ownerDocument||document,A=P&&P.defaultView||window;if(A.getSelection){var H=A.getSelection(),fe=m.textContent.length,oe=Math.min(S.start,fe),qe=S.end===void 0?oe:Math.min(S.end,fe);!H.extend&&oe>qe&&(s=qe,qe=oe,oe=s);var z=Nc(m,oe),R=Nc(m,qe);if(z&&R&&(H.rangeCount!==1||H.anchorNode!==z.node||H.anchorOffset!==z.offset||H.focusNode!==R.node||H.focusOffset!==R.offset)){var O=P.createRange();O.setStart(z.node,z.offset),H.removeAllRanges(),oe>qe?(H.addRange(O),H.extend(R.node,R.offset)):(O.setEnd(R.node,R.offset),H.addRange(O))}}}}for(P=[],H=m;H=H.parentNode;)H.nodeType===1&&P.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<P.length;m++){var Z=P[m];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}gu=!!C0,T0=C0=null}finally{Ge=a,J.p=l,B.T=n}}e.current=t,vt=2}}function af(){if(vt===2){vt=0;var e=qn,t=Wl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var l=J.p;J.p=2;var a=Ge;Ge|=4;try{Bs(e,t.alternate,t)}finally{Ge=a,J.p=l,B.T=n}}vt=3}}function rf(){if(vt===4||vt===3){vt=0,me();var e=qn,t=Wl,n=Jl,l=Ps;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,Wl=qn=null,uf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Nn=null),ia(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=B.T,a=J.p,J.p=2,B.T=null;try{for(var r=e.onRecoverableError,s=0;s<l.length;s++){var m=l[s];r(m.value,{componentStack:m.stack})}}finally{B.T=t,J.p=a}}(Jl&3)!==0&&au(),rn(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===o0?qa++:(qa=0,o0=e):qa=0,La(0)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function au(e){return lf(),af(),rf(),cf()}function cf(){if(vt!==5)return!1;var e=qn,t=i0;i0=0;var n=ia(Jl),l=B.T,a=J.p;try{J.p=32>n?32:n,B.T=null,n=c0,c0=null;var r=qn,s=Jl;if(vt=0,Wl=qn=null,Jl=0,(Ge&6)!==0)throw Error(i(331));var m=Ge;if(Ge|=4,Ls(r.current),ks(r,r.current,s,n),Ge=m,La(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Jt,r)}catch{}return!0}finally{J.p=a,B.T=l,uf(e,t)}}function of(e,t,n){t=qt(n,t),t=ki(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(el(e,2),rn(e))}function Le(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nn===null||!Nn.has(l))){e=qt(n,e),n=ds(2),l=Vn(t,n,2),l!==null&&(hs(n,l,t,e),el(l,2),rn(l));break}}t=t.return}}function h0(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new c3;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(l0=!0,a.add(n),e=h3.bind(null,e,t,n),t.then(e,e))}function h3(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(we&n)===n&&(tt===4||tt===3&&(we&62914560)===we&&300>ge()-u0?(Ge&2)===0&&$l(e,0):a0|=n,Kl===we&&(Kl=0)),rn(e)}function sf(e,t){t===0&&(t=I()),e=Vl(e,t),e!==null&&(el(e,t),rn(e))}function m3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sf(e,n)}function p3(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),sf(e,n)}function g3(e,t){return Dn(e,t)}var ru=null,Il=null,m0=!1,uu=!1,p0=!1,yl=0;function rn(e){e!==Il&&e.next===null&&(Il===null?ru=Il=e:Il=Il.next=e),uu=!0,m0||(m0=!0,v3())}function La(e,t){if(!p0&&uu){p0=!0;do for(var n=!1,l=ru;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var s=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-Be(42|e)+1)-1,r&=a&~(s&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,mf(l,r))}else r=we,r=Oe(l,l===Pe?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Ae(l,r)||(n=!0,mf(l,r));l=l.next}while(n);p0=!1}}function y3(){ff()}function ff(){uu=m0=!1;var e=0;yl!==0&&(D3()&&(e=yl),yl=0);for(var t=ge(),n=null,l=ru;l!==null;){var a=l.next,r=df(l,t);r===0?(l.next=null,n===null?ru=a:n.next=a,a===null&&(Il=n)):(n=l,(e!==0||(r&3)!==0)&&(uu=!0)),l=a}La(e)}function df(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Be(r),m=1<<s,S=a[s];S===-1?((m&n)===0||(m&l)!==0)&&(a[s]=ct(m,t)):S<=t&&(e.expiredLanes|=m),r&=~m}if(t=Pe,n=we,n=Oe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&un(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ae(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&un(l),ia(n)){case 2:case 8:n=$e;break;case 32:n=rt;break;case 268435456:n=be;break;default:n=rt}return l=hf.bind(null,e),n=Dn(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&un(l),e.callbackPriority=2,e.callbackNode=null,2}function hf(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(au()&&e.callbackNode!==n)return null;var l=we;return l=Oe(e,e===Pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ks(e,l,t),df(e,ge()),e.callbackNode!=null&&e.callbackNode===n?hf.bind(null,e):null)}function mf(e,t){if(au())return null;Ks(e,t,!0)}function v3(){O3(function(){(Ge&6)!==0?Dn(Ye,y3):ff()})}function g0(){return yl===0&&(yl=Xe()),yl}function pf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yr(""+e)}function gf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function x3(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var r=pf((a[zt]||null).action),s=l.submitter;s&&(t=(t=s[zt]||null)?pf(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var m=new _r("action","action",null,l,a);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(yl!==0){var S=s?gf(a,s):new FormData(a);Gi(n,{pending:!0,data:S,method:a.method,action:r},null,S)}}else typeof r=="function"&&(m.preventDefault(),S=s?gf(a,s):new FormData(a),Gi(n,{pending:!0,data:S,method:a.method,action:r},r,S))},currentTarget:a}]})}}for(var y0=0;y0<ti.length;y0++){var v0=ti[y0],b3=v0.toLowerCase(),_3=v0[0].toUpperCase()+v0.slice(1);$t(b3,"on"+_3)}$t(Qc,"onAnimationEnd"),$t(Kc,"onAnimationIteration"),$t(Wc,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(j1,"onTransitionRun"),$t(Y1,"onTransitionStart"),$t(X1,"onTransitionCancel"),$t(Jc,"onTransitionEnd"),Cl("onMouseEnter",["mouseout","mouseover"]),Cl("onMouseLeave",["mouseout","mouseover"]),Cl("onPointerEnter",["pointerout","pointerover"]),Cl("onPointerLeave",["pointerout","pointerover"]),tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za));function yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var s=l.length-1;0<=s;s--){var m=l[s],S=m.instance,w=m.currentTarget;if(m=m.listener,S!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=w;try{r(a)}catch(q){Qr(q)}a.currentTarget=null,r=S}else for(s=0;s<l.length;s++){if(m=l[s],S=m.instance,w=m.currentTarget,m=m.listener,S!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=w;try{r(a)}catch(q){Qr(q)}a.currentTarget=null,r=S}}}}function Re(e,t){var n=t[Au];n===void 0&&(n=t[Au]=new Set);var l=e+"__bubble";n.has(l)||(vf(t,e,2,!1),n.add(l))}function x0(e,t,n){var l=0;t&&(l|=4),vf(n,e,l,t)}var iu="_reactListening"+Math.random().toString(36).slice(2);function b0(e){if(!e[iu]){e[iu]=!0,oc.forEach(function(n){n!=="selectionchange"&&(S3.has(n)||x0(n,!1,e),x0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[iu]||(t[iu]=!0,x0("selectionchange",!1,t))}}function vf(e,t,n,l){switch(Nf(t)){case 2:var a=W3;break;case 8:a=J3;break;default:a=H0}n=a.bind(null,t,n,e),a=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _0(e,t,n,l,a){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var m=l.stateNode.containerInfo;if(m===a)break;if(s===4)for(s=l.return;s!==null;){var S=s.tag;if((S===3||S===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;m!==null;){if(s=bl(m),s===null)return;if(S=s.tag,S===5||S===6||S===26||S===27){l=r=s;continue e}m=m.parentNode}}l=l.return}Cc(function(){var w=r,q=Xu(n),P=[];e:{var A=$c.get(e);if(A!==void 0){var H=_r,fe=e;switch(e){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":H=g1;break;case"focusin":fe="focus",H=Pu;break;case"focusout":fe="blur",H=Pu;break;case"beforeblur":case"afterblur":H=Pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=x1;break;case Qc:case Kc:case Wc:H=i1;break;case Jc:H=_1;break;case"scroll":case"scrollend":H=n1;break;case"wheel":H=C1;break;case"copy":case"cut":case"paste":H=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Oc;break;case"toggle":case"beforetoggle":H=R1}var oe=(t&4)!==0,qe=!oe&&(e==="scroll"||e==="scrollend"),z=oe?A!==null?A+"Capture":null:A;oe=[];for(var R=w,O;R!==null;){var Z=R;if(O=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||O===null||z===null||(Z=sa(R,z),Z!=null&&oe.push(Pa(R,Z,O))),qe)break;R=R.return}0<oe.length&&(A=new H(A,fe,null,n,q),P.push({event:A,listeners:oe}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",A&&n!==Yu&&(fe=n.relatedTarget||n.fromElement)&&(bl(fe)||fe[xl]))break e;if((H||A)&&(A=q.window===q?q:(A=q.ownerDocument)?A.defaultView||A.parentWindow:window,H?(fe=n.relatedTarget||n.toElement,H=w,fe=fe?bl(fe):null,fe!==null&&(qe=o(fe),oe=fe.tag,fe!==qe||oe!==5&&oe!==27&&oe!==6)&&(fe=null)):(H=null,fe=w),H!==fe)){if(oe=Dc,Z="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Oc,Z="onPointerLeave",z="onPointerEnter",R="pointer"),qe=H==null?A:oa(H),O=fe==null?A:oa(fe),A=new oe(Z,R+"leave",H,n,q),A.target=qe,A.relatedTarget=O,Z=null,bl(q)===w&&(oe=new oe(z,R+"enter",fe,n,q),oe.target=O,oe.relatedTarget=qe,Z=oe),qe=Z,H&&fe)t:{for(oe=H,z=fe,R=0,O=oe;O;O=ea(O))R++;for(O=0,Z=z;Z;Z=ea(Z))O++;for(;0<R-O;)oe=ea(oe),R--;for(;0<O-R;)z=ea(z),O--;for(;R--;){if(oe===z||z!==null&&oe===z.alternate)break t;oe=ea(oe),z=ea(z)}oe=null}else oe=null;H!==null&&xf(P,A,H,oe,!1),fe!==null&&qe!==null&&xf(P,qe,fe,oe,!0)}}e:{if(A=w?oa(w):window,H=A.nodeName&&A.nodeName.toLowerCase(),H==="select"||H==="input"&&A.type==="file")var le=Gc;else if(Hc(A))if(Uc)le=B1;else{le=V1;var Ce=E1}else H=A.nodeName,!H||H.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?w&&ju(w.elementType)&&(le=Gc):le=H1;if(le&&(le=le(e,w))){Bc(P,le,n,q);break e}Ce&&Ce(e,A,w),e==="focusout"&&w&&A.type==="number"&&w.memoizedProps.value!=null&&Uu(A,"number",A.value)}switch(Ce=w?oa(w):window,e){case"focusin":(Hc(Ce)||Ce.contentEditable==="true")&&(Ml=Ce,Fu=w,va=null);break;case"focusout":va=Fu=Ml=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Zc(P,n,q);break;case"selectionchange":if(U1)break;case"keydown":case"keyup":Zc(P,n,q)}var ie;if(Ku)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else wl?Ec(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(wc&&n.locale!=="ko"&&(wl||se!=="onCompositionStart"?se==="onCompositionEnd"&&wl&&(ie=Tc()):(wn=q,qu="value"in wn?wn.value:wn.textContent,wl=!0)),Ce=cu(w,se),0<Ce.length&&(se=new zc(se,e,null,n,q),P.push({event:se,listeners:Ce}),ie?se.data=ie:(ie=Vc(n),ie!==null&&(se.data=ie)))),(ie=z1?O1(e,n):w1(e,n))&&(se=cu(w,"onBeforeInput"),0<se.length&&(Ce=new zc("onBeforeInput","beforeinput",null,n,q),P.push({event:Ce,listeners:se}),Ce.data=ie)),x3(P,e,w,n,q)}yf(P,t)})}function Pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cu(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=sa(e,n),a!=null&&l.unshift(Pa(e,a,r)),a=sa(e,t),a!=null&&l.push(Pa(e,a,r))),e.tag===3)return l;e=e.return}return[]}function ea(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xf(e,t,n,l,a){for(var r=t._reactName,s=[];n!==null&&n!==l;){var m=n,S=m.alternate,w=m.stateNode;if(m=m.tag,S!==null&&S===l)break;m!==5&&m!==26&&m!==27||w===null||(S=w,a?(w=sa(n,r),w!=null&&s.unshift(Pa(n,w,S))):a||(w=sa(n,r),w!=null&&s.push(Pa(n,w,S)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var C3=/\r\n?/g,T3=/\u0000|\uFFFD/g;function bf(e){return(typeof e=="string"?e:""+e).replace(C3,`
`).replace(T3,"")}function _f(e,t){return t=bf(t),bf(e)===t}function ou(){}function Ne(e,t,n,l,a,r){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Dl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Dl(e,""+l);break;case"className":mr(e,"class",l);break;case"tabIndex":mr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(e,n,l);break;case"style":_c(e,l,r);break;case"data":if(t!=="object"){mr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=yr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",a.name,a,null),Ne(e,t,"formEncType",a.formEncType,a,null),Ne(e,t,"formMethod",a.formMethod,a,null),Ne(e,t,"formTarget",a.formTarget,a,null)):(Ne(e,t,"encType",a.encType,a,null),Ne(e,t,"method",a.method,a,null),Ne(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=yr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=ou);break;case"onScroll":l!=null&&Re("scroll",e);break;case"onScrollEnd":l!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=yr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Re("beforetoggle",e),Re("toggle",e),hr(e,"popover",l);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=e1.get(n)||n,hr(e,n,l))}}function S0(e,t,n,l,a,r){switch(n){case"style":_c(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Dl(e,l):(typeof l=="number"||typeof l=="bigint")&&Dl(e,""+l);break;case"onScroll":l!=null&&Re("scroll",e);break;case"onScrollEnd":l!=null&&Re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ou);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[zt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):hr(e,n,l)}}}function xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var l=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ne(e,t,r,s,n,null)}}a&&Ne(e,t,"srcSet",n.srcSet,n,null),l&&Ne(e,t,"src",n.src,n,null);return;case"input":Re("invalid",e);var m=r=s=a=null,S=null,w=null;for(l in n)if(n.hasOwnProperty(l)){var q=n[l];if(q!=null)switch(l){case"name":a=q;break;case"type":s=q;break;case"checked":S=q;break;case"defaultChecked":w=q;break;case"value":r=q;break;case"defaultValue":m=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,t));break;default:Ne(e,t,l,q,n,null)}}yc(e,r,m,S,w,s,a,!1),pr(e);return;case"select":Re("invalid",e),l=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(m=n[a],m!=null))switch(a){case"value":r=m;break;case"defaultValue":s=m;break;case"multiple":l=m;default:Ne(e,t,a,m,n,null)}t=r,n=s,e.multiple=!!l,t!=null?Rl(e,!!l,t,!1):n!=null&&Rl(e,!!l,n,!0);return;case"textarea":Re("invalid",e),r=a=l=null;for(s in n)if(n.hasOwnProperty(s)&&(m=n[s],m!=null))switch(s){case"value":l=m;break;case"defaultValue":a=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:Ne(e,t,s,m,n,null)}xc(e,l,a,r),pr(e);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(l=n[S],l!=null))switch(S){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ne(e,t,S,l,n,null)}return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(l=0;l<Za.length;l++)Re(Za[l],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ne(e,t,w,l,n,null)}return;default:if(ju(t)){for(q in n)n.hasOwnProperty(q)&&(l=n[q],l!==void 0&&S0(e,t,q,l,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(l=n[m],l!=null&&Ne(e,t,m,l,n,null))}function R3(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,m=null,S=null,w=null,q=null;for(H in n){var P=n[H];if(n.hasOwnProperty(H)&&P!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":S=P;default:l.hasOwnProperty(H)||Ne(e,t,H,null,l,P)}}for(var A in l){var H=l[A];if(P=n[A],l.hasOwnProperty(A)&&(H!=null||P!=null))switch(A){case"type":r=H;break;case"name":a=H;break;case"checked":w=H;break;case"defaultChecked":q=H;break;case"value":s=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,t));break;default:H!==P&&Ne(e,t,A,H,l,P)}}Gu(e,s,m,S,w,q,r,a);return;case"select":H=s=m=A=null;for(r in n)if(S=n[r],n.hasOwnProperty(r)&&S!=null)switch(r){case"value":break;case"multiple":H=S;default:l.hasOwnProperty(r)||Ne(e,t,r,null,l,S)}for(a in l)if(r=l[a],S=n[a],l.hasOwnProperty(a)&&(r!=null||S!=null))switch(a){case"value":A=r;break;case"defaultValue":m=r;break;case"multiple":s=r;default:r!==S&&Ne(e,t,a,r,l,S)}t=m,n=s,l=H,A!=null?Rl(e,!!n,A,!1):!!l!=!!n&&(t!=null?Rl(e,!!n,t,!0):Rl(e,!!n,n?[]:"",!1));return;case"textarea":H=A=null;for(m in n)if(a=n[m],n.hasOwnProperty(m)&&a!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ne(e,t,m,null,l,a)}for(s in l)if(a=l[s],r=n[s],l.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":A=a;break;case"defaultValue":H=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==r&&Ne(e,t,s,a,l,r)}vc(e,A,H);return;case"option":for(var fe in n)if(A=n[fe],n.hasOwnProperty(fe)&&A!=null&&!l.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Ne(e,t,fe,null,l,A)}for(S in l)if(A=l[S],H=n[S],l.hasOwnProperty(S)&&A!==H&&(A!=null||H!=null))switch(S){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ne(e,t,S,A,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)A=n[oe],n.hasOwnProperty(oe)&&A!=null&&!l.hasOwnProperty(oe)&&Ne(e,t,oe,null,l,A);for(w in l)if(A=l[w],H=n[w],l.hasOwnProperty(w)&&A!==H&&(A!=null||H!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(137,t));break;default:Ne(e,t,w,A,l,H)}return;default:if(ju(t)){for(var qe in n)A=n[qe],n.hasOwnProperty(qe)&&A!==void 0&&!l.hasOwnProperty(qe)&&S0(e,t,qe,void 0,l,A);for(q in l)A=l[q],H=n[q],!l.hasOwnProperty(q)||A===H||A===void 0&&H===void 0||S0(e,t,q,A,l,H);return}}for(var z in n)A=n[z],n.hasOwnProperty(z)&&A!=null&&!l.hasOwnProperty(z)&&Ne(e,t,z,null,l,A);for(P in l)A=l[P],H=n[P],!l.hasOwnProperty(P)||A===H||A==null&&H==null||Ne(e,t,P,A,l,H)}var C0=null,T0=null;function su(e){return e.nodeType===9?e:e.ownerDocument}function Sf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function R0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var D0=null;function D3(){var e=window.event;return e&&e.type==="popstate"?e===D0?!1:(D0=e,!0):(D0=null,!1)}var Tf=typeof setTimeout=="function"?setTimeout:void 0,z3=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,O3=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(e){return Rf.resolve(null).then(e).catch(w3)}:Tf;function w3(e){setTimeout(function(){throw e})}function Zn(e){return e==="head"}function Df(e,t){var n=t,l=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<l&&8>l){n=l;var s=e.ownerDocument;if(n&1&&Qa(s.documentElement),n&2&&Qa(s.body),n&4)for(n=s.head,Qa(n),s=n.firstChild;s;){var m=s.nextSibling,S=s.nodeName;s[ca]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=m}}if(a===0){e.removeChild(r),tr(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=r}while(n);tr(t)}function z0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":z0(n),Eu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function M3(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ca])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function A3(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=It(e.nextSibling),e===null))return null;return e}function O0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function E3(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var w0=null;function zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Of(e,t,n){switch(t=su(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Qa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eu(e)}var Wt=new Map,wf=new Set;function fu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cn=J.d;J.d={f:V3,r:H3,D:B3,C:G3,L:U3,m:j3,X:X3,S:Y3,M:k3};function V3(){var e=Cn.f(),t=nu();return e||t}function H3(e){var t=_l(e);t!==null&&t.tag===5&&t.type==="form"?Ko(t):Cn.r(e)}var ta=typeof document>"u"?null:document;function Mf(e,t,n){var l=ta;if(l&&typeof t=="string"&&t){var a=Nt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),wf.has(a)||(wf.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),xt(t,"link",e),ft(t),l.head.appendChild(t)))}}function B3(e){Cn.D(e),Mf("dns-prefetch",e,null)}function G3(e,t){Cn.C(e,t),Mf("preconnect",e,t)}function U3(e,t,n){Cn.L(e,t,n);var l=ta;if(l&&e&&t){var a='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Nt(n.imageSizes)+'"]')):a+='[href="'+Nt(e)+'"]';var r=a;switch(t){case"style":r=na(e);break;case"script":r=la(e)}Wt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(r,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ka(r))||t==="script"&&l.querySelector(Wa(r))||(t=l.createElement("link"),xt(t,"link",e),ft(t),l.head.appendChild(t)))}}function j3(e,t){Cn.m(e,t);var n=ta;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=la(e)}if(!Wt.has(r)&&(e=v({rel:"modulepreload",href:e},t),Wt.set(r,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wa(r)))return}l=n.createElement("link"),xt(l,"link",e),ft(l),n.head.appendChild(l)}}}function Y3(e,t,n){Cn.S(e,t,n);var l=ta;if(l&&e){var a=Sl(l).hoistableStyles,r=na(e);t=t||"default";var s=a.get(r);if(!s){var m={loading:0,preload:null};if(s=l.querySelector(Ka(r)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(r))&&M0(e,n);var S=s=l.createElement("link");ft(S),xt(S,"link",e),S._p=new Promise(function(w,q){S.onload=w,S.onerror=q}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,du(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:m},a.set(r,s)}}}function X3(e,t){Cn.X(e,t);var n=ta;if(n&&e){var l=Sl(n).hoistableScripts,a=la(e),r=l.get(a);r||(r=n.querySelector(Wa(a)),r||(e=v({src:e,async:!0},t),(t=Wt.get(a))&&A0(e,t),r=n.createElement("script"),ft(r),xt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function k3(e,t){Cn.M(e,t);var n=ta;if(n&&e){var l=Sl(n).hoistableScripts,a=la(e),r=l.get(a);r||(r=n.querySelector(Wa(a)),r||(e=v({src:e,async:!0,type:"module"},t),(t=Wt.get(a))&&A0(e,t),r=n.createElement("script"),ft(r),xt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Af(e,t,n,l){var a=(a=ue.current)?fu(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=na(n.href),n=Sl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=na(n.href);var r=Sl(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Ka(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),r||N3(a,e,n,s.state))),t&&l===null)throw Error(i(528,""));return s}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=la(n),n=Sl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function na(e){return'href="'+Nt(e)+'"'}function Ka(e){return'link[rel="stylesheet"]['+e+"]"}function Ef(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function N3(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),xt(t,"link",n),ft(t),e.head.appendChild(t))}function la(e){return'[src="'+Nt(e)+'"]'}function Wa(e){return"script[async]"+e}function Vf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(n.href)+'"]');if(l)return t.instance=l,ft(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ft(l),xt(l,"style",a),du(l,n.precedence,e),t.instance=l;case"stylesheet":a=na(n.href);var r=e.querySelector(Ka(a));if(r)return t.state.loading|=4,t.instance=r,ft(r),r;l=Ef(n),(a=Wt.get(a))&&M0(l,a),r=(e.ownerDocument||e).createElement("link"),ft(r);var s=r;return s._p=new Promise(function(m,S){s.onload=m,s.onerror=S}),xt(r,"link",l),t.state.loading|=4,du(r,n.precedence,e),t.instance=r;case"script":return r=la(n.src),(a=e.querySelector(Wa(r)))?(t.instance=a,ft(a),a):(l=n,(a=Wt.get(r))&&(l=v({},n),A0(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ft(a),xt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,du(l,n.precedence,e));return t.instance}function du(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,s=0;s<l.length;s++){var m=l[s];if(m.dataset.precedence===t)r=m;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function M0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function A0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hu=null;function Hf(e,t,n){if(hu===null){var l=new Map,a=hu=new Map;a.set(n,l)}else a=hu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[ca]||r[_t]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var m=l.get(s);m?m.push(r):l.set(s,[r])}}return l}function Bf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function q3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ja=null;function L3(){}function Z3(e,t,n){if(Ja===null)throw Error(i(475));var l=Ja;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=na(n.href),r=e.querySelector(Ka(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=mu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,ft(r);return}r=e.ownerDocument||e,n=Ef(n),(a=Wt.get(a))&&M0(n,a),r=r.createElement("link"),ft(r);var s=r;s._p=new Promise(function(m,S){s.onload=m,s.onerror=S}),xt(r,"link",n),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=mu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function P3(){if(Ja===null)throw Error(i(475));var e=Ja;return e.stylesheets&&e.count===0&&E0(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&E0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function mu(){if(this.count--,this.count===0){if(this.stylesheets)E0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function E0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,t.forEach(Q3,e),pu=null,mu.call(e))}function Q3(e,t){if(!(t.state.loading&4)){var n=pu.get(e);if(n)var l=n.get(null);else{n=new Map,pu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),l=s)}l&&n.set(null,l)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||l,r===l&&n.set(null,a),n.set(s,a),this.count++,l=mu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var $a={$$typeof:X,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function K3(e,t,n,l,a,r,s,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Uf(e,t,n,l,a,r,s,m,S,w,q,P){return e=new K3(e,t,n,s,m,S,w,P),t=1,r===!0&&(t|=24),r=Bt(3,null,null,t),e.current=r,r.stateNode=e,t=hi(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:n,cache:t},yi(r),e}function jf(e){return e?(e=Hl,e):Hl}function Yf(e,t,n,l,a,r){a=jf(a),l.context===null?l.context=a:l.pendingContext=a,l=En(t),l.payload={element:n},r=r===void 0?null:r,r!==null&&(l.callback=r),n=Vn(e,l,t),n!==null&&(Xt(n,e,t),za(n,e,t))}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function V0(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function kf(e){if(e.tag===13){var t=Vl(e,67108864);t!==null&&Xt(t,e,67108864),V0(e,67108864)}}var gu=!0;function W3(e,t,n,l){var a=B.T;B.T=null;var r=J.p;try{J.p=2,H0(e,t,n,l)}finally{J.p=r,B.T=a}}function J3(e,t,n,l){var a=B.T;B.T=null;var r=J.p;try{J.p=8,H0(e,t,n,l)}finally{J.p=r,B.T=a}}function H0(e,t,n,l){if(gu){var a=B0(l);if(a===null)_0(e,t,l,yu,n),qf(e,l);else if(F3(a,e,t,n,l))l.stopPropagation();else if(qf(e,l),t&4&&-1<$3.indexOf(e)){for(;a!==null;){var r=_l(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=zn(r.pendingLanes);if(s!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var S=1<<31-Be(s);m.entanglements[1]|=S,s&=~S}rn(r),(Ge&6)===0&&(eu=ge()+500,La(0))}}break;case 13:m=Vl(r,2),m!==null&&Xt(m,r,2),nu(),V0(r,2)}if(r=B0(l),r===null&&_0(e,t,l,yu,n),r===a)break;a=r}a!==null&&l.stopPropagation()}else _0(e,t,l,null,n)}}function B0(e){return e=Xu(e),G0(e)}var yu=null;function G0(e){if(yu=null,e=bl(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yu=e,null}function Nf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case Ye:return 2;case $e:return 8;case rt:case pt:return 32;case be:return 268435456;default:return 32}default:return 32}}var U0=!1,Pn=null,Qn=null,Kn=null,Fa=new Map,Ia=new Map,Wn=[],$3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qf(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(t.pointerId)}}function er(e,t,n,l,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},t!==null&&(t=_l(t),t!==null&&kf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function F3(e,t,n,l,a){switch(t){case"focusin":return Pn=er(Pn,e,t,n,l,a),!0;case"dragenter":return Qn=er(Qn,e,t,n,l,a),!0;case"mouseover":return Kn=er(Kn,e,t,n,l,a),!0;case"pointerover":var r=a.pointerId;return Fa.set(r,er(Fa.get(r)||null,e,t,n,l,a)),!0;case"gotpointercapture":return r=a.pointerId,Ia.set(r,er(Ia.get(r)||null,e,t,n,l,a)),!0}return!1}function Lf(e){var t=bl(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Z2(e.priority,function(){if(n.tag===13){var l=Yt();l=ua(l);var a=Vl(n,l);a!==null&&Xt(a,n,l),V0(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=B0(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Yu=l,n.target.dispatchEvent(l),Yu=null}else return t=_l(n),t!==null&&kf(t),e.blockedOn=n,!1;t.shift()}return!0}function Zf(e,t,n){vu(e)&&n.delete(t)}function I3(){U0=!1,Pn!==null&&vu(Pn)&&(Pn=null),Qn!==null&&vu(Qn)&&(Qn=null),Kn!==null&&vu(Kn)&&(Kn=null),Fa.forEach(Zf),Ia.forEach(Zf)}function xu(e,t){e.blockedOn===t&&(e.blockedOn=null,U0||(U0=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,I3)))}var bu=null;function Pf(e){bu!==e&&(bu=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){bu===e&&(bu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(G0(l||n)===null)continue;break}var r=_l(n);r!==null&&(e.splice(t,3),t-=3,Gi(r,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function tr(e){function t(S){return xu(S,e)}Pn!==null&&xu(Pn,e),Qn!==null&&xu(Qn,e),Kn!==null&&xu(Kn,e),Fa.forEach(t),Ia.forEach(t);for(var n=0;n<Wn.length;n++){var l=Wn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&Wn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],r=n[l+1],s=a[zt]||null;if(typeof r=="function")s||Pf(n);else if(s){var m=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[zt]||null)m=s.formAction;else if(G0(a)!==null)continue}else m=s.action;typeof m=="function"?n[l+1]=m:(n.splice(l,3),l-=3),Pf(n)}}}function j0(e){this._internalRoot=e}_u.prototype.render=j0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=Yt();Yf(n,l,e,t,null,null)},_u.prototype.unmount=j0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yf(e.current,2,null,e,null,null),nu(),t[xl]=null}};function _u(e){this._internalRoot=e}_u.prototype.unstable_scheduleHydration=function(e){if(e){var t=dr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wn.length&&t!==0&&t<Wn[n].priority;n++);Wn.splice(n,0,e),n===0&&Lf(e)}};var Qf=u.version;if(Qf!=="19.1.1")throw Error(i(527,Qf,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var ed={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Jt=Su.inject(ed),Ke=Su}catch{}}return lr.createRoot=function(e,t){if(!d(e))throw Error(i(299));var n=!1,l="",a=cs,r=os,s=ss,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Uf(e,1,!1,null,null,n,l,a,r,s,m,null),e[xl]=t.current,b0(e),new j0(t)},lr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(i(299));var l=!1,a="",r=cs,s=os,m=ss,S=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=Uf(e,1,!0,t,n??null,l,a,r,s,m,S,w),t.context=jf(null),n=t.current,l=Yt(),l=ua(l),a=En(l),a.callback=null,Vn(n,a,l),n=l,t.current.lanes=n,el(t,n),rn(t),e[xl]=t.current,b0(e),new _u(t)},lr.version="19.1.1",lr}var l2;function sd(){if(l2)return k0.exports;l2=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(u){console.error(u)}}return c(),k0.exports=od(),k0.exports}var fd=sd();const dd=Ru(fd);async function hd(){if(window.__wgpuDevice)return window.__wgpuDevice;const c=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!c)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=c;const u=await c.requestDevice();return u.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=u,u.lost.then(()=>{window.__wgpuDevice===u&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),u}/**
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
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(u){u!==void 0&&(this._Seed=u)}SetSeed(u){this._Seed=u}SetFrequency(u){this._Frequency=u}SetNoiseType(u){this._NoiseType=u,this._UpdateTransformType3D()}SetRotationType3D(u){this._RotationType3D=u,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(u){this._FractalType=u}SetFractalOctaves(u){this._Octaves=u,this._CalculateFractalBounding()}SetFractalLacunarity(u){this._Lacunarity=u}SetFractalGain(u){this._Gain=u,this._CalculateFractalBounding()}SetFractalWeightedStrength(u){this._WeightedStrength=u}SetFractalPingPongStrength(u){this._PingPongStrength=u}SetCellularDistanceFunction(u){this._CellularDistanceFunction=u}SetCellularReturnType(u){this._CellularReturnType=u}SetCellularJitter(u){this._CellularJitterModifier=u}SetDomainWarpType(u){this._DomainWarpType=u,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(u){this._DomainWarpAmp=u}GetNoise(u,f,i){let d=(h,g)=>{switch(h*=this._Frequency,g*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const p=.5*(1.7320508075688772-1);let v=(h+g)*p;h+=v,g+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,h,g);case D.FractalType.FBm:return this._GenFractalFBmR2(h,g);case D.FractalType.Ridged:return this._GenFractalRidgedR2(h,g);case D.FractalType.PingPong:return this._GenFractalPingPongR2(h,g)}},o=(h,g,y)=>{switch(h*=this._Frequency,g*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let b=h+g,_=b*-.211324865405187;y*=.577350269189626,h+=_-y,g+=_-y,y+=b*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let b=h+y,_=b*-.211324865405187;g*=.577350269189626,h+=_-g,y+=_-g,g+=b*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const p=2/3;let v=(h+g+y)*p;h=v-h,g=v-g,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,h,g,y);case D.FractalType.FBm:return this._GenFractalFBmR3(h,g,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(h,g,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(h,g,y)}};if(arguments.length===2)return d(u,f);if(arguments.length===3)return o(u,f,i)}DomainWrap(u){switch(this._FractalType){default:this._DomainWarpSingle(u);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(u);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(u);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(u,f,i){return u+i*(f-u)}static _InterpHermite(u){return u*u*(3-2*u)}static _InterpQuintic(u){return u*u*u*(u*(u*6-15)+10)}static _CubicLerp(u,f,i,d,o){let h=d-i-(u-f);return o*o*o*h+o*o*(u-f-h)+o*(i-u)+f}static _PingPong(u){return u-=Math.trunc(u*.5)*2,u<1?u:2-u}_CalculateFractalBounding(){let u=Math.abs(this._Gain),f=u,i=1;for(let d=1;d<this._Octaves;d++)i+=f,f*=u;this._FractalBounding=1/i}_HashR2(u,f,i){let d=u^f^i;return d=Math.imul(d,668265261),d}_HashR3(u,f,i,d){let o=u^f^i^d;return o=Math.imul(o,668265261),o}_ValCoordR2(u,f,i){let d=this._HashR2(u,f,i);return d=Math.imul(d,d),d^=d<<19,d*(1/2147483648)}_ValCoordR3(u,f,i,d){let o=this._HashR3(u,f,i,d);return o=Math.imul(o,o),o^=o<<19,o*(1/2147483648)}_GradCoordR2(u,f,i,d,o){let h=this._HashR2(u,f,i);h^=h>>15,h&=254;let g=this._Gradients2D[h],y=this._Gradients2D[h|1];return d*g+o*y}_GradCoordR3(u,f,i,d,o,h,g){let y=this._HashR3(u,f,i,d);y^=y>>15,y&=252;let p=this._Gradients3D[y],v=this._Gradients3D[y|1],b=this._Gradients3D[y|2];return o*p+h*v+g*b}_GenNoiseSingleR2(u,f,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(u,f,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(u,f,i);case D.NoiseType.Cellular:return this._SingleCellularR2(u,f,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(u,f,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(u,f,i);case D.NoiseType.Value:return this._SingleValueR2(u,f,i);default:return 0}}_GenNoiseSingleR3(u,f,i,d){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(u,f,i,d);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(u,f,i,d);case D.NoiseType.Cellular:return this._SingleCellularR3(u,f,i,d);case D.NoiseType.Perlin:return this._SinglePerlinR3(u,f,i,d);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(u,f,i,d);case D.NoiseType.Value:return this._SingleValueR3(u,f,i,d);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(u,f){let i=this._Seed,d=0,o=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=this._GenNoiseSingleR2(i++,u,f);d+=g*o,o*=D._Lerp(1,Math.min(g+1,2)*.5,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,o*=this._Gain}return d}_GenFractalFBmR3(u,f,i){let d=this._Seed,o=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=this._GenNoiseSingleR3(d++,u,f,i);o+=y*h,h*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return o}_GenFractalRidgedR2(u,f){let i=this._Seed,d=0,o=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=Math.abs(this._GenNoiseSingleR2(i++,u,f));d+=(g*-2+1)*o,o*=D._Lerp(1,1-g,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,o*=this._Gain}return d}_GenFractalRidgedR3(u,f,i){let d=this._Seed,o=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=Math.abs(this._GenNoiseSingleR3(d++,u,f,i));o+=(y*-2+1)*h,h*=D._Lerp(1,1-y,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return o}_GenFractalPingPongR2(u,f){let i=this._Seed,d=0,o=this._FractalBounding;for(let h=0;h<this._Octaves;h++){let g=D._PingPong((this._GenNoiseSingleR2(i++,u,f)+1)*this._PingPongStrength);d+=(g-.5)*2*o,o*=D._Lerp(1,g,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,o*=this._Gain}return d}_GenFractalPingPongR3(u,f,i){let d=this._Seed,o=0,h=this._FractalBounding;for(let g=0;g<this._Octaves;g++){let y=D._PingPong((this._GenNoiseSingleR3(d++,u,f,i)+1)*this._PingPongStrength);o+=(y-.5)*2*h,h*=D._Lerp(1,y,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,i*=this._Lacunarity,h*=this._Gain}return o}_SingleOpenSimplex2R2(u,f,i){const o=(3-1.7320508075688772)/6;let h=Math.floor(f),g=Math.floor(i),y=f-h,p=i-g,v=(y+p)*o,b=y-v,_=p-v;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let T,E,k,U=.5-b*b-_*_;U<=0?T=0:T=U*U*(U*U)*this._GradCoordR2(u,h,g,b,_);let j=2*(1-2*o)*(1/o-2)*v+(-2*(1-2*o)*(1-2*o)+U);if(j<=0)k=0;else{let Y=b+(2*o-1),X=_+(2*o-1);k=j*j*(j*j)*this._GradCoordR2(u,h+this._PrimeX,g+this._PrimeY,Y,X)}if(_>b){let Y=b+o,X=_+(o-1),K=.5-Y*Y-X*X;K<=0?E=0:E=K*K*(K*K)*this._GradCoordR2(u,h,g+this._PrimeY,Y,X)}else{let Y=b+(o-1),X=_+o,K=.5-Y*Y-X*X;K<=0?E=0:E=K*K*(K*K)*this._GradCoordR2(u,h+this._PrimeX,g,Y,X)}return(T+E+k)*99.83685446303647}_SingleOpenSimplex2R3(u,f,i,d){let o=Math.round(f),h=Math.round(i),g=Math.round(d),y=f-o,p=i-h,v=d-g,b=Math.trunc(-1-p|1),_=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),E=_*-y,k=b*-p,U=T*-v;o=Math.imul(o,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let j=0,Y=.6-y*y-(p*p+v*v);for(let X=0;;X++){if(Y>0&&(j+=Y*Y*(Y*Y)*this._GradCoordR3(u,o,h,g,y,p,v)),E>=k&&E>=U){let K=Y+E+E;K>1&&(K-=1,j+=K*K*(K*K)*this._GradCoordR3(u,o-_*this._PrimeX,h,g,y+_,p,v))}else if(k>E&&k>=U){let K=Y+k+k;K>1&&(K-=1,j+=K*K*(K*K)*this._GradCoordR3(u,o,h-b*this._PrimeY,g,y,p+b,v))}else{let K=Y+U+U;K>1&&(K-=1,j+=K*K*(K*K)*this._GradCoordR3(u,o,h,g-T*this._PrimeZ,y,p,v+T))}if(X===1)break;E=.5-E,k=.5-k,U=.5-U,y=_*E,p=b*k,v=T*U,Y+=.75-E-(k+U),o+=_>>1&this._PrimeX,h+=b>>1&this._PrimeY,g+=T>>1&this._PrimeZ,_=-_,b=-b,T=-T,u=~u}return j*32.69428253173828}_SingleOpenSimplex2SR2(u,f,i){const o=(3-1.7320508075688772)/6;let h=Math.floor(f),g=Math.floor(i),y=f-h,p=i-g;h=Math.imul(h,this._PrimeX),g=Math.imul(g,this._PrimeY);let v=h+this._PrimeX,b=g+this._PrimeY,_=(y+p)*o,T=y-_,E=p-_,k=2/3-T*T-E*E,U=k*k*(k*k)*this._GradCoordR2(u,h,g,T,E),j=2*(1-2*o)*(1/o-2)*_+(-2*(1-2*o)*(1-2*o)+k),Y=T-(1-2*o),X=E-(1-2*o);U+=j*j*(j*j)*this._GradCoordR2(u,v,b,Y,X);let K=y-p;if(_>o){if(y+K>1){let G=T+(3*o-2),Q=E+(3*o-1),V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h+(this._PrimeX<<1),g+this._PrimeY,G,Q))}else{let G=T+o,Q=E+(o-1),V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h,g+this._PrimeY,G,Q))}if(p-K>1){let G=T+(3*o-1),Q=E+(3*o-2),V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h+this._PrimeX,g+(this._PrimeY<<1),G,Q))}else{let G=T+(o-1),Q=E+o,V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h+this._PrimeX,g,G,Q))}}else{if(y+K<0){let G=T+(1-o),Q=E-o,V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h-this._PrimeX,g,G,Q))}else{let G=T+(o-1),Q=E+o,V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h+this._PrimeX,g,G,Q))}if(p<K){let G=T-o,Q=E-(o-1),V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h,g-this._PrimeY,G,Q))}else{let G=T+o,Q=E+(o-1),V=2/3-G*G-Q*Q;V>0&&(U+=V*V*(V*V)*this._GradCoordR2(u,h,g+this._PrimeY,G,Q))}}return U*18.24196194486065}_SingleOpenSimplex2SR3(u,f,i,d){let o=Math.floor(f),h=Math.floor(i),g=Math.floor(d),y=f-o,p=i-h,v=d-g;o=Math.imul(o,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let b=u+1293373,_=Math.trunc(-.5-y),T=Math.trunc(-.5-p),E=Math.trunc(-.5-v),k=y+_,U=p+T,j=v+E,Y=.75-k*k-U*U-j*j,X=Y*Y*(Y*Y)*this._GradCoordR3(u,o+(_&this._PrimeX),h+(T&this._PrimeY),g+(E&this._PrimeZ),k,U,j),K=y-.5,G=p-.5,Q=v-.5,V=.75-K*K-G*G-Q*Q;X+=V*V*(V*V)*this._GradCoordR3(b,o+this._PrimeX,h+this._PrimeY,g+this._PrimeZ,K,G,Q);let ee=((_|1)<<1)*K,te=((T|1)<<1)*G,he=((E|1)<<1)*Q,_e=(-2-(_<<2))*K-1,ae=(-2-(T<<2))*G-1,ye=(-2-(E<<2))*Q-1,ze=!1,pe=ee+Y;if(pe>0){let x=k-(_|1);X+=pe*pe*(pe*pe)*this._GradCoordR3(u,o+(~_&this._PrimeX),h+(T&this._PrimeY),g+(E&this._PrimeZ),x,U,j)}else{let x=te+he+Y;if(x>0){let N=k,L=U-(T|1),F=j-(E|1);X+=x*x*(x*x)*this._GradCoordR3(u,o+(_&this._PrimeX),h+(~T&this._PrimeY),g+(~E&this._PrimeZ),N,L,F)}let M=_e+V;if(M>0){let N=(_|1)+K;X+=M*M*(M*M)*this._GradCoordR3(b,o+(_&this._PrimeX*2),h+this._PrimeY,g+this._PrimeZ,N,G,Q),ze=!0}}let B=!1,J=te+Y;if(J>0){let x=k,M=U-(T|1);X+=J*J*(J*J)*this._GradCoordR3(u,o+(_&this._PrimeX),h+(~T&this._PrimeY),g+(E&this._PrimeZ),x,M,j)}else{let x=ee+he+Y;if(x>0){let N=k-(_|1),L=U,F=j-(E|1);X+=x*x*(x*x)*this._GradCoordR3(u,o+(~_&this._PrimeX),h+(T&this._PrimeY),g+(~E&this._PrimeZ),N,L,F)}let M=ae+V;if(M>0){let N=K,L=(T|1)+G;X+=M*M*(M*M)*this._GradCoordR3(b,o+this._PrimeX,h+(T&this._PrimeY<<1),g+this._PrimeZ,N,L,Q),B=!0}}let $=!1,re=he+Y;if(re>0){let x=k,M=U,N=j-(E|1);X+=re*re*(re*re)*this._GradCoordR3(u,o+(_&this._PrimeX),h+(T&this._PrimeY),g+(~E&this._PrimeZ),x,M,N)}else{let x=ee+te+Y;if(x>0){let N=k-(_|1),L=U-(T|1);X+=x*x*(x*x)*this._GradCoordR3(u,o+(~_&this._PrimeX),h+(~T&this._PrimeY),g+(E&this._PrimeZ),N,L,j)}let M=ye+V;if(M>0){let N=K,L=G,F=(E|1)+Q;X+=M*M*(M*M)*this._GradCoordR3(b,o+this._PrimeX,h+this._PrimeY,g+(E&this._PrimeZ<<1),N,L,F),$=!0}}if(!ze){let x=ae+ye+V;if(x>0){let M=K,N=(T|1)+G,L=(E|1)+Q;X+=x*x*(x*x)*this._GradCoordR3(b,o+this._PrimeX,h+(T&this._PrimeY<<1),g+(E&this._PrimeZ<<1),M,N,L)}}if(!B){let x=_e+ye+V;if(x>0){let M=(_|1)+K,N=G,L=(E|1)+Q;X+=x*x*(x*x)*this._GradCoordR3(b,o+(_&this._PrimeX*2),h+this._PrimeY,g+(E&this._PrimeZ<<1),M,N,L)}}if(!$){let x=_e+ae+V;if(x>0){let M=(_|1)+K,N=(T|1)+G;X+=x*x*(x*x)*this._GradCoordR3(b,o+(_&this._PrimeX<<1),h+(T&this._PrimeY<<1),g+this._PrimeZ,M,N,Q)}}return X*9.046026385208288}_SingleCellularR2(u,f,i){let d=Math.round(f),o=Math.round(i),h=Number.MAX_VALUE,g=Number.MAX_VALUE,y=0,p=.43701595*this._CellularJitterModifier,v=(d-1)*this._PrimeX,b=(o-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let _=d-1;_<=d+1;_++){let T=b;for(let E=o-1;E<=o+1;E++){let k=this._HashR2(u,v,T),U=k&510,j=_-f+this._RandVecs2D[U]*p,Y=E-i+this._RandVecs2D[U|1]*p,X=j*j+Y*Y;g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let _=d-1;_<=d+1;_++){let T=b;for(let E=o-1;E<=o+1;E++){let k=this._HashR2(u,v,T),U=k&510,j=_-f+this._RandVecs2D[U]*p,Y=E-i+this._RandVecs2D[U|1]*p,X=Math.abs(j)+Math.abs(Y);g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let _=d-1;_<=d+1;_++){let T=b;for(let E=o-1;E<=o+1;E++){let k=this._HashR2(u,v,T),U=k&510,j=_-f+this._RandVecs2D[U]*p,Y=E-i+this._RandVecs2D[U|1]*p,X=Math.abs(j)+Math.abs(Y)+(j*j+Y*Y);g=Math.max(Math.min(g,X),h),X<h&&(h=X,y=k),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(h=Math.sqrt(h),this._CellularReturnType!==D.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return h-1;case D.CellularReturnType.Distance2:return g-1;case D.CellularReturnType.Distance2Add:return(g+h)*.5-1;case D.CellularReturnType.Distance2Sub:return g-h-1;case D.CellularReturnType.Distance2Mul:return g*h*.5-1;case D.CellularReturnType.Distance2Div:return h/g-1;default:return 0}}_SingleCellularR3(u,f,i,d){let o=Math.round(f),h=Math.round(i),g=Math.round(d),y=Number.MAX_VALUE,p=Number.MAX_VALUE,v=0,b=.39614353*this._CellularJitterModifier,_=(o-1)*this._PrimeX,T=(h-1)*this._PrimeY,E=(g-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let k=o-1;k<=o+1;k++){let U=T;for(let j=h-1;j<=h+1;j++){let Y=E;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,_,U,Y),G=K&1020,Q=k-f+this._RandVecs3D[G]*b,V=j-i+this._RandVecs3D[G|1]*b,ee=X-d+this._RandVecs3D[G|2]*b,te=Q*Q+V*V+ee*ee;p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),Y+=this._PrimeZ}U+=this._PrimeY}_+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let k=o-1;k<=o+1;k++){let U=T;for(let j=h-1;j<=h+1;j++){let Y=E;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,_,U,Y),G=K&1020,Q=k-f+this._RandVecs3D[G]*b,V=j-i+this._RandVecs3D[G|1]*b,ee=X-d+this._RandVecs3D[G|2]*b,te=Math.abs(Q)+Math.abs(V)+Math.abs(ee);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),Y+=this._PrimeZ}U+=this._PrimeY}_+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let k=o-1;k<=o+1;k++){let U=T;for(let j=h-1;j<=h+1;j++){let Y=E;for(let X=g-1;X<=g+1;X++){let K=this._HashR3(u,_,U,Y),G=K&1020,Q=k-f+this._RandVecs3D[G]*b,V=j-i+this._RandVecs3D[G|1]*b,ee=X-d+this._RandVecs3D[G|2]*b,te=Math.abs(Q)+Math.abs(V)+Math.abs(ee)+(Q*Q+V*V+ee*ee);p=Math.max(Math.min(p,te),y),te<y&&(y=te,v=K),Y+=this._PrimeZ}U+=this._PrimeY}_+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+y)*.5-1;case D.CellularReturnType.Distance2Sub:return p-y-1;case D.CellularReturnType.Distance2Mul:return p*y*.5-1;case D.CellularReturnType.Distance2Div:return y/p-1;default:return 0}}_SinglePerlinR2(u,f,i){let d=Math.floor(f),o=Math.floor(i),h=f-d,g=i-o,y=h-1,p=g-1,v=D._InterpQuintic(h),b=D._InterpQuintic(g);d=Math.imul(d,this._PrimeX),o=Math.imul(o,this._PrimeY);let _=d+this._PrimeX,T=o+this._PrimeY,E=D._Lerp(this._GradCoordR2(u,d,o,h,g),this._GradCoordR2(u,_,o,y,g),v),k=D._Lerp(this._GradCoordR2(u,d,T,h,p),this._GradCoordR2(u,_,T,y,p),v);return D._Lerp(E,k,b)*1.4247691104677813}_SinglePerlinR3(u,f,i,d){let o=Math.floor(f),h=Math.floor(i),g=Math.floor(d),y=f-o,p=i-h,v=d-g,b=y-1,_=p-1,T=v-1,E=D._InterpQuintic(y),k=D._InterpQuintic(p),U=D._InterpQuintic(v);o=Math.imul(o,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let j=o+this._PrimeX,Y=h+this._PrimeY,X=g+this._PrimeZ,K=D._Lerp(this._GradCoordR3(u,o,h,g,y,p,v),this._GradCoordR3(u,j,h,g,b,p,v),E),G=D._Lerp(this._GradCoordR3(u,o,Y,g,y,_,v),this._GradCoordR3(u,j,Y,g,b,_,v),E),Q=D._Lerp(this._GradCoordR3(u,o,h,X,y,p,T),this._GradCoordR3(u,j,h,X,b,p,T),E),V=D._Lerp(this._GradCoordR3(u,o,Y,X,y,_,T),this._GradCoordR3(u,j,Y,X,b,_,T),E),ee=D._Lerp(K,G,k),te=D._Lerp(Q,V,k);return D._Lerp(ee,te,U)*.9649214148521423}_SingleValueCubicR2(u,f,i){let d=Math.floor(f),o=Math.floor(i),h=f-d,g=i-o;d=Math.imul(d,this._PrimeX),o=Math.imul(o,this._PrimeY);let y=d-this._PrimeX,p=o-this._PrimeY,v=d+this._PrimeX,b=o+this._PrimeY,_=d+(this._PrimeX<<1),T=o+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(u,y,p),this._ValCoordR2(u,d,p),this._ValCoordR2(u,v,p),this._ValCoordR2(u,_,p),h),D._CubicLerp(this._ValCoordR2(u,y,o),this._ValCoordR2(u,d,o),this._ValCoordR2(u,v,o),this._ValCoordR2(u,_,o),h),D._CubicLerp(this._ValCoordR2(u,y,b),this._ValCoordR2(u,d,b),this._ValCoordR2(u,v,b),this._ValCoordR2(u,_,b),h),D._CubicLerp(this._ValCoordR2(u,y,T),this._ValCoordR2(u,d,T),this._ValCoordR2(u,v,T),this._ValCoordR2(u,_,T),h),g)*(1/(1.5*1.5))}_SingleValueCubicR3(u,f,i,d){let o=Math.floor(f),h=Math.floor(i),g=Math.floor(d),y=f-o,p=i-h,v=d-g;o=Math.imul(o,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let b=o-this._PrimeX,_=h-this._PrimeY,T=g-this._PrimeZ,E=o+this._PrimeX,k=h+this._PrimeY,U=g+this._PrimeZ,j=o+(this._PrimeX<<1),Y=h+(this._PrimeY<<1),X=g+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,b,_,T),this._ValCoordR3(u,o,_,T),this._ValCoordR3(u,E,_,T),this._ValCoordR3(u,j,_,T),y),D._CubicLerp(this._ValCoordR3(u,b,h,T),this._ValCoordR3(u,o,h,T),this._ValCoordR3(u,E,h,T),this._ValCoordR3(u,j,h,T),y),D._CubicLerp(this._ValCoordR3(u,b,k,T),this._ValCoordR3(u,o,k,T),this._ValCoordR3(u,E,k,T),this._ValCoordR3(u,j,k,T),y),D._CubicLerp(this._ValCoordR3(u,b,Y,T),this._ValCoordR3(u,o,Y,T),this._ValCoordR3(u,E,Y,T),this._ValCoordR3(u,j,Y,T),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,b,_,g),this._ValCoordR3(u,o,_,g),this._ValCoordR3(u,E,_,g),this._ValCoordR3(u,j,_,g),y),D._CubicLerp(this._ValCoordR3(u,b,h,g),this._ValCoordR3(u,o,h,g),this._ValCoordR3(u,E,h,g),this._ValCoordR3(u,j,h,g),y),D._CubicLerp(this._ValCoordR3(u,b,k,g),this._ValCoordR3(u,o,k,g),this._ValCoordR3(u,E,k,g),this._ValCoordR3(u,j,k,g),y),D._CubicLerp(this._ValCoordR3(u,b,Y,g),this._ValCoordR3(u,o,Y,g),this._ValCoordR3(u,E,Y,g),this._ValCoordR3(u,j,Y,g),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,b,_,U),this._ValCoordR3(u,o,_,U),this._ValCoordR3(u,E,_,U),this._ValCoordR3(u,j,_,U),y),D._CubicLerp(this._ValCoordR3(u,b,h,U),this._ValCoordR3(u,o,h,U),this._ValCoordR3(u,E,h,U),this._ValCoordR3(u,j,h,U),y),D._CubicLerp(this._ValCoordR3(u,b,k,U),this._ValCoordR3(u,o,k,U),this._ValCoordR3(u,E,k,U),this._ValCoordR3(u,j,k,U),y),D._CubicLerp(this._ValCoordR3(u,b,Y,U),this._ValCoordR3(u,o,Y,U),this._ValCoordR3(u,E,Y,U),this._ValCoordR3(u,j,Y,U),y),p),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,b,_,X),this._ValCoordR3(u,o,_,X),this._ValCoordR3(u,E,_,X),this._ValCoordR3(u,j,_,X),y),D._CubicLerp(this._ValCoordR3(u,b,h,X),this._ValCoordR3(u,o,h,X),this._ValCoordR3(u,E,h,X),this._ValCoordR3(u,j,h,X),y),D._CubicLerp(this._ValCoordR3(u,b,k,X),this._ValCoordR3(u,o,k,X),this._ValCoordR3(u,E,k,X),this._ValCoordR3(u,j,k,X),y),D._CubicLerp(this._ValCoordR3(u,b,Y,X),this._ValCoordR3(u,o,Y,X),this._ValCoordR3(u,E,Y,X),this._ValCoordR3(u,j,Y,X),y),p),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(u,f,i){let d=Math.floor(f),o=Math.floor(i),h=D._InterpHermite(f-d),g=D._InterpHermite(i-o);d=Math.imul(d,this._PrimeX),o=Math.imul(o,this._PrimeY);let y=d+this._PrimeX,p=o+this._PrimeY,v=D._Lerp(this._ValCoordR2(u,d,o),this._ValCoordR2(u,y,o),h),b=D._Lerp(this._ValCoordR2(u,d,p),this._ValCoordR2(u,y,p),h);return D._Lerp(v,b,g)}_SingleValueR3(u,f,i,d){let o=Math.floor(f),h=Math.floor(i),g=Math.floor(d),y=D._InterpHermite(f-o),p=D._InterpHermite(i-h),v=D._InterpHermite(d-g);o=Math.imul(o,this._PrimeX),h=Math.imul(h,this._PrimeY),g=Math.imul(g,this._PrimeZ);let b=o+this._PrimeX,_=h+this._PrimeY,T=g+this._PrimeZ,E=D._Lerp(this._ValCoordR3(u,o,h,g),this._ValCoordR3(u,b,h,g),y),k=D._Lerp(this._ValCoordR3(u,o,_,g),this._ValCoordR3(u,b,_,g),y),U=D._Lerp(this._ValCoordR3(u,o,h,T),this._ValCoordR3(u,b,h,T),y),j=D._Lerp(this._ValCoordR3(u,o,_,T),this._ValCoordR3(u,b,_,T),y),Y=D._Lerp(E,k,p),X=D._Lerp(U,j,p);return D._Lerp(Y,X,v)}_DoSingleDomainWarp(){let u=(i,d,o,h,g,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,d*38.283687591552734,o,h,!1,g,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,d*16,o,h,!0,g,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,d,o,h,g,y);break}},f=(i,d,o,h,g,y,p)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,d*32.69428253173828,o,h,!1,g,y,p);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,d*7.71604938271605,o,h,!0,g,y,p);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,d,o,h,g,y,p);break}};if(arguments.length===6&&arguments[3]instanceof ar)return u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof rr)return f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let u=i=>{let d=this._Seed,o=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let b=(g+y)*v;g+=b,y+=b;break}this._DoSingleDomainWarp(d,o,h,i,g,y)},f=i=>{let d=this._Seed,o=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency,g=i.x,y=i.y,p=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let _=g+y,T=_*-.211324865405187;p*=.577350269189626,g+=T-p,y=y+T-p,p+=_*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let _=g+p,T=_*-.211324865405187;y*=.577350269189626,g+=T-y,p+=T-y,y+=_*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let b=(g+y+p)*v;g=b-g,y=b-y,p=b-p;break}this._DoSingleDomainWarp(d,o,h,i,g,y,p)};if(arguments.length===1&&arguments[0]instanceof ar)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof rr)return f(arguments[0])}_DomainWarpFractalProgressive(){let u=i=>{let d=this._Seed,o=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const b=.5*(1.7320508075688772-1);let _=(y+p)*b;y+=_,p+=_;break}this._DoSingleDomainWarp(d,o,h,i,y,p),d++,o*=this._Gain,h*=this._Lacunarity}},f=i=>{let d=this._Seed,o=this._DomainWarpAmp*this._FractalBounding,h=this._Frequency;for(let g=0;g<this._Octaves;g++){let y=i.x,p=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let b=y+p,_=b*-.211324865405187;v*=.577350269189626,y+=_-v,p=p+_-v,v+=b*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let b=y+v,_=b*-.211324865405187;p*=.577350269189626,y+=_-p,v+=_-p,p+=b*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let _=(y+p+v)*.6666666666666666;y=_-y,p=_-p,v=_-v}break}this._DoSingleDomainWarp(d,o,h,i,y,p,v),d++,o*=this._Gain,h*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof ar)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof rr)return f(arguments[0])}_DomainWarpFractalIndependent(){let u=i=>{let d=i.x,o=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let b=(d+o)*v;d+=b,o+=b;break}let h=this._Seed,g=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let p=0;p<this._Octaves;p++)this._DoSingleDomainWarp(h,g,y,i,d,o),h++,g*=this._Gain,y*=this._Lacunarity},f=i=>{let d=i.x,o=i.y,h=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=d+o,b=v*-.211324865405187;h*=.577350269189626,d+=b-h,o=o+b-h,h+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=d+h,b=v*-.211324865405187;o*=.577350269189626,d+=b-o,h+=b-o,o+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let b=(d+o+h)*.6666666666666666;d=b-d,o=b-o,h=b-h}break}let g=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,p=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(g,y,p,i,d,o,h),g++,y*=this._Gain,p*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof ar)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof rr)return f(arguments[0])}_SingleDomainWarpBasicGrid(){let u=(i,d,o,h,g,y)=>{let p=g*o,v=y*o,b=Math.floor(p),_=Math.floor(v),T=D._InterpHermite(p-b),E=D._InterpHermite(v-_);b=Math.imul(b,this._PrimeX),_=Math.imul(_,this._PrimeY);let k=b+this._PrimeX,U=_+this._PrimeY,j=this._HashR2(i,b,_)&510,Y=this._HashR2(i,k,_)&510,X=D._Lerp(this._RandVecs2D[j],this._RandVecs2D[Y],T),K=D._Lerp(this._RandVecs2D[j|1],this._RandVecs2D[Y|1],T);j=this._HashR2(i,b,U)&510,Y=this._HashR2(i,k,U)&510;let G=D._Lerp(this._RandVecs2D[j],this._RandVecs2D[Y],T),Q=D._Lerp(this._RandVecs2D[j|1],this._RandVecs2D[Y|1],T);h.x+=D._Lerp(X,G,E)*d,h.y+=D._Lerp(K,Q,E)*d},f=(i,d,o,h,g,y,p)=>{let v=g*o,b=y*o,_=p*o,T=Math.floor(v),E=Math.floor(b),k=Math.floor(_),U=D._InterpHermite(v-T),j=D._InterpHermite(b-E),Y=D._InterpHermite(_-k);T=Math.imul(T,this._PrimeX),E=Math.imul(E,this._PrimeY),k=Math.imul(k,this._PrimeZ);let X=T+this._PrimeX,K=E+this._PrimeY,G=k+this._PrimeZ,Q=this._HashR3(i,T,E,k)&1020,V=this._HashR3(i,X,E,k)&1020,ee=D._Lerp(this._RandVecs3D[Q],this._RandVecs3D[V],U),te=D._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[V|1],U),he=D._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[V|2],U);Q=this._HashR3(i,T,K,k)&1020,V=this._HashR3(i,X,K,k)&1020;let _e=D._Lerp(this._RandVecs3D[Q],this._RandVecs3D[V],U),ae=D._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[V|1],U),ye=D._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[V|2],U),ze=D._Lerp(ee,_e,j),pe=D._Lerp(te,ae,j),B=D._Lerp(he,ye,j);Q=this._HashR3(i,T,E,G)&1020,V=this._HashR3(i,X,E,G)&1020,ee=D._Lerp(this._RandVecs3D[Q],this._RandVecs3D[V],U),te=D._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[V|1],U),he=D._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[V|2],U),Q=this._HashR3(i,T,K,G)&1020,V=this._HashR3(i,X,K,G)&1020,_e=D._Lerp(this._RandVecs3D[Q],this._RandVecs3D[V],U),ae=D._Lerp(this._RandVecs3D[Q|1],this._RandVecs3D[V|1],U),ye=D._Lerp(this._RandVecs3D[Q|2],this._RandVecs3D[V|2],U),h.x+=D._Lerp(ze,D._Lerp(ee,_e,j),Y)*d,h.y+=D._Lerp(pe,D._Lerp(te,ae,j),Y)*d,h.z+=D._Lerp(B,D._Lerp(he,ye,j),Y)*d};arguments.length===6&&arguments[3]instanceof ar&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof rr&&f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let u=(i,d,o,h,g,y,p)=>{const b=(3-1.7320508075688772)/6;y*=o,p*=o;let _=Math.floor(y),T=Math.floor(p),E=y-_,k=p-T,U=(E+k)*b,j=E-U,Y=k-U;_=Math.imul(_,this._PrimeX),T=Math.imul(T,this._PrimeY);let X,K;X=K=0;let G=.5-j*j-Y*Y;if(G>0){let V=G*G*(G*G),ee,te;if(g){let he=this._HashR2(i,_,T)&510;ee=this._RandVecs2D[he],te=this._RandVecs2D[he|1]}else{let he=this._HashR2(i,_,T),_e=he&254,ae=he>>7&510,ye=this._Gradients2D[_e],ze=this._Gradients2D[_e|1],pe=j*ye+Y*ze,B=this._RandVecs2D[ae],J=this._RandVecs2D[ae|1];ee=pe*B,te=pe*J}X+=V*ee,K+=V*te}let Q=2*(1-2*b)*(1/b-2)*U+(-2*(1-2*b)*(1-2*b)+G);if(Q>0){let V=j+(2*b-1),ee=Y+(2*b-1),te=Q*Q*(Q*Q),he,_e;if(g){let ae=this._HashR2(i,_+this._PrimeX,T+this._PrimeY)&510;he=this._RandVecs2D[ae],_e=this._RandVecs2D[ae|1]}else{let ae=this._HashR2(i,_+this._PrimeX,T+this._PrimeY),ye=ae&254,ze=ae>>7&510,pe=this._Gradients2D[ye],B=this._Gradients2D[ye|1],J=V*pe+ee*B,$=this._RandVecs2D[ze],re=this._RandVecs2D[ze|1];he=J*$,_e=J*re}X+=te*he,K+=te*_e}if(Y>j){let V=j+b,ee=Y+(b-1),te=.5-V*V-ee*ee;if(te>0){let he=te*te*(te*te),_e,ae;if(g){let ye=this._HashR2(i,_,T+this._PrimeY)&510;_e=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,_,T+this._PrimeY),ze=ye&254,pe=ye>>7&510,B=this._Gradients2D[ze],J=this._Gradients2D[ze|1],$=V*B+ee*J,re=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];_e=$*re,ae=$*x}X+=he*_e,K+=he*ae}}else{let V=j+(b-1),ee=Y+b,te=.5-V*V-ee*ee;if(te>0){let he=te*te*(te*te),_e,ae;if(g){let ye=this._HashR2(i,_+this._PrimeX,T)&510;_e=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,_+this._PrimeX,T),ze=ye&254,pe=ye>>7&510,B=this._Gradients2D[ze],J=this._Gradients2D[ze|1],$=V*B+ee*J,re=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];_e=$*re,ae=$*x}X+=he*_e,K+=he*ae}}h.x+=X*d,h.y+=K*d},f=(i,d,o,h,g,y,p,v)=>{y*=o,p*=o,v*=o;let b=Math.round(y),_=Math.round(p),T=Math.round(v),E=y-b,k=p-_,U=v-T,j=-E-1|1,Y=-k-1|1,X=-U-1|1,K=j*-E,G=Y*-k,Q=X*-U;b=Math.imul(b,this._PrimeX),_=Math.imul(_,this._PrimeY),T=Math.imul(T,this._PrimeZ);let V,ee,te;V=ee=te=0;let he=.6-E*E-(k*k+U*U);for(let _e=0;;_e++){if(he>0){let re=he*he*(he*he),x,M,N;if(g){let L=this._HashR3(i,b,_,T)&1020;x=this._RandVecs3D[L],M=this._RandVecs3D[L|1],N=this._RandVecs3D[L|2]}else{let L=this._HashR3(i,b,_,T),F=L&252,ce=L>>6&1020,ue=this._Gradients3D[F],He=this._Gradients3D[F|1],De=this._Gradients3D[F|2],je=E*ue+k*He+U*De,bt=this._RandVecs3D[ce],nt=this._RandVecs3D[ce|1],Rt=this._RandVecs3D[ce|2];x=je*bt,M=je*nt,N=je*Rt}V+=re*x,ee+=re*M,te+=re*N}let ae=he,ye=b,ze=_,pe=T,B=E,J=k,$=U;if(K>=G&&K>=Q?(B+=j,ae=ae+K+K,ye-=j*this._PrimeX):G>K&&G>=Q?(J+=Y,ae=ae+G+G,ze-=Y*this._PrimeY):($+=X,ae=ae+Q+Q,pe-=X*this._PrimeZ),ae>1){ae-=1;let re=ae*ae*(ae*ae),x,M,N;if(g){let L=this._HashR3(i,ye,ze,pe)&1020;x=this._RandVecs3D[L],M=this._RandVecs3D[L|1],N=this._RandVecs3D[L|2]}else{let L=this._HashR3(i,ye,ze,pe),F=L&252,ce=L>>6&1020,ue=this._Gradients3D[F],He=this._Gradients3D[F|1],De=this._Gradients3D[F|2],je=B*ue+J*He+$*De,bt=this._RandVecs3D[ce],nt=this._RandVecs3D[ce|1],Rt=this._RandVecs3D[ce|2];x=je*bt,M=je*nt,N=je*Rt}V+=re*x,ee+=re*M,te+=re*N}if(_e===1)break;K=.5-K,G=.5-G,Q=.5-Q,E=j*K,k=Y*G,U=X*Q,he+=.75-K-(G+Q),b+=j>>1&this._PrimeX,_+=Y>>1&this._PrimeY,T+=X>>1&this._PrimeZ,j=-j,Y=-Y,X=-X,i+=1293373}h.x+=V*d,h.y+=ee*d,h.z+=te*d};arguments.length===7&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class ar{constructor(u,f){this.x=u,this.y=f}}class rr{constructor(u,f,i){this.x=u,this.y=f,this.z=i}}function md(c=42,u=1920,f=1080,i=D.NoiseType.Perlin,d=6,o=1.7,h=.5,g=D.FractalType.FBm,y=.003){const p=new D;p.SetNoiseType(i),p.SetSeed(c),p.SetFractalOctaves(d),p.SetFractalLacunarity(o),p.SetFractalGain(h),p.SetFractalType(g),p.SetFrequency(y);const v=[];for(let T=0;T<f;T++)for(let E=0;E<u;E++){const U=(p.GetNoise(E,T)+1)/2;v.push(U)}var b=0,_=0;for(let T=0;T<v.length;T++)(v[T]<b||T==0)&&(b=v[T]),(v[T]>_||T==0)&&(_=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-b)/(_-b);return v}const pd=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
}`,gd=`// RGB (0–1 range)\r
const COLOR_WHITE  = vec4<f32>(1.0, 1.0, 1.0, 1.0);\r
const COLOR_BLACK  = vec4<f32>(0.0, 0.0, 0.0, 1.0);\r
const COLOR_RED    = vec4<f32>(1.0, 0.0, 0.0, 1.0);\r
const COLOR_GREEN  = vec4<f32>(0.0, 1.0, 0.0, 1.0);\r
const COLOR_BLUE   = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r
const COLOR_YELLOW = vec4<f32>(1.0, 1.0, 0.0, 1.0);\r
const COLOR_CYAN   = vec4<f32>(0.0, 1.0, 1.0, 1.0);\r
const COLOR_MAGENTA= vec4<f32>(1.0, 0.0, 1.0, 1.0);\r
const COLOR_GRAY   = vec4<f32>(0.5, 0.5, 0.5, 1.0);\r
const COLOR_CLEAR  = vec4<f32>(0.0, 0.0, 0.0, 1.0);`,yd=`// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)\r
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
}`,vd=`// ---------- Helpers ----------\r
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
}`,xd=`const MAX_SPRITE_SIZE = 64 * 64;\r
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
}`,bd=`// Uses: uView, uTerrain, uInput, outputTex\r
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
}`,d2=`//{colors}\r
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
//{chunk_data_calc}`,_d=`struct View {\r
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
};`,Sd=`// Fullscreen triangle VS\r
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
}`,Cd=`const MAX_SLICES_PER_CELL : u32 = 3u;\r
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
`,Td=`// Uses: uView, uTerrain, chunkData, currentCells\r
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
`,Rd=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells\r
\r
@compute @workgroup_size(1, 1, 1)\r
fn cursor_query(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    if(gid.x > 0) { return; }\r
\r
    let i = idx(uInput.mousePos.x, uInput.mousePos.y);\r
    var cell = currentCells[i];\r
    cursorQuery.cell = cell;\r
}\r
`,Dd=`// Uses: uView, uTerrain, cursorQuery, currentCells, chunkData\r
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
`,zd=`// ---- Fragment shader ----\r
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
}`,Od=`// Uses: uView, chunkData, currentCells, outputTex\r
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
`,wd=`// Uses: uView, uTerrain, chunkData, currentCells, outputTex\r
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
`,Md=`// Uses: uView, currentCells\r
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
`,Ad=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,Ed=`@compute @workgroup_size(1, 1, 1)\r
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
`,Vd=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,Hd=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells, nextCells\r
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
}`,Bd=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":pd,"../shaders/helpers/colors.wgsl":gd,"../shaders/helpers/flow_helpers.wgsl":yd,"../shaders/helpers/helpers.wgsl":vd,"../shaders/helpers/sprite_helpers.wgsl":xd,"../shaders/main/fragment.wgsl":bd,"../shaders/main/shader_outline.wgsl":d2,"../shaders/main/structs.wgsl":_d,"../shaders/main/vertex.wgsl":Sd,"../shaders/objects/object_def.wgsl":Cd,"../shaders/query/chunk_data_calc.wgsl":Td,"../shaders/query/cursor_query.wgsl":Rd,"../shaders/query/total_query.wgsl":Dd,"../shaders/realtime_frag.wgsl":zd,"../shaders/render/debug_render_compute.wgsl":Od,"../shaders/render/fluid_render_compute.wgsl":wd,"../shaders/render/normal_compute.wgsl":Md,"../shaders/render/shadow_render_compute.wgsl":Ad,"../shaders/render/sprite_render_compute.wgsl":Ed,"../shaders/render/terrain_render_compute.wgsl":Vd,"../shaders/simulation/step_compute.wgsl":Hd});function Gd(){let c=d2;for(const[u,f]of Object.entries(Bd)){const i=u.split("/").pop().replace(".wgsl","");c=c.replace(`//{${i}}`,f)}return c}var Z0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var a2;function Ud(){return a2||(a2=1,(function(c){(function(){var u={}.hasOwnProperty;function f(){for(var o="",h=0;h<arguments.length;h++){var g=arguments[h];g&&(o=d(o,i(g)))}return o}function i(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return f.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var h="";for(var g in o)u.call(o,g)&&o[g]&&(h=d(h,g));return h}function d(o,h){return h?o?o+" "+h:o+h:o}c.exports?(f.default=f,c.exports=f):window.classNames=f})()})(Z0)),Z0.exports}var jd=Ud();const Ve=Ru(jd),Yd=["xxl","xl","lg","md","sm","xs"],Xd="xs",Du=W.createContext({prefixes:{},breakpoints:Yd,minBreakpoint:Xd}),{Consumer:nm,Provider:lm}=Du;function Ze(c,u){const{prefixes:f}=W.useContext(Du);return c||f[u]||u}function h2(){const{breakpoints:c}=W.useContext(Du);return c}function m2(){const{minBreakpoint:c}=W.useContext(Du);return c}var P0={exports:{}},Q0,r2;function kd(){if(r2)return Q0;r2=1;var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Q0=c,Q0}var K0,u2;function Nd(){if(u2)return K0;u2=1;var c=kd();function u(){}function f(){}return f.resetWarningCache=u,K0=function(){function i(h,g,y,p,v,b){if(b!==c){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}i.isRequired=i;function d(){return i}var o={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:d,element:i,elementType:i,instanceOf:d,node:i,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:f,resetWarningCache:u};return o.PropTypes=o,o},K0}var i2;function qd(){return i2||(i2=1,P0.exports=Nd()()),P0.exports}var Ld=qd();const ve=Ru(Ld),p2=(c=>W.forwardRef((u,f)=>C.jsx("div",{...u,ref:f,className:Ve(u.className,c)}))),Zd=["as","disabled"];function Pd(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)>=0)continue;f[i]=c[i]}return f}function Qd(c){return!c||c.trim()==="#"}function g2({tagName:c,disabled:u,href:f,target:i,rel:d,role:o,onClick:h,tabIndex:g=0,type:y}){c||(f!=null||i!=null||d!=null?c="a":c="button");const p={tagName:c};if(c==="button")return[{type:y||"button",disabled:u},p];const v=_=>{if((u||c==="a"&&Qd(f))&&_.preventDefault(),u){_.stopPropagation();return}h?.(_)},b=_=>{_.key===" "&&(_.preventDefault(),v(_))};return c==="a"&&(f||(f="#"),u&&(f=void 0)),[{role:o??"button",disabled:void 0,tabIndex:u?void 0:g,href:f,target:c==="a"?i:void 0,"aria-disabled":u||void 0,rel:c==="a"?d:void 0,onClick:v,onKeyDown:b},p]}const Kd=W.forwardRef((c,u)=>{let{as:f,disabled:i}=c,d=Pd(c,Zd);const[o,{tagName:h}]=g2(Object.assign({tagName:f,disabled:i},d));return C.jsx(h,Object.assign({},d,o,{ref:u}))});Kd.displayName="Button";const aa=W.forwardRef(({as:c,bsPrefix:u,variant:f="primary",size:i,active:d=!1,disabled:o=!1,className:h,...g},y)=>{const p=Ze(u,"btn"),[v,{tagName:b}]=g2({tagName:c,disabled:o,...g}),_=b;return C.jsx(_,{...v,...g,ref:y,disabled:o,className:Ve(h,p,d&&"active",f&&`${p}-${f}`,i&&`${p}-${i}`,g.href&&o&&"disabled")})});aa.displayName="Button";const nc=W.forwardRef(({bsPrefix:c,size:u,vertical:f=!1,className:i,role:d="group",as:o="div",...h},g)=>{const y=Ze(c,"btn-group");let p=y;return f&&(p=`${y}-vertical`),C.jsx(o,{...h,ref:g,role:d,className:Ve(i,p,u&&`${y}-${u}`)})});nc.displayName="ButtonGroup";const lc=W.forwardRef(({className:c,bsPrefix:u,as:f="div",...i},d)=>(u=Ze(u,"card-body"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));lc.displayName="CardBody";const y2=W.forwardRef(({className:c,bsPrefix:u,as:f="div",...i},d)=>(u=Ze(u,"card-footer"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));y2.displayName="CardFooter";const v2=W.createContext(null);v2.displayName="CardHeaderContext";const x2=W.forwardRef(({bsPrefix:c,className:u,as:f="div",...i},d)=>{const o=Ze(c,"card-header"),h=W.useMemo(()=>({cardHeaderBsPrefix:o}),[o]);return C.jsx(v2.Provider,{value:h,children:C.jsx(f,{ref:d,...i,className:Ve(u,o)})})});x2.displayName="CardHeader";const b2=W.forwardRef(({bsPrefix:c,className:u,variant:f,as:i="img",...d},o)=>{const h=Ze(c,"card-img");return C.jsx(i,{ref:o,className:Ve(f?`${h}-${f}`:h,u),...d})});b2.displayName="CardImg";const _2=W.forwardRef(({className:c,bsPrefix:u,as:f="div",...i},d)=>(u=Ze(u,"card-img-overlay"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));_2.displayName="CardImgOverlay";const S2=W.forwardRef(({className:c,bsPrefix:u,as:f="a",...i},d)=>(u=Ze(u,"card-link"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));S2.displayName="CardLink";const Wd=p2("h6"),C2=W.forwardRef(({className:c,bsPrefix:u,as:f=Wd,...i},d)=>(u=Ze(u,"card-subtitle"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));C2.displayName="CardSubtitle";const T2=W.forwardRef(({className:c,bsPrefix:u,as:f="p",...i},d)=>(u=Ze(u,"card-text"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));T2.displayName="CardText";const Jd=p2("h5"),R2=W.forwardRef(({className:c,bsPrefix:u,as:f=Jd,...i},d)=>(u=Ze(u,"card-title"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));R2.displayName="CardTitle";const D2=W.forwardRef(({bsPrefix:c,className:u,bg:f,text:i,border:d,body:o=!1,children:h,as:g="div",...y},p)=>{const v=Ze(c,"card");return C.jsx(g,{ref:p,...y,className:Ve(u,v,f&&`bg-${f}`,i&&`text-${i}`,d&&`border-${d}`),children:o?C.jsx(lc,{children:h}):h})});D2.displayName="Card";const en=Object.assign(D2,{Img:b2,Title:R2,Subtitle:C2,Body:lc,Link:S2,Text:T2,Header:x2,Footer:y2,ImgOverlay:_2});function $d(c,u){return W.Children.toArray(c).some(f=>W.isValidElement(f)&&f.type===u)}function Fd({as:c,bsPrefix:u,className:f,...i}){u=Ze(u,"col");const d=h2(),o=m2(),h=[],g=[];return d.forEach(y=>{const p=i[y];delete i[y];let v,b,_;typeof p=="object"&&p!=null?{span:v,offset:b,order:_}=p:v=p;const T=y!==o?`-${y}`:"";v&&h.push(v===!0?`${u}${T}`:`${u}${T}-${v}`),_!=null&&g.push(`order${T}-${_}`),b!=null&&g.push(`offset${T}-${b}`)}),[{...i,className:Ve(f,...h,...g)},{as:c,bsPrefix:u,spans:h}]}const Tt=W.forwardRef((c,u)=>{const[{className:f,...i},{as:d="div",bsPrefix:o,spans:h}]=Fd(c);return C.jsx(d,{...i,ref:u,className:Ve(f,!h.length&&o)})});Tt.displayName="Col";const z2=W.createContext(null);z2.displayName="InputGroupContext";const Id={type:ve.string,tooltip:ve.bool,as:ve.elementType},zu=W.forwardRef(({as:c="div",className:u,type:f="valid",tooltip:i=!1,...d},o)=>C.jsx(c,{...d,ref:o,className:Ve(u,`${f}-${i?"tooltip":"feedback"}`)}));zu.displayName="Feedback";zu.propTypes=Id;const Rn=W.createContext({}),cr=W.forwardRef(({id:c,bsPrefix:u,className:f,type:i="checkbox",isValid:d=!1,isInvalid:o=!1,as:h="input",...g},y)=>{const{controlId:p}=W.useContext(Rn);return u=Ze(u,"form-check-input"),C.jsx(h,{...g,ref:y,type:i,id:c||p,className:Ve(f,u,d&&"is-valid",o&&"is-invalid")})});cr.displayName="FormCheckInput";const Cu=W.forwardRef(({bsPrefix:c,className:u,htmlFor:f,...i},d)=>{const{controlId:o}=W.useContext(Rn);return c=Ze(c,"form-check-label"),C.jsx("label",{...i,ref:d,htmlFor:f||o,className:Ve(u,c)})});Cu.displayName="FormCheckLabel";const O2=W.forwardRef(({id:c,bsPrefix:u,bsSwitchPrefix:f,inline:i=!1,reverse:d=!1,disabled:o=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:p,feedbackType:v,className:b,style:_,title:T="",type:E="checkbox",label:k,children:U,as:j="input",...Y},X)=>{u=Ze(u,"form-check"),f=Ze(f,"form-switch");const{controlId:K}=W.useContext(Rn),G=W.useMemo(()=>({controlId:c||K}),[K,c]),Q=!U&&k!=null&&k!==!1||$d(U,Cu),V=C.jsx(cr,{...Y,type:E==="switch"?"checkbox":E,ref:X,isValid:h,isInvalid:g,disabled:o,as:j});return C.jsx(Rn.Provider,{value:G,children:C.jsx("div",{style:_,className:Ve(b,Q&&u,i&&`${u}-inline`,d&&`${u}-reverse`,E==="switch"&&f),children:U||C.jsxs(C.Fragment,{children:[V,Q&&C.jsx(Cu,{title:T,children:k}),p&&C.jsx(zu,{type:v,tooltip:y,children:p})]})})})});O2.displayName="FormCheck";const Tu=Object.assign(O2,{Input:cr,Label:Cu}),w2=W.forwardRef(({bsPrefix:c,type:u,size:f,htmlSize:i,id:d,className:o,isValid:h=!1,isInvalid:g=!1,plaintext:y,readOnly:p,as:v="input",...b},_)=>{const{controlId:T}=W.useContext(Rn);return c=Ze(c,"form-control"),C.jsx(v,{...b,type:u,size:i,ref:_,readOnly:p,id:d||T,className:Ve(o,y?`${c}-plaintext`:c,f&&`${c}-${f}`,u==="color"&&`${c}-color`,h&&"is-valid",g&&"is-invalid")})});w2.displayName="FormControl";const eh=Object.assign(w2,{Feedback:zu}),M2=W.forwardRef(({className:c,bsPrefix:u,as:f="div",...i},d)=>(u=Ze(u,"form-floating"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));M2.displayName="FormFloating";const ac=W.forwardRef(({controlId:c,as:u="div",...f},i)=>{const d=W.useMemo(()=>({controlId:c}),[c]);return C.jsx(Rn.Provider,{value:d,children:C.jsx(u,{...f,ref:i})})});ac.displayName="FormGroup";const A2=W.forwardRef(({as:c="label",bsPrefix:u,column:f=!1,visuallyHidden:i=!1,className:d,htmlFor:o,...h},g)=>{const{controlId:y}=W.useContext(Rn);u=Ze(u,"form-label");let p="col-form-label";typeof f=="string"&&(p=`${p} ${p}-${f}`);const v=Ve(d,u,i&&"visually-hidden",f&&p);return o=o||y,f?C.jsx(Tt,{ref:g,as:"label",className:v,htmlFor:o,...h}):C.jsx(c,{ref:g,className:v,htmlFor:o,...h})});A2.displayName="FormLabel";const E2=W.forwardRef(({bsPrefix:c,className:u,id:f,...i},d)=>{const{controlId:o}=W.useContext(Rn);return c=Ze(c,"form-range"),C.jsx("input",{...i,type:"range",ref:d,className:Ve(u,c),id:f||o})});E2.displayName="FormRange";const V2=W.forwardRef(({bsPrefix:c,size:u,htmlSize:f,className:i,isValid:d=!1,isInvalid:o=!1,id:h,...g},y)=>{const{controlId:p}=W.useContext(Rn);return c=Ze(c,"form-select"),C.jsx("select",{...g,size:f,ref:y,className:Ve(i,c,u&&`${c}-${u}`,d&&"is-valid",o&&"is-invalid"),id:h||p})});V2.displayName="FormSelect";const H2=W.forwardRef(({bsPrefix:c,className:u,as:f="small",muted:i,...d},o)=>(c=Ze(c,"form-text"),C.jsx(f,{...d,ref:o,className:Ve(u,c,i&&"text-muted")})));H2.displayName="FormText";const B2=W.forwardRef((c,u)=>C.jsx(Tu,{...c,ref:u,type:"switch"}));B2.displayName="Switch";const th=Object.assign(B2,{Input:Tu.Input,Label:Tu.Label}),G2=W.forwardRef(({bsPrefix:c,className:u,children:f,controlId:i,label:d,...o},h)=>(c=Ze(c,"form-floating"),C.jsxs(ac,{ref:h,className:Ve(u,c),controlId:i,...o,children:[f,C.jsx("label",{htmlFor:i,children:d})]})));G2.displayName="FloatingLabel";const nh={_ref:ve.any,validated:ve.bool,as:ve.elementType},rc=W.forwardRef(({className:c,validated:u,as:f="form",...i},d)=>C.jsx(f,{...i,ref:d,className:Ve(c,u&&"was-validated")}));rc.displayName="Form";rc.propTypes=nh;const de=Object.assign(rc,{Group:ac,Control:eh,Floating:M2,Check:Tu,Switch:th,Label:A2,Text:H2,Range:E2,Select:V2,FloatingLabel:G2}),Ou=W.forwardRef(({className:c,bsPrefix:u,as:f="span",...i},d)=>(u=Ze(u,"input-group-text"),C.jsx(f,{ref:d,className:Ve(c,u),...i})));Ou.displayName="InputGroupText";const lh=c=>C.jsx(Ou,{children:C.jsx(cr,{type:"checkbox",...c})}),ah=c=>C.jsx(Ou,{children:C.jsx(cr,{type:"radio",...c})}),U2=W.forwardRef(({bsPrefix:c,size:u,hasValidation:f,className:i,as:d="div",...o},h)=>{c=Ze(c,"input-group");const g=W.useMemo(()=>({}),[]);return C.jsx(z2.Provider,{value:g,children:C.jsx(d,{ref:h,...o,className:Ve(i,c,u&&`${c}-${u}`,f&&"has-validation")})})});U2.displayName="InputGroup";const rh=Object.assign(U2,{Text:Ou,Radio:ah,Checkbox:lh}),ur=W.forwardRef(({bsPrefix:c,className:u,as:f="div",...i},d)=>{const o=Ze(c,"row"),h=h2(),g=m2(),y=`${o}-cols`,p=[];return h.forEach(v=>{const b=i[v];delete i[v];let _;b!=null&&typeof b=="object"?{cols:_}=b:_=b;const T=v!==g?`-${v}`:"";_!=null&&p.push(`${y}${T}-${_}`)}),C.jsx(f,{ref:d,...i,className:Ve(u,o,...p)})});ur.displayName="Row";const wu={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,pixelScale:4,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};Je.memo(uh,(c,u)=>c.initial===u.initial&&c.title===u.title);function uh({initial:c,onChange:u,onApply:f,title:i="Noise & Render Settings"}){const d=W.useMemo(()=>({...wu,...c}),[c]),[o,h]=W.useState(d);W.useEffect(()=>{h(v=>{const b=Math.max(1,Math.min(32,v.numberOfTerrainColors));let _=v.colors.slice(0,b);if(_.length<b){const T=b-_.length,E=_[_.length-1]??"#888888";_=_.concat(Array.from({length:T},()=>E))}return{...v,numberOfTerrainColors:b,colors:_}})},[o.numberOfTerrainColors]);const g=(v,b)=>h(_=>({..._,[v]:b})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],p=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return C.jsx(en,{children:C.jsxs(en.Body,{children:[C.jsx(en.Title,{className:"mb-3",children:i}),C.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),C.jsxs(ur,{className:"g-3",children:[C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"width",children:[C.jsx(de.Label,{children:"Width"}),C.jsx(de.Control,{type:"number",min:1,value:o.width,onChange:v=>g("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),C.jsx(de.Text,{muted:!0,children:"Width in pixels of the map."})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"height",children:[C.jsx(de.Label,{children:"Height"}),C.jsx(de.Control,{type:"number",min:1,value:o.height,onChange:v=>g("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),C.jsx(de.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),C.jsx("hr",{className:"my-4"}),C.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),C.jsxs(ur,{className:"g-3",children:[C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"noiseType",children:[C.jsx(de.Label,{children:"Noise Type"}),C.jsx(de.Select,{value:o.noiseType,onChange:v=>g("noiseType",v.currentTarget.value),children:y.map(v=>C.jsx("option",{value:v,children:v},v))})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"seed",children:[C.jsx(de.Label,{children:"Seed"}),C.jsx(de.Control,{type:"number",value:o.seed,onChange:v=>g("seed",parseInt(v.currentTarget.value||"0",10))})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"octaves",children:[C.jsx(de.Label,{children:"Fractal Octaves"}),C.jsx(de.Control,{type:"number",min:1,max:16,value:o.fractalOctaves,onChange:v=>g("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"lacunarity",children:[C.jsx(de.Label,{children:"Fractal Lacunarity"}),C.jsx(rh,{children:C.jsx(de.Control,{type:"number",step:"0.1",value:o.fractalLacunarity,onChange:v=>g("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"gain",children:[C.jsx(de.Label,{children:"Fractal Gain"}),C.jsx(de.Control,{type:"number",step:"0.05",value:o.fractalGain,onChange:v=>g("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"fractalType",children:[C.jsx(de.Label,{children:"Fractal Type"}),C.jsx(de.Select,{value:o.fractalType,onChange:v=>g("fractalType",v.currentTarget.value),children:p.map(v=>C.jsx("option",{value:v,children:v},v))})]})}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"frequency",children:[C.jsx(de.Label,{children:"Frequency"}),C.jsx(de.Control,{type:"number",step:"0.0005",value:o.frequency,onChange:v=>g("frequency",parseFloat(v.currentTarget.value||"0"))}),C.jsx(de.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),C.jsx("hr",{className:"my-4"}),C.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),C.jsxs(ur,{className:"g-3",children:[C.jsxs(Tt,{md:6,lg:4,children:[C.jsxs(de.Group,{controlId:"maxCellValue",children:[C.jsx(de.Label,{children:"Max Terrain Height"}),C.jsx(de.Control,{type:"number",step:"0.1",value:o.maxCellValue,onChange:v=>g("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),C.jsx(de.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),C.jsxs(Tt,{md:6,lg:4,children:[C.jsxs(de.Group,{controlId:"thm",children:[C.jsx(de.Label,{children:"Terrain Height Multiplier"}),C.jsx(de.Control,{type:"number",step:"0.01",value:o.terrainHeightMultiplier,onChange:v=>g("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),C.jsx(de.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),C.jsxs(Tt,{md:6,lg:4,children:[C.jsxs(de.Group,{controlId:"colorSteps",children:[C.jsx(de.Label,{children:"Terrain Steps"}),C.jsx(de.Control,{type:"number",min:1,value:o.colorSteps,onChange:v=>g("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),C.jsx(de.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),C.jsx(Tt,{md:6,lg:4,children:C.jsxs(de.Group,{controlId:"numColors",children:[C.jsx(de.Label,{children:"Number of Terrain Colors"}),C.jsx(de.Control,{type:"number",min:1,max:32,value:o.numberOfTerrainColors,onChange:v=>g("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),C.jsx(de.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),C.jsxs("div",{className:"mt-4",children:[C.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),C.jsx(ur,{className:"g-3",children:o.colors.map((v,b)=>C.jsx(Tt,{xs:3,sm:2,md:1,lg:1,children:C.jsx(de.Group,{controlId:`color-${b}`,children:C.jsx(de.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:_=>{const T=_.currentTarget.value;g("colors",o.colors.map((E,k)=>k===b?T:E))},title:`Pick color ${b+1}`})})},b))})]}),C.jsxs("div",{className:"d-flex gap-2 mt-4",children:[C.jsx(aa,{variant:"primary",onClick:()=>f?.(o),children:"Apply"}),C.jsx(aa,{variant:"outline-secondary",onClick:()=>h(d),children:"Reset to Defaults"})]})]})})}function c2(c,u){const f=c>>>0,i=u>>>0||1;return(i&i-1)===0?f+(i-1)&~(i-1):Math.ceil(f/i)*i>>>0}function ih(c){if(typeof c!="string")return"";const u=c.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(u))return u;const f=u.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(f)return`vec${f[1]}${f[2][0]}`;const i=u.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const ch={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function uc(c){const u={fields:[],size:0};let f=0,i=1;for(const d of c){const o=ih(d.type);if(!o)throw new Error(`Unsupported type: ${d.type}`);const h=o;if(h.startsWith("pad")){const v=parseInt(h.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${h}`);const b={name:d.name,type:h,offset:f,size:v,align:1};u.fields.push(b),f+=v;continue}const y=ch[h];if(!y)throw new Error(`Unsupported non-pad type: ${h}`);f=c2(f,y.align);const p={name:d.name,type:h,offset:f,size:y.size,align:y.align};u.fields.push(p),f+=y.size,y.align>i&&(i=y.align)}return u.size=c2(f,Math.max(16,i)),u}function oh(c,u){const f=new ArrayBuffer(c.size),i=new DataView(f);for(const d of c.fields){if(d.type.startsWith("pad"))continue;const o=u[d.name];if(o==null)throw new Error(`Missing field '${d.name}'`);switch(d.type){case"f32":i.setFloat32(d.offset,+o,!0);break;case"u32":i.setUint32(d.offset,o>>>0,!0);break;case"i32":i.setInt32(d.offset,o|0,!0);break;case"bool":i.setUint32(d.offset,o?1:0,!0);break;case"vec2f":i.setFloat32(d.offset,o[0],!0),i.setFloat32(d.offset+4,o[1],!0);break;case"vec3f":i.setFloat32(d.offset,o[0],!0),i.setFloat32(d.offset+4,o[1],!0),i.setFloat32(d.offset+8,o[2],!0);break;case"vec4f":i.setFloat32(d.offset,o[0],!0),i.setFloat32(d.offset+4,o[1],!0),i.setFloat32(d.offset+8,o[2],!0),i.setFloat32(d.offset+12,o[3],!0);break;case"vec2u":i.setUint32(d.offset,o[0]>>>0,!0),i.setUint32(d.offset+4,o[1]>>>0,!0);break;case"vec3u":i.setUint32(d.offset,o[0]>>>0,!0),i.setUint32(d.offset+4,o[1]>>>0,!0),i.setUint32(d.offset+8,o[2]>>>0,!0);break;case"vec4u":i.setUint32(d.offset,o[0]>>>0,!0),i.setUint32(d.offset+4,o[1]>>>0,!0),i.setUint32(d.offset+8,o[2]>>>0,!0),i.setUint32(d.offset+12,o[3]>>>0,!0);break;case"vec2i":i.setInt32(d.offset,o[0]|0,!0),i.setInt32(d.offset+4,o[1]|0,!0);break;case"vec3i":i.setInt32(d.offset,o[0]|0,!0),i.setInt32(d.offset+4,o[1]|0,!0),i.setInt32(d.offset+8,o[2]|0,!0);break;case"vec4i":i.setInt32(d.offset,o[0]|0,!0),i.setInt32(d.offset+4,o[1]|0,!0),i.setInt32(d.offset+8,o[2]|0,!0),i.setInt32(d.offset+12,o[3]|0,!0);break;default:throw new Error(`Unhandled type ${d.type}`)}}return f}function ic(c,u,f,i,d,o){const h=oh(u,f),g=o??c.createBuffer({size:u.size,usage:i,label:d});return c.queue.writeBuffer(g,0,h),g}const sh=uc([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function fh(c,u,f,i){const d={maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps>>>0,numberOfTerrainColors:(f?.length??0)>>>0,_padT0:[0,0]};return ic(c,sh,d,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function dh(c,u,f){{const i=c.createBuffer({label:"Terrain Colors Buffer",size:u.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return c.queue.writeBuffer(i,0,hh(u)),i}}function hh(c){const u=[];for(let f of c){/^#([0-9a-fA-F]{3})$/.test(f)&&(f=f.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=f.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const d=i[1],o=parseInt(d.slice(0,2),16)/255,h=parseInt(d.slice(2,4),16)/255,g=parseInt(d.slice(4,6),16)/255;u.push(o,h,g,1)}return new Float32Array(u)}const mh=uc([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"simIndex",type:"u32"},{name:"showDebug",type:"u32"},{name:"pixelScale",type:"u32"}]);function o2(c,u,f){const i={size:[u.width,u.height],time:u.time,simIndex:u.simIndex,showDebug:u.showDebug?1:0,pixelScale:u.pixelScale};return ic(c,mh,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",f)}const ph=uc([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"visibleRect",type:"vec4u"}]);function s2(c,u,f){const i={mousePos:[u.mousePos.x,u.mousePos.y],mouse0Held:u.mouse0Held?1:0,mouse1Held:u.mouse1Held?1:0,mouseRadius:u.mouseRadius,visibleRect:[u.visibleRect.x0,u.visibleRect.y0,u.visibleRect.x1,u.visibleRect.y1]};return ic(c,ph,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",f)}function gh(c,u,f,i){const d={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},currentCells:{binding:3,type:"storage",buffer:i.prevCellsBuffer},nextCells:{binding:4,type:"storage",buffer:i.nextCellsBuffer},terrainColors:{binding:5,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:6,type:"storage",buffer:i.outputTextureBuffer},cursorQuery:{binding:7,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:8,type:"storage",buffer:i.chunkDataBuffer},sprites:{binding:9,type:"read-only-storage",buffer:i.spriteDataBuffer}},o=c.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(d).filter(G=>!["sprite","spriteColors"].includes(G)).map(G=>({binding:d[G].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:d[G].type}}))}),h=c.createBindGroup({label:"Unified Compute BG A",layout:o,entries:Object.keys(d).map(G=>G==="currentCells"?{binding:d.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:G==="nextCells"?{binding:d.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:{binding:d[G].binding,resource:{buffer:d[G].buffer}})}),g=c.createBindGroup({label:"Unified Compute BG show B",layout:o,entries:Object.keys(d).map(G=>G==="currentCells"?{binding:d.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:G==="nextCells"?{binding:d.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:{binding:d[G].binding,resource:{buffer:d[G].buffer}})}),y=c.createBindGroupLayout({label:"Render BGL",entries:[{binding:d.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:d.uView.type}},{binding:d.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:d.uInput.type}},{binding:d.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:d.outputTex.type}}]}),p=c.createRenderPipeline({label:"Render Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[y],label:"Render Pipeline Layout"}),vertex:{module:u,entryPoint:"vs"},fragment:{module:u,entryPoint:"fs",targets:[{format:f}]},primitive:{topology:"triangle-list"}}),v=c.createComputePipeline({label:"Normal Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Normal Compute Pipeline Layout"}),compute:{module:u,entryPoint:"calc_normals"}}),b=c.createComputePipeline({label:"Cursor Query Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Cursor Query Pipeline Layout"}),compute:{module:u,entryPoint:"cursor_query"}}),_=c.createComputePipeline({label:"Total Query Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Total Query Pipeline Layout"}),compute:{module:u,entryPoint:"total_query"}}),T=c.createComputePipeline({label:"Chunk Data Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Chunk Data Pipeline Layout"}),compute:{module:u,entryPoint:"chunk_data_calc"}}),E=c.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"terrain_render"}}),k=c.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"shadow_render"}}),U=c.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"fluid_render"}}),j=c.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"debug_render"}}),Y=c.createComputePipeline({label:"Sprite Render Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Sprite Render Compute Pipeline Layout"}),compute:{module:u,entryPoint:"sprite_render"}}),X=c.createComputePipeline({label:"Step Compute Pipeline",layout:c.createPipelineLayout({bindGroupLayouts:[o],label:"Step Compute Pipeline Layout"}),compute:{module:u,entryPoint:"step"}}),K=c.createBindGroup({label:"Render BG",layout:y,entries:[{binding:d.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:d.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:d.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:p,normalComputePipeline:v,cursorQueryPipeline:b,totalQueryPipeline:_,chunkDataPipeline:T,terrainTextureComputePipeline:E,shadowTextureComputePipeline:k,fluidTextureComputePipeline:U,debugTextureComputePipeline:j,spriteRenderComputePipeline:Y,stepComputePipeline:X},bindGroups:{unifiedComputeBG_A:h,unifiedComputeBG_B:g,renderBG:K}}}function yh(c,u){return c.mouse0Held===u.mouse0Held&&c.mouse1Held===u.mouse1Held&&c.mouse2Held===u.mouse2Held&&c.mouseRadius===u.mouseRadius&&c.mouseMoved===u.mouseMoved&&c.cursorVisible===u.cursorVisible&&c.mousePosition.x===u.mousePosition.x&&c.mousePosition.y===u.mousePosition.y&&c.visibleRect.x0===u.visibleRect.x0&&c.visibleRect.y0===u.visibleRect.y0&&c.visibleRect.x1===u.visibleRect.x1&&c.visibleRect.y1===u.visibleRect.y1&&c.visibleRect.width===u.visibleRect.width&&c.visibleRect.height===u.visibleRect.height&&c.visibleRectChanged===u.visibleRectChanged&&c.simulationSubSteps===u.simulationSubSteps}const vh={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouseRadius:30,mouseMoved:!1,cursorVisible:!0,mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class xh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(u){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(u);const f=u-this.winMs;for(;this.times.length&&this.times[0]<f;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const ir=new xh;async function bh(c){const u=new Image;u.crossOrigin="anonymous",u.decoding="async",u.src=c,await u.decode();const f=await createImageBitmap(u),d=new OffscreenCanvas(f.width,f.height).getContext("2d",{willReadFrequently:!0});d.drawImage(f,0,0);const{data:o,width:h,height:g}=d.getImageData(0,0,f.width,f.height),y=new Uint8Array(o.buffer.slice(0));return f.close(),{width:h,height:g,data:y}}function _h(c){if(c.length%4!==0)throw new Error("RGBA length must be multiple of 4");const u=c.length/4,f=new Uint32Array(u);for(let i=0,d=0;d<u;i+=4,d++){const o=c[i+0],h=c[i+1],g=c[i+2],y=c[i+3];f[d]=y<<24|g<<16|h<<8|o}return f}async function Sh(c){const{width:u,height:f,data:i}=await bh(c);return{width:u,height:f,data:_h(i)}}async function Ch(c,u=wu,f,i,d,o){if(!c)return()=>{};c.__wgpuCleanup&&c.__wgpuCleanup();const h=!1;var g=!0,y=!0,p=!0;const v=await hd(),b=c.getContext("webgpu"),_=navigator.gpu.getPreferredCanvasFormat();c.style.imageRendering="pixelated",b.__deviceId=v.__id,c.width=u.width*u.pixelScale,c.height=u.height*u.pixelScale,b.configure({device:v,format:_,alphaMode:"opaque"});let T=Gd();const E=v.createShaderModule({label:"Rect Shader",code:T});var k=0,U=0,j=0,Y=h;const X=()=>{Y=!Y},K=Oe=>{Y=Oe},G=o2(v,{width:u.width,height:u.height,time:0,simIndex:0,showDebug:Y,pixelScale:u.pixelScale});function Q(){o2(v,{width:u.width,height:u.height,time:k,simIndex:j,showDebug:Y,pixelScale:u.pixelScale},G)}const V=f(),ee=s2(v,{mousePos:V.mousePosition,mouse0Held:V.mouse0Held,mouse1Held:V.mouse1Held,mouseRadius:V.mouseRadius,visibleRect:V.visibleRect}),te=fh(v,{maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps},u.colors),he=dh(v,u.colors);function _e(Oe,Ae,ct){const Xe=Math.ceil(Oe/ct),I=Math.ceil(Ae/ct);return[Xe,I]}const ae=16,[ye,ze]=_e(u.width,u.height,ae),pe=v.createBuffer({label:"Chunk Data",size:16*ye*ze,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(pe,0,new Float32Array(4*ye*ze));function B(Oe){s2(v,{mousePos:Oe.mousePosition,mouse0Held:Oe.mouse0Held,mouse1Held:Oe.mouse1Held,mouseRadius:Oe.mouseRadius,visibleRect:Oe.visibleRect},ee)}const $=u.width*u.height*4*4,re=u.width*u.height*4*u.pixelScale*u.pixelScale,x=v.createBuffer({label:"Output Texture",size:$+re,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(x,0,new Float32Array(($+re)/4));const M=["./sprites/Tower.png","./sprites/16bit_tree.png","./sprites/top_down_tree.png"],N=await Promise.all(M.map(async(Oe,Ae)=>{const{width:ct,height:Xe,data:I}=await Sh(Oe);return{path:Oe,width:ct,height:Xe,data:I,index:Ae}}));let L=0;for(let Oe=0;Oe<N.length;Oe++)N[Oe]={...N[Oe],colorStart:L},L+=N[Oe].width*N[Oe].height;const F=64,ce=F*F,ue=4,He=ue+ce,De=He*4,je=N.length,bt=v.createBuffer({label:"Sprite Data",size:je*De,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),nt=new Uint32Array(je*He);for(let Oe=0;Oe<je;Oe++){const Ae=N[Oe],ct=Oe*He;nt[ct+0]=Ae.width>>>0,nt[ct+1]=Ae.height>>>0,nt[ct+2]=(Ae.colorStart??0)>>>0,nt[ct+3]=0;const Xe=Ae.data,I=Math.min(ce,Xe.length);for(let Vt=0;Vt<I;Vt++)nt[ct+ue+Vt]=Xe[Vt]>>>0}v.queue.writeBuffer(bt,0,nt);const Rt=12,Dn=4*Rt,un=u.width*u.height*Dn,ne=v.createBuffer({label:"Prev Cells",size:un,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),me=v.createBuffer({label:"Next Cells",size:un,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ge=Oe=>{const Ae=new Float32Array(u.width*u.height*Rt),ct=md(Oe,u.width,u.height,u.noiseType,u.fractalOctaves,u.fractalLacunarity,u.fractalGain,u.fractalType,u.frequency);for(let Xe=0;Xe<ct.length;Xe++){const I=Xe*Rt;Ae[I]=ct[Xe]*100,Ae[I+8]=Math.floor(Math.random()*8)+0}v.queue.writeBuffer(ne,0,Ae),v.queue.writeBuffer(me,0,Ae),U=0,j=0,y=!0};var Qe=u.seed;const Ye=()=>{ge(Qe)},$e=()=>{Qe=Math.ceil(Math.random()*1e9),Ye()};Ye();const rt=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),pt=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),be=gh(v,E,_,{prevCellsBuffer:ne,nextCellsBuffer:me,terrainBuffer:te,terrainColorsBuffer:he,viewUniformBuffer:G,inputUniformBuffer:ee,outputTextureBuffer:x,cursorQueryBuffer:rt,chunkDataBuffer:pe,spriteDataBuffer:bt}),cn={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},$n=16,Jt=16,Ke=Math.ceil(u.width/$n),gt=Math.ceil(u.height/Jt);let Be=!0,ra=0;var or=f();let vl=!1;function Fn(Oe=0){if(b.__deviceId!==v.__id)return;ir.begin();var Ae=f();yh(Ae,or)||(B(Ae),or=Ae);const ct=U%6===0;v.pushErrorScope("validation"),k=Oe*.001,Q();const Xe=v.createCommandEncoder({label:"Encoder"});{const I=Xe.beginComputePass({label:"Step Compute Pass"});I.setPipeline(be.piplines.stepComputePipeline);for(let Vt=0;Vt<Ae.simulationSubSteps;Vt++)I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(Ke,gt,1),Be=!Be,j++,Q();o(j),I.end()}if((U===0||Ae.mouse0Held||Ae.mouse1Held)&&(p=!0),U<60&&(y=!0,g=!0),Ae.visibleRectChanged&&(p=!0),p=!0,g||y){const I=Xe.beginComputePass({label:"Normal Compute Pass"});I.setPipeline(be.piplines.normalComputePipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(Ke,gt,1),I.end()}if(y){const I=Xe.beginComputePass({label:"Terrain Texture Compute Pass"});I.setPipeline(be.piplines.terrainTextureComputePipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(Ke,gt,1),I.end()}if(p||y){const I=Xe.beginComputePass({label:"Shadow Texture Compute Pass"});I.setPipeline(be.piplines.shadowTextureComputePipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(Ke,gt,1),I.end(),Ae={...Ae,visibleRectChanged:!1}}if(p||y){const I=Xe.beginComputePass({label:"Fluid Texture Compute Pass"});I.setPipeline(be.piplines.fluidTextureComputePipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(Ke,gt,1),I.end(),Ae={...Ae,visibleRectChanged:!1}}if(U%10==0&&Y){const I=Xe.beginComputePass({label:"Debug Texture Compute Pass"});I.setPipeline(be.piplines.debugTextureComputePipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(Ke,gt,1),I.end()}if(U%10==0){const I=Xe.beginComputePass({label:"Sprite Render Compute Pass"});I.setPipeline(be.piplines.spriteRenderComputePipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(1,1,1),I.end()}if(ct){const I=Xe.beginComputePass({label:"Cursor Query Pass"});I.setPipeline(be.piplines.cursorQueryPipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(1,1,1),I.end()}if(U%60==0){const I=Xe.beginComputePass({label:"Total Query Pass"});I.setPipeline(be.piplines.totalQueryPipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(1,1,1),I.end()}{const I=Xe.beginComputePass({label:"Chunk Data Pass"});I.setPipeline(be.piplines.chunkDataPipeline),I.setBindGroup(0,Be?be.bindGroups.unifiedComputeBG_A:be.bindGroups.unifiedComputeBG_B),I.dispatchWorkgroups(ye,ze,1),I.end()}cn.colorAttachments[0].view=b.getCurrentTexture().createView();{const I=Xe.beginRenderPass(cn);I.setPipeline(be.piplines.renderPipeline),I.setBindGroup(0,be.bindGroups.renderBG),I.draw(3),I.end()}ct&&!vl&&Xe.copyBufferToBuffer(rt,0,pt,0,64),v.queue.submit([Xe.finish()]),v.popErrorScope().then(I=>{I&&console.error(I.message)}),ct&&!vl&&(vl=!0,pt.mapAsync(GPUMapMode.READ).then(()=>{const I=new DataView(pt.getMappedRange(0,64)),Vt=I.getFloat32(0,!0),el=I.getFloat32(16,!0),Mu=I.getFloat32(20,!0),sr=I.getFloat32(24,!0),fr=I.getFloat32(28,!0),ua=I.getFloat32(48,!0),ia=I.getFloat32(52,!0),dr=I.getUint32(56,!0);d({height:Vt,normal:{x:el,y:Mu,z:sr},fAmount:fr,fluidTotal:ua,antiFluidTotal:ia,chunkUpdates:dr})}).catch(()=>{}).finally(()=>{pt.unmap(),vl=!1})),y=!1,p=!1,g=!1,ir.end(Oe),U++,ra=requestAnimationFrame(Fn)}ra=requestAnimationFrame(Fn);const In=()=>{cancelAnimationFrame(ra),G.destroy(),ee.destroy(),te.destroy(),he.destroy(),ne.destroy(),me.destroy(),x.destroy()};return c.__wgpuCleanup=In,{cleanup:In,resetMap:Ye,randomizeMap:$e,toggleShowDebug:X,setShowDebug:K}}const Th=W.forwardRef(({noiseSettings:c=wu,inputRef:u,setInput:f,setWebGPUHandle:i,setCursorQuery:d,style:o,setSimIndex:h,children:g},y)=>{const p=W.useRef(null);return W.useImperativeHandle(y,()=>p.current,[]),W.useEffect(()=>{if(!p.current)return;let v=()=>{};return(async()=>{const b=await Ch(p.current,c,()=>u.current,f,d,h);v=b.cleanup,i(b)})(),()=>v?.()},[c,f,i,d]),C.jsx("canvas",{ref:p,style:{...o,display:"block",width:"100%",height:"100%"},children:g})}),Rh=Je.memo(Th,(c,u)=>c.noiseSettings===u.noiseSettings&&c.children===u.children),Dh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function zh({cursorQuery:c}){var o=Math.ceil(c.height),h=Math.abs(c.fAmount<0?Math.floor(c.fAmount):Math.ceil(c.fAmount));h+o>200&&(h=200-o);const g=o/200*150,y=h/200*150;var p="";return h>0&&(Math.abs(c.fAmount)<1?p=" < 1":p=`${h}`),C.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[C.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),C.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:c.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"0px"},children:C.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:p})}),C.jsx("div",{style:{width:"50px",height:`${g}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:C.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:c.height>0?`${o}`:""})})]})}function Oh({input:c}){return C.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${c.mousePosition.x}, ${c.mousePosition.y})`})}const Ie=({children:c})=>C.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:c});function wh(){return C.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:C.jsx(en,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:C.jsxs(en.Body,{style:{padding:"0.9rem 1rem"},children:[C.jsx(en.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),C.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[C.jsxs("div",{children:[C.jsx(Ie,{children:"F11"})," — Toggle Fullscreen"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"F9"})," — Toggle Controls"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"F8"})," — Toggle Debug Stats"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"W"}),C.jsx(Ie,{children:"A"}),C.jsx(Ie,{children:"S"}),C.jsx(Ie,{children:"D"})," or ",C.jsx(Ie,{children:"←"}),C.jsx(Ie,{children:"→"}),C.jsx(Ie,{children:"↑"}),C.jsx(Ie,{children:"↓"})," — Pan Camera"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"ScrollWheel"})," — Zoom"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"Shift"})," +"," ",C.jsx(Ie,{children:"ScrollWheel"})," — Change Brush Radius"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"LMB"}),"/",C.jsx(Ie,{children:"RMB"})," — (Paint / Remove) Fluid"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"Spacebar"})," — Toggle Pause"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"Tab"})," / ",C.jsx(Ie,{children:"Shift"}),"+",C.jsx(Ie,{children:"Tab"})," — Increase / Decrease Speed"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"C"})," — Clear Map"]}),C.jsxs("div",{children:[C.jsx(Ie,{children:"R"})," — Randmoize Map"]})]})]})})})}var Mh=["color","size","title","className"];function W0(){return W0=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(c[i]=f[i])}return c},W0.apply(null,arguments)}function Ah(c,u){if(c==null)return{};var f,i,d=Eh(c,u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);for(i=0;i<o.length;i++)f=o[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(c,f)&&(d[f]=c[f])}return d}function Eh(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)!==-1)continue;f[i]=c[i]}return f}var j2=W.forwardRef(function(c,u){var f=c.color,i=f===void 0?"currentColor":f,d=c.size,o=d===void 0?"1em":d,h=c.title,g=h===void 0?null:h,y=c.className,p=y===void 0?"":y,v=Ah(c,Mh);return Je.createElement("svg",W0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:i,className:["bi","bi-flower1",p].filter(Boolean).join(" ")},v),g?Je.createElement("title",null,g):null,Je.createElement("path",{d:"M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"}))});j2.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number]),title:ve.string,className:ve.string};var Vh=["color","size","title","className"];function J0(){return J0=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(c[i]=f[i])}return c},J0.apply(null,arguments)}function Hh(c,u){if(c==null)return{};var f,i,d=Bh(c,u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);for(i=0;i<o.length;i++)f=o[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(c,f)&&(d[f]=c[f])}return d}function Bh(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)!==-1)continue;f[i]=c[i]}return f}var Y2=W.forwardRef(function(c,u){var f=c.color,i=f===void 0?"currentColor":f,d=c.size,o=d===void 0?"1em":d,h=c.title,g=h===void 0?null:h,y=c.className,p=y===void 0?"":y,v=Hh(c,Vh);return Je.createElement("svg",J0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:i,className:["bi","bi-hammer",p].filter(Boolean).join(" ")},v),g?Je.createElement("title",null,g):null,Je.createElement("path",{d:"M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334"}))});Y2.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number]),title:ve.string,className:ve.string};var Gh=["color","size","title","className"];function $0(){return $0=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(c[i]=f[i])}return c},$0.apply(null,arguments)}function Uh(c,u){if(c==null)return{};var f,i,d=jh(c,u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);for(i=0;i<o.length;i++)f=o[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(c,f)&&(d[f]=c[f])}return d}function jh(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)!==-1)continue;f[i]=c[i]}return f}var X2=W.forwardRef(function(c,u){var f=c.color,i=f===void 0?"currentColor":f,d=c.size,o=d===void 0?"1em":d,h=c.title,g=h===void 0?null:h,y=c.className,p=y===void 0?"":y,v=Uh(c,Gh);return Je.createElement("svg",$0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:i,className:["bi","bi-house-fill",p].filter(Boolean).join(" ")},v),g?Je.createElement("title",null,g):null,Je.createElement("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"}),Je.createElement("path",{d:"m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"}))});X2.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number]),title:ve.string,className:ve.string};var Yh=["color","size","title","className"];function F0(){return F0=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(c[i]=f[i])}return c},F0.apply(null,arguments)}function Xh(c,u){if(c==null)return{};var f,i,d=kh(c,u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);for(i=0;i<o.length;i++)f=o[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(c,f)&&(d[f]=c[f])}return d}function kh(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)!==-1)continue;f[i]=c[i]}return f}var k2=W.forwardRef(function(c,u){var f=c.color,i=f===void 0?"currentColor":f,d=c.size,o=d===void 0?"1em":d,h=c.title,g=h===void 0?null:h,y=c.className,p=y===void 0?"":y,v=Xh(c,Yh);return Je.createElement("svg",F0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:i,className:["bi","bi-pause-fill",p].filter(Boolean).join(" ")},v),g?Je.createElement("title",null,g):null,Je.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});k2.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number]),title:ve.string,className:ve.string};var Nh=["color","size","title","className"];function I0(){return I0=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(c[i]=f[i])}return c},I0.apply(null,arguments)}function qh(c,u){if(c==null)return{};var f,i,d=Lh(c,u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);for(i=0;i<o.length;i++)f=o[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(c,f)&&(d[f]=c[f])}return d}function Lh(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)!==-1)continue;f[i]=c[i]}return f}var N2=W.forwardRef(function(c,u){var f=c.color,i=f===void 0?"currentColor":f,d=c.size,o=d===void 0?"1em":d,h=c.title,g=h===void 0?null:h,y=c.className,p=y===void 0?"":y,v=qh(c,Nh);return Je.createElement("svg",I0({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:i,className:["bi","bi-play-fill",p].filter(Boolean).join(" ")},v),g?Je.createElement("title",null,g):null,Je.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});N2.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number]),title:ve.string,className:ve.string};var Zh=["color","size","title","className"];function ec(){return ec=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(c[i]=f[i])}return c},ec.apply(null,arguments)}function Ph(c,u){if(c==null)return{};var f,i,d=Qh(c,u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);for(i=0;i<o.length;i++)f=o[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(c,f)&&(d[f]=c[f])}return d}function Qh(c,u){if(c==null)return{};var f={};for(var i in c)if({}.hasOwnProperty.call(c,i)){if(u.indexOf(i)!==-1)continue;f[i]=c[i]}return f}var q2=W.forwardRef(function(c,u){var f=c.color,i=f===void 0?"currentColor":f,d=c.size,o=d===void 0?"1em":d,h=c.title,g=h===void 0?null:h,y=c.className,p=y===void 0?"":y,v=Ph(c,Zh);return Je.createElement("svg",ec({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:i,className:["bi","bi-shield-fill",p].filter(Boolean).join(" ")},v),g?Je.createElement("title",null,g):null,Je.createElement("path",{d:"M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"}))});q2.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number]),title:ve.string,className:ve.string};const Et=[.25,.5,1,2,3,4,8],L2=(c,u,f)=>Math.min(f,Math.max(u,c));function Kh(c,u=!0){if(u){var f=(Et.indexOf(c)+1)%Et.length;return Et[f]}else{var f=L2(Et.indexOf(c)+1,0,Et.length-1);return Et[f]}}function Wh(c,u=!0){if(u){var f=(Et.indexOf(c)-1+Et.length)%Et.length;return Et[f]}else{var f=L2(Et.indexOf(c)-1,0,Et.length-1);return Et[f]}}function Jh({gameSpeed:c,paused:u,onChange:f,className:i,size:d}){const o=p=>f({paused:!1,gameSpeed:p}),h=()=>f({paused:!u,gameSpeed:c}),y={backgroundColor:"rgba(99, 99, 99, 0.57)",border:"4px solid white",borderRadius:0,fontSize:"20px",width:40,height:40,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none"};return C.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:C.jsxs(nc,{className:`${i} rounded-0`,size:d,style:{border:"none"},children:[C.jsx(aa,{type:"button",variant:"primary",onClick:h,"aria-pressed":u,"aria-label":u?"Resume":"Pause",title:u?"Resume":"Pause",style:y,children:u?C.jsx(N2,{}):C.jsx(k2,{})}),Et.map(p=>C.jsx(aa,{type:"button",variant:c===p&&!u?"primary":"outline-secondary",active:c===p&&!u,onClick:()=>o(p),"aria-pressed":c===p&&!u,"aria-label":p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,title:p<1?`1/${Math.round(1/p)}x gameSpeed`:`${p}x gameSpeed`,style:{...y,color:c===p&&!u?"white":"darkgray",marginLeft:"-4px",fontSize:p<1?"15px":""},children:p<1?`1/${Math.round(1/p)}x`:`${p}x`},p))]})})}function $h({cursorQuery:c,gameSpeed:u,mode:f="full",simIndex:i}){const[d,o]=W.useState(0),[h,g]=W.useState(0),[y,p]=W.useState(0);W.useEffect(()=>{const T=setInterval(()=>{o(ir.fps),g(ir.cpuMs),p(ir.frameCount)},250);return()=>clearInterval(T)},[]);const v=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),b=`${h.toFixed(2)}`.padStart(5,"0"),_=c.chunkUpdates*16*16*u*4;return f=="simple"?C.jsx("div",{children:`FPS: ${d}`}):C.jsx(en,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:C.jsxs(en.Body,{style:{padding:"0.9rem 1rem"},children:[C.jsxs(en.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",C.jsx(Ie,{children:"F8"})," to close"]}),C.jsx("div",{children:`FPS: ${d} (Frame Duration: ${b} ms) (Frames: ${v.format(y)})`}),C.jsx("div",{children:`Simulation Steps: ${v.format(i)}`}),C.jsx("div",{children:`Chunk Updates: ${v.format(c.chunkUpdates)}`}),C.jsx("div",{children:`Cell Updates per frame: ${v.format(_)}`}),C.jsx("div",{children:`Total Fluid: ${v.format(Math.ceil(c.fluidTotal))}`}),C.jsx("div",{children:`Total Anti Fluid: ${v.format(Math.ceil(c.antiFluidTotal))}`}),C.jsx("div",{children:`Total Combined Fluid: ${v.format(Math.ceil(c.fluidTotal-c.antiFluidTotal))}`})]})})}function Fh({tabs:c,initialActiveKey:u=null,onTabChange:f,panelHeight:i=150,className:d,children:o,closeOnEscape:h=!0,closeOnOutsideClick:g=!0,hotkey:y="b"}){const p=W.useMemo(()=>[{key:"home",icon:C.jsx(X2,{}),label:"Home",hotkey:"1"},{key:"grow",icon:C.jsx(j2,{}),label:"Grow",hotkey:"2"},{key:"build",icon:C.jsx(Y2,{}),label:"Build",hotkey:"3"},{key:"defend",icon:C.jsx(q2,{}),label:"Defend",hotkey:"4"}],[]),v=c?.length?c:p,[b,_]=W.useState(u),T=W.useRef(null),[E,k]=W.useState(u),U=V=>{const ee=b===V?null:V;_(ee),f?.(ee),ee!=null&&k(ee)},j=()=>{E!=null&&U(E)},Y=()=>{_(null),f?.(null)},X=48,K=44,G=44,Q=2.5;return W.useEffect(()=>{if(!g)return;const V=ee=>{if(!b)return;const te=ee.target;if(!te)return;const he=T.current;he&&(he.contains(te)||(_(null),f?.(null)))};return window.addEventListener("pointerdown",V,!0),()=>window.removeEventListener("pointerdown",V,!0)},[b,g,f]),W.useEffect(()=>{const V=ee=>{ee.key==="Escape"&&b?Y():ee.key===y?b?b&&Y():j():v.forEach(te=>{ee.key==te.hotkey&&U(te.key)})};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[b,h,f]),C.jsxs(C.Fragment,{children:[C.jsx("style",{children:`
        .tabButton:hover
        {
            height: ${G+4}px;
        }
      `}),C.jsx("div",{className:d,style:{position:"absolute",left:0,right:0,bottom:0,pointerEvents:"none",zIndex:10},children:C.jsxs("div",{ref:T,style:{position:"absolute",left:0,right:0,bottom:0,height:i+X,transform:b?"translateY(0)":`translateY(${i}px)`,transition:"transform 220ms ease",display:"flex",flexDirection:"column",pointerEvents:"none"},children:[C.jsx("div",{style:{height:X,display:"flex",justifyContent:"start",alignItems:"flex-end",gap:8,padding:"0 12px",paddingLeft:"100px",borderTopLeftRadius:16,borderTopRightRadius:16},children:C.jsx(nc,{style:{display:"inline-flex",alignItems:"flex-end",pointerEvents:"auto"},onMouseDown:V=>V.preventDefault(),children:v.map(V=>{const ee=b===V.key;return C.jsx(aa,{className:"tabButton",onClick:()=>!V.disabled&&U(V.key),disabled:V.disabled,style:{borderTop:"solid white 4px",borderLeft:"solid white 4px",borderRight:"solid white 4px",borderBottom:"none",borderRadius:"0px 0px 0px 0px",width:K,height:ee?G*2:G,margin:`0px ${Q}px`,backgroundColor:"rgba(0,0,0,.35)",background:"none",display:"inline-flex",alignItems:"flex-start",outline:"none !important"},"aria-label":V.label,title:V.label,children:C.jsx("span",{style:{fontSize:15,lineHeight:0},children:V.icon})},V.key)})})}),C.jsx(en,{text:"light",style:{height:i,borderRadius:0,margin:0,boxShadow:b?"0 -6px 18px rgba(0,0,0,.45)":"none",pointerEvents:b?"auto":"none",backgroundColor:"rgba(46, 44, 44, 0.51)",borderTop:"solid white 4px"},children:C.jsx(en.Body,{style:{display:"flex",gap:12,alignItems:"stretch",justifyContent:"flex-start",padding:12},children:b?v.find(V=>V.key===b)?.content??C.jsxs("div",{style:{opacity:.8,fontSize:14},children:[C.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",C.jsx("b",{children:b})," ","tab."]}),C.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]}):C.jsx("div",{style:{opacity:.65},children:"Choose a tab to open the menu."})})}),C.jsx("div",{style:{position:"relative",bottom:i},children:o})]})})]})}function Ih({settings:c,setSettings:u,input:f,setInput:i,cursorQuery:d,paused:o,setPaused:h,gameSpeed:g,setGameSpeed:y,simIndex:p,showControlsUI:v,showDebugUI:b}){return C.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[C.jsx("div",{id:"output"}),v&&C.jsx(wh,{}),C.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:C.jsx($h,{cursorQuery:d,gameSpeed:g,simIndex:p,mode:b?"full":"simple"})}),C.jsxs(Fh,{children:[C.jsx(Oh,{input:f}),C.jsx(Jh,{gameSpeed:g,paused:o,onChange:({paused:_,gameSpeed:T})=>{h(_),y(T),i({...f,simulationSubSteps:_?0:Math.ceil(4*T)})}}),C.jsx(zh,{cursorQuery:d})]})]})}const em=c=>{const u=c;if(!u)return!1;const f=u.tagName?.toLowerCase();return f==="input"||f==="textarea"||u.isContentEditable||f==="select"},Tn=(c,u,f)=>Math.min(f,Math.max(u,c)),f2=(c,u,f,i)=>{const d=Math.max(0,(f-c)/2),o=Math.max(0,(i-u)/2);return{xMin:-d,xMax:d,yMin:-o,yMax:o}};function tm(){const[c,u]=W.useState(wu),[f,i]=Je.useState(!1),[d,o]=Je.useState(1),[h,g]=W.useState(0),[y,p]=W.useState(!0),[v,b]=W.useState(!1),[_,T]=W.useState(vh),E=W.useRef(_);W.useEffect(()=>{E.current=_},[_]);const[k,U]=W.useState(Dh),j=W.useRef(null),[Y,X]=W.useState({width:1920,height:1080}),[K,G]=W.useState({x:0,y:0}),[Q,V]=W.useState(!1),[ee,te]=W.useState(2),[he,_e]=W.useState(null),ae=W.useRef(null);W.useEffect(()=>{ae.current=he},[he]);const ye=W.useRef(null),ze=W.useCallback(($,re,x,M=!1)=>{const N=j.current;if(!N)return;const L=$!==void 0&&re!==void 0?{x:$,y:re}:ye.current;if(!L)return;const F=N.getBoundingClientRect();if(F.width===0||F.height===0)return;const ce=N.width/c.pixelScale/F.width,ue=N.height/c.pixelScale/F.height,He=Math.floor((L.x-F.left)*ce),De=Math.floor((L.y-F.top)*ue);T(je=>{const bt=Tn(He,0,c.width-1),nt=Tn(De,0,c.height-1);return!M&&je.mousePosition.x===bt&&je.mousePosition.y===nt?je:{...je,mousePosition:{x:bt,y:nt},mouseMoved:M,cursorVisible:x==null||x==j.current}})},[c.width,c.height,c.pixelScale]),pe=W.useCallback(($,re)=>{const x=j.current;if(!x)return{x:0,y:0};const M={x:$,y:re},N=x.getBoundingClientRect();if(N.width===0||N.height===0)return{x:0,y:0};const L=x.width/c.pixelScale/N.width,F=x.height/c.pixelScale/N.height,ce=Math.floor((M.x-N.left)*L),ue=Math.floor((M.y-N.top)*F),He=Tn(ce,0,c.width-1),De=Tn(ue,0,c.height-1);return{x:He,y:De}},[c.width,c.height,c.pixelScale]);W.useEffect(()=>{const $=new Set;let re=0,x=performance.now();const M=600;ae.current?.setShowDebug(v);const N=()=>{const ne=window.innerWidth,me=window.innerHeight,ge=c.width/c.height;let Qe=ne,Ye=Qe/ge;return Ye<me&&(Ye=me,Qe=Ye*ge),{vw:ne,vh:me,baseW:Qe,baseH:Ye}},L=()=>{const{vw:ne,baseW:me}=N();return ne/me},F=ne=>{if(em(ne.target))return;const me=ne.key.toLowerCase();(me==="w"||me==="a"||me==="s"||me==="d"||me==="arrowup"||me==="arrowleft"||me==="arrowdown"||me==="arrowright")&&($.add(me),ne.preventDefault());const ge=()=>{i($e=>{let rt=!$e;return T(pt=>({...pt,simulationSubSteps:rt?0:Math.ceil(4*d)})),rt}),ne.preventDefault()},Qe=()=>{o($e=>{let rt=Kh($e,!1);return T(pt=>({...pt,simulationSubSteps:f?0:Math.ceil(4*rt)})),rt}),ne.preventDefault()},Ye=()=>{o($e=>{let rt=Wh($e,!1);return T(pt=>({...pt,simulationSubSteps:f?0:Math.ceil(4*rt)})),rt}),ne.preventDefault()};ne.code=="Space"?ge():ne.code=="Tab"?(f?ge():ne.shiftKey?Ye():Qe(),ne.preventDefault()):ne.code=="F9"?(p($e=>!$e),ne.preventDefault()):ne.code=="F8"?(b($e=>(ae.current?.setShowDebug(!$e),!$e)),ne.preventDefault()):ne.code=="KeyC"?(ae.current?.resetMap(),ne.preventDefault()):!ne.ctrlKey&&ne.code=="KeyR"&&(ae.current?.randomizeMap(),ne.preventDefault())},ce=ne=>{const me=ne.key.toLowerCase();$.delete(me)};function ue(ne,me,ge,Qe){const Ye=Math.max(ne/ge,me/Qe),$e=Math.min(ne*4/ge,me*4/Qe);return{minScale:Ye,maxScale:$e}}function He(){const ne=window.innerWidth,me=window.innerHeight,ge=c.width/c.height;let Qe=ne,Ye=Qe/ge;Ye<me&&(Ye=me,Qe=Ye*ge);const{minScale:$e,maxScale:rt}=ue(ne,me,Qe,Ye),pt=Math.min(Math.max(ee,$e),rt),be=Qe*pt,cn=Ye*pt,{xMin:$n,xMax:Jt,yMin:Ke,yMax:gt}=f2(ne,me,be,cn);X({width:be,height:cn}),G(Be=>({x:Tn(Be.x,$n,Jt),y:Tn(Be.y,Ke,gt)})),requestAnimationFrame(()=>ze()),J()}const De=ne=>{let me=0,ge=0;if(($.has("w")||$.has("arrowup"))&&(ge-=1),($.has("s")||$.has("arrowdown"))&&(ge+=1),($.has("a")||$.has("arrowleft"))&&(me-=1),($.has("d")||$.has("arrowright"))&&(me+=1),me!==0||ge!==0){const Qe=Math.hypot(me,ge)||1;me/=Qe,ge/=Qe;const Ye=window.innerWidth,$e=window.innerHeight,rt=Y.width,pt=Y.height,{xMin:be,xMax:cn,yMin:$n,yMax:Jt}=f2(Ye,$e,rt,pt);G(Ke=>({x:Tn(Ke.x-me*M*ee*ne,be,cn),y:Tn(Ke.y-ge*M*ee*ne,$n,Jt)})),requestAnimationFrame(()=>ze()),J()}};function je(ne){ne.preventDefault();const me=Math.sign(ne.deltaY)*-1;if(ne.shiftKey)T(ge=>{const Qe=.1*ge.mouseRadius*me,Ye=Math.min(Math.max(5,ge.mouseRadius+Qe),c.width/2);return{...ge,mouseRadius:Ye}});else{const ge=L(),Qe=4;te(Ye=>Tn(Ye+.1*Ye*me,ge,Qe))}}function bt(ne){ye.current={x:ne.clientX,y:ne.clientY},ze(ne.clientX,ne.clientY,ne.target,!0)}const nt=ne=>{ne.button===2&&ne.preventDefault(),T(me=>{const ge={...me};return ne.button===0&&(ge.mouse0Held=!0),ne.button===2&&(ge.mouse1Held=!0),ge})},Rt=ne=>{T(me=>{const ge={...me};return ne.button===0&&(ge.mouse0Held=!1),ne.button===2&&(ge.mouse1Held=!1),ge})};function Dn(ne){ne.preventDefault()}const un=async ne=>{const me=(ne-x)/1e3;x=ne,De(me),J(),re=requestAnimationFrame(un)};return window.addEventListener("mousemove",bt),j.current?.addEventListener("mouseup",Rt),window.addEventListener("contextmenu",Dn),j.current?.addEventListener("mousedown",nt),window.addEventListener("keydown",F),window.addEventListener("keyup",ce),j.current?.addEventListener("wheel",je,{passive:!1}),window.addEventListener("resize",He),He(),re=requestAnimationFrame(un),J(),()=>{cancelAnimationFrame(re),window.removeEventListener("mousemove",bt),j.current?.removeEventListener("mouseup",Rt),window.removeEventListener("contextmenu",Dn),j.current?.removeEventListener("mousedown",nt),window.removeEventListener("keydown",F),window.removeEventListener("keyup",ce),j.current?.removeEventListener("wheel",je),window.removeEventListener("resize",He)}},[Y.width,Y.height,ee,f,T,i,d,o,p]);const B=W.useRef(null),J=W.useCallback(($=!0)=>{const re=()=>{if(!j.current)return;const M=pe(0,0),N=pe(window.innerWidth,window.innerHeight),L={x0:M.x,y0:M.y,x1:N.x,y1:N.y,width:N.x-M.x,height:N.y-M.y};!L||B.current&&L.x0===B.current.x0&&L.y0===B.current.y0&&L.x1===B.current.x1&&L.y1===B.current.y1||(B.current=L,T(ce=>({...ce,visibleRect:L,visibleRectChanged:!0})))};$?requestAnimationFrame(re):re()},[T,pe,window.innerWidth,window.innerHeight]);return C.jsx(C.Fragment,{children:C.jsxs("div",{id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[C.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:Y.width,height:Y.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${K.x}px, ${K.y}px, 0)`,transition:Q?"transform 360ms ease-out":"none",willChange:"transform"},children:C.jsx(Rh,{ref:j,noiseSettings:c,inputRef:E,setInput:T,setWebGPUHandle:_e,setCursorQuery:U,setSimIndex:g})}),C.jsx(Ih,{settings:c,setSettings:u,input:_,setInput:$=>{T($)},cursorQuery:k,paused:f,setPaused:i,gameSpeed:d,setGameSpeed:o,simIndex:h,showControlsUI:y,showDebugUI:v})]})})}dd.createRoot(document.getElementById("root")).render(C.jsx(Je.StrictMode,{children:C.jsx(tm,{})}));
