import axios from "axios";
import { GET_HEROES_API_PATH, BACKEND_API_PATH } from "../Components/endpoints";

axios.defaults.baseURL = BACKEND_API_PATH;
export const getHero = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCHING_HERO" });
    const res = await axios.get("api/v1/heroes/list/" + id + "/");
    setTimeout(() => dispatch({ type: "SET_HERO", payload: res.data }), 100);
  } catch (err) {
    dispatch({
      type: "HERO_ERRORS",
      payload: { msg: err, status: err.response },
    });
  }
};

export const getAllHeroes = (queryParams = "") => async (dispatch) => {
  try {
    const res = await axios.get(GET_HEROES_API_PATH.concat(queryParams));
    dispatch({ type: "SET_HEROES_PREVIEW", payload: res.data });
  } catch (err) {
    dispatch({
      type: "HERO_ERRORS",
      payload: { msg: err, status: err.response },
    });
  }
};
