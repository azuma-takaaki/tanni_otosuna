Rails.application.routes.draw do
  get 'sessions/new'
  root to: 'game#top'
  get 'play', to: 'game#play'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
