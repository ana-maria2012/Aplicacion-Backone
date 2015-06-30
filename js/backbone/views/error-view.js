var app = app || {};

$(function () {
	'use strict';

	app.ErrorView = Backbone.View.extend({
		initialize: function(meta) {
		    switch(meta.error_type) {
		    	//define in error > type > message
		        case 'OAuthAccessTokenException':
		          error = "Express does not have permission to access your Instagram account. <a href='/'>Authenticate</a>"
		          Express.storage.destroyAccessToken();
		          break;
		        default:
		          error = "An unknown error occurred"
		    }

    		$('#main').html("<p>" + error + "</p>");
  		}

	});

});