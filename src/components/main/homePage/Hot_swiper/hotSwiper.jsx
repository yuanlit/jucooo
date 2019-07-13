import React, {Fragment, PureComponent } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import HotSwiperStyle from './hotSiperStyle'
import { withRouter } from 'react-router-dom'

class hotSwiper extends PureComponent {
    constructor (props) {
        super(props)
    }
    componentWillReceiveProps () {
        if(this.props.HotSwiperData.length>0){
            this.pageInit() 
        }
    }
    render() {
        let { HotSwiperData, title } = this.props;
        switch(this.props.HotSwiperData.length>0) {
            case true:
                return (
                    <Fragment>
                        <HotSwiperStyle>
                            <div className="title_box" onClick={this.goto.bind(this)}>
                                <h3>{title}</h3>
                                <i className="fa fa-angle-right"></i>
                            </div>
                            <div className="swiper-container" id ="hot">
                                <div className="swiper-wrapper">
                                    {
                                        HotSwiperData.map((item, index) => {
                                            return (
                                                <div className="swiper-slide" key = {index}>
                                                    <div>
                                                         <img src={item.pic} alt="" />
                                                    </div>
                                                    <h3>{item.show_name}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </HotSwiperStyle>
                    </Fragment>
                )
            default:
              return <span>数据加载中...</span>
       } 
    }
    goto(){
        // console.log(this);
        this.props.history.push('/showTime')
        
    }
    pageInit () {
        new Swiper('#hot', {
            autoplay: false,
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 10
        }) 
    }
}

export default withRouter(hotSwiper);