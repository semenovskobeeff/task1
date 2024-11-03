import logo from "./logo.svg";
import { createElement } from "react";
import "./App.css";

export const App = () => {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
			createElement("p", null, "Edit ", createElement("code", null, "src/App.js"), " and save to reload 2."),
			createElement(
				"a",
				{ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" },
				"Learn React",
			),
			createElement("p", null, new Date().getFullYear()),
		),
	);
};
// createElement - императивный стиль
