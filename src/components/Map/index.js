import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = { redirectToLogin: false };
    }

    componentDidMount() {
        // Redirect to login if user is not logged
        if (!this.props.user._id) this.setState({ redirectToLogin: true });
        // Fetch user data if userId exists
        if (!this.props.user.username) this.props.fetchUser(this.props.user._id);
    }

    render() {
        console.log(this.props.user);
        return (
            <div>
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ''}
                <ul>
                    <li>Dział 1</li>
                    <li>Dział 2</li>
                    <li>Dział 3</li>
                </ul>
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
)(Map);
