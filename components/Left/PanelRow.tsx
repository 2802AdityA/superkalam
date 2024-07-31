"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PanelRow = ({ content }: { content: any }) => {
    return <div className="flex justify-start items-center mb-3">
        <FontAwesomeIcon className={`h-5 ${(content.selected === true) ? 'text-blue-600' : ' text-gray-400'}`} icon={content.icon} />
        <div className={`ml-4 ${(content.selected === true) ? 'text-blue-600' : ' text-gray-400'}`}>
            {content.title}
        </div>
    </div>
}