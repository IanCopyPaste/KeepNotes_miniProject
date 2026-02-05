const btnClear = document.querySelector("#btnClear");
const btnSave = document.querySelector("#btnSave");
let txtMessage = document.querySelector("#txtMessage");
let notesContainer = document.querySelector(".notes-container");

btnClear.addEventListener("click", () => {
    txtMessage.value = "";
});

btnSave.addEventListener("click", () => {
    if (txtMessage.value === "") {
        alert("Please enter a statement");
        return;
    }

    const dotNote = document.createElement("div");
    dotNote.className = "note";

    const dotNoteContainer = document.createElement("div");
    dotNoteContainer.className = "mainNote-container";

    const pNote = document.createElement("p");
    pNote.className = "txtNote"
    pNote.textContent = txtMessage.value;

    const btnDel = document.createElement("button");
    btnDel.textContent = "Delete";
    btnDel.addEventListener("click", event => {
        event.stopPropagation();
        dotNote.remove();
    });

    dotNoteContainer.appendChild(pNote);
    dotNote.appendChild(dotNoteContainer);
    dotNote.appendChild(btnDel);
    notesContainer.appendChild(dotNote);

    txtMessage.value = "";
});

notesContainer.addEventListener("click", event => {
    const note = event.target.closest(".note").querySelector(".txtNote");
    if (!note) return;
    alert(note.textContent);
});