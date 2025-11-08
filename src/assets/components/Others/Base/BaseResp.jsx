export default function BaseResp({ Icon, Text }) {
    return (
        <div className="RespElement aspect-square w-full max-w-60 shadow-[0_5px_5px_-6px] bg-Black-False rounded-xl flex justify-center items-center pl-2.5 pr-2.5 pb-2.5 pt-2.5">
            <div className="h-full w-[90%] flex flex-col items-center justify-center gap-2.5 pr-1 pl-1">
                {Icon}
                <p className="text-xl text-center w-full text-White-90 font-bold font-Inria">{Text}</p>
            </div>
        </div>
    )
}