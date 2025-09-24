import React from 'react';
import NotesItemContent from './NotesItemContent';
import NotesItemAction from './NotesItemAction';
import { showFormattedDate } from '../utils/index.js';

function NotesItem ({title, createdAt, body, id, onDelete, onArchive, archived}){
    return (
        <div className='note-item'>
            <NotesItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <NotesItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
        </div>
    );
}

export default NotesItem;
