import React, { Component } from 'react';

import styles from '../Questions/Questions.css';

class Button extends Component {


    render() {
        let btnClass = this.props.active
            ? styles.btnActive
            : styles.btnInactive;
        return (
            <div className={btnClass}></div>
        );
    }

}

export default Button