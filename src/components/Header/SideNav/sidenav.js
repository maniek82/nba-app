import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

const SideNavigation = (props) => {

    return (
        <div>
            <SideNav
            showNav={props.showNav}
            onHideNav= {props.onHideNav}
            openFromRight={true}
            navStyle={{
                background:'#242424',
                maxWidth:'25%',
                color:"white"
                
            }}
            >
             
            <SideNavItems {...props}/>
            </SideNav>
        </div>
    )
}
export default SideNavigation;