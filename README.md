## easy-peasy-todos

A todo app built with [React Hooks](https://reactjs.org/docs/hooks-intro.html), [easy-peasy](https://github.com/ctrlplusb/easy-peasy), and [Firebase](https://firebase.google.com/).

Includes:

- Email/Password authentication with Firebase [Authentication](https://firebase.google.com/docs/auth/web/start?authuser=0) (login, signup, and password reset).
- Real-time data with Firebase [Cloud Firestore](https://firebase.google.com/docs/firestore/).
- Global state management with [easy-peasy](https://github.com/ctrlplusb/easy-peasy).

### About this App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I left my Firebase config in this project. Feel free to use it or replace it with your own in `src/firebase.config.js`.

#### [Hooks](https://reactjs.org/docs/hooks-intro.html)

[Hooks](https://reactjs.org/docs/hooks-intro.html) are a new feature proposal from the React team that lets you use state and other React features in function components. (no classes necessary)

This app uses only function components and relies on Hooks for all component state.

#### [easy-peasy](https://github.com/ctrlplusb/easy-peasy)

[easy-peasy](https://github.com/ctrlplusb/easy-peasy) is an awesome global state management library built on top of React Hooks and Redux. It provides an intuitive API with very little boilerplate. It comes with several baked-in goodies, including:

- Support for optimized, derived state (think Reselect) and async actions.
- Redux Dev Tools integration (out of the box)
- Redux middleware and root reducer enhancements support
- An awesome API!

easy-peasy gives you the power of Redux and Reselect in a single library. In my experience, it's one of the best state management solution out there. Incredible work by [Sean Matheson (ctrlplusb)](https://github.com/ctrlplusb)! If you agree, you should go give [easy-peasy](https://github.com/ctrlplusb/easy-peasy) a star.

This app uses easy-peasy to manage the users and todos, including subscriptions.

#### [Firebase](https://firebase.google.com/)

[Firebase](https://firebase.google.com/) is a mobile and web app development platform that provides a variety of powerful tools and services to help develop high-quality apps.

This app uses Firebase [Authentication](https://firebase.google.com/docs/auth/web/start?authuser=0) to authenticate users and [Cloud Firestore](https://firebase.google.com/docs/firestore/) to store the todos.

## Requirements

This demo uses the unstable `16.7.0-alpha` version of `react` and `react-dom`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
