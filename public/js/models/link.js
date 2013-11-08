var app = app || {};


app.Link = Backbone.Model.extend({

    urlRoot: '/api/links',
    defaults: {
        url: '',
        description: ''
    },
    idAttribute: '_id',

    validation: {

        url: {
            required: true,
            pattern: 'url',
            msg: 'Please enter a url'
        },

        description: {
            required: true
        }

    }

});