"use client"

import { Playlist } from "./Playlist";
import { CenterContent, CenterPanelInterface } from "@/interface";

export const CenterRow = ({ row }: { row: CenterPanelInterface }) => {
    return (<div className="mt-8 flex flex-col ">
        <div className="flex justify-between items-center mb-8">
            <div className="font-extrabold text-3xl hover:underline">
                {row.title}
            </div>
            <div>
                <button className="text-gray-400 hover:text-white transition duration-500 font-semibold">See all</button>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4%]">
            {
                row.content.map((playlist: CenterContent) => {
                    return <Playlist key={playlist.title} playlist={playlist} />
                })
            }
        </div>
    </div>)
}