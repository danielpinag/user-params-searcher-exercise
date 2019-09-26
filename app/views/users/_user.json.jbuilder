json.extract! user, :id, :email, :name, :last_name, :is_active, :created_at, :updated_at
json.url user_url(user, format: :json)
