import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import SearchPage from "./pages/SearchPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

reportWebVitals();
