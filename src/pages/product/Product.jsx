import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Product = () => {
	const { product } = useContext(CartContext);
	console.log(product);
	return (
		<main className="pt-24 h-screen w-full flex items-center justify-center">
			<div className="container mx-auto h-3/5 w-1/2 flex items-center justify-center shadow-md border border-gray-300">
				<div className="bg-red-500 h-full w-full">Image</div>
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
							Price: GHC{product && product.price}
						</p>
					</div>
					<div className="flex items-center justify-between w-full">
						<div className="flex items-center justify-center gap-5">
							<button className="bg-blue-500 px-4 py-1 text-white">-</button>
							<p>0</p>
							<button className="bg-blue-500 px-4 py-1 text-white">+</button>
						</div>
						<button className="bg-blue-500 px-5 py-2 text-white">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Product;
