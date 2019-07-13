import styled from 'styled-components'

const ShowListStyle = styled.div`
  
    padding-top: 0.53333rem;
    padding-left: 0.4rem;
    padding-bottom: 0.93333rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 0.53333rem;
        font-weight: 700;
        color: #232323;
        float: left;
        height: 0.61333rem;
        line-height: 0.61333rem;
      }
    }
    .bg {
      margin-top: 0.53333rem;
      background: rgb(207, 184, 190);
      display: flex;
      .bg_c {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 0.37333rem 0 0.37333rem 0.4rem;
        .bg_c_img {
          width: 2.85333rem;
          height: 3.89333rem;
          border-radius: 0.10667rem;
          border: 1px solid #ebebeb;
          position: relative;
          overflow: hidden;
          img {
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
          }
        }
      }
      .bg_r {
        background-color: rgba(0, 0, 0, 0.2);
        flex: 1;
        padding-left: 0.4rem;
        color: #fefefe;
        padding-top: 0.42667rem;
        p {
          font-size: 0.32rem;
          height: 0.64rem;
          line-height: 0.64rem;
          letter-spacing: 1px;
          span {
            line-height: 0.64rem;
            letter-spacing: 1px;
            font-size: 0.42667rem;
            color: #fefefe;
            font-weight: bold;
          }
        }
        h3 {
          width: 90%;
          font-size: 0.45333rem;
          line-height: 0.6rem;
          max-height: 1.2rem;
          min-height: 0.6rem;
          margin-top: 0.33333rem;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-weight: bold;
          overflow: hidden;
        }
        h4 {
          margin-top: 0.33333rem;
          width: 5.6rem;
          font-size: 0.32rem;
          height: 0.64rem;
          line-height: 0.64rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #fefefe;
        }
      }
    }
    .swiper {
      .swiper-wrapper {
        padding: 0.4rem 0 0 0.4rem;
        .swiper-slide {
          width: 2.85333rem !important;
          img {
            width: 2.85333rem;
            height: 3.89333rem;
            border-radius: 0.10667rem;
            border: 1px solid #ebebeb;
            overflow: hidden;
          }
          h3 {
            width: 2.85333rem;
            font-size: 0.45333rem;
            color: #232323;
            height: 0.66667rem;
            line-height: 0.66667rem;
            margin-top: 0.13333rem;
            font-weight: 700;
            padding-right: 0.4rem;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            font-size: 0.29333rem;
            color: #999;
            height: 0.48rem;
            line-height: 0.48rem;
            margin-top: 0.13333rem;
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
  
`

export default ShowListStyle