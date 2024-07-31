import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface LeftContent {
	title: string;
	icon: IconDefinition;
	selected?: boolean;
}

export interface LeftPanelInterface {
	title: string;
	content: LeftContent[];
}
