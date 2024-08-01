import Image from "next/image"
import cat from "../../public/cat.png";
import { Playlist } from "./Playlist";

export const CenterRow = ({ row }: { row: any }) => {
    return (<div className="mt-8 flex-col ">
        <div className="flex justify-between items-center mb-8">
            <div className="font-extrabold text-3xl">
                {row.title}
            </div>
            <div>
                <button className="text-gray-400 font-semibold">See all</button>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
            {
                row.content.map((playlist: any) => {
                    return <Playlist key={playlist.title} playlist={playlist} />
                })
            }
        </div>
    </div>)
}