Rails.application.routes.draw do
  root to: 'game#top'
  get '/results/:id', to: 'results#show'
  post '/results/create', to: 'results#create'
  get '/sessions/new', to: 'sessions#new'
  get '/play', to: 'game#play'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get '/ranking/show', to: 'ranking#show'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
