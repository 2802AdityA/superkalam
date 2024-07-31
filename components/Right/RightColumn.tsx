import { RightRow } from "./RightRow";

export const RightColumn = ({ title, content }: { title: string, content: any }) => {
    return (
        <div className="flex-col mt-8">
            <div className="flex justify-between items-center">
                <div className="text-gray-300 text-lg font-extrabold">
                    {title}
                </div>
                <div>
                    <button className="text-gray-400 font-semibold ">
                        See all
                    </button>
                </div>
            </div>
            {
                content.map((con: any) => {
                    return <RightRow key={con.name} content={con} />
                })
            }
        </div>
    )
}