(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[761],{761:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(9439),i=n(2791),o=n(8109),a=n(7634),s=n(3329),l=function(e){var t=e.icon,n=e.gutter;return"string"===typeof t||t?(0,s.jsx)("span",{className:"text-2xl ".concat(n?"ltr:mr-2 rtl:ml-2":""),children:a.Z[t]}):(0,s.jsx)(s.Fragment,{})};l.defaultProps={gutter:!0};var c=l,u=n(1087),p=n(2020),d=n(8135),f=n(9655),h=o.v2.MenuItem,y=function(e){var t=e.title,n=e.translateKey,r=e.children,i=e.direction,a=((0,p.$)().t,(0,f.Z)());return console.log("In collapesedItem"+a),(0,s.jsx)(o.u,{title:"CN"===a?t:n,placement:"rtl"===i?"left":"right",children:r})},v=function(e){var t=e.nav,n=e.onLinkClick,r=e.sideCollapsed,i=e.userAuthority,o=(0,f.Z)();return console.log("In default"+o),(0,s.jsx)(d.XW,{userAuthority:i,authority:t.authority,children:(0,s.jsx)(h,{eventKey:t.key,className:"mb-2",children:(0,s.jsxs)(u.rU,{to:t.path,onClick:function(){return null===n||void 0===n?void 0:n({key:t.key,title:"CN"===o?t.title:t.translateKey,path:t.path})},className:"flex items-center h-full w-full",children:[(0,s.jsx)(c,{icon:t.icon}),!r&&(0,s.jsx)("span",{children:"CN"===o?t.title:t.translateKey})]})},t.key)})},m=function(e){var t=e.nav,n=e.onLinkClick,r=e.sideCollapsed,i=e.userAuthority,o=e.direction;return(0,s.jsx)(d.XW,{userAuthority:i,authority:t.authority,children:r?(0,s.jsx)(y,{title:t.title,translateKey:t.translateKey,direction:o,children:(0,s.jsx)(v,{nav:t,sideCollapsed:r,onLinkClick:n,userAuthority:i})}):(0,s.jsx)(v,{nav:t,sideCollapsed:r,onLinkClick:n,userAuthority:i})})},x=n(1413),j=n(4925),k=n(606),g=["sideCollapsed"],b=o.v2.MenuItem,O=o.v2.MenuCollapse,K=function(e){var t=e.nav,n=e.onLinkClick,r=e.userAuthority;return(0,s.jsx)(d.XW,{userAuthority:r,authority:t.authority,children:(0,s.jsx)(O,{label:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{icon:t.icon}),(0,s.jsx)("span",{children:(0,s.jsx)(k.c,{i18nKey:t.translateKey,defaults:t.title})})]}),eventKey:t.key,expanded:!1,className:"mb-2",children:t.subMenu.map((function(e){return(0,s.jsx)(d.XW,{userAuthority:r,authority:e.authority,children:(0,s.jsx)(b,{eventKey:e.key,children:e.path?(0,s.jsx)(u.rU,{className:"h-full w-full flex items-center",onClick:function(){return null===n||void 0===n?void 0:n({key:e.key,title:e.title,path:e.path})},to:e.path,children:(0,s.jsx)("span",{children:(0,s.jsx)(k.c,{i18nKey:e.translateKey,defaults:e.title})})}):(0,s.jsx)("span",{children:(0,s.jsx)(k.c,{i18nKey:e.translateKey,defaults:e.title})})})},e.key)}))},t.key)})},C=function(e){var t=e.nav,n=e.onLinkClick,r=e.userAuthority,i=e.direction,a=(0,s.jsx)(b,{eventKey:t.key,className:"mb-2",children:(0,s.jsx)(c,{icon:t.icon})},t.key);return(0,s.jsx)(d.XW,{userAuthority:r,authority:t.authority,children:(0,s.jsx)(o.Lt,{trigger:"hover",renderTitle:a,placement:"rtl"===i?"middle-end-top":"middle-start-top",children:t.subMenu.map((function(e){return(0,s.jsx)(d.XW,{userAuthority:r,authority:e.authority,children:(0,s.jsx)(o.Lt.Item,{eventKey:e.key,children:e.path?(0,s.jsx)(u.rU,{className:"h-full w-full flex items-center",onClick:function(){return null===n||void 0===n?void 0:n({key:e.key,title:e.title,path:e.path})},to:e.path,children:(0,s.jsx)("span",{children:(0,s.jsx)(k.c,{i18nKey:e.translateKey,defaults:e.title})})}):(0,s.jsx)("span",{children:(0,s.jsx)(k.c,{i18nKey:e.translateKey,defaults:e.title})})})},e.key)}))})})},E=function(e){var t=e.sideCollapsed,n=(0,j.Z)(e,g);return t?(0,s.jsx)(C,(0,x.Z)({},n)):(0,s.jsx)(K,(0,x.Z)({},n))},A=n(9603),N=n(350),Z=n(5306),M=o.v2.MenuGroup,w=function(e){var t=e.navMode,n=void 0===t?A.c.navMode:t,a=e.collapsed,l=e.routeKey,c=e.navigationTree,u=void 0===c?[]:c,d=e.userAuthority,h=void 0===d?[]:d,y=e.onMenuItemClick,v=e.direction,x=void 0===v?A.c.direction:v,j=(0,f.Z)();console.log("In VerticalMenuContent "+j);(0,p.$)().t;var k=(0,i.useState)([]),g=(0,r.Z)(k,2),b=g[0],O=g[1],K=(0,Z.Z)(u,l).activedRoute;(0,i.useEffect)((function(){0===b.length&&null!==K&&void 0!==K&&K.parentKey&&O([null===K||void 0===K?void 0:K.parentKey])}),[null===K||void 0===K?void 0:K.parentKey]);var C=function(){null===y||void 0===y||y()};return(0,s.jsx)(o.v2,{className:"px-4 pb-4",variant:n,sideCollapsed:a,defaultActiveKeys:null!==K&&void 0!==K&&K.key?[K.key]:[],defaultExpandedKeys:b,children:u.map((function(e){return function(e){if(0===e.subMenu.length&&e.type===N.vS)return console.log("In nav 1 "+e.key),(0,s.jsx)(m,{nav:e,onLinkClick:C,sideCollapsed:a,userAuthority:h,direction:x},e.key);if(e.subMenu.length>0&&e.type===N.hX)return console.log("In nav 2 "+e.key),(0,s.jsx)(E,{nav:e,onLinkClick:y,sideCollapsed:a,userAuthority:h,direction:x},e.key);if(e.type===N.ZH){if(console.log("In nav 3 "+e.key),e.subMenu.length>0)return(0,s.jsx)(M,{label:"CN"===j?e.title:e.translateKey,children:e.subMenu.map((function(e){return e.subMenu.length>0?(0,s.jsx)(E,{nav:e,onLinkClick:y,sideCollapsed:a,userAuthority:h,direction:x},e.key):(0,s.jsx)(m,{nav:e,onLinkClick:y,sideCollapsed:a,userAuthority:h,direction:x},e.key)}))},e.key);e.title}}(e)}))})}},5306:function(e,t,n){"use strict";var r=n(2791),i=n(3977),o=n.n(i),a=function e(t,n){if(t.key===n)return t;var r,i=!1;for(var a in t)if("icon"!==a&&t.hasOwnProperty(a)&&"object"===typeof t[a]&&(o()(t[a])&&t[a].subMenu.length>0&&t[a].subMenu.some((function(e){return e.key===n}))&&(i=!0),r=e(t[a],n)))return i&&(r.parentKey=t[a].key),r;return r},s=function e(t,n){return!!t.find((function(e){return e.key===n}))||t.some((function(t){return e(t.subMenu,n)}))};t.Z=function(e,t){var n=(0,r.useMemo)((function(){return a(e,t)}),[e,t]),i=(0,r.useMemo)((function(){var n=function(e,t){var n={};return e.forEach((function(e){s([e],t)&&(n=e)})),n}(e,t);return n}),[e,t]);return{activedRoute:n,includedRouteTree:i}}},3977:function(e,t,n){var r=n(9066),i=n(1137),o=n(3141),a=Function.prototype,s=Object.prototype,l=a.toString,c=s.hasOwnProperty,u=l.call(Object);e.exports=function(e){if(!o(e)||"[object Object]"!=r(e))return!1;var t=i(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==u}},606:function(e,t,n){"use strict";n.d(t,{c:function(){return N}});var r=n(4925),i=n(1002),o=n(4942),a=n(2791),s=n(7399),l=n.n(s),c=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function u(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(l()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(c),o=null;null!==(o=i.exec(e));)if(o[0].trim())if(o[1]){var a=o[1].trim(),s=[a,""];a.indexOf("=")>-1&&(s=a.split("=")),t.attrs[s[0]]=s[1],i.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,f=Object.create(null);function h(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(h,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var y={parse:function(e,t){t||(t={}),t.components||(t.components=f);var n,r=[],i=[],o=-1,a=!1;if(0!==e.indexOf("<")){var s=e.indexOf("<");r.push({type:"text",content:-1===s?e:e.substring(0,s)})}return e.replace(p,(function(s,l){if(a){if(s!=="</"+n.name+">")return;a=!1}var c,p="/"!==s.charAt(1),f=s.startsWith("\x3c!--"),h=l+s.length,y=e.charAt(h);if(f){var v=u(s);return o<0?(r.push(v),r):((c=i[o]).children.push(v),r)}if(p&&(o++,"tag"===(n=u(s)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!y||"<"===y||n.children.push({type:"text",content:e.slice(h,e.indexOf("<",h))}),0===o&&r.push(n),(c=i[o-1])&&c.children.push(n),i[o]=n),(!p||n.voidElement)&&(o>-1&&(n.voidElement||n.name===s.slice(2,-1))&&(o--,n=-1===o?r:i[o]),!a&&"<"!==y&&y)){c=-1===o?r:i[o].children;var m=e.indexOf("<",h),x=e.slice(h,-1===m?void 0:m);d.test(x)&&(x=" "),(m>-1&&o+c.length>=0||" "!==x)&&c.push({type:"text",content:x})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+h("",t)}),"")}},v=y,m=n(8589),x=n(1426),j=["format"],k=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function K(e){return e?e.props?e.props.children:e.children:[]}function C(e){return Array.isArray(e)?e:[e]}function E(e,t){if(!e)return"";var n="",o=C(e),s=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return o.forEach((function(e,o){if("string"===typeof e)n+="".concat(e);else if((0,a.isValidElement)(e)){var l=Object.keys(e.props).length,c=s.indexOf(e.type)>-1,u=e.props.children;if(!u&&c&&0===l)n+="<".concat(e.type,"/>");else if(u||c&&0===l)if(e.props.i18nIsDynamicList)n+="<".concat(o,"></").concat(o,">");else if(c&&1===l&&"string"===typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var p=E(u,t);n+="<".concat(o,">").concat(p,"</").concat(o,">")}else n+="<".concat(o,"></").concat(o,">")}else if(null===e)(0,x.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.Z)(e)){var d=e.format,f=(0,r.Z)(e,j),h=Object.keys(f);if(1===h.length){var y=d?"".concat(h[0],", ").concat(d):h[0];n+="{{".concat(y,"}}")}else(0,x.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,x.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function A(e,t,n,r,o,s){if(""===t)return[];var l=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(l.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){C(t).forEach((function(t){"string"!==typeof t&&(O(t)?e(K(t)):"object"!==(0,i.Z)(t)||(0,a.isValidElement)(t)||Object.assign(u,t))}))}(e);var p=v.parse("<0>".concat(t,"</0>")),d=b(b({},u),o);function f(e,t,n){var r=K(e),i=y(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,a.isValidElement)(e)}))}(r)&&0===i.length?r:i}function h(e,t,n,r,i){e.dummy&&(e.children=t),n.push((0,a.cloneElement)(e,b(b({},e.props),{},{key:r}),i?void 0:t))}function y(t,o,u){var p=C(t);return C(o).reduce((function(t,o,v){var m=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,d,n.language);if("tag"===o.type){var x=p[parseInt(o.name,10)];!x&&1===u.length&&u[0][o.name]&&(x=u[0][o.name]),x||(x={});var j=0!==Object.keys(o.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:o.attrs},x):x,k=(0,a.isValidElement)(j),g=k&&O(o,!0)&&!o.voidElement,K=c&&"object"===(0,i.Z)(j)&&j.dummy&&!k,C="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"===typeof j){var E=n.services.interpolator.interpolate(j,d,n.language);t.push(E)}else if(O(j)||g){h(j,f(j,o,u),t,v)}else if(K){var A=y(p,o.children,u);t.push((0,a.cloneElement)(j,b(b({},j.props),{},{key:v}),A))}else if(Number.isNaN(parseFloat(o.name))){if(C)h(j,f(j,o,u),t,v,o.voidElement);else if(r.transSupportBasicHtmlNodes&&l.indexOf(o.name)>-1)if(o.voidElement)t.push((0,a.createElement)(o.name,{key:"".concat(o.name,"-").concat(v)}));else{var N=y(p,o.children,u);t.push((0,a.createElement)(o.name,{key:"".concat(o.name,"-").concat(v)},N))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var Z=y(p,o.children,u);t.push("<".concat(o.name,">").concat(Z,"</").concat(o.name,">"))}}else if("object"!==(0,i.Z)(j)||k)1===o.children.length&&m?t.push((0,a.cloneElement)(j,b(b({},j.props),{},{key:v}),m)):t.push((0,a.cloneElement)(j,b(b({},j.props),{},{key:v})));else{var M=o.children[0]?m:null;M&&t.push(M)}}else if("text"===o.type){var w=r.transWrapTextNodes,I=s?r.unescape(n.services.interpolator.interpolate(o.content,d,n.language)):n.services.interpolator.interpolate(o.content,d,n.language);w?t.push((0,a.createElement)(w,{key:"".concat(o.name,"-").concat(v)},I)):t.push(I)}return t}),[])}return K(y([{dummy:!0,children:e||[]}],p,C(e||[]))[0])}function N(e){var t=e.children,n=e.count,i=e.parent,o=e.i18nKey,s=e.context,l=e.tOptions,c=void 0===l?{}:l,u=e.values,p=e.defaults,d=e.components,f=e.ns,h=e.i18n,y=e.t,v=e.shouldUnescape,j=(0,r.Z)(e,k),g=(0,a.useContext)(m.OO)||{},O=g.i18n,K=g.defaultNS,C=h||O||(0,m.nI)();if(!C)return(0,x.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var N=y||C.t.bind(C)||function(e){return e};s&&(c.context=s);var Z=b(b({},(0,m.JP)()),C.options&&C.options.react),M=f||N.ns||K||C.options&&C.options.defaultNS;M="string"===typeof M?[M]:M||["translation"];var w=p||E(t,Z)||Z.transEmptyNodeValue||o,I=Z.hashTransKey,P=o||(I?I(w):w),L=u?c.interpolation:{interpolation:b(b({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},S=b(b(b(b({},c),{},{count:n},u),L),{},{defaultValue:w,ns:M}),W=A(d||t,P?N(P,S):w,C,Z,S,v),T=void 0!==i?i:Z.defaultTransParent;return T?(0,a.createElement)(T,j,W):W}},7399:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=761.b01a00ed.chunk.js.map