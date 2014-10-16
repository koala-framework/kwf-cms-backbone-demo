People.backbone.View.List = Backbone.View.extend({
    template: _.template(
        '<ul>'+
        '<% _.each(people, function(person) { %>'+
        '  <li><a href="#" data-id="<%=person.id%>"><%=person.firstname%> <%=person.lastname%></a></li>'+
        '<% }) %>'+
        '</ul>'),

    events: {
        'click a': 'onClick'
    },

    onClick: function(ev) {
        ev.preventDefault();
        var id = $(ev.currentTarget).data('id');
        People.backbone.router.navigate('/person/'+id, true);
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

