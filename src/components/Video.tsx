import { DblClickFullscreen, DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/genereted";

interface IvideoProps {
    lessonSlug: string;
}


export function Video(props: IvideoProps) {

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    console.log(data)

    if (!data || !data.lesson) {
        return (<div className="flex-1"><h1>Carregando...</h1></div>)
    }


    return (
        <div className="flex-1">

            <div className="bg-black flex justify-center items-center">
                <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video bg-black">
                    <Player>
                        <Youtube  videoId={data?.lesson.videoId}/>
                        <DefaultUi />
                        <DblClickFullscreen />
                    </Player>
                </div>
            </div>
            <div className=" max-w-[1100px] mx-auto  p-8 ">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-gray-100 text-2xl font-bold mb-4">
                           { data?.lesson.title }
                        </h1>
                        <p className="text-gray-200 font-normal leading-relaxed">
                            Nessa aula vamos dar início ao projeto criando a estrutura 
                            base da aplicação utilizando ReactJS,
                            Vite e TailwindCSS. Vamos também realizar o setup do nosso
                            projeto no GraphCMS criando as entidades 
                            da aplicação e integrando a API GraphQL gerada pela plataforma no 
                            nosso front-end utilizando Apollo Client.
                        </p>
                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    className="rounded-full h-16 border-2 border-blue-500" 
                                    src={data?.lesson.teacher.avatarURL} 
                                    alt="Foto de perfil" />
                                <div className="leading-relaxed"> 
                                    <strong className="font-bold text-2xl block">
                                        {data?.lesson.teacher.name}
                                    </strong>
                                    <span className="text-gray-200 text-sm block">
                                        {data?.lesson.teacher.bio}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#" className=" uppercase rounded bg-green-500 font-bold text-sm flex items-center justify-center gap-1 p-4 hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            <span>
                                Comunidade do discord
                            </span>
                        </a>
                        <button className="rounded border  border-blue-500 font-bold text-sm text-blue-500 flex items-center justify-center gap-1 p-4 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            <span>
                                ACESSE O DESAFIO
                            </span>
                        </button>
                    </div>

                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-900 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={24}/> 
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                            Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className=" h-full p-6 flex items-center text-blue-500">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                    <a href="" className="bg-gray-900 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" >
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={24}/> 
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className=" h-full p-6 flex items-center text-blue-500">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                </div>
            </div>

        </div>
    );
}

