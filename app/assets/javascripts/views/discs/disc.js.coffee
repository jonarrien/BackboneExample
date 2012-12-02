class Albums.Views.Disc extends Backbone.View

    template: JST['discs/disc']
    tagName: 'li'
    className: 'ui-cell'

    events:
        'click .btn-delete': 'deleteDisc'
        'click .btn-show': 'showDisc'
        'click .title div': 'editInPlace'
        'change .title input': 'saveChange'

    initialize: ->
        @model.on 'change', @render, @

    showDisc: ->
        Backbone.history.navigate("discs/#{@model.get('id')}", true)

    render: ->
        $(@el).html(@template(disc: @model))
        @

    deleteDisc: (event) ->
        event.preventDefault()
        $(@el).remove()
        @model.destroy()
        return

    editInPlace: (event) ->
        title = $(@el).find('.title div')
        prev = title.html().trim()
        title.remove()
        $(@el).find('.title').html(
            $('<input>').attr(
                value: prev
            )
        )

    saveChange: (event) ->
        input = @$el.find('.title input')
        tmp = input.val()
        @model.set({ title: tmp })
        @model.save()
        @$el.find('.title').html(
            '<div>' + tmp + '</div>'
        )
        return
