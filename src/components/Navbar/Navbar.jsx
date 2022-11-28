import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";

const Navbar = () => {
	const { isLoggedIn, signOut } = useContext(AuthContext);
	const { cartValue } = useContext(CartContext);

	return (
		<div className="fixed z-40 w-full h-20 bg-[#0F2F5F] shadow-md text-white flex items-center justify-center">
			<nav className="container mx-auto flex items-center justify-between">
				<div className="flex items-center justify-center gap-3">
					<svg width="40" height="40" fill="#98ca3f" viewBox="0 0 24 24">
						<path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
					</svg>
					<h3 className="text-xl font-bold">
						Platzi <span className="text-green-300">Shop</span>
					</h3>
				</div>
				<div className="flex items-center justify-center gap-5">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</div>
				<div className="flex items-center justify-center gap-5">
					{isLoggedIn ? (
						<Button text="Sign out" clickHandler={signOut} />
					) : (
						<Link to="/login">Log in</Link>
					)}
					<div>Cart {cartValue}</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
