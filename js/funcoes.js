function Inserir7(){
    document.getElementById("visor").value += 7;
}

function Inserir8(){
    document.getElementById("visor").value += 8;
}

function InserirMais(){
    document.getElementById("visor").value += "+";
}

function Inserir9(){
    document.getElementById("visor").value += 9;
}


function LimparVisor(){
    document.getElementById("visor").value = "" ;
}

function Inserir4(){
    document.getElementById("visor").value += 4;
}

function Inserir6(){
    document.getElementById("visor").value += 6;
}

function Inserir5(){
    document.getElementById("visor").value += 5;
}

function Inserir1(){
    document.getElementById("visor").value += 1;
}

function Inserir2(){
    document.getElementById("visor").value += 2;
}

function Inserir3(){
    document.getElementById("visor").value += 3;
}
function Inserir0(){
    document.getElementById("visor").value += 0;
}

function RaizQuadrada(){
    let numero = document.getElementById("visor").value;
    document.getElementById("visor").value = Math.sqrt(numero);

}

function Calcular(){
    //pegar o texto do visor
    let expressao = document.getElementById("visor.value");

}
//converter em expressão numérica e calcular
let resultado = eval(expressao);

//mostrar o resultado do calculo no visor 
document.getElementById("visor".value = resultado);





