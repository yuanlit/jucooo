import React, { Component } from 'react';

import TicketStyle from './ticketStyle'
class ticketFolder extends Component {
    render() {
        return (
            <TicketStyle>
                <div className = "head_box">
                    <div className="quit">
                        <i className="fa fa-angle-left" onClick={this.goback.bind(this)}></i>
                    </div>
                    <h3>票夹</h3>
                </div>
                <div className ="info">
                    <p>暂无电子票</p>
                </div>
            </TicketStyle>
        )
    }
    goback(){
        this.props.history.goBack()
    }
}

export default ticketFolder;