import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";

export interface LeftContent {
	title: string;
	icon: IconDefinition;
	selected?: boolean;
}

export interface LeftPanelInterface {
	title: string;
	content: LeftContent[];
}

export interface CenterContent {
	title: string;
	cover: StaticImageData;
	sub: string;
}

export interface CenterPanelInterface {
	title: string;
	content: CenterContent[];
}

export interface RightContent {
	cover: StaticImageData;
	name: string;
	artist: string;
	time: string;
}

export interface RightPanelInterface {
	title: string;
	content: RightContent[];
}
