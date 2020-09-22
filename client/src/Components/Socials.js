import React from 'react';
import {
    facebook,
    twitter,
    linkedin,
} from '../Assets';

const Socials = () => {
    return (
        <div style={styles.container}>
            <img src={facebook} alt='social icon' style={styles.icon} />
            <img src={twitter} alt='social icon' style={styles.icon} />
            <img src={linkedin} alt='social icon' style={styles.icon} />
        </div>
    );
};

const styles = {
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        height: 40,
        margin: '2rem 5rem',
    },
};

export default Socials;
