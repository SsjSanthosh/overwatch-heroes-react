import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { Else, If, Then } from "react-if";
import { connect } from "react-redux";
import { getHero, getAllHeroes } from "../../redux/heroActions";
import { HERO_ROLES } from "../constants";
import HeroSelect from "./heroSelect";

import "./style.scss";

function HeroSelection({ heroes, getAllHeroes, errorMessage }) {
  useEffect(() => {
    getAllHeroes();
  }, [getAllHeroes]);
  return (
    <div className="hero-selection-div">
      <p className="hero-selection-title"> Choose your hero</p>
      <div className="role-select-div">
        {HERO_ROLES.map((role) => {
          return (
            <button
              className="hero-role-btn"
              onClick={() => getAllHeroes(role.queryParams)}
            >
              <div className="hero-role-icon">
                <img src={role.icon} alt={role.name} />
              </div>
              <span className="hero-role-name">{role.name}</span>
            </button>
          );
        })}
      </div>
      <If condition={errorMessage.length}>
        <Then>
          <p className="hero-error-message">{errorMessage}</p>
        </Then>
        <Else>
          <div className="hero-selection-roster">
            {heroes.map((hero) => (
              <HeroSelect hero={hero} id={hero.id} />
            ))}
          </div>
        </Else>
      </If>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { heroes: state.hero.heroes, errorMessage: state.hero.errorMessage };
};

export default connect(mapStateToProps, { getHero, getAllHeroes })(
  HeroSelection
);
