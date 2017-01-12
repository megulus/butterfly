import React, { Component } from 'react';

import styles from './Submitted.css';

class Submitted extends Component {

    render() {
        return (
            <div className={styles.submitted}>
                <p className={styles.banner}>THANK YOU FOR THE EXTRA FEEDBACK</p>
                <p>Have a nice day!</p>
                <div></div>
            </div>
        );
    }

}

export default Submitted