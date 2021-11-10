import { useEffect, useState } from "react";
import { writeNewCity } from "../../helpers/firebaseHelper";
import { useInput } from "../../hooks/useInput";
import "../../styles/global.scss";

function getSessionStorageOrDefault(key: string, defaultValue: any) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

const CityForm = () => {
  const { value: cityName, bind: bindCity, reset: resetCity } = useInput("");
  const [participated, setParticipated] = useState(
    getSessionStorageOrDefault("participated", false)
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    writeNewCity({ cityName: cityName, mine: false });
    sessionStorage.setItem("participated", JSON.stringify(true));
    setParticipated(true);
    resetCity();
  };

  useEffect(() => {
    sessionStorage.setItem("participated", JSON.stringify(participated));
  }, [participated]);

  if (participated) return <div>Vous avez déjà participé</div>;

  return (
    <div className={"form-container"}>
      <form onSubmit={handleSubmit}>
        <label>Ville que vous avez déjà visité et que vous conseillez :</label>
        <br />
        <input type="text" {...bindCity} />
        <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
      </form>
    </div>
  );
};

export default CityForm;
