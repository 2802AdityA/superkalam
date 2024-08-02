import { RightContent } from "@/interface"
import Image from "next/image"

export const RightRow = ({ content }: { content: RightContent }) => {
    return <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start items-center gap-4">
            <div className="h-12 w-12">
                <Image className="rounded-md" alt="album" src={content.cover} />
            </div>
            <div className="flex flex-col">
                <div className="text-lg text-gray-300 line-clamp-1">{content.name}</div>
                <div className="text-sm text-gray-500 hover:underline hover:text-gray-300 line-clamp-1">{content.artist}</div>
            </div>
        </div>
        <div className="text-xs font-bold text-gray-500 line-clamp-1">
            {content.time}
        </div>
    </div>
}