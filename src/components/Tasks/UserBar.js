import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

import './UserBar.css';

class UserBar extends React.Component {
    componentDidMount() {
        if (!this.props.user.name) this.props.fetchUser(localStorage.getItem('userId'));
    }
    render() {
        const { user } = this.props;

        return (
            <div className="user-bar-container">
                <div>{user.name}</div>
                <div>
                    <div className="ui indicating progress active" data-percent="50">
                        <div className="bar"></div>
                        <div className="label">Postęp</div>
                    </div>
                </div>
                <div>
                    {user.coins}
                    <img src="dollar.png" alt="dollar" />
                </div>
                <div>
                    {user.experience} <img src="goal.png" alt="goal" />
                </div>
                <div className="right-buttons">
                    <div className="spellbook">
                        <img src="open-book.png" alt="open book" />
                        <div>Księga zaklęć</div>
                    </div>
                    <div>
                        <button className="ui button">
                            <img src="logout.png" alt="logout" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(
    mapStateToProps,
    { fetchUser }
)(UserBar);
