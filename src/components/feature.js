import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Event from 'APP/components/event'
import CharacterList from 'APP/components/character_lists/user_selectable'

class Feature extends Component {
    // Uncomment below & return when Authorized header
    // is figured out.


    // componentWillMount() {
    //     this.props.verifyCharacter();
    // }

    render() {
        return (
            <div>
                <Event />
                {/* <CharacterList selectable={true}/> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { message: state.currentUser.username};
}

export default connect(mapStateToProps, actions)(Feature);