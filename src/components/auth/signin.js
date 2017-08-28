import React, { Component } from 'react';
import { Textfield, Card, CardText, CardActions, Button } from 'react-mdl'

import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.signinUser(this.state.username, this.state.password)
    }

    handleError() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'>
                    <strong>{this.props.errorMessage}</strong>
                </div>
            );
        }
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="login">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <form id="login" onSubmit={this.handleSubmit}>
                        <CardText>
                            <Textfield name="username" value={this.state.username} onChange={this.handleInputChange} label="Username" autoComplete="off" />
                            <Textfield name="password" value={this.state.password} onChange={this.handleInputChange} label="Password" type="password" autoComplete="off" />
                        </CardText>
                        {this.handleError()}
                        <CardActions border>
                            <Button colored>Login</Button>
                        </CardActions>
                    </form>
                </Card>
            </div>
        );
    };
}


function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Signin);

