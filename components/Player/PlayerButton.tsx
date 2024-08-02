import { ReactNode } from 'react';
export const PlayerButton = ({ children }: { children: ReactNode }) => {
    return <button className="hidden lg:block text-gray-500 hover:text-white transition duration-500">{children}</button>
}