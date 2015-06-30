/*global Backbone */
var app = app || {};

$(function () {
	'use strict';

	// Our basic **Express** model photo.

	app.Photo = Backbone.Model.extend({

		//invoke photo
		initialize: function() {
    		console.log('Photo initialized');
  		},

  		defaults: {
			likes: '',
		}

	});

});