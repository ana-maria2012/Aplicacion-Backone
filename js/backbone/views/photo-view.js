var app = app || {};

$(function () {
    'use strict';

    app.PhotoView = Backbone.View.extend ({

        tagName: "div",
        className: "photo",

        initialize: function() {
            console.log('PhotoView initialized');
        },

        render: function() {
            var img = {};

            img = new Image();
            img.src = this.model.get('images').thumbnail.url;
            this.$el.html(img);

            return this;
        }
    });
});