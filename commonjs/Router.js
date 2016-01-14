var Backbone = require('backbone');
var $ = require('jQuery');

var ListView = require('./view/List');
var DetailView = require('./view/Detail');
var PeopleCollection = require('./collection/People');
var PersonModel = require('./model/Person');

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'person/:id': 'person'
    },
    home: function() {
        if (!this.peopleCollection.fetched) {
            this.peopleCollection.fetched = true;
            this.peopleCollection.fetch();
        }
        var view = new ListView({
            collection: this.peopleCollection
        });
        this.$el.html(view.render().el);
    },
    person: function(id) {
        var deferRender = false;
        var person = this.peopleCollection.findWhere({id: parseInt(id)});
        if (!person) {
            //we directly opened detail, collection is not yet fetched
            person = new PersonModel({id: id});
            deferRender = true;
            person.fetch({
                success: (function() {
                    view.render();
                    this.$el.html(view.el);
                }).bind(this)
            });
        }
        var view = new DetailView({
            model: person
        });
        this.$el.html('loading...');
        if (!deferRender) {
            view.render();
            this.$el.html(view.el);
        }
    },

    initialize: function(options) {
        $.extend(this, options);
        this.peopleCollection = new PeopleCollection();
    }
});

module.exports = Router;
