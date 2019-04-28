import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://serene-basin-84996.herokuapp.com/" // "http://localhost:4000"
});