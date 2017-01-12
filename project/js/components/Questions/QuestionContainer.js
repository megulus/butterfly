import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import { submit } from '../../actions/submissionActions';

import AnswerInput from './AnswerInput';
import BoxBanner from './BoxBanner';
import Button from '../Button/Button';
import Question from './Question';

import styles from './Questions.css'


@connect((store) => {
    return {
        questions: store.questions.questions,
        canSubmit: store.submit.canSubmit,
    }
})

class QuestionContainer extends Component {


    submit() {
        this.props.dispatch(submit());
    }


    render() {
        let questions = [];
        this.props.questions.map((question, index) => {
            questions.push(
                <Question qnIndex={index} question={question} key={index}/>
            );
        });
        let buttonProps = this.props.canSubmit
            ? 'active'
            : null;
        return (
            <div className='row'>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className={styles.qnBox}>
                        <BoxBanner/>
                        <div className={styles.subBanner}>
                            <p>Do you agree with the following statements:</p>
                        </div>
                        {questions}
                        <div className={styles.addlInput}>
                            <p>Anything to add?</p>
                            <AnswerInput type="extra"/>
                        </div>
                        <div onClick={this.submit.bind(this)} className="row">
                            <Button active={buttonProps} />
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

export default QuestionContainer






