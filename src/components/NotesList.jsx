import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ Notes, onDelete, onArchive, searchQuery }) {
    const filteredNotes = Notes.filter(note =>
        !note.archived && note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredNotes.length === 0) {
        return (
            <>
                <p className='notes-list__empty-message'>Tidak ada catatan</p>
            </>
        );
    }

    return (
        <div className='notes-list'>
            {
                filteredNotes.map((Note) => (
                    <NotesItem
                    key={Note.id}
                    id={Note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    archived={Note.archived}
                    {...Note}/>
                ))
            }
        </div>
    );
}

export default NotesList;
