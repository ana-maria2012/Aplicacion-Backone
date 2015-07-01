/*global Backbone */
var app = app || {};

$(function () {
	'use strict';

	// Our basic **Express** model photo.

	app.Photo = Backbone.Model.extend({

		//invoke photo
		initialize: function() {
    		console.log('Photo initialized');

            //Function that on every model changing 
            this.on('change', function(){
                console.log('el modelo a cambiado');
            });
  		},

  		defaults: {
            title: 'Comentarios',
			likes: ''
		},

	});

});