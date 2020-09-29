import { Carousel } from "antd";
import React from "react";
import { BACKEND_API_PATH } from "../Components/endpoints";
const renderHeroObjects = (data, fields, type) => {
  //TODO: Refactor this to be a bit cleaner, see if we can get away without this many conditionals.
  return (
    <div className={`hero-${type}`}>
      {Object.keys(data).map((prop) => {
        if (prop === "name") {
          return (
            <div className={`hero-${type}-name`}>
              <p>{data[prop]}</p>
            </div>
          );
        }
        if (prop === "wiki_link") {
          return (
            <a
              href={`https://overwatch.gamepedia.com/${data.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              Wiki Link
            </a>
          );
        }
        if (prop === "image") {
          return (
            <div className={`hero-${type}-img`}>
              <img src={`${BACKEND_API_PATH}${data[prop]}`} alt={data.name} />
            </div>
          );
        } else if (prop === "favourite_quote") {
          return <p className="hero-quote">{data[prop]}</p>;
        }
        if (fields[prop] && data[prop]) {
          return (
            <p className="hero-prop">
              <span className={`hero-prop-${type}-label`}>{fields[prop]}</span>
              <span className={`hero-prop-${type}-value`}>{data[prop]}</span>
            </p>
          );
        }
      })}
    </div>
  );
};
export const getRenderedHeroObjects = (data, fields, type) => {
  if (!data) {
    return;
  }
  if (data.length) {
    return (
      <Carousel>{data.map((d) => renderHeroObjects(d, fields, type))}</Carousel>
    );
  } else {
    return renderHeroObjects(data, fields, type);
  }
};
