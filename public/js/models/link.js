var app = app || {};


app.Link = Backbone.Model.extend({

    urlRoot: '/api/links',
    defaults: {
        url: '',
        description: ''
    },
    idAttribute: '_id'
});