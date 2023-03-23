// ==UserScript==
// @name         Instagram Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/*
// @include      file-upload
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
    if(currentUrl.includes("/?hl=en")){
        const modifiedUrl = currentUrl.slice(0,-7);
        const userId = modifiedUrl.slice(modifiedUrl.indexOf("instagram.com/")+14,modifiedUrl.length);
        console.log("User Id", userId);
        const imginnUrl = "https://imginn.org/"+userId+"/";
        window.open(imginnUrl,"_top");
      //  GM_openInTab("https://imginn.org/"+userId+"/");
    }
})();