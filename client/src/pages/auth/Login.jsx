const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    return (
        <>
<div className='h-screen flex justify-center items-center'>
<form 
// onSubmit={handleSubmit}
className='flex p-4 flex-col gap-4' >
<input className='px-4 py-2 border-red-200 border-2 rounded-lg' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<input className='px-4 py-2 border-red-200 border-2 rounded-lg' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
<button  className='bg-blue-300 text-black px-4 py-2 rounded-2xl' type="submit">Login</button>

<button  className='bg-blue-300 text-black px-4 py-2 rounded-2xl'>Login with Google</button>
{/* <a href="http://localhost:5000/api/auth/">Login with Google</a> */}
</form>
</div>
</>
)
}

export default Login