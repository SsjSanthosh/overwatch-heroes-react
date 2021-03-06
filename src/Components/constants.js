import Tank from "../img/Tank.png";
import Damage from "../img/Damage.png";
import Support from "../img/Support.png";
import Overwatch from "../img/Overwatch.png";
export const PROFILE_FIELDS = {
  name: "Name",
  real_name: "Real name",
  age: "Age",
  health: "Health",
  shield: "Shield",
  armour: "Armour",
  role: "Role",
  affiliation: "Affiliation",
};

export const WEAPON_FIELDS = {
  name: "Name",
  aim_type: "Weapon Type",
  damage: "Damage",
  movement_speed: "Movement Speed",
  rate_of_fire: "Rate of Fire",
  ammo: "Ammo",
  headshot: "Headshot multiplier",
  spread: "Weapon spread",
  falloff_range: "Falloff Range",
};

export const HERO_ROLES = [
  { name: "ALL", icon: Overwatch, queryParams: "" },
  { name: "TANK", icon: Tank, queryParams: "?role=Tank" },
  { name: "SUPPORT", icon: Support, queryParams: "?role=Support" },
  { name: "DAMAGE", icon: Damage, queryParams: "?role=Damage" },
];

export const ULTIMATE_FIELDS = {
  name: "Name",
  aim_type: "Ultimate type",
  cost: "Ultimate cost",
  casting_time: "Cast time",
  movement_speed: "Movement speed",
  duration: "Duration",
  damage: "Damage",
  healing: "Healing",
  description: "Description",
};

export const ABILITY_FIELDS = {
  name: "Name",
  cooldown: "Cooldown",
  damage: "Damage",
  description: "Description",
  type: "Ability type",
  healing: "Healing",
  casting_time: "Cast time",
  movement_speed: "Movement speed",
  area_of_effect: "Area of effect",
  duration: "Duration",
  health: "Health",
};

export const ACTIONS = {
  FETCHING_HERO: "FETCHING_HERO",
  FETCHING_HEROES_PREVIEW: "FETCHING_HEROES_PREVIEW",
  SET_HERO: "SET_HERO",
  SET_HEROES_PREVIEW: "SET_HEROES_PREVIEW",
  ERROR: "ERROR",
};
