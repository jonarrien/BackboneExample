class Albums.Views.DiscsIndex extends Backbone.View

    template: JST['discs/index']

    events:
        'submit #new_disc': 'createDisc'

    initialize: ->
        @collection.on 'reset', @render, @
        @collection.on 'add', @appendDisc, @

    render: ->
        $(@el).html(@template())
        @collection.each(@appendDisc)
        @

    appendDisc: (disc) =>
        view = new Albums.Views.Disc(model: disc)
        $('#discs').append(view.render().el)

    createDisc: (event) ->
        event.preventDefault()
        file = $('#new_disc_image')[0].files[0]
        @readFile(file)
        return

    readFile: (file) ->
        reader = new FileReader()
        c = @collection
        reader.onload = ( (e) ->
            data = e.target.result

            attributes =
                title: $('#new_disc_title').val()
                image: data
            c.create attributes,
                wait: true
                success: ->
                    console.log 'Oh yeah!!'
                error: (disc, response) ->
                    console.log response
        )
        reader.readAsDataURL(file)
