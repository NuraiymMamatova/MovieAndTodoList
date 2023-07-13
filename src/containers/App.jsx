import { useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Modal from "../components/modal/Modal";
import "./App.css";

const arrayOfMovies = [
  {
    id: 1,
    title: "Avatar 1",
    rating: 4,
    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
  },
  {
    id: 2,
    title: "Kunfu panda",
    rating: 5,
    img: "https://s2.afisha.ru/mediastorage/0c/ec/11f9fd657c2f46b68d1d0bfaec0c.jpg",
  },
  {
    id: 3,
    title: "Naruto Shipuden",
    rating: 5,
    img: "https://staticg.sportskeeda.com/editor/2021/10/8bbb3-16349088266046-1920.jpg",
  },
  {
    id: 4,
    title: "Hobbit",
    rating: 5,
    img: "https://upload.wikimedia.org/wikipedia/ru/3/32/The_Hobbit._An_Unexpected_Journey.jpg",
  },
];

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [movies, setMovies] = useState(arrayOfMovies);
  const [buttonTitle, setButtonTitle] = useState("");
  const [movieForUpdate, setMovieForUpdate] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");

  const saveOrUpdateMovie = (newMovie, saveOrUpdate) => {
    if (saveOrUpdate !== "update") {
      setMovies((prevMovies) => [...prevMovies, newMovie]);
    } else {
      const updatedMovies = movies.map((movie) => {
        if (movie.id === newMovie.id) {
          movie.img = newMovie.img;
          movie.rating = newMovie.rating;
          movie.title = newMovie.title;
        }
        return movie;
      });
      setMovies(updatedMovies);
    }
    setModalActive(false);
  };

  const deleteMovie = (id) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    setMovies(filteredMovies);
  };

  return (
    <div className="App">
      <Header modalActive={setModalActive} changeButtonTitle={setButtonTitle} />
      <MainContent
        movies={movies}
        onDeleteMovie={deleteMovie}
        updateMovie={setMovieForUpdate}
        openModal={setModalActive}
        changeButtonTitle={setButtonTitle}
        movieState={{ title, imageUrl, rating }}
        movieSetState={{ setTitle, setImageUrl, setRating }}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onAddMovie={saveOrUpdateMovie}
        buttonTitle={buttonTitle}
        movieForUpdate={movieForUpdate}
        movieState={{ title, imageUrl, rating }}
        movieSetState={{ setTitle, setImageUrl, setRating }}
      />
    </div>
  );
}

export default App;
