import React from 'react';

const Header = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title1}>
                Quarantine&nbsp;
                <div style={styles.title2}>
                    Surveys
                </div>
            </div>
            <div style={styles.caption1}>
                Best Survey Site&nbsp;
                <div style={styles.caption2}>
                    Since 1990
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginBottom: '1em',
    },
    title1: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '3em',
        fontWeight: '700',
        color: '#2C2C2C',
    },
    title2: {
        color: '#337CCD',
    },
    caption1: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5em',
        fontWeight: '500',
        color: '#2C2C2C',
    },
    caption2: {
        color: '#337CCD',
    },
};

export default Header;
