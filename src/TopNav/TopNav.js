import '../asset/reset.css';
import '../asset/general.css';
import './TopNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSquarespace } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
    return (
        <nav>
            <section className='section-center'>
                <ul className='left-links'>
                    <li>
                        <a href="#">
                            <h1>
                                <span className='left-word'>Back</span>
                                <span className='right-word'>Roads</span>
                            </h1>
                        </a>
                    </li>
                </ul>
                <ul className='center-links'>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#AboutUs">about</a>
                    </li>
                    <li>
                        <a href="#Our-Services">srvices</a>
                    </li>
                    <li>
                        <a href="#Featured-Tours">tours</a>
                    </li>
                </ul>
                <ul className='right-links'>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faSquarespace} />
                        </a>
                    </li>
                    <li className='show-sidebar'>
                        <a href="#">
                            <FontAwesomeIcon icon={faBars} />
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}
export default TopNav;