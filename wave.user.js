// ==UserScript==
// @name         Bypass KeySystem Wave
// @namespace    https://greasyfork.org/en/users/1302141-conel
// @version      1.0
// @description   Bypass KeySystem Wave EXECUTOR windows
// @author       conel
// @match        *://*.key.getwave.gg/*
// @match        *://*.linkvertise.com/*
// @match        *://*.loot-link.com/*
// @match        *://*.lootdest.com/*
// @icon         https://stickx.top/favicon.ico
// @grant        none


// @license      MIT
// @supportURL   https://discord.gg/byMKdEURYV
// ==/UserScript==

(function() {
    'use strict';
    const currentURL = window.location.href;

    function redirectWithReplace(url) {
        window.location.replace(url);
    }

    function checkURLAndRedirect() {
        if (currentURL.includes("https://linkvertise.com/1200269/wave-key-1?o=sharing")) {
            setTimeout(() => {
                redirectWithReplace("https://key.getwave.gg/freemium-tasks?a");
            }, 5000);
        } else if (currentURL.includes("https://linkvertise.com/1200269/wave-key-2?o=sharing")) {
            setTimeout(() => {
                redirectWithReplace("https://key.getwave.gg/freemium-tasks?c");
            }, 5000);
        } else if (currentURL.includes("https://linkvertise.com/1200269/wave-key-3?o=sharing")) {
            setTimeout(() => {
                redirectWithReplace("https://key.getwave.gg/freemium-tasks?b");
            }, 5000);
        } else if (currentURL.includes("https://loot-link.com/s?a71a5892")) {
            setTimeout(() => {
                redirectWithReplace("https://key.getwave.gg/freemium-tasks?d");
            }, 10000);
        } else if (currentURL.includes("https://lootdest.com/s?da8a5a9c")) {
            setTimeout(() => {
                redirectWithReplace("https://key.getwave.gg/freemium-tasks?e");
            }, 10000);
        } else if (currentURL.includes("https://lootdest.com/s?15e1e695")) {
            setTimeout(() => {
                redirectWithReplace("https://key.getwave.gg/freemium-tasks?f");
            }, 10000);
        }
    }

    function clickbutton() {
        const buttonelement = document.querySelector('h1.cursor-pointer.text-3xl.max-w-3xl.mx-auto.text-center.font-semibold');
        if (buttonelement) {
            buttonelement.click();
        } else {
            setTimeout(clickbutton, 2000);
        }
    }

    checkURLAndRedirect();
    setTimeout(clickbutton, 3000);

})();
