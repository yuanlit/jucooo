/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import axios from "axios";
import { loadListDataAsync} from './actionControl'
import { PullToRefresh} from 'antd-mobile';
import ShowtimeStyle from './showtimeStyle'

let jiatouzuo = require("@/img/jiantouzuo.png")
let juban = require("@/img/juban.png")


class Showtime extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params)
    this.state = {
      show_list: [],
      num:1,
      refreshing: false
      

    }
  }
  render() {
    // console.log(this.state.show_list);


    // console.log(this.state.show_list);
    return (
      <ShowtimeStyle>
        <div className="page show_library">
          <header className="head_nav">
            <span className="head_icon back_icon" onClick={this.goto.bind(this)} style={{ background: `url(${jiatouzuo}) no-repeat .4rem 50%`, backgroundSize: ".53333rem .53333rem" }} ></span>
            <h3 className="title text-single">演出</h3>
          </header>
          <div className="show_type_wrap">
            <div className="show_type">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide" onClick={this.showEdit.bind(this, 0)}>全部</div>
                  {
                    this.props.show_category_list.map((item, index) => {
                      // console.log(item.get("category_id"));

                      return (
                      
                        <div className="swiper-slide" key={index} onClick={this.showEdit.bind(this, item.get("category_id"))}>{item.get("name")}</div>
                      )
                    })
                  }

                </div>
              </div>

            </div>
          </div>
          <div className="library-wrap">
            <div className="recommend-wrap">
              <ul className="recommend-list">
              <PullToRefresh
                direction={'up'}
                distanceToRefresh={60}
                refreshing={this.state.refreshing}
                onRefresh={()=>{
                  setTimeout(() => {
                    this.setState({'refreshing':false})
                    this.setState({num:this.state.num+1})
                    this.showEdit(this.state.num,res=>{
                      this.setState({
                        show_list:this.state.show_list.concat(res.data.data.list)
                      })
                    })
                    return
                  }, 1000);
                }}
                >
                {
                  this.state.show_list.map((item, index) => {

                    return (
                      <li key={index} >
                        <div className="show-icon">
                          <a href={item.url}>
                            <img src={item.pic} />
                            <div className="logo_i">
                              <img src={juban} alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="item-desc">
                          <div className="show-date">
                            <strong>{item.show_time_top}</strong>
                            {item.show_time_bottom}
                          </div>
                          <a href={item.url}>
                            <h3>{item.name}</h3>
                          </a>
                          <p className="venue">{item.city_name} | {item.venue_name}</p>
                          <p className="price">
                            <strong>¥{item.min_price}</strong>起
                          </p>
                        </div>
                      </li>
                    )
                  })
                }
                </PullToRefresh>
              </ul>
            </div>
          </div>

        </div>



      </ShowtimeStyle>
    )
  }
  goto(){
    this.props.history.goBack()
    // console.log(this.props)
  }
  // https://m.juooo.com/Search/getShowList?category=0&city_id=0&page=1&keywords=&&version=5.1.4&referer=2
  showEdit = (type,event,num) => {
    // console.log(num)
    axios({
      method: 'get',
      url: 'apis/Search/getShowList',
      params: {
        category: type,
        city_id: 1,
        page:num,
        version: '5.1.4',
        referer: 2
      }
    }).then((res) => {
      // console.log(event)
      let show_list = [...res.data.data.list]
      this.setState({ show_list })
      // console.log(show_list)
     
    
    })


    // this.setState({ modalType: type, modalVisible: true })
  };
  componentDidMount() {
    this.props.getRecommendShow()
    // this.props.getShowList()
    this.showEdit(this.props.match.params.aaa)


  }
}
const mapStateToProps = (store) => {
  // console.log(store);

  return {
    show_category_list: store.getIn(['showcategoryReducer', 'show_category_list']),
    show_list: store.getIn(['showcategoryReducer', 'show_list'])
  }
}


const mapDispathToProps = (dispatch) => {
  return {
    getRecommendShow() {
      dispatch(loadListDataAsync(dispatch))
    },
    // getShowList() {
    //   dispatch(loadListDataAsync03(dispatch))
    // },

  }
}
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Showtime))