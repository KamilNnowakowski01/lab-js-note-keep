import Note from "./Note.js"

export default class NoteManager {
    constructor() {
      this.notes = [];
    }
  
    addNote(note) {
      this.notes.push(note);
      this.saveNotes();
    }
  
    editNote(index, updatedNote) {
      if (index >= 0 && index < this.notes.length) {
        this.notes[index] = updatedNote;
        this.saveNotes();
      } else {
        console.error("Index out of range");
      }
    }
  
    deleteNote(index) {
      if (index >= 0 && index < this.notes.length) {
        this.notes.splice(index, 1);
        this.saveNotes();
      } else {
        console.error("Index out of range");
      }
    }

    deleteNotes(){
      this.notes = [];
      this.saveNotes();
    }
  
    saveNotes() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    }
  
    loadNotes() {
      const storedNotes = localStorage.getItem("notes");
      if (storedNotes) {
        this.notes = JSON.parse(storedNotes).map(
          note =>
            new Note(
              note.title,
              note.content,
              note.color,
              note.pinned,
              new Date(note.createdAt)
            )
        );
      }
    }
  
    getAllNotes() {
      return this.notes;
    }
  }