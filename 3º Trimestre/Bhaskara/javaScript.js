function click_calcular() {
    let valorA = Number(document.getElementById("a").value);
    let valorB = Number(document.getElementById("b").value);
    let valorC = Number(document.getElementById("c").value);

    if (valorA == "") alert("Informe o valor A");
    else if (valorB == "") alert("Informe o valor B");
    else if (valorC == "") alert("Informe o valor C");
    else {
        let delta = valorB ** 2 - 4 * valorA * valorC;
        let x1 = 0;
        let x2 = 0;

        if (delta < 0) alert(`Valor complexo`)
        else {
            x1 = (-b + Math.sqrt(delta)) / 2 * valorA;
            x2 = (-b - Math.sqrt(delta)) / 2 * valorA;
        }
        document.getElementById("valor").value = `X1: ${x1} X2: ${x2}`;
    }
}

function click_limpar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("valor").value = "";
}