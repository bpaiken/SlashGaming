import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl'
import { Link, browserHistory } from 'react-router';

import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props)

        // Do we need this?
        this.state = { activeTab: null };
    }

    onChange(id) {
        if (this.props.authenticated) {
            switch (id) {
                case 1:
                    browserHistory.push('/signout');
                    break;

                case 2:
                    browserHistory.push('/feature');
                    break;

                default:
                    browserHistory.push('/');
            }

        } else {
            switch (id) {
                case 1:
                    browserHistory.push('/signin');
                    console.log("SIGNIN");
                    break;

                case 2:
                    browserHistory.push('/signup');
                    break;

                default:
                    browserHistory.push('/');
            }
        }
    }

    renderNav() {
        if (this.props.authenticated) {
            // show links when authed
            return [
                <Tab component={Link} key={1} to='/signout'>Sign Out</Tab>,
                <Tab component={Link} key={2} to='/feature'>Feature</Tab>,
            ]
        } else {
            // show links when not authed
            return [
                <Tab component={Link} key={1} to='/signin'>Sign In</Tab>,
                <Tab component={Link} key={2} to='/signup'>Sign Up</Tab>,
            ]
        }
    }
    render() {
        return (
            <div>
                <Tabs ripple activeTab={this.state.active} onChange={this.onChange.bind(this)}>
                    <Tab component={Link} active to="/">Home</Tab>
                    {this.renderNav()}
                </Tabs>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);