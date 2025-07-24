import { HugeiconsIcon } from '@hugeicons/react'
import '../../App.css'
import Logo from '../img/PixelPowerLogo.png'
import { ArrowAllDirectionIcon, ArrowDown01Icon, ArrowDown02Icon, CheckListFreeIcons } from '@hugeicons/core-free-icons'

export default function Initial() {
    return (
        <section id="bgInitial" className='flex justify-center h-screen w-screen items-center gap-2.5 relative'>
            <div className='w-screen h-screen absolute bg-gradient-to-t from-[#f3f3f3] to-transparent'></div>
            <div className='flex justify-center items-center relative w-[90%] h-screen'>
                <img src={Logo} alt='Book' className=' w-2xl' />
                <div className=' flex flex-col w-xl gap-8'>
                    <div className='flex flex-col text-start gap-2.5'>
                        <h1 className='font-extrabold text-5xl font-Inter'>DO ZERO AO AVANÇADO</h1>
                        <p className='text-3xl w-fit font-Inria'>Tenha todos os conhecimentos básicos e avançados na palma de sua mão</p>
                    </div>
                    <a href='#AboutCurse' className='hover:animate-InitialBTN hover:cursor-pointer flex items-center font-Inria justify-center w-full h-20 border-4 border-black font-bold shadow-[0_8px] shadow-black rounded-xl text-3xl bg-gradient-to-l from-Sunset-Blaze to-Golden-Ember text-white'>
                        Quero saber mais
                        <HugeiconsIcon icon={ArrowDown02Icon} size={34} />
                    </a>
                </div>
            </div>
        </section>
    )
}