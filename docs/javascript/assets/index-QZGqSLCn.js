import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-xNh1hgtF.js";import"./ng-challenges-gz8GCaKR.js";import"./navbar-_x41vbiP.js";const c=document.querySelector(".second-text"),s=["Student","Developer","Writer"];function i(n){return new Promise(t=>setTimeout(t,n))}async function a(n,t,o=200){await i(o);for(let e=0;e<t.length;e++)n.textContent+=t.charAt(e),await i(o);await i(o);for(let e=0;e<t.length;e++)n.textContent=t.substring(0,t.length-1-e),await i(o)}async function r(){for(const n of s)await a(c,n);r()}r();