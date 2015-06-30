var app = app || {};

$(function () {
	'use strict';

	app.PhotoView = Backbone.View.extend ({

		tagName: "div",
  		className: "photo",

  		initialize: function() {
    		console.log('PhotoView initialized');
  		},

  		render: function()
    		var img;
        var likes;
    		img = new Image();
    		img.src = this.model.get('images').thumbnail.url;
        likes = this.model.get('likes').count; 
    		this.$el.html(img);
        console.log(likes);

    		return this;
 		}

	});


});