class Albums.Routers.Discs extends Backbone.Router

    routes:
        '': 'index'
        'discs/:id': 'show'

    initialize: ->
        @collection = new Albums.Collections.Discs()
        @collection.fetch()

    index: ->
        view = new Albums.Views.DiscsIndex(collection: @collection)
        $('#container').html view.render().el

    show: (id) ->
        console.log 'Disc ' + id
