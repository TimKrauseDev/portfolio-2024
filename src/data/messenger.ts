import { Slide as SlideType } from "@/components/featureSlider";

const slides: SlideType[] = [
	{
		name: "Users",
		description: "Choose from existing users or create a new account with a custom avatar.",
		img: require('@/imgs/personal/messenger/users.jpg'),
    alt: '',
	},
	{
    name: "Live Chat",
		description: "Socket.IO was integrated to enable websockets and provide live chat and other features.",
    img: require('@/imgs/personal/messenger/live-chat.jpg'),
    alt: '',
	},
	{
    name: "Messages",
		description: "Manage messages with the ability to send, receive, edit, and delete.",
    img: require('@/imgs/personal/messenger/messages.jpg'),
    alt: '',
	},
	{
    name: "Chat History",
		description: "Your messages are securely stored in a MongoDB database, ensuring their availability upon your return.",
    img: require('@/imgs/personal/messenger/live-chat.jpg'),
    alt: '',
	},
	{
    name: "Notifications",
		description: "Stay informed with notifications when a message is received in another room.",
    img: require('@/imgs/personal/messenger/notifications.jpg'),
    alt: '',
	},
]

export default slides;
