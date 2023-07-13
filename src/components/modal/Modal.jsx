import React from "react";
import Label from "../Label";
import Button from "../button/Button";
import "../button/Button.css";
import Input from "../input/Input";
import "./Modal.css";

const Modal = ({
  active,
  setActive,
  onAddMovie,
  movieForUpdate,
  buttonTitle,
  movieState,
  movieSetState,
}) => {
  const { imageUrl, title, rating } = movieState;
  const { setImageUrl, setTitle, setRating } = movieSetState;
  const getDataFromTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const getDataFromImageUrlInput = (event) => {
    setImageUrl(event.target.value);
  };

  const getDataFromRatingInput = (event) => {
    setRating(event.target.value);
  };

  const onSubmitDataHandler = () => {
    const isDataValid = title.trim() && imageUrl.trim() && +rating;

    if (!isDataValid) {
      return alert("Заполните все поля!");
    }

    if (Math.sign(+rating) === 1 && rating <= 5) {
      const urlRegex =
        /(http[s]*:\/\/([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png|gif))|(data:image\/(?:png|jpe?g|gif);base64,([a-z0-9+/=]+))/i;

      if (!urlRegex.test(imageUrl)) {
        return alert("Введите действующую ссылку!");
      }

      let saveOrUpdate;

      let id = {};

      if (buttonTitle === "Save") {
        id = movieForUpdate.id;
        saveOrUpdate = "update";
      } else {
        id = Math.random().toString();
      }
      onAddMovie(
        {
          id,
          title,
          rating,
          img: imageUrl,
        },
        saveOrUpdate
      );

      clearAllInput();
    } else {
      return alert("Рейтинг не может быть больше 5 и меньше 0 или равен 0!");
    }
  };
  const cancelHandler = () => {
    clearAllInput();
    setActive(false);
  };

  const clearAllInput = () => {
    setTitle("");
    setImageUrl("");
    setRating("");
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        clearAllInput();
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <Label htmlFor="movieTitle">
          Movie title
          <Input
            className="movieTitle"
            value={title}
            onChange={getDataFromTitleInput}
          />
        </Label>

        <Label>
          Image URL
          <Input value={imageUrl} onChange={getDataFromImageUrlInput} />
        </Label>
        <Label>
          Your Rating
          <Input
            inputType="number"
            value={rating}
            onChange={getDataFromRatingInput}
          />
        </Label>

        <div className="buttons">
          <Button
            title="Cancel"
            className="cancel-button"
            color="#ffffff"
            onClick={cancelHandler}
          />
          <Button
            title={buttonTitle}
            className="add-button"
            color="#00329e"
            onClick={onSubmitDataHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
