import { useInput } from "../../hooks/useInput";

const CityForm = () => {
  const { value: city, bind: bindCity, reset: resetCity } = useInput("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("has submit", city);
    resetCity();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ville que vous voudriez visiter:</label>
      <input type="text" {...bindCity} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CityForm;
