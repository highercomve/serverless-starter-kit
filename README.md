serverless project starter kit
=============================

This project uses lambda services to be deployed and use flow to be created, therefore the deployment is done with:

```
serveless deploy --stage dev
serveless deploy --stage stage
serveless deploy --stage production
```

In order to run in local you can use

```
yarn start
```

## Initial project setup

In order to create every file that is ignore on git, for example the environments json. You can run:

```
yarn setup
```

All the endpoints of the project will be in handler.js

We must define every handler inside the index of the service has: 

```
// Auth handlers
const validateTokenHandler = require('./validate_token') 
const signInHandler = require('./login') 
const signup = require('./signup') 

export default const Handlers = {
    validate_token: validateToken
    login: signInHandler
    signup: sigUpHandler
}
```

Every handler function will have this estructure

```
// example of validate_token handler file
module.exports = (event, context, callback) => {
    // the response must be a json string in this format

    const response = {
        statusCode: 200,
        body: JSON.stringify(test)
    }

    callback(null, response)
    // if and error need to be log on cloudwatch the callback function takes the error has first parameter
}
```

### TODO -> This is already done
Build a shell script for deploy preparation, this mean

- run babel build insert the babel process files inside dist/src
- move handler.js to dist
- move serverless.yml to dist
- move package.json and yarn.lock to dist
- run yarn inside dist
- and run the serverless deploy script for the selected environments, most accept
    - `yarn deploy production`
    - `yarn deploy production stage`
    - `yarn deploy production stage dev`
    - `yarn deploy dev`
    - or `yarn deploy` that will deploy en every environment
