var inputAria     =  document.querySelector('#inputAria');
var selectInput   =  document.querySelector('#selectInput');
var romanicValue  =  {'':0,'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9,
                    'X':10,'XX':20,'XXX':30,'XL':40,'L':50,'LX':60,'LXX':70,'LXXX':80,'XC':90,
                    'C':100,'CC':200,'CCC':300,'CD':400,'D':500,'DC':600,'DCC':700,'DCCC':800,'CM':900,
                    'M':1000,'MM':2000,'MMM':3000};

function convert(){
    if(selectInput.value == 'ar-d'){
        inputAria.value = convertToDecimal().toString();
    }else if(selectInput.value == 'd-ar'){
        inputAria.value = convertToRoman().toString();
    }
}
function convertToRoman(){
    if(inputAria.value < 4000){
        let numeralArray = inputAria.value.split(''); 
        let varAux = 0;
        var romanAux = [];
        for(let i = 0;i < numeralArray.length;i++){
            for(let j = 0; j < (numeralArray.length-1)-varAux;j++){
                numeralArray[i]=parseInt((numeralArray[i]*10));  
            }
            romanAux.push(Object.keys(romanicValue).find(key => romanicValue[key] == numeralArray[i]))
            varAux++;
        }
        return romanAux.join('')
    }else{
        window.alert('Numero maximo é 3999, por favor tente um valor menor!')
        return ''
    }
}
function convertToDecimal(){
    let romanicArray = inputAria.value.toUpperCase().split('');
    
    let result = 0;
    for(let i = 0;i <= romanicArray.length-1;i++){
            if(romanicValue[romanicArray[i]]<romanicValue[romanicArray[i+1]]){
                result -= romanicValue[romanicArray[i]]     
            }else{
                result += romanicValue[romanicArray[i]];
            }

    }
    return result
}
