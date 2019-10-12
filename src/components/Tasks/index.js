import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserBar from './UserBar';
import TaskList from './TaskList';
import Task from './Task';
import { fetchSection } from '../../actions';
import './tasks.css';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirectToLogin: false };
    }

    componentDidMount() {
        // Redirect to login if user is not logged
        if (!this.props.user._id) this.setState({ redirectToLogin: true });
        this.props.fetchSection(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ color: 'white' }}>
                {!this.props.user._id ? <Redirect push to="/login" /> : ''}
                <UserBar />
                <div className='flex'>
                    <TaskList />
                    <Task />
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
    { fetchSection }
)(Tasks);
