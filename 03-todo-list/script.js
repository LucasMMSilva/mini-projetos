let nameTask = document.getElementById('nameTask');
var storage = [];

function getStorage(){
    storage = localStorage.getItem('banco').split(',');
}
function setStorage(e){
    localStorage.setItem('banco',e);
}

function createNewItem(index,task){
    const taskObj = document.createElement('div');
    taskObj.classList.add('task');
    taskObj.innerHTML = `<div data-index=${index}><label>${task}</label></div>`;
    document.getElementById('list').appendChild(taskObj); 
}

function insertTask(e){
    getStorage();
    storage.push(e);
    setStorage(storage);
    atualize();
}

function atualize(){
    getStorage()
    clear();
    showTaskList();
}

function showTaskList(){
    for(let i = 0; i < storage.length; i++){
        createNewItem(i,storage[i]);
    }
}

function clear(){
    const list = document.getElementById('list');
    list.innerHTML="";
}

nameTask.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        if(nameTask.value != ''){  
            getStorage();
            let name = nameTask.value.split('')
            name[0] = name[0].toUpperCase();
            name = name.join('')
            if(storage.indexOf(name) == -1){
                insertTask(name);
            }else{
                window.alert('Essa tarefa já existe!')
            }
            nameTask.value = "";
        }
    }
});

function clearAll(){
    storage = [];
    setStorage(storage);
    atualize();
}

function removeTask(e){
    getStorage();
    storage.splice(e,1);
    setStorage(storage);
    atualize();
}

function clickObj(e){
    const el = e.target;
    const indexObj = el.dataset.index;
    removeTask(indexObj);
}

document.getElementById('list').addEventListener('click', clickObj);

atualize();