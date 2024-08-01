import { RightPanelInterface } from "@/interface";
import cat from "../public/cat.png";
import runaway from "../public/runaway.jpeg";
import myEyes from "../public/myEyes.jpeg";
import middle from "../public/middleChild.jpeg";
import sparks from "../public/sparks.jpeg";

const rightPanel: RightPanelInterface[] = [
	{
		title: "Recently Played",
		content: [
			{
				cover: runaway,
				name: "Runaway",
				artist: "Kanye West",
				time: "5 min ago",
			},
			{
				cover: myEyes,
				name: "MY EYES",
				artist: "Travis Scott",
				time: "15 min ago",
			},
			{
				cover: middle,
				name: "MIDDLE CHILD",
				artist: "J. Cole",
				time: "18 min ago",
			},
			{
				cover: sparks,
				name: "Sparks",
				artist: "Coldplay",
				time: "2 hr ago",
			},
		],
	},
	{
		title: "My Playlist",
		content: [
			{
				cover: cat,
				name: "land of rising sun",
				artist: "38 songs",
				time: "2hr 43min",
			},
			{
				cover: cat,
				name: "burning memories",
				artist: "21 songs",
				time: "1hr 4min",
			},
			{
				cover: cat,
				name: "dream 127 U",
				artist: "35 songs",
				time: "1hr 56min",
			},
			{
				cover: cat,
				name: "underrated",
				artist: "18 songs",
				time: "51min",
			},
		],
	},
];

export default rightPanel;
