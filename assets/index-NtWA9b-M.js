(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))i(h);new MutationObserver(h=>{for(const c of h)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function f(h){const c={};return h.integrity&&(c.integrity=h.integrity),h.referrerPolicy&&(c.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?c.credentials="include":h.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(h){if(h.ep)return;h.ep=!0;const c=f(h);fetch(h.href,c)}})();function Au(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qc={exports:{}},cr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function n3(){if(Wf)return cr;Wf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(i,h,c){var d=null;if(c!==void 0&&(d=""+c),h.key!==void 0&&(d=""+h.key),"key"in h){c={};for(var p in h)p!=="key"&&(c[p]=h[p])}else c=h;return h=c.ref,{$$typeof:s,type:i,key:d,ref:h!==void 0?h:null,props:c}}return cr.Fragment=u,cr.jsx=f,cr.jsxs=f,cr}var Jf;function l3(){return Jf||(Jf=1,qc.exports=n3()),qc.exports}var b=l3(),Lc={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function a3(){if(Ff)return Ce;Ff=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(x){return x===null||typeof x!="object"?null:(x=_&&x[_]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,H={};function A(x,G,q){this.props=x,this.context=G,this.refs=H,this.updater=q||T}A.prototype.isReactComponent={},A.prototype.setState=function(x,G){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,G,"setState")},A.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function X(){}X.prototype=A.prototype;function O(x,G,q){this.props=x,this.context=G,this.refs=H,this.updater=q||T}var k=O.prototype=new X;k.constructor=O,E(k,A.prototype),k.isPureReactComponent=!0;var Z=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},U=Object.prototype.hasOwnProperty;function N(x,G,q,K,I,fe){return q=fe.ref,{$$typeof:s,type:x,key:G,ref:q!==void 0?q:null,props:fe}}function ue(x,G){return N(x.type,G,void 0,void 0,void 0,x.props)}function ne(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function ge(x){var G={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return G[q]})}var Se=/\/+/g;function re(x,G){return typeof x=="object"&&x!==null&&x.key!=null?ge(""+x.key):G.toString(36)}function _e(){}function Ae(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(_e,_e):(x.status="pending",x.then(function(G){x.status==="pending"&&(x.status="fulfilled",x.value=G)},function(G){x.status==="pending"&&(x.status="rejected",x.reason=G)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function pe(x,G,q,K,I){var fe=typeof x;(fe==="undefined"||fe==="boolean")&&(x=null);var ce=!1;if(x===null)ce=!0;else switch(fe){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(x.$$typeof){case s:case u:ce=!0;break;case v:return ce=x._init,pe(ce(x._payload),G,q,K,I)}}if(ce)return I=I(x),ce=K===""?"."+re(x,0):K,Z(I)?(q="",ce!=null&&(q=ce.replace(Se,"$&/")+"/"),pe(I,G,q,"",function(ie){return ie})):I!=null&&(ne(I)&&(I=ue(I,q+(I.key==null||x&&x.key===I.key?"":(""+I.key).replace(Se,"$&/")+"/")+ce)),G.push(I)),1;ce=0;var xe=K===""?".":K+":";if(Z(x))for(var $=0;$<x.length;$++)K=x[$],fe=xe+re(K,$),ce+=pe(K,G,q,fe,I);else if($=S(x),typeof $=="function")for(x=$.call(x),$=0;!(K=x.next()).done;)K=K.value,fe=xe+re(K,$++),ce+=pe(K,G,q,fe,I);else if(fe==="object"){if(typeof x.then=="function")return pe(Ae(x),G,q,K,I);throw G=String(x),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ce}function j(x,G,q){if(x==null)return x;var K=[],I=0;return pe(x,K,"","",function(fe){return G.call(q,fe,I++)}),K}function J(x){if(x._status===-1){var G=x._result;G=G(),G.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=G)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return Ce.Children={map:j,forEach:function(x,G,q){j(x,function(){G.apply(this,arguments)},q)},count:function(x){var G=0;return j(x,function(){G++}),G},toArray:function(x){return j(x,function(G){return G})||[]},only:function(x){if(!ne(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ce.Component=A,Ce.Fragment=f,Ce.Profiler=h,Ce.PureComponent=O,Ce.StrictMode=i,Ce.Suspense=y,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Y.H.useMemoCache(x)}},Ce.cache=function(x){return function(){return x.apply(null,arguments)}},Ce.cloneElement=function(x,G,q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var K=E({},x.props),I=x.key,fe=void 0;if(G!=null)for(ce in G.ref!==void 0&&(fe=void 0),G.key!==void 0&&(I=""+G.key),G)!U.call(G,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&G.ref===void 0||(K[ce]=G[ce]);var ce=arguments.length-2;if(ce===1)K.children=q;else if(1<ce){for(var xe=Array(ce),$=0;$<ce;$++)xe[$]=arguments[$+2];K.children=xe}return N(x.type,I,void 0,void 0,fe,K)},Ce.createContext=function(x){return x={$$typeof:d,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},Ce.createElement=function(x,G,q){var K,I={},fe=null;if(G!=null)for(K in G.key!==void 0&&(fe=""+G.key),G)U.call(G,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(I[K]=G[K]);var ce=arguments.length-2;if(ce===1)I.children=q;else if(1<ce){for(var xe=Array(ce),$=0;$<ce;$++)xe[$]=arguments[$+2];I.children=xe}if(x&&x.defaultProps)for(K in ce=x.defaultProps,ce)I[K]===void 0&&(I[K]=ce[K]);return N(x,fe,void 0,void 0,null,I)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(x){return{$$typeof:p,render:x}},Ce.isValidElement=ne,Ce.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:J}},Ce.memo=function(x,G){return{$$typeof:g,type:x,compare:G===void 0?null:G}},Ce.startTransition=function(x){var G=Y.T,q={};Y.T=q;try{var K=x(),I=Y.S;I!==null&&I(q,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(se,F)}catch(fe){F(fe)}finally{Y.T=G}},Ce.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Ce.use=function(x){return Y.H.use(x)},Ce.useActionState=function(x,G,q){return Y.H.useActionState(x,G,q)},Ce.useCallback=function(x,G){return Y.H.useCallback(x,G)},Ce.useContext=function(x){return Y.H.useContext(x)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(x,G){return Y.H.useDeferredValue(x,G)},Ce.useEffect=function(x,G,q){var K=Y.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(x,G)},Ce.useId=function(){return Y.H.useId()},Ce.useImperativeHandle=function(x,G,q){return Y.H.useImperativeHandle(x,G,q)},Ce.useInsertionEffect=function(x,G){return Y.H.useInsertionEffect(x,G)},Ce.useLayoutEffect=function(x,G){return Y.H.useLayoutEffect(x,G)},Ce.useMemo=function(x,G){return Y.H.useMemo(x,G)},Ce.useOptimistic=function(x,G){return Y.H.useOptimistic(x,G)},Ce.useReducer=function(x,G,q){return Y.H.useReducer(x,G,q)},Ce.useRef=function(x){return Y.H.useRef(x)},Ce.useState=function(x){return Y.H.useState(x)},Ce.useSyncExternalStore=function(x,G,q){return Y.H.useSyncExternalStore(x,G,q)},Ce.useTransition=function(){return Y.H.useTransition()},Ce.version="19.1.1",Ce}var If;function no(){return If||(If=1,Lc.exports=a3()),Lc.exports}var L=no();const on=Au(L);var Pc={exports:{}},or={},Zc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function r3(){return $f||($f=1,(function(s){function u(j,J){var F=j.length;j.push(J);e:for(;0<F;){var se=F-1>>>1,x=j[se];if(0<h(x,J))j[se]=J,j[F]=x,F=se;else break e}}function f(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var J=j[0],F=j.pop();if(F!==J){j[0]=F;e:for(var se=0,x=j.length,G=x>>>1;se<G;){var q=2*(se+1)-1,K=j[q],I=q+1,fe=j[I];if(0>h(K,F))I<x&&0>h(fe,K)?(j[se]=fe,j[I]=F,se=I):(j[se]=K,j[q]=F,se=q);else if(I<x&&0>h(fe,F))j[se]=fe,j[I]=F,se=I;else break e}}return J}function h(j,J){var F=j.sortIndex-J.sortIndex;return F!==0?F:j.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var y=[],g=[],v=1,_=null,S=3,T=!1,E=!1,H=!1,A=!1,X=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function Z(j){for(var J=f(g);J!==null;){if(J.callback===null)i(g);else if(J.startTime<=j)i(g),J.sortIndex=J.expirationTime,u(y,J);else break;J=f(g)}}function Y(j){if(H=!1,Z(j),!E)if(f(y)!==null)E=!0,U||(U=!0,re());else{var J=f(g);J!==null&&pe(Y,J.startTime-j)}}var U=!1,N=-1,ue=5,ne=-1;function ge(){return A?!0:!(s.unstable_now()-ne<ue)}function Se(){if(A=!1,U){var j=s.unstable_now();ne=j;var J=!0;try{e:{E=!1,H&&(H=!1,O(N),N=-1),T=!0;var F=S;try{t:{for(Z(j),_=f(y);_!==null&&!(_.expirationTime>j&&ge());){var se=_.callback;if(typeof se=="function"){_.callback=null,S=_.priorityLevel;var x=se(_.expirationTime<=j);if(j=s.unstable_now(),typeof x=="function"){_.callback=x,Z(j),J=!0;break t}_===f(y)&&i(y),Z(j)}else i(y);_=f(y)}if(_!==null)J=!0;else{var G=f(g);G!==null&&pe(Y,G.startTime-j),J=!1}}break e}finally{_=null,S=F,T=!1}J=void 0}}finally{J?re():U=!1}}}var re;if(typeof k=="function")re=function(){k(Se)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ae=_e.port2;_e.port1.onmessage=Se,re=function(){Ae.postMessage(null)}}else re=function(){X(Se,0)};function pe(j,J){N=X(function(){j(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(j){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var F=S;S=J;try{return j()}finally{S=F}},s.unstable_requestPaint=function(){A=!0},s.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=S;S=j;try{return J()}finally{S=F}},s.unstable_scheduleCallback=function(j,J,F){var se=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?se+F:se):F=se,j){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=F+x,j={id:v++,callback:J,priorityLevel:j,startTime:F,expirationTime:x,sortIndex:-1},F>se?(j.sortIndex=F,u(g,j),f(y)===null&&j===f(g)&&(H?(O(N),N=-1):H=!0,pe(Y,F-se))):(j.sortIndex=x,u(y,j),E||T||(E=!0,U||(U=!0,re()))),j},s.unstable_shouldYield=ge,s.unstable_wrapCallback=function(j){var J=S;return function(){var F=S;S=J;try{return j.apply(this,arguments)}finally{S=F}}}})(Qc)),Qc}var e2;function u3(){return e2||(e2=1,Zc.exports=r3()),Zc.exports}var Kc={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t2;function i3(){if(t2)return Tt;t2=1;var s=no();function u(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var i={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function c(y,g,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:_==null?null:""+_,children:y,containerInfo:g,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tt.createPortal=function(y,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return c(y,g,null,v)},Tt.flushSync=function(y){var g=d.T,v=i.p;try{if(d.T=null,i.p=2,y)return y()}finally{d.T=g,i.p=v,i.d.f()}},Tt.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(y,g))},Tt.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},Tt.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var v=g.as,_=p(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:_,integrity:S,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tt.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(y)},Tt.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,_=p(v,g.crossOrigin);i.d.L(y,v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tt.preloadModule=function(y,g){if(typeof y=="string")if(g){var v=p(g.as,g.crossOrigin);i.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(y)},Tt.requestFormReset=function(y){i.d.r(y)},Tt.unstable_batchedUpdates=function(y,g){return y(g)},Tt.useFormState=function(y,g,v){return d.H.useFormState(y,g,v)},Tt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tt.version="19.1.1",Tt}var n2;function c3(){if(n2)return Kc.exports;n2=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Kc.exports=i3(),Kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l2;function o3(){if(l2)return or;l2=1;var s=u3(),u=no(),f=c3();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return p(a),e;if(r===l)return p(a),t;r=r.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=r;else{for(var o=!1,m=a.child;m;){if(m===n){o=!0,n=a,l=r;break}if(m===l){o=!0,l=a,n=r;break}m=m.sibling}if(!o){for(m=r.child;m;){if(m===n){o=!0,n=r,l=a;break}if(m===l){o=!0,l=r,n=a;break}m=m.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case A:return"Profiler";case H:return"StrictMode";case Y:return"Suspense";case U:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case k:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}var pe=Array.isArray,j=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},se=[],x=-1;function G(e){return{current:e}}function q(e){0>x||(e.current=se[x],se[x]=null,x--)}function K(e,t){x++,se[x]=e.current,e.current=t}var I=G(null),fe=G(null),ce=G(null),xe=G(null);function $(e,t){switch(K(ce,t),K(fe,e),K(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cf(t),e=Tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(I),K(I,e)}function ie(){q(I),q(fe),q(ce)}function Ve(e){e.memoizedState!==null&&K(xe,e);var t=I.current,n=Tf(t,e.type);t!==n&&(K(fe,e),K(I,n))}function Oe(e){fe.current===e&&(q(I),q(fe)),xe.current===e&&(q(xe),lr._currentValue=F)}var Ze=Object.prototype.hasOwnProperty,ct=s.unstable_scheduleCallback,Mt=s.unstable_cancelCallback,fn=s.unstable_shouldYield,Nt=s.unstable_requestPaint,pt=s.unstable_now,qt=s.unstable_getCurrentPriorityLevel,dn=s.unstable_ImmediatePriority,nn=s.unstable_UserBlockingPriority,Lt=s.unstable_NormalPriority,Un=s.unstable_LowPriority,ol=s.unstable_IdlePriority,te=s.log,be=s.unstable_setDisableYieldValue,de=null,Te=null;function ae(e){if(typeof te=="function"&&be(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(de,e)}catch{}}var we=Math.clz32?Math.clz32:Ht,gt=Math.log,Dt=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(gt(e)/Dt|0)|0}var bt=256,Ie=4194304;function _t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pt(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?a=_t(l):(o&=m,o!==0?a=_t(o):n||(n=m&~e,n!==0&&(a=_t(n))))):(m=l&~r,m!==0?a=_t(m):o!==0?a=_t(o):n||(n=l&~e,n!==0&&(a=_t(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Zt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function da(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function gr(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ln(e,t,n,l,a,r){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,C=e.expirationTimes,w=e.hiddenUpdates;for(n=o&~n;0<n;){var P=31-we(n),W=1<<P;m[P]=0,C[P]=-1;var V=w[P];if(V!==null)for(w[P]=null,P=0;P<V.length;P++){var B=V[P];B!==null&&(B.lane&=-536870913)}n&=~W}l!==0&&at(e,l,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-we(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-we(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ee(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yr(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:qf(e.type))}function Bu(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var hn=Math.random().toString(36).slice(2),ot="__reactFiber$"+hn,St="__reactProps$"+hn,Yn="__reactContainer$"+hn,ha="__reactEvents$"+hn,Z2="__reactListeners$"+hn,Q2="__reactHandles$"+hn,oo="__reactResources$"+hn,ma="__reactMarker$"+hn;function Gu(e){delete e[ot],delete e[St],delete e[ha],delete e[Z2],delete e[Q2]}function Ml(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yn]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mf(e);e!==null;){if(n=e[ot])return n;e=Mf(e)}return t}e=n,n=e.parentNode}return null}function wl(e){if(e=e[ot]||e[Yn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function pa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function El(e){var t=e[oo];return t||(t=e[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[ma]=!0}var so=new Set,fo={};function sl(e,t){Al(e,t),Al(e+"Capture",t)}function Al(e,t){for(fo[e]=t,e=0;e<t.length;e++)so.add(t[e])}var K2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},mo={};function W2(e){return Ze.call(mo,e)?!0:Ze.call(ho,e)?!1:K2.test(e)?mo[e]=!0:(ho[e]=!0,!1)}function vr(e,t,n){if(W2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function xr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _n(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var ju,po;function Ol(e){if(ju===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ju=t&&t[1]||"",po=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ju+e+po}var Uu=!1;function ku(e,t){if(!e||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(B){var V=B}Reflect.construct(e,[],W)}else{try{W.call()}catch(B){V=B}e.call(W.prototype)}}else{try{throw Error()}catch(B){V=B}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(B){if(B&&V&&typeof B.stack=="string")return[B.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],m=r[1];if(o&&m){var C=o.split(`
`),w=m.split(`
`);for(a=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(l===C.length||a===w.length)for(l=C.length-1,a=w.length-1;1<=l&&0<=a&&C[l]!==w[a];)a--;for(;1<=l&&0<=a;l--,a--)if(C[l]!==w[a]){if(l!==1||a!==1)do if(l--,a--,0>a||C[l]!==w[a]){var P=`
`+C[l].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=l&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ol(n):""}function J2(e){switch(e.tag){case 26:case 27:case 5:return Ol(e.type);case 16:return Ol("Lazy");case 13:return Ol("Suspense");case 19:return Ol("SuspenseList");case 0:case 15:return ku(e.type,!1);case 11:return ku(e.type.render,!1);case 1:return ku(e.type,!0);case 31:return Ol("Activity");default:return""}}function go(e){try{var t="";do t+=J2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function F2(e){var t=yo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=F2(e))}function vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=yo(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var I2=/[\n"\\]/g;function Kt(e){return e.replace(I2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yu(e,t,n,l,a,r,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Xu(e,o,Qt(t)):n!=null?Xu(e,o,Qt(n)):l!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Qt(m):e.removeAttribute("name")}function xo(e,t,n,l,a,r,o,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Qt(n):"",t=t!=null?""+Qt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Xu(e,t,n){t==="number"&&_r(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function bo(e,t,n){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Qt(n):""}function _o(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(pe(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Qt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Hl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function So(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||$2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Co(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&So(e,a,l)}else for(var r in t)t.hasOwnProperty(r)&&So(e,r,t[r])}function Nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sr(e){return t1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qu=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Gl=null;function To(e){var t=wl(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[St]||null;if(!a)throw Error(i(90));Yu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&vo(l)}break e;case"textarea":bo(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Vl(e,!!n.multiple,t,!1)}}}var Pu=!1;function Ro(e,t,n){if(Pu)return e(t,n);Pu=!0;try{var l=e(t);return l}finally{if(Pu=!1,(Bl!==null||Gl!==null)&&(iu(),Bl&&(t=Bl,e=Gl,Gl=Bl=null,To(t),e)))for(t=0;t<e.length;t++)To(e[t])}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var l=n[St]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=!1;if(Sn)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Zu=!1}var Xn=null,Qu=null,Cr=null;function Do(){if(Cr)return Cr;var e,t=Qu,n=t.length,l,a="value"in Xn?Xn.value:Xn.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[r-l];l++);return Cr=a.slice(e,1<l?1-l:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rr(){return!0}function zo(){return!1}function wt(e){function t(n,l,a,r,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Rr:zo,this.isPropagationStopped=zo,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),t}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dr=wt(fl),va=v({},fl,{view:0,detail:0}),n1=wt(va),Ku,Wu,xa,zr=v({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?(Ku=e.screenX-xa.screenX,Wu=e.screenY-xa.screenY):Wu=Ku=0,xa=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Wu}}),Mo=wt(zr),l1=v({},zr,{dataTransfer:0}),a1=wt(l1),r1=v({},va,{relatedTarget:0}),Ju=wt(r1),u1=v({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),i1=wt(u1),c1=v({},fl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o1=wt(c1),s1=v({},fl,{data:0}),wo=wt(s1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h1[e])?!!t[e]:!1}function Fu(){return m1}var p1=v({},va,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g1=wt(p1),y1=v({},zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eo=wt(y1),v1=v({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),x1=wt(v1),b1=v({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=wt(b1),S1=v({},zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=wt(S1),T1=v({},fl,{newState:0,oldState:0}),R1=wt(T1),D1=[9,13,27,32],Iu=Sn&&"CompositionEvent"in window,ba=null;Sn&&"documentMode"in document&&(ba=document.documentMode);var z1=Sn&&"TextEvent"in window&&!ba,Ao=Sn&&(!Iu||ba&&8<ba&&11>=ba),Oo=" ",Vo=!1;function Ho(e,t){switch(e){case"keyup":return D1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function M1(e,t){switch(e){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(Vo=!0,Oo);case"textInput":return e=t.data,e===Oo&&Vo?null:e;default:return null}}function w1(e,t){if(jl)return e==="compositionend"||!Iu&&Ho(e,t)?(e=Do(),Cr=Qu=Xn=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ao&&t.locale!=="ko"?null:t.data;default:return null}}var E1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E1[e.type]:t==="textarea"}function jo(e,t,n,l){Bl?Gl?Gl.push(l):Gl=[l]:Bl=l,t=hu(t,"onChange"),0<t.length&&(n=new Dr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var _a=null,Sa=null;function A1(e){vf(e,0)}function Mr(e){var t=pa(e);if(vo(t))return e}function Uo(e,t){if(e==="change")return t}var ko=!1;if(Sn){var $u;if(Sn){var ei="oninput"in document;if(!ei){var Yo=document.createElement("div");Yo.setAttribute("oninput","return;"),ei=typeof Yo.oninput=="function"}$u=ei}else $u=!1;ko=$u&&(!document.documentMode||9<document.documentMode)}function Xo(){_a&&(_a.detachEvent("onpropertychange",No),Sa=_a=null)}function No(e){if(e.propertyName==="value"&&Mr(Sa)){var t=[];jo(t,Sa,e,Lu(e)),Ro(A1,t)}}function O1(e,t,n){e==="focusin"?(Xo(),_a=t,Sa=n,_a.attachEvent("onpropertychange",No)):e==="focusout"&&Xo()}function V1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(Sa)}function H1(e,t){if(e==="click")return Mr(t)}function B1(e,t){if(e==="input"||e==="change")return Mr(t)}function G1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:G1;function Ca(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Ze.call(t,a)||!Bt(e[a],t[a]))return!1}return!0}function qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lo(e,t){var n=qo(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qo(n)}}function Po(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Po(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_r(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var j1=Sn&&"documentMode"in document&&11>=document.documentMode,Ul=null,ni=null,Ta=null,li=!1;function Qo(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;li||Ul==null||Ul!==_r(l)||(l=Ul,"selectionStart"in l&&ti(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ta&&Ca(Ta,l)||(Ta=l,l=hu(ni,"onSelect"),0<l.length&&(t=new Dr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ul)))}function dl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kl={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionrun:dl("Transition","TransitionRun"),transitionstart:dl("Transition","TransitionStart"),transitioncancel:dl("Transition","TransitionCancel"),transitionend:dl("Transition","TransitionEnd")},ai={},Ko={};Sn&&(Ko=document.createElement("div").style,"AnimationEvent"in window||(delete kl.animationend.animation,delete kl.animationiteration.animation,delete kl.animationstart.animation),"TransitionEvent"in window||delete kl.transitionend.transition);function hl(e){if(ai[e])return ai[e];if(!kl[e])return e;var t=kl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ko)return ai[e]=t[n];return e}var Wo=hl("animationend"),Jo=hl("animationiteration"),Fo=hl("animationstart"),U1=hl("transitionrun"),k1=hl("transitionstart"),Y1=hl("transitioncancel"),Io=hl("transitionend"),$o=new Map,ri="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ri.push("scrollEnd");function an(e,t){$o.set(e,t),sl(t,[e])}var e0=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var n=e0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:go(t)},e0.set(e,t),t)}return{value:e,source:t,stack:go(t)}}var Jt=[],Yl=0,ui=0;function wr(){for(var e=Yl,t=ui=Yl=0;t<e;){var n=Jt[t];Jt[t++]=null;var l=Jt[t];Jt[t++]=null;var a=Jt[t];Jt[t++]=null;var r=Jt[t];if(Jt[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}r!==0&&t0(n,a,r)}}function Er(e,t,n,l){Jt[Yl++]=e,Jt[Yl++]=t,Jt[Yl++]=n,Jt[Yl++]=l,ui|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ii(e,t,n,l){return Er(e,t,n,l),Ar(e)}function Xl(e,t){return Er(e,null,null,t),Ar(e)}function t0(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,l=r.alternate,l!==null&&(l.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-we(n),e=r.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),r):null}function Ar(e){if(50<Wa)throw Wa=0,hc=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nl={};function X1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,l){return new X1(e,t,n,l)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cn(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function n0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Or(e,t,n,l,a,r){var o=0;if(l=e,typeof e=="function")ci(e)&&(o=1);else if(typeof e=="string")o=qd(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Gt(31,n,t,a),e.elementType=ne,e.lanes=r,e;case E:return ml(n.children,a,r,t);case H:o=8,a|=24;break;case A:return e=Gt(12,n,t,a|2),e.elementType=A,e.lanes=r,e;case Y:return e=Gt(13,n,t,a),e.elementType=Y,e.lanes=r,e;case U:return e=Gt(19,n,t,a),e.elementType=U,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case k:o=10;break e;case O:o=9;break e;case Z:o=11;break e;case N:o=14;break e;case ue:o=16,l=null;break e}o=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Gt(o,n,t,a),t.elementType=e,t.type=l,t.lanes=r,t}function ml(e,t,n,l){return e=Gt(7,e,l,t),e.lanes=n,e}function oi(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ql=[],Ll=0,Vr=null,Hr=0,Ft=[],It=0,pl=null,Tn=1,Rn="";function gl(e,t){ql[Ll++]=Hr,ql[Ll++]=Vr,Vr=e,Hr=t}function l0(e,t,n){Ft[It++]=Tn,Ft[It++]=Rn,Ft[It++]=pl,pl=e;var l=Tn;e=Rn;var a=32-we(l)-1;l&=~(1<<a),n+=1;var r=32-we(t)+a;if(30<r){var o=a-a%5;r=(l&(1<<o)-1).toString(32),l>>=o,a-=o,Tn=1<<32-we(t)+a|n<<a|l,Rn=r+e}else Tn=1<<r|n<<a|l,Rn=e}function fi(e){e.return!==null&&(gl(e,1),l0(e,1,0))}function di(e){for(;e===Vr;)Vr=ql[--Ll],ql[Ll]=null,Hr=ql[--Ll],ql[Ll]=null;for(;e===pl;)pl=Ft[--It],Ft[It]=null,Rn=Ft[--It],Ft[It]=null,Tn=Ft[--It],Ft[It]=null}var zt=null,Je=null,Ge=!1,yl=null,mn=!1,hi=Error(i(519));function vl(e){var t=Error(i(418,""));throw za(Wt(t,e)),hi}function a0(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ot]=e,t[St]=l,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<Fa.length;n++)Me(Fa[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),xo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),br(t);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),_o(t,l.value,l.defaultValue,l.children),br(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Sf(t.textContent,n)?(l.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),l.onScroll!=null&&Me("scroll",t),l.onScrollEnd!=null&&Me("scrollend",t),l.onClick!=null&&(t.onclick=mu),t=!0):t=!1,t||vl(e)}function r0(e){for(zt=e.return;zt;)switch(zt.tag){case 5:case 13:mn=!1;return;case 27:case 3:mn=!0;return;default:zt=zt.return}}function Ra(e){if(e!==zt)return!1;if(!Ge)return r0(e),Ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||wc(e.type,e.memoizedProps)),n=!n),n&&Je&&vl(e),r0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Je=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Je=null}}else t===27?(t=Je,ll(e.type)?(e=Vc,Vc=null,Je=e):Je=t):Je=zt?un(e.stateNode.nextSibling):null;return!0}function Da(){Je=zt=null,Ge=!1}function u0(){var e=yl;return e!==null&&(Ot===null?Ot=e:Ot.push.apply(Ot,e),yl=null),e}function za(e){yl===null?yl=[e]:yl.push(e)}var mi=G(null),xl=null,Dn=null;function Nn(e,t,n){K(mi,t._currentValue),t._currentValue=n}function zn(e){e._currentValue=mi.current,q(mi)}function pi(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function gi(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var o=a.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=a;for(var C=0;C<t.length;C++)if(m.context===t[C]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),pi(r.return,n,e),l||(o=null);break e}r=m.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),pi(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Ma(e,t,n,l){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var m=a.type;Bt(a.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(a===xe.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(lr):e=[lr])}a=a.return}e!==null&&gi(t,e,n,l),t.flags|=262144}function Br(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bl(e){xl=e,Dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return i0(xl,e)}function Gr(e,t){return xl===null&&bl(e),i0(e,t)}function i0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Dn===null){if(e===null)throw Error(i(308));Dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Dn=Dn.next=t;return n}var N1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},q1=s.unstable_scheduleCallback,L1=s.unstable_NormalPriority,ut={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yi(){return{controller:new N1,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&q1(L1,function(){e.controller.abort()})}var Ea=null,vi=0,Pl=0,Zl=null;function P1(e,t){if(Ea===null){var n=Ea=[];vi=0,Pl=bc(),Zl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return vi++,t.then(c0,c0),t}function c0(){if(--vi===0&&Ea!==null){Zl!==null&&(Zl.status="fulfilled");var e=Ea;Ea=null,Pl=0,Zl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Z1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var o0=j.S;j.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&P1(e,t),o0!==null&&o0(e,t)};var _l=G(null);function xi(){var e=_l.current;return e!==null?e:Qe.pooledCache}function jr(e,t){t===null?K(_l,_l.current):K(_l,t.pool)}function s0(){var e=xi();return e===null?null:{parent:ut._currentValue,pool:e}}var Aa=Error(i(460)),f0=Error(i(474)),Ur=Error(i(542)),bi={then:function(){}};function d0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kr(){}function h0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(kr,kr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,p0(e),e;default:if(typeof t.status=="string")t.then(kr,kr);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,p0(e),e}throw Oa=t,Aa}}var Oa=null;function m0(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function p0(e){if(e===Aa||e===Ur)throw Error(i(483))}var qn=!1;function _i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Si(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ln(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Ar(e),t0(e,null,n),t}return Er(e,l,t,n),Ar(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,rt(e,n)}}function Ci(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ti=!1;function Ha(){if(Ti){var e=Zl;if(e!==null)throw e}}function Ba(e,t,n,l){Ti=!1;var a=e.updateQueue;qn=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var C=m,w=C.next;C.next=null,o===null?r=w:o.next=w,o=C;var P=e.alternate;P!==null&&(P=P.updateQueue,m=P.lastBaseUpdate,m!==o&&(m===null?P.firstBaseUpdate=w:m.next=w,P.lastBaseUpdate=C))}if(r!==null){var W=a.baseState;o=0,P=w=C=null,m=r;do{var V=m.lane&-536870913,B=V!==m.lane;if(B?(Ee&V)===V:(l&V)===V){V!==0&&V===Pl&&(Ti=!0),P!==null&&(P=P.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ye=e,he=m;V=t;var Xe=n;switch(he.tag){case 1:if(ye=he.payload,typeof ye=="function"){W=ye.call(Xe,W,V);break e}W=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=he.payload,V=typeof ye=="function"?ye.call(Xe,W,V):ye,V==null)break e;W=v({},W,V);break e;case 2:qn=!0}}V=m.callback,V!==null&&(e.flags|=64,B&&(e.flags|=8192),B=a.callbacks,B===null?a.callbacks=[V]:B.push(V))}else B={lane:V,tag:m.tag,payload:m.payload,callback:m.callback,next:null},P===null?(w=P=B,C=W):P=P.next=B,o|=V;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;B=m,m=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);P===null&&(C=W),a.baseState=C,a.firstBaseUpdate=w,a.lastBaseUpdate=P,r===null&&(a.shared.lanes=0),$n|=o,e.lanes=o,e.memoizedState=W}}function g0(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function y0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)g0(n[e],t)}var Ql=G(null),Yr=G(0);function v0(e,t){e=Hn,K(Yr,e),K(Ql,t),Hn=e|t.baseLanes}function Ri(){K(Yr,Hn),K(Ql,Ql.current)}function Di(){Hn=Yr.current,q(Ql),q(Yr)}var Zn=0,Re=null,ke=null,nt=null,Xr=!1,Kl=!1,Sl=!1,Nr=0,Ga=0,Wl=null,Q1=0;function $e(){throw Error(i(321))}function zi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function Mi(e,t,n,l,a,r){return Zn=r,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?ts:ns,Sl=!1,r=n(l,a),Sl=!1,Kl&&(r=b0(t,n,l,a)),x0(e),r}function x0(e){j.H=Kr;var t=ke!==null&&ke.next!==null;if(Zn=0,nt=ke=Re=null,Xr=!1,Ga=0,Wl=null,t)throw Error(i(300));e===null||ft||(e=e.dependencies,e!==null&&Br(e)&&(ft=!0))}function b0(e,t,n,l){Re=e;var a=0;do{if(Kl&&(Wl=null),Ga=0,Kl=!1,25<=a)throw Error(i(301));if(a+=1,nt=ke=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=ed,r=t(n,l)}while(Kl);return r}function K1(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ja(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(Re.flags|=1024),t}function wi(){var e=Nr!==0;return Nr=0,e}function Ei(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ai(e){if(Xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xr=!1}Zn=0,nt=ke=Re=null,Kl=!1,Ga=Nr=0,Wl=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Re.memoizedState=nt=e:nt=nt.next=e,nt}function lt(){if(ke===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=nt===null?Re.memoizedState:nt.next;if(t!==null)nt=t,ke=e;else{if(e===null)throw Re.alternate===null?Error(i(467)):Error(i(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},nt===null?Re.memoizedState=nt=e:nt=nt.next=e}return nt}function Oi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ja(e){var t=Ga;return Ga+=1,Wl===null&&(Wl=[]),e=h0(Wl,e,t),t=Re,(nt===null?t.memoizedState:nt.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?ts:ns),e}function qr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ja(e);if(e.$$typeof===k)return Ct(e)}throw Error(i(438,String(e)))}function Vi(e){var t=null,n=Re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Oi(),Re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ge;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function Lr(e){var t=lt();return Hi(t,ke,e)}function Hi(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,r=l.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}t.baseQueue=a=r,l.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var m=o=null,C=null,w=t,P=!1;do{var W=w.lane&-536870913;if(W!==w.lane?(Ee&W)===W:(Zn&W)===W){var V=w.revertLane;if(V===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),W===Pl&&(P=!0);else if((Zn&V)===V){w=w.next,V===Pl&&(P=!0);continue}else W={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},C===null?(m=C=W,o=r):C=C.next=W,Re.lanes|=V,$n|=V;W=w.action,Sl&&n(r,W),r=w.hasEagerState?w.eagerState:n(r,W)}else V={lane:W,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},C===null?(m=C=V,o=r):C=C.next=V,Re.lanes|=W,$n|=W;w=w.next}while(w!==null&&w!==t);if(C===null?o=r:C.next=m,!Bt(r,e.memoizedState)&&(ft=!0,P&&(n=Zl,n!==null)))throw n;e.memoizedState=r,e.baseState=o,e.baseQueue=C,l.lastRenderedState=r}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Bi(e){var t=lt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Bt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,l]}function _0(e,t,n){var l=Re,a=lt(),r=Ge;if(r){if(n===void 0)throw Error(i(407));n=n()}else n=t();var o=!Bt((ke||a).memoizedState,n);o&&(a.memoizedState=n,ft=!0),a=a.queue;var m=T0.bind(null,l,a,e);if(Ua(2048,8,m,[e]),a.getSnapshot!==t||o||nt!==null&&nt.memoizedState.tag&1){if(l.flags|=2048,Jl(9,Pr(),C0.bind(null,l,a,n,t),null),Qe===null)throw Error(i(349));r||(Zn&124)!==0||S0(l,t,n)}return n}function S0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t=Oi(),Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function C0(e,t,n,l){t.value=n,t.getSnapshot=l,R0(t)&&D0(e)}function T0(e,t,n){return n(function(){R0(t)&&D0(e)})}function R0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function D0(e){var t=Xl(e,2);t!==null&&Xt(t,e,2)}function Gi(e){var t=Et();if(typeof e=="function"){var n=e;if(e=n(),Sl){ae(!0);try{n()}finally{ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function z0(e,t,n,l){return e.baseState=n,Hi(e,ke,typeof l=="function"?l:Mn)}function W1(e,t,n,l,a){if(Qr(e))throw Error(i(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};j.T!==null?n(!0):r.isTransition=!1,l(r),n=t.pending,n===null?(r.next=t.pending=r,M0(t,r)):(r.next=n.next,t.pending=n.next=r)}}function M0(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var r=j.T,o={};j.T=o;try{var m=n(a,l),C=j.S;C!==null&&C(o,m),w0(e,t,m)}catch(w){ji(e,t,w)}finally{j.T=r}}else try{r=n(a,l),w0(e,t,r)}catch(w){ji(e,t,w)}}function w0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){E0(e,t,l)},function(l){return ji(e,t,l)}):E0(e,t,n)}function E0(e,t,n){t.status="fulfilled",t.value=n,A0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,M0(e,n)))}function ji(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,A0(t),t=t.next;while(t!==l)}e.action=null}function A0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function O0(e,t){return t}function V0(e,t){if(Ge){var n=Qe.formState;if(n!==null){e:{var l=Re;if(Ge){if(Je){t:{for(var a=Je,r=mn;a.nodeType!==8;){if(!r){a=null;break t}if(a=un(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Je=un(a.nextSibling),l=a.data==="F!";break e}}vl(l)}l=!1}l&&(t=n[0])}}return n=Et(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O0,lastRenderedState:t},n.queue=l,n=I0.bind(null,Re,l),l.dispatch=n,l=Gi(!1),r=Ni.bind(null,Re,!1,l.queue),l=Et(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=W1.bind(null,Re,a,r,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function H0(e){var t=lt();return B0(t,ke,e)}function B0(e,t,n){if(t=Hi(e,t,O0)[0],e=Lr(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ja(t)}catch(o){throw o===Aa?Ur:o}else l=t;t=lt();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Re.flags|=2048,Jl(9,Pr(),J1.bind(null,a,n),null)),[l,r,e]}function J1(e,t){e.action=t}function G0(e){var t=lt(),n=ke;if(n!==null)return B0(t,n,e);lt(),t=t.memoizedState,n=lt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Jl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Re.updateQueue,t===null&&(t=Oi(),Re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Pr(){return{destroy:void 0,resource:void 0}}function j0(){return lt().memoizedState}function Zr(e,t,n,l){var a=Et();l=l===void 0?null:l,Re.flags|=e,a.memoizedState=Jl(1|t,Pr(),n,l)}function Ua(e,t,n,l){var a=lt();l=l===void 0?null:l;var r=a.memoizedState.inst;ke!==null&&l!==null&&zi(l,ke.memoizedState.deps)?a.memoizedState=Jl(t,r,n,l):(Re.flags|=e,a.memoizedState=Jl(1|t,r,n,l))}function U0(e,t){Zr(8390656,8,e,t)}function k0(e,t){Ua(2048,8,e,t)}function Y0(e,t){return Ua(4,2,e,t)}function X0(e,t){return Ua(4,4,e,t)}function N0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,n){n=n!=null?n.concat([e]):null,Ua(4,4,N0.bind(null,t,e),n)}function Ui(){}function L0(e,t){var n=lt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&zi(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function P0(e,t){var n=lt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&zi(t,l[1]))return l[0];if(l=e(),Sl){ae(!0);try{e()}finally{ae(!1)}}return n.memoizedState=[l,t],l}function ki(e,t,n){return n===void 0||(Zn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ks(),Re.lanes|=e,$n|=e,n)}function Z0(e,t,n,l){return Bt(n,t)?n:Ql.current!==null?(e=ki(e,n,l),Bt(e,t)||(ft=!0),e):(Zn&42)===0?(ft=!0,e.memoizedState=n):(e=Ks(),Re.lanes|=e,$n|=e,t)}function Q0(e,t,n,l,a){var r=J.p;J.p=r!==0&&8>r?r:8;var o=j.T,m={};j.T=m,Ni(e,!1,t,n);try{var C=a(),w=j.S;if(w!==null&&w(m,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=Z1(C,l);ka(e,t,P,Yt(e))}else ka(e,t,l,Yt(e))}catch(W){ka(e,t,{then:function(){},status:"rejected",reason:W},Yt())}finally{J.p=r,j.T=o}}function F1(){}function Yi(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=K0(e).queue;Q0(e,a,t,F,n===null?F1:function(){return W0(e),n(l)})}function K0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function W0(e){var t=K0(e).next.queue;ka(e,t,{},Yt())}function Xi(){return Ct(lr)}function J0(){return lt().memoizedState}function F0(){return lt().memoizedState}function I1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=Ln(n);var l=Pn(t,e,n);l!==null&&(Xt(l,t,n),Va(l,t,n)),t={cache:yi()},e.payload=t;return}t=t.return}}function $1(e,t,n){var l=Yt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Qr(e)?$0(t,n):(n=ii(e,t,n,l),n!==null&&(Xt(n,e,l),es(n,t,l)))}function I0(e,t,n){var l=Yt();ka(e,t,n,l)}function ka(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qr(e))$0(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,m=r(o,n);if(a.hasEagerState=!0,a.eagerState=m,Bt(m,o))return Er(e,t,a,0),Qe===null&&wr(),!1}catch{}finally{}if(n=ii(e,t,a,l),n!==null)return Xt(n,e,l),es(n,t,l),!0}return!1}function Ni(e,t,n,l){if(l={lane:2,revertLane:bc(),action:l,hasEagerState:!1,eagerState:null,next:null},Qr(e)){if(t)throw Error(i(479))}else t=ii(e,n,l,2),t!==null&&Xt(t,e,2)}function Qr(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function $0(e,t){Kl=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function es(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,rt(e,n)}}var Kr={readContext:Ct,use:qr,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},ts={readContext:Ct,use:qr,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:U0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Zr(4194308,4,N0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){Zr(4,2,e,t)},useMemo:function(e,t){var n=Et();t=t===void 0?null:t;var l=e();if(Sl){ae(!0);try{e()}finally{ae(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Et();if(n!==void 0){var a=n(t);if(Sl){ae(!0);try{n(t)}finally{ae(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=$1.bind(null,Re,e),[l.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Gi(e);var t=e.queue,n=I0.bind(null,Re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ui,useDeferredValue:function(e,t){var n=Et();return ki(n,e,t)},useTransition:function(){var e=Gi(!1);return e=Q0.bind(null,Re,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Re,a=Et();if(Ge){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Qe===null)throw Error(i(349));(Ee&124)!==0||S0(l,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,U0(T0.bind(null,l,r,e),[e]),l.flags|=2048,Jl(9,Pr(),C0.bind(null,l,r,n,t),null),n},useId:function(){var e=Et(),t=Qe.identifierPrefix;if(Ge){var n=Rn,l=Tn;n=(l&~(1<<32-we(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Q1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Xi,useFormState:V0,useActionState:V0,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ni.bind(null,Re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vi,useCacheRefresh:function(){return Et().memoizedState=I1.bind(null,Re)}},ns={readContext:Ct,use:qr,useCallback:L0,useContext:Ct,useEffect:k0,useImperativeHandle:q0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:P0,useReducer:Lr,useRef:j0,useState:function(){return Lr(Mn)},useDebugValue:Ui,useDeferredValue:function(e,t){var n=lt();return Z0(n,ke.memoizedState,e,t)},useTransition:function(){var e=Lr(Mn)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ja(e),t]},useSyncExternalStore:_0,useId:J0,useHostTransitionStatus:Xi,useFormState:H0,useActionState:H0,useOptimistic:function(e,t){var n=lt();return z0(n,ke,e,t)},useMemoCache:Vi,useCacheRefresh:F0},ed={readContext:Ct,use:qr,useCallback:L0,useContext:Ct,useEffect:k0,useImperativeHandle:q0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:P0,useReducer:Bi,useRef:j0,useState:function(){return Bi(Mn)},useDebugValue:Ui,useDeferredValue:function(e,t){var n=lt();return ke===null?ki(n,e,t):Z0(n,ke.memoizedState,e,t)},useTransition:function(){var e=Bi(Mn)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ja(e),t]},useSyncExternalStore:_0,useId:J0,useHostTransitionStatus:Xi,useFormState:G0,useActionState:G0,useOptimistic:function(e,t){var n=lt();return ke!==null?z0(n,ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:F0},Fl=null,Ya=0;function Wr(e){var t=Ya;return Ya+=1,Fl===null&&(Fl=[]),h0(Fl,e,t)}function Xa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Jr(e,t){throw t.$$typeof===_?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ls(e){var t=e._init;return t(e._payload)}function as(e){function t(z,R){if(e){var M=z.deletions;M===null?(z.deletions=[R],z.flags|=16):M.push(R)}}function n(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function l(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function a(z,R){return z=Cn(z,R),z.index=0,z.sibling=null,z}function r(z,R,M){return z.index=M,e?(M=z.alternate,M!==null?(M=M.index,M<R?(z.flags|=67108866,R):M):(z.flags|=67108866,R)):(z.flags|=1048576,R)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,R,M,Q){return R===null||R.tag!==6?(R=oi(M,z.mode,Q),R.return=z,R):(R=a(R,M),R.return=z,R)}function C(z,R,M,Q){var le=M.type;return le===E?P(z,R,M.props.children,Q,M.key):R!==null&&(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ue&&ls(le)===R.type)?(R=a(R,M.props),Xa(R,M),R.return=z,R):(R=Or(M.type,M.key,M.props,null,z.mode,Q),Xa(R,M),R.return=z,R)}function w(z,R,M,Q){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=si(M,z.mode,Q),R.return=z,R):(R=a(R,M.children||[]),R.return=z,R)}function P(z,R,M,Q,le){return R===null||R.tag!==7?(R=ml(M,z.mode,Q,le),R.return=z,R):(R=a(R,M),R.return=z,R)}function W(z,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=oi(""+R,z.mode,M),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return M=Or(R.type,R.key,R.props,null,z.mode,M),Xa(M,R),M.return=z,M;case T:return R=si(R,z.mode,M),R.return=z,R;case ue:var Q=R._init;return R=Q(R._payload),W(z,R,M)}if(pe(R)||re(R))return R=ml(R,z.mode,M,null),R.return=z,R;if(typeof R.then=="function")return W(z,Wr(R),M);if(R.$$typeof===k)return W(z,Gr(z,R),M);Jr(z,R)}return null}function V(z,R,M,Q){var le=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return le!==null?null:m(z,R,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===le?C(z,R,M,Q):null;case T:return M.key===le?w(z,R,M,Q):null;case ue:return le=M._init,M=le(M._payload),V(z,R,M,Q)}if(pe(M)||re(M))return le!==null?null:P(z,R,M,Q,null);if(typeof M.then=="function")return V(z,R,Wr(M),Q);if(M.$$typeof===k)return V(z,R,Gr(z,M),Q);Jr(z,M)}return null}function B(z,R,M,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return z=z.get(M)||null,m(R,z,""+Q,le);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return z=z.get(Q.key===null?M:Q.key)||null,C(R,z,Q,le);case T:return z=z.get(Q.key===null?M:Q.key)||null,w(R,z,Q,le);case ue:var De=Q._init;return Q=De(Q._payload),B(z,R,M,Q,le)}if(pe(Q)||re(Q))return z=z.get(M)||null,P(R,z,Q,le,null);if(typeof Q.then=="function")return B(z,R,M,Wr(Q),le);if(Q.$$typeof===k)return B(z,R,M,Gr(R,Q),le);Jr(R,Q)}return null}function ye(z,R,M,Q){for(var le=null,De=null,oe=R,me=R=0,ht=null;oe!==null&&me<M.length;me++){oe.index>me?(ht=oe,oe=null):ht=oe.sibling;var He=V(z,oe,M[me],Q);if(He===null){oe===null&&(oe=ht);break}e&&oe&&He.alternate===null&&t(z,oe),R=r(He,R,me),De===null?le=He:De.sibling=He,De=He,oe=ht}if(me===M.length)return n(z,oe),Ge&&gl(z,me),le;if(oe===null){for(;me<M.length;me++)oe=W(z,M[me],Q),oe!==null&&(R=r(oe,R,me),De===null?le=oe:De.sibling=oe,De=oe);return Ge&&gl(z,me),le}for(oe=l(oe);me<M.length;me++)ht=B(oe,z,me,M[me],Q),ht!==null&&(e&&ht.alternate!==null&&oe.delete(ht.key===null?me:ht.key),R=r(ht,R,me),De===null?le=ht:De.sibling=ht,De=ht);return e&&oe.forEach(function(cl){return t(z,cl)}),Ge&&gl(z,me),le}function he(z,R,M,Q){if(M==null)throw Error(i(151));for(var le=null,De=null,oe=R,me=R=0,ht=null,He=M.next();oe!==null&&!He.done;me++,He=M.next()){oe.index>me?(ht=oe,oe=null):ht=oe.sibling;var cl=V(z,oe,He.value,Q);if(cl===null){oe===null&&(oe=ht);break}e&&oe&&cl.alternate===null&&t(z,oe),R=r(cl,R,me),De===null?le=cl:De.sibling=cl,De=cl,oe=ht}if(He.done)return n(z,oe),Ge&&gl(z,me),le;if(oe===null){for(;!He.done;me++,He=M.next())He=W(z,He.value,Q),He!==null&&(R=r(He,R,me),De===null?le=He:De.sibling=He,De=He);return Ge&&gl(z,me),le}for(oe=l(oe);!He.done;me++,He=M.next())He=B(oe,z,me,He.value,Q),He!==null&&(e&&He.alternate!==null&&oe.delete(He.key===null?me:He.key),R=r(He,R,me),De===null?le=He:De.sibling=He,De=He);return e&&oe.forEach(function(t3){return t(z,t3)}),Ge&&gl(z,me),le}function Xe(z,R,M,Q){if(typeof M=="object"&&M!==null&&M.type===E&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:e:{for(var le=M.key;R!==null;){if(R.key===le){if(le=M.type,le===E){if(R.tag===7){n(z,R.sibling),Q=a(R,M.props.children),Q.return=z,z=Q;break e}}else if(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ue&&ls(le)===R.type){n(z,R.sibling),Q=a(R,M.props),Xa(Q,M),Q.return=z,z=Q;break e}n(z,R);break}else t(z,R);R=R.sibling}M.type===E?(Q=ml(M.props.children,z.mode,Q,M.key),Q.return=z,z=Q):(Q=Or(M.type,M.key,M.props,null,z.mode,Q),Xa(Q,M),Q.return=z,z=Q)}return o(z);case T:e:{for(le=M.key;R!==null;){if(R.key===le)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){n(z,R.sibling),Q=a(R,M.children||[]),Q.return=z,z=Q;break e}else{n(z,R);break}else t(z,R);R=R.sibling}Q=si(M,z.mode,Q),Q.return=z,z=Q}return o(z);case ue:return le=M._init,M=le(M._payload),Xe(z,R,M,Q)}if(pe(M))return ye(z,R,M,Q);if(re(M)){if(le=re(M),typeof le!="function")throw Error(i(150));return M=le.call(M),he(z,R,M,Q)}if(typeof M.then=="function")return Xe(z,R,Wr(M),Q);if(M.$$typeof===k)return Xe(z,R,Gr(z,M),Q);Jr(z,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(n(z,R.sibling),Q=a(R,M),Q.return=z,z=Q):(n(z,R),Q=oi(M,z.mode,Q),Q.return=z,z=Q),o(z)):n(z,R)}return function(z,R,M,Q){try{Ya=0;var le=Xe(z,R,M,Q);return Fl=null,le}catch(oe){if(oe===Aa||oe===Ur)throw oe;var De=Gt(29,oe,null,z.mode);return De.lanes=Q,De.return=z,De}finally{}}}var Il=as(!0),rs=as(!1),$t=G(null),pn=null;function Qn(e){var t=e.alternate;K(it,it.current&1),K($t,e),pn===null&&(t===null||Ql.current!==null||t.memoizedState!==null)&&(pn=e)}function us(e){if(e.tag===22){if(K(it,it.current),K($t,e),pn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(pn=e)}}else Kn()}function Kn(){K(it,it.current),K($t,$t.current)}function wn(e){q($t),pn===e&&(pn=null),q(it)}var it=G(0);function Fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Oc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function qi(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Li={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=Ln(l);a.payload=t,n!=null&&(a.callback=n),t=Pn(e,a,l),t!==null&&(Xt(t,e,l),Va(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=Ln(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Pn(e,a,l),t!==null&&(Xt(t,e,l),Va(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),l=Ln(n);l.tag=2,t!=null&&(l.callback=t),t=Pn(e,l,n),t!==null&&(Xt(t,e,n),Va(t,e,n))}};function is(e,t,n,l,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!Ca(n,l)||!Ca(a,r):!0}function cs(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function Cl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function os(e){Ir(e)}function ss(e){console.error(e)}function fs(e){Ir(e)}function $r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ds(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Pi(e,t,n){return n=Ln(n),n.tag=3,n.payload={element:null},n.callback=function(){$r(e,t)},n}function hs(e){return e=Ln(e),e.tag=3,e}function ms(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;e.payload=function(){return a(r)},e.callback=function(){ds(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ds(t,n,l),typeof a!="function"&&(el===null?el=new Set([this]):el.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function td(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ma(t,n,a,!0),n=$t.current,n!==null){switch(n.tag){case 13:return pn===null?pc():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===bi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),yc(e,l,a)),!1;case 22:return n.flags|=65536,l===bi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),yc(e,l,a)),!1}throw Error(i(435,n.tag))}return yc(e,l,a),pc(),!1}if(Ge)return t=$t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==hi&&(e=Error(i(422),{cause:l}),za(Wt(e,n)))):(l!==hi&&(t=Error(i(423),{cause:l}),za(Wt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Wt(l,n),a=Pi(e.stateNode,l,a),Ci(e,a),Fe!==4&&(Fe=2)),!1;var r=Error(i(520),{cause:l});if(r=Wt(r,n),Ka===null?Ka=[r]:Ka.push(r),Fe!==4&&(Fe=2),t===null)return!0;l=Wt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Pi(n.stateNode,l,e),Ci(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(el===null||!el.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=hs(a),ms(a,e,n,l),Ci(n,a),!1}n=n.return}while(n!==null);return!1}var ps=Error(i(461)),ft=!1;function yt(e,t,n,l){t.child=e===null?rs(t,null,n,l):Il(t,e.child,n,l)}function gs(e,t,n,l,a){n=n.render;var r=t.ref;if("ref"in l){var o={};for(var m in l)m!=="ref"&&(o[m]=l[m])}else o=l;return bl(t),l=Mi(e,t,n,o,r,a),m=wi(),e!==null&&!ft?(Ei(e,t,a),En(e,t,a)):(Ge&&m&&fi(t),t.flags|=1,yt(e,t,l,a),t.child)}function ys(e,t,n,l,a){if(e===null){var r=n.type;return typeof r=="function"&&!ci(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,vs(e,t,r,l,a)):(e=Or(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!$i(e,a)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(o,l)&&e.ref===t.ref)return En(e,t,a)}return t.flags|=1,e=Cn(r,l),e.ref=t.ref,e.return=t,t.child=e}function vs(e,t,n,l,a){if(e!==null){var r=e.memoizedProps;if(Ca(r,l)&&e.ref===t.ref)if(ft=!1,t.pendingProps=l=r,$i(e,a))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,En(e,t,a)}return Zi(e,t,n,l,a)}function xs(e,t,n){var l=t.pendingProps,a=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return bs(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jr(t,r!==null?r.cachePool:null),r!==null?v0(t,r):Ri(),us(t);else return t.lanes=t.childLanes=536870912,bs(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(jr(t,r.cachePool),v0(t,r),Kn(),t.memoizedState=null):(e!==null&&jr(t,null),Ri(),Kn());return yt(e,t,a,n),t.child}function bs(e,t,n,l){var a=xi();return a=a===null?null:{parent:ut._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&jr(t,null),Ri(),us(t),e!==null&&Ma(e,t,l,!0),null}function eu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Zi(e,t,n,l,a){return bl(t),n=Mi(e,t,n,l,void 0,a),l=wi(),e!==null&&!ft?(Ei(e,t,a),En(e,t,a)):(Ge&&l&&fi(t),t.flags|=1,yt(e,t,n,a),t.child)}function _s(e,t,n,l,a,r){return bl(t),t.updateQueue=null,n=b0(t,l,n,a),x0(e),l=wi(),e!==null&&!ft?(Ei(e,t,r),En(e,t,r)):(Ge&&l&&fi(t),t.flags|=1,yt(e,t,n,r),t.child)}function Ss(e,t,n,l,a){if(bl(t),t.stateNode===null){var r=Nl,o=n.contextType;typeof o=="object"&&o!==null&&(r=Ct(o)),r=new n(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Li,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},_i(t),o=n.contextType,r.context=typeof o=="object"&&o!==null?Ct(o):Nl,r.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(qi(t,n,o,l),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Li.enqueueReplaceState(r,r.state,null),Ba(t,l,r,a),Ha(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,C=Cl(n,m);r.props=C;var w=r.context,P=n.contextType;o=Nl,typeof P=="object"&&P!==null&&(o=Ct(P));var W=n.getDerivedStateFromProps;P=typeof W=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,P||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||w!==o)&&cs(t,r,l,o),qn=!1;var V=t.memoizedState;r.state=V,Ba(t,l,r,a),Ha(),w=t.memoizedState,m||V!==w||qn?(typeof W=="function"&&(qi(t,n,W,l),w=t.memoizedState),(C=qn||is(t,n,C,l,V,w,o))?(P||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=o,l=C):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Si(e,t),o=t.memoizedProps,P=Cl(n,o),r.props=P,W=t.pendingProps,V=r.context,w=n.contextType,C=Nl,typeof w=="object"&&w!==null&&(C=Ct(w)),m=n.getDerivedStateFromProps,(w=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==W||V!==C)&&cs(t,r,l,C),qn=!1,V=t.memoizedState,r.state=V,Ba(t,l,r,a),Ha();var B=t.memoizedState;o!==W||V!==B||qn||e!==null&&e.dependencies!==null&&Br(e.dependencies)?(typeof m=="function"&&(qi(t,n,m,l),B=t.memoizedState),(P=qn||is(t,n,P,l,V,B,C)||e!==null&&e.dependencies!==null&&Br(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,B,C),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,B,C)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),r.props=l,r.state=B,r.context=C,l=P):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,eu(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Il(t,e.child,null,a),t.child=Il(t,null,n,a)):yt(e,t,n,a),t.memoizedState=r.state,e=t.child):e=En(e,t,a),e}function Cs(e,t,n,l){return Da(),t.flags|=256,yt(e,t,n,l),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ki(e){return{baseLanes:e,cachePool:s0()}}function Wi(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=en),e}function Ts(e,t,n){var l=t.pendingProps,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(a?Qn(t):Kn(),Ge){var m=Je,C;if(C=m){e:{for(C=m,m=mn;C.nodeType!==8;){if(!m){m=null;break e}if(C=un(C.nextSibling),C===null){m=null;break e}}m=C}m!==null?(t.memoizedState={dehydrated:m,treeContext:pl!==null?{id:Tn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},C=Gt(18,null,null,0),C.stateNode=m,C.return=t,t.child=C,zt=t,Je=null,C=!0):C=!1}C||vl(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Oc(m)?t.lanes=32:t.lanes=536870912,null;wn(t)}return m=l.children,l=l.fallback,a?(Kn(),a=t.mode,m=tu({mode:"hidden",children:m},a),l=ml(l,a,n,null),m.return=t,l.return=t,m.sibling=l,t.child=m,a=t.child,a.memoizedState=Ki(n),a.childLanes=Wi(e,o,n),t.memoizedState=Qi,l):(Qn(t),Ji(t,m))}if(C=e.memoizedState,C!==null&&(m=C.dehydrated,m!==null)){if(r)t.flags&256?(Qn(t),t.flags&=-257,t=Fi(e,t,n)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),a=l.fallback,m=t.mode,l=tu({mode:"visible",children:l.children},m),a=ml(a,m,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Il(t,e.child,null,n),l=t.child,l.memoizedState=Ki(n),l.childLanes=Wi(e,o,n),t.memoizedState=Qi,t=a);else if(Qn(t),Oc(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var w=o.dgst;o=w,l=Error(i(419)),l.stack="",l.digest=o,za({value:l,source:null,stack:null}),t=Fi(e,t,n)}else if(ft||Ma(e,t,n,!1),o=(n&e.childLanes)!==0,ft||o){if(o=Qe,o!==null&&(l=n&-n,l=(l&42)!==0?1:ee(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Xl(e,l),Xt(o,e,l),ps;m.data==="$?"||pc(),t=Fi(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Je=un(m.nextSibling),zt=t,Ge=!0,yl=null,mn=!1,e!==null&&(Ft[It++]=Tn,Ft[It++]=Rn,Ft[It++]=pl,Tn=e.id,Rn=e.overflow,pl=t),t=Ji(t,l.children),t.flags|=4096);return t}return a?(Kn(),a=l.fallback,m=t.mode,C=e.child,w=C.sibling,l=Cn(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,w!==null?a=Cn(w,a):(a=ml(a,m,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,m=e.child.memoizedState,m===null?m=Ki(n):(C=m.cachePool,C!==null?(w=ut._currentValue,C=C.parent!==w?{parent:w,pool:w}:C):C=s0(),m={baseLanes:m.baseLanes|n,cachePool:C}),a.memoizedState=m,a.childLanes=Wi(e,o,n),t.memoizedState=Qi,l):(Qn(t),n=e.child,e=n.sibling,n=Cn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ji(e,t){return t=tu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function tu(e,t){return e=Gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Fi(e,t,n){return Il(t,e.child,null,n),e=Ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rs(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),pi(e.return,t,n)}function Ii(e,t,n,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a)}function Ds(e,t,n){var l=t.pendingProps,a=l.revealOrder,r=l.tail;if(yt(e,t,l.children,n),l=it.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rs(e,n,t);else if(e.tag===19)Rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(K(it,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Fr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ii(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Fr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ii(t,!0,n,null,r);break;case"together":Ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $i(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Br(e)))}function nd(e,t,n){switch(t.tag){case 3:$(t,t.stateNode.containerInfo),Nn(t,ut,e.memoizedState.cache),Da();break;case 27:case 5:Ve(t);break;case 4:$(t,t.stateNode.containerInfo);break;case 10:Nn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ts(e,t,n):(Qn(t),e=En(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ma(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Ds(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(it,it.current),l)break;return null;case 22:case 23:return t.lanes=0,xs(e,t,n);case 24:Nn(t,ut,e.memoizedState.cache)}return En(e,t,n)}function zs(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!$i(e,n)&&(t.flags&128)===0)return ft=!1,nd(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Ge&&(t.flags&1048576)!==0&&l0(t,Hr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")ci(l)?(e=Cl(l,e),t.tag=1,t=Ss(null,t,l,e,n)):(t.tag=0,t=Zi(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===Z){t.tag=11,t=gs(null,t,l,e,n);break e}else if(a===N){t.tag=14,t=ys(null,t,l,e,n);break e}}throw t=Ae(l)||l,Error(i(306,t,""))}}return t;case 0:return Zi(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Cl(l,t.pendingProps),Ss(e,t,l,a,n);case 3:e:{if($(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var r=t.memoizedState;a=r.element,Si(e,t),Ba(t,l,null,n);var o=t.memoizedState;if(l=o.cache,Nn(t,ut,l),l!==r.cache&&gi(t,[ut],n,!0),Ha(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Cs(e,t,l,n);break e}else if(l!==a){a=Wt(Error(i(424)),t),za(a),t=Cs(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=un(e.firstChild),zt=t,Ge=!0,yl=null,mn=!0,n=rs(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),l===a){t=En(e,t,n);break e}yt(e,t,l,n)}t=t.child}return t;case 26:return eu(e,t),e===null?(n=Of(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,l=pu(ce.current).createElement(n),l[ot]=t,l[St]=e,xt(l,n,e),st(l),t.stateNode=l):t.memoizedState=Of(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ve(t),e===null&&Ge&&(l=t.stateNode=wf(t.type,t.pendingProps,ce.current),zt=t,mn=!0,a=Je,ll(t.type)?(Vc=a,Je=un(l.firstChild)):Je=a),yt(e,t,t.pendingProps.children,n),eu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ge&&((a=l=Je)&&(l=Ed(l,t.type,t.pendingProps,mn),l!==null?(t.stateNode=l,zt=t,Je=un(l.firstChild),mn=!1,a=!0):a=!1),a||vl(t)),Ve(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,wc(a,r)?l=null:o!==null&&wc(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=Mi(e,t,K1,null,null,n),lr._currentValue=a),eu(e,t),yt(e,t,l,n),t.child;case 6:return e===null&&Ge&&((e=n=Je)&&(n=Ad(n,t.pendingProps,mn),n!==null?(t.stateNode=n,zt=t,Je=null,e=!0):e=!1),e||vl(t)),null;case 13:return Ts(e,t,n);case 4:return $(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Il(t,null,l,n):yt(e,t,l,n),t.child;case 11:return gs(e,t,t.type,t.pendingProps,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Nn(t,t.type,l.value),yt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,bl(t),a=Ct(a),l=l(a),t.flags|=1,yt(e,t,l,n),t.child;case 14:return ys(e,t,t.type,t.pendingProps,n);case 15:return vs(e,t,t.type,t.pendingProps,n);case 19:return Ds(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=tu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Cn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return xs(e,t,n);case 24:return bl(t),l=Ct(ut),e===null?(a=xi(),a===null&&(a=Qe,r=yi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:l,cache:a},_i(t),Nn(t,ut,a)):((e.lanes&n)!==0&&(Si(e,t),Ba(t,null,null,n),Ha()),a=e.memoizedState,r=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Nn(t,ut,l)):(l=r.cache,Nn(t,ut,l),l!==a.cache&&gi(t,[ut],n,!0))),yt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function An(e){e.flags|=4}function Ms(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jf(t)){if(t=$t.current,t!==null&&((Ee&4194048)===Ee?pn!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||t!==pn))throw Oa=bi,f0;e.flags|=8192}}function nu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gr():536870912,e.lanes|=t,na|=t)}function Na(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function ld(e,t,n){var l=t.pendingProps;switch(di(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return We(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),zn(ut),ie(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ra(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,u0())),We(t),null;case 26:return n=t.memoizedState,e===null?(An(t),n!==null?(We(t),Ms(t,n)):(We(t),t.flags&=-16777217)):n?n!==e.memoizedState?(An(t),We(t),Ms(t,n)):(We(t),t.flags&=-16777217):(e.memoizedProps!==l&&An(t),We(t),t.flags&=-16777217),null;case 27:Oe(t),n=ce.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return We(t),null}e=I.current,Ra(t)?a0(t):(e=wf(a,l,n),t.stateNode=e,An(t))}return We(t),null;case 5:if(Oe(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return We(t),null}if(e=I.current,Ra(t))a0(t);else{switch(a=pu(ce.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[ot]=t,e[St]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(xt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&An(t)}}return We(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=ce.current,Ra(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=zt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Sf(e.nodeValue,n)),e||vl(t)}else e=pu(e).createTextNode(l),e[ot]=t,t.stateNode=e}return We(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ra(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[ot]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else a=u0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(wn(t),t):(wn(t),null)}if(wn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),nu(t,t.updateQueue),We(t),null;case 4:return ie(),e===null&&Tc(t.stateNode.containerInfo),We(t),null;case 10:return zn(t.type),We(t),null;case 19:if(q(it),a=t.memoizedState,a===null)return We(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)Na(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Fr(e),r!==null){for(t.flags|=128,Na(a,!1),e=r.updateQueue,t.updateQueue=e,nu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)n0(n,e),n=n.sibling;return K(it,it.current&1|2),t.child}e=e.sibling}a.tail!==null&&pt()>ru&&(t.flags|=128,l=!0,Na(a,!1),t.lanes=4194304)}else{if(!l)if(e=Fr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,nu(t,e),Na(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Ge)return We(t),null}else 2*pt()-a.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,l=!0,Na(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=pt(),t.sibling=null,e=it.current,K(it,l?e&1|2:e&1),t):(We(t),null);case 22:case 23:return wn(t),Di(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),n=t.updateQueue,n!==null&&nu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&q(_l),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zn(ut),We(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function ad(e,t){switch(di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(ut),ie(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oe(t),null;case 13:if(wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(it),null;case 4:return ie(),null;case 10:return zn(t.type),null;case 22:case 23:return wn(t),Di(),e!==null&&q(_l),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zn(ut),null;case 25:return null;default:return null}}function ws(e,t){switch(di(t),t.tag){case 3:zn(ut),ie();break;case 26:case 27:case 5:Oe(t);break;case 4:ie();break;case 13:wn(t);break;case 19:q(it);break;case 10:zn(t.type);break;case 22:case 23:wn(t),Di(),e!==null&&q(_l);break;case 24:zn(ut)}}function qa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var r=n.create,o=n.inst;l=r(),o.destroy=l}n=n.next}while(n!==a)}}catch(m){Le(t,t.return,m)}}function Wn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&e)===e){var o=l.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,a=t;var C=n,w=m;try{w()}catch(P){Le(a,C,P)}}}l=l.next}while(l!==r)}}catch(P){Le(t,t.return,P)}}function Es(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{y0(t,n)}catch(l){Le(e,e.return,l)}}}function As(e,t,n){n.props=Cl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Le(e,t,l)}}function La(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Le(e,t,a)}}function gn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Le(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Le(e,t,a)}else n.current=null}function Os(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Le(e,e.return,a)}}function ec(e,t,n){try{var l=e.stateNode;Rd(l,e.type,n,t),l[St]=t}catch(a){Le(e,e.return,a)}}function Vs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mu));else if(l!==4&&(l===27&&ll(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}function lu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ll(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function Hs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xt(t,l,n),t[ot]=e,t[St]=n}catch(r){Le(e,e.return,r)}}var On=!1,et=!1,lc=!1,Bs=typeof WeakSet=="function"?WeakSet:Set,dt=null;function rd(e,t){if(e=e.containerInfo,zc=_u,e=Zo(e),ti(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,m=-1,C=-1,w=0,P=0,W=e,V=null;t:for(;;){for(var B;W!==n||a!==0&&W.nodeType!==3||(m=o+a),W!==r||l!==0&&W.nodeType!==3||(C=o+l),W.nodeType===3&&(o+=W.nodeValue.length),(B=W.firstChild)!==null;)V=W,W=B;for(;;){if(W===e)break t;if(V===n&&++w===a&&(m=o),V===r&&++P===l&&(C=o),(B=W.nextSibling)!==null)break;W=V,V=W.parentNode}W=B}n=m===-1||C===-1?null:{start:m,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mc={focusedElem:e,selectionRange:n},_u=!1,dt=t;dt!==null;)if(t=dt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,dt=e;else for(;dt!==null;){switch(t=dt,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,l=n.stateNode;try{var ye=Cl(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(ye,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(he){Le(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ac(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ac(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,dt=e;break}dt=t.return}}function Gs(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n),l&4&&qa(5,n);break;case 1:if(Jn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Le(n,n.return,o)}else{var a=Cl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Le(n,n.return,o)}}l&64&&Es(n),l&512&&La(n,n.return);break;case 3:if(Jn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{y0(e,t)}catch(o){Le(n,n.return,o)}}break;case 27:t===null&&l&4&&Hs(n);case 26:case 5:Jn(e,n),t===null&&l&4&&Os(n),l&512&&La(n,n.return);break;case 12:Jn(e,n);break;case 13:Jn(e,n),l&4&&ks(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=md.bind(null,n),Od(e,n))));break;case 22:if(l=n.memoizedState!==null||On,!l){t=t!==null&&t.memoizedState!==null||et,a=On;var r=et;On=l,(et=t)&&!r?Fn(e,n,(n.subtreeFlags&8772)!==0):Jn(e,n),On=a,et=r}break;case 30:break;default:Jn(e,n)}}function js(e){var t=e.alternate;t!==null&&(e.alternate=null,js(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,At=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Us(e,t,n),n=n.sibling}function Us(e,t,n){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(de,n)}catch{}switch(n.tag){case 26:et||gn(n,t),Vn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:et||gn(n,t);var l=Ke,a=At;ll(n.type)&&(Ke=n.stateNode,At=!1),Vn(e,t,n),$a(n.stateNode),Ke=l,At=a;break;case 5:et||gn(n,t);case 6:if(l=Ke,a=At,Ke=null,Vn(e,t,n),Ke=l,At=a,Ke!==null)if(At)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(r){Le(n,t,r)}else try{Ke.removeChild(n.stateNode)}catch(r){Le(n,t,r)}break;case 18:Ke!==null&&(At?(e=Ke,zf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ir(e)):zf(Ke,n.stateNode));break;case 4:l=Ke,a=At,Ke=n.stateNode.containerInfo,At=!0,Vn(e,t,n),Ke=l,At=a;break;case 0:case 11:case 14:case 15:et||Wn(2,n,t),et||Wn(4,n,t),Vn(e,t,n);break;case 1:et||(gn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&As(n,t,l)),Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:et=(l=et)||n.memoizedState!==null,Vn(e,t,n),et=l;break;default:Vn(e,t,n)}}function ks(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ir(e)}catch(n){Le(t,t.return,n)}}function ud(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bs),t;default:throw Error(i(435,e.tag))}}function ac(e,t){var n=ud(e);t.forEach(function(l){var a=pd.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function jt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],r=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(ll(m.type)){Ke=m.stateNode,At=!1;break e}break;case 5:Ke=m.stateNode,At=!1;break e;case 3:case 4:Ke=m.stateNode.containerInfo,At=!0;break e}m=m.return}if(Ke===null)throw Error(i(160));Us(r,o,a),Ke=null,At=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ys(t,e),t=t.sibling}var rn=null;function Ys(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Ut(e),l&4&&(Wn(3,e,e.return),qa(3,e),Wn(5,e,e.return));break;case 1:jt(t,e),Ut(e),l&512&&(et||n===null||gn(n,n.return)),l&64&&On&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=rn;if(jt(t,e),Ut(e),l&512&&(et||n===null||gn(n,n.return)),l&4){var r=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[ma]||r[ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),xt(r,l,n),r[ot]=e,st(r),l=r;break e;case"link":var o=Bf("link","href",a).get(l+(n.href||""));if(o){for(var m=0;m<o.length;m++)if(r=o[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(m,1);break t}}r=a.createElement(l),xt(r,l,n),a.head.appendChild(r);break;case"meta":if(o=Bf("meta","content",a).get(l+(n.content||""))){for(m=0;m<o.length;m++)if(r=o[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(m,1);break t}}r=a.createElement(l),xt(r,l,n),a.head.appendChild(r);break;default:throw Error(i(468,l))}r[ot]=e,st(r),l=r}e.stateNode=l}else Gf(a,e.type,e.stateNode);else e.stateNode=Hf(a,l,e.memoizedProps);else r!==l?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,l===null?Gf(a,e.type,e.stateNode):Hf(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ec(e,e.memoizedProps,n.memoizedProps)}break;case 27:jt(t,e),Ut(e),l&512&&(et||n===null||gn(n,n.return)),n!==null&&l&4&&ec(e,e.memoizedProps,n.memoizedProps);break;case 5:if(jt(t,e),Ut(e),l&512&&(et||n===null||gn(n,n.return)),e.flags&32){a=e.stateNode;try{Hl(a,"")}catch(B){Le(e,e.return,B)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,ec(e,a,n!==null?n.memoizedProps:a)),l&1024&&(lc=!0);break;case 6:if(jt(t,e),Ut(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(B){Le(e,e.return,B)}}break;case 3:if(vu=null,a=rn,rn=gu(t.containerInfo),jt(t,e),rn=a,Ut(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(B){Le(e,e.return,B)}lc&&(lc=!1,Xs(e));break;case 4:l=rn,rn=gu(e.stateNode.containerInfo),jt(t,e),Ut(e),rn=l;break;case 12:jt(t,e),Ut(e);break;case 13:jt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(sc=pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ac(e,l)));break;case 22:a=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,w=On,P=et;if(On=w||a,et=P||C,jt(t,e),et=P,On=w,Ut(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||C||On||et||Tl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(r=C.stateNode,a)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=C.stateNode;var W=C.memoizedProps.style,V=W!=null&&W.hasOwnProperty("display")?W.display:null;m.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(B){Le(C,C.return,B)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=a?"":C.memoizedProps}catch(B){Le(C,C.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,ac(e,n))));break;case 19:jt(t,e),Ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ac(e,l)));break;case 30:break;case 21:break;default:jt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Vs(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,r=tc(e);lu(e,r,a);break;case 5:var o=n.stateNode;n.flags&32&&(Hl(o,""),n.flags&=-33);var m=tc(e);lu(e,m,o);break;case 3:case 4:var C=n.stateNode.containerInfo,w=tc(e);nc(e,w,C);break;default:throw Error(i(161))}}catch(P){Le(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gs(e,t.alternate,t),t=t.sibling}function Tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Tl(t);break;case 1:gn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&As(t,t.return,n),Tl(t);break;case 27:$a(t.stateNode);case 26:case 5:gn(t,t.return),Tl(t);break;case 22:t.memoizedState===null&&Tl(t);break;case 30:Tl(t);break;default:Tl(t)}e=e.sibling}}function Fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Fn(a,r,n),qa(4,r);break;case 1:if(Fn(a,r,n),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(w){Le(l,l.return,w)}if(l=r,a=l.updateQueue,a!==null){var m=l.stateNode;try{var C=a.shared.hiddenCallbacks;if(C!==null)for(a.shared.hiddenCallbacks=null,a=0;a<C.length;a++)g0(C[a],m)}catch(w){Le(l,l.return,w)}}n&&o&64&&Es(r),La(r,r.return);break;case 27:Hs(r);case 26:case 5:Fn(a,r,n),n&&l===null&&o&4&&Os(r),La(r,r.return);break;case 12:Fn(a,r,n);break;case 13:Fn(a,r,n),n&&o&4&&ks(a,r);break;case 22:r.memoizedState===null&&Fn(a,r,n),La(r,r.return);break;case 30:break;default:Fn(a,r,n)}t=t.sibling}}function rc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wa(n))}function uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e))}function yn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ns(e,t,n,l),t=t.sibling}function Ns(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:yn(e,t,n,l),a&2048&&qa(9,t);break;case 1:yn(e,t,n,l);break;case 3:yn(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e)));break;case 12:if(a&2048){yn(e,t,n,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,m=r.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Le(t,t.return,C)}}else yn(e,t,n,l);break;case 13:yn(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?yn(e,t,n,l):Pa(e,t):r._visibility&2?yn(e,t,n,l):(r._visibility|=2,$l(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&rc(o,t);break;case 24:yn(e,t,n,l),a&2048&&uc(t.alternate,t);break;default:yn(e,t,n,l)}}function $l(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,m=n,C=l,w=o.flags;switch(o.tag){case 0:case 11:case 15:$l(r,o,m,C,a),qa(8,o);break;case 23:break;case 22:var P=o.stateNode;o.memoizedState!==null?P._visibility&2?$l(r,o,m,C,a):Pa(r,o):(P._visibility|=2,$l(r,o,m,C,a)),a&&w&2048&&rc(o.alternate,o);break;case 24:$l(r,o,m,C,a),a&&w&2048&&uc(o.alternate,o);break;default:$l(r,o,m,C,a)}t=t.sibling}}function Pa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Pa(n,l),a&2048&&rc(l.alternate,l);break;case 24:Pa(n,l),a&2048&&uc(l.alternate,l);break;default:Pa(n,l)}t=t.sibling}}var Za=8192;function ea(e){if(e.subtreeFlags&Za)for(e=e.child;e!==null;)qs(e),e=e.sibling}function qs(e){switch(e.tag){case 26:ea(e),e.flags&Za&&e.memoizedState!==null&&Pd(rn,e.memoizedState,e.memoizedProps);break;case 5:ea(e);break;case 3:case 4:var t=rn;rn=gu(e.stateNode.containerInfo),ea(e),rn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Za,Za=16777216,ea(e),Za=t):ea(e));break;default:ea(e)}}function Ls(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];dt=l,Zs(l,e)}Ls(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ps(e),e=e.sibling}function Ps(e){switch(e.tag){case 0:case 11:case 15:Qa(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Qa(e);break;case 12:Qa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,au(e)):Qa(e);break;default:Qa(e)}}function au(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];dt=l,Zs(l,e)}Ls(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),au(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,au(t));break;default:au(t)}e=e.sibling}}function Zs(e,t){for(;dt!==null;){var n=dt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,dt=l;else e:for(n=e;dt!==null;){l=dt;var a=l.sibling,r=l.return;if(js(l),l===n){dt=null;break e}if(a!==null){a.return=r,dt=a;break e}dt=r}}}var id={getCacheForType:function(e){var t=Ct(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},cd=typeof WeakMap=="function"?WeakMap:Map,je=0,Qe=null,ze=null,Ee=0,Ue=0,kt=null,In=!1,ta=!1,ic=!1,Hn=0,Fe=0,$n=0,Rl=0,cc=0,en=0,na=0,Ka=null,Ot=null,oc=!1,sc=0,ru=1/0,uu=null,el=null,vt=0,tl=null,la=null,aa=0,fc=0,dc=null,Qs=null,Wa=0,hc=null;function Yt(){if((je&2)!==0&&Ee!==0)return Ee&-Ee;if(j.T!==null){var e=Pl;return e!==0?e:bc()}return yr()}function Ks(){en===0&&(en=(Ee&536870912)===0||Ge?da():536870912);var e=$t.current;return e!==null&&(e.flags|=32),en}function Xt(e,t,n){(e===Qe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(ra(e,0),nl(e,Ee,en,!1)),qe(e,n),((je&2)===0||e!==Qe)&&(e===Qe&&((je&2)===0&&(Rl|=n),Fe===4&&nl(e,Ee,en,!1)),vn(e))}function Ws(e,t,n){if((je&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Zt(e,t),a=l?fd(e,t):gc(e,t,!0),r=l;do{if(a===0){ta&&!l&&nl(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!od(n)){a=gc(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;a=Ka;var C=m.current.memoizedState.isDehydrated;if(C&&(ra(m,o).flags|=256),o=gc(m,o,!1),o!==2){if(ic&&!C){m.errorRecoveryDisabledLanes|=r,Rl|=r,a=4;break e}r=Ot,Ot=a,r!==null&&(Ot===null?Ot=r:Ot.push.apply(Ot,r))}a=o}if(r=!1,a!==2)continue}}if(a===1){ra(e,0),nl(e,t,0,!0);break}e:{switch(l=e,r=a,r){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:nl(l,t,en,!In);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=sc+300-pt(),10<a)){if(nl(l,t,en,!In),Pt(l,0,!0)!==0)break e;l.timeoutHandle=Rf(Js.bind(null,l,n,Ot,uu,oc,t,en,Rl,na,In,r,2,-0,0),a);break e}Js(l,n,Ot,uu,oc,t,en,Rl,na,In,r,0,-0,0)}}break}while(!0);vn(e)}function Js(e,t,n,l,a,r,o,m,C,w,P,W,V,B){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(nr={stylesheets:null,count:0,unsuspend:Ld},qs(t),W=Zd(),W!==null)){e.cancelPendingCommit=W(lf.bind(null,e,t,r,n,l,a,o,m,C,P,1,V,B)),nl(e,r,o,!w);return}lf(e,t,r,n,l,a,o,m,C)}function od(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],r=a.getSnapshot;a=a.value;try{if(!Bt(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nl(e,t,n,l){t&=~cc,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var r=31-we(a),o=1<<r;l[r]=-1,a&=~o}n!==0&&at(e,n,t)}function iu(){return(je&6)===0?(Ja(0),!1):!0}function mc(){if(ze!==null){if(Ue===0)var e=ze.return;else e=ze,Dn=xl=null,Ai(e),Fl=null,Ya=0,e=ze;for(;e!==null;)ws(e.alternate,e),e=e.return;ze=null}}function ra(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),mc(),Qe=e,ze=n=Cn(e.current,null),Ee=t,Ue=0,kt=null,In=!1,ta=Zt(e,t),ic=!1,na=en=cc=Rl=$n=Fe=0,Ot=Ka=null,oc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-we(l),r=1<<a;t|=e[a],l&=~r}return Hn=t,wr(),n}function Fs(e,t){Re=null,j.H=Kr,t===Aa||t===Ur?(t=m0(),Ue=3):t===f0?(t=m0(),Ue=4):Ue=t===ps?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ze===null&&(Fe=1,$r(e,Wt(t,e.current)))}function Is(){var e=j.H;return j.H=Kr,e===null?Kr:e}function $s(){var e=j.A;return j.A=id,e}function pc(){Fe=4,In||(Ee&4194048)!==Ee&&$t.current!==null||(ta=!0),($n&134217727)===0&&(Rl&134217727)===0||Qe===null||nl(Qe,Ee,en,!1)}function gc(e,t,n){var l=je;je|=2;var a=Is(),r=$s();(Qe!==e||Ee!==t)&&(uu=null,ra(e,t)),t=!1;var o=Fe;e:do try{if(Ue!==0&&ze!==null){var m=ze,C=kt;switch(Ue){case 8:mc(),o=6;break e;case 3:case 2:case 9:case 6:$t.current===null&&(t=!0);var w=Ue;if(Ue=0,kt=null,ua(e,m,C,w),n&&ta){o=0;break e}break;default:w=Ue,Ue=0,kt=null,ua(e,m,C,w)}}sd(),o=Fe;break}catch(P){Fs(e,P)}while(!0);return t&&e.shellSuspendCounter++,Dn=xl=null,je=l,j.H=a,j.A=r,ze===null&&(Qe=null,Ee=0,wr()),o}function sd(){for(;ze!==null;)ef(ze)}function fd(e,t){var n=je;je|=2;var l=Is(),a=$s();Qe!==e||Ee!==t?(uu=null,ru=pt()+500,ra(e,t)):ta=Zt(e,t);e:do try{if(Ue!==0&&ze!==null){t=ze;var r=kt;t:switch(Ue){case 1:Ue=0,kt=null,ua(e,t,r,1);break;case 2:case 9:if(d0(r)){Ue=0,kt=null,tf(t);break}t=function(){Ue!==2&&Ue!==9||Qe!==e||(Ue=7),vn(e)},r.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:d0(r)?(Ue=0,kt=null,tf(t)):(Ue=0,kt=null,ua(e,t,r,7));break;case 5:var o=null;switch(ze.tag){case 26:o=ze.memoizedState;case 5:case 27:var m=ze;if(!o||jf(o)){Ue=0,kt=null;var C=m.sibling;if(C!==null)ze=C;else{var w=m.return;w!==null?(ze=w,cu(w)):ze=null}break t}}Ue=0,kt=null,ua(e,t,r,5);break;case 6:Ue=0,kt=null,ua(e,t,r,6);break;case 8:mc(),Fe=6;break e;default:throw Error(i(462))}}dd();break}catch(P){Fs(e,P)}while(!0);return Dn=xl=null,j.H=l,j.A=a,je=n,ze!==null?0:(Qe=null,Ee=0,wr(),Fe)}function dd(){for(;ze!==null&&!fn();)ef(ze)}function ef(e){var t=zs(e.alternate,e,Hn);e.memoizedProps=e.pendingProps,t===null?cu(e):ze=t}function tf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_s(n,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=_s(n,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:Ai(t);default:ws(n,t),t=ze=n0(t,Hn),t=zs(n,t,Hn)}e.memoizedProps=e.pendingProps,t===null?cu(e):ze=t}function ua(e,t,n,l){Dn=xl=null,Ai(t),Fl=null,Ya=0;var a=t.return;try{if(td(e,a,t,n,Ee)){Fe=1,$r(e,Wt(n,e.current)),ze=null;return}}catch(r){if(a!==null)throw ze=a,r;Fe=1,$r(e,Wt(n,e.current)),ze=null;return}t.flags&32768?(Ge||l===1?e=!0:ta||(Ee&536870912)!==0?e=!1:(In=e=!0,(l===2||l===9||l===3||l===6)&&(l=$t.current,l!==null&&l.tag===13&&(l.flags|=16384))),nf(t,e)):cu(t)}function cu(e){var t=e;do{if((t.flags&32768)!==0){nf(t,In);return}e=t.return;var n=ld(t.alternate,t,Hn);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Fe===0&&(Fe=5)}function nf(e,t){do{var n=ad(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);Fe=6,ze=null}function lf(e,t,n,l,a,r,o,m,C){e.cancelPendingCommit=null;do ou();while(vt!==0);if((je&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(r=t.lanes|t.childLanes,r|=ui,ln(e,n,r,o,m,C),e===Qe&&(ze=Qe=null,Ee=0),la=t,tl=e,aa=n,fc=r,dc=a,Qs=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gd(Lt,function(){return of(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,a=J.p,J.p=2,o=je,je|=4;try{rd(e,t,n)}finally{je=o,J.p=a,j.T=l}}vt=1,af(),rf(),uf()}}function af(){if(vt===1){vt=0;var e=tl,t=la,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var l=J.p;J.p=2;var a=je;je|=4;try{Ys(t,e);var r=Mc,o=Zo(e.containerInfo),m=r.focusedElem,C=r.selectionRange;if(o!==m&&m&&m.ownerDocument&&Po(m.ownerDocument.documentElement,m)){if(C!==null&&ti(m)){var w=C.start,P=C.end;if(P===void 0&&(P=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(P,m.value.length);else{var W=m.ownerDocument||document,V=W&&W.defaultView||window;if(V.getSelection){var B=V.getSelection(),ye=m.textContent.length,he=Math.min(C.start,ye),Xe=C.end===void 0?he:Math.min(C.end,ye);!B.extend&&he>Xe&&(o=Xe,Xe=he,he=o);var z=Lo(m,he),R=Lo(m,Xe);if(z&&R&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==R.node||B.focusOffset!==R.offset)){var M=W.createRange();M.setStart(z.node,z.offset),B.removeAllRanges(),he>Xe?(B.addRange(M),B.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),B.addRange(M))}}}}for(W=[],B=m;B=B.parentNode;)B.nodeType===1&&W.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<W.length;m++){var Q=W[m];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}_u=!!zc,Mc=zc=null}finally{je=a,J.p=l,j.T=n}}e.current=t,vt=2}}function rf(){if(vt===2){vt=0;var e=tl,t=la,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var l=J.p;J.p=2;var a=je;je|=4;try{Gs(e,t.alternate,t)}finally{je=a,J.p=l,j.T=n}}vt=3}}function uf(){if(vt===4||vt===3){vt=0,Nt();var e=tl,t=la,n=aa,l=Qs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,la=tl=null,cf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(el=null),bn(n),t=t.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(de,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=j.T,a=J.p,J.p=2,j.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var m=l[o];r(m.value,{componentStack:m.stack})}}finally{j.T=t,J.p=a}}(aa&3)!==0&&ou(),vn(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===hc?Wa++:(Wa=0,hc=e):Wa=0,Ja(0)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wa(t)))}function ou(e){return af(),rf(),uf(),of()}function of(){if(vt!==5)return!1;var e=tl,t=fc;fc=0;var n=bn(aa),l=j.T,a=J.p;try{J.p=32>n?32:n,j.T=null,n=dc,dc=null;var r=tl,o=aa;if(vt=0,la=tl=null,aa=0,(je&6)!==0)throw Error(i(331));var m=je;if(je|=4,Ps(r.current),Ns(r,r.current,o,n),je=m,Ja(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(de,r)}catch{}return!0}finally{J.p=a,j.T=l,cf(e,t)}}function sf(e,t,n){t=Wt(n,t),t=Pi(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(qe(e,2),vn(e))}function Le(e,t,n){if(e.tag===3)sf(e,e,n);else for(;t!==null;){if(t.tag===3){sf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(el===null||!el.has(l))){e=Wt(n,e),n=hs(2),l=Pn(t,n,2),l!==null&&(ms(n,l,t,e),qe(l,2),vn(l));break}}t=t.return}}function yc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new cd;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(ic=!0,a.add(n),e=hd.bind(null,e,t,n),t.then(e,e))}function hd(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qe===e&&(Ee&n)===n&&(Fe===4||Fe===3&&(Ee&62914560)===Ee&&300>pt()-sc?(je&2)===0&&ra(e,0):cc|=n,na===Ee&&(na=0)),vn(e)}function ff(e,t){t===0&&(t=gr()),e=Xl(e,t),e!==null&&(qe(e,t),vn(e))}function md(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ff(e,n)}function pd(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),ff(e,n)}function gd(e,t){return ct(e,t)}var su=null,ia=null,vc=!1,fu=!1,xc=!1,Dl=0;function vn(e){e!==ia&&e.next===null&&(ia===null?su=ia=e:ia=ia.next=e),fu=!0,vc||(vc=!0,vd())}function Ja(e,t){if(!xc&&fu){xc=!0;do for(var n=!1,l=su;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var o=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-we(42|e)+1)-1,r&=a&~(o&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,pf(l,r))}else r=Ee,r=Pt(l,l===Qe?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Zt(l,r)||(n=!0,pf(l,r));l=l.next}while(n);xc=!1}}function yd(){df()}function df(){fu=vc=!1;var e=0;Dl!==0&&(Dd()&&(e=Dl),Dl=0);for(var t=pt(),n=null,l=su;l!==null;){var a=l.next,r=hf(l,t);r===0?(l.next=null,n===null?su=a:n.next=a,a===null&&(ia=n)):(n=l,(e!==0||(r&3)!==0)&&(fu=!0)),l=a}Ja(e)}function hf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-we(r),m=1<<o,C=a[o];C===-1?((m&n)===0||(m&l)!==0)&&(a[o]=kn(m,t)):C<=t&&(e.expiredLanes|=m),r&=~m}if(t=Qe,n=Ee,n=Pt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Mt(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Zt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Mt(l),bn(n)){case 2:case 8:n=nn;break;case 32:n=Lt;break;case 268435456:n=ol;break;default:n=Lt}return l=mf.bind(null,e),n=ct(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Mt(l),e.callbackPriority=2,e.callbackNode=null,2}function mf(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ou()&&e.callbackNode!==n)return null;var l=Ee;return l=Pt(e,e===Qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ws(e,l,t),hf(e,pt()),e.callbackNode!=null&&e.callbackNode===n?mf.bind(null,e):null)}function pf(e,t){if(ou())return null;Ws(e,t,!0)}function vd(){Md(function(){(je&6)!==0?ct(dn,yd):df()})}function bc(){return Dl===0&&(Dl=da()),Dl}function gf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sr(""+e)}function yf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xd(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var r=gf((a[St]||null).action),o=l.submitter;o&&(t=(t=o[St]||null)?gf(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var m=new Dr("action","action",null,l,a);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dl!==0){var C=o?yf(a,o):new FormData(a);Yi(n,{pending:!0,data:C,method:a.method,action:r},null,C)}}else typeof r=="function"&&(m.preventDefault(),C=o?yf(a,o):new FormData(a),Yi(n,{pending:!0,data:C,method:a.method,action:r},r,C))},currentTarget:a}]})}}for(var _c=0;_c<ri.length;_c++){var Sc=ri[_c],bd=Sc.toLowerCase(),_d=Sc[0].toUpperCase()+Sc.slice(1);an(bd,"on"+_d)}an(Wo,"onAnimationEnd"),an(Jo,"onAnimationIteration"),an(Fo,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(U1,"onTransitionRun"),an(k1,"onTransitionStart"),an(Y1,"onTransitionCancel"),an(Io,"onTransitionEnd"),Al("onMouseEnter",["mouseout","mouseover"]),Al("onMouseLeave",["mouseout","mouseover"]),Al("onPointerEnter",["pointerout","pointerover"]),Al("onPointerLeave",["pointerout","pointerover"]),sl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sl("onBeforeInput",["compositionend","keypress","textInput","paste"]),sl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa));function vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var m=l[o],C=m.instance,w=m.currentTarget;if(m=m.listener,C!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=w;try{r(a)}catch(P){Ir(P)}a.currentTarget=null,r=C}else for(o=0;o<l.length;o++){if(m=l[o],C=m.instance,w=m.currentTarget,m=m.listener,C!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=w;try{r(a)}catch(P){Ir(P)}a.currentTarget=null,r=C}}}}function Me(e,t){var n=t[ha];n===void 0&&(n=t[ha]=new Set);var l=e+"__bubble";n.has(l)||(xf(t,e,2,!1),n.add(l))}function Cc(e,t,n){var l=0;t&&(l|=4),xf(n,e,l,t)}var du="_reactListening"+Math.random().toString(36).slice(2);function Tc(e){if(!e[du]){e[du]=!0,so.forEach(function(n){n!=="selectionchange"&&(Sd.has(n)||Cc(n,!1,e),Cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[du]||(t[du]=!0,Cc("selectionchange",!1,t))}}function xf(e,t,n,l){switch(qf(t)){case 2:var a=Wd;break;case 8:a=Jd;break;default:a=Uc}n=a.bind(null,t,n,e),a=void 0,!Zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Rc(e,t,n,l,a){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var m=l.stateNode.containerInfo;if(m===a)break;if(o===4)for(o=l.return;o!==null;){var C=o.tag;if((C===3||C===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;m!==null;){if(o=Ml(m),o===null)return;if(C=o.tag,C===5||C===6||C===26||C===27){l=r=o;continue e}m=m.parentNode}}l=l.return}Ro(function(){var w=r,P=Lu(n),W=[];e:{var V=$o.get(e);if(V!==void 0){var B=Dr,ye=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":B=g1;break;case"focusin":ye="focus",B=Ju;break;case"focusout":ye="blur",B=Ju;break;case"beforeblur":case"afterblur":B=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=x1;break;case Wo:case Jo:case Fo:B=i1;break;case Io:B=_1;break;case"scroll":case"scrollend":B=n1;break;case"wheel":B=C1;break;case"copy":case"cut":case"paste":B=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Eo;break;case"toggle":case"beforetoggle":B=R1}var he=(t&4)!==0,Xe=!he&&(e==="scroll"||e==="scrollend"),z=he?V!==null?V+"Capture":null:V;he=[];for(var R=w,M;R!==null;){var Q=R;if(M=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||M===null||z===null||(Q=ga(R,z),Q!=null&&he.push(Ia(R,Q,M))),Xe)break;R=R.return}0<he.length&&(V=new B(V,ye,null,n,P),W.push({event:V,listeners:he}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",V&&n!==qu&&(ye=n.relatedTarget||n.fromElement)&&(Ml(ye)||ye[Yn]))break e;if((B||V)&&(V=P.window===P?P:(V=P.ownerDocument)?V.defaultView||V.parentWindow:window,B?(ye=n.relatedTarget||n.toElement,B=w,ye=ye?Ml(ye):null,ye!==null&&(Xe=c(ye),he=ye.tag,ye!==Xe||he!==5&&he!==27&&he!==6)&&(ye=null)):(B=null,ye=w),B!==ye)){if(he=Mo,Q="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(he=Eo,Q="onPointerLeave",z="onPointerEnter",R="pointer"),Xe=B==null?V:pa(B),M=ye==null?V:pa(ye),V=new he(Q,R+"leave",B,n,P),V.target=Xe,V.relatedTarget=M,Q=null,Ml(P)===w&&(he=new he(z,R+"enter",ye,n,P),he.target=M,he.relatedTarget=Xe,Q=he),Xe=Q,B&&ye)t:{for(he=B,z=ye,R=0,M=he;M;M=ca(M))R++;for(M=0,Q=z;Q;Q=ca(Q))M++;for(;0<R-M;)he=ca(he),R--;for(;0<M-R;)z=ca(z),M--;for(;R--;){if(he===z||z!==null&&he===z.alternate)break t;he=ca(he),z=ca(z)}he=null}else he=null;B!==null&&bf(W,V,B,he,!1),ye!==null&&Xe!==null&&bf(W,Xe,ye,he,!0)}}e:{if(V=w?pa(w):window,B=V.nodeName&&V.nodeName.toLowerCase(),B==="select"||B==="input"&&V.type==="file")var le=Uo;else if(Go(V))if(ko)le=B1;else{le=V1;var De=O1}else B=V.nodeName,!B||B.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?w&&Nu(w.elementType)&&(le=Uo):le=H1;if(le&&(le=le(e,w))){jo(W,le,n,P);break e}De&&De(e,V,w),e==="focusout"&&w&&V.type==="number"&&w.memoizedProps.value!=null&&Xu(V,"number",V.value)}switch(De=w?pa(w):window,e){case"focusin":(Go(De)||De.contentEditable==="true")&&(Ul=De,ni=w,Ta=null);break;case"focusout":Ta=ni=Ul=null;break;case"mousedown":li=!0;break;case"contextmenu":case"mouseup":case"dragend":li=!1,Qo(W,n,P);break;case"selectionchange":if(j1)break;case"keydown":case"keyup":Qo(W,n,P)}var oe;if(Iu)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else jl?Ho(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Ao&&n.locale!=="ko"&&(jl||me!=="onCompositionStart"?me==="onCompositionEnd"&&jl&&(oe=Do()):(Xn=P,Qu="value"in Xn?Xn.value:Xn.textContent,jl=!0)),De=hu(w,me),0<De.length&&(me=new wo(me,e,null,n,P),W.push({event:me,listeners:De}),oe?me.data=oe:(oe=Bo(n),oe!==null&&(me.data=oe)))),(oe=z1?M1(e,n):w1(e,n))&&(me=hu(w,"onBeforeInput"),0<me.length&&(De=new wo("onBeforeInput","beforeinput",null,n,P),W.push({event:De,listeners:me}),De.data=oe)),xd(W,e,w,n,P)}vf(W,t)})}function Ia(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hu(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ga(e,n),a!=null&&l.unshift(Ia(e,a,r)),a=ga(e,t),a!=null&&l.push(Ia(e,a,r))),e.tag===3)return l;e=e.return}return[]}function ca(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bf(e,t,n,l,a){for(var r=t._reactName,o=[];n!==null&&n!==l;){var m=n,C=m.alternate,w=m.stateNode;if(m=m.tag,C!==null&&C===l)break;m!==5&&m!==26&&m!==27||w===null||(C=w,a?(w=ga(n,r),w!=null&&o.unshift(Ia(n,w,C))):a||(w=ga(n,r),w!=null&&o.push(Ia(n,w,C)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Cd=/\r\n?/g,Td=/\u0000|\uFFFD/g;function _f(e){return(typeof e=="string"?e:""+e).replace(Cd,`
`).replace(Td,"")}function Sf(e,t){return t=_f(t),_f(e)===t}function mu(){}function Ye(e,t,n,l,a,r){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Hl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Hl(e,""+l);break;case"className":xr(e,"class",l);break;case"tabIndex":xr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xr(e,n,l);break;case"style":Co(e,l,r);break;case"data":if(t!=="object"){xr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Sr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",a.name,a,null),Ye(e,t,"formEncType",a.formEncType,a,null),Ye(e,t,"formMethod",a.formMethod,a,null),Ye(e,t,"formTarget",a.formTarget,a,null)):(Ye(e,t,"encType",a.encType,a,null),Ye(e,t,"method",a.method,a,null),Ye(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Sr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=mu);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Sr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),vr(e,"popover",l);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=e1.get(n)||n,vr(e,n,l))}}function Dc(e,t,n,l,a,r){switch(n){case"style":Co(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Hl(e,l):(typeof l=="number"||typeof l=="bigint")&&Hl(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[St]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):vr(e,n,l)}}}function xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ye(e,t,r,o,n,null)}}a&&Ye(e,t,"srcSet",n.srcSet,n,null),l&&Ye(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var m=r=o=a=null,C=null,w=null;for(l in n)if(n.hasOwnProperty(l)){var P=n[l];if(P!=null)switch(l){case"name":a=P;break;case"type":o=P;break;case"checked":C=P;break;case"defaultChecked":w=P;break;case"value":r=P;break;case"defaultValue":m=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(137,t));break;default:Ye(e,t,l,P,n,null)}}xo(e,r,m,C,w,o,a,!1),br(e);return;case"select":Me("invalid",e),l=o=r=null;for(a in n)if(n.hasOwnProperty(a)&&(m=n[a],m!=null))switch(a){case"value":r=m;break;case"defaultValue":o=m;break;case"multiple":l=m;default:Ye(e,t,a,m,n,null)}t=r,n=o,e.multiple=!!l,t!=null?Vl(e,!!l,t,!1):n!=null&&Vl(e,!!l,n,!0);return;case"textarea":Me("invalid",e),r=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(m=n[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":a=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:Ye(e,t,o,m,n,null)}_o(e,l,a,r),br(e);return;case"option":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,t,C,l,n,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<Fa.length;l++)Me(Fa[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ye(e,t,w,l,n,null)}return;default:if(Nu(t)){for(P in n)n.hasOwnProperty(P)&&(l=n[P],l!==void 0&&Dc(e,t,P,l,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(l=n[m],l!=null&&Ye(e,t,m,l,n,null))}function Rd(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,o=null,m=null,C=null,w=null,P=null;for(B in n){var W=n[B];if(n.hasOwnProperty(B)&&W!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":C=W;default:l.hasOwnProperty(B)||Ye(e,t,B,null,l,W)}}for(var V in l){var B=l[V];if(W=n[V],l.hasOwnProperty(V)&&(B!=null||W!=null))switch(V){case"type":r=B;break;case"name":a=B;break;case"checked":w=B;break;case"defaultChecked":P=B;break;case"value":o=B;break;case"defaultValue":m=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(i(137,t));break;default:B!==W&&Ye(e,t,V,B,l,W)}}Yu(e,o,m,C,w,P,r,a);return;case"select":B=o=m=V=null;for(r in n)if(C=n[r],n.hasOwnProperty(r)&&C!=null)switch(r){case"value":break;case"multiple":B=C;default:l.hasOwnProperty(r)||Ye(e,t,r,null,l,C)}for(a in l)if(r=l[a],C=n[a],l.hasOwnProperty(a)&&(r!=null||C!=null))switch(a){case"value":V=r;break;case"defaultValue":m=r;break;case"multiple":o=r;default:r!==C&&Ye(e,t,a,r,l,C)}t=m,n=o,l=B,V!=null?Vl(e,!!n,V,!1):!!l!=!!n&&(t!=null?Vl(e,!!n,t,!0):Vl(e,!!n,n?[]:"",!1));return;case"textarea":B=V=null;for(m in n)if(a=n[m],n.hasOwnProperty(m)&&a!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ye(e,t,m,null,l,a)}for(o in l)if(a=l[o],r=n[o],l.hasOwnProperty(o)&&(a!=null||r!=null))switch(o){case"value":V=a;break;case"defaultValue":B=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==r&&Ye(e,t,o,a,l,r)}bo(e,V,B);return;case"option":for(var ye in n)if(V=n[ye],n.hasOwnProperty(ye)&&V!=null&&!l.hasOwnProperty(ye))switch(ye){case"selected":e.selected=!1;break;default:Ye(e,t,ye,null,l,V)}for(C in l)if(V=l[C],B=n[C],l.hasOwnProperty(C)&&V!==B&&(V!=null||B!=null))switch(C){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Ye(e,t,C,V,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)V=n[he],n.hasOwnProperty(he)&&V!=null&&!l.hasOwnProperty(he)&&Ye(e,t,he,null,l,V);for(w in l)if(V=l[w],B=n[w],l.hasOwnProperty(w)&&V!==B&&(V!=null||B!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,t));break;default:Ye(e,t,w,V,l,B)}return;default:if(Nu(t)){for(var Xe in n)V=n[Xe],n.hasOwnProperty(Xe)&&V!==void 0&&!l.hasOwnProperty(Xe)&&Dc(e,t,Xe,void 0,l,V);for(P in l)V=l[P],B=n[P],!l.hasOwnProperty(P)||V===B||V===void 0&&B===void 0||Dc(e,t,P,V,l,B);return}}for(var z in n)V=n[z],n.hasOwnProperty(z)&&V!=null&&!l.hasOwnProperty(z)&&Ye(e,t,z,null,l,V);for(W in l)V=l[W],B=n[W],!l.hasOwnProperty(W)||V===B||V==null&&B==null||Ye(e,t,W,V,l,B)}var zc=null,Mc=null;function pu(e){return e.nodeType===9?e:e.ownerDocument}function Cf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=null;function Dd(){var e=window.event;return e&&e.type==="popstate"?e===Ec?!1:(Ec=e,!0):(Ec=null,!1)}var Rf=typeof setTimeout=="function"?setTimeout:void 0,zd=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(wd)}:Rf;function wd(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function zf(e,t){var n=t,l=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<l&&8>l){n=l;var o=e.ownerDocument;if(n&1&&$a(o.documentElement),n&2&&$a(o.body),n&4)for(n=o.head,$a(n),o=n.firstChild;o;){var m=o.nextSibling,C=o.nodeName;o[ma]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=m}}if(a===0){e.removeChild(r),ir(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=r}while(n);ir(t)}function Ac(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ac(n),Gu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ed(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ma])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=un(e.nextSibling),e===null)break}return null}function Ad(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=un(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Od(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Vc=null;function Mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function wf(e,t,n){switch(t=pu(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function $a(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gu(e)}var tn=new Map,Ef=new Set;function gu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Bn=J.d;J.d={f:Vd,r:Hd,D:Bd,C:Gd,L:jd,m:Ud,X:Yd,S:kd,M:Xd};function Vd(){var e=Bn.f(),t=iu();return e||t}function Hd(e){var t=wl(e);t!==null&&t.tag===5&&t.type==="form"?W0(t):Bn.r(e)}var oa=typeof document>"u"?null:document;function Af(e,t,n){var l=oa;if(l&&typeof t=="string"&&t){var a=Kt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Ef.has(a)||(Ef.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),xt(t,"link",e),st(t),l.head.appendChild(t)))}}function Bd(e){Bn.D(e),Af("dns-prefetch",e,null)}function Gd(e,t){Bn.C(e,t),Af("preconnect",e,t)}function jd(e,t,n){Bn.L(e,t,n);var l=oa;if(l&&e&&t){var a='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kt(n.imageSizes)+'"]')):a+='[href="'+Kt(e)+'"]';var r=a;switch(t){case"style":r=sa(e);break;case"script":r=fa(e)}tn.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),tn.set(r,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(er(r))||t==="script"&&l.querySelector(tr(r))||(t=l.createElement("link"),xt(t,"link",e),st(t),l.head.appendChild(t)))}}function Ud(e,t){Bn.m(e,t);var n=oa;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kt(l)+'"][href="'+Kt(e)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=fa(e)}if(!tn.has(r)&&(e=v({rel:"modulepreload",href:e},t),tn.set(r,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(tr(r)))return}l=n.createElement("link"),xt(l,"link",e),st(l),n.head.appendChild(l)}}}function kd(e,t,n){Bn.S(e,t,n);var l=oa;if(l&&e){var a=El(l).hoistableStyles,r=sa(e);t=t||"default";var o=a.get(r);if(!o){var m={loading:0,preload:null};if(o=l.querySelector(er(r)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=tn.get(r))&&Hc(e,n);var C=o=l.createElement("link");st(C),xt(C,"link",e),C._p=new Promise(function(w,P){C.onload=w,C.onerror=P}),C.addEventListener("load",function(){m.loading|=1}),C.addEventListener("error",function(){m.loading|=2}),m.loading|=4,yu(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:m},a.set(r,o)}}}function Yd(e,t){Bn.X(e,t);var n=oa;if(n&&e){var l=El(n).hoistableScripts,a=fa(e),r=l.get(a);r||(r=n.querySelector(tr(a)),r||(e=v({src:e,async:!0},t),(t=tn.get(a))&&Bc(e,t),r=n.createElement("script"),st(r),xt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Xd(e,t){Bn.M(e,t);var n=oa;if(n&&e){var l=El(n).hoistableScripts,a=fa(e),r=l.get(a);r||(r=n.querySelector(tr(a)),r||(e=v({src:e,async:!0,type:"module"},t),(t=tn.get(a))&&Bc(e,t),r=n.createElement("script"),st(r),xt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Of(e,t,n,l){var a=(a=ce.current)?gu(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=sa(n.href),n=El(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=sa(n.href);var r=El(a).hoistableStyles,o=r.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=a.querySelector(er(e)))&&!r._p&&(o.instance=r,o.state.loading=5),tn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},tn.set(e,n),r||Nd(a,e,n,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fa(n),n=El(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function sa(e){return'href="'+Kt(e)+'"'}function er(e){return'link[rel="stylesheet"]['+e+"]"}function Vf(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Nd(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),xt(t,"link",n),st(t),e.head.appendChild(t))}function fa(e){return'[src="'+Kt(e)+'"]'}function tr(e){return"script[async]"+e}function Hf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(l)return t.instance=l,st(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),st(l),xt(l,"style",a),yu(l,n.precedence,e),t.instance=l;case"stylesheet":a=sa(n.href);var r=e.querySelector(er(a));if(r)return t.state.loading|=4,t.instance=r,st(r),r;l=Vf(n),(a=tn.get(a))&&Hc(l,a),r=(e.ownerDocument||e).createElement("link"),st(r);var o=r;return o._p=new Promise(function(m,C){o.onload=m,o.onerror=C}),xt(r,"link",l),t.state.loading|=4,yu(r,n.precedence,e),t.instance=r;case"script":return r=fa(n.src),(a=e.querySelector(tr(r)))?(t.instance=a,st(a),a):(l=n,(a=tn.get(r))&&(l=v({},n),Bc(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),st(a),xt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,yu(l,n.precedence,e));return t.instance}function yu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,o=0;o<l.length;o++){var m=l[o];if(m.dataset.precedence===t)r=m;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vu=null;function Bf(e,t,n){if(vu===null){var l=new Map,a=vu=new Map;a.set(n,l)}else a=vu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[ma]||r[ot]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var m=l.get(o);m?m.push(r):l.set(o,[r])}}return l}function Gf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qd(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nr=null;function Ld(){}function Pd(e,t,n){if(nr===null)throw Error(i(475));var l=nr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=sa(n.href),r=e.querySelector(er(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=xu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,st(r);return}r=e.ownerDocument||e,n=Vf(n),(a=tn.get(a))&&Hc(n,a),r=r.createElement("link"),st(r);var o=r;o._p=new Promise(function(m,C){o.onload=m,o.onerror=C}),xt(r,"link",n),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=xu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Zd(){if(nr===null)throw Error(i(475));var e=nr;return e.stylesheets&&e.count===0&&Gc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function xu(){if(this.count--,this.count===0){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bu=null;function Gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bu=new Map,t.forEach(Qd,e),bu=null,xu.call(e))}function Qd(e,t){if(!(t.state.loading&4)){var n=bu.get(e);if(n)var l=n.get(null);else{n=new Map,bu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var o=a[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),r=n.get(o)||l,r===l&&n.set(null,a),n.set(o,a),this.count++,l=xu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var lr={$$typeof:k,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kd(e,t,n,l,a,r,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Uf(e,t,n,l,a,r,o,m,C,w,P,W){return e=new Kd(e,t,n,o,m,C,w,W),t=1,r===!0&&(t|=24),r=Gt(3,null,null,t),e.current=r,r.stateNode=e,t=yi(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:n,cache:t},_i(r),e}function kf(e){return e?(e=Nl,e):Nl}function Yf(e,t,n,l,a,r){a=kf(a),l.context===null?l.context=a:l.pendingContext=a,l=Ln(t),l.payload={element:n},r=r===void 0?null:r,r!==null&&(l.callback=r),n=Pn(e,l,t),n!==null&&(Xt(n,e,t),Va(n,e,t))}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jc(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function Nf(e){if(e.tag===13){var t=Xl(e,67108864);t!==null&&Xt(t,e,67108864),jc(e,67108864)}}var _u=!0;function Wd(e,t,n,l){var a=j.T;j.T=null;var r=J.p;try{J.p=2,Uc(e,t,n,l)}finally{J.p=r,j.T=a}}function Jd(e,t,n,l){var a=j.T;j.T=null;var r=J.p;try{J.p=8,Uc(e,t,n,l)}finally{J.p=r,j.T=a}}function Uc(e,t,n,l){if(_u){var a=kc(l);if(a===null)Rc(e,t,l,Su,n),Lf(e,l);else if(Id(a,e,t,n,l))l.stopPropagation();else if(Lf(e,l),t&4&&-1<Fd.indexOf(e)){for(;a!==null;){var r=wl(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=_t(r.pendingLanes);if(o!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var C=1<<31-we(o);m.entanglements[1]|=C,o&=~C}vn(r),(je&6)===0&&(ru=pt()+500,Ja(0))}}break;case 13:m=Xl(r,2),m!==null&&Xt(m,r,2),iu(),jc(r,2)}if(r=kc(l),r===null&&Rc(e,t,l,Su,n),r===a)break;a=r}a!==null&&l.stopPropagation()}else Rc(e,t,l,null,n)}}function kc(e){return e=Lu(e),Yc(e)}var Su=null;function Yc(e){if(Su=null,e=Ml(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Su=e,null}function qf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qt()){case dn:return 2;case nn:return 8;case Lt:case Un:return 32;case ol:return 268435456;default:return 32}default:return 32}}var Xc=!1,al=null,rl=null,ul=null,ar=new Map,rr=new Map,il=[],Fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lf(e,t){switch(e){case"focusin":case"focusout":al=null;break;case"dragenter":case"dragleave":rl=null;break;case"mouseover":case"mouseout":ul=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function ur(e,t,n,l,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},t!==null&&(t=wl(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Id(e,t,n,l,a){switch(t){case"focusin":return al=ur(al,e,t,n,l,a),!0;case"dragenter":return rl=ur(rl,e,t,n,l,a),!0;case"mouseover":return ul=ur(ul,e,t,n,l,a),!0;case"pointerover":var r=a.pointerId;return ar.set(r,ur(ar.get(r)||null,e,t,n,l,a)),!0;case"gotpointercapture":return r=a.pointerId,rr.set(r,ur(rr.get(r)||null,e,t,n,l,a)),!0}return!1}function Pf(e){var t=Ml(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){if(n.tag===13){var l=Yt();l=ee(l);var a=Xl(n,l);a!==null&&Xt(a,n,l),jc(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);qu=l,n.target.dispatchEvent(l),qu=null}else return t=wl(n),t!==null&&Nf(t),e.blockedOn=n,!1;t.shift()}return!0}function Zf(e,t,n){Cu(e)&&n.delete(t)}function $d(){Xc=!1,al!==null&&Cu(al)&&(al=null),rl!==null&&Cu(rl)&&(rl=null),ul!==null&&Cu(ul)&&(ul=null),ar.forEach(Zf),rr.forEach(Zf)}function Tu(e,t){e.blockedOn===t&&(e.blockedOn=null,Xc||(Xc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,$d)))}var Ru=null;function Qf(e){Ru!==e&&(Ru=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ru===e&&(Ru=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Yc(l||n)===null)continue;break}var r=wl(n);r!==null&&(e.splice(t,3),t-=3,Yi(r,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function ir(e){function t(C){return Tu(C,e)}al!==null&&Tu(al,e),rl!==null&&Tu(rl,e),ul!==null&&Tu(ul,e),ar.forEach(t),rr.forEach(t);for(var n=0;n<il.length;n++){var l=il[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<il.length&&(n=il[0],n.blockedOn===null);)Pf(n),n.blockedOn===null&&il.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],r=n[l+1],o=a[St]||null;if(typeof r=="function")o||Qf(n);else if(o){var m=null;if(r&&r.hasAttribute("formAction")){if(a=r,o=r[St]||null)m=o.formAction;else if(Yc(a)!==null)continue}else m=o.action;typeof m=="function"?n[l+1]=m:(n.splice(l,3),l-=3),Qf(n)}}}function Nc(e){this._internalRoot=e}Du.prototype.render=Nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=Yt();Yf(n,l,e,t,null,null)},Du.prototype.unmount=Nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yf(e.current,2,null,e,null,null),iu(),t[Yn]=null}};function Du(e){this._internalRoot=e}Du.prototype.unstable_scheduleHydration=function(e){if(e){var t=yr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<il.length&&t!==0&&t<il[n].priority;n++);il.splice(n,0,e),n===0&&Pf(e)}};var Kf=u.version;if(Kf!=="19.1.1")throw Error(i(527,Kf,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var e3={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{de=zu.inject(e3),Te=zu}catch{}}return or.createRoot=function(e,t){if(!h(e))throw Error(i(299));var n=!1,l="",a=os,r=ss,o=fs,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Uf(e,1,!1,null,null,n,l,a,r,o,m,null),e[Yn]=t.current,Tc(e),new Nc(t)},or.hydrateRoot=function(e,t,n){if(!h(e))throw Error(i(299));var l=!1,a="",r=os,o=ss,m=fs,C=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=Uf(e,1,!0,t,n??null,l,a,r,o,m,C,w),t.context=kf(null),n=t.current,l=Yt(),l=ee(l),a=Ln(l),a.callback=null,Pn(n,a,l),n=l,t.current.lanes=n,qe(t,n),vn(t),e[Yn]=t.current,Tc(e),new Du(t)},or.version="19.1.1",or}var a2;function s3(){if(a2)return Pc.exports;a2=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Pc.exports=o3(),Pc.exports}var f3=s3();const d3=Au(f3);async function h3(){if(window.__wgpuDevice)return window.__wgpuDevice;const s=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!s)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=s;const u=await s.requestDevice();return u.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=u,u.lost.then(()=>{window.__wgpuDevice===u&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),u}/**
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
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(u){u!==void 0&&(this._Seed=u)}SetSeed(u){this._Seed=u}SetFrequency(u){this._Frequency=u}SetNoiseType(u){this._NoiseType=u,this._UpdateTransformType3D()}SetRotationType3D(u){this._RotationType3D=u,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(u){this._FractalType=u}SetFractalOctaves(u){this._Octaves=u,this._CalculateFractalBounding()}SetFractalLacunarity(u){this._Lacunarity=u}SetFractalGain(u){this._Gain=u,this._CalculateFractalBounding()}SetFractalWeightedStrength(u){this._WeightedStrength=u}SetFractalPingPongStrength(u){this._PingPongStrength=u}SetCellularDistanceFunction(u){this._CellularDistanceFunction=u}SetCellularReturnType(u){this._CellularReturnType=u}SetCellularJitter(u){this._CellularJitterModifier=u}SetDomainWarpType(u){this._DomainWarpType=u,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(u){this._DomainWarpAmp=u}GetNoise(u,f,i){let h=(d,p)=>{switch(d*=this._Frequency,p*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const g=.5*(1.7320508075688772-1);let v=(d+p)*g;d+=v,p+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,d,p);case D.FractalType.FBm:return this._GenFractalFBmR2(d,p);case D.FractalType.Ridged:return this._GenFractalRidgedR2(d,p);case D.FractalType.PingPong:return this._GenFractalPingPongR2(d,p)}},c=(d,p,y)=>{switch(d*=this._Frequency,p*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let _=d+p,S=_*-.211324865405187;y*=.577350269189626,d+=S-y,p+=S-y,y+=_*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let _=d+y,S=_*-.211324865405187;p*=.577350269189626,d+=S-p,y+=S-p,p+=_*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const g=2/3;let v=(d+p+y)*g;d=v-d,p=v-p,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,d,p,y);case D.FractalType.FBm:return this._GenFractalFBmR3(d,p,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(d,p,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(d,p,y)}};if(arguments.length===2)return h(u,f);if(arguments.length===3)return c(u,f,i)}DomainWrap(u){switch(this._FractalType){default:this._DomainWarpSingle(u);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(u);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(u);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(u,f,i){return u+i*(f-u)}static _InterpHermite(u){return u*u*(3-2*u)}static _InterpQuintic(u){return u*u*u*(u*(u*6-15)+10)}static _CubicLerp(u,f,i,h,c){let d=h-i-(u-f);return c*c*c*d+c*c*(u-f-d)+c*(i-u)+f}static _PingPong(u){return u-=Math.trunc(u*.5)*2,u<1?u:2-u}_CalculateFractalBounding(){let u=Math.abs(this._Gain),f=u,i=1;for(let h=1;h<this._Octaves;h++)i+=f,f*=u;this._FractalBounding=1/i}_HashR2(u,f,i){let h=u^f^i;return h=Math.imul(h,668265261),h}_HashR3(u,f,i,h){let c=u^f^i^h;return c=Math.imul(c,668265261),c}_ValCoordR2(u,f,i){let h=this._HashR2(u,f,i);return h=Math.imul(h,h),h^=h<<19,h*(1/2147483648)}_ValCoordR3(u,f,i,h){let c=this._HashR3(u,f,i,h);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(u,f,i,h,c){let d=this._HashR2(u,f,i);d^=d>>15,d&=254;let p=this._Gradients2D[d],y=this._Gradients2D[d|1];return h*p+c*y}_GradCoordR3(u,f,i,h,c,d,p){let y=this._HashR3(u,f,i,h);y^=y>>15,y&=252;let g=this._Gradients3D[y],v=this._Gradients3D[y|1],_=this._Gradients3D[y|2];return c*g+d*v+p*_}_GenNoiseSingleR2(u,f,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(u,f,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(u,f,i);case D.NoiseType.Cellular:return this._SingleCellularR2(u,f,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(u,f,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(u,f,i);case D.NoiseType.Value:return this._SingleValueR2(u,f,i);default:return 0}}_GenNoiseSingleR3(u,f,i,h){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(u,f,i,h);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(u,f,i,h);case D.NoiseType.Cellular:return this._SingleCellularR3(u,f,i,h);case D.NoiseType.Perlin:return this._SinglePerlinR3(u,f,i,h);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(u,f,i,h);case D.NoiseType.Value:return this._SingleValueR3(u,f,i,h);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(u,f){let i=this._Seed,h=0,c=this._FractalBounding;for(let d=0;d<this._Octaves;d++){let p=this._GenNoiseSingleR2(i++,u,f);h+=p*c,c*=D._Lerp(1,Math.min(p+1,2)*.5,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,c*=this._Gain}return h}_GenFractalFBmR3(u,f,i){let h=this._Seed,c=0,d=this._FractalBounding;for(let p=0;p<this._Octaves;p++){let y=this._GenNoiseSingleR3(h++,u,f,i);c+=y*d,d*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,i*=this._Lacunarity,d*=this._Gain}return c}_GenFractalRidgedR2(u,f){let i=this._Seed,h=0,c=this._FractalBounding;for(let d=0;d<this._Octaves;d++){let p=Math.abs(this._GenNoiseSingleR2(i++,u,f));h+=(p*-2+1)*c,c*=D._Lerp(1,1-p,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,c*=this._Gain}return h}_GenFractalRidgedR3(u,f,i){let h=this._Seed,c=0,d=this._FractalBounding;for(let p=0;p<this._Octaves;p++){let y=Math.abs(this._GenNoiseSingleR3(h++,u,f,i));c+=(y*-2+1)*d,d*=D._Lerp(1,1-y,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,i*=this._Lacunarity,d*=this._Gain}return c}_GenFractalPingPongR2(u,f){let i=this._Seed,h=0,c=this._FractalBounding;for(let d=0;d<this._Octaves;d++){let p=D._PingPong((this._GenNoiseSingleR2(i++,u,f)+1)*this._PingPongStrength);h+=(p-.5)*2*c,c*=D._Lerp(1,p,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,c*=this._Gain}return h}_GenFractalPingPongR3(u,f,i){let h=this._Seed,c=0,d=this._FractalBounding;for(let p=0;p<this._Octaves;p++){let y=D._PingPong((this._GenNoiseSingleR3(h++,u,f,i)+1)*this._PingPongStrength);c+=(y-.5)*2*d,d*=D._Lerp(1,y,this._WeightedStrength),u*=this._Lacunarity,f*=this._Lacunarity,i*=this._Lacunarity,d*=this._Gain}return c}_SingleOpenSimplex2R2(u,f,i){const c=(3-1.7320508075688772)/6;let d=Math.floor(f),p=Math.floor(i),y=f-d,g=i-p,v=(y+g)*c,_=y-v,S=g-v;d=Math.imul(d,this._PrimeX),p=Math.imul(p,this._PrimeY);let T,E,H,A=.5-_*_-S*S;A<=0?T=0:T=A*A*(A*A)*this._GradCoordR2(u,d,p,_,S);let X=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+A);if(X<=0)H=0;else{let O=_+(2*c-1),k=S+(2*c-1);H=X*X*(X*X)*this._GradCoordR2(u,d+this._PrimeX,p+this._PrimeY,O,k)}if(S>_){let O=_+c,k=S+(c-1),Z=.5-O*O-k*k;Z<=0?E=0:E=Z*Z*(Z*Z)*this._GradCoordR2(u,d,p+this._PrimeY,O,k)}else{let O=_+(c-1),k=S+c,Z=.5-O*O-k*k;Z<=0?E=0:E=Z*Z*(Z*Z)*this._GradCoordR2(u,d+this._PrimeX,p,O,k)}return(T+E+H)*99.83685446303647}_SingleOpenSimplex2R3(u,f,i,h){let c=Math.round(f),d=Math.round(i),p=Math.round(h),y=f-c,g=i-d,v=h-p,_=Math.trunc(-1-g|1),S=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),E=S*-y,H=_*-g,A=T*-v;c=Math.imul(c,this._PrimeX),d=Math.imul(d,this._PrimeY),p=Math.imul(p,this._PrimeZ);let X=0,O=.6-y*y-(g*g+v*v);for(let k=0;;k++){if(O>0&&(X+=O*O*(O*O)*this._GradCoordR3(u,c,d,p,y,g,v)),E>=H&&E>=A){let Z=O+E+E;Z>1&&(Z-=1,X+=Z*Z*(Z*Z)*this._GradCoordR3(u,c-S*this._PrimeX,d,p,y+S,g,v))}else if(H>E&&H>=A){let Z=O+H+H;Z>1&&(Z-=1,X+=Z*Z*(Z*Z)*this._GradCoordR3(u,c,d-_*this._PrimeY,p,y,g+_,v))}else{let Z=O+A+A;Z>1&&(Z-=1,X+=Z*Z*(Z*Z)*this._GradCoordR3(u,c,d,p-T*this._PrimeZ,y,g,v+T))}if(k===1)break;E=.5-E,H=.5-H,A=.5-A,y=S*E,g=_*H,v=T*A,O+=.75-E-(H+A),c+=S>>1&this._PrimeX,d+=_>>1&this._PrimeY,p+=T>>1&this._PrimeZ,S=-S,_=-_,T=-T,u=~u}return X*32.69428253173828}_SingleOpenSimplex2SR2(u,f,i){const c=(3-1.7320508075688772)/6;let d=Math.floor(f),p=Math.floor(i),y=f-d,g=i-p;d=Math.imul(d,this._PrimeX),p=Math.imul(p,this._PrimeY);let v=d+this._PrimeX,_=p+this._PrimeY,S=(y+g)*c,T=y-S,E=g-S,H=2/3-T*T-E*E,A=H*H*(H*H)*this._GradCoordR2(u,d,p,T,E),X=2*(1-2*c)*(1/c-2)*S+(-2*(1-2*c)*(1-2*c)+H),O=T-(1-2*c),k=E-(1-2*c);A+=X*X*(X*X)*this._GradCoordR2(u,v,_,O,k);let Z=y-g;if(S>c){if(y+Z>1){let Y=T+(3*c-2),U=E+(3*c-1),N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d+(this._PrimeX<<1),p+this._PrimeY,Y,U))}else{let Y=T+c,U=E+(c-1),N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d,p+this._PrimeY,Y,U))}if(g-Z>1){let Y=T+(3*c-1),U=E+(3*c-2),N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d+this._PrimeX,p+(this._PrimeY<<1),Y,U))}else{let Y=T+(c-1),U=E+c,N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d+this._PrimeX,p,Y,U))}}else{if(y+Z<0){let Y=T+(1-c),U=E-c,N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d-this._PrimeX,p,Y,U))}else{let Y=T+(c-1),U=E+c,N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d+this._PrimeX,p,Y,U))}if(g<Z){let Y=T-c,U=E-(c-1),N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d,p-this._PrimeY,Y,U))}else{let Y=T+c,U=E+(c-1),N=2/3-Y*Y-U*U;N>0&&(A+=N*N*(N*N)*this._GradCoordR2(u,d,p+this._PrimeY,Y,U))}}return A*18.24196194486065}_SingleOpenSimplex2SR3(u,f,i,h){let c=Math.floor(f),d=Math.floor(i),p=Math.floor(h),y=f-c,g=i-d,v=h-p;c=Math.imul(c,this._PrimeX),d=Math.imul(d,this._PrimeY),p=Math.imul(p,this._PrimeZ);let _=u+1293373,S=Math.trunc(-.5-y),T=Math.trunc(-.5-g),E=Math.trunc(-.5-v),H=y+S,A=g+T,X=v+E,O=.75-H*H-A*A-X*X,k=O*O*(O*O)*this._GradCoordR3(u,c+(S&this._PrimeX),d+(T&this._PrimeY),p+(E&this._PrimeZ),H,A,X),Z=y-.5,Y=g-.5,U=v-.5,N=.75-Z*Z-Y*Y-U*U;k+=N*N*(N*N)*this._GradCoordR3(_,c+this._PrimeX,d+this._PrimeY,p+this._PrimeZ,Z,Y,U);let ue=((S|1)<<1)*Z,ne=((T|1)<<1)*Y,ge=((E|1)<<1)*U,Se=(-2-(S<<2))*Z-1,re=(-2-(T<<2))*Y-1,_e=(-2-(E<<2))*U-1,Ae=!1,pe=ue+O;if(pe>0){let x=H-(S|1);k+=pe*pe*(pe*pe)*this._GradCoordR3(u,c+(~S&this._PrimeX),d+(T&this._PrimeY),p+(E&this._PrimeZ),x,A,X)}else{let x=ne+ge+O;if(x>0){let q=H,K=A-(T|1),I=X-(E|1);k+=x*x*(x*x)*this._GradCoordR3(u,c+(S&this._PrimeX),d+(~T&this._PrimeY),p+(~E&this._PrimeZ),q,K,I)}let G=Se+N;if(G>0){let q=(S|1)+Z;k+=G*G*(G*G)*this._GradCoordR3(_,c+(S&this._PrimeX*2),d+this._PrimeY,p+this._PrimeZ,q,Y,U),Ae=!0}}let j=!1,J=ne+O;if(J>0){let x=H,G=A-(T|1);k+=J*J*(J*J)*this._GradCoordR3(u,c+(S&this._PrimeX),d+(~T&this._PrimeY),p+(E&this._PrimeZ),x,G,X)}else{let x=ue+ge+O;if(x>0){let q=H-(S|1),K=A,I=X-(E|1);k+=x*x*(x*x)*this._GradCoordR3(u,c+(~S&this._PrimeX),d+(T&this._PrimeY),p+(~E&this._PrimeZ),q,K,I)}let G=re+N;if(G>0){let q=Z,K=(T|1)+Y;k+=G*G*(G*G)*this._GradCoordR3(_,c+this._PrimeX,d+(T&this._PrimeY<<1),p+this._PrimeZ,q,K,U),j=!0}}let F=!1,se=ge+O;if(se>0){let x=H,G=A,q=X-(E|1);k+=se*se*(se*se)*this._GradCoordR3(u,c+(S&this._PrimeX),d+(T&this._PrimeY),p+(~E&this._PrimeZ),x,G,q)}else{let x=ue+ne+O;if(x>0){let q=H-(S|1),K=A-(T|1);k+=x*x*(x*x)*this._GradCoordR3(u,c+(~S&this._PrimeX),d+(~T&this._PrimeY),p+(E&this._PrimeZ),q,K,X)}let G=_e+N;if(G>0){let q=Z,K=Y,I=(E|1)+U;k+=G*G*(G*G)*this._GradCoordR3(_,c+this._PrimeX,d+this._PrimeY,p+(E&this._PrimeZ<<1),q,K,I),F=!0}}if(!Ae){let x=re+_e+N;if(x>0){let G=Z,q=(T|1)+Y,K=(E|1)+U;k+=x*x*(x*x)*this._GradCoordR3(_,c+this._PrimeX,d+(T&this._PrimeY<<1),p+(E&this._PrimeZ<<1),G,q,K)}}if(!j){let x=Se+_e+N;if(x>0){let G=(S|1)+Z,q=Y,K=(E|1)+U;k+=x*x*(x*x)*this._GradCoordR3(_,c+(S&this._PrimeX*2),d+this._PrimeY,p+(E&this._PrimeZ<<1),G,q,K)}}if(!F){let x=Se+re+N;if(x>0){let G=(S|1)+Z,q=(T|1)+Y;k+=x*x*(x*x)*this._GradCoordR3(_,c+(S&this._PrimeX<<1),d+(T&this._PrimeY<<1),p+this._PrimeZ,G,q,U)}}return k*9.046026385208288}_SingleCellularR2(u,f,i){let h=Math.round(f),c=Math.round(i),d=Number.MAX_VALUE,p=Number.MAX_VALUE,y=0,g=.43701595*this._CellularJitterModifier,v=(h-1)*this._PrimeX,_=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let S=h-1;S<=h+1;S++){let T=_;for(let E=c-1;E<=c+1;E++){let H=this._HashR2(u,v,T),A=H&510,X=S-f+this._RandVecs2D[A]*g,O=E-i+this._RandVecs2D[A|1]*g,k=X*X+O*O;p=Math.max(Math.min(p,k),d),k<d&&(d=k,y=H),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let S=h-1;S<=h+1;S++){let T=_;for(let E=c-1;E<=c+1;E++){let H=this._HashR2(u,v,T),A=H&510,X=S-f+this._RandVecs2D[A]*g,O=E-i+this._RandVecs2D[A|1]*g,k=Math.abs(X)+Math.abs(O);p=Math.max(Math.min(p,k),d),k<d&&(d=k,y=H),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let S=h-1;S<=h+1;S++){let T=_;for(let E=c-1;E<=c+1;E++){let H=this._HashR2(u,v,T),A=H&510,X=S-f+this._RandVecs2D[A]*g,O=E-i+this._RandVecs2D[A|1]*g,k=Math.abs(X)+Math.abs(O)+(X*X+O*O);p=Math.max(Math.min(p,k),d),k<d&&(d=k,y=H),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(d=Math.sqrt(d),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return d-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+d)*.5-1;case D.CellularReturnType.Distance2Sub:return p-d-1;case D.CellularReturnType.Distance2Mul:return p*d*.5-1;case D.CellularReturnType.Distance2Div:return d/p-1;default:return 0}}_SingleCellularR3(u,f,i,h){let c=Math.round(f),d=Math.round(i),p=Math.round(h),y=Number.MAX_VALUE,g=Number.MAX_VALUE,v=0,_=.39614353*this._CellularJitterModifier,S=(c-1)*this._PrimeX,T=(d-1)*this._PrimeY,E=(p-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let H=c-1;H<=c+1;H++){let A=T;for(let X=d-1;X<=d+1;X++){let O=E;for(let k=p-1;k<=p+1;k++){let Z=this._HashR3(u,S,A,O),Y=Z&1020,U=H-f+this._RandVecs3D[Y]*_,N=X-i+this._RandVecs3D[Y|1]*_,ue=k-h+this._RandVecs3D[Y|2]*_,ne=U*U+N*N+ue*ue;g=Math.max(Math.min(g,ne),y),ne<y&&(y=ne,v=Z),O+=this._PrimeZ}A+=this._PrimeY}S+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let H=c-1;H<=c+1;H++){let A=T;for(let X=d-1;X<=d+1;X++){let O=E;for(let k=p-1;k<=p+1;k++){let Z=this._HashR3(u,S,A,O),Y=Z&1020,U=H-f+this._RandVecs3D[Y]*_,N=X-i+this._RandVecs3D[Y|1]*_,ue=k-h+this._RandVecs3D[Y|2]*_,ne=Math.abs(U)+Math.abs(N)+Math.abs(ue);g=Math.max(Math.min(g,ne),y),ne<y&&(y=ne,v=Z),O+=this._PrimeZ}A+=this._PrimeY}S+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let H=c-1;H<=c+1;H++){let A=T;for(let X=d-1;X<=d+1;X++){let O=E;for(let k=p-1;k<=p+1;k++){let Z=this._HashR3(u,S,A,O),Y=Z&1020,U=H-f+this._RandVecs3D[Y]*_,N=X-i+this._RandVecs3D[Y|1]*_,ue=k-h+this._RandVecs3D[Y|2]*_,ne=Math.abs(U)+Math.abs(N)+Math.abs(ue)+(U*U+N*N+ue*ue);g=Math.max(Math.min(g,ne),y),ne<y&&(y=ne,v=Z),O+=this._PrimeZ}A+=this._PrimeY}S+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return g-1;case D.CellularReturnType.Distance2Add:return(g+y)*.5-1;case D.CellularReturnType.Distance2Sub:return g-y-1;case D.CellularReturnType.Distance2Mul:return g*y*.5-1;case D.CellularReturnType.Distance2Div:return y/g-1;default:return 0}}_SinglePerlinR2(u,f,i){let h=Math.floor(f),c=Math.floor(i),d=f-h,p=i-c,y=d-1,g=p-1,v=D._InterpQuintic(d),_=D._InterpQuintic(p);h=Math.imul(h,this._PrimeX),c=Math.imul(c,this._PrimeY);let S=h+this._PrimeX,T=c+this._PrimeY,E=D._Lerp(this._GradCoordR2(u,h,c,d,p),this._GradCoordR2(u,S,c,y,p),v),H=D._Lerp(this._GradCoordR2(u,h,T,d,g),this._GradCoordR2(u,S,T,y,g),v);return D._Lerp(E,H,_)*1.4247691104677813}_SinglePerlinR3(u,f,i,h){let c=Math.floor(f),d=Math.floor(i),p=Math.floor(h),y=f-c,g=i-d,v=h-p,_=y-1,S=g-1,T=v-1,E=D._InterpQuintic(y),H=D._InterpQuintic(g),A=D._InterpQuintic(v);c=Math.imul(c,this._PrimeX),d=Math.imul(d,this._PrimeY),p=Math.imul(p,this._PrimeZ);let X=c+this._PrimeX,O=d+this._PrimeY,k=p+this._PrimeZ,Z=D._Lerp(this._GradCoordR3(u,c,d,p,y,g,v),this._GradCoordR3(u,X,d,p,_,g,v),E),Y=D._Lerp(this._GradCoordR3(u,c,O,p,y,S,v),this._GradCoordR3(u,X,O,p,_,S,v),E),U=D._Lerp(this._GradCoordR3(u,c,d,k,y,g,T),this._GradCoordR3(u,X,d,k,_,g,T),E),N=D._Lerp(this._GradCoordR3(u,c,O,k,y,S,T),this._GradCoordR3(u,X,O,k,_,S,T),E),ue=D._Lerp(Z,Y,H),ne=D._Lerp(U,N,H);return D._Lerp(ue,ne,A)*.9649214148521423}_SingleValueCubicR2(u,f,i){let h=Math.floor(f),c=Math.floor(i),d=f-h,p=i-c;h=Math.imul(h,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=h-this._PrimeX,g=c-this._PrimeY,v=h+this._PrimeX,_=c+this._PrimeY,S=h+(this._PrimeX<<1),T=c+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(u,y,g),this._ValCoordR2(u,h,g),this._ValCoordR2(u,v,g),this._ValCoordR2(u,S,g),d),D._CubicLerp(this._ValCoordR2(u,y,c),this._ValCoordR2(u,h,c),this._ValCoordR2(u,v,c),this._ValCoordR2(u,S,c),d),D._CubicLerp(this._ValCoordR2(u,y,_),this._ValCoordR2(u,h,_),this._ValCoordR2(u,v,_),this._ValCoordR2(u,S,_),d),D._CubicLerp(this._ValCoordR2(u,y,T),this._ValCoordR2(u,h,T),this._ValCoordR2(u,v,T),this._ValCoordR2(u,S,T),d),p)*(1/(1.5*1.5))}_SingleValueCubicR3(u,f,i,h){let c=Math.floor(f),d=Math.floor(i),p=Math.floor(h),y=f-c,g=i-d,v=h-p;c=Math.imul(c,this._PrimeX),d=Math.imul(d,this._PrimeY),p=Math.imul(p,this._PrimeZ);let _=c-this._PrimeX,S=d-this._PrimeY,T=p-this._PrimeZ,E=c+this._PrimeX,H=d+this._PrimeY,A=p+this._PrimeZ,X=c+(this._PrimeX<<1),O=d+(this._PrimeY<<1),k=p+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,T),this._ValCoordR3(u,c,S,T),this._ValCoordR3(u,E,S,T),this._ValCoordR3(u,X,S,T),y),D._CubicLerp(this._ValCoordR3(u,_,d,T),this._ValCoordR3(u,c,d,T),this._ValCoordR3(u,E,d,T),this._ValCoordR3(u,X,d,T),y),D._CubicLerp(this._ValCoordR3(u,_,H,T),this._ValCoordR3(u,c,H,T),this._ValCoordR3(u,E,H,T),this._ValCoordR3(u,X,H,T),y),D._CubicLerp(this._ValCoordR3(u,_,O,T),this._ValCoordR3(u,c,O,T),this._ValCoordR3(u,E,O,T),this._ValCoordR3(u,X,O,T),y),g),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,p),this._ValCoordR3(u,c,S,p),this._ValCoordR3(u,E,S,p),this._ValCoordR3(u,X,S,p),y),D._CubicLerp(this._ValCoordR3(u,_,d,p),this._ValCoordR3(u,c,d,p),this._ValCoordR3(u,E,d,p),this._ValCoordR3(u,X,d,p),y),D._CubicLerp(this._ValCoordR3(u,_,H,p),this._ValCoordR3(u,c,H,p),this._ValCoordR3(u,E,H,p),this._ValCoordR3(u,X,H,p),y),D._CubicLerp(this._ValCoordR3(u,_,O,p),this._ValCoordR3(u,c,O,p),this._ValCoordR3(u,E,O,p),this._ValCoordR3(u,X,O,p),y),g),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,A),this._ValCoordR3(u,c,S,A),this._ValCoordR3(u,E,S,A),this._ValCoordR3(u,X,S,A),y),D._CubicLerp(this._ValCoordR3(u,_,d,A),this._ValCoordR3(u,c,d,A),this._ValCoordR3(u,E,d,A),this._ValCoordR3(u,X,d,A),y),D._CubicLerp(this._ValCoordR3(u,_,H,A),this._ValCoordR3(u,c,H,A),this._ValCoordR3(u,E,H,A),this._ValCoordR3(u,X,H,A),y),D._CubicLerp(this._ValCoordR3(u,_,O,A),this._ValCoordR3(u,c,O,A),this._ValCoordR3(u,E,O,A),this._ValCoordR3(u,X,O,A),y),g),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,k),this._ValCoordR3(u,c,S,k),this._ValCoordR3(u,E,S,k),this._ValCoordR3(u,X,S,k),y),D._CubicLerp(this._ValCoordR3(u,_,d,k),this._ValCoordR3(u,c,d,k),this._ValCoordR3(u,E,d,k),this._ValCoordR3(u,X,d,k),y),D._CubicLerp(this._ValCoordR3(u,_,H,k),this._ValCoordR3(u,c,H,k),this._ValCoordR3(u,E,H,k),this._ValCoordR3(u,X,H,k),y),D._CubicLerp(this._ValCoordR3(u,_,O,k),this._ValCoordR3(u,c,O,k),this._ValCoordR3(u,E,O,k),this._ValCoordR3(u,X,O,k),y),g),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(u,f,i){let h=Math.floor(f),c=Math.floor(i),d=D._InterpHermite(f-h),p=D._InterpHermite(i-c);h=Math.imul(h,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=h+this._PrimeX,g=c+this._PrimeY,v=D._Lerp(this._ValCoordR2(u,h,c),this._ValCoordR2(u,y,c),d),_=D._Lerp(this._ValCoordR2(u,h,g),this._ValCoordR2(u,y,g),d);return D._Lerp(v,_,p)}_SingleValueR3(u,f,i,h){let c=Math.floor(f),d=Math.floor(i),p=Math.floor(h),y=D._InterpHermite(f-c),g=D._InterpHermite(i-d),v=D._InterpHermite(h-p);c=Math.imul(c,this._PrimeX),d=Math.imul(d,this._PrimeY),p=Math.imul(p,this._PrimeZ);let _=c+this._PrimeX,S=d+this._PrimeY,T=p+this._PrimeZ,E=D._Lerp(this._ValCoordR3(u,c,d,p),this._ValCoordR3(u,_,d,p),y),H=D._Lerp(this._ValCoordR3(u,c,S,p),this._ValCoordR3(u,_,S,p),y),A=D._Lerp(this._ValCoordR3(u,c,d,T),this._ValCoordR3(u,_,d,T),y),X=D._Lerp(this._ValCoordR3(u,c,S,T),this._ValCoordR3(u,_,S,T),y),O=D._Lerp(E,H,g),k=D._Lerp(A,X,g);return D._Lerp(O,k,v)}_DoSingleDomainWarp(){let u=(i,h,c,d,p,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,h*38.283687591552734,c,d,!1,p,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,h*16,c,d,!0,p,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,h,c,d,p,y);break}},f=(i,h,c,d,p,y,g)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,h*32.69428253173828,c,d,!1,p,y,g);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,h*7.71604938271605,c,d,!0,p,y,g);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,h,c,d,p,y,g);break}};if(arguments.length===6&&arguments[3]instanceof sr)return u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof fr)return f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let u=i=>{let h=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,d=this._Frequency,p=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let _=(p+y)*v;p+=_,y+=_;break}this._DoSingleDomainWarp(h,c,d,i,p,y)},f=i=>{let h=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,d=this._Frequency,p=i.x,y=i.y,g=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let S=p+y,T=S*-.211324865405187;g*=.577350269189626,p+=T-g,y=y+T-g,g+=S*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let S=p+g,T=S*-.211324865405187;y*=.577350269189626,p+=T-y,g+=T-y,y+=S*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let _=(p+y+g)*v;p=_-p,y=_-y,g=_-g;break}this._DoSingleDomainWarp(h,c,d,i,p,y,g)};if(arguments.length===1&&arguments[0]instanceof sr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return f(arguments[0])}_DomainWarpFractalProgressive(){let u=i=>{let h=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,d=this._Frequency;for(let p=0;p<this._Octaves;p++){let y=i.x,g=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const _=.5*(1.7320508075688772-1);let S=(y+g)*_;y+=S,g+=S;break}this._DoSingleDomainWarp(h,c,d,i,y,g),h++,c*=this._Gain,d*=this._Lacunarity}},f=i=>{let h=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,d=this._Frequency;for(let p=0;p<this._Octaves;p++){let y=i.x,g=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let _=y+g,S=_*-.211324865405187;v*=.577350269189626,y+=S-v,g=g+S-v,v+=_*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let _=y+v,S=_*-.211324865405187;g*=.577350269189626,y+=S-g,v+=S-g,g+=_*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let S=(y+g+v)*.6666666666666666;y=S-y,g=S-g,v=S-v}break}this._DoSingleDomainWarp(h,c,d,i,y,g,v),h++,c*=this._Gain,d*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof sr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return f(arguments[0])}_DomainWarpFractalIndependent(){let u=i=>{let h=i.x,c=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let _=(h+c)*v;h+=_,c+=_;break}let d=this._Seed,p=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let g=0;g<this._Octaves;g++)this._DoSingleDomainWarp(d,p,y,i,h,c),d++,p*=this._Gain,y*=this._Lacunarity},f=i=>{let h=i.x,c=i.y,d=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=h+c,_=v*-.211324865405187;d*=.577350269189626,h+=_-d,c=c+_-d,d+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=h+d,_=v*-.211324865405187;c*=.577350269189626,h+=_-c,d+=_-c,c+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let _=(h+c+d)*.6666666666666666;h=_-h,c=_-c,d=_-d}break}let p=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,g=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(p,y,g,i,h,c,d),p++,y*=this._Gain,g*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof sr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof fr)return f(arguments[0])}_SingleDomainWarpBasicGrid(){let u=(i,h,c,d,p,y)=>{let g=p*c,v=y*c,_=Math.floor(g),S=Math.floor(v),T=D._InterpHermite(g-_),E=D._InterpHermite(v-S);_=Math.imul(_,this._PrimeX),S=Math.imul(S,this._PrimeY);let H=_+this._PrimeX,A=S+this._PrimeY,X=this._HashR2(i,_,S)&510,O=this._HashR2(i,H,S)&510,k=D._Lerp(this._RandVecs2D[X],this._RandVecs2D[O],T),Z=D._Lerp(this._RandVecs2D[X|1],this._RandVecs2D[O|1],T);X=this._HashR2(i,_,A)&510,O=this._HashR2(i,H,A)&510;let Y=D._Lerp(this._RandVecs2D[X],this._RandVecs2D[O],T),U=D._Lerp(this._RandVecs2D[X|1],this._RandVecs2D[O|1],T);d.x+=D._Lerp(k,Y,E)*h,d.y+=D._Lerp(Z,U,E)*h},f=(i,h,c,d,p,y,g)=>{let v=p*c,_=y*c,S=g*c,T=Math.floor(v),E=Math.floor(_),H=Math.floor(S),A=D._InterpHermite(v-T),X=D._InterpHermite(_-E),O=D._InterpHermite(S-H);T=Math.imul(T,this._PrimeX),E=Math.imul(E,this._PrimeY),H=Math.imul(H,this._PrimeZ);let k=T+this._PrimeX,Z=E+this._PrimeY,Y=H+this._PrimeZ,U=this._HashR3(i,T,E,H)&1020,N=this._HashR3(i,k,E,H)&1020,ue=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[N],A),ne=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[N|1],A),ge=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[N|2],A);U=this._HashR3(i,T,Z,H)&1020,N=this._HashR3(i,k,Z,H)&1020;let Se=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[N],A),re=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[N|1],A),_e=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[N|2],A),Ae=D._Lerp(ue,Se,X),pe=D._Lerp(ne,re,X),j=D._Lerp(ge,_e,X);U=this._HashR3(i,T,E,Y)&1020,N=this._HashR3(i,k,E,Y)&1020,ue=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[N],A),ne=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[N|1],A),ge=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[N|2],A),U=this._HashR3(i,T,Z,Y)&1020,N=this._HashR3(i,k,Z,Y)&1020,Se=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[N],A),re=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[N|1],A),_e=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[N|2],A),d.x+=D._Lerp(Ae,D._Lerp(ue,Se,X),O)*h,d.y+=D._Lerp(pe,D._Lerp(ne,re,X),O)*h,d.z+=D._Lerp(j,D._Lerp(ge,_e,X),O)*h};arguments.length===6&&arguments[3]instanceof sr&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof fr&&f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let u=(i,h,c,d,p,y,g)=>{const _=(3-1.7320508075688772)/6;y*=c,g*=c;let S=Math.floor(y),T=Math.floor(g),E=y-S,H=g-T,A=(E+H)*_,X=E-A,O=H-A;S=Math.imul(S,this._PrimeX),T=Math.imul(T,this._PrimeY);let k,Z;k=Z=0;let Y=.5-X*X-O*O;if(Y>0){let N=Y*Y*(Y*Y),ue,ne;if(p){let ge=this._HashR2(i,S,T)&510;ue=this._RandVecs2D[ge],ne=this._RandVecs2D[ge|1]}else{let ge=this._HashR2(i,S,T),Se=ge&254,re=ge>>7&510,_e=this._Gradients2D[Se],Ae=this._Gradients2D[Se|1],pe=X*_e+O*Ae,j=this._RandVecs2D[re],J=this._RandVecs2D[re|1];ue=pe*j,ne=pe*J}k+=N*ue,Z+=N*ne}let U=2*(1-2*_)*(1/_-2)*A+(-2*(1-2*_)*(1-2*_)+Y);if(U>0){let N=X+(2*_-1),ue=O+(2*_-1),ne=U*U*(U*U),ge,Se;if(p){let re=this._HashR2(i,S+this._PrimeX,T+this._PrimeY)&510;ge=this._RandVecs2D[re],Se=this._RandVecs2D[re|1]}else{let re=this._HashR2(i,S+this._PrimeX,T+this._PrimeY),_e=re&254,Ae=re>>7&510,pe=this._Gradients2D[_e],j=this._Gradients2D[_e|1],J=N*pe+ue*j,F=this._RandVecs2D[Ae],se=this._RandVecs2D[Ae|1];ge=J*F,Se=J*se}k+=ne*ge,Z+=ne*Se}if(O>X){let N=X+_,ue=O+(_-1),ne=.5-N*N-ue*ue;if(ne>0){let ge=ne*ne*(ne*ne),Se,re;if(p){let _e=this._HashR2(i,S,T+this._PrimeY)&510;Se=this._RandVecs2D[_e],re=this._RandVecs2D[_e|1]}else{let _e=this._HashR2(i,S,T+this._PrimeY),Ae=_e&254,pe=_e>>7&510,j=this._Gradients2D[Ae],J=this._Gradients2D[Ae|1],F=N*j+ue*J,se=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];Se=F*se,re=F*x}k+=ge*Se,Z+=ge*re}}else{let N=X+(_-1),ue=O+_,ne=.5-N*N-ue*ue;if(ne>0){let ge=ne*ne*(ne*ne),Se,re;if(p){let _e=this._HashR2(i,S+this._PrimeX,T)&510;Se=this._RandVecs2D[_e],re=this._RandVecs2D[_e|1]}else{let _e=this._HashR2(i,S+this._PrimeX,T),Ae=_e&254,pe=_e>>7&510,j=this._Gradients2D[Ae],J=this._Gradients2D[Ae|1],F=N*j+ue*J,se=this._RandVecs2D[pe],x=this._RandVecs2D[pe|1];Se=F*se,re=F*x}k+=ge*Se,Z+=ge*re}}d.x+=k*h,d.y+=Z*h},f=(i,h,c,d,p,y,g,v)=>{y*=c,g*=c,v*=c;let _=Math.round(y),S=Math.round(g),T=Math.round(v),E=y-_,H=g-S,A=v-T,X=-E-1|1,O=-H-1|1,k=-A-1|1,Z=X*-E,Y=O*-H,U=k*-A;_=Math.imul(_,this._PrimeX),S=Math.imul(S,this._PrimeY),T=Math.imul(T,this._PrimeZ);let N,ue,ne;N=ue=ne=0;let ge=.6-E*E-(H*H+A*A);for(let Se=0;;Se++){if(ge>0){let se=ge*ge*(ge*ge),x,G,q;if(p){let K=this._HashR3(i,_,S,T)&1020;x=this._RandVecs3D[K],G=this._RandVecs3D[K|1],q=this._RandVecs3D[K|2]}else{let K=this._HashR3(i,_,S,T),I=K&252,fe=K>>6&1020,ce=this._Gradients3D[I],xe=this._Gradients3D[I|1],$=this._Gradients3D[I|2],ie=E*ce+H*xe+A*$,Ve=this._RandVecs3D[fe],Oe=this._RandVecs3D[fe|1],Ze=this._RandVecs3D[fe|2];x=ie*Ve,G=ie*Oe,q=ie*Ze}N+=se*x,ue+=se*G,ne+=se*q}let re=ge,_e=_,Ae=S,pe=T,j=E,J=H,F=A;if(Z>=Y&&Z>=U?(j+=X,re=re+Z+Z,_e-=X*this._PrimeX):Y>Z&&Y>=U?(J+=O,re=re+Y+Y,Ae-=O*this._PrimeY):(F+=k,re=re+U+U,pe-=k*this._PrimeZ),re>1){re-=1;let se=re*re*(re*re),x,G,q;if(p){let K=this._HashR3(i,_e,Ae,pe)&1020;x=this._RandVecs3D[K],G=this._RandVecs3D[K|1],q=this._RandVecs3D[K|2]}else{let K=this._HashR3(i,_e,Ae,pe),I=K&252,fe=K>>6&1020,ce=this._Gradients3D[I],xe=this._Gradients3D[I|1],$=this._Gradients3D[I|2],ie=j*ce+J*xe+F*$,Ve=this._RandVecs3D[fe],Oe=this._RandVecs3D[fe|1],Ze=this._RandVecs3D[fe|2];x=ie*Ve,G=ie*Oe,q=ie*Ze}N+=se*x,ue+=se*G,ne+=se*q}if(Se===1)break;Z=.5-Z,Y=.5-Y,U=.5-U,E=X*Z,H=O*Y,A=k*U,ge+=.75-Z-(Y+U),_+=X>>1&this._PrimeX,S+=O>>1&this._PrimeY,T+=k>>1&this._PrimeZ,X=-X,O=-O,k=-k,i+=1293373}d.x+=N*h,d.y+=ue*h,d.z+=ne*h};arguments.length===7&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class sr{constructor(u,f){this.x=u,this.y=f}}class fr{constructor(u,f,i){this.x=u,this.y=f,this.z=i}}function m3(s=42,u=1920,f=1080,i=D.NoiseType.Perlin,h=6,c=1.7,d=.5,p=D.FractalType.FBm,y=.003){const g=new D;g.SetNoiseType(i),g.SetSeed(s),g.SetFractalOctaves(h),g.SetFractalLacunarity(c),g.SetFractalGain(d),g.SetFractalType(p),g.SetFrequency(y);const v=[];for(let T=0;T<f;T++)for(let E=0;E<u;E++){const A=(g.GetNoise(E,T)+1)/2;v.push(A)}var _=0,S=0;for(let T=0;T<v.length;T++)(v[T]<_||T==0)&&(_=v[T]),(v[T]>S||T==0)&&(S=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-_)/(S-_);return v}const p3=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
}`,g3=`// RGB (0–1 range)\r
const COLOR_WHITE  = vec4<f32>(1.0, 1.0, 1.0, 1.0);\r
const COLOR_BLACK  = vec4<f32>(0.0, 0.0, 0.0, 1.0);\r
const COLOR_RED    = vec4<f32>(1.0, 0.0, 0.0, 1.0);\r
const COLOR_GREEN  = vec4<f32>(0.0, 1.0, 0.0, 1.0);\r
const COLOR_BLUE   = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r
const COLOR_YELLOW = vec4<f32>(1.0, 1.0, 0.0, 1.0);\r
const COLOR_CYAN   = vec4<f32>(0.0, 1.0, 1.0, 1.0);\r
const COLOR_MAGENTA= vec4<f32>(1.0, 0.0, 1.0, 1.0);\r
const COLOR_GRAY   = vec4<f32>(0.5, 0.5, 0.5, 1.0);\r
const COLOR_CLEAR  = vec4<f32>(0.0, 0.0, 0.0, 1.0);`,y3=`fn getCursorColor(coord : vec2<u32>) -> vec4f\r
{\r
    let x = coord.x;\r
    let y = coord.y;\r
\r
    var cursorColor = vec4f(0.0, 0.0, 0.0, 0.0);\r
\r
    let mouseWidth  = 2.0;\r
\r
    if(uInput.cursorType == 1u)\r
    {\r
        let inOuter = inside_circle(coord, uInput.mousePos, uInput.mouseRadius);\r
        let inInner = inside_circle(coord, uInput.mousePos, uInput.mouseRadius - mouseWidth);\r
        \r
        let isCursorSpot = \r
            (x == uInput.mousePos.x && y == uInput.mousePos.y) || \r
            isDirectNeighbor(coord, uInput.mousePos);\r
        \r
        if((inOuter && !inInner) || isCursorSpot)\r
        {\r
            cursorColor = vec4f(0.0, 0.0, 0.0, 0.5);\r
        }\r
    }\r
\r
    return cursorColor;\r
}`,v3=`// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)\r
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
	let cycleIndex : u32 = (uSim.simIndex * 3u) % 8u;\r
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
	let cycleIndex : u32 = (uSim.simIndex * 3u) % 8u;\r
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
}`,x3=`// ---------- Helpers ----------\r
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
}`,b3=`const MAX_SPRITE_SIZE = 64 * 64;\r
\r
struct SpriteData\r
{\r
    width       : u32,\r
    height      : u32,\r
    _pad0       : u32,\r
    _pad1       : u32,\r
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
}`,_3=`// Uses: uView, uTerrain, uInput, outputTex\r
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
    var cursorOutline =  getCursorColor(coord);\r
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
}`,g2=`//{colors}\r
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
//{cursor_helpers}\r
\r
// Binding Group 0 - Uniforms\r
@group(0) @binding(0)   var<uniform>             uView                       : View;\r
@group(0) @binding(1)   var<uniform>             uInput                      : Input;\r
@group(0) @binding(2)   var<uniform>             uTerrain                    : TerrainParams;\r
@group(0) @binding(3)   var<uniform>             uSim                        : SimParams; \r
\r
@group(0) @binding(4)   var<storage, read_write> currentCells                : array<CellData>;\r
@group(0) @binding(5)   var<storage, read_write> nextCells                   : array<CellData>;\r
\r
@group(0) @binding(6)   var<storage, read>       terrainColors               : array<vec4f>;\r
@group(0) @binding(7)   var<storage, read_write> outputTex                   : array<u32>;\r
@group(0) @binding(8)   var<storage, read_write> cursorQuery                 : CursorQuery;\r
@group(0) @binding(9)   var<storage, read_write> chunkData                   : array<ChunkData>;\r
@group(0) @binding(10)  var<storage, read>        sprites                     : array<SpriteData>;\r
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
//{chunk_data_calc}`,S3=`struct View {\r
    size        : vec2<u32>, // width, height (pixels)\r
    time        : f32,       // seconds\r
    frameIndex    : u32,       // [0-inf] simulation passes\r
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
  cursorType   : u32, // 0 - None, 1 - radius, 2 - box\r
  // (12 bytes implicit padding here to align next member to 16B)\r
  visibleRect  : vec4<u32>, //  (x0, y0, x1, y1) in canvas coords\r
};                          // total size = 48 bytes\r
\r
struct SimParams {\r
  simIndex : u32,\r
  _pad0     : u32,\r
  _pad1     : u32,\r
  _pad2     : u32, // keep 16B size for simplicity\r
};\r
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
};`,C3=`// Fullscreen triangle VS\r
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
}`,T3=`const MAX_SLICES_PER_CELL : u32 = 3u;\r
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
`,R3=`// Uses: uView, uTerrain, chunkData, currentCells\r
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
`,D3=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells\r
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
`,z3=`// Uses: uView, uTerrain, cursorQuery, currentCells, chunkData\r
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
`,M3=`// ---- Fragment shader ----\r
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
}`,w3=`// Uses: uView, chunkData, currentCells, outputTex\r
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
`,E3=`// Uses: uView, uTerrain, chunkData, currentCells, outputTex\r
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
`,A3=`// Uses: uView, currentCells\r
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
`,O3=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,V3=`@compute @workgroup_size(16, 16, 1)\r
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {\r
    let spriteIndex : u32 = (uSim.simIndex / 2u) % 8u + 3u;//0u;\r
    let coord = vec2<u32>(388u, 270u);//uInput.mousePos;//vec2<u32>(534, 200);\r
    \r
    let sprite = getSprite(spriteIndex);\r
    if (gid.x >= sprite.width || gid.y >= sprite.height) { return; }\r
\r
    setSprite(spriteIndex, coord, vec2<u32>(gid.x, gid.y));\r
    setSprite(spriteIndex, coord + vec2<u32>(0u, 8u), vec2<u32>(gid.x, gid.y));\r
    // setSprite(spriteIndex, coord + vec2<u32>(0u, 16u), vec2<u32>(gid.x, gid.y));\r
}`,H3=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,B3=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells, nextCells\r
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
    // let simTime = uSim.simIndex % 10000u < 5000u;\r
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
}`,G3=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":p3,"../shaders/helpers/colors.wgsl":g3,"../shaders/helpers/cursor_helpers.wgsl":y3,"../shaders/helpers/flow_helpers.wgsl":v3,"../shaders/helpers/helpers.wgsl":x3,"../shaders/helpers/sprite_helpers.wgsl":b3,"../shaders/main/fragment.wgsl":_3,"../shaders/main/shader_outline.wgsl":g2,"../shaders/main/structs.wgsl":S3,"../shaders/main/vertex.wgsl":C3,"../shaders/objects/object_def.wgsl":T3,"../shaders/query/chunk_data_calc.wgsl":R3,"../shaders/query/cursor_query.wgsl":D3,"../shaders/query/total_query.wgsl":z3,"../shaders/realtime_frag.wgsl":M3,"../shaders/render/debug_render_compute.wgsl":w3,"../shaders/render/fluid_render_compute.wgsl":E3,"../shaders/render/normal_compute.wgsl":A3,"../shaders/render/shadow_render_compute.wgsl":O3,"../shaders/render/sprite_render_compute.wgsl":V3,"../shaders/render/terrain_render_compute.wgsl":H3,"../shaders/simulation/step_compute.wgsl":B3});function j3(){let s=g2;for(const[u,f]of Object.entries(G3)){const i=u.split("/").pop().replace(".wgsl","");s=s.replace(`//{${i}}`,f)}return s}var Wc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var r2;function U3(){return r2||(r2=1,(function(s){(function(){var u={}.hasOwnProperty;function f(){for(var c="",d=0;d<arguments.length;d++){var p=arguments[d];p&&(c=h(c,i(p)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return f.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var d="";for(var p in c)u.call(c,p)&&c[p]&&(d=h(d,p));return d}function h(c,d){return d?c?c+" "+d:c+d:c}s.exports?(f.default=f,s.exports=f):window.classNames=f})()})(Wc)),Wc.exports}var k3=U3();const Be=Au(k3),Y3=["xxl","xl","lg","md","sm","xs"],X3="xs",Ou=L.createContext({prefixes:{},breakpoints:Y3,minBreakpoint:X3}),{Consumer:Kh,Provider:Wh}=Ou;function Ne(s,u){const{prefixes:f}=L.useContext(Ou);return s||f[u]||u}function y2(){const{breakpoints:s}=L.useContext(Ou);return s}function v2(){const{minBreakpoint:s}=L.useContext(Ou);return s}var Jc={exports:{}},Fc,u2;function N3(){if(u2)return Fc;u2=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fc=s,Fc}var Ic,i2;function q3(){if(i2)return Ic;i2=1;var s=N3();function u(){}function f(){}return f.resetWarningCache=u,Ic=function(){function i(d,p,y,g,v,_){if(_!==s){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}i.isRequired=i;function h(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:h,element:i,elementType:i,instanceOf:h,node:i,objectOf:h,oneOf:h,oneOfType:h,shape:h,exact:h,checkPropTypes:f,resetWarningCache:u};return c.PropTypes=c,c},Ic}var c2;function L3(){return c2||(c2=1,Jc.exports=q3()()),Jc.exports}var P3=L3();const mt=Au(P3),x2=(s=>L.forwardRef((u,f)=>b.jsx("div",{...u,ref:f,className:Be(u.className,s)}))),Z3=["as","disabled"];function Q3(s,u){if(s==null)return{};var f={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)>=0)continue;f[i]=s[i]}return f}function K3(s){return!s||s.trim()==="#"}function b2({tagName:s,disabled:u,href:f,target:i,rel:h,role:c,onClick:d,tabIndex:p=0,type:y}){s||(f!=null||i!=null||h!=null?s="a":s="button");const g={tagName:s};if(s==="button")return[{type:y||"button",disabled:u},g];const v=S=>{if((u||s==="a"&&K3(f))&&S.preventDefault(),u){S.stopPropagation();return}d?.(S)},_=S=>{S.key===" "&&(S.preventDefault(),v(S))};return s==="a"&&(f||(f="#"),u&&(f=void 0)),[{role:c??"button",disabled:void 0,tabIndex:u?void 0:p,href:f,target:s==="a"?i:void 0,"aria-disabled":u||void 0,rel:s==="a"?h:void 0,onClick:v,onKeyDown:_},g]}const W3=L.forwardRef((s,u)=>{let{as:f,disabled:i}=s,h=Q3(s,Z3);const[c,{tagName:d}]=b2(Object.assign({tagName:f,disabled:i},h));return b.jsx(d,Object.assign({},h,c,{ref:u}))});W3.displayName="Button";const zl=L.forwardRef(({as:s,bsPrefix:u,variant:f="primary",size:i,active:h=!1,disabled:c=!1,className:d,...p},y)=>{const g=Ne(u,"btn"),[v,{tagName:_}]=b2({tagName:s,disabled:c,...p}),S=_;return b.jsx(S,{...v,...p,ref:y,disabled:c,className:Be(d,g,h&&"active",f&&`${g}-${f}`,i&&`${g}-${i}`,p.href&&c&&"disabled")})});zl.displayName="Button";const lo=L.forwardRef(({bsPrefix:s,size:u,vertical:f=!1,className:i,role:h="group",as:c="div",...d},p)=>{const y=Ne(s,"btn-group");let g=y;return f&&(g=`${y}-vertical`),b.jsx(c,{...d,ref:p,role:h,className:Be(i,g,u&&`${y}-${u}`)})});lo.displayName="ButtonGroup";const ao=L.forwardRef(({className:s,bsPrefix:u,as:f="div",...i},h)=>(u=Ne(u,"card-body"),b.jsx(f,{ref:h,className:Be(s,u),...i})));ao.displayName="CardBody";const _2=L.forwardRef(({className:s,bsPrefix:u,as:f="div",...i},h)=>(u=Ne(u,"card-footer"),b.jsx(f,{ref:h,className:Be(s,u),...i})));_2.displayName="CardFooter";const S2=L.createContext(null);S2.displayName="CardHeaderContext";const C2=L.forwardRef(({bsPrefix:s,className:u,as:f="div",...i},h)=>{const c=Ne(s,"card-header"),d=L.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return b.jsx(S2.Provider,{value:d,children:b.jsx(f,{ref:h,...i,className:Be(u,c)})})});C2.displayName="CardHeader";const T2=L.forwardRef(({bsPrefix:s,className:u,variant:f,as:i="img",...h},c)=>{const d=Ne(s,"card-img");return b.jsx(i,{ref:c,className:Be(f?`${d}-${f}`:d,u),...h})});T2.displayName="CardImg";const R2=L.forwardRef(({className:s,bsPrefix:u,as:f="div",...i},h)=>(u=Ne(u,"card-img-overlay"),b.jsx(f,{ref:h,className:Be(s,u),...i})));R2.displayName="CardImgOverlay";const D2=L.forwardRef(({className:s,bsPrefix:u,as:f="a",...i},h)=>(u=Ne(u,"card-link"),b.jsx(f,{ref:h,className:Be(s,u),...i})));D2.displayName="CardLink";const J3=x2("h6"),z2=L.forwardRef(({className:s,bsPrefix:u,as:f=J3,...i},h)=>(u=Ne(u,"card-subtitle"),b.jsx(f,{ref:h,className:Be(s,u),...i})));z2.displayName="CardSubtitle";const M2=L.forwardRef(({className:s,bsPrefix:u,as:f="p",...i},h)=>(u=Ne(u,"card-text"),b.jsx(f,{ref:h,className:Be(s,u),...i})));M2.displayName="CardText";const F3=x2("h5"),w2=L.forwardRef(({className:s,bsPrefix:u,as:f=F3,...i},h)=>(u=Ne(u,"card-title"),b.jsx(f,{ref:h,className:Be(s,u),...i})));w2.displayName="CardTitle";const E2=L.forwardRef(({bsPrefix:s,className:u,bg:f,text:i,border:h,body:c=!1,children:d,as:p="div",...y},g)=>{const v=Ne(s,"card");return b.jsx(p,{ref:g,...y,className:Be(u,v,f&&`bg-${f}`,i&&`text-${i}`,h&&`border-${h}`),children:c?b.jsx(ao,{children:d}):d})});E2.displayName="Card";const sn=Object.assign(E2,{Img:T2,Title:w2,Subtitle:z2,Body:ao,Link:D2,Text:M2,Header:C2,Footer:_2,ImgOverlay:R2});function I3(s,u){let f=0;return L.Children.map(s,i=>L.isValidElement(i)?u(i,f++):i)}function $3(s,u){return L.Children.toArray(s).some(f=>L.isValidElement(f)&&f.type===u)}function eh({as:s,bsPrefix:u,className:f,...i}){u=Ne(u,"col");const h=y2(),c=v2(),d=[],p=[];return h.forEach(y=>{const g=i[y];delete i[y];let v,_,S;typeof g=="object"&&g!=null?{span:v,offset:_,order:S}=g:v=g;const T=y!==c?`-${y}`:"";v&&d.push(v===!0?`${u}${T}`:`${u}${T}-${v}`),S!=null&&p.push(`order${T}-${S}`),_!=null&&p.push(`offset${T}-${_}`)}),[{...i,className:Be(f,...d,...p)},{as:s,bsPrefix:u,spans:d}]}const Rt=L.forwardRef((s,u)=>{const[{className:f,...i},{as:h="div",bsPrefix:c,spans:d}]=eh(s);return b.jsx(h,{...i,ref:u,className:Be(f,!d.length&&c)})});Rt.displayName="Col";const A2=L.createContext(null);A2.displayName="InputGroupContext";const th={type:mt.string,tooltip:mt.bool,as:mt.elementType},Vu=L.forwardRef(({as:s="div",className:u,type:f="valid",tooltip:i=!1,...h},c)=>b.jsx(s,{...h,ref:c,className:Be(u,`${f}-${i?"tooltip":"feedback"}`)}));Vu.displayName="Feedback";Vu.propTypes=th;const jn=L.createContext({}),mr=L.forwardRef(({id:s,bsPrefix:u,className:f,type:i="checkbox",isValid:h=!1,isInvalid:c=!1,as:d="input",...p},y)=>{const{controlId:g}=L.useContext(jn);return u=Ne(u,"form-check-input"),b.jsx(d,{...p,ref:y,type:i,id:s||g,className:Be(f,u,h&&"is-valid",c&&"is-invalid")})});mr.displayName="FormCheckInput";const wu=L.forwardRef(({bsPrefix:s,className:u,htmlFor:f,...i},h)=>{const{controlId:c}=L.useContext(jn);return s=Ne(s,"form-check-label"),b.jsx("label",{...i,ref:h,htmlFor:f||c,className:Be(u,s)})});wu.displayName="FormCheckLabel";const O2=L.forwardRef(({id:s,bsPrefix:u,bsSwitchPrefix:f,inline:i=!1,reverse:h=!1,disabled:c=!1,isValid:d=!1,isInvalid:p=!1,feedbackTooltip:y=!1,feedback:g,feedbackType:v,className:_,style:S,title:T="",type:E="checkbox",label:H,children:A,as:X="input",...O},k)=>{u=Ne(u,"form-check"),f=Ne(f,"form-switch");const{controlId:Z}=L.useContext(jn),Y=L.useMemo(()=>({controlId:s||Z}),[Z,s]),U=!A&&H!=null&&H!==!1||$3(A,wu),N=b.jsx(mr,{...O,type:E==="switch"?"checkbox":E,ref:k,isValid:d,isInvalid:p,disabled:c,as:X});return b.jsx(jn.Provider,{value:Y,children:b.jsx("div",{style:S,className:Be(_,U&&u,i&&`${u}-inline`,h&&`${u}-reverse`,E==="switch"&&f),children:A||b.jsxs(b.Fragment,{children:[N,U&&b.jsx(wu,{title:T,children:H}),g&&b.jsx(Vu,{type:v,tooltip:y,children:g})]})})})});O2.displayName="FormCheck";const Eu=Object.assign(O2,{Input:mr,Label:wu}),V2=L.forwardRef(({bsPrefix:s,type:u,size:f,htmlSize:i,id:h,className:c,isValid:d=!1,isInvalid:p=!1,plaintext:y,readOnly:g,as:v="input",..._},S)=>{const{controlId:T}=L.useContext(jn);return s=Ne(s,"form-control"),b.jsx(v,{..._,type:u,size:i,ref:S,readOnly:g,id:h||T,className:Be(c,y?`${s}-plaintext`:s,f&&`${s}-${f}`,u==="color"&&`${s}-color`,d&&"is-valid",p&&"is-invalid")})});V2.displayName="FormControl";const nh=Object.assign(V2,{Feedback:Vu}),H2=L.forwardRef(({className:s,bsPrefix:u,as:f="div",...i},h)=>(u=Ne(u,"form-floating"),b.jsx(f,{ref:h,className:Be(s,u),...i})));H2.displayName="FormFloating";const ro=L.forwardRef(({controlId:s,as:u="div",...f},i)=>{const h=L.useMemo(()=>({controlId:s}),[s]);return b.jsx(jn.Provider,{value:h,children:b.jsx(u,{...f,ref:i})})});ro.displayName="FormGroup";const B2=L.forwardRef(({as:s="label",bsPrefix:u,column:f=!1,visuallyHidden:i=!1,className:h,htmlFor:c,...d},p)=>{const{controlId:y}=L.useContext(jn);u=Ne(u,"form-label");let g="col-form-label";typeof f=="string"&&(g=`${g} ${g}-${f}`);const v=Be(h,u,i&&"visually-hidden",f&&g);return c=c||y,f?b.jsx(Rt,{ref:p,as:"label",className:v,htmlFor:c,...d}):b.jsx(s,{ref:p,className:v,htmlFor:c,...d})});B2.displayName="FormLabel";const G2=L.forwardRef(({bsPrefix:s,className:u,id:f,...i},h)=>{const{controlId:c}=L.useContext(jn);return s=Ne(s,"form-range"),b.jsx("input",{...i,type:"range",ref:h,className:Be(u,s),id:f||c})});G2.displayName="FormRange";const j2=L.forwardRef(({bsPrefix:s,size:u,htmlSize:f,className:i,isValid:h=!1,isInvalid:c=!1,id:d,...p},y)=>{const{controlId:g}=L.useContext(jn);return s=Ne(s,"form-select"),b.jsx("select",{...p,size:f,ref:y,className:Be(i,s,u&&`${s}-${u}`,h&&"is-valid",c&&"is-invalid"),id:d||g})});j2.displayName="FormSelect";const U2=L.forwardRef(({bsPrefix:s,className:u,as:f="small",muted:i,...h},c)=>(s=Ne(s,"form-text"),b.jsx(f,{...h,ref:c,className:Be(u,s,i&&"text-muted")})));U2.displayName="FormText";const k2=L.forwardRef((s,u)=>b.jsx(Eu,{...s,ref:u,type:"switch"}));k2.displayName="Switch";const lh=Object.assign(k2,{Input:Eu.Input,Label:Eu.Label}),Y2=L.forwardRef(({bsPrefix:s,className:u,children:f,controlId:i,label:h,...c},d)=>(s=Ne(s,"form-floating"),b.jsxs(ro,{ref:d,className:Be(u,s),controlId:i,...c,children:[f,b.jsx("label",{htmlFor:i,children:h})]})));Y2.displayName="FloatingLabel";const ah={_ref:mt.any,validated:mt.bool,as:mt.elementType},uo=L.forwardRef(({className:s,validated:u,as:f="form",...i},h)=>b.jsx(f,{...i,ref:h,className:Be(s,u&&"was-validated")}));uo.displayName="Form";uo.propTypes=ah;const ve=Object.assign(uo,{Group:ro,Control:nh,Floating:H2,Check:Eu,Switch:lh,Label:B2,Text:U2,Range:G2,Select:j2,FloatingLabel:Y2}),Hu=L.forwardRef(({className:s,bsPrefix:u,as:f="span",...i},h)=>(u=Ne(u,"input-group-text"),b.jsx(f,{ref:h,className:Be(s,u),...i})));Hu.displayName="InputGroupText";const rh=s=>b.jsx(Hu,{children:b.jsx(mr,{type:"checkbox",...s})}),uh=s=>b.jsx(Hu,{children:b.jsx(mr,{type:"radio",...s})}),X2=L.forwardRef(({bsPrefix:s,size:u,hasValidation:f,className:i,as:h="div",...c},d)=>{s=Ne(s,"input-group");const p=L.useMemo(()=>({}),[]);return b.jsx(A2.Provider,{value:p,children:b.jsx(h,{ref:d,...c,className:Be(i,s,u&&`${s}-${u}`,f&&"has-validation")})})});X2.displayName="InputGroup";const ih=Object.assign(X2,{Text:Hu,Radio:uh,Checkbox:rh}),o2=1e3;function ch(s,u,f){const i=(s-u)/(f-u)*100;return Math.round(i*o2)/o2}function s2({min:s,now:u,max:f,label:i,visuallyHidden:h,striped:c,animated:d,className:p,style:y,variant:g,bsPrefix:v,..._},S){return b.jsx("div",{ref:S,..._,role:"progressbar",className:Be(p,`${v}-bar`,{[`bg-${g}`]:g,[`${v}-bar-animated`]:d,[`${v}-bar-striped`]:d||c}),style:{width:`${ch(u,s,f)}%`,...y},"aria-valuenow":u,"aria-valuemin":s,"aria-valuemax":f,children:h?b.jsx("span",{className:"visually-hidden",children:i}):i})}const N2=L.forwardRef(({isChild:s=!1,...u},f)=>{const i={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...u};if(i.bsPrefix=Ne(i.bsPrefix,"progress"),s)return s2(i,f);const{min:h,now:c,max:d,label:p,visuallyHidden:y,striped:g,animated:v,bsPrefix:_,variant:S,className:T,children:E,...H}=i;return b.jsx("div",{ref:f,...H,className:Be(T,_),children:E?I3(E,A=>L.cloneElement(A,{isChild:!0})):s2({min:h,now:c,max:d,label:p,visuallyHidden:y,striped:g,animated:v,bsPrefix:_,variant:S},f)})});N2.displayName="ProgressBar";const dr=L.forwardRef(({bsPrefix:s,className:u,as:f="div",...i},h)=>{const c=Ne(s,"row"),d=y2(),p=v2(),y=`${c}-cols`,g=[];return d.forEach(v=>{const _=i[v];delete i[v];let S;_!=null&&typeof _=="object"?{cols:S}=_:S=_;const T=v!==p?`-${v}`:"";S!=null&&g.push(`${y}${T}-${S}`)}),b.jsx(f,{ref:h,...i,className:Be(u,c,...g)})});dr.displayName="Row";const pr={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,pixelScale:2,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};on.memo(oh,(s,u)=>s.initial===u.initial&&s.title===u.title);function oh({initial:s,onChange:u,onApply:f,title:i="Noise & Render Settings"}){const h=L.useMemo(()=>({...pr,...s}),[s]),[c,d]=L.useState(h);L.useEffect(()=>{d(v=>{const _=Math.max(1,Math.min(32,v.numberOfTerrainColors));let S=v.colors.slice(0,_);if(S.length<_){const T=_-S.length,E=S[S.length-1]??"#888888";S=S.concat(Array.from({length:T},()=>E))}return{...v,numberOfTerrainColors:_,colors:S}})},[c.numberOfTerrainColors]);const p=(v,_)=>d(S=>({...S,[v]:_})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],g=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return b.jsx(sn,{children:b.jsxs(sn.Body,{children:[b.jsx(sn.Title,{className:"mb-3",children:i}),b.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),b.jsxs(dr,{className:"g-3",children:[b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"width",children:[b.jsx(ve.Label,{children:"Width"}),b.jsx(ve.Control,{type:"number",min:1,value:c.width,onChange:v=>p("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),b.jsx(ve.Text,{muted:!0,children:"Width in pixels of the map."})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"height",children:[b.jsx(ve.Label,{children:"Height"}),b.jsx(ve.Control,{type:"number",min:1,value:c.height,onChange:v=>p("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),b.jsx(ve.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),b.jsx("hr",{className:"my-4"}),b.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),b.jsxs(dr,{className:"g-3",children:[b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"noiseType",children:[b.jsx(ve.Label,{children:"Noise Type"}),b.jsx(ve.Select,{value:c.noiseType,onChange:v=>p("noiseType",v.currentTarget.value),children:y.map(v=>b.jsx("option",{value:v,children:v},v))})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"seed",children:[b.jsx(ve.Label,{children:"Seed"}),b.jsx(ve.Control,{type:"number",value:c.seed,onChange:v=>p("seed",parseInt(v.currentTarget.value||"0",10))})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"octaves",children:[b.jsx(ve.Label,{children:"Fractal Octaves"}),b.jsx(ve.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>p("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"lacunarity",children:[b.jsx(ve.Label,{children:"Fractal Lacunarity"}),b.jsx(ih,{children:b.jsx(ve.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>p("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"gain",children:[b.jsx(ve.Label,{children:"Fractal Gain"}),b.jsx(ve.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>p("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"fractalType",children:[b.jsx(ve.Label,{children:"Fractal Type"}),b.jsx(ve.Select,{value:c.fractalType,onChange:v=>p("fractalType",v.currentTarget.value),children:g.map(v=>b.jsx("option",{value:v,children:v},v))})]})}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"frequency",children:[b.jsx(ve.Label,{children:"Frequency"}),b.jsx(ve.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>p("frequency",parseFloat(v.currentTarget.value||"0"))}),b.jsx(ve.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),b.jsx("hr",{className:"my-4"}),b.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),b.jsxs(dr,{className:"g-3",children:[b.jsxs(Rt,{md:6,lg:4,children:[b.jsxs(ve.Group,{controlId:"maxCellValue",children:[b.jsx(ve.Label,{children:"Max Terrain Height"}),b.jsx(ve.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>p("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),b.jsx(ve.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),b.jsxs(Rt,{md:6,lg:4,children:[b.jsxs(ve.Group,{controlId:"thm",children:[b.jsx(ve.Label,{children:"Terrain Height Multiplier"}),b.jsx(ve.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>p("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),b.jsx(ve.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),b.jsxs(Rt,{md:6,lg:4,children:[b.jsxs(ve.Group,{controlId:"colorSteps",children:[b.jsx(ve.Label,{children:"Terrain Steps"}),b.jsx(ve.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>p("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),b.jsx(ve.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),b.jsx(Rt,{md:6,lg:4,children:b.jsxs(ve.Group,{controlId:"numColors",children:[b.jsx(ve.Label,{children:"Number of Terrain Colors"}),b.jsx(ve.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>p("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),b.jsx(ve.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),b.jsxs("div",{className:"mt-4",children:[b.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),b.jsx(dr,{className:"g-3",children:c.colors.map((v,_)=>b.jsx(Rt,{xs:3,sm:2,md:1,lg:1,children:b.jsx(ve.Group,{controlId:`color-${_}`,children:b.jsx(ve.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:S=>{const T=S.currentTarget.value;p("colors",c.colors.map((E,H)=>H===_?T:E))},title:`Pick color ${_+1}`})})},_))})]}),b.jsxs("div",{className:"d-flex gap-2 mt-4",children:[b.jsx(zl,{variant:"primary",onClick:()=>f?.(c),children:"Apply"}),b.jsx(zl,{variant:"outline-secondary",onClick:()=>d(h),children:"Reset to Defaults"})]})]})})}function f2(s,u){const f=s>>>0,i=u>>>0||1;return(i&i-1)===0?f+(i-1)&~(i-1):Math.ceil(f/i)*i>>>0}function sh(s){if(typeof s!="string")return"";const u=s.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(u))return u;const f=u.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(f)return`vec${f[1]}${f[2][0]}`;const i=u.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const fh={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function io(s){const u={fields:[],size:0};let f=0,i=1;for(const h of s){const c=sh(h.type);if(!c)throw new Error(`Unsupported type: ${h.type}`);const d=c;if(d.startsWith("pad")){const v=parseInt(d.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${d}`);const _={name:h.name,type:d,offset:f,size:v,align:1};u.fields.push(_),f+=v;continue}const y=fh[d];if(!y)throw new Error(`Unsupported non-pad type: ${d}`);f=f2(f,y.align);const g={name:h.name,type:d,offset:f,size:y.size,align:y.align};u.fields.push(g),f+=y.size,y.align>i&&(i=y.align)}return u.size=f2(f,Math.max(16,i)),u}function dh(s,u){const f=new ArrayBuffer(s.size),i=new DataView(f);for(const h of s.fields){if(h.type.startsWith("pad"))continue;const c=u[h.name];if(c==null)throw new Error(`Missing field '${h.name}'`);switch(h.type){case"f32":i.setFloat32(h.offset,+c,!0);break;case"u32":i.setUint32(h.offset,c>>>0,!0);break;case"i32":i.setInt32(h.offset,c|0,!0);break;case"bool":i.setUint32(h.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(h.offset,c[0],!0),i.setFloat32(h.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(h.offset,c[0],!0),i.setFloat32(h.offset+4,c[1],!0),i.setFloat32(h.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(h.offset,c[0],!0),i.setFloat32(h.offset+4,c[1],!0),i.setFloat32(h.offset+8,c[2],!0),i.setFloat32(h.offset+12,c[3],!0);break;case"vec2u":i.setUint32(h.offset,c[0]>>>0,!0),i.setUint32(h.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(h.offset,c[0]>>>0,!0),i.setUint32(h.offset+4,c[1]>>>0,!0),i.setUint32(h.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(h.offset,c[0]>>>0,!0),i.setUint32(h.offset+4,c[1]>>>0,!0),i.setUint32(h.offset+8,c[2]>>>0,!0),i.setUint32(h.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(h.offset,c[0]|0,!0),i.setInt32(h.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(h.offset,c[0]|0,!0),i.setInt32(h.offset+4,c[1]|0,!0),i.setInt32(h.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(h.offset,c[0]|0,!0),i.setInt32(h.offset+4,c[1]|0,!0),i.setInt32(h.offset+8,c[2]|0,!0),i.setInt32(h.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${h.type}`)}}return f}function co(s,u,f,i,h,c){const d=dh(u,f),p=c??s.createBuffer({size:u.size,usage:i,label:h});return s.queue.writeBuffer(p,0,d),p}const hh=io([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function mh(s,u,f,i){const h={maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps>>>0,numberOfTerrainColors:(f?.length??0)>>>0,_padT0:[0,0]};return co(s,hh,h,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function ph(s,u,f){{const i=s.createBuffer({label:"Terrain Colors Buffer",size:u.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return s.queue.writeBuffer(i,0,gh(u)),i}}function gh(s){const u=[];for(let f of s){/^#([0-9a-fA-F]{3})$/.test(f)&&(f=f.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=f.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const h=i[1],c=parseInt(h.slice(0,2),16)/255,d=parseInt(h.slice(2,4),16)/255,p=parseInt(h.slice(4,6),16)/255;u.push(c,d,p,1)}return new Float32Array(u)}const yh=io([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"frameIndex",type:"u32"},{name:"showDebug",type:"u32"},{name:"pixelScale",type:"u32"}]);function d2(s,u,f){const i={size:[u.width,u.height],time:u.time,frameIndex:u.frameIndex,showDebug:u.showDebug?1:0,pixelScale:u.pixelScale};return co(s,yh,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",f)}const vh=io([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouse2Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"cursorType",type:"u32"},{name:"visibleRect",type:"vec4u"}]);function h2(s,u,f){const i=u.cursorType=="none"?0:u.cursorType=="radius"?1:2,h={mousePos:[u.mousePos.x,u.mousePos.y],mouse0Held:u.mouse0Held?1:0,mouse1Held:u.mouse1Held?1:0,mouse2Held:u.mouse2Held?1:0,mouseRadius:u.mouseRadius,cursorType:i,visibleRect:[u.visibleRect.x0,u.visibleRect.y0,u.visibleRect.x1,u.visibleRect.y1]};return co(s,vh,h,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",f)}function xh(s,u,f,i){const c={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},uSim:{binding:3,type:"uniform",buffer:i.simBuffer,minBindingSize:16},currentCells:{binding:4,type:"storage",buffer:i.prevCellsBuffer},nextCells:{binding:5,type:"storage",buffer:i.nextCellsBuffer},terrainColors:{binding:6,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:7,type:"storage",buffer:i.outputTextureBuffer},cursorQuery:{binding:8,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:9,type:"storage",buffer:i.chunkDataBuffer},sprites:{binding:10,type:"read-only-storage",buffer:i.spriteDataBuffer}},d=s.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(c).filter(U=>!["sprite","spriteColors"].includes(U)).map(U=>U==="uSim"?{binding:c[U].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:c[U].type,hasDynamicOffset:!0,minBindingSize:16}}:{binding:c[U].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:c[U].type}})}),p=s.createBindGroup({label:"Unified Compute BG A",layout:d,entries:Object.keys(c).map(U=>U==="currentCells"?{binding:c.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:U==="nextCells"?{binding:c.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:U==="uSim"?{binding:c.uSim.binding,resource:{buffer:i.simBuffer,offset:0,size:16}}:{binding:c[U].binding,resource:{buffer:c[U].buffer}})}),y=s.createBindGroup({label:"Unified Compute BG show B",layout:d,entries:Object.keys(c).map(U=>U==="currentCells"?{binding:c.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:U==="nextCells"?{binding:c.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:U==="uSim"?{binding:c.uSim.binding,resource:{buffer:i.simBuffer,offset:0,size:16}}:{binding:c[U].binding,resource:{buffer:c[U].buffer}})}),g=s.createBindGroupLayout({label:"Render BGL",entries:[{binding:c.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:c.uView.type}},{binding:c.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:c.uInput.type}},{binding:c.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:c.outputTex.type}}]}),v=s.createRenderPipeline({label:"Render Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[g],label:"Render Pipeline Layout"}),vertex:{module:u,entryPoint:"vs"},fragment:{module:u,entryPoint:"fs",targets:[{format:f}]},primitive:{topology:"triangle-list"}}),_=s.createComputePipeline({label:"Normal Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Normal Compute Pipeline Layout"}),compute:{module:u,entryPoint:"calc_normals"}}),S=s.createComputePipeline({label:"Cursor Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Cursor Query Pipeline Layout"}),compute:{module:u,entryPoint:"cursor_query"}}),T=s.createComputePipeline({label:"Total Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Total Query Pipeline Layout"}),compute:{module:u,entryPoint:"total_query"}}),E=s.createComputePipeline({label:"Chunk Data Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Chunk Data Pipeline Layout"}),compute:{module:u,entryPoint:"chunk_data_calc"}}),H=s.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"terrain_render"}}),A=s.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"shadow_render"}}),X=s.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"fluid_render"}}),O=s.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"debug_render"}}),k=s.createComputePipeline({label:"Sprite Render Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Sprite Render Compute Pipeline Layout"}),compute:{module:u,entryPoint:"sprite_render"}}),Z=s.createComputePipeline({label:"Step Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[d],label:"Step Compute Pipeline Layout"}),compute:{module:u,entryPoint:"step"}}),Y=s.createBindGroup({label:"Render BG",layout:g,entries:[{binding:c.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:c.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:c.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:v,normalComputePipeline:_,cursorQueryPipeline:S,totalQueryPipeline:T,chunkDataPipeline:E,terrainTextureComputePipeline:H,shadowTextureComputePipeline:A,fluidTextureComputePipeline:X,debugTextureComputePipeline:O,spriteRenderComputePipeline:k,stepComputePipeline:Z},bindGroups:{unifiedComputeBG_A:p,unifiedComputeBG_B:y,renderBG:Y}}}function bh(s,u){return s.mouse0Held===u.mouse0Held&&s.mouse1Held===u.mouse1Held&&s.mouse2Held===u.mouse2Held&&s.mouse0Pressed===u.mouse0Pressed&&s.mouse1Pressed===u.mouse1Pressed&&s.mouse2Pressed===u.mouse2Pressed&&s.mouseRadius===u.mouseRadius&&s.mouseMoved===u.mouseMoved&&s.cursorType===u.cursorType&&s.mousePosition.x===u.mousePosition.x&&s.mousePosition.y===u.mousePosition.y&&s.visibleRect.x0===u.visibleRect.x0&&s.visibleRect.y0===u.visibleRect.y0&&s.visibleRect.x1===u.visibleRect.x1&&s.visibleRect.y1===u.visibleRect.y1&&s.visibleRect.width===u.visibleRect.width&&s.visibleRect.height===u.visibleRect.height&&s.visibleRectChanged===u.visibleRectChanged&&s.simulationSubSteps===u.simulationSubSteps}const _h={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseRadius:30,mouseMoved:!1,cursorType:"none",mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:screen.width,y1:screen.height,width:screen.width,height:screen.height},visibleRectChanged:!1,simulationSubSteps:1};class Sh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(u){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(u);const f=u-this.winMs;for(;this.times.length&&this.times[0]<f;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const hr=new Sh;async function Ch(s="./sprites_built"){const[u,f]=await Promise.all([fetch(`${s}/manifest.json`),fetch(`${s}/sprites_u32.bin`)]),i=await u.json(),h=await f.arrayBuffer(),c=new Uint32Array(h),d=new Map;for(const p of i.entries)d.set(p.path,p.index),d.set(p.name,p.index);return{manifest:i,spritesU32:c,spriteMap:d}}const m2=64,cn=(s,u,f)=>{if(s?.aborted)throw console.log(`Aborted ${u} at stage: ${f}`),new DOMException("Aborted","AbortError")},xn=()=>new Promise(requestAnimationFrame),Mu=new WeakMap;async function Th(s,u=pr,f,i,h,c,d){if(!s)return null;const p=Mu.get(s);p&&p.abort.abort();const y=new AbortController,g=(async()=>{try{return await Dh(s,u,f,i,h,c,d,y.signal)}catch(v){if(v.name==="AbortError")return}finally{const v=Mu.get(s);v&&v.promise===g&&Mu.delete(s)}})();return Mu.set(s,{promise:g,abort:y}),g}async function $c(s,u,f,i=1e6,h=null,c=0){cn(h,c,`Write buffer: ${u.label}`);const d=performance.now(),p=f.BYTES_PER_ELEMENT;f.byteLength;const y=f.length;let g=0;for(;g<y;){const v=Math.min(g+i,y),_=g*p,S=(v-g)*p;s.queue.writeBuffer(u,_,f.buffer,_,S),g=v,cn(h,c,`Write buffer: ${u.label}`),await xn()}performance.now()-d}function Rh(s,u,f){const i=Math.ceil(s/f),h=Math.ceil(u/f);return[i,h]}async function Dh(s,u=pr,f,i,h,c,d,p){if(!s)return()=>{};s.__wgpuCleanup&&s.__wgpuCleanup();const y=performance.now(),g=Math.ceil(Math.random()*1e9),v=9;var _=0;cn(p,g,"Start"),await xn(),d(_/v*100),_++;var T=!1,E=0,H=0,A=0,X=!0,O=!0,k=!0;const Z=f(),Y=16,[U,N]=Rh(u.width,u.height,Y);var ue=u.seed,ne=!1;const ge=256,Se=16,re=32,Ae=u.width*u.height*4*4,pe=u.width*u.height*4*u.pixelScale*u.pixelScale,j=12,J=4*j,F=u.width*u.height*J,se=1e6,x=()=>{T=!T},G=tt=>{T=tt},q=await h3(),K=s.getContext("webgpu");K.__deviceId=q.__id;const I=navigator.gpu.getPreferredCanvasFormat();K.configure({device:q,format:I,alphaMode:"opaque"});let fe=j3();const ce=q.createShaderModule({label:"Rect Shader",code:fe});cn(p,g,"Shader Compilation"),await xn(),d(_/v*100),_++,s.width=u.width*u.pixelScale,s.height=u.height*u.pixelScale,s.style.imageRendering="pixelated";const xe=d2(q,{width:u.width,height:u.height,time:0,frameIndex:H,showDebug:T,pixelScale:u.pixelScale});function $(){d2(q,{width:u.width,height:u.height,time:E,frameIndex:H,showDebug:T,pixelScale:u.pixelScale},xe)}const ie=h2(q,{mousePos:Z.mousePosition,mouse0Held:Z.mouse0Held,mouse1Held:Z.mouse1Held,mouseRadius:Z.mouseRadius,cursorType:Z.cursorType,visibleRect:Z.visibleRect}),Ve=mh(q,{maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps},u.colors),Oe=ph(q,u.colors),Ze=q.createBuffer({label:"Sim Index Buffer",size:ge*re,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ct=tt=>{for(let qe=0;qe<re;qe++){const ln=new ArrayBuffer(Se);new Uint32Array(ln)[0]=tt+qe,q.queue.writeBuffer(Ze,qe*ge,ln)}};cn(p,g,"Uniform Buffers"),await xn(),d(_/v*100),_++;const Mt=q.createBuffer({label:"Chunk Data",size:16*U*N,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});function fn(tt){h2(q,{mousePos:tt.mousePosition,mouse0Held:tt.mouse0Held,mouse1Held:tt.mouse1Held,mouse2Held:tt.mouse2Held,mouseRadius:tt.mouseRadius,cursorType:tt.cursorType,visibleRect:tt.visibleRect},ie)}const Nt=q.createBuffer({label:"Output Texture",size:Ae+pe,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});cn(p,g,"Texture Buffer"),await xn(),d(_/v*100),_++,console.time("loadPackedSprites");const{manifest:pt,spritesU32:qt,spriteMap:dn}=await Ch();console.timeEnd("loadPackedSprites"),cn(p,g,"Sprite Buffers"),await xn(),d(_/v*100),_++;const nn=q.createBuffer({label:"Sprite Data",size:qt.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});await $c(q,nn,qt,se,p);const Lt=q.createBuffer({label:"Prev Cells",size:F,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Un=q.createBuffer({label:"Next Cells",size:F,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});cn(p,g,"Cell Buffers"),await xn(),d(_/v*100),_++;const ol=async tt=>{const qe=new Float32Array(u.width*u.height*j),ln=m3(tt,u.width,u.height,u.noiseType,u.fractalOctaves,u.fractalLacunarity,u.fractalGain,u.fractalType,u.frequency);cn(p,g,"Noise Gen"),await xn(),d(_/v*100),_++;for(let at=0;at<ln.length;at++){const rt=at*j;qe[rt]=ln[at]*100,qe[rt+8]=Math.floor(Math.random()*8)+0}await $c(q,Lt,qe,se,p),await $c(q,Un,qe,se,p),H=0,A=0,O=!0},te=async()=>{ne=!0,await ol(ue),ne=!1},be=async()=>{ue=Math.ceil(Math.random()*1e9),await te()};await te();const de=q.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),Te=q.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});cn(p,g,"Query Buffers"),await xn(),d(_/v*100),_++;const ae=xh(q,ce,I,{prevCellsBuffer:Lt,nextCellsBuffer:Un,terrainBuffer:Ve,simBuffer:Ze,terrainColorsBuffer:Oe,viewUniformBuffer:xe,inputUniformBuffer:ie,outputTextureBuffer:Nt,cursorQueryBuffer:de,chunkDataBuffer:Mt,spriteDataBuffer:nn});cn(p,g,"Binding Creation"),await xn(),d(_/v*100),_++;const we={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},gt=16,Dt=16,Ht=Math.ceil(u.width/gt),bt=Math.ceil(u.height/Dt);let Ie=!0,_t=0;var Pt=f();let Zt=!1;function kn(tt=0){if(K.__deviceId!==q.__id)return;if(ne){_t=requestAnimationFrame(kn);return}hr.begin();var qe=f();bh(qe,Pt)||(fn(qe),Pt=qe);const ln=H%6===0;q.pushErrorScope("validation"),E=tt*.001,$(),ct(A);var at=0;const rt=q.createCommandEncoder({label:"Encoder"});{const ee=rt.beginComputePass({label:"Step Compute Pass"});ee.setPipeline(ae.piplines.stepComputePipeline);for(let bn=0;bn<qe.simulationSubSteps*2;bn++)at=bn*ge,ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Ht,bt,1),Ie=!Ie,A=A+1>>>0,A>4e9&&(A=0);c(A),ee.end()}if((H===0||qe.mouse0Held||qe.mouse1Held)&&(k=!0),H<60&&(O=!0,X=!0,k=!0),qe.visibleRectChanged&&(k=!0),X||O){const ee=rt.beginComputePass({label:"Normal Compute Pass"});ee.setPipeline(ae.piplines.normalComputePipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Ht,bt,1),ee.end()}if(O){const ee=rt.beginComputePass({label:"Terrain Texture Compute Pass"});ee.setPipeline(ae.piplines.terrainTextureComputePipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Ht,bt,1),ee.end()}if(k||O){const ee=rt.beginComputePass({label:"Shadow Texture Compute Pass"});ee.setPipeline(ae.piplines.shadowTextureComputePipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Ht,bt,1),ee.end(),qe={...qe,visibleRectChanged:!1}}if(k||O){const ee=rt.beginComputePass({label:"Fluid Texture Compute Pass"});ee.setPipeline(ae.piplines.fluidTextureComputePipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Ht,bt,1),ee.end(),qe={...qe,visibleRectChanged:!1}}if(H%10==0&&T){const ee=rt.beginComputePass({label:"Debug Texture Compute Pass"});ee.setPipeline(ae.piplines.debugTextureComputePipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Ht,bt,1),ee.end()}{const ee=rt.beginComputePass({label:"Sprite Render Compute Pass"});ee.setPipeline(ae.piplines.spriteRenderComputePipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(Math.ceil(m2/gt),Math.ceil(m2/Dt),1),ee.end()}if(ln){const ee=rt.beginComputePass({label:"Cursor Query Pass"});ee.setPipeline(ae.piplines.cursorQueryPipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(1,1,1),ee.end()}if(H%60==0){const ee=rt.beginComputePass({label:"Total Query Pass"});ee.setPipeline(ae.piplines.totalQueryPipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(1,1,1),ee.end()}{const ee=rt.beginComputePass({label:"Chunk Data Pass"});ee.setPipeline(ae.piplines.chunkDataPipeline),ee.setBindGroup(0,Ie?ae.bindGroups.unifiedComputeBG_A:ae.bindGroups.unifiedComputeBG_B,[at]),ee.dispatchWorkgroups(U,N,1),ee.end()}we.colorAttachments[0].view=K.getCurrentTexture().createView();{const ee=rt.beginRenderPass(we);ee.setPipeline(ae.piplines.renderPipeline),ee.setBindGroup(0,ae.bindGroups.renderBG),ee.draw(3),ee.end()}ln&&!Zt&&rt.copyBufferToBuffer(de,0,Te,0,64),q.queue.submit([rt.finish()]),q.popErrorScope().then(ee=>{ee&&console.error(ee.message)}),ln&&!Zt&&(Zt=!0,Te.mapAsync(GPUMapMode.READ).then(()=>{const ee=new DataView(Te.getMappedRange(0,64)),bn=ee.getFloat32(0,!0),yr=ee.getFloat32(16,!0),Bu=ee.getFloat32(20,!0),hn=ee.getFloat32(24,!0),ot=ee.getFloat32(28,!0),St=ee.getFloat32(48,!0),Yn=ee.getFloat32(52,!0),ha=ee.getUint32(56,!0);h({height:bn,normal:{x:yr,y:Bu,z:hn},fAmount:ot,fluidTotal:St,antiFluidTotal:Yn,chunkUpdates:ha})}).catch(()=>{}).finally(()=>{Te.unmap(),Zt=!1})),O=!1,k=!1,X=!1,hr.end(tt),H++,_t=requestAnimationFrame(kn)}_t=requestAnimationFrame(kn);const da=()=>{cancelAnimationFrame(_t),xe.destroy(),ie.destroy(),Ve.destroy(),Oe.destroy(),Lt.destroy(),Un.destroy(),Nt.destroy()};s.__wgpuCleanup=da;const gr={cleanup:da,resetMap:te,randomizeMap:be,toggleShowDebug:x,setShowDebug:G,spriteMap:dn};return performance.now()-y,gr}const zh=L.forwardRef(({noiseSettings:s=pr,inputRef:u,setInput:f,setWebGPUHandle:i,setCursorQuery:h,style:c,setSimIndex:d,loadingState:p,children:y},g)=>{const v=L.useRef(null);return L.useImperativeHandle(g,()=>v.current,[]),L.useEffect(()=>{if(!v.current)return;let _=null;return console.log("Init effect"),v.current.__wgpuCleanup?.(),Th(v.current,s,()=>u.current,f,h,d,p.setLoadingProgress).then(S=>{S&&(_=S,i(S),setTimeout(()=>p.setLoading(!1),1e3))}).catch(S=>{S?.name!=="AbortError"&&console.error(S)}),()=>{_?.cleanup?.()}},[s,f,i,h,d,p.setLoadingProgress]),b.jsx(b.Fragment,{children:b.jsx("canvas",{ref:v,style:{...c,display:"block",width:"100%",height:"100%"},children:y})})}),Mh=on.memo(zh,(s,u)=>s.noiseSettings===u.noiseSettings&&s.children===u.children),wh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function Eh({cursorQuery:s}){var c=Math.ceil(s.height),d=Math.abs(s.fAmount<0?Math.floor(s.fAmount):Math.ceil(s.fAmount));d+c>200&&(d=200-c);const p=c/200*150,y=d/200*150;var g="";return d>0&&(Math.abs(s.fAmount)<1?g=" < 1":g=`${d}`),b.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[b.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),b.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:s.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"0px"},children:b.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:g})}),b.jsx("div",{style:{width:"50px",height:`${p}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:b.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:s.height>0?`${c}`:""})})]})}function Ah({input:s}){return b.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${s.mousePosition.x}, ${s.mousePosition.y})`})}const Pe=({children:s})=>b.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:s});function Oh(){return b.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:b.jsx(sn,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:b.jsxs(sn.Body,{style:{padding:"0.9rem 1rem"},children:[b.jsxs(sn.Title,{style:{fontSize:16,marginBottom:8},children:["Controls - Press ",b.jsx(Pe,{children:"F9"})," to close"]}),b.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[b.jsxs("div",{children:[b.jsx(Pe,{children:"F11"})," — Toggle Fullscreen"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"F8"})," — Toggle Debug Stats"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"W"}),b.jsx(Pe,{children:"A"}),b.jsx(Pe,{children:"S"}),b.jsx(Pe,{children:"D"})," or ",b.jsx(Pe,{children:"←"}),b.jsx(Pe,{children:"→"}),b.jsx(Pe,{children:"↑"}),b.jsx(Pe,{children:"↓"})," — Pan Camera"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"ScrollWheel"})," — Zoom"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"Shift"})," +"," ",b.jsx(Pe,{children:"ScrollWheel"})," — Change Brush Radius"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"LMB"}),"/",b.jsx(Pe,{children:"RMB"})," — (Paint / Remove) Fluid"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"Spacebar"})," — Toggle Pause"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"Tab"})," / ",b.jsx(Pe,{children:"Shift"}),"+",b.jsx(Pe,{children:"Tab"})," — Increase / Decrease Speed"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"C"})," — Clear Map ",b.jsx(Pe,{children:"R"})," ","— Randmoize Map"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"1"})," - ",b.jsx(Pe,{children:"5"})," — Open Build Tabs ",b.jsx(Pe,{children:"B"})," — Toggle Build Menu"]}),b.jsxs("div",{children:[b.jsx(Pe,{children:"Esc"})," — Exit Menus"]})]})]})})})}var Vh=["color","size","title","className"];function eo(){return eo=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(s[i]=f[i])}return s},eo.apply(null,arguments)}function Hh(s,u){if(s==null)return{};var f,i,h=Bh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)f=c[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(s,f)&&(h[f]=s[f])}return h}function Bh(s,u){if(s==null)return{};var f={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;f[i]=s[i]}return f}var q2=L.forwardRef(function(s,u){var f=s.color,i=f===void 0?"currentColor":f,h=s.size,c=h===void 0?"1em":h,d=s.title,p=d===void 0?null:d,y=s.className,g=y===void 0?"":y,v=Hh(s,Vh);return on.createElement("svg",eo({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",g].filter(Boolean).join(" ")},v),p?on.createElement("title",null,p):null,on.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});q2.propTypes={color:mt.string,size:mt.oneOfType([mt.string,mt.number]),title:mt.string,className:mt.string};var Gh=["color","size","title","className"];function to(){return to=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var f=arguments[u];for(var i in f)({}).hasOwnProperty.call(f,i)&&(s[i]=f[i])}return s},to.apply(null,arguments)}function jh(s,u){if(s==null)return{};var f,i,h=Uh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)f=c[i],u.indexOf(f)===-1&&{}.propertyIsEnumerable.call(s,f)&&(h[f]=s[f])}return h}function Uh(s,u){if(s==null)return{};var f={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;f[i]=s[i]}return f}var L2=L.forwardRef(function(s,u){var f=s.color,i=f===void 0?"currentColor":f,h=s.size,c=h===void 0?"1em":h,d=s.title,p=d===void 0?null:d,y=s.className,g=y===void 0?"":y,v=jh(s,Gh);return on.createElement("svg",to({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",g].filter(Boolean).join(" ")},v),p?on.createElement("title",null,p):null,on.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});L2.propTypes={color:mt.string,size:mt.oneOfType([mt.string,mt.number]),title:mt.string,className:mt.string};const Vt=[.5,1,2,3],P2=(s,u,f)=>Math.min(f,Math.max(u,s));function kh(s,u=!0){if(u){var f=(Vt.indexOf(s)+1)%Vt.length;return Vt[f]}else{var f=P2(Vt.indexOf(s)+1,0,Vt.length-1);return Vt[f]}}function Yh(s,u=!0){if(u){var f=(Vt.indexOf(s)-1+Vt.length)%Vt.length;return Vt[f]}else{var f=P2(Vt.indexOf(s)-1,0,Vt.length-1);return Vt[f]}}function Xh({gameSpeed:s,paused:u,onChange:f,setCursorOverUI:i,setCursorMode:h,className:c,size:d}){const p=T=>f({paused:!1,gameSpeed:T}),y=()=>f({paused:!u,gameSpeed:s}),[g,v]=L.useState(null),_=40,S={backgroundColor:"rgba(99, 99, 99, 0.57)",color:"white",border:"4px solid white",borderRadius:0,fontSize:"20px",width:_,height:_,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none",cursor:"none"};return b.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:b.jsxs(lo,{className:`${c} rounded-0`,size:d,style:{border:"none"},onMouseEnter:()=>{i(!0),h("link")},onMouseLeave:()=>{i(!1),h("default")},children:[b.jsx(zl,{type:"button",variant:"primary",onClick:y,onMouseEnter:()=>v(0),onMouseLeave:()=>v(null),"aria-pressed":u,"aria-label":u?"Resume":"Pause",style:{...S,color:g!==0?"white":"red"},children:u?b.jsx(L2,{}):b.jsx(q2,{})}),Vt.map(T=>b.jsx(zl,{type:"button",variant:s===T&&!u?"primary":"outline-secondary",active:s===T&&!u,onClick:()=>p(T),onMouseEnter:()=>v(T),onMouseLeave:()=>v(null),"aria-pressed":s===T&&!u,"aria-label":T<1?`1/${Math.round(1/T)}x gameSpeed`:`${T}x gameSpeed`,style:{...S,color:s===T&&!u||g===T?"white":"gray",marginLeft:"-4px",fontSize:T<1?"15px":""},children:T<1?`1/${Math.round(1/T)}x`:`${T}x`},T))]})})}function Nh({cursorQuery:s,gameSpeed:u,mode:f="full",simIndex:i}){const[h,c]=L.useState(0),[d,p]=L.useState(0),[y,g]=L.useState(0);L.useEffect(()=>{const T=setInterval(()=>{c(hr.fps),p(hr.cpuMs),g(hr.frameCount)},250);return()=>clearInterval(T)},[]);const v=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),_=`${d.toFixed(2)}`.padStart(5,"0"),S=s.chunkUpdates*16*16*u*4;return f=="simple"?b.jsx("div",{children:`FPS: ${h}`}):b.jsx(sn,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:b.jsxs(sn.Body,{style:{padding:"0.9rem 1rem"},children:[b.jsxs(sn.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",b.jsx(Pe,{children:"F8"})," to close"]}),b.jsx("div",{children:`FPS: ${h} (Frame Duration: ${_} ms) (Frames: ${v.format(y)})`}),b.jsx("div",{children:`Simulation Steps: ${v.format(i)}`}),b.jsx("div",{children:`Chunk Updates: ${v.format(s.chunkUpdates)}`}),b.jsx("div",{children:`Cell Updates per frame: ${v.format(S)}`}),b.jsx("div",{children:`Total Fluid: ${v.format(Math.ceil(s.fluidTotal))}`}),b.jsx("div",{children:`Total Anti Fluid: ${v.format(Math.ceil(s.antiFluidTotal))}`}),b.jsx("div",{children:`Total Combined Fluid: ${v.format(Math.ceil(s.fluidTotal-s.antiFluidTotal))}`})]})})}function qh({setCursorOverUI:s,setCursorMode:u,tabs:f,initialActiveKey:i=null,onTabChange:h,panelHeight:c=150,className:d,children:p,closeOnEscape:y=!0,closeOnOutsideClick:g=!0,hotkey:v="b"}){const _={imageRendering:"pixelated",pointerEvents:"none",aspectRatio:"initial",width:"100%"},S={width:"100px",height:"100px",background:"none",backgroundColor:"none",borderRadius:"0px",border:"solid 4px white",padding:12,boxShadow:"none",cursor:"none"},T=L.useMemo(()=>[{key:"terrain",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Terrain",description:"Raise/Lower/Level the height of the terrain",onClick:()=>{x()}},{key:"fluid",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Fluid",description:"Add or remove fluid.",onClick:()=>{x()}},{key:"antifluid",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Anti-Fluid",description:"Add or remove anti-fluid.",onClick:()=>{x()}}],[]),E=L.useMemo(()=>[{key:"shooter",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Shooter",description:"A basic short range projectile tower.",onClick:()=>{x()}},{key:"cryo",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Cryo",description:"A special tower than can flash freeze fluid in place.",onClick:()=>{x()}},{key:"beam",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Beam",description:"A tower that uses concentrated solar rays to evaporate fluid.",onClick:()=>{x()}},{key:"electro",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Electro",description:"An electric based tower that shocks the fluid surface speeding up evaporation in an area.",onClick:()=>{x()}},{key:"neutralizer",icon:b.jsx("img",{src:"./sprites/sprayer.png",style:_}),label:"Neutralizer",description:"An tower that sprays anit-fluid that destroies fluid on contact.",onClick:()=>{x()}}],[]),H=L.useMemo(()=>[{key:"terraformer",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Terraformer",description:"A special tower than can raise/lower the terrain height.",onClick:()=>{x()}},{key:"packer",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Packer",description:"A preventative tower than can temporarily soak up small amount of fluid.",onClick:()=>{x()}},{key:"repulsor",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Repulsor",description:"A tower that creates fields to push back fluid.",onClick:()=>{x()}},{key:"alarm",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Alarm",description:"An tower that sounds an alarm when fluid gets in a detection radius.",onClick:()=>{x()}}],[]),A=L.useMemo(()=>[{key:"solarPanel",icon:b.jsx("img",{src:"./sprites/solar_panel.png",style:_}),label:"Solar Panel",description:"Generates energy in the sun.",onClick:()=>{x()}},{key:"biomassBurner",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Biomass Burner",fontSize:14,description:"Burns biomass to generate small amounts of power.",onClick:()=>{x()}}],[]),X=L.useMemo(()=>[{key:"connector",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Connector",description:"A multi-purpose connection node used to transfer power and resources a short.",onClick:()=>{x()}},{key:"longConnector",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Long Connector",fontSize:14,description:"A multi-purpose connection node used to transfer power and resources a far distance.",onClick:()=>{x()}},{key:"farmer",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Farmer",description:"An automated farming plot used to generate biomass resources. Requires light to operate.",onClick:()=>{x()}},{key:"light",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Light",description:"A powered light source that requires a large amount of energy to operate.",onClick:()=>{x()}},{key:"battery",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Battery",description:"A way to store electric power.",onClick:()=>{x()}}],[]),O=$=>b.jsx("div",{className:"d-flex w-100 justify-content-center align-items-top gap-3",children:$.map(ie=>b.jsxs("div",{style:{width:S.width,display:"grid",placeItems:"center"},children:[b.jsx(zl,{disabled:ie.disabled,style:S,onClick:ie.onClick,onMouseEnter:()=>{ie.disabled||(pe(ie.label??null),J(ie.description??null),u("link"))},onMouseLeave:()=>{ie.disabled||(pe(null),J(null),u("default"))},children:ie.icon},`${ie.key}-build-button`),b.jsx("p",{style:{textAlign:"center",fontSize:ie.fontSize??16,whiteSpace:"nowrap"},children:ie.label},`${ie.key}-build-button-label`)]},`${ie.key}-build-group`))}),k=L.useMemo(()=>[{key:"terraform",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Terraform",hotkey:"1",content:O(T)},{key:"econ",icon:b.jsx("img",{src:"./icons/icon_coin.png",style:_}),label:"Economy",hotkey:"2",content:O(A)},{key:"infrastructure",icon:b.jsx("img",{src:"./icons/icon_power.png",style:_}),label:"Infrastructure",hotkey:"3",content:O(X)},{key:"groundUnits",icon:b.jsx("img",{src:"./icons/icon_shield.png",style:_}),label:"Ground Units",hotkey:"4",content:O(E)},{key:"specialUnits",icon:b.jsx("img",{src:"./icons/icon_shield.png",style:_}),label:"Special Units",hotkey:"5",content:O(H)}],[]),Z=f?.length?f:k,[Y,U]=L.useState(i),[N,ue]=L.useState(i),[ne,ge]=L.useState(i),Se=L.useRef(null),[re,_e]=L.useState(null),[Ae,pe]=L.useState(null),[j,J]=L.useState(null),F=$=>{const ie=Y===$?null:$;U(ie),h?.(ie),ie!=null&&ue(ie)},se=()=>{N!=null?F(N):F(Z[0].key)},x=()=>{U(null),h?.(null)},G=48,q=44,K=44,fe={borderTop:"solid white 4px",borderLeft:"solid white 4px",borderRight:"solid white 4px",borderBottom:"none",borderRadius:"0px 0px 0px 0px",width:q,height:K,margin:`0px ${2.5}px`,backgroundColor:"rgba(0,0,0,.35)",background:"none",display:"inline-flex",alignItems:"flex-start",padding:"4px",transition:"ease-in-out 250ms",cursor:"none"},ce={...fe,height:K*2},xe={...fe,height:K*1.5};return L.useEffect(()=>{if(!g)return;const $=ie=>{if(!Y)return;const Ve=ie.target;if(!Ve)return;const Oe=Se.current;Oe&&(Oe.contains(Ve)||(U(null),h?.(null)))};return window.addEventListener("pointerdown",$,!0),()=>window.removeEventListener("pointerdown",$,!0)},[Y,g,h]),L.useEffect(()=>{const $=ie=>{ie.key==="Escape"&&Y?x():ie.key===v?Y?Y&&x():se():Z.forEach(Ve=>{ie.key==Ve.hotkey&&F(Ve.key)})};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[Y,y,h]),b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
        .tabButton:hover
        {
            height: ${K+4}px;
        }
      `}),b.jsx("div",{className:d,style:{position:"absolute",left:0,right:0,bottom:0,pointerEvents:"none",zIndex:10,cursor:"none"},children:b.jsxs("div",{ref:Se,style:{position:"absolute",left:0,right:0,bottom:0,height:c+G,transform:Y?"translateY(0)":`translateY(${c}px)`,transition:"transform 220ms ease",display:"flex",flexDirection:"column",pointerEvents:"none"},children:[b.jsx("div",{style:{height:G,display:"flex",justifyContent:"start",alignItems:"flex-end",gap:8,padding:"0 12px",paddingLeft:"100px",borderTopLeftRadius:16,borderTopRightRadius:16},children:b.jsx(lo,{style:{display:"inline-flex",alignItems:"flex-end",pointerEvents:"auto"},onMouseDown:$=>$.preventDefault(),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:Z.map($=>{const ie=Y===$.key,Ve=ne===$.key;return b.jsx(zl,{className:"tabButton",onClick:()=>!$.disabled&&F($.key),onMouseEnter:()=>{!$.disabled&&ge($.key),u("link"),pe($.label??null)},onMouseLeave:()=>{!$.disabled&&ge(null),u("default"),pe(null)},disabled:$.disabled,style:ie?ce:Ve?xe:fe,"aria-label":$.label,children:$.icon},$.key)})})}),b.jsx(sn,{text:"light",style:{height:c,borderRadius:0,margin:0,boxShadow:Y?"0 -6px 18px rgba(0,0,0,.45)":"none",pointerEvents:Y?"auto":"none",backgroundColor:"rgba(46, 44, 44, 0.51)",borderTop:"solid white 4px"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:b.jsx(sn.Body,{style:{display:"flex",gap:12,alignItems:"stretch",justifyContent:"flex-start",padding:12},children:Y?Z.find($=>$.key===Y)?.content??b.jsxs("div",{style:{opacity:.8,fontSize:14},children:[b.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",b.jsx("b",{children:Y}),"tab."]}),b.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]}):Z.find($=>$.key===N)?.content??b.jsxs("div",{style:{opacity:.8,fontSize:14},children:[b.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",b.jsx("b",{children:Y})," ","tab."]}),b.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]})})}),b.jsxs("div",{style:{position:"relative",bottom:c},children:[p,b.jsxs("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translate(-50%)",display:"grid",placeItems:"center"},children:[b.jsx("p",{children:Ae}),b.jsx("p",{children:j})]})]})]})})]})}const Lh=({mode:s,images:u,containerRef:f,zIndex:i=1e4,pixelated:h=!1,hideNativeCursor:c=!0,visible:d=!0,disabled:p=!1})=>{if(!f)return;const y=L.useRef(null),[g,v]=L.useState({x:-9999,y:-9999}),_=L.useRef({x:-9999,y:-9999}),S=L.useRef(null),T=u[s]??u.default;L.useEffect(()=>{Object.values(u).forEach(({src:H})=>{const A=new Image;A.src=H})},[u]),L.useEffect(()=>{if(p)return;f?.current??window.document.documentElement;const H=O=>{if(f?.current){const k=f.current.getBoundingClientRect(),Z=O.clientX-k.left,Y=O.clientY-k.top;_.current={x:Z,y:Y}}else _.current={x:O.clientX,y:O.clientY};S.current==null&&(S.current=requestAnimationFrame(()=>{v(_.current),S.current=null}))},A=()=>{v({x:-9999,y:-9999})},X=f?.current??window;return X.addEventListener("mousemove",H),X.addEventListener("mouseleave",A),()=>{X.removeEventListener("mousemove",H),X.removeEventListener("mouseleave",A),S.current&&cancelAnimationFrame(S.current)}},[f,p]),L.useLayoutEffect(()=>{if(!c)return;const H=f?.current??document.body,A=H.style.cursor;return H.style.cursor=p?"":"none",()=>{H.style.cursor=A}},[f,c,p]);const E=L.useMemo(()=>{const H=T?.width,A=T?.height,X=T?.hotspotX??0,O=T?.hotspotY??0;return{position:f?.current?"absolute":"fixed",left:0,top:0,transform:`translate(${g.x-X}px, ${g.y-O}px)`,width:H,height:A,pointerEvents:"none",zIndex:i,imageRendering:h?"pixelated":void 0,willChange:"transform"}},[g,T,i,h,f]);return p||!T||!d?null:b.jsx("img",{ref:y,src:T.src,alt:"",style:E,draggable:!1})};function Ph({containerRef:s,settings:u,setSettings:f,input:i,setInput:h,cursorQuery:c,paused:d,setPaused:p,gameSpeed:y,setGameSpeed:g,simIndex:v,showControlsUI:_,showDebugUI:S,cursorVisible:T,cursorMode:E,setCursorMode:H,setCursorOverUI:A,loadingState:X}){const O={default:{src:"./cursors/pointer.png",width:24,height:24,hotspotX:2,hotspotY:2},link:{src:"./cursors/link.png",width:24,height:24,hotspotX:2,hotspotY:2},grab:{src:"./cursors/grab_hover.png",width:24,height:24,hotspotX:12,hotspotY:12},grabbing:{src:"./cursors/grab.png",width:24,height:24,hotspotX:12,hotspotY:12}};return L.useEffect(()=>{X.loading?(A(!0),H("default"),console.log("hover")):(A(!1),H("default"))},[X.loading]),b.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[b.jsx("div",{id:"output"}),X.loading&&b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"black",zIndex:9e3,opacity:1,transition:"opacity 0.4s ease-out"}}),b.jsxs("div",{className:"position-fixed top-50 start-50 translate-middle text-center",style:{zIndex:9001,width:"clamp(220px, 60vw, 520px)",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[b.jsxs("div",{className:"text-white mb-2 fw-medium",style:{textShadow:"0 1px 2px rgba(0,0,0,.6)"},children:["Loading… ",Math.ceil(X.loadingProgress),"%"]}),b.jsx(N2,{now:X.loadingProgress,animated:!0,style:{height:"1rem",borderRadius:0,backgroundColor:"#2a2a2a"},children:b.jsx("div",{className:"progress-bar",role:"progressbar",style:{width:`${X.loadingProgress}%`,backgroundColor:"#ffffffff",borderRadius:0,transition:"width 0.3s ease-out"}})})]})]}),_&&b.jsx(Oh,{}),b.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:b.jsx(Nh,{cursorQuery:c,gameSpeed:y,simIndex:v,mode:S?"full":"simple"})}),b.jsxs(qh,{setCursorOverUI:A,setCursorMode:H,children:[b.jsx(Ah,{input:i}),b.jsx(Xh,{gameSpeed:y,paused:d,onChange:({paused:k,gameSpeed:Z})=>{p(k),g(Z),h({...i,simulationSubSteps:k?0:Z})},setCursorOverUI:A,setCursorMode:H}),b.jsx(Eh,{cursorQuery:c})]}),b.jsx(Lh,{mode:E,images:O,containerRef:s,pixelated:!0,zIndex:999999,visible:T})]})}const Zh=s=>{const u=s;if(!u)return!1;const f=u.tagName?.toLowerCase();return f==="input"||f==="textarea"||u.isContentEditable||f==="select"},Gn=(s,u,f)=>Math.min(f,Math.max(u,s)),p2=(s,u,f,i)=>{const h=Math.max(0,(f-s)/2),c=Math.max(0,(i-u)/2);return{xMin:-h,xMax:h,yMin:-c,yMax:c}};function Qh(){const[s,u]=L.useState(pr),f=L.useRef(null),[i,h]=on.useState(!1),[c,d]=on.useState(1),[p,y]=L.useState(0),[g,v]=L.useState(!0),[_,S]=L.useState(!1),[T,E]=L.useState(!1),[H,A]=L.useState("default");L.useEffect(()=>{O(xe=>({...xe,cursorType:T?"none":"radius"}))},[T]);const[X,O]=L.useState(_h),k=L.useRef(X);L.useEffect(()=>{k.current=X},[X]);const[Z,Y]=L.useState(wh),U=L.useRef(null),[N,ue]=L.useState({width:1920,height:1080}),[ne,ge]=L.useState({x:0,y:0}),[Se,re]=L.useState(!0),[_e,Ae]=L.useState(2),[pe,j]=L.useState(null),J=L.useRef(null);L.useEffect(()=>{J.current=pe},[pe]);const F=L.useRef(null),[se,x]=L.useState(!0),[G,q]=L.useState(0),K=L.useCallback((xe,$,ie,Ve=!1)=>{const Oe=U.current;if(!Oe)return;const Ze=xe!==void 0&&$!==void 0?{x:xe,y:$}:F.current;if(!Ze)return;const ct=Oe.getBoundingClientRect();if(ct.width===0||ct.height===0)return;const Mt=Oe.width/s.pixelScale/ct.width,fn=Oe.height/s.pixelScale/ct.height,Nt=Math.floor((Ze.x-ct.left)*Mt),pt=Math.floor((Ze.y-ct.top)*fn);O(qt=>{const dn=Gn(Nt,0,s.width-1),nn=Gn(pt,0,s.height-1);return!Ve&&qt.mousePosition.x===dn&&qt.mousePosition.y===nn?qt:{...qt,mousePosition:{x:dn,y:nn},mouseMoved:Ve,cursorVisible:ie==null||ie==U.current}})},[s.width,s.height,s.pixelScale]),I=L.useCallback((xe,$)=>{const ie=U.current;if(!ie)return{x:0,y:0};const Ve={x:xe,y:$},Oe=ie.getBoundingClientRect();if(Oe.width===0||Oe.height===0)return{x:0,y:0};const Ze=ie.width/s.pixelScale/Oe.width,ct=ie.height/s.pixelScale/Oe.height,Mt=Math.floor((Ve.x-Oe.left)*Ze),fn=Math.floor((Ve.y-Oe.top)*ct),Nt=Gn(Mt,0,s.width-1),pt=Gn(fn,0,s.height-1);return{x:Nt,y:pt}},[s.width,s.height,s.pixelScale]);L.useEffect(()=>{const xe=new Set;let $=0,ie=performance.now();const Ve=600;J.current?.setShowDebug(_);const Oe=()=>{const te=window.innerWidth,be=window.innerHeight,de=s.width/s.height;let Te=te,ae=Te/de;return ae<be&&(ae=be,Te=ae*de),{vw:te,vh:be,baseW:Te,baseH:ae}},Ze=()=>{const{vw:te,baseW:be}=Oe();return te/be},ct=te=>{if(Zh(te.target))return;const be=te.key.toLowerCase();(be==="w"||be==="a"||be==="s"||be==="d"||be==="arrowup"||be==="arrowleft"||be==="arrowdown"||be==="arrowright")&&(xe.add(be),te.preventDefault());const de=()=>{h(we=>{let gt=!we;return O(Dt=>({...Dt,simulationSubSteps:gt?0:Math.ceil(c)})),gt}),te.preventDefault()},Te=()=>{d(we=>{let gt=kh(we,!1);return O(Dt=>({...Dt,simulationSubSteps:i?0:Math.ceil(gt)})),gt}),te.preventDefault()},ae=()=>{d(we=>{let gt=Yh(we,!1);return O(Dt=>({...Dt,simulationSubSteps:i?0:Math.ceil(gt)})),gt}),te.preventDefault()};te.code=="Space"?de():te.code=="Tab"?(i?de():te.shiftKey?ae():Te(),te.preventDefault()):te.code=="F9"?(v(we=>!we),te.preventDefault()):te.code=="F8"?(S(we=>(J.current?.setShowDebug(!we),!we)),te.preventDefault()):te.code=="KeyC"?(J.current?.resetMap(),te.preventDefault()):!te.ctrlKey&&te.code=="KeyR"&&(J.current?.randomizeMap(),te.preventDefault())},Mt=te=>{const be=te.key.toLowerCase();xe.delete(be)};function fn(te,be,de,Te){const ae=Math.max(te/de,be/Te),we=Math.min(te*4/de,be*4/Te);return{minScale:ae,maxScale:we}}function Nt(){const te=window.innerWidth,be=window.innerHeight,de=s.width/s.height;let Te=te,ae=Te/de;ae<be&&(ae=be,Te=ae*de);const{minScale:we,maxScale:gt}=fn(te,be,Te,ae),Dt=Math.min(Math.max(_e,we),gt),Ht=Te*Dt,bt=ae*Dt,{xMin:Ie,xMax:_t,yMin:Pt,yMax:Zt}=p2(te,be,Ht,bt);ue({width:Ht,height:bt}),ge(kn=>({x:Gn(kn.x,Ie,_t),y:Gn(kn.y,Pt,Zt)})),requestAnimationFrame(()=>K()),ce()}const pt=te=>{let be=0,de=0;if((xe.has("w")||xe.has("arrowup"))&&(de-=1),(xe.has("s")||xe.has("arrowdown"))&&(de+=1),(xe.has("a")||xe.has("arrowleft"))&&(be-=1),(xe.has("d")||xe.has("arrowright"))&&(be+=1),be!==0||de!==0){const Te=Math.hypot(be,de)||1;be/=Te,de/=Te;const ae=window.innerWidth,we=window.innerHeight,gt=N.width,Dt=N.height,{xMin:Ht,xMax:bt,yMin:Ie,yMax:_t}=p2(ae,we,gt,Dt);ge(Pt=>({x:Gn(Pt.x-be*Ve*_e*te,Ht,bt),y:Gn(Pt.y-de*Ve*_e*te,Ie,_t)})),requestAnimationFrame(()=>K()),ce()}};function qt(te){te.preventDefault();const be=Math.sign(te.deltaY)*-1;if(te.shiftKey)O(de=>{const Te=.1*de.mouseRadius*be,ae=Math.min(Math.max(5,de.mouseRadius+Te),s.width/2);return{...de,mouseRadius:ae}});else{const de=Ze(),Te=4;Ae(ae=>Gn(ae+.1*ae*be,de,Te))}}function dn(te){F.current={x:te.clientX,y:te.clientY},K(te.clientX,te.clientY,te.target,!0)}const nn=te=>{te.button===2&&te.preventDefault(),O(be=>{const de={...be};return te.button===0&&(de.mouse0Held=!0,de.mouse0Pressed=!0),te.button===1&&(de.mouse1Held=!0,de.mouse1Pressed=!0),te.button===2&&(de.mouse2Held=!0,de.mouse2Pressed=!0),de})},Lt=te=>{O(be=>{const de={...be};return te.button===0&&(de.mouse0Held=!1,de.mouse0Pressed=!1),te.button===1&&(de.mouse1Held=!1,de.mouse1Pressed=!1),te.button===2&&(de.mouse2Held=!1,de.mouse2Pressed=!1),de})};function Un(te){te.preventDefault()}const ol=async te=>{const be=(te-ie)/1e3;ie=te,pt(be),ce(),$=requestAnimationFrame(ol),(k.current.mouse0Pressed||k.current.mouse1Pressed||k.current.mouse2Pressed||k.current.mouseMoved)&&O(de=>({...de,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseMoved:!1}))};return window.addEventListener("mousemove",dn),U.current?.addEventListener("mouseup",Lt),window.addEventListener("contextmenu",Un),U.current?.addEventListener("mousedown",nn),window.addEventListener("keydown",ct),window.addEventListener("keyup",Mt),U.current?.addEventListener("wheel",qt,{passive:!1}),window.addEventListener("resize",Nt),Nt(),$=requestAnimationFrame(ol),ce(),()=>{cancelAnimationFrame($),window.removeEventListener("mousemove",dn),U.current?.removeEventListener("mouseup",Lt),window.removeEventListener("contextmenu",Un),U.current?.removeEventListener("mousedown",nn),window.removeEventListener("keydown",ct),window.removeEventListener("keyup",Mt),U.current?.removeEventListener("wheel",qt),window.removeEventListener("resize",Nt)}},[N.width,N.height,_e,i,O,h,c,d,v]);const fe=L.useRef(null),ce=L.useCallback((xe=!0)=>{const $=()=>{if(!U.current)return;const Ve=I(0,0),Oe=I(window.innerWidth,window.innerHeight),Ze={x0:Ve.x,y0:Ve.y,x1:Oe.x,y1:Oe.y,width:Oe.x-Ve.x,height:Oe.y-Ve.y};!Ze||fe.current&&Ze.x0===fe.current.x0&&Ze.y0===fe.current.y0&&Ze.x1===fe.current.x1&&Ze.y1===fe.current.y1||(fe.current=Ze,O(Mt=>({...Mt,visibleRect:Ze,visibleRectChanged:!0})))};xe?requestAnimationFrame($):$()},[O,I,window.innerWidth,window.innerHeight]);return b.jsx(b.Fragment,{children:b.jsxs("div",{ref:f,id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[b.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:N.width,height:N.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${ne.x}px, ${ne.y}px, 0)`,transition:Se?"transform 300ms ease-out, width 300ms ease-out, height 300ms ease-out":"none",willChange:"transform, width, height"},children:b.jsx(Mh,{ref:U,noiseSettings:s,inputRef:k,setInput:O,setWebGPUHandle:j,setCursorQuery:Y,setSimIndex:y,loadingState:{loading:se,setLoading:x,loadingProgress:G,setLoadingProgress:q}})}),b.jsx(Ph,{containerRef:f,settings:s,setSettings:u,input:X,setInput:xe=>{O(xe)},cursorQuery:Z,paused:i,setPaused:h,gameSpeed:c,setGameSpeed:d,simIndex:p,showControlsUI:g,showDebugUI:_,cursorVisible:T,cursorMode:H,setCursorMode:A,setCursorOverUI:E,loadingState:{loading:se,setLoading:x,loadingProgress:G,setLoadingProgress:q}})]})})}d3.createRoot(document.getElementById("root")).render(b.jsx(on.StrictMode,{children:b.jsx(Qh,{})}));
