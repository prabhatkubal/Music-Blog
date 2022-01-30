import React from "react";
import Slider from "react-slick";
import HeaderSliderItems from "./HeaderSliderItems";
import SliderDots from "./HeaderSliderDots";

export default function HeaderSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div>
			<SliderDots>
				<Slider {...settings}>
					<HeaderSliderItems
						heading="Music Blog Template the largest music app"
						description="Mirchi is a powerfull and responsive Music App with pretty much advanced features like display Artist, Albums, PhotoGallery, Video Gallery and Events each with its own post type"
						btntext="LISTEN NOW"
					/>
					<HeaderSliderItems
						heading="Music Blog Template the largest music app"
						description="Mirchi is a powerfull and responsive Music App with pretty much advanced features like display Artist, Albums, PhotoGallery, Video Gallery and Events each with its own post type"
						btntext="LISTEN NOW"
					/>
					<HeaderSliderItems
						heading="Music Blog Template the largest music app"
						description="Mirchi is a powerfull and responsive Music App with pretty much advanced features like display Artist, Albums, PhotoGallery, Video Gallery and Events each with its own post type"
						btntext="LISTEN NOW"
					/>
				</Slider>
			</SliderDots>
		</div>
	);
}
