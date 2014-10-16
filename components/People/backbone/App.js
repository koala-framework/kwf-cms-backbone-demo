Kwf.namespace('People.backbone.Collection');
Kwf.namespace('People.backbone.Model');
Kwf.namespace('People.backbone.View');
People.backbone.App = {
    init: function($el) {

        People.backbone.router = new People.backbone.Router({
            $el: $el
        });

        Backbone.history.start();
    }
};
