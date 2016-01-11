require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

def osascript(script)
  system 'osascript', *script.split(/\n/).map { |line| ['-e', line] }.flatten
end

def create_reminder(list, reminder)
  osascript <<-END
  tell application "Reminders"
  make new reminder in list "#{list}" with properties {name:"#{reminder}"}
end tell
END
end

post '/' do
	create_reminder(params[:list], params[:name])
end

get '/' do
    "<html><head><script src='https://code.jquery.com/jquery-2.2.0.min.js'></script></head><body>Usage: make a POST request to reminders.dev with parameters `name` and `list`, both strings</body></html>"
end
