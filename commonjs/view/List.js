var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jQuery');

var template = require('./List.underscore.tpl');
var App = require('../App');

var ListView = Backbone.View.extend({
    template: template,

    events: {
        'click a': 'onClick'
    },

    onClick: function(ev) {
        ev.preventDefault();
        var id = $(ev.currentTarget).data('id');
        App.router.navigate('/person/'+id, true);
    },

    render: function() {
        this.$el.html(this.template({ people: this.collection.toJSON() }));
        return this;
    },

    initialize: function()
    {
        this.listenTo(this.collection, 'add', this.onAdd);
    },

    onAdd: function() {
        this.render();
    }
});

module.exports = ListView;
