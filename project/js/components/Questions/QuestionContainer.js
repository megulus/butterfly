import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import AnswerInput from './AnswerInput';
import BoxBanner from './BoxBanner';
/*import Button from '../Button/Button';*/
import Question from './Question';

import styles from './Questions.css'


@connect((store) => {
    return {
        questions: store.questions.questions,
    }
})

class QuestionContainer extends Component {


    submit() {
        /*Store.saveData();*/
    }


    render() {
        let questions = [];
        this.props.questions.map((question, index) => {
            questions.push(
                <Question qnIndex={index} question={question} key={index}/>
            );
        });
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
                            {/*<Button />*/}
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

export default QuestionContainer






