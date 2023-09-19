import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content.");
      return;
    }
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
  };
  const editNote = (note) => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content.");
    }
    console.log("editnote", currentNoteIndex);
    const updatedNotes = [...notes];
    updatedNotes[currentNoteIndex] = { title, content };
    setNotes(updatedNotes);
    setCurrentNoteIndex(null);
    setTitle("");
    setContent("");
  };
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    setCurrentNoteIndex(null);
  };

  return (
    <div className="App">
      <h1>Note Taking App</h1>
      <div className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {currentNoteIndex === null ? (
          <button onClick={addNote}>Add Note</button>
        ) : (
          <>
            <button onClick={editNote}>Edit Note</button>
            <button
              onClick={() => {
                setCurrentNoteIndex(null);
                setTitle("");
                setContent("");
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
      <div className="note-list">
        <h2>Notes</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <strong>{note.title}</strong>
              <p>{note.content}</p>
              <button
                onClick={() => {
                  console.log("index", index);
                  setCurrentNoteIndex(index);
                  setTitle(note.title);
                  setContent(note.content);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
