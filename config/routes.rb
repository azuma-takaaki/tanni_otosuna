Rails.application.routes.draw do
  root to: 'game#top'
  get 'play', to: 'game#play'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
