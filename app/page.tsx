import { Center } from "@/components/Center/Center";
import { Left } from "@/components/Left/Left";
import { Player } from "@/components/Player";
import { Right } from "@/components/Right/Right";

export default function Home() {


    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex overflow-hidden flex-grow pb-16">
                <div className="w-0 lg:w-1/6 lg:min-w-1/6 bg-leftC overflow-y-auto min-h-screen">
                    <Left />
                </div>
                <div
                    className="flex-1 pb-16 bg-centerC overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ">
                    <Center />
                </div>
                <div className="w-0 lg:w-1/5 lg:min-w-[400px] bg-rightC overflow-y-auto h-full min-h-screen">
                    <Right />
                </div>
            </div>
            <div className="bg-rightC p-4 border-0 border-t-2 h-20 border-[#1A1B1C] fixed bottom-0 w-full">
                <Player />
            </div>
        </div>
    );
}