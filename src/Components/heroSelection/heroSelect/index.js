import React from "react";
import { connect } from "react-redux";
import { getHero } from "../../../redux/heroActions";
import { BACKEND_API_PATH } from "../../endpoints";
import "./style.scss";

function HeroSelect({ hero, getHero }) {
  function handleHeroSelect(e) {
    e.stopPropagation();
    getHero(hero.id);
  }
  return (
    <div className="hero-select" onClick={handleHeroSelect}>
      <div className="hero-select-img-div">
        <img
          src={`${BACKEND_API_PATH}${hero.preview_image}`}
          alt="hero-preview"
        />
      </div>
      <div className="hero-select-name">
        <p>{hero.name}</p>
      </div>
    </div>
  );
}

export default connect(null, { getHero })(HeroSelect);
