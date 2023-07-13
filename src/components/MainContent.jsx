import React from "react";
import MovieItem from "./MovieItem";

const MainContent = ({
  movies,
  onDeleteMovie,
  updateMovie,
  openModal,
  changeButtonTitle,
  movieState,
  movieSetState,
}) => {
  const transformedMovies = movies.map((movie) => {
    return (
      <MovieItem
        key={movie.id}
        title={movie.title}
        id={movie.id}
        img={movie.img}
        rating={movie.rating}
        onDeleteMovie={onDeleteMovie}
        updateMovie={updateMovie}
        openModal={openModal}
        changeButtonTitle={changeButtonTitle}
        movieState={movieState}
        movieSetState={movieSetState}
      />
    );
  });
  return (
    <main>
      {transformedMovies.length ? (
        transformedMovies
      ) : (
        <h1>You don't have any movies!</h1>
      )}
    </main>
  );
};

export default MainContent;
