var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

//1.Tente implementar os eventos usando o método addEventListener.
var btnAdicionar = document.getElementsByName('adicionar')[0];
btnAdicionar.addEventListener('click', increment);

var btnSubtrair = document.getElementsByName('subtrair')[0];
btnSubtrair.addEventListener('click', decrement);

function increment(){
    
    //2.Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
    if(currentNumber >= 10){
        btnAdicionar.disabled = true;
    }
    else{
        btnAdicionar.disabled = false;
        btnSubtrair.disabled = false;
        currentNumber++;
    }

    //3.Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.
    // currentNumber++;
    // changeColor();

    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){

    //2.Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
    if(currentNumber <= 0){
        btnSubtrair.disabled = true;
    }
    else{
        btnAdicionar.disabled = false;
        btnSubtrair.disabled = false;
        currentNumber--;
    }

    //3.Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.
    // currentNumber--;
    // changeColor();
    
    currentNumberWrapper.innerHTML = currentNumber;
}

function changeColor(){
    if(currentNumber <= -1){     
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'black';
    }  
}
