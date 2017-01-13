import React, {Component} from 'react';
import classNames from 'classnames';

import Logo from './Logo';

import styles from './Header.css';

class Header extends Component {

    render() {
        return (
            <header className={classNames('row', styles.banner)}>
                <div className="col-md-2"><Logo /></div>
                <div className={classNames("col-md-6", styles.headline)}>Butterfly, Inc.</div>
            </header>
        );
    }

}

export default Header