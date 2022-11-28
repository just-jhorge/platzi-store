import { useContext } from "react";
import Card from "../../components/Card/Card";
import { CartContext } from "../../context/CartContext";

const CategoryProducts = () => {
	const { categoryProducts, getSingleProduct } = useContext(CartContext);

	return (
		<section className="pt-24">
			<div className="container mx-auto px-5 md:px-0">
				<h2 className="my-8 text-2xl font-bold">
					<p>
						Category:{" "}
						<span className="text-blue-500">
							{categoryProducts.length > 0
								? categoryProducts[0].category.name
								: ""}
						</span>
					</p>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7">
					{categoryProducts.map((product) => (
						<Card
							id={product.id}
							key={product.id}
							title={product.title}
							description={product.description}
							price={product.price}
							imgSrc={product.images[0]}
							getProduct={() => getSingleProduct(product.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryProducts;
