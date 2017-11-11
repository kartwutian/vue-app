
;(function () {
    'use strict';

    if (!Date.now)
        Date.now = function () { return new Date().getTime(); };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
        || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); },
                nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());



/**
 * 在window 对象上注册一个$util对象
 * 里面封装一些全局的公用方法
 *
 */
!function (win,doc) {

    // 如果window上已经有$utils方法，抛出错误并返回
    if( win.$utils ){
        console.log('window对象上已经注册了$utils,请检查代码')
        alert('window对象上已经注册了$utils,请检查代码')
        return
    }

    win.$utils = {
        log: function () {
            Array.prototype.forEach.call(arguments,function (key) {
                console.log(key)
            })
        },
        isIOS: function () {
            return !!(window.navigator && window.navigator.userAgent || '').match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        isColor: function (value) {
            var colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
            var rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
            var rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

            return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
        },
        pageScroll: (function () {
            var fn = function (e) {
                e.preventDefault();
                e.stopPropagation();
            };
            var islock = false;

            return {
                lock: function (el) {
                    if (islock) return;
                    islock = true;
                    (el || document).addEventListener('touchmove', fn);
                },
                unlock: function (el) {
                    islock = false;
                    (el || document).removeEventListener('touchmove', fn);
                }
            };
        })(),
        scrollTo: function(el,distination,duration){
            var el = el || window.document
            var distination = distination || 0
            var duration = duration || 300

            var start = el.scrollTop

            var times =Math.round( duration/16.666666666666667 )
            var step = Math.round(( distination - start ) / times)

            function tick() {
                times --
                if(times>0){
                    el.scrollTop +=  step
                    requestAnimationFrame(tick)
                    return
                }
                el.scrollTop = distination
            }
            tick()
        },
        getScrollview: function (el) {
            let currentNode = el;
            while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
                let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                if (overflowY === 'scroll' || overflowY === 'auto') {
                    return currentNode;
                }
                currentNode = currentNode.parentNode;
            }
            return window;
        }

    }

}(window,document);
