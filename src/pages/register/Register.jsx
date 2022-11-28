import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerHandler = (e) => {
		e.preventDefault();
		console.log(firstName, lastName, email, password);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
	};

	return (
		<main className="h-screen w-full overflow-y-hidden flex items-center justify-center">
			<div className="w-[30%] rounded-md shadow-lg p-10">
				<form className="mb-8">
					<div className="flex flex-col items-start justify-center gap-3 mb-8">
						<label htmlFor="firstName" className="font-semibold">
							First Name:
						</label>
						<input
							className="w-full border border-gray-300 rounded-md px-5 py-3"
							placeholder="First Name"
							type="text"
							id="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 mb-8">
						<label htmlFor="lastName" className="font-semibold">
							Last Name:
						</label>
						<input
							className="w-full border border-gray-300 rounded-md px-5 py-3"
							placeholder="Last Name"
							type="text"
							id="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 mb-8">
						<label htmlFor="email" className="font-semibold">
							Email:
						</label>
						<input
							className="w-full border border-gray-300 rounded-md px-5 py-3"
							placeholder="Email"
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 mb-10">
						<label htmlFor="password" className="font-semibold">
							Password:
						</label>
						<input
							className="w-full border border-gray-300 rounded-md px-5 py-3"
							placeholder="Password"
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button
						classes="w-full bg-blue-500 text-white py-3 rounded-md"
						text="Sign Up"
						clickHandler={registerHandler}
					/>
				</form>
				<p>
					Returning customer?{" "}
					<Link to="/login" className="underline text-blue-600">
						Login
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Register;
