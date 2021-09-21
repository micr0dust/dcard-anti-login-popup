// ==UserScript==
// @name         dcard反登入視窗
// @namespace    https://github.com/wuilliam104286/dcard-anti-login-popup
// @version      0.1
// @description  dcard anti login popup
// @author       Microdust
// @match        *://*.dcard.tw/*
// @icon         https://www.google.com/s2/favicons?domain=dcard.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let pathName = window.location.pathname.split('/');

    if ((pathName.indexOf("p") + 1)) {
        let popupDetect = setInterval(() => {
            let loginPopup = getElementByXpath("/html/body/div[2]/div[2]");
            if (loginPopup && !hasClass(loginPopup, 'XaZHR')) {
                loginPopup.remove();
                document.body.style.overflow = 'unset';
                clearInterval(popupDetect);
            }
        }, 100);
    }


    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function getElementByXpath(paths) {
        return document.evaluate(paths, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
})();