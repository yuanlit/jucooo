import styled from 'styled-components'

const tagListStyle = styled.li `
.tag_box {
    width: 100%;
    box-sizing:border-box;
    padding: 0 .6rem;
    margin-top:.7rem;
    display:flex;
    .img_box {
        width:30vw;
        margin-right:.5rem;
        img {
            width:30vw;
        }
    }
    .info_box {
        width:60%;
        .time {
            color: #232323;
            font-size: .42667rem;
            font-weight:700;
            margin: .4rem 0;
        }
        h2 {
            font-size: .45333rem;
            line-height: .6rem;
            min-height: .6rem;
            max-height: 1.2rem;
            margin-top: .33333rem;
            overflow:hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .siteInfo {
            width:6rem;
            margin-top:.4rem;
            i {
                color: #666;
                font-style:normal;
                >span {
                    display:inline-block;
                    width:69%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    color: #666;
                }
            }
        }
        .money {
            padding: .4rem 0 0 .1rem;
            b {
                color: #ff6743!important;
                font-size: .42667rem;
                letter-spacing: 0;
                margin-right: .13333rem;
                font-weight: 400;
            }
            span {

            }
        }

    }
}

`

export default tagListStyle