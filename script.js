var participantes = [];

function addAmigos(){
    var nome = document.getElementById("nomeAmg").value.trim();

    if(nome){
        participantes.push(nome);
        document.getElementById("nomeAmg").value = "";
        
        document.getElementById("nomesAdd").value = participantes.join(", ")
    }
}
