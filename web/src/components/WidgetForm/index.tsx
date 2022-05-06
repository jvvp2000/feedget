import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep.";

export const feedbackTypes = {
    BUG: {
        tittle: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de uma minhoca',
        }
    },
    IDEA: {
        tittle:'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        tittle:'Outro',
        image:{
            source:thoughtImageUrl, 
            alt: 'Nuvem de pensamento'}
    },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-large w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (
                <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />                
            ): (
                <FeedbackContentStep 
                    onFeedbackRestartRequested={handleRestartFeedback}
                    feedbackType={feedbackType}/>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a href="#" className="underline underline-offset-2">Joao</a> 
            </footer>
        </div>
    )
}