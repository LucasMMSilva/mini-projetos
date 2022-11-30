/*let nameTask = document.getElementById('nameTask');
var storage = [];

const getStorage = ()=> JSON.parse(localStorage.getItem('todoList')) ?? [''];
const setStorage = (storage)=> localStorage.setItem('todoList',JSON.stringify(storage));

function createNewItem(index,task,status){
    const taskObj = document.createElement('label');
    if(nameTask.value != ''){
        taskObj.classList.add('task');
        taskObj.innerHTML = `
            <input type="checkbox" ${status} data-index=${index}>
            <label>${task}</label>
            <button data-index=${index}>&#215;</button>
        `;
        document.getElementById('taskList').appendChild(taskObj);
    }
}


nameTask.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        createNewItem(1,nameTask.value,"")
        nameTask.value = "";
    }
})*/