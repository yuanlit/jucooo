import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadListDataAsync } from './actionControl'
import CityListStyle from './cityStyle'
class citySelect extends Component {
    render() {
        return (
            <CityListStyle>
                <div className = 'title'>
                <i className="fa fa-angle-left" onClick = {this.quit.bind(this)}></i>
                    切换城市
                </div>
                <ul>
                    {
                        this.props.city_list.map((item, index) => {
                            return (
                                <div key={index} id={item.get("id")}>
                                     <div className = 'min_title'>{item.get("id")}</div>
                                    {
                                        item.get("lists").map((res, index) => {
                                            return (
                                                <li onClick={this.props.setCity.bind(this, res)} id={res.get("id")} key={index}>{res.get("name")}</li>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </ul>
            </CityListStyle>
        )
    }
    componentWillMount() {
        this.props.getCityList()
    }
    quit() {
        this.props.history.push("/homePage")
    }
}
const mapStateToProps = (store) => {
    return {
        city_list: store.getIn(['citySelectReducer', 'cityList'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        setCity(res) {
            this.props.history.push({ pathname : '/homePage',state:res})
        },
        getCityList() {
            dispatch(loadListDataAsync(dispatch))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(citySelect)