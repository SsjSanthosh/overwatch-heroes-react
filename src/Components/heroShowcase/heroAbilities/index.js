import React from "react";
import { WEAPON_FIELDS } from "../../constants";
export default function HeroAbilities({ weapons, abilities }) {
  console.log(weapons, abilities);

  const renderAbilites = abilities.map((ability) => {
    console.log("ability", ability, abilities[ability]);
    return (
      <p>
        <span className="hero-prop-label">{ability}</span>
        <span className="hero-prop-value">abilities[ability]</span>
      </p>
    );
  });
  return (
    <div>
      <div className="hero-weapon">Abilities</div>
    </div>
  );
}
