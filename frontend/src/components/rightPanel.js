function RightPanel({ tasks }) {
    return (
        <div style={{ width: '70%', padding: '1rem', backgroundColor: '#fff' }}>
            <h3>Task Grid</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gridGap: '1rem' }}>
                {tasks.map((task, index) => (
                    <div key={index} style={{ backgroundColor: task.color, height: '5rem' }}>
                        {task.name} ({task.hours} hrs)
                    </div>
                ))}
            </div>
        </div>
    );
}
