import '../../App.css'
import Logo from '../img/PixelPowerLogo.png'

export default function Footer() {
    return (
        <section className='flex justify-center h-fit w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center py-6 justify-center h-full w-[90%] gap-2.5 '>
                <img src={Logo} alt='Logo Pixel Power' className=' w-32' />
                <p className='text-3xl font-Inter font-light'>© 2025 Pixel Power. Todos os direitos reservados. </p>
            </div>
        </section>
    )
}