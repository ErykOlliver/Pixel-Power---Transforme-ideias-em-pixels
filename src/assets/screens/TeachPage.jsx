import Lucas from '../img/Lucas.png'


export default function TeachPage() {
    return (
        <section className='flex justify-center h-screen w-screen items-center bg-White-80'>
            <div className='flex items-center py-24 justify-between h-full w-[90%] gap-2.5 '>
                <div className='flex gap-2.5 flex-col w-full h-full justify-center items-start'>
                    <h1 className='text-5xl font-Inter font-bold '>Quem vai te ensinar</h1>
                    <p className="flex flex-col font-Inria gap-2.5 text-2xl text-wrap max-w-3xl">
                        <p className="text-justify">
                            Oi! Meu nome é <span className="text-Sunset-Blaze font-bold">Lucas Almeida </span>, sou artista digital e
                            especialista em pixel art há mais de 8 anos.
                        </p>

                        <p className="text-justify text-Black-False font-bold">
                            Comecei minha jornada como <span className="text-Sunset-Blaze font-bold"> autodidata </span>, tentando entender como os
                            <span className="text-Sunset-Blaze font-bold"> grandes clássicos </span> dos videogames davam vida a mundos incríveis usando apenas pequenos
                            quadradinhos. Com o tempo, fui me aprofundando, <span className="text-Sunset-Blaze font-bold"> trabalhando em projetos de games indie</span>, colaborando
                            com <span className="text-Sunset-Blaze font-bold"> estúdios</span> e até dando <span className="text-Sunset-Blaze font-bold">consultoria para criadores</span> que buscavam um estilo visual autêntico e marcante.
                        </p>

                        <p className="text-justify">
                            Criei este <span className="text-Sunset-Blaze font-bold"> curso</span> pensando em quem está <span className="text-Sunset-Blaze font-bold"> começando do zero</span>, mas também em quem já desenha e quer evoluir com
                            técnicas profissionais, fundamentos sólidos e uma <span className="text-Sunset-Blaze font-bold"> didática simples e direta</span>. Aqui, você vai aprender não só a criar
                            artes bonitas, mas a pensar como um <span className="text-Sunset-Blaze font-bold">  artista de verdade</span>. Minha missão é mostrar que você também pode dominar o pixel art
                            e transformar suas ideias em imagens incríveis, mesmo que nunca tenha desenhado antes.

                        </p>
                        <p className="text-justify">
                            Nos vemos dentro da plataforma!
                            - Lucas
                        </p>
                    </p>
                </div>
                <div className=' w-full h-full justify-end items-end flex'>
                    <img src={Lucas} alt='Lucas' className='w-md h-md ' />
                </div>
            </div>
        </section>
                
    )
}