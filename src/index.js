import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './container/App';
import "./container/app.css";

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));