import React from 'react';
  
export default class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            valid: null,
            valids: {}
        };
    }
    
    getChildContext() {
        return {
            onChange: this.onChange.bind(this),
            onValidate: this.onValidate.bind(this)
        };
    }
    
    onValidate(name, valid){
        const {valids} = this.state;
        valids[name] = valid;
        
        this.setState({valids});
        
        const isAllValid = this.isValid();
        
        if(this.state.valid != isAllValid){
            this.setState({valid: isAllValid});
            
            this.props.onValidate && this.props.onValidate(isAllValid);
        }
    }
    
    isValid(){
        const invalid = Object.keys(this.state.valids).some(name => this.state.valids[name] === false);
        return !invalid;
    }
    
    onChange(name, value){
        let c = {};
        c[name] = value;
        
        this.props.onChange && this.props.onChange(c);
    }
    
    render() {
        return <form className="form-horizontal">
            {this.props.children}
        </form>
    }
};

Form.childContextTypes = {
    onChange: React.PropTypes.func,
    onValidate: React.PropTypes.func
};