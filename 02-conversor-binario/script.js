var inputAria     =  document.querySelector('#inputAria');
var selectInput   =  document.querySelector('#selectInput');

function convert(){
    if(selectInput.value == 'b-d'){
        inputAria.value = convertToDecimal().toString();
    }else if(selectInput.value == 'd-b'){
        inputAria.value = convertToBinary().toString();
    }
}
function convertToBinary(){
    let binaryArray = [];
    let newBinaryArray = [];
    let result = inputAria.value;
    while(result != 1){
        binaryArray.push(result%2);
        result = parseInt(result/2);
    }
    binaryArray.push(result);
    while(binaryArray.length != 0){
        newBinaryArray.push(binaryArray.pop());
    }
    return newBinaryArray.join('');
}
function convertToDecimal(){
    let binaryArray = inputAria.value.split('');
    let multiplicador = 1;
    let result = 0;
    while(binaryArray.length!=0){
        let aux = binaryArray.pop()
        if(aux == 1){
            result+=multiplicador
        }
        multiplicador*=2;
    }
    return result
}
