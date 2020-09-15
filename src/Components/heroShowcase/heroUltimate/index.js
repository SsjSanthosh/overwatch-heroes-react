import React from "react";
import { ULTIMATE_FIELDS } from "../../constants";
import "./style.scss";
export default function HeroUltimate({ ultimate }) {
  const renderUltimate = Object.keys(ultimate).map((prop) => {
    if (prop === "image") {
      return (
        <div className="hero-ultimate-img">
          <img src={ultimate[prop]} alt={ultimate.name} />
        </div>
      );
    }
    if (ULTIMATE_FIELDS[prop] && ultimate[prop]) {
      return (
        <p className="hero-prop">
          <span className="hero-prop-ultimate-label">
            {ULTIMATE_FIELDS[prop]}
          </span>
          <span className="hero-prop-ultimate-value">{ultimate[prop]}</span>
        </p>
      );
    }
  });
  return <div className="hero-ultimate">{renderUltimate}</div>;
}
