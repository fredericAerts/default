((app) => {
  // eslint-disable-next-line no-param-reassign
  app.module = (() => {
    function init() {
      console.log('module init');
    }

    return {
      init,
    };
  })();
})(window.app = window.app || {});
