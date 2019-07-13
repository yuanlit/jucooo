import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import Footer from '@/components/layout/FootStyle';
import { connect } from 'react-redux'
import { loadListDataAsync } from "./actionControl"

class footerNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    render() {
        let { nbool } = this.props
        switch (nbool) {
            case true:
                return (
                    <Fragment>
                        <Footer>
                            {
                                this.props.getClassifyItem.map((res, index) => (
                                    <li key={ index }  className = {index === 0? 'active_Li':''}>
                                        <NavLink  to ={ res.get("url") } key={index} onClick={this.change.bind(this, index)}>
                                            <div className = {index === this.state.active? 'active':''}>
                                                <img src={ res.get("pic") } alt=""/>
                                            </div>
                                            <span>{res.get("name")}</span>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </Footer>
                    </Fragment>
                )
            default:
                return (
                    <span></span>
                )
        }

    }
    change(index) {
       this.setState({active:index})
    }
    // 数据初始化
    componentWillMount() {
        this.props.getData()
    }
}

const mapStateToProps = (store) => (
    {
        getClassifyItem: store.getIn(['layOutReducer', 'getClassifyItem'])
    }
)
const mapDispathToProps = (dispatch) => ({
    getData(index) {
        dispatch(loadListDataAsync(dispatch))
    }
})

export default connect(mapStateToProps, mapDispathToProps)(footerNav);