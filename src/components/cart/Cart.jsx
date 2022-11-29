import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
	const { cartItems } = useContext(CartContext);

	console.log(cartItems);

	return (
		<div className="absolute -bottom-60 p-5 right-0 bg-white text-black h-60 w-96 rounded-lg shadow-md scroll-smooth overflow-y-auto">
			{cartItems.map((item) => (
				<div key={item.id}>{item.title}</div>
			))}
		</div>
	);
};

export default Cart;
