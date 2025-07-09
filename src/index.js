import React from "react";
import reactDom from "react-dom/client";

/* import files */
import TopNav from "./TopNav/TopNav";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";
import FeaturedTours from "./FeaturedTours/FeaturedTours";
import Footer from "./Footer/Footer";

const Index = () => {
    return (
        <main>
            <TopNav/>
            <Hero/>
            <AboutUs/>
            <OurServices/>
            <FeaturedTours/>
            <Footer/>
        </main>
    )
}

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<Index/>);