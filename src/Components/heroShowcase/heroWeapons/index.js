import React from "react";
import { WEAPON_FIELDS } from "../../constants";
import "./style.scss";
export default function HeroWeapons({ weapons }) {
  const renderWeapon = weapons.map((weapon) => {
    return Object.keys(weapon).map((prop) => {
      if (prop === "image") {
        return (
          <div className="hero-weapon-img">
            <img src={weapon.image} alt={weapon.name} />
          </div>
        );
      }
      if (WEAPON_FIELDS[prop] && weapon[prop]) {
        return (
          <p className="hero-prop">
            <span className="hero-prop-weapon-label">
              {WEAPON_FIELDS[prop]}
            </span>
            <span className="hero-prop-weapon-value">{weapon[prop]}</span>
          </p>
        );
      }
    });
  });
  return <div>{renderWeapon}</div>;
}
