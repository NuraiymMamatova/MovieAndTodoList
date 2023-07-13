import React from "react";
import Button from "./button/Button";
import "./button/Button.css";

const MovieItem = ({
  title,
  id,
  img,
  rating,
  onDeleteMovie,
  updateMovie,
  openModal,
  changeButtonTitle,
  movieSetState,
}) => {
  const onUpdateMovie = () => {
    // чакырылганда бул ошол кинону алып ичиндени маанилерди алып башка состояниелерди озгортот
    const { setTitle, setImageUrl, setRating } = movieSetState; // бизге келген объектти деструктуризация кылып жатабыз
    /* Каждый свойствого оз озунчо состояние */
    setTitle(title);
    setImageUrl(img);
    setRating(rating);
    // кайсыл кинону озгортуу керек болсо ошону биз updateMovie ге берип жатабыз
    updateMovie({ id, title, img, rating });
    changeButtonTitle("Save"); // биздин кнопканын ичиндеги текстти озгортуу болуп жатат
    openModal(true); // и жаны значенияларды алыш учун инпуттар менен болгон модальный окнону ачып жатабыз
  };

  return (
    <div className="movie-item">
      <div className="img-box">
        <img src={img} alt={title} />
      </div>
      <div className="info-box">
        <p className="title">{title}</p>
        <div className="rating-and-button-box">
          <p className="rating">{`${rating}/5 stars`}</p>
          <Button
            color="#c22a1f"
            title="DELETE"
            className="delete-button"
            onClick={() => onDeleteMovie(id)}
          />
          <Button
            color="#073698"
            title="EDIT"
            className="update-button"
            onClick={onUpdateMovie}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
