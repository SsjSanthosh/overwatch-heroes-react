import { Carousel } from "antd";
import React from "react";
const renderHeroObjects = (data, fields, type) => {
  console.log(data, "called");
  return (
    <div className={`hero-${type}`}>
      {Object.keys(data).map((prop) => {
        if (prop === "image") {
          console.log("image");
          return (
            <div className={`hero-${type}-img`}>
              <img src={data[prop]} alt={data.name} />
            </div>
          );
        }
        if (fields[prop] && data[prop]) {
          console.log(prop);
          return (
            <>
              <p className="hero-prop">
                <span className={`hero-prop-${type}-label`}>
                  {fields[prop]}
                </span>
                <span className={`hero-prop-${type}-value`}>{data[prop]}</span>
              </p>
            </>
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
