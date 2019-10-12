import React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component {
    render() {
        return <div> {this.renderTasks()}</div>;
    }
    renderTasks() {
        if (this.props.section.tasks.length === 0) return <div></div>;
        const tasks = this.props.section.tasks.map(task => {
            return <li key={task.number}>{task.name}</li>;
        });
        return <ul></ul>;
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(mapStateToProps)(TaskList);
