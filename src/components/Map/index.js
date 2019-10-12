import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import "./map.css";

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = { redirectToLogin: false };
    }

    componentDidMount() {
        // Redirect to login if user is not logged
      //  if (!this.props.user.userId) this.setState({ redirectToLogin: true });
    }

    render() {
        return (
            <div className='map'>
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ''}
                <ul className='tasks'>
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

export default connect(mapStateToProps)(Map);
