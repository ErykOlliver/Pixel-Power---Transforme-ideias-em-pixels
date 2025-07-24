import '../../App.css'
import Pop from '../components/Others/Base/Pop.jsx'
import Logo from '../img/PixelPowerLogo.png'
import Payments from '../img/formas-pagamento-01-300x25 1.png'
import SevenDays from '../img/sevenDays.png'



export default function BuyNow() {
    return (
        <section className='flex justify-center h-fit w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center justify-center h-full w-[90%] gap-3.5 '>
                <section className='bg-white shadow-[0_4px_3px_-3.8px] gap-3 rounded-3xl w-full h-full flex flex-col items-center justify-center'>
                    <img src={Logo} alt='Book' className=' w-3xs' />
                    <h1 className='text-4xl font-Inria font-bold '>Última chance de transformar sua arte — com desconto exclusivo!</h1>
                    <div className='w-full h-8 flex justify-center items-center gap-2.5'>
                        <Pop text='Acesso vitalício' />
                        <Pop text='Atualizações futuras' />
                        <Pop text='Certificado de conclusão' />
                        <Pop text='Comunidade no Discord' />
                        <Pop text='E muito mais...' />
                    </div>
                    <h1 className='text-3xl font-Inria  '>Essa é a sua oportunidade de entrar no Pixel Power e dominar o pixel art de vez.</h1>
                    <div className=' w-full h-full flex justify-center items-center flex-col gap-6'>
                        <p className='text-5xl font-Inter text-center font-medium'> <span className='line-through'>De R$ 597 </span> <br /> por apenas</p>
                        <h1 className='text-6xl font-Inter font-bold text-Sunset-Blaze' >12x de R$ 29,64</h1>
                        <p className='text-5xl font-Inter font-medium'>ou</p>
                        <p className='text-6xl font-bold font-Inter text-Sunset-Blaze '>R$ 297 à vista</p>
                        <button className='shadow-[0_8px] shadow-black h-24 w-xl bg-gradient-to-r from-Life-Green to-Green-Azuled text-5xl font-bold font-Inter text-white rounded-2xl border-4 border-black'>
                            Quero minha vaga
                        </button>
                        <img src={Payments} alt='Payments' className='' />
                    </div>
                </section>
                <article className='w-full h-52 shadow-[0_4px_3px_-3px] bg-gradient-to-r from-Etern-Blue to-Cysney pt-6 pb-6 pl-5 pr-5 rounded-3xl'>
                    <div className='items-start flex w-full h-full gap-2.5 justify-center'>
                        <img src={SevenDays} alt='SevenDays' className='w-fit h-full' />
                        <article className=' flex flex-col justify-center border-s-Green-Azuled h-full gap-2.5 '>
                            <h1 className='text-4xl w-full font-Inter font-extrabold text-white border-b pb-1'>Garantia incondicional de 7 dias!</h1>
                            <p className='text-2xl w-full font-Inria text-white h-full'>
                                Sua satisfação é a nossa prioridade. Por isso, ao se inscrever no curso, você tem <span className='text-Sunset-Blaze font-bold'> 7 dias para testar sem risco algum</span >.
                                Se por qualquer motivo você achar que o curso não é pra você, é só enviar uma mensagem dentro desse prazo e <span className='text-Sunset-Blaze font-bold'> devolveremos 100% do seu dinheiro </span>, sem perguntas, sem complicações.
                                <span className='text-Sunset-Blaze font-bold'> Você entra, experimenta, e decide com total segurança</span>.
                            </p>
                        </article>
                    </div>
                </article>
            </div>
        </section>
    )
}