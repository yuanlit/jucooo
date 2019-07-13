import styled from "styled-components"
const CaledarStyle = styled.div`

    .info {
        padding:0 0.3rem
    margin-top: 0.53333rem;
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
          overflow: hidden;
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
`
export default CaledarStyle 