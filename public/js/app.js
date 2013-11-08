var app = app || {};

$(function() {
    /*var links = [{
        url: 'www.google.com',
        description: 'cipiace'
    }];
    */
    new app.LinksView();

    var api = require('../../routes/links').linksAPI;

    Backbone.sync = function(method, model, options) {
        switch (method) {
            case 'create':
                api.create(model, options);
                break;

            case 'update':
                api.update(model, options);
                break;

            case 'delete':
                api.destroy(model, options);
                break;

            case 'read':
                // The model value is a collection in this case
                api.list(model, options);
                break;

            default:
                // Something probably went wrong
                console.error('Unknown method:', method);
                break;
        }
    };

});