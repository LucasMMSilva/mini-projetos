var inputAria     =  document.querySelector('#inputAria');
var selectInput   =  document.querySelector('#selectInput');


function convert(){
    if(selectInput.value == 'b-d'){
        inputAria.value = '';
    }else if(selectInput.value == 'd-b'){
        inputAria.value = convertToBinary().toString();
    }
}
function convertToBinary(){
    let binaryArray = [];
    let newBinaryArray = [];
    let result = inputAria.value;
    while(result != 1){
        console.log(`Entranda: ${result}`)
        binaryArray.push(result%2)
        result = parseInt(result/2)
        
        console.log(`Resultado: ${result}`)
        console.log(`Resto: ${result%2}`)
        console.log('--------------------------------------------')
    }
    binaryArray.push(result);
    while(binaryArray.length != 0){
        newBinaryArray.push(binaryArray.pop());
    }
    console.log(`${inputAria.value} = ${newBinaryArray.join('')}`);
    return newBinaryArray.join('');
}
function convertToDecimal(){
   
}
