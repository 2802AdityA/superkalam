// import { faCompass } from "@fortawesome/free-regular-svg-icons/faCompass";
import {
	faCompass,
	faDownload,
	faFolder,
	faHeart,
	faHouse,
	faMusic,
} from "@fortawesome/free-solid-svg-icons";

const leftPanel = [
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
				icon: faDownload,
			},
			{
				title: "Favourites",
				icon: faHeart,
			},
			{
				title: "Local Files",
				icon: faFolder,
			},
		],
	},
];

export default leftPanel;
