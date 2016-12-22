import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Submitted extends Component {

    render() {
        return (
            <div className={classNames('top-spacer')}>
                <p className={classNames('top-spacer', 'lt-grn-text', 'small-text')}>THANK YOU FOR THE EXTRA FEEDBACK</p>
                <p className={classNames('bold', 'white-text')}>Have a nice day!</p>
                <div className={classNames('submitted')}></div>
            </div>
        );
    }

}

export default Submitted