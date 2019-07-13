import styled from "styled-components"


const hotSwiperStyle = styled.div `
margin:.8rem 0 1rem .5rem;
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
  padding-top:.6rem;
  height:100%;
  box-sizing: border-box;
  .swiper-slide {
      border-radius:4%;
      width:100%;
      text-align: center;
      font-size: .4rem;
      background: #fff;
      overflow: hidden;
      div {
        width:100%;
        margin-bottom:.3rem;
        img {
        width:100%;
      }
      }
      h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
}
`
export default hotSwiperStyle