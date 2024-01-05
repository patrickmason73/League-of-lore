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
        'https://capstone-project-ud8d.onrender.com/signup'
    elsif Rails.env.development?
        "http://localhost:4000/signup"
      else
        "http://localhost:4000/signup"
      end
    end
end
