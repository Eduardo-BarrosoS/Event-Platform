import { Logo } from "../components/Logo";
import cedeMockupImg from '../../src/assets/code-mockup.png'
import reactIcon from '../../src/assets/reactJS-icon.png'
import { LoginFrom } from "../components/autentication/LoginForm";
import { SingUpForm } from "../components/autentication/SingUpForm";
import { useState } from "react";

export function Subscribe() {

// =======================================================
    const [login, setLogin] = useState(false)
    function handleLogin() {
        event?.preventDefault()
        setLogin(true)
    }
    function handleSingUp() {
        event?.preventDefault()
        setLogin(false)
    }
// =======================================================



    return ( 
        <>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <img src={reactIcon} alt="" className="absolute z-[-10]" />
                <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                    <div className="max-w-[640px]">
                        <Logo />
                        <h1 className="mt-8 text-[2.5rem] leading-tight ">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, 
                            do zero, <strong className="text-blue-500">com React JS</strong>
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Em apenas uma semana você vai dominar na prática uma das 
                            tecnologias mais utilizadas e com alta demanda para acessar 
                            as melhores oportunidades do mercado.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                        
                        {
                            login ? (
                            <>
                                <LoginFrom /> 
                                <p className="mt-2">Ainda não tenho uma conta: 
                                    <button id="login" onClick={handleSingUp} className="ml-2">Cadastrar</button>
                                </p>   
                            </>
                            ): (
                            <>
                                <SingUpForm />
                                <p className="mt-2">Já tenho uma conta: 
                                    <button id="login" onClick={handleLogin} className="ml-2">Entrar</button>
                                </p>  
                            </>
                            )
                        }
                        
                    </div>


                </div>
                <img src={cedeMockupImg} className="mt-5" alt="" />

            </div>
        </>
     );
}
