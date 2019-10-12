import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserBar from './UserBar';
import TaskList from './TaskList';
import Task from './Task';

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = { redirectToLogin: false };
    }

    componentDidMount() {
        // Redirect to login if user is not logged
        if (!this.props.user._id) this.setState({ redirectToLogin: true });
    }

    render() {
        return (
            <div>
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ''}
                <UserBar />
                <TaskList />
                <Task />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Tasks);
