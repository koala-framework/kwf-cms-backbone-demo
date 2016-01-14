var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jQuery');

var DetailView = Backbone.View.extend({
    template: _.template(
        '<%=firstname%> <%=lastname%>'),

    initialize: function() {
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

module.exports = DetailView;
