// ==UserScript==
// @name         ScribdDocumentViewer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.scribd.com/doc*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scribd.com
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
   // console.log('Current URL', currentUrl)

    if(currentUrl.includes("https://www.scribd.com/document/")){

        const documentId = currentUrl.slice(32, 41)
        //   console.log('documentId',documentId)
        const newUrl = 'https://www.scribd.com/embeds/ '+ documentId + '/content'
        //window.open(newUrl,"_top");
        GM_openInTab(newUrl);
    }else if(currentUrl.includes("https://www.scribd.com/doc/") ){
         const documentId = currentUrl.slice(27, 36)
        //   console.log('documentId',documentId)
        const newUrl = 'https://www.scribd.com/embeds/ '+ documentId + '/content'
        //window.open(newUrl,"_top");
        GM_openInTab(newUrl);
    }
})();
