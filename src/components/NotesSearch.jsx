import React from "react";

class NotesSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        const query = event.target.value;
        this.setState({ query });
        this.props.onSearch(query);
    }

    render() {
        return (
            <header className="note-app__header">
                <h1>Catatan Bariq</h1>
                <div className="note-search">
                    <input
                        type="text"
                        placeholder="Cari catatan..."
                        value={this.state.query}
                        onChange={this.onChangeHandler}
                    />
                </div>
            </header>
        );
    }
}
 
export default NotesSearch;