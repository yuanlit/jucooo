import styled from 'styled-components'

const cityListStyle = styled.div `
width: 100%;
height:100vh;
position: fixed;
background: white;
z-index:4;

overflow:scroll;
.title {
    height: 1.3rem;
    width:100%;
    line-height:1.3rem;
    background:white;
    text-align:center;
    font-size: .5rem;
    position: fixed;
    left:0;
    top:0;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    i {
        position: absolute;
        left: .3rem;
        display:inline-block;
        height:1.3rem;
        width:1rem;
        line-height:1.3rem;
        font-size:1rem;
    }
}
ul {
    margin-top:1.3rem;
    text-align:left;
    width: 100%;
    box-sizing: border-box;
    div {
        .min_title{
            background:	WhiteSmoke;
            box-sizing: border-box;
            width: 100%;
            padding:0.2rem .9rem;
            font-size:.6rem;
        }
        background:white;
        li {
            text-align:left;
            font-size:.4rem;
            height:1.2rem;
            line-height:1.2rem;
            padding: 0 .8rem;
            border-bottom: 1px solid #ddd;
        }
    }
}
`

export default cityListStyle