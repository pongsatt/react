import React from 'react';
import classNames from 'classnames';
import {InputField} from '../../decorators/InputField';

@InputField
export default class Input extends React.Component {
    changeHandler(){
        const {input} = this.refs;
        const {name, value} = input;
        
        this.props.validate(value);
        this.props.onChange(name, value);
    }
    
    blurHandler(){
        const {input} = this.refs;
        const {name, value} = input;
        
        this.props.validate(value);
    }
    
    render() {
        const {label, type, placeholder, name, onChange, value} = this.props;
        const {id, error} = this.props;
        
        const groupClasses = classNames('form-group', {'has-error': error});
        
        return (
            
            <div className={groupClasses}>
                    <label htmlFor={id} className="col-sm-2 control-label">{label}</label>
                        <div className="col-sm-10">
                            <input ref='input' type={type || 'text'} 
                            className="form-control" 
                            id={id} 
                            name={name}
                            value={value}
                            placeholder={placeholder || label}
                            onChange={this.changeHandler.bind(this)}
                            onBlur={this.blurHandler.bind(this)}
                            />
                        </div>
                </div>
        );
    }
    
}