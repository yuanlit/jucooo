import styled from "styled-components"


const TourSwiperStyle = styled.div `
margin:1.6rem 0 1rem .5rem;
height:6rem;
.title_box {
  overflow: hidden;
  height: .91333rem;
  line-height:.91333rem;
  h3 {
    font-size: .53333rem;
    font-weight: 700;
    color: #232323;
    float: left;
    line-height: .61333rem;
  }
  i {
    display:inline-block;
    float: right;
    font-size:.9rem;
    line-height: .61333rem;
    height: .61333rem;
    transform:translateX(-.8rem)
  }
}
.swiper-container {
  margin-top: .5rem;
  .swiper-wrapper {
    width: 100%;
    .swiper-slide{
      width: 5rem;
      text-align: center;

      .imgBox {
        width: 100%;
        img{
          width: 100%;
        }
      }
      h3 {
        height: .66667rem;
        line-height: .66667rem;
        font-size: .45333rem;
        color: #232323;
        margin-top: .33333rem;
        width: 100%;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        font-size: .34667rem;
        height: .53333rem;
        line-height: .53333rem;
        color: #666;
        text-align: center;
      }
    }
    .swiper-slide:not(.swiper-slide-active){
      transform: scale(0.8);
	}
  }
}
`
export default TourSwiperStyle