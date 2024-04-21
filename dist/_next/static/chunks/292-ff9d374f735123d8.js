"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{1151:function(e,n,t){t.d(n,{B:function(){return u},$:function(){return c}});var r=Object.defineProperty,o=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,a=(e,n,t)=>(o(e,"symbol"!=typeof n?n+"":n,t),t),i=t(7294),u=new class{constructor(){a(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return!!e&&this.modals.get(e)===this.modals.size}};function c(e,n){let[t,r]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let t=e.current;if(t){if(n){let e=u.add(t);r(e)}return()=>{u.remove(t),r(0)}}},[n,e]),t}},4192:function(e,n,t){t.d(n,{h:function(){return nP}});var r,o,a,i=t(6384),u=t(9155),c=t(5432),l=t(1526),d=t(5864),s=t(7294),f=t(5893),v={initial:"initial",animate:"enter",exit:"exit",variants:{initial:({offsetX:e,offsetY:n,transition:t,transitionEnd:r,delay:o})=>{var a;return{opacity:0,x:e,y:n,transition:null!=(a=null==t?void 0:t.exit)?a:u.p$.exit(u.Sh.exit,o),transitionEnd:null==r?void 0:r.exit}},enter:({transition:e,transitionEnd:n,delay:t})=>{var r;return{opacity:1,x:0,y:0,transition:null!=(r=null==e?void 0:e.enter)?r:u.p$.enter(u.Sh.enter,t),transitionEnd:null==n?void 0:n.enter}},exit:({offsetY:e,offsetX:n,transition:t,transitionEnd:r,reverse:o,delay:a})=>{var i;let c={x:n,y:e};return{opacity:0,transition:null!=(i=null==t?void 0:t.exit)?i:u.p$.exit(u.Sh.exit,a),...o?{...c,transitionEnd:null==r?void 0:r.exit}:{transitionEnd:{...c,...null==r?void 0:r.exit}}}}}};(0,s.forwardRef)(function(e,n){let{unmountOnExit:t,in:r,reverse:o=!0,className:a,offsetX:i=0,offsetY:u=8,transition:s,transitionEnd:m,delay:p,...h}=e,y=!t||r&&t,g=r||t?"enter":"exit",b={offsetX:i,offsetY:u,reverse:o,transition:s,transitionEnd:m,delay:p};return(0,f.jsx)(l.M,{custom:b,children:y&&(0,f.jsx)(d.E.div,{ref:n,className:(0,c.cx)("chakra-offset-slide",a),custom:b,...v,animate:g,...h})})}).displayName="SlideFade";var m={initial:"exit",animate:"enter",exit:"exit",variants:{exit:({reverse:e,initialScale:n,transition:t,transitionEnd:r,delay:o})=>{var a;return{opacity:0,...e?{scale:n,transitionEnd:null==r?void 0:r.exit}:{transitionEnd:{scale:n,...null==r?void 0:r.exit}},transition:null!=(a=null==t?void 0:t.exit)?a:u.p$.exit(u.Sh.exit,o)}},enter:({transitionEnd:e,transition:n,delay:t})=>{var r;return{opacity:1,scale:1,transition:null!=(r=null==n?void 0:n.enter)?r:u.p$.enter(u.Sh.enter,t),transitionEnd:null==e?void 0:e.enter}}}};(0,s.forwardRef)(function(e,n){let{unmountOnExit:t,in:r,reverse:o=!0,initialScale:a=.95,className:i,transition:u,transitionEnd:s,delay:v,...p}=e,h=!t||r&&t,y=r||t?"enter":"exit",g={initialScale:a,reverse:o,transition:u,transitionEnd:s,delay:v};return(0,f.jsx)(l.M,{custom:g,children:h&&(0,f.jsx)(d.E.div,{ref:n,className:(0,c.cx)("chakra-offset-slide",i),...m,animate:y,custom:g,...p})})}).displayName="ScaleFade";var p={slideInBottom:{...v,custom:{offsetY:16,reverse:!0}},slideInRight:{...v,custom:{offsetX:16,reverse:!0}},scale:{...m,custom:{initialScale:.95,reverse:!0}},none:{}},h=(0,i.m)(d.E.section),y=e=>p[e||"none"],g=(0,s.forwardRef)((e,n)=>{let{preset:t,motionProps:r=y(t),...o}=e;return(0,f.jsx)(h,{ref:n,...r,...o})});g.displayName="ModalTransition";var b=t(2752),w=t(1151),x=t(7462),E="data-focus-lock",k="data-focus-lock-disabled";function N(e,n){return"function"==typeof e?e(n):e&&(e.current=n),e}var S=new WeakMap;function M(e,n){var t,r,o,a=(t=n||null,r=function(n){return e.forEach(function(e){return N(e,n)})},(o=(0,s.useState)(function(){return{value:t,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade);return s.useLayoutEffect(function(){var n=S.get(a);if(n){var t=new Set(n),r=new Set(e),o=a.current;t.forEach(function(e){r.has(e)||N(e,null)}),r.forEach(function(e){t.has(e)||N(e,o)})}S.set(a,e)},[e]),a}var C={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},O=function(e){var n=e.children;return s.createElement(s.Fragment,null,s.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:C}),n,n&&s.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:C}))};O.propTypes={},O.defaultProps={children:null};var T=function(){return(T=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function P(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}function R(e){return e}function A(e,n){void 0===n&&(n=R);var t=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(e){var o=n(e,r);return t.push(o),function(){t=t.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;t.length;){var n=t;t=[],n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){r=!0;var n=[];if(t.length){var o=t;t=[],o.forEach(e),n=t}var a=function(){var t=n;n=[],t.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),t={push:function(e){n.push(e),i()},filter:function(e){return n=n.filter(e),t}}}}}function I(e,n){return void 0===n&&(n=R),A(e,n)}function F(e){void 0===e&&(e={});var n=A(null);return n.options=T({async:!0,ssr:!1},e),n}"function"==typeof SuppressedError&&SuppressedError;var _=I({},function(e){return{target:e.target,currentTarget:e.currentTarget}}),j=I(),D=I(),L=F({async:!0}),B=[],W=s.forwardRef(function(e,n){var t,r=s.useState(),o=r[0],a=r[1],i=s.useRef(),u=s.useRef(!1),c=s.useRef(null),l=e.children,d=e.disabled,f=e.noFocusGuards,v=e.persistentFocus,m=e.crossFrame,p=e.autoFocus,h=(e.allowTextSelection,e.group),y=e.className,g=e.whiteList,b=e.hasPositiveIndices,w=e.shards,N=void 0===w?B:w,S=e.as,O=void 0===S?"div":S,T=e.lockProps,P=void 0===T?{}:T,R=e.sideCar,A=e.returnFocus,I=e.focusOptions,F=e.onActivation,D=e.onDeactivation,W=s.useState({})[0],G=s.useCallback(function(){c.current=c.current||document&&document.activeElement,i.current&&F&&F(i.current),u.current=!0},[F]),$=s.useCallback(function(){u.current=!1,D&&D(i.current)},[D]);(0,s.useEffect)(function(){d||(c.current=null)},[]);var q=s.useCallback(function(e){var n=c.current;if(n&&n.focus){var t="function"==typeof A?A(n):A;if(t){var r="object"==typeof t?t:void 0;c.current=null,e?Promise.resolve().then(function(){return n.focus(r)}):n.focus(r)}}},[A]),Z=s.useCallback(function(e){u.current&&_.useMedium(e)},[]),U=j.useMedium,Y=s.useCallback(function(e){i.current!==e&&(i.current=e,a(e))},[]),X=(0,x.Z)(((t={})[k]=d&&"disabled",t[E]=h,t),P),H=!0!==f,z=H&&"tail"!==f,K=M([n,Y]);return s.createElement(s.Fragment,null,H&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:d?-1:0,style:C}),b?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:d?-1:1,style:C}):null],!d&&s.createElement(R,{id:W,sideCar:L,observed:o,disabled:d,persistentFocus:v,crossFrame:m,autoFocus:p,whiteList:g,shards:N,onActivation:G,onDeactivation:$,returnFocus:q,focusOptions:I}),s.createElement(O,(0,x.Z)({ref:K},X,{className:y,onBlur:U,onFocus:Z}),l),z&&s.createElement("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:C}))});W.propTypes={},W.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var G=t(5068);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var q=function(e){for(var n=Array(e.length),t=0;t<e.length;++t)n[t]=e[t];return n},Z=function(e){return Array.isArray(e)?e:[e]},U=function(e){return Array.isArray(e)?e[0]:e},Y=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e,null);return!!n&&!!n.getPropertyValue&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility"))},X=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},H=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},z=function(e,n){var t,r=e.get(n);if(void 0!==r)return r;var o=(t=z.bind(void 0,e),!n||H(n)||!Y(n)&&t(X(n)));return e.set(n,o),o},K=function(e,n){var t,r=e.get(n);if(void 0!==r)return r;var o=(t=K.bind(void 0,e),!n||!!H(n)||!!ee(n)&&t(X(n)));return e.set(n,o),o},V=function(e){return e.dataset},J=function(e){return"INPUT"===e.tagName},Q=function(e){return J(e)&&"radio"===e.type},ee=function(e){return![!0,"true",""].includes(e.getAttribute("data-no-autofocus"))},en=function(e){var n;return!!(e&&(null===(n=V(e))||void 0===n?void 0:n.focusGuard))},et=function(e){return!en(e)},er=function(e){return!!e},eo=function(e,n){var t=e.tabIndex-n.tabIndex,r=e.index-n.index;if(t){if(!e.tabIndex)return 1;if(!n.tabIndex)return -1}return t||r},ea=function(e,n,t){return q(e).map(function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!n||e.tabIndex>=0}).sort(eo)},ei="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",eu="".concat(ei,", [data-focus-guard]"),ec=function(e,n){return q((e.shadowRoot||e).children).reduce(function(e,t){return e.concat(t.matches(n?eu:ei)?[t]:[],ec(t))},[])},el=function(e,n){var t;return e instanceof HTMLIFrameElement&&(null===(t=e.contentDocument)||void 0===t?void 0:t.body)?ed([e.contentDocument.body],n):[e]},ed=function(e,n){return e.reduce(function(e,t){var r,o=ec(t,n),a=(r=[]).concat.apply(r,o.map(function(e){return el(e,n)}));return e.concat(a,t.parentNode?q(t.parentNode.querySelectorAll(ei)).filter(function(e){return e===t}):[])},[])},es=function(e,n){return q(e).filter(function(e){return z(n,e)}).filter(function(e){return!((J(e)||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))})},ef=function(e,n){return void 0===n&&(n=new Map),q(e).filter(function(e){return K(n,e)})},ev=function(e,n,t){return ea(es(ed(e,t),n),!0,t)},em=function(e,n){return ea(es(ed(e),n),!1)},ep=function(e,n){return e.shadowRoot?ep(e.shadowRoot,n):!!(void 0!==Object.getPrototypeOf(e).contains&&Object.getPrototypeOf(e).contains.call(e,n))||q(e.children).some(function(e){var t;if(e instanceof HTMLIFrameElement){var r=null===(t=e.contentDocument)||void 0===t?void 0:t.body;return!!r&&ep(r,n)}return ep(e,n)})},eh=function(e){try{return e()}catch(e){return}},ey=function(e){if(void 0===e&&(e=document),e&&e.activeElement){var n=e.activeElement;return n.shadowRoot?ey(n.shadowRoot):n instanceof HTMLIFrameElement&&eh(function(){return n.contentWindow.document})?ey(n.contentWindow.document):n}},eg=function(e){void 0===e&&(e=document);var n=ey(e);return!!n&&q(e.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(e){return ep(e,n)})},eb=function(e){for(var n=new Set,t=e.length,r=0;r<t;r+=1)for(var o=r+1;o<t;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&n.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&n.add(r)}return e.filter(function(e,t){return!n.has(t)})},ew=function(e){return e.parentNode?ew(e.parentNode):e},ex=function(e){return Z(e).filter(Boolean).reduce(function(e,n){var t=n.getAttribute(E);return e.push.apply(e,t?eb(q(ew(n).querySelectorAll("[".concat(E,'="').concat(t,'"]:not([').concat(k,'="disabled"])')))):[n]),e},[])},eE=function(e,n){return void 0===n&&(n=ey(U(e).ownerDocument)),!!n&&(!n.dataset||!n.dataset.focusGuard)&&ex(e).some(function(e){var t;return ep(e,n)||(t=n,!!q(e.querySelectorAll("iframe")).some(function(e){return e===t}))})},ek=function(e,n){"focus"in e&&e.focus(n),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},eN=function(e,n){return Q(e)&&e.name&&n.filter(Q).filter(function(n){return n.name===e.name}).filter(function(e){return e.checked})[0]||e},eS=function(e){var n=new Set;return e.forEach(function(t){return n.add(eN(t,e))}),e.filter(function(e){return n.has(e)})},eM=function(e){return e[0]&&e.length>1?eN(e[0],e):e[0]},eC=function(e,n){return e.length>1?e.indexOf(eN(e[n],e)):n},eO="NEW_FOCUS",eT=function(e,n,t,r){var o=e.length,a=e[0],i=e[o-1],u=en(t);if(!(t&&e.indexOf(t)>=0)){var c=void 0!==t?n.indexOf(t):-1,l=r?n.indexOf(r):c,d=r?e.indexOf(r):-1,s=c-l,f=n.indexOf(a),v=n.indexOf(i),m=eS(n),p=(void 0!==t?m.indexOf(t):-1)-(r?m.indexOf(r):c),h=eC(e,0),y=eC(e,o-1);if(-1===c||-1===d)return eO;if(!s&&d>=0)return d;if(c<=f&&u&&Math.abs(s)>1)return y;if(c>=v&&u&&Math.abs(s)>1)return h;if(s&&Math.abs(p)>1)return d;if(c<=f)return y;if(c>v)return h;if(s)return Math.abs(s)>1?d:(o+d+s)%o}},eP=function(e,n,t){var r=ef(e.map(function(e){return e.node}).filter(function(e){var n,r=null===(n=V(e))||void 0===n?void 0:n.autofocus;return e.autofocus||void 0!==r&&"false"!==r||t.indexOf(e)>=0}));return r&&r.length?eM(r):eM(ef(n))},eR=function(e,n){return void 0===n&&(n=[]),n.push(e),e.parentNode&&eR(e.parentNode.host||e.parentNode,n),n},eA=function(e,n){for(var t=eR(e),r=eR(n),o=0;o<t.length;o+=1){var a=t[o];if(r.indexOf(a)>=0)return a}return!1},eI=function(e,n,t){var r=Z(e),o=Z(n),a=r[0],i=!1;return o.filter(Boolean).forEach(function(e){i=eA(i||e,e)||i,t.filter(Boolean).forEach(function(e){var n=eA(a,e);n&&(i=!i||ep(n,i)?n:eA(n,i))})}),i},eF=function(e,n){var t=new Map;return n.forEach(function(e){return t.set(e.node,e)}),e.map(function(e){return t.get(e)}).filter(er)},e_=function(e,n){var t=ey(Z(e).length>0?document:U(e).ownerDocument),r=ex(e).filter(et),o=eI(t||e,e,r),a=new Map,i=em(r,a),u=ev(r,a).filter(function(e){return et(e.node)});if(u[0]||(u=i)[0]){var c=em([o],a).map(function(e){return e.node}),l=eF(c,u),d=l.map(function(e){return e.node}),s=eT(d,c,t,n);if(s===eO){var f=eP(i,d,r.reduce(function(e,n){return e.concat(es(q(n.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(e){return ed([e])}).reduce(function(e,n){return e.concat(n)},[]),a))},[]));return f?{node:f}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===s?s:l[s]}},ej=0,eD=!1,eL=function(e,n,t){void 0===t&&(t={});var r=e_(e,n);if(!eD&&r){if(ej>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),eD=!0,setTimeout(function(){eD=!1},1);return}ej++,ek(r.node,t.focusOptions),ej--}},eB=function(e){var n=ex(e).filter(et),t=eI(e,e,n),r=new Map,o=ev([t],r,!0),a=ev(n,r).filter(function(e){return et(e.node)}).map(function(e){return e.node});return o.map(function(e){var n=e.node;return{node:n,index:e.index,lockItem:a.indexOf(n)>=0,guard:en(n)}})};function eW(e){setTimeout(e,1)}var eG=null,e$=null,eq=null,eZ=!1,eU=function(e,n){eq={observerNode:e,portaledElement:n}};function eY(e,n,t,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=t)!==n);o&&(o.node.tabIndex=0)}var eX=function(e){return e&&"current"in e?e.current:e},eH=function(){var e=!1;if(eG){var n=eG,t=n.observed,r=n.persistentFocus,o=n.autoFocus,a=n.shards,i=n.crossFrame,u=n.focusOptions,c=t||eq&&eq.portaledElement,l=document&&document.activeElement;if(c){var d=[c].concat(a.map(eX).filter(Boolean));if((!l||(eG.whiteList||function(){return!0})(l))&&(r||(i?!!eZ:"meanwhile"===eZ)||!(document&&document.activeElement===document.body||eg())||!e$&&o)&&(c&&!(eE(d)||l&&d.some(function(e){return function e(n,t,r){return t&&(t.host===n&&(!t.activeElement||r.contains(t.activeElement))||t.parentNode&&e(n,t.parentNode,r))}(l,e,e)})||eq&&eq.portaledElement===l)&&(document&&!e$&&l&&!o?(l.blur&&l.blur(),document.body.focus()):(e=eL(d,e$,{focusOptions:u}),eq={})),eZ=!1,e$=document&&document.activeElement),document){var s=document&&document.activeElement,f=eB(d),v=f.map(function(e){return e.node}).indexOf(s);v>-1&&(f.filter(function(e){var n=e.guard,t=e.node;return n&&t.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")}),eY(v,f.length,1,f),eY(v,-1,-1,f))}}}return e},ez=function(e){eH()&&e&&(e.stopPropagation(),e.preventDefault())},eK=function(){return eW(eH)},eV=function(){eZ="just",eW(function(){eZ="meanwhile"})},eJ=function(){document.addEventListener("focusin",ez),document.addEventListener("focusout",eK),window.addEventListener("blur",eV)},eQ=function(){document.removeEventListener("focusin",ez),document.removeEventListener("focusout",eK),window.removeEventListener("blur",eV)};_.assignSyncMedium(function(e){var n=e.target,t=e.currentTarget;t.contains(n)||eU(t,n)}),j.assignMedium(eK),D.assignMedium(function(e){return e({moveFocusInside:eL,focusInside:eE})});var e0=(r=function(e){var n=e.slice(-1)[0];n&&!eG&&eJ();var t=eG,r=t&&n&&n.id===t.id;eG=n,!t||r||(t.onDeactivation(),e.filter(function(e){return e.id===t.id}).length||t.returnFocus(!n)),n?(e$=null,r&&t.observed===n.observed||n.onActivation(),eH(!0),eW(eH)):(eQ(),e$=null)},function(e){var n,t,o,a,i=[];function u(){r(a=i.map(function(e){return e.props}).filter(function(e){return!e.disabled}))}var c=function(n){function t(){return n.apply(this,arguments)||this}(0,G.Z)(t,n),t.peek=function(){return a};var r=t.prototype;return r.componentDidMount=function(){i.push(this),u()},r.componentDidUpdate=function(){u()},r.componentWillUnmount=function(){var e=i.indexOf(this);i.splice(e,1),u()},r.render=function(){return s.createElement(e,this.props)},t}(s.PureComponent);return n="displayName",t="SideEffect("+(e.displayName||e.name||"Component")+")",o=function(e,n){if("object"!=$(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=$(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==$(o)?o:String(o))in c?Object.defineProperty(c,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[n]=t,c})(function(){return null}),e1=s.forwardRef(function(e,n){return s.createElement(W,(0,x.Z)({sideCar:e0,ref:n},e))}),e5=W.propTypes||{};e5.sideCar,function(e,n){if(null!=e){var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n.indexOf(t=a[r])>=0||(o[t]=e[t])}}(e5,["sideCar"]),e1.propTypes={};var e2=t(9136),e9=e=>e.offsetWidth>0&&e.offsetHeight>0,e3=null!=(o=e1.default)?o:e1,e4=e=>{let{initialFocusRef:n,finalFocusRef:t,contentRef:r,restoreFocus:o,children:a,isDisabled:i,autoFocus:u,persistentFocus:c,lockFocusAcrossFrames:l}=e,d=(0,s.useCallback)(()=>{if(null==n?void 0:n.current)n.current.focus();else if(null==r?void 0:r.current){let e=function(e){let n=Array.from(e.querySelectorAll("input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"));return n.unshift(e),n.filter(e=>(0,e2.EB)(e)&&e9(e))}(r.current);0===e.length&&requestAnimationFrame(()=>{var e;null==(e=r.current)||e.focus()})}},[n,r]),v=(0,s.useCallback)(()=>{var e;null==(e=null==t?void 0:t.current)||e.focus()},[t]),m=o&&!t;return(0,f.jsx)(e3,{crossFrame:l,persistentFocus:c,autoFocus:u,disabled:i,onActivation:d,onDeactivation:v,returnFocus:m,children:a})};e4.displayName="FocusLock";var e8=t(5947),e6="right-scroll-bar-position",e7="width-before-scroll-bar",ne=F(),nn=function(){},nt=s.forwardRef(function(e,n){var t=s.useRef(null),r=s.useState({onScrollCapture:nn,onWheelCapture:nn,onTouchMoveCapture:nn}),o=r[0],a=r[1],i=e.forwardProps,u=e.children,c=e.className,l=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,m=e.noIsolation,p=e.inert,h=e.allowPinchZoom,y=e.as,g=void 0===y?"div":y,b=e.gapMode,w=P(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=M([t,n]),E=T(T({},w),o);return s.createElement(s.Fragment,null,d&&s.createElement(v,{sideCar:ne,removeScrollBar:l,shards:f,noIsolation:m,inert:p,setCallbacks:a,allowPinchZoom:!!h,lockRef:t,gapMode:b}),i?s.cloneElement(s.Children.only(u),T(T({},E),{ref:x})):s.createElement(g,T({},E,{className:c,ref:x}),u))});nt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},nt.classNames={fullWidth:e7,zeroRight:e6};var nr=function(e){var n=e.sideCar,t=P(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,T({},t))};nr.isSideCarExport=!0;var no=function(){var e=0,n=null;return{add:function(r){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=a||t.nc;return n&&e.setAttribute("nonce",n),e}())){var o,i;(o=n).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},na=function(){var e=no();return function(n,t){s.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},ni=function(){var e=na();return function(n){return e(n.styles,n.dynamic),null}},nu={left:0,top:0,right:0,gap:0},nc=function(e){return parseInt(e||"",10)||0},nl=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[nc(t),nc(r),nc(o)]},nd=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return nu;var n=nl(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},ns=ni(),nf=function(e,n,t,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(e6," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(e7," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(e6," .").concat(e6," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(e7," .").concat(e7," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},nv=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=s.useMemo(function(){return nd(o)},[o]);return s.createElement(ns,{styles:nf(a,!n,o,t?"":"!important")})},nm=!1;if("undefined"!=typeof window)try{var np=Object.defineProperty({},"passive",{get:function(){return nm=!0,!0}});window.addEventListener("test",np,np),window.removeEventListener("test",np,np)}catch(e){nm=!1}var nh=!!nm&&{passive:!1},ny=function(e,n){var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===t[n])},ng=function(e,n){var t=n.ownerDocument,r=n;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),nb(e,r)){var o=nw(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==t.body);return!1},nb=function(e,n){return"v"===e?ny(n,"overflowY"):ny(n,"overflowX")},nw=function(e,n){return"v"===e?[n.scrollTop,n.scrollHeight,n.clientHeight]:[n.scrollLeft,n.scrollWidth,n.clientWidth]},nx=function(e,n,t,r,o){var a,i=(a=window.getComputedStyle(n).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=t.target,l=n.contains(c),d=!1,s=u>0,f=0,v=0;do{var m=nw(e,c),p=m[0],h=m[1]-m[2]-i*p;(p||h)&&nb(e,c)&&(f+=h,v+=p),c=c instanceof ShadowRoot?c.host:c.parentNode}while(!l&&c!==document.body||l&&(n.contains(c)||n===c));return s&&(o&&1>Math.abs(f)||!o&&u>f)?d=!0:!s&&(o&&1>Math.abs(v)||!o&&-u>v)&&(d=!0),d},nE=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nk=function(e){return[e.deltaX,e.deltaY]},nN=function(e){return e&&"current"in e?e.current:e},nS=0,nM=[],nC=(ne.useMedium(function(e){var n=s.useRef([]),t=s.useRef([0,0]),r=s.useRef(),o=s.useState(nS++)[0],a=s.useState(ni)[0],i=s.useRef(e);s.useEffect(function(){i.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var n=(function(e,n,t){if(t||2==arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))})([e.lockRef.current],(e.shards||[]).map(nN),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=s.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=nE(e),u=t.current,c="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],d=e.target,s=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=ng(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=ng(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return nx(v,n,e,"h"===v?c:l,!0)},[]),c=s.useCallback(function(e){if(nM.length&&nM[nM.length-1]===a){var t="deltaY"in e?nk(e):nE(e),r=n.current.filter(function(n){var r;return n.name===e.type&&(n.target===e.target||e.target===n.shadowParent)&&(r=n.delta)[0]===t[0]&&r[1]===t[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(nN).filter(Boolean).filter(function(n){return n.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=s.useCallback(function(e,t,r,o){var a={name:e,delta:t,target:r,should:o,shadowParent:function(e){for(var n=null;null!==e;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}(r)};n.current.push(a),setTimeout(function(){n.current=n.current.filter(function(e){return e!==a})},1)},[]),d=s.useCallback(function(e){t.current=nE(e),r.current=void 0},[]),f=s.useCallback(function(n){l(n.type,nk(n),n.target,u(n,e.lockRef.current))},[]),v=s.useCallback(function(n){l(n.type,nE(n),n.target,u(n,e.lockRef.current))},[]);s.useEffect(function(){return nM.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,nh),document.addEventListener("touchmove",c,nh),document.addEventListener("touchstart",d,nh),function(){nM=nM.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,nh),document.removeEventListener("touchmove",c,nh),document.removeEventListener("touchstart",d,nh)}},[]);var m=e.removeScrollBar,p=e.inert;return s.createElement(s.Fragment,null,p?s.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?s.createElement(nv,{gapMode:e.gapMode}):null)}),nr),nO=s.forwardRef(function(e,n){return s.createElement(nt,T({},e,{ref:n,sideCar:nC}))});function nT(e){let{autoFocus:n,trapFocus:t,dialogRef:r,initialFocusRef:o,blockScrollOnMount:a,allowPinchZoom:i,finalFocusRef:u,returnFocusOnClose:c,preserveScrollBarGap:l,lockFocusAcrossFrames:d,isOpen:v}=(0,b.vR)(),[m,p]=(0,e8.oO)();(0,s.useEffect)(()=>{!m&&p&&setTimeout(p)},[m,p]);let h=(0,w.$)(r,v);return(0,f.jsx)(e4,{autoFocus:n,isDisabled:!t,initialFocusRef:o,finalFocusRef:u,restoreFocus:c,contentRef:r,lockFocusAcrossFrames:d,children:(0,f.jsx)(nO,{removeScrollBar:!l,allowPinchZoom:i,enabled:1===h&&a,forwardProps:!0,children:e.children})})}nO.classNames=nt.classNames;var nP=(0,t(5059).G)((e,n)=>{let{className:t,children:r,containerProps:o,motionProps:a,...u}=e,{getDialogProps:l,getDialogContainerProps:d}=(0,b.vR)(),s=l(u,n),v=d(o),m=(0,c.cx)("chakra-modal__content",t),p=(0,b.I_)(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...p.dialog},y={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...p.dialogContainer},{motionPreset:w}=(0,b.vR)();return(0,f.jsx)(nT,{children:(0,f.jsx)(i.m.div,{...v,className:"chakra-modal__content-container",tabIndex:-1,__css:y,children:(0,f.jsx)(g,{preset:w,motionProps:a,className:m,...s,__css:h,children:r})})})});nP.displayName="ModalContent"},8954:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(2752),o=t(5432),a=t(6384),i=t(5059),u=t(1150),c=t(5864),l=t(5893),d=(0,a.m)(c.E.div),s=(0,i.G)((e,n)=>{let{className:t,transition:a,motionProps:i,...c}=e,s=(0,o.cx)("chakra-modal__overlay",t),f=(0,r.I_)(),v={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...f.overlay},{motionPreset:m}=(0,r.vR)(),p="none"===m?{}:u.u,h=i||p;return(0,l.jsx)(d,{...h,__css:v,ref:n,className:s,...c})});s.displayName="ModalOverlay"},3793:function(e,n,t){t.d(n,{f:function(){return l}});var r=t(2752),o=t(5432),a=t(5059),i=t(6384),u=t(7294),c=t(5893),l=(0,a.G)((e,n)=>{let{className:t,...a}=e,{bodyId:l,setBodyMounted:d}=(0,r.vR)();(0,u.useEffect)(()=>(d(!0),()=>d(!1)),[d]);let s=(0,o.cx)("chakra-modal__body",t),f=(0,r.I_)();return(0,c.jsx)(i.m.div,{ref:n,className:s,id:l,...a,__css:f.body})});l.displayName="ModalBody"},2752:function(e,n,t){t.d(n,{u_:function(){return k},vR:function(){return E},I_:function(){return w}});var r=t(1151),o=t(5432),a=t(1103),i=new WeakMap,u=new WeakMap,c={},l=0,d=function(e){return e&&(e.host||d(e.parentNode))},s=function(e,n,t,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(n.contains(e))return e;var t=d(e);return t&&n.contains(t)?t:(console.error("aria-hidden",e,"in not contained inside",n,". Doing nothing"),null)}).filter(function(e){return!!e});c[t]||(c[t]=new WeakMap);var a=c[t],s=[],f=new Set,v=new Set(o),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};o.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else{var n=e.getAttribute(r),o=null!==n&&"false"!==n,c=(i.get(e)||0)+1,l=(a.get(e)||0)+1;i.set(e,c),a.set(e,l),s.push(e),1===c&&o&&u.set(e,!0),1===l&&e.setAttribute(t,"true"),o||e.setAttribute(r,"true")}})};return p(n),f.clear(),l++,function(){s.forEach(function(e){var n=i.get(e)-1,o=a.get(e)-1;i.set(e,n),a.set(e,o),n||(u.has(e)||e.removeAttribute(r),u.delete(e)),o||e.removeAttribute(t)}),--l||(i=new WeakMap,i=new WeakMap,u=new WeakMap,c={})}},f=function(e,n,t){void 0===t&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=n||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),s(r,o,t,"aria-hidden")):function(){return null}},v=t(7294),m=t(9598),p=t(5227),h=t(1639),y=t(1526),g=t(5893),[b,w]=(0,p.k)({name:"ModalStylesContext",errorMessage:"useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "}),[x,E]=(0,p.k)({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),k=e=>{let n={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:t,children:i,autoFocus:u,trapFocus:c,initialFocusRef:l,finalFocusRef:d,returnFocusOnClose:s,blockScrollOnMount:p,allowPinchZoom:w,preserveScrollBarGap:E,motionPreset:k,lockFocusAcrossFrames:N,onCloseComplete:S}=n,M=(0,h.jC)("Modal",n),C=function(e){let{isOpen:n,onClose:t,id:i,closeOnOverlayClick:u=!0,closeOnEsc:c=!0,useInert:l=!0,onOverlayClick:d,onEsc:s}=e,m=(0,v.useRef)(null),p=(0,v.useRef)(null),[h,y,g]=function(e,...n){let t=(0,v.useId)(),r=e||t;return(0,v.useMemo)(()=>n.map(e=>`${e}-${r}`),[r,n])}(i,"chakra-modal","chakra-modal--header","chakra-modal--body");(function(e,n){let t=e.current;(0,v.useEffect)(()=>{if(e.current&&n)return f(e.current)},[n,e,t])})(m,n&&l),(0,r.$)(m,n);let b=(0,v.useRef)(null),w=(0,v.useCallback)(e=>{b.current=e.target},[]),x=(0,v.useCallback)(e=>{"Escape"===e.key&&(e.stopPropagation(),c&&(null==t||t()),null==s||s())},[c,t,s]),[E,k]=(0,v.useState)(!1),[N,S]=(0,v.useState)(!1),M=(0,v.useCallback)((e={},n=null)=>({role:"dialog",...e,ref:(0,a.lq)(n,m),id:h,tabIndex:-1,"aria-modal":!0,"aria-labelledby":E?y:void 0,"aria-describedby":N?g:void 0,onClick:(0,o.v0)(e.onClick,e=>e.stopPropagation())}),[g,N,h,y,E]),C=(0,v.useCallback)(e=>{e.stopPropagation(),b.current===e.target&&r.B.isTopModal(m.current)&&(u&&(null==t||t()),null==d||d())},[t,u,d]),O=(0,v.useCallback)((e={},n=null)=>({...e,ref:(0,a.lq)(n,p),onClick:(0,o.v0)(e.onClick,C),onKeyDown:(0,o.v0)(e.onKeyDown,x),onMouseDown:(0,o.v0)(e.onMouseDown,w)}),[x,w,C]);return{isOpen:n,onClose:t,headerId:y,bodyId:g,setBodyMounted:S,setHeaderMounted:k,dialogRef:m,overlayRef:p,getDialogProps:M,getDialogContainerProps:O}}(n),O={...C,autoFocus:u,trapFocus:c,initialFocusRef:l,finalFocusRef:d,returnFocusOnClose:s,blockScrollOnMount:p,allowPinchZoom:w,preserveScrollBarGap:E,motionPreset:k,lockFocusAcrossFrames:N};return(0,g.jsx)(x,{value:O,children:(0,g.jsx)(b,{value:M,children:(0,g.jsx)(y.M,{onExitComplete:S,children:O.isOpen&&(0,g.jsx)(m.h,{...t,children:i})})})})};k.displayName="Modal"},5819:function(e,n,t){t.d(n,{o:function(){return c}});var r=t(2752),o=t(6989),a=t(5432),i=t(5059),u=t(5893),c=(0,i.G)((e,n)=>{let{onClick:t,className:i,...c}=e,{onClose:l}=(0,r.vR)(),d=(0,a.cx)("chakra-modal__close-btn",i),s=(0,r.I_)();return(0,u.jsx)(o.P,{ref:n,__css:s.closeButton,className:d,onClick:(0,a.v0)(t,e=>{e.stopPropagation(),l()}),...c})});c.displayName="ModalCloseButton"}}]);