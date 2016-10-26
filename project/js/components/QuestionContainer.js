import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Question from './Question';
import Rating from './Rating';

class QuestionContainer extends Component {

    render() {
        const allQuestionsObj = Store.getQuestionsObj();
        const keys = Object.keys(allQuestionsObj).length;
        let questions = [];
        for (let i = 1; i <= keys; i++) {
            let qn = allQuestionsObj[i]['question'];
            questions.push(
                <div>
                    <Question qnNumber={i} question={qn}/>
                    <Rating qnNumber={i} />
                </div>
            );
        }
        return (
            <div>
                {questions}
            </div>);
    }

}

export default QuestionContainer






