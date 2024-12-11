// src/components/Header.js
import React from 'react';
import logo from '../images/logo.png';
import notifIcon from '../images/icons/mingcute_notification-fill.svg';

function Header({logout}) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Go Marina Logo" />
        {/* <h2>Go Marina</h2> */}
      </div>
      <div className="user-actions">
        <button className="notif-btn">
          <img src={notifIcon} alt="Notifications" />
        </button>
        <button className="logout-btn" onClick={logout}>Log Out</button>
      </div>
    </header>
  );
}

export default Header;
