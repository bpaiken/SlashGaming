import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

/**
 * Can be deleted if we dont want a signoutComp
 */

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return <div>Signout Component</div>
    }
}

export default connect(null, actions)(Signout);