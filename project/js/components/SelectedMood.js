import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Smiley from './Smiley';
import Edit from './Edit';
import classNames from 'classnames';

class SelectedMood extends Component {

    unsetMood() {
        Store.unsetMood();
    }

    render() {
        const smileyProps = {
            moodClass: this.props.moodClass,
            small: false
        };
        const moodText = Store.getMoodText();
        return (
            <div>
                <div className="smiley-box-lg">
                    <Smiley {...smileyProps} />
                    <div onClick={this.unsetMood.bind(this)}><Edit /></div>
                </div>
                <p className="white-text">{moodText}</p>
                <p className={classNames("lt-grn-text", "small-text", "light")}>THANK YOU FOR YOUR FEEDBACK</p>
            </div>
        );
    }


}

SelectedMood.propTypes = {
    moodClass: PropTypes.string.required
};

export default SelectedMood




