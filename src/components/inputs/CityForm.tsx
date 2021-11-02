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
      <label>
        Ville que vous voudriez visiter:
        <input type="text" {...bindCity} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CityForm;
