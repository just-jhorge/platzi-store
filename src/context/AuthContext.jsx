import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
	isLoggedIn: false,
	userData: {},
	setUserData: () => {},
});

const AuthContextWrapper = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});
	const navigate = useNavigate();

	const logIn = () => {
		try {
			setIsLoggedIn(true);
			navigate("/");
			console.log("Logged in");
		} catch (error) {
			console.log(err);
		}
	};

	const signOut = () => {
		try {
			setIsLoggedIn(false);
			console.log("Signed Out");
		} catch (error) {
			console.log(error);
		}
	};

	const authData = {
		isLoggedIn,
		setIsLoggedIn,
		logIn,
		userData,
		setUserData,
		signOut,
	};

	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

export default AuthContextWrapper;
