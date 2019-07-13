import styled from "styled-components"
const BannerStyle = styled.div `
	width:100%;
	height:5.2rem;
	.swiper-container {
		width:100%;
		height:100%;
		.swiper-wrapper {
			.swiper-slide {
				img {
					width:100%;
					height:100%;
				}
			}
		}
		.swiper-pagination {
			.swiper-pagination-bullet {
				width:.16rem!important;
				height:.16rem!important;
			}
			.swiper-pagination-bullet-active {
				display:inline-block!important;
				width:.4rem!important;
				background:rgba(255,255,255,.8)!important;
				border-radius:10px;
			}
		}
	}
`
export default BannerStyle