let nameTask = document.getElementById('nameTask')

nameTask.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        localStorage.setItem('taskName',nameTask.value)
    }
})