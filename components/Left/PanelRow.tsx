"use client"

import { LeftContent } from "@/interface"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PanelRow = ({ content }: { content: LeftContent }) => {
    return <div className="flex justify-start items-center mb-3 group">

        <FontAwesomeIcon className={`h-5 ${(content.selected === true) ? 'text-blue-600' : ' text-gray-400 group-hover:text-white transition duration-500'}`} icon={content.icon} />
        <div className={`ml-4 ${(content.selected === true) ? 'text-blue-600' : ' text-gray-400 group-hover:text-white transition duration-500'}`}>
            {content.title}
        </div>
    </div>
}