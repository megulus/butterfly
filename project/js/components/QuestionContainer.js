import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import Question from './Question';
import AnswerInput from './AnswerInput';
import Button from './Button';
import classNames from 'classnames';

class QuestionContainer extends Component {

    constructor() {
        super();
    }

    submit() {
        Store.saveData();
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
            <div className="row">
                <div className="col-md-4"></div>
                <div className={classNames("col-md-4", "dark-grn-bkgrnd", "qn-box", "rounded-corners")}>
                    <div className={classNames("banner", "med-grn-bkgrnd")}>
                        <div className={classNames("triangle")}></div>
                        <div
                            className={classNames(
                                "banner-base",
                                "lt-grn-bkgrnd",
                                "rounded-corners-top",
                                "small-text",
                                "white-text")}>
                            <p>Your answers will always remain anonymous</p>
                        </div>
                    </div>
                    <div className="sub-banner">
                        <p className="lt-grn-text">Do you agree with the following statements:</p>
                    </div>
                    {questions}
                    <div className={classNames("row", "question", "lt-grn-bkgrnd")}>
                        <p>Anything to add?</p>
                        <AnswerInput type="extra"/>
                    </div>
                    <div onClick={this.submit.bind(this)} className="row">
                        <Button />
                    </div>
                </div>
            </div>
        );


    }
}

export default QuestionContainer






