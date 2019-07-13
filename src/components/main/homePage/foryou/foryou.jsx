/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadListDataAsync } from './actionControl'
import ForYouStyle from './foryouStyle'
import { PullToRefresh} from 'antd-mobile';
let juban = require("@/img/juban.png")

// import { loadListDataAsync } from './actionControl'
// function genData() {
//   const dataArr = [];
//   for (let i = 0; i < 20; i++) {
//     dataArr.push(i);
//   }
//   return dataArr;
// }

class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      num:2
    };
  }
  render() {
    return (
      <ForYouStyle>
        <div className="title">
          <p>为你推荐</p>
          {/* <span className="logo_i"></span> */}
        </div>
        <div className="info">
          <ul>
          <PullToRefresh
          direction={'up'}
          distanceToRefresh={60}
          refreshing={this.state.refreshing}
          onRefresh={()=>{
            // console.log(this.state.num++);
            
            this.props.getRecommendShow(this.state.num++)
            setTimeout(() => {
              this.setState({'refreshing':false})
              return
            }, 1000);
          }}
          >
         
            {
              this.props.recommend_show_list.map((item, index) => {
                // console.log(this.props.recommend_show_list)
                // console.log(item.get('url') )

                return (
                  <li key={index} >
                    <div className="show-icon">
                      <a href={item.get('url')}>
                        <img src={item.get('schePic')} />
                        <div className="logo_i">
                          <img src={juban} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="item-desc">
                      <div className="show-date">
                        <strong>{item.get('show_time')}</strong>
                        {item.get('week')}
                      </div>
                      <a href={item.get('url')}>
                        <h3>{item.get('description')}</h3>
                      </a>
                      <p className="venue">{item.get('c_name')} | {item.get('v_name')}</p>
                      <p className="price">
                        <strong>¥{item.get('low_price')}</strong>起
                          </p>
                    </div>
                  </li>
                )
              })
            }
            </PullToRefresh>
          </ul>
        </div>
      
      </ForYouStyle>
    )
  }
  componentDidMount() {
    this.props.getRecommendShow(1)
  }
}
const mapStateToProps = (store) => {
  return {
    recommend_show_list: store.getIn(['forYouReducer', 'recommend_show_list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getRecommendShow(num) {
      // console.log(num);
      
      // let a=1
      dispatch(loadListDataAsync(dispatch,num))
      // a++
    // console.log(this.props);
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(ForYou)