import React, { Component } from 'react';
import ShowInfoStyle from './ShowInfoStyle'
class showInfo extends Component {
    render() {
        return (
            <ShowInfoStyle>
                <div className='brief__primary__fg'>
                    <img className='bgi' src="http://image.juooo.com/group1/M00/00/66/rAoKOVgW5WGAZOf4AA1pxdCwBbM024.jpg" alt="" />
                    <div className='title'>
                        <div className='back'></div>
                        <div className='span'>演出详情</div>
                        <div className='like'></div>
                        <div className='zhuye'></div>
                    </div>
                    <div className='content'>
                        <img src="http://image.juooo.com/group1/M00/00/66/rAoKOVgW5WGAZOf4AA1pxdCwBbM024.jpg" alt="" />
                        <div className='contentInfo'>
                            <div>
                                【小橙堡】浪漫经典童话剧《灰姑娘》-长沙站
                                </div>
                            <div className='infoPrice'>￥50-160</div>
                        </div>
                    </div>
                </div>

                <div className='date'>
                    <div className='dateInfo'>
                        <div className='dateInfoTime'>
                            <span className='dateMonth'>07/13</span>
                            <span className='dateweek'>周六</span>
                        </div>
                        <div className='datePlace'>长沙 | 田汉大剧院音乐厅</div>
                    </div>
                    <div className='point'></div>
                </div>
                <div className='plus'>
                    <div className='base-tips'></div>
                </div>
            </ShowInfoStyle>
        );
    }
}

export default showInfo;