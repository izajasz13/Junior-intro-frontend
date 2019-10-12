import React from 'react';
import { connect } from 'react-redux';

import './UserBar.css'

class UserBar extends React.Component {
    render() {
        const {user} = this.props

        return (
            <div className="user-bar-container">
                <div>
                    {/* {user.name} */}
                    Adam
                </div>
                <div>
                <div class="ui indicating progress active" data-percent="50">
                    <div class="bar"></div>
                    <div class="label">Postęp</div>
                </div>
                </div>
                <div>
                    {/* {user.coins} coins */}
                    100 <img src="dollar.png" />
                </div>
                <div>
                    1000 <img src="goal.png" />
                </div>
                <div className="right-buttons">
                <div className="spellbook">
                    <img src="open-book.png" />
                    <div>Księga zaklęć</div>
                </div>
                <div>
                    <button className="ui button"><img src="logout.png" /></button>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(mapStateToProps)(UserBar);
