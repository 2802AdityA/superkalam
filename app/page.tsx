import { Center } from "@/components/Center/Center";
import { Left } from "@/components/Left/Left";
import { Player } from "@/components/Player";
import { Right } from "@/components/Right/Right";

export default function Home() {


    return (
        <div className="flex-col h-screen overflow-hidden">
            <div className="flex flex-grow ">
                <div className="w-1/6 min-w-1/6 bg-leftC overflow-y-auto h-full min-h-screen">
                    <Left />
                </div>
                <div className="flex-1 bg-centerC overflow-y-auto h-full min-h-screen ">
                    <Center />
                </div>
                <div className="w-1/5 min-w-[400px] bg-rightC overflow-y-auto h-full min-h-screen ">
                    <Right />
                </div>
            </div>
            <div className="bg-rightC p-4 border-0 border-t-2 border-[#1A1B1C] fixed bottom-0 w-full">
                <Player />
            </div>
        </div>
    );
}