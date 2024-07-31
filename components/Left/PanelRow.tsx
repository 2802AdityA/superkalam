"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PanelRow = ({ content }: { content: any }) => {
    return <div className="flex justify-start items-center mb-2">
        <FontAwesomeIcon className="h-5 text-gray-400" icon={content.icon} />
        <div className="ml-4 text-[#9FA2AA]">
            {content.title}
        </div>
    </div>
}