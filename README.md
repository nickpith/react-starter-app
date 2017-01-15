# React Starter App
## Introduction
The purpose of this starter app is to provide a base project for how to integrate CommonJS, React and Flux with Rails.

## Setup
* Clone project and run the following command from inside the project directory
```
bundle install
```

* Install javascript dependencies and run the initial build of the JS assets
```
npm install
```



# Test

## Running App

There are 2 parts to running the app.

1. Start up the Rails server
```
rails s
```
2. Run gulp to monitor your JS and assets
```
gulp
```

## Releasing

1. Install NodeJS and NPM on Jenkins server

2. Run `npm install` before running `rake deploy` on build server

## Deploying

1. Include [react_app_cookbook] on run_list for node

2. Set [nodejs] attributes on node's environment file to configure the NodeJS and NPM version


[react_app_cookbook]: http://github.com/nickpith/react_app_cookbook
[nodejs]: https://github.com/redguide/nodejs
