import React, { Fragment, Component } from "react";

import 'swiper/dist/css/swiper.min.css'
import BannerStyle from './bannerStyle';

import Swiper from 'swiper/dist/js/swiper.js'

export default class extends Component {
    render() {
        let { bannerList } = this.props;
        // console.log(bannerList)
        return (
            <Fragment>
                <BannerStyle>
                    <div className="swiper-container" id="dongcidaci">
                        <div className="swiper-wrapper">
                            {
                                bannerList.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <img src={item.get("touch_image_url")} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </BannerStyle>
            </Fragment>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            new Swiper('#dongcidaci', {
                autoplay: true,
                paginationClickable: true,
                observer: true,//修改swiper自己或子元素时，自动初始化swiper 
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }, 1000)
    }

}

