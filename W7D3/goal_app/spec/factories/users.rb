FactoryBot.define do
  factory :user do
    username { Faker::Movies::Hobbit.character }
    password { "password" }
  end
  
end
