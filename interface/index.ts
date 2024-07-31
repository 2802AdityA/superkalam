import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Content {
	title: string;
	icon: IconDefinition;
}

export interface LeftPanelInterface {
	title: string;
	content: Content[];
}
