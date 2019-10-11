import React from 'react';
import { connect } from 'react-redux';

class Tasks extends React.Component {
    render() {
        return (
            <div>
                <div>Opis</div>
                <div>Nagrody</div>
                <div>Test</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(
    mapStateToProps,
    {}
)(Tasks);
