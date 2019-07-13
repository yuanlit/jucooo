/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadListDataAsync } from './actionControl'
import ShowListStyle from './showlistStyle'
import Swiper from "swiper";
import { withRouter } from 'react-router-dom'
let jiantou = require("@/img/jiantou.png")



// import { loadListDataAsync } from './actionControl'

class showlist extends Component {
  render() {
    
    return (
      <div>
        {
          this.props.show_list.map((item, index) => {
            // console.log(item);
            return (
              <ShowListStyle key={index}>
                <div className="title" onClick={this.togo.bind(this,item)}>
                  <p>{item.get('title')}</p>
                  <img src={jiantou} alt ="图片丢失"/>
                </div>
                <div className="bg">
                  <div className="bg_c">
                    <a href={item.get('search_url')}>
                      <div className="bg_c_img">
                        <img alt ="666" src={item.getIn(['list', 0]).get('pic')} />
                        <p></p>
                        {/* <p v-html="item.list[0].ico"></p> */}
                      </div>
                    </a>
                  </div>
                  <div className="bg_r">
                    <p>
                      <span>{item.getIn(['list', 0]).get('date')}</span>

                      {item.getIn(['list', 0]).get('week')}
                    </p>

                    <h3>{item.getIn(['list', 0]).get('schedular_name')}</h3>
                    <h4>{item.getIn(['list', 0]).get('venue_name')}</h4>
                  </div>
                </div>
                <div className="swiper">
                  <div className="swiper-container" id={index}>
                    <div className="swiper-wrapper">
                      {
                        item.getIn(["list"]).map((el, index) => {
                          // console.log(item);
                          if (index == 0) {
                            return
                          }
                          return (
                            <div className="swiper-slide"  key={index}>
                              <a href={el.get('url')}>
                                <div>
                                  <img src={el.get('pic')} />
                                  <p></p>
                                </div>
                                <h3>{el.get('schedular_name')}</h3>
                                <p><strong>{el.get('low_price')}</strong>起</p>
                              </a>
                            </div>
                          )

                        })
                      }
                    </div>
                  </div>
                </div>
              </ShowListStyle>
            )
          })
        }
      </div>
    )
  }
  togo = (item)=>{
    // console.log(item.toJS());
    console.log(this.props.history);
    this.props.history.push(`/showTime`)
    
  }
  componentDidUpdate(){    
    for (let i = 0; i < this.props.show_list.size; i++) {
      new Swiper( `#${i}` , {
        slidesPerView: 3,
        spaceBetween: 12,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
     
      
    }
  }
  componentDidMount() {
    this.props.getFloorShow()
    // console.log(this.props);
  //  setTimeout(() => {
  //   new Swiper('#swp', {
  //     slidesPerView: 3,
  //     // spaceBetween: 30,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //   });
  //  }, 10000);

  }
}
const mapStateToProps = (store) => {
  // console.log(store);


  return {
    show_list: store.getIn(['showListReducer', 'show_list'])
  }
}


const mapDispathToProps = (dispatch) => {
  return {
    
    getFloorShow() {
      dispatch(loadListDataAsync(dispatch))

    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)( withRouter(showlist))