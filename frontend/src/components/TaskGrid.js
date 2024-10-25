import React from 'react';

function TaskGrid({ tasks, handleTaskClick }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '1rem', padding: '1rem' }}>
            {tasks.map((task, index) => (
                <div
                    key={index}
                    onClick={() => handleTaskClick(task)}
                    style={{ backgroundColor: task.color, height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {task.name} ({task.hours} hrs)
                </div>
            ))}
        </div>
    );
}

export default TaskGrid;
