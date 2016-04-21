import React from 'react';
import Input from './Input';

export default class Phone extends React.Component {
    render() {
        return (
            <Input label="Phone" placeHolder="02 210 2120" {...this.props}/>
        )
    }
};