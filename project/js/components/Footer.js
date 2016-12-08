import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';


class Footer extends Component {

    render() {
        return (
            <footer className="bottom-spacer">
                <p className={classNames('white-text', 'small-text', 'light')}>
                    Butterfly. Your team's happiness manager.<br/>&copy; 2016 AnonyMessenger, Inc.
                </p>
                <a className={classNames("lt-grn-text", "small-text")} href="https://butterfly.ai">butterfly.ai</a>
            </footer>
        );
    }

}

export default Footer