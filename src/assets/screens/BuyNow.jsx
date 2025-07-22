import '../../App.css'
import Logo from '../img/PixelPowerLogo.png'


export default function BuyNow() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-[#f3f3f3]'>
            <div className='flex flex-col items-center justify-center h-full w-[90%] '>
                <section className=''>
                    <div>
                        <img src={Logo} alt='Book' className=' w-3xs' />
                    </div>
                </section>
                <article>

                </article>
            </div>
        </section>
    )
}