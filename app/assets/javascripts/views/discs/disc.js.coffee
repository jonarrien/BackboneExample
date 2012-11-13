class Albums.Views.Disc extends Backbone.View

    template: JST['discs/disc']
    tagName: 'li'
    className: 'ui-cell'

    events:
        'click': 'showDisc'

    initialize: ->
        @model.on 'change', @render, @

    showDisc: ->
        Backbone.history.navigate("discs/#{@model.get('id')}", true)

    render: ->
        $(@el).html(@template(disc: @model))
        @

