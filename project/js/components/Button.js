import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';


class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: Store.userCanSubmit()
        };
        Store.addListener('requiredinputset', () => {
            this.setState({
                active: Store.userCanSubmit()
            });
        })
    }

    render() {
        let btnClass = this.state.active
            ? 'btnActive'
            : 'btnInactive';
        return (
            <div className={btnClass}></div>
        );
    }

}

export default Button