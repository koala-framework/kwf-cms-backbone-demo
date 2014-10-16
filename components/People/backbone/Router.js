People.backbone.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'person/:id': 'person'
    },
    home: function() {
        if (!this.peopleCollection.fetched) {
            this.peopleCollection.fetched = true;
            this.peopleCollection.fetch();
        }
        var view = new People.backbone.View.List({
            collection: this.peopleCollection
        });
        this.$el.html(view.render().el);
    },
    person: function(id) {
        var deferRender = false;
        var person = this.peopleCollection.findWhere({id: parseInt(id)});
        if (!person) {
            //we directly opened detail, collection is not yet fetched
            person = new People.backbone.Model.Person({id: id});
            deferRender = true;
            person.fetch({
                success: (function() {
                    view.render();
                    this.$el.html(view.el);
                }).bind(this)
            });
        }
        var view = new People.backbone.View.Detail({
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
        this.peopleCollection = new People.backbone.Collection.People();
    }
});
