import './OurServices.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faSocks, faTree } from '@fortawesome/free-solid-svg-icons'

const servicesItems = [
    {
        icon : faWallet,
        title : "saving money",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, cumque.",
        id : 1
    },
    {
        icon : faTree,
        title : "endless hiking",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, cumque.",
        id : 2
    },
    {
        icon : faSocks,
        title : "amazing comfort",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, cumque.",
        id : 3
    }
]

const OurServices = () => {
    return (
        <div className="Our-Services" id='Our-Services'>
            <section className="section-center">
                <h3 className='title-section'>
                    <span className='left-word-title'>OUR</span>
                    <span className='right-word-title'>SERVICES</span>
                </h3>
                <div className='Our-Services-Items'>
                    {
                        servicesItems.map((servicesItem)=>{
                            const {icon, title, text, id} = servicesItem;
                            return (
                                <article key={id}>
                                    <span>
                                        <FontAwesomeIcon icon={icon}/>
                                    </span>
                                    <div>
                                        <h4>{title}</h4>
                                        <p>{text}</p>
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
export default OurServices;