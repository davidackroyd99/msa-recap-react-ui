# msa-recap-react-ui

A web UI for an Azure microservices architecture project by Michael Saunby.

## Installation

Note that the repository does not include the node_modules directory (see .gitignore) so to build from a fresh
clone first run ```npm install```. 

To run Azure functions (the API) then first run ```sudo apt-get install azure-functions-core-tools-3```

See <https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=linux%2Cnode%2Cbash> for more information.

To run js/ts functions open a new terminal -

```sh
cd api
npm install
npm start
```

To run python functions -

```python3.8 -m pip install -r requirements.txt```

```sh
cd api
func start
```

In the react web app root folder add a proxy entry to ```package.json```. See 

<https://docs.microsoft.com/en-us/azure/static-web-apps/local-development>

<https://create-react-app.dev/docs/proxying-api-requests-in-development/>

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
  },
  "proxy": "http://127.0.0.1:7071",
...
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
