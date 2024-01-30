"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[2397],{7507:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return y}});var a=n(5392),l=n(2784),r=n(1316),c=n(6854),i=n(4234);function o(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",hr:"hr",h2:"h2",a:"a",span:"span"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Vue"),"\n",l.createElement(t.p,null,"Start by installing the Embla Carousel ",l.createElement(t.strong,null,"npm package")," and add it to your dependencies."),"\n",l.createElement(r.m,{groupId:i.JP.GROUP_ID},l.createElement(c.L,{tab:i.JP.TABS.NPM},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-vue --save\n"))),l.createElement(c.L,{tab:i.JP.TABS.YARN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-vue\n")))),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"the-component-structure",style:{position:"relative"}},l.createElement(t.a,{href:"#the-component-structure","aria-label":"the component structure permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"The component structure"),"\n",l.createElement(t.p,null,"Embla Carousel provides the handy ",l.createElement(t.code,null,"emblaCarouselVue")," function for seamless integration with Vue. A minimal setup requires an ",l.createElement(t.strong,null,"overflow wrapper")," and a ",l.createElement(t.strong,null,"scroll container"),". Start by adding the following structure to your carousel:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script setup>\n  import emblaCarouselVue from \'embla-carousel-vue\'\n\n  const [emblaRef] = emblaCarouselVue()\n<\/script>\n\n<template>\n  <div class="embla" ref="emblaRef">\n    <div class="embla__container">\n      <div class="embla__slide">Slide 1</div>\n      <div class="embla__slide">Slide 2</div>\n      <div class="embla__slide">Slide 3</div>\n    </div>\n  </div>\n</template>\n')),"\n",l.createElement(t.h2,{id:"styling-the-carousel",style:{position:"relative"}},l.createElement(t.a,{href:"#styling-the-carousel","aria-label":"styling the carousel permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Styling the carousel"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselVue")," function gives us an ",l.createElement(t.strong,null,"emblaRef")," to attach to our wrapping element with the classname ",l.createElement(t.code,null,"embla"),", which is needed to cover the scroll overflow. The element with the ",l.createElement(t.code,null,"container")," classname is the scroll body that scrolls the slides. Continue by adding the following ",l.createElement(t.strong,null,"CSS")," to these elements:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},"<style scoped>\n  .embla {\n    overflow: hidden;\n  }\n  .embla__container {\n    display: flex;\n  }\n  .embla__slide {\n    flex: 0 0 100%;\n    min-width: 0;\n  }\n</style>\n")),"\n",l.createElement(t.h2,{id:"accessing-the-carousel-api",style:{position:"relative"}},l.createElement(t.a,{href:"#accessing-the-carousel-api","aria-label":"accessing the carousel api permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Accessing the carousel API"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselVue")," function takes the Embla Carousel ",l.createElement(t.a,{href:"/api/options/"},"options")," as the first argument. Additionally, you can access the ",l.createElement(t.a,{href:"/api/"},"API")," with an ",l.createElement(t.code,null,"watchEffect")," like demonstrated below:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html___highlight={5,7-11}"},'<script setup>\n  import { watchEffect } from \'vue\'\n  import emblaCarouselVue from \'embla-carousel-vue\'\n\n  const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false })\n\n  watchEffect(() => {\n    if (emblaApi.value) {\n      console.log(emblaApi.value.slideNodes()) // Access API\n    }\n  })\n<\/script>\n\n<template>\n  <div class="embla" ref="emblaRef">\n    <div class="embla__container">\n      <div class="embla__slide">Slide 1</div>\n      <div class="embla__slide">Slide 2</div>\n      <div class="embla__slide">Slide 3</div>\n    </div>\n  </div>\n</template>\n')),"\n",l.createElement(t.h2,{id:"adding-plugins",style:{position:"relative"}},l.createElement(t.a,{href:"#adding-plugins","aria-label":"adding plugins permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding plugins"),"\n",l.createElement(t.p,null,"Start by installing the plugin you want to use. In this example, we're going to install the ",l.createElement(t.a,{href:"/plugins/autoplay/"},"Autoplay")," plugin:"),"\n",l.createElement(r.m,{groupId:i.JP.GROUP_ID},l.createElement(c.L,{tab:i.JP.TABS.NPM},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-autoplay --save\n"))),l.createElement(c.L,{tab:i.JP.TABS.YARN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-autoplay\n")))),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselVue")," function accepts ",l.createElement(t.a,{href:"/plugins/"},"plugins")," as the second argument. Note that plugins need to be passed in an ",l.createElement(t.strong,null,"array")," like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html___highlight={3,5}"},'<script setup>\n  import emblaCarouselVue from \'embla-carousel-vue\'\n  import Autoplay from \'embla-carousel-autoplay\'\n\n  const [emblaRef] = emblaCarouselVue({ loop: false }, [Autoplay()])\n<\/script>\n\n<template>\n  <div class="embla" ref="emblaRef">\n    <div class="embla__container">\n      <div class="embla__slide">Slide 1</div>\n      <div class="embla__slide">Slide 2</div>\n      <div class="embla__slide">Slide 3</div>\n    </div>\n  </div>\n</template>\n')),"\n",l.createElement(t.p,null,"Congratulations! You just created your first Embla Carousel component."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},m=n(4810),u=n(3785),d=n(8116),p=n(3559),g=n(7377),h=n(286),E=n(1429),f=n(8944),v=n(6750);const b=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,d.$)(),{title:c="",description:i,date:o}=t.mdx.frontmatter,s=(0,l.useMemo)((()=>new Date(o+" UTC").toISOString()),[o]);return l.createElement(m.p,{title:c,description:i,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,f.P)(a)+'",\n        "description": "'+i+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+c+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+s+'",\n        "dateModified": "'+s+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+u.Z+'"\n          }\n        }\n      }\n    '))},_=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:c,id:i}=t;return l.createElement(l.Fragment,null,l.createElement(h.V,{id:i}),l.createElement("article",{id:E.O},l.createElement(v.i,null,n)),l.createElement(p.l,{pageUrl:c}),l.createElement(g.R,{previous:r,next:a}))};function y(e){return l.createElement(_,e,l.createElement(s,e))}},286:function(e,t,n){n.d(t,{V:function(){return f}});var a=n(2784),l=n(1195),r=n(9900),c=(n(6860),n(4049)),i=n(5211);var o=n(6807),s=n(3792),m=n(727),u=n(127);const d=l.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,u.v.THREE),p=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),g=(0,l.default)(r.t).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],p),h=l.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],p),E=(0,l.default)(o.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,i.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,c.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(d,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:c}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(g,{to:r},c),a.createElement(E,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(h,{key:l},c)})))}},3559:function(e,t,n){n.d(t,{l:function(){return d}});var a=n(2784),l=n(1195),r=n(9900),c=n(3792),i=n(727),o=n(127),s=n(2657),m=n(6722);const u=(0,l.default)(r.t).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],i.u.COMPLEMENTARY,o.v.ONE,o.v.ONE,o.v.EIGHT,c.DM.TEXT_LOW_CONTRAST),d=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(u,{to:n},a.createElement(m.M5,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return f}});var a=n(2784),l=n(1195),r=n(9900),c=n(4097),i=n(3792),o=n(127),s=n(727),m=n(6722),u=n(6991);const d=o.v.FOUR,p=l.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,u.h)(d,"","div"),o.v.EIGHT),g=l.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],i.DM.BRAND_PRIMARY,i.DM.BRAND_SECONDARY),h=l.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],i.DM.TEXT_LOW_CONTRAST,o.v.ONE),E=l.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],s.X.MEDIUM,m.EG,c.V),f=e=>{const{next:t,previous:n}=e;return a.createElement(p,{"aria-label":"Pagination Navigation"},a.createElement(g,null,n&&a.createElement(r.t,{to:n.slug},a.createElement(h,null,"Previous"),a.createElement(E,null,a.createElement(m.M5,{iconSvg:"arrowLeft"},n.title)))),a.createElement(g,null,t&&a.createElement(r.t,{to:t.slug},a.createElement(h,null,"Next"),a.createElement(E,null,a.createElement(m.M5,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},4810:function(e,t,n){n.d(t,{p:function(){return i}});var a=n(2784),l=n(8116),r=n(8944),c=n(3471);const i=e=>{const{title:t,description:n,lang:i="en",url:o,children:s}=e,m=(0,l.$)(),u=t+" | "+(0,c.g)(m.title),d=n||m.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:i}),a.createElement("title",null,u),a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:d}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:o}),a.createElement("meta",{name:"og:site_name",content:(0,r.P)(m.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:m.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:d}),s)}},3471:function(e,t,n){n.d(t,{g:function(){return a}});const a=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-src-content-pages-get-started-vue-mdx-ff495a763d0458141f01.js.map