import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: MovieProps[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        {selectedGenre && <span className="category">Categoria:<span> {selectedGenre.title}</span></span>}
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie}/>
          ))}
        </div>
      </main>
    </div>
  )
}