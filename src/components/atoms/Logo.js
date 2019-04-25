import React from 'react';
import logo from '../../resources/image/MPL_LOGO.png';
import '../../resources/sass/detail/Logo.scss';

function Logo() {
    // Import result is the URL of your image
    return <img className="logo" src={logo} alt="Logo" />;
  }
  
export default Logo;