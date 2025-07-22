import '../../App.css'
import Book from '../img/ebook2.png'

export default function AboutCurse() {
    return (
        <section className='flex justify-center h-screen w-screen items-center gap-2.5 bg-[#f3f3f3]'>
            <div className='flex flex-row-reverse items-center justify-between'>
                <img src={Book} alt='Book' className='w-2xl' />
                <div className=' flex flex-col w-2xl gap-8'>
                    <h1 className='text-5xl'>Sobre o curso Pixel Power</h1>
                    <div>
                        <p className='text-2xl w-2xl border text-wrap text-justify'>
                            Pixel Power é para quem deseja dominar a <span className='text-amber-700'> arte do pixel </span>
                            com profundidade — seja para jogos, animações ou
                            projetos autorais com identidade visual marcante. Ao
                            longo das aulas, você aprenderá a criar imagens coesas,
                            expressivas e técnicas, indo além da estética retrô com
                            liberdade criativa.

                            Com uma abordagem prática e moderna, o curso
                            explora os fundamentos da luz, sombra e forma, além
                            da criação de personagens, cenários e animações
                            aplicadas a diferentes mídias. Tudo pensado para
                            expandir seu repertório e estilo pessoal.

                            Ao final, você terá uma base sólida, pronta para aplicar
                            em projetos profissionais, autorais ou comerciais —
                            transformando ideias em obras únicas, pixel a pixel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}