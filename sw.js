if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};a[i]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/cantodaruaemergencial/_next/static/chunks/106-fdfc1197a18630b6.js",revision:"fdfc1197a18630b6"},{url:"/cantodaruaemergencial/_next/static/chunks/29-28d209f579d28ede.js",revision:"28d209f579d28ede"},{url:"/cantodaruaemergencial/_next/static/chunks/465-01061eca72a84263.js",revision:"01061eca72a84263"},{url:"/cantodaruaemergencial/_next/static/chunks/529-b381ac36769a2111.js",revision:"b381ac36769a2111"},{url:"/cantodaruaemergencial/_next/static/chunks/650-3c7a8173fbc5f315.js",revision:"3c7a8173fbc5f315"},{url:"/cantodaruaemergencial/_next/static/chunks/682-d32255d250727751.js",revision:"d32255d250727751"},{url:"/cantodaruaemergencial/_next/static/chunks/859-b98a66ea2cbdf52e.js",revision:"b98a66ea2cbdf52e"},{url:"/cantodaruaemergencial/_next/static/chunks/874-832da9b1ac3ecb96.js",revision:"832da9b1ac3ecb96"},{url:"/cantodaruaemergencial/_next/static/chunks/937-8bfe6a618119f235.js",revision:"8bfe6a618119f235"},{url:"/cantodaruaemergencial/_next/static/chunks/970-9ff3e02c5e21a1b5.js",revision:"9ff3e02c5e21a1b5"},{url:"/cantodaruaemergencial/_next/static/chunks/framework-cda2f1305c3d9424.js",revision:"cda2f1305c3d9424"},{url:"/cantodaruaemergencial/_next/static/chunks/main-e07a432f6b23d511.js",revision:"e07a432f6b23d511"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/_app-75b2a48ede0f7a2f.js",revision:"75b2a48ede0f7a2f"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/historico-28cb03f710a90974.js",revision:"28cb03f710a90974"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/index-b10029166f02a4ab.js",revision:"b10029166f02a4ab"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/login-b5591ba234518331.js",revision:"b5591ba234518331"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/pessoas-00093e9ae3ec6c7a.js",revision:"00093e9ae3ec6c7a"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/pessoas/cadastro/%5B%5B...pessoaId%5D%5D-353db74fc411fc08.js",revision:"353db74fc411fc08"},{url:"/cantodaruaemergencial/_next/static/chunks/pages/servicos/cadastro-9e52fe1dce1d249d.js",revision:"9e52fe1dce1d249d"},{url:"/cantodaruaemergencial/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/cantodaruaemergencial/_next/static/chunks/webpack-77f9ec91e67e601a.js",revision:"77f9ec91e67e601a"},{url:"/cantodaruaemergencial/_next/static/yqKVGjwQEBH0nIpoVsYzU/_buildManifest.js",revision:"c115ef7bb48d1f6e2e058485ab14741b"},{url:"/cantodaruaemergencial/_next/static/yqKVGjwQEBH0nIpoVsYzU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/cantodaruaemergencial/icons/android-chrome-192x192.png",revision:"7b0bd67f4124b377026ad0522fa7649d"},{url:"/cantodaruaemergencial/icons/apple-touch-icon.png",revision:"9ef0cd8a7a7d640b207558e8a9b254c2"},{url:"/cantodaruaemergencial/icons/favicon.ico",revision:"4e9412411759521b4a785cc04dee8b70"},{url:"/cantodaruaemergencial/icons/icon-512x512.png",revision:"1715680c81be4002ee18c3458a98ba78"},{url:"/cantodaruaemergencial/images/flag.png",revision:"fd241e3b4dc50be8ad9b91e8e6afb718"},{url:"/cantodaruaemergencial/images/googleIcon.png",revision:"5385b0351f9a0787d773c90c701b84c4"},{url:"/cantodaruaemergencial/images/helpingHand.png",revision:"27299b111911e527eb13de68ad8ffe95"},{url:"/cantodaruaemergencial/images/logo.png",revision:"f53c40b62711d24c1a9fcd02b33c4cdd"},{url:"/cantodaruaemergencial/manifest.json",revision:"3e3ef07db19df90aa9bb84f21cef7be0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/cantodaruaemergencial",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
