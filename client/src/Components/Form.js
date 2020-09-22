import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { addUser, getUser } from '../Redux/Actions/authAction';
import { formBG } from '../Assets';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';

const FormTest = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    const loading = useSelector((state) => state.auth.loading);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveUser = () => {
        if (!input.firstname || !input.lastname || !input.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops....',
                text: 'Please fill all required fields!',
            });
        } else {
            Swal.fire(
                'Success!',
                'Your data has been saved.',
                'success'
            );
            dispatch(addUser(input));
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>
                TAKE SURVEYS
            </div>
            <div style={styles.form}>
                <div style={styles.formContainer}>
                    <div style={styles.formContent}>
                        <div style={styles.caption}>
                            SIGN UP
                        </div>
                        <div>
                            <div style={styles.input}>
                                <TextField type='text' label='First Name' variant='outlined' style={styles.textField} onChange={handleChange} />
                            </div>
                            <div style={styles.input}>
                                <TextField type='text' label='Last Name' variant='outlined' style={styles.textField} onChange={handleChange} />
                            </div>
                            <div style={styles.input}>
                                <TextField type='text' label='Email Address' variant='outlined' style={styles.textField} onChange={handleChange} />
                            </div>
                            <div style={styles.button}>
                                <Button color='primary' onClick={handleSaveUser}>
                                    {
                                        loading
                                        ?
                                        'Loading...'
                                        :
                                        'Get Started!'
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundImage: `url(${formBG})`,
        backgroundSize: 'cover',
        justifyContent: 'center',
    },
    title: {
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '5em',
        fontWeight: '750',
        color: '#F8F8FF',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1.5rem',
    },
    formContainer: {
        width: '30vw',
        backgroundColor: 'white',
        opacity: '1',
        borderRadius: '20px',
        margin: '4rem',
        marginTop: '0px',
    },
    formContent: {
        padding: '2rem',
    },
    caption: {
        color: '#337CCD',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '2.5rem',
        fontWeight: '550',
    },
    input: {
        margin: '1.2rem',
    },
    textField: {
        padding: '0rem',
        width: '100%',
        height: '3rem',
    },
    button: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
};

export default FormTest;
