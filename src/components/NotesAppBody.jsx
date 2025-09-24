import React from 'react';
import NotesList from './NotesList';
import NotesInput from './NotesInput.jsx';
import { getInitialData} from '../utils/index.js';
import NotesSearch from './NotesSearch.jsx';
import NotesArsip from './NotesArsip.jsx';
class NotesAppBody extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            Notes: getInitialData(),
            searchQuery: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id){
        const Notes = this.state.Notes.filter(note => note.id !== id);
        this.setState({Notes});
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) =>{
            return {
                Notes:[
                    ...prevState.Notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt : new Date().toISOString(),
                        archived: false, 
                    }
                ]
            }
        });
    }

    onSearchHandler(query){
        this.setState({searchQuery: query});
    }

    onArchiveHandler(id){
        this.setState((prevState) => ({
            Notes: prevState.Notes.map(note =>
                note.id === id ? { ...note, archived: !note.archived } : note
            )
        }));
    }

    render() {
      return (
        <div className='note-app__body'>
            <NotesSearch onSearch={this.onSearchHandler} />
            <NotesInput addNotes={this.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NotesList Notes={this.state.Notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} searchQuery={this.state.searchQuery} />
            <h2>Arsip</h2>
            <NotesArsip Notes={this.state.Notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} searchQuery={this.state.searchQuery} />
        </div>
      )
    }
}

// function NotesAppBody () {
//     const Notes = getInitialData();

//     return (
        // <div className='note-app__body'>
        //     <h2>Catatan Aktif</h2>
        //     <NotesList Notes={Notes} />
        // </div>
//     );
// }

export default NotesAppBody;
