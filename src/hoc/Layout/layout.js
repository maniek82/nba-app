import React, {Component } from 'react';
import './layout.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


class Layout extends Component {
    state = {
        showNav: false
    }

    toggleSideNav = (action)=> {
        
        this.setState({
            showNav: action
        })
    }

    render() {
        return(
            <div className="layout-content-container">
                <Header
                    user = {this.props.user}
                  showNav= {this.state.showNav}
                  onHideNav = {()=> this.toggleSideNav(false)}
                  onOpenNav = {()=> this.toggleSideNav(true)}
                />
                <div className="layout-content">
                {this.props.children}
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Layout;