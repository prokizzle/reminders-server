# Reminders Server

A RESTful server to bridge javascript and Apple Reminders

## Idea

I built this to be able to add my food diary from MyFitnessPal to Apple Reminders via a javascript bookmarklet. Right now, it just accepts POST requests, with just the name and the name of your list. In the future, I hope to open it up as a full API to Reminders.

## Installation

    git clone https://github.com/prokizzle/reminders-server
    cd reminders-server
    bundle install
    rake install

The above commands will install `pow` and `powder` if necessary, and setup a pow server called `reminders.dev`/

## Usage

Make a POST request to http://reminders-server.dev, with paramaters:

+ name: string - title of the reminder
+ list: string - name of your list in Reminders

Nothing is returned in the callback. The first time you run it, you'll probably be asked for permission for node and/or terminal to access Reminders.
