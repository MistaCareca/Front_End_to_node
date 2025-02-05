import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();  

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });

            localStorage.setItem('token', token); 
            navigate('/ListarUsuarios');
        } catch (err) {
            console.error(err);
            alert("Credenciais erradas");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-96 bg-white py-12 px-10 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-800 mt-6 mb-8">
                    Login
                </h2>
                
                <form onSubmit={handleSubmit}> 
                    <input 
                        type="email" 
                        placeholder="Email"
                        ref={emailRef}
                        className="w-72 px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        required
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Senha"
                        ref={passwordRef}
                        className="w-72 px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        required
                    />
                    
                    <button 
                        type="submit"
                        className="w-72 bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <Link 
                    to="/" 
                    className="text-gray-500 hover:text-blue-600 hover:underline mt-10 block text-center text-sm transition"
                >
                    Não possui uma conta? Crie uma!
                </Link>
            </div>
        </div>
    );
}

export default Login;
