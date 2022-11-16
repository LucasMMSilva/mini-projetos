var inputAria = document.querySelector('#inputAria');
var selectInput = document.querySelector('#selectInput').value;
var romanicValue = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
function convert(){
    if(selectInput.value == 'ar-d'){
        inputAria.value = convertToDecimal().toString();
    }else{

    }
    
}
function convertToDecimal(){
    let romanicArray = inputAria.value.toUpperCase().split('');
    
    let result = 0;
    for(let i = 0;i <= romanicArray.length-1;i++){
        if(romanicValue[romanicArray[i+1]]){
            if(romanicValue[romanicArray[i]]<romanicValue[romanicArray[i+1]]){
                result += romanicValue[romanicArray[i+1]] - romanicValue[romanicArray[i]]     
                i++;   
            }else{
                result += romanicValue[romanicArray[i]];
            }
        }else{
            result += romanicValue[romanicArray[i]];
        }
    }
    return result
}
