import { Tabs } from "antd";
import React from "react";
import { If, Else, Then } from "react-if";
import { connect } from "react-redux";
import EmptyBackground from "../../img/empty-image.png";
import HeroAbilities from "./heroAbilities";
import HeroProfile from "./heroProfile";
import HeroUltimate from "./heroUltimate";
import HeroWeapons from "./heroWeapons";
import "./style.scss";
function HeroShowcase({ hero }) {
  const { TabPane } = Tabs;
  return (
    <div>
      <If condition={!Object.keys(hero).length}>
        <Then>
          <>
            {" "}
            <img src={EmptyBackground} alt="overwatch" />
            <p className="empty-showcase-text">
              Select a hero to see their stats and profile!
            </p>
          </>
        </Then>
        <Else>
          <div className="hero-showcase-container">
            <div className="hero-render-div">
              <img src={hero.image} alt={hero.name} />
            </div>
            <div className="hero-detail-div">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                  <HeroProfile />
                </TabPane>
                <TabPane tab="Weapons" key="2">
                  <HeroWeapons weapons={hero.weapon} />
                </TabPane>
                <TabPane tab="Abilities" key="3">
                  <HeroAbilities abilities={hero.abilities} />
                </TabPane>
                <TabPane tab="Ultimate" key="4">
                  <HeroUltimate ultimate={hero.ultimate} />
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
