import React from 'react';
import { paymentOptions } from '../Assets';

const Payment = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                GET REWARDED FOR YOUR WORK
            </div>
            <div style={styles.caption}>
                Cash out in a payment option of your choice.
            </div>
            <div style={styles.image}>
                <img src={paymentOptions} alt='payment' height={400} />
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
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default Payment;
