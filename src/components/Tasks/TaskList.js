import React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
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
    {}
)(TaskList);
