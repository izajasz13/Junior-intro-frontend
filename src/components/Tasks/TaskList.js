import React from 'react';
import { connect } from 'react-redux';
import './tasks.css';
import { fetchTask } from '../../actions';

class TaskList extends React.Component {
    componentDidMount() {
        if (!!this.props.section.tasks && this.props.section.tasks.length !== 0) {
            this.props.fetchTask(this.props.section.tasks[0].taskId);
        }
    }

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
                <button key={task.number} id={task.taskId} onClick={this.clickTask} className="step">
                    <i className="shopping cart icon"></i>
                    <div className="content">
                        <div className="title">{task.number + '. ' + (task.name || task.title)}</div>
                        <div className="description">Skompletuj ekwipunek</div>
                    </div>
                </button>
            );
        });
        return <div className="ui vertical steps">{tasks}</div>;
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(
    mapStateToProps,
    { fetchTask }
)(TaskList);
