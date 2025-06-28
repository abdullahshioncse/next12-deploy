import React, {Fragment} from 'react';
import Navbar2 from '../components/Navbar2' 
import Hero2 from '../components/Hero2';
import About2 from '../components/about2'
import Destination2 from '../components/Destination2'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import BlogSection from '../components/BlogSection'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import SearchSection from '../components/SearchSection';
import HeroSlider from '../components/slider/HeroSlider';
import Gallery from '../components/gallary/Gallary';
import Reviews from '../components/reviews/Reviews';
import PageTitle from '../components/pagetitle';
import Link from 'next/link';
import BuildingWithUsComponent from '../components/BuildingWithUsComponent';

const BuildingWithUs =() => {
    return(
        <Fragment>
            <Navbar2/> 
            <PageTitle pageTitle={'Building With Us'} pagesub={'Building With Us'}/>    
            <BuildingWithUsComponent/>      
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default BuildingWithUs;