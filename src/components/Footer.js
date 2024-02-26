import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <ul className="social-icons">
                    <li>
                        <a href="#" className="icons "><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#" className="icon "><span className="label"><i class="fa-brands fa-x-twitter"></i></span></a>
                    </li>
                    <li>
                        <a href="#" className="icon "><span className="label"><i class="fa-brands fa-instagram"></i></span></a>
                    </li>
                    <li>
                        <a href="#" className="icon "><span className="label"><i class="fa-brands fa-whatsapp"></i></span></a>
                    </li>
                    <li>
                        <a href="#" className="icon "><span className="label"><i class="fa-solid fa-envelope"></i></span></a>
                    </li>
                </ul>
                <ul className="copyright">
                    <li>&copy; {new Date().getFullYear()} Kibiko Hardware Store</li>
                    <li>Design: By Chris Brian</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;