import { Slide as SlideType } from "@/components/featureSlider";

const slides: SlideType[] = [
	{
		name: "Algoritms",
		description: "Explore the visual representation of five different sorting algorithms: Bubble, Insertion, Merge, Quick and Selector Sort.",
		img: require('@/imgs/personal/sorting/algorithm.jpg'),
		alt: "visual of in-progress merge sort."
	},
	{
    name: "Step Through Time",
		description: "Navigate through the steps of the algorithm's process, advancing or reversing to observe the movements in action.",
    img: require('@/imgs/personal/sorting/steps.jpg'),
		alt: "Visual of the visualizer controls."
	},
	{
    name: "Settings",
		description: "Control the number of bars being sorted and the speed of sorting with adjustable settings.",
    img: require('@/imgs/personal/sorting/settings.jpg'),
		alt: "Visual of all visualizer settings."
	}
]

export default slides
