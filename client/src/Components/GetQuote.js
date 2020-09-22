import React from 'react';
import { background } from '../Assets';

const GetQuote = () => {
    const handleScroll = () => {
        window.scrollTo(0,0);
    };

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <img src={background} alt='background' style={styles.background} />
                <div style={styles.title}>
                    Get A Faster and Best Quote For your Car!
                </div>
                <div style={styles.subheader}>
                    Don't Wait - Get Free and Faster Options within minutes.
                </div>
                <div style={styles.button}>
                    <input type='button' value='GET A QUOTE' style={styles.inputButton} onClick={handleScroll} />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '5rem',
        position: 'relative',
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    background: {
        height: '70vh',
        width: '100%',
        zIndex: '-999',
    },
    title: {
        position: 'absolute',
        color: 'white',
        fontSize: '3rem',
        top: '2.5rem',
    },
    subheader: {
        position: 'absolute',
        color: 'white',
        fontSize: '1.8rem',
        top: '7rem',
    },
    button: {
        position: 'absolute',
        fontSize: '3rem',
        top: '12rem',
    },
    inputButton: {
        color: '#2F4F4F',
        fontWeight: '600',
        padding: '1rem',
        borderRadius: '15px',
        background: '#FFD700',
        border: 'none',
    },
};

export default GetQuote;
