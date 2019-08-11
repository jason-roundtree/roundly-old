import React from 'react';
import { withFormsy } from 'formsy-react';

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        const errorMessage = this.props.getErrorMessage();
        return (
            <div>
                <input 
                    onChange={this.changeValue} 
                    type="text" 
                    value={this.props.getValue() || ''} 
                />
                <span>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(MyInput);