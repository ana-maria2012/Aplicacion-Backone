// Define a namespace
var app = app || {},
    Express = {},
    view;

    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };

    Express.config = {
      clientId: "2ec477bca09a484fb7af60208859b9a7",
      feedUrl: "https://api.instagram.com/v1/users/self/media/recent?access_token=",

      getAuthorizationUrl: function() {
        return _.template(this.authorizationUrl, {
          clientId: encodeURIComponent(this.clientId),
          redirectUri: encodeURIComponent(this.redirectUrl)
        });
      },

      getAuthorizationUrl: function() {
        return "https://instagram.com/oauth/authorize/?client_id=" + this.clientId + "&redirect_uri=" + this.getRedirectUrl() + "/&response_type=token"
      },

      getRedirectUrl: function() {
        return this.getRootUrl();
      },

      getRootUrl: function() {
        return window.location.origin;
      }
    }


    Express.storage = {

      getAccessToken: function() {
        return localStorage.getItem('accessToken'); // null if doesn't exist
      },

      setAccessToken: function(token) {
        localStorage.setItem('accessToken', token);
      },

      destroyAccessToken: function(token) {
        localStorage.clear();
      }
    }
