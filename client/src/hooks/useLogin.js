import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();


	const login = async (email, password) => {
		const success = handleInputErrors(email, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: { 
					"Content-Type": "application/json",
				},
				credentials: "include", // Important for CORS with cookies
				body: JSON.stringify({ email, password }),
			});
			// const data = await res.json();
			console.log("Login response:",res);
			const data = await res.json();
			console.log("Login data :",data);
            console.log("Login error data : ",data.error);
			if (!res.ok) {
				throw new Error(data.error);
				toast.error(data.message)
				//toaster
			}
			if(res.ok){

				localStorage.setItem("user", JSON.stringify(data));
				setAuthUser(data);	
				toast.success("Login successful");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(email, password) {
	if (!email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
