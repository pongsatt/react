import React from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import Input from '../components/Input';
import Select from '../components/Select';
import {setRegistration, setValid} from '../actions/formActions';

const vendors = [
    {id: 1, name: 'Vendor#1',
    accountTypes: [
        {id: 1, name: 'Individual1',
        subTypes: [
            {id: 1, name: 'IRA'},
            {id: 2, name: 'Traditional IRA'},
        ]},
        {id: 2, name: 'Joint1',
        subTypes: [
            {id: 1, name: 'Traditional IRA'},
            {id: 2, name: 'SIMPLE IRA'},
        ]}
    ]},
    {id: 2, name: 'Vendor#2',
    accountTypes: [
        {id: 1, name: 'Individual2',
        subTypes: [
            {id: 1, name: 'IRA1'},
        ]},
        {id: 2, name: 'Joint2',
        subTypes: [
            {id: 1, name: 'IRA2'},
        ]}
    ]}
];

export class Registration extends React.Component {
    
    render(){
        const {vendor, accountType, subType} = this.props.reg;
        
        const selectedVendor = vendor && vendors.find(v => v.id == vendor);
        const accountTypes = selectedVendor && selectedVendor.accountTypes;
        
        const selectedAccountType = accountType && accountTypes && accountTypes.find(a => a.id == accountType);
        const subTypes = selectedAccountType && selectedAccountType.subTypes;
        
        return (
            <Form onChange={this.props.changeHandler} onValidate={this.props.onValidate}>
                <Select name="vendor" label="Vendor" value={vendor} list={vendors} required={true}/>
                <Select name="accountType" label="Account Type" value={accountType} list={accountTypes} required={true}/>
                <Select name="subType" label="Sub Account Type" value={subType} list={subTypes} required={true}/>
            </Form>
        );
    }
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    reg: state.data.get('registration').toJS()
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (reg) => {
      dispatch(setRegistration(reg))
    },
    
    onValidate: (valid) => {
        dispatch(setRegistration({
            valid
        }))
    }
  }
}

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);
