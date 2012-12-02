(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Albums.Views.DiscsIndex = (function(_super) {

    __extends(DiscsIndex, _super);

    function DiscsIndex() {
      this.remove = __bind(this.remove, this);

      this.appendDisc = __bind(this.appendDisc, this);
      return DiscsIndex.__super__.constructor.apply(this, arguments);
    }

    DiscsIndex.prototype.template = JST['discs/index'];

    DiscsIndex.prototype.events = {
      'submit #new_disc': 'createDisc'
    };

    DiscsIndex.prototype.initialize = function() {
      this.collection.on('reset', this.render, this);
      return this.collection.on('add', this.appendDisc, this);
    };

    DiscsIndex.prototype.render = function() {
      $(this.el).html(this.template());
      this.collection.each(this.appendDisc);
      return this;
    };

    DiscsIndex.prototype.appendDisc = function(disc) {
      var view;
      view = new Albums.Views.Disc({
        model: disc
      });
      $(this.el).find('#discs').append(view.render().el);
    };

    DiscsIndex.prototype.remove = function(disc) {
      return $(this.el).find('.event').remove();
    };

    DiscsIndex.prototype.createDisc = function(event) {
      var file;
      console.log('createDisc');
      event.preventDefault();
      file = $('#new_disc_image')[0].files[0];
      this.readFile(file);
    };

    DiscsIndex.prototype.readFile = function(file) {
      var c, reader;
      reader = new FileReader();
      c = this.collection;
      reader.onload = (function(e) {
        var attributes, data;
        data = e.target.result;
        attributes = {
          title: $('#new_disc_title').val(),
          image: data
        };
        return c.create(attributes, {
          wait: true,
          success: function() {
            return console.log('Oh yeah!!');
          },
          error: function(disc, response) {
            return console.log(response);
          }
        });
      });
      return reader.readAsDataURL(file);
    };

    return DiscsIndex;

  })(Backbone.View);

}).call(this);
