import * as React from "react";
import Rating from "../UIComponents/Rating";
import Revenue from "../UIComponents/Revenue";
import { Movie } from "../../type/Movie";
import ImageHeader from "../UIComponents/ImageHeader";
import TextDetail from "../UIComponents/TextDetail";
import Keywords from "../UIComponents/Keywords";
import Genres from "../UIComponents/Genres";
import { getImageUrl } from "../../utils/imagePathHelper";
import RatingCollector from "../RatingCollector/RatingCollector";
interface MoviePageProps {
  movie: Movie;
}

const MoviePage: React.FunctionComponent<MoviePageProps> = ({ movie }) => {
  return (
    <article className="movie-container">
      <ImageHeader imagePath={movie.posterPath} />

      <div className="movie">
        <div className="image-container">
          <img src={getImageUrl(movie.posterPath, "main")} />
        </div>

        <div className="content">
          <div className="content-top">
            <div className="title">
              {movie.title}
              <span className="date">{movie.releaseDate}</span>
            </div>

            <Rating rating={movie.voteAverage} size="large" />
            <RatingCollector movieId={movie.id} />

            <TextDetail heading="Overview" detail={movie.overview} />

            <Genres genres={movie.genres} />
          </div>

          <div className="content-bottom">
            <TextDetail heading="Tagline" detail={`"${movie.tagline}"`} />

            <TextDetail
              heading="Movie length"
              detail={`${movie.runtime} mins`}
            />

            <Revenue revenue={movie.revenue} />

            <Keywords keywords={movie.keywords} />

            <TextDetail heading="Language" detail={movie.language} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MoviePage;
