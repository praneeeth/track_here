import React from 'react';

function TaskOverviewHeader({ selectedDate, onDateChange }) {
    const handleDateChange = (event) => {
        onDateChange(new Date(event.target.value)); // Update the selected date
    };

    return (
        <div style={{ height: '5vh', backgroundColor: '#333', color: '#fff', textAlign: 'center', lineHeight: '5vh' }}>
            <h2>Task Overview</h2>
            <input 
                type="date" 
                value={selectedDate.toISOString().substr(0, 10)} 
                onChange={handleDateChange} 
                style={{ marginLeft: '1rem', padding: '0.5rem' }} 
            />
        </div>
    );
}

export default TaskOverviewHeader;
