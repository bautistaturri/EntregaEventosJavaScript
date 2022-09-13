let contador = 0;
let h2Contador = document.querySelector("#contador")
let inputReset = document.querySelector("#reset");
h2Contador.innerHTML = contador;
console.log(inputReset);
inputReset.addEventListener('change',resetToNumber)


function incrementar(){
    contador +=1;
    actualizarContador();
}
function decrementar(){
    contador -=1;
    actualizarContador();
}
function actualizarContador(){
    h2Contador.innerHTML = contador;
}
function reset(){
    contador = 0;
    actualizarContador();
}

function resetToNumber(){
    const valueReset = inputReset.value;
    contador = valueReset;
    actualizarContador();
}