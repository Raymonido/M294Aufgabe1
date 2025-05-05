let note = document.getElementById('addNote');

note.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addNote()
    };
})

let notes = [];

function addNote() {
    const NoteInput = document.getElementById('addNote');
    const text = NoteInput.value.trim();

    if( text === '') return;

    notes.push(text);
    NoteInput.value = '';

    renderNotes()
}

function renderNotes() {
    const container = document.getElementById('notes');
    container.innerHTML = '',

    notes.forEach((n, i) => {
        const card = document.createElement('div');
        card.className = 'card mb-2';

        const body = document.createElement('div');
        body.className = 'card-body';
        body.style.display = 'flex';
        body.style.flexDirection = 'row-reverse'
        body.style.justifyContent = 'space-between'


        const icon = document.createElement('img')
        icon.src = 'delete.png';
        icon.style.height = '50px'
        icon.textContent = 'Löschen'
        icon.onclick = () => removeNote(i);

        const title = document.createElement('h4');
        title.className = 'card-title';
        title.textContent = `${i + 1}. ${n}`;

       

        body.appendChild(icon)
        body.appendChild(title);
        card.append(body);
        container.appendChild(card);
    })
}

function removeNote(index) {
    notes.splice(index, 1)
    renderNotes()
}