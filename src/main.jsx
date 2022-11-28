import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import AuthContextWrapper from "./context/AuthContext";
import CartContextWrapper from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AuthContextWrapper>
			<CartContextWrapper>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</CartContextWrapper>
		</AuthContextWrapper>
	</BrowserRouter>
);
