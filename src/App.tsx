import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import Movie from "./components/Movie/Movie";
import { setUserId } from "./utils/userIdHelper";
import "./App.scss";

const App = () => {
  React.useEffect(() => {
    setUserId();
  });

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
      </div>
    </Router>
  );
};

export default App;
