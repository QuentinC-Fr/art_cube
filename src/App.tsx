import "firebase/auth";
import "firebase/database";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router } from "react-router";
import { database } from "./initFirebase";
import history from "./routes/history";
import Pages from "./routes/Pages";
import * as actionTypes from "./store/actionTypes";
import "./styles/global.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const citiesListRef = ref(database, "cities");
    onValue(citiesListRef, (snapshot) => {
      let cities: ICity[] = [];
      snapshot.forEach((childSnapShot) => {
        cities.push(childSnapShot.val());
      });
      const action: CityAction = {
        cities: cities,
        type: actionTypes.FETCH_CITIES,
      };

      dispatch(action);
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <Pages />
    </Router>
  );
}

export default App;
