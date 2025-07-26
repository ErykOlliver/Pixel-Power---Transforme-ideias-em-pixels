export default function BaseBenefit({ Icon, Title, Text }) {
    return (
        <div className="BenefitElement min-w-72 max-w-80 h-80 shadow-[0_5px_5px_-6px] border-2 border-White-90 rounded-xl flex justify-center items-center pl-2.5 pr-2.5 pb-2.5 pt-2.5">
            <div className="h-full w-[90%] flex flex-col items-center justify-center gap-3.5">
                <div className="w-28 h-28 flex items-center justify-center">
                    {Icon}
                </div>
                <h1 className="text-xl text-center w-full h-fit text-White-90 text-nowrap font-bold font-Inria">{Title}</h1>
                <div className="w-full items-center justify-center flex h-28">
                    <p className="text-lg text-center w-full text-White-90 font-light font-Inria">{Text}</p>
                </div>
            </div>
        </div>
    )
}