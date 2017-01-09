import React, {Component} from 'react';

import styles from './Questions.css'

class BoxBanner extends Component {

    render() {
        return (
            <div>
                <div className={styles.banner}>
                    <div className={styles.triangle}></div>
                    <div className={styles.bannerBase}>
                        <p>Your answers will always remain anonymous</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default BoxBanner