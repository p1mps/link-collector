var app = app || {};

app.LinkView = Backbone.View.extend({

    tagName: 'div',
    className: 'linksContainer',
    template: _.template($('#linkTemplate').html()),

    events: {
        'click #delete': 'deleteLink'
    },
    deleteLink: function() {
        // Delete model
        this.model.destroy();
        // Delete view
        this.remove();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    // this.el is what we defined in tagName. use $el to get access
    // to jQuery html() function

});