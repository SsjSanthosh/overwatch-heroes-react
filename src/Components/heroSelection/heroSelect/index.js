import React from "react";
import { connect } from "react-redux";
import { getHero } from "../../../redux/heroActions";
import "./style.scss";

function HeroSelect({ hero, selectedHero, getHero }) {
  function handleHeroSelect(e) {
    e.stopPropagation();
    getHero(hero.id);
  }
  return (
    <div className="hero-select" onClick={handleHeroSelect}>
      <div className="hero-select-img-div">
        <img
          src={`${window.staticPath}${hero.preview_image}`}
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
