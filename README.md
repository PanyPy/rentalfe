# FE Project
If you don't have the appetite to download the code and just want to check the site just check it now. 
[![Netlify Status](https://api.netlify.com/api/v1/badges/ed378cb2-9840-4d49-aedb-5a704eb423a1/deploy-status)](https://rental-thexplace.netlify.app/)

I you want to run it locally, you must setup [BE](https://github.com/PanyPy/projectbe) first.

Some features

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) -- TypeScript.
- This project has [Codegen](https://www.graphql-code-generator.com/) implemented (for type checking).
- We use [Apollo Client](https://www.apollographql.com/docs/react/) for easy connection to GraphQL.

Note:
- This site is just an example, DO NOT expect to include best practices.
- Tests may be missing.
- Config variables/files may be missing.
- Some code duplication may be found.
- Not all the types would be declared.
- Filters are just being applied in the front-end.
- I shouldn't had to deploy directly to master.
- Env config shouldn't be uploaded. 
- And other... :)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Note: At the moment, we rely on [the backend](https://github.com/PanyPy/projectbe) and you may want to start the project after the server.
Using `localhost:3001` as entry point.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run codegen`
Each time you have changes on GraphQL server, you may want to update your types.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
