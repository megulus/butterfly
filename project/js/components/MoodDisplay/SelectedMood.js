import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Edit from './Edit';
import Smiley from './Smiley';

import { unsetMood } from '../../actions/moodActions';

@connect((store) => {
    return {
        mood: store.mood.mood,
        moodSet: store.mood.moodSet,
    }
})
class SelectedMood extends Component {

    unsetMood() {
        this.props.dispatch(unsetMood());
    }

    render() {
        const { mood } = this.props;
        const smileyProps = {
            moodClass: mood.moodClass,
            moodSet: this.props.moodSet,
        };
        //const moodText = Store.getMoodText();
        return (
            <div>
                <div className="smiley-box-lg">
                    <Smiley {...smileyProps} />
                    <div onClick={this.unsetMood.bind(this)}><Edit /></div>
                </div>
                <p className="white-text">{mood.moodText}</p>
                <p className={classNames("lt-grn-text", "small-text", "light")}>THANK YOU FOR YOUR FEEDBACK</p>
            </div>
        );
    }


}

/*SelectedMood.propTypes = {
    moodClass: PropTypes.string.required
};*/

export default SelectedMood




