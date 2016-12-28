import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Smiley from './Smiley';

import {setMood} from '../../actions/moodActions';

@connect((store) => {
    return {
        moodSet: store.mood.moodSet,
    }
})

class MoodSelector extends Component {

    setMood(mood) {
        this.props.dispatch(setMood());
    }

    render() {
        const smileyProps = {
            small: true
        };
        let smileys = [];
        for (let i = 5; i > 0; i--) {
            smileyProps.mood = i;
            smileyProps.moodClass = Store.getMoodClass({mood: i});
            smileys.push(
                <div
                    className="smiley-box-sm"
                    onClick={this.setMood.bind(this, smileyProps.mood)}
                    key={i}>
                    <Smiley {...smileyProps} />
                </div>)
        }
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className={classNames("col-md-4", "white-bkgrnd", "mood-selector-box", "rounded-corners")}>
                    <div className={classNames('med-grey-text', 'bold', 'top-spacer')}>Did you make a mistake? Please
                        select your correct mood:
                    </div>
                    <div>{smileys}</div>
                </div>
            </div>

        );
    }

}


export default MoodSelector
