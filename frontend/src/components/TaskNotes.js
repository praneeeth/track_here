import React, { useState } from 'react';

function TaskNotes({ selectedTask }) {
    const [note, setNote] = useState('');

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    return (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Task Notes: {selectedTask.name}</h3>
            <textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Add your notes here..."
                style={{ width: '100%', height: '10rem', padding: '1rem' }}
            />
            <button style={{ marginTop: '1rem' }}>Save Note</button>
        </div>
    );
}

export default TaskNotes;
