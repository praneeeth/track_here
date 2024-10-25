import React, { useState } from 'react';
import Header from '../components/header';
import LeftPanel from '../components/leftPanel';
import RightPanel from '../components/rightPanel';

function TaskLayout() {
    const [taskName, setTaskName] = useState('');
    const [hours, setHours] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (taskName && hours) {
            const newTask = {
                name: taskName,
                hours: hours,
                color: '#' + Math.floor(Math.random() * 16777215).toString(16)
            };
            setTasks([...tasks, newTask]);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', height: '95%' }}>
                <LeftPanel taskName={taskName} setTaskName={setTaskName} hours={hours} setHours={setHours} handleAddTask={handleAddTask} />
                <RightPanel tasks={tasks} />
            </div>
        </div>
    );
}

export default TaskLayout;
