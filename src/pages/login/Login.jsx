import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const { logIn } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = (e) => {
		e.preventDefault();
	};

	return (
		<main className="h-screen w-full overflow-y-hidden flex items-center justify-center">
			<div className="w-1/3 rounded-md shadow-lg p-10">
				<form className="mb-8" onSubmit={loginHandler}>
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
						text="Login"
						clickHandler={logIn}
					/>
				</form>
				<p>
					New customer?{" "}
					<Link to="/signup" className="underline text-blue-600">
						Sign Up
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Login;
