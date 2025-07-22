import '../../App.css'
import Book from '../img/ebook2.png'

export default function AboutCurse() {
    return (
        <section id='AboutCurse' className='flex justify-center h-screen w-screen items-center gap-2.5 bg-[#f3f3f3]'>
            <div className='flex flex-row-reverse items-center justify-center h-full w-[90%] '>
                <img src={Book} alt='Book' className='w-md' />
                <div className=' flex flex-col w-2xl gap-3'>
                    <h1 className='text-5xl font-bold font-[Inria-Bold]'>Sobre o curso Pixel Power</h1>
                    <div>
                        <div className='flex flex-col gap-4 text-2xl w-xl text-wrap text-justify font-[Inria-Regular]'>
                            <p>
                                Pixel Power é para quem deseja dominar a <span className='font-bold text-[#F96C00]' > arte do pixel </span> com
                                <span className='font-bold text-[#F96C00]'> profundidade</span> — seja para jogos, animações ou projetos autorais
                                com <span className='font-bold text-[#F96C00]'>identidade visual</span> marcante.
                            </p>
                            <p>
                                Ao longo das aulas, você aprenderá a criar imagens coesas, expressivas e <span className='font-bold text-[#F96C00]'>técnicas</span>,
                                indo além da estética retrô com liberdade criativa. Com uma abordagem prática e moderna, o curso
                                explora os fundamentos da luz, sombra e forma, além da criação de personagens, cenários e animações aplicadas
                                a diferentes mídias.
                            </p>
                            <p>

                                Tudo pensado para expandir seu repertório <span className='font-bold text-[#F96C00]'>estilo pessoal</span>.
                                Ao final, você terá uma base sólida, pronta para aplicar em <span className='font-bold text-[#F96C00]'>projetos profissionais</span>,
                                autorais ou comerciais — transformando ideias em obras únicas, <span className='font-bold text-[#F96C00]'>pixel a pixel</span> .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}