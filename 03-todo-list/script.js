let nameTask = document.getElementById('nameTask')

nameTask.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        console.log(nameTask.value)
    }
})