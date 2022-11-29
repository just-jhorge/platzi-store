import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Product = () => {
	const { product, addToCart, cartItems } = useContext(CartContext);
	const [itemQuantity, setItemQuantity] = useState(1);
	const [imgIndex, setImgIndex] = useState(0);

	console.log(cartItems);

	const incItemQuantity = () => {
		if (itemQuantity == 100) {
			return;
		} else {
			setItemQuantity(itemQuantity + 1);
		}
	};

	const decItemQuantity = () => {
		if (itemQuantity == 1) {
			return;
		} else {
			setItemQuantity(itemQuantity - 1);
		}
	};

	const nextImg = () => {
		if (imgIndex == 2) {
			setImgIndex(0);
		} else {
			setImgIndex(imgIndex + 1);
		}
	};

	const prevImg = () => {
		if (imgIndex == 0) {
			setImgIndex(2);
		} else {
			setImgIndex(imgIndex - 1);
		}
	};

	return (
		<main className="pt-24 h-screen w-full flex items-center justify-center">
			<div className="container mx-auto h-3/5 w-[60%] flex items-center justify-center shadow-md border border-gray-300">
				<div className="relative h-full w-full">
					<button
						onClick={prevImg}
						className="absolute flex items-center justify-center left-2 top-1/2 h-8 w-8 bg-white rounded-full"
					>
						<AiOutlineLeft />
					</button>
					<img
						src={product && product.images[imgIndex]}
						className="h-full w-full"
						alt=""
					/>
					<button
						onClick={nextImg}
						className="absolute flex items-center justify-center right-2 top-1/2 h-8 w-8 bg-white rounded-full"
					>
						<AiOutlineRight />
					</button>
				</div>
				<div className="h-full w-full p-14 flex flex-col items-start justify-between">
					<div>
						<h2 className="text-3xl font-bold mb-5">
							{product && product.title}
						</h2>
						<p className="mb-3 text-sm">{product && product.description}</p>
						<p className="italic mb-10">
							Category: {product && product.category.name}
						</p>
						<p className="text-2xl font-semibold">
							Price: GHC{product && product.price * itemQuantity}
						</p>
					</div>
					<div className="flex items-center justify-between w-full">
						<div className="flex items-center justify-center gap-5">
							<button
								onClick={decItemQuantity}
								className="bg-blue-500 px-4 py-1 text-white"
							>
								-
							</button>
							<p>{itemQuantity}</p>
							<button
								onClick={incItemQuantity}
								className="bg-blue-500 px-4 py-1 text-white"
							>
								+
							</button>
						</div>
						<button
							onClick={() => addToCart(product)}
							className="bg-blue-500 px-5 py-2 text-white"
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Product;
