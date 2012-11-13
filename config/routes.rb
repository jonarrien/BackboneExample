Albums::Application.routes.draw do

    scope "api" do
        resources :discs
    end

    root :to => "main#index"
    match '*path', :to => 'main#index'

end
