import { Note } from "./note.js";
import { Storage } from "./storage.js";

function getTitle() {
  const noteTitle = document.getElementById("note-title");
  return noteTitle.value;
}

function getContent() {
  const noteText = document.getElementById("note-area");
  return noteText.value;
}

function addNotes(id, title, content) {
  let idCounter = 0;
  id = idCounter++;
  title = getTitle();
  content = getContent();
  const newNote = new Note(id, title, content);
  Storage.saveNotes(newNote);
}
let list = [];

function displayNotes() {
  const noteTitle = getTitle();
  if (noteTitle !== "") {
    list.push(noteTitle);
    displayList();
  }
}

function displayList() {
  const listContainer = document.getElementById("note-list");
  listContainer.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = list[i];
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      listItem.removeChild(deleteButton);
      listContainer.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);
  }
}

const saveBtn = document.getElementById("save-note");
saveBtn.addEventListener("click", test);

// ----------------Note Saver----------------------------------
function newNote() {
  addNotes();
  Storage.getNotes();
}

function test() {
  displayNotes();
  newNote();
}
