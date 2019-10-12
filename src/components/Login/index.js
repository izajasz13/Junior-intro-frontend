import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', password: '' };
    }

    handleChange = event => {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;

            case 'password':
                this.setState({ password: event.target.value });
                break;

            default:
                break;
        }
    };

    handleSubmit = event => {
        event.persist();
        const { username, password } = this.state;
        this.props.login(username, password);
    };

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                {!!this.props.user._id ? <Redirect push to="/" /> : ''}
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">Zaloguj się na konto</div>
                    </h2>
                    <form className="ui large form" id="formLogin" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Login"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Hasło"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button" form="formLogin">
                                Zaloguj
                            </button>
                        </div>

                        <div className="ui error message"></div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(
    mapStateToProps,
    { login }
)(Login);
