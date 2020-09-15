import axios from "axios";
import { GET_HEROES_API_PATH } from "../Components/endpoints";
export const getHero = (id) => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/heroes/list/" + id + "/");
    dispatch({ type: "GET_HERO", payload: res.data });
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
    dispatch({ type: "GET_ALL_HEROES", payload: res.data });
  } catch (err) {
    dispatch({
      type: "HERO_ERRORS",
      payload: { msg: err, status: err.response },
    });
  }
};
