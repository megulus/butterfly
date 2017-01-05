import React, {Component} from 'react';
import classNames from 'classnames';

class BoxBanner extends Component {

    render() {
        return (
            <div>
                <div className={classNames('banner', 'med-grn-bkgrnd')}>
                    <div className="triangle"></div>
                    <div className={classNames(
                        'banner-base',
                        'lt-grn-bkgrnd',
                        'rounded-corners-top',
                        'small-text',
                        'white-text')}>
                        <p>Your answers will always remain anonymous</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default BoxBanner