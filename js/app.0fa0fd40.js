(function(){"use strict";var e={3073:function(e,n,t){var i=t(9242),a=t(3396);const r={class:"header"},A={class:"main"};function s(e,n,t,i,s,o){const l=(0,a.up)("HeaderNav"),c=(0,a.up)("MainHero"),d=(0,a.up)("MainNew"),u=(0,a.up)("MainPopular"),g=(0,a.up)("Attribution");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("header",r,[(0,a.Wm)(l)]),(0,a._)("main",A,[(0,a.Wm)(c),(0,a.Wm)(d),(0,a.Wm)(u)]),(0,a.Wm)(g)],64)}var o=t.p+"img/image-web-3-desktop.da9e2ad2.jpg",l=t.p+"img/image-web-3-mobile.f002385f.jpg";const c={class:"header-hero"},d={key:0,src:o,alt:"hero image",class:"hero"},u={key:1,src:l,alt:"hero image",class:"hero"},g=(0,a._)("h1",{class:"header-title"},"The Bright Future fo Web 3.0?",-1),p=(0,a._)("p",{class:"header-text"},[(0,a.Uk)(" We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? "),(0,a._)("button",{class:"button header-hero__button header-hero__button--desktop"},"Read more")],-1),h=(0,a._)("button",{class:"button header-hero__button header-hero__button--mobile"},"Read more",-1);function m(e,n,t,i,r,A){return(0,a.wg)(),(0,a.iD)("div",c,[r.mobileScreen?((0,a.wg)(),(0,a.iD)("img",u)):((0,a.wg)(),(0,a.iD)("img",d)),g,p,h])}var v={name:"HeaderHero",data(){return{mobileScreen:768}},methods:{getMobileScreenOnLoad(){window.innerWidth<768?this.mobileScreen=!0:this.mobileScreen=!1},getMobileScreenOnResize(){window.addEventListener("resize",(()=>{window.innerWidth<768?this.mobileScreen=!0:this.mobileScreen=!1}))}},mounted(){this.getMobileScreenOnLoad()},created(){this.getMobileScreenOnResize()}},f=t(89);const b=(0,f.Z)(v,[["render",m]]);var E=b,M=t.p+"img/logo.95b0bdfc.svg";const H={class:"nav-menu"},w=(0,a._)("img",{src:M,alt:"logo",class:"logo"},null,-1),B=(0,a._)("div",{class:"overlay"},null,-1),k={class:"btn-bg"},y=(0,a.uE)('<ul class="nav-menu__list"><li class="nav-menu__item"><a href="#" class="menu-link">Home</a></li><li class="nav-menu__item"><a href="#" class="menu-link">New</a></li><li class="nav-menu__item"><a href="#" class="menu-link">Popular</a></li><li class="nav-menu__item"><a href="#" class="menu-link">Trending</a></li><li class="nav-menu__item"><a href="#" class="menu-link">Categories</a></li></ul>',1);function C(e,n,t,i,r,A){return(0,a.wg)(),(0,a.iD)("div",H,[w,B,(0,a._)("div",k,[(0,a._)("div",{onClick:n[0]||(n[0]=(...e)=>A.btnToggleMenu&&A.btnToggleMenu(...e)),class:"nav-menu__btn"})]),y])}var Y={name:"HeaderNav",data(){return{}},methods:{btnToggleMenu(e){let n=e.target;n.classList.toggle("active"),n.parentElement.nextElementSibling.classList.toggle("active"),n.parentElement.previousElementSibling.classList.toggle("active")}}};const I=(0,f.Z)(Y,[["render",C]]);var R=I;const Q={class:"main-new"},D=(0,a.uE)('<h2 class="new-title">New</h2><div class="main-new__box"><ul class="main-new__list"><li class="main-new__item"><h3>Hydrogen VS Electric cars</h3><p>Will hydrogen-fueles cars ever catch up to EVs</p></li><li class="main-new__item"><h3>The Downsides of AI Artistry</h3><p>What are the possible adverse effects of on-demand AI image generation</p></li><li class="main-new__item"><h3>Is VC Funding Drying Up?</h3><p>Provate funding by VC firms is down 50% YOY. We take a look at what that means.</p></li></ul></div>',2),z=[D];function j(e,n,t,i,r,A){return(0,a.wg)(),(0,a.iD)("div",Q,z)}var G={name:"MainNew"};const U=(0,f.Z)(G,[["render",j]]);var X=U,x=t.p+"img/image-retro-pcs.08e0b2cb.jpg",S=t.p+"img/image-top-laptops.f1fd0dc3.jpg",P="data:image/jpeg;base64,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";const W={class:"main-popular"},F=(0,a.uE)('<ul class="main-popular__list"><li class="main-popular__item"><div class="card"><img src="'+x+'" alt="reviving retro pcs" class="card-img"><div class="card-body"><span class="number">01</span><h5>Reviving Retro PCs</h5><p>What happends when old PCs are given modern upgrades?</p></div></div></li><li class="main-popular__item"><div class="card"><img src="'+S+'" alt="top ten laptops of 2022" class="card-img"><div class="card-body"><span class="number">02</span><h5>Top 10 Laptops of 2020</h5><p>Our best picks of various needs and budgets.</p></div></div></li><li class="main-popular__item"><div class="card"><img src="'+P+'" alt="the growth of gaming" class="card-img"><div class="card-body"><span class="number">03</span><h5>The Growth of Gaming</h5><p>How the pandemic has sparked fresh opportunities.</p></div></div></li></ul>',1),K=[F];function N(e,n,t,i,r,A){return(0,a.wg)(),(0,a.iD)("div",W,K)}var O={name:"MainPopular"};const T=(0,f.Z)(O,[["render",N]]);var V=T;const L={class:"attribution"},Z=(0,a._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor",-1),q=(0,a._)("a",{href:"#"},"Frane Spralja",-1);function J(e,n,t,i,r,A){return(0,a.wg)(),(0,a.iD)("div",L,[(0,a.Uk)(" Challenge by "),Z,(0,a.Uk)(". Coded by "),q,(0,a.Uk)(". ")])}var _={name:"Attribution"};const $=(0,f.Z)(_,[["render",J]]);var ee=$,ne={name:"App",components:{HeaderNav:R,MainHero:E,MainNew:X,MainPopular:V,Attribution:ee}};const te=(0,f.Z)(ne,[["render",s]]);var ie=te;(0,i.ri)(ie).mount("#app")}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var r=n[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,i,a,r){if(!i){var A=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,o=0;o<i.length;o++)(!1&r||A>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[o])}))?i.splice(o--,1):(s=!1,r<A&&(A=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,a,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var a,r,A=i[0],s=i[1],o=i[2],l=0;if(A.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(o)var c=o(t)}for(n&&n(i);l<A.length;l++)r=A[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},i=self["webpackChunknews_homepage_main"]=self["webpackChunknews_homepage_main"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(3073)}));i=t.O(i)})();
//# sourceMappingURL=app.0fa0fd40.js.map