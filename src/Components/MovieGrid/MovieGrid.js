import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import fallback from '../Assets/not-found.png';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import '@reach/dialog/styles.css';

export function MovieGrid({ movies, searchTerm }) {
  const [showDialog, setShowDialog] = useState(false);
  const [chosenMovie, setChosenMovie] = useState(null);
  return (
    <>
      <Modal setShowDialog={setShowDialog} showDialog={showDialog}>
        <MovieDetails chosenMovie={chosenMovie} />
      </Modal>
      <div className="container">
        {movies?.slice(0, 9).map(movie => (
          <img
            className="best-movies-list"
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            onClick={() => {
              setChosenMovie(movie);
              open();
            }}
            onError={fallbackImage}
          />
        ))}
      </div>
    </>
  );

  function fallbackImage(event) {
    event.target.src = fallback;
  }

  function open() {
    return setShowDialog(true);
  }
}

function Modal({ setShowDialog, showDialog, children }) {
  function close() {
    return setShowDialog(false);
  }

  return (
    <Dialog className="modal" isOpen={showDialog} onDismiss={close}>
      {children}
    </Dialog>
  );
}
