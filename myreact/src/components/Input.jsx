import React from 'react';
import {validate} from '../utils/Validators';
import classNames from 'classnames';
import {getId, getRules, getErrors} from '../utils/FormUtils';
  
export default class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            valid: null,
            errorMsg: ''
        };
    }
    
    componentWillReceiveProps(newProps) {
        this.setState({value: newProps.value});
    }
    
    validate(){
        const {input} = this.refs;
        
        const rules = getRules(input, this.props);
        
        const errors = getErrors(rules);
        
        let error = false;
        let msg = '';
        if(errors && errors.length){
            error = true;
            msg = errors[0].msg;
        }
        
        const valid = !error;
        
        this.setState({errorMsg: msg});
        
        if(this.state.valid != valid){
            this.setState({valid: valid});
            
            this.context.onValidate && this.context.onValidate(input.name, valid);
            
            this.context.onChange && this.context.onChange(input.name, input.value);
        }
        
        return valid;
    }
    
    handleChange(e){
        const {input} = this.refs;
        
        this.setState({value: input.value});
        
        this.validate();
    }
    
    handleBlur(e){
        this.validate();
    }

    render() {
        const id = getId();
        
        const classes = classNames('form-group', {'has-error': this.state.valid != null && !this.state.valid});
        
        return <div className={classes}>
                        <label for={id} className="col-sm-4 control-label">{this.props.label}</label>
                        <div className="col-sm-6">
                            <input ref="input" 
                                type="text" 
                                name={this.props.name}
                                value={this.state.value}
                                className="form-control"
                                id={id} 
                                placeholder={this.props.placeHolder || this.props.label}
                                onBlur={this.handleBlur.bind(this)}
                                onChange={this.handleChange.bind(this)}
                                />
                            <span className="help-block">{this.state.errorMsg}</span>
                        </div>
                    </div>
    }
};

Input.contextTypes = {
    onChange: React.PropTypes.func.isRequired,
    onValidate: React.PropTypes.func.isRequired,
};