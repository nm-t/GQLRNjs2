import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ApolloClient from "apollo-boost"; // import default; you can name this whatever and it'll still work
import { ApolloProvider } from "react-apollo"; // import non-default class

// create a new ApolloClient, which is from "apollo-boost";
// pass {uri: "GraphQL endpoint"} as the input for ApolloClient
const client = new ApolloClient({
    uri: "https://serene-basin-84996.herokuapp.com/"
});

// use ApolloProvider as the Provider, which is from "react-apollo"
// Passing "client" to ApolloProvider
// wrapper App with ApolloProvider
const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

ReactDOM.render(<ApolloApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
