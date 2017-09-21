import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { refreshAuthToken } from 'APP/actions/user_auth_actions'

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/auth/signin');
            };
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/auth/signin');
            }
        }

        // refresh the auth token if the expiration 
        // is less than 10 minutes away
        checkAuthToken() {
           const now = new Date()
           if (this.props.expiration - now < 600000) {
               this.props.refreshAuthToken()
           }
        }

        render() {
            this.checkAuthToken()
            return <ComposedComponent { ...this.props } />
        };
    };

    ///// CONTAINER /////

    function mapStateToProps({ currentUser }) {
        return { 
            authenticated: currentUser.id,
            expiration: currentUser.exp
         };
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            refreshAuthToken: () => dispatch(refreshAuthToken())
        }
    }

    return withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authentication))
}
