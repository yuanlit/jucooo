import React, { Component } from 'react';

import Tag from './tagLIstStyle'
class tagList extends Component {
    render() {
        let { data } = this.props
        return (
            <Tag>
                <div className='tag_box'>
                    <div className='img_box'>
                        <img src={data.pic} alt="" />
                    </div>
                    <div className='info_box'>
                        <p className='time'>{data.show_time_top}</p>
                        <h2 dangerouslySetInnerHTML={{ __html: data.name }}></h2>
                        <p className='siteInfo'>
                            <i>{data.city_name}&nbsp;&nbsp;|&nbsp;&nbsp;<span dangerouslySetInnerHTML={{ __html: data.venue_name }}></span></i>
                        </p>
                        <p className='money'>
                            <b>￥{data.min_price}</b><span>起</span>
                        </p>
                    </div>
                </div>
            </Tag>
        );
    }
}

export default tagList;