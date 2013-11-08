var app = app || {};

app.LinksView = Backbone.View.extend({
    el: $('#links'),

    initialize: function() {
        this.collection = new app.Links();
        // Fetching already present links
        this.collection.fetch();
        this.render();
        this.listenTo(this.collection, 'add', this.renderLink);
    },

    events: {
        'click #add': 'addLink'
    },

    addLink: function(e) {
        e.preventDefault();
        var formData = {};
        $('.form-horizontal div').children('input').each(function(i, el) {
            if ($(el).val() != '') {
                formData[el.id] = $(el).val();
            }
        });

        $('.form-horizontal div').children('textarea').each(function(i, el) {
            if ($(el).val() != '') {
                formData[el.id] = $(el).val();
            }
        });


        var Link = new app.Link(formData);
        //alert(JSON.stringify(Link));
        this.collection.add(Link);
        // Saving the collection 
        this.collection.each(function(model) {
            model.save();
        });
    },
    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function(item) {
            this.renderLink(item);
        }, this);
    },
    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderLink: function(item) {
        var linkView = new app.LinkView({
            model: item
        });
        this.$el.append(linkView.render().el);
    }

});