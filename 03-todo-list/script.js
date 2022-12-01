let nameTask = document.getElementById('nameTask');
var storage = [];

const getStorage = ()=> JSON.parse(localStorage.getItem('todoList')) ?? [''];
const setStorage = (storage)=> localStorage.setItem('todoList',JSON.stringify(storage));

function createNewItem(index,task){
    const taskObj = document.createElement('div');
    if(nameTask.value != ''){
        taskObj.classList.add('task');
        taskObj.innerHTML = `<label>${task}</label>`;
        document.getElementById('list').appendChild(taskObj);
    }
}

nameTask.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        let name = nameTask.value.split('')
        name[0] = name[0].toUpperCase();
        createNewItem(1,name.join(''));
        nameTask.value = "";
    }
})