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
        return (
            <div class="ui vertical steps">
                <div class="step">
                    <i class="shopping cart icon"></i>
                    <div class="content">
                        <div class="title">Wyzwanie Pierwsze</div>
                        <div class="description">Skompletuj ekwipunek</div>
                    </div>
                </div>
                <div class="step">
                    <i class="user secret icon"></i>
                    <div class="content">
                        <div class="title">Wyzwanie Drugie</div>
                        <div class="description">Zapytaj Mędrca</div>
                    </div>
                </div>
                <div class="step">
                    <i class="beer icon"></i>
                    <div class="content">
                        <div class="title">Wyzwanie Trzecie</div>
                        <div class="description">Skompletuj Drużynę</div>
                    </div>
                </div>
                <div class="step">
                    <i class="book icon"></i>
                    <div class="content">
                        <div class="title">Wyzwanie Czwarte</div>
                        <div class="description">Sprawdź swoją wiedzę</div>
                    </div>
                </div>
                <div class="step">
                    <i class="gitkraken icon"></i>
                    <div class="content">
                        <div class="title">Wyzwanie Piąte</div>
                        <div class="description">Pokonaj Smoka</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section };
};

export default connect(
    mapStateToProps,
    { fetchTask }
)(TaskList);
