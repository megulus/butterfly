import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Question from './Question';
import Rating from './Rating';
import AnswerInput from './AnswerInput';
import Button from './Button';
import classNames from 'classnames';

class QuestionContainer extends Component {

    constructor() {
        super();
    }

    render() {
        const allQuestionsObj = Store.getQuestionsObj();
        const keys = Object.keys(allQuestionsObj['questions']).length;
        let questions = [];
        for (let i = 1; i <= keys; i++) {
            let qn = allQuestionsObj['questions'][i]['question'];
            questions.push(
                <div>
                    <Question qnNumber={i} question={qn}/>
                </div>
            );
        }
        return (
            <div>
                {questions}
                <div className="row"><AnswerInput type="extra"/></div>
                <div className="row"><Button /></div>
            </div>);
    }
}

export default QuestionContainer






