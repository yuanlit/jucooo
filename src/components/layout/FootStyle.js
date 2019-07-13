import styled from "styled-components"

const FootStyle = styled.ul `
	width: 100%;
	display: flex;
	position: fixed;
	height:1.34rem;
	bottom: 0;
	left: 0;
	align-items: center;
	justify-content: space-around;
	border-top: 1px solid #eee;
	background: white;
	z-index:4;
	margin-buttom: 0;
	.active_Li {
		.active {
			.active {
				margin-top:1.2rem;
				width:1.5rem;
				height:1.8rem;
				z-index:2;
				position: relative;
				img {
					background:white;
					width:1.1rem;
					left:50%;
					top:0;
					position: absolute;
					transform:translate(-50%,-50%);
				}
			}
		}
	}
	li{
		a {
			span {
			display: block;
			width:100%;
			text-align:center;
			color: #666;
			font-size:.2.7rem;
		}
		div {
			width: .7rem;
			height:.7rem;
			margin:.1rem;
			position: relative;
			overflow:hidden;
			img {
			position: absolute;
			left:0;
			top:0;
			width:.7rem;
			}
		}
		.active {
			img {
			top:-.7rem;
			}
		}
		}
		flex:1;
		display:flex;
		flex-direction:column;
		text-align:center;
		height:100%;
		align-items:center;
		justify-content:center;
		
	}
`
export default FootStyle