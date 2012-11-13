class DiscsController < ApplicationController

    respond_to :json

    def index
        respond_with Disc.all
    end

    def show
        respond_with Disc.find(params[:id])
    end

    def create
        respond_with Disc.create(params[:disc])
    end

    def update
        respond_with Disc.update(params[:id], params[:disc])
    end

    def destroy
        respond_with Disc.destroy(params[:id])
    end

end
