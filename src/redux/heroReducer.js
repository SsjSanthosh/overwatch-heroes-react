const initialState = {
  hero: {},
  heroes: [],
  errorMessage: "",
  fetching: false,
};

const heroReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "FETCHING_HERO":
      return { ...state, fetching: true };
    case "SET_HERO":
      return { ...state, hero: payload, fetching: false, errorMessage: "" };
    case "SET_HEROES_PREVIEW":
      return { ...state, heroes: payload, fetching: false, errorMessage: "" };
    case "ERROR":
      return {
        ...state,
        fetching: false,
        errorMessage:
          "Cannot get data from the backend. Please try again later.",
      };
    default:
      return state;
  }
};

export default heroReducer;
