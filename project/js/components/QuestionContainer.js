import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Question from './Question';

class QuestionContainer extends Component {

    render() {
        const allQuestions = Store.getQuestions();
        let questions = [];
        for (let qn of allQuestions) {
            questions.push(
                <div>
                    <Question question={qn}/>
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






