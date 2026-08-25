let semafaro = "vermelho"
let podePassar = "verde"
let atencao = "amarelo"
let pare = "vermelho"

if(semafaro == podePassar){
    console.log("Pode passar")
}

if (semafaro == atencao){
    console.log("Atenção")
}

if  (semafaro == pare){
    console.log("Pare")
}

setInterval(function() {
    
    if(semafaro == "verde"){
        console.log("Pode passar")
    }

    if(semafaro == "amarelo"){
        console.log("Atenção")
    }

    if(semafaro == "vermelho"){
        console.log("Pare")
    }

    if(semafaro == "verde"){
        semafaro = "amarelo"
    } else if(semafaro == "amarelo"){
        semafaro = "vermelho"
    } else {
        semafaro = "verde"
    }
},3000)