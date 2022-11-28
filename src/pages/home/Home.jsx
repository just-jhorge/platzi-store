import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Home = () => {
	const { categories, getProductsByCategory } = useContext(CartContext);

	return (
		<section className="w-full pt-24 px-5">
			<div className="container mx-auto ">
				<div>
					<h3 className="text-3xl font-bold uppercase mb-5">Categories</h3>
					<div className="z-10 p-10 border border-gray-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
						{categories.map((category) => (
							<Link
								key={category.id}
								className="max-w-sm bg-white border border-gray-200 cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200"
								to="/products/category"
								onClick={() => getProductsByCategory(category.id)}
							>
								<div>
									<img src={category.image} alt="" />
								</div>
								<div className="p-5">
									<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
										{category.name}
									</h5>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
