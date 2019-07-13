import styled from 'styled-components'

const Search = styled.div `
position: fixed;
width: 100%;
height:100%;
z-index:6;
background:white;
overflow:scroll;
.hot_box {
    margin: .7rem .5rem 0;
    h3 {
        font-size: .34667rem;
        font-weight: 400;
        color: #666;
    }
    .tag {
        margin-top:.7rem;
        span {
            float:left;
            display:block;
            font-family: PingFang-SC-Medium;
            padding: .166rem .76667rem;
            height: .43333rem;
            line-height: .43333rem;
            font-size: .37333rem;
            color: #232323;
            background-color: #dcdcdc;
            border-radius: .08rem;
            margin-right: .74667rem;
            margin-bottom: .44667rem;
        }
    }
}
`

export default Search