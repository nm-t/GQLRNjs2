export interface Movie {
  id: string;
  title: string;
  genres: string[];
  imdbId: string;
  language: string;
  overview: string;
  popularity: number;
  posterPath: string;
  posterUrl: string;
  releaseDate: string;
  revenue: number;
  runtime: number;
  tagline: string;
  voteAverage: number;
  keywords: {
    id: number;
    name: string;
  }[];
}
