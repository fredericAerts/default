var defaultApp = defaultApp || {};

defaultApp.app = (function($, window, undefined) {

    var init, initOnload, appScroll, debounce;


    // On Dom ready
    init = function() {
        defaultApp.nav.init();
    };


    // On All loaded
    initOnload = function() {
        appScroll();
    };

    // On Scroll
    appScroll = function() {
        var _onScroll;

        _onScroll = debounce(function() {
            console.log('scrolling');
        }, 50);

        $(window).scroll(function(){
            _onScroll();
        });
    };

    debounce = function(func, wait, immediate){
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    };

    return {
        init: init,
        initOnload: initOnload
    };

}(jQuery, window));


// Dom ready
$(function() {
    defaultApp.app.init();
});

// All loaded
$(window).load(function() {
    defaultApp.app.initOnload();
});