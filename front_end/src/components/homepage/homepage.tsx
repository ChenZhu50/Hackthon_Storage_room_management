"use client"

import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log('Login button clicked');
        navigate("/login");
    };

    const handleSignup = () => {
        console.log('Signup button clicked');
        navigate("/signup")
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Our App</h1>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={handleLogin}>
                    Login
                </button>
                <button style={styles.button} onClick={handleSignup}>
                    Signup
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#0f0f0f',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        transition: 'background-color 0.3s',
    },
};

export default HomePage;
