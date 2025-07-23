import '../../App.css'
import Pop from '../components/Others/Pop/Pop.jsx'
import Logo from '../img/PixelPowerLogo.png'
import Payments from '../img/formas-pagamento-01-300x25 1.png'


export default function BuyNow() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-[#f3f3f3]'>
            <div className='flex flex-col items-center justify-center h-full w-[90%] '>
                <section className='bg-white shadow-[0_4px_3px_-2px] gap-3 rounded-3xl w-full h-full flex flex-col items-center justify-center'>
                    <img src={Logo} alt='Book' className=' w-3xs' />
                    <h1 className='text-4xl font-Inria font-bold'>Última chance de transformar sua arte — com desconto exclusivo!</h1>
                    <div className='w-full h-8 flex justify-center items-center gap-2.5'>
                        <Pop text='Acesso vitalício' />
                        <Pop text='Atualizações futuras' />
                        <Pop text='Certificado de conclusão' />
                        <Pop text='Comunidade no Discord' />
                        <Pop text='E muito mais...' />
                    </div>
                    <h1 className='text-3xl font-Inria '>Essa é a sua oportunidade de entrar no Pixel Power e dominar o pixel art de vez.</h1>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                        <p> De R$ 597 <br /> por apenas </p>
                        <h1>12x de R$ 29,64</h1>
                        <p>ou</p>
                        <p>R$ 297 à vista</p>
                        <img src={Payments} alt='Payments' />
                    </div>
                </section>
                <article>

                </article>
            </div>
        </section>
    )
}