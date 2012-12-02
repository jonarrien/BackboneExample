(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Albums.Views.DiscsShow = (function(_super) {

    __extends(DiscsShow, _super);

    function DiscsShow() {
      return DiscsShow.__super__.constructor.apply(this, arguments);
    }

    DiscsShow.prototype.template = JST['discs/show'];

    DiscsShow.prototype.events = {
      'click #back': 'goBack'
    };

    DiscsShow.prototype.initialize = function() {};

    DiscsShow.prototype.render = function() {
      $(this.el).html(this.template());
      $(this.el).find('#title').html(this.model.get('title'));
      $(this.el).find('#folder').attr('src', this.model.get('image'));
      return this;
    };

    DiscsShow.prototype.goBack = function() {
      console.log('go back..');
      return Backbone.history.navigate("", {
        trigger: true,
        replace: true
      });
    };

    return DiscsShow;

  })(Backbone.View);

}).call(this);
