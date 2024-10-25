function LeftPanel({ taskName, setTaskName, hours, setHours, handleAddTask }) {
    return (
        <div style={{ width: '30%', padding: '1rem', backgroundColor: '#f5f5f5' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h3>Task Name</h3>
                <input 
                    type="text" 
                    placeholder="Enter task name" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                    style={{ width: '100%', padding: '0.5rem' }} 
                />
                <h4>Hours Required</h4>
                <input 
                    type="number" 
                    max="18" 
                    min="1" 
                    value={hours} 
                    onChange={(e) => setHours(e.target.value)} 
                    style={{ width: '100%', padding: '0.5rem' }} 
                />
                <button onClick={handleAddTask} style={{ marginTop: '1rem' }}>Add Task</button>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <h3>Task Timeline (18-hour day)</h3>
                {/* Visualize a task timeline */}
                <div style={{ height: '30vh', backgroundColor: '#ccc' }}>
                    {/* Task timeline to be dynamically filled */}
                </div>
                <p>"Sleep is important. Ensure you're well-rested!"</p>
            </div>
        </div>
    );
}
