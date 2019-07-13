import styled from "styled-components"

const FootStyle = styled.ul `
	width: 100%;
	display: flex;
	position: fixed;
	height:1.5rem;
	bottom: 0;
	left: 0;
	align-items: center;
	justify-content: space-around;
	border-top: 1px solid #eee;
	background: white;
	li{
		a {
			span {
			display: block;
			width:100%;
			text-align:center;
			color: #666;
			font-size:.2.7rem;
		}
		img {
			width: .7rem;
			height:.7rem;
			margin:.1rem;
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