const taskArray = tasks.tasks;
const grid = document.getElementsByClassName("textboxGrid")[0];

for (i=0; i<taskArray.length; i++) {

    const linkElement = document.createElement("div");
    linkElement.className = "linkElement";

    //TODO: taskArray needs to be preprocessed somehow
    linkElement.addEventListener("click", function () {
        window.location = taskArray[i]["path"];
    } )

    const h2 = document.createElement("h2");
    const link = document.createElement("a");
    link.href = taskArray[i]["path"];
    link.innerHTML = taskArray[i]["name"];

    h2.appendChild(link);
    linkElement.appendChild(h2);
    grid.appendChild(linkElement);

    console.log(grid.querySelectorAll(".linkElement")[i]);
    grid.querySelectorAll(".linkElement")[i].addEventListener("onclick", function () {

        window.location = taskArray[i]["path"];
    }, false);
}