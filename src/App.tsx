import { Router } from "react-router";
import history from "./routes/history";
import Pages from "./routes/Pages";
import "./styles/global.scss";

function App() {
  return (
    <Router history={history}>
      <Pages />
    </Router>
  );
}

export default App;
