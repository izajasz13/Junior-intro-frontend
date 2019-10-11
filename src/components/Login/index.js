import React from 'react';
import "./login.css";

const Login = () => {
    return (
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <form class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="login" placeholder="Login"></input>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Hasło"></input>
                            </div>
                        </div>
                        <div class="ui fluid large submit button">Zaloguj</div>
                    </div>

                    <div class="ui error message"></div>

                </form>
            </div>
        </div>
    );
};

export default Login;
