function changeText() {
    document.getElementById("dynamicText").textContent = "The text has been changed dynamically!";
}

function changeStyle() {
    document.getElementById("dynamicText").classList.toggle("highlight");
}

function toggleElement() {
    let extraDiv = document.getElementById("extraElement");

    if (extraDiv.innerHTML === "") {
        extraDiv.innerHTML = "<p>This element was added!</p>";
    } else {
        extraDiv.innerHTML = "";
    }
}