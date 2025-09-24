import React from 'react';

function NotesItemAction ({ id, onDelete, onArchive, archived}) {
    return (
        <div className='note-item__action'>
            <button className="note-item__delete-button" type="button" onClick={() => onDelete(id)}>Hapus</button>
            <button className="note-item__archive-button" type="button" onClick={() => onArchive(id)}>
                {archived ? 'Pindahkan' : 'Arsipkan'}
            </button>
        </div>
    );
}

export default NotesItemAction;
