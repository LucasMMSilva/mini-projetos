const telaParametros1 = document.getElementById('param-1');
const telaParametros2 = document.getElementById('param-2');
const telaMain = document.getElementById('main');
const telaResult = document.getElementById('result');

let inputText = document.getElementById('inpText');
let adicao = document.getElementById('adicao');
let subtracao = document.getElementById('subtracao');
let multiplicacao = document.getElementById('multiplicacao');
let divisao = document.getElementById('divisao');



telaParametros2.style.display = "none"
telaMain.style.display = "none"
telaResult.style.display = "none"

function getRadio(){return document.querySelector('input[name="dig"]:checked').value;}
function next(){


    telaParametros1.style.display = "none"
    telaParametros2.style.display = "block"
    telaMain.style.display = "none"
    telaResult.style.display = "none"
}
function start(){


    telaParametros1.style.display = "none"
    telaParametros2.style.display = "none"
    telaMain.style.display = "block"
    telaResult.style.display = "none"
}
function calc(){


    telaParametros1.style.display = "none"
    telaParametros2.style.display = "none"
    telaMain.style.display = "none"
    telaResult.style.display = "block"
}
function tryAgain(){


    telaParametros1.style.display = "none"
    telaParametros2.style.display = "none"
    telaMain.style.display = "block"
    telaResult.style.display = "none"
}
function createNew(){


    telaParametros1.style.display = "block"
    telaParametros2.style.display = "none"
    telaMain.style.display = "none"
    telaResult.style.display = "none"
}