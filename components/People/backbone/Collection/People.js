People.backbone.Collection.People = Backbone.Collection.extend({
    url: '/api/people',
    model: People.backbone.Model.Person,
    parse: function(response) {
        return response.data;
    }
});
