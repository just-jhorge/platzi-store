import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Card = ({ imgSrc, title, description, price, id, getProduct }) => {
	return (
		<Link
			to={`/product/${id}`}
			className="w-full h-96 flex flex-col items-start justify-center bg-white border border-gray-300 cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200"
			onClick={getProduct}
		>
			<div className="mb-5">
				<img src={imgSrc} alt="product image" />
			</div>
			<div className="px-5 pb-5 h-full flex flex-col items-start justify-between">
				<h5 className="font-bold tracking-tight text-gray-900 mb-3">{title}</h5>
				<p className="mb-7 text-sm">{`${description.slice(0, 50)}...`}</p>
				<div className="w-full">
					<span className="text-xl font-bold text-gray-900">GHC{price}</span>
				</div>
			</div>
		</Link>
	);
};

export default Card;
