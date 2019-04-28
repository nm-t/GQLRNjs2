import * as React from "react";
import sampleMovies from "../../data/sampleMovies";
import MovieCard from "../UIComponents/MovieCard";

// 1. use { Query } component provided by "react-apollo"
import { Query } from "react-apollo";
// 2. write query for movieList, defined in query.ts
import { GET_MOVIES } from "./query";
// 3. pass GraphQL query into Query component as the field of query
// 4. Query will inject three props: data, loading, error
// 5. Handle loading/error situations

const MovieList = () => (
  <Query query = {GET_MOVIES}>
  {({ data: { movies }, loading, error}) => {
    if (loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>
    return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          posterUrl={movie.posterUrl}
          tagline={movie.tagline}
          voteAverage={movie.voteAverage}
        />
      ))}
    </div>
    )
  }}
  </Query>
);

export default MovieList;
