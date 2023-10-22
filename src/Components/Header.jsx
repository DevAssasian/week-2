import React from 'react';
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div id="box">
      <h1 id="name">Spiderman</h1>
      <img id="image"
        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww&w=1000&q=80"
        alt=""
      />
    </div>
  );
}

export default Header;
