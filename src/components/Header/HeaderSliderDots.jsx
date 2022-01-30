import styled from "@emotion/styled";

const SliderDots = styled("div")`
	li.slick-active button {
		color: white;
	}

	.slick-dots li button {
		color: white;
		border: 2px solid white;
		border-radius: 50%;
		width: 15px;
		height: 15px;
	}

	.slick-dots li button::before {
		color: transparent;
	}

	.slick-dots li button .slick-active {
		background-color: white;
	}
`;

export default SliderDots;
