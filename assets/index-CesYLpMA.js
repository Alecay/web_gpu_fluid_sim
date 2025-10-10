(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const c of d)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function h(d){const c={};return d.integrity&&(c.integrity=d.integrity),d.referrerPolicy&&(c.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?c.credentials="include":d.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(d){if(d.ep)return;d.ep=!0;const c=h(d);fetch(d.href,c)}})();function Tu(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var jc={exports:{}},lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Jd(){if(Lf)return lr;Lf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function h(i,d,c){var f=null;if(c!==void 0&&(f=""+c),d.key!==void 0&&(f=""+d.key),"key"in d){c={};for(var p in d)p!=="key"&&(c[p]=d[p])}else c=d;return d=c.ref,{$$typeof:s,type:i,key:f,ref:d!==void 0?d:null,props:c}}return lr.Fragment=u,lr.jsx=h,lr.jsxs=h,lr}var Zf;function Wd(){return Zf||(Zf=1,jc.exports=Jd()),jc.exports}var b=Wd(),kc={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function Fd(){if(Pf)return Se;Pf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(x){return x===null||typeof x!="object"?null:(x=_&&x[_]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,k={};function E(x,H,J){this.props=x,this.context=H,this.refs=k,this.updater=J||T}E.prototype.isReactComponent={},E.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},E.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function q(){}q.prototype=E.prototype;function O(x,H,J){this.props=x,this.context=H,this.refs=k,this.updater=J||T}var Y=O.prototype=new q;Y.constructor=O,A(Y,E.prototype),Y.isPureReactComponent=!0;var Q=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},U=Object.prototype.hasOwnProperty;function X(x,H,J,N,F,ue){return J=ue.ref,{$$typeof:s,type:x,key:H,ref:J!==void 0?J:null,props:ue}}function ie(x,H){return X(x.type,H,void 0,void 0,void 0,x.props)}function ae(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function ye(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return H[J]})}var be=/\/+/g;function ce(x,H){return typeof x=="object"&&x!==null&&x.key!=null?ye(""+x.key):H.toString(36)}function xe(){}function Me(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(xe,xe):(x.status="pending",x.then(function(H){x.status==="pending"&&(x.status="fulfilled",x.value=H)},function(H){x.status==="pending"&&(x.status="rejected",x.reason=H)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function me(x,H,J,N,F){var ue=typeof x;(ue==="undefined"||ue==="boolean")&&(x=null);var le=!1;if(x===null)le=!0;else switch(ue){case"bigint":case"string":case"number":le=!0;break;case"object":switch(x.$$typeof){case s:case u:le=!0;break;case v:return le=x._init,me(le(x._payload),H,J,N,F)}}if(le)return F=F(x),le=N===""?"."+ce(x,0):N,Q(F)?(J="",le!=null&&(J=le.replace(be,"$&/")+"/"),me(F,H,J,"",function(oe){return oe})):F!=null&&(ae(F)&&(F=ie(F,J+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(be,"$&/")+"/")+le)),H.push(F)),1;le=0;var _e=N===""?".":N+":";if(Q(x))for(var $=0;$<x.length;$++)N=x[$],ue=_e+ce(N,$),le+=me(N,H,J,ue,F);else if($=S(x),typeof $=="function")for(x=$.call(x),$=0;!(N=x.next()).done;)N=N.value,ue=_e+ce(N,$++),le+=me(N,H,J,ue,F);else if(ue==="object"){if(typeof x.then=="function")return me(Me(x),H,J,N,F);throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return le}function j(x,H,J){if(x==null)return x;var N=[],F=0;return me(x,N,"","",function(ue){return H.call(J,ue,F++)}),N}function W(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var ee=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return Se.Children={map:j,forEach:function(x,H,J){j(x,function(){H.apply(this,arguments)},J)},count:function(x){var H=0;return j(x,function(){H++}),H},toArray:function(x){return j(x,function(H){return H})||[]},only:function(x){if(!ae(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Se.Component=E,Se.Fragment=h,Se.Profiler=d,Se.PureComponent=O,Se.StrictMode=i,Se.Suspense=y,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Se.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},Se.cache=function(x){return function(){return x.apply(null,arguments)}},Se.cloneElement=function(x,H,J){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var N=A({},x.props),F=x.key,ue=void 0;if(H!=null)for(le in H.ref!==void 0&&(ue=void 0),H.key!==void 0&&(F=""+H.key),H)!U.call(H,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&H.ref===void 0||(N[le]=H[le]);var le=arguments.length-2;if(le===1)N.children=J;else if(1<le){for(var _e=Array(le),$=0;$<le;$++)_e[$]=arguments[$+2];N.children=_e}return X(x.type,F,void 0,void 0,ue,N)},Se.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},Se.createElement=function(x,H,J){var N,F={},ue=null;if(H!=null)for(N in H.key!==void 0&&(ue=""+H.key),H)U.call(H,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(F[N]=H[N]);var le=arguments.length-2;if(le===1)F.children=J;else if(1<le){for(var _e=Array(le),$=0;$<le;$++)_e[$]=arguments[$+2];F.children=_e}if(x&&x.defaultProps)for(N in le=x.defaultProps,le)F[N]===void 0&&(F[N]=le[N]);return X(x,ue,void 0,void 0,null,F)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(x){return{$$typeof:p,render:x}},Se.isValidElement=ae,Se.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:W}},Se.memo=function(x,H){return{$$typeof:g,type:x,compare:H===void 0?null:H}},Se.startTransition=function(x){var H=G.T,J={};G.T=J;try{var N=x(),F=G.S;F!==null&&F(J,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(se,ee)}catch(ue){ee(ue)}finally{G.T=H}},Se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Se.use=function(x){return G.H.use(x)},Se.useActionState=function(x,H,J){return G.H.useActionState(x,H,J)},Se.useCallback=function(x,H){return G.H.useCallback(x,H)},Se.useContext=function(x){return G.H.useContext(x)},Se.useDebugValue=function(){},Se.useDeferredValue=function(x,H){return G.H.useDeferredValue(x,H)},Se.useEffect=function(x,H,J){var N=G.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(x,H)},Se.useId=function(){return G.H.useId()},Se.useImperativeHandle=function(x,H,J){return G.H.useImperativeHandle(x,H,J)},Se.useInsertionEffect=function(x,H){return G.H.useInsertionEffect(x,H)},Se.useLayoutEffect=function(x,H){return G.H.useLayoutEffect(x,H)},Se.useMemo=function(x,H){return G.H.useMemo(x,H)},Se.useOptimistic=function(x,H){return G.H.useOptimistic(x,H)},Se.useReducer=function(x,H,J){return G.H.useReducer(x,H,J)},Se.useRef=function(x){return G.H.useRef(x)},Se.useState=function(x){return G.H.useState(x)},Se.useSyncExternalStore=function(x,H,J){return G.H.useSyncExternalStore(x,H,J)},Se.useTransition=function(){return G.H.useTransition()},Se.version="19.1.1",Se}var Qf;function Wc(){return Qf||(Qf=1,kc.exports=Fd()),kc.exports}var P=Wc();const $t=Tu(P);var Yc={exports:{}},ar={},Xc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function Id(){return Kf||(Kf=1,(function(s){function u(j,W){var ee=j.length;j.push(W);e:for(;0<ee;){var se=ee-1>>>1,x=j[se];if(0<d(x,W))j[se]=W,j[ee]=x,ee=se;else break e}}function h(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var W=j[0],ee=j.pop();if(ee!==W){j[0]=ee;e:for(var se=0,x=j.length,H=x>>>1;se<H;){var J=2*(se+1)-1,N=j[J],F=J+1,ue=j[F];if(0>d(N,ee))F<x&&0>d(ue,N)?(j[se]=ue,j[F]=ee,se=F):(j[se]=N,j[J]=ee,se=J);else if(F<x&&0>d(ue,ee))j[se]=ue,j[F]=ee,se=F;else break e}}return W}function d(j,W){var ee=j.sortIndex-W.sortIndex;return ee!==0?ee:j.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var y=[],g=[],v=1,_=null,S=3,T=!1,A=!1,k=!1,E=!1,q=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function Q(j){for(var W=h(g);W!==null;){if(W.callback===null)i(g);else if(W.startTime<=j)i(g),W.sortIndex=W.expirationTime,u(y,W);else break;W=h(g)}}function G(j){if(k=!1,Q(j),!A)if(h(y)!==null)A=!0,U||(U=!0,ce());else{var W=h(g);W!==null&&me(G,W.startTime-j)}}var U=!1,X=-1,ie=5,ae=-1;function ye(){return E?!0:!(s.unstable_now()-ae<ie)}function be(){if(E=!1,U){var j=s.unstable_now();ae=j;var W=!0;try{e:{A=!1,k&&(k=!1,O(X),X=-1),T=!0;var ee=S;try{t:{for(Q(j),_=h(y);_!==null&&!(_.expirationTime>j&&ye());){var se=_.callback;if(typeof se=="function"){_.callback=null,S=_.priorityLevel;var x=se(_.expirationTime<=j);if(j=s.unstable_now(),typeof x=="function"){_.callback=x,Q(j),W=!0;break t}_===h(y)&&i(y),Q(j)}else i(y);_=h(y)}if(_!==null)W=!0;else{var H=h(g);H!==null&&me(G,H.startTime-j),W=!1}}break e}finally{_=null,S=ee,T=!1}W=void 0}}finally{W?ce():U=!1}}}var ce;if(typeof Y=="function")ce=function(){Y(be)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Me=xe.port2;xe.port1.onmessage=be,ce=function(){Me.postMessage(null)}}else ce=function(){q(be,0)};function me(j,W){X=q(function(){j(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(j){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var ee=S;S=W;try{return j()}finally{S=ee}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ee=S;S=j;try{return W()}finally{S=ee}},s.unstable_scheduleCallback=function(j,W,ee){var se=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?se+ee:se):ee=se,j){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ee+x,j={id:v++,callback:W,priorityLevel:j,startTime:ee,expirationTime:x,sortIndex:-1},ee>se?(j.sortIndex=ee,u(g,j),h(y)===null&&j===h(g)&&(k?(O(X),X=-1):k=!0,me(G,ee-se))):(j.sortIndex=x,u(y,j),A||T||(A=!0,U||(U=!0,ce()))),j},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(j){var W=S;return function(){var ee=S;S=W;try{return j.apply(this,arguments)}finally{S=ee}}}})(qc)),qc}var Jf;function $d(){return Jf||(Jf=1,Xc.exports=Id()),Xc.exports}var Nc={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function e3(){if(Wf)return Ct;Wf=1;var s=Wc();function u(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var i={d:{f:h,r:function(){throw Error(u(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},d=Symbol.for("react.portal");function c(y,g,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:y,containerInfo:g,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ct.createPortal=function(y,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return c(y,g,null,v)},Ct.flushSync=function(y){var g=f.T,v=i.p;try{if(f.T=null,i.p=2,y)return y()}finally{f.T=g,i.p=v,i.d.f()}},Ct.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(y,g))},Ct.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},Ct.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var v=g.as,_=p(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:T}):v==="script"&&i.d.X(y,{crossOrigin:_,integrity:S,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ct.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);i.d.M(y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(y)},Ct.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,_=p(v,g.crossOrigin);i.d.L(y,v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ct.preloadModule=function(y,g){if(typeof y=="string")if(g){var v=p(g.as,g.crossOrigin);i.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(y)},Ct.requestFormReset=function(y){i.d.r(y)},Ct.unstable_batchedUpdates=function(y,g){return y(g)},Ct.useFormState=function(y,g,v){return f.H.useFormState(y,g,v)},Ct.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ct.version="19.1.1",Ct}var Ff;function t3(){if(Ff)return Nc.exports;Ff=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Nc.exports=e3(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If;function n3(){if(If)return ar;If=1;var s=$d(),u=Wc(),h=t3();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(i(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return p(a),e;if(r===l)return p(a),t;r=r.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=r;else{for(var o=!1,m=a.child;m;){if(m===n){o=!0,n=a,l=r;break}if(m===l){o=!0,l=a,n=r;break}m=m.sibling}if(!o){for(m=r.child;m;){if(m===n){o=!0,n=r,l=a;break}if(m===l){o=!0,l=r,n=a;break}m=m.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),be=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function Me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case E:return"Profiler";case k:return"StrictMode";case G:return"Suspense";case U:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case Y:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Me(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}var me=Array.isArray,j=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},se=[],x=-1;function H(e){return{current:e}}function J(e){0>x||(e.current=se[x],se[x]=null,x--)}function N(e,t){x++,se[x]=e.current,e.current=t}var F=H(null),ue=H(null),le=H(null),_e=H(null);function $(e,t){switch(N(le,t),N(ue,e),N(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vf(t),e=xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(F),N(F,e)}function oe(){J(F),J(ue),J(le)}function Ge(e){e.memoizedState!==null&&N(_e,e);var t=F.current,n=xf(t,e.type);t!==n&&(N(ue,e),N(F,n))}function lt(e){ue.current===e&&(J(F),J(ue)),_e.current===e&&(J(_e),Ia._currentValue=ee)}var ot=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,Rt=s.unstable_cancelCallback,on=s.unstable_shouldYield,tn=s.unstable_requestPaint,st=s.unstable_now,bl=s.unstable_getCurrentPriorityLevel,Mn=s.unstable_ImmediatePriority,te=s.unstable_UserBlockingPriority,I=s.unstable_NormalPriority,ve=s.unstable_LowPriority,Ne=s.unstable_IdlePriority,Le=s.log,Ye=s.unstable_setDisableYieldValue,Qe=null,Re=null;function gt(e){if(typeof Le=="function"&&Ye(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Qe,e)}catch{}}var et=Math.clz32?Math.clz32:sn,nn=Math.log,An=Math.LN2;function sn(e){return e>>>=0,e===0?32:31-(nn(e)/An|0)|0}var el=256,Ze=4194304;function Ee(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?a=Ee(l):(o&=m,o!==0?a=Ee(o):n||(n=m&~e,n!==0&&(a=Ee(n))))):(m=l&~r,m!==0?a=Ee(m):o!==0?a=Ee(o):n||(n=l&~e,n!==0&&(a=Ee(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ne(){var e=el;return el<<=1,(el&4194048)===0&&(el=256),e}function wn(){var e=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Au(e,t,n,l,a,r){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,C=e.expirationTimes,w=e.hiddenUpdates;for(n=o&~n;0<n;){var L=31-et(n),K=1<<L;m[L]=0,C[L]=-1;var V=w[L];if(V!==null)for(w[L]=null,L=0;L<V.length;L++){var B=V[L];B!==null&&(B.lane&=-536870913)}n&=~K}l!==0&&sr(e,l,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function sr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-et(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function fr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-et(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ia(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ca(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lo(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:jf(e.type))}function j2(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var En=Math.random().toString(36).slice(2),_t="__reactFiber$"+En,zt="__reactProps$"+En,_l="__reactContainer$"+En,wu="__reactEvents$"+En,k2="__reactListeners$"+En,Y2="__reactHandles$"+En,ao="__reactResources$"+En,oa="__reactMarker$"+En;function Eu(e){delete e[_t],delete e[zt],delete e[wu],delete e[k2],delete e[Y2]}function Sl(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_l]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cf(e);e!==null;){if(n=e[_t])return n;e=Cf(e)}return t}e=n,n=e.parentNode}return null}function Cl(e){if(e=e[_t]||e[_l]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function sa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tl(e){var t=e[ao];return t||(t=e[ao]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[oa]=!0}var ro=new Set,uo={};function nl(e,t){Rl(e,t),Rl(e+"Capture",t)}function Rl(e,t){for(uo[e]=t,e=0;e<t.length;e++)ro.add(t[e])}var X2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),io={},co={};function q2(e){return ot.call(co,e)?!0:ot.call(io,e)?!1:X2.test(e)?co[e]=!0:(io[e]=!0,!1)}function dr(e,t,n){if(q2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function hr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Ou,oo;function Dl(e){if(Ou===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ou=t&&t[1]||"",oo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ou+e+oo}var Vu=!1;function Hu(e,t){if(!e||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var V=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){V=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){V=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&V&&typeof B.stack=="string")return[B.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],m=r[1];if(o&&m){var C=o.split(`
`),w=m.split(`
`);for(a=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(l===C.length||a===w.length)for(l=C.length-1,a=w.length-1;1<=l&&0<=a&&C[l]!==w[a];)a--;for(;1<=l&&0<=a;l--,a--)if(C[l]!==w[a]){if(l!==1||a!==1)do if(l--,a--,0>a||C[l]!==w[a]){var L=`
`+C[l].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=l&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Dl(n):""}function N2(e){switch(e.tag){case 26:case 27:case 5:return Dl(e.type);case 16:return Dl("Lazy");case 13:return Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 15:return Hu(e.type,!1);case 11:return Hu(e.type.render,!1);case 1:return Hu(e.type,!0);case 31:return Dl("Activity");default:return""}}function so(e){try{var t="";do t+=N2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L2(e){var t=fo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=L2(e))}function ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=fo(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z2=/[\n"\\]/g;function qt(e){return e.replace(Z2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bu(e,t,n,l,a,r,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Gu(e,o,Xt(t)):n!=null?Gu(e,o,Xt(n)):l!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Xt(m):e.removeAttribute("name")}function mo(e,t,n,l,a,r,o,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Xt(n):"",t=t!=null?""+Xt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Gu(e,t,n){t==="number"&&pr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function zl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function po(e,t,n){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xt(n):""}function go(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(i(92));if(me(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Xt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Ml(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var P2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yo(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||P2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vo(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&yo(e,a,l)}else for(var r in t)t.hasOwnProperty(r)&&yo(e,r,t[r])}function Uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gr(e){return K2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ju=null;function ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,wl=null;function xo(e){var t=Cl(e);if(t&&(e=t.stateNode)){var n=e[zt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[zt]||null;if(!a)throw Error(i(90));Bu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ho(l)}break e;case"textarea":po(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&zl(e,!!n.multiple,t,!1)}}}var Yu=!1;function bo(e,t,n){if(Yu)return e(t,n);Yu=!0;try{var l=e(t);return l}finally{if(Yu=!1,(Al!==null||wl!==null)&&(tu(),Al&&(t=Al,e=wl,wl=Al=null,xo(t),e)))for(t=0;t<e.length;t++)xo(e[t])}}function fa(e,t){var n=e.stateNode;if(n===null)return null;var l=n[zt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(dn)try{var da={};Object.defineProperty(da,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Xu=!1}var On=null,qu=null,yr=null;function _o(){if(yr)return yr;var e,t=qu,n=t.length,l,a="value"in On?On.value:On.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[r-l];l++);return yr=a.slice(e,1<l?1-l:void 0)}function vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function So(){return!1}function Mt(e){function t(n,l,a,r,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?xr:So,this.isPropagationStopped=So,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},br=Mt(ll),ha=v({},ll,{view:0,detail:0}),J2=Mt(ha),Nu,Lu,ma,_r=v({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ma&&(ma&&e.type==="mousemove"?(Nu=e.screenX-ma.screenX,Lu=e.screenY-ma.screenY):Lu=Nu=0,ma=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),Co=Mt(_r),W2=v({},_r,{dataTransfer:0}),F2=Mt(W2),I2=v({},ha,{relatedTarget:0}),Zu=Mt(I2),$2=v({},ll,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=Mt($2),t1=v({},ll,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n1=Mt(t1),l1=v({},ll,{data:0}),To=Mt(l1),a1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u1[e])?!!t[e]:!1}function Pu(){return i1}var c1=v({},ha,{key:function(e){if(e.key){var t=a1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o1=Mt(c1),s1=v({},_r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Mt(s1),f1=v({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),d1=Mt(f1),h1=v({},ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=Mt(h1),p1=v({},_r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=Mt(p1),y1=v({},ll,{newState:0,oldState:0}),v1=Mt(y1),x1=[9,13,27,32],Qu=dn&&"CompositionEvent"in window,pa=null;dn&&"documentMode"in document&&(pa=document.documentMode);var b1=dn&&"TextEvent"in window&&!pa,Do=dn&&(!Qu||pa&&8<pa&&11>=pa),zo=" ",Mo=!1;function Ao(e,t){switch(e){case"keyup":return x1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var El=!1;function _1(e,t){switch(e){case"compositionend":return wo(t);case"keypress":return t.which!==32?null:(Mo=!0,zo);case"textInput":return e=t.data,e===zo&&Mo?null:e;default:return null}}function S1(e,t){if(El)return e==="compositionend"||!Qu&&Ao(e,t)?(e=_o(),yr=qu=On=null,El=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Do&&t.locale!=="ko"?null:t.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C1[e.type]:t==="textarea"}function Oo(e,t,n,l){Al?wl?wl.push(l):wl=[l]:Al=l,t=iu(t,"onChange"),0<t.length&&(n=new br("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ga=null,ya=null;function T1(e){hf(e,0)}function Sr(e){var t=sa(e);if(ho(t))return e}function Vo(e,t){if(e==="change")return t}var Ho=!1;if(dn){var Ku;if(dn){var Ju="oninput"in document;if(!Ju){var Bo=document.createElement("div");Bo.setAttribute("oninput","return;"),Ju=typeof Bo.oninput=="function"}Ku=Ju}else Ku=!1;Ho=Ku&&(!document.documentMode||9<document.documentMode)}function Go(){ga&&(ga.detachEvent("onpropertychange",Uo),ya=ga=null)}function Uo(e){if(e.propertyName==="value"&&Sr(ya)){var t=[];Oo(t,ya,e,ku(e)),bo(T1,t)}}function R1(e,t,n){e==="focusin"?(Go(),ga=t,ya=n,ga.attachEvent("onpropertychange",Uo)):e==="focusout"&&Go()}function D1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sr(ya)}function z1(e,t){if(e==="click")return Sr(t)}function M1(e,t){if(e==="input"||e==="change")return Sr(t)}function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:A1;function va(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!ot.call(t,a)||!Ht(e[a],t[a]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ko(e,t){var n=jo(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jo(n)}}function Yo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pr(e.document)}return t}function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var w1=dn&&"documentMode"in document&&11>=document.documentMode,Ol=null,Fu=null,xa=null,Iu=!1;function qo(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Iu||Ol==null||Ol!==pr(l)||(l=Ol,"selectionStart"in l&&Wu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xa&&va(xa,l)||(xa=l,l=iu(Fu,"onSelect"),0<l.length&&(t=new br("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ol)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vl={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionrun:al("Transition","TransitionRun"),transitionstart:al("Transition","TransitionStart"),transitioncancel:al("Transition","TransitionCancel"),transitionend:al("Transition","TransitionEnd")},$u={},No={};dn&&(No=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function rl(e){if($u[e])return $u[e];if(!Vl[e])return e;var t=Vl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in No)return $u[e]=t[n];return e}var Lo=rl("animationend"),Zo=rl("animationiteration"),Po=rl("animationstart"),E1=rl("transitionrun"),O1=rl("transitionstart"),V1=rl("transitioncancel"),Qo=rl("transitionend"),Ko=new Map,ei="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ei.push("scrollEnd");function Wt(e,t){Ko.set(e,t),nl(t,[e])}var Jo=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var n=Jo.get(e);return n!==void 0?n:(t={value:e,source:t,stack:so(t)},Jo.set(e,t),t)}return{value:e,source:t,stack:so(t)}}var Lt=[],Hl=0,ti=0;function Cr(){for(var e=Hl,t=ti=Hl=0;t<e;){var n=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var a=Lt[t];Lt[t++]=null;var r=Lt[t];if(Lt[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}r!==0&&Wo(n,a,r)}}function Tr(e,t,n,l){Lt[Hl++]=e,Lt[Hl++]=t,Lt[Hl++]=n,Lt[Hl++]=l,ti|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ni(e,t,n,l){return Tr(e,t,n,l),Rr(e)}function Bl(e,t){return Tr(e,null,null,t),Rr(e)}function Wo(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,l=r.alternate,l!==null&&(l.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-et(n),e=r.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),r):null}function Rr(e){if(50<La)throw La=0,cc=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gl={};function H1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,l){return new H1(e,t,n,l)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fo(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dr(e,t,n,l,a,r){var o=0;if(l=e,typeof e=="function")li(e)&&(o=1);else if(typeof e=="string")o=Gd(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=Bt(31,n,t,a),e.elementType=ae,e.lanes=r,e;case A:return ul(n.children,a,r,t);case k:o=8,a|=24;break;case E:return e=Bt(12,n,t,a|2),e.elementType=E,e.lanes=r,e;case G:return e=Bt(13,n,t,a),e.elementType=G,e.lanes=r,e;case U:return e=Bt(19,n,t,a),e.elementType=U,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case Y:o=10;break e;case O:o=9;break e;case Q:o=11;break e;case X:o=14;break e;case ie:o=16,l=null;break e}o=29,n=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=Bt(o,n,t,a),t.elementType=e,t.type=l,t.lanes=r,t}function ul(e,t,n,l){return e=Bt(7,e,l,t),e.lanes=n,e}function ai(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function ri(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ul=[],jl=0,zr=null,Mr=0,Zt=[],Pt=0,il=null,mn=1,pn="";function cl(e,t){Ul[jl++]=Mr,Ul[jl++]=zr,zr=e,Mr=t}function Io(e,t,n){Zt[Pt++]=mn,Zt[Pt++]=pn,Zt[Pt++]=il,il=e;var l=mn;e=pn;var a=32-et(l)-1;l&=~(1<<a),n+=1;var r=32-et(t)+a;if(30<r){var o=a-a%5;r=(l&(1<<o)-1).toString(32),l>>=o,a-=o,mn=1<<32-et(t)+a|n<<a|l,pn=r+e}else mn=1<<r|n<<a|l,pn=e}function ui(e){e.return!==null&&(cl(e,1),Io(e,1,0))}function ii(e){for(;e===zr;)zr=Ul[--jl],Ul[jl]=null,Mr=Ul[--jl],Ul[jl]=null;for(;e===il;)il=Zt[--Pt],Zt[Pt]=null,pn=Zt[--Pt],Zt[Pt]=null,mn=Zt[--Pt],Zt[Pt]=null}var Dt=null,Ie=null,Oe=!1,ol=null,ln=!1,ci=Error(i(519));function sl(e){var t=Error(i(418,""));throw Sa(Nt(t,e)),ci}function $o(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[_t]=e,t[zt]=l,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<Pa.length;n++)ze(Pa[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),mo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),mr(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),go(t,l.value,l.defaultValue,l.children),mr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||yf(t.textContent,n)?(l.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),l.onScroll!=null&&ze("scroll",t),l.onScrollEnd!=null&&ze("scrollend",t),l.onClick!=null&&(t.onclick=cu),t=!0):t=!1,t||sl(e)}function e0(e){for(Dt=e.return;Dt;)switch(Dt.tag){case 5:case 13:ln=!1;return;case 27:case 3:ln=!0;return;default:Dt=Dt.return}}function ba(e){if(e!==Dt)return!1;if(!Oe)return e0(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&Ie&&sl(e),e0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ie=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ie=null}}else t===27?(t=Ie,Kn(e.type)?(e=Mc,Mc=null,Ie=e):Ie=t):Ie=Dt?It(e.stateNode.nextSibling):null;return!0}function _a(){Ie=Dt=null,Oe=!1}function t0(){var e=ol;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),ol=null),e}function Sa(e){ol===null?ol=[e]:ol.push(e)}var oi=H(null),fl=null,gn=null;function Vn(e,t,n){N(oi,t._currentValue),t._currentValue=n}function yn(e){e._currentValue=oi.current,J(oi)}function si(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function fi(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var o=a.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=a;for(var C=0;C<t.length;C++)if(m.context===t[C]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),si(r.return,n,e),l||(o=null);break e}r=m.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),si(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Ca(e,t,n,l){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var m=a.type;Ht(a.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(a===_e.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ia):e=[Ia])}a=a.return}e!==null&&fi(t,e,n,l),t.flags|=262144}function Ar(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dl(e){fl=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return n0(fl,e)}function wr(e,t){return fl===null&&dl(e),n0(e,t)}function n0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(i(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var B1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G1=s.unstable_scheduleCallback,U1=s.unstable_NormalPriority,it={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function di(){return{controller:new B1,data:new Map,refCount:0}}function Ta(e){e.refCount--,e.refCount===0&&G1(U1,function(){e.controller.abort()})}var Ra=null,hi=0,kl=0,Yl=null;function j1(e,t){if(Ra===null){var n=Ra=[];hi=0,kl=pc(),Yl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return hi++,t.then(l0,l0),t}function l0(){if(--hi===0&&Ra!==null){Yl!==null&&(Yl.status="fulfilled");var e=Ra;Ra=null,kl=0,Yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function k1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var a0=j.S;j.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&j1(e,t),a0!==null&&a0(e,t)};var hl=H(null);function mi(){var e=hl.current;return e!==null?e:Pe.pooledCache}function Er(e,t){t===null?N(hl,hl.current):N(hl,t.pool)}function r0(){var e=mi();return e===null?null:{parent:it._currentValue,pool:e}}var Da=Error(i(460)),u0=Error(i(474)),Or=Error(i(542)),pi={then:function(){}};function i0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vr(){}function c0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vr,Vr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,s0(e),e;default:if(typeof t.status=="string")t.then(Vr,Vr);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,s0(e),e}throw za=t,Da}}var za=null;function o0(){if(za===null)throw Error(i(459));var e=za;return za=null,e}function s0(e){if(e===Da||e===Or)throw Error(i(483))}var Hn=!1;function gi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Rr(e),Wo(e,null,n),t}return Tr(e,l,t,n),Rr(e)}function Ma(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,fr(e,n)}}function vi(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xi=!1;function Aa(){if(xi){var e=Yl;if(e!==null)throw e}}function wa(e,t,n,l){xi=!1;var a=e.updateQueue;Hn=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var C=m,w=C.next;C.next=null,o===null?r=w:o.next=w,o=C;var L=e.alternate;L!==null&&(L=L.updateQueue,m=L.lastBaseUpdate,m!==o&&(m===null?L.firstBaseUpdate=w:m.next=w,L.lastBaseUpdate=C))}if(r!==null){var K=a.baseState;o=0,L=w=C=null,m=r;do{var V=m.lane&-536870913,B=V!==m.lane;if(B?(Ae&V)===V:(l&V)===V){V!==0&&V===kl&&(xi=!0),L!==null&&(L=L.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var pe=e,de=m;V=t;var ke=n;switch(de.tag){case 1:if(pe=de.payload,typeof pe=="function"){K=pe.call(ke,K,V);break e}K=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=de.payload,V=typeof pe=="function"?pe.call(ke,K,V):pe,V==null)break e;K=v({},K,V);break e;case 2:Hn=!0}}V=m.callback,V!==null&&(e.flags|=64,B&&(e.flags|=8192),B=a.callbacks,B===null?a.callbacks=[V]:B.push(V))}else B={lane:V,tag:m.tag,payload:m.payload,callback:m.callback,next:null},L===null?(w=L=B,C=K):L=L.next=B,o|=V;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;B=m,m=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);L===null&&(C=K),a.baseState=C,a.firstBaseUpdate=w,a.lastBaseUpdate=L,r===null&&(a.shared.lanes=0),Ln|=o,e.lanes=o,e.memoizedState=K}}function f0(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function d0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)f0(n[e],t)}var Xl=H(null),Hr=H(0);function h0(e,t){e=Tn,N(Hr,e),N(Xl,t),Tn=e|t.baseLanes}function bi(){N(Hr,Tn),N(Xl,Xl.current)}function _i(){Tn=Hr.current,J(Xl),J(Hr)}var Un=0,Ce=null,Ue=null,rt=null,Br=!1,ql=!1,ml=!1,Gr=0,Ea=0,Nl=null,Y1=0;function tt(){throw Error(i(321))}function Si(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Ci(e,t,n,l,a,r){return Un=r,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?W0:F0,ml=!1,r=n(l,a),ml=!1,ql&&(r=p0(t,n,l,a)),m0(e),r}function m0(e){j.H=qr;var t=Ue!==null&&Ue.next!==null;if(Un=0,rt=Ue=Ce=null,Br=!1,Ea=0,Nl=null,t)throw Error(i(300));e===null||dt||(e=e.dependencies,e!==null&&Ar(e)&&(dt=!0))}function p0(e,t,n,l){Ce=e;var a=0;do{if(ql&&(Nl=null),Ea=0,ql=!1,25<=a)throw Error(i(301));if(a+=1,rt=Ue=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=Q1,r=t(n,l)}while(ql);return r}function X1(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?Oa(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(Ce.flags|=1024),t}function Ti(){var e=Gr!==0;return Gr=0,e}function Ri(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Di(e){if(Br){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Br=!1}Un=0,rt=Ue=Ce=null,ql=!1,Ea=Gr=0,Nl=null}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ce.memoizedState=rt=e:rt=rt.next=e,rt}function ut(){if(Ue===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=rt===null?Ce.memoizedState:rt.next;if(t!==null)rt=t,Ue=e;else{if(e===null)throw Ce.alternate===null?Error(i(467)):Error(i(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},rt===null?Ce.memoizedState=rt=e:rt=rt.next=e}return rt}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oa(e){var t=Ea;return Ea+=1,Nl===null&&(Nl=[]),e=c0(Nl,e,t),t=Ce,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?W0:F0),e}function Ur(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oa(e);if(e.$$typeof===Y)return St(e)}throw Error(i(438,String(e)))}function Mi(e){var t=null,n=Ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zi(),Ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ye;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=ut();return Ai(t,Ue,e)}function Ai(e,t,n){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=e.baseQueue,r=l.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}t.baseQueue=a=r,l.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var m=o=null,C=null,w=t,L=!1;do{var K=w.lane&-536870913;if(K!==w.lane?(Ae&K)===K:(Un&K)===K){var V=w.revertLane;if(V===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),K===kl&&(L=!0);else if((Un&V)===V){w=w.next,V===kl&&(L=!0);continue}else K={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},C===null?(m=C=K,o=r):C=C.next=K,Ce.lanes|=V,Ln|=V;K=w.action,ml&&n(r,K),r=w.hasEagerState?w.eagerState:n(r,K)}else V={lane:K,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},C===null?(m=C=V,o=r):C=C.next=V,Ce.lanes|=K,Ln|=K;w=w.next}while(w!==null&&w!==t);if(C===null?o=r:C.next=m,!Ht(r,e.memoizedState)&&(dt=!0,L&&(n=Yl,n!==null)))throw n;e.memoizedState=r,e.baseState=o,e.baseQueue=C,l.lastRenderedState=r}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function wi(e){var t=ut(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Ht(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,l]}function g0(e,t,n){var l=Ce,a=ut(),r=Oe;if(r){if(n===void 0)throw Error(i(407));n=n()}else n=t();var o=!Ht((Ue||a).memoizedState,n);o&&(a.memoizedState=n,dt=!0),a=a.queue;var m=x0.bind(null,l,a,e);if(Va(2048,8,m,[e]),a.getSnapshot!==t||o||rt!==null&&rt.memoizedState.tag&1){if(l.flags|=2048,Ll(9,kr(),v0.bind(null,l,a,n,t),null),Pe===null)throw Error(i(349));r||(Un&124)!==0||y0(l,t,n)}return n}function y0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t=zi(),Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function v0(e,t,n,l){t.value=n,t.getSnapshot=l,b0(t)&&_0(e)}function x0(e,t,n){return n(function(){b0(t)&&_0(e)})}function b0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function _0(e){var t=Bl(e,2);t!==null&&Yt(t,e,2)}function Ei(e){var t=At();if(typeof e=="function"){var n=e;if(e=n(),ml){gt(!0);try{n()}finally{gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function S0(e,t,n,l){return e.baseState=n,Ai(e,Ue,typeof l=="function"?l:vn)}function q1(e,t,n,l,a){if(Xr(e))throw Error(i(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};j.T!==null?n(!0):r.isTransition=!1,l(r),n=t.pending,n===null?(r.next=t.pending=r,C0(t,r)):(r.next=n.next,t.pending=n.next=r)}}function C0(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var r=j.T,o={};j.T=o;try{var m=n(a,l),C=j.S;C!==null&&C(o,m),T0(e,t,m)}catch(w){Oi(e,t,w)}finally{j.T=r}}else try{r=n(a,l),T0(e,t,r)}catch(w){Oi(e,t,w)}}function T0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){R0(e,t,l)},function(l){return Oi(e,t,l)}):R0(e,t,n)}function R0(e,t,n){t.status="fulfilled",t.value=n,D0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,C0(e,n)))}function Oi(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,D0(t),t=t.next;while(t!==l)}e.action=null}function D0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function z0(e,t){return t}function M0(e,t){if(Oe){var n=Pe.formState;if(n!==null){e:{var l=Ce;if(Oe){if(Ie){t:{for(var a=Ie,r=ln;a.nodeType!==8;){if(!r){a=null;break t}if(a=It(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ie=It(a.nextSibling),l=a.data==="F!";break e}}sl(l)}l=!1}l&&(t=n[0])}}return n=At(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:t},n.queue=l,n=Q0.bind(null,Ce,l),l.dispatch=n,l=Ei(!1),r=Ui.bind(null,Ce,!1,l.queue),l=At(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=q1.bind(null,Ce,a,r,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function A0(e){var t=ut();return w0(t,Ue,e)}function w0(e,t,n){if(t=Ai(e,t,z0)[0],e=jr(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Oa(t)}catch(o){throw o===Da?Or:o}else l=t;t=ut();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Ce.flags|=2048,Ll(9,kr(),N1.bind(null,a,n),null)),[l,r,e]}function N1(e,t){e.action=t}function E0(e){var t=ut(),n=Ue;if(n!==null)return w0(t,n,e);ut(),t=t.memoizedState,n=ut();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ll(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=zi(),Ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function kr(){return{destroy:void 0,resource:void 0}}function O0(){return ut().memoizedState}function Yr(e,t,n,l){var a=At();l=l===void 0?null:l,Ce.flags|=e,a.memoizedState=Ll(1|t,kr(),n,l)}function Va(e,t,n,l){var a=ut();l=l===void 0?null:l;var r=a.memoizedState.inst;Ue!==null&&l!==null&&Si(l,Ue.memoizedState.deps)?a.memoizedState=Ll(t,r,n,l):(Ce.flags|=e,a.memoizedState=Ll(1|t,r,n,l))}function V0(e,t){Yr(8390656,8,e,t)}function H0(e,t){Va(2048,8,e,t)}function B0(e,t){return Va(4,2,e,t)}function G0(e,t){return Va(4,4,e,t)}function U0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j0(e,t,n){n=n!=null?n.concat([e]):null,Va(4,4,U0.bind(null,t,e),n)}function Vi(){}function k0(e,t){var n=ut();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Si(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Y0(e,t){var n=ut();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Si(t,l[1]))return l[0];if(l=e(),ml){gt(!0);try{e()}finally{gt(!1)}}return n.memoizedState=[l,t],l}function Hi(e,t,n){return n===void 0||(Un&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ns(),Ce.lanes|=e,Ln|=e,n)}function X0(e,t,n,l){return Ht(n,t)?n:Xl.current!==null?(e=Hi(e,n,l),Ht(e,t)||(dt=!0),e):(Un&42)===0?(dt=!0,e.memoizedState=n):(e=Ns(),Ce.lanes|=e,Ln|=e,t)}function q0(e,t,n,l,a){var r=W.p;W.p=r!==0&&8>r?r:8;var o=j.T,m={};j.T=m,Ui(e,!1,t,n);try{var C=a(),w=j.S;if(w!==null&&w(m,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var L=k1(C,l);Ha(e,t,L,kt(e))}else Ha(e,t,l,kt(e))}catch(K){Ha(e,t,{then:function(){},status:"rejected",reason:K},kt())}finally{W.p=r,j.T=o}}function L1(){}function Bi(e,t,n,l){if(e.tag!==5)throw Error(i(476));var a=N0(e).queue;q0(e,a,t,ee,n===null?L1:function(){return L0(e),n(l)})}function N0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function L0(e){var t=N0(e).next.queue;Ha(e,t,{},kt())}function Gi(){return St(Ia)}function Z0(){return ut().memoizedState}function P0(){return ut().memoizedState}function Z1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Bn(n);var l=Gn(t,e,n);l!==null&&(Yt(l,t,n),Ma(l,t,n)),t={cache:di()},e.payload=t;return}t=t.return}}function P1(e,t,n){var l=kt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Xr(e)?K0(t,n):(n=ni(e,t,n,l),n!==null&&(Yt(n,e,l),J0(n,t,l)))}function Q0(e,t,n){var l=kt();Ha(e,t,n,l)}function Ha(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xr(e))K0(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,m=r(o,n);if(a.hasEagerState=!0,a.eagerState=m,Ht(m,o))return Tr(e,t,a,0),Pe===null&&Cr(),!1}catch{}finally{}if(n=ni(e,t,a,l),n!==null)return Yt(n,e,l),J0(n,t,l),!0}return!1}function Ui(e,t,n,l){if(l={lane:2,revertLane:pc(),action:l,hasEagerState:!1,eagerState:null,next:null},Xr(e)){if(t)throw Error(i(479))}else t=ni(e,n,l,2),t!==null&&Yt(t,e,2)}function Xr(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function K0(e,t){ql=Br=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function J0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,fr(e,n)}}var qr={readContext:St,use:Ur,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},W0={readContext:St,use:Ur,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:V0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yr(4194308,4,U0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yr(4194308,4,e,t)},useInsertionEffect:function(e,t){Yr(4,2,e,t)},useMemo:function(e,t){var n=At();t=t===void 0?null:t;var l=e();if(ml){gt(!0);try{e()}finally{gt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=At();if(n!==void 0){var a=n(t);if(ml){gt(!0);try{n(t)}finally{gt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=P1.bind(null,Ce,e),[l.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:function(e){e=Ei(e);var t=e.queue,n=Q0.bind(null,Ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vi,useDeferredValue:function(e,t){var n=At();return Hi(n,e,t)},useTransition:function(){var e=Ei(!1);return e=q0.bind(null,Ce,e.queue,!0,!1),At().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Ce,a=At();if(Oe){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Pe===null)throw Error(i(349));(Ae&124)!==0||y0(l,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,V0(x0.bind(null,l,r,e),[e]),l.flags|=2048,Ll(9,kr(),v0.bind(null,l,r,n,t),null),n},useId:function(){var e=At(),t=Pe.identifierPrefix;if(Oe){var n=pn,l=mn;n=(l&~(1<<32-et(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Y1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Gi,useFormState:M0,useActionState:M0,useOptimistic:function(e){var t=At();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ui.bind(null,Ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mi,useCacheRefresh:function(){return At().memoizedState=Z1.bind(null,Ce)}},F0={readContext:St,use:Ur,useCallback:k0,useContext:St,useEffect:H0,useImperativeHandle:j0,useInsertionEffect:B0,useLayoutEffect:G0,useMemo:Y0,useReducer:jr,useRef:O0,useState:function(){return jr(vn)},useDebugValue:Vi,useDeferredValue:function(e,t){var n=ut();return X0(n,Ue.memoizedState,e,t)},useTransition:function(){var e=jr(vn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Oa(e),t]},useSyncExternalStore:g0,useId:Z0,useHostTransitionStatus:Gi,useFormState:A0,useActionState:A0,useOptimistic:function(e,t){var n=ut();return S0(n,Ue,e,t)},useMemoCache:Mi,useCacheRefresh:P0},Q1={readContext:St,use:Ur,useCallback:k0,useContext:St,useEffect:H0,useImperativeHandle:j0,useInsertionEffect:B0,useLayoutEffect:G0,useMemo:Y0,useReducer:wi,useRef:O0,useState:function(){return wi(vn)},useDebugValue:Vi,useDeferredValue:function(e,t){var n=ut();return Ue===null?Hi(n,e,t):X0(n,Ue.memoizedState,e,t)},useTransition:function(){var e=wi(vn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Oa(e),t]},useSyncExternalStore:g0,useId:Z0,useHostTransitionStatus:Gi,useFormState:E0,useActionState:E0,useOptimistic:function(e,t){var n=ut();return Ue!==null?S0(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mi,useCacheRefresh:P0},Zl=null,Ba=0;function Nr(e){var t=Ba;return Ba+=1,Zl===null&&(Zl=[]),c0(Zl,e,t)}function Ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lr(e,t){throw t.$$typeof===_?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function I0(e){var t=e._init;return t(e._payload)}function $0(e){function t(z,R){if(e){var M=z.deletions;M===null?(z.deletions=[R],z.flags|=16):M.push(R)}}function n(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function l(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function a(z,R){return z=hn(z,R),z.index=0,z.sibling=null,z}function r(z,R,M){return z.index=M,e?(M=z.alternate,M!==null?(M=M.index,M<R?(z.flags|=67108866,R):M):(z.flags|=67108866,R)):(z.flags|=1048576,R)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,R,M,Z){return R===null||R.tag!==6?(R=ai(M,z.mode,Z),R.return=z,R):(R=a(R,M),R.return=z,R)}function C(z,R,M,Z){var re=M.type;return re===A?L(z,R,M.props.children,Z,M.key):R!==null&&(R.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ie&&I0(re)===R.type)?(R=a(R,M.props),Ga(R,M),R.return=z,R):(R=Dr(M.type,M.key,M.props,null,z.mode,Z),Ga(R,M),R.return=z,R)}function w(z,R,M,Z){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=ri(M,z.mode,Z),R.return=z,R):(R=a(R,M.children||[]),R.return=z,R)}function L(z,R,M,Z,re){return R===null||R.tag!==7?(R=ul(M,z.mode,Z,re),R.return=z,R):(R=a(R,M),R.return=z,R)}function K(z,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ai(""+R,z.mode,M),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return M=Dr(R.type,R.key,R.props,null,z.mode,M),Ga(M,R),M.return=z,M;case T:return R=ri(R,z.mode,M),R.return=z,R;case ie:var Z=R._init;return R=Z(R._payload),K(z,R,M)}if(me(R)||ce(R))return R=ul(R,z.mode,M,null),R.return=z,R;if(typeof R.then=="function")return K(z,Nr(R),M);if(R.$$typeof===Y)return K(z,wr(z,R),M);Lr(z,R)}return null}function V(z,R,M,Z){var re=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return re!==null?null:m(z,R,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===re?C(z,R,M,Z):null;case T:return M.key===re?w(z,R,M,Z):null;case ie:return re=M._init,M=re(M._payload),V(z,R,M,Z)}if(me(M)||ce(M))return re!==null?null:L(z,R,M,Z,null);if(typeof M.then=="function")return V(z,R,Nr(M),Z);if(M.$$typeof===Y)return V(z,R,wr(z,M),Z);Lr(z,M)}return null}function B(z,R,M,Z,re){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(M)||null,m(R,z,""+Z,re);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return z=z.get(Z.key===null?M:Z.key)||null,C(R,z,Z,re);case T:return z=z.get(Z.key===null?M:Z.key)||null,w(R,z,Z,re);case ie:var Te=Z._init;return Z=Te(Z._payload),B(z,R,M,Z,re)}if(me(Z)||ce(Z))return z=z.get(M)||null,L(R,z,Z,re,null);if(typeof Z.then=="function")return B(z,R,M,Nr(Z),re);if(Z.$$typeof===Y)return B(z,R,M,wr(R,Z),re);Lr(R,Z)}return null}function pe(z,R,M,Z){for(var re=null,Te=null,fe=R,he=R=0,mt=null;fe!==null&&he<M.length;he++){fe.index>he?(mt=fe,fe=null):mt=fe.sibling;var we=V(z,fe,M[he],Z);if(we===null){fe===null&&(fe=mt);break}e&&fe&&we.alternate===null&&t(z,fe),R=r(we,R,he),Te===null?re=we:Te.sibling=we,Te=we,fe=mt}if(he===M.length)return n(z,fe),Oe&&cl(z,he),re;if(fe===null){for(;he<M.length;he++)fe=K(z,M[he],Z),fe!==null&&(R=r(fe,R,he),Te===null?re=fe:Te.sibling=fe,Te=fe);return Oe&&cl(z,he),re}for(fe=l(fe);he<M.length;he++)mt=B(fe,z,he,M[he],Z),mt!==null&&(e&&mt.alternate!==null&&fe.delete(mt.key===null?he:mt.key),R=r(mt,R,he),Te===null?re=mt:Te.sibling=mt,Te=mt);return e&&fe.forEach(function($n){return t(z,$n)}),Oe&&cl(z,he),re}function de(z,R,M,Z){if(M==null)throw Error(i(151));for(var re=null,Te=null,fe=R,he=R=0,mt=null,we=M.next();fe!==null&&!we.done;he++,we=M.next()){fe.index>he?(mt=fe,fe=null):mt=fe.sibling;var $n=V(z,fe,we.value,Z);if($n===null){fe===null&&(fe=mt);break}e&&fe&&$n.alternate===null&&t(z,fe),R=r($n,R,he),Te===null?re=$n:Te.sibling=$n,Te=$n,fe=mt}if(we.done)return n(z,fe),Oe&&cl(z,he),re;if(fe===null){for(;!we.done;he++,we=M.next())we=K(z,we.value,Z),we!==null&&(R=r(we,R,he),Te===null?re=we:Te.sibling=we,Te=we);return Oe&&cl(z,he),re}for(fe=l(fe);!we.done;he++,we=M.next())we=B(fe,z,he,we.value,Z),we!==null&&(e&&we.alternate!==null&&fe.delete(we.key===null?he:we.key),R=r(we,R,he),Te===null?re=we:Te.sibling=we,Te=we);return e&&fe.forEach(function(Kd){return t(z,Kd)}),Oe&&cl(z,he),re}function ke(z,R,M,Z){if(typeof M=="object"&&M!==null&&M.type===A&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:e:{for(var re=M.key;R!==null;){if(R.key===re){if(re=M.type,re===A){if(R.tag===7){n(z,R.sibling),Z=a(R,M.props.children),Z.return=z,z=Z;break e}}else if(R.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ie&&I0(re)===R.type){n(z,R.sibling),Z=a(R,M.props),Ga(Z,M),Z.return=z,z=Z;break e}n(z,R);break}else t(z,R);R=R.sibling}M.type===A?(Z=ul(M.props.children,z.mode,Z,M.key),Z.return=z,z=Z):(Z=Dr(M.type,M.key,M.props,null,z.mode,Z),Ga(Z,M),Z.return=z,z=Z)}return o(z);case T:e:{for(re=M.key;R!==null;){if(R.key===re)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){n(z,R.sibling),Z=a(R,M.children||[]),Z.return=z,z=Z;break e}else{n(z,R);break}else t(z,R);R=R.sibling}Z=ri(M,z.mode,Z),Z.return=z,z=Z}return o(z);case ie:return re=M._init,M=re(M._payload),ke(z,R,M,Z)}if(me(M))return pe(z,R,M,Z);if(ce(M)){if(re=ce(M),typeof re!="function")throw Error(i(150));return M=re.call(M),de(z,R,M,Z)}if(typeof M.then=="function")return ke(z,R,Nr(M),Z);if(M.$$typeof===Y)return ke(z,R,wr(z,M),Z);Lr(z,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(n(z,R.sibling),Z=a(R,M),Z.return=z,z=Z):(n(z,R),Z=ai(M,z.mode,Z),Z.return=z,z=Z),o(z)):n(z,R)}return function(z,R,M,Z){try{Ba=0;var re=ke(z,R,M,Z);return Zl=null,re}catch(fe){if(fe===Da||fe===Or)throw fe;var Te=Bt(29,fe,null,z.mode);return Te.lanes=Z,Te.return=z,Te}finally{}}}var Pl=$0(!0),es=$0(!1),Qt=H(null),an=null;function jn(e){var t=e.alternate;N(ct,ct.current&1),N(Qt,e),an===null&&(t===null||Xl.current!==null||t.memoizedState!==null)&&(an=e)}function ts(e){if(e.tag===22){if(N(ct,ct.current),N(Qt,e),an===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(an=e)}}else kn()}function kn(){N(ct,ct.current),N(Qt,Qt.current)}function xn(e){J(Qt),an===e&&(an=null),J(ct)}var ct=H(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||zc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ji(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ki={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=kt(),a=Bn(l);a.payload=t,n!=null&&(a.callback=n),t=Gn(e,a,l),t!==null&&(Yt(t,e,l),Ma(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=kt(),a=Bn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Gn(e,a,l),t!==null&&(Yt(t,e,l),Ma(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),l=Bn(n);l.tag=2,t!=null&&(l.callback=t),t=Gn(e,l,n),t!==null&&(Yt(t,e,n),Ma(t,e,n))}};function ns(e,t,n,l,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!va(n,l)||!va(a,r):!0}function ls(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ki.enqueueReplaceState(t,t.state,null)}function pl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Pr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function as(e){Pr(e)}function rs(e){console.error(e)}function us(e){Pr(e)}function Qr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function is(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Yi(e,t,n){return n=Bn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qr(e,t)},n}function cs(e){return e=Bn(e),e.tag=3,e}function os(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;e.payload=function(){return a(r)},e.callback=function(){is(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){is(t,n,l),typeof a!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function K1(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ca(t,n,a,!0),n=Qt.current,n!==null){switch(n.tag){case 13:return an===null?sc():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===pi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),dc(e,l,a)),!1;case 22:return n.flags|=65536,l===pi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),dc(e,l,a)),!1}throw Error(i(435,n.tag))}return dc(e,l,a),sc(),!1}if(Oe)return t=Qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==ci&&(e=Error(i(422),{cause:l}),Sa(Nt(e,n)))):(l!==ci&&(t=Error(i(423),{cause:l}),Sa(Nt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Nt(l,n),a=Yi(e.stateNode,l,a),vi(e,a),$e!==4&&($e=2)),!1;var r=Error(i(520),{cause:l});if(r=Nt(r,n),Na===null?Na=[r]:Na.push(r),$e!==4&&($e=2),t===null)return!0;l=Nt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Yi(n.stateNode,l,e),vi(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=cs(a),os(a,e,n,l),vi(n,a),!1}n=n.return}while(n!==null);return!1}var ss=Error(i(461)),dt=!1;function vt(e,t,n,l){t.child=e===null?es(t,null,n,l):Pl(t,e.child,n,l)}function fs(e,t,n,l,a){n=n.render;var r=t.ref;if("ref"in l){var o={};for(var m in l)m!=="ref"&&(o[m]=l[m])}else o=l;return dl(t),l=Ci(e,t,n,o,r,a),m=Ti(),e!==null&&!dt?(Ri(e,t,a),bn(e,t,a)):(Oe&&m&&ui(t),t.flags|=1,vt(e,t,l,a),t.child)}function ds(e,t,n,l,a){if(e===null){var r=n.type;return typeof r=="function"&&!li(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,hs(e,t,r,l,a)):(e=Dr(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ki(e,a)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,l)&&e.ref===t.ref)return bn(e,t,a)}return t.flags|=1,e=hn(r,l),e.ref=t.ref,e.return=t,t.child=e}function hs(e,t,n,l,a){if(e!==null){var r=e.memoizedProps;if(va(r,l)&&e.ref===t.ref)if(dt=!1,t.pendingProps=l=r,Ki(e,a))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,bn(e,t,a)}return Xi(e,t,n,l,a)}function ms(e,t,n){var l=t.pendingProps,a=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return ps(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Er(t,r!==null?r.cachePool:null),r!==null?h0(t,r):bi(),ts(t);else return t.lanes=t.childLanes=536870912,ps(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Er(t,r.cachePool),h0(t,r),kn(),t.memoizedState=null):(e!==null&&Er(t,null),bi(),kn());return vt(e,t,a,n),t.child}function ps(e,t,n,l){var a=mi();return a=a===null?null:{parent:it._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Er(t,null),bi(),ts(t),e!==null&&Ca(e,t,l,!0),null}function Kr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xi(e,t,n,l,a){return dl(t),n=Ci(e,t,n,l,void 0,a),l=Ti(),e!==null&&!dt?(Ri(e,t,a),bn(e,t,a)):(Oe&&l&&ui(t),t.flags|=1,vt(e,t,n,a),t.child)}function gs(e,t,n,l,a,r){return dl(t),t.updateQueue=null,n=p0(t,l,n,a),m0(e),l=Ti(),e!==null&&!dt?(Ri(e,t,r),bn(e,t,r)):(Oe&&l&&ui(t),t.flags|=1,vt(e,t,n,r),t.child)}function ys(e,t,n,l,a){if(dl(t),t.stateNode===null){var r=Gl,o=n.contextType;typeof o=="object"&&o!==null&&(r=St(o)),r=new n(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ki,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},gi(t),o=n.contextType,r.context=typeof o=="object"&&o!==null?St(o):Gl,r.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ji(t,n,o,l),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&ki.enqueueReplaceState(r,r.state,null),wa(t,l,r,a),Aa(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,C=pl(n,m);r.props=C;var w=r.context,L=n.contextType;o=Gl,typeof L=="object"&&L!==null&&(o=St(L));var K=n.getDerivedStateFromProps;L=typeof K=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,L||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||w!==o)&&ls(t,r,l,o),Hn=!1;var V=t.memoizedState;r.state=V,wa(t,l,r,a),Aa(),w=t.memoizedState,m||V!==w||Hn?(typeof K=="function"&&(ji(t,n,K,l),w=t.memoizedState),(C=Hn||ns(t,n,C,l,V,w,o))?(L||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=o,l=C):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,yi(e,t),o=t.memoizedProps,L=pl(n,o),r.props=L,K=t.pendingProps,V=r.context,w=n.contextType,C=Gl,typeof w=="object"&&w!==null&&(C=St(w)),m=n.getDerivedStateFromProps,(w=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==K||V!==C)&&ls(t,r,l,C),Hn=!1,V=t.memoizedState,r.state=V,wa(t,l,r,a),Aa();var B=t.memoizedState;o!==K||V!==B||Hn||e!==null&&e.dependencies!==null&&Ar(e.dependencies)?(typeof m=="function"&&(ji(t,n,m,l),B=t.memoizedState),(L=Hn||ns(t,n,L,l,V,B,C)||e!==null&&e.dependencies!==null&&Ar(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,B,C),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,B,C)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),r.props=l,r.state=B,r.context=C,l=L):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Kr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Pl(t,e.child,null,a),t.child=Pl(t,null,n,a)):vt(e,t,n,a),t.memoizedState=r.state,e=t.child):e=bn(e,t,a),e}function vs(e,t,n,l){return _a(),t.flags|=256,vt(e,t,n,l),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ni(e){return{baseLanes:e,cachePool:r0()}}function Li(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kt),e}function xs(e,t,n){var l=t.pendingProps,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(ct.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(a?jn(t):kn(),Oe){var m=Ie,C;if(C=m){e:{for(C=m,m=ln;C.nodeType!==8;){if(!m){m=null;break e}if(C=It(C.nextSibling),C===null){m=null;break e}}m=C}m!==null?(t.memoizedState={dehydrated:m,treeContext:il!==null?{id:mn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},C=Bt(18,null,null,0),C.stateNode=m,C.return=t,t.child=C,Dt=t,Ie=null,C=!0):C=!1}C||sl(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return zc(m)?t.lanes=32:t.lanes=536870912,null;xn(t)}return m=l.children,l=l.fallback,a?(kn(),a=t.mode,m=Jr({mode:"hidden",children:m},a),l=ul(l,a,n,null),m.return=t,l.return=t,m.sibling=l,t.child=m,a=t.child,a.memoizedState=Ni(n),a.childLanes=Li(e,o,n),t.memoizedState=qi,l):(jn(t),Zi(t,m))}if(C=e.memoizedState,C!==null&&(m=C.dehydrated,m!==null)){if(r)t.flags&256?(jn(t),t.flags&=-257,t=Pi(e,t,n)):t.memoizedState!==null?(kn(),t.child=e.child,t.flags|=128,t=null):(kn(),a=l.fallback,m=t.mode,l=Jr({mode:"visible",children:l.children},m),a=ul(a,m,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,Pl(t,e.child,null,n),l=t.child,l.memoizedState=Ni(n),l.childLanes=Li(e,o,n),t.memoizedState=qi,t=a);else if(jn(t),zc(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var w=o.dgst;o=w,l=Error(i(419)),l.stack="",l.digest=o,Sa({value:l,source:null,stack:null}),t=Pi(e,t,n)}else if(dt||Ca(e,t,n,!1),o=(n&e.childLanes)!==0,dt||o){if(o=Pe,o!==null&&(l=n&-n,l=(l&42)!==0?1:ia(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Bl(e,l),Yt(o,e,l),ss;m.data==="$?"||sc(),t=Pi(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ie=It(m.nextSibling),Dt=t,Oe=!0,ol=null,ln=!1,e!==null&&(Zt[Pt++]=mn,Zt[Pt++]=pn,Zt[Pt++]=il,mn=e.id,pn=e.overflow,il=t),t=Zi(t,l.children),t.flags|=4096);return t}return a?(kn(),a=l.fallback,m=t.mode,C=e.child,w=C.sibling,l=hn(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,w!==null?a=hn(w,a):(a=ul(a,m,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,m=e.child.memoizedState,m===null?m=Ni(n):(C=m.cachePool,C!==null?(w=it._currentValue,C=C.parent!==w?{parent:w,pool:w}:C):C=r0(),m={baseLanes:m.baseLanes|n,cachePool:C}),a.memoizedState=m,a.childLanes=Li(e,o,n),t.memoizedState=qi,l):(jn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Zi(e,t){return t=Jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jr(e,t){return e=Bt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Pi(e,t,n){return Pl(t,e.child,null,n),e=Zi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bs(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),si(e.return,t,n)}function Qi(e,t,n,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a)}function _s(e,t,n){var l=t.pendingProps,a=l.revealOrder,r=l.tail;if(vt(e,t,l.children,n),l=ct.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bs(e,n,t);else if(e.tag===19)bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(N(ct,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Qi(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Zr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Qi(t,!0,n,null,r);break;case"together":Qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ca(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ki(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ar(e)))}function J1(e,t,n){switch(t.tag){case 3:$(t,t.stateNode.containerInfo),Vn(t,it,e.memoizedState.cache),_a();break;case 27:case 5:Ge(t);break;case 4:$(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?xs(e,t,n):(jn(t),e=bn(e,t,n),e!==null?e.sibling:null);jn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ca(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return _s(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(ct,ct.current),l)break;return null;case 22:case 23:return t.lanes=0,ms(e,t,n);case 24:Vn(t,it,e.memoizedState.cache)}return bn(e,t,n)}function Ss(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!Ki(e,n)&&(t.flags&128)===0)return dt=!1,J1(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Oe&&(t.flags&1048576)!==0&&Io(t,Mr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")li(l)?(e=pl(l,e),t.tag=1,t=ys(null,t,l,e,n)):(t.tag=0,t=Xi(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===Q){t.tag=11,t=fs(null,t,l,e,n);break e}else if(a===X){t.tag=14,t=ds(null,t,l,e,n);break e}}throw t=Me(l)||l,Error(i(306,t,""))}}return t;case 0:return Xi(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=pl(l,t.pendingProps),ys(e,t,l,a,n);case 3:e:{if($(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var r=t.memoizedState;a=r.element,yi(e,t),wa(t,l,null,n);var o=t.memoizedState;if(l=o.cache,Vn(t,it,l),l!==r.cache&&fi(t,[it],n,!0),Aa(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=vs(e,t,l,n);break e}else if(l!==a){a=Nt(Error(i(424)),t),Sa(a),t=vs(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ie=It(e.firstChild),Dt=t,Oe=!0,ol=null,ln=!0,n=es(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_a(),l===a){t=bn(e,t,n);break e}vt(e,t,l,n)}t=t.child}return t;case 26:return Kr(e,t),e===null?(n=zf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,l=ou(le.current).createElement(n),l[_t]=t,l[zt]=e,bt(l,n,e),ft(l),t.stateNode=l):t.memoizedState=zf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ge(t),e===null&&Oe&&(l=t.stateNode=Tf(t.type,t.pendingProps,le.current),Dt=t,ln=!0,a=Ie,Kn(t.type)?(Mc=a,Ie=It(l.firstChild)):Ie=a),vt(e,t,t.pendingProps.children,n),Kr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((a=l=Ie)&&(l=Cd(l,t.type,t.pendingProps,ln),l!==null?(t.stateNode=l,Dt=t,Ie=It(l.firstChild),ln=!1,a=!0):a=!1),a||sl(t)),Ge(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,Tc(a,r)?l=null:o!==null&&Tc(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=Ci(e,t,X1,null,null,n),Ia._currentValue=a),Kr(e,t),vt(e,t,l,n),t.child;case 6:return e===null&&Oe&&((e=n=Ie)&&(n=Td(n,t.pendingProps,ln),n!==null?(t.stateNode=n,Dt=t,Ie=null,e=!0):e=!1),e||sl(t)),null;case 13:return xs(e,t,n);case 4:return $(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Pl(t,null,l,n):vt(e,t,l,n),t.child;case 11:return fs(e,t,t.type,t.pendingProps,n);case 7:return vt(e,t,t.pendingProps,n),t.child;case 8:return vt(e,t,t.pendingProps.children,n),t.child;case 12:return vt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Vn(t,t.type,l.value),vt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,dl(t),a=St(a),l=l(a),t.flags|=1,vt(e,t,l,n),t.child;case 14:return ds(e,t,t.type,t.pendingProps,n);case 15:return hs(e,t,t.type,t.pendingProps,n);case 19:return _s(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Jr(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=hn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ms(e,t,n);case 24:return dl(t),l=St(it),e===null?(a=mi(),a===null&&(a=Pe,r=di(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:l,cache:a},gi(t),Vn(t,it,a)):((e.lanes&n)!==0&&(yi(e,t),wa(t,null,null,n),Aa()),a=e.memoizedState,r=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Vn(t,it,l)):(l=r.cache,Vn(t,it,l),l!==a.cache&&fi(t,[it],n,!0))),vt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function _n(e){e.flags|=4}function Cs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Of(t)){if(t=Qt.current,t!==null&&((Ae&4194048)===Ae?an!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==an))throw za=pi,u0;e.flags|=8192}}function Wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?wn():536870912,e.lanes|=t,Wl|=t)}function Ua(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function W1(e,t,n){var l=t.pendingProps;switch(ii(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return We(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),yn(it),oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ba(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,t0())),We(t),null;case 26:return n=t.memoizedState,e===null?(_n(t),n!==null?(We(t),Cs(t,n)):(We(t),t.flags&=-16777217)):n?n!==e.memoizedState?(_n(t),We(t),Cs(t,n)):(We(t),t.flags&=-16777217):(e.memoizedProps!==l&&_n(t),We(t),t.flags&=-16777217),null;case 27:lt(t),n=le.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return We(t),null}e=F.current,ba(t)?$o(t):(e=Tf(a,l,n),t.stateNode=e,_n(t))}return We(t),null;case 5:if(lt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return We(t),null}if(e=F.current,ba(t))$o(t);else{switch(a=ou(le.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[_t]=t,e[zt]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(bt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&_n(t)}}return We(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=le.current,ba(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Dt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||yf(e.nodeValue,n)),e||sl(t)}else e=ou(e).createTextNode(l),e[_t]=t,t.stateNode=e}return We(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ba(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[_t]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else a=t0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(xn(t),t):(xn(t),null)}if(xn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Wr(t,t.updateQueue),We(t),null;case 4:return oe(),e===null&&xc(t.stateNode.containerInfo),We(t),null;case 10:return yn(t.type),We(t),null;case 19:if(J(ct),a=t.memoizedState,a===null)return We(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)Ua(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Zr(e),r!==null){for(t.flags|=128,Ua(a,!1),e=r.updateQueue,t.updateQueue=e,Wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fo(n,e),n=n.sibling;return N(ct,ct.current&1|2),t.child}e=e.sibling}a.tail!==null&&st()>$r&&(t.flags|=128,l=!0,Ua(a,!1),t.lanes=4194304)}else{if(!l)if(e=Zr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Wr(t,e),Ua(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Oe)return We(t),null}else 2*st()-a.renderingStartTime>$r&&n!==536870912&&(t.flags|=128,l=!0,Ua(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=st(),t.sibling=null,e=ct.current,N(ct,l?e&1|2:e&1),t):(We(t),null);case 22:case 23:return xn(t),_i(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),n=t.updateQueue,n!==null&&Wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&J(hl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yn(it),We(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function F1(e,t){switch(ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(it),oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lt(t),null;case 13:if(xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ct),null;case 4:return oe(),null;case 10:return yn(t.type),null;case 22:case 23:return xn(t),_i(),e!==null&&J(hl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return yn(it),null;case 25:return null;default:return null}}function Ts(e,t){switch(ii(t),t.tag){case 3:yn(it),oe();break;case 26:case 27:case 5:lt(t);break;case 4:oe();break;case 13:xn(t);break;case 19:J(ct);break;case 10:yn(t.type);break;case 22:case 23:xn(t),_i(),e!==null&&J(hl);break;case 24:yn(it)}}function ja(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var r=n.create,o=n.inst;l=r(),o.destroy=l}n=n.next}while(n!==a)}}catch(m){Xe(t,t.return,m)}}function Yn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&e)===e){var o=l.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,a=t;var C=n,w=m;try{w()}catch(L){Xe(a,C,L)}}}l=l.next}while(l!==r)}}catch(L){Xe(t,t.return,L)}}function Rs(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{d0(t,n)}catch(l){Xe(e,e.return,l)}}}function Ds(e,t,n){n.props=pl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Xe(e,t,l)}}function ka(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Xe(e,t,a)}}function rn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Xe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Xe(e,t,a)}else n.current=null}function zs(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Xe(e,e.return,a)}}function Ji(e,t,n){try{var l=e.stateNode;vd(l,e.type,n,t),l[zt]=t}catch(a){Xe(e,e.return,a)}}function Ms(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function Wi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cu));else if(l!==4&&(l===27&&Kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Fr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function As(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);bt(t,l,n),t[_t]=e,t[zt]=n}catch(r){Xe(e,e.return,r)}}var Sn=!1,nt=!1,Ii=!1,ws=typeof WeakSet=="function"?WeakSet:Set,ht=null;function I1(e,t){if(e=e.containerInfo,Sc=pu,e=Xo(e),Wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,m=-1,C=-1,w=0,L=0,K=e,V=null;t:for(;;){for(var B;K!==n||a!==0&&K.nodeType!==3||(m=o+a),K!==r||l!==0&&K.nodeType!==3||(C=o+l),K.nodeType===3&&(o+=K.nodeValue.length),(B=K.firstChild)!==null;)V=K,K=B;for(;;){if(K===e)break t;if(V===n&&++w===a&&(m=o),V===r&&++L===l&&(C=o),(B=K.nextSibling)!==null)break;K=V,V=K.parentNode}K=B}n=m===-1||C===-1?null:{start:m,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:e,selectionRange:n},pu=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,l=n.stateNode;try{var pe=pl(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(pe,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(de){Xe(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function Es(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Xn(e,n),l&4&&ja(5,n);break;case 1:if(Xn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Xe(n,n.return,o)}else{var a=pl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Xe(n,n.return,o)}}l&64&&Rs(n),l&512&&ka(n,n.return);break;case 3:if(Xn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{d0(e,t)}catch(o){Xe(n,n.return,o)}}break;case 27:t===null&&l&4&&As(n);case 26:case 5:Xn(e,n),t===null&&l&4&&zs(n),l&512&&ka(n,n.return);break;case 12:Xn(e,n);break;case 13:Xn(e,n),l&4&&Hs(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=id.bind(null,n),Rd(e,n))));break;case 22:if(l=n.memoizedState!==null||Sn,!l){t=t!==null&&t.memoizedState!==null||nt,a=Sn;var r=nt;Sn=l,(nt=t)&&!r?qn(e,n,(n.subtreeFlags&8772)!==0):Xn(e,n),Sn=a,nt=r}break;case 30:break;default:Xn(e,n)}}function Os(e){var t=e.alternate;t!==null&&(e.alternate=null,Os(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,wt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Vs(e,t,n),n=n.sibling}function Vs(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Qe,n)}catch{}switch(n.tag){case 26:nt||rn(n,t),Cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||rn(n,t);var l=Je,a=wt;Kn(n.type)&&(Je=n.stateNode,wt=!1),Cn(e,t,n),Ka(n.stateNode),Je=l,wt=a;break;case 5:nt||rn(n,t);case 6:if(l=Je,a=wt,Je=null,Cn(e,t,n),Je=l,wt=a,Je!==null)if(wt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(n.stateNode)}catch(r){Xe(n,t,r)}else try{Je.removeChild(n.stateNode)}catch(r){Xe(n,t,r)}break;case 18:Je!==null&&(wt?(e=Je,Sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),nr(e)):Sf(Je,n.stateNode));break;case 4:l=Je,a=wt,Je=n.stateNode.containerInfo,wt=!0,Cn(e,t,n),Je=l,wt=a;break;case 0:case 11:case 14:case 15:nt||Yn(2,n,t),nt||Yn(4,n,t),Cn(e,t,n);break;case 1:nt||(rn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ds(n,t,l)),Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:nt=(l=nt)||n.memoizedState!==null,Cn(e,t,n),nt=l;break;default:Cn(e,t,n)}}function Hs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nr(e)}catch(n){Xe(t,t.return,n)}}function $1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ws),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ws),t;default:throw Error(i(435,e.tag))}}function $i(e,t){var n=$1(e);t.forEach(function(l){var a=cd.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],r=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(Kn(m.type)){Je=m.stateNode,wt=!1;break e}break;case 5:Je=m.stateNode,wt=!1;break e;case 3:case 4:Je=m.stateNode.containerInfo,wt=!0;break e}m=m.return}if(Je===null)throw Error(i(160));Vs(r,o,a),Je=null,wt=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Bs(t,e),t=t.sibling}var Ft=null;function Bs(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Ut(e),l&4&&(Yn(3,e,e.return),ja(3,e),Yn(5,e,e.return));break;case 1:Gt(t,e),Ut(e),l&512&&(nt||n===null||rn(n,n.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Ft;if(Gt(t,e),Ut(e),l&512&&(nt||n===null||rn(n,n.return)),l&4){var r=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[oa]||r[_t]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),bt(r,l,n),r[_t]=e,ft(r),l=r;break e;case"link":var o=wf("link","href",a).get(l+(n.href||""));if(o){for(var m=0;m<o.length;m++)if(r=o[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(m,1);break t}}r=a.createElement(l),bt(r,l,n),a.head.appendChild(r);break;case"meta":if(o=wf("meta","content",a).get(l+(n.content||""))){for(m=0;m<o.length;m++)if(r=o[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(m,1);break t}}r=a.createElement(l),bt(r,l,n),a.head.appendChild(r);break;default:throw Error(i(468,l))}r[_t]=e,ft(r),l=r}e.stateNode=l}else Ef(a,e.type,e.stateNode);else e.stateNode=Af(a,l,e.memoizedProps);else r!==l?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,l===null?Ef(a,e.type,e.stateNode):Af(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ji(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Ut(e),l&512&&(nt||n===null||rn(n,n.return)),n!==null&&l&4&&Ji(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Ut(e),l&512&&(nt||n===null||rn(n,n.return)),e.flags&32){a=e.stateNode;try{Ml(a,"")}catch(B){Xe(e,e.return,B)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Ji(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ii=!0);break;case 6:if(Gt(t,e),Ut(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(B){Xe(e,e.return,B)}}break;case 3:if(du=null,a=Ft,Ft=su(t.containerInfo),Gt(t,e),Ft=a,Ut(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(B){Xe(e,e.return,B)}Ii&&(Ii=!1,Gs(e));break;case 4:l=Ft,Ft=su(e.stateNode.containerInfo),Gt(t,e),Ut(e),Ft=l;break;case 12:Gt(t,e),Ut(e);break;case 13:Gt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(rc=st()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$i(e,l)));break;case 22:a=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,w=Sn,L=nt;if(Sn=w||a,nt=L||C,Gt(t,e),nt=L,Sn=w,Ut(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||C||Sn||nt||gl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(r=C.stateNode,a)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=C.stateNode;var K=C.memoizedProps.style,V=K!=null&&K.hasOwnProperty("display")?K.display:null;m.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(B){Xe(C,C.return,B)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=a?"":C.memoizedProps}catch(B){Xe(C,C.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,$i(e,n))));break;case 19:Gt(t,e),Ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$i(e,l)));break;case 30:break;case 21:break;default:Gt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Ms(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,r=Wi(e);Fr(e,r,a);break;case 5:var o=n.stateNode;n.flags&32&&(Ml(o,""),n.flags&=-33);var m=Wi(e);Fr(e,m,o);break;case 3:case 4:var C=n.stateNode.containerInfo,w=Wi(e);Fi(e,w,C);break;default:throw Error(i(161))}}catch(L){Xe(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Es(e,t.alternate,t),t=t.sibling}function gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Yn(4,t,t.return),gl(t);break;case 1:rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ds(t,t.return,n),gl(t);break;case 27:Ka(t.stateNode);case 26:case 5:rn(t,t.return),gl(t);break;case 22:t.memoizedState===null&&gl(t);break;case 30:gl(t);break;default:gl(t)}e=e.sibling}}function qn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:qn(a,r,n),ja(4,r);break;case 1:if(qn(a,r,n),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(w){Xe(l,l.return,w)}if(l=r,a=l.updateQueue,a!==null){var m=l.stateNode;try{var C=a.shared.hiddenCallbacks;if(C!==null)for(a.shared.hiddenCallbacks=null,a=0;a<C.length;a++)f0(C[a],m)}catch(w){Xe(l,l.return,w)}}n&&o&64&&Rs(r),ka(r,r.return);break;case 27:As(r);case 26:case 5:qn(a,r,n),n&&l===null&&o&4&&zs(r),ka(r,r.return);break;case 12:qn(a,r,n);break;case 13:qn(a,r,n),n&&o&4&&Hs(a,r);break;case 22:r.memoizedState===null&&qn(a,r,n),ka(r,r.return);break;case 30:break;default:qn(a,r,n)}t=t.sibling}}function ec(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ta(n))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ta(e))}function un(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Us(e,t,n,l),t=t.sibling}function Us(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,n,l),a&2048&&ja(9,t);break;case 1:un(e,t,n,l);break;case 3:un(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ta(e)));break;case 12:if(a&2048){un(e,t,n,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,m=r.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Xe(t,t.return,C)}}else un(e,t,n,l);break;case 13:un(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?un(e,t,n,l):Ya(e,t):r._visibility&2?un(e,t,n,l):(r._visibility|=2,Ql(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&ec(o,t);break;case 24:un(e,t,n,l),a&2048&&tc(t.alternate,t);break;default:un(e,t,n,l)}}function Ql(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,m=n,C=l,w=o.flags;switch(o.tag){case 0:case 11:case 15:Ql(r,o,m,C,a),ja(8,o);break;case 23:break;case 22:var L=o.stateNode;o.memoizedState!==null?L._visibility&2?Ql(r,o,m,C,a):Ya(r,o):(L._visibility|=2,Ql(r,o,m,C,a)),a&&w&2048&&ec(o.alternate,o);break;case 24:Ql(r,o,m,C,a),a&&w&2048&&tc(o.alternate,o);break;default:Ql(r,o,m,C,a)}t=t.sibling}}function Ya(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Ya(n,l),a&2048&&ec(l.alternate,l);break;case 24:Ya(n,l),a&2048&&tc(l.alternate,l);break;default:Ya(n,l)}t=t.sibling}}var Xa=8192;function Kl(e){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)js(e),e=e.sibling}function js(e){switch(e.tag){case 26:Kl(e),e.flags&Xa&&e.memoizedState!==null&&jd(Ft,e.memoizedState,e.memoizedProps);break;case 5:Kl(e);break;case 3:case 4:var t=Ft;Ft=su(e.stateNode.containerInfo),Kl(e),Ft=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xa,Xa=16777216,Kl(e),Xa=t):Kl(e));break;default:Kl(e)}}function ks(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ht=l,Xs(l,e)}ks(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ys(e),e=e.sibling}function Ys(e){switch(e.tag){case 0:case 11:case 15:qa(e),e.flags&2048&&Yn(9,e,e.return);break;case 3:qa(e);break;case 12:qa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ir(e)):qa(e);break;default:qa(e)}}function Ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ht=l,Xs(l,e)}ks(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Yn(8,t,t.return),Ir(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ir(t));break;default:Ir(t)}e=e.sibling}}function Xs(e,t){for(;ht!==null;){var n=ht;switch(n.tag){case 0:case 11:case 15:Yn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ta(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ht=l;else e:for(n=e;ht!==null;){l=ht;var a=l.sibling,r=l.return;if(Os(l),l===n){ht=null;break e}if(a!==null){a.return=r,ht=a;break e}ht=r}}}var ed={getCacheForType:function(e){var t=St(it),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},td=typeof WeakMap=="function"?WeakMap:Map,He=0,Pe=null,De=null,Ae=0,Be=0,jt=null,Nn=!1,Jl=!1,nc=!1,Tn=0,$e=0,Ln=0,yl=0,lc=0,Kt=0,Wl=0,Na=null,Et=null,ac=!1,rc=0,$r=1/0,eu=null,Zn=null,xt=0,Pn=null,Fl=null,Il=0,uc=0,ic=null,qs=null,La=0,cc=null;function kt(){if((He&2)!==0&&Ae!==0)return Ae&-Ae;if(j.T!==null){var e=kl;return e!==0?e:pc()}return lo()}function Ns(){Kt===0&&(Kt=(Ae&536870912)===0||Oe?ne():536870912);var e=Qt.current;return e!==null&&(e.flags|=32),Kt}function Yt(e,t,n){(e===Pe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&($l(e,0),Qn(e,Ae,Kt,!1)),tl(e,n),((He&2)===0||e!==Pe)&&(e===Pe&&((He&2)===0&&(yl|=n),$e===4&&Qn(e,Ae,Kt,!1)),cn(e))}function Ls(e,t,n){if((He&6)!==0)throw Error(i(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ke(e,t),a=l?ad(e,t):fc(e,t,!0),r=l;do{if(a===0){Jl&&!l&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!nd(n)){a=fc(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;a=Na;var C=m.current.memoizedState.isDehydrated;if(C&&($l(m,o).flags|=256),o=fc(m,o,!1),o!==2){if(nc&&!C){m.errorRecoveryDisabledLanes|=r,yl|=r,a=4;break e}r=Et,Et=a,r!==null&&(Et===null?Et=r:Et.push.apply(Et,r))}a=o}if(r=!1,a!==2)continue}}if(a===1){$l(e,0),Qn(e,t,0,!0);break}e:{switch(l=e,r=a,r){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Qn(l,t,Kt,!Nn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=rc+300-st(),10<a)){if(Qn(l,t,Kt,!Nn),yt(l,0,!0)!==0)break e;l.timeoutHandle=bf(Zs.bind(null,l,n,Et,eu,ac,t,Kt,yl,Wl,Nn,r,2,-0,0),a);break e}Zs(l,n,Et,eu,ac,t,Kt,yl,Wl,Nn,r,0,-0,0)}}break}while(!0);cn(e)}function Zs(e,t,n,l,a,r,o,m,C,w,L,K,V,B){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Fa={stylesheets:null,count:0,unsuspend:Ud},js(t),K=kd(),K!==null)){e.cancelPendingCommit=K(Is.bind(null,e,t,r,n,l,a,o,m,C,L,1,V,B)),Qn(e,r,o,!w);return}Is(e,t,r,n,l,a,o,m,C)}function nd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],r=a.getSnapshot;a=a.value;try{if(!Ht(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,l){t&=~lc,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var r=31-et(a),o=1<<r;l[r]=-1,a&=~o}n!==0&&sr(e,n,t)}function tu(){return(He&6)===0?(Za(0),!1):!0}function oc(){if(De!==null){if(Be===0)var e=De.return;else e=De,gn=fl=null,Di(e),Zl=null,Ba=0,e=De;for(;e!==null;)Ts(e.alternate,e),e=e.return;De=null}}function $l(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,bd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),oc(),Pe=e,De=n=hn(e.current,null),Ae=t,Be=0,jt=null,Nn=!1,Jl=Ke(e,t),nc=!1,Wl=Kt=lc=yl=Ln=$e=0,Et=Na=null,ac=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-et(l),r=1<<a;t|=e[a],l&=~r}return Tn=t,Cr(),n}function Ps(e,t){Ce=null,j.H=qr,t===Da||t===Or?(t=o0(),Be=3):t===u0?(t=o0(),Be=4):Be=t===ss?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,De===null&&($e=1,Qr(e,Nt(t,e.current)))}function Qs(){var e=j.H;return j.H=qr,e===null?qr:e}function Ks(){var e=j.A;return j.A=ed,e}function sc(){$e=4,Nn||(Ae&4194048)!==Ae&&Qt.current!==null||(Jl=!0),(Ln&134217727)===0&&(yl&134217727)===0||Pe===null||Qn(Pe,Ae,Kt,!1)}function fc(e,t,n){var l=He;He|=2;var a=Qs(),r=Ks();(Pe!==e||Ae!==t)&&(eu=null,$l(e,t)),t=!1;var o=$e;e:do try{if(Be!==0&&De!==null){var m=De,C=jt;switch(Be){case 8:oc(),o=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(t=!0);var w=Be;if(Be=0,jt=null,ea(e,m,C,w),n&&Jl){o=0;break e}break;default:w=Be,Be=0,jt=null,ea(e,m,C,w)}}ld(),o=$e;break}catch(L){Ps(e,L)}while(!0);return t&&e.shellSuspendCounter++,gn=fl=null,He=l,j.H=a,j.A=r,De===null&&(Pe=null,Ae=0,Cr()),o}function ld(){for(;De!==null;)Js(De)}function ad(e,t){var n=He;He|=2;var l=Qs(),a=Ks();Pe!==e||Ae!==t?(eu=null,$r=st()+500,$l(e,t)):Jl=Ke(e,t);e:do try{if(Be!==0&&De!==null){t=De;var r=jt;t:switch(Be){case 1:Be=0,jt=null,ea(e,t,r,1);break;case 2:case 9:if(i0(r)){Be=0,jt=null,Ws(t);break}t=function(){Be!==2&&Be!==9||Pe!==e||(Be=7),cn(e)},r.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:i0(r)?(Be=0,jt=null,Ws(t)):(Be=0,jt=null,ea(e,t,r,7));break;case 5:var o=null;switch(De.tag){case 26:o=De.memoizedState;case 5:case 27:var m=De;if(!o||Of(o)){Be=0,jt=null;var C=m.sibling;if(C!==null)De=C;else{var w=m.return;w!==null?(De=w,nu(w)):De=null}break t}}Be=0,jt=null,ea(e,t,r,5);break;case 6:Be=0,jt=null,ea(e,t,r,6);break;case 8:oc(),$e=6;break e;default:throw Error(i(462))}}rd();break}catch(L){Ps(e,L)}while(!0);return gn=fl=null,j.H=l,j.A=a,He=n,De!==null?0:(Pe=null,Ae=0,Cr(),$e)}function rd(){for(;De!==null&&!on();)Js(De)}function Js(e){var t=Ss(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?nu(e):De=t}function Ws(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gs(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=gs(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Di(t);default:Ts(n,t),t=De=Fo(t,Tn),t=Ss(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?nu(e):De=t}function ea(e,t,n,l){gn=fl=null,Di(t),Zl=null,Ba=0;var a=t.return;try{if(K1(e,a,t,n,Ae)){$e=1,Qr(e,Nt(n,e.current)),De=null;return}}catch(r){if(a!==null)throw De=a,r;$e=1,Qr(e,Nt(n,e.current)),De=null;return}t.flags&32768?(Oe||l===1?e=!0:Jl||(Ae&536870912)!==0?e=!1:(Nn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Qt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fs(t,e)):nu(t)}function nu(e){var t=e;do{if((t.flags&32768)!==0){Fs(t,Nn);return}e=t.return;var n=W1(t.alternate,t,Tn);if(n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);$e===0&&($e=5)}function Fs(e,t){do{var n=F1(e.alternate,e);if(n!==null){n.flags&=32767,De=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){De=e;return}De=e=n}while(e!==null);$e=6,De=null}function Is(e,t,n,l,a,r,o,m,C){e.cancelPendingCommit=null;do lu();while(xt!==0);if((He&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(r=t.lanes|t.childLanes,r|=ti,Au(e,n,r,o,m,C),e===Pe&&(De=Pe=null,Ae=0),Fl=t,Pn=e,Il=n,uc=r,ic=a,qs=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,od(I,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,a=W.p,W.p=2,o=He,He|=4;try{I1(e,t,n)}finally{He=o,W.p=a,j.T=l}}xt=1,$s(),ef(),tf()}}function $s(){if(xt===1){xt=0;var e=Pn,t=Fl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var l=W.p;W.p=2;var a=He;He|=4;try{Bs(t,e);var r=Cc,o=Xo(e.containerInfo),m=r.focusedElem,C=r.selectionRange;if(o!==m&&m&&m.ownerDocument&&Yo(m.ownerDocument.documentElement,m)){if(C!==null&&Wu(m)){var w=C.start,L=C.end;if(L===void 0&&(L=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(L,m.value.length);else{var K=m.ownerDocument||document,V=K&&K.defaultView||window;if(V.getSelection){var B=V.getSelection(),pe=m.textContent.length,de=Math.min(C.start,pe),ke=C.end===void 0?de:Math.min(C.end,pe);!B.extend&&de>ke&&(o=ke,ke=de,de=o);var z=ko(m,de),R=ko(m,ke);if(z&&R&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==R.node||B.focusOffset!==R.offset)){var M=K.createRange();M.setStart(z.node,z.offset),B.removeAllRanges(),de>ke?(B.addRange(M),B.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),B.addRange(M))}}}}for(K=[],B=m;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<K.length;m++){var Z=K[m];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}pu=!!Sc,Cc=Sc=null}finally{He=a,W.p=l,j.T=n}}e.current=t,xt=2}}function ef(){if(xt===2){xt=0;var e=Pn,t=Fl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var l=W.p;W.p=2;var a=He;He|=4;try{Es(e,t.alternate,t)}finally{He=a,W.p=l,j.T=n}}xt=3}}function tf(){if(xt===4||xt===3){xt=0,tn();var e=Pn,t=Fl,n=Il,l=qs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,Fl=Pn=null,nf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Zn=null),ca(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=j.T,a=W.p,W.p=2,j.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var m=l[o];r(m.value,{componentStack:m.stack})}}finally{j.T=t,W.p=a}}(Il&3)!==0&&lu(),cn(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===cc?La++:(La=0,cc=e):La=0,Za(0)}}function nf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ta(t)))}function lu(e){return $s(),ef(),tf(),lf()}function lf(){if(xt!==5)return!1;var e=Pn,t=uc;uc=0;var n=ca(Il),l=j.T,a=W.p;try{W.p=32>n?32:n,j.T=null,n=ic,ic=null;var r=Pn,o=Il;if(xt=0,Fl=Pn=null,Il=0,(He&6)!==0)throw Error(i(331));var m=He;if(He|=4,Ys(r.current),Us(r,r.current,o,n),He=m,Za(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Qe,r)}catch{}return!0}finally{W.p=a,j.T=l,nf(e,t)}}function af(e,t,n){t=Nt(n,t),t=Yi(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(tl(e,2),cn(e))}function Xe(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Zn===null||!Zn.has(l))){e=Nt(n,e),n=cs(2),l=Gn(t,n,2),l!==null&&(os(n,l,t,e),tl(l,2),cn(l));break}}t=t.return}}function dc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new td;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(nc=!0,a.add(n),e=ud.bind(null,e,t,n),t.then(e,e))}function ud(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(Ae&n)===n&&($e===4||$e===3&&(Ae&62914560)===Ae&&300>st()-rc?(He&2)===0&&$l(e,0):lc|=n,Wl===Ae&&(Wl=0)),cn(e)}function rf(e,t){t===0&&(t=wn()),e=Bl(e,t),e!==null&&(tl(e,t),cn(e))}function id(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rf(e,n)}function cd(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),rf(e,n)}function od(e,t){return Vt(e,t)}var au=null,ta=null,hc=!1,ru=!1,mc=!1,vl=0;function cn(e){e!==ta&&e.next===null&&(ta===null?au=ta=e:ta=ta.next=e),ru=!0,hc||(hc=!0,fd())}function Za(e,t){if(!mc&&ru){mc=!0;do for(var n=!1,l=au;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var o=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-et(42|e)+1)-1,r&=a&~(o&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,sf(l,r))}else r=Ae,r=yt(l,l===Pe?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Ke(l,r)||(n=!0,sf(l,r));l=l.next}while(n);mc=!1}}function sd(){uf()}function uf(){ru=hc=!1;var e=0;vl!==0&&(xd()&&(e=vl),vl=0);for(var t=st(),n=null,l=au;l!==null;){var a=l.next,r=cf(l,t);r===0?(l.next=null,n===null?au=a:n.next=a,a===null&&(ta=n)):(n=l,(e!==0||(r&3)!==0)&&(ru=!0)),l=a}Za(e)}function cf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-et(r),m=1<<o,C=a[o];C===-1?((m&n)===0||(m&l)!==0)&&(a[o]=at(m,t)):C<=t&&(e.expiredLanes|=m),r&=~m}if(t=Pe,n=Ae,n=yt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Rt(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ke(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Rt(l),ca(n)){case 2:case 8:n=te;break;case 32:n=I;break;case 268435456:n=Ne;break;default:n=I}return l=of.bind(null,e),n=Vt(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Rt(l),e.callbackPriority=2,e.callbackNode=null,2}function of(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lu()&&e.callbackNode!==n)return null;var l=Ae;return l=yt(e,e===Pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ls(e,l,t),cf(e,st()),e.callbackNode!=null&&e.callbackNode===n?of.bind(null,e):null)}function sf(e,t){if(lu())return null;Ls(e,t,!0)}function fd(){_d(function(){(He&6)!==0?Vt(Mn,sd):uf()})}function pc(){return vl===0&&(vl=ne()),vl}function ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gr(""+e)}function df(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function dd(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var r=ff((a[zt]||null).action),o=l.submitter;o&&(t=(t=o[zt]||null)?ff(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var m=new br("action","action",null,l,a);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(vl!==0){var C=o?df(a,o):new FormData(a);Bi(n,{pending:!0,data:C,method:a.method,action:r},null,C)}}else typeof r=="function"&&(m.preventDefault(),C=o?df(a,o):new FormData(a),Bi(n,{pending:!0,data:C,method:a.method,action:r},r,C))},currentTarget:a}]})}}for(var gc=0;gc<ei.length;gc++){var yc=ei[gc],hd=yc.toLowerCase(),md=yc[0].toUpperCase()+yc.slice(1);Wt(hd,"on"+md)}Wt(Lo,"onAnimationEnd"),Wt(Zo,"onAnimationIteration"),Wt(Po,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(E1,"onTransitionRun"),Wt(O1,"onTransitionStart"),Wt(V1,"onTransitionCancel"),Wt(Qo,"onTransitionEnd"),Rl("onMouseEnter",["mouseout","mouseover"]),Rl("onMouseLeave",["mouseout","mouseover"]),Rl("onPointerEnter",["pointerout","pointerover"]),Rl("onPointerLeave",["pointerout","pointerover"]),nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa));function hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var m=l[o],C=m.instance,w=m.currentTarget;if(m=m.listener,C!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=w;try{r(a)}catch(L){Pr(L)}a.currentTarget=null,r=C}else for(o=0;o<l.length;o++){if(m=l[o],C=m.instance,w=m.currentTarget,m=m.listener,C!==r&&a.isPropagationStopped())break e;r=m,a.currentTarget=w;try{r(a)}catch(L){Pr(L)}a.currentTarget=null,r=C}}}}function ze(e,t){var n=t[wu];n===void 0&&(n=t[wu]=new Set);var l=e+"__bubble";n.has(l)||(mf(t,e,2,!1),n.add(l))}function vc(e,t,n){var l=0;t&&(l|=4),mf(n,e,l,t)}var uu="_reactListening"+Math.random().toString(36).slice(2);function xc(e){if(!e[uu]){e[uu]=!0,ro.forEach(function(n){n!=="selectionchange"&&(pd.has(n)||vc(n,!1,e),vc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uu]||(t[uu]=!0,vc("selectionchange",!1,t))}}function mf(e,t,n,l){switch(jf(t)){case 2:var a=qd;break;case 8:a=Nd;break;default:a=Vc}n=a.bind(null,t,n,e),a=void 0,!Xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bc(e,t,n,l,a){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var m=l.stateNode.containerInfo;if(m===a)break;if(o===4)for(o=l.return;o!==null;){var C=o.tag;if((C===3||C===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;m!==null;){if(o=Sl(m),o===null)return;if(C=o.tag,C===5||C===6||C===26||C===27){l=r=o;continue e}m=m.parentNode}}l=l.return}bo(function(){var w=r,L=ku(n),K=[];e:{var V=Ko.get(e);if(V!==void 0){var B=br,pe=e;switch(e){case"keypress":if(vr(n)===0)break e;case"keydown":case"keyup":B=o1;break;case"focusin":pe="focus",B=Zu;break;case"focusout":pe="blur",B=Zu;break;case"beforeblur":case"afterblur":B=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=F2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=d1;break;case Lo:case Zo:case Po:B=e1;break;case Qo:B=m1;break;case"scroll":case"scrollend":B=J2;break;case"wheel":B=g1;break;case"copy":case"cut":case"paste":B=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Ro;break;case"toggle":case"beforetoggle":B=v1}var de=(t&4)!==0,ke=!de&&(e==="scroll"||e==="scrollend"),z=de?V!==null?V+"Capture":null:V;de=[];for(var R=w,M;R!==null;){var Z=R;if(M=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||M===null||z===null||(Z=fa(R,z),Z!=null&&de.push(Qa(R,Z,M))),ke)break;R=R.return}0<de.length&&(V=new B(V,pe,null,n,L),K.push({event:V,listeners:de}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",V&&n!==ju&&(pe=n.relatedTarget||n.fromElement)&&(Sl(pe)||pe[_l]))break e;if((B||V)&&(V=L.window===L?L:(V=L.ownerDocument)?V.defaultView||V.parentWindow:window,B?(pe=n.relatedTarget||n.toElement,B=w,pe=pe?Sl(pe):null,pe!==null&&(ke=c(pe),de=pe.tag,pe!==ke||de!==5&&de!==27&&de!==6)&&(pe=null)):(B=null,pe=w),B!==pe)){if(de=Co,Z="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(de=Ro,Z="onPointerLeave",z="onPointerEnter",R="pointer"),ke=B==null?V:sa(B),M=pe==null?V:sa(pe),V=new de(Z,R+"leave",B,n,L),V.target=ke,V.relatedTarget=M,Z=null,Sl(L)===w&&(de=new de(z,R+"enter",pe,n,L),de.target=M,de.relatedTarget=ke,Z=de),ke=Z,B&&pe)t:{for(de=B,z=pe,R=0,M=de;M;M=na(M))R++;for(M=0,Z=z;Z;Z=na(Z))M++;for(;0<R-M;)de=na(de),R--;for(;0<M-R;)z=na(z),M--;for(;R--;){if(de===z||z!==null&&de===z.alternate)break t;de=na(de),z=na(z)}de=null}else de=null;B!==null&&pf(K,V,B,de,!1),pe!==null&&ke!==null&&pf(K,ke,pe,de,!0)}}e:{if(V=w?sa(w):window,B=V.nodeName&&V.nodeName.toLowerCase(),B==="select"||B==="input"&&V.type==="file")var re=Vo;else if(Eo(V))if(Ho)re=M1;else{re=D1;var Te=R1}else B=V.nodeName,!B||B.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?w&&Uu(w.elementType)&&(re=Vo):re=z1;if(re&&(re=re(e,w))){Oo(K,re,n,L);break e}Te&&Te(e,V,w),e==="focusout"&&w&&V.type==="number"&&w.memoizedProps.value!=null&&Gu(V,"number",V.value)}switch(Te=w?sa(w):window,e){case"focusin":(Eo(Te)||Te.contentEditable==="true")&&(Ol=Te,Fu=w,xa=null);break;case"focusout":xa=Fu=Ol=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,qo(K,n,L);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":qo(K,n,L)}var fe;if(Qu)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else El?Ao(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(Do&&n.locale!=="ko"&&(El||he!=="onCompositionStart"?he==="onCompositionEnd"&&El&&(fe=_o()):(On=L,qu="value"in On?On.value:On.textContent,El=!0)),Te=iu(w,he),0<Te.length&&(he=new To(he,e,null,n,L),K.push({event:he,listeners:Te}),fe?he.data=fe:(fe=wo(n),fe!==null&&(he.data=fe)))),(fe=b1?_1(e,n):S1(e,n))&&(he=iu(w,"onBeforeInput"),0<he.length&&(Te=new To("onBeforeInput","beforeinput",null,n,L),K.push({event:Te,listeners:he}),Te.data=fe)),dd(K,e,w,n,L)}hf(K,t)})}function Qa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=fa(e,n),a!=null&&l.unshift(Qa(e,a,r)),a=fa(e,t),a!=null&&l.push(Qa(e,a,r))),e.tag===3)return l;e=e.return}return[]}function na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pf(e,t,n,l,a){for(var r=t._reactName,o=[];n!==null&&n!==l;){var m=n,C=m.alternate,w=m.stateNode;if(m=m.tag,C!==null&&C===l)break;m!==5&&m!==26&&m!==27||w===null||(C=w,a?(w=fa(n,r),w!=null&&o.unshift(Qa(n,w,C))):a||(w=fa(n,r),w!=null&&o.push(Qa(n,w,C)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gd=/\r\n?/g,yd=/\u0000|\uFFFD/g;function gf(e){return(typeof e=="string"?e:""+e).replace(gd,`
`).replace(yd,"")}function yf(e,t){return t=gf(t),gf(e)===t}function cu(){}function je(e,t,n,l,a,r){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ml(e,""+l);break;case"className":hr(e,"class",l);break;case"tabIndex":hr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":hr(e,n,l);break;case"style":vo(e,l,r);break;case"data":if(t!=="object"){hr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=gr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",a.name,a,null),je(e,t,"formEncType",a.formEncType,a,null),je(e,t,"formMethod",a.formMethod,a,null),je(e,t,"formTarget",a.formTarget,a,null)):(je(e,t,"encType",a.encType,a,null),je(e,t,"method",a.method,a,null),je(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=gr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=cu);break;case"onScroll":l!=null&&ze("scroll",e);break;case"onScrollEnd":l!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=gr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ze("beforetoggle",e),ze("toggle",e),dr(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":dr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Q2.get(n)||n,dr(e,n,l))}}function _c(e,t,n,l,a,r){switch(n){case"style":vo(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ml(e,l):(typeof l=="number"||typeof l=="bigint")&&Ml(e,""+l);break;case"onScroll":l!=null&&ze("scroll",e);break;case"onScrollEnd":l!=null&&ze("scrollend",e);break;case"onClick":l!=null&&(e.onclick=cu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[zt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):dr(e,n,l)}}}function bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var l=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:je(e,t,r,o,n,null)}}a&&je(e,t,"srcSet",n.srcSet,n,null),l&&je(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var m=r=o=a=null,C=null,w=null;for(l in n)if(n.hasOwnProperty(l)){var L=n[l];if(L!=null)switch(l){case"name":a=L;break;case"type":o=L;break;case"checked":C=L;break;case"defaultChecked":w=L;break;case"value":r=L;break;case"defaultValue":m=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(i(137,t));break;default:je(e,t,l,L,n,null)}}mo(e,r,m,C,w,o,a,!1),mr(e);return;case"select":ze("invalid",e),l=o=r=null;for(a in n)if(n.hasOwnProperty(a)&&(m=n[a],m!=null))switch(a){case"value":r=m;break;case"defaultValue":o=m;break;case"multiple":l=m;default:je(e,t,a,m,n,null)}t=r,n=o,e.multiple=!!l,t!=null?zl(e,!!l,t,!1):n!=null&&zl(e,!!l,n,!0);return;case"textarea":ze("invalid",e),r=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(m=n[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":a=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:je(e,t,o,m,n,null)}go(e,l,a,r),mr(e);return;case"option":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,C,l,n,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(l=0;l<Pa.length;l++)ze(Pa[l],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:je(e,t,w,l,n,null)}return;default:if(Uu(t)){for(L in n)n.hasOwnProperty(L)&&(l=n[L],l!==void 0&&_c(e,t,L,l,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(l=n[m],l!=null&&je(e,t,m,l,n,null))}function vd(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,o=null,m=null,C=null,w=null,L=null;for(B in n){var K=n[B];if(n.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":C=K;default:l.hasOwnProperty(B)||je(e,t,B,null,l,K)}}for(var V in l){var B=l[V];if(K=n[V],l.hasOwnProperty(V)&&(B!=null||K!=null))switch(V){case"type":r=B;break;case"name":a=B;break;case"checked":w=B;break;case"defaultChecked":L=B;break;case"value":o=B;break;case"defaultValue":m=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(i(137,t));break;default:B!==K&&je(e,t,V,B,l,K)}}Bu(e,o,m,C,w,L,r,a);return;case"select":B=o=m=V=null;for(r in n)if(C=n[r],n.hasOwnProperty(r)&&C!=null)switch(r){case"value":break;case"multiple":B=C;default:l.hasOwnProperty(r)||je(e,t,r,null,l,C)}for(a in l)if(r=l[a],C=n[a],l.hasOwnProperty(a)&&(r!=null||C!=null))switch(a){case"value":V=r;break;case"defaultValue":m=r;break;case"multiple":o=r;default:r!==C&&je(e,t,a,r,l,C)}t=m,n=o,l=B,V!=null?zl(e,!!n,V,!1):!!l!=!!n&&(t!=null?zl(e,!!n,t,!0):zl(e,!!n,n?[]:"",!1));return;case"textarea":B=V=null;for(m in n)if(a=n[m],n.hasOwnProperty(m)&&a!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,l,a)}for(o in l)if(a=l[o],r=n[o],l.hasOwnProperty(o)&&(a!=null||r!=null))switch(o){case"value":V=a;break;case"defaultValue":B=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==r&&je(e,t,o,a,l,r)}po(e,V,B);return;case"option":for(var pe in n)if(V=n[pe],n.hasOwnProperty(pe)&&V!=null&&!l.hasOwnProperty(pe))switch(pe){case"selected":e.selected=!1;break;default:je(e,t,pe,null,l,V)}for(C in l)if(V=l[C],B=n[C],l.hasOwnProperty(C)&&V!==B&&(V!=null||B!=null))switch(C){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:je(e,t,C,V,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)V=n[de],n.hasOwnProperty(de)&&V!=null&&!l.hasOwnProperty(de)&&je(e,t,de,null,l,V);for(w in l)if(V=l[w],B=n[w],l.hasOwnProperty(w)&&V!==B&&(V!=null||B!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,t));break;default:je(e,t,w,V,l,B)}return;default:if(Uu(t)){for(var ke in n)V=n[ke],n.hasOwnProperty(ke)&&V!==void 0&&!l.hasOwnProperty(ke)&&_c(e,t,ke,void 0,l,V);for(L in l)V=l[L],B=n[L],!l.hasOwnProperty(L)||V===B||V===void 0&&B===void 0||_c(e,t,L,V,l,B);return}}for(var z in n)V=n[z],n.hasOwnProperty(z)&&V!=null&&!l.hasOwnProperty(z)&&je(e,t,z,null,l,V);for(K in l)V=l[K],B=n[K],!l.hasOwnProperty(K)||V===B||V==null&&B==null||je(e,t,K,V,l,B)}var Sc=null,Cc=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=null;function xd(){var e=window.event;return e&&e.type==="popstate"?e===Rc?!1:(Rc=e,!0):(Rc=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,bd=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,_d=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(Sd)}:bf;function Sd(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function Sf(e,t){var n=t,l=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<l&&8>l){n=l;var o=e.ownerDocument;if(n&1&&Ka(o.documentElement),n&2&&Ka(o.body),n&4)for(n=o.head,Ka(n),o=n.firstChild;o;){var m=o.nextSibling,C=o.nodeName;o[oa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=m}}if(a===0){e.removeChild(r),nr(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=r}while(n);nr(t)}function Dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),Eu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cd(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[oa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function Td(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=It(e.nextSibling),e===null))return null;return e}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Rd(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Mc=null;function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Tf(e,t,n){switch(t=ou(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Ka(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eu(e)}var Jt=new Map,Rf=new Set;function su(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=W.d;W.d={f:Dd,r:zd,D:Md,C:Ad,L:wd,m:Ed,X:Vd,S:Od,M:Hd};function Dd(){var e=Rn.f(),t=tu();return e||t}function zd(e){var t=Cl(e);t!==null&&t.tag===5&&t.type==="form"?L0(t):Rn.r(e)}var la=typeof document>"u"?null:document;function Df(e,t,n){var l=la;if(l&&typeof t=="string"&&t){var a=qt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Rf.has(a)||(Rf.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),bt(t,"link",e),ft(t),l.head.appendChild(t)))}}function Md(e){Rn.D(e),Df("dns-prefetch",e,null)}function Ad(e,t){Rn.C(e,t),Df("preconnect",e,t)}function wd(e,t,n){Rn.L(e,t,n);var l=la;if(l&&e&&t){var a='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+qt(n.imageSizes)+'"]')):a+='[href="'+qt(e)+'"]';var r=a;switch(t){case"style":r=aa(e);break;case"script":r=ra(e)}Jt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Jt.set(r,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ja(r))||t==="script"&&l.querySelector(Wa(r))||(t=l.createElement("link"),bt(t,"link",e),ft(t),l.head.appendChild(t)))}}function Ed(e,t){Rn.m(e,t);var n=la;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(e)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ra(e)}if(!Jt.has(r)&&(e=v({rel:"modulepreload",href:e},t),Jt.set(r,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wa(r)))return}l=n.createElement("link"),bt(l,"link",e),ft(l),n.head.appendChild(l)}}}function Od(e,t,n){Rn.S(e,t,n);var l=la;if(l&&e){var a=Tl(l).hoistableStyles,r=aa(e);t=t||"default";var o=a.get(r);if(!o){var m={loading:0,preload:null};if(o=l.querySelector(Ja(r)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Jt.get(r))&&Ac(e,n);var C=o=l.createElement("link");ft(C),bt(C,"link",e),C._p=new Promise(function(w,L){C.onload=w,C.onerror=L}),C.addEventListener("load",function(){m.loading|=1}),C.addEventListener("error",function(){m.loading|=2}),m.loading|=4,fu(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:m},a.set(r,o)}}}function Vd(e,t){Rn.X(e,t);var n=la;if(n&&e){var l=Tl(n).hoistableScripts,a=ra(e),r=l.get(a);r||(r=n.querySelector(Wa(a)),r||(e=v({src:e,async:!0},t),(t=Jt.get(a))&&wc(e,t),r=n.createElement("script"),ft(r),bt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function Hd(e,t){Rn.M(e,t);var n=la;if(n&&e){var l=Tl(n).hoistableScripts,a=ra(e),r=l.get(a);r||(r=n.querySelector(Wa(a)),r||(e=v({src:e,async:!0,type:"module"},t),(t=Jt.get(a))&&wc(e,t),r=n.createElement("script"),ft(r),bt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function zf(e,t,n,l){var a=(a=le.current)?su(a):null;if(!a)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=aa(n.href),n=Tl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=aa(n.href);var r=Tl(a).hoistableStyles,o=r.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=a.querySelector(Ja(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jt.set(e,n),r||Bd(a,e,n,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ra(n),n=Tl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function aa(e){return'href="'+qt(e)+'"'}function Ja(e){return'link[rel="stylesheet"]['+e+"]"}function Mf(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Bd(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),bt(t,"link",n),ft(t),e.head.appendChild(t))}function ra(e){return'[src="'+qt(e)+'"]'}function Wa(e){return"script[async]"+e}function Af(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+qt(n.href)+'"]');if(l)return t.instance=l,ft(l),l;var a=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ft(l),bt(l,"style",a),fu(l,n.precedence,e),t.instance=l;case"stylesheet":a=aa(n.href);var r=e.querySelector(Ja(a));if(r)return t.state.loading|=4,t.instance=r,ft(r),r;l=Mf(n),(a=Jt.get(a))&&Ac(l,a),r=(e.ownerDocument||e).createElement("link"),ft(r);var o=r;return o._p=new Promise(function(m,C){o.onload=m,o.onerror=C}),bt(r,"link",l),t.state.loading|=4,fu(r,n.precedence,e),t.instance=r;case"script":return r=ra(n.src),(a=e.querySelector(Wa(r)))?(t.instance=a,ft(a),a):(l=n,(a=Jt.get(r))&&(l=v({},n),wc(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ft(a),bt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,fu(l,n.precedence,e));return t.instance}function fu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,o=0;o<l.length;o++){var m=l[o];if(m.dataset.precedence===t)r=m;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var du=null;function wf(e,t,n){if(du===null){var l=new Map,a=du=new Map;a.set(n,l)}else a=du,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[oa]||r[_t]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var m=l.get(o);m?m.push(r):l.set(o,[r])}}return l}function Ef(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Gd(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Of(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Fa=null;function Ud(){}function jd(e,t,n){if(Fa===null)throw Error(i(475));var l=Fa;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=aa(n.href),r=e.querySelector(Ja(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=hu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,ft(r);return}r=e.ownerDocument||e,n=Mf(n),(a=Jt.get(a))&&Ac(n,a),r=r.createElement("link"),ft(r);var o=r;o._p=new Promise(function(m,C){o.onload=m,o.onerror=C}),bt(r,"link",n),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=hu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function kd(){if(Fa===null)throw Error(i(475));var e=Fa;return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function hu(){if(this.count--,this.count===0){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mu=null;function Ec(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mu=new Map,t.forEach(Yd,e),mu=null,hu.call(e))}function Yd(e,t){if(!(t.state.loading&4)){var n=mu.get(e);if(n)var l=n.get(null);else{n=new Map,mu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var o=a[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),r=n.get(o)||l,r===l&&n.set(null,a),n.set(o,a),this.count++,l=hu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ia={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Xd(e,t,n,l,a,r,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ua(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.hiddenUpdates=ua(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Vf(e,t,n,l,a,r,o,m,C,w,L,K){return e=new Xd(e,t,n,o,m,C,w,K),t=1,r===!0&&(t|=24),r=Bt(3,null,null,t),e.current=r,r.stateNode=e,t=di(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:n,cache:t},gi(r),e}function Hf(e){return e?(e=Gl,e):Gl}function Bf(e,t,n,l,a,r){a=Hf(a),l.context===null?l.context=a:l.pendingContext=a,l=Bn(t),l.payload={element:n},r=r===void 0?null:r,r!==null&&(l.callback=r),n=Gn(e,l,t),n!==null&&(Yt(n,e,t),Ma(n,e,t))}function Gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oc(e,t){Gf(e,t),(e=e.alternate)&&Gf(e,t)}function Uf(e){if(e.tag===13){var t=Bl(e,67108864);t!==null&&Yt(t,e,67108864),Oc(e,67108864)}}var pu=!0;function qd(e,t,n,l){var a=j.T;j.T=null;var r=W.p;try{W.p=2,Vc(e,t,n,l)}finally{W.p=r,j.T=a}}function Nd(e,t,n,l){var a=j.T;j.T=null;var r=W.p;try{W.p=8,Vc(e,t,n,l)}finally{W.p=r,j.T=a}}function Vc(e,t,n,l){if(pu){var a=Hc(l);if(a===null)bc(e,t,l,gu,n),kf(e,l);else if(Zd(a,e,t,n,l))l.stopPropagation();else if(kf(e,l),t&4&&-1<Ld.indexOf(e)){for(;a!==null;){var r=Cl(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Ee(r.pendingLanes);if(o!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var C=1<<31-et(o);m.entanglements[1]|=C,o&=~C}cn(r),(He&6)===0&&($r=st()+500,Za(0))}}break;case 13:m=Bl(r,2),m!==null&&Yt(m,r,2),tu(),Oc(r,2)}if(r=Hc(l),r===null&&bc(e,t,l,gu,n),r===a)break;a=r}a!==null&&l.stopPropagation()}else bc(e,t,l,null,n)}}function Hc(e){return e=ku(e),Bc(e)}var gu=null;function Bc(e){if(gu=null,e=Sl(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gu=e,null}function jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bl()){case Mn:return 2;case te:return 8;case I:case ve:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Gc=!1,Jn=null,Wn=null,Fn=null,$a=new Map,er=new Map,In=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kf(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":$a.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function tr(e,t,n,l,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Cl(t),t!==null&&Uf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Zd(e,t,n,l,a){switch(t){case"focusin":return Jn=tr(Jn,e,t,n,l,a),!0;case"dragenter":return Wn=tr(Wn,e,t,n,l,a),!0;case"mouseover":return Fn=tr(Fn,e,t,n,l,a),!0;case"pointerover":var r=a.pointerId;return $a.set(r,tr($a.get(r)||null,e,t,n,l,a)),!0;case"gotpointercapture":return r=a.pointerId,er.set(r,tr(er.get(r)||null,e,t,n,l,a)),!0}return!1}function Yf(e){var t=Sl(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,j2(e.priority,function(){if(n.tag===13){var l=kt();l=ia(l);var a=Bl(n,l);a!==null&&Yt(a,n,l),Oc(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ju=l,n.target.dispatchEvent(l),ju=null}else return t=Cl(n),t!==null&&Uf(t),e.blockedOn=n,!1;t.shift()}return!0}function Xf(e,t,n){yu(e)&&n.delete(t)}function Pd(){Gc=!1,Jn!==null&&yu(Jn)&&(Jn=null),Wn!==null&&yu(Wn)&&(Wn=null),Fn!==null&&yu(Fn)&&(Fn=null),$a.forEach(Xf),er.forEach(Xf)}function vu(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Pd)))}var xu=null;function qf(e){xu!==e&&(xu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Bc(l||n)===null)continue;break}var r=Cl(n);r!==null&&(e.splice(t,3),t-=3,Bi(r,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function nr(e){function t(C){return vu(C,e)}Jn!==null&&vu(Jn,e),Wn!==null&&vu(Wn,e),Fn!==null&&vu(Fn,e),$a.forEach(t),er.forEach(t);for(var n=0;n<In.length;n++){var l=In[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<In.length&&(n=In[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&In.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],r=n[l+1],o=a[zt]||null;if(typeof r=="function")o||qf(n);else if(o){var m=null;if(r&&r.hasAttribute("formAction")){if(a=r,o=r[zt]||null)m=o.formAction;else if(Bc(a)!==null)continue}else m=o.action;typeof m=="function"?n[l+1]=m:(n.splice(l,3),l-=3),qf(n)}}}function Uc(e){this._internalRoot=e}bu.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,l=kt();Bf(n,l,e,t,null,null)},bu.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bf(e.current,2,null,e,null,null),tu(),t[_l]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=lo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&Yf(e)}};var Nf=u.version;if(Nf!=="19.1.1")throw Error(i(527,Nf,"19.1.1"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Qd={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Qe=_u.inject(Qd),Re=_u}catch{}}return ar.createRoot=function(e,t){if(!d(e))throw Error(i(299));var n=!1,l="",a=as,r=rs,o=us,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Vf(e,1,!1,null,null,n,l,a,r,o,m,null),e[_l]=t.current,xc(e),new Uc(t)},ar.hydrateRoot=function(e,t,n){if(!d(e))throw Error(i(299));var l=!1,a="",r=as,o=rs,m=us,C=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=Vf(e,1,!0,t,n??null,l,a,r,o,m,C,w),t.context=Hf(null),n=t.current,l=kt(),l=ia(l),a=Bn(l),a.callback=null,Gn(n,a,l),n=l,t.current.lanes=n,tl(t,n),cn(t),e[_l]=t.current,xc(e),new bu(t)},ar.version="19.1.1",ar}var $f;function l3(){if($f)return Yc.exports;$f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Yc.exports=n3(),Yc.exports}var a3=l3();const r3=Tu(a3);async function u3(){if(window.__wgpuDevice)return window.__wgpuDevice;const s=window.__wgpuAdapter??await navigator.gpu?.requestAdapter({});if(!s)throw new Error("WebGPU adapter not available");window.__wgpuAdapter=s;const u=await s.requestDevice();return u.__id=Math.random().toString(36).slice(2),window.__wgpuDevice=u,u.lost.then(()=>{window.__wgpuDevice===u&&(window.__wgpuDevice=void 0,window.__wgpuAdapter=void 0)}),u}/**
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
 */class D{static NoiseType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2S:"OpenSimplex2S",Cellular:"Cellular",Perlin:"Perlin",ValueCubic:"ValueCubic",Value:"Value"});static RotationType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes"});static FractalType=Object.freeze({None:"None",FBm:"FBm",Ridged:"Ridged",PingPong:"PingPong",DomainWarpProgressive:"DomainWarpProgressive",DomainWarpIndependent:"DomainWarpIndependent"});static CellularDistanceFunction=Object.freeze({Euclidean:"Euclidean",EuclideanSq:"EuclideanSq",Manhattan:"Manhattan",Hybrid:"Hybrid"});static CellularReturnType=Object.freeze({CellValue:"CellValue",Distance:"Distance",Distance2:"Distance2",Distance2Add:"Distance2Add",Distance2Sub:"Distance2Sub",Distance2Mul:"Distance2Mul",Distance2Div:"Distance2Div"});static DomainWarpType=Object.freeze({OpenSimplex2:"OpenSimplex2",OpenSimplex2Reduced:"OpenSimplex2Reduced",BasicGrid:"BasicGrid"});static TransformType3D=Object.freeze({None:"None",ImproveXYPlanes:"ImproveXYPlanes",ImproveXZPlanes:"ImproveXZPlanes",DefaultOpenSimplex2:"DefaultOpenSimplex2"});_Seed=1337;_Frequency=.01;_NoiseType=D.NoiseType.OpenSimplex2;_RotationType3D=D.RotationType3D.None;_TransformType3D=D.TransformType3D.DefaultOpenSimplex2;_DomainWarpAmp=1;_FractalType=D.FractalType.None;_Octaves=3;_Lacunarity=2;_Gain=.5;_WeightedStrength=0;_PingPongStrength=2;_FractalBounding=1/1.75;_CellularDistanceFunction=D.CellularDistanceFunction.EuclideanSq;_CellularReturnType=D.CellularReturnType.Distance;_CellularJitterModifier=1;_DomainWarpType=D.DomainWarpType.OpenSimplex2;_WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;constructor(u){u!==void 0&&(this._Seed=u)}SetSeed(u){this._Seed=u}SetFrequency(u){this._Frequency=u}SetNoiseType(u){this._NoiseType=u,this._UpdateTransformType3D()}SetRotationType3D(u){this._RotationType3D=u,this._UpdateTransformType3D(),this._UpdateWarpTransformType3D()}SetFractalType(u){this._FractalType=u}SetFractalOctaves(u){this._Octaves=u,this._CalculateFractalBounding()}SetFractalLacunarity(u){this._Lacunarity=u}SetFractalGain(u){this._Gain=u,this._CalculateFractalBounding()}SetFractalWeightedStrength(u){this._WeightedStrength=u}SetFractalPingPongStrength(u){this._PingPongStrength=u}SetCellularDistanceFunction(u){this._CellularDistanceFunction=u}SetCellularReturnType(u){this._CellularReturnType=u}SetCellularJitter(u){this._CellularJitterModifier=u}SetDomainWarpType(u){this._DomainWarpType=u,this._UpdateWarpTransformType3D()}SetDomainWarpAmp(u){this._DomainWarpAmp=u}GetNoise(u,h,i){let d=(f,p)=>{switch(f*=this._Frequency,p*=this._Frequency,this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:const g=.5*(1.7320508075688772-1);let v=(f+p)*g;f+=v,p+=v;break}switch(this._FractalType){default:return this._GenNoiseSingleR2(this._Seed,f,p);case D.FractalType.FBm:return this._GenFractalFBmR2(f,p);case D.FractalType.Ridged:return this._GenFractalRidgedR2(f,p);case D.FractalType.PingPong:return this._GenFractalPingPongR2(f,p)}},c=(f,p,y)=>{switch(f*=this._Frequency,p*=this._Frequency,y*=this._Frequency,this._TransformType3D){case D.TransformType3D.ImproveXYPlanes:{let _=f+p,S=_*-.211324865405187;y*=.577350269189626,f+=S-y,p+=S-y,y+=_*.577350269189626;break}case D.TransformType3D.ImproveXZPlanes:{let _=f+y,S=_*-.211324865405187;p*=.577350269189626,f+=S-p,y+=S-p,p+=_*.577350269189626;break}case D.TransformType3D.DefaultOpenSimplex2:const g=2/3;let v=(f+p+y)*g;f=v-f,p=v-p,y=v-y;break}switch(this._FractalType){default:return this._GenNoiseSingleR3(this._Seed,f,p,y);case D.FractalType.FBm:return this._GenFractalFBmR3(f,p,y);case D.FractalType.Ridged:return this._GenFractalRidgedR3(f,p,y);case D.FractalType.PingPong:return this._GenFractalPingPongR3(f,p,y)}};if(arguments.length===2)return d(u,h);if(arguments.length===3)return c(u,h,i)}DomainWrap(u){switch(this._FractalType){default:this._DomainWarpSingle(u);break;case D.FractalType.DomainWarpProgressive:this._DomainWarpFractalProgressive(u);break;case D.FractalType.DomainWarpIndependent:this._DomainWarpFractalIndependent(u);break}}_Gradients2D=[.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.130526192220052,.99144486137381,.38268343236509,.923879532511287,.608761429008721,.793353340291235,.793353340291235,.608761429008721,.923879532511287,.38268343236509,.99144486137381,.130526192220051,.99144486137381,-.130526192220051,.923879532511287,-.38268343236509,.793353340291235,-.60876142900872,.608761429008721,-.793353340291235,.38268343236509,-.923879532511287,.130526192220052,-.99144486137381,-.130526192220052,-.99144486137381,-.38268343236509,-.923879532511287,-.608761429008721,-.793353340291235,-.793353340291235,-.608761429008721,-.923879532511287,-.38268343236509,-.99144486137381,-.130526192220052,-.99144486137381,.130526192220051,-.923879532511287,.38268343236509,-.793353340291235,.608761429008721,-.608761429008721,.793353340291235,-.38268343236509,.923879532511287,-.130526192220052,.99144486137381,.38268343236509,.923879532511287,.923879532511287,.38268343236509,.923879532511287,-.38268343236509,.38268343236509,-.923879532511287,-.38268343236509,-.923879532511287,-.923879532511287,-.38268343236509,-.923879532511287,.38268343236509,-.38268343236509,.923879532511287];_RandVecs2D=[-.2700222198,-.9628540911,.3863092627,-.9223693152,.04444859006,-.999011673,-.5992523158,-.8005602176,-.7819280288,.6233687174,.9464672271,.3227999196,-.6514146797,-.7587218957,.9378472289,.347048376,-.8497875957,-.5271252623,-.879042592,.4767432447,-.892300288,-.4514423508,-.379844434,-.9250503802,-.9951650832,.0982163789,.7724397808,-.6350880136,.7573283322,-.6530343002,-.9928004525,-.119780055,-.0532665713,.9985803285,.9754253726,-.2203300762,-.7665018163,.6422421394,.991636706,.1290606184,-.994696838,.1028503788,-.5379205513,-.84299554,.5022815471,-.8647041387,.4559821461,-.8899889226,-.8659131224,-.5001944266,.0879458407,-.9961252577,-.5051684983,.8630207346,.7753185226,-.6315704146,-.6921944612,.7217110418,-.5191659449,-.8546734591,.8978622882,-.4402764035,-.1706774107,.9853269617,-.9353430106,-.3537420705,-.9992404798,.03896746794,-.2882064021,-.9575683108,-.9663811329,.2571137995,-.8759714238,-.4823630009,-.8303123018,-.5572983775,.05110133755,-.9986934731,-.8558373281,-.5172450752,.09887025282,.9951003332,.9189016087,.3944867976,-.2439375892,-.9697909324,-.8121409387,-.5834613061,-.9910431363,.1335421355,.8492423985,-.5280031709,-.9717838994,-.2358729591,.9949457207,.1004142068,.6241065508,-.7813392434,.662910307,.7486988212,-.7197418176,.6942418282,-.8143370775,-.5803922158,.104521054,-.9945226741,-.1065926113,-.9943027784,.445799684,-.8951327509,.105547406,.9944142724,-.992790267,.1198644477,-.8334366408,.552615025,.9115561563,-.4111755999,.8285544909,-.5599084351,.7217097654,-.6921957921,.4940492677,-.8694339084,-.3652321272,-.9309164803,-.9696606758,.2444548501,.08925509731,-.996008799,.5354071276,-.8445941083,-.1053576186,.9944343981,-.9890284586,.1477251101,.004856104961,.9999882091,.9885598478,.1508291331,.9286129562,-.3710498316,-.5832393863,-.8123003252,.3015207509,.9534596146,-.9575110528,.2883965738,.9715802154,-.2367105511,.229981792,.9731949318,.955763816,-.2941352207,.740956116,.6715534485,-.9971513787,-.07542630764,.6905710663,-.7232645452,-.290713703,-.9568100872,.5912777791,-.8064679708,-.9454592212,-.325740481,.6664455681,.74555369,.6236134912,.7817328275,.9126993851,-.4086316587,-.8191762011,.5735419353,-.8812745759,-.4726046147,.9953313627,.09651672651,.9855650846,-.1692969699,-.8495980887,.5274306472,.6174853946,-.7865823463,.8508156371,.52546432,.9985032451,-.05469249926,.1971371563,-.9803759185,.6607855748,-.7505747292,-.03097494063,.9995201614,-.6731660801,.739491331,-.7195018362,-.6944905383,.9727511689,.2318515979,.9997059088,-.0242506907,.4421787429,-.8969269532,.9981350961,-.061043673,-.9173660799,-.3980445648,-.8150056635,-.5794529907,-.8789331304,.4769450202,.0158605829,.999874213,-.8095464474,.5870558317,-.9165898907,-.3998286786,-.8023542565,.5968480938,-.5176737917,.8555780767,-.8154407307,-.5788405779,.4022010347,-.9155513791,-.9052556868,-.4248672045,.7317445619,.6815789728,-.5647632201,-.8252529947,-.8403276335,-.5420788397,-.9314281527,.363925262,.5238198472,.8518290719,.7432803869,-.6689800195,-.985371561,-.1704197369,.4601468731,.88784281,.825855404,.5638819483,.6182366099,.7859920446,.8331502863,-.553046653,.1500307506,.9886813308,-.662330369,-.7492119075,-.668598664,.743623444,.7025606278,.7116238924,-.5419389763,-.8404178401,-.3388616456,.9408362159,.8331530315,.5530425174,-.2989720662,-.9542618632,.2638522993,.9645630949,.124108739,-.9922686234,-.7282649308,-.6852956957,.6962500149,.7177993569,-.9183535368,.3957610156,-.6326102274,-.7744703352,-.9331891859,-.359385508,-.1153779357,-.9933216659,.9514974788,-.3076565421,-.08987977445,-.9959526224,.6678496916,.7442961705,.7952400393,-.6062947138,-.6462007402,-.7631674805,-.2733598753,.9619118351,.9669590226,-.254931851,-.9792894595,.2024651934,-.5369502995,-.8436138784,-.270036471,-.9628500944,-.6400277131,.7683518247,-.7854537493,-.6189203566,.06005905383,-.9981948257,-.02455770378,.9996984141,-.65983623,.751409442,-.6253894466,-.7803127835,-.6210408851,-.7837781695,.8348888491,.5504185768,-.1592275245,.9872419133,.8367622488,.5475663786,-.8675753916,-.4973056806,-.2022662628,-.9793305667,.9399189937,.3413975472,.9877404807,-.1561049093,-.9034455656,.4287028224,.1269804218,-.9919052235,-.3819600854,.924178821,.9754625894,.2201652486,-.3204015856,-.9472818081,-.9874760884,.1577687387,.02535348474,-.9996785487,.4835130794,-.8753371362,-.2850799925,-.9585037287,-.06805516006,-.99768156,-.7885244045,-.6150034663,.3185392127,-.9479096845,.8880043089,.4598351306,.6476921488,-.7619021462,.9820241299,.1887554194,.9357275128,-.3527237187,-.8894895414,.4569555293,.7922791302,.6101588153,.7483818261,.6632681526,-.7288929755,-.6846276581,.8729032783,-.4878932944,.8288345784,.5594937369,.08074567077,.9967347374,.9799148216,-.1994165048,-.580730673,-.8140957471,-.4700049791,-.8826637636,.2409492979,.9705377045,.9437816757,-.3305694308,-.8927998638,-.4504535528,-.8069622304,.5906030467,.06258973166,.9980393407,-.9312597469,.3643559849,.5777449785,.8162173362,-.3360095855,-.941858566,.697932075,-.7161639607,-.002008157227,-.9999979837,-.1827294312,-.9831632392,-.6523911722,.7578824173,-.4302626911,-.9027037258,-.9985126289,-.05452091251,-.01028102172,-.9999471489,-.4946071129,.8691166802,-.2999350194,.9539596344,.8165471961,.5772786819,.2697460475,.962931498,-.7306287391,-.6827749597,-.7590952064,-.6509796216,-.907053853,.4210146171,-.5104861064,-.8598860013,.8613350597,.5080373165,.5007881595,-.8655698812,-.654158152,.7563577938,-.8382755311,-.545246856,.6940070834,.7199681717,.06950936031,.9975812994,.1702942185,-.9853932612,.2695973274,.9629731466,.5519612192,-.8338697815,.225657487,-.9742067022,.4215262855,-.9068161835,.4881873305,-.8727388672,-.3683854996,-.9296731273,-.9825390578,.1860564427,.81256471,.5828709909,.3196460933,-.9475370046,.9570913859,.2897862643,-.6876655497,-.7260276109,-.9988770922,-.047376731,-.1250179027,.992154486,-.8280133617,.560708367,.9324863769,-.3612051451,.6394653183,.7688199442,-.01623847064,-.9998681473,-.9955014666,-.09474613458,-.81453315,.580117012,.4037327978,-.9148769469,.9944263371,.1054336766,-.1624711654,.9867132919,-.9949487814,-.100383875,-.6995302564,.7146029809,.5263414922,-.85027327,-.5395221479,.841971408,.6579370318,.7530729462,.01426758847,-.9998982128,-.6734383991,.7392433447,.639412098,-.7688642071,.9211571421,.3891908523,-.146637214,-.9891903394,-.782318098,.6228791163,-.5039610839,-.8637263605,-.7743120191,-.6328039957];_Gradients3D=[0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,-1,0,-1,0,-1,0,1,1,0,0,-1,1,0,0,1,-1,0,0,-1,-1,0,0,1,1,0,0,0,-1,1,0,-1,1,0,0,0,-1,-1,0];_RandVecs3D=[-.7292736885,-.6618439697,.1735581948,0,.790292081,-.5480887466,-.2739291014,0,.7217578935,.6226212466,-.3023380997,0,.565683137,-.8208298145,-.0790000257,0,.760049034,-.5555979497,-.3370999617,0,.3713945616,.5011264475,.7816254623,0,-.1277062463,-.4254438999,-.8959289049,0,-.2881560924,-.5815838982,.7607405838,0,.5849561111,-.662820239,-.4674352136,0,.3307171178,.0391653737,.94291689,0,.8712121778,-.4113374369,-.2679381538,0,.580981015,.7021915846,.4115677815,0,.503756873,.6330056931,-.5878203852,0,.4493712205,.601390195,.6606022552,0,-.6878403724,.09018890807,-.7202371714,0,-.5958956522,-.6469350577,.475797649,0,-.5127052122,.1946921978,-.8361987284,0,-.9911507142,-.05410276466,-.1212153153,0,-.2149721042,.9720882117,-.09397607749,0,-.7518650936,-.5428057603,.3742469607,0,.5237068895,.8516377189,-.02107817834,0,.6333504779,.1926167129,-.7495104896,0,-.06788241606,.3998305789,.9140719259,0,-.5538628599,-.4729896695,-.6852128902,0,-.7261455366,-.5911990757,.3509933228,0,-.9229274737,-.1782808786,.3412049336,0,-.6968815002,.6511274338,.3006480328,0,.9608044783,-.2098363234,-.1811724921,0,.06817146062,-.9743405129,.2145069156,0,-.3577285196,-.6697087264,-.6507845481,0,-.1868621131,.7648617052,-.6164974636,0,-.6541697588,.3967914832,.6439087246,0,.6993340405,-.6164538506,.3618239211,0,-.1546665739,.6291283928,.7617583057,0,-.6841612949,-.2580482182,-.6821542638,0,.5383980957,.4258654885,.7271630328,0,-.5026987823,-.7939832935,-.3418836993,0,.3202971715,.2834415347,.9039195862,0,.8683227101,-.0003762656404,-.4959995258,0,.791120031,-.08511045745,.6057105799,0,-.04011016052,-.4397248749,.8972364289,0,.9145119872,.3579346169,-.1885487608,0,-.9612039066,-.2756484276,.01024666929,0,.6510361721,-.2877799159,-.7023778346,0,-.2041786351,.7365237271,.644859585,0,-.7718263711,.3790626912,.5104855816,0,-.3060082741,-.7692987727,.5608371729,0,.454007341,-.5024843065,.7357899537,0,.4816795475,.6021208291,-.6367380315,0,.6961980369,-.3222197429,.641469197,0,-.6532160499,-.6781148932,.3368515753,0,.5089301236,-.6154662304,-.6018234363,0,-.1635919754,-.9133604627,-.372840892,0,.52408019,-.8437664109,.1157505864,0,.5902587356,.4983817807,-.6349883666,0,.5863227872,.494764745,.6414307729,0,.6779335087,.2341345225,.6968408593,0,.7177054546,-.6858979348,.120178631,0,-.5328819713,-.5205125012,.6671608058,0,-.8654874251,-.0700727088,-.4960053754,0,-.2861810166,.7952089234,.5345495242,0,-.04849529634,.9810836427,-.1874115585,0,-.6358521667,.6058348682,.4781800233,0,.6254794696,-.2861619734,.7258696564,0,-.2585259868,.5061949264,-.8227581726,0,.02136306781,.5064016808,-.8620330371,0,.200111773,.8599263484,.4695550591,0,.4743561372,.6014985084,-.6427953014,0,.6622993731,-.5202474575,-.5391679918,0,.08084972818,-.6532720452,.7527940996,0,-.6893687501,.0592860349,.7219805347,0,-.1121887082,-.9673185067,.2273952515,0,.7344116094,.5979668656,-.3210532909,0,.5789393465,-.2488849713,.7764570201,0,.6988182827,.3557169806,-.6205791146,0,-.8636845529,-.2748771249,-.4224826141,0,-.4247027957,-.4640880967,.777335046,0,.5257722489,-.8427017621,.1158329937,0,.9343830603,.316302472,-.1639543925,0,-.1016836419,-.8057303073,-.5834887393,0,-.6529238969,.50602126,-.5635892736,0,-.2465286165,-.9668205684,-.06694497494,0,-.9776897119,-.2099250524,-.007368825344,0,.7736893337,.5734244712,.2694238123,0,-.6095087895,.4995678998,.6155736747,0,.5794535482,.7434546771,.3339292269,0,-.8226211154,.08142581855,.5627293636,0,-.510385483,.4703667658,.7199039967,0,-.5764971849,-.07231656274,-.8138926898,0,.7250628871,.3949971505,-.5641463116,0,-.1525424005,.4860840828,-.8604958341,0,-.5550976208,-.4957820792,.667882296,0,-.1883614327,.9145869398,.357841725,0,.7625556724,-.5414408243,-.3540489801,0,-.5870231946,-.3226498013,-.7424963803,0,.3051124198,.2262544068,-.9250488391,0,.6379576059,.577242424,-.5097070502,0,-.5966775796,.1454852398,-.7891830656,0,-.658330573,.6555487542,-.3699414651,0,.7434892426,.2351084581,.6260573129,0,.5562114096,.8264360377,-.0873632843,0,-.3028940016,-.8251527185,.4768419182,0,.1129343818,-.985888439,-.1235710781,0,.5937652891,-.5896813806,.5474656618,0,.6757964092,-.5835758614,-.4502648413,0,.7242302609,-.1152719764,.6798550586,0,-.9511914166,.0753623979,-.2992580792,0,.2539470961,-.1886339355,.9486454084,0,.571433621,-.1679450851,-.8032795685,0,-.06778234979,.3978269256,.9149531629,0,.6074972649,.733060024,-.3058922593,0,-.5435478392,.1675822484,.8224791405,0,-.5876678086,-.3380045064,-.7351186982,0,-.7967562402,.04097822706,-.6029098428,0,-.1996350917,.8706294745,.4496111079,0,-.02787660336,-.9106232682,-.4122962022,0,-.7797625996,-.6257634692,.01975775581,0,-.5211232846,.7401644346,-.4249554471,0,.8575424857,.4053272873,-.3167501783,0,.1045223322,.8390195772,-.5339674439,0,.3501822831,.9242524096,-.1520850155,0,.1987849858,.07647613266,.9770547224,0,.7845996363,.6066256811,-.1280964233,0,.09006737436,-.9750989929,-.2026569073,0,-.8274343547,-.542299559,.1458203587,0,-.3485797732,-.415802277,.840000362,0,-.2471778936,-.7304819962,-.6366310879,0,-.3700154943,.8577948156,.3567584454,0,.5913394901,-.548311967,-.5913303597,0,.1204873514,-.7626472379,-.6354935001,0,.616959265,.03079647928,.7863922953,0,.1258156836,-.6640829889,-.7369967419,0,-.6477565124,-.1740147258,-.7417077429,0,.6217889313,-.7804430448,-.06547655076,0,.6589943422,-.6096987708,.4404473475,0,-.2689837504,-.6732403169,-.6887635427,0,-.3849775103,.5676542638,.7277093879,0,.5754444408,.8110471154,-.1051963504,0,.9141593684,.3832947817,.131900567,0,-.107925319,.9245493968,.3654593525,0,.377977089,.3043148782,.8743716458,0,-.2142885215,-.8259286236,.5214617324,0,.5802544474,.4148098596,-.7008834116,0,-.1982660881,.8567161266,-.4761596756,0,-.03381553704,.3773180787,-.9254661404,0,-.6867922841,-.6656597827,.2919133642,0,.7731742607,-.2875793547,-.5652430251,0,-.09655941928,.9193708367,-.3813575004,0,.2715702457,-.9577909544,-.09426605581,0,.2451015704,-.6917998565,-.6792188003,0,.977700782,-.1753855374,.1155036542,0,-.5224739938,.8521606816,.02903615945,0,-.7734880599,-.5261292347,.3534179531,0,-.7134492443,-.269547243,.6467878011,0,.1644037271,.5105846203,-.8439637196,0,.6494635788,.05585611296,.7583384168,0,-.4711970882,.5017280509,-.7254255765,0,-.6335764307,-.2381686273,-.7361091029,0,-.9021533097,-.270947803,-.3357181763,0,-.3793711033,.872258117,.3086152025,0,-.6855598966,-.3250143309,.6514394162,0,.2900942212,-.7799057743,-.5546100667,0,-.2098319339,.85037073,.4825351604,0,-.4592603758,.6598504336,-.5947077538,0,.8715945488,.09616365406,-.4807031248,0,-.6776666319,.7118504878,-.1844907016,0,.7044377633,.312427597,.637304036,0,-.7052318886,-.2401093292,-.6670798253,0,.081921007,-.7207336136,-.6883545647,0,-.6993680906,-.5875763221,-.4069869034,0,-.1281454481,.6419895885,.7559286424,0,-.6337388239,-.6785471501,-.3714146849,0,.5565051903,-.2168887573,-.8020356851,0,-.5791554484,.7244372011,-.3738578718,0,.1175779076,-.7096451073,.6946792478,0,-.6134619607,.1323631078,.7785527795,0,.6984635305,-.02980516237,-.715024719,0,.8318082963,-.3930171956,.3919597455,0,.1469576422,.05541651717,-.9875892167,0,.708868575,-.2690503865,.6520101478,0,.2726053183,.67369766,-.68688995,0,-.6591295371,.3035458599,-.6880466294,0,.4815131379,-.7528270071,.4487723203,0,.9430009463,.1675647412,-.2875261255,0,.434802957,.7695304522,-.4677277752,0,.3931996188,.594473625,.7014236729,0,.7254336655,-.603925654,.3301814672,0,.7590235227,-.6506083235,.02433313207,0,-.8552768592,-.3430042733,.3883935666,0,-.6139746835,.6981725247,.3682257648,0,-.7465905486,-.5752009504,.3342849376,0,.5730065677,.810555537,-.1210916791,0,-.9225877367,-.3475211012,-.167514036,0,-.7105816789,-.4719692027,-.5218416899,0,-.08564609717,.3583001386,.929669703,0,-.8279697606,-.2043157126,.5222271202,0,.427944023,.278165994,.8599346446,0,.5399079671,-.7857120652,-.3019204161,0,.5678404253,-.5495413974,-.6128307303,0,-.9896071041,.1365639107,-.04503418428,0,-.6154342638,-.6440875597,.4543037336,0,.1074204368,-.7946340692,.5975094525,0,-.3595449969,-.8885529948,.28495784,0,-.2180405296,.1529888965,.9638738118,0,-.7277432317,-.6164050508,-.3007234646,0,.7249729114,-.00669719484,.6887448187,0,-.5553659455,-.5336586252,.6377908264,0,.5137558015,.7976208196,-.3160000073,0,-.3794024848,.9245608561,-.03522751494,0,.8229248658,.2745365933,-.4974176556,0,-.5404114394,.6091141441,.5804613989,0,.8036581901,-.2703029469,.5301601931,0,.6044318879,.6832968393,.4095943388,0,.06389988817,.9658208605,-.2512108074,0,.1087113286,.7402471173,-.6634877936,0,-.713427712,-.6926784018,.1059128479,0,.6458897819,-.5724548511,-.5050958653,0,-.6553931414,.7381471625,.159995615,0,.3910961323,.9188871375,-.05186755998,0,-.4879022471,-.5904376907,.6429111375,0,.6014790094,.7707441366,-.2101820095,0,-.5677173047,.7511360995,.3368851762,0,.7858573506,.226674665,.5753666838,0,-.4520345543,-.604222686,-.6561857263,0,.002272116345,.4132844051,-.9105991643,0,-.5815751419,-.5162925989,.6286591339,0,-.03703704785,.8273785755,.5604221175,0,-.5119692504,.7953543429,-.3244980058,0,-.2682417366,-.9572290247,-.1084387619,0,-.2322482736,-.9679131102,-.09594243324,0,.3554328906,-.8881505545,.2913006227,0,.7346520519,-.4371373164,.5188422971,0,.9985120116,.04659011161,-.02833944577,0,-.3727687496,-.9082481361,.1900757285,0,.91737377,-.3483642108,.1925298489,0,.2714911074,.4147529736,-.8684886582,0,.5131763485,-.7116334161,.4798207128,0,-.8737353606,.18886992,-.4482350644,0,.8460043821,-.3725217914,.3814499973,0,.8978727456,-.1780209141,-.4026575304,0,.2178065647,-.9698322841,-.1094789531,0,-.1518031304,-.7788918132,-.6085091231,0,-.2600384876,-.4755398075,-.8403819825,0,.572313509,-.7474340931,-.3373418503,0,-.7174141009,.1699017182,-.6756111411,0,-.684180784,.02145707593,-.7289967412,0,-.2007447902,.06555605789,-.9774476623,0,-.1148803697,-.8044887315,.5827524187,0,-.7870349638,.03447489231,.6159443543,0,-.2015596421,.6859872284,.6991389226,0,-.08581082512,-.10920836,-.9903080513,0,.5532693395,.7325250401,-.396610771,0,-.1842489331,-.9777375055,-.1004076743,0,.0775473789,-.9111505856,.4047110257,0,.1399838409,.7601631212,-.6344734459,0,.4484419361,-.845289248,.2904925424,0];_PrimeX=501125321;_PrimeY=1136930381;_PrimeZ=1720413743;static _Lerp(u,h,i){return u+i*(h-u)}static _InterpHermite(u){return u*u*(3-2*u)}static _InterpQuintic(u){return u*u*u*(u*(u*6-15)+10)}static _CubicLerp(u,h,i,d,c){let f=d-i-(u-h);return c*c*c*f+c*c*(u-h-f)+c*(i-u)+h}static _PingPong(u){return u-=Math.trunc(u*.5)*2,u<1?u:2-u}_CalculateFractalBounding(){let u=Math.abs(this._Gain),h=u,i=1;for(let d=1;d<this._Octaves;d++)i+=h,h*=u;this._FractalBounding=1/i}_HashR2(u,h,i){let d=u^h^i;return d=Math.imul(d,668265261),d}_HashR3(u,h,i,d){let c=u^h^i^d;return c=Math.imul(c,668265261),c}_ValCoordR2(u,h,i){let d=this._HashR2(u,h,i);return d=Math.imul(d,d),d^=d<<19,d*(1/2147483648)}_ValCoordR3(u,h,i,d){let c=this._HashR3(u,h,i,d);return c=Math.imul(c,c),c^=c<<19,c*(1/2147483648)}_GradCoordR2(u,h,i,d,c){let f=this._HashR2(u,h,i);f^=f>>15,f&=254;let p=this._Gradients2D[f],y=this._Gradients2D[f|1];return d*p+c*y}_GradCoordR3(u,h,i,d,c,f,p){let y=this._HashR3(u,h,i,d);y^=y>>15,y&=252;let g=this._Gradients3D[y],v=this._Gradients3D[y|1],_=this._Gradients3D[y|2];return c*g+f*v+p*_}_GenNoiseSingleR2(u,h,i){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R2(u,h,i);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR2(u,h,i);case D.NoiseType.Cellular:return this._SingleCellularR2(u,h,i);case D.NoiseType.Perlin:return this._SinglePerlinR2(u,h,i);case D.NoiseType.ValueCubic:return this._SingleValueCubicR2(u,h,i);case D.NoiseType.Value:return this._SingleValueR2(u,h,i);default:return 0}}_GenNoiseSingleR3(u,h,i,d){switch(this._NoiseType){case D.NoiseType.OpenSimplex2:return this._SingleOpenSimplex2R3(u,h,i,d);case D.NoiseType.OpenSimplex2S:return this._SingleOpenSimplex2SR3(u,h,i,d);case D.NoiseType.Cellular:return this._SingleCellularR3(u,h,i,d);case D.NoiseType.Perlin:return this._SinglePerlinR3(u,h,i,d);case D.NoiseType.ValueCubic:return this._SingleValueCubicR3(u,h,i,d);case D.NoiseType.Value:return this._SingleValueR3(u,h,i,d);default:return 0}}_UpdateTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._TransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._TransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._NoiseType){case D.NoiseType.OpenSimplex2:case D.NoiseType.OpenSimplex2S:this._TransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._TransformType3D=D.TransformType3D.None;break}break}}_UpdateWarpTransformType3D(){switch(this._RotationType3D){case D.RotationType3D.ImproveXYPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXYPlanes;break;case D.RotationType3D.ImproveXZPlanes:this._WarpTransformType3D=D.TransformType3D.ImproveXZPlanes;break;default:switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:this._WarpTransformType3D=D.TransformType3D.DefaultOpenSimplex2;break;default:this._WarpTransformType3D=D.TransformType3D.None;break}break}}_GenFractalFBmR2(u,h){let i=this._Seed,d=0,c=this._FractalBounding;for(let f=0;f<this._Octaves;f++){let p=this._GenNoiseSingleR2(i++,u,h);d+=p*c,c*=D._Lerp(1,Math.min(p+1,2)*.5,this._WeightedStrength),u*=this._Lacunarity,h*=this._Lacunarity,c*=this._Gain}return d}_GenFractalFBmR3(u,h,i){let d=this._Seed,c=0,f=this._FractalBounding;for(let p=0;p<this._Octaves;p++){let y=this._GenNoiseSingleR3(d++,u,h,i);c+=y*f,f*=D._Lerp(1,(y+1)*.5,this._WeightedStrength),u*=this._Lacunarity,h*=this._Lacunarity,i*=this._Lacunarity,f*=this._Gain}return c}_GenFractalRidgedR2(u,h){let i=this._Seed,d=0,c=this._FractalBounding;for(let f=0;f<this._Octaves;f++){let p=Math.abs(this._GenNoiseSingleR2(i++,u,h));d+=(p*-2+1)*c,c*=D._Lerp(1,1-p,this._WeightedStrength),u*=this._Lacunarity,h*=this._Lacunarity,c*=this._Gain}return d}_GenFractalRidgedR3(u,h,i){let d=this._Seed,c=0,f=this._FractalBounding;for(let p=0;p<this._Octaves;p++){let y=Math.abs(this._GenNoiseSingleR3(d++,u,h,i));c+=(y*-2+1)*f,f*=D._Lerp(1,1-y,this._WeightedStrength),u*=this._Lacunarity,h*=this._Lacunarity,i*=this._Lacunarity,f*=this._Gain}return c}_GenFractalPingPongR2(u,h){let i=this._Seed,d=0,c=this._FractalBounding;for(let f=0;f<this._Octaves;f++){let p=D._PingPong((this._GenNoiseSingleR2(i++,u,h)+1)*this._PingPongStrength);d+=(p-.5)*2*c,c*=D._Lerp(1,p,this._WeightedStrength),u*=this._Lacunarity,h*=this._Lacunarity,c*=this._Gain}return d}_GenFractalPingPongR3(u,h,i){let d=this._Seed,c=0,f=this._FractalBounding;for(let p=0;p<this._Octaves;p++){let y=D._PingPong((this._GenNoiseSingleR3(d++,u,h,i)+1)*this._PingPongStrength);c+=(y-.5)*2*f,f*=D._Lerp(1,y,this._WeightedStrength),u*=this._Lacunarity,h*=this._Lacunarity,i*=this._Lacunarity,f*=this._Gain}return c}_SingleOpenSimplex2R2(u,h,i){const c=(3-1.7320508075688772)/6;let f=Math.floor(h),p=Math.floor(i),y=h-f,g=i-p,v=(y+g)*c,_=y-v,S=g-v;f=Math.imul(f,this._PrimeX),p=Math.imul(p,this._PrimeY);let T,A,k,E=.5-_*_-S*S;E<=0?T=0:T=E*E*(E*E)*this._GradCoordR2(u,f,p,_,S);let q=2*(1-2*c)*(1/c-2)*v+(-2*(1-2*c)*(1-2*c)+E);if(q<=0)k=0;else{let O=_+(2*c-1),Y=S+(2*c-1);k=q*q*(q*q)*this._GradCoordR2(u,f+this._PrimeX,p+this._PrimeY,O,Y)}if(S>_){let O=_+c,Y=S+(c-1),Q=.5-O*O-Y*Y;Q<=0?A=0:A=Q*Q*(Q*Q)*this._GradCoordR2(u,f,p+this._PrimeY,O,Y)}else{let O=_+(c-1),Y=S+c,Q=.5-O*O-Y*Y;Q<=0?A=0:A=Q*Q*(Q*Q)*this._GradCoordR2(u,f+this._PrimeX,p,O,Y)}return(T+A+k)*99.83685446303647}_SingleOpenSimplex2R3(u,h,i,d){let c=Math.round(h),f=Math.round(i),p=Math.round(d),y=h-c,g=i-f,v=d-p,_=Math.trunc(-1-g|1),S=Math.trunc(-1-y|1),T=Math.trunc(-1-v|1),A=S*-y,k=_*-g,E=T*-v;c=Math.imul(c,this._PrimeX),f=Math.imul(f,this._PrimeY),p=Math.imul(p,this._PrimeZ);let q=0,O=.6-y*y-(g*g+v*v);for(let Y=0;;Y++){if(O>0&&(q+=O*O*(O*O)*this._GradCoordR3(u,c,f,p,y,g,v)),A>=k&&A>=E){let Q=O+A+A;Q>1&&(Q-=1,q+=Q*Q*(Q*Q)*this._GradCoordR3(u,c-S*this._PrimeX,f,p,y+S,g,v))}else if(k>A&&k>=E){let Q=O+k+k;Q>1&&(Q-=1,q+=Q*Q*(Q*Q)*this._GradCoordR3(u,c,f-_*this._PrimeY,p,y,g+_,v))}else{let Q=O+E+E;Q>1&&(Q-=1,q+=Q*Q*(Q*Q)*this._GradCoordR3(u,c,f,p-T*this._PrimeZ,y,g,v+T))}if(Y===1)break;A=.5-A,k=.5-k,E=.5-E,y=S*A,g=_*k,v=T*E,O+=.75-A-(k+E),c+=S>>1&this._PrimeX,f+=_>>1&this._PrimeY,p+=T>>1&this._PrimeZ,S=-S,_=-_,T=-T,u=~u}return q*32.69428253173828}_SingleOpenSimplex2SR2(u,h,i){const c=(3-1.7320508075688772)/6;let f=Math.floor(h),p=Math.floor(i),y=h-f,g=i-p;f=Math.imul(f,this._PrimeX),p=Math.imul(p,this._PrimeY);let v=f+this._PrimeX,_=p+this._PrimeY,S=(y+g)*c,T=y-S,A=g-S,k=2/3-T*T-A*A,E=k*k*(k*k)*this._GradCoordR2(u,f,p,T,A),q=2*(1-2*c)*(1/c-2)*S+(-2*(1-2*c)*(1-2*c)+k),O=T-(1-2*c),Y=A-(1-2*c);E+=q*q*(q*q)*this._GradCoordR2(u,v,_,O,Y);let Q=y-g;if(S>c){if(y+Q>1){let G=T+(3*c-2),U=A+(3*c-1),X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f+(this._PrimeX<<1),p+this._PrimeY,G,U))}else{let G=T+c,U=A+(c-1),X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f,p+this._PrimeY,G,U))}if(g-Q>1){let G=T+(3*c-1),U=A+(3*c-2),X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f+this._PrimeX,p+(this._PrimeY<<1),G,U))}else{let G=T+(c-1),U=A+c,X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f+this._PrimeX,p,G,U))}}else{if(y+Q<0){let G=T+(1-c),U=A-c,X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f-this._PrimeX,p,G,U))}else{let G=T+(c-1),U=A+c,X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f+this._PrimeX,p,G,U))}if(g<Q){let G=T-c,U=A-(c-1),X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f,p-this._PrimeY,G,U))}else{let G=T+c,U=A+(c-1),X=2/3-G*G-U*U;X>0&&(E+=X*X*(X*X)*this._GradCoordR2(u,f,p+this._PrimeY,G,U))}}return E*18.24196194486065}_SingleOpenSimplex2SR3(u,h,i,d){let c=Math.floor(h),f=Math.floor(i),p=Math.floor(d),y=h-c,g=i-f,v=d-p;c=Math.imul(c,this._PrimeX),f=Math.imul(f,this._PrimeY),p=Math.imul(p,this._PrimeZ);let _=u+1293373,S=Math.trunc(-.5-y),T=Math.trunc(-.5-g),A=Math.trunc(-.5-v),k=y+S,E=g+T,q=v+A,O=.75-k*k-E*E-q*q,Y=O*O*(O*O)*this._GradCoordR3(u,c+(S&this._PrimeX),f+(T&this._PrimeY),p+(A&this._PrimeZ),k,E,q),Q=y-.5,G=g-.5,U=v-.5,X=.75-Q*Q-G*G-U*U;Y+=X*X*(X*X)*this._GradCoordR3(_,c+this._PrimeX,f+this._PrimeY,p+this._PrimeZ,Q,G,U);let ie=((S|1)<<1)*Q,ae=((T|1)<<1)*G,ye=((A|1)<<1)*U,be=(-2-(S<<2))*Q-1,ce=(-2-(T<<2))*G-1,xe=(-2-(A<<2))*U-1,Me=!1,me=ie+O;if(me>0){let x=k-(S|1);Y+=me*me*(me*me)*this._GradCoordR3(u,c+(~S&this._PrimeX),f+(T&this._PrimeY),p+(A&this._PrimeZ),x,E,q)}else{let x=ae+ye+O;if(x>0){let J=k,N=E-(T|1),F=q-(A|1);Y+=x*x*(x*x)*this._GradCoordR3(u,c+(S&this._PrimeX),f+(~T&this._PrimeY),p+(~A&this._PrimeZ),J,N,F)}let H=be+X;if(H>0){let J=(S|1)+Q;Y+=H*H*(H*H)*this._GradCoordR3(_,c+(S&this._PrimeX*2),f+this._PrimeY,p+this._PrimeZ,J,G,U),Me=!0}}let j=!1,W=ae+O;if(W>0){let x=k,H=E-(T|1);Y+=W*W*(W*W)*this._GradCoordR3(u,c+(S&this._PrimeX),f+(~T&this._PrimeY),p+(A&this._PrimeZ),x,H,q)}else{let x=ie+ye+O;if(x>0){let J=k-(S|1),N=E,F=q-(A|1);Y+=x*x*(x*x)*this._GradCoordR3(u,c+(~S&this._PrimeX),f+(T&this._PrimeY),p+(~A&this._PrimeZ),J,N,F)}let H=ce+X;if(H>0){let J=Q,N=(T|1)+G;Y+=H*H*(H*H)*this._GradCoordR3(_,c+this._PrimeX,f+(T&this._PrimeY<<1),p+this._PrimeZ,J,N,U),j=!0}}let ee=!1,se=ye+O;if(se>0){let x=k,H=E,J=q-(A|1);Y+=se*se*(se*se)*this._GradCoordR3(u,c+(S&this._PrimeX),f+(T&this._PrimeY),p+(~A&this._PrimeZ),x,H,J)}else{let x=ie+ae+O;if(x>0){let J=k-(S|1),N=E-(T|1);Y+=x*x*(x*x)*this._GradCoordR3(u,c+(~S&this._PrimeX),f+(~T&this._PrimeY),p+(A&this._PrimeZ),J,N,q)}let H=xe+X;if(H>0){let J=Q,N=G,F=(A|1)+U;Y+=H*H*(H*H)*this._GradCoordR3(_,c+this._PrimeX,f+this._PrimeY,p+(A&this._PrimeZ<<1),J,N,F),ee=!0}}if(!Me){let x=ce+xe+X;if(x>0){let H=Q,J=(T|1)+G,N=(A|1)+U;Y+=x*x*(x*x)*this._GradCoordR3(_,c+this._PrimeX,f+(T&this._PrimeY<<1),p+(A&this._PrimeZ<<1),H,J,N)}}if(!j){let x=be+xe+X;if(x>0){let H=(S|1)+Q,J=G,N=(A|1)+U;Y+=x*x*(x*x)*this._GradCoordR3(_,c+(S&this._PrimeX*2),f+this._PrimeY,p+(A&this._PrimeZ<<1),H,J,N)}}if(!ee){let x=be+ce+X;if(x>0){let H=(S|1)+Q,J=(T|1)+G;Y+=x*x*(x*x)*this._GradCoordR3(_,c+(S&this._PrimeX<<1),f+(T&this._PrimeY<<1),p+this._PrimeZ,H,J,U)}}return Y*9.046026385208288}_SingleCellularR2(u,h,i){let d=Math.round(h),c=Math.round(i),f=Number.MAX_VALUE,p=Number.MAX_VALUE,y=0,g=.43701595*this._CellularJitterModifier,v=(d-1)*this._PrimeX,_=(c-1)*this._PrimeY;switch(this._CellularDistanceFunction){default:case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let S=d-1;S<=d+1;S++){let T=_;for(let A=c-1;A<=c+1;A++){let k=this._HashR2(u,v,T),E=k&510,q=S-h+this._RandVecs2D[E]*g,O=A-i+this._RandVecs2D[E|1]*g,Y=q*q+O*O;p=Math.max(Math.min(p,Y),f),Y<f&&(f=Y,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let S=d-1;S<=d+1;S++){let T=_;for(let A=c-1;A<=c+1;A++){let k=this._HashR2(u,v,T),E=k&510,q=S-h+this._RandVecs2D[E]*g,O=A-i+this._RandVecs2D[E|1]*g,Y=Math.abs(q)+Math.abs(O);p=Math.max(Math.min(p,Y),f),Y<f&&(f=Y,y=k),T+=this._PrimeY}v+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let S=d-1;S<=d+1;S++){let T=_;for(let A=c-1;A<=c+1;A++){let k=this._HashR2(u,v,T),E=k&510,q=S-h+this._RandVecs2D[E]*g,O=A-i+this._RandVecs2D[E|1]*g,Y=Math.abs(q)+Math.abs(O)+(q*q+O*O);p=Math.max(Math.min(p,Y),f),Y<f&&(f=Y,y=k),T+=this._PrimeY}v+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(f=Math.sqrt(f),this._CellularReturnType!==D.CellularReturnType.CellValue&&(p=Math.sqrt(p))),this._CellularReturnType){case D.CellularReturnType.CellValue:return y*(1/2147483648);case D.CellularReturnType.Distance:return f-1;case D.CellularReturnType.Distance2:return p-1;case D.CellularReturnType.Distance2Add:return(p+f)*.5-1;case D.CellularReturnType.Distance2Sub:return p-f-1;case D.CellularReturnType.Distance2Mul:return p*f*.5-1;case D.CellularReturnType.Distance2Div:return f/p-1;default:return 0}}_SingleCellularR3(u,h,i,d){let c=Math.round(h),f=Math.round(i),p=Math.round(d),y=Number.MAX_VALUE,g=Number.MAX_VALUE,v=0,_=.39614353*this._CellularJitterModifier,S=(c-1)*this._PrimeX,T=(f-1)*this._PrimeY,A=(p-1)*this._PrimeZ;switch(this._CellularDistanceFunction){case D.CellularDistanceFunction.Euclidean:case D.CellularDistanceFunction.EuclideanSq:for(let k=c-1;k<=c+1;k++){let E=T;for(let q=f-1;q<=f+1;q++){let O=A;for(let Y=p-1;Y<=p+1;Y++){let Q=this._HashR3(u,S,E,O),G=Q&1020,U=k-h+this._RandVecs3D[G]*_,X=q-i+this._RandVecs3D[G|1]*_,ie=Y-d+this._RandVecs3D[G|2]*_,ae=U*U+X*X+ie*ie;g=Math.max(Math.min(g,ae),y),ae<y&&(y=ae,v=Q),O+=this._PrimeZ}E+=this._PrimeY}S+=this._PrimeX}break;case D.CellularDistanceFunction.Manhattan:for(let k=c-1;k<=c+1;k++){let E=T;for(let q=f-1;q<=f+1;q++){let O=A;for(let Y=p-1;Y<=p+1;Y++){let Q=this._HashR3(u,S,E,O),G=Q&1020,U=k-h+this._RandVecs3D[G]*_,X=q-i+this._RandVecs3D[G|1]*_,ie=Y-d+this._RandVecs3D[G|2]*_,ae=Math.abs(U)+Math.abs(X)+Math.abs(ie);g=Math.max(Math.min(g,ae),y),ae<y&&(y=ae,v=Q),O+=this._PrimeZ}E+=this._PrimeY}S+=this._PrimeX}break;case D.CellularDistanceFunction.Hybrid:for(let k=c-1;k<=c+1;k++){let E=T;for(let q=f-1;q<=f+1;q++){let O=A;for(let Y=p-1;Y<=p+1;Y++){let Q=this._HashR3(u,S,E,O),G=Q&1020,U=k-h+this._RandVecs3D[G]*_,X=q-i+this._RandVecs3D[G|1]*_,ie=Y-d+this._RandVecs3D[G|2]*_,ae=Math.abs(U)+Math.abs(X)+Math.abs(ie)+(U*U+X*X+ie*ie);g=Math.max(Math.min(g,ae),y),ae<y&&(y=ae,v=Q),O+=this._PrimeZ}E+=this._PrimeY}S+=this._PrimeX}break}switch(this._CellularDistanceFunction===D.CellularDistanceFunction.Euclidean&&this._CellularReturnType!==D.CellularReturnType.CellValue&&(y=Math.sqrt(y),this._CellularReturnType!==D.CellularReturnType.CellValue&&(g=Math.sqrt(g))),this._CellularReturnType){case D.CellularReturnType.CellValue:return v*(1/2147483648);case D.CellularReturnType.Distance:return y-1;case D.CellularReturnType.Distance2:return g-1;case D.CellularReturnType.Distance2Add:return(g+y)*.5-1;case D.CellularReturnType.Distance2Sub:return g-y-1;case D.CellularReturnType.Distance2Mul:return g*y*.5-1;case D.CellularReturnType.Distance2Div:return y/g-1;default:return 0}}_SinglePerlinR2(u,h,i){let d=Math.floor(h),c=Math.floor(i),f=h-d,p=i-c,y=f-1,g=p-1,v=D._InterpQuintic(f),_=D._InterpQuintic(p);d=Math.imul(d,this._PrimeX),c=Math.imul(c,this._PrimeY);let S=d+this._PrimeX,T=c+this._PrimeY,A=D._Lerp(this._GradCoordR2(u,d,c,f,p),this._GradCoordR2(u,S,c,y,p),v),k=D._Lerp(this._GradCoordR2(u,d,T,f,g),this._GradCoordR2(u,S,T,y,g),v);return D._Lerp(A,k,_)*1.4247691104677813}_SinglePerlinR3(u,h,i,d){let c=Math.floor(h),f=Math.floor(i),p=Math.floor(d),y=h-c,g=i-f,v=d-p,_=y-1,S=g-1,T=v-1,A=D._InterpQuintic(y),k=D._InterpQuintic(g),E=D._InterpQuintic(v);c=Math.imul(c,this._PrimeX),f=Math.imul(f,this._PrimeY),p=Math.imul(p,this._PrimeZ);let q=c+this._PrimeX,O=f+this._PrimeY,Y=p+this._PrimeZ,Q=D._Lerp(this._GradCoordR3(u,c,f,p,y,g,v),this._GradCoordR3(u,q,f,p,_,g,v),A),G=D._Lerp(this._GradCoordR3(u,c,O,p,y,S,v),this._GradCoordR3(u,q,O,p,_,S,v),A),U=D._Lerp(this._GradCoordR3(u,c,f,Y,y,g,T),this._GradCoordR3(u,q,f,Y,_,g,T),A),X=D._Lerp(this._GradCoordR3(u,c,O,Y,y,S,T),this._GradCoordR3(u,q,O,Y,_,S,T),A),ie=D._Lerp(Q,G,k),ae=D._Lerp(U,X,k);return D._Lerp(ie,ae,E)*.9649214148521423}_SingleValueCubicR2(u,h,i){let d=Math.floor(h),c=Math.floor(i),f=h-d,p=i-c;d=Math.imul(d,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=d-this._PrimeX,g=c-this._PrimeY,v=d+this._PrimeX,_=c+this._PrimeY,S=d+(this._PrimeX<<1),T=c+(this._PrimeY<<1);return D._CubicLerp(D._CubicLerp(this._ValCoordR2(u,y,g),this._ValCoordR2(u,d,g),this._ValCoordR2(u,v,g),this._ValCoordR2(u,S,g),f),D._CubicLerp(this._ValCoordR2(u,y,c),this._ValCoordR2(u,d,c),this._ValCoordR2(u,v,c),this._ValCoordR2(u,S,c),f),D._CubicLerp(this._ValCoordR2(u,y,_),this._ValCoordR2(u,d,_),this._ValCoordR2(u,v,_),this._ValCoordR2(u,S,_),f),D._CubicLerp(this._ValCoordR2(u,y,T),this._ValCoordR2(u,d,T),this._ValCoordR2(u,v,T),this._ValCoordR2(u,S,T),f),p)*(1/(1.5*1.5))}_SingleValueCubicR3(u,h,i,d){let c=Math.floor(h),f=Math.floor(i),p=Math.floor(d),y=h-c,g=i-f,v=d-p;c=Math.imul(c,this._PrimeX),f=Math.imul(f,this._PrimeY),p=Math.imul(p,this._PrimeZ);let _=c-this._PrimeX,S=f-this._PrimeY,T=p-this._PrimeZ,A=c+this._PrimeX,k=f+this._PrimeY,E=p+this._PrimeZ,q=c+(this._PrimeX<<1),O=f+(this._PrimeY<<1),Y=p+(this._PrimeZ<<1);return D._CubicLerp(D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,T),this._ValCoordR3(u,c,S,T),this._ValCoordR3(u,A,S,T),this._ValCoordR3(u,q,S,T),y),D._CubicLerp(this._ValCoordR3(u,_,f,T),this._ValCoordR3(u,c,f,T),this._ValCoordR3(u,A,f,T),this._ValCoordR3(u,q,f,T),y),D._CubicLerp(this._ValCoordR3(u,_,k,T),this._ValCoordR3(u,c,k,T),this._ValCoordR3(u,A,k,T),this._ValCoordR3(u,q,k,T),y),D._CubicLerp(this._ValCoordR3(u,_,O,T),this._ValCoordR3(u,c,O,T),this._ValCoordR3(u,A,O,T),this._ValCoordR3(u,q,O,T),y),g),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,p),this._ValCoordR3(u,c,S,p),this._ValCoordR3(u,A,S,p),this._ValCoordR3(u,q,S,p),y),D._CubicLerp(this._ValCoordR3(u,_,f,p),this._ValCoordR3(u,c,f,p),this._ValCoordR3(u,A,f,p),this._ValCoordR3(u,q,f,p),y),D._CubicLerp(this._ValCoordR3(u,_,k,p),this._ValCoordR3(u,c,k,p),this._ValCoordR3(u,A,k,p),this._ValCoordR3(u,q,k,p),y),D._CubicLerp(this._ValCoordR3(u,_,O,p),this._ValCoordR3(u,c,O,p),this._ValCoordR3(u,A,O,p),this._ValCoordR3(u,q,O,p),y),g),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,E),this._ValCoordR3(u,c,S,E),this._ValCoordR3(u,A,S,E),this._ValCoordR3(u,q,S,E),y),D._CubicLerp(this._ValCoordR3(u,_,f,E),this._ValCoordR3(u,c,f,E),this._ValCoordR3(u,A,f,E),this._ValCoordR3(u,q,f,E),y),D._CubicLerp(this._ValCoordR3(u,_,k,E),this._ValCoordR3(u,c,k,E),this._ValCoordR3(u,A,k,E),this._ValCoordR3(u,q,k,E),y),D._CubicLerp(this._ValCoordR3(u,_,O,E),this._ValCoordR3(u,c,O,E),this._ValCoordR3(u,A,O,E),this._ValCoordR3(u,q,O,E),y),g),D._CubicLerp(D._CubicLerp(this._ValCoordR3(u,_,S,Y),this._ValCoordR3(u,c,S,Y),this._ValCoordR3(u,A,S,Y),this._ValCoordR3(u,q,S,Y),y),D._CubicLerp(this._ValCoordR3(u,_,f,Y),this._ValCoordR3(u,c,f,Y),this._ValCoordR3(u,A,f,Y),this._ValCoordR3(u,q,f,Y),y),D._CubicLerp(this._ValCoordR3(u,_,k,Y),this._ValCoordR3(u,c,k,Y),this._ValCoordR3(u,A,k,Y),this._ValCoordR3(u,q,k,Y),y),D._CubicLerp(this._ValCoordR3(u,_,O,Y),this._ValCoordR3(u,c,O,Y),this._ValCoordR3(u,A,O,Y),this._ValCoordR3(u,q,O,Y),y),g),v)*(1/(1.5*1.5*1.5))}_SingleValueR2(u,h,i){let d=Math.floor(h),c=Math.floor(i),f=D._InterpHermite(h-d),p=D._InterpHermite(i-c);d=Math.imul(d,this._PrimeX),c=Math.imul(c,this._PrimeY);let y=d+this._PrimeX,g=c+this._PrimeY,v=D._Lerp(this._ValCoordR2(u,d,c),this._ValCoordR2(u,y,c),f),_=D._Lerp(this._ValCoordR2(u,d,g),this._ValCoordR2(u,y,g),f);return D._Lerp(v,_,p)}_SingleValueR3(u,h,i,d){let c=Math.floor(h),f=Math.floor(i),p=Math.floor(d),y=D._InterpHermite(h-c),g=D._InterpHermite(i-f),v=D._InterpHermite(d-p);c=Math.imul(c,this._PrimeX),f=Math.imul(f,this._PrimeY),p=Math.imul(p,this._PrimeZ);let _=c+this._PrimeX,S=f+this._PrimeY,T=p+this._PrimeZ,A=D._Lerp(this._ValCoordR3(u,c,f,p),this._ValCoordR3(u,_,f,p),y),k=D._Lerp(this._ValCoordR3(u,c,S,p),this._ValCoordR3(u,_,S,p),y),E=D._Lerp(this._ValCoordR3(u,c,f,T),this._ValCoordR3(u,_,f,T),y),q=D._Lerp(this._ValCoordR3(u,c,S,T),this._ValCoordR3(u,_,S,T),y),O=D._Lerp(A,k,g),Y=D._Lerp(E,q,g);return D._Lerp(O,Y,v)}_DoSingleDomainWarp(){let u=(i,d,c,f,p,y)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,d*38.283687591552734,c,f,!1,p,y);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,d*16,c,f,!0,p,y);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,d,c,f,p,y);break}},h=(i,d,c,f,p,y,g)=>{switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:this._SingleDomainWarpOpenSimplex2Gradient(i,d*32.69428253173828,c,f,!1,p,y,g);break;case D.DomainWarpType.OpenSimplex2Reduced:this._SingleDomainWarpOpenSimplex2Gradient(i,d*7.71604938271605,c,f,!0,p,y,g);break;case D.DomainWarpType.BasicGrid:this._SingleDomainWarpBasicGrid(i,d,c,f,p,y,g);break}};if(arguments.length===6&&arguments[3]instanceof rr)return u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);if(arguments.length===7&&arguments[3]instanceof ur)return h(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_DomainWarpSingle(){let u=i=>{let d=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,f=this._Frequency,p=i.x,y=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let _=(p+y)*v;p+=_,y+=_;break}this._DoSingleDomainWarp(d,c,f,i,p,y)},h=i=>{let d=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,f=this._Frequency,p=i.x,y=i.y,g=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let S=p+y,T=S*-.211324865405187;g*=.577350269189626,p+=T-g,y=y+T-g,g+=S*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let S=p+g,T=S*-.211324865405187;y*=.577350269189626,p+=T-y,g+=T-y,y+=S*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:const v=2/3;let _=(p+y+g)*v;p=_-p,y=_-y,g=_-g;break}this._DoSingleDomainWarp(d,c,f,i,p,y,g)};if(arguments.length===1&&arguments[0]instanceof rr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof ur)return h(arguments[0])}_DomainWarpFractalProgressive(){let u=i=>{let d=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,f=this._Frequency;for(let p=0;p<this._Octaves;p++){let y=i.x,g=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const _=.5*(1.7320508075688772-1);let S=(y+g)*_;y+=S,g+=S;break}this._DoSingleDomainWarp(d,c,f,i,y,g),d++,c*=this._Gain,f*=this._Lacunarity}},h=i=>{let d=this._Seed,c=this._DomainWarpAmp*this._FractalBounding,f=this._Frequency;for(let p=0;p<this._Octaves;p++){let y=i.x,g=i.y,v=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let _=y+g,S=_*-.211324865405187;v*=.577350269189626,y+=S-v,g=g+S-v,v+=_*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let _=y+v,S=_*-.211324865405187;g*=.577350269189626,y+=S-g,v+=S-g,g+=_*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let S=(y+g+v)*.6666666666666666;y=S-y,g=S-g,v=S-v}break}this._DoSingleDomainWarp(d,c,f,i,y,g,v),d++,c*=this._Gain,f*=this._Lacunarity}};if(arguments.length===1&&arguments[0]instanceof rr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof ur)return h(arguments[0])}_DomainWarpFractalIndependent(){let u=i=>{let d=i.x,c=i.y;switch(this._DomainWarpType){case D.DomainWarpType.OpenSimplex2:case D.DomainWarpType.OpenSimplex2Reduced:const v=.5*(1.7320508075688772-1);let _=(d+c)*v;d+=_,c+=_;break}let f=this._Seed,p=this._DomainWarpAmp*this._FractalBounding,y=this._Frequency;for(let g=0;g<this._Octaves;g++)this._DoSingleDomainWarp(f,p,y,i,d,c),f++,p*=this._Gain,y*=this._Lacunarity},h=i=>{let d=i.x,c=i.y,f=i.z;switch(this._WarpTransformType3D){case D.TransformType3D.ImproveXYPlanes:{let v=d+c,_=v*-.211324865405187;f*=.577350269189626,d+=_-f,c=c+_-f,f+=v*.577350269189626}break;case D.TransformType3D.ImproveXZPlanes:{let v=d+f,_=v*-.211324865405187;c*=.577350269189626,d+=_-c,f+=_-c,c+=v*.577350269189626}break;case D.TransformType3D.DefaultOpenSimplex2:{let _=(d+c+f)*.6666666666666666;d=_-d,c=_-c,f=_-f}break}let p=this._Seed,y=this._DomainWarpAmp*this._FractalBounding,g=this._Frequency;for(let v=0;v<this._Octaves;v++)this._DoSingleDomainWarp(p,y,g,i,d,c,f),p++,y*=this._Gain,g*=this._Lacunarity};if(arguments.length===1&&arguments[0]instanceof rr)return u(arguments[0]);if(arguments.length===1&&arguments[0]instanceof ur)return h(arguments[0])}_SingleDomainWarpBasicGrid(){let u=(i,d,c,f,p,y)=>{let g=p*c,v=y*c,_=Math.floor(g),S=Math.floor(v),T=D._InterpHermite(g-_),A=D._InterpHermite(v-S);_=Math.imul(_,this._PrimeX),S=Math.imul(S,this._PrimeY);let k=_+this._PrimeX,E=S+this._PrimeY,q=this._HashR2(i,_,S)&510,O=this._HashR2(i,k,S)&510,Y=D._Lerp(this._RandVecs2D[q],this._RandVecs2D[O],T),Q=D._Lerp(this._RandVecs2D[q|1],this._RandVecs2D[O|1],T);q=this._HashR2(i,_,E)&510,O=this._HashR2(i,k,E)&510;let G=D._Lerp(this._RandVecs2D[q],this._RandVecs2D[O],T),U=D._Lerp(this._RandVecs2D[q|1],this._RandVecs2D[O|1],T);f.x+=D._Lerp(Y,G,A)*d,f.y+=D._Lerp(Q,U,A)*d},h=(i,d,c,f,p,y,g)=>{let v=p*c,_=y*c,S=g*c,T=Math.floor(v),A=Math.floor(_),k=Math.floor(S),E=D._InterpHermite(v-T),q=D._InterpHermite(_-A),O=D._InterpHermite(S-k);T=Math.imul(T,this._PrimeX),A=Math.imul(A,this._PrimeY),k=Math.imul(k,this._PrimeZ);let Y=T+this._PrimeX,Q=A+this._PrimeY,G=k+this._PrimeZ,U=this._HashR3(i,T,A,k)&1020,X=this._HashR3(i,Y,A,k)&1020,ie=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[X],E),ae=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[X|1],E),ye=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[X|2],E);U=this._HashR3(i,T,Q,k)&1020,X=this._HashR3(i,Y,Q,k)&1020;let be=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[X],E),ce=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[X|1],E),xe=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[X|2],E),Me=D._Lerp(ie,be,q),me=D._Lerp(ae,ce,q),j=D._Lerp(ye,xe,q);U=this._HashR3(i,T,A,G)&1020,X=this._HashR3(i,Y,A,G)&1020,ie=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[X],E),ae=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[X|1],E),ye=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[X|2],E),U=this._HashR3(i,T,Q,G)&1020,X=this._HashR3(i,Y,Q,G)&1020,be=D._Lerp(this._RandVecs3D[U],this._RandVecs3D[X],E),ce=D._Lerp(this._RandVecs3D[U|1],this._RandVecs3D[X|1],E),xe=D._Lerp(this._RandVecs3D[U|2],this._RandVecs3D[X|2],E),f.x+=D._Lerp(Me,D._Lerp(ie,be,q),O)*d,f.y+=D._Lerp(me,D._Lerp(ae,ce,q),O)*d,f.z+=D._Lerp(j,D._Lerp(ye,xe,q),O)*d};arguments.length===6&&arguments[3]instanceof rr&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),arguments.length===7&&arguments[3]instanceof ur&&h(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}_SingleDomainWarpOpenSimplex2Gradient(){let u=(i,d,c,f,p,y,g)=>{const _=(3-1.7320508075688772)/6;y*=c,g*=c;let S=Math.floor(y),T=Math.floor(g),A=y-S,k=g-T,E=(A+k)*_,q=A-E,O=k-E;S=Math.imul(S,this._PrimeX),T=Math.imul(T,this._PrimeY);let Y,Q;Y=Q=0;let G=.5-q*q-O*O;if(G>0){let X=G*G*(G*G),ie,ae;if(p){let ye=this._HashR2(i,S,T)&510;ie=this._RandVecs2D[ye],ae=this._RandVecs2D[ye|1]}else{let ye=this._HashR2(i,S,T),be=ye&254,ce=ye>>7&510,xe=this._Gradients2D[be],Me=this._Gradients2D[be|1],me=q*xe+O*Me,j=this._RandVecs2D[ce],W=this._RandVecs2D[ce|1];ie=me*j,ae=me*W}Y+=X*ie,Q+=X*ae}let U=2*(1-2*_)*(1/_-2)*E+(-2*(1-2*_)*(1-2*_)+G);if(U>0){let X=q+(2*_-1),ie=O+(2*_-1),ae=U*U*(U*U),ye,be;if(p){let ce=this._HashR2(i,S+this._PrimeX,T+this._PrimeY)&510;ye=this._RandVecs2D[ce],be=this._RandVecs2D[ce|1]}else{let ce=this._HashR2(i,S+this._PrimeX,T+this._PrimeY),xe=ce&254,Me=ce>>7&510,me=this._Gradients2D[xe],j=this._Gradients2D[xe|1],W=X*me+ie*j,ee=this._RandVecs2D[Me],se=this._RandVecs2D[Me|1];ye=W*ee,be=W*se}Y+=ae*ye,Q+=ae*be}if(O>q){let X=q+_,ie=O+(_-1),ae=.5-X*X-ie*ie;if(ae>0){let ye=ae*ae*(ae*ae),be,ce;if(p){let xe=this._HashR2(i,S,T+this._PrimeY)&510;be=this._RandVecs2D[xe],ce=this._RandVecs2D[xe|1]}else{let xe=this._HashR2(i,S,T+this._PrimeY),Me=xe&254,me=xe>>7&510,j=this._Gradients2D[Me],W=this._Gradients2D[Me|1],ee=X*j+ie*W,se=this._RandVecs2D[me],x=this._RandVecs2D[me|1];be=ee*se,ce=ee*x}Y+=ye*be,Q+=ye*ce}}else{let X=q+(_-1),ie=O+_,ae=.5-X*X-ie*ie;if(ae>0){let ye=ae*ae*(ae*ae),be,ce;if(p){let xe=this._HashR2(i,S+this._PrimeX,T)&510;be=this._RandVecs2D[xe],ce=this._RandVecs2D[xe|1]}else{let xe=this._HashR2(i,S+this._PrimeX,T),Me=xe&254,me=xe>>7&510,j=this._Gradients2D[Me],W=this._Gradients2D[Me|1],ee=X*j+ie*W,se=this._RandVecs2D[me],x=this._RandVecs2D[me|1];be=ee*se,ce=ee*x}Y+=ye*be,Q+=ye*ce}}f.x+=Y*d,f.y+=Q*d},h=(i,d,c,f,p,y,g,v)=>{y*=c,g*=c,v*=c;let _=Math.round(y),S=Math.round(g),T=Math.round(v),A=y-_,k=g-S,E=v-T,q=-A-1|1,O=-k-1|1,Y=-E-1|1,Q=q*-A,G=O*-k,U=Y*-E;_=Math.imul(_,this._PrimeX),S=Math.imul(S,this._PrimeY),T=Math.imul(T,this._PrimeZ);let X,ie,ae;X=ie=ae=0;let ye=.6-A*A-(k*k+E*E);for(let be=0;;be++){if(ye>0){let se=ye*ye*(ye*ye),x,H,J;if(p){let N=this._HashR3(i,_,S,T)&1020;x=this._RandVecs3D[N],H=this._RandVecs3D[N|1],J=this._RandVecs3D[N|2]}else{let N=this._HashR3(i,_,S,T),F=N&252,ue=N>>6&1020,le=this._Gradients3D[F],_e=this._Gradients3D[F|1],$=this._Gradients3D[F|2],oe=A*le+k*_e+E*$,Ge=this._RandVecs3D[ue],lt=this._RandVecs3D[ue|1],ot=this._RandVecs3D[ue|2];x=oe*Ge,H=oe*lt,J=oe*ot}X+=se*x,ie+=se*H,ae+=se*J}let ce=ye,xe=_,Me=S,me=T,j=A,W=k,ee=E;if(Q>=G&&Q>=U?(j+=q,ce=ce+Q+Q,xe-=q*this._PrimeX):G>Q&&G>=U?(W+=O,ce=ce+G+G,Me-=O*this._PrimeY):(ee+=Y,ce=ce+U+U,me-=Y*this._PrimeZ),ce>1){ce-=1;let se=ce*ce*(ce*ce),x,H,J;if(p){let N=this._HashR3(i,xe,Me,me)&1020;x=this._RandVecs3D[N],H=this._RandVecs3D[N|1],J=this._RandVecs3D[N|2]}else{let N=this._HashR3(i,xe,Me,me),F=N&252,ue=N>>6&1020,le=this._Gradients3D[F],_e=this._Gradients3D[F|1],$=this._Gradients3D[F|2],oe=j*le+W*_e+ee*$,Ge=this._RandVecs3D[ue],lt=this._RandVecs3D[ue|1],ot=this._RandVecs3D[ue|2];x=oe*Ge,H=oe*lt,J=oe*ot}X+=se*x,ie+=se*H,ae+=se*J}if(be===1)break;Q=.5-Q,G=.5-G,U=.5-U,A=q*Q,k=O*G,E=Y*U,ye+=.75-Q-(G+U),_+=q>>1&this._PrimeX,S+=O>>1&this._PrimeY,T+=Y>>1&this._PrimeZ,q=-q,O=-O,Y=-Y,i+=1293373}f.x+=X*d,f.y+=ie*d,f.z+=ae*d};arguments.length===7&&u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),arguments.length===8&&h(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])}}class rr{constructor(u,h){this.x=u,this.y=h}}class ur{constructor(u,h,i){this.x=u,this.y=h,this.z=i}}function i3(s=42,u=1920,h=1080,i=D.NoiseType.Perlin,d=6,c=1.7,f=.5,p=D.FractalType.FBm,y=.003){const g=new D;g.SetNoiseType(i),g.SetSeed(s),g.SetFractalOctaves(d),g.SetFractalLacunarity(c),g.SetFractalGain(f),g.SetFractalType(p),g.SetFrequency(y);const v=[];for(let T=0;T<h;T++)for(let A=0;A<u;A++){const E=(g.GetNoise(A,T)+1)/2;v.push(E)}var _=0,S=0;for(let T=0;T<v.length;T++)(v[T]<_||T==0)&&(_=v[T]),(v[T]>S||T==0)&&(S=v[T]);for(let T=0;T<v.length;T++)v[T]=(v[T]-_)/(S-_);return v}const c3=`fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {\r
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
}`,o3=`// RGB (0–1 range)\r
const COLOR_WHITE  = vec4<f32>(1.0, 1.0, 1.0, 1.0);\r
const COLOR_BLACK  = vec4<f32>(0.0, 0.0, 0.0, 1.0);\r
const COLOR_RED    = vec4<f32>(1.0, 0.0, 0.0, 1.0);\r
const COLOR_GREEN  = vec4<f32>(0.0, 1.0, 0.0, 1.0);\r
const COLOR_BLUE   = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r
const COLOR_YELLOW = vec4<f32>(1.0, 1.0, 0.0, 1.0);\r
const COLOR_CYAN   = vec4<f32>(0.0, 1.0, 1.0, 1.0);\r
const COLOR_MAGENTA= vec4<f32>(1.0, 0.0, 1.0, 1.0);\r
const COLOR_GRAY   = vec4<f32>(0.5, 0.5, 0.5, 1.0);\r
const COLOR_CLEAR  = vec4<f32>(0.0, 0.0, 0.0, 1.0);`,s3=`fn getCursorColor(coord : vec2<u32>) -> vec4f\r
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
}`,f3=`// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)\r
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
}`,d3=`// ---------- Helpers ----------\r
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
}`,h3=`const MAX_SPRITE_SIZE = 64 * 64;\r
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
}`,m3=`// Uses: uView, uTerrain, uInput, outputTex\r
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
}`,o2=`//{colors}\r
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
//{chunk_data_calc}`,p3=`struct View {\r
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
};`,g3=`// Fullscreen triangle VS\r
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
}`,y3=`const MAX_SLICES_PER_CELL : u32 = 3u;\r
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
`,v3=`// Uses: uView, uTerrain, chunkData, currentCells\r
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
`,x3=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells\r
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
`,b3=`// Uses: uView, uTerrain, cursorQuery, currentCells, chunkData\r
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
`,_3=`// ---- Fragment shader ----\r
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
}`,S3=`// Uses: uView, chunkData, currentCells, outputTex\r
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
`,C3=`// Uses: uView, uTerrain, chunkData, currentCells, outputTex\r
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
`,T3=`// Uses: uView, currentCells\r
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
`,R3=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,D3=`@compute @workgroup_size(16, 16, 1)\r
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
}`,z3=`// Uses: uView, uTerrain, currentCells, outputTex\r
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
`,M3=`// Uses: uView, uTerrain, uInput, cursorQuery, currentCells, nextCells\r
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
}`,A3=Object.assign({"../shaders/helpers/chunk_helpers.wgsl":c3,"../shaders/helpers/colors.wgsl":o3,"../shaders/helpers/cursor_helpers.wgsl":s3,"../shaders/helpers/flow_helpers.wgsl":f3,"../shaders/helpers/helpers.wgsl":d3,"../shaders/helpers/sprite_helpers.wgsl":h3,"../shaders/main/fragment.wgsl":m3,"../shaders/main/shader_outline.wgsl":o2,"../shaders/main/structs.wgsl":p3,"../shaders/main/vertex.wgsl":g3,"../shaders/objects/object_def.wgsl":y3,"../shaders/query/chunk_data_calc.wgsl":v3,"../shaders/query/cursor_query.wgsl":x3,"../shaders/query/total_query.wgsl":b3,"../shaders/realtime_frag.wgsl":_3,"../shaders/render/debug_render_compute.wgsl":S3,"../shaders/render/fluid_render_compute.wgsl":C3,"../shaders/render/normal_compute.wgsl":T3,"../shaders/render/shadow_render_compute.wgsl":R3,"../shaders/render/sprite_render_compute.wgsl":D3,"../shaders/render/terrain_render_compute.wgsl":z3,"../shaders/simulation/step_compute.wgsl":M3});function w3(){let s=o2;for(const[u,h]of Object.entries(A3)){const i=u.split("/").pop().replace(".wgsl","");s=s.replace(`//{${i}}`,h)}return s}var Lc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var e2;function E3(){return e2||(e2=1,(function(s){(function(){var u={}.hasOwnProperty;function h(){for(var c="",f=0;f<arguments.length;f++){var p=arguments[f];p&&(c=d(c,i(p)))}return c}function i(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return h.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var f="";for(var p in c)u.call(c,p)&&c[p]&&(f=d(f,p));return f}function d(c,f){return f?c?c+" "+f:c+f:c}s.exports?(h.default=h,s.exports=h):window.classNames=h})()})(Lc)),Lc.exports}var O3=E3();const Ve=Tu(O3),V3=["xxl","xl","lg","md","sm","xs"],H3="xs",Ru=P.createContext({prefixes:{},breakpoints:V3,minBreakpoint:H3}),{Consumer:Uh,Provider:jh}=Ru;function qe(s,u){const{prefixes:h}=P.useContext(Ru);return s||h[u]||u}function s2(){const{breakpoints:s}=P.useContext(Ru);return s}function f2(){const{minBreakpoint:s}=P.useContext(Ru);return s}var Zc={exports:{}},Pc,t2;function B3(){if(t2)return Pc;t2=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Pc=s,Pc}var Qc,n2;function G3(){if(n2)return Qc;n2=1;var s=B3();function u(){}function h(){}return h.resetWarningCache=u,Qc=function(){function i(f,p,y,g,v,_){if(_!==s){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}i.isRequired=i;function d(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:d,element:i,elementType:i,instanceOf:d,node:i,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:h,resetWarningCache:u};return c.PropTypes=c,c},Qc}var l2;function U3(){return l2||(l2=1,Zc.exports=G3()()),Zc.exports}var j3=U3();const pt=Tu(j3),d2=(s=>P.forwardRef((u,h)=>b.jsx("div",{...u,ref:h,className:Ve(u.className,s)}))),k3=["as","disabled"];function Y3(s,u){if(s==null)return{};var h={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)>=0)continue;h[i]=s[i]}return h}function X3(s){return!s||s.trim()==="#"}function h2({tagName:s,disabled:u,href:h,target:i,rel:d,role:c,onClick:f,tabIndex:p=0,type:y}){s||(h!=null||i!=null||d!=null?s="a":s="button");const g={tagName:s};if(s==="button")return[{type:y||"button",disabled:u},g];const v=S=>{if((u||s==="a"&&X3(h))&&S.preventDefault(),u){S.stopPropagation();return}f?.(S)},_=S=>{S.key===" "&&(S.preventDefault(),v(S))};return s==="a"&&(h||(h="#"),u&&(h=void 0)),[{role:c??"button",disabled:void 0,tabIndex:u?void 0:p,href:h,target:s==="a"?i:void 0,"aria-disabled":u||void 0,rel:s==="a"?d:void 0,onClick:v,onKeyDown:_},g]}const q3=P.forwardRef((s,u)=>{let{as:h,disabled:i}=s,d=Y3(s,k3);const[c,{tagName:f}]=h2(Object.assign({tagName:h,disabled:i},d));return b.jsx(f,Object.assign({},d,c,{ref:u}))});q3.displayName="Button";const xl=P.forwardRef(({as:s,bsPrefix:u,variant:h="primary",size:i,active:d=!1,disabled:c=!1,className:f,...p},y)=>{const g=qe(u,"btn"),[v,{tagName:_}]=h2({tagName:s,disabled:c,...p}),S=_;return b.jsx(S,{...v,...p,ref:y,disabled:c,className:Ve(f,g,d&&"active",h&&`${g}-${h}`,i&&`${g}-${i}`,p.href&&c&&"disabled")})});xl.displayName="Button";const Fc=P.forwardRef(({bsPrefix:s,size:u,vertical:h=!1,className:i,role:d="group",as:c="div",...f},p)=>{const y=qe(s,"btn-group");let g=y;return h&&(g=`${y}-vertical`),b.jsx(c,{...f,ref:p,role:d,className:Ve(i,g,u&&`${y}-${u}`)})});Fc.displayName="ButtonGroup";const Ic=P.forwardRef(({className:s,bsPrefix:u,as:h="div",...i},d)=>(u=qe(u,"card-body"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));Ic.displayName="CardBody";const m2=P.forwardRef(({className:s,bsPrefix:u,as:h="div",...i},d)=>(u=qe(u,"card-footer"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));m2.displayName="CardFooter";const p2=P.createContext(null);p2.displayName="CardHeaderContext";const g2=P.forwardRef(({bsPrefix:s,className:u,as:h="div",...i},d)=>{const c=qe(s,"card-header"),f=P.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return b.jsx(p2.Provider,{value:f,children:b.jsx(h,{ref:d,...i,className:Ve(u,c)})})});g2.displayName="CardHeader";const y2=P.forwardRef(({bsPrefix:s,className:u,variant:h,as:i="img",...d},c)=>{const f=qe(s,"card-img");return b.jsx(i,{ref:c,className:Ve(h?`${f}-${h}`:f,u),...d})});y2.displayName="CardImg";const v2=P.forwardRef(({className:s,bsPrefix:u,as:h="div",...i},d)=>(u=qe(u,"card-img-overlay"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));v2.displayName="CardImgOverlay";const x2=P.forwardRef(({className:s,bsPrefix:u,as:h="a",...i},d)=>(u=qe(u,"card-link"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));x2.displayName="CardLink";const N3=d2("h6"),b2=P.forwardRef(({className:s,bsPrefix:u,as:h=N3,...i},d)=>(u=qe(u,"card-subtitle"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));b2.displayName="CardSubtitle";const _2=P.forwardRef(({className:s,bsPrefix:u,as:h="p",...i},d)=>(u=qe(u,"card-text"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));_2.displayName="CardText";const L3=d2("h5"),S2=P.forwardRef(({className:s,bsPrefix:u,as:h=L3,...i},d)=>(u=qe(u,"card-title"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));S2.displayName="CardTitle";const C2=P.forwardRef(({bsPrefix:s,className:u,bg:h,text:i,border:d,body:c=!1,children:f,as:p="div",...y},g)=>{const v=qe(s,"card");return b.jsx(p,{ref:g,...y,className:Ve(u,v,h&&`bg-${h}`,i&&`text-${i}`,d&&`border-${d}`),children:c?b.jsx(Ic,{children:f}):f})});C2.displayName="Card";const en=Object.assign(C2,{Img:y2,Title:S2,Subtitle:b2,Body:Ic,Link:x2,Text:_2,Header:g2,Footer:m2,ImgOverlay:v2});function Z3(s,u){return P.Children.toArray(s).some(h=>P.isValidElement(h)&&h.type===u)}function P3({as:s,bsPrefix:u,className:h,...i}){u=qe(u,"col");const d=s2(),c=f2(),f=[],p=[];return d.forEach(y=>{const g=i[y];delete i[y];let v,_,S;typeof g=="object"&&g!=null?{span:v,offset:_,order:S}=g:v=g;const T=y!==c?`-${y}`:"";v&&f.push(v===!0?`${u}${T}`:`${u}${T}-${v}`),S!=null&&p.push(`order${T}-${S}`),_!=null&&p.push(`offset${T}-${_}`)}),[{...i,className:Ve(h,...f,...p)},{as:s,bsPrefix:u,spans:f}]}const Tt=P.forwardRef((s,u)=>{const[{className:h,...i},{as:d="div",bsPrefix:c,spans:f}]=P3(s);return b.jsx(d,{...i,ref:u,className:Ve(h,!f.length&&c)})});Tt.displayName="Col";const T2=P.createContext(null);T2.displayName="InputGroupContext";const Q3={type:pt.string,tooltip:pt.bool,as:pt.elementType},Du=P.forwardRef(({as:s="div",className:u,type:h="valid",tooltip:i=!1,...d},c)=>b.jsx(s,{...d,ref:c,className:Ve(u,`${h}-${i?"tooltip":"feedback"}`)}));Du.displayName="Feedback";Du.propTypes=Q3;const zn=P.createContext({}),or=P.forwardRef(({id:s,bsPrefix:u,className:h,type:i="checkbox",isValid:d=!1,isInvalid:c=!1,as:f="input",...p},y)=>{const{controlId:g}=P.useContext(zn);return u=qe(u,"form-check-input"),b.jsx(f,{...p,ref:y,type:i,id:s||g,className:Ve(h,u,d&&"is-valid",c&&"is-invalid")})});or.displayName="FormCheckInput";const Su=P.forwardRef(({bsPrefix:s,className:u,htmlFor:h,...i},d)=>{const{controlId:c}=P.useContext(zn);return s=qe(s,"form-check-label"),b.jsx("label",{...i,ref:d,htmlFor:h||c,className:Ve(u,s)})});Su.displayName="FormCheckLabel";const R2=P.forwardRef(({id:s,bsPrefix:u,bsSwitchPrefix:h,inline:i=!1,reverse:d=!1,disabled:c=!1,isValid:f=!1,isInvalid:p=!1,feedbackTooltip:y=!1,feedback:g,feedbackType:v,className:_,style:S,title:T="",type:A="checkbox",label:k,children:E,as:q="input",...O},Y)=>{u=qe(u,"form-check"),h=qe(h,"form-switch");const{controlId:Q}=P.useContext(zn),G=P.useMemo(()=>({controlId:s||Q}),[Q,s]),U=!E&&k!=null&&k!==!1||Z3(E,Su),X=b.jsx(or,{...O,type:A==="switch"?"checkbox":A,ref:Y,isValid:f,isInvalid:p,disabled:c,as:q});return b.jsx(zn.Provider,{value:G,children:b.jsx("div",{style:S,className:Ve(_,U&&u,i&&`${u}-inline`,d&&`${u}-reverse`,A==="switch"&&h),children:E||b.jsxs(b.Fragment,{children:[X,U&&b.jsx(Su,{title:T,children:k}),g&&b.jsx(Du,{type:v,tooltip:y,children:g})]})})})});R2.displayName="FormCheck";const Cu=Object.assign(R2,{Input:or,Label:Su}),D2=P.forwardRef(({bsPrefix:s,type:u,size:h,htmlSize:i,id:d,className:c,isValid:f=!1,isInvalid:p=!1,plaintext:y,readOnly:g,as:v="input",..._},S)=>{const{controlId:T}=P.useContext(zn);return s=qe(s,"form-control"),b.jsx(v,{..._,type:u,size:i,ref:S,readOnly:g,id:d||T,className:Ve(c,y?`${s}-plaintext`:s,h&&`${s}-${h}`,u==="color"&&`${s}-color`,f&&"is-valid",p&&"is-invalid")})});D2.displayName="FormControl";const K3=Object.assign(D2,{Feedback:Du}),z2=P.forwardRef(({className:s,bsPrefix:u,as:h="div",...i},d)=>(u=qe(u,"form-floating"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));z2.displayName="FormFloating";const $c=P.forwardRef(({controlId:s,as:u="div",...h},i)=>{const d=P.useMemo(()=>({controlId:s}),[s]);return b.jsx(zn.Provider,{value:d,children:b.jsx(u,{...h,ref:i})})});$c.displayName="FormGroup";const M2=P.forwardRef(({as:s="label",bsPrefix:u,column:h=!1,visuallyHidden:i=!1,className:d,htmlFor:c,...f},p)=>{const{controlId:y}=P.useContext(zn);u=qe(u,"form-label");let g="col-form-label";typeof h=="string"&&(g=`${g} ${g}-${h}`);const v=Ve(d,u,i&&"visually-hidden",h&&g);return c=c||y,h?b.jsx(Tt,{ref:p,as:"label",className:v,htmlFor:c,...f}):b.jsx(s,{ref:p,className:v,htmlFor:c,...f})});M2.displayName="FormLabel";const A2=P.forwardRef(({bsPrefix:s,className:u,id:h,...i},d)=>{const{controlId:c}=P.useContext(zn);return s=qe(s,"form-range"),b.jsx("input",{...i,type:"range",ref:d,className:Ve(u,s),id:h||c})});A2.displayName="FormRange";const w2=P.forwardRef(({bsPrefix:s,size:u,htmlSize:h,className:i,isValid:d=!1,isInvalid:c=!1,id:f,...p},y)=>{const{controlId:g}=P.useContext(zn);return s=qe(s,"form-select"),b.jsx("select",{...p,size:h,ref:y,className:Ve(i,s,u&&`${s}-${u}`,d&&"is-valid",c&&"is-invalid"),id:f||g})});w2.displayName="FormSelect";const E2=P.forwardRef(({bsPrefix:s,className:u,as:h="small",muted:i,...d},c)=>(s=qe(s,"form-text"),b.jsx(h,{...d,ref:c,className:Ve(u,s,i&&"text-muted")})));E2.displayName="FormText";const O2=P.forwardRef((s,u)=>b.jsx(Cu,{...s,ref:u,type:"switch"}));O2.displayName="Switch";const J3=Object.assign(O2,{Input:Cu.Input,Label:Cu.Label}),V2=P.forwardRef(({bsPrefix:s,className:u,children:h,controlId:i,label:d,...c},f)=>(s=qe(s,"form-floating"),b.jsxs($c,{ref:f,className:Ve(u,s),controlId:i,...c,children:[h,b.jsx("label",{htmlFor:i,children:d})]})));V2.displayName="FloatingLabel";const W3={_ref:pt.any,validated:pt.bool,as:pt.elementType},eo=P.forwardRef(({className:s,validated:u,as:h="form",...i},d)=>b.jsx(h,{...i,ref:d,className:Ve(s,u&&"was-validated")}));eo.displayName="Form";eo.propTypes=W3;const ge=Object.assign(eo,{Group:$c,Control:K3,Floating:z2,Check:Cu,Switch:J3,Label:M2,Text:E2,Range:A2,Select:w2,FloatingLabel:V2}),zu=P.forwardRef(({className:s,bsPrefix:u,as:h="span",...i},d)=>(u=qe(u,"input-group-text"),b.jsx(h,{ref:d,className:Ve(s,u),...i})));zu.displayName="InputGroupText";const F3=s=>b.jsx(zu,{children:b.jsx(or,{type:"checkbox",...s})}),I3=s=>b.jsx(zu,{children:b.jsx(or,{type:"radio",...s})}),H2=P.forwardRef(({bsPrefix:s,size:u,hasValidation:h,className:i,as:d="div",...c},f)=>{s=qe(s,"input-group");const p=P.useMemo(()=>({}),[]);return b.jsx(T2.Provider,{value:p,children:b.jsx(d,{ref:f,...c,className:Ve(i,s,u&&`${s}-${u}`,h&&"has-validation")})})});H2.displayName="InputGroup";const $3=Object.assign(H2,{Text:zu,Radio:I3,Checkbox:F3}),ir=P.forwardRef(({bsPrefix:s,className:u,as:h="div",...i},d)=>{const c=qe(s,"row"),f=s2(),p=f2(),y=`${c}-cols`,g=[];return f.forEach(v=>{const _=i[v];delete i[v];let S;_!=null&&typeof _=="object"?{cols:S}=_:S=_;const T=v!==p?`-${v}`:"";S!=null&&g.push(`${y}${T}-${S}`)}),b.jsx(h,{ref:d,...i,className:Ve(u,c,...g)})});ir.displayName="Row";const Mu={noiseType:"OpenSimplex2S",seed:42,fractalOctaves:6,fractalLacunarity:1.7,fractalGain:.5,fractalType:"FBm",frequency:.003,pixelScale:2,width:960,height:540,maxCellValue:100,terrainHeightMultiplier:.85,colorSteps:20,numberOfTerrainColors:7,colors:["#4D4949","#827C74","#BE935A","#AD6E1B","#3D6841","#1B461F","#FFFFFF"]};$t.memo(eh,(s,u)=>s.initial===u.initial&&s.title===u.title);function eh({initial:s,onChange:u,onApply:h,title:i="Noise & Render Settings"}){const d=P.useMemo(()=>({...Mu,...s}),[s]),[c,f]=P.useState(d);P.useEffect(()=>{f(v=>{const _=Math.max(1,Math.min(32,v.numberOfTerrainColors));let S=v.colors.slice(0,_);if(S.length<_){const T=_-S.length,A=S[S.length-1]??"#888888";S=S.concat(Array.from({length:T},()=>A))}return{...v,numberOfTerrainColors:_,colors:S}})},[c.numberOfTerrainColors]);const p=(v,_)=>f(S=>({...S,[v]:_})),y=["Perlin","OpenSimplex2","OpenSimplex2S","Cellular","ValueCubic","Value"],g=["FBm","Ridged","PingPong","None","DomainWarpProgressive","DomainWarpIndependent"];return b.jsx(en,{children:b.jsxs(en.Body,{children:[b.jsx(en.Title,{className:"mb-3",children:i}),b.jsx("h6",{className:"text-muted mb-2",children:"Canvas"}),b.jsxs(ir,{className:"g-3",children:[b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"width",children:[b.jsx(ge.Label,{children:"Width"}),b.jsx(ge.Control,{type:"number",min:1,value:c.width,onChange:v=>p("width",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),b.jsx(ge.Text,{muted:!0,children:"Width in pixels of the map."})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"height",children:[b.jsx(ge.Label,{children:"Height"}),b.jsx(ge.Control,{type:"number",min:1,value:c.height,onChange:v=>p("height",Math.max(1,parseInt(v.currentTarget.value||"1",10)))}),b.jsx(ge.Text,{muted:!0,children:"Height in pixels of the map."})]})})]}),b.jsx("hr",{className:"my-4"}),b.jsx("h6",{className:"text-muted mb-2",children:"Noise"}),b.jsxs(ir,{className:"g-3",children:[b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"noiseType",children:[b.jsx(ge.Label,{children:"Noise Type"}),b.jsx(ge.Select,{value:c.noiseType,onChange:v=>p("noiseType",v.currentTarget.value),children:y.map(v=>b.jsx("option",{value:v,children:v},v))})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"seed",children:[b.jsx(ge.Label,{children:"Seed"}),b.jsx(ge.Control,{type:"number",value:c.seed,onChange:v=>p("seed",parseInt(v.currentTarget.value||"0",10))})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"octaves",children:[b.jsx(ge.Label,{children:"Fractal Octaves"}),b.jsx(ge.Control,{type:"number",min:1,max:16,value:c.fractalOctaves,onChange:v=>p("fractalOctaves",Math.max(1,Math.min(16,parseInt(v.currentTarget.value||"1",10))))})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"lacunarity",children:[b.jsx(ge.Label,{children:"Fractal Lacunarity"}),b.jsx($3,{children:b.jsx(ge.Control,{type:"number",step:"0.1",value:c.fractalLacunarity,onChange:v=>p("fractalLacunarity",parseFloat(v.currentTarget.value||"0"))})})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"gain",children:[b.jsx(ge.Label,{children:"Fractal Gain"}),b.jsx(ge.Control,{type:"number",step:"0.05",value:c.fractalGain,onChange:v=>p("fractalGain",parseFloat(v.currentTarget.value||"0"))})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"fractalType",children:[b.jsx(ge.Label,{children:"Fractal Type"}),b.jsx(ge.Select,{value:c.fractalType,onChange:v=>p("fractalType",v.currentTarget.value),children:g.map(v=>b.jsx("option",{value:v,children:v},v))})]})}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"frequency",children:[b.jsx(ge.Label,{children:"Frequency"}),b.jsx(ge.Control,{type:"number",step:"0.0005",value:c.frequency,onChange:v=>p("frequency",parseFloat(v.currentTarget.value||"0"))}),b.jsx(ge.Text,{muted:!0,children:"Typical small value (e.g. 0.003)"})]})})]}),b.jsx("hr",{className:"my-4"}),b.jsx("h6",{className:"text-muted mb-2",children:"Render / Terrain"}),b.jsxs(ir,{className:"g-3",children:[b.jsxs(Tt,{md:6,lg:4,children:[b.jsxs(ge.Group,{controlId:"maxCellValue",children:[b.jsx(ge.Label,{children:"Max Terrain Height"}),b.jsx(ge.Control,{type:"number",step:"0.1",value:c.maxCellValue,onChange:v=>p("maxCellValue",parseFloat(v.currentTarget.value||"0"))})]}),b.jsx(ge.Text,{muted:!0,children:"The maximum terrain height of any cell in the map."})]}),b.jsxs(Tt,{md:6,lg:4,children:[b.jsxs(ge.Group,{controlId:"thm",children:[b.jsx(ge.Label,{children:"Terrain Height Multiplier"}),b.jsx(ge.Control,{type:"number",step:"0.01",value:c.terrainHeightMultiplier,onChange:v=>p("terrainHeightMultiplier",parseFloat(v.currentTarget.value||"0"))})]}),b.jsx(ge.Text,{muted:!0,children:"A multiplier used to scale the overall terrain height."})]}),b.jsxs(Tt,{md:6,lg:4,children:[b.jsxs(ge.Group,{controlId:"colorSteps",children:[b.jsx(ge.Label,{children:"Terrain Steps"}),b.jsx(ge.Control,{type:"number",min:1,value:c.colorSteps,onChange:v=>p("colorSteps",Math.max(1,parseInt(v.currentTarget.value||"1",10)))})]}),b.jsx(ge.Text,{muted:!0,children:"How many steps or terraces should the terrain have."})]}),b.jsx(Tt,{md:6,lg:4,children:b.jsxs(ge.Group,{controlId:"numColors",children:[b.jsx(ge.Label,{children:"Number of Terrain Colors"}),b.jsx(ge.Control,{type:"number",min:1,max:32,value:c.numberOfTerrainColors,onChange:v=>p("numberOfTerrainColors",Math.max(1,Math.min(32,parseInt(v.currentTarget.value||"1",10))))}),b.jsx(ge.Text,{muted:!0,children:"Gradient editor below will match this count."})]})})]}),b.jsxs("div",{className:"mt-4",children:[b.jsx("h6",{className:"text-muted mb-2",children:"Terrain Gradient"}),b.jsx(ir,{className:"g-3",children:c.colors.map((v,_)=>b.jsx(Tt,{xs:3,sm:2,md:1,lg:1,children:b.jsx(ge.Group,{controlId:`color-${_}`,children:b.jsx(ge.Control,{type:"color",value:v,style:{width:"50px",height:"50px"},onChange:S=>{const T=S.currentTarget.value;p("colors",c.colors.map((A,k)=>k===_?T:A))},title:`Pick color ${_+1}`})})},_))})]}),b.jsxs("div",{className:"d-flex gap-2 mt-4",children:[b.jsx(xl,{variant:"primary",onClick:()=>h?.(c),children:"Apply"}),b.jsx(xl,{variant:"outline-secondary",onClick:()=>f(d),children:"Reset to Defaults"})]})]})})}function a2(s,u){const h=s>>>0,i=u>>>0||1;return(i&i-1)===0?h+(i-1)&~(i-1):Math.ceil(h/i)*i>>>0}function th(s){if(typeof s!="string")return"";const u=s.trim().toLowerCase();if(/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(u))return u;const h=u.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);if(h)return`vec${h[1]}${h[2][0]}`;const i=u.match(/^pad[_\s]*([0-9]+)$/);return i?`pad${i[1]}`:""}const nh={f32:{size:4,align:4},u32:{size:4,align:4},i32:{size:4,align:4},bool:{size:4,align:4},vec2f:{size:8,align:8},vec3f:{size:12,align:16},vec4f:{size:16,align:16},vec2u:{size:8,align:8},vec3u:{size:12,align:16},vec4u:{size:16,align:16},vec2i:{size:8,align:8},vec3i:{size:12,align:16},vec4i:{size:16,align:16}};function to(s){const u={fields:[],size:0};let h=0,i=1;for(const d of s){const c=th(d.type);if(!c)throw new Error(`Unsupported type: ${d.type}`);const f=c;if(f.startsWith("pad")){const v=parseInt(f.slice(3),10)||0;if(v<=0)throw new Error(`Invalid padding: ${f}`);const _={name:d.name,type:f,offset:h,size:v,align:1};u.fields.push(_),h+=v;continue}const y=nh[f];if(!y)throw new Error(`Unsupported non-pad type: ${f}`);h=a2(h,y.align);const g={name:d.name,type:f,offset:h,size:y.size,align:y.align};u.fields.push(g),h+=y.size,y.align>i&&(i=y.align)}return u.size=a2(h,Math.max(16,i)),u}function lh(s,u){const h=new ArrayBuffer(s.size),i=new DataView(h);for(const d of s.fields){if(d.type.startsWith("pad"))continue;const c=u[d.name];if(c==null)throw new Error(`Missing field '${d.name}'`);switch(d.type){case"f32":i.setFloat32(d.offset,+c,!0);break;case"u32":i.setUint32(d.offset,c>>>0,!0);break;case"i32":i.setInt32(d.offset,c|0,!0);break;case"bool":i.setUint32(d.offset,c?1:0,!0);break;case"vec2f":i.setFloat32(d.offset,c[0],!0),i.setFloat32(d.offset+4,c[1],!0);break;case"vec3f":i.setFloat32(d.offset,c[0],!0),i.setFloat32(d.offset+4,c[1],!0),i.setFloat32(d.offset+8,c[2],!0);break;case"vec4f":i.setFloat32(d.offset,c[0],!0),i.setFloat32(d.offset+4,c[1],!0),i.setFloat32(d.offset+8,c[2],!0),i.setFloat32(d.offset+12,c[3],!0);break;case"vec2u":i.setUint32(d.offset,c[0]>>>0,!0),i.setUint32(d.offset+4,c[1]>>>0,!0);break;case"vec3u":i.setUint32(d.offset,c[0]>>>0,!0),i.setUint32(d.offset+4,c[1]>>>0,!0),i.setUint32(d.offset+8,c[2]>>>0,!0);break;case"vec4u":i.setUint32(d.offset,c[0]>>>0,!0),i.setUint32(d.offset+4,c[1]>>>0,!0),i.setUint32(d.offset+8,c[2]>>>0,!0),i.setUint32(d.offset+12,c[3]>>>0,!0);break;case"vec2i":i.setInt32(d.offset,c[0]|0,!0),i.setInt32(d.offset+4,c[1]|0,!0);break;case"vec3i":i.setInt32(d.offset,c[0]|0,!0),i.setInt32(d.offset+4,c[1]|0,!0),i.setInt32(d.offset+8,c[2]|0,!0);break;case"vec4i":i.setInt32(d.offset,c[0]|0,!0),i.setInt32(d.offset+4,c[1]|0,!0),i.setInt32(d.offset+8,c[2]|0,!0),i.setInt32(d.offset+12,c[3]|0,!0);break;default:throw new Error(`Unhandled type ${d.type}`)}}return h}function no(s,u,h,i,d,c){const f=lh(u,h),p=c??s.createBuffer({size:u.size,usage:i,label:d});return s.queue.writeBuffer(p,0,f),p}const ah=to([{name:"maxCellValue",type:"f32"},{name:"terrainHeightMultiplier",type:"f32"},{name:"colorSteps",type:"u32"},{name:"numberOfTerrainColors",type:"u32"},{name:"_padT0",type:"vec2f"}]);function rh(s,u,h,i){const d={maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps>>>0,numberOfTerrainColors:(h?.length??0)>>>0,_padT0:[0,0]};return no(s,ah,d,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Terrain Buffer",i)}function uh(s,u,h){{const i=s.createBuffer({label:"Terrain Colors Buffer",size:u.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return s.queue.writeBuffer(i,0,ih(u)),i}}function ih(s){const u=[];for(let h of s){/^#([0-9a-fA-F]{3})$/.test(h)&&(h=h.replace(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,"#$1$1$2$2$3$3"));const i=h.match(/^#([0-9a-fA-F]{6})$/);if(!i)continue;const d=i[1],c=parseInt(d.slice(0,2),16)/255,f=parseInt(d.slice(2,4),16)/255,p=parseInt(d.slice(4,6),16)/255;u.push(c,f,p,1)}return new Float32Array(u)}const ch=to([{name:"size",type:"vec2u"},{name:"time",type:"f32"},{name:"frameIndex",type:"u32"},{name:"showDebug",type:"u32"},{name:"pixelScale",type:"u32"}]);function r2(s,u,h){const i={size:[u.width,u.height],time:u.time,frameIndex:u.frameIndex,showDebug:u.showDebug?1:0,pixelScale:u.pixelScale};return no(s,ch,i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"View Buffer",h)}const oh=to([{name:"mousePos",type:"vec2u"},{name:"mouse0Held",type:"f32"},{name:"mouse1Held",type:"f32"},{name:"mouse2Held",type:"f32"},{name:"mouseRadius",type:"f32"},{name:"cursorType",type:"u32"},{name:"visibleRect",type:"vec4u"}]);function u2(s,u,h){const i=u.cursorType=="none"?0:u.cursorType=="radius"?1:2,d={mousePos:[u.mousePos.x,u.mousePos.y],mouse0Held:u.mouse0Held?1:0,mouse1Held:u.mouse1Held?1:0,mouse2Held:u.mouse2Held?1:0,mouseRadius:u.mouseRadius,cursorType:i,visibleRect:[u.visibleRect.x0,u.visibleRect.y0,u.visibleRect.x1,u.visibleRect.y1]};return no(s,oh,d,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,"Input Buffer",h)}function sh(s,u,h,i){const c={uView:{binding:0,type:"uniform",buffer:i.viewUniformBuffer},uInput:{binding:1,type:"uniform",buffer:i.inputUniformBuffer},uTerrain:{binding:2,type:"uniform",buffer:i.terrainBuffer},uSim:{binding:3,type:"uniform",buffer:i.simBuffer,minBindingSize:16},currentCells:{binding:4,type:"storage",buffer:i.prevCellsBuffer},nextCells:{binding:5,type:"storage",buffer:i.nextCellsBuffer},terrainColors:{binding:6,type:"read-only-storage",buffer:i.terrainColorsBuffer},outputTex:{binding:7,type:"storage",buffer:i.outputTextureBuffer},cursorQuery:{binding:8,type:"storage",buffer:i.cursorQueryBuffer},chunkData:{binding:9,type:"storage",buffer:i.chunkDataBuffer},sprites:{binding:10,type:"read-only-storage",buffer:i.spriteDataBuffer}},f=s.createBindGroupLayout({label:"Unified Compute BGL",entries:Object.keys(c).filter(U=>!["sprite","spriteColors"].includes(U)).map(U=>U==="uSim"?{binding:c[U].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:c[U].type,hasDynamicOffset:!0,minBindingSize:16}}:{binding:c[U].binding,visibility:GPUShaderStage.COMPUTE,buffer:{type:c[U].type}})}),p=s.createBindGroup({label:"Unified Compute BG A",layout:f,entries:Object.keys(c).map(U=>U==="currentCells"?{binding:c.currentCells.binding,resource:{buffer:i.prevCellsBuffer}}:U==="nextCells"?{binding:c.nextCells.binding,resource:{buffer:i.nextCellsBuffer}}:U==="uSim"?{binding:c.uSim.binding,resource:{buffer:i.simBuffer,offset:0,size:16}}:{binding:c[U].binding,resource:{buffer:c[U].buffer}})}),y=s.createBindGroup({label:"Unified Compute BG show B",layout:f,entries:Object.keys(c).map(U=>U==="currentCells"?{binding:c.currentCells.binding,resource:{buffer:i.nextCellsBuffer}}:U==="nextCells"?{binding:c.nextCells.binding,resource:{buffer:i.prevCellsBuffer}}:U==="uSim"?{binding:c.uSim.binding,resource:{buffer:i.simBuffer,offset:0,size:16}}:{binding:c[U].binding,resource:{buffer:c[U].buffer}})}),g=s.createBindGroupLayout({label:"Render BGL",entries:[{binding:c.uView.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:c.uView.type}},{binding:c.uInput.binding,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:c.uInput.type}},{binding:c.outputTex.binding,visibility:GPUShaderStage.FRAGMENT,buffer:{type:c.outputTex.type}}]}),v=s.createRenderPipeline({label:"Render Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[g],label:"Render Pipeline Layout"}),vertex:{module:u,entryPoint:"vs"},fragment:{module:u,entryPoint:"fs",targets:[{format:h}]},primitive:{topology:"triangle-list"}}),_=s.createComputePipeline({label:"Normal Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Normal Compute Pipeline Layout"}),compute:{module:u,entryPoint:"calc_normals"}}),S=s.createComputePipeline({label:"Cursor Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Cursor Query Pipeline Layout"}),compute:{module:u,entryPoint:"cursor_query"}}),T=s.createComputePipeline({label:"Total Query Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Total Query Pipeline Layout"}),compute:{module:u,entryPoint:"total_query"}}),A=s.createComputePipeline({label:"Chunk Data Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Chunk Data Pipeline Layout"}),compute:{module:u,entryPoint:"chunk_data_calc"}}),k=s.createComputePipeline({label:"Terrain Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Terrain Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"terrain_render"}}),E=s.createComputePipeline({label:"Shadow Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Shadow Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"shadow_render"}}),q=s.createComputePipeline({label:"Fluid Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Fluid Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"fluid_render"}}),O=s.createComputePipeline({label:"Debug Texture Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Debug Texture Compute Pipeline Layout"}),compute:{module:u,entryPoint:"debug_render"}}),Y=s.createComputePipeline({label:"Sprite Render Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Sprite Render Compute Pipeline Layout"}),compute:{module:u,entryPoint:"sprite_render"}}),Q=s.createComputePipeline({label:"Step Compute Pipeline",layout:s.createPipelineLayout({bindGroupLayouts:[f],label:"Step Compute Pipeline Layout"}),compute:{module:u,entryPoint:"step"}}),G=s.createBindGroup({label:"Render BG",layout:g,entries:[{binding:c.uView.binding,resource:{buffer:i.viewUniformBuffer}},{binding:c.uInput.binding,resource:{buffer:i.inputUniformBuffer}},{binding:c.outputTex.binding,resource:{buffer:i.outputTextureBuffer}}]});return{piplines:{renderPipeline:v,normalComputePipeline:_,cursorQueryPipeline:S,totalQueryPipeline:T,chunkDataPipeline:A,terrainTextureComputePipeline:k,shadowTextureComputePipeline:E,fluidTextureComputePipeline:q,debugTextureComputePipeline:O,spriteRenderComputePipeline:Y,stepComputePipeline:Q},bindGroups:{unifiedComputeBG_A:p,unifiedComputeBG_B:y,renderBG:G}}}function fh(s,u){return s.mouse0Held===u.mouse0Held&&s.mouse1Held===u.mouse1Held&&s.mouse2Held===u.mouse2Held&&s.mouse0Pressed===u.mouse0Pressed&&s.mouse1Pressed===u.mouse1Pressed&&s.mouse2Pressed===u.mouse2Pressed&&s.mouseRadius===u.mouseRadius&&s.mouseMoved===u.mouseMoved&&s.cursorType===u.cursorType&&s.mousePosition.x===u.mousePosition.x&&s.mousePosition.y===u.mousePosition.y&&s.visibleRect.x0===u.visibleRect.x0&&s.visibleRect.y0===u.visibleRect.y0&&s.visibleRect.x1===u.visibleRect.x1&&s.visibleRect.y1===u.visibleRect.y1&&s.visibleRect.width===u.visibleRect.width&&s.visibleRect.height===u.visibleRect.height&&s.visibleRectChanged===u.visibleRectChanged&&s.simulationSubSteps===u.simulationSubSteps}const dh={mouse0Held:!1,mouse1Held:!1,mouse2Held:!1,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseRadius:30,mouseMoved:!1,cursorType:"none",mousePosition:{x:0,y:0},visibleRect:{x0:0,y0:0,x1:0,y1:0,width:0,height:0},visibleRectChanged:!1,simulationSubSteps:1};class hh{constructor(){this.winMs=1e3,this.times=[],this.lastCpuStart=0,this.fps=0,this.ema=0,this.cpuMs=0,this.cpuEma=0,this.frameCount=0,this.alpha=.1}begin(){this.lastCpuStart=performance.now()}end(u){this.cpuMs=performance.now()-this.lastCpuStart,this.cpuEma=this.cpuEma?this.cpuEma+this.alpha*(this.cpuMs-this.cpuEma):this.cpuMs,this.times.push(u);const h=u-this.winMs;for(;this.times.length&&this.times[0]<h;)this.times.shift();this.fps=this.times.length*1e3/this.winMs,this.ema=this.ema?this.ema+this.alpha*(this.fps-this.ema):this.fps,this.frameCount++}}const cr=new hh;async function mh(s="./sprites_built"){const[u,h]=await Promise.all([fetch(`${s}/manifest.json`),fetch(`${s}/sprites_u32.bin`)]),i=await u.json(),d=await h.arrayBuffer(),c=new Uint32Array(d),f=new Map;for(const p of i.entries)f.set(p.path,p.index),f.set(p.name,p.index);return{manifest:i,spritesU32:c,spriteMap:f}}const i2=64;async function ph(s,u=Mu,h,i,d,c){if(!s)return()=>{};s.__wgpuCleanup&&s.__wgpuCleanup();const f=!1;var p=!0,y=!0,g=!0;const v=await u3(),_=s.getContext("webgpu"),S=navigator.gpu.getPreferredCanvasFormat();s.style.imageRendering="pixelated",_.__deviceId=v.__id,s.width=u.width*u.pixelScale,s.height=u.height*u.pixelScale,_.configure({device:v,format:S,alphaMode:"opaque"});let T=w3();const A=v.createShaderModule({label:"Rect Shader",code:T});var k=0,E=0,q=0,O=f;const Y=()=>{O=!O},Q=Ze=>{O=Ze},G=r2(v,{width:u.width,height:u.height,time:0,frameIndex:E,showDebug:O,pixelScale:u.pixelScale});function U(){r2(v,{width:u.width,height:u.height,time:k,frameIndex:E,showDebug:O,pixelScale:u.pixelScale},G)}const X=h(),ie=u2(v,{mousePos:X.mousePosition,mouse0Held:X.mouse0Held,mouse1Held:X.mouse1Held,mouseRadius:X.mouseRadius,cursorType:X.cursorType,visibleRect:X.visibleRect}),ae=rh(v,{maxCellValue:u.maxCellValue,terrainHeightMultiplier:u.terrainHeightMultiplier,colorSteps:u.colorSteps},u.colors),ye=uh(v,u.colors),be=256,ce=16,xe=32,Me=v.createBuffer({label:"Sim Index Buffer",size:be*xe,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),me=Ze=>{for(let Ee=0;Ee<xe;Ee++){const yt=new ArrayBuffer(ce);new Uint32Array(yt)[0]=Ze+Ee,v.queue.writeBuffer(Me,Ee*be,yt)}};function j(Ze,Ee,yt){const Ke=Math.ceil(Ze/yt),at=Math.ceil(Ee/yt);return[Ke,at]}const W=16,[ee,se]=j(u.width,u.height,W),x=v.createBuffer({label:"Chunk Data",size:16*ee*se,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(x,0,new Float32Array(4*ee*se));function H(Ze){u2(v,{mousePos:Ze.mousePosition,mouse0Held:Ze.mouse0Held,mouse1Held:Ze.mouse1Held,mouse2Held:Ze.mouse2Held,mouseRadius:Ze.mouseRadius,cursorType:Ze.cursorType,visibleRect:Ze.visibleRect},ie)}const N=u.width*u.height*4*4,F=u.width*u.height*4*u.pixelScale*u.pixelScale,ue=v.createBuffer({label:"Output Texture",size:N+F,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(ue,0,new Float32Array((N+F)/4)),console.time("loadPackedSprites");const{manifest:le,spritesU32:_e,spriteMap:$}=await mh();console.timeEnd("loadPackedSprites");const oe=v.createBuffer({label:"Sprite Data",size:_e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.queue.writeBuffer(oe,0,_e);const Ge=12,lt=4*Ge,ot=u.width*u.height*lt,Vt=v.createBuffer({label:"Prev Cells",size:ot,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Rt=v.createBuffer({label:"Next Cells",size:ot,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),on=Ze=>{const Ee=new Float32Array(u.width*u.height*Ge),yt=i3(Ze,u.width,u.height,u.noiseType,u.fractalOctaves,u.fractalLacunarity,u.fractalGain,u.fractalType,u.frequency);for(let Ke=0;Ke<yt.length;Ke++){const at=Ke*Ge;Ee[at]=yt[Ke]*100,Ee[at+8]=Math.floor(Math.random()*8)+0}v.queue.writeBuffer(Vt,0,Ee),v.queue.writeBuffer(Rt,0,Ee),E=0,q=0,y=!0};var tn=u.seed;const st=()=>{on(tn)},bl=()=>{tn=Math.ceil(Math.random()*1e9),st()};st();const Mn=v.createBuffer({label:"Cursor Query",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),te=v.createBuffer({label:"Cursor Query Readback",size:64,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),I=sh(v,A,S,{prevCellsBuffer:Vt,nextCellsBuffer:Rt,terrainBuffer:ae,simBuffer:Me,terrainColorsBuffer:ye,viewUniformBuffer:G,inputUniformBuffer:ie,outputTextureBuffer:ue,cursorQueryBuffer:Mn,chunkDataBuffer:x,spriteDataBuffer:oe}),ve={label:"Canvas RenderPass",colorAttachments:[{terrainView:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},Ne=16,Le=16,Ye=Math.ceil(u.width/Ne),Qe=Math.ceil(u.height/Le);let Re=!0,gt=0;var et=h();let nn=!1;function An(Ze=0){if(_.__deviceId!==v.__id)return;cr.begin();var Ee=h();fh(Ee,et)||(H(Ee),et=Ee);const yt=E%6===0;v.pushErrorScope("validation"),k=Ze*.001,U(),me(q);var Ke=0;const at=v.createCommandEncoder({label:"Encoder"});{const ne=at.beginComputePass({label:"Step Compute Pass"});ne.setPipeline(I.piplines.stepComputePipeline);for(let wn=0;wn<Ee.simulationSubSteps*2;wn++)Ke=wn*be,ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Ye,Qe,1),Re=!Re,q=q+1>>>0,q>4e9&&(q=0);c(q),ne.end()}if((E===0||Ee.mouse0Held||Ee.mouse1Held)&&(g=!0),E<60&&(y=!0,p=!0,g=!0),Ee.visibleRectChanged&&(g=!0),p||y){const ne=at.beginComputePass({label:"Normal Compute Pass"});ne.setPipeline(I.piplines.normalComputePipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Ye,Qe,1),ne.end()}if(y){const ne=at.beginComputePass({label:"Terrain Texture Compute Pass"});ne.setPipeline(I.piplines.terrainTextureComputePipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Ye,Qe,1),ne.end()}if(g||y){const ne=at.beginComputePass({label:"Shadow Texture Compute Pass"});ne.setPipeline(I.piplines.shadowTextureComputePipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Ye,Qe,1),ne.end(),Ee={...Ee,visibleRectChanged:!1}}if(g||y){const ne=at.beginComputePass({label:"Fluid Texture Compute Pass"});ne.setPipeline(I.piplines.fluidTextureComputePipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Ye,Qe,1),ne.end(),Ee={...Ee,visibleRectChanged:!1}}if(E%10==0&&O){const ne=at.beginComputePass({label:"Debug Texture Compute Pass"});ne.setPipeline(I.piplines.debugTextureComputePipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Ye,Qe,1),ne.end()}{const ne=at.beginComputePass({label:"Sprite Render Compute Pass"});ne.setPipeline(I.piplines.spriteRenderComputePipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(Math.ceil(i2/Ne),Math.ceil(i2/Le),1),ne.end()}if(yt){const ne=at.beginComputePass({label:"Cursor Query Pass"});ne.setPipeline(I.piplines.cursorQueryPipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(1,1,1),ne.end()}if(E%60==0){const ne=at.beginComputePass({label:"Total Query Pass"});ne.setPipeline(I.piplines.totalQueryPipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(1,1,1),ne.end()}{const ne=at.beginComputePass({label:"Chunk Data Pass"});ne.setPipeline(I.piplines.chunkDataPipeline),ne.setBindGroup(0,Re?I.bindGroups.unifiedComputeBG_A:I.bindGroups.unifiedComputeBG_B,[Ke]),ne.dispatchWorkgroups(ee,se,1),ne.end()}ve.colorAttachments[0].view=_.getCurrentTexture().createView();{const ne=at.beginRenderPass(ve);ne.setPipeline(I.piplines.renderPipeline),ne.setBindGroup(0,I.bindGroups.renderBG),ne.draw(3),ne.end()}yt&&!nn&&at.copyBufferToBuffer(Mn,0,te,0,64),v.queue.submit([at.finish()]),v.popErrorScope().then(ne=>{ne&&console.error(ne.message)}),yt&&!nn&&(nn=!0,te.mapAsync(GPUMapMode.READ).then(()=>{const ne=new DataView(te.getMappedRange(0,64)),wn=ne.getFloat32(0,!0),ua=ne.getFloat32(16,!0),tl=ne.getFloat32(20,!0),Au=ne.getFloat32(24,!0),sr=ne.getFloat32(28,!0),fr=ne.getFloat32(48,!0),ia=ne.getFloat32(52,!0),ca=ne.getUint32(56,!0);d({height:wn,normal:{x:ua,y:tl,z:Au},fAmount:sr,fluidTotal:fr,antiFluidTotal:ia,chunkUpdates:ca})}).catch(()=>{}).finally(()=>{te.unmap(),nn=!1})),y=!1,g=!1,p=!1,cr.end(Ze),E++,gt=requestAnimationFrame(An)}gt=requestAnimationFrame(An);const sn=()=>{cancelAnimationFrame(gt),G.destroy(),ie.destroy(),ae.destroy(),ye.destroy(),Vt.destroy(),Rt.destroy(),ue.destroy()};return s.__wgpuCleanup=sn,{cleanup:sn,resetMap:st,randomizeMap:bl,toggleShowDebug:Y,setShowDebug:Q,spriteMap:$}}const gh=P.forwardRef(({noiseSettings:s=Mu,inputRef:u,setInput:h,setWebGPUHandle:i,setCursorQuery:d,style:c,setSimIndex:f,children:p},y)=>{const g=P.useRef(null);return P.useImperativeHandle(y,()=>g.current,[]),P.useEffect(()=>{if(!g.current)return;let v=()=>{},_=!1;const S=()=>new Promise(A=>requestAnimationFrame(()=>A())),T=()=>new Promise(A=>window.requestIdleCallback?window.requestIdleCallback(()=>A()):requestAnimationFrame(()=>A()));return(async()=>{if(await S(),_||(await T(),_))return;const A=await ph(g.current,s,()=>u.current,h,d,f);if(_){A.cleanup?.();return}v=A.cleanup,i(A)})(),()=>{_=!0,v?.()}},[s,h,i,d]),b.jsx("canvas",{ref:g,style:{...c,display:"block",width:"100%",height:"100%"},children:p})}),yh=$t.memo(gh,(s,u)=>s.noiseSettings===u.noiseSettings&&s.children===u.children),vh={height:0,fAmount:0,normal:{x:0,y:0,z:0},fluidTotal:0,antiFluidTotal:0,chunkUpdates:0};function xh({cursorQuery:s}){var c=Math.ceil(s.height),f=Math.abs(s.fAmount<0?Math.floor(s.fAmount):Math.ceil(s.fAmount));f+c>200&&(f=200-c);const p=c/200*150,y=f/200*150;var g="";return f>0&&(Math.abs(s.fAmount)<1?g=" < 1":g=`${f}`),b.jsxs("div",{style:{position:"absolute",bottom:"5px",right:"5px",fontSize:"20px"},children:[b.jsx("div",{style:{position:"absolute",bottom:"0px",width:"50px",height:"150px",border:"solid 4px white",zIndex:2}}),b.jsx("div",{style:{width:"50px",height:`${y}px`,backgroundColor:s.fAmount<0?"rgba(196, 196, 199, 1)":"rgba(26, 39, 187, 1)",position:"relative",borderRadius:"0px"},children:b.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",height:`${20*2.5}px`,textAlign:"center"},children:g})}),b.jsx("div",{style:{width:"50px",height:`${p}px`,backgroundColor:"rgba(15, 84, 9, 1)",position:"relative"},children:b.jsx("div",{style:{position:"absolute",bottom:"0px",width:"100%",textAlign:"center"},children:s.height>0?`${c}`:""})})]})}function bh({input:s}){return b.jsx("div",{style:{position:"absolute",bottom:"5px",left:"5px"},children:`(${s.mousePosition.x}, ${s.mousePosition.y})`})}const Fe=({children:s})=>b.jsx("kbd",{style:{padding:"0.1rem 0.4rem",borderRadius:4,background:"#1f2937",border:"1px solid #374151",fontSize:"0.85rem",marginRight:6},children:s});function _h(){return b.jsx("div",{style:{position:"absolute",top:"5px",right:"5px",pointerEvents:"none"},children:b.jsx(en,{className:"bg-dark text-light shadow ",style:{width:380,pointerEvents:"none",borderRadius:12},children:b.jsxs(en.Body,{style:{padding:"0.9rem 1rem"},children:[b.jsx(en.Title,{style:{fontSize:16,marginBottom:8},children:"Controls"}),b.jsxs("div",{style:{fontSize:14,lineHeight:1.6,marginBottom:8},children:[b.jsxs("div",{children:[b.jsx(Fe,{children:"F11"})," — Toggle Fullscreen"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"F9"})," — Toggle Controls"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"F8"})," — Toggle Debug Stats"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"W"}),b.jsx(Fe,{children:"A"}),b.jsx(Fe,{children:"S"}),b.jsx(Fe,{children:"D"})," or ",b.jsx(Fe,{children:"←"}),b.jsx(Fe,{children:"→"}),b.jsx(Fe,{children:"↑"}),b.jsx(Fe,{children:"↓"})," — Pan Camera"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"ScrollWheel"})," — Zoom"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"Shift"})," +"," ",b.jsx(Fe,{children:"ScrollWheel"})," — Change Brush Radius"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"LMB"}),"/",b.jsx(Fe,{children:"RMB"})," — (Paint / Remove) Fluid"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"Spacebar"})," — Toggle Pause"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"Tab"})," / ",b.jsx(Fe,{children:"Shift"}),"+",b.jsx(Fe,{children:"Tab"})," — Increase / Decrease Speed"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"C"})," — Clear Map"]}),b.jsxs("div",{children:[b.jsx(Fe,{children:"R"})," — Randmoize Map"]})]})]})})})}var Sh=["color","size","title","className"];function Kc(){return Kc=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var h=arguments[u];for(var i in h)({}).hasOwnProperty.call(h,i)&&(s[i]=h[i])}return s},Kc.apply(null,arguments)}function Ch(s,u){if(s==null)return{};var h,i,d=Th(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)h=c[i],u.indexOf(h)===-1&&{}.propertyIsEnumerable.call(s,h)&&(d[h]=s[h])}return d}function Th(s,u){if(s==null)return{};var h={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;h[i]=s[i]}return h}var B2=P.forwardRef(function(s,u){var h=s.color,i=h===void 0?"currentColor":h,d=s.size,c=d===void 0?"1em":d,f=s.title,p=f===void 0?null:f,y=s.className,g=y===void 0?"":y,v=Ch(s,Sh);return $t.createElement("svg",Kc({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-pause-fill",g].filter(Boolean).join(" ")},v),p?$t.createElement("title",null,p):null,$t.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"}))});B2.propTypes={color:pt.string,size:pt.oneOfType([pt.string,pt.number]),title:pt.string,className:pt.string};var Rh=["color","size","title","className"];function Jc(){return Jc=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var h=arguments[u];for(var i in h)({}).hasOwnProperty.call(h,i)&&(s[i]=h[i])}return s},Jc.apply(null,arguments)}function Dh(s,u){if(s==null)return{};var h,i,d=zh(s,u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)h=c[i],u.indexOf(h)===-1&&{}.propertyIsEnumerable.call(s,h)&&(d[h]=s[h])}return d}function zh(s,u){if(s==null)return{};var h={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(u.indexOf(i)!==-1)continue;h[i]=s[i]}return h}var G2=P.forwardRef(function(s,u){var h=s.color,i=h===void 0?"currentColor":h,d=s.size,c=d===void 0?"1em":d,f=s.title,p=f===void 0?null:f,y=s.className,g=y===void 0?"":y,v=Dh(s,Rh);return $t.createElement("svg",Jc({ref:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:i,className:["bi","bi-play-fill",g].filter(Boolean).join(" ")},v),p?$t.createElement("title",null,p):null,$t.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"}))});G2.propTypes={color:pt.string,size:pt.oneOfType([pt.string,pt.number]),title:pt.string,className:pt.string};const Ot=[.5,1,2,3],U2=(s,u,h)=>Math.min(h,Math.max(u,s));function Mh(s,u=!0){if(u){var h=(Ot.indexOf(s)+1)%Ot.length;return Ot[h]}else{var h=U2(Ot.indexOf(s)+1,0,Ot.length-1);return Ot[h]}}function Ah(s,u=!0){if(u){var h=(Ot.indexOf(s)-1+Ot.length)%Ot.length;return Ot[h]}else{var h=U2(Ot.indexOf(s)-1,0,Ot.length-1);return Ot[h]}}function wh({gameSpeed:s,paused:u,onChange:h,setCursorOverUI:i,setCursorMode:d,className:c,size:f}){const p=T=>h({paused:!1,gameSpeed:T}),y=()=>h({paused:!u,gameSpeed:s}),[g,v]=P.useState(null),_=40,S={backgroundColor:"rgba(99, 99, 99, 0.57)",color:"white",border:"4px solid white",borderRadius:0,fontSize:"20px",width:_,height:_,padding:"0px",display:"grid",placeItems:"center",outline:"none",boxShadow:"none",cursor:"none"};return b.jsx("div",{style:{position:"absolute",bottom:"5px",right:"75px",pointerEvents:"auto"},children:b.jsxs(Fc,{className:`${c} rounded-0`,size:f,style:{border:"none"},onMouseEnter:()=>{i(!0),d("link")},onMouseLeave:()=>{i(!1),d("default")},children:[b.jsx(xl,{type:"button",variant:"primary",onClick:y,onMouseEnter:()=>v(0),onMouseLeave:()=>v(null),"aria-pressed":u,"aria-label":u?"Resume":"Pause",style:{...S,color:g!==0?"white":"red"},children:u?b.jsx(G2,{}):b.jsx(B2,{})}),Ot.map(T=>b.jsx(xl,{type:"button",variant:s===T&&!u?"primary":"outline-secondary",active:s===T&&!u,onClick:()=>p(T),onMouseEnter:()=>v(T),onMouseLeave:()=>v(null),"aria-pressed":s===T&&!u,"aria-label":T<1?`1/${Math.round(1/T)}x gameSpeed`:`${T}x gameSpeed`,style:{...S,color:s===T&&!u||g===T?"white":"gray",marginLeft:"-4px",fontSize:T<1?"15px":""},children:T<1?`1/${Math.round(1/T)}x`:`${T}x`},T))]})})}function Eh({cursorQuery:s,gameSpeed:u,mode:h="full",simIndex:i}){const[d,c]=P.useState(0),[f,p]=P.useState(0),[y,g]=P.useState(0);P.useEffect(()=>{const T=setInterval(()=>{c(cr.fps),p(cr.cpuMs),g(cr.frameCount)},250);return()=>clearInterval(T)},[]);const v=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}),_=`${f.toFixed(2)}`.padStart(5,"0"),S=s.chunkUpdates*16*16*u*4;return h=="simple"?b.jsx("div",{children:`FPS: ${d}`}):b.jsx(en,{className:"bg-dark text-light shadow ",style:{width:450,pointerEvents:"none",borderRadius:12,fontSize:18},children:b.jsxs(en.Body,{style:{padding:"0.9rem 1rem"},children:[b.jsxs(en.Title,{style:{fontSize:16,marginBottom:8},children:["Debug Stats - Press ",b.jsx(Fe,{children:"F8"})," to close"]}),b.jsx("div",{children:`FPS: ${d} (Frame Duration: ${_} ms) (Frames: ${v.format(y)})`}),b.jsx("div",{children:`Simulation Steps: ${v.format(i)}`}),b.jsx("div",{children:`Chunk Updates: ${v.format(s.chunkUpdates)}`}),b.jsx("div",{children:`Cell Updates per frame: ${v.format(S)}`}),b.jsx("div",{children:`Total Fluid: ${v.format(Math.ceil(s.fluidTotal))}`}),b.jsx("div",{children:`Total Anti Fluid: ${v.format(Math.ceil(s.antiFluidTotal))}`}),b.jsx("div",{children:`Total Combined Fluid: ${v.format(Math.ceil(s.fluidTotal-s.antiFluidTotal))}`})]})})}function Oh({setCursorOverUI:s,setCursorMode:u,tabs:h,initialActiveKey:i=null,onTabChange:d,panelHeight:c=150,className:f,children:p,closeOnEscape:y=!0,closeOnOutsideClick:g=!0,hotkey:v="b"}){const _={imageRendering:"pixelated",pointerEvents:"none",aspectRatio:"initial",width:"100%"},S={width:"100px",height:"100px",background:"none",backgroundColor:"none",borderRadius:"0px",border:"solid 4px white",padding:12,boxShadow:"none",cursor:"none"},T=P.useMemo(()=>[{key:"terrain",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Terrain",description:"Raise/Lower/Level the height of the terrain",onClick:()=>{x()}},{key:"fluid",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Fluid",description:"Add or remove fluid.",onClick:()=>{x()}},{key:"antifluid",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Anti-Fluid",description:"Add or remove anti-fluid.",onClick:()=>{x()}}],[]),A=P.useMemo(()=>[{key:"shooter",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Shooter",description:"A basic short range projectile tower.",onClick:()=>{x()}},{key:"cryo",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Cryo",description:"A special tower than can flash freeze fluid in place.",onClick:()=>{x()}},{key:"beam",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Beam",description:"A tower that uses concentrated solar rays to evaporate fluid.",onClick:()=>{x()}},{key:"electro",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Electro",description:"An electric based tower that shocks the fluid surface speeding up evaporation in an area.",onClick:()=>{x()}},{key:"neutralizer",icon:b.jsx("img",{src:"./sprites/sprayer.png",style:_}),label:"Neutralizer",description:"An tower that sprays anit-fluid that destroies fluid on contact.",onClick:()=>{x()}}],[]),k=P.useMemo(()=>[{key:"terraformer",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Terraformer",description:"A special tower than can raise/lower the terrain height.",onClick:()=>{x()}},{key:"packer",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Packer",description:"A preventative tower than can temporarily soak up small amount of fluid.",onClick:()=>{x()}},{key:"repulsor",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Repulsor",description:"A tower that creates fields to push back fluid.",onClick:()=>{x()}},{key:"alarm",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Alarm",description:"An tower that sounds an alarm when fluid gets in a detection radius.",onClick:()=>{x()}}],[]),E=P.useMemo(()=>[{key:"solarPanel",icon:b.jsx("img",{src:"./sprites/solar_panel.png",style:_}),label:"Solar Panel",description:"Generates energy in the sun.",onClick:()=>{x()}},{key:"biomassBurner",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Biomass Burner",fontSize:14,description:"Burns biomass to generate small amounts of power.",onClick:()=>{x()}}],[]),q=P.useMemo(()=>[{key:"connector",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Connector",description:"A multi-purpose connection node used to transfer power and resources a short.",onClick:()=>{x()}},{key:"longConnector",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Long Connector",fontSize:14,description:"A multi-purpose connection node used to transfer power and resources a far distance.",onClick:()=>{x()}},{key:"farmer",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Farmer",description:"An automated farming plot used to generate biomass resources. Requires light to operate.",onClick:()=>{x()}},{key:"light",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Light",description:"A powered light source that requires a large amount of energy to operate.",onClick:()=>{x()}},{key:"battery",icon:b.jsx("img",{src:"./sprites/shooter.png",style:_}),label:"Battery",description:"A way to store electric power.",onClick:()=>{x()}}],[]),O=$=>b.jsx("div",{className:"d-flex w-100 justify-content-center align-items-top gap-3",children:$.map(oe=>b.jsxs("div",{style:{width:S.width,display:"grid",placeItems:"center"},children:[b.jsx(xl,{disabled:oe.disabled,style:S,onClick:oe.onClick,onMouseEnter:()=>{oe.disabled||(me(oe.label??null),W(oe.description??null),u("link"))},onMouseLeave:()=>{oe.disabled||(me(null),W(null),u("default"))},children:oe.icon},`${oe.key}-build-button`),b.jsx("p",{style:{textAlign:"center",fontSize:oe.fontSize??16,whiteSpace:"nowrap"},children:oe.label},`${oe.key}-build-button-label`)]},`${oe.key}-build-group`))}),Y=P.useMemo(()=>[{key:"terraform",icon:b.jsx("img",{src:"./icons/icon_paintbrush.png",style:_}),label:"Terraform",hotkey:"1",content:O(T)},{key:"econ",icon:b.jsx("img",{src:"./icons/icon_coin.png",style:_}),label:"Economy",hotkey:"2",content:O(E)},{key:"infrastructure",icon:b.jsx("img",{src:"./icons/icon_power.png",style:_}),label:"Infrastructure",hotkey:"3",content:O(q)},{key:"groundUnits",icon:b.jsx("img",{src:"./icons/icon_shield.png",style:_}),label:"Ground Units",hotkey:"4",content:O(A)},{key:"specialUnits",icon:b.jsx("img",{src:"./icons/icon_shield.png",style:_}),label:"Special Units",hotkey:"5",content:O(k)}],[]),Q=h?.length?h:Y,[G,U]=P.useState(i),[X,ie]=P.useState(i),[ae,ye]=P.useState(i),be=P.useRef(null),[ce,xe]=P.useState(null),[Me,me]=P.useState(null),[j,W]=P.useState(null),ee=$=>{const oe=G===$?null:$;U(oe),d?.(oe),oe!=null&&ie(oe)},se=()=>{X!=null&&ee(X)},x=()=>{U(null),d?.(null)},H=48,J=44,N=44,ue={borderTop:"solid white 4px",borderLeft:"solid white 4px",borderRight:"solid white 4px",borderBottom:"none",borderRadius:"0px 0px 0px 0px",width:J,height:N,margin:`0px ${2.5}px`,backgroundColor:"rgba(0,0,0,.35)",background:"none",display:"inline-flex",alignItems:"flex-start",padding:"4px",transition:"ease-in-out 250ms",cursor:"none"},le={...ue,height:N*2},_e={...ue,height:N*1.5};return P.useEffect(()=>{if(!g)return;const $=oe=>{if(!G)return;const Ge=oe.target;if(!Ge)return;const lt=be.current;lt&&(lt.contains(Ge)||(U(null),d?.(null)))};return window.addEventListener("pointerdown",$,!0),()=>window.removeEventListener("pointerdown",$,!0)},[G,g,d]),P.useEffect(()=>{const $=oe=>{oe.key==="Escape"&&G?x():oe.key===v?G?G&&x():se():Q.forEach(Ge=>{oe.key==Ge.hotkey&&ee(Ge.key)})};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[G,y,d]),b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
        .tabButton:hover
        {
            height: ${N+4}px;
        }
      `}),b.jsx("div",{className:f,style:{position:"absolute",left:0,right:0,bottom:0,pointerEvents:"none",zIndex:10,cursor:"none"},children:b.jsxs("div",{ref:be,style:{position:"absolute",left:0,right:0,bottom:0,height:c+H,transform:G?"translateY(0)":`translateY(${c}px)`,transition:"transform 220ms ease",display:"flex",flexDirection:"column",pointerEvents:"none"},children:[b.jsx("div",{style:{height:H,display:"flex",justifyContent:"start",alignItems:"flex-end",gap:8,padding:"0 12px",paddingLeft:"100px",borderTopLeftRadius:16,borderTopRightRadius:16},children:b.jsx(Fc,{style:{display:"inline-flex",alignItems:"flex-end",pointerEvents:"auto"},onMouseDown:$=>$.preventDefault(),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:Q.map($=>{const oe=G===$.key,Ge=ae===$.key;return b.jsx(xl,{className:"tabButton",onClick:()=>!$.disabled&&ee($.key),onMouseEnter:()=>{!$.disabled&&ye($.key),u("link"),me($.label??null)},onMouseLeave:()=>{!$.disabled&&ye(null),u("default"),me(null)},disabled:$.disabled,style:oe?le:Ge?_e:ue,"aria-label":$.label,children:$.icon},$.key)})})}),b.jsx(en,{text:"light",style:{height:c,borderRadius:0,margin:0,boxShadow:G?"0 -6px 18px rgba(0,0,0,.45)":"none",pointerEvents:G?"auto":"none",backgroundColor:"rgba(46, 44, 44, 0.51)",borderTop:"solid white 4px"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:b.jsx(en.Body,{style:{display:"flex",gap:12,alignItems:"stretch",justifyContent:"flex-start",padding:12},children:G?Q.find($=>$.key===G)?.content??b.jsxs("div",{style:{opacity:.8,fontSize:14},children:[b.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",b.jsx("b",{children:G}),"tab."]}),b.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]}):Q.find($=>$.key===X)?.content??b.jsxs("div",{style:{opacity:.8,fontSize:14},children:[b.jsxs("p",{style:{marginBottom:8},children:["Add your build buttons here for the ",b.jsx("b",{children:G})," ","tab."]}),b.jsx("p",{style:{margin:0},children:"This area is fully customizable."})]})})}),b.jsxs("div",{style:{position:"relative",bottom:c},children:[p,b.jsxs("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translate(-50%)",display:"grid",placeItems:"center"},children:[b.jsx("p",{children:Me}),b.jsx("p",{children:j})]})]})]})})]})}const Vh=({mode:s,images:u,containerRef:h,zIndex:i=1e4,pixelated:d=!1,hideNativeCursor:c=!0,visible:f=!0,disabled:p=!1})=>{if(!h)return;const y=P.useRef(null),[g,v]=P.useState({x:-9999,y:-9999}),_=P.useRef({x:-9999,y:-9999}),S=P.useRef(null),T=u[s]??u.default;P.useEffect(()=>{Object.values(u).forEach(({src:k})=>{const E=new Image;E.src=k})},[u]),P.useEffect(()=>{if(p)return;h?.current??window.document.documentElement;const k=O=>{if(h?.current){const Y=h.current.getBoundingClientRect(),Q=O.clientX-Y.left,G=O.clientY-Y.top;_.current={x:Q,y:G}}else _.current={x:O.clientX,y:O.clientY};S.current==null&&(S.current=requestAnimationFrame(()=>{v(_.current),S.current=null}))},E=()=>{v({x:-9999,y:-9999})},q=h?.current??window;return q.addEventListener("mousemove",k),q.addEventListener("mouseleave",E),()=>{q.removeEventListener("mousemove",k),q.removeEventListener("mouseleave",E),S.current&&cancelAnimationFrame(S.current)}},[h,p]),P.useLayoutEffect(()=>{if(!c)return;const k=h?.current??document.body,E=k.style.cursor;return k.style.cursor=p?"":"none",()=>{k.style.cursor=E}},[h,c,p]);const A=P.useMemo(()=>{const k=T?.width,E=T?.height,q=T?.hotspotX??0,O=T?.hotspotY??0;return{position:h?.current?"absolute":"fixed",left:0,top:0,transform:`translate(${g.x-q}px, ${g.y-O}px)`,width:k,height:E,pointerEvents:"none",zIndex:i,imageRendering:d?"pixelated":void 0,willChange:"transform"}},[g,T,i,d,h]);return p||!T||!f?null:b.jsx("img",{ref:y,src:T.src,alt:"",style:A,draggable:!1})};function Hh({containerRef:s,settings:u,setSettings:h,input:i,setInput:d,cursorQuery:c,paused:f,setPaused:p,gameSpeed:y,setGameSpeed:g,simIndex:v,showControlsUI:_,showDebugUI:S,cursorVisible:T,cursorMode:A,setCursorMode:k,setCursorOverUI:E}){const q={default:{src:"./cursors/pointer.png",width:24,height:24,hotspotX:2,hotspotY:2},link:{src:"./cursors/link.png",width:24,height:24,hotspotX:2,hotspotY:2},grab:{src:"./cursors/grab_hover.png",width:24,height:24,hotspotX:12,hotspotY:12},grabbing:{src:"./cursors/grab.png",width:24,height:24,hotspotX:12,hotspotY:12}};return b.jsxs("div",{style:{width:"100%",height:"100%",position:"fixed",left:0,top:0,color:"white",fontSize:"20px",pointerEvents:"none",fontFamily:'"Tiny 5", sans-serif',fontWeight:400},children:[b.jsx("div",{id:"output"}),_&&b.jsx(_h,{}),b.jsx("div",{style:{position:"absolute",top:"5px",left:"5px"},children:b.jsx(Eh,{cursorQuery:c,gameSpeed:y,simIndex:v,mode:S?"full":"simple"})}),b.jsxs(Oh,{setCursorOverUI:E,setCursorMode:k,children:[b.jsx(bh,{input:i}),b.jsx(wh,{gameSpeed:y,paused:f,onChange:({paused:O,gameSpeed:Y})=>{p(O),g(Y),d({...i,simulationSubSteps:O?0:Y})},setCursorOverUI:E,setCursorMode:k}),b.jsx(xh,{cursorQuery:c})]}),b.jsx(Vh,{mode:A,images:q,containerRef:s,pixelated:!0,zIndex:999999,visible:T})]})}const Bh=s=>{const u=s;if(!u)return!1;const h=u.tagName?.toLowerCase();return h==="input"||h==="textarea"||u.isContentEditable||h==="select"},Dn=(s,u,h)=>Math.min(h,Math.max(u,s)),c2=(s,u,h,i)=>{const d=Math.max(0,(h-s)/2),c=Math.max(0,(i-u)/2);return{xMin:-d,xMax:d,yMin:-c,yMax:c}};function Gh(){const[s,u]=P.useState(Mu),h=P.useRef(null),[i,d]=$t.useState(!1),[c,f]=$t.useState(1),[p,y]=P.useState(0),[g,v]=P.useState(!0),[_,S]=P.useState(!1),[T,A]=P.useState(!1),[k,E]=P.useState("default");P.useEffect(()=>{O(N=>({...N,cursorType:T?"none":"radius"}))},[T]);const[q,O]=P.useState(dh),Y=P.useRef(q);P.useEffect(()=>{Y.current=q},[q]);const[Q,G]=P.useState(vh),U=P.useRef(null),[X,ie]=P.useState({width:1920,height:1080}),[ae,ye]=P.useState({x:0,y:0}),[be,ce]=P.useState(!1),[xe,Me]=P.useState(2),[me,j]=P.useState(null),W=P.useRef(null);P.useEffect(()=>{W.current=me},[me]);const ee=P.useRef(null),se=P.useCallback((N,F,ue,le=!1)=>{const _e=U.current;if(!_e)return;const $=N!==void 0&&F!==void 0?{x:N,y:F}:ee.current;if(!$)return;const oe=_e.getBoundingClientRect();if(oe.width===0||oe.height===0)return;const Ge=_e.width/s.pixelScale/oe.width,lt=_e.height/s.pixelScale/oe.height,ot=Math.floor(($.x-oe.left)*Ge),Vt=Math.floor(($.y-oe.top)*lt);O(Rt=>{const on=Dn(ot,0,s.width-1),tn=Dn(Vt,0,s.height-1);return!le&&Rt.mousePosition.x===on&&Rt.mousePosition.y===tn?Rt:{...Rt,mousePosition:{x:on,y:tn},mouseMoved:le,cursorVisible:ue==null||ue==U.current}})},[s.width,s.height,s.pixelScale]),x=P.useCallback((N,F)=>{const ue=U.current;if(!ue)return{x:0,y:0};const le={x:N,y:F},_e=ue.getBoundingClientRect();if(_e.width===0||_e.height===0)return{x:0,y:0};const $=ue.width/s.pixelScale/_e.width,oe=ue.height/s.pixelScale/_e.height,Ge=Math.floor((le.x-_e.left)*$),lt=Math.floor((le.y-_e.top)*oe),ot=Dn(Ge,0,s.width-1),Vt=Dn(lt,0,s.height-1);return{x:ot,y:Vt}},[s.width,s.height,s.pixelScale]);P.useEffect(()=>{const N=new Set;let F=0,ue=performance.now();const le=600;W.current?.setShowDebug(_);const _e=()=>{const te=window.innerWidth,I=window.innerHeight,ve=s.width/s.height;let Ne=te,Le=Ne/ve;return Le<I&&(Le=I,Ne=Le*ve),{vw:te,vh:I,baseW:Ne,baseH:Le}},$=()=>{const{vw:te,baseW:I}=_e();return te/I},oe=te=>{if(Bh(te.target))return;const I=te.key.toLowerCase();(I==="w"||I==="a"||I==="s"||I==="d"||I==="arrowup"||I==="arrowleft"||I==="arrowdown"||I==="arrowright")&&(N.add(I),te.preventDefault());const ve=()=>{d(Ye=>{let Qe=!Ye;return O(Re=>({...Re,simulationSubSteps:Qe?0:Math.ceil(c)})),Qe}),te.preventDefault()},Ne=()=>{f(Ye=>{let Qe=Mh(Ye,!1);return O(Re=>({...Re,simulationSubSteps:i?0:Math.ceil(Qe)})),Qe}),te.preventDefault()},Le=()=>{f(Ye=>{let Qe=Ah(Ye,!1);return O(Re=>({...Re,simulationSubSteps:i?0:Math.ceil(Qe)})),Qe}),te.preventDefault()};te.code=="Space"?ve():te.code=="Tab"?(i?ve():te.shiftKey?Le():Ne(),te.preventDefault()):te.code=="F9"?(v(Ye=>!Ye),te.preventDefault()):te.code=="F8"?(S(Ye=>(W.current?.setShowDebug(!Ye),!Ye)),te.preventDefault()):te.code=="KeyC"?(W.current?.resetMap(),te.preventDefault()):!te.ctrlKey&&te.code=="KeyR"&&(W.current?.randomizeMap(),te.preventDefault())},Ge=te=>{const I=te.key.toLowerCase();N.delete(I)};function lt(te,I,ve,Ne){const Le=Math.max(te/ve,I/Ne),Ye=Math.min(te*4/ve,I*4/Ne);return{minScale:Le,maxScale:Ye}}function ot(){const te=window.innerWidth,I=window.innerHeight,ve=s.width/s.height;let Ne=te,Le=Ne/ve;Le<I&&(Le=I,Ne=Le*ve);const{minScale:Ye,maxScale:Qe}=lt(te,I,Ne,Le),Re=Math.min(Math.max(xe,Ye),Qe),gt=Ne*Re,et=Le*Re,{xMin:nn,xMax:An,yMin:sn,yMax:el}=c2(te,I,gt,et);ie({width:gt,height:et}),ye(Ze=>({x:Dn(Ze.x,nn,An),y:Dn(Ze.y,sn,el)})),requestAnimationFrame(()=>se()),J()}const Vt=te=>{let I=0,ve=0;if((N.has("w")||N.has("arrowup"))&&(ve-=1),(N.has("s")||N.has("arrowdown"))&&(ve+=1),(N.has("a")||N.has("arrowleft"))&&(I-=1),(N.has("d")||N.has("arrowright"))&&(I+=1),I!==0||ve!==0){const Ne=Math.hypot(I,ve)||1;I/=Ne,ve/=Ne;const Le=window.innerWidth,Ye=window.innerHeight,Qe=X.width,Re=X.height,{xMin:gt,xMax:et,yMin:nn,yMax:An}=c2(Le,Ye,Qe,Re);ye(sn=>({x:Dn(sn.x-I*le*xe*te,gt,et),y:Dn(sn.y-ve*le*xe*te,nn,An)})),requestAnimationFrame(()=>se()),J()}};function Rt(te){te.preventDefault();const I=Math.sign(te.deltaY)*-1;if(te.shiftKey)O(ve=>{const Ne=.1*ve.mouseRadius*I,Le=Math.min(Math.max(5,ve.mouseRadius+Ne),s.width/2);return{...ve,mouseRadius:Le}});else{const ve=$(),Ne=4;Me(Le=>Dn(Le+.1*Le*I,ve,Ne))}}function on(te){ee.current={x:te.clientX,y:te.clientY},se(te.clientX,te.clientY,te.target,!0)}const tn=te=>{te.button===2&&te.preventDefault(),O(I=>{const ve={...I};return te.button===0&&(ve.mouse0Held=!0,ve.mouse0Pressed=!0),te.button===1&&(ve.mouse1Held=!0,ve.mouse1Pressed=!0),te.button===2&&(ve.mouse2Held=!0,ve.mouse2Pressed=!0),ve})},st=te=>{O(I=>{const ve={...I};return te.button===0&&(ve.mouse0Held=!1,ve.mouse0Pressed=!1),te.button===1&&(ve.mouse1Held=!1,ve.mouse1Pressed=!1),te.button===2&&(ve.mouse2Held=!1,ve.mouse2Pressed=!1),ve})};function bl(te){te.preventDefault()}const Mn=async te=>{const I=(te-ue)/1e3;ue=te,Vt(I),J(),F=requestAnimationFrame(Mn),(Y.current.mouse0Pressed||Y.current.mouse1Pressed||Y.current.mouse2Pressed||Y.current.mouseMoved)&&O(ve=>({...ve,mouse0Pressed:!1,mouse1Pressed:!1,mouse2Pressed:!1,mouseMoved:!1}))};return window.addEventListener("mousemove",on),U.current?.addEventListener("mouseup",st),window.addEventListener("contextmenu",bl),U.current?.addEventListener("mousedown",tn),window.addEventListener("keydown",oe),window.addEventListener("keyup",Ge),U.current?.addEventListener("wheel",Rt,{passive:!1}),window.addEventListener("resize",ot),ot(),F=requestAnimationFrame(Mn),J(),()=>{cancelAnimationFrame(F),window.removeEventListener("mousemove",on),U.current?.removeEventListener("mouseup",st),window.removeEventListener("contextmenu",bl),U.current?.removeEventListener("mousedown",tn),window.removeEventListener("keydown",oe),window.removeEventListener("keyup",Ge),U.current?.removeEventListener("wheel",Rt),window.removeEventListener("resize",ot)}},[X.width,X.height,xe,i,O,d,c,f,v]);const H=P.useRef(null),J=P.useCallback((N=!0)=>{const F=()=>{if(!U.current)return;const le=x(0,0),_e=x(window.innerWidth,window.innerHeight),$={x0:le.x,y0:le.y,x1:_e.x,y1:_e.y,width:_e.x-le.x,height:_e.y-le.y};!$||H.current&&$.x0===H.current.x0&&$.y0===H.current.y0&&$.x1===H.current.x1&&$.y1===H.current.y1||(H.current=$,O(Ge=>({...Ge,visibleRect:$,visibleRectChanged:!0})))};N?requestAnimationFrame(F):F()},[O,x,window.innerWidth,window.innerHeight]);return b.jsx(b.Fragment,{children:b.jsxs("div",{ref:h,id:"windowDiv",style:{position:"fixed",inset:0,width:"100%",height:"100%",backgroundColor:"rgba(1, 1, 1, 1)",overflow:"hidden",display:"grid",placeItems:"center",cursor:"none"},children:[b.jsx("div",{id:"canvasHolder",style:{position:"absolute",backgroundColor:"black",width:X.width,height:X.height,zIndex:-5,display:"grid",placeItems:"center",transform:`translate3d(${ae.x}px, ${ae.y}px, 0)`,transition:be?"transform 360ms ease-out":"none",willChange:"transform"},children:b.jsx(yh,{ref:U,noiseSettings:s,inputRef:Y,setInput:O,setWebGPUHandle:j,setCursorQuery:G,setSimIndex:y})}),b.jsx(Hh,{containerRef:h,settings:s,setSettings:u,input:q,setInput:N=>{O(N)},cursorQuery:Q,paused:i,setPaused:d,gameSpeed:c,setGameSpeed:f,simIndex:p,showControlsUI:g,showDebugUI:_,cursorVisible:T,cursorMode:k,setCursorMode:E,setCursorOverUI:A})]})})}r3.createRoot(document.getElementById("root")).render(b.jsx($t.StrictMode,{children:b.jsx(Gh,{})}));
