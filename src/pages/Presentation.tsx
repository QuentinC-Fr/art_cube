import { Link } from "react-router-dom";
import Entry from "../components/Entry";
import "../styles/global.scss";

const Presentation = () => {
  return (
    <div className="App">
      <h2>Présentation</h2>
      <div className={"nav-container"}>
        <Entry />
        <Link to={"/art_display"}>SEE THE ART</Link>
      </div>
    </div>
  );
};

export default Presentation;
