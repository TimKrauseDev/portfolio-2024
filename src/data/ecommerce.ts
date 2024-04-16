import { Slide as SlideType } from "@/components/featureSlider";

const slides: SlideType[] = [
	{
		name: "Api",
		description: "RESTful API endpoints were created using Express.",
		img: require('@/imgs/personal/ecommerce/api.jpg'),
		alt: "shopping cart dropdown on ecommerce website"
	},
	{
    name: "Authentication",
		description: "Integrated Passport to handle secure user authentication, providing customers with the option to login through Google or GitHub.",
    img: require('@/imgs/personal/ecommerce/auth.jpg'),
		alt: "login screen on ecommerce website"
	},
	{
    name: "Database",
		description: "MongoDB was utilized for all storage needs, including user, order, and product data.",
    img: require('@/imgs/personal/ecommerce/database.jpg'),
		alt: "strawberry product on ecommerce website"
	},
	{
    name: "Order History",
		description: "Upon confirmation of payment through Stripe, orders are stored and can be accessed through the order history page.",
    img: require('@/imgs/personal/ecommerce/order-history.jpg'),
		alt: "order page on ecommerce website"
	},
	{
    name: "Payments",
		description: "Stripe was integrated to handle payment transactions for goods.",
    img: require('@/imgs/personal/ecommerce/payment.jpg'),
		alt: "checkout page on ecommerce website"
	},
	{
    name: "Shopping Carts",
		description: "Pick up where you left off with confidence, as your shopping carts are securely stored for future consideration.",
    img: require('@/imgs/personal/ecommerce/shopping-cart.jpg'),
		alt: "shopping cart on ecommerce website"
	},
]

export default slides;
