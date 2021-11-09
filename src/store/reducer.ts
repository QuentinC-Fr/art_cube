import * as actionTypes from "./actionTypes";

const initialState: CityState = {
  cities: [],
};

const reducer = (
  state: CityState = initialState,
  action: CityAction
): CityState => {
  switch (action.type) {
    case actionTypes.FETCH_CITIES:
      console.log("action fetch", action);
      return { ...state, cities: action.cities };
  }
  return state;
};

export default reducer;
