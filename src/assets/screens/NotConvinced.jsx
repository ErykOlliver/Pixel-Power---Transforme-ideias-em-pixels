import { Certificate01Icon, DiscordIcon, FolderUploadIcon, Infinity01Icon, PlayIcon, SearchFocusIcon, TargetIcon, TimerIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Power_Colors } from '../components/Design/Pallet.js'
import BaseBenefit from '../components/Others/Base/BaseBenefit.jsx'

export default function NotConvinced() {
    return (
        <section className='flex justify-center h-fit w-screen items-center bg-Black-False'>
            <div className='flex flex-col items-center justify-between h-full w-[90%] gap-2.5 '>
                <p className='GenericText font-Inria text-3xl font-light text-White-90 py-6 text-center'>
                    O Pixel Power vai além das aulas: oferece suporte, comunidade e recursos para você <br />
                    evoluir com liberdade e consistência, do básico ao avançado.
                </p>
                <h1 className='NotConvincedTitle text-5xl font-Inter font-bold p text-White-90 py-3.5'>Benefícios ao se inscrever:</h1>
                <div className="grid grid-cols-[290px_290px_290px_290px] py-2 gap-9 justify-center w-full h-full items-center">
                    <BaseBenefit
                        Title="Certificado de Conclusão"
                        Text="Ao finalizar o curso, você recebe um certificado exclusivo para fortalecer seu portfólio e dar aquele up no currículo."
                        Icon={<HugeiconsIcon icon={Certificate01Icon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Acesso Vitalício"
                        Text="Compre uma vez e tenha acesso ao conteúdo para sempre — incluindo futuras atualizações sem custo adicional."
                        Icon={<HugeiconsIcon icon={Infinity01Icon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Certificado de Conclusão"
                        Text="Entenda como cores e luz criam profundidade, contraste e estilo em pixel art com poucos tons."
                        Icon={<HugeiconsIcon icon={DiscordIcon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Comunidade no Discord"
                        Text="Entre para uma comunidade ativa de artistas e desenvolvedores, tire dúvidas, compartilhe progresso e receba feedbacks."
                        Icon={<HugeiconsIcon icon={FolderUploadIcon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Atualizações Garantidas"
                        Text="Sempre que o curso for atualizado, você recebe as novas aulas automaticamente — sem pagar mais por isso."
                        Icon={<HugeiconsIcon icon={PlayIcon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Conteúdo Prático e Aplicável"
                        Text="Nada de enrolação: aulas focadas no que realmente importa, com exercícios e projetos que ajudam você a evoluir de verdade."
                        Icon={<HugeiconsIcon icon={TimerIcon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Aprenda no seu ritmo"
                        Text="Sem pressa nem pressão — estude quando e onde quiser, adaptando o curso à sua rotina."
                        Icon={<HugeiconsIcon icon={SearchFocusIcon} size={100} color={Power_Colors.White90} />}
                    />
                    <BaseBenefit
                        Title="Foco em portfólio e carreira"
                        Text="O curso foi pensado pra ajudar você a montar um portfólio sólido, com foco no mercado e em oportunidades reais."
                        Icon={<HugeiconsIcon icon={TargetIcon} size={100} color={Power_Colors.White90} />}
                    />
                </div>
                <h1 className='GenericText text-5xl font-Inter font-bold text-White-90 py-2.5'>Tudo que você precisa, no seu ritmo.</h1>
                <p className='GenericText font-Inria text-3xl font-light text-White-90 py-2.5 text-center'>
                    Com conteúdo prático e uma base sólida, você aprende com liberdade e tem onde crescer. Simples assim.
                </p>
            </div>
        </section>
    )
}