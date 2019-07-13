import styled from 'styled-components'

const HotPlace = styled.div`
   padding-top: 0.53333rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
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
    .info {
      height: 6.92rem;
      margin-right: 20px;
      width: 6.77333rem;
      border-radius: 0.10667rem;
      border: 1px solid #ebebeb;
      padding: 0.53333rem 0.45333rem;
      position: relative;
      .venue-info {
        height: 1.36rem;
        .venue-icon {
          float: left;
          width: 1.33333rem;
          height: 1.33333rem;
          border-radius: 0.10667rem;
          border: 1px solid #ebebeb;
          img {
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
          }
        }
        .venue-name {
          margin-left: 0.26667rem;
          width: 3.33333rem;
          float: left;
          h3 {
            margin-top: 0.06667rem;
            font-size: 0.45333rem;
            color: #232323;
            height: 0.6rem;
            line-height: 0.6rem;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              text-decoration: none;
              outline: none;
              color: #232323;
              line-height: 0.6rem;
              font-weight: 700;
              font-size: 0.45333rem;
            }
          }
          p {
            margin-top: 0.2rem;
            font-size: 0.32rem;
            color: #666;
            height: 0.4rem;
            line-height: 0.4rem;
          }
        }
        .diandiandian {
          float: right;
          text-decoration: none;
          outline: none;
          color: #232323;
          width: 0.37333rem;
          height: 0.37333rem;
          background-image: url(./../../../../img/diandiandian.png);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50%;
          margin-top: 0.49333rem;
        }
      }
      .time-shaft {
        width: 100%;
        height: 0.05333rem;
        background-color: #ebebeb;
        border-radius: 0.02667rem;
        margin-top: 1.06667rem;
        position: relative;
        left: 0;
        right: 0;
        .time-shaft-left {
          width: 50%;
          height: 0.90667rem;
          position: absolute;
          text-align: center;
          bottom: -0.06667rem;
          left: 0;
          .data {
            font-size: 0.37333rem;
            color: #b3b3b3;
            height: 0.46667rem;
            line-height: 0.46667rem;
            text-align: center;
          }
          .circle {
            width: 0.18667rem;
            height: 0.18667rem;
            background-color: #ccc;
            border-radius: 50%;
            margin: 0.25333rem auto 0;
            display: block;
            z-index: 999999999;
          }
        }
        .time-shaft-right {
          width: 50%;
          height: 0.90667rem;
          position: absolute;
          text-align: center;
          bottom: -0.06667rem;
          right: 0;
          .data {
            font-size: 0.37333rem;
            color: #b3b3b3;
            height: 0.46667rem;
            line-height: 0.46667rem;
            text-align: center;
          }
          .circle {
            width: 0.18667rem;
            height: 0.18667rem;
            background-color: #ccc;
            border-radius: 50%;
            margin: 0.25333rem auto 0;
            display: block;
          }
        }
      }
      .show-list {
        margin-top: 0.46667rem;
        display: flex;
        justify-content: space-between;
        list-style: none;
        .item {
          width: 2.85333rem;
          height: 3.89333rem;
          border-radius: 0.10667rem;
          border: 1px solid #ebebeb;
          overflow: hidden;
          list-style: none;
          img {
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
`

export default HotPlace