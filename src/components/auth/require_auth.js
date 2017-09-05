import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/signin');
            };
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/signin');
            }
        }

        render() {
            return <ComposedComponent { ...this.props } />
        };
    };

    function mapStateToProps(state) {
        return { authenticated: state.currentUser.id };
    }

    return withRouter(connect(mapStateToProps)(Authentication))
}
