import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome  from 'react-fontawesome';
import SideNav from './SideNav/sidenav';



const Header = (props) => {



    const navBars= () => (

        <div className={style.bars}>
            <FontAwesome name="bars"
            onClick = {props.onOpenNav}
             style={{
                 color:'red',
                 padding: '10px',
                 cursor:'pointer'
                }}
            />
            
        </div>
    )

    const logo = () => (
      
            <Link to='/' className={style.logo}>
              <img alt="nba logo" src="./images/nba_logo.png"/>
            </Link>
   )

    return(
        <header>
           <div className={style.header}>
           <SideNav {...props}/>
               <div className={style.headerOpt}>
               {navBars()}
                {logo()}
               </div>
           </div>
        </header>
    )
}

export default Header;