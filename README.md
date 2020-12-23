# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Blog Post Cards

Contains Blog 'title', 'body' and 'author name(from second api request to users)'
Applied "REDUX THUNK" to fetch api from JSONPLACEHOLDER inside the Actions.
(while using thunk we need to dispatch aciton object, not the action function, manually).

To solve the problem of calling only 10 author/user name again and again we used one technique with two syntax:
ONE: Used 'lodash' library for \_.memoize.
TWO: Defined another compact action namely "fetchPostsAndAuthors()" which contains both the actions. And then getState() to get post's 'userId' and passed it to forEach of fetchAuthor.
