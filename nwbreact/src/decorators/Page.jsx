import React from 'react';
import without from 'lodash.without';

export var Page = ComposedComponent => class extends React.Component {

    static displayName = 'PageEnhancer';

    constructor(){
        super();
        this.state = {
            valid: null,
            valids: {}
        };
        
        this.validations = [];
    }
    
    static childContextTypes = {
        onChange: React.PropTypes.func,
        onValidate: React.PropTypes.func,
        registerValidation: React.PropTypes.func
    };
    
    getChildContext() {
        return {
            onChange: this._onChange.bind(this),
            onValidate: this._onValidate.bind(this),
            registerValidation: this.registerValidation.bind(this),
        };
    }
    
    registerValidation(validateFn) {
        this.validations = [...this.validations, validateFn];
        
        return this.removeValidation.bind(this, validateFn);
    }
    
    removeValidation(ref) {
        this.validations = without(this.validations, ref);
    }
    
    isValid() {
        return this.validations.reduce((memo, validateFn) => 
            validateFn() && memo, true);
    }
    
    _onChange(name, value){
        const {onChange} = this.props;
        
        onChange && onChange(name, value);
    }
    
    _onValidate(fieldName, fieldValid){
        const {onValidate, name, routes} = this.props;
        const {valids, valid} = this.state;
        
        const newValids = Object.assign(valids, {[fieldName]:fieldValid});
        
        this.setState({valids: newValids});
        
        const newValid = Object.keys(newValids).every(key => newValids[key]);
        
        if(newValid != valid){
            onValidate && onValidate(routes[1].path, newValid);
        }
        
    }

    render() {
        return <ComposedComponent 
        isValid={this.isValid.bind(this)}
        {...this.props} 
        {...this.state} />;
    }
};