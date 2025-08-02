// ==UserScript==
// @name         获取漫画图片（document.write 版）
// @namespace    http://tampermonkey.net/
// @version      2025-08-02
// @description  提取漫画章节图片并直接用 document.write 重写页面
// @author       You
// @match        https://wzdhm1.cc/chapter/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wzdhm1.cc
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const imgs = document.querySelectorAll('img.lazy');

    if (!imgs.length) {
        document.write('<p style="text-align:center;">未找到任何图片</p>');
        return;
    }

    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>漫画图片提取</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background: #000;
                }
                img {
                    max-width: 100%;
                    display: block;
                    margin: 0 auto;
                }
            </style>
        </head>
        <body>
    `;

    imgs.forEach(img => {
        const src = img.getAttribute('data-original');
        if (src) {
            html += `<img src="${src}" />\n`;
        }
    });

    html += '</body></html>';

    document.open(); // 打开 document 流
    document.write(html); // 写入新的 HTML
    document.close(); // 关闭 document 流

})();
