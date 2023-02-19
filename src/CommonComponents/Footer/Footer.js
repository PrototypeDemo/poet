import React from 'react';
import FooterVectorImg from '../../Images/footer_vector_img.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <img src={FooterVectorImg} className="footer-vector-img" alt="Footer Vector Shape" />
        {/* <p className="copyright-txt"> &#169; 2023 Poet All Rights Reserved</p> */}
    </div>  
    );
}

export default Footer;


