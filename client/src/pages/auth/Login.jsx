import { useState } from "react";
import Spinner from "../../components/common/spinner";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex p-4 flex-col gap-4">
          <input
            className="px-4 py-2 border-red-200 border-2 rounded-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="px-4 py-2 border-red-200 border-2 rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-blue-300 text-black px-4 py-2 rounded-2xl flex justify-center items-center"
            type="submit"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
          <span>
            Already have an account?{" "}
            <button
              className="text-orange-500"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </button>
          </span>
          <button className="bg-blue-300 text-black px-4 py-2 rounded-2xl">
            Login with Google
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
