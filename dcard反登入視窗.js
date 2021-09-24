// ==UserScript==
// @name         dcard反登入視窗
// @namespace    https://github.com/wuilliam104286/dcard-anti-login-popup
// @version      1.0
// @description  dcard anti login popup
// @author       Microdust
// @match        *://*.dcard.tw/*
// @icon         https://www.google.com/s2/favicons?domain=dcard.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let pathName = window.location.pathname.split('/');


    let loginPopup = document.querySelector('.__portal');
    let observe = new MutationObserver(function(mutations, observe) {
        let getChild = loginPopup.children;
        //console.log(getChild.length);
        for (let i = 0; i < getChild.length; i++) {
            //console.log(getChild[i]);
            if (!hasClass(getChild[i], 'XaZHR')) getChild[i].style.display = 'none';
            //if (!hasClass(getChild[i], 'XaZHR')) loginPopup.removeChild(getChild[i]);
        }
        document.body.style.overflow = 'unset';
    });
    observe.observe(loginPopup, { 'childList': true });

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
})();