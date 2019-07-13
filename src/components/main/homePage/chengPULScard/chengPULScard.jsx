import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { loadListDataAsync } from './actionControl'
import PULScardStyle from './PULScardStyle'
import Swiper from 'swiper'
import Swiper1 from 'swiper'

let jiatouzuo = require("@/img/jiantouzuo.png")
let pulscard = require("@/img/pulscard.png")
let iconchengpulska = require("@/img/icon-chengpulska.png")
let titleline = require("@/img/title_line.png")

let pic_privilegeC = require("@/img/pic_privilegeC.png")
let pic_privilegeG = require("@/img/pic_privilegeG.png")
let pic_privilegeGP = require("@/img/pic_privilegeGP.png")
let pic_privilegeZK = require("@/img/pic_privilegeZK.png")
let pic_privilegeZX = require("@/img/pic_privilegeZX.png")
let pic_privilegeMY = require("@/img/pic_privilegeMY.png")
let pic_privilegeZ = require("@/img/pic_privilegeZ.png")
let pic_privilegeZG = require("@/img/pic_privilegeZG.png")
let pic_privilegeMX = require("@/img/pic_privilegeMX.png")
let pic_privilegeMF = require("@/img/pic_privilegeMF.png")
let pic_privilegeB = require("@/img/pic_privilegeB.png")
let pic_privilegeM = require("@/img/pic_privilegeM.png")

