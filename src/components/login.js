import React, { Component } from 'react';
import { Textfield, Card, CardText, CardActions, Button } from 'react-mdl'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.authenticate(this.state.username, this.state.password);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="login">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <form id="login" onSubmit={this.handleSubmit}>
                    <CardText>
                        <Textfield name="username" value={this.state.username} onChange={this.handleInputChange} label="Username" autoComplete="off" />
                        <Textfield name="password" value={this.state.password} onChange={this.handleInputChange} label="Password" type="password" autoComplete="off"/>
                    </CardText>
                    <CardActions border>
                        <Button colored>Login</Button>
                    </CardActions>
                    </form>
                </Card>
            </div>
        );
    };
}