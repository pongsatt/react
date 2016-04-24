import React from 'react';

export var InputField = ComposedComponent => class extends React.Component {

    static displayName = 'InputFieldEnhancer';
    
    constructor(){
        super();
        this.state = {
            id: Math.random() + 'input',
            error: false
        }
    }
    
    static contextTypes = {
        onChange: React.PropTypes.func.isRequired,
        onValidate: React.PropTypes.func.isRequired,
        registerValidation: React.PropTypes.func.isRequired
    }
    
    componentWillMount() {
        this.removeValidationFromContext = this.context.registerValidation(() => 
            this.validate());
    }

    componentWillUnmount() {
        this.removeValidationFromContext();
    }

    validate(currentValue){
        const {require, name, value} = this.props;
        
        const validateValue = currentValue || value;
        
        const error = require && !validateValue
        this.setState({error: error});
        
        const valid = !error;
        
        const {onValidate} = this.context;
        
        onValidate && onValidate(name, valid);
        
        return valid;
    }
    
    render() {
        const {onChange, onValidate} = this.context;
        
        return <ComposedComponent 
        validate={this.validate.bind(this)} onChange={onChange} {...this.props} {...this.state} />;
    }
};