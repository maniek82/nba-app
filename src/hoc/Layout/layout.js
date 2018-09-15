import React, {Component } from 'react';
import './layout.css';

class Layout extends Component {
    state = {

    }
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;