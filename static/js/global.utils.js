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
        })()
    }

}(window,document);
