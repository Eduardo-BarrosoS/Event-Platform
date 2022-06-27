import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateSubscriberMutation } from "../../graphql/genereted"

export function SingUpForm() {

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function handleSubscriber(event: FormEvent) {
        event?.preventDefault()

        await createSubscriber({
            variables: { name, email, password }})

        navigate('/event')
    }

    return (
        <>
            <strong className="text-2xl mb-6 block">Inscreva-se Gratuitamente</strong>
            <form 
                onSubmit={handleSubscriber}
                className="flex flex-col gap-2 w-full "
                action="">
                    <input 
                        type="text" 
                        placeholder="Seu nome completo"
                        className="bg-gray-900 rounded px-5 h-12 "
                        onChange={event => setName(event.target.value)}
                        />
                    <input 
                        type="email"
                        className="bg-gray-900 rounded px-5 h-12 "
                        placeholder="Digite seu e-mail"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        type="password"
                        className="bg-gray-900 rounded px-5 h-12 "
                        placeholder="Digite seu e-mail"
                        onChange={event => setPassword(event.target.value)}
                    />

                    <button 
                        disabled={loading}
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-no-drop"
                        type="submit">
                        Ganhar minha vaga
                    </button>

            </form>
        </>
    )
}