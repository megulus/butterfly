import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import MoodDisplay from './MoodDisplay';
import QuestionContainer from './QuestionContainer';
import Footer from './Footer';
import Logo from './Logo';
import Submitted from './Submitted';
import classNames from 'classnames';

class AppView extends Component {

    constructor() {
        super();
        this.state = {
            submitted: Store.isSubmitted()
        };
        Store.addListener('submitted', () => {
            this.setState({
                submitted: Store.isSubmitted()
            })
        })
    }

    render() {
        let header = (
            <div className={classNames('app-header', 'row', 'bottom-spacer')}>
                <div className="col-md-1"><Logo /></div>
                <div className={classNames("col-md-10", "h4", "white-text")}>Butterfly Inc.</div>
            </div>
        );
        let footer = (
            <div className="row">
                <Footer />
            </div>
        );
        if (!this.state.submitted) {
            return (
                <div className={classNames('container', 'med-grn-bkgrnd')}>
                    {header}
                    <MoodDisplay />
                    <QuestionContainer/>
                    {footer}
                </div>
            );
        } else {
            return (
                <div className={classNames('container', 'med-grn-bkgrnd')}>
                    {header}
                    <div className="row">
                        <Submitted/>
                    </div>
                    {footer}
                </div>
            );
        }
    }

}


export default AppView
