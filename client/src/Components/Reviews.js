import React from 'react';
import {
    person1,
    person2,
    person3,
} from '../Assets';

const Reviews = () => {
    return (
        <div style={styles.container}>
            {/* title */}
            <div style={styles.title}>
                TESTIMONIALS
            </div>
            {/* person 1 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={person1} alt='person' height={140} style={styles.picture} />
                </div>
                <div style={styles.name}>
                    Jeff Ron
                </div>
                <div style={styles.rating}>
                    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                </div>
                <div style={styles.caption}>
                   " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus accumsan velit, nec mollis tellus egestas ut. "
                </div>
            </div>
            {/* person 2 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={person2} alt='person' height={140} style={styles.picture} />
                </div>
                <div style={styles.name}>
                    John Smith
                </div>
                <div style={styles.rating}>
                    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                </div>
                <div style={styles.caption}>
                    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus accumsan velit, nec mollis tellus egestas ut. "
                </div>
            </div>
            {/* person 3 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={person3} alt='person' height={140} style={styles.picture} />
                </div>
                <div style={styles.name}>
                    Will Jackson
                </div>
                <div style={styles.rating}>
                    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                </div>
                <div style={styles.caption}>
                    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus accumsan velit, nec mollis tellus egestas ut. "
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
    },
    title: {
        fontSize: '3.2rem',
        fontWeight: '400',
        color: '#337CCD',
    },
    wrapper: {
        justifyContent: 'center',
        textAlign: 'center',
        width: '65vw',
        margin: '1.5rem',
        backgroundColor: '#F0F8FF',
        borderRadius: '20px',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
    },
    picture: {
        borderRadius: '50%',
        overflow: 'hidden',
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: '500',
    },
    rating: {
        marginTop: '-1rem',
        color: '#FFD700',
        fontSize: '2rem',
    },
    caption: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.1rem',
        padding: '0rem 2rem 2rem 2rem',
    },
};

export default Reviews;
