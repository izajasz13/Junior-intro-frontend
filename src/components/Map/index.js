import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Map extends React.Component {
    render() {
        return (
            <div>
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
    { login }
)(Map);
