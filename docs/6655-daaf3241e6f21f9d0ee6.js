"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6655],{9036:function(n,e,t){t.r(e);var o=t(4041),a=t(7154),l=t(3710),i=t(7105);e.default=n=>{const{slides:e,options:t}=n,[s,r]=(0,a.A)(t,[(0,l.A)({playOnInit:!1,delay:3e3})]),{0:c,1:u}=(0,o.useState)(!1),{prevBtnDisabled:p,nextBtnDisabled:d,onPrevButtonClick:m,onNextButtonClick:f}=(0,i.Hd)(r),v=(0,o.useCallback)((n=>{var e;const t=null==r||null===(e=r.plugins())||void 0===e?void 0:e.autoplay;if(!t)return;(!1===t.options.stopOnInteraction?t.reset:t.stop)(),n()}),[r]),y=(0,o.useCallback)((()=>{var n;const e=null==r||null===(n=r.plugins())||void 0===n?void 0:n.autoplay;if(!e)return;(e.isPlaying()?e.stop:e.play)()}),[r]);return(0,o.useEffect)((()=>{var n;const e=null==r||null===(n=r.plugins())||void 0===n?void 0:n.autoplay;e&&(u(e.isPlaying()),r.on("autoplay:play",(()=>u(!0))).on("autoplay:stop",(()=>u(!1))).on("reInit",(()=>u(e.isPlaying()))))}),[r]),o.createElement("div",{className:"embla"},o.createElement("div",{className:"embla__viewport",ref:s},o.createElement("div",{className:"embla__container"},e.map((n=>o.createElement("div",{className:"embla__slide",key:n},o.createElement("div",{className:"embla__slide__number"},o.createElement("span",null,n+1))))))),o.createElement("div",{className:"embla__controls"},o.createElement("div",{className:"embla__buttons"},o.createElement(i.U1,{onClick:()=>v(m),disabled:p}),o.createElement(i.WE,{onClick:()=>v(f),disabled:d})),o.createElement("button",{className:"embla__play",onClick:y,type:"button"},c?"Stop":"Start")))}},3710:function(n,e,t){t.d(e,{A:function(){return a}});const o={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function a(n){let e,t,l;void 0===n&&(n={});let i=!1,s=!0,r=!1,c=0;function u(){if(l)return;if(!s)return;i||t.emit("autoplay:play");const{ownerWindow:n}=t.internalEngine();n.clearInterval(c),c=n.setInterval(v,e.delay),i=!0}function p(){if(l)return;i&&t.emit("autoplay:stop");const{ownerWindow:n}=t.internalEngine();n.clearInterval(c),c=0,i=!1}function d(){if(m())return s=i,p();s&&u()}function m(){const{ownerDocument:n}=t.internalEngine();return"hidden"===n.visibilityState}function f(n){void 0!==n&&(r=n),s=!0,u()}function v(){const{index:n}=t.internalEngine(),o=n.clone().add(1).get(),a=t.scrollSnapList().length-1;e.stopOnLastSnap&&o===a&&p(),t.canScrollNext()?t.scrollNext(r):t.scrollTo(0,r)}return{name:"autoplay",options:n,init:function(i,c){t=i;const{mergeOptions:f,optionsAtMedia:v}=c,y=f(o,a.globalOptions),b=f(y,n);if(e=v(b),t.scrollSnapList().length<=1)return;r=e.jump,l=!1;const{eventStore:E,ownerDocument:_}=t.internalEngine(),g=t.rootNode(),O=e.rootNode&&e.rootNode(g)||g,N=t.containerNode();t.on("pointerDown",p),e.stopOnInteraction||t.on("pointerUp",u),e.stopOnMouseEnter&&(E.add(O,"mouseenter",(()=>{s=!1,p()})),e.stopOnInteraction||E.add(O,"mouseleave",(()=>{s=!0,u()}))),e.stopOnFocusIn&&(t.on("slideFocusStart",p),e.stopOnInteraction||E.add(N,"focusout",u)),E.add(_,"visibilitychange",d),e.playOnInit&&!m()&&u()},destroy:function(){t.off("pointerDown",p).off("pointerUp",u).off("slideFocusStart",p),p(),l=!0,i=!1},play:f,stop:function(){i&&p()},reset:function(){i&&f()},isPlaying:function(){return i}}}a.globalOptions=void 0}}]);
//# sourceMappingURL=6655-daaf3241e6f21f9d0ee6.js.map