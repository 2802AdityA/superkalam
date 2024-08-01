import { Center } from "@/components/Center/Center";
import { Left } from "@/components/Left/Left";
import { Player } from "@/components/Player/Player";
import { Right } from "@/components/Right/Right";

export default function Home() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex overflow-hidden flex-grow pb-16">
                <Left />
                <Center />
                <Right />
            </div>
            <div className="bg-rightC px-8 py-4 border-0 border-t-2 h-24 border-[#1A1B1C] fixed bottom-0 w-full">
                <Player />
            </div>
        </div>
    );
}