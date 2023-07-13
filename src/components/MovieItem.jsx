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
    const { setTitle, setImageUrl, setRating } = movieSetState;
    setTitle(title);
    setImageUrl(img);
    setRating(rating);
    updateMovie({ id, title, img, rating });
    changeButtonTitle("Save");
    openModal(true);
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

/* 
Проблема возникает из-за того, что состояние movieForUpdate в компоненте Modal не успевает обновиться при выборе нового фильма для обновления. Вместо этого, оно остается прежним, пока не будет нажата кнопка "EDIT" дважды.

Для исправления этой проблемы можно внести следующие изменения в код:

В компоненте Modal добавьте эффект useEffect, который будет следить за изменениями movieForUpdate и обновлять состояние формы при его изменении:
javascript
Copy code
useEffect(() => {
  if (buttonTitle === "Save") {
    setTitle(movieForUpdate.title);
    setImageUrl(movieForUpdate.img);
    setRating(movieForUpdate.rating);
    setStopLoop(false);
  }
}, [movieForUpdate, buttonTitle]);
В компоненте MovieItem обновите функцию onUpdateMovie следующим образом:
javascript
Copy code
const onUpdateMovie = () => {
  updateMovie({ id, title, img, rating });
  changeButtonTitle("Save");
  setActive(true); // Изменено с openModal(true) на setActive(true)
};
С этими изменениями, при выборе нового фильма для обновления, модальное окно будет корректно заполняться данными нового фильма без необходимости нажимать кнопку "EDIT" дважды.
*/
