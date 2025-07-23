import { Grid02Icon, GridIcon } from '@hugeicons/core-free-icons'
import BaseModule from '../components/Others/Pop/BaseModules.jsx'
import { HugeiconsIcon } from '@hugeicons/react'
import { Power_Colors } from '../components/Design/Pallet.js'

export default function Modules() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center justify-center h-full w-[90%] gap-3.5 '>
                <h1>o que você vai aprender no curso:</h1>
                <BaseModule
                    Text='Aprenda os fundamentos da pixel art: resolução, paleta, grid e leitura visual. A base para qualquer estilo.'
                    Icon={<HugeiconsIcon icon={GridIcon} size={125} color={Power_Colors.White90} />}
                />
            </div>
        </section>
    )
}