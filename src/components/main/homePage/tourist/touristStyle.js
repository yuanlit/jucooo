import styled from "styled-components"
const TouristStyle = styled.div`
    .clear{
        clear: both;
        content:'';
        overflow:hidden;
        display: block;
    }
    .navbar{
        background: #fcfcfc !important;
    }
   .content{
    width:100%;
       .show-wrap{
        background: #fff;
        padding: 0.3rem 0.45rem 0;
           .show-item{
            height: 3.3rem;
            padding: 0.25rem 0 0.4rem;
                .show-left{
                    display: block;
                    width: 2.3rem;
                    height: 3.2rem;
                    float:left;
                    margin-right: .3rem;
                    position: relative;
                    border: 1px solid #f2f2f2;
                    background: #f0f0f0 url(../images/index/bg1.png) no-repeat center center;
                    background-size: 2.5386666667rem 2.5386666667rem;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                        border: 1px solid #fff;
                    }
                }
                .show-right{
                    width: 241px;
                    float: left;
                    .show-tt{
                        font-size: 0.4rem;
                        padding-top: 0.1rem;
                        margin-bottom: 0.2rem;
                        overflow: hidden;
                        display: -webkit-box;
                        font-weight: normal;
                        color: #666;
                    }
                    p{
                        font-size: 0.1rem;
                        color: #999;
                        margin-bottom: 0.18rem;
                    }
                   .city-wrap{
                       float: left;
                       a{
                        width: 1.6rem;
                        height: .6rem;
                        text-align: center;
                        border: 1px solid #e6e6e6;
                        border-radius: 0.1066666667rem;
                        display: -ms-flexbox;
                        color: #666;
                        display: flex;
                        justify-content: center;
                        align-items: Center;
                        margin: 0 .2rem .1rem 0;
                       }
                   } 
                }
            }
           }
       }
   }

`

export default TouristStyle