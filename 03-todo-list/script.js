let nameTask = document.getElementById('nameTask');
var storage = [];

function getStorage(){
    storage = localStorage.getItem('banco').split(',');
}
function setStorage(){
    localStorage.setItem('banco',storage);
}

function createNewItem(index,task){
    const taskObj = document.createElement('div');
    taskObj.classList.add('task');
    taskObj.innerHTML = `<label>${task}</label>`;
    document.getElementById('list').appendChild(taskObj); 
}

function insertTask(e){
    getStorage();
    storage.push(e);
    setStorage();
    atualize();
}

function atualize(){
    clear();
    showTaskList();
}

function showTaskList(){
    for(let i = 0; i < storage.length; i++){
        createNewItem(i,storage[i]);
        console.log(i,storage[i])
    }
}

function clear(){
    const list = document.getElementById('list');
    list.innerHTML="";
}

nameTask.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        if(nameTask.value != ''){
            let name = nameTask.value.split('')
            name[0] = name[0].toUpperCase();
            insertTask(name.join(''));
            nameTask.value = "";
        }
    }
});

function clearAll(){
    storage = [];
    setStorage();
    atualize();
}

this.atualize();