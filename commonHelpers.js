(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();window.addEventListener("load",f);function f(){const l=document.querySelector(".header-nav-checkbox"),c=document.querySelector(".header-nav-container span"),r=document.documentElement,o=localStorage.getItem("user-theme");e(o);function e(i){i==="light"?c.style.background=" url(img/header/check-light.svg) 0 0 / 100% no-repeat":i==="dark"&&(c.style.background="url(img/header/check-dark.svg) 0 0 / 100% no-repeat")}let t;window.matchMedia&&(t=window.matchMedia("prefer-color-sheme: dark").matches?"dark":"light"),window.matchMedia("prefer-color-sheme: dark").addEventListener("change",()=>{o||changeThemeLocalStore()});function n(){o?r.classList.add(o):r.classList.add(t)}n(),l.addEventListener("change",u);function u(i){i.target.checked,d(!0);function d(h=!1){let a=r.classList.contains("light")?"light":"dark",s;a==="light"?s="dark":a==="dark"&&(s="light"),r.classList.remove(a),e(s),r.classList.add(s),h&&localStorage.setItem("user-theme",s)}}}
//# sourceMappingURL=commonHelpers.js.map
