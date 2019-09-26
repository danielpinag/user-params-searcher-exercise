class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :is_active, type: Mongoid::Boolean, default: true

  validates_presence_of :email, :name
  validates :email, uniqueness: true

  def full_name
    "#{name} #{last_name}"
  end

  def self.find_in_params(attributes={})
    found_users = User.any_of(
      {email: /#{attributes[:searched]}/i}, 
      {name: /#{attributes[:searched]}/i}, 
      {last_name: /#{attributes[:searched]}/i}).entries
  end
end