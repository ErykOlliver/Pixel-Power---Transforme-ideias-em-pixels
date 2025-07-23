export default function BaseBenefit({ Icon, Title, Text }) {
    return (
        <div className=" min-w-72 max-w-80 h-80 shadow-[0_5px_5px_-6px] border-2 border-White-90 rounded-xl flex justify-center items-center pl-2.5 pr-2.5 pb-2.5 pt-2.5">
            <div className="h-full w-[90%] flex flex-col items-center justify-center gap-3">
                {Icon}
                <h1 className="text-xl text-center w-full text-White-90 font-bold font-Inria">{Title}</h1>
                <p className="text-lg text-center w-full text-White-90 font-light font-Inria">{Text}</p>
            </div>
        </div>
    )
}