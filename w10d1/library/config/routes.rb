Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  resources :authors do
    resources :books
  end

  # resources :authors
  # OR
  # resources :authors, only: [:show, :index]

  # resources :books
end
