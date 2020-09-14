const initialState = { hero: {}, heroes: [], loading: false };

const heroReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_HERO":
      return { ...state, hero: payload, loading: true };
    case "GET_ALL_HEROES":
      return { ...state, heroes: payload, loading: false };
    default:
      return state;
  }
};

export default heroReducer;
