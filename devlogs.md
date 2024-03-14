# 13-03-2024
- Want to make my first chrome extension
- Learnt about Manifest V3
- Ready to build extension
- Created JS script to consume public APIs - "Find Any IP Address Or Domain Location World Wide", "Open Weather", "Jokes By API-Ninjas"
- Basic Algo : 
    - GET IP of user from "Find Any IP Address Or Domain Location World Wide"
    - From IP get City, Longitude and Latitude,
    - Pass City to "Open Weather" to GET weather
    - GET a joke from "Jokes By API-Ninjas"
- React, Node and Node modules don't work :"0
- Learnt about webpack
- Webpack can't process dotenv package and .env files?
- Used "dotenv-webpack"
- Can't get "dotenv-webpack" to work. Followed as is the documentation.
- Multiple ways tried. None working :"0


# 14-03-2024
- Apparently dotenv package and .env files don't work with webpack :'0
- Tried exploring many solutions, none seem to work
- Came up with a way of my own to tackle the issue. 
- Created an imitation of env file. Added all keys to separate JS file and added that file to .gitignore
- Webpack build now successfully works.
- Loaded unpacked extension to chrome. Works!