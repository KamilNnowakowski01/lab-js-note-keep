import Note from './Note.js';
import NoteManager from './NoteManager.js';

const noteManager = new NoteManager();

noteManager.deleteNotes()
noteManager.loadNotes();

const note1 = new Note("Zakupy", "Mleko, chleb, jajka", "yellow", false);
const note2 = new Note("Spotkanie", "Spotkanie z klientem o 14:00", "blue", true);
const note3 = new Note("Szkoła", "Zajecia 17:00", "blue", false);
const note4 = new Note("Dom", "Wynieść śmieci", "blue", false);

noteManager.addNote(note1);
noteManager.addNote(note2);
noteManager.addNote(note3);
noteManager.addNote(note4);

const allNotes = noteManager.getAllNotes();
console.log(allNotes);