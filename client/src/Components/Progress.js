import React from 'react';
import {
    one,
    two,
    three,
    four,
    five,
    tv,
    cash,
    survey,
    planing,
    research,
} from '../Assets';

const Progress = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                HOW IT WORKS
            </div>
            <div style={styles.subheader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div style={styles.progressContainer}>
                <div style={styles.imageWrap}>
                    <img src={tv} height={80} alt='try to load' style={{margin:'0rem 3.5rem'}} />
                    <img src={survey} height={80} alt='try to load' style={{margin:'0rem 3.5rem'}} />
                    <img src={planing} height={80} alt='try to load' style={{margin:'0rem 3.5rem'}} />
                    <img src={research} height={80} alt='try to load' style={{margin:'0rem 3.5rem'}} />
                    <img src={cash} height={80} alt='try to load' style={{margin:'0rem 3.5rem'}} />
                </div>
                <div style={styles.numberWrap}>
                    <img src={one} height={35} alt='try to load' style={{margin:'1rem 3.5rem 1rem 6rem'}} />
                    <img src={two} height={35} alt='try to load' style={{margin:'1rem 5rem 1rem 7rem'}} />
                    <img src={three} height={35} alt='try to load' style={{margin:'1rem 5rem 1rem 4rem'}} />
                    <img src={four} height={35} alt='try to load' style={{margin:'1rem 5rem 1rem 5rem'}} />
                    <img src={five} height={35} alt='try to load' style={{margin:'1rem 6rem 1rem 5rem'}} />
                </div>
                <div style={styles.wordWrap}>
                    <div style={styles.cap1}>Select Survey</div>
                    <div style={styles.cap2}>Fill Details</div>
                    <div style={styles.cap3}>Submit</div>
                    <div style={styles.cap4}>Company Reviews Data</div>
                    <div style={styles.cap5}>Get Paid</div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '65vh',
    },
    title: {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'center',
        color: '#337CCD',
        fontSize: '3.2rem',
        fontWeight: '400',
    },
    subheader: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.7rem',
    },
    progressContainer: {
        textAlign: 'center',
    },
    imageWrap: {
        marginTop: '3rem',
    },
    numberWrap: {
        marginTop: '0rem',
    },
    wordWrap: {
        display: 'flex',
        marginTop: '0rem',
    },
    cap1: {
        position: 'absolute',
        left: '14rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    cap2: {
        position: 'absolute',
        left: '26.5rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    cap3: {
        position: 'absolute',
        left: '38.6rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    cap4: {
        position: 'absolute',
        left: '47rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    cap5: {
        position: 'absolute',
        left: '63rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
};

export default Progress;
