import React from 'react';

const PageHeader: React.FC = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>My Page</h1>
            <div style={styles.buttonContainer}>
                <button style={styles.button}>Home</button>
                <button style={styles.button}>About</button>
                <button style={styles.button}>Contact</button>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white',
    },
    title: {
        margin: 0,
        fontSize: '24px',
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        padding: '8px 16px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#61dafb',
        color: '#282c34',
    },
};

export default PageHeader;