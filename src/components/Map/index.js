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
                <button class="ui red button" id="stepOne">Dział 1</button>'>
                <button class="ui red button" id="stepTwo">Dział 2</button>'>
                <button class="ui red button" id="stepThree">Dział 3</button>'>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(mapStateToProps)(Map);
