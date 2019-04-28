import * as React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

interface MovieCardProps {
  id: string;
  title: string;
  overview: string;
  posterUrl: string;
  tagline: string;
  voteAverage: number;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = props => (
  <Link key={props.id} to={`/movie/${props.id}`} className="list-item">
    <div className="image-container">
      <img src={props.posterUrl} />
    </div>
    <div className="content">
      <div className="title">{props.title}</div>

      <div className="detail">"{props.tagline}"</div>

      <div className="heading">Overview</div>
      <div className="detail">{props.overview.slice(0, 100)}...</div>

      <Rating rating={props.voteAverage} />
    </div>
  </Link>
);

export default MovieCard;
