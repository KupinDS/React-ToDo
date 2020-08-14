import React from 'react';

export const Notes = ({ notes, onRemove }) => {
    return (
        <ul className="list-group animation">
            {notes.map(note => (
                <li
                    className="list-group-item note"
                    key={note.id}>

                    <div>
                        <p className="note__title">{note.title}</p>
                        <hr />
                        <p className="note__date">Дата создания: {note.date} </p>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => onRemove(note.id)}
                    >&times;</button>

                </li>
            ))}
        </ul>
    )
}