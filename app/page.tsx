import { Center } from "@/components/Center/Center";
import { Left } from "@/components/Left/Left";
import { Player } from "@/components/Player/Player";
import { Right } from "@/components/Right/Right";

export default function Home() {
    return (
        <div className=" bg-rightC flex flex-col h-screen overflow-hidden">
            <div className="flex overflow-hidden flex-grow pb-16">
                <div className="flex w-0 lg:w-1/5 bg-leftC overflow-y-hidden min-h-screen pb-24">
                    <Left />
                </div>
                <div
                    className="flex-1 pb-[10%] lg:pb-[5%] bg-centerC overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ">
                    <Center />
                </div>
                <div className="w-0 xl:w-1/5 bg-rightC overflow-y-auto h-full min-h-screen scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                    <Right />
                </div>
            </div>
            <div className="bg-rightC px-[3%] py-[1%] border-0 border-t md:border-t-2 h-[10%] border-[#1A1B1C] fixed bottom-0 w-full">
                <Player />
            </div>
        </div>
    );
}