import styled from "styled-components"
const NavStyle = styled.div `
div {
  z-index: 3;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  box-shadow: 0 -2px 10px #ccc;
  width: 100%;
  height: 1.2rem;
  line-height: .7rem;
  div {
    position: absolute;
    color: #f5f5f5;
    text-align: center;
    height: .7rem;
    margin: .2rem;
    width:auto;
    padding:0 .1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid hsla(0, 0%, 88%, 0.2);
    span {
      margin: .05rem;
      font-size: .45rem;
      font-weight: bold;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    i {
      font-size: .5rem;
      padding:.1rem;
      vertical-align: middle;
      margin-top: -.2rem;
      position: relative;
    }
  }
  .site {
    left: .01rem;
    height: .7rem;
    /* background-color: #f5f5f5; */
    border-radius: .3rem;
    line-height: .7rem;
  }
  .search {
    left: 18.5%;
    width: 6rem;
    height: .7rem;
    border-radius: .5rem;
    color: #f5f5f5;
    img {
      width: .7rem;
      position: absolute;
      left: .2rem;
	  top:0rem;
    }
    .hot {
      position: absolute;
      left: 1.4rem;
	  font-weight:400;
	  font-size:.4rem;
      display: inline-block;
      height: .7rem;
      line-height: .7rem;
    }
  }
  .share {
    padding:0;
    right: .14rem;
    top: .04rem;
    height: .7rem;
    width: .7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.title01 {
  z-index: 4;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  box-shadow: 0 -2px 10px #ccc;
  width: 100%;
  height: 1.2rem;
  line-height: .7rem;
  background:#ffffff;
  div {
    position: absolute;
    color: #f5f5f5;
    text-align: center;
    height: .7rem;
    margin: .2rem;
    width:auto;
    padding:0 .1rem;
    border:none;
    background:#ffffff;
    box-shadow:none;
    span {
      margin: .05rem;
      font-size: .45rem;
      font-weight: bold;
      color: #232323;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    i {
      font-size: .5rem;
      padding:.1rem;
      vertical-align: middle;
      margin-top: -.2rem;
      position: relative;
      color:orangered;
    }
  }
  .site {
    left: .01rem;
    height: .7rem;
    /* background-color: #f5f5f5; */
    border-radius: .3rem;
    line-height: .7rem;
  }
  .search {
    left: 18.5%;
    width: 6rem;
    height: .7rem;
    border: 1px solid hsla(0,0%,88%,.2);
    border-radius: .5rem;
    color: #b3b3b3;
    background:#f5f5f5;
    img {
      width: .7rem;
      position: absolute;
      left: .2rem;
	  top:0rem;
    }
    .hot {
      position: absolute;
      left: 1.4rem;
	  font-weight:400;
	  font-size:.4rem;
      display: inline-block;
      height: .7rem;
      line-height: .7rem;
    }
  }
  .share {
    padding:0;
    right: .14rem;
    top: .04rem;
    height: .7rem;
    width: .7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
`
const SectionStyle = styled.div `
    width: 100%;
    box-sizing: border-box;
    padding:.7rem .5rem 0;
    min-height: 8rem;
    .icon1_box {
      width: 100%;
      display:flex;
      a {
        display:inline-block;
        flex:1;
        height:2rem;
        text-align:center;
        img {
          width:80%;
          padding: 0 10%;
        }
        span{
          color: #000;
        }
      }
    }
    .luomiou {
      margin-top: .8rem;
      width: 100%;
      margin-bottom:1rem;
    }
    .icon2_box {
      width: 100%;
      .icon2 {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          border-radius: 4%;
          display:flex;
          width: 30%;
          margin: .13rem .12rem;
          text-align: center;
          flex-direction: column;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 10px #dcdcdc;
          h3 {
            font-size: .5rem;
            margin: .3rem 0;
          }
          div{
            p {
              .c_ff6 {
                color: orange;
              }
            }
          }
          img {
            margin-left:30%;
            width: 1.3rem;
          }
        }
        li:nth-child(-n+2) {
          width: 46%;
          height: 2.6rem;
          position: relative;
          h3 {
            margin-top: .7rem;
            width: 70%;
          }
          div {
            width: 70%;
          }
          img {
              position: absolute;
              left: 37%;
              top:20%;
            }
        }
      }
    }
`
export {
  NavStyle,
  SectionStyle
}