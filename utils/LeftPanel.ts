import { LeftPanelInterface } from "@/interface";
import {
	faCompass,
	faCircleDown,
	faHeart,
	faFolderClosed,
} from "@fortawesome/free-regular-svg-icons";
import { faHouse, faMusic } from "@fortawesome/free-solid-svg-icons";

const leftPanel: LeftPanelInterface[] = [
	{
		title: "FEATURES",
		content: [
			{
				title: "Home",
				icon: faHouse,
			},
			{
				title: "Discover",
				icon: faCompass,
			},
			{
				title: "Collections",
				icon: faMusic,
			},
		],
	},
	{
		title: "LIBRARY",
		content: [
			{
				title: "Download",
				icon: faCircleDown,
			},
			{
				title: "Favourites",
				icon: faHeart,
			},
			{
				title: "Local Files",
				icon: faFolderClosed,
			},
		],
	},
];

export default leftPanel;
