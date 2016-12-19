
import React, { Component } from 'react';

import styles from './header.css';

class Logo extends Component {

    render() {
        return <a className={styles.logo} href="http://support.butterfly.ai/">{}</a>
    }
}

export default Logo