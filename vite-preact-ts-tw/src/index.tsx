import { render } from "preact";

import App from "./components/App";

import "./styles/tailwind.css";

render(<App />, document.getElementById("app") as HTMLElement);
