import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
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
function HeroShowcase({ hero, loading }) {
  const { TabPane } = Tabs;
  const [activeTab, setActiveTab] = useState("1");
  useEffect(() => {
    setActiveTab("1");
  }, [hero]);
  return (
    <div className="hero-showcase-container">
      <If condition={!Object.keys(hero).length && !loading}>
        <Then>
          <div className="empty-showcase-div">
            <p className="empty-showcase-text">
              Select a hero to see their stats and profile!
            </p>
            <EmptyShowcase />
          </div>
        </Then>
        <Else>
          <div>
            <div className="hero-detail-div">
              <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key)}>
                <TabPane tab="Profile" key="1">
                  <If condition={loading}>
                    <EmptyShowcase />
                    <Else>
                      {getRenderedHeroObjects(hero, PROFILE_FIELDS, "profile")}
                    </Else>
                  </If>
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
  return {
    hero: state.hero.hero,
    loading: state.hero.fetching,
  };
};
export default connect(mapStateToProps)(HeroShowcase);
