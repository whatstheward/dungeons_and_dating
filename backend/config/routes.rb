Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :user_characters, only: [:index, :show, :create, :update, :destroy] do
    resources :genders, :orientations, only: [:show, :create, :update, :destroy]
  end
  resources :characters, only: [:index, :show, :create, :update, :destroy] do
    resources :genders, :orientations, only: [:create, :update, :destroy]
  end
    resources :character_dates, only: [:index]
    resources :date_events, only: [:index]
    resources :abilities, only: [:index]
    resources :characters, only: [:index, :show, :create, :update, :destroy]
    resources :user_character_genders, only: [:create, :update]
    resources :user_character_orientations, only: [:create, :update]
    resources :character_genders, only: [:create, :update]
    resources :character_orientations, only: [:create, :update]
    resources :relationships, only: [:create, :index, :update]

    get '/characters/:character_id/character_genders', to: 'genders#character_genders', controller: :genders
    get '/user_characters/:user_character_id/user_character_genders', to: 'genders#user_character_genders', controller: :genders
    get '/characters/:character_id/character_orientations', to: 'orientations#character_orientations', controller: :orientations
    get '/user_characters/:user_character_id/user_character_orientations', to: 'orientations#user_character_orientations', controller: :orientations
    get '/allgenders', to: 'genders#allgenders', controller: :genders
    get '/allorientations', to: 'orientations#allorientations', controller: :orientations
  end
