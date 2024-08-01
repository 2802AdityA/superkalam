import Image from "next/image"
import cat from "../../public/cat.png";
import { CenterContent } from "@/interface";

export const Playlist = ({ playlist }: { playlist: CenterContent }) => {
    return (
        <div className="flex-col">
            <Image alt="cover" className="w-full rounded-lg" src={playlist.cover} />
            <div className="flex-col w-52 mt-4">
                <div className="font-bold text-gray-300 text-lg">
                    {playlist.title}
                </div>
                <div className="text-gray-400 font-medium">
                    {playlist.sub}
                </div>
            </div>
        </div>
    )
}