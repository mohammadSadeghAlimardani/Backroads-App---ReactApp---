import './AboutUs.css';
import beachImg from './beach.jpg';

const AboutUs = () => {
    return (
        <div className='AboutUs' id='AboutUs'>
            <section className='section-center'>
                <h3 className="title-section">
                    <span className="left-word-title">ABOUT</span>
                    <span className="right-word-title">US</span>
                </h3>
                <div className='AboutUs-container'>
                    <article className='left-container'>
                        <div className='image-container'>
                            <img src={beachImg} alt="beach" />
                        </div>
                    </article>
                    <article className='right-container'>
                        <h2>
                            explore the difference
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est numquam illum obcaecati asperiores accusamus debitis
                            quisquam quas molestiae illo fugiat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis quam ducimus harum placeat dolores magnam fugit possimus,
                            officia ullam molestias?
                        </p>
                        <a href="#" className='btn btn-info'>read more</a>
                    </article>
                </div>
            </section>
        </div>
    )
}
export default AboutUs;