import { useCallback, useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<Genre[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
      console.log(genres)
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data.map(movie => 
        ({...movie, Rating: movie.Ratings[0].Value})
      ));
    });

    api.get<Genre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        buttonClickCallback={handleClickButton}
      />

      <Content
        selectedGenre={selectedGenre}
        movies={movies}
      />
    </div>
  )
}