json.extract! costumer, :id, :name, :email, :message, :created_at, :updated_at
json.url costumer_url(costumer, format: :json)
