
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetUserToLoginQuery } from "../../graphql/genereted"


export function LoginFrom() {
    
    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const {  loading, error, data  } = useGetUserToLoginQuery({
        variables: {
            email, 
            password,
        }

    })

    async function handleLoginSubscriber(event: FormEvent) {
        event?.preventDefault()

            console.log(error)
        // await createSubscriber({
        //     variables: {
        //         name, 
        //         email,
        //     }
        // })
        // navigate('/event')
    }

    return (
        <>
                        <strong className="text-2xl mb-6 block ">Entrar</strong>
                        <form 
                            onSubmit={handleLoginSubscriber}
                            className="flex flex-col gap-2 w-full"
                            action="">
                                <input 
                                    type="password" 
                                    placeholder="Seu nome completo"
                                    className="bg-gray-900 rounded px-5 h-14"
                                    onChange={event => setEmail(event.target.value)}
                                    />
                                <input 
                                    type="email"
                                    className="bg-gray-900 rounded px-5 h-14"
                                    placeholder="Digite seu e-mail"
                                    onChange={event => setPassword(event.target.value)}
                                />

                                <button 
                                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-no-drop"
                                    type="submit">
                                    Ganhar minha vaga
                                </button>
                        </form>

        </>
    )
}