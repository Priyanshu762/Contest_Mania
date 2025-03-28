import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
    const { darkMode } = useContext(ThemeContext);

	return (
		<div className='mt-auto'>
			{!loading ? (
                    <BiLogOut className='w-6 h-6  cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
