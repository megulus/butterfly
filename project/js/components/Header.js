import React, {Component} from 'react';
import classNames from 'classnames';

import Logo from './Header/Logo';

class Header extends Component {

    render() {
        return (
            <header className="row">
                <div><Logo /></div>
                <div className="col-md-6">Butterfly, Inc.</div>
            </header>
        );
    }

}

export default Header