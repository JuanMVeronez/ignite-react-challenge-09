import { memo } from 'react';

import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  movie: MovieProps;
}

function MovieCardComponent({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
      />

      <div>
        <div className="movie-info">
          <span>{movie.Title}</span>
          <div className="meta">
            <div>
              <Star /> {movie.Rating}
            </div>

            <div>
              <Clock /> {movie.Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MovieCard = memo(MovieCardComponent, 
  ({movie: currentMovie}, {movie: nextMovie}) => Object.is(currentMovie, nextMovie)
);