const initialState = { hero: {}, heroes: [], errorMessage: "" };

const heroReducer = (state = initialState, action) => {
  const { payload } = action;
  console.log(action.type);
  switch (action.type) {
    case "GET_HERO":
      return { ...state, hero: payload, loading: true, errorMessage: "" };
    case "GET_ALL_HEROES":
      return { ...state, heroes: payload, loading: false, errorMessage: "" };
    case "HERO_ERRORS":
      console.log("htting");
      return {
        ...state,
        errorMessage:
          "Cannot get data from the backend. Please try again later.",
      };
    default:
      return state;
  }
};

export default heroReducer;
