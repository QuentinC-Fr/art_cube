import { push, ref, set } from "firebase/database";
import { database } from "../initFirebase";

export const writeNewCity = (city: ICity) => {
  const citiesListRef = ref(database, "cities");
  const newCityRef = push(citiesListRef);
  return set(newCityRef, { cityName: city.cityName, mine: city.mine });
};
