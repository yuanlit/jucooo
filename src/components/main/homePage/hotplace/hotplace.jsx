/* eslint-disable no-unused-expressions */
import React, { PureComponent} from 'react'
import { connect } from 'react-redux'
import { loadListDataAsync } from './actionControl'
import HotPlaceStyle from './hotplaceStyle'
import Swiper from "swiper";
import { withRouter } from 'react-router-dom'
let jiantou = require("@/img/jiantou.png")

// import { loadListDataAsync } from './actionControl'

class HotPlace extends PureComponent {
  
  render() {
   
    
    return (
      <HotPlaceStyle>
        <div className="title" onClick={this.goto.bind(this)}>
          <p>热门场馆</p>
          <img alt="图片丢失" src={jiantou} />
        </div>
        <div className="swiper-container" id="swp1">
          <div className="swiper-wrapper">
            {
              
             this.props.theatre_list.map((item, index) => {
                // console.log(item.getIn(['show_list',1]).get('show_time'));

                  return (
                    <div key={index} className="swiper-slide">
                      <div className="info">
                        <div className="venue-info clear">
                          <div className="venue-icon">
                            <a href={item.get("theatre_url")}>
                            <img src={item.get('pic')} />
                            </a>
                          </div>
                          <div className="venue-name">
                            <h3>
                              <a href={item.get('show_list_url')}>{item.get('name')}</a>
                            </h3>
                            <p>{item.get('count')}场在售演出</p>
                            
                          </div>
                          <a href={item.get('theatre_url')} className="diandiandian"></a>
                        </div>
                        <div className="time-shaft">
                          <p className="time-shaft-left">
                            <span className="date">{item.getIn(['show_list',0]).get('show_time')}</span>
                            <span className="circle"></span>
                          </p>
                          <p className="time-shaft-right">
                            <span className="date">{item.getIn(['show_list',1]).get('show_time')}</span>
                            <span className="circle"></span>
                          </p>
                        </div>
                        <ul className="show-list">
                         
                              <li className="item">
                            <a href={item.get('schedular_url')}>
                              <img src={item.get('pic')} />
                            </a>
                          </li>
                          <li className="item">
                            <a href={item.getIn(['show_list',0]).get('schedular_url')}>
                              <img src={item.get('pic')}/>
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  )
             
              })
            }

          </div>
        </div>

      </HotPlaceStyle >
    )
  }
  goto(){
    this.props.history.push('/theater')
  }
  componentDidMount() {
    this.props.getHotTheatre()
   
 
  }

  componentDidUpdate() {
    new Swiper('#swp1', {
      pagination: '.swiper-pagination',
      // slidesPerView: 1.2,
      paginationClickable: true,
      spaceBetween: 30
    });
     

  }
}
const mapStateToProps = (store) => {
  return {
    theatre_list: store.getIn(["hotPlaceReducer", 'theatre_list'])
  }
}


const mapDispathToProps = (dispatch) => {
  return {
    getHotTheatre() {
      dispatch(loadListDataAsync(dispatch));

      
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)( withRouter(HotPlace))