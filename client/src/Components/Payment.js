import React from 'react';
import {
    paypal,
    amazon,
    bitcoin,
    visa,
} from '../Assets';

const Payment = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                GET REWARDED FOR YOUR WORK
            </div>
            <div style={styles.caption}>
                Cash out in a payment option of your choice.
            </div>
            <div style={styles.image1}>
                <img src={paypal} alt='payment' style={styles.paypal} />
            </div>
            <div style={styles.image2}>
                <img src={amazon} alt='payment' style={styles.amazon} />
                <img src={bitcoin} alt='payment' style={styles.bitcoin} />
                <img src={visa} alt='payment' style={styles.visa} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '70vh',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: '#337CCD',
        fontSize: '3.2rem',
        fontWeight: '400',
    },
    caption: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.7rem',
    },
    image1: {
        display: 'flex',
        justifyContent: 'center',
    },
    image2: {
        display: 'flex',
        justifyContent: 'center',
    },
    paypal: {
        margin: '2rem 1rem',
        height: 120
    },
    amazon: {
        margin: '2rem 1rem',
        height: 120
    },
    bitcoin: {
        margin: '2rem 1rem',
        height: 120
    },
    visa: {
        margin: '2rem 1rem',
        height: 120
    },
};

export default Payment;
