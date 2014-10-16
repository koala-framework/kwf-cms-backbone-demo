People.backbone.Model.Person = Backbone.Model.extend({
    urlRoot: '/api/people',
    parse: function(response) {
        if (response.data) {
            return response.data;
        }
        return response;
    }
});
