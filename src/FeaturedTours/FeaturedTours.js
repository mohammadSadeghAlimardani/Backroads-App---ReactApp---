import './FeaturedTours.css';

import tibet_img from './tibet.jpg';
import java_img from './java.jpg';
import hongKong_img from './hong-kong.jpg';
import keny_img from './kenya.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

const featuredToursItems = [
    {
        img : tibet_img,
        dateOfImage : "August 26th, 2020",
        title : "tibet adventure",
        text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo veritatis ducimus excepturi praesentium dolorum at omnis! Nostrum facilis nulla, doloremque ipsa quae aliquam illum.",
        country : "china",
        startPrice : 2100,
        duration : 6,
        id : 1
    },
    {
        img : java_img,
        dateOfImage : "October 1th, 2020",
        title : "best of java",
        text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo veritatis ducimus excepturi praesentium dolorum at omnis! Nostrum facilis nulla, doloremque ipsa quae aliquam illum.",
        country : "indonesia",
        startPrice : 1400,
        duration : 11,
        id : 2
    },
    {
        img : hongKong_img,
        dateOfImage : "September 15th, 2020",
        title : "explore hong kong",
        text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo veritatis ducimus excepturi praesentium dolorum at omnis! Nostrum facilis nulla, doloremque ipsa quae aliquam illum.",
        country : "hong kong",
        startPrice : 5000,
        duration : 8,
        id : 3
    },
    {
        img : keny_img,
        dateOfImage : "December 5th, 2019",
        title : "kenya highlights",
        text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo veritatis ducimus excepturi praesentium dolorum at omnis! Nostrum facilis nulla, doloremque ipsa quae aliquam illum.",
        country : "kenya",
        startPrice : 3300,
        duration : 20,
        id : 4
    }
]
const FeaturedTours = () => {
    return (
        <div className="Featured-Tours" id='Featured-Tours'>
            <section className="section-center">
                <h3 className='title-section'>
                    <span className='left-word-title'>FEATURED</span>
                    <span className='right-word-title'>TOURS</span>
                </h3>
                <div className="Featured-Tours-Items">
                    {
                        featuredToursItems.map((featuredToursItem) => {
                            const {img, dateOfImage, title, text} = featuredToursItem;
                            const {country, startPrice, duration, id} = featuredToursItem;
                            return (
                                <article key={id}>
                                    <div className="image-container">
                                        <img src={img} alt={title} />
                                        <span className='title-img'>{dateOfImage}</span>
                                    </div>
                                    <div className="info-container">
                                        <h2>{title}</h2>
                                        <p>
                                            {text}
                                        </p>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faMap}/>
                                                <span>{country}</span>
                                            </li>
                                            <li>
                                                From ${startPrice}
                                            </li>
                                            <li>
                                                {duration} Days
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default FeaturedTours;