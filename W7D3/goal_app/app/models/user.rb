class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    before_create :ensure_session_token
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end

