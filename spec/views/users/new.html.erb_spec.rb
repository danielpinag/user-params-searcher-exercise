require 'rails_helper'

RSpec.describe "users/new", type: :view do
  before(:each) do
    assign(:user, User.new(
      :email => "MyString",
      :name => "MyString",
      :last_name => "MyString",
      :is_active => false
    ))
  end

  it "renders new user form" do
    render

    assert_select "form[action=?][method=?]", users_path, "post" do

      assert_select "input[name=?]", "user[email]"

      assert_select "input[name=?]", "user[name]"

      assert_select "input[name=?]", "user[last_name]"

      assert_select "input[name=?]", "user[is_active]"
    end
  end
end
