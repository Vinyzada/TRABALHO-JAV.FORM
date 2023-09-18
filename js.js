/* SISTEMA DE FUNCTION

function soma(vetor){
    let soma = 0
    for (v of vetor){
        soma = soma + v
    }
    return soma;
}

let vet1 = [1, 2, 3, 4]
console.log(soma(vet1))

*/
function click_calcular(){
    const number1 = document.getElementById("valorA").value;
    const number2 = document.getElementById("valorB").value;

    if (number1 == ""){
        alert(`Informe o valor A`)
    }
    else if (number2 == ""){
        alert(`Informe o valor B`)
    }
    else{
        let soma = Number(number1) / (Number(number2)*Number(number2))
        document.getElementById("valor").value = soma.toFixed(1);

        if(soma <= 18.5){
            document.getElementById("classificacao").value  = "Baixo Peso"
            document.getElementById("classificacao").style.backgroundColor = "#ff6961"
        }
        else if (soma <= 24.9){
            document.getElementById("classificacao").value  = "Peso Normal"
            document.getElementById("classificacao").style.backgroundColor = "lightgreen"
        }
        else if (soma <= 29.9){
            document.getElementById("classificacao").value  = "SobrePeso"
            document.getElementById("classificacao").style.backgroundColor = "#ff6961"
        }
        else if (soma <= 34.9){
            document.getElementById("classificacao").value  = "Obesidade Nivel 1"
            document.getElementById("classificacao").style.backgroundColor = "red"
        }
        else if (soma <= 39.9){
            document.getElementById("classificacao").value  = "Obesidade Nibel 2"
            document.getElementById("classificacao").style.backgroundColor = "red"
        }
        else if (soma <= 40){
            document.getElementById("classificacao").value  = "Obesidade Nibel 3"
            document.getElementById("classificacao").style.backgroundColor = "red"
        }
    }
}
function limpar_valores(){
    document.getElementById("valorA").value = "";
    document.getElementById("valorB").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("classificacao").value = "";
    document.getElementById("classificacao").style.backgroundColor = "rgba(168, 168, 168, 0.466)"
}