/*global Backbone */
var app = app || {};


$(function () {
	'use strict';

	var Router = Backbone.Router.extend({
		
		routes: {
	      "":             "index",
	      "your_photos":  "your_photos",
	      "your_friends": "your_friends",
	      "popular":      "popular",
	      "?code:token": "access_token"
    	},

		initialize: function() {
      		this.route(/^access_token=(.*?)$/, "access_token", this.access_token);
    	},

    	index: function(hash) {
      		if (Express.storage.getAccessToken()) {
        		this.navigate('your_photos', { trigger: true });
      		} else {

        		var view = new app.AuthorizeView();

        		$("#main").html(view.render().el);
      		}
    	},

    	access_token: function(token) {
      		Express.storage.setAccessToken(token);
      		this.navigate('photos', { trigger: true });
    	},

    	popular: function() {
      		var photos = new app.Photos();

      		photos.url = 'https://api.instagram.com/v1/media/popular?access_token=' + Express.storage.getAccessToken();

      		var view = new app.PhotosView({ collection: photos });

      		$("#main").html(view.el);
    	},

    	your_photos: function() {

        	var photos = new app.Photos();
     
      		photos.url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + Express.storage.getAccessToken();

      		var view = new app.PhotosView({ collection: photos });

      		$("#main").html(view.el);
   		},

    	your_friends: function() {

      		var photos = new app.Photos();

      		photos.url = 'https://api.instagram.com/v1/users/self/feed?access_token=' + Express.storage.getAccessToken();
		
      		var view = new app.PhotosView({ collection: photos });

      		$("#main").html(view.el);
    	}

	});

	app.router = new Router();

	if (!Backbone.history.start()) {
    	$('body').html('404!');
  	}

});