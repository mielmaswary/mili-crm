import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  const heartColor = isFavorite ? "red" : "gray";

  return (
    <button onClick={handleClick}>
      <FontAwesomeIcon icon={faHeart} style={{ fill: heartColor }} />
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};
export default FavoriteButton;
