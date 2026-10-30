function lisaaTehtava() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Kirjoita ensin jotain!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let poistaBtn = document.createElement("button");
    poistaBtn.textContent = "X";
    poistaBtn.className = "poista-btn";
    poistaBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(poistaBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
