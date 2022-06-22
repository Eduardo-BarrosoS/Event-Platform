import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast,  } from 'date-fns'
import { ptBR } from "date-fns/locale";

interface ILessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: ILessonProps) {

    const isLessonAvailable = isPast(props.availableAt)
    const availableDatewFormated = format(props.availableAt, "EEEE' • ' d 'de' MMMM' • 'HH'h'mm", {
        locale: ptBR,
    })
    return ( 
        <a href="#" className="">
            <span className="text-gray-300">
                {availableDatewFormated}
            </span>
            <div className="rounded border border-gray-600 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {
                        isLessonAvailable ? (
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                <CheckCircle size={20}/>
                                Conteudo liberado
                            </span>
                        ) : (
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20}/>
                                Em breve
                            </span>
                        )
                    }
                    
                    <span className="text-xs text-white font-bold border border-green-300 rounded py-[0.125rem] px-2">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
     );
}

