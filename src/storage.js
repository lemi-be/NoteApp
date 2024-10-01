export const Storage = {
  saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  },
  getNotes() {
    const savedNotes = localStorage.getItem("notes");
    // return savedNotes ? JSON.parse(savedNotes) : [];
    console.log(savedNotes ? JSON.parse(savedNotes) : "No file to show");
    console.log("Successfully saved");
  },
  deleteNotes() {
    localStorage.removeItem("notes");
    console.log("note removed successfully");
  },
};
