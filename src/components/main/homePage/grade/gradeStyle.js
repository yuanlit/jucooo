import styled from 'styled-components'

const GradeStyle = styled.div`
width: 100%;
box-sizing: border-box;
height:1.2rem;
border-bottom: 1px solid #e7e7e7;
    .title_box {
        padding: 0 .6rem;
        height: 100%;
        display:flex;
        justify-content: space-between;
        div {
            height: 1.2rem;
            line-height:1.2rem;
            display:flex;
            align-items:center;
            i {
                font-size: .8rem;
            }
            h3 {
                font-size:.46rem;
                font-weight:400;
            }
        }
        .right{
            h3 {
                transform:translateY(-.2rem);
                font-size:.8rem;
            }
        }
    }
    .grade_box {
        border-bottom: 1px solid #e7e7e7;
        width:100%;
        text-align:center;
        position: relative;
        height: 1.8rem;
        display:flex;
        justify-content:center;
        align-items:center;
        box-sizing: border-box;
        .mixi {
            position: absolute;
            right:.22rem;
            top: .666rem;
            color: #b2b2b2;
        }
        .grade {
           i {
               color:orangered;
               font-size:.5rem;
               margin:.22rem;
           }
           span {
               font-size:.666rem;
           }
        }
    }
    .select_box {
        border-bottom: .3rem solid #dfdfdf;
        .select {
            padding: 0 .9rem;
            display:flex;
            height: 1.1rem;
            color: #666;
            justify-content:space-around;
            align-items: center;
            font-size:.3444rem;
            i {
                margin: .2rem;
                font-size:.4rem;
            }
        }
    }
`
export default GradeStyle