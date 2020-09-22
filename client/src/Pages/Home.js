import React, { useEffect } from 'react';
import {
    Header,
    Form,
    Progress,
    Payment,
    Reviews,
    FAQ,
    GetQuote,
    Socials,
} from '../Components';

const Home = () => {
    useEffect(() => {
        document.title = "Captain Pre's Site";
    });

    return (
        <div>
            <Header />
            <Form />
            <Progress />
            <Payment />
            <Reviews />
            <FAQ />
            <GetQuote />
            <Socials />
        </div>
    );
};

export default Home;
