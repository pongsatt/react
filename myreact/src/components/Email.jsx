import React from 'react';
import Input from './Input';

export default class Email extends React.Component {
    render() {
        return (
            <Input ref="input" label="Email" isEmail={true} placeHolder="name@example.com" {...this.props}/>
        )
    }
};