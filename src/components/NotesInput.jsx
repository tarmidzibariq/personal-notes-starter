import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            title : '',
            body : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        const value = event.target.value;
        if (value.length <= 50) {
            this.setState(() => {
                return {
                    title: value
                }
            })
        }
    }
    onBodyChangeEventHandler(event){
        this.setState(() =>{
            return {
                body : event.target.value
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
    }


    render(){
        return (
            <div className='note-input'>
            <h2>Buat Catatan</h2>
            <form onSubmit={this.onSubmitEventHandler}>
                <p className='note-input__title__char-limit'>Sisa karakter: {50 - this.state.title.length}</p>
                <input className='note-input__title' value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Judul catatan..." />
                <textarea className='note-input__body' value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='Tulis catatanmu di sini...'></textarea>
                <button type="submit">Tambah</button>
            </form>
            </div>
        );
    }
}

export default NotesInput;