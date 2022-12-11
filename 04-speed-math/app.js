const telaParametros1  =  document.getElementById('param-1');
const telaParametros2  =  document.getElementById('param-2');
const telaMain         =  document.getElementById('main');
const telaResult       =  document.getElementById('result');
let inputText          =  document.getElementById('inpText');
let adicao             =  document.getElementById('adicao');
let subtracao          =  document.getElementById('subtracao');
let multiplicacao      =  document.getElementById('multiplicacao');
let divisao            =  document.getElementById('divisao');
let numerador1         =  document.getElementById('num1');
let numerador2         =  document.getElementById('num2');
let operador           =  document.getElementById('operator');


let acertos = 0;
let erros   = 0;
let equacoes = [];
let randNum;
let numDigitos;
let repeticoes;
let resultado ;

telaParametros2.style.display = "none"
telaMain.style.display        = "none"
telaResult.style.display      = "none"


function getRadio(){return document.querySelector('input[name="dig"]:checked').value;}

function randomNumber(e){
    
    switch(e){
        case "d1":
            randNum = Math.floor(Math.random() * 10);
            break
        case "d2":
            randNum = Math.floor(Math.random() * 100);
            break
        case "d3":
            randNum = Math.floor(Math.random() * 1000);
            break
        case "d4":
            randNum = Math.floor(Math.random() * 10000);
            break
        case "d5":
            randNum = Math.floor(Math.random() * 100000);
            break
        default:
            break
    }
    return randNum
}

function next(){
    repeticoes = parseInt(inputText.value);
    if(repeticoes > 0){
        telaParametros1.style.display = "none"
        telaParametros2.style.display = "block"
        telaMain.style.display        = "none"
        telaResult.style.display      = "none"
    }
}
function start(){
    if(adicao.checked){equacoes.push('adicao')}
    if(subtracao.checked){equacoes.push('subtracao')}
    if(multiplicacao.checked){equacoes.push('multiplicacao')}
    if(divisao.checked){equacoes.push('divisao')}

    telaParametros1.style.display = "none"
    telaParametros2.style.display = "none"
    telaMain.style.display        = "block"
    telaResult.style.display      = "none"
    setInfo();
}
function calc(){

        if(inputText.value == resultado){
            acertos++;
        }else{
            erros++;
        }
        setInfo();
    
}

function setInfo(){
    let num1 = randomNumber(getRadio());
    let num2 = randomNumber(getRadio());
    let oper;
    let op;
    switch(equacoes[Math.floor(Math.random() * equacoes.length)]){
        case 'adicao':
            oper = '&#43'
            op = '+'
            break
        case 'subtracao':
            oper = '&#8722'
            op = '-'
            break
        case 'multiplicacao':
            oper = '&#215'
            op = '*'
            break
        case 'divisao':
            oper = '&#247'
            op = '/'
            break
    }
    resultado = eval(`${num1}${op}${num2}`) ;
    numerador1.innerHTML = num1;
    numerador2.innerHTML = num2;
    operador.innerHTML   = oper;
}

function result(){
    telaParametros1.style.display = "none"
    telaParametros2.style.display = "none"
    telaMain.style.display        = "none"
    telaResult.style.display      = "block"
}
function tryAgain(){


    telaParametros1.style.display = "none"
    telaParametros2.style.display = "none"
    telaMain.style.display        = "block"
    telaResult.style.display      = "none"
}
function createNew(){


    telaParametros1.style.display = "block"
    telaParametros2.style.display = "none"
    telaMain.style.display        = "none"
    telaResult.style.display      = "none"
}