import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import './map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);

        const width = window.innerWidth - 100;
        const height = window.innerHeight -100;

        const width1 = 10
        const height1 = 60
        const width2 =  30
        const height2 =  30
        const width3 = 60
        const height3 =  10
        const width4 =  65
        const height4 =  60
        const width5 =  80
        const height5 =  55

        this.state = { 
            redirectToLogin: false,
            width1, 
            height1,
            width2, 
            height2,
            width3, 
            height3,
            width4, 
            height4,
            width5, 
            height5,
        };
    }

    componentDidMount() {
        // Redirect to login if user is not logged
        if (!this.props.user._id) this.setState({ redirectToLogin: true });
        // Fetch user data if userId exists
        if (!this.props.user.username) this.props.fetchUser(this.props.user._id);
    }

    render() {
        const {
            width1, 
            height1,
            width2, 
            height2,
            width3, 
            height3,
            width4, 
            height4,
            width5, 
            height5,
        } = this.state

        return (
            <div className="map">
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ''}
                <Link to="/tasks/1" className="button-element" style={{left: width1+'%', top: height1+'%'}}>
                    {/* <i className="book icon" /> */}
                    <span>Księga 1</span>
                </Link>
                <Link to="/tasks/2" className="button-element" style={{left: width2+'%', top: height2+'%', opacity: '0.5'}}>
                    <span>Księga 2</span>
                </Link>
                <Link to="/tasks/3" className="button-element" style={{left: width3+'%', top: height3+'%', opacity: '0.5'}}>
                    <span>Księga 3</span>
                </Link>
                <Link to="/tasks/4" className="button-element" style={{left: width4+'%', top: height4+'%', opacity: '0.5'}}>
                    <span>Księga 4</span>
                </Link>
                <Link to="/tasks/5" className="button-element" style={{left: width5+'%', top: height5+'%', opacity: '0.5'}}>
                    <span>Księga 5</span>
                </Link>
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
