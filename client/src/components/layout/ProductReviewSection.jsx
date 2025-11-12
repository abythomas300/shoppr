import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faStarHalfAlt,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

// Fake data
const review = [
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
		name: "Carlos Mendes",
		rating: 4.8,
		date: "November 12,2025",
		content:
			"Absolutely love the PS5. Load times are ridiculously fast and the DualSense controller makes every game feel more immersive. Setup was straightforward, and the system is whisper-quiet compared to previous consoles. A few apps needed updates but nothing major. Highly recommend for anyone upgrading from PS4.",
		like: "312",
		dislike: "8",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
		name: "Priya Shah",
		rating: 4.2,
		date: "June 03,2024",
		content:
			"Great performance and stunning visuals — ray tracing really shines. Hit a couple of frame dips in a few titles at launch, but most games run buttery smooth. The UI takes a little getting used to, and SSD storage fills up fast, so consider expanding storage sooner rather than later.",
		like: "198",
		dislike: "23",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
		name: "Liam O'Connor",
		rating: 3.6,
		date: "December 20,2021",
		content:
			"The hardware is impressive and the controller tech is next-level, but I had trouble with availability of some backward-compat titles. A few bugs in the first firmware I received, since fixed via updates. Solid console overall, but expect to spend extra on storage and accessories.",
		like: "86",
		dislike: "47",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
		name: "Sandra Kim",
		rating: 5.0,
		date: "March 15,2022",
		content:
			"Best console purchase I've made in years. Games load instantly, the haptics add real depth to gameplay, and the exclusive titles are fantastic. Setup with PS Plus was simple and cloud saves worked without a hitch. If you can get one, go for it.",
		like: "524",
		dislike: "11",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user5.jpg",
		name: "Ethan Brooks",
		rating: 2.9,
		date: "August 01,2023",
		content:
			"Hardware is great but had a rough start — mine arrived with a cosmetic scratch and the included HDMI cable caused flicker on my TV until I swapped it. Customer service was okay but slow. Once sorted, performance was fine, but the initial hassle lowered my rating.",
		like: "34",
		dislike: "15",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user6.jpg",
		name: "Marta Alvarez",
		rating: 4.5,
		date: "May 10,2025",
		content:
		"Fantastic upgrade from PS4. Load speeds are game-changing and the controller feedback is subtle but powerful. Love the new UI features and activity cards. Only downside: accessories and extra storage are pricey. Still, most nights are pure fun.",
		like: "211",
		dislike: "9",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
		name: "Noah Jensen",
		rating: 3.0,
		date: "October 28,2020",
		content:
		"Mixed feelings — the PS5 feels futuristic and many games look amazing, but supply issues meant I paid above retail. Some apps are missing features I used on other devices. If you can buy at retail price and don't mind occasional bugs, it's worth it.",
		like: "58",
		dislike: "42",
	},
];


// Rating star component
function Rating({rating}) {
	console.log("From rating component: ", {rating})
	return(
		<p className="text-sm mb-4">
		<span className="text-yellow-500">
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = <FontAwesomeIcon icon={faStar} />;
				else if (rating > i && rating < index + 1)
					content = <FontAwesomeIcon icon={faStarHalfAlt} />;
				else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		<span className="mx-1">{rating.toFixed(1)}4</span>
	</p>
	)
}

// Rating prop types declaration
Rating.propTypes = {
	rating: PropTypes.number,
};

// Review item component
function ReviewItem({item}) {
	return(
		<>
			<hr className="text-primary my-5" />
			<div className="flex flex-col lg:flex-row justify-between">
				<div className="w-full lg:w-1/3">
					<div className="flex mb-6">
						<div className="w-10 h-10 rounded-full mr-2 overflow-hidden">
							<img src={item.img} alt="" className="max-w-full h-auto" />
						</div>
						<div>
							<h5 className="font-medium my-1">{item.name}</h5>
							<Rating rating={item.rating} />
							<p className="text-sm opacity-50">Comment At</p>
							<p className="font-bold mb-0">{item.date}</p>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-2/3">
					<p className="text-sm leading-normal opacity-75 mb-6">
						{item.content}
					</p>
					<div className="flex justify-end">
						<button className="btn rounded inline-flex justify-center items-center duration-300 px-3 py-2 mr-6">
							<FontAwesomeIcon icon={faThumbsUp} className="text-lg mr-1 " />
							{item.like}
						</button>
						<button className="btn rounded inline-flex justify-center items-center duration-300 px-3 py-2 mr-6">
							<FontAwesomeIcon icon={faThumbsDown} className="text-lg mr-1 " />
							{item.dislike}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

// Rating item types declaration
ReviewItem.propTypes = {
	item: PropTypes.object.isRequired,
};

// Epreview2 component
function ProductReviewSection() {
	return(
			<div className="flex justify-center">
				<div className="border border-base-300 rounded p-4 lg:p-8">
					<div>
						<div className="flex justify-between items-center">
							<h2 className="text-2xl font-medium">Customer Review</h2>
							<div>
								<button className="btn hover:bg-primary rounded py-2 px-5 md:px-6">
									New Comment
								</button>
							</div>
						</div>
						{review.map((item, i) => (
							<ReviewItem item={item} key={i} />
						))}
						<div className="py-6 lg:py-12 text-center">
							<button className="btn bg-primary text-sm hover:bg-opacity-90 rounded py-2.5 px-6 md:px-10">
								Load More
							</button>
						</div>
					</div>
				</div>
			</div>
	)
}

export default ProductReviewSection


