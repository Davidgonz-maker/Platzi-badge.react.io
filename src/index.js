import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNews";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badges from "./pages/Badges"

const container = document.getElementById("app");

ReactDOM.render(<Badges/>, container);
