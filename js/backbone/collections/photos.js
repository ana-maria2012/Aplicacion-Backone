/*global Backbone */
var app = app || {};

$(function () {
	'use strict';

	app.Photos = Backbone.Collection.extend({

		//call model
		model: app.Photo,

		parse: function(response) {

			//(HTTP) response status codes -code(200) indicate that the client's request was successfully received, understood, and accepted
			if (response.meta.code == 200) {
      			return response.data;
    		} else {
      			new app.ErrorView(response.meta);
   			}

		}

	});

});