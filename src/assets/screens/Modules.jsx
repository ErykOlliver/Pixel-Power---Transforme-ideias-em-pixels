import { BrushIcon, FlyingHumanIcon, Grid02Icon, GridIcon, KeyframeAddIcon, MapsSearchIcon, PaintBoardIcon, ParagraphBulletsPoint01FreeIcons, RubiksCubeIcon, ToolsIcon } from '@hugeicons/core-free-icons'
import BaseModule from '../components/Others/Base/BaseModules.jsx'
import { HugeiconsIcon } from '@hugeicons/react'
import { Power_Colors } from '../components/Design/Pallet.js'

export default function Modules() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center justify-center h-full w-[90%] gap-3.5 '>
                <h1 className='ModulesTitle text-5xl font-Inter font-bold'>o que você vai aprender no curso:</h1>
                <div className="grid grid-cols-[290px_290px_290px_290px] gap-9 justify-center w-full h-full items-center">
                    <BaseModule
                        Text="Aprenda os fundamentos da pixel art: resolução, paleta, grid e leitura visual. A base para qualquer estilo."
                        Icon={<HugeiconsIcon icon={GridIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Construa formas legíveis e impactantes. Aprenda a criar personagens e objetos com presença visual."
                        Icon={<HugeiconsIcon icon={RubiksCubeIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Entenda como cores e luz criam profundidade, contraste e estilo em pixel art com poucos tons."
                        Icon={<HugeiconsIcon icon={PaintBoardIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Crie personagens com expressão e identidade mesmo com poucos pixels. Poses, anatomia e estilo."
                        Icon={<HugeiconsIcon icon={FlyingHumanIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Desenvolva cenários e tiles com coesão. Trabalhe repetição, perspectiva e ambientação visual."
                        Icon={<HugeiconsIcon icon={MapsSearchIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Desenhe HUDs, menus, ícones e objetos com clareza visual e linguagem funcional para jogos."
                        Icon={<HugeiconsIcon icon={ToolsIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Aprenda a dar vida aos pixels com animações simples e impactantes: movimentos, loops e efeitos."
                        Icon={<HugeiconsIcon icon={KeyframeAddIcon} size={125} color={Power_Colors.White90} />}
                    />
                    <BaseModule
                        Text="Explore seu estilo e monte um portfólio pronto para o mercado, jogos, ou projetos autorais."
                        Icon={<HugeiconsIcon icon={BrushIcon} size={125} color={Power_Colors.White90} />}
                    />
                </div>
            </div>
        </section>
    )
}