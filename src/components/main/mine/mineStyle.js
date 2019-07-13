import styled from 'styled-components'

const mineStyle = styled.div`
margin-bottom: 2rem;
width: 100vw;
overflow:hidden;
position: relative;
height:auto;
.top_box {
    width:100%;
    .bg {
        position: relative;
        left:0;
        top:0;
    }
    .userInfo {
        box-sizing:border-box;
        top:.5rem;
        position: absolute;
        width:100%;
        display:flex;
        .headPro {
            border-radius:50%;
            border: 1px solid #ccc;
            width:1.7rem;
            height:1.7rem;
            margin-left:.4rem;
            overflow:hidden;
            img {
                width:100%;
            }
        }
        .uname {
            margin-left:.3rem;
            flex:6;
            h2 {
                margin:.4rem;
                font-size:.6rem;
            }
            .quit {
                background:wheat;
                padding: .2rem;
                width:1.6rem;
                text-align:center;
            }
        }
        .icon {
            flex:1.5;
            display:flex;
            justify-content:center;
            align-items:center;
            i {
                font-size:.8rem;
                color:coral;
            }
        }
    }
}

img {
    width:100%;
}

`

export default mineStyle