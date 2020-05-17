/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});


/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
		typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
			(factory((global.bootstrap = {}),global.jQuery,global.Popper));
}(this, (function (exports,$,Popper) { 'use strict';

	$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
	Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _extends() {
		_extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];

					for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}

				return target;
			};

		return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		subClass.__proto__ = superClass;
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): util.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Util = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Private TransitionEnd Helpers
		 * ------------------------------------------------------------------------
		 */
		var transition = false;
		var MAX_UID = 1000000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

		function toType(obj) {
			return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
		}

		function getSpecialTransitionEndEvent() {
			return {
				bindType: transition.end,
				delegateType: transition.end,
				handle: function handle(event) {
					if ($$$1(event.target).is(this)) {
						return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
					}

					return undefined; // eslint-disable-line no-undefined
				}
			};
		}

		function transitionEndTest() {
			if (typeof window !== 'undefined' && window.QUnit) {
				return false;
			}

			return {
				end: 'transitionend'
			};
		}

		function transitionEndEmulator(duration) {
			var _this = this;

			var called = false;
			$$$1(this).one(Util.TRANSITION_END, function () {
				called = true;
			});
			setTimeout(function () {
				if (!called) {
					Util.triggerTransitionEnd(_this);
				}
			}, duration);
			return this;
		}

		function setTransitionEndSupport() {
			transition = transitionEndTest();
			$$$1.fn.emulateTransitionEnd = transitionEndEmulator;

			if (Util.supportsTransitionEnd()) {
				$$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
			}
		}

		function escapeId(selector) {
			// We escape IDs in case of special selectors (selector = '#myId:something')
			// $.escapeSelector does not exist in jQuery < 3
			selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
			return selector;
		}
		/**
		 * --------------------------------------------------------------------------
		 * Public Util Api
		 * --------------------------------------------------------------------------
		 */


		var Util = {
			TRANSITION_END: 'bsTransitionEnd',
			getUID: function getUID(prefix) {
				do {
					// eslint-disable-next-line no-bitwise
					prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
				} while (document.getElementById(prefix));

				return prefix;
			},
			getSelectorFromElement: function getSelectorFromElement(element) {
				var selector = element.getAttribute('data-target');

				if (!selector || selector === '#') {
					selector = element.getAttribute('href') || '';
				} // If it's an ID


				if (selector.charAt(0) === '#') {
					selector = escapeId(selector);
				}

				try {
					var $selector = $$$1(document).find(selector);
					return $selector.length > 0 ? selector : null;
				} catch (err) {
					return null;
				}
			},
			reflow: function reflow(element) {
				return element.offsetHeight;
			},
			triggerTransitionEnd: function triggerTransitionEnd(element) {
				$$$1(element).trigger(transition.end);
			},
			supportsTransitionEnd: function supportsTransitionEnd() {
				return Boolean(transition);
			},
			isElement: function isElement(obj) {
				return (obj[0] || obj).nodeType;
			},
			typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
				for (var property in configTypes) {
					if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
						var expectedTypes = configTypes[property];
						var value = config[property];
						var valueType = value && Util.isElement(value) ? 'element' : toType(value);

						if (!new RegExp(expectedTypes).test(valueType)) {
							throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
						}
					}
				}
			}
		};
		setTransitionEndSupport();
		return Util;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): alert.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Alert = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'alert';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.alert';
		var EVENT_KEY = "." + DATA_KEY;
		var DATA_API_KEY = '.data-api';
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var TRANSITION_DURATION = 150;
		var Selector = {
			DISMISS: '[data-dismiss="alert"]'
		};
		var Event = {
			CLOSE: "close" + EVENT_KEY,
			CLOSED: "closed" + EVENT_KEY,
			CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
		};
		var ClassName = {
			ALERT: 'alert',
			FADE: 'fade',
			SHOW: 'show'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Alert =
			/*#__PURE__*/
			function () {
				function Alert(element) {
					this._element = element;
				} // Getters


				var _proto = Alert.prototype;

				// Public
				_proto.close = function close(element) {
					element = element || this._element;

					var rootElement = this._getRootElement(element);

					var customEvent = this._triggerCloseEvent(rootElement);

					if (customEvent.isDefaultPrevented()) {
						return;
					}

					this._removeElement(rootElement);
				};

				_proto.dispose = function dispose() {
					$$$1.removeData(this._element, DATA_KEY);
					this._element = null;
				}; // Private


				_proto._getRootElement = function _getRootElement(element) {
					var selector = Util.getSelectorFromElement(element);
					var parent = false;

					if (selector) {
						parent = $$$1(selector)[0];
					}

					if (!parent) {
						parent = $$$1(element).closest("." + ClassName.ALERT)[0];
					}

					return parent;
				};

				_proto._triggerCloseEvent = function _triggerCloseEvent(element) {
					var closeEvent = $$$1.Event(Event.CLOSE);
					$$$1(element).trigger(closeEvent);
					return closeEvent;
				};

				_proto._removeElement = function _removeElement(element) {
					var _this = this;

					$$$1(element).removeClass(ClassName.SHOW);

					if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
						this._destroyElement(element);

						return;
					}

					$$$1(element).one(Util.TRANSITION_END, function (event) {
						return _this._destroyElement(element, event);
					}).emulateTransitionEnd(TRANSITION_DURATION);
				};

				_proto._destroyElement = function _destroyElement(element) {
					$$$1(element).detach().trigger(Event.CLOSED).remove();
				}; // Static


				Alert._jQueryInterface = function _jQueryInterface(config) {
					return this.each(function () {
						var $element = $$$1(this);
						var data = $element.data(DATA_KEY);

						if (!data) {
							data = new Alert(this);
							$element.data(DATA_KEY, data);
						}

						if (config === 'close') {
							data[config](this);
						}
					});
				};

				Alert._handleDismiss = function _handleDismiss(alertInstance) {
					return function (event) {
						if (event) {
							event.preventDefault();
						}

						alertInstance.close(this);
					};
				};

				_createClass(Alert, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}]);
				return Alert;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * Data Api implementation
		 * ------------------------------------------------------------------------
		 */


		$$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */

		$$$1.fn[NAME] = Alert._jQueryInterface;
		$$$1.fn[NAME].Constructor = Alert;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Alert._jQueryInterface;
		};

		return Alert;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): collapse.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Collapse = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'collapse';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.collapse';
		var EVENT_KEY = "." + DATA_KEY;
		var DATA_API_KEY = '.data-api';
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var TRANSITION_DURATION = 600;
		var Default = {
			toggle: true,
			parent: ''
		};
		var DefaultType = {
			toggle: 'boolean',
			parent: '(string|element)'
		};
		var Event = {
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
		};
		var ClassName = {
			SHOW: 'show',
			COLLAPSE: 'collapse',
			COLLAPSING: 'collapsing',
			COLLAPSED: 'collapsed'
		};
		var Dimension = {
			WIDTH: 'width',
			HEIGHT: 'height'
		};
		var Selector = {
			ACTIVES: '.show, .collapsing',
			DATA_TOGGLE: '[data-toggle="collapse"]'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Collapse =
			/*#__PURE__*/
			function () {
				function Collapse(element, config) {
					this._isTransitioning = false;
					this._element = element;
					this._config = this._getConfig(config);
					this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
					var tabToggles = $$$1(Selector.DATA_TOGGLE);

					for (var i = 0; i < tabToggles.length; i++) {
						var elem = tabToggles[i];
						var selector = Util.getSelectorFromElement(elem);

						if (selector !== null && $$$1(selector).filter(element).length > 0) {
							this._selector = selector;

							this._triggerArray.push(elem);
						}
					}

					this._parent = this._config.parent ? this._getParent() : null;

					if (!this._config.parent) {
						this._addAriaAndCollapsedClass(this._element, this._triggerArray);
					}

					if (this._config.toggle) {
						this.toggle();
					}
				} // Getters


				var _proto = Collapse.prototype;

				// Public
				_proto.toggle = function toggle() {
					if ($$$1(this._element).hasClass(ClassName.SHOW)) {
						this.hide();
					} else {
						this.show();
					}
				};

				_proto.show = function show() {
					var _this = this;

					if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
						return;
					}

					var actives;
					var activesData;

					if (this._parent) {
						actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

						if (actives.length === 0) {
							actives = null;
						}
					}

					if (actives) {
						activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

						if (activesData && activesData._isTransitioning) {
							return;
						}
					}

					var startEvent = $$$1.Event(Event.SHOW);
					$$$1(this._element).trigger(startEvent);

					if (startEvent.isDefaultPrevented()) {
						return;
					}

					if (actives) {
						Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

						if (!activesData) {
							$$$1(actives).data(DATA_KEY, null);
						}
					}

					var dimension = this._getDimension();

					$$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
					this._element.style[dimension] = 0;

					if (this._triggerArray.length > 0) {
						$$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
					}

					this.setTransitioning(true);

					var complete = function complete() {
						$$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
						_this._element.style[dimension] = '';

						_this.setTransitioning(false);

						$$$1(_this._element).trigger(Event.SHOWN);
					};

					if (!Util.supportsTransitionEnd()) {
						complete();
						return;
					}

					var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
					var scrollSize = "scroll" + capitalizedDimension;
					$$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
					this._element.style[dimension] = this._element[scrollSize] + "px";
				};

				_proto.hide = function hide() {
					var _this2 = this;

					if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
						return;
					}

					var startEvent = $$$1.Event(Event.HIDE);
					$$$1(this._element).trigger(startEvent);

					if (startEvent.isDefaultPrevented()) {
						return;
					}

					var dimension = this._getDimension();

					this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
					Util.reflow(this._element);
					$$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

					if (this._triggerArray.length > 0) {
						for (var i = 0; i < this._triggerArray.length; i++) {
							var trigger = this._triggerArray[i];
							var selector = Util.getSelectorFromElement(trigger);

							if (selector !== null) {
								var $elem = $$$1(selector);

								if (!$elem.hasClass(ClassName.SHOW)) {
									$$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
								}
							}
						}
					}

					this.setTransitioning(true);

					var complete = function complete() {
						_this2.setTransitioning(false);

						$$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
					};

					this._element.style[dimension] = '';

					if (!Util.supportsTransitionEnd()) {
						complete();
						return;
					}

					$$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
				};

				_proto.setTransitioning = function setTransitioning(isTransitioning) {
					this._isTransitioning = isTransitioning;
				};

				_proto.dispose = function dispose() {
					$$$1.removeData(this._element, DATA_KEY);
					this._config = null;
					this._parent = null;
					this._element = null;
					this._triggerArray = null;
					this._isTransitioning = null;
				}; // Private


				_proto._getConfig = function _getConfig(config) {
					config = _extends({}, Default, config);
					config.toggle = Boolean(config.toggle); // Coerce string values

					Util.typeCheckConfig(NAME, config, DefaultType);
					return config;
				};

				_proto._getDimension = function _getDimension() {
					var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
					return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
				};

				_proto._getParent = function _getParent() {
					var _this3 = this;

					var parent = null;

					if (Util.isElement(this._config.parent)) {
						parent = this._config.parent; // It's a jQuery object

						if (typeof this._config.parent.jquery !== 'undefined') {
							parent = this._config.parent[0];
						}
					} else {
						parent = $$$1(this._config.parent)[0];
					}

					var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
					$$$1(parent).find(selector).each(function (i, element) {
						_this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
					});
					return parent;
				};

				_proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
					if (element) {
						var isOpen = $$$1(element).hasClass(ClassName.SHOW);

						if (triggerArray.length > 0) {
							$$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
						}
					}
				}; // Static


				Collapse._getTargetFromElement = function _getTargetFromElement(element) {
					var selector = Util.getSelectorFromElement(element);
					return selector ? $$$1(selector)[0] : null;
				};

				Collapse._jQueryInterface = function _jQueryInterface(config) {
					return this.each(function () {
						var $this = $$$1(this);
						var data = $this.data(DATA_KEY);

						var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);

						if (!data && _config.toggle && /show|hide/.test(config)) {
							_config.toggle = false;
						}

						if (!data) {
							data = new Collapse(this, _config);
							$this.data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config]();
						}
					});
				};

				_createClass(Collapse, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}, {
					key: "Default",
					get: function get() {
						return Default;
					}
				}]);
				return Collapse;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * Data Api implementation
		 * ------------------------------------------------------------------------
		 */


		$$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
			// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
			if (event.currentTarget.tagName === 'A') {
				event.preventDefault();
			}

			var $trigger = $$$1(this);
			var selector = Util.getSelectorFromElement(this);
			$$$1(selector).each(function () {
				var $target = $$$1(this);
				var data = $target.data(DATA_KEY);
				var config = data ? 'toggle' : $trigger.data();

				Collapse._jQueryInterface.call($target, config);
			});
		});
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */

		$$$1.fn[NAME] = Collapse._jQueryInterface;
		$$$1.fn[NAME].Constructor = Collapse;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Collapse._jQueryInterface;
		};

		return Collapse;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): dropdown.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Dropdown = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'dropdown';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.dropdown';
		var EVENT_KEY = "." + DATA_KEY;
		var DATA_API_KEY = '.data-api';
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

		var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

		var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

		var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

		var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

		var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

		var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
		var Event = {
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			CLICK: "click" + EVENT_KEY,
			CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
			KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
			KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
		};
		var ClassName = {
			DISABLED: 'disabled',
			SHOW: 'show',
			DROPUP: 'dropup',
			DROPRIGHT: 'dropright',
			DROPLEFT: 'dropleft',
			MENURIGHT: 'dropdown-menu-right',
			MENULEFT: 'dropdown-menu-left',
			POSITION_STATIC: 'position-static'
		};
		var Selector = {
			DATA_TOGGLE: '[data-toggle="dropdown"]',
			FORM_CHILD: '.dropdown form',
			MENU: '.dropdown-menu',
			NAVBAR_NAV: '.navbar-nav',
			VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
		};
		var AttachmentMap = {
			TOP: 'top-start',
			TOPEND: 'top-end',
			BOTTOM: 'bottom-start',
			BOTTOMEND: 'bottom-end',
			RIGHT: 'right-start',
			RIGHTEND: 'right-end',
			LEFT: 'left-start',
			LEFTEND: 'left-end'
		};
		var Default = {
			offset: 0,
			flip: true,
			boundary: 'scrollParent'
		};
		var DefaultType = {
			offset: '(number|string|function)',
			flip: 'boolean',
			boundary: '(string|element)'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Dropdown =
			/*#__PURE__*/
			function () {
				function Dropdown(element, config) {
					this._element = element;
					this._popper = null;
					this._config = this._getConfig(config);
					this._menu = this._getMenuElement();
					this._inNavbar = this._detectNavbar();

					this._addEventListeners();
				} // Getters


				var _proto = Dropdown.prototype;

				// Public
				_proto.toggle = function toggle() {
					if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
						return;
					}

					var parent = Dropdown._getParentFromElement(this._element);

					var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

					Dropdown._clearMenus();

					if (isActive) {
						return;
					}

					var relatedTarget = {
						relatedTarget: this._element
					};
					var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
					$$$1(parent).trigger(showEvent);

					if (showEvent.isDefaultPrevented()) {
						return;
					} // Disable totally Popper.js for Dropdown in Navbar


					if (!this._inNavbar) {
						/**
						 * Check for Popper dependency
						 * Popper - https://popper.js.org
						 */
						if (typeof Popper === 'undefined') {
							throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
						}

						var element = this._element; // For dropup with alignment we use the parent as popper container

						if ($$$1(parent).hasClass(ClassName.DROPUP)) {
							if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
								element = parent;
							}
						} // If boundary is not `scrollParent`, then set position to `static`
						// to allow the menu to "escape" the scroll parent's boundaries
						// https://github.com/twbs/bootstrap/issues/24251


						if (this._config.boundary !== 'scrollParent') {
							$$$1(parent).addClass(ClassName.POSITION_STATIC);
						}

						this._popper = new Popper(element, this._menu, this._getPopperConfig());
					} // If this is a touch-enabled device we add extra
					// empty mouseover listeners to the body's immediate children;
					// only needed because of broken event delegation on iOS
					// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


					if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
						$$$1('body').children().on('mouseover', null, $$$1.noop);
					}

					this._element.focus();

					this._element.setAttribute('aria-expanded', true);

					$$$1(this._menu).toggleClass(ClassName.SHOW);
					$$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
				};

				_proto.dispose = function dispose() {
					$$$1.removeData(this._element, DATA_KEY);
					$$$1(this._element).off(EVENT_KEY);
					this._element = null;
					this._menu = null;

					if (this._popper !== null) {
						this._popper.destroy();

						this._popper = null;
					}
				};

				_proto.update = function update() {
					this._inNavbar = this._detectNavbar();

					if (this._popper !== null) {
						this._popper.scheduleUpdate();
					}
				}; // Private


				_proto._addEventListeners = function _addEventListeners() {
					var _this = this;

					$$$1(this._element).on(Event.CLICK, function (event) {
						event.preventDefault();
						event.stopPropagation();

						_this.toggle();
					});
				};

				_proto._getConfig = function _getConfig(config) {
					config = _extends({}, this.constructor.Default, $$$1(this._element).data(), config);
					Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
					return config;
				};

				_proto._getMenuElement = function _getMenuElement() {
					if (!this._menu) {
						var parent = Dropdown._getParentFromElement(this._element);

						this._menu = $$$1(parent).find(Selector.MENU)[0];
					}

					return this._menu;
				};

				_proto._getPlacement = function _getPlacement() {
					var $parentDropdown = $$$1(this._element).parent();
					var placement = AttachmentMap.BOTTOM; // Handle dropup

					if ($parentDropdown.hasClass(ClassName.DROPUP)) {
						placement = AttachmentMap.TOP;

						if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
							placement = AttachmentMap.TOPEND;
						}
					} else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
						placement = AttachmentMap.RIGHT;
					} else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
						placement = AttachmentMap.LEFT;
					} else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
						placement = AttachmentMap.BOTTOMEND;
					}

					return placement;
				};

				_proto._detectNavbar = function _detectNavbar() {
					return $$$1(this._element).closest('.navbar').length > 0;
				};

				_proto._getPopperConfig = function _getPopperConfig() {
					var _this2 = this;

					var offsetConf = {};

					if (typeof this._config.offset === 'function') {
						offsetConf.fn = function (data) {
							data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
							return data;
						};
					} else {
						offsetConf.offset = this._config.offset;
					}

					var popperConfig = {
						placement: this._getPlacement(),
						modifiers: {
							offset: offsetConf,
							flip: {
								enabled: this._config.flip
							},
							preventOverflow: {
								boundariesElement: this._config.boundary
							}
						}
					};
					return popperConfig;
				}; // Static


				Dropdown._jQueryInterface = function _jQueryInterface(config) {
					return this.each(function () {
						var data = $$$1(this).data(DATA_KEY);

						var _config = typeof config === 'object' ? config : null;

						if (!data) {
							data = new Dropdown(this, _config);
							$$$1(this).data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config]();
						}
					});
				};

				Dropdown._clearMenus = function _clearMenus(event) {
					if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
						return;
					}

					var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

					for (var i = 0; i < toggles.length; i++) {
						var parent = Dropdown._getParentFromElement(toggles[i]);

						var context = $$$1(toggles[i]).data(DATA_KEY);
						var relatedTarget = {
							relatedTarget: toggles[i]
						};

						if (!context) {
							continue;
						}

						var dropdownMenu = context._menu;

						if (!$$$1(parent).hasClass(ClassName.SHOW)) {
							continue;
						}

						if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
							continue;
						}

						var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
						$$$1(parent).trigger(hideEvent);

						if (hideEvent.isDefaultPrevented()) {
							continue;
						} // If this is a touch-enabled device we remove the extra
						// empty mouseover listeners we added for iOS support


						if ('ontouchstart' in document.documentElement) {
							$$$1('body').children().off('mouseover', null, $$$1.noop);
						}

						toggles[i].setAttribute('aria-expanded', 'false');
						$$$1(dropdownMenu).removeClass(ClassName.SHOW);
						$$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
					}
				};

				Dropdown._getParentFromElement = function _getParentFromElement(element) {
					var parent;
					var selector = Util.getSelectorFromElement(element);

					if (selector) {
						parent = $$$1(selector)[0];
					}

					return parent || element.parentNode;
				}; // eslint-disable-next-line complexity


				Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
					// If not input/textarea:
					//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
					// If input/textarea:
					//  - If space key => not a dropdown command
					//  - If key is other than escape
					//    - If key is not up or down => not a dropdown command
					//    - If trigger inside the menu => not a dropdown command
					if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
						return;
					}

					event.preventDefault();
					event.stopPropagation();

					if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
						return;
					}

					var parent = Dropdown._getParentFromElement(this);

					var isActive = $$$1(parent).hasClass(ClassName.SHOW);

					if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
						if (event.which === ESCAPE_KEYCODE) {
							var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
							$$$1(toggle).trigger('focus');
						}

						$$$1(this).trigger('click');
						return;
					}

					var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

					if (items.length === 0) {
						return;
					}

					var index = items.indexOf(event.target);

					if (event.which === ARROW_UP_KEYCODE && index > 0) {
						// Up
						index--;
					}

					if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
						// Down
						index++;
					}

					if (index < 0) {
						index = 0;
					}

					items[index].focus();
				};

				_createClass(Dropdown, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}, {
					key: "Default",
					get: function get() {
						return Default;
					}
				}, {
					key: "DefaultType",
					get: function get() {
						return DefaultType;
					}
				}]);
				return Dropdown;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * Data Api implementation
		 * ------------------------------------------------------------------------
		 */


		$$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
			event.preventDefault();
			event.stopPropagation();

			Dropdown._jQueryInterface.call($$$1(this), 'toggle');
		}).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
			e.stopPropagation();
		});
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */

		$$$1.fn[NAME] = Dropdown._jQueryInterface;
		$$$1.fn[NAME].Constructor = Dropdown;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Dropdown._jQueryInterface;
		};

		return Dropdown;
	}($, Popper);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Modal = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'modal';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.modal';
		var EVENT_KEY = "." + DATA_KEY;
		var DATA_API_KEY = '.data-api';
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var TRANSITION_DURATION = 300;
		var BACKDROP_TRANSITION_DURATION = 150;
		var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

		var Default = {
			backdrop: true,
			keyboard: true,
			focus: true,
			show: true
		};
		var DefaultType = {
			backdrop: '(boolean|string)',
			keyboard: 'boolean',
			focus: 'boolean',
			show: 'boolean'
		};
		var Event = {
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			FOCUSIN: "focusin" + EVENT_KEY,
			RESIZE: "resize" + EVENT_KEY,
			CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
			KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
			MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
			MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
			CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
		};
		var ClassName = {
			SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
			BACKDROP: 'modal-backdrop',
			OPEN: 'modal-open',
			FADE: 'fade',
			SHOW: 'show'
		};
		var Selector = {
			DIALOG: '.modal-dialog',
			DATA_TOGGLE: '[data-toggle="modal"]',
			DATA_DISMISS: '[data-dismiss="modal"]',
			FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
			STICKY_CONTENT: '.sticky-top',
			NAVBAR_TOGGLER: '.navbar-toggler'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Modal =
			/*#__PURE__*/
			function () {
				function Modal(element, config) {
					this._config = this._getConfig(config);
					this._element = element;
					this._dialog = $$$1(element).find(Selector.DIALOG)[0];
					this._backdrop = null;
					this._isShown = false;
					this._isBodyOverflowing = false;
					this._ignoreBackdropClick = false;
					this._originalBodyPadding = 0;
					this._scrollbarWidth = 0;
				} // Getters


				var _proto = Modal.prototype;

				// Public
				_proto.toggle = function toggle(relatedTarget) {
					return this._isShown ? this.hide() : this.show(relatedTarget);
				};

				_proto.show = function show(relatedTarget) {
					var _this = this;

					if (this._isTransitioning || this._isShown) {
						return;
					}

					if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
						this._isTransitioning = true;
					}

					var showEvent = $$$1.Event(Event.SHOW, {
						relatedTarget: relatedTarget
					});
					$$$1(this._element).trigger(showEvent);

					if (this._isShown || showEvent.isDefaultPrevented()) {
						return;
					}

					this._isShown = true;

					this._checkScrollbar();

					this._setScrollbar();

					this._adjustDialog();

					$$$1(document.body).addClass(ClassName.OPEN);

					this._setEscapeEvent();

					this._setResizeEvent();

					$$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
						return _this.hide(event);
					});
					$$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
						$$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
							if ($$$1(event.target).is(_this._element)) {
								_this._ignoreBackdropClick = true;
							}
						});
					});

					this._showBackdrop(function () {
						return _this._showElement(relatedTarget);
					});
				};

				_proto.hide = function hide(event) {
					var _this2 = this;

					if (event) {
						event.preventDefault();
					}

					if (this._isTransitioning || !this._isShown) {
						return;
					}

					var hideEvent = $$$1.Event(Event.HIDE);
					$$$1(this._element).trigger(hideEvent);

					if (!this._isShown || hideEvent.isDefaultPrevented()) {
						return;
					}

					this._isShown = false;
					var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

					if (transition) {
						this._isTransitioning = true;
					}

					this._setEscapeEvent();

					this._setResizeEvent();

					$$$1(document).off(Event.FOCUSIN);
					$$$1(this._element).removeClass(ClassName.SHOW);
					$$$1(this._element).off(Event.CLICK_DISMISS);
					$$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

					if (transition) {
						$$$1(this._element).one(Util.TRANSITION_END, function (event) {
							return _this2._hideModal(event);
						}).emulateTransitionEnd(TRANSITION_DURATION);
					} else {
						this._hideModal();
					}
				};

				_proto.dispose = function dispose() {
					$$$1.removeData(this._element, DATA_KEY);
					$$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
					this._config = null;
					this._element = null;
					this._dialog = null;
					this._backdrop = null;
					this._isShown = null;
					this._isBodyOverflowing = null;
					this._ignoreBackdropClick = null;
					this._scrollbarWidth = null;
				};

				_proto.handleUpdate = function handleUpdate() {
					this._adjustDialog();
				}; // Private


				_proto._getConfig = function _getConfig(config) {
					config = _extends({}, Default, config);
					Util.typeCheckConfig(NAME, config, DefaultType);
					return config;
				};

				_proto._showElement = function _showElement(relatedTarget) {
					var _this3 = this;

					var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

					if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
						// Don't move modal's DOM position
						document.body.appendChild(this._element);
					}

					this._element.style.display = 'block';

					this._element.removeAttribute('aria-hidden');

					this._element.scrollTop = 0;

					if (transition) {
						Util.reflow(this._element);
					}

					$$$1(this._element).addClass(ClassName.SHOW);

					if (this._config.focus) {
						this._enforceFocus();
					}

					var shownEvent = $$$1.Event(Event.SHOWN, {
						relatedTarget: relatedTarget
					});

					var transitionComplete = function transitionComplete() {
						if (_this3._config.focus) {
							_this3._element.focus();
						}

						_this3._isTransitioning = false;
						$$$1(_this3._element).trigger(shownEvent);
					};

					if (transition) {
						$$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
					} else {
						transitionComplete();
					}
				};

				_proto._enforceFocus = function _enforceFocus() {
					var _this4 = this;

					$$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
						.on(Event.FOCUSIN, function (event) {
							if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
								_this4._element.focus();
							}
						});
				};

				_proto._setEscapeEvent = function _setEscapeEvent() {
					var _this5 = this;

					if (this._isShown && this._config.keyboard) {
						$$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
							if (event.which === ESCAPE_KEYCODE) {
								event.preventDefault();

								_this5.hide();
							}
						});
					} else if (!this._isShown) {
						$$$1(this._element).off(Event.KEYDOWN_DISMISS);
					}
				};

				_proto._setResizeEvent = function _setResizeEvent() {
					var _this6 = this;

					if (this._isShown) {
						$$$1(window).on(Event.RESIZE, function (event) {
							return _this6.handleUpdate(event);
						});
					} else {
						$$$1(window).off(Event.RESIZE);
					}
				};

				_proto._hideModal = function _hideModal() {
					var _this7 = this;

					this._element.style.display = 'none';

					this._element.setAttribute('aria-hidden', true);

					this._isTransitioning = false;

					this._showBackdrop(function () {
						$$$1(document.body).removeClass(ClassName.OPEN);

						_this7._resetAdjustments();

						_this7._resetScrollbar();

						$$$1(_this7._element).trigger(Event.HIDDEN);
					});
				};

				_proto._removeBackdrop = function _removeBackdrop() {
					if (this._backdrop) {
						$$$1(this._backdrop).remove();
						this._backdrop = null;
					}
				};

				_proto._showBackdrop = function _showBackdrop(callback) {
					var _this8 = this;

					var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

					if (this._isShown && this._config.backdrop) {
						var doAnimate = Util.supportsTransitionEnd() && animate;
						this._backdrop = document.createElement('div');
						this._backdrop.className = ClassName.BACKDROP;

						if (animate) {
							$$$1(this._backdrop).addClass(animate);
						}

						$$$1(this._backdrop).appendTo(document.body);
						$$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
							if (_this8._ignoreBackdropClick) {
								_this8._ignoreBackdropClick = false;
								return;
							}

							if (event.target !== event.currentTarget) {
								return;
							}

							if (_this8._config.backdrop === 'static') {
								_this8._element.focus();
							} else {
								_this8.hide();
							}
						});

						if (doAnimate) {
							Util.reflow(this._backdrop);
						}

						$$$1(this._backdrop).addClass(ClassName.SHOW);

						if (!callback) {
							return;
						}

						if (!doAnimate) {
							callback();
							return;
						}

						$$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
					} else if (!this._isShown && this._backdrop) {
						$$$1(this._backdrop).removeClass(ClassName.SHOW);

						var callbackRemove = function callbackRemove() {
							_this8._removeBackdrop();

							if (callback) {
								callback();
							}
						};

						if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
							$$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
						} else {
							callbackRemove();
						}
					} else if (callback) {
						callback();
					}
				}; // ----------------------------------------------------------------------
				// the following methods are used to handle overflowing modals
				// todo (fat): these should probably be refactored out of modal.js
				// ----------------------------------------------------------------------


				_proto._adjustDialog = function _adjustDialog() {
					var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

					if (!this._isBodyOverflowing && isModalOverflowing) {
						this._element.style.paddingLeft = this._scrollbarWidth + "px";
					}

					if (this._isBodyOverflowing && !isModalOverflowing) {
						this._element.style.paddingRight = this._scrollbarWidth + "px";
					}
				};

				_proto._resetAdjustments = function _resetAdjustments() {
					this._element.style.paddingLeft = '';
					this._element.style.paddingRight = '';
				};

				_proto._checkScrollbar = function _checkScrollbar() {
					var rect = document.body.getBoundingClientRect();
					this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
					this._scrollbarWidth = this._getScrollbarWidth();
				};

				_proto._setScrollbar = function _setScrollbar() {
					var _this9 = this;

					if (this._isBodyOverflowing) {
						// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
						//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
						// Adjust fixed content padding
						$$$1(Selector.FIXED_CONTENT).each(function (index, element) {
							var actualPadding = $$$1(element)[0].style.paddingRight;
							var calculatedPadding = $$$1(element).css('padding-right');
							$$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
						}); // Adjust sticky content margin

						$$$1(Selector.STICKY_CONTENT).each(function (index, element) {
							var actualMargin = $$$1(element)[0].style.marginRight;
							var calculatedMargin = $$$1(element).css('margin-right');
							$$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
						}); // Adjust navbar-toggler margin

						$$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
							var actualMargin = $$$1(element)[0].style.marginRight;
							var calculatedMargin = $$$1(element).css('margin-right');
							$$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
						}); // Adjust body padding

						var actualPadding = document.body.style.paddingRight;
						var calculatedPadding = $$$1('body').css('padding-right');
						$$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
					}
				};

				_proto._resetScrollbar = function _resetScrollbar() {
					// Restore fixed content padding
					$$$1(Selector.FIXED_CONTENT).each(function (index, element) {
						var padding = $$$1(element).data('padding-right');

						if (typeof padding !== 'undefined') {
							$$$1(element).css('padding-right', padding).removeData('padding-right');
						}
					}); // Restore sticky content and navbar-toggler margin

					$$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
						var margin = $$$1(element).data('margin-right');

						if (typeof margin !== 'undefined') {
							$$$1(element).css('margin-right', margin).removeData('margin-right');
						}
					}); // Restore body padding

					var padding = $$$1('body').data('padding-right');

					if (typeof padding !== 'undefined') {
						$$$1('body').css('padding-right', padding).removeData('padding-right');
					}
				};

				_proto._getScrollbarWidth = function _getScrollbarWidth() {
					// thx d.walsh
					var scrollDiv = document.createElement('div');
					scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
					document.body.appendChild(scrollDiv);
					var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
					document.body.removeChild(scrollDiv);
					return scrollbarWidth;
				}; // Static


				Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
					return this.each(function () {
						var data = $$$1(this).data(DATA_KEY);

						var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

						if (!data) {
							data = new Modal(this, _config);
							$$$1(this).data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config](relatedTarget);
						} else if (_config.show) {
							data.show(relatedTarget);
						}
					});
				};

				_createClass(Modal, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}, {
					key: "Default",
					get: function get() {
						return Default;
					}
				}]);
				return Modal;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * Data Api implementation
		 * ------------------------------------------------------------------------
		 */


		$$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
			var _this10 = this;

			var target;
			var selector = Util.getSelectorFromElement(this);

			if (selector) {
				target = $$$1(selector)[0];
			}

			var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());

			if (this.tagName === 'A' || this.tagName === 'AREA') {
				event.preventDefault();
			}

			var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
				if (showEvent.isDefaultPrevented()) {
					// Only register focus restorer if modal will actually get shown
					return;
				}

				$target.one(Event.HIDDEN, function () {
					if ($$$1(_this10).is(':visible')) {
						_this10.focus();
					}
				});
			});

			Modal._jQueryInterface.call($$$1(target), config, this);
		});
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */

		$$$1.fn[NAME] = Modal._jQueryInterface;
		$$$1.fn[NAME].Constructor = Modal;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Modal._jQueryInterface;
		};

		return Modal;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tooltip = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'tooltip';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.tooltip';
		var EVENT_KEY = "." + DATA_KEY;
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var TRANSITION_DURATION = 150;
		var CLASS_PREFIX = 'bs-tooltip';
		var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
		var DefaultType = {
			animation: 'boolean',
			template: 'string',
			title: '(string|element|function)',
			trigger: 'string',
			delay: '(number|object)',
			html: 'boolean',
			selector: '(string|boolean)',
			placement: '(string|function)',
			offset: '(number|string)',
			container: '(string|element|boolean)',
			fallbackPlacement: '(string|array)',
			boundary: '(string|element)'
		};
		var AttachmentMap = {
			AUTO: 'auto',
			TOP: 'top',
			RIGHT: 'right',
			BOTTOM: 'bottom',
			LEFT: 'left'
		};
		var Default = {
			animation: true,
			template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
			trigger: 'hover focus',
			title: '',
			delay: 0,
			html: false,
			selector: false,
			placement: 'top',
			offset: 0,
			container: false,
			fallbackPlacement: 'flip',
			boundary: 'scrollParent'
		};
		var HoverState = {
			SHOW: 'show',
			OUT: 'out'
		};
		var Event = {
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			INSERTED: "inserted" + EVENT_KEY,
			CLICK: "click" + EVENT_KEY,
			FOCUSIN: "focusin" + EVENT_KEY,
			FOCUSOUT: "focusout" + EVENT_KEY,
			MOUSEENTER: "mouseenter" + EVENT_KEY,
			MOUSELEAVE: "mouseleave" + EVENT_KEY
		};
		var ClassName = {
			FADE: 'fade',
			SHOW: 'show'
		};
		var Selector = {
			TOOLTIP: '.tooltip',
			TOOLTIP_INNER: '.tooltip-inner',
			ARROW: '.arrow'
		};
		var Trigger = {
			HOVER: 'hover',
			FOCUS: 'focus',
			CLICK: 'click',
			MANUAL: 'manual'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Tooltip =
			/*#__PURE__*/
			function () {
				function Tooltip(element, config) {
					/**
					 * Check for Popper dependency
					 * Popper - https://popper.js.org
					 */
					if (typeof Popper === 'undefined') {
						throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
					} // private


					this._isEnabled = true;
					this._timeout = 0;
					this._hoverState = '';
					this._activeTrigger = {};
					this._popper = null; // Protected

					this.element = element;
					this.config = this._getConfig(config);
					this.tip = null;

					this._setListeners();
				} // Getters


				var _proto = Tooltip.prototype;

				// Public
				_proto.enable = function enable() {
					this._isEnabled = true;
				};

				_proto.disable = function disable() {
					this._isEnabled = false;
				};

				_proto.toggleEnabled = function toggleEnabled() {
					this._isEnabled = !this._isEnabled;
				};

				_proto.toggle = function toggle(event) {
					if (!this._isEnabled) {
						return;
					}

					if (event) {
						var dataKey = this.constructor.DATA_KEY;
						var context = $$$1(event.currentTarget).data(dataKey);

						if (!context) {
							context = new this.constructor(event.currentTarget, this._getDelegateConfig());
							$$$1(event.currentTarget).data(dataKey, context);
						}

						context._activeTrigger.click = !context._activeTrigger.click;

						if (context._isWithActiveTrigger()) {
							context._enter(null, context);
						} else {
							context._leave(null, context);
						}
					} else {
						if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
							this._leave(null, this);

							return;
						}

						this._enter(null, this);
					}
				};

				_proto.dispose = function dispose() {
					clearTimeout(this._timeout);
					$$$1.removeData(this.element, this.constructor.DATA_KEY);
					$$$1(this.element).off(this.constructor.EVENT_KEY);
					$$$1(this.element).closest('.modal').off('hide.bs.modal');

					if (this.tip) {
						$$$1(this.tip).remove();
					}

					this._isEnabled = null;
					this._timeout = null;
					this._hoverState = null;
					this._activeTrigger = null;

					if (this._popper !== null) {
						this._popper.destroy();
					}

					this._popper = null;
					this.element = null;
					this.config = null;
					this.tip = null;
				};

				_proto.show = function show() {
					var _this = this;

					if ($$$1(this.element).css('display') === 'none') {
						throw new Error('Please use show on visible elements');
					}

					var showEvent = $$$1.Event(this.constructor.Event.SHOW);

					if (this.isWithContent() && this._isEnabled) {
						$$$1(this.element).trigger(showEvent);
						var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

						if (showEvent.isDefaultPrevented() || !isInTheDom) {
							return;
						}

						var tip = this.getTipElement();
						var tipId = Util.getUID(this.constructor.NAME);
						tip.setAttribute('id', tipId);
						this.element.setAttribute('aria-describedby', tipId);
						this.setContent();

						if (this.config.animation) {
							$$$1(tip).addClass(ClassName.FADE);
						}

						var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

						var attachment = this._getAttachment(placement);

						this.addAttachmentClass(attachment);
						var container = this.config.container === false ? document.body : $$$1(this.config.container);
						$$$1(tip).data(this.constructor.DATA_KEY, this);

						if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
							$$$1(tip).appendTo(container);
						}

						$$$1(this.element).trigger(this.constructor.Event.INSERTED);
						this._popper = new Popper(this.element, tip, {
							placement: attachment,
							modifiers: {
								offset: {
									offset: this.config.offset
								},
								flip: {
									behavior: this.config.fallbackPlacement
								},
								arrow: {
									element: Selector.ARROW
								},
								preventOverflow: {
									boundariesElement: this.config.boundary
								}
							},
							onCreate: function onCreate(data) {
								if (data.originalPlacement !== data.placement) {
									_this._handlePopperPlacementChange(data);
								}
							},
							onUpdate: function onUpdate(data) {
								_this._handlePopperPlacementChange(data);
							}
						});
						$$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
						// empty mouseover listeners to the body's immediate children;
						// only needed because of broken event delegation on iOS
						// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

						if ('ontouchstart' in document.documentElement) {
							$$$1('body').children().on('mouseover', null, $$$1.noop);
						}

						var complete = function complete() {
							if (_this.config.animation) {
								_this._fixTransition();
							}

							var prevHoverState = _this._hoverState;
							_this._hoverState = null;
							$$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

							if (prevHoverState === HoverState.OUT) {
								_this._leave(null, _this);
							}
						};

						if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
							$$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
						} else {
							complete();
						}
					}
				};

				_proto.hide = function hide(callback) {
					var _this2 = this;

					var tip = this.getTipElement();
					var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

					var complete = function complete() {
						if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
							tip.parentNode.removeChild(tip);
						}

						_this2._cleanTipClass();

						_this2.element.removeAttribute('aria-describedby');

						$$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

						if (_this2._popper !== null) {
							_this2._popper.destroy();
						}

						if (callback) {
							callback();
						}
					};

					$$$1(this.element).trigger(hideEvent);

					if (hideEvent.isDefaultPrevented()) {
						return;
					}

					$$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
					// empty mouseover listeners we added for iOS support

					if ('ontouchstart' in document.documentElement) {
						$$$1('body').children().off('mouseover', null, $$$1.noop);
					}

					this._activeTrigger[Trigger.CLICK] = false;
					this._activeTrigger[Trigger.FOCUS] = false;
					this._activeTrigger[Trigger.HOVER] = false;

					if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
						$$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
					} else {
						complete();
					}

					this._hoverState = '';
				};

				_proto.update = function update() {
					if (this._popper !== null) {
						this._popper.scheduleUpdate();
					}
				}; // Protected


				_proto.isWithContent = function isWithContent() {
					return Boolean(this.getTitle());
				};

				_proto.addAttachmentClass = function addAttachmentClass(attachment) {
					$$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
				};

				_proto.getTipElement = function getTipElement() {
					this.tip = this.tip || $$$1(this.config.template)[0];
					return this.tip;
				};

				_proto.setContent = function setContent() {
					var $tip = $$$1(this.getTipElement());
					this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
					$tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
				};

				_proto.setElementContent = function setElementContent($element, content) {
					var html = this.config.html;

					if (typeof content === 'object' && (content.nodeType || content.jquery)) {
						// Content is a DOM node or a jQuery
						if (html) {
							if (!$$$1(content).parent().is($element)) {
								$element.empty().append(content);
							}
						} else {
							$element.text($$$1(content).text());
						}
					} else {
						$element[html ? 'html' : 'text'](content);
					}
				};

				_proto.getTitle = function getTitle() {
					var title = this.element.getAttribute('data-original-title');

					if (!title) {
						title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
					}

					return title;
				}; // Private


				_proto._getAttachment = function _getAttachment(placement) {
					return AttachmentMap[placement.toUpperCase()];
				};

				_proto._setListeners = function _setListeners() {
					var _this3 = this;

					var triggers = this.config.trigger.split(' ');
					triggers.forEach(function (trigger) {
						if (trigger === 'click') {
							$$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
								return _this3.toggle(event);
							});
						} else if (trigger !== Trigger.MANUAL) {
							var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
							var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
							$$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
								return _this3._enter(event);
							}).on(eventOut, _this3.config.selector, function (event) {
								return _this3._leave(event);
							});
						}

						$$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
							return _this3.hide();
						});
					});

					if (this.config.selector) {
						this.config = _extends({}, this.config, {
							trigger: 'manual',
							selector: ''
						});
					} else {
						this._fixTitle();
					}
				};

				_proto._fixTitle = function _fixTitle() {
					var titleType = typeof this.element.getAttribute('data-original-title');

					if (this.element.getAttribute('title') || titleType !== 'string') {
						this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
						this.element.setAttribute('title', '');
					}
				};

				_proto._enter = function _enter(event, context) {
					var dataKey = this.constructor.DATA_KEY;
					context = context || $$$1(event.currentTarget).data(dataKey);

					if (!context) {
						context = new this.constructor(event.currentTarget, this._getDelegateConfig());
						$$$1(event.currentTarget).data(dataKey, context);
					}

					if (event) {
						context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
					}

					if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
						context._hoverState = HoverState.SHOW;
						return;
					}

					clearTimeout(context._timeout);
					context._hoverState = HoverState.SHOW;

					if (!context.config.delay || !context.config.delay.show) {
						context.show();
						return;
					}

					context._timeout = setTimeout(function () {
						if (context._hoverState === HoverState.SHOW) {
							context.show();
						}
					}, context.config.delay.show);
				};

				_proto._leave = function _leave(event, context) {
					var dataKey = this.constructor.DATA_KEY;
					context = context || $$$1(event.currentTarget).data(dataKey);

					if (!context) {
						context = new this.constructor(event.currentTarget, this._getDelegateConfig());
						$$$1(event.currentTarget).data(dataKey, context);
					}

					if (event) {
						context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
					}

					if (context._isWithActiveTrigger()) {
						return;
					}

					clearTimeout(context._timeout);
					context._hoverState = HoverState.OUT;

					if (!context.config.delay || !context.config.delay.hide) {
						context.hide();
						return;
					}

					context._timeout = setTimeout(function () {
						if (context._hoverState === HoverState.OUT) {
							context.hide();
						}
					}, context.config.delay.hide);
				};

				_proto._isWithActiveTrigger = function _isWithActiveTrigger() {
					for (var trigger in this._activeTrigger) {
						if (this._activeTrigger[trigger]) {
							return true;
						}
					}

					return false;
				};

				_proto._getConfig = function _getConfig(config) {
					config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);

					if (typeof config.delay === 'number') {
						config.delay = {
							show: config.delay,
							hide: config.delay
						};
					}

					if (typeof config.title === 'number') {
						config.title = config.title.toString();
					}

					if (typeof config.content === 'number') {
						config.content = config.content.toString();
					}

					Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
					return config;
				};

				_proto._getDelegateConfig = function _getDelegateConfig() {
					var config = {};

					if (this.config) {
						for (var key in this.config) {
							if (this.constructor.Default[key] !== this.config[key]) {
								config[key] = this.config[key];
							}
						}
					}

					return config;
				};

				_proto._cleanTipClass = function _cleanTipClass() {
					var $tip = $$$1(this.getTipElement());
					var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

					if (tabClass !== null && tabClass.length > 0) {
						$tip.removeClass(tabClass.join(''));
					}
				};

				_proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
					this._cleanTipClass();

					this.addAttachmentClass(this._getAttachment(data.placement));
				};

				_proto._fixTransition = function _fixTransition() {
					var tip = this.getTipElement();
					var initConfigAnimation = this.config.animation;

					if (tip.getAttribute('x-placement') !== null) {
						return;
					}

					$$$1(tip).removeClass(ClassName.FADE);
					this.config.animation = false;
					this.hide();
					this.show();
					this.config.animation = initConfigAnimation;
				}; // Static


				Tooltip._jQueryInterface = function _jQueryInterface(config) {
					return this.each(function () {
						var data = $$$1(this).data(DATA_KEY);

						var _config = typeof config === 'object' && config;

						if (!data && /dispose|hide/.test(config)) {
							return;
						}

						if (!data) {
							data = new Tooltip(this, _config);
							$$$1(this).data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config]();
						}
					});
				};

				_createClass(Tooltip, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}, {
					key: "Default",
					get: function get() {
						return Default;
					}
				}, {
					key: "NAME",
					get: function get() {
						return NAME;
					}
				}, {
					key: "DATA_KEY",
					get: function get() {
						return DATA_KEY;
					}
				}, {
					key: "Event",
					get: function get() {
						return Event;
					}
				}, {
					key: "EVENT_KEY",
					get: function get() {
						return EVENT_KEY;
					}
				}, {
					key: "DefaultType",
					get: function get() {
						return DefaultType;
					}
				}]);
				return Tooltip;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */


		$$$1.fn[NAME] = Tooltip._jQueryInterface;
		$$$1.fn[NAME].Constructor = Tooltip;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Tooltip._jQueryInterface;
		};

		return Tooltip;
	}($, Popper);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): popover.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Popover = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'popover';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.popover';
		var EVENT_KEY = "." + DATA_KEY;
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var CLASS_PREFIX = 'bs-popover';
		var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
		var Default = _extends({}, Tooltip.Default, {
			placement: 'right',
			trigger: 'click',
			content: '',
			template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
		});
		var DefaultType = _extends({}, Tooltip.DefaultType, {
			content: '(string|element|function)'
		});
		var ClassName = {
			FADE: 'fade',
			SHOW: 'show'
		};
		var Selector = {
			TITLE: '.popover-header',
			CONTENT: '.popover-body'
		};
		var Event = {
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			INSERTED: "inserted" + EVENT_KEY,
			CLICK: "click" + EVENT_KEY,
			FOCUSIN: "focusin" + EVENT_KEY,
			FOCUSOUT: "focusout" + EVENT_KEY,
			MOUSEENTER: "mouseenter" + EVENT_KEY,
			MOUSELEAVE: "mouseleave" + EVENT_KEY
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Popover =
			/*#__PURE__*/
			function (_Tooltip) {
				_inheritsLoose(Popover, _Tooltip);

				function Popover() {
					return _Tooltip.apply(this, arguments) || this;
				}

				var _proto = Popover.prototype;

				// Overrides
				_proto.isWithContent = function isWithContent() {
					return this.getTitle() || this._getContent();
				};

				_proto.addAttachmentClass = function addAttachmentClass(attachment) {
					$$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
				};

				_proto.getTipElement = function getTipElement() {
					this.tip = this.tip || $$$1(this.config.template)[0];
					return this.tip;
				};

				_proto.setContent = function setContent() {
					var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

					this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

					var content = this._getContent();

					if (typeof content === 'function') {
						content = content.call(this.element);
					}

					this.setElementContent($tip.find(Selector.CONTENT), content);
					$tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
				}; // Private


				_proto._getContent = function _getContent() {
					return this.element.getAttribute('data-content') || this.config.content;
				};

				_proto._cleanTipClass = function _cleanTipClass() {
					var $tip = $$$1(this.getTipElement());
					var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

					if (tabClass !== null && tabClass.length > 0) {
						$tip.removeClass(tabClass.join(''));
					}
				}; // Static


				Popover._jQueryInterface = function _jQueryInterface(config) {
					return this.each(function () {
						var data = $$$1(this).data(DATA_KEY);

						var _config = typeof config === 'object' ? config : null;

						if (!data && /destroy|hide/.test(config)) {
							return;
						}

						if (!data) {
							data = new Popover(this, _config);
							$$$1(this).data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config]();
						}
					});
				};

				_createClass(Popover, null, [{
					key: "VERSION",
					// Getters
					get: function get() {
						return VERSION;
					}
				}, {
					key: "Default",
					get: function get() {
						return Default;
					}
				}, {
					key: "NAME",
					get: function get() {
						return NAME;
					}
				}, {
					key: "DATA_KEY",
					get: function get() {
						return DATA_KEY;
					}
				}, {
					key: "Event",
					get: function get() {
						return Event;
					}
				}, {
					key: "EVENT_KEY",
					get: function get() {
						return EVENT_KEY;
					}
				}, {
					key: "DefaultType",
					get: function get() {
						return DefaultType;
					}
				}]);
				return Popover;
			}(Tooltip);
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */


		$$$1.fn[NAME] = Popover._jQueryInterface;
		$$$1.fn[NAME].Constructor = Popover;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Popover._jQueryInterface;
		};

		return Popover;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tab = function ($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'tab';
		var VERSION = '4.0.0';
		var DATA_KEY = 'bs.tab';
		var EVENT_KEY = "." + DATA_KEY;
		var DATA_API_KEY = '.data-api';
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var TRANSITION_DURATION = 150;
		var Event = {
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
		};
		var ClassName = {
			DROPDOWN_MENU: 'dropdown-menu',
			ACTIVE: 'active',
			DISABLED: 'disabled',
			FADE: 'fade',
			SHOW: 'show'
		};
		var Selector = {
			DROPDOWN: '.dropdown',
			NAV_LIST_GROUP: '.nav, .list-group',
			ACTIVE: '.active',
			ACTIVE_UL: '> li > .active',
			DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
			DROPDOWN_TOGGLE: '.dropdown-toggle',
			DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Tab =
			/*#__PURE__*/
			function () {
				function Tab(element) {
					this._element = element;
				} // Getters


				var _proto = Tab.prototype;

				// Public
				_proto.show = function show() {
					var _this = this;

					if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
						return;
					}

					var target;
					var previous;
					var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
					var selector = Util.getSelectorFromElement(this._element);

					if (listElement) {
						var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
						previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
						previous = previous[previous.length - 1];
					}

					var hideEvent = $$$1.Event(Event.HIDE, {
						relatedTarget: this._element
					});
					var showEvent = $$$1.Event(Event.SHOW, {
						relatedTarget: previous
					});

					if (previous) {
						$$$1(previous).trigger(hideEvent);
					}

					$$$1(this._element).trigger(showEvent);

					if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
						return;
					}

					if (selector) {
						target = $$$1(selector)[0];
					}

					this._activate(this._element, listElement);

					var complete = function complete() {
						var hiddenEvent = $$$1.Event(Event.HIDDEN, {
							relatedTarget: _this._element
						});
						var shownEvent = $$$1.Event(Event.SHOWN, {
							relatedTarget: previous
						});
						$$$1(previous).trigger(hiddenEvent);
						$$$1(_this._element).trigger(shownEvent);
					};

					if (target) {
						this._activate(target, target.parentNode, complete);
					} else {
						complete();
					}
				};

				_proto.dispose = function dispose() {
					$$$1.removeData(this._element, DATA_KEY);
					this._element = null;
				}; // Private


				_proto._activate = function _activate(element, container, callback) {
					var _this2 = this;

					var activeElements;

					if (container.nodeName === 'UL') {
						activeElements = $$$1(container).find(Selector.ACTIVE_UL);
					} else {
						activeElements = $$$1(container).children(Selector.ACTIVE);
					}

					var active = activeElements[0];
					var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);

					var complete = function complete() {
						return _this2._transitionComplete(element, active, callback);
					};

					if (active && isTransitioning) {
						$$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
					} else {
						complete();
					}
				};

				_proto._transitionComplete = function _transitionComplete(element, active, callback) {
					if (active) {
						$$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
						var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

						if (dropdownChild) {
							$$$1(dropdownChild).removeClass(ClassName.ACTIVE);
						}

						if (active.getAttribute('role') === 'tab') {
							active.setAttribute('aria-selected', false);
						}
					}

					$$$1(element).addClass(ClassName.ACTIVE);

					if (element.getAttribute('role') === 'tab') {
						element.setAttribute('aria-selected', true);
					}

					Util.reflow(element);
					$$$1(element).addClass(ClassName.SHOW);

					if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
						var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

						if (dropdownElement) {
							$$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
						}

						element.setAttribute('aria-expanded', true);
					}

					if (callback) {
						callback();
					}
				}; // Static


				Tab._jQueryInterface = function _jQueryInterface(config) {
					return this.each(function () {
						var $this = $$$1(this);
						var data = $this.data(DATA_KEY);

						if (!data) {
							data = new Tab(this);
							$this.data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config]();
						}
					});
				};

				_createClass(Tab, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}]);
				return Tab;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * Data Api implementation
		 * ------------------------------------------------------------------------
		 */


		$$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
			event.preventDefault();

			Tab._jQueryInterface.call($$$1(this), 'show');
		});
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */

		$$$1.fn[NAME] = Tab._jQueryInterface;
		$$$1.fn[NAME].Constructor = Tab;

		$$$1.fn[NAME].noConflict = function () {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Tab._jQueryInterface;
		};

		return Tab;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.6): index.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	(function ($$$1) {
		if (typeof $$$1 === 'undefined') {
			throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
		}

		var version = $$$1.fn.jquery.split(' ')[0].split('.');
		var minMajor = 1;
		var ltMajor = 2;
		var minMinor = 9;
		var minPatch = 1;
		var maxMajor = 4;

		if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
			throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
		}
	})($);

	exports.Util = Util;
	exports.Alert = Alert;
	exports.Collapse = Collapse;
	exports.Dropdown = Dropdown;
	exports.Modal = Modal;
	exports.Popover = Popover;
	exports.Tab = Tab;
	exports.Tooltip = Tooltip;

	Object.defineProperty(exports, '__esModule', { value: true });

})));