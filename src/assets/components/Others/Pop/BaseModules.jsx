export default function BaseModule({ Icon, Text }) {
    return (
        <div className=" w-72 h-96 border flex justify-center items-center pl-2.5 pr-2.5 pb-2.5 pt-2.5">
            <div className="h-full w-[90%] border flex flex-col items-center justify-center ">
                {Icon}
                <p className="text-2xl text-center">{Text}</p>
            </div>
        </div>
    )
}