import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import './map.css';

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
        return (
            <div className="map">
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ''}
                <ul className="tasks">
                    <li>
                        <Link to="/tasks/1">
                            <button>Dział 1</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks/2">
                            <button>Dział 2</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks/3">
                            <button>Dział 3</button>
                        </Link>
                    </li>
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
