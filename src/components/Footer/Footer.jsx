import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="w-full bg-gray-900 text-white mt-10 py-20">
			<div className="container mx-auto flex items-start justify-between">
				<div className="flex items-center justify-center gap-3">
					<svg width="40" height="40" fill="#98ca3f" viewBox="0 0 24 24">
						<path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
					</svg>
					<h3 className="text-xl font-bold">
						Platzi <span className="text-green-300">Shop</span>
					</h3>
				</div>
				<div className="flex items-start justify-between gap-10 text-sm">
					<div>
						<h3 className="mb-5 text-lg font-bold">Useful Links</h3>
						<div className="flex flex-col gap-2">
							<p>Home</p>
							<p>Shop</p>
							<p>About</p>
						</div>
					</div>
					<div>
						<h3 className="mb-5 text-lg font-bold">Shop</h3>
						<div className="flex flex-col gap-2">
							<p>Clothes</p>
							<p>Electronics</p>
							<p>Furniture</p>
							<p>Shoes</p>
							<p>Others</p>
						</div>
					</div>
					<div>
						<h3 className="mb-5 text-lg font-bold">Contact</h3>
						<div className="flex flex-col gap-2">
							<p>124th East Legon, Accra - Ghana</p>
							<p>0244-123-456</p>
							<p>info@platzishop.com</p>
						</div>
					</div>
				</div>
				<div className="flex gap-3">
					<AiFillFacebook className="text-2xl" />
					<AiFillTwitterSquare className="text-2xl" />
					<AiFillInstagram className="text-2xl" />
					<AiFillLinkedin className="text-2xl" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
