import styled from "styled-components"

const ShowInfoStyle = styled.div`
	overflow: hidden;
	background-color: #f5f5f5;
	.brief__primary__fg{
		height: 6.12rem;
		position: relative;
		/* height: 6.12rem; */
		overflow: hidden;
		/* background: #f40; */
		.bgi{
			position: absolute;
			left: 0;
			right: 0;
			height: auto;
			background-color: #b8abab;
			/* -webkit-filter: blur(.53333rem); */
			filter: blur(.53333rem);
		}
		.title{
			position: relative;
    		height: 1.18667rem;
			.back{
				display: block;
				height: 1.18667rem;
				background: url(./../../../img/back.png) no-repeat 50%;
				background-size: .24rem .48rem;
				width: 1.04rem;
				position: absolute;
				left: 0;
				}
			.span{
				text-align: center;
				font-size: .48rem;
				font-weight: 700;
				color: #fefefe;
				height: 1.18667rem;
				line-height: 1.18667rem;
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				}
			.like{
				background-image: url(./../../../img/xin.png);
				background-size: .53333rem .53333rem;
				background-repeat: no-repeat;
				background-position: 50%;
				width: .93333rem;
				height: 1.18667rem;
				display: block;
				position: absolute;
				top: 0;
				right: 1.13333rem;
				}
			.zhuye{
				flex-grow: 0;
				background-image: url(./../../../img/zhuye.png);
				background-size: .53333rem .53333rem;
				background-repeat: no-repeat;
				background-position: 50%;
				width: .93333rem;
				height: 1.18667rem;
				display: block;
				position: absolute;
				top: 0;
				right: .2rem;
				}
			
			}
		.content{
			display: flex;
			padding: 0 .4rem;
			position: relative;
			img{
				width: 2.93333rem;
				height: 4rem;
				margin-top: .4rem;
				border-radius: .10667rem;
				background-color: #aaa;
				flex-shrink: 0;
				}
			.contentInfo{
				margin-top: .54667rem;
				margin-left: .38667rem;
				display: flex;
				flex-direction: column;
				div{
					font-size: .50667rem;
					line-height: .61333rem;
					font-weight: 700;
					color: #fefefe;
					}
				}
			.infoPrice{
				align-items: flex-end;
				padding-bottom: .21333rem;
				flex-grow: 1;
				display: flex;
				}	
			}
		}
	.date{
		padding: 0 .4rem .57333rem;
		display: flex;
		.dateInfo{
			.dateInfoTime{
				margin-top: .78667rem;
				font-size: .48rem;
				display: flex;
				align-items: center;
				color: #232323;
				.dateMonth{
					display: inline-block;
					font-weight: 700;
					height: .48rem;
					line-height: .48rem;
					font-size: .48rem;
				}
				.dateweek{
					display: inline-block;
					font-size: .32rem;
					height: .48rem;
					line-height: .48rem;
					margin-left: .12rem;
				}
			}
			.datePlace{
				font-size: .42667rem;
				font-weight: 700;
				color: #232323;
				margin-top: .42667rem;
				margin-right: 1.52rem;
				line-height: .61333rem;
			}
		}
		.point{
			flex-shrink: 0;
			margin-top: .88rem;
			width: 1.06667rem;
			height: 1.06667rem;
			background-image: url(./../../../img/local.png);
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: .48rem .58667rem;
			background-color: #ededed;
			outline: none;
			border-radius: 50%;
			-ms-flex-positive: 0;
			flex-grow: 0;
		}
	}
	.plus{
		background: #fefefe;
		padding-bottom: .53333rem;
		.base-tips{
			
		}
	}

	
`
export default ShowInfoStyle