import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">

            <iframe
                className="w-[100%] h-[20rem]"
                src="  https://youtu.be/iZq0u3quAqo?list=RDiZq0u3quAqo">
            </iframe>
            <div className="flex flex-1 items-start justify-between mx-8 mt-8 mb-6  gap-[60px]">
                <div className="text-base">
                    <h2 className="text-gray-100  font-bold mb-4">
                        Aula 01 - Criando o projeto e realizando o setup inicial
                    </h2>
                    <p className="text-gray-300 font-normal">
                        Nessa aula vamos dar início ao projeto criando a estrutura 
                        base da aplicação utilizando ReactJS,
                         Vite e TailwindCSS. Vamos também realizar o setup do nosso
                          projeto no GraphCMS criando as entidades 
                         da aplicação e integrando a API GraphQL gerada pela plataforma no 
                         nosso front-end utilizando Apollo Client.
                    </p>
                </div>
                <div>
                    <button className="w-[14.813rem]  rounded bg-green-500 font-bold text-sm text-gray-100 flex items-center justify-center gap-1 py-4 mb-4">
                        <DiscordLogo size={24}/>
                        <span>
                            COMUNIDADE NO DISCORDE
                        </span>
                    </button>
                    <button className="w-[14.813rem] rounded border  border-blue-500 font-bold text-sm text-blue-500 flex items-center justify-center gap-1 py-4 ">
                        <Lightning size={24}/>
                        <span>
                            ACESSE O DESAFIO
                        </span>
                    </button>
                    
                </div>
            </div>

        </div>
    );
}

