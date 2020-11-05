require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    describe "get#new" do
        it "renders the new user template" do
            get :new
            expect(response).to render_template(:new)
        end
        
    end

    describe "post#create" do 
        let(:valid_params){ { user: {username: 'alien',password: "password"}}}
        let(:invalid_params){ { user: {username: 'alien'}}}
        let (:user){User.find_by(username:"alien")}

        context 'with valid params' do 
            before :each do 
                post :create, params: valid_params
            end
            it "logs in the user" do
                expect(session[:session_token]).to eq(user.session_token)
            end

            it 'redirects to users show page' do
                expect(response).to redirect_to(users_url(user))
            end
        end

        context 'with invalid params' do 
            it "renders the new user template" do
                post :create, params: invalid_params
                expect(response).to render_template(:new)
            end            
        end
    end
end