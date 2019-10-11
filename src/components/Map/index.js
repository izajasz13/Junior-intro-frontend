import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Map extends React.Component {
    render() {
        localStorage.setItem('userId', '1234');
        return (
            <div>
                <ul>
                    {console.log(this.props.user)}
                    <li>Dział 1</li>
                    <li>Dział 2</li>
                    <li>Dział 3</li>
                </ul>
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
)(Map);
