import { Carousel, Collapse, Divider } from "antd";
import React from "react";
import { ABILITY_FIELDS } from "../../constants";
export default function HeroAbilities({ abilities }) {
  const { Panel } = Collapse;
  const renderAbilities = abilities.map((ability) => {
    return (
      <div className="hero-ability">
        {Object.keys(ability).map((prop) => {
          if (prop === "image") {
            return (
              <div className="hero-ability-img">
                <img src={ability[prop]} alt={ability.name} />
              </div>
            );
          }
          if (ABILITY_FIELDS[prop] && ability[prop]) {
            return (
              <>
                <p className="hero-prop">
                  <span className="hero-prop-ability-label">
                    {ABILITY_FIELDS[prop]}
                  </span>
                  <span className="hero-prop-ability-value">
                    {ability[prop]}
                  </span>
                </p>
              </>
            );
          }
        })}
      </div>
    );
  });

  return (
    <div>
      <div className="hero-weapon">
        <Carousel>{renderAbilities}</Carousel>
      </div>
    </div>
  );
}
