import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// create a new ApolloClient, which is from "apollo-boost";
// pass {uri: "GraphQL endpoint"} as the input for ApolloClient

// use ApolloProvider as the Provider, which is from "react-apollo"
// Passing "client" to ApolloProvider
// wrapper App with ApolloProvider

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
