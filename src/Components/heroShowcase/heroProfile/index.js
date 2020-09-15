import { Card } from "antd";
import React from "react";
import { connect } from "react-redux";
import { PROFILE_FIELDS } from "../../constants";
import "./style.scss";
function HeroProfile({ hero }) {
  const renderProfile = Object.keys(hero).map((prop) => {
    if (PROFILE_FIELDS[prop] && hero[prop]) {
      return (
        <p className="hero-prop">
          <span className="hero-prop-profile-label">
            {PROFILE_FIELDS[prop]}
          </span>{" "}
          <span className="hero-prop-profile-value">{hero[prop]}</span>
        </p>
      );
    }
  });

  console.log(renderProfile);
  return <div className="hero-profile-card">{renderProfile}</div>;
}
const mapStateToProps = (state) => {
  return { hero: state.hero.hero };
};

export default connect(mapStateToProps)(HeroProfile);
