import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Product from "./pages/product/Product";
import Checkout from "./pages/checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CategoryProducts from "./pages/categoryProducts/CategoryProducts";

const App = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/checout" element={<Checkout />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/products/category" element={<CategoryProducts />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
