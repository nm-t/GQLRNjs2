import * as React from "react";
import { match } from "react-router-dom";
import sampleMovies from "../../data/sampleMovies";
import BackToHome from "../UIComponents/BackToHome";
import MoviePage from "./MoviePage";

// TODO:
// 1. use { Query } component provided by "react-apollo"
// 2. write query for movieList, defined in query.ts
// 3. pass GraphQL query into Query component as the field of query
// 4. Query will inject three props: data, loading, error
// 5. Handle loading/error situations

interface MovieParams {
  id: string;
}

interface MovieProps {
  required: string;
  match: match<MovieParams>;
}

// tslint:disable-next-line: no-shadowed-variable - This is a issue with react router interface naming
const Movie: React.FC<MovieProps> = ({ match }) => {
  const movie = sampleMovies.find(item => match.params.id === item.id);
  return (
    <>
      <BackToHome />
      {movie && <MoviePage movie={movie} />}
    </>
  );
};

export default Movie;
