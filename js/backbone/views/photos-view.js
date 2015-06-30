var app = app || {};

$(function () {
	'use strict';

	app.PhotosView = Backbone.View.extend ({

    id: "photo_container",
    template: "#photo_container",

    initialize: function() {

      var view = this;
      //bring date models
      this.collection.fetch({
        dataType : 'jsonp',
        success: function(collection, response) {
          view.render();
        },
        error: function(collection, response) {}
      });
    },

    render: function() {

      $(this.el).append(_.template($(this.template).html(), {}));
      view = this;
      _.each(this.collection.models, function(photo) {
        var photoView = new app.PhotoView({ model: photo });
        view.$el.append(photoView.render().el);
      });
      return this;
 		}

	});


});