(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Albums.Views.Disc = (function(_super) {

    __extends(Disc, _super);

    function Disc() {
      return Disc.__super__.constructor.apply(this, arguments);
    }

    Disc.prototype.template = JST['discs/disc'];

    Disc.prototype.tagName = 'li';

    Disc.prototype.className = 'ui-cell';

    Disc.prototype.events = {
      'click .btn-delete': 'deleteDisc',
      'click .btn-show': 'showDisc',
      'click .title div': 'editInPlace',
      'change .title input': 'saveChange'
    };

    Disc.prototype.initialize = function() {
      return this.model.on('change', this.render, this);
    };

    Disc.prototype.showDisc = function() {
      return Backbone.history.navigate("discs/" + (this.model.get('id')), true);
    };

    Disc.prototype.render = function() {
      $(this.el).html(this.template({
        disc: this.model
      }));
      return this;
    };

    Disc.prototype.deleteDisc = function(event) {
      event.preventDefault();
      $(this.el).remove();
      this.model.destroy();
    };

    Disc.prototype.editInPlace = function(event) {
      var prev, title;
      title = $(this.el).find('.title div');
      prev = title.html().trim();
      title.remove();
      return $(this.el).find('.title').html($('<input>').attr({
        value: prev
      }));
    };

    Disc.prototype.saveChange = function(event) {
      var input, tmp;
      input = this.$el.find('.title input');
      tmp = input.val();
      this.model.set({
        title: tmp
      });
      this.model.save();
      this.$el.find('.title').html('<div>' + tmp + '</div>');
    };

    return Disc;

  })(Backbone.View);

}).call(this);
