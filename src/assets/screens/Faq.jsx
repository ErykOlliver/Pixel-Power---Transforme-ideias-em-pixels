import BaseFaq from "../components/Others/Base/BaseFaq";

export default function Faq() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center py-2.5 justify-center h-full w-[90%] gap-2.5 '>
                <h1 className="text-5xl font-bold font-Inter">Perguntas frequentes</h1>
                <div className="w-full h-fit flex flex-col gap-3.5 ">
                    <BaseFaq
                        question="O curso é mesmo para iniciantes?"
                        resp="Ola Mundo"
                    />
                    <BaseFaq
                        question="O curso é mesmo para iniciantes?"
                        resp="Ola Mundo"
                    />
                    <BaseFaq
                        question="O curso é mesmo para iniciantes?"
                        resp="Ola Mundo"
                    />
                </div>
            </div>
        </section>

    )
}