(function() {

  window.Albums = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
      new Albums.Routers.Discs();
      return Backbone.history.start({
        pushState: true
      });
    }
  };

  $(document).ready(function() {
    return Albums.initialize();
  });

}).call(this);
