import styled from 'styled-components'

const Login = styled.div `
box-sizing : border-box;
width : 100%;
height: 100vh;
position: fixed;
left:0;
top:0;
z-index:5;
padding: 1.2rem .7rem 1.2rem;
background: url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png);
    .quit {
        position: absolute;
        width: 1rem;
        height:1rem;
        left: .5rem;
        top:.2rem;
        i {
            font-size: 1rem;
        }
    }
    .title {
        margin-top : 2.5rem;
        font-size: .6666rem;
    }
    .login_box {
        width: 100%;
        margin: 2rem 0 .6rem;
        form {
            text-align: center;
            ul {
                margin-bottom: .8rem;
                li {
                    height: .7rem;
                    margin:.4rem 0;
                    text-align:left;
                    font-size: 0.38267rem;
                    input {
                        outline:none;
                        border: none;
                        background:none;
                    }
                    border-bottom: 0.02133rem solid #666;
                }
            }
            button {
                width:7.5rem;
                height: 1.2rem;
                border-radius : .6rem;
                font-size: .6rem;
                color: #fff;
                background: -webkit-gradient(linear, left top, right top, from(#ff9a34), to(#ff4d4a));
            }
        }
    }
    .setInfo {
        height: .9rem;
        line-height :.9rem;
        span {
            font-size:.34rem;
        }
        .forget{
            float : left;
        }
        .yz {
            float : right;
        }
    }
    .footer_icon {
        padding: 0 2rem;
        margin-top:4rem;
        height: .7rem;
        display: flex;
        justify-content:space-around;
        i {
            font-size: .7rem;
        }
        .fa-qq{
            color: pink;
        }
        .fa-weibo {
            color: orange;
        }
    }

`


export default Login