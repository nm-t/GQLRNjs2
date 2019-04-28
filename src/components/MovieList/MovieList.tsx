import * as React from "react";
import sampleMovies from "../../data/sampleMovies";
import MovieCard from "../UIComponents/MovieCard";

// TODO:
// 1. use { Query } component provided by "react-apollo"
// 2. write query for movieList, defined in query.ts
// 3. pass GraphQL query into Query component as the field of query
// 4. Query will inject three props: data, loading, error
// 5. Handle loading/error situations

const MovieList = () => (
  <div className="movie-list">
    {sampleMovies.map(movie => (
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
);

export default MovieList;
