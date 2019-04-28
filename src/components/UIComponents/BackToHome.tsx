import * as React from "react";
import { Link } from "react-router-dom";
import MovieIcon from "@material-ui/icons/MovieOutlined";

const BackToHome = () => (
  <div className="home">
    <Link to="/">
      <MovieIcon /> Back to all Movies
    </Link>
  </div>
);

export default BackToHome;
