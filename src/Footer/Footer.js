import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSquarespace } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <section className='section-center'>
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#AboutUs">about</a>
                    </li>
                    <li>
                        <a href="#Our-Services">services</a>
                    </li>
                    <li>
                        <a href="#Featured-Tours">tours</a>
                    </li>
                </ul>
                <ul className='social-media-links'>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faSquarespace}/>
                        </a>
                    </li>
                </ul>
                <p>
                    copyright &copy; backroads travel tours company {new Date().getFullYear()}.
                    all rights reserved
                </p>
            </section>
        </footer>
    )
}

export default Footer;