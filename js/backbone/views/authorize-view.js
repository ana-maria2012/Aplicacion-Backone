var app = app || {};

$(function () {
	'use strict';

	app.AuthorizeView = Backbone.View.extend ({

		id: "authentication",
  		template: "#authentication",

		initialize: function() {
		   console.log("Initialised AuthorizeView");
		},

		render: function() {
		   this.$el.html(_.template($(this.template).html(), {
		      authorizationUrl: Express.config.getAuthorizationUrl()
		   }));
		   return this;
  		}

	});



});