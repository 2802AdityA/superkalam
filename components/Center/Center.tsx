"use client"

import Image from "next/image"
import cat from "../../public/cat.png";
import travis from "../../public/travis.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faEllipsis, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Center = () => {
    return <div className="text-white flex-col h-screen m-8">
        <div className="flex gap-4 items-center mb-8">
            <div>
                <button className="rounded-full hover:bg-slate-700 h-10 w-10">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
            <div>
                <button className="rounded-full hover:bg-slate-700 h-10 w-10">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            <div className="flex-grow h-10 relative">
                <FontAwesomeIcon size="lg" icon={faSearch} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                <input
                    className="rounded-full text-gray-800 p-4 pl-10 w-full h-full"
                    type="text"
                    placeholder="Search for artists, songs or albums"
                />
            </div>
            {/* <div className="flex-grow h-10">
                <input className="rounded-full text-gray-800 p-4 w-full h-full" type="text" placeholder="Search for artists, songs or albums" />
            </div> */}
            <div>
                <FontAwesomeIcon size="xl" icon={faEllipsis} />
            </div>
        </div>
        <div>
            <Image className="rounded-2xl" src={travis} alt="astroworld" />
        </div>
        <div>
            <div className="flex justify-between">
                <div>
                    heading
                </div>
                <div>
                    <button>see all</button>
                </div>
            </div>
            <div className="flex">
                {/* map */}
                <div className="flex-col">
                    <div>
                        <Image alt="cover" src={cat} />
                    </div>
                    <div>
                        {`Today's Hot Hits`}
                    </div>
                    <div>
                        The most played tracks right now
                    </div>
                </div>
            </div>
        </div>
    </div>
}