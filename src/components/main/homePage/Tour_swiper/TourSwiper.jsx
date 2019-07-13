import React, {  Fragment, PureComponent } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import TourSwiperStyle from './TourSwiperStyle'
import { withRouter } from 'react-router-dom'

class TourSwiper extends PureComponent {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps() {
        if (this.props.TourData.length > 0) {
            this.pageInit()
        }
    }
    render() {
        let { TourData, title } = this.props;
        switch (TourData.length > 0) {
            case true:
                return (
                    <Fragment>
                        <TourSwiperStyle>
                            <div className="title_box" onClick={this.goto.bind(this)}>
                                <h3>{title}</h3>
                                <i className="fa fa-angle-right"></i>
                            </div>
                            <div className="swiper-container" id="Tour_swiper">
                                <div className="swiper-wrapper">
                                    {
                                        TourData.map((item, index) => {
                                            return (
                                                <div key={index} className="swiper-slide">
                                                    <div className="imgBox">
                                                        <img src= {item.pic} alt="" />
                                                    </div>
                                                    <h3>{item.show_name}</h3>
                                                    <p>{item.schedular_num}场巡演</p>
                                                </div>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        </TourSwiperStyle>
                    </Fragment>
                )
            default:
                return <span>                            数据加载中...</span>
        }

    }
    goto(){
        console.log(this);
        this.props.history.push('/tourist')
        
    }
    pageInit() {
        new Swiper('#Tour_swiper', {
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });      
    }
}

export default withRouter(TourSwiper);