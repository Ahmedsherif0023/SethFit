import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerBottom">
        <p>Copyright &copy; 2025; Designed by <span className='designer'> SHEFO </span></p>
      </div>
      <div className="socialicons">
        <a href=""><i className='fa-brands fa-facebook'></i></a>
        <a href=""><i className='fa-brands fa-instagram'></i></a>
        <a href=""><i className='fa-brands fa-linkedin'></i></a>
        <a href=""><i className='fa-brands fa-github'></i></a>
      </div>
    </div>
  );
}

export default Footer;
