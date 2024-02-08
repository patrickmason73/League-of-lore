class UserMailer < ApplicationMailer
default from: 'leagueofloreofficial@gmail.com'


def welcome_email(user)
    @user = user
    @url = signup_url
    mail(to: @user.email, subject: 'New Account Created!')
end

private

def signup_url
    if Rails.env.production?
        'https://capstone-project-ud8d.onrender.com/login'
    elsif Rails.env.development?
        "http://localhost:4000/login"
      else
        "http://localhost:4000/login"
      end
    end
end
