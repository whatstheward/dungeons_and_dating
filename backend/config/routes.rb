Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :characters, only: [:index, :show, :create, :update, :destroy] do
    resources :genders, :orientations, only: [:index, :create, :update, :destroy]
  end

  resources :quests, only: [:show]

end
