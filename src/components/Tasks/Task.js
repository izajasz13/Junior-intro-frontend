import React from 'react';
import { connect } from 'react-redux';

class Tasks extends React.Component {
    render() {
        console.log(this.props.taskAmount)
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
    return { user: state.user, section: state.section, taskAmount: state };
};

export default connect(mapStateToProps)(Tasks);
