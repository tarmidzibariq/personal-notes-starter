import React from "react";
import NotesItem from './NotesItem';

function NotesArsip ({ Notes, onDelete, onArchive, searchQuery }) {
    
    const filteredNotes = Notes.filter(note =>
        note.archived && note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredNotes.length === 0) {
        return (
            <section>
                <p className='notes-list__empty-message'>Tidak ada catatan di arsip</p>
            </section>
        );
    }

    return (
        <section>
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
        </section>
    );

}

export default NotesArsip;
