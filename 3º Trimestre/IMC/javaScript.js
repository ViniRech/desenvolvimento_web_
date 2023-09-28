function click_calcular() {
    let valorA = document.getElementById("peso").value;
    let valorB = document.getElementById("altura").value;

    if (valorA == "") alert("Informe o valor A");
    else if (valorB == "") alert("Informe o valor B");
    else {
        let resultado = Number(valorA) * Number(valorB) ** 2;
        document.getElementById("valor").value = `${resultado} kg/m²`;
    }
}

function click_limpar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("valor").value = "";
}