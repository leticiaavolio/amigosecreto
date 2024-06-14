let participantes = [];

function addAmigos(){
    const mensagemErro= document.querySelector('.mensagemErro');
    var nome = document.getElementById("nomeAmg").value.trim();
 
    if (nome && !participantes.includes(nome)) {

        participantes.push(nome);

        document.getElementById("nomeAmg").value = "";
 
        document.getElementById("nomesAdd").value = participantes.join(", ");

        mensagemErro.textContent=''
    } else if (!nome) {
        mensagemErro.textContent='ERRO - insira um nome'
    } else if (participantes.includes(nome)) {
        mensagemErro.textContent='ERRO - nome repetido'
    }
}

function reiniciarSor(){
    participantes=[];

    document.querySelector('div.duplas').innerHTML='';

    document.querySelector('#nomesAdd').value= '';
}