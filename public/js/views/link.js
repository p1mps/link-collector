var app = app || {};
var asdf;
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
        Backbone.Validation.bind(this);
        if (this.model.isValid(true)) {
            this.$el.html(this.template(this.model.toJSON()));
        } else
            alert('invalid url or description!');
        return this;
    }

    // this.el is what we defined in tagName. use $el to get access
    // to jQuery html() function

});