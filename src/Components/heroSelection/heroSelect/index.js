import React from "react";
import { connect } from "react-redux";
import { getHero } from "../../../redux/heroActions";
import { BACKEND_API_PATH } from "../../endpoints";
import "./style.scss";

function HeroSelect({ hero, getHero, selectedHero }) {
  function handleHeroSelect(e) {
    e.stopPropagation();
    if (selectedHero && hero.id !== selectedHero.id) {
      getHero(hero.id);
    }
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

const mapStateToProps = (state) => {
  return { selectedHero: state.hero.hero };
};

export default connect(mapStateToProps, { getHero })(HeroSelect);
