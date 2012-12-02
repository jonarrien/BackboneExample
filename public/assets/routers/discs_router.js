(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Albums.Routers.Discs = (function(_super) {

    __extends(Discs, _super);

    function Discs() {
      return Discs.__super__.constructor.apply(this, arguments);
    }

    Discs.prototype.routes = {
      '': 'index',
      'discs/:id': 'show'
    };

    Discs.prototype.initialize = function() {
      this.collection = new Albums.Collections.Discs();
      return this.collection.fetch();
    };

    Discs.prototype.index = function() {
      var view;
      view = new Albums.Views.DiscsIndex({
        collection: this.collection
      });
      return $('#disc-container').html(view.render().el);
    };

    Discs.prototype.show = function(id) {
      var disc, view;
      disc = this.collection.get(id);
      view = new Albums.Views.DiscsShow({
        model: disc
      });
      return $('#disc-container').html(view.render().el);
    };

    return Discs;

  })(Backbone.Router);

}).call(this);
