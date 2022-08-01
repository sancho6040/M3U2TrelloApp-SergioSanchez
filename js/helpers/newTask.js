const formulario = document.querySelector("#myModal");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    const formData = event.target;

    const data = {
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        details: formData.detailsTask.value,
        deadline: formData.deadline.value,
        //deadline: Number(moment().add(formData.deadlineTask.value, 'days').format('X')),//format X for unix timestamp //get the actual date and ad "input" number of days
        created: Number(moment().format("X")),
        state: "to-do"
    };

    axios.post(`${API_URL}/tasks`, data)//el parametro data lo sube a la API
    .then((res)=>{
        createTask(res.data);//crea la tarea de forma local
        formData.reset();
    })
    .catch((error) => console.error("myError =>", error))
})

//ultima clase vista # 17