import React from "react";
import { If, Else } from "react-if";
import { connect } from "react-redux";
import EmptyShowcase from "./emptyShowcase";
import "./style.scss";
function HeroShowcase({ hero }) {
  return (
    <div>
      <If condition={!Object.keys(hero).length}>
        <>
          {" "}
          <EmptyShowcase />
          <p className="empty-showcase-text">
            Select a hero to see their stats and profile!
          </p>
        </>
      </If>
      <Else>
        <div className="hero-showcase-container">
          <div className="hero-render-div">
            <img src={hero.image} alt={hero.name} />
          </div>
        </div>
      </Else>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { hero: state.hero.hero };
};
export default connect(mapStateToProps)(HeroShowcase);
