"use client"

import Image from "next/image"
import { CenterContent } from "@/interface";

export const Playlist = ({ playlist }: { playlist: CenterContent }) => {
    if (!playlist.cover) {
        return <div className="bg-[#ffffff10] rounded-2xl w-full h-80 animate-pulse"></div>
    }
    return (
        <div className="animate-fade-in transition duration-500 bg-[#ffffff09] hover:bg-[#ffffff17] p-4 rounded-lg">
            <div className="flex-col">
                <Image alt="cover" className="w-full rounded-lg" src={playlist.cover} />
                <div className="flex-col w-52 mt-4">
                    <div className="font-bold text-gray-300 text-lg">
                        {playlist.title}
                    </div>
                    <div className="text-gray-400 font-medium hover:underline hover:text-gray-200">
                        {playlist.sub}
                    </div>
                </div>
            </div>
        </div>
    )
}