import React from "react";
import Button from "./button/Button";
import "./button/Button.css";

const Header = ({ modalActive, changeButtonTitle }) => {
  const onAddMovie = () => {
    changeButtonTitle("Add");
    modalActive(true);
  };
  return (
    <header>
      <h1>Favorite Movies</h1>
      <Button
        color={"#e77d3b"}
        title="ADD MOVIE"
        className="add-button"
        onClick={onAddMovie}
      />
    </header>
  );
};

export default Header;
