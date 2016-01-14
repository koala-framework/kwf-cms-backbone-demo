var onReady = require('kwf/on-ready');
var $ = require('jQuery');
var App = require('web/commonjs/App');

onReady.onRender('.kwcClass', function(el) {
    App.init(el);
});
