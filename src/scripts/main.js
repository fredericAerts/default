var defaultApp = defaultApp || {};

defaultApp.app = (($, window, undefined) => {

    let init, initOnload, appScroll, debounce;


    // On Dom ready
    init = () => {
        defaultApp.nav.init();
        console.log('hello','init');
    };


    // On All loaded
    initOnload = () => {
        appScroll();
    };

    // On Scroll
    appScroll = () => {
        let _onScroll;

        _onScroll = debounce(() => {
            console.log('scrolling');
        }, 50);

        $(window).scroll(() =>{
            _onScroll();
        });
    };

    debounce = (func, wait, immediate) => {
        let timeout;
        return (...args) => {
            let context = this;
            let later = () => {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            let callNow = immediate && !timeout;
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
$(() => {
    defaultApp.app.init();
});

// All loaded
$(window).load(() => {
    defaultApp.app.initOnload();
});