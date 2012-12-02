class Albums.Views.DiscsShow extends Backbone.View

    template: JST['discs/show']

    events:
        'click #back': 'goBack'

    initialize: ->
        # @collection.on 'reset', @render, @
        # @collection.on 'add', @appendDisc, @

    render: ->
        $(@el).html(@template())
        $(@el).find('#title').html(@model.get('title'))
        $(@el).find('#folder').attr('src', @model.get('image'))
        @

    goBack: ->
        Backbone.history.navigate("", {trigger: true, replace: true})

