import React from 'react';
import { question } from '../Assets';

const FAQ = () => {
    return (
        <div style={styles.container}>
            {/* title */}
            <div style={styles.title}>
                FAQ
            </div>
            <div style={styles.contentWrapper}>
            {/* question 1 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={question} alt='qna icon' height={80} width={50} />
                </div>
                <div style={styles.textField}>
                    <div style={styles.question}>
                        How much time does it take to get my loan ?
                    </div>
                    <div style={styles.answer}>
                        Less than a couple of hours!
                    </div>
                </div>
            </div>
            {/* question 2 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={question} alt='qna icon' height={80} width={50} />
                </div>
                <div style={styles.textField}>
                    <div style={styles.question}>
                        Is my payment accepted immediately ?
                    </div>
                    <div style={styles.answer}>
                        If you make a payment online, by phone we will accept your payment immediately. If you have automatic payments set up, your payment will be accepted on the regularly scheduled date.
                    </div>
                </div>
            </div>
            {/* question 3 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={question} alt='qna icon' height={80} width={50} />
                </div>
                <div style={styles.textField}>
                    <div style={styles.question}>
                        Why should I choose Car ?
                    </div>
                    <div style={styles.answer}>
                        Since 1990 Standard Auto Loan has provided car loans to customers across the country. Today, we're one of the largest auto loan groups in the country.
                    </div>
                </div>
            </div>
            {/* question 4 */}
            <div style={styles.wrapper}>
                <div style={styles.image}>
                    <img src={question} alt='qna icon' height={80} width={50} />
                </div>
                <div style={styles.textField}>
                    <div style={styles.question}>
                        Will the claim affect my renewal ?
                    </div>
                    <div style={styles.answer}>
                        In case, you file a claim for any kind of damages during the loan period at renewal, you will lose all the NCB that you have accrued over the years.
                    </div>
                </div>
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
    contentWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        margin: '2rem',
        width: '40vw',
        backgroundColor: '#FFF8DC',
        borderRadius: '20px',
    },
    image: {
        margin: '2rem',
    },
    textField: {
        margin: '2rem',
    },
    question: {
        fontSize: '1.5rem',
        fontWeight: '500',
    },
    answer: {
        fontSize: '1.1rem',
    },
};

export default FAQ;
