# Course Management System
The front-end for course management system.

### How to start
**Note** that this seed project requires  **node >=v6.9.0 and npm >=3**.

In order to start the project use:
```bash
$ Open command window and  
$ cd cms.webapp
# On command window, install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# To run this application open your browser and type in http://localhost:4200

# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```
### Ubuntu Users
# Use apt-get to install the build-essential package
$ sudo apt-get install build-essential checkinstall

# Employ a similar process to get libssl-dev:
$ sudo apt-get install libssl-dev

# install nvm ( Node version Manager)
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

# You will be asked to close and reopen the terminal. To verify that nvm has been successfully installed after you reopen the terminal, use:
$ command -v nvm
# That command will output nvm if the installation worked.

# To download, compile and install the latest version of Node:nvm install 5.0
$ nvm install 8.9.1

# Set 8.9.1 as your default
$ nvm use 8.9.1

# When you do "npm start" if you get following error
# Cannot find module "@ngtools/webpack" then use the solution below
# https://github.com/uber/deck.gl/issues/723

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
