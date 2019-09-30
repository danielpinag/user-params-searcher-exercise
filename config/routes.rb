Rails.application.routes.draw do
  resources :users do

    collection do
      get 'search_in_params'
      get 'payments'
    end

    member do
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end