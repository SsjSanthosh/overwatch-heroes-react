import { Tabs } from "antd";
import React from "react";
import { If, Else, Then } from "react-if";
import { connect } from "react-redux";
import { getRenderedHeroObjects } from "../utils";
import {
  PROFILE_FIELDS,
  WEAPON_FIELDS,
  ABILITY_FIELDS,
  ULTIMATE_FIELDS,
} from "../constants";
import EmptyShowcase from "./emptyShowcase";
import "./style.scss";
function HeroShowcase({ hero }) {
  const { TabPane } = Tabs;
  console.log(!Object.keys(hero).length, "hero");
  return (
    <div className="hero-showcase-container">
      <If condition={!Object.keys(hero).length}>
        <Then>
          {console.log("inside if ")}
          <>
            {" "}
            <div className="empty-showcase-div">
              <p className="empty-showcase-text">
                Select a hero to see their stats and profile!
              </p>
              <EmptyShowcase />
            </div>
          </>
        </Then>
        <Else>
          <div>
            <div className="hero-detail-div">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                  {getRenderedHeroObjects(hero, PROFILE_FIELDS, "profile")}
                </TabPane>
                <TabPane tab="Weapons" key="2">
                  {getRenderedHeroObjects(hero.weapon, WEAPON_FIELDS, "weapon")}
                </TabPane>
                <TabPane tab="Abilities" key="3">
                  {getRenderedHeroObjects(
                    hero.abilities,
                    ABILITY_FIELDS,
                    "ability"
                  )}
                </TabPane>
                <TabPane tab="Ultimate" key="4">
                  {getRenderedHeroObjects(
                    hero.ultimate,
                    ULTIMATE_FIELDS,
                    "ultimate"
                  )}
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Else>
      </If>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { hero: state.hero.hero };
};
export default connect(mapStateToProps)(HeroShowcase);
