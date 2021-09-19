console.log('Welcome');
showNotes();
//if user adds a note, add it to the localstorage.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});

// function to show element from localstorage
function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        <div class="card noteCard my-2 mx-2" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">Note ${index}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a NOte" section above to add notes.`;
    }
}

// function to delete note

function deleteNote(index){
    console.log('I am deleting', index);
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();         
}
    let search = document.getElementById('searchTxt');
    search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase(); 
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
let cardTxt = element.getElementsByTagName("p")[0].innerText;
if (cardTxt.includes(inputVal)) {
    element.style.display = 'block';
    //it can also be used as:
    // document.noteCard.style.backgroundColor = "red";
    element.style.backgroundColor = "orange";
    element.style.color = "#fff";
} 
else {
    // element.style.display = 'none';
    
}

    })
})
/* further features 
1. add title 
2. mark a note as Important 
3. Separate notes by user 
4. sync and host with to web server */