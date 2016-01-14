var Backbone = require('backbone');
var $ = require('jQuery');
Backbone.$ = $;

var App = {};
module.exports = App; //export before require(Router) to avoid circular dependencies issue

var Router = require('./Router');


App.init = function($el) {

    this.router = new Router({
        $el: $el
    });

    Backbone.history.start();
};

