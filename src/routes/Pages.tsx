import { Route, Switch } from "react-router";
import ArtDisplay from "../pages/ArtDisplay";
import Presentation from "../pages/Presentation";

const Pages = () => {
  return (
    <Switch>
      <Route path={["/presentation", "/"]} exact component={Presentation} />
      <Route path="/art_display" exact component={ArtDisplay} />
    </Switch>
  );
};

export default Pages;
