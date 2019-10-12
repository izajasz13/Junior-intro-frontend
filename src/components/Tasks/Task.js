import React from 'react';
import { connect } from 'react-redux';
import './tasks.css';

class Task extends React.Component {
    render() {
        console.log('taskdes:', this.props.task);
        const { task } = this.props;
        return (
            <div className="task">
                <div>{task.description}</div>
                <div>
                    Prize: <br />
                    Experience: {task.prize.exp} <br /> Coins: {task.prize.coins}
                </div>
                <div>
                    Test: <br />
                    {this.renderQuestions()}
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }

    renderQuestions = () => {
        console.log('QUUIISSZZZ: ', this.props.task.questions);
        if (!this.props.task.questions || this.props.task.questions.length === 0) return <div></div>;
        const questions = this.props.task.questions.map(question => {
            const key = question.question;
            const answers = question.answers.map(answer => {
                return (
                    <label>
                        <input type="radio" name="key" /> {answer}
                    </label>
                );
            });
            return <div key={key}>{answers}</div>;
        });
        return <div>{questions}</div>;
    };
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section, task: state.task };
};

export default connect(mapStateToProps)(Task);
