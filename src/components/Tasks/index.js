import React from 'react';
import UserBar from './UserBar';
import TaskList from './TaskList';
import Task from './Task';

const Tasks = () => {
    return (
        <div>
            <UserBar />
            <TaskList />
            <Task />
        </div>
    );
};

export default Tasks;
