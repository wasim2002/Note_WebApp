const addBtn = document.querySelector(".addBtn")
const main = document.querySelector("main")

addBtn.addEventListener("click", createNote)

function createNote() {
    let note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="note_nav">
                <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
            </div>
            <div class="textarea">
                <textarea autofocus></textarea>
            </div>
    `

    main.appendChild(note)
    saveNote()  
    let deleteNote = note.querySelector(".fa-trash-can")
    let saveBtn = note.querySelector(".fa-floppy-disk")
    deleteNote.addEventListener("click", function () {
        note.remove()
        saveNote()
    })
    saveBtn.addEventListener("click", saveNote)

}
function saveNote() {
    const allNotes = document.querySelectorAll(".textarea textarea")
    let arr = JSON.parse(localStorage.getItem("notes")) || []
    // console.log(`1 - ${arr}`);
    allNotes.forEach((noteData) => {
        arr.push(noteData.value.trim())
    })
    // console.log(`2 - ${arr}`);
    localStorage.setItem("notes", JSON.stringify(arr))
}