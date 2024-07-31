import { Center } from "@/components/Center";
import { Left } from "@/components/Left/Left";
import { Player } from "@/components/Player";
import { Right } from "@/components/Right";

export default function Home() {

    return (
        <div className="flex-col h-full">
            <div className="flex flex-grow overflow-hidden">
                <div className="w-1/5 bg-leftC overflow-y-auto">
                    <Left />
                </div>
                <div className="flex-1 bg-centerC overflow-y-auto">
                    <Center />
                </div>
                <div className="w-1/5 bg-rightC overflow-y-auto">
                    <Right />
                </div>
            </div>
            <div className="bg-rightC p-4 border-0 border-t-2 border-white fixed bottom-0 w-full">
                <Player />
            </div>
        </div>
    );
}