import { useEffect, useState } from "react";
import { writeNewCity } from "../../helpers/firebaseHelper";
import { useInput } from "../../hooks/useInput";

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

  if (participated) return <div>YOU'VE ALREADY PARTICIPATED</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>Ville que vous voudriez visiter:</label>
      <br />
      <input type="text" {...bindCity} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CityForm;
