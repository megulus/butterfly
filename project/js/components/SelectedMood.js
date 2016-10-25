import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Smiley from './Smiley';
import Edit from './Edit';

class SelectedMood extends Component {

    unsetMood() {
        Store.unsetMood();
    }

    render() {
        const smileyProps = {
            moodClass: Store.getMoodClass(),
            small: false
        };
        const moodText = Store.getMoodText();
        return (
            <div>
                <div className="smiley-box-lg">
                    <Smiley {...smileyProps} />
                    <div onClick={this.unsetMood.bind(this)}><Edit /></div>
                </div>
                <div>{moodText}</div>
                <div>Thank you for your feedback</div>
            </div>
        );
    }


}

export default SelectedMood



