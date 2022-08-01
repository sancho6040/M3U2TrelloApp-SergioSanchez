const API_URL = 'https://my-json-server.typicode.com/sancho6040/M3U2TrelloApp-SergioSanchez';

axios.get(`${API_URL}/tasks`)
.then((res) => console.log(res.data))
.cath((error) => console.error(error))

const showAllTasks = data =>{
    data.map((task) => createTask(task))
}

const createTask = (Task) => {

    let newTask = document.createElement("article");
    newTask.classList.add("task");

    let taskTitle = document.createElement("h2");
    taskTitle.classList.add("task-title");
    taskTitle.innerHTML = Task.title;

    let taskResponsible = document.createElement("p");
    taskResponsible.classList.add("task-responsible");
    taskResponsible.innerHTML = `<span> Responsable: </span> ${Task.responsible}`;

    let taskDetails = document.createElement("p");
    taskDetails.classList.add("task-details");
    taskDetails.innerHTML = `<span> Detalles: </span> ${Task.details}`;

    let taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.innerHTML = `<span> plazo: </span> ${dateFormat(taskDeadline)}`;

    newTask.appendChild(taskTitle);
    newTask.appendChild(taskResponsible);
    newTask.appendChild(taskDetails);
    newTask.appendChild(taskDate);

    let columnToDo = document.querySelector("#to-do--container");
    let columnWorkingOn = document.querySelector("#working-on--container");
    let columnDone = document.querySelector("#done--container");


    if(task.state === "to-do"){
        columnToDo.appendChild(newTask);
    }
    if(task.state === "working-on"){
        columnWorkingOn.appendChild(newTask);
    }
    if(task.state === "done"){
        columnDone.appendChild(newTask);
    }
};