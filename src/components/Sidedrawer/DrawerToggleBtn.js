import React from 'react';

import './DrawerToggleBtn.css';

const drawerToggleBtn= props =>(
  <button className="toggle_button" onClick={props.click}>
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
  </button>
   );

export default drawerToggleBtn;
