import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast,  } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";
import  classNames  from 'classnames'


interface ILessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: ILessonProps) {

    const { slug } = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • ' d 'de' MMMM' • 'HH'h'mm", {
        locale: ptBR,
    })
    const isLessonActive = slug === props.slug
    return ( 
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className={classNames(`rounded border border-gray-600 p-4 mt-2 group-hover:border-green-500`,{
                    'bg-green-500': isLessonActive,
            })}>
                <header className="flex items-center justify-between">
                    {
                        isLessonAvailable ? (
                            <span className={classNames(`text-sm font-semibold flex items-center gap-2`,{ 
                                'text-white': isLessonActive,
                                'text-blue-500': !isLessonActive
                            })}>
                                <CheckCircle size={20}/>
                                Conteúdo liberado
                            </span>
                        ) : (
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20}/>
                                Em breve
                            </span>
                        )
                    }
                    
                    <span className={`text-xs text-white font-bold border rounded py-[0.125rem] px-2 ${isLessonActive ? 'border-white' : 'border-green-300'}`}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={classNames(`mt-5 block`, {
                    'text-white': isLessonActive,
                    'text-gray-200': !isLessonActive
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
     );
}

