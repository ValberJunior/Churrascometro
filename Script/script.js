let resultado = document.getElementById("resultado");

//restaurar os dados digitados:

function restaurar(){

document.getElementById("adultos").value='';
document.getElementById("criancas").value='';
document.getElementById("cerveja").value='';
document.getElementById("alcool").value='';
document.getElementById("duracao").value='';
}


//função para calcular os dados digitados: 

function calcular(){
    
    if(document.getElementById("adultos").value==''){                      //Uma condicional para que não o usuário não envie nenhum campo vazio
        alert('Favor preencha todas as opções')
    } 
    else {
    let adultos = document.getElementById("adultos").value ;                // <<  encurtando o código, transferi os valores dos elementos para variaveis locais
    let criancas = document.getElementById("criancas").value ;
    let cerveja = document.getElementById("cerveja").value ;
    let alcool = document.getElementById("alcool").value ;
    let duracao = document.getElementById("duracao").value ;

    let qtdTotalCarne = carnePP(duracao) * adultos + 
    (carnePP(duracao) / 2 * criancas);
    
    let qtdTotalCerveja = cervejaPP(duracao) * cerveja;

    let qtdTotalBedidasA = bebidasA(duracao) * alcool;

    let qtdTotalBebidas = bebidasPP(duracao) * adultos + 
    (bebidasPP(duracao) / 2 * criancas);




    resultado.innerHTML = `<p onmouseover="clickOn(this)" onmouseout="clickOut(this)">${Math.ceil(((qtdTotalCarne / 100)* 75)/1000)} Kg de Carne</p>`;
    resultado.innerHTML += `<p onmouseover="clickOn(this)" onmouseout="clickOut(this)">${Math.ceil(((qtdTotalCarne / 100)* 10)/1000)} Kg de Asa de Frango</p>`; 
    resultado.innerHTML += `<p onmouseover="clickOn(this)" onmouseout="clickOut(this)">${Math.ceil(((qtdTotalCarne / 100)* 15)/1000)} Kg de Linguiça</p>`;                                //Adicionando o resultado no html
    resultado.innerHTML += `<p onmouseover="clickOn(this)" onmouseout="clickOut(this)">${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p onmouseover="clickOn(this)" onmouseout="clickOut(this)">${Math.ceil(qtdTotalBedidasA / 1000)} Litros de vodka ou Bebida quente.</p>`;
    resultado.innerHTML += `<p onmouseover="clickOn(this)" onmouseout="clickOut(this)">${Math.ceil(qtdTotalBebidas / 1000)} Litros de Refrigerante, Suco e(ou) Água Mineral</p><button id="delete" onclick="deleteAll()" onmouseover="mOn(this)" onmouseout="mOut(this)">Apagar Dados</button>`;
    

      }
}

function carnePP(duracao){                                              //<< Função para calcular carne por pessoa
    if(duracao >= 6){
        return 600;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){                                          //<< Função para calcular a quantidade de cerveja
    if(duracao >= 6){
        return 5250;
    } else{
        return 3500;
    }
}

function bebidasA(duracao){                        // << Função para calcular a quantidade de bebidas alcoólicas diferentes de cerveja;
    if(duracao >= 6){
        return 600;
    } else{
        return 400;
    }
}


function bebidasPP(duracao){                                     // << Função para calcular a quantidade de bebidas que nao sejam alcoolicas
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}


                                                                
function deleteAll( ){                                                     //Botão para apagar
    let confirmation = confirm("Deseja apagar os dados salvos?")

    if (confirmation){
        resultado.innerHTML = '';
        restaurar();
    }
}

//Eventos

//Eventos na div resultados e paragrafos
function clickOn(elemento){
    elemento.style.color="#FED000";
}
function clickOut(elemento){
    elemento.style.color="white";
}

//Botões
function mOn(elemento){
    elemento.style.backgroundColor="#FED000";
    elemento.style.color="#000000d3";
    elemento.style.fontSize="16px";
}
function mOut(elemento){
    elemento.style.backgroundColor="#000000d3";
    elemento.style.color="#FED000";
    elemento.style.fonteSize="13px";
}