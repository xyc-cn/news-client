require.config({
    paths: {
        jquery: 'jquery-1.8.2.min',
        jqm: 'jquery.mobile-1.4.4.min',
        jqmconfig: 'plugin/jqm.config',
        underscore: 'underscore-amd',
        backbone: 'backbone-amd',
        text: 'plugin/text',
        plugin: 'plugin',
        templates: '../templates',
        modules: '../modules',
        router:'router'
    }
});
require(['app'], function(app) {
    app.initialize();
});