import { RightContent } from "@/interface";
import { RightRow } from "./RightRow";

export const RightColumn = ({ title, content }: { title: string, content: RightContent[] }) => {
    return (
        <div className="flex-col mt-8">
            <div className="flex justify-between items-center">
                <div className="text-gray-300 text-lg font-extrabold">
                    {title}
                </div>
                <div className="">
                    <button className="transition duration-500 hover:text-white text-gray-400 font-semibold ">
                        See all
                    </button>
                </div>
            </div>
            {
                content.map((con: RightContent) => {
                    return <RightRow key={con.name} content={con} />
                })
            }
        </div>
    )
}