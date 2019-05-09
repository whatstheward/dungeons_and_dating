Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :user_characters, only: [:index, :show, :create, :update, :destroy] do
    resources :genders, :orientations, only: [:index, :create, :update, :destroy]
  end
    resources :character_dates, only: [:index]
    resources :abilities, only: [:index]
<<<<<<< HEAD
    resources :genders, only: [:index]
    resources :npcs, only: [:index, :show, :create, :update, :destroy]
    resources :orientations, only: [:index]
=======
    resources :character_genders, only: [:create, :update]
    resources :character_orientations, only: [:create, :update]

    get '/allgenders', to: 'genders#allgenders', controller: :genders
    get '/allorientations', to: 'orientations#allorientations', controller: :orientations
>>>>>>> cdb163baab1be00ca157b9fa8f78031c9e523384
  end
