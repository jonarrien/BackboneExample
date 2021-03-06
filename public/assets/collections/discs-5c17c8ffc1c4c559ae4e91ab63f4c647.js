(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Albums.Collections.Discs = (function(_super) {

    __extends(Discs, _super);

    function Discs() {
      return Discs.__super__.constructor.apply(this, arguments);
    }

    Discs.prototype.url = '/api/discs';

    Discs.prototype.model = Albums.Models.Disc;

    return Discs;

  })(Backbone.Collection);

}).call(this);
