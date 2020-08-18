import React from 'react';
import DrawerToggleBtn from '../Sidedrawer/DrawerToggleBtn';
import './Toolbar.css';

//functional components
const toolbar = props =>(
  <header className="toolbar">
     <nav className="Toolbar_navigation">
         <div className="toolbar_toggle_btn">
             <DrawerToggleBtn click={props.drawerClickHandler} />
         </div>
         <div className="toolbar_logo"> <a href="">My Logo </a> </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">User</a></li>
        </ul>

        </div>
     </nav>
  </header>

);

export default toolbar;
