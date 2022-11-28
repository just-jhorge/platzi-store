import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext({
	product: null,
	setProduct: () => {},
	products: [],
	categories: [],
	setCategories: () => {},
	setProducts: () => {},
	cartValue: 0,
	setCartValue: () => {},
});

const CartContextWrapper = ({ children }) => {
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState(null);
	const [cartValue, setCartValue] = useState(0);

	useEffect(() => {
		const fetchAllProducts = async () => {
			const response = await axios.get(
				"https://api.escuelajs.co/api/v1/products"
			);
			// const data = response.data
			setProducts(response.data);
		};

		const fetchCategories = async () => {
			const response = await axios.get(
				"https://api.escuelajs.co/api/v1/categories"
			);
			setCategories(response.data);
		};

		fetchAllProducts();
		fetchCategories();
	}, []);

	const getProductsByCategory = async (id) => {
		const response = await axios.get(
			`https://api.escuelajs.co/api/v1/categories/${id}/products`
		);
		const data = response.data;
		setCategoryProducts(data.slice(0, 20));
	};

	const getSingleProduct = async (id) => {
		const response = await axios.get(
			`https://api.escuelajs.co/api/v1/products/${id}`
		);
		setProduct(response.data);
	};

	const addToCart = () => {
		console.log("item added to cart");
	};

	const removeFromCart = () => {
		console.log("item removed from cart");
	};

	const cartData = {
		addToCart,
		removeFromCart,
		cartValue,
		setCartValue,
		products,
		product,
		setProducts,
		setProduct,
		getSingleProduct,
		categories,
		setCategories,
		categoryProducts,
		setCategoryProducts,
		getProductsByCategory,
	};

	return (
		<CartContext.Provider value={cartData}>{children}</CartContext.Provider>
	);
};

export default CartContextWrapper;
