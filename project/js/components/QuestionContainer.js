import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Question from './Question';
import Rating from './Rating';
import AnswerInput from './AnswerInput';

class QuestionContainer extends Component {

    constructor() {
        super();
    }

    render() {
        const allQuestionsObj = Store.getQuestionsObj();
        const keys = Object.keys(allQuestionsObj).length;
        let questions = [];
        for (let i = 1; i <= keys; i++) {
            let qn = allQuestionsObj[i]['question'];
            questions.push(
                <div>
                    <Question qnNumber={i} question={qn}/>
                </div>
            );
        }
        return (
            <div>
                {questions}
                <AnswerInput ref="extra"/>
            </div>);
    }

}

export default QuestionContainer






