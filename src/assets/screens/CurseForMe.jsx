import { BrushIcon, Ds3ToolIcon, FilePasteIcon, FlyingHumanIcon, GitbookIcon, Grid02Icon, GridIcon, Joystick01Icon, KeyframeAddIcon, MapsSearchIcon, PaintBoardIcon, ParagraphBulletsPoint01FreeIcons, PencilEdit01Icon, QuillWrite01Icon, RubiksCubeIcon, ToolsIcon, TShirtIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Power_Colors } from '../components/Design/Pallet.js'
import BaseResp from '../components/Others/Pop/BaseResp.jsx'

export default function CurseForMe() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center justify-between h-full w-[90%] gap-3.5 pt-80'>
                <h1 className='text-5xl font-Inter font-bold'>“Sera que esse curso é para mim?”</h1>
                <p className='font-Inria font-light text-2xl w-full text-center'>
                    Se você quer aprender pixel art com técnica, propósito e liberdade criativa, esse curso foi feito para você. <br />
                    Não importa seu nível — aqui você encontra direção e prática para evoluir do seu jeito.
                </p>
                <div className="flex flex-wrap gap-9 justify-center w-full h-full items-center">
                    <BaseResp
                        Text='Futuros criadores de jogos'
                        Icon={<HugeiconsIcon icon={Joystick01Icon} color={Power_Colors.White90} />}
                    />
                    <BaseResp
                        Text='Artistas digitais iniciantes'
                        Icon={<HugeiconsIcon icon={PencilEdit01Icon} color={Power_Colors.White90} />}
                    />
                    <BaseResp
                        Text=' Desenvolvedores indie'
                        Icon={<HugeiconsIcon icon={Ds3ToolIcon} color={Power_Colors.White90} />}
                    />
                    <BaseResp
                        Text='Criativos autorais'
                        Icon={<HugeiconsIcon icon={QuillWrite01Icon} color={Power_Colors.White90} />}
                    />
                    <BaseResp
                        Text='Estudantes e curiosos'
                        Icon={<HugeiconsIcon icon={GitbookIcon} color={Power_Colors.White90} />}
                    />
                    <BaseResp
                        Text='Profissionais que querem migrar'
                        Icon={<HugeiconsIcon icon={FilePasteIcon} color={Power_Colors.White90} />}
                    />
                    <BaseResp
                        Text='Quem busca estilo próprio'
                        Icon={<HugeiconsIcon icon={TShirtIcon} color={Power_Colors.White90} />}
                    />
                </div>
            </div>
        </section>
    )
}