var Backbone = require('backbone');
var $ = require('jQuery');

var PersonModel = require('../model/Person');

var PeopleCollection = Backbone.Collection.extend({
    url: '/api/people',
    model: PersonModel,
    parse: function(response) {
        return response.data;
    }
});

module.exports = PeopleCollection;
