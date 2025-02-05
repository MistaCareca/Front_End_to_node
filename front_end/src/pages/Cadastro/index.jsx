import { Link } from "react-router-dom";
import { useRef } from "react"
import api from "../../services/api";

function Cadastro() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(event){
        event.preventDefault()
        try{
            await api.post('/cadastro', {name: nameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value});
            alert("Usuário Cadastrado!");
        } catch(err) {
            alert("Erro ao Cadastrar!");
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-96 bg-white py-12 px-10 rounded-xl shadow-md border border-gray-200"> {/* Mais padding interno */}
                <h2 className="text-2xl font-bold py-12px text-center text-gray-800 mt-6 mb-8"> 
                    Criar Conta
                </h2>
                
                <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}> 
                    <input 
                        type="text" 
                        placeholder="Nome completo"
                        ref={nameRef}
                        className="w-72 px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    />
                    
                    <input 
                        type="email" 
                        placeholder="Email"
                        ref={emailRef}
                        className="w-72 px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Senha"
                        ref={passwordRef}
                        className="w-72 px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    />
                    
                    <button 
                        type="submit"
                        className="w-72 bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Criar Conta
                    </button>
                </form>

                <Link 
                    to="/login" 
                    className="text-gray-500 hover:text-blue-600 hover:underline mt-10 block text-center text-sm transition" 
                > 
                    Já possui uma conta? Faça login
                </Link>
            </div>
        </div>
    );
}

export default Cadastro;
