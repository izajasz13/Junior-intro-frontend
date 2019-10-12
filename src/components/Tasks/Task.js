import React from 'react';
import { connect } from 'react-redux';
import {postAnswer, fetchSection, editUser, editProgress} from '../../actions';
import './tasks.css';
import './UserBar.css';

class Task extends React.Component {
    state = {
        currentAnswer: null,
    }

    handleSubmit = () => {
        // console.log(this.props.task.id)
        // console.log(this.state.currentAnswer)
        // this.props.postAnswer(this.props.task.id, [this.state.currentAnswer])
        // console.log('a')
        // this.props.fetchSection()

        this.props.editUser();
        this.props.editProgress();
    }

    render() {
        const { task } = this.props;
        console.log(this.props.statee)

        return (
            <div className="task">
                <div className="taskText">
                    <div>{task.description}</div>
                    <div>
                        <br /> Nagroda: <br />
                        Doświadczenie: {task.prize.exp} <br /> Monety: {task.prize.coins}
                    </div>
                    <div>
                        {this.renderQuestions()}
                        <br />
                        <br />
                        {this.props.task.questions.length > 0 ? (
                            <button className="ui button" onClick={() => this.handleSubmit()}>
                                Wyślij odpowiedź
                            </button>
                         ) : null}
                        <br />
                    </div>
                </div>
            </div>
        );
    }

    renderQuestions = () => {
        if (!this.props.task.questions || this.props.task.questions.length === 0) return <div></div>;
        const questions = this.props.task.questions.map(question => {
            const key = question.question;
            const answers = question.answers.map(answer => {
                return (
                    <label key={answer.number}>
                        <input 
                            type="radio" 
                            name="key" 
                            onChange={!(this.state.currentAnswer === answer.number) ? () => this.setState({currentAnswer: answer.number}) : null}
                            checked={this.state.currentAnswer === answer.number} />
                            {answer.content}
                    </label>
                );
            });
            return (
                <div key={key}>
                    <br /> Test: <br />
                    {question.question}
                    <br />
                    {answers}
                </div>
            );
        });
        return <div> {questions} </div>;
    };
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section, task: state.task, statee: state };
};

export default connect(mapStateToProps, {
    fetchSection,
    postAnswer,
    editUser,
    editProgress,
})(Task);
