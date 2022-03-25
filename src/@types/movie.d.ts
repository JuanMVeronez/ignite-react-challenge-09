interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Rating: string;
  Runtime: string;
}