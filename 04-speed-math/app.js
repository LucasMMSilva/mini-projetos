const telaParametros1 = document.getElementById('param-1');
const telaParametros2 = document.getElementById('param-2');
const telaMain = document.getElementById('main');
const telaResult = document.getElementById('result');

telaParametros2.style.display = "none"
telaMain.style.display = "none"
telaResult.style.display = "none"


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