import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    // Uncomment below & return when Authorized header
    // is figured out.


    // componentWillMount() {
    //     this.props.verifyCharacter();
    // }

    render() {
        // return (
        //     <div>{this.props.message}</div>
        // );
        return (
            <div>If you see this, you are AUTHED</div>
        );
    }
}

function mapStateToProps(state) {
    return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);