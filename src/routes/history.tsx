import { createBrowserHistory } from "history";

declare global {
  interface Windows {
    dataLayer: any;
  }
}

const history = createBrowserHistory();

export default history;
