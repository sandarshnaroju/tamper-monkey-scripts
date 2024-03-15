// ==UserScript==
// @name         FileUpload Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.file-upload.org/*

// @include      https://docs.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=file-upload.com
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    const iframeElements = document.getElementsByTagName("iframe");


    const requiredIframObject= Object.values(iframeElements).find((iframObj)=>{
        return iframObj.attributes[0].nodeValue.includes('.pdf');
    });


    const srcLink = requiredIframObject.attributes[0].nodeValue;


    const googleLink = srcLink.slice(srcLink.indexOf("https://f"),srcLink.indexOf(".pdf")+4);
    console.log("File link", googleLink);
    GM_openInTab(googleLink);

    // Your code here...
})();
