// ==UserScript==
// @name         获取.comicpage
// @namespace    http://tampermonkey.net/
// @version      2025-08-02
// @description  try to take over the world!
// @author       You
// @match        https://wzdhm1.cc/chapter/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wzdhm1.cc
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

        const comicPage = document.querySelector('.comicpage');
        if (!comicPage) {
            console.log('没有找到 .comicpage 元素');
            return;
        }

        const imgs = comicPage.querySelectorAll('img.lazy');
        if (imgs.length === 0) {
            console.log('没有找到 .comicpage 内的 img.lazy');
            return;
        }

        let newHtml = '';
        imgs.forEach((img) => {
            const src = img.getAttribute('data-original');
            if (src) {
                // 创建新的 <img> 元素 HTML
                newHtml += `<img src="${src}" style="max-width: 100%; display: block; margin:0 auto;" />\n`;
            }
        });
        // 替换整个网页内容
        document.body.innerHTML = newHtml || '<p>未找到任何图片</p>';
        alert('替换成功')
})();
