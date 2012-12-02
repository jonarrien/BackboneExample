class Albums.Routers.Discs extends Backbone.Router

    routes:
        '': 'index'
        'discs/:id': 'show'

    initialize: ->
        @collection = new Albums.Collections.Discs()
        @collection.fetch()

    index: ->
        console.log 'disc_router::index'
        view = new Albums.Views.DiscsIndex(collection: @collection)
        $('#disc-container').html view.render().el

    show: (id) ->
        disc = @collection.get(id);
        view = new Albums.Views.DiscsShow(model: disc)
        $('#disc-container').html view.render().el
