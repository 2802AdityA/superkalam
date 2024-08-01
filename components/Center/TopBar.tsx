import { faAngleLeft, faAngleRight, faEllipsis, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TopBar = () => {
    return <div className="flex gap-4 items-center mb-8">
        <div className="justify-center items-center">
            <button className="flex rounded-full justify-center items-center hover:bg-slate-700 h-10 w-10">
                <FontAwesomeIcon className=" h-5" icon={faAngleLeft} />
            </button>
        </div>
        <div>
            <button className="flex rounded-full justify-center items-center hover:bg-slate-700 h-10 w-10">
                <FontAwesomeIcon className="h-5" icon={faAngleRight} />
            </button>
        </div>

        <div className="flex-grow h-10 relative">
            <FontAwesomeIcon icon={faSearch} className="absolute h-5 top-1/2 left-3 transform -translate-y-1/2 text-black" />
            <input
                className="rounded-full text-gray-800 p-4 pl-10 w-full h-full"
                type="text"
                placeholder="Search for artists, songs or albums"
            />
        </div>
        <div>
            <button>
                <FontAwesomeIcon className="h-5" icon={faEllipsis} />
            </button>
        </div>
    </div>
}