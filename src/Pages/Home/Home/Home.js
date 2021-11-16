import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import InfoCard from '../InfoCard/InfoCard';
import Footer from '../Footer/Footer';
import OurDoctors from '../OurDoctors/OurDoctors';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <About></About>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Blogs></Blogs>
            <OurDoctors></OurDoctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;