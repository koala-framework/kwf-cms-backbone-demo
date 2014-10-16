People.backbone.View.Detail = Backbone.View.extend({
    template: _.template(
        '<%=firstname%> <%=lastname%>'),

    initialize: function() {
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
