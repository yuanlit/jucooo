import React, { Fragment, Component } from 'react';
import Route from "@/router"
import FooterNav from "@/components/layout/footerNav"

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bool: false
        }
    }
    render() {
        return (
            <Fragment>
                <Route />
                <FooterNav  nbool = {window.location.hash !=='#/homePage/grade'}/>
            </Fragment>
        )
    }
 }
export default home;
