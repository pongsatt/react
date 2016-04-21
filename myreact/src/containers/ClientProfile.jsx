import React from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import Email from '../components/Email';
import Phone from '../components/Phone';
import {setClientProfile, setClientProfileValid} from '../actions/formActions';

export class ClientProfile extends React.Component {
    render(){
        return (
            <Form onChange={this.props.changeHandler} onValidate={this.props.onValidate}>
                <Email name="email" required={true} value={this.props.clientProfile.email}/>
                <Phone name="phone" required={true} value={this.props.clientProfile.phone}/>
            </Form>  
        );
    }
}

function mapStateToProps(state) {
  return {
    clientProfile: state.data.get('clientProfile').toJS()
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (clientProfile) => {
            dispatch(setClientProfile(clientProfile))
        },
        onValidate: (valid) => {
            dispatch(setClientProfile({valid}))
        },
    }
}

export const ClientProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
