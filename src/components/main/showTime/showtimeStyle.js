import styled from "styled-components"




const ShowTime = styled.div`
.page{
    width: 100%;
    height: 100%;
}
.show_library{
    padding-top: 2.61333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
}
.head_nav{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.17333rem;
    line-height: 1.17333rem;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
}
.head_nav .head_icon.back_icon{
    left: 0;
   
    background-size: .53333rem .53333rem;
}
.head_nav .head_icon{
    position: absolute;
    top: 0;
    display: inline-block;
    width: 1.33333rem;
    height: 100%;
}
.head_nav .title{
    font-size: .48rem;
    font-weight: 400;
    color: #232323;
    padding: 0 1.33333rem;
}
.show_type_wrap{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: .4rem;
    padding-bottom: .26667rem;
    padding-top: .26667rem;
    background-color: #fefefe;
    position: fixed;
    left: 0;
    top: 1.17333rem;
    z-index: 1;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.show_type_wrap .show_type{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 7.33333rem;
    margin-right: .13333rem;
    overflow: hidden;
}
.show_type_wrap .show_type ul{
    white-space: nowrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.show_type_wrap .show_type li{
    font-size: .4rem;
    color: #232323;
    padding: 0 .13333rem;
    border-bottom: .04rem solid transparent;
    border-radius: .02667rem;
    height: .64rem;
    line-height: .64rem;
    margin-right: .4rem;
}

/* ----- */
.logo_i {
  position: absolute;
  left: 0.10667rem;
  top: -0.02667rem;
  width: 0.77333rem;
  height: 0.93333rem;
  display: block;
  background:  50% no-repeat;
  background-size: 100%;
  z-index: 3;
  img{
    height: 100%;
    width: 100%;

    z-index:  3;
  }
}
.library-wrap{
    width: 100%;
    /* position: fixed; */
    left: 0;
    top: 2.61333rem;
    bottom: 0;
   
}
.recommend-wrap{
    padding-left: .4rem;
    padding-right: .4rem;
}
.recommend-list{
    li {
      display: flex;
      margin-bottom: 0.86667rem;
      position: relative;
      list-style: none;
      .show-icon {
        width: 2.93333rem;
        height: 4rem;
        border-radius: 0.10667rem;
        border: 1px solid #ebebeb;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          border: none;
          border-color: transparent;
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }
      }
      .item-desc {
        flex: 1;
        margin-left: 0.4rem;
        color: #232323;
        padding-top: 0.13333rem;
        .show-date {
          font-size: 0.32rem;
          height: 0.64rem;
          line-height: 0.64rem;
          letter-spacing: 1px;
          color: #666;
          strong {
            color: #232323;
            font-size: 0.42667rem;
            line-height: 0.64rem;
            letter-spacing: 1px;
          }
        }
        a {
          display: block;
          h3 {
            width: 100%;
            font-size: 0.45333rem;
            line-height: 0.6rem;
            min-height: 0.6rem;
            max-height: 1.2rem;
            margin-top: 0.33333rem;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: bold;
            color: #232323;
          }
        }
        .venue {
          margin-top: 0.33333rem;
          width: 5.33333rem;
          font-size: 0.32rem;
          height: 0.64rem;
          line-height: 0.64rem;
          color: #666;
          /* overflow: hidden; */
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          font-size: 0.29333rem;
          color: #999;
          height: 0.48rem;
          line-height: 0.48rem;
          margin-top: 0.26667rem;
          strong {
            font-size: 0.42667rem;
            letter-spacing: 0;
            margin-right: 0.13333rem;
            font-weight: 400;
            color: #ff6743 !important;
            line-height: 0.48rem;
          }
        }
      }
    }

} 

/* ------- */
.swiper-container {
        width: 100%;
        height:.64rem;
    }
    .swiper-slide {
        text-align: center;
        font-size:  .4rem;
        line-height: .64rem;
        background: #fff;
        width: 250px;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }


`

export default ShowTime