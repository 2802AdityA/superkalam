import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PanelRow = ({ content }: { content: any }) => {
    return <div className="flex justify-start items-center mb-2">
        <FontAwesomeIcon className="h-5" icon={content.icon} />
        <div className="ml-4">
            {content.title}
        </div>
    </div>
}