import { ArrowDown01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function BaseFaq({ question, resp }) {
    return (
        <div className="border-b-2 w-full">
            <div className="flex mx-3.5 justify-between items-center  w-full">
                <h2>{question}</h2>
                <div className="w-fit h-fit rotate-0">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={70} />
                </div>
            </div>
        </div>
    )

}