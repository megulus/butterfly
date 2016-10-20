import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Smiley from './Smiley';

class SelectedMood extends Component {

    render() {
        const smileyProps = {
            moodClass: Store.getMoodClass(),
            small: false
        };
        const moodText = Store.getMoodText();
        return (
            <div>
                <div className="smiley-box"><Smiley {...smileyProps} /></div>
                <div>{moodText}</div>
            </div>
        );
    }


}

export default SelectedMood