let icon_cardBtn3 = require("@/img/icon_cardBtn3.png")
let icon_offBtn = require("@/img/icon_offBtn.png")
let vip_icon = require("@/img/vip_icon.png")
let coupon = require("@/img/coupon.png")
class PulsCard extends Component {
  constructor() {
    super()
    this.state = {
      getPlusCouponList_list: [],
      Cardproductlist: [],
      getWatchPerScheduleList: [],
      getDiscountScheduleList: []
    }
  }
  render() {
    return (
      <PULScardStyle>
        <header className="head_nav">
          <span className="head_icon back_icon" onClick={this.quit.bind(this)} style={{ background: `url(${jiatouzuo}) no-repeat .4rem 50%`, backgroundSize: ".53333rem .53333rem" }} ></span>
          <h3 className="title text-single">橙PLUS卡</h3>
        </header>
        <div className="plus-privileges" style={{ background: `url(${pulscard}) center center no-repeat`, backgroundSize: "cover" }}>
          <div className="plus-content js-nopurchase">
            <section className="plus-row plus-noPurchase active">
              <div className="plus-cardShape">
                <div className="row-readyText row-noPurchase">
                  <div className="cardType">
                    <div className="cardTxt" style={{ background: `url(${iconchengpulska})  0 0 no-repeat`, backgroundSize: " 3.80267rem" }}></div>
                    <span className="value-card">储值卡</span>
                    <section className="plus-ruleBg">
                      <a href="/Cardproduct/bindCard">
                        <p className="plus-rule">
                          <span>立即绑卡</span></p></a></section></div>
                  <div className="card-noPurchase">
                    <p className="noPurchase-txt2">￥999</p>
                    <p className="noPurchase-txt">开通立返
                            <span className="card-discount">100</span> 元</p>
                  </div></div></div></section></div>
          <section className="privileges-title">
            <div style={{ background: `url(${titleline}) center center no-repeat`, backgroundSize: "5.14133rem 0.04267rem" }}>尊享权益</div>
            <section className="Out-ruleBg">
              <p className="Out-rule">
                <span>使用规则</span>
              </p>
            </section>
          </section>
          <section className="privileges-showLists">
            <section className="showLists-frame">
              <section className="showLists">
                <img src={pic_privilegeC} alt="" />
                <p className="privilegeC-txtAdd">充值返现</p>
                <p className="privilegeC-txt">充值立返100元</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeG} alt="" />
                <p className="privilegeC-txtAdd">优先购票</p>
                <p className="privilegeC-txt">提前购，抢先看</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeGP} alt="" />
                <p className="privilegeC-txtAdd">专属票价</p>
                <p className="privilegeC-txt">专属票，会员独享</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeZK} alt="" />
                <p className="privilegeC-txtAdd">专享折扣</p>
                <p className="privilegeC-txt">会员价，放肆看</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeZX} alt="" />
                <p className="privilegeC-txtAdd">专享券</p>
                <p className="privilegeC-txt">全品类抵用券</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeMY} alt="" />
                <p className="privilegeC-txtAdd">全场包邮</p>
                <p className="privilegeC-txt">国内免邮费</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeZ} alt="" />
                <p className="privilegeC-txtAdd">双倍积分</p>
                <p className="privilegeC-txt">积分可抵扣</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeZG} alt="" />
                <p className="privilegeC-txtAdd">赠观演券</p>
                <p className="privilegeC-txt">用户绑卡送</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeMX} alt="" />
                <p className="privilegeC-txtAdd">明星活动</p>
                <p className="privilegeC-txt">优先参与活动</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeMF} alt="" />
                <p className="privilegeC-txtAdd">免费期刊</p>
                <p className="privilegeC-txt">两季精美期刊</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeB} alt="" />
                <p className="privilegeC-txtAdd">生日专享</p>
                <p className="privilegeC-txt">专享票价优惠</p>
              </section>
              <section className="showLists">
                <img src={pic_privilegeM} alt="" />
                <p className="privilegeC-txtAdd">更多特权</p>
                <p className="privilegeC-txt">敬请期待</p>
              </section>
            </section>

          </section>

          <div className="plus-content js-nopurchase">
            <section id="dialog-confirm" className="plus-row2 row2-mTop js-openBtn">
              <div className="plus-tipBand plus-privilege js-openBtn" style={{ background: `url(${icon_cardBtn3})no-repeat`, backgroundSize: "100%" }}>
                <div className="no-Preferential p-txt">
                  <div className="rtxt"><a href="javasrcipt:;">
                    <p className="ptxt js-openBtn">立即开通</p>
                    <p className="ptxt2 js-openBtn">开通橙PLUS会员卡，限时送
                    <span className="foot-txt">&nbsp;¥&nbsp;100</span>
                    </p>
                  </a>
                  </div>
                </div>
                <div className="card_line isShow js-openBtn">
                  <img src={icon_offBtn} alt="" className="icon_cardLine" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="pre-buy js-exclusive-coupon freeView">
          <div className="zxlist">
            <p className="freeView-txt">专享券</p>
            <i className="fa fa-angle-right fa-lg"></i>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="coupon-card" style={{ background: `url(${coupon}) no-repeat left top`, backgroundSize: "9rem 2.48rem" }}>
                  <div className="coupon_icon">
                    <section className="common_icon vip_icon" style={{ background: `url(${vip_icon}) no-repeat`, backgroundSize: "100%" }}></section>
                  </div>
                  <div className="coupon-cnt">
                    {
                      this.state.getPlusCouponList_list.map((item, index) => {
                        return (
                          <div key={index}>
                            <p className="c-discount">
                              <span className="c-sym">¥</span>
                              <span className="c-num">{item.coupon_price}</span>
                              <span className="c-condition">满{item.limit_low_price}元可用</span>
                            </p>

                            <p className="c-limit">{item.coupon_name}</p>
                            <p className="c-time">
                              有限期：<span className="c-time-period">{item.begin_valid_time} - {item.end_valid_time}</span>
                            </p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="coupon-receive">
                    <a href="true">领取</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="pre-buy js-exclusive-coupon freeView zsp">
          <div className="zxlist">
            <p className="freeView-txt">专属票</p>
            <i className="fa fa-angle-right fa-lg"></i>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide js-ticket2">
                {
                  this.props.getScheExclusiveList_list.map((item, index) => {
                    return (
                      <div key={index} className="zspp">
                        <div className="swiper-slide-active">
                          <a href="true" className="tour">
                            <img src="http://image.juooo.com/group1/M00/02/71/rAoKmVy-emeAK4zvAAGhdQSqc84132.png" alt="" className="tour_pic" />
                          </a>
                        </div>
                        <div className="tour-txt">
                          <span className="tour-title">{item.get("schedular_name")}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="pre-buyAgain">
          <div className="zxlist">
            <p className="freeView-txt">优先购票</p>
            <i className="fa fa-angle-right fa-lg"></i>
          </div>
          <div className="swiper-container1 swiperCard">
            <div className="swiper-wrapper">
              {
                this.state.Cardproductlist.map((item, index) => {
                  return (
                    <div className="swiper-slide yxxp" key={index}>
                      <div>
                        <a href="true" className="Atour">
                          <div className="Atour-bg">
                            <img src={item.pic} alt="" className="Atour_pic" />
                          </div>
                          <div className="Aposter-ctn">
                            <p className="Aposter-time Aposter-time2">{item.show_time_short}
                              <span className="Aposter-week">{item.weekStr}</span></p>
                            <p className="Aposter-name Aposter-name2">{item.schedular_name}</p>
                            <p className="Aposter-address Aposter-name2">{item.cityVenueStr}</p>
                            <div className="timeSet js-timeSet">
                              <p className="Aposter-name Aposter-name2">￥{item.low_price}<span className="sub">起</span></p>
                              <p className="Aposter-time2 js-Rstart js-forTime"><span>购票进行中</span></p>
                              <p className="Aposter-time2 js-Rstart js-startTime2" style={{ display: "none" }}>
                                <span>距结束：2天23时56分15秒</span></p></div></div>
                        </a>
                      </div>

                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

        <div className="pre-buy mfgy">
          <div className="zxlist">
            <p className="freeView-txt">免费观演</p>
            <i className="fa fa-angle-right fa-lg"></i>
          </div>

          <div className="swiper-container2">
            <div className="swiper-wrapper">
              <div className="swiper-slide js-ticket2">
                {
                  this.state.getWatchPerScheduleList.map((item, index) => {
                    return (
                      <div key={index} className="zspp">
                        <div className="swiper-slide-active">
                          <a href="true" className="tour1">
                            <img src={item.pic} alt="" className="tour_pic" />
                          </a>
                        </div>
                        <div className="poster-ctn">
                          <p className="poster-name freeView-name">{item.schedular_name}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="pre-buy zxzk">
          <div className="zxlist">
            <p className="freeView-txt">专享折扣</p>
            <i className="fa fa-angle-right fa-lg"></i>
          </div>
          <div className="swiperCard3">
            {
              this.state.getDiscountScheduleList.map((item, index) => {
                return (
                  <div className="js-member2" key={index}>
                    <a href="true" className="tour">
                      <div className="tour-bg mExclusive-bg">
                        <img src={item.pic} alt=" " className="tour_pic" />
                        <section className="buy_icon">
                          <span>{item.discount}折</span>
                        </section>
                      </div>
                      <div className="poster-ctn">
                        <p className="poster-name freeView-name mExclusive-name">{item.schedular_name}</p>
                        <p className="poster-price">￥{item.price}
                          <span className="sub">起</span>
                        </p>
                      </div>
                    </a>
                  </div>
                )
              })
            }

          </div>

          <div className="exclusive-more">
            <a href="true" className="exclusive-more-btn">
              查看更多演出 <i className="fa fa-angle-right fa-lg"></i>
            </a>
          </div>

        </div>
      </PULScardStyle >
    )
  }
  componentDidMount() {
    this.props.getPlusCoupon()
    axios("/apis/Cardproduct/getPlusCouponList", {
      params: {
        limitNum: 6,
      }
    }).then(res => {
      // console.log(res.data.exclusiveCoupon);

      this.setState({ getPlusCouponList_list: res.data.exclusiveCoupon })
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
      });
    });
    // https://m.juooo.com/Cardproduct/preBuyTicketAjax?page=1&page_limit=10
    axios("/apis/Cardproduct/preBuyTicketAjax", {
      params: {
        page: 1,
        page_limit: 10
      }
    }).then(res => {
      // console.log(res.data.exclusiveCoupon);
      let Cardproductlist = [...res.data.data.list]
      Cardproductlist.map(item => {
        item.pic = `http://image.juooo.com${item.pic}`
        return item.pic
      })

      // http://image.juooo.com/group1/M00/02/79/rAoKmVzFXuKAL9OOAACqxa3rUHk660.jpg
      this.setState({ Cardproductlist })
      new Swiper1('.swiper-container1', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30
      });
    });

    // ---
    // https://m.juooo.com/WatchPerform/getWatchPerScheduleList?user_id=0
    axios("/apis/WatchPerform/getWatchPerScheduleList", {
      params: {
        user_id: 0,
      }
    }).then(res => {
      // console.log(res.data.exclusiveCoupon);
      let getWatchPerScheduleList = [...res.data.data.list]
      getWatchPerScheduleList.map(item => {
        item.pic = `http://image.juooo.com${item.pic}`
        return item.pic
      })

      this.setState({ getWatchPerScheduleList });
      new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
      });
    });

    // https://m.juooo.com/WatchPerform/getDiscountScheduleList

    axios("/apis/WatchPerform/getDiscountScheduleList", {
      params: {

      }
    }).then(res => {
      // console.log(res.data.exclusiveCoupon);
      let getDiscountScheduleList = [...res.data.data.list]
      getDiscountScheduleList.map(item => {
        item.pic = `http://image.juooo.com${item.pic}`
        return item.pic
      })

      this.setState({ getDiscountScheduleList });
    });




  }
  quit() {
    this.props.history.push("/homePage")
  }
}

const mapStateToProps = (store) => {
  // console.log(store);

  return {
    getScheExclusiveList_list: store.getIn(["PlusCouponReducer", 'getScheExclusiveList_list'])
  }
}


const mapDispathToProps = (dispatch) => {
  return {
    getPlusCoupon() {
      dispatch(loadListDataAsync(dispatch));
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(PulsCard)