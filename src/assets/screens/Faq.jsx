import BaseFaq from "../components/Others/Base/BaseFaq";

export default function Faq() {
    return (
        <section className='flex justify-center h-fit w-screen items-center bg-White-80'>
            <div className='flex flex-col items-center py-52 justify-center h-full w-[90%] gap-5 '>
                <h1 className="text-5xl font-bold font-Inter">Perguntas frequentes</h1>
                <div className="w-[90%] h-fit flex flex-col gap-5 ">
                    <BaseFaq
                        question="O curso é mesmo para iniciantes?"
                        resp="Sim! O curso foi criado especialmente para quem está começando do zero. Você vai aprender desde os fundamentos até técnicas mais avançadas de pixel art, passo a passo e sem enrolação."
                    />
                    <BaseFaq
                        question="Preciso saber desenhar para fazer o curso?"
                        resp="Não precisa! O curso foi planejado para ensinar pixel art mesmo para quem nunca desenhou antes. A proposta é desenvolver sua criatividade e domínio das ferramentas com uma abordagem prática, acessível e didática, independentemente do seu nível de experiência com desenho."
                    />
                    <BaseFaq
                        question="Posso acessar o curso pelo celular?"
                        resp="Sim! Todo o conteúdo do curso pode ser acessado tanto pelo computador quanto pelo celular ou tablet. A plataforma é responsiva e permite que você estude de onde estiver, com total liberdade."
                    />
                    <BaseFaq
                        question="Por quanto tempo terei acesso ao curso?"
                        resp="Ao adquirir o curso, você terá acesso ao conteúdo completo por tempo ilimitado. Isso significa que você pode revisar as aulas quando quiser, no seu ritmo, sem se preocupar com prazos ou limitações."
                    />
                    <BaseFaq
                        question="Vou aprender mesmo a criar minhas próprias artes?"
                        resp="Sim! O curso foi estruturado para que, ao final das aulas, você tenha domínio das principais técnicas de pixel art e consiga criar suas próprias artes do zero, com estilo e personalidade. Todo o conteúdo é voltado para a prática, com exercícios e projetos que estimulam sua evolução constante."
                    />
                    <BaseFaq
                        question="E se eu me arrepender da compra?"
                        resp="Você pode ficar tranquilo! Oferecemos garantia de reembolso dentro do prazo estipulado pela plataforma. Se por qualquer motivo você achar que o curso não é para você, basta solicitar o reembolso dentro do período estabelecido e todo o valor será devolvido."
                    />
                    <BaseFaq
                        question="O curso serve para quem quer criar jogos?"
                        resp="Com certeza! O curso foi pensado também para quem deseja aplicar pixel art na criação de jogos. Você vai aprender técnicas que são usadas em sprites, tilesets, animações e elementos visuais que fazem parte do desenvolvimento de games 2D."
                    />

                </div>
            </div>
        </section>

    )
}