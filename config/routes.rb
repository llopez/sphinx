Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'

  get '/service-worker.js' => 'pages#service_worker'

  get '*path' => 'pages#index', via: :all
end
