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

function sorteio(){
    const mensagemErro= document.querySelector('.mensagemErro');
    if (participantes.length < 4) {
        mensagemErro.textContent='ERRO - insira mais de 4 nomes';
        return;
    }
    for (let i = participantes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [participantes[i], participantes[j]] = [participantes[j], participantes[i]];
    }
    let resultado = "<ul>";
    for (let i = 0; i < participantes.length; i++) {
        let proximo = (i + 1) % participantes.length;
        resultado += "<li>" + participantes[i] + " ➜ " + participantes[proximo] + "</li>";
    }
    resultado += "</ul>";

    document.querySelector(".duplas").innerHTML = resultado;
}