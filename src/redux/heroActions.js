import axios from "axios";
import {
  GET_HEROES_API_PATH,
  BACKEND_API_PATH,
  GET_HERO_API_PATH,
} from "../Components/endpoints";

import { ACTIONS } from "../Components/constants";

// Setting the backend api as default baseURL for easier querying.
axios.defaults.baseURL = BACKEND_API_PATH;

export const getHero = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCHING_HERO });
    const res = await axios.get(GET_HERO_API_PATH + id + "/");
    dispatch({ type: ACTIONS.SET_HERO, payload: res.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { msg: err, status: err.response },
    });
  }
};

export const getAllHeroes = (queryParams = "") => async (dispatch) => {
  try {
    const res = await axios.get(GET_HEROES_API_PATH.concat(queryParams));
    dispatch({ type: ACTIONS.SET_HEROES_PREVIEW, payload: res.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { msg: err, status: err.response },
    });
  }
};
