var onReady = require('kwf/on-ready');
var $ = require('jQuery');
onReady.onRender('.people', function(el) {
    People.backbone.App.init(el);
});
