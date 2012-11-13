window.Albums =
    Models: {}
    Collections: {}
    Views: {}
    Routers: {}
    initialize: ->
        new Albums.Routers.Discs()
        Backbone.history.start(pushState: true)

$(document).ready ->
    Albums.initialize()
