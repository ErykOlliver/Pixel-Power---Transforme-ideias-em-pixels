import { HugeiconsIcon } from '@hugeicons/react'
import '../../App.css'
import Logo from '../img/PixelPowerLogo.png'
import { ArrowDown02Icon } from '@hugeicons/core-free-icons'

export default function Initial() {
    return (
        <section id="bgInitial" className='flex justify-center h-screen w-full items-center gap-2.5 relative'>
            <div className='w-screen h-screen absolute bg-gradient-to-t from-[#f3f3f3] to-transparent'></div>
            <div className='InitialContent xl:flex sm:justify-center sm:items-center xl:flex-row justify-center items-center relative w-[90%] h-screen sm:flex-col sm:flex'>
                <img src={Logo} alt='Logo' className=' xl:w-2xl sm:w-sm' />
                <div className='flex flex-col xl:w-xl sm:w-full gap-8'>
                    <div className=' flex flex-col xl:text-start md:text-center gap-2.5'>
                        <h1 className='sm:text-2xl font-extrabold xl:text-5xl font-Inter'>DO ZERO AO AVANÇADO</h1>
                        <p className='sm:text-xl xl:text-3xl w-fit font-Inria'>Tenha todos os conhecimentos básicos e avançados na palma de sua mão</p>
                    </div>
                    <a href='#AboutCurse' className='sm:w-full sm:h-16 hover:bg-gradient-to-l hover:from-Sunset-BlazeHover hover:to-Golden-EmberHover transition-colors hover:cursor-pointer flex items-center font-Inria justify-center xl:w-full xl:h-20 border-4 border-black font-bold shadow-[0_8px] shadow-black rounded-xl text-3xl bg-gradient-to-l from-Sunset-Blaze to-Golden-Ember text-white'>
                        Quero saber mais
                        <HugeiconsIcon icon={ArrowDown02Icon} size={34} />
                    </a>
                </div>
            </div>
        </section>
    )
}