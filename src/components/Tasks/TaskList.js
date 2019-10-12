import React from 'react';
import { connect } from 'react-redux';
import './tasks.css';
import { fetchTask } from '../../actions';

class TaskList extends React.Component {
    clickTask = event => {
        this.props.fetchTask(event.target.id);
    };

    render() {
        return <div> {this.renderTasks()}</div>;
    }
    renderTasks() {
        console.log(this.props.section.tasks);
        if (this.props.section.tasks.length === 0) return <div></div>;
        const tasks = this.props.section.tasks.map(task => {
            console.log(task);
            return (
                <button key={task.number} id={task._id} onClick={this.clickTask} className="step">
                    <i className="shopping cart icon"></i>
                    <div className="content">
                        <div className="title">{task.number + '. ' + task.name}</div>
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