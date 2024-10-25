import React, { useState } from 'react';
import TaskOverviewHeader from '../components/TaskOverviewHeader';
import TaskGrid from '../components/TaskGrid';
import TaskNotes from '../components/TaskNotes';

function TaskOverview() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTask, setSelectedTask] = useState(null);

    // Sample tasks - in practice, these would be fetched from the API for the selected date.
    const tasks = [
        { name: 'Study', hours: 4, color: 'red' },
        { name: 'Exercise', hours: 2, color: 'blue' },
        { name: 'Work', hours: 8, color: 'green' },
    ];

    const handleTaskClick = (task) => {
        setSelectedTask(task);  // Set the selected task for adding notes
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <TaskOverviewHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />
            <div style={{ display: 'flex', height: '95%' }}>
                <TaskGrid tasks={tasks} handleTaskClick={handleTaskClick} />
                {selectedTask && (
                    <div style={{ width: '50%', padding: '1rem' }}>
                        <TaskNotes selectedTask={selectedTask} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskOverview;
