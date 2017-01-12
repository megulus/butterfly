import React, { Component } from 'react';

import styles from './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className={styles.footer}>
                <p>
                    Butterfly. Your team's happiness manager.<br/>&copy; 2016 AnonyMessenger, Inc.
                </p>
                <a className={styles.link} href="https://butterfly.ai">butterfly.ai</a>
            </footer>
        );
    }

}

export default Footer