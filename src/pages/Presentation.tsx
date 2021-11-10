import { Link } from "react-router-dom";
import CityForm from "../components/inputs/CityForm";
import "../styles/global.scss";

const Presentation = () => {
  return (
    <div className="App">
      <h2>Présentation</h2>
      <div className={"page"}>
        <div className={"presentation-container"}>
          <h3>
            "Allez-y moi j'en viens en utilisant un cube qui utilise le plus
            d'espace possible"
          </h3>
          <div>
            Pour résoudre ce problème j’ai fait un cube avec une face en moins.
            Après avoir créé le patron du cube j’ai demandé à la classe d’écrire
            une ville, qu’ils avaient déjà visitée et qu’ils conseillaient, sur
            les faces interne du cube. J’ai moi aussi écris plusieurs ville mais
            cette fois sur les faces extérieur du cube, j’ai écrit les villes
            que j’aimerais bien visiter. L’intérieur du cube est donc remplit du
            « Moi » des personnes de la salle. L’extérieur, lui, est remplit de
            mon « Moi ». Il y a aussi une différence temporelle entre
            l’intérieur et l’extérieur, car les villes de l’intérieur du cube
            sont des villes déjà visitées alors que les villes de l’extérieur du
            cube sont des villes que je n’ai pas encore visitées, elles font
            donc partit d’un future possible.
          </div>
        </div>
        <div className={"nav-container"}>
          <CityForm />
          <Link to={"/art_display"}>Voir le cube</Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
