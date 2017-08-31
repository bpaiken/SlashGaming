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
        return (
            <div>
                <div>{this.props.message}</div>
                <div>If you see this, you are AUTHED</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { message: state.currentUser.username};
}

export default connect(mapStateToProps, actions)(Feature);