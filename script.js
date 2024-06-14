var participantes = [];

function addAmigos(){
    var nome = document.getElementById("nomeAmg").value.trim();

    if(nome){
        participantes.push(nome);
        document.getElementById("nomeAmg").value = "";

        if(amigosParticipantes.includes(nomeInput)){
            alert('Nome repetido');
        }
        else{
            document.getElementById("nomesAdd").value = participantes.join(", ")
        }
    }
}
