import React from 'react';
import { connect } from 'react-redux';
import { fetchTask } from '../../actions';

class TaskList extends React.Component {
    clickTask = event => {
        this.props.fetchTask(event.target.id);
    };

    render() {
        return <div> {this.renderTasks()}</div>;
    }
    renderTasks() {
        if (this.props.section.tasks.length === 0) return <div></div>;
        const tasks = this.props.section.tasks.map(task => {
            return (
                <button key={task.number} id={task._id} onClick={this.clickTask}>
                    {task.number + '. ' + task.name}
                </button>
            );
        });
        return <div>{tasks}</div>;
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(
    mapStateToProps,
    { fetchTask }
)(TaskList);
