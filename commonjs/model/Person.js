var Backbone = require('backbone');
var $ = require('jQuery');

var PersonModel = Backbone.Model.extend({
    urlRoot: '/api/people',
    parse: function(response) {
        if (response.data) {
            return response.data;
        }
        return response;
    }
});

module.exports = PersonModel;
