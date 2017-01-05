import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMood } from '../../actions/moodActions';

import Footer from '../Footer';
import Header from '../Header/Header';
import MoodDisplay from '../MoodDisplay/MoodDisplay';
import QuestionContainer from '../Questions/QuestionContainer';
import Submitted from '../Submitted/Submitted';

import style from './AppView.css';


@connect((store) => {
    return {
        moodSet: store.mood.moodSet,
        mood: store.mood.mood,
        canSubmit: store.submit.canSubmit,
        submitted: store.submit.submitted,
    }
})

class AppView extends Component {

    componentWillMount() {
        const { query } = this.props.location;
        const { v } = query;
        const initialMood = v ? v : 3;
        this.props.dispatch(setMood(initialMood));
    }

    render() {
        const currState  = this.props;
        //console.log(currState.submitted);
        const mainContent =  currState.submitted
            ? <Submitted />
            : <MoodDisplay />;
        return (
            <div className={style.appBackground}>
                <Header />
                {mainContent}
                <Footer />
            </div>
        );
    }
}

export default AppView
