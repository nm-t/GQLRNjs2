import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { client } from "./utils/createApolloClient";
import MovieList from "./components/MovieList/MovieList";
import Movie from "./components/Movie/Movie";
import { setUserId } from "./utils/userIdHelper";
import "./App.scss";

const App = () => {
  React.useEffect(() => {
    setUserId();
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={Movie} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
