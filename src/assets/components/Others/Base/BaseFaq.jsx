import { ArrowDown01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef, useState } from "react";

export default function BaseFaq({ question, resp }) {
    const [IsOpen, SetOpen] = useState(false)
    const contentRef = useRef(null)

    const toggle = () => SetOpen(!IsOpen)
    return (
        <div className=" w-full ">
            <div onClick={toggle} className="border-b-2 flex hover:cursor-pointer justify-between items-center  w-full">
                <h2 className="text-4xl font-Inria">{question}</h2>
                <div className={`w-fit h-fit transition-all ease-in-out duration-400 ${IsOpen ? 'rotate-90' : 'rotate-0'}`}>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={70} />
                </div>
            </div>
            <div ref={contentRef} className={`w-full transition-all ease-in-out duration-400 overflow-hidden ${IsOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <p className="text-2xl font-Inria font-light">{resp}</p>
            </div>
        </div>
    )

}