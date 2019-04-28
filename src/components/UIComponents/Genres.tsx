import * as React from "react";
import { Movie } from "../../type/Movie";

const Genres: React.FC<{ genres: Movie["genres"] }> = ({ genres }) => (
  <div>
    <div className="heading">Genres</div>
    <div className="genres">
      {genres.map(g => (
        <span key={g}>{g}</span>
      ))}
    </div>
  </div>
);

export default Genres;
