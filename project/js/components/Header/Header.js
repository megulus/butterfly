import React, {Component} from 'react';
import classNames from 'classnames';

import Logo from './Logo';

import styles from './header.css';

class Header extends Component {

    render() {
        return (
            <header className={classNames(styles.banner, 'row')}>
                <div><Logo /></div>
                <div className="col-md-6">Butterfly, Inc.</div>
            </header>
        );
    }

}

export default Header