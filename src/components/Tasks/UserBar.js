import React from 'react';
import { connect } from 'react-redux';

class UserBar extends React.Component {
    render() {
        return <div> UserBar </div>;
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(
    mapStateToProps,
    {}
)(UserBar);
